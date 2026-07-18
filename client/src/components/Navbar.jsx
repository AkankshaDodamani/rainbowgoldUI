/* eslint-disable no-unused-vars */
// components/Navbar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import chocolateDrip from "../assets/chocolate_drip.png";
import wobniarLogo from "../assets/wobniar.png";
import rainbowGoldLogo from "../assets/rainbow_logo.png";

const NavWrapper = styled.div`
  position: relative;
  z-index: 50;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 2.5rem;
  background-color: #f8ecd6;
  font-family: "Poppins", "Segoe UI", system-ui, sans-serif;
`;

const LogoLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
`;

const Divider = styled.span`
  width: 1px;
  height: 30px;
  background-color: #4a3a2c;
  opacity: 0.35;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

/* Dropdown Styles */
const Dropdown = styled.ul`
  position: absolute;
  top: 120%; 
  left: 0;
  background: #fff8ee;
  border: 1px solid #e0c9a6;
  border-radius: 10px;
  padding: 0.5rem 0;
  list-style: none;
  min-width: 180px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 100;
`;

const DropdownItem = styled.li`
  padding: 0.75rem 1rem;
  color: #4a3a2c;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #f8ecd6;
    color: #3b1c10;
  }
`;

const NavItem = styled.li`
  position: relative;
  padding: 0.5rem 0;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  z-index: 1;

  /* Trigger dropdown on hover */
  &:hover ${Dropdown} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    top: 100%;
  }
`;

/* --- STAGGERED CHARACTER ROLLING ANIMATION --- */
const TextRoll = styled.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
`;

const CharContainer = styled.span`
  position: relative;
  display: inline-block;
`;

const Char = styled.span`
  display: inline-block;
  color: ${({ $active }) => ($active ? "#d89f53" : "#4a3a2c")}; 
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  transform: translateY(0);
  white-space: pre; 

  ${NavItem}:hover & {
    transform: translateY(-100%);
  }
`;

const CharSecondary = styled(Char)`
  position: absolute;
  top: 100%;
  left: 0;
  color: #d89f53; 
`;

/* Component that splits string into array and maps delays */
const RollingLabel = ({ text, $active }) => (
  <TextRoll>
    {text.split("").map((char, index) => {
      // 0.025s delay multiplied by index creates the "stagger"
      const delay = `${index * 0.025}s`; 
      return (
        <CharContainer key={index}>
          <Char $active={$active} style={{ transitionDelay: delay }}>
            {char}
          </Char>
          <CharSecondary $active={$active} style={{ transitionDelay: delay }}>
            {char}
          </CharSecondary>
        </CharContainer>
      );
    })}
  </TextRoll>
);

/* Distinct Contact Button Style (as seen in video) */
const ContactButton = styled.div`
  position: relative;
  padding: 0.5rem 1.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #4a3a2c;
  border: 1.5px solid #4a3a2c;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #4a3a2c; /* Fills button on hover */
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: -1;
  }

  &:hover::before {
    transform: translateY(0);
  }

  &:hover {
    color: #f8ecd6;
  }
`;

const DripStrip = styled.div`
  position: absolute;
  bottom: -75px;
  left: 0;
  width: 100%;
  height: 76px;
  background-image: url(${chocolateDrip});
  background-repeat: repeat-x;
  background-size: auto 65px;
  pointer-events: none;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const brands = [
    { name: "Ace Eclairs", path: "/brands/ace-eclairs" },
    { name: "Benrove", path: "/brands/benrove" },
    { name: "Bentley", path: "/brands/bentley" },
    { name: "BerryDor", path: "/brands/berrydor" },
    { name: "Eion", path: "/brands/eion" },
  ];

  return (
    <NavWrapper>
      <Nav>
        <LogoLink onClick={() => navigate("/")}>
          <LogoImage src={wobniarLogo} alt="Wobniar" />
          <Divider />
          <LogoImage src={rainbowGoldLogo} alt="Rainbow Gold" />
        </LogoLink>

        <NavLinks>
          <NavItem>
            <RollingLabel
              text="Brands"
              $active={location.pathname.startsWith("/brands")}
            />
            <Dropdown>
              {brands.map((brand) => (
                <DropdownItem
                  key={brand.path}
                  onClick={() => navigate(brand.path)}
                >
                  {brand.name}
                </DropdownItem>
              ))}
            </Dropdown>
          </NavItem>

          <NavItem onClick={() => navigate("/about")}>
            <RollingLabel
              text="About"
              $active={location.pathname === "/about"}
            />
          </NavItem>
          
          <NavItem onClick={() => navigate("/reviews")}>
            <RollingLabel
              text="Reviews"
              $active={location.pathname === "/reviews"}
            />
          </NavItem>

          {/* Contact isolated as a distinct button */}
          <li>
            <ContactButton onClick={() => navigate("/contact")}>
              Contact
            </ContactButton>
          </li>
        </NavLinks>
      </Nav>

      <DripStrip />
    </NavWrapper>
  );
};

export default Navbar;