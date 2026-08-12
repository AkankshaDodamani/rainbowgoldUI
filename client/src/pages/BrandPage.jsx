/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../components/ProductCard.jsx";
import { getAllProductsByBrand } from "../Services/Product.js";
import { getBrandBySlug } from "../Services/Brand.js";

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
  margin: 4.5rem 0 0.5rem;

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

const BrandPage = () => {
  const { brandSlug } = useParams();
  const navigate = useNavigate();
  const [brand, setBrand] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getBrandBySlug(brandSlug)
      .then((result) => {
        setBrand(result.data.data);
      })
      .catch((error) => {
        console.error("Failed to get brand in Brand page: ", error);
      });

    getAllProductsByBrand(brandSlug)
      .then((result) => {
        setProducts(result.data.data);
      })
      .catch((error) => {
        console.error("Failed to load products in brand page: ", error);
      });
  }, [brandSlug]);

  // const brand = brands[brandSlug];

  if (!brand) {
    return (
      <Wrapper>
        <EmptyState>
          <p>We couldn't find that brand. It may have been moved or renamed.</p>
        </EmptyState>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HeadingBlock>
        <BrandName>{brand.brandname}</BrandName>
        {/* <BrandDescription>{brand.description}</BrandDescription> */}
      </HeadingBlock>

      {products.length > 0 ? (
        <CardGrid>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              image={product.productphotolink}
              name={product.productname}
              flavor={product.flavor}
              price={product.productprice}
              packCount={product.pieces}
              weight={product.weight}
              boxCount={product.packagingtype}
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
