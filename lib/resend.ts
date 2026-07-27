import { Resend } from "resend";
import type { ReactElement } from "react";

/**
 * Returns a Resend client, or null when RESEND_API_KEY isn't configured.
 */
export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

// Falls back to Resend's shared sandbox sender, which works without a
// verified domain but can only deliver to the Resend account's own email.
export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Olamitobi Technologies <onboarding@resend.dev>";

export const ADMIN_EMAIL = process.env.RESEND_ADMIN_EMAIL;

interface SendEmailArgs {
  to: string;
  subject: string;
  react: ReactElement;
}

/**
 * Best-effort email send: never throws. Form submissions must succeed and
 * persist to the database even if Resend is unreachable, unconfigured, or
 * (as is the case without a verified sending domain) rejects the recipient.
 */
export async function sendEmail({ to, subject, react }: SendEmailArgs): Promise<void> {
  const resend = getResendClient();
  if (!resend) {
    console.warn(`[email] RESEND_API_KEY not set — skipped sending "${subject}" to ${to}`);
    return;
  }

  const { error } = await resend.emails.send({ from: FROM_EMAIL, to, subject, react });
  if (error) {
    console.error(`[email] failed to send "${subject}" to ${to}:`, error);
  }
}
