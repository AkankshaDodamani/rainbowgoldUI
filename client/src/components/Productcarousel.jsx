import { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import roveMango from "../Images/rove_mango.png";
import roveMilk from "../Images/rove_milk.png";
import bentleyChocolate from "../Images/bentley_chocolate.png";
import lovebliss from "../Images/lovebliss_strawberry.png";

// ---- Sample data — replace `image` with your real product photos ----
const products = [
  { id: 1, name: "Chocolate Bites", category: "Chocolate Delight",  image: roveMango },
  { id: 2, name: "Flower Chocolate", category: "Chocolate Delight",  image: roveMilk },
  { id: 3, name: "Toffee Classic", category: "Toffees",  image: bentleyChocolate },
  { id: 4, name: "Gift Box Deluxe", category: "Gift Boxes",  image: lovebliss },
//   { id: 5, name: "Milky Chooko", category: "Chocolate Delight",  image: "/assets/products/milky-chooko.jpg" },
//   { id: 6, name: "Éclair Twist", category: "Éclairs",  image: "/assets/products/eclair-twist.jpg" },
//   { id: 7, name: "Dark Chooko", category: "Chocolate Delight",image: "/assets/products/dark-chooko.jpg" },
//   { id: 8, name: "Lollipop Swirl", category: "Lollipops", image: "/assets/products/lollipop-swirl.jpg" },
];

// ---- Tuning knobs ----
const AUTO_SCROLL_SPEED = 0.4; // px per frame when idle (slow, continuous)
const DRAG_MULTIPLIER = 2.2; // how much faster manual drag feels vs auto-scroll
const MAX_TILT_DEG = 14; // 3D pop tilt intensity on hover

const ProductCarousel = ({ items = products }) => {
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
  console.log("loopedItems:", loopedItems);

  // Measure width of a single set of items (for seamless looping)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth;
    singleSetWidthRef.current = totalWidth / 3;
    // Start centered on the middle set
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

        // Seamless wrap-around
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
      <SectionHeading>Our Sweetest Picks</SectionHeading>
      <CarouselViewport
        onMouseDown={handleMouseDown}
        $isDragging={isDragging}
      >
        <CarouselTrack ref={trackRef}>
          {loopedItems.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <CardImageWrapper>
                <CardImage $bg={product.image} draggable={false} />
              </CardImageWrapper>
              <CardCategory>{product.category}</CardCategory>
              <CardName>{product.name}</CardName>
              <CardPrice>{product.price}</CardPrice>
            </ProductCard>
          ))}
        </CarouselTrack>
      </CarouselViewport>
      <HintText>Drag to browse faster →</HintText>
    </CarouselWrapper>
  );
};

export default ProductCarousel;

// ================= Styled Components =================

const CarouselWrapper = styled.section`
  padding: 4rem 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors?.cream || "#FFF8EC"};
`;

const SectionHeading = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.textDark || "#2B2320"};
  margin-bottom: 2.5rem;
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
  width: 240px;
  background: #fff;
  border-radius: 18px;
  padding: 1.25rem;
  box-shadow: 0 8px 20px rgba(43, 35, 32, 0.08);
  transition: transform 0.15s ease-out, box-shadow 0.25s ease;
  transform-style: preserve-3d;
  will-change: transform;

  &:hover {
    box-shadow: 0 25px 45px rgba(43, 35, 32, 0.22);
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1rem;
  pointer-events: none;
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  pointer-events: none;
`;

const CardCategory = styled.span`
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors?.teal || "#1B6B6B"};
  margin-bottom: 0.35rem;
  pointer-events: none;
`;

const CardName = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.textDark || "#2B2320"};
  margin-bottom: 0.35rem;
  pointer-events: none;
`;

const CardPrice = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.red || "#C8102E"};
  pointer-events: none;
`;

const HintText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors?.textMuted || "#5A5049"};
  opacity: 0.7;
`;