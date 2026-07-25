import { NextResponse } from "next/server";

import ConsultationNotification from "@/emails/ConsultationNotification";
import EnquiryAcknowledgement from "@/emails/EnquiryAcknowledgement";
import { consultationSchema } from "@/lib/validations/consultation";
import { getClientKey, isRateLimited } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";
import { ADMIN_EMAIL, sendEmail } from "@/lib/resend";

export async function POST(request: Request) {
  if (isRateLimited(`consultation:${getClientKey(request)}`)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = consultationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.company_website) {
    return NextResponse.json({ success: true });
  }

  const consultation = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    company: parsed.data.company,
    topic: parsed.data.topic,
    preferredDate: parsed.data.preferredDate,
    preferredTime: parsed.data.preferredTime,
    notes: parsed.data.notes,
  };

  await prisma.consultationRequest.create({ data: consultation });

  if (ADMIN_EMAIL) {
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: `New consultation request from ${consultation.name}`,
      react: ConsultationNotification(consultation),
    });
  }
  await sendEmail({
    to: consultation.email,
    subject: "We received your consultation request — OJTech",
    react: EnquiryAcknowledgement({ name: consultation.name, context: "consultation request" }),
  });

  // TODO(backend): consider wiring a real scheduling provider (e.g. Calendly)
  //   here instead of the manual preferred-date/time request flow.

  return NextResponse.json({ success: true });
}
