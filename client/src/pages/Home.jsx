// pages/Home.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import TextPanel from "../components/TextPanel";
import chocolateBomb from "../assets/chocolate_bomb.png";
import ProductShowcase from "./ProductShowcase";

const Wrapper = styled.div`
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
  background: #f8ecd6;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 4rem 3rem 2rem;
  max-width: 1300px;
  margin: 0 auto;
`;

const TextColumn = styled.div`
  flex: 1 1 500px;
`;

const Badge = styled.div`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1.1rem;
  background-color: #fbeed9;
  color: #8a4a1f;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.03em;
`;

const ImageColumn = styled.div`
  flex: 1 1 350px;
  display: flex;
  justify-content: center;
`;

const ChocolateImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 420px;
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-16px);
    }
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <HeroSection>
        <TextColumn>
          <TextPanel
            heading="Why Choose Rainbow"
            paragraphs={[
              "Chocolate is probably the world's most loved sweet. It's consumed in many forms, and candy is the most favourite of all.",
              "At Rainbow Chocolates, we bring the joy of chocolate — mixed, filled, and wrapped in our confectionery products. We started as a manufacturer, supplier and wholesaler of confectionaries in 1986 in Thane.",
            ]}
          />
        </TextColumn>

        <ImageColumn>
          <ChocolateImage src={chocolateBomb} alt="Chocolate bar splash" />
        </ImageColumn>
      </HeroSection>

      <ProductShowcase/>
    </Wrapper>
  );
};

export default Home;