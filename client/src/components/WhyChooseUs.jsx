// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

// ================= Styled Components =================

const SectionWrapper = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors?.bgDark || "#1A110E"};
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors?.gold || "#D4A017"};
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.cream || "#FFF8EC"};
  margin: 0;
`;

const Underline = styled.div`
  width: 64px;
  height: 4px;
  border-radius: 999px;
  margin: 1rem auto 0;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors?.gold || "#D4A017"},
    ${({ theme }) => theme.colors?.red || "#C8102E"}
  );
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: #33211B;
  border: 1px solid rgba(255, 248, 236, 0.08);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4a3a2c, #1A110E);
  border-radius: 50%;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors?.gold || "#D4A017"};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.cream || "#FFF8EC"};
  margin: 0 0 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 248, 236, 0.7);
  margin: 0;
  /* Applying the Inter font specifically for paragraphs if you want high readability */
  font-family: 'Inter', system-ui, sans-serif;
`;

// ================= Main Component =================

const features = [
  {
    id: 1,
    icon: "🍫", // You can swap these with actual SVGs or FontAwesome icons
    title: "Premium Ingredients",
    description: "We source only the finest cocoa and purest ingredients to ensure every bite delivers unparalleled richness and flavor.",
  },
  {
    id: 2,
    icon: "🏭",
    title: "Crafted Since 1986",
    description: "With decades of confectionery mastery, our heritage recipes have been perfected to bring you classic tastes that stand the test of time.",
  },
  {
    id: 3,
    icon: "✨",
    title: "Artisanal Quality",
    description: "Every toffee, éclair, and chocolate is crafted with meticulous attention to detail, ensuring a perfect texture and melt-in-your-mouth experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper>
      <ContentContainer>
        <HeaderBlock>
          <Eyebrow>The Rainbow Gold Difference</Eyebrow>
          <Title>Why Choose Rainbow?</Title>
          <Underline />
        </HeaderBlock>

        <Grid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <IconWrapper>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </Grid>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default WhyChooseUs;