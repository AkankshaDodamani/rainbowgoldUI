/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components";
import ProductCard from "../components/ProductCard.jsx";

// Product Images
import roveMango from "../Images/rove_mango.png";
import roveMilk from "../Images/rove_milk.png";
import bentleyChocolate from "../Images/bentley_chocolate.png";
import lovebliss from "../Images/lovebliss_strawberry.png";

const float = keyframes`
0%{
transform:translateY(0px);
}
50%{
transform:translateY(-12px);
}
100%{
transform:translateY(0px);
}
`;

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 40px;
  background: linear-gradient(180deg, #fffdf8 0%, #fff6e7 50%, #fffdf8 100%);

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: rgba(212, 160, 23, 0.12);
  filter: blur(90px);

  top: -120px;
  left: -100px;
`;

const Glow2 = styled(Glow)`
  background: rgba(200, 16, 46, 0.1);
  right: -120px;
  left: auto;
  bottom: -120px;
  top: auto;
`;

const Container = styled.div`
  max-width: 1350px;
  margin: auto;
  position: relative;
  z-index: 2;
`;

const HeadingBlock = styled.div`
  text-align: center;
  margin-bottom: 70px;
`;

const Eyebrow = styled.span`
  display: inline-block;
  color: #c8102e;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
  font-size: 0.9rem;
`;

const Title = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  margin: 0;
  color: #3b1c10;
  font-weight: 800;
`;

const Subtitle = styled.p`
  max-width: 700px;
  margin: 20px auto 0;
  line-height: 1.8;
  color: #6d5b4d;
  font-size: 1.05rem;
`;

const Underline = styled.div`
  width: 90px;
  height: 5px;
  margin: 28px auto 0;
  border-radius: 50px;
  background: linear-gradient(90deg, #d4a017, #c8102e);
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 15px;
`;

const CardWrapper = styled.div`
  // animation:${float} 5s ease-in-out infinite;
  // animation-delay:${(props) => props.delay}s;

  @media (max-width: 900px) {
    margin-top: 0 !important;
  }
`;

const Bottom = styled.div`
  text-align: center;
  margin-top: 70px;
`;

const FootNote = styled.p`
  margin-top: 20px;
  color: #7b6a5d;
`;

const products = [
  {
    id: 1,
    image: roveMango,
    name: "Rove Truffle",
    flavor: "Mango",
    price: "350",
    packCount: "70 Pcs",
    weight: "770g",
    boxCount: "12",
  },
  {
    id: 2,
    image: roveMilk,
    name: "Rove Truffle",
    flavor: "Milk",
    price: "350",
    packCount: "70 Pcs",
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
    weight: "770g",
    boxCount: "12",
  },
  {
    id: 4,
    image: lovebliss,
    name: "Love Bliss",
    flavor: "Strawberry",
    price: "300",
    packCount: "60 Pcs",
    weight: "650g",
    boxCount: "12",
  },
];

const ProductShowcase = () => {
  return (
    <Section>
      <Glow />
      <Glow2 />

      <Container>
        <HeadingBlock>
          <Eyebrow>🍫 Fresh From Our Factory</Eyebrow>

          <Title>Discover Our New Launches</Title>

          <Subtitle>
            Crafted with premium ingredients and irresistible flavours, our
            newest chocolates are made to delight every bite. Discover exciting
            creations that everyone will love.
          </Subtitle>

          <Underline />
        </HeadingBlock>

        <CardGrid>
          {products.map((item, index) => (
            <CardWrapper key={item.id}>
              <ProductCard
                image={item.image}
                name={item.name}
                flavor={item.flavor}
                price={item.price}
                packCount={item.packCount}
                weight={item.weight}
                boxCount={item.boxCount}
              />
            </CardWrapper>
          ))}
        </CardGrid>

        <Bottom>

          <FootNote>
              New flavours are added every season. Stay tuned for more delicious surprises.
          </FootNote>
        </Bottom>
      </Container>
    </Section>
  );
};

export default ProductShowcase;
