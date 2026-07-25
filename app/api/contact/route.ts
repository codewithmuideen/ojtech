import { NextResponse } from "next/server";

import ContactNotification from "@/emails/ContactNotification";
import EnquiryAcknowledgement from "@/emails/EnquiryAcknowledgement";
import { contactSchema } from "@/lib/validations/contact";
import { getClientKey, isRateLimited } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";
import { ADMIN_EMAIL, sendEmail } from "@/lib/resend";

export async function POST(request: Request) {
  if (isRateLimited(`contact:${getClientKey(request)}`)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.company_website) {
    // Honeypot tripped — silently report success so bots don't learn.
    return NextResponse.json({ success: true });
  }

  const enquiry = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    company: parsed.data.company,
    service: parsed.data.service,
    budget: parsed.data.budget,
    timeline: parsed.data.timeline,
    message: parsed.data.message,
  };

  await prisma.contactEnquiry.create({ data: { ...enquiry, type: "GENERAL" } });

  if (ADMIN_EMAIL) {
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: `New contact enquiry from ${enquiry.name}`,
      react: ContactNotification(enquiry),
    });
  }
  await sendEmail({
    to: enquiry.email,
    subject: "We received your message — OJTech",
    react: EnquiryAcknowledgement({ name: enquiry.name, context: "message" }),
  });

  return NextResponse.json({ success: true });
}
