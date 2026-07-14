// pages/Contact.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Form from "../components/Form";

const Wrapper = styled.div`
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #3b1c10;
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  color: #6b5c4e;
  margin-bottom: 2.5rem;
`;

const ContentGrid = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`;

const FormColumn = styled.div`
  flex: 1 1 500px;
`;

const InfoColumn = styled.div`
  flex: 1 1 300px;
`;

const InfoBlock = styled.div`
  background-color: #fdf1de;
  border-radius: 12px;
  padding: 2rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #3b1c10;
  margin: 0 0 1.25rem;
`;

const InfoRow = styled.p`
  font-size: 0.9rem;
  color: #6b5c4e;
  line-height: 1.7;
  margin: 0 0 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  display: block;
  font-weight: 600;
  color: #8a4a1f;
  margin-bottom: 0.15rem;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2.5rem;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

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

const Contact = () => {
  const companyAddress =
    "Plot No. A-66/3, Anand Nagar Additional MIDC, Ambernath (E) 421506, District - Thane, MH, India";

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    companyAddress,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <Wrapper>
      <PageTitle>Get in Touch</PageTitle>
      <PageSubtitle>
        Have a question about our products or want to place an order? Send us a
        message and we'll get back to you.
      </PageSubtitle>

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
    </Wrapper>
  );
};

export default Contact;
