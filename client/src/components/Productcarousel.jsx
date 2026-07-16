// components/ProductCarousel.jsx
import { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import ace_eclairs from "../Images/logo/ace_eclairs.png";
import benrove from "../Images/logo/benrove.png";
import bentley from "../Images/logo/bentley.png";
import berryDor from "../Images/logo/Berry_d_or.png";
import eion from "../Images/logo/eoin_whiteon.png";

const logos = [
  { id: 1, name: "Ace Eclairs", image: ace_eclairs },
  { id: 2, name: "Benrove", image: benrove },
  { id: 3, name: "Bentley", image: bentley },
  { id: 4, name: "Berry D'or", image: berryDor },
  { id: 5, name: "Eion & Whiteion", image: eion },
];

// ---- Tuning knobs ----
const AUTO_SCROLL_SPEED = 0.4;
const DRAG_MULTIPLIER = 2.2;
const MAX_TILT_DEG = 14;

const ProductCarousel = ({ items = logos }) => {
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const rafRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Triple the items so the loop always has content on both sides
  const loopedItems = [...items, ...items, ...items];

  // Measure width of a single set of items (for seamless looping)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth;
    singleSetWidthRef.current = totalWidth / 3;
    positionRef.current = -singleSetWidthRef.current;
    track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  }, [items]);

  // Main animation loop
  useEffect(() => {
    const step = () => {
      const track = trackRef.current;
      const singleSetWidth = singleSetWidthRef.current;

      if (track && singleSetWidth) {
        if (!isDraggingRef.current) {
          positionRef.current -= AUTO_SCROLL_SPEED;
        }

        if (positionRef.current <= -singleSetWidth * 2) {
          positionRef.current += singleSetWidth;
        } else if (positionRef.current >= 0) {
          positionRef.current -= singleSetWidth;
        }

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ---- Mouse drag handlers ----
  const handleMouseDown = useCallback((e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartPositionRef.current = positionRef.current;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    const delta = (e.clientX - dragStartXRef.current) * DRAG_MULTIPLIER;
    positionRef.current = dragStartPositionRef.current + delta;
  }, []);

  const endDrag = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", endDrag);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", endDrag);
    };
  }, [handleMouseMove, endDrag]);

  // ---- 3D tilt on card hover ----
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * MAX_TILT_DEG;
    const rotateX = -((y - centerY) / centerY) * MAX_TILT_DEG;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08) translateZ(30px)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)";
  };

  return (
    <CarouselWrapper>
      <HeadingBlock>
        <Eyebrow>Handpicked For You</Eyebrow>
        <SectionHeading>Our Sweetest Picks</SectionHeading>
        <HeadingUnderline />
      </HeadingBlock>

      <ViewportOuter>
        <FadeEdge $side="left" />
        <CarouselViewport onMouseDown={handleMouseDown} $isDragging={isDragging}>
          <CarouselTrack ref={trackRef}>
            {loopedItems.map((logo, index) => (
              <ProductCard
                key={`${logo.id}-${index}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <CardImageWrapper>
                  <CardImage $bg={logo.image} draggable={false} />
                  <CardShine />
                </CardImageWrapper>
                <CardName>{logo.name}</CardName>
              </ProductCard>
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <FadeEdge $side="right" />
      </ViewportOuter>

      <HintText>✋ Drag to browse faster</HintText>
    </CarouselWrapper>
  );
};

export default ProductCarousel;

// ================= Styled Components =================

const CarouselWrapper = styled.section`
  overflow: hidden;
  background: ${({ theme }) => theme.colors?.cream || "#FFF8EC"};
`;

const HeadingBlock = styled.div`
  text-align: center;
  margin-bottom: 2.75rem;
`;

const Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors?.red || "#C8102E"};
  margin-bottom: 0.5rem;
`;

const SectionHeading = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.textDark || "#2B2320"};
  margin: 0;
`;

const HeadingUnderline = styled.div`
  width: 64px;
  height: 4px;
  border-radius: 999px;
  margin: 0.9rem auto 0;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors?.gold || "#D4A017"},
    ${({ theme }) => theme.colors?.red || "#C8102E"}
  );
`;

const ViewportOuter = styled.div`
  position: relative;
`;

const FadeEdge = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ $side }) => ($side === "left" ? "left: 0;" : "right: 0;")}
  width: 80px;
  z-index: 3;
  pointer-events: none;
  background: linear-gradient(
    ${({ $side }) => ($side === "left" ? "90deg" : "270deg")},
    ${({ theme }) => theme.colors?.cream || "#FFF8EC"} 0%,
    transparent 100%
  );

  @media (max-width: 600px) {
    width: 32px;
  }
`;

const CarouselViewport = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  user-select: none;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 1.75rem;
  width: max-content;
  will-change: transform;
  padding: 1rem 2rem;
`;

const ProductCard = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 140px;
  background: #fff;
  border-radius: 20px;
  padding: 1.25rem;
  box-shadow: 0 8px 20px rgba(43, 35, 32, 0.08);
  transition: transform 0.15s ease-out, box-shadow 0.25s ease;
  transform-style: preserve-3d;
  will-change: transform;
  border: 1px solid rgba(43, 35, 32, 0.05);

  &:hover {
    box-shadow: 0 25px 45px rgba(43, 35, 32, 0.22);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.1rem;
  pointer-events: none;
  background: linear-gradient(135deg, #fdf1de, #f6e2c4);
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  pointer-events: none;
`;

const CardShine = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 40%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 60%
  );
  pointer-events: none;
`;

const CardName = styled.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.textDark || "#2B2320"};
  margin: 0 0 0.75rem;
  pointer-events: none;
`;

const HintText = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors?.textMuted || "#5A5049"};
  opacity: 0.7;
`;