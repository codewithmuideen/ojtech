<?php

declare(strict_types=1);

require_once __DIR__ . '/config.php';

require_post();
$data = read_json_body();

if (clean($data['company_website'] ?? '') !== '') {
    json_response(true);
}

$name = clean($data['name'] ?? '');
$email = clean($data['email'] ?? '');
$phone = clean($data['phone'] ?? '');
$company = clean($data['company'] ?? '');
$topic = clean($data['topic'] ?? '');
$preferredDate = clean($data['preferredDate'] ?? '');
$preferredTime = clean($data['preferredTime'] ?? '');
$notes = trim((string) ($data['notes'] ?? ''));

if (
    strlen($name) < 2
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || strlen($topic) < 2
    || $preferredDate === ''
    || $preferredTime === ''
) {
    json_response(false, 'Please check your details and try again.', 400);
}

$body = implode("\n", [
    "Name: $name",
    "Email: $email",
    'Phone: ' . ($phone ?: '-'),
    'Company: ' . ($company ?: '-'),
    "Topic: $topic",
    "Preferred date: $preferredDate",
    "Preferred time: $preferredTime",
    '',
    'Notes:',
    $notes ?: '-',
]);

send_mail(ADMIN_EMAIL, "New consultation request from $name", $body);
send_mail(
    $email,
    'We received your consultation request — Olamitobi Technologies',
    "Hi $name,\n\nThanks for requesting a consultation. We'll confirm your preferred slot by email within a few hours.\n\n— Olamitobi Technologies"
);

json_response(true);
