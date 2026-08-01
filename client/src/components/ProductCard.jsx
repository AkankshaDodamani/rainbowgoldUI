// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid rgba(216, 159, 83, 0.2); /* Very subtle gold border */
  box-shadow: 0 12px 30px rgba(65, 30, 15, 0.06);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(65, 30, 15, 0.15);
    border-color: rgba(216, 159, 83, 0.6);
  }

  &:hover img {
    transform: scale(1.1) rotate(-4deg);
  }
`;

const Top = styled.div`
  position: relative;
  /* Soft, creamy radial gradient */
  background: radial-gradient(circle at 50% 0%, #ffffff 0%, #fff7e6 100%);
  padding: 40px 25px 30px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  /* Replaced the hard circle with a smooth, premium golden glow */
  background: radial-gradient(circle, rgba(255, 215, 90, 0.4) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease;

  ${Card}:hover & {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.7;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 240px;
  object-fit: contain;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.15));
`;

const Bottom = styled.div`
  /* Rich chocolate gradient instead of flat brown */
  background: linear-gradient(145deg, #4a2b1c 0%, #2b160d 100%);
  padding: 24px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Thin gold accent line separating top and bottom */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #d89f53, transparent);
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.45rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.03em;
  font-family: "Poppins", system-ui, sans-serif;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #ffd75a; /* Text turns gold on hover */
  }
`;

const ProductCard = ({ image, name }) => {
  return (
    <Card>
      <Top>
        <Glow />
        <Image src={image} alt={name} draggable={false} />
      </Top>

      <Bottom>
        <NameContainer>
          <Name>{name}</Name>
        </NameContainer>
      </Bottom>
    </Card>
  );
};

export default ProductCard;