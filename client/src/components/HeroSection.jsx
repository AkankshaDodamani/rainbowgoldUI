// components/HeroSection.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import chocolateRollercoaster from "../assets/chcolate_rollercoster.png";
import chocolateToffee from "../assets/chocolate_toffee.png";

const heroImages = [chocolateRollercoaster, chocolateToffee];
const SWITCH_INTERVAL = 2500; // ms between image changes

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, SWITCH_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeroWrapper>
      {/* Background marquee text, Feastria-style */}
      <Marquee aria-hidden="true">
        <MarqueeTrack>
          <MarqueeText>RAINBOW GOLD &nbsp;•&nbsp; RAINBOW GOLD &nbsp;•&nbsp; RAINBOW GOLD &nbsp;•&nbsp; </MarqueeText>
          <MarqueeText>RAINBOW GOLD &nbsp;•&nbsp; RAINBOW GOLD &nbsp;•&nbsp; RAINBOW GOLD &nbsp;•&nbsp; </MarqueeText>
        </MarqueeTrack>
      </Marquee>

      {/* Main hero content */}
      <HeroContent>
        <Headline>
          Sweetness, <ScriptSpan>crafted</ScriptSpan> since forever
        </Headline>
        <Subtext>
          Rainbow Gold India brings you generations of confectionery
          craft — toffees, éclairs and classic candies made with care.
        </Subtext>
        <CtaButton href="#products">Explore Our Collection</CtaButton>
      </HeroContent>

      {/* Floating product image, cycling through 3 images */}
      <FloatingProductWrapper>
        {heroImages.map((img, index) => (
          <FloatingProduct
            key={img}
            src={img}
            alt="Rainbow Gold assorted candies"
            $active={index === activeIndex}
          />
        ))}
      </FloatingProductWrapper>
    </HeroWrapper>
  );
};

export default HeroSection;

const HeroWrapper = styled.section`
  position: relative;
  min-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors?.cream || "#FFF8EC"};
  padding: 2rem 5vw 4rem;
`;

// ---- Marquee background text ----
const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Marquee = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;
`;

const MarqueeText = styled.span`
  font-size: clamp(4rem, 14vw, 11rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors?.gold || "#D4A017"};
  opacity: 0.12;
  white-space: nowrap;
  text-transform: uppercase;
`;

// ---- Main content ----
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 640px;
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  color: ${({ theme }) => theme.colors?.textDark || "#2B2320"};
  margin-bottom: 1.5rem;
`;

const ScriptSpan = styled.span`
  font-family: "Playfair Display", Georgia, serif;
  font-style: italic;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.gold || "#D4A017"};
`;

const Subtext = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors?.textMuted || "#5A5049"};
  margin-bottom: 2rem;
  max-width: 480px;
`;

const CtaButton = styled.a`
 font-family: 'Poppins', sans-serif;
  display: inline-block;
  position: relative; 
  overflow: hidden; 
  z-index: 1;
  padding: 0.9rem 2.2rem;
  background: ${({ theme }) => theme.colors?.red || "#4a3a2c"};
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 999px;
  border: 1.5px solid #4a3a2c;

  transition: transform 0.25s ease, color 0.4s cubic-bezier(0.65, 0, 0.35, 1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors?.teal || "#f8ecd6"};
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: -1; 
  }

  &:hover {
    transform: translateY(-2px); 
    color: #4a3a2c; 
  }

  &:hover::before {
    transform: translateY(0);
  }
`;

const FloatingProductWrapper = styled.div`
    position: absolute;
    z-index: 1;
    right: 10%;
    width: min(30vw, 620px);
    height: min(55vw, 620px);
    pointer-events: none;

  @media (max-width: 900px) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 80vw;
    height: 80vw;
    margin: 2rem auto 0;
  }
`;

const FloatingProduct = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.2));
  opacity: 0;
  transition: opacity 0.8s ease-in-out;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
    `}
`;