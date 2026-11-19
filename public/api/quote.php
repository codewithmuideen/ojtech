<?php

declare(strict_types=1);

require_once __DIR__ . '/config.php';

require_post();
$data = read_json_body();

if (clean($data['company_website_confirm'] ?? '') !== '') {
    json_response(true);
}

$fullName = clean($data['fullName'] ?? '');
$role = clean($data['role'] ?? '');
$company = clean($data['company'] ?? '');
$industry = clean($data['industry'] ?? '');
$website = clean($data['website'] ?? '');
$projectType = clean($data['projectType'] ?? '');
$requirements = trim((string) ($data['requirements'] ?? ''));
$budget = clean($data['budget'] ?? '');
$timeline = clean($data['timeline'] ?? '');
$email = clean($data['email'] ?? '');
$phone = clean($data['phone'] ?? '');

if (
    strlen($fullName) < 2
    || strlen($company) < 2
    || $projectType === ''
    || strlen($requirements) < 20
    || $budget === ''
    || $timeline === ''
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    json_response(false, 'Please check your details and try again.', 400);
}

$body = implode("\n", [
    "Name: $fullName",
    'Role: ' . ($role ?: '-'),
    "Company: $company",
    'Industry: ' . ($industry ?: '-'),
    'Website: ' . ($website ?: '-'),
    "Project type: $projectType",
    "Budget: $budget",
    "Timeline: $timeline",
    "Email: $email",
    'Phone: ' . ($phone ?: '-'),
    '',
    'Requirements:',
    $requirements,
]);

send_mail(ADMIN_EMAIL, "New quote request from $fullName", $body);
send_mail(
    $email,
    'We received your quote request — Olamitobi Technologies',
    "Hi $fullName,\n\nThanks for your quote request. Our team will review your requirements and follow up by email within a few hours.\n\n— Olamitobi Technologies"
);

json_response(true);
