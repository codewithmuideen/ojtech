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

export default function NewsletterConfirmation() {
  return (
    <Html>
      <Head />
      <Preview>You&apos;re subscribed to Olamitobi Technologies insights</Preview>
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
            You&apos;re subscribed
          </Heading>
          <Section>
            <Text style={{ color: "rgba(255,255,255,0.7)" }}>
              Thanks for subscribing to Olamitobi Technologies insights. You&apos;ll
              hear from us occasionally with practical thinking on software,
              cloud, AI, and digital transformation — no spam.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
