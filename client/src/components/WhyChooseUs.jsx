// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import topBottomImg from "../assets/top-bottom-2.png"; 
import centerProductImg from "../assets/eclair.png"; 

// ================= Styled Components =================

const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 4rem 0 0 0; 
  background-color: #FFF8EC; 
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 2.5rem 0 0 0;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  z-index: 5;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

const HeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 15;

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #C8102E; 
  margin: 0 0 1rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin: 0 0 0.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #4a3a2c;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

/* Full-width stage allows the background to bleed to the edges */
const FullWidthStage = styled.div`
  position: relative;
  width: 100%;
  height: 600px; 
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 899px) {
    height: auto;
    padding: 12rem 0 10rem 0; 
  }

  @media (max-width: 480px) {
    /* Significantly increased top padding to push text below the chocolate drip */
    padding: 14rem 0 8rem 0; 
  }
`;

const FrameBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${topBottomImg});
  background-repeat: repeat-x;
  background-size: auto 100%; 
  background-position: center;
  mix-blend-mode: multiply; 
  z-index: 1;
  pointer-events: none;
`;

const CenterConstraint = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  @media (max-width: 899px) {
    flex-direction: column;
    gap: 3rem; 
  }

  @media (max-width: 480px) {
    gap: 2.5rem;
  }
`;

const CenterImage = styled.img`
  width: 375px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  z-index: 10;
  filter: drop-shadow(0 20px 30px rgba(74, 58, 44, 0.25));
  transition: transform 0.4s ease;
  margin-bottom: 40px;

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }

  @media (max-width: 899px) {
    width: 250px;
    margin-bottom: 0; 
  }

  @media (max-width: 480px) {
    width: 190px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 200px;
  z-index: 15;

  @media (min-width: 900px) {
    position: absolute;
    align-items: ${({ $align }) => ($align === "left" ? "flex-end" : "flex-start")};
    text-align: ${({ $align }) => ($align === "left" ? "right" : "left")};
    
    ${({ $pos }) => {
      switch ($pos) {
        case "top-left": return "top: 30%; left: 0;";
        case "bottom-left": return "bottom: 25%; left: 0;";
        case "top-right": return "top: 30%; right: 0;";
        case "bottom-right": return "bottom: 25%; right: 0;";
        default: return "";
      }
    }}
  }

  @media (max-width: 480px) {
    max-width: 260px;
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #C8102E;
  margin: 0 0 0.25rem;
  font-family: 'Caveat', 'Comic Sans MS', cursive, sans-serif; 
  line-height: 1.1;

  @media (max-width: 480px) {
    font-size: 1.35rem; 
  }
`;

const FeatureDesc = styled.p`
  font-size: 0.85rem;
  color: #4a3a2c;
  font-family: 'Inter', system-ui, sans-serif;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Connector = styled.svg`
  position: absolute;
  pointer-events: none;
  display: none;
  stroke: #C8102E;
  stroke-width: 2;
  stroke-dasharray: 5 5;
  fill: none;
  opacity: 0.5;

  @media (min-width: 900px) {
    display: block;
  }

  ${({ $pos }) => {
    switch ($pos) {
      case "top-left": return "top: 40%; left: 105%; width: 120px; height: 60px;";
      case "bottom-left": return "bottom: 60%; left: 105%; width: 100px; height: 50px;";
      case "top-right": return "top: 40%; right: 105%; width: 120px; height: 60px;";
      case "bottom-right": return "bottom: 60%; right: 105%; width: 100px; height: 50px;";
      default: return "";
    }
  }}
`;

// ================= Main Component =================

const WhyChooseUs = () => {
  return (
    <SectionWrapper>
      <ContentContainer>
        <HeaderBlock>
          <Title>What makes Rainbow different?</Title>
          <Subtitle>
            At Rainbow, we don't just make chocolate — we craft cravings. Our confectionery is
            designed to be rich, bold, perfectly balanced, and impossible to forget.
          </Subtitle>
        </HeaderBlock>
      </ContentContainer>

      <FullWidthStage>
        <FrameBackground />
        
        <CenterConstraint>
          <FeatureItem $pos="top-left" $align="left">
            <FeatureTitle>Crafted That<br/>Pack a Punch</FeatureTitle>
            <FeatureDesc>Rich cocoa flavors that hit hard.</FeatureDesc>
            <Connector $pos="top-left" viewBox="0 0 100 50">
              <path d="M0,10 Q50,-20 100,50" />
            </Connector>
          </FeatureItem>

          <FeatureItem $pos="bottom-left" $align="left">
            <FeatureTitle>Flavor That<br/>Hits Hard</FeatureTitle>
            <FeatureDesc>Decades of recipe perfection.</FeatureDesc>
            <Connector $pos="bottom-left" viewBox="0 0 100 50">
              <path d="M0,40 Q50,60 100,0" />
            </Connector>
          </FeatureItem>

          <CenterImage src={centerProductImg} alt="Rainbow Gold Eclair Splash" />

          <FeatureItem $pos="top-right" $align="right">
            <FeatureTitle>Juicy, Melty,<br/>Legendary</FeatureTitle>
            <FeatureDesc>A texture that melts perfectly.</FeatureDesc>
            <Connector $pos="top-right" viewBox="0 0 100 50">
              <path d="M100,10 Q50,-20 0,50" />
            </Connector>
          </FeatureItem>

          <FeatureItem $pos="bottom-right" $align="right">
            <FeatureTitle>Zero Cravings<br/>Left Behind</FeatureTitle>
            <FeatureDesc>Satisfaction in every single bite.</FeatureDesc>
            <Connector $pos="bottom-right" viewBox="0 0 100 50">
              <path d="M100,40 Q50,60 0,0" />
            </Connector>
          </FeatureItem>
        </CenterConstraint>
      </FullWidthStage>
    </SectionWrapper>
  );
};

export default WhyChooseUs;