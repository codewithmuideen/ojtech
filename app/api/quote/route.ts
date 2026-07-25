import { NextResponse } from "next/server";

import QuoteNotification from "@/emails/QuoteNotification";
import EnquiryAcknowledgement from "@/emails/EnquiryAcknowledgement";
import { quoteSchema } from "@/lib/validations/quote";
import { getClientKey, isRateLimited } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";
import { ADMIN_EMAIL, sendEmail } from "@/lib/resend";

export async function POST(request: Request) {
  if (isRateLimited(`quote:${getClientKey(request)}`)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = quoteSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.company_website_confirm) {
    return NextResponse.json({ success: true });
  }

  const quote = {
    fullName: parsed.data.fullName,
    role: parsed.data.role,
    company: parsed.data.company,
    industry: parsed.data.industry,
    website: parsed.data.website,
    projectType: parsed.data.projectType,
    requirements: parsed.data.requirements,
    budget: parsed.data.budget,
    timeline: parsed.data.timeline,
    email: parsed.data.email,
    phone: parsed.data.phone,
  };

  await prisma.quoteRequest.create({ data: quote });

  if (ADMIN_EMAIL) {
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: `New quote request from ${quote.fullName}`,
      react: QuoteNotification(quote),
    });
  }
  await sendEmail({
    to: quote.email,
    subject: "We received your quote request — OJTech",
    react: EnquiryAcknowledgement({ name: quote.fullName, context: "quote request" }),
  });

  return NextResponse.json({ success: true });
}
