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

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  phone,
  company,
  service,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact enquiry from {name}</Preview>
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
            New Contact Enquiry
          </Heading>
          <Section>
            <Text style={{ color: "#46456f" }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ color: "#46456f" }}>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text style={{ color: "#46456f" }}>
                <strong>Phone:</strong> {phone}
              </Text>
            )}
            {company && (
              <Text style={{ color: "#46456f" }}>
                <strong>Company:</strong> {company}
              </Text>
            )}
            {service && (
              <Text style={{ color: "#46456f" }}>
                <strong>Service:</strong> {service}
              </Text>
            )}
            <Text style={{ color: "#46456f" }}>
              <strong>Message:</strong>
              <br />
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
