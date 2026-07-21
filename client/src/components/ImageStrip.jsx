// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

// ================= IMAGE IMPORTS =================
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";

// ================= Styled Components =================

const StripWrapper = styled.section`
  width: 100%;
  padding: 2rem 0; 
  background-color: #ffffff;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px; 
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  
  /* Hides the scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SquareImage = styled.img`
  width: 80vw;
  max-width: 300px; 
  flex-shrink: 0;
  aspect-ratio: 1 / 1; 
  object-fit: cover; 
  scroll-snap-align: center;

  @media (min-width: 900px) {
    width: calc(16.666% - 8.5px); 
    max-width: none;
  }
`;

// ================= Main Component =================

// Use the imported variables directly in the array without quotes
const images = [image1, image2, image3, image4, image5, image6];

const ImageStrip = () => {
  return (
    <StripWrapper>
      <ImageContainer>
        {images.map((src, index) => (
          <SquareImage 
            key={index} 
            src={src} 
            alt={`Rainbow Gold Gallery Image ${index + 1}`} 
            loading="lazy" 
          />
        ))}
      </ImageContainer>
    </StripWrapper>
  );
};

export default ImageStrip;