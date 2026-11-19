<?php

declare(strict_types=1);

// Shared config + helpers for the form endpoints in this folder. PHP files
// are executed by the web server, never served as source, so it's safe to
// keep these secrets here (same as any normal PHP app config).

const RESEND_API_KEY = 'YOUR_RESEND_API_KEY';
const FROM_EMAIL = 'Olamitobi Technologies <info@olamitobitechnologies.com.ng>';
const ADMIN_EMAIL = 'admin@example.com';

// TEMPORARY fallback while olamitobitechnologies.com.ng is still "Pending"
// in Resend (DNS records not verified yet -- unverified domains can't send
// at all). Remove send_via_gmail_smtp() and this fallback once the Resend
// dashboard shows the domain as "Verified".
const GMAIL_USER = 'you@gmail.com';
const GMAIL_APP_PASSWORD = 'YOUR_GMAIL_APP_PASSWORD';

require_once __DIR__ . '/vendor/phpmailer/Exception.php';
require_once __DIR__ . '/vendor/phpmailer/SMTP.php';
require_once __DIR__ . '/vendor/phpmailer/PHPMailer.php';

use PHPMailer\PHPMailer\Exception as PHPMailerException;
use PHPMailer\PHPMailer\PHPMailer;

function require_post(): void
{
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        json_response(false, 'Method not allowed', 405);
    }
}

function read_json_body(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode((string) $raw, true);
    return is_array($data) ? $data : [];
}

function json_response(bool $success, string $message = '', int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

/** Trims a value and strips characters that could be used for header injection. */
function clean(mixed $value): string
{
    return trim(str_replace(["\r", "\n"], '', (string) $value));
}

function send_via_resend(string $to, string $subject, string $body): bool
{
    $payload = json_encode([
        'from' => FROM_EMAIL,
        'to' => [$to],
        'subject' => $subject,
        'text' => $body,
    ]);

    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . RESEND_API_KEY,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => $payload,
    ]);

    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($response === false || $status >= 300) {
        error_log('[mailer] resend failed for "' . $subject . '" to ' . $to . ': ' . ($error ?: $response));
        return false;
    }

    return true;
}

function send_via_gmail_smtp(string $to, string $subject, string $body): bool
{
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = GMAIL_USER;
        $mail->Password = GMAIL_APP_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->Timeout = 10;

        $mail->setFrom(GMAIL_USER, 'Olamitobi Technologies');
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->isHTML(false);

        $mail->send();
        return true;
    } catch (PHPMailerException $e) {
        error_log('[mailer] gmail smtp fallback failed for "' . $subject . '" to ' . $to . ': ' . $mail->ErrorInfo);
        return false;
    }
}

/**
 * Last-resort fallback: hands off to the server's own local mail transport
 * (Exim/Sendmail) instead of an external API or SMTP connection. This is
 * the option least likely to be blocked by shared-hosting network
 * restrictions, since it never makes an outbound connection at all.
 */
function send_via_native_mail(string $to, string $subject, string $body): bool
{
    $headers = "From: Olamitobi Technologies <info@olamitobitechnologies.com.ng>\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n";

    $ok = @mail($to, $subject, $body, $headers);
    if (!$ok) {
        error_log('[mailer] native mail() failed for "' . $subject . '" to ' . $to);
    }

    return $ok;
}

/**
 * Best-effort email: tries Resend first, then Gmail SMTP, then the server's
 * native mail() as a last resort. Returns true/false, never throws --
 * callers should still report success to the visitor even if all three
 * fail, a delivery hiccup shouldn't surface as a form error.
 */
function send_mail(string $to, string $subject, string $body): bool
{
    if (send_via_resend($to, $subject, $body)) {
        return true;
    }

    if (send_via_gmail_smtp($to, $subject, $body)) {
        return true;
    }

    return send_via_native_mail($to, $subject, $body);
}
