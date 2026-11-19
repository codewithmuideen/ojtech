<?php

declare(strict_types=1);

require_once __DIR__ . '/config.php';

require_post();
$data = read_json_body();

// Honeypot -- bots that fill every field trip this. Report success so they
// don't learn to leave it empty.
if (clean($data['company_website'] ?? '') !== '') {
    json_response(true);
}

$name = clean($data['name'] ?? '');
$email = clean($data['email'] ?? '');
$phone = clean($data['phone'] ?? '');
$company = clean($data['company'] ?? '');
$service = clean($data['service'] ?? '');
$budget = clean($data['budget'] ?? '');
$timeline = clean($data['timeline'] ?? '');
$message = trim((string) ($data['message'] ?? ''));

if (strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($message) < 10) {
    json_response(false, 'Please check your details and try again.', 400);
}

$body = implode("\n", [
    "Name: $name",
    "Email: $email",
    'Phone: ' . ($phone ?: '-'),
    'Company: ' . ($company ?: '-'),
    'Service: ' . ($service ?: '-'),
    'Budget: ' . ($budget ?: '-'),
    'Timeline: ' . ($timeline ?: '-'),
    '',
    'Message:',
    $message,
]);

send_mail(ADMIN_EMAIL, "New contact enquiry from $name", $body);
send_mail(
    $email,
    'We received your message — Olamitobi Technologies',
    "Hi $name,\n\nThanks for reaching out to Olamitobi Technologies. We've received your message and will get back to you within a few hours.\n\n— Olamitobi Technologies"
);

json_response(true);
