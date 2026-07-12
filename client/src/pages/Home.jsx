/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import TextPanel from "../components/TextPanel";

const Wrapper = styled.div`
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
`;

const Home = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
      <TextPanel
        heading="Why Choose Rainbow"
        paragraphs={[
          "Chocolate is probably the world's most loved sweet. It's consumed in many forms, and candy is the most favourite of all.",
          "At Rainbow Chocolates, we bring the joy of chocolate — mixed, filled, and wrapped in our confectionery products. We started as a manufacturer, supplier and wholesaler of confectionaries in 1986 in Thane.",
        ]}
      />
    </Wrapper>
  );
};

export default Home;