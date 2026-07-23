// pages/Contact.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Form from "../components/Form.jsx";

// ================= Styled Components =================

const PageWrapper = styled.div`
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
  background-color: #FFF8EC; /* Matched the cream theme */
  min-height: 100vh;
`;

/* --- Dark Chocolate Hero Section for Contact --- */
const HeroSection = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #1A110E 0%, #3b1c10 50%, #2b1a13 100%);
  padding: 6rem 1.5rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Subtle background glow effect to match the About Us Hero */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(212, 160, 23, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1.25rem 2.5rem;
  }
`;

const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #FFF8EC; /* Cream text on dark background */
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: #e0c9a6; /* Soft gold/tan for readability */
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

/* --- Main Content Container --- */
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 3rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.25rem;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    flex-direction: column; /* Forces vertical stacking on very small screens */
  }
`;

const FormColumn = styled.div`
  flex: 1 1 500px;

  @media (max-width: 480px) {
    flex: 1 1 100%; /* Ensures it doesn't overflow mobile boundaries */
  }
`;

const InfoColumn = styled.div`
  flex: 1 1 300px;

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

const InfoBlock = styled.div`
  background-color: #ffffff; /* Contrast against the cream background */
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(59, 28, 16, 0.05);
  border: 1px solid rgba(74, 58, 44, 0.05);

  @media (max-width: 480px) {
    padding: 1.75rem;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: #3b1c10;
  margin: 0 0 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 0 0 1.25rem;
  }
`;

const InfoRow = styled.p`
  font-size: 0.95rem;
  color: #5A5049;
  line-height: 1.7;
  margin: 0 0 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const InfoLabel = styled.span`
  display: block;
  font-weight: 700;
  color: #C8102E; /* Brand Red for labels */
  margin-bottom: 0.25rem;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 3.5rem;
  box-shadow: 0 10px 30px rgba(59, 28, 16, 0.08);

  @media (max-width: 768px) {
    height: 320px;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    height: 250px;
    margin-top: 2.5rem;
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

// ================= Data =================

const contactFields = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Your name",
    required: true,
    row: 1,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+91 00000 00000",
    row: 1,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "What's this about?",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell us more...",
    required: true,
  },
];

// ================= Main Component =================

const Contact = () => {
  const companyAddress =
    "Plot No. A-66/3, Anand Nagar Additional MIDC, Ambernath (E) 421506, District - Thane, MH, India";

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    companyAddress,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <PageWrapper>
      {/* Dark Hero Section matching About Us */}
      <HeroSection>
        <PageTitle>Get in Touch</PageTitle>
        <PageSubtitle>
          Have a question about our products or want to place an order? Send us a
          message and our team will get back to you.
        </PageSubtitle>
      </HeroSection>

      <Container>
        <ContentGrid>
          <FormColumn>
            <Form
              fields={contactFields}
              submitLabel="Send Message"
              onSubmit={(data) => console.log("Contact form:", data)}
            />
          </FormColumn>

          <InfoColumn>
            <InfoBlock>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoRow>
                <InfoLabel>Address</InfoLabel>
                {companyAddress}
              </InfoRow>
              <InfoRow>
                <InfoLabel>Phone</InfoLabel>
                +91-9820-556-556
              </InfoRow>
              <InfoRow>
                <InfoLabel>Email</InfoLabel>
                rainbowgold777@yahoo.com
              </InfoRow>
              <InfoRow>
                <InfoLabel>Website</InfoLabel>
                www.rainbowgoldindia.com
              </InfoRow>
            </InfoBlock>
          </InfoColumn>
        </ContentGrid>
        
        <MapWrapper>
          <MapIframe
            src={mapSrc}
            title="Rainbow Confectionery Works Location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapWrapper>
      </Container>
    </PageWrapper>
  );
};

export default Contact;