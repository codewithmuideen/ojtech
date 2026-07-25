import { NextResponse } from "next/server";

import NewsletterConfirmation from "@/emails/NewsletterConfirmation";
import { newsletterSchema } from "@/lib/validations/newsletter";
import { getClientKey, isRateLimited } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/resend";

export async function POST(request: Request) {
  if (isRateLimited(`newsletter:${getClientKey(request)}`)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await prisma.newsletterSubscriber.upsert({
    where: { email: parsed.data.email },
    update: { isActive: true, unsubscribedAt: null },
    create: { email: parsed.data.email },
  });

  await sendEmail({
    to: parsed.data.email,
    subject: "You're subscribed — OJTech",
    react: NewsletterConfirmation(),
  });

  return NextResponse.json({ success: true });
}
