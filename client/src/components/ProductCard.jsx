/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.08) rotate(-3deg);
  }
`;

const Ribbon = styled.div`
  position: absolute;
  top: 18px;
  right: -38px;
  background: #c8102e;
  color: white;
  padding: 8px 40px;
  transform: rotate(45deg);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  background: black;
`;

const Top = styled.div`
  position: relative;
  background: linear-gradient(180deg, #fff7e7, #fffdf8);
  padding: 35px 25px 20px;
`;

const Circle = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  background: #ffd75a;
  opacity: 0.15;
  border-radius: 50%;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const Image = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 230px;
  object-fit: contain;
  transition: 0.4s;
`;

const Bottom = styled.div`
  background: #3b1c10;
  color: white;
  padding: 24px;
`;

const Flavor = styled.div`
  display: inline-block;
  padding: 6px 16px;
  border-radius: 30px;
  background: #fff3cc;
  color: #a66a00;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 14px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
`;

const Price = styled.div`
  color: #ffd54a;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 12px 0 18px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  margin-bottom: 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const Item = styled.div`
  background: rgba(255, 255, 255, 0.06);
  padding: 12px;
  border-radius: 12px;
`;

const Label = styled.div`
  font-size: 0.72rem;
  color: #d7c8bc;
  margin-bottom: 5px;
`;

const Value = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

const ProductCard = ({
  image,
  name,
  flavor,
  price,
  packCount,
  weight,
  boxCount,
}) => {
  return (
    <Card>
      <Ribbon>NEW</Ribbon>

      <Top>
        <Circle />

        <Image src={image} alt={name} />
      </Top>

      <Bottom>
        <Flavor>🍫 {flavor}</Flavor>

        <Name>{name}</Name>

        <Price>MRP ₹{price}</Price>

        <Divider />

        <Grid>
          <Item>
            <Label>Pieces</Label>
            <Value>{packCount}</Value>
          </Item>

          <Item>
            <Label>Weight</Label>
            <Value>{weight}</Value>
          </Item>

          <Item>
            <Label>Box Count</Label>
            <Value>{boxCount}</Value>
          </Item>

          <Item>
            <Label>Flavor</Label>
            <Value>{flavor}</Value>
          </Item>
        </Grid>
      </Bottom>
    </Card>
  );
};

export default ProductCard;
