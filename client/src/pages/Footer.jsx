// components/Footer.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import productCollage from "../assets/footer_wbg.png";
import chocolateDoodle from "../assets/chocolate_doodle.png";

const FooterWrapper = styled.footer`
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
  background-color: #f8ecd6;
`;

const TopSection = styled.div`
  background-color: #f8ecd6;
  padding: 2rem 2rem 0;
`;

const CollageImage = styled.img`
  display: block;
  max-width: 100%;
  width: 900px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
`;

/* Dark brown section (Quick Links / Contact). The doodle lives here now,
   inverted so its white background reads as near-black (blends with
   #3b1c10) and its brown linework reads as light cream — otherwise a
   white-background PNG dropped straight onto a dark section just shows
   up as a pale smudge instead of blending in. */
const FooterMain = styled.div`
  position: relative;
  background-color: #3b1c10;
  color: #f0e4d6;
  padding: 3rem 3rem 2rem;
  overflow: hidden;
`;

/* Large, faint centered doodle — ambient texture behind the columns */
const DoodleBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${chocolateDoodle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 900px auto;
  filter: invert(1);
  opacity: 0.08;
  pointer-events: none;
`;

/* Small corner accents, same asset reused and cropped/rotated at opposite
   corners for variety — the same "scattered doodle" treatment as the
   reference footer, just tuned for a dark background */
// const DoodleCorner = styled.img`
//   position: absolute;
//   width: 240px;
//   height: auto;
//   filter: invert(1);
//   opacity: 0.16;
//   pointer-events: none;
// `;

// const DoodleTopLeft = styled(DoodleCorner)`
//   top: -30px;
//   left: -50px;
//   transform: rotate(-8deg);
// `;

// const DoodleBottomRight = styled(DoodleCorner)`
//   bottom: -20px;
//   right: -50px;
//   transform: rotate(6deg) scaleX(-1);
// `;

const FooterGrid = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const FooterColumn = styled.div`
  flex: 1 1 220px;
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #f6c453;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: #d8c7b4;
  margin: 0 0 0.5rem;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  font-size: 0.9rem;
  color: #d8c7b4;
  margin-bottom: 0.6rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #f6c453;
  }
`;

const BottomBar = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.8rem;
  color: #a8927c;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.06);
  color: #f0e4d6;
  border: 1px solid rgba(246, 196, 83, 0.15);

  transition: all 0.3s ease;

  &:hover {
    background: #f6c453;
    color: #2b140c;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(246, 196, 83, 0.25);
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <TopSection>
        <CollageImage src={productCollage} alt="Rainbow Gold product range" />
      </TopSection>

      <FooterMain>
        <DoodleBackdrop aria-hidden="true" />
        {/* <DoodleTopLeft src={chocolateDoodle} alt="" aria-hidden="true" />
        <DoodleBottomRight src={chocolateDoodle} alt="" aria-hidden="true" /> */}

        <FooterGrid>
          <FooterColumn>
            <ColumnTitle>Rainbow Gold</ColumnTitle>
            <FooterText>
              Manufacturer, supplier and wholesaler of confectionaries since
              1986 in Thane, India.
            </FooterText>

            <SocialRow>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
            </SocialRow>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkList>
              <LinkItem onClick={() => navigate("/")}>Home</LinkItem>
              <LinkItem onClick={() => navigate("/brands")}>Brands</LinkItem>
              <LinkItem onClick={() => navigate("/about")}>About</LinkItem>
              <LinkItem onClick={() => navigate("/contact")}>Contact</LinkItem>
            </LinkList>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Contact</ColumnTitle>
            <FooterText>Plot No. A-66/3, Anand Nagar Additional MIDC,</FooterText>
            <FooterText>Ambernath (E) 421506, District - Thane, MH, India</FooterText>
            <FooterText>+91-9820-556-556</FooterText>
            <FooterText>rainbowgold777@yahoo.com</FooterText>
          </FooterColumn>
        </FooterGrid>

        <BottomBar>
          <span>© {new Date().getFullYear()} Rainbow Gold. All rights reserved.</span>
          <span>www.rainbowgoldindia.com</span>
        </BottomBar>
      </FooterMain>
    </FooterWrapper>
  );
};

export default Footer;