// components/ProductCard.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 260px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
`;

const ImageWrapper = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
  object-fit: contain;
`;

const InfoSection = styled.div`
  background-color: #3b1c10;
  padding: 1.25rem 1.5rem 1.5rem;
  color: #fff;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 0 0 0.4rem;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #f6c453;
  margin: 0 0 0.75rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  margin: 0.75rem 0;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #f0e4d6;
  margin: 0.35rem 0;
`;

const DetailLabel = styled.span`
  opacity: 0.75;
`;

const DetailValue = styled.span`
  font-weight: 600;
`;

const ProductCard = ({
  image,
  name,
  price,
  packCount,
  weight,
  boxCount,
  flavor,
}) => {
  return (
    <Card>
      <ImageWrapper>
        <ProductImage src={image} alt={name} />
      </ImageWrapper>
      <InfoSection>
        <ProductName>{name}</ProductName>
        <Price>MRP ₹{price}</Price>
        <Divider />
        <DetailRow>
          <DetailLabel>Flavor</DetailLabel>
          <DetailValue>{flavor}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Pieces</DetailLabel>
          <DetailValue>{packCount}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Weight</DetailLabel>
          <DetailValue>{weight}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Box Count</DetailLabel>
          <DetailValue>{boxCount} per box</DetailValue>
        </DetailRow>
      </InfoSection>
    </Card>
  );
};

export default ProductCard;
