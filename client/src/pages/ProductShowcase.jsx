// components/ProductShowcase.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import ProductCard from "../Components/ProductCard.jsx";

// sample assets — swap these for your actual product images
import roveMango from "../Images/rove_mango.png";
import roveMilk from "../Images/rove_milk.png";
import bentleyChocolate from "../Images/bentley_chocolate.png";
import lovebliss from "../Images/lovebliss_strawberry.png";

const Section = styled.section`
  padding: 3rem;
  max-width: 1300px;
  margin: 0 auto;
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #3b1c10;
  margin-bottom: 2rem;
  text-align: center;
`;

const CardRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BestsellerCard = styled.div`
  width: 220px;
  height: 300px;
  border-radius: 24px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
`;

const BestsellerImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const bestsellers = [
  { id: 1, image: roveMango, alt: "Rove Truffle Mango" },
  { id: 2, image: roveMilk, alt: "Rove Truffle Milk" },
  { id: 3, image: bentleyChocolate, alt: "Bentley Chocolate" },
  { id: 4, image: lovebliss, alt: "Lovebliss Strawberry" },
];

const newLaunches = [
  {
    id: 1,
    image: roveMango,
    name: "Rove Truffle",
    flavor: "Mango",
    price: "350",
    packCount: "70 Pcs (770g)",
    weight: "770g",
    boxCount: "12",
  },
  {
    id: 2,
    image: roveMilk,
    name: "Rove Truffle",
    flavor: "Milk",
    price: "350",
    packCount: "70 Pcs (770g)",
    weight: "770g",
    boxCount: "12",
  },
  {
    id: 3,
    image: bentleyChocolate,
    name: "Bentley",
    flavor: "Chocolate",
    price: "350",
    packCount: "70 Pcs",
    weight: "N/A",
    boxCount: "12",
  },
  {
    id: 4,
    image: lovebliss,
    name: "Lovebliss",
    flavor: "Strawberry",
    price: "300",
    packCount: "60 Pcs",
    weight: "N/A",
    boxCount: "12",
  },
];

const ProductShowcase = () => {
  return (
    <>
      <Section>
        <SectionTitle>Top Brands or Bestsellers</SectionTitle>
        <CardRow>
          {bestsellers.map((item) => (
            <BestsellerCard key={item.id}>
              <BestsellerImage src={item.image} alt={item.alt} />
            </BestsellerCard>
          ))}
        </CardRow>
      </Section>

      <Section>
        <SectionTitle>New Launches</SectionTitle>
        <CardRow>
          {newLaunches.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              name={item.name}
              flavor={item.flavor}
              price={item.price}
              packCount={item.packCount}
              weight={item.weight}
              boxCount={item.boxCount}
            />
          ))}
        </CardRow>
      </Section>
    </>
  );
};

export default ProductShowcase;