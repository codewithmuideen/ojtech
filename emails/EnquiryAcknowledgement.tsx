import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EnquiryAcknowledgementProps {
  name: string;
  /** e.g. "message", "quote request", "consultation request" */
  context: string;
}

export default function EnquiryAcknowledgement({
  name,
  context,
}: EnquiryAcknowledgementProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your {context} — Olamitobi Technologies</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#17162a" }}>
        <Container
          style={{
            backgroundColor: "#211f3d",
            borderRadius: "12px",
            padding: "32px",
            margin: "40px auto",
            maxWidth: "560px",
          }}
        >
          <Heading style={{ fontSize: "20px", color: "#ffffff" }}>
            Thanks, {name} — we&apos;ve got your {context}
          </Heading>
          <Section>
            <Text style={{ color: "rgba(255,255,255,0.7)" }}>
              A member of the Olamitobi Technologies team will review it and get back to
              you shortly. If your request is time-sensitive, feel free to reply
              directly to this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
