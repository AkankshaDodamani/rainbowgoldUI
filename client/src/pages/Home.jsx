// pages/Home.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import ProductShowcase from "./ProductShowcase";
import ProductCarousel from "../components/Productcarousel.jsx";
import HeroSection from "../components/HeroSection.jsx";

const Wrapper = styled.div`
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
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
    <HeroSection />
    <ProductCarousel />
    <ProductShowcase />
    </Wrapper>
  );
};

export default Home;
