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

interface QuoteNotificationProps {
  fullName: string;
  company: string;
  projectType: string;
  requirements: string;
  budget: string;
  timeline: string;
  email: string;
  phone?: string;
}

export default function QuoteNotification({
  fullName,
  company,
  projectType,
  requirements,
  budget,
  timeline,
  email,
  phone,
}: QuoteNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New quote request from {fullName}</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fc" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "32px",
            margin: "40px auto",
            maxWidth: "560px",
          }}
        >
          <Heading style={{ fontSize: "20px", color: "#211f3d" }}>
            New Quote Request
          </Heading>
          <Section>
            <Text style={{ color: "#46456f" }}>
              <strong>Name:</strong> {fullName}
            </Text>
            <Text style={{ color: "#46456f" }}>
              <strong>Company:</strong> {company}
            </Text>
            <Text style={{ color: "#46456f" }}>
              <strong>Project Type:</strong> {projectType}
            </Text>
            <Text style={{ color: "#46456f" }}>
              <strong>Budget:</strong> {budget}
            </Text>
            <Text style={{ color: "#46456f" }}>
              <strong>Timeline:</strong> {timeline}
            </Text>
            <Text style={{ color: "#46456f" }}>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text style={{ color: "#46456f" }}>
                <strong>Phone:</strong> {phone}
              </Text>
            )}
            <Text style={{ color: "#46456f" }}>
              <strong>Requirements:</strong>
              <br />
              {requirements}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
