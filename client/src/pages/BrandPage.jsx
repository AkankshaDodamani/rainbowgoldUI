// data/brandsData.js
import roveMango from "../Images/rove_mango.png";
import roveMilk from "../Images/rove_milk.png";
import bentleyChocolate from "../Images/bentley_chocolate.png";
import lovebliss from "../Images/lovebliss_strawberry.png";

const brands = {
  "ace-eclairs": {
    name: "Ace Eclairs",
    description: "Center-filled eclairs in rose milk, coconut, elaichi, and more.",
    products: [
      {
        id: 1,
        image: lovebliss,
        name: "Rose Milk Eclairs",
        flavor: "Rose Milk",
        price: "125",
        packCount: "32 Pkts",
        weight: "280g",
        boxCount: "12",
      },
      {
        id: 2,
        image: bentleyChocolate,
        name: "Coconut Eclairs",
        flavor: "Coconut",
        price: "100",
        packCount: "32 Pkts",
        weight: "100 Pcs",
        boxCount: "32",
      },
    ],
  },
  benrove: {
    name: "Benrove",
    description: "Assorted gift bag collections for festive occasions.",
    products: [
      {
        id: 1,
        image: lovebliss,
        name: "Benrove Assorted",
        flavor: "Assorted",
        price: "300",
        packCount: "12 Pcs",
        weight: "350g",
        boxCount: "12",
      },
    ],
  },
  bentley: {
    name: "Bentley",
    description: "Center-filled chocolates in milk, hazelnut, strawberry, and coconut.",
    products: [
      {
        id: 1,
        image: bentleyChocolate,
        name: "Bentley Chocolate",
        flavor: "Chocolate",
        price: "350",
        packCount: "70 Pcs",
        weight: "N/A",
        boxCount: "12",
      },
      {
        id: 2,
        image: roveMilk,
        name: "Bentley Milk",
        flavor: "Milk",
        price: "350",
        packCount: "70 Pcs",
        weight: "N/A",
        boxCount: "12",
      },
    ],
  },
  berrydor: {
    name: "BerryDor",
    description: "Fruit-forward chocolate truffles.",
    products: [
      {
        id: 1,
        image: roveMango,
        name: "BerryDor Truffle",
        flavor: "Mango",
        price: "350",
        packCount: "70 Pcs (770g)",
        weight: "770g",
        boxCount: "12",
      },
    ],
  },
  eion: {
    name: "Eoin",
    description: "Milk chocolate bites — box, pouch, and jar formats.",
    products: [
      {
        id: 1,
        image: roveMilk,
        name: "Eoin Milk Chocolate",
        flavor: "Milk",
        price: "250",
        packCount: "125 Pcs",
        weight: "N/A",
        boxCount: "12",
      },
    ],
  },
};

// pages/BrandPage.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../components/ProductCard.jsx";

const Wrapper = styled.div`
  font-family: "Poppins", "Segoe UI", system-ui, sans-serif;
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 3rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 5rem 1rem 2rem 1rem; /* Extra top padding to clear the fixed mobile navbar */
  }
`;

const BackLink = styled.button`
  background: none;
  border: none;
  color: #8a4a1f;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1.5rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.2s ease;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    font-size: 0.85rem;
    /* Keeps the touch target clean and easy to tap on mobile */
    padding: 0.25rem 0; 
  }
`;

const HeadingBlock = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 1.75rem;
  }
`;

const BrandName = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: #3b1c10;
  margin: 0 0 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.75rem; /* Scaled down for mobile view */
  }
`;

const BrandDescription = styled.p`
  font-size: 1rem;
  color: #6b5c4e;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem;
  justify-content: center; /* Centers cards nicely if they wrap on tablets/mobile */

  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #6b5c4e;

  @media (max-width: 480px) {
    padding: 2.5rem 0;
    font-size: 0.9rem;
  }
`;

const HomeButton = styled.button`
  position: relative;
  padding: 0.5rem 1.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #4a3a2c;
  background: transparent;
  border: 1.5px solid #4a3a2c;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
  margin-bottom: 2rem;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #4a3a2c; /* Fills button on hover */
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: -1;
  }

  &:hover::before {
    transform: translateY(0);
  }

  &:hover {
    color: #f8ecd6;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1.1rem;
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }
`;

const BrandPage = () => {
  const { brandSlug } = useParams();
  const navigate = useNavigate();
  const brand = brands[brandSlug];

  if (!brand) {
    return (
      <Wrapper>
        <HomeButton onClick={() => navigate("/")}>Home</HomeButton>
        <EmptyState>
          <p>We couldn't find that brand. It may have been moved or renamed.</p>
        </EmptyState>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HomeButton onClick={() => navigate("/")}>Home</HomeButton>

      <HeadingBlock>
        <BrandName>{brand.name}</BrandName>
        <BrandDescription>{brand.description}</BrandDescription>
      </HeadingBlock>

      {brand.products.length > 0 ? (
        <CardGrid>
          {brand.products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              flavor={product.flavor}
              price={product.price}
              packCount={product.packCount}
              weight={product.weight}
              boxCount={product.boxCount}
            />
          ))}
        </CardGrid>
      ) : (
        <EmptyState>
          <p>No products listed yet for this brand — check back soon.</p>
        </EmptyState>
      )}
    </Wrapper>
  );
};

export default BrandPage;