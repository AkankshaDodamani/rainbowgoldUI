// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

// ================= Animations =================

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px); /* Switched to a subtle horizontal slide-in */
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ================= Styled Components =================

const SectionWrapper = styled.section`
  padding: 6rem 0;
  background-color: #FFF8EC; 
  width: 100%;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const TitleBlock = styled.div`
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #3b1c10;
  margin: 0 0 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #5A5049;
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
  margin: 0;
`;

/* Carousel Track */
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  /* Optional: Adds a subtle fade to the right edge to encourage swiping */
  mask-image: linear-gradient(to right, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, black 85%, transparent 100%);
`;

const Track = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 0.5rem 0 1rem 0; /* Reduced padding since shadows are gone */
  
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  position: relative;
  /* Sizing adjusted so the next card ALWAYS peeks in */
  width: 85vw; 
  max-width: 380px; /* Caps the size so it never gets too bulky */
  flex: 0 0 auto;
  scroll-snap-align: start;
  
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem 1.75rem; /* Tighter padding for a more compact card */
  
  /* Flat design: subtle border instead of heavy shadow */
  border: 1px solid rgba(74, 58, 44, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${fadeInUp} 0.5s ease-out backwards;
  animation-delay: ${({ $index }) => `${$index * 0.1}s`}; 

  /* Flat hover effect: Just a subtle background and border shift */
  transition: border-color 0.3s ease, background-color 0.3s ease;
  &:hover {
    border-color: #C8102E;
    background-color: #fffcf8;
  }
`;

const BackgroundQuote = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1.25rem;
  font-size: 6rem;
  font-family: Georgia, serif;
  color: #f8ecd6;
  opacity: 0.6;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Stars = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 1.25rem;
  color: #D4A017; 
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #4a3a2c;
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
  margin: 0 0 2rem;
  flex-grow: 1;
`;

const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #4a3a2c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #ffffff;
  font-size: 1.1rem;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: 700;
  color: #3b1c10;
  font-size: 1rem;
`;

const AuthorTitle = styled.span`
  font-size: 0.8rem;
  color: #8c7b70;
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid rgba(74, 58, 44, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4a3a2c;
  transition: all 0.2s ease;

  &:hover {
    background: #4a3a2c;
    color: #ffffff;
    border-color: #4a3a2c;
  }
`;

// ================= Icons =================

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// ================= Data =================

const reviews = [
  {
    id: 1,
    name: "Aarti Desai",
    initials: "AD",
    title: "Chocoholic",
    text: "Absolutely divine! The Rove Truffles have this incredibly rich, melt-in-your-mouth texture that I haven't found anywhere else. It’s my new daily indulgence.",
  },
  {
    id: 2,
    name: "Vikram Sharma",
    initials: "VS",
    title: "Event Planner",
    text: "I bought a box of Bentley chocolates for a family gathering, and they were gone in minutes. You can really taste the premium cocoa and the craftsmanship.",
  },
  {
    id: 3,
    name: "Priya Patel",
    initials: "PP",
    title: "Sweet Tooth",
    text: "The Ace Eclairs bring back so many childhood memories, yet somehow they taste even better than I remember. The caramel pull is just absolutely perfect!",
  },
  {
    id: 4,
    name: "Rohan Gupta",
    initials: "RG",
    title: "Gift Buyer",
    text: "Finding a genuine chocolate that perfectly balances sweetness with deep, rich cocoa is rare. Rainbow Gold nails it. The packaging makes it phenomenal for gifting, too.",
  },
];

// ================= Main Component =================

const Testimonials = () => {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (trackRef.current) {
      // Adjusted scroll amount to match the new 380px max-width + gap
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 404; 
      
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionWrapper>
      <ContentContainer>
        <HeaderBlock>
          <TitleBlock>
            <Title>A Taste of Happiness</Title>
            <Subtitle>
              Don't just take our word for it. Discover why chocolate lovers everywhere are making Rainbow Gold their ultimate indulgence.
            </Subtitle>
          </TitleBlock>
          
          <ControlButtons>
            <Button onClick={() => scroll("left")} aria-label="Previous review">
              <ArrowLeft />
            </Button>
            <Button onClick={() => scroll("right")} aria-label="Next review">
              <ArrowRight />
            </Button>
          </ControlButtons>
        </HeaderBlock>

        <SliderWrapper>
          <Track ref={trackRef}>
            {reviews.map((review, index) => (
              <Card key={review.id} $index={index}>
                <BackgroundQuote>”</BackgroundQuote>
                <ContentWrapper>
                  <div>
                    <Stars>
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </Stars>
                    <ReviewText>"{review.text}"</ReviewText>
                  </div>
                  <AuthorBlock>
                    <Avatar>{review.initials}</Avatar>
                    <AuthorDetails>
                      <AuthorName>{review.name}</AuthorName>
                      <AuthorTitle>{review.title}</AuthorTitle>
                    </AuthorDetails>
                  </AuthorBlock>
                </ContentWrapper>
              </Card>
            ))}
          </Track>
        </SliderWrapper>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default Testimonials;