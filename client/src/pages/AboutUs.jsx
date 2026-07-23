// eslint-disable-next-line no-unused-vars
import React from "react";
import styled, { keyframes } from "styled-components";
import ImageStrip from "../Components/ImageStrip.jsx";

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ================= Styled Components =================

const AboutWrapper = styled.div`
  background-color: #FFF8EC; /* Cream Background */
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1A110E 0%, #3b1c10 50%, #2b1a13 100%);
  perspective: 1000px;
  padding: 4rem 1.5rem;
  overflow: hidden;

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

  @media (max-width: 480px) {
    min-height: 50vh;
    padding: 6rem 1rem 3rem 1rem; /* Extra top padding to account for fixed navbar */
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: #FFF8EC;
  max-width: 800px;
  transform-style: preserve-3d;
  animation: ${fadeIn} 1s ease-out forwards;
  z-index: 2;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #D4A017;
  text-transform: uppercase;
  margin-bottom: 1rem;
  transform: translateZ(30px);

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  transform: translateZ(50px);

  @media (max-width: 480px) {
    margin: 0 0 1rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  transform: translateZ(20px);

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1.5rem;

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
  }
`;

const HeritageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    gap: 2.5rem;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #C8102E; 
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  color: #4a3a2c;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

const Showcase3DWrapper = styled.div`
  perspective: 1000px;
  width: 100%;
`;

const Showcase3DInner = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 20px;
  background: linear-gradient(135deg, #C8102E, #8a0b1f);
  box-shadow: 0 20px 40px rgba(59, 28, 16, 0.2), inset 0 0 0 1px rgba(255,255,255,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  transform-style: preserve-3d;
  position: relative;

  &:hover {
    transform: rotateX(8deg) rotateY(-12deg) scale(1.02);
  }

  &::after {
    content: '';
    position: absolute;
    inset: -15px;
    border: 2px solid #D4A017;
    border-radius: 24px;
    transform: translateZ(-30px);
    opacity: 0.5;

    @media (max-width: 480px) {
      inset: -8px; /* Tighter border gap on mobile */
    }
  }

  @media (max-width: 480px) {
    height: 300px; /* Reduced height for smaller screens */
  }
`;

const ShowcaseEst = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #D4A017;
  letter-spacing: 0.3em;
  transform: translateZ(40px);
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const ShowcaseYear = styled.div`
  font-size: 7rem;
  font-weight: 900;
  color: #FFF8EC;
  line-height: 1;
  transform: translateZ(80px);
  text-shadow: 0 10px 20px rgba(0,0,0,0.3);

  @media (max-width: 480px) {
    font-size: 4.5rem; /* Scaled down for mobile */
  }
`;

const ShowcaseText = styled.div`
  font-size: 1.2rem;
  font-family: 'Caveat', cursive, sans-serif;
  color: #FFF8EC;
  margin-top: 1rem;
  transform: translateZ(50px);

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

/* --- Features Grid (3D Cards) --- */
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Adjusted min-width for mobile wrapping */
  gap: 2.5rem;
  margin-top: 6rem;
  perspective: 1200px;

  @media (max-width: 480px) {
    margin-top: 4rem;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 3rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(74, 58, 44, 0.05);
  box-shadow: 0 10px 30px rgba(59, 28, 16, 0.05);
  transform-style: preserve-3d;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px) rotateX(8deg) rotateY(5deg);
    box-shadow: 0 25px 50px rgba(59, 28, 16, 0.15);
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    
    /* Disables intense 3D hover effect on touch screens to prevent getting stuck */
    &:active {
      transform: translateY(-5px);
    }
  }
`;

const Icon3D = styled.div`
  width: 60px;
  height: 60px;
  background: #C8102E;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  transform: translateZ(40px);
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #3b1c10;
  margin-bottom: 1rem;
  transform: translateZ(25px);

  @media (max-width: 480px) {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: #5A5049;
  line-height: 1.6;
  transform: translateZ(15px);

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

// ================= Main Component =================

const AboutUs = () => {
  return (
    <AboutWrapper>
      <HeroSection>
        <HeroContent>
          <Tagline>Rainbow Gold</Tagline>
          <MainTitle>Taste of Indulgence</MainTitle>
          <HeroText>
            Chocolate is probably the world's most loved sweet. We at Rainbow Chocolates have been bringing the joy of chocolate mixed, filled, and wrapped in our confectionary products. 
          </HeroText>
        </HeroContent>
      </HeroSection>

      <Container>
        <HeritageGrid>
          <TextBlock>
            <SectionTitle>Our Heritage</SectionTitle>
            <Paragraph>
              Rainbow was started by Shri Rameshlal Hukmani with a vision to make it a household name. We started off as a manufacturer, supplier and wholesaler of confectionaries in 1986 in Thane. 
            </Paragraph>
            <Paragraph>
              Today, after so many years, Rainbow Chocolates is one of the most preferred brands in confectionaries. We are gearing up to spread our wings and take this brand on a national level.
            </Paragraph>
          </TextBlock>
          
          <Showcase3DWrapper>
            <Showcase3DInner>
              <ShowcaseEst>ESTABLISHED</ShowcaseEst>
              <ShowcaseYear>1986</ShowcaseYear>
              <ShowcaseText>Thane, India</ShowcaseText>
            </Showcase3DInner>
          </Showcase3DWrapper>
        </HeritageGrid>

        {/* 3D Feature Cards */}
        <FeaturesGrid>
          <FeatureCard>
            <Icon3D>🏭</Icon3D>
            <CardTitle>State-of-the-Art Craft</CardTitle>
            <CardText>
              The products are manufactured at a state of the art facility. The material sourced for the processing comes through stringent quality norms . Furthermore, mechanical packaging and wrapping ensures utmost hygiene.
            </CardText>
          </FeatureCard>

          <FeatureCard>
            <Icon3D>🍬</Icon3D>
            <CardTitle>A Colorful Range</CardTitle>
            <CardText>
              We have a large range of colourful, flavourful confections available in the market, which serve as a treat to our tongue as well as our eyes. May it be the candies, bite-size chocolates, lollies, or other sweets; not only children but grown-ups also savour them .
            </CardText>
          </FeatureCard>

          <FeatureCard>
            <Icon3D>🔬</Icon3D>
            <CardTitle>Innovative Flavors</CardTitle>
            <CardText>
              Our R&D department keeps on experimenting with the tastes, colours and flavours so that we could deliver the innovative variety to our customers. Adults being health conscious, consume them with confessions 
            </CardText>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
      <ImageStrip />
    </AboutWrapper>
  );
};

export default AboutUs;