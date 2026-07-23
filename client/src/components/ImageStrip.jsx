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
  background-color: #FFF8EC; 
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem 0; 
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Forces exactly 4 equal columns */
  width: 100%;
  gap: 10px; 
  padding: 0 1.25rem; /* Padding on the edges for mobile */

  @media (max-width: 480px) {
    gap: 6px; /* Slightly smaller gap on tiny mobile screens to maximize image size */
    padding: 0 1rem;
  }

  @media (min-width: 900px) {
    padding: 0; /* Remove side padding on desktop for a full edge-to-edge bleed */
    gap: 15px; /* Larger gap for desktop */
  }
`;

const SquareImage = styled.img`
  width: 100%; /* Fills the grid column */
  height: 100%;
  aspect-ratio: 1 / 1; /* Keeps them perfectly square */
  object-fit: cover; 

  @media (min-width: 900px) {
    border-radius: 0; /* Keeps images perfectly sharp and square on desktop */
  }
`;

// ================= Main Component =================

const images = [image1, image2, image3, image4, image5, image6];

const ImageStrip = () => {
  return (
    <StripWrapper>
      <ImageContainer>
        {/* .slice(0, 4) ensures ONLY 4 images render in the row */}
        {images.slice(0, 4).map((src, index) => (
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