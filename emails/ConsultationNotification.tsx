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

interface ConsultationNotificationProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  topic: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}

export default function ConsultationNotification({
  name,
  email,
  phone,
  company,
  topic,
  preferredDate,
  preferredTime,
  notes,
}: ConsultationNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New consultation request from {name}</Preview>
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
            New Consultation Request
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
            <Text style={{ color: "#46456f" }}>
              <strong>Topic:</strong> {topic}
            </Text>
            {(preferredDate || preferredTime) && (
              <Text style={{ color: "#46456f" }}>
                <strong>Preferred time:</strong> {preferredDate} {preferredTime}
              </Text>
            )}
            {notes && (
              <Text style={{ color: "#46456f" }}>
                <strong>Notes:</strong>
                <br />
                {notes}
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
