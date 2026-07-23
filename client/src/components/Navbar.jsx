/* eslint-disable no-unused-vars */
// components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import chocolateDrip from "../assets/chocolate_drip.png";
import wobniarLogo from "../assets/wobniar.png";
import rainbowGoldLogo from "../assets/rainbow_logo.png";
import AboutUs from "../pages/AboutUs.jsx";

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 2.5rem;
  background-color: #f8ecd6;
  font-family: "Poppins", "Segoe UI", system-ui, sans-serif;

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
  }
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

  @media (max-width: 768px) {
    height: 32px;
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 30px;
  background-color: #4a3a2c;
  opacity: 0.35;

  @media (max-width: 768px) {
    height: 24px;
  }
`;

/* Desktop links - hidden on mobile */
const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    padding: 0.4rem 1.1rem;
    font-size: 0.85rem;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

/* --- Mobile hamburger button --- */
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
  z-index: 60;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
`;

const Bar = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: #4a3a2c;
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${({ $open }) =>
    $open &&
    `
    &:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `}
`;

/* --- Mobile slide-down menu --- */
const MobileMenu = styled.ul`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0.5rem 1.25rem 1.25rem;
    background-color: #f8ecd6;
    gap: 0.25rem;
  }
`;

const MobileNavItem = styled.li`
  font-size: 0.95rem;
  font-weight: 600;
  color: #4a3a2c;
  padding: 0.7rem 0;
  border-bottom: 1px solid rgba(74, 58, 44, 0.12);
  cursor: pointer;
`;

const MobileBrandsToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileDropdown = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0.5rem 0.75rem;
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  gap: 0.4rem;
`;

const MobileDropdownItem = styled.li`
  font-size: 0.88rem;
  font-weight: 500;
  color: #4a3a2c;
  padding: 0.4rem 0;
  cursor: pointer;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  const brands = [
    { name: "Ace Eclairs", path: "/brands/ace-eclairs" },
    { name: "Benrove", path: "/brands/benrove" },
    { name: "Bentley", path: "/brands/bentley" },
    { name: "BerryDor", path: "/brands/berrydor" },
    { name: "Eion", path: "/brands/eion" },
  ];

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setBrandsOpen(false);
  };

  const goTo = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  return (
    <NavWrapper>
      <Nav>
        <LogoLink onClick={() => goTo("/")}>
          <LogoImage src={wobniarLogo} alt="Wobniar" />
          <Divider />
          <LogoImage src={rainbowGoldLogo} alt="Rainbow Gold" />
        </LogoLink>

        {/* Desktop nav */}
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

          <li>
            <ContactButton onClick={() => navigate("/contact")}>
              Contact
            </ContactButton>
          </li>
        </NavLinks>

        {/* Mobile hamburger */}
        <HamburgerButton
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Bar $open={menuOpen} />
          <Bar $open={menuOpen} />
          <Bar $open={menuOpen} />
        </HamburgerButton>
      </Nav>

      {/* Mobile menu panel */}
      <MobileMenu $open={menuOpen}>
        <MobileNavItem>
          <MobileBrandsToggle onClick={() => setBrandsOpen((prev) => !prev)}>
            <span>Brands</span>
            <span>{brandsOpen ? "-" : "+"}</span>
          </MobileBrandsToggle>
          <MobileDropdown $open={brandsOpen}>
            {brands.map((brand) => (
              <MobileDropdownItem
                key={brand.path}
                onClick={() => goTo(brand.path)}
              >
                {brand.name}
              </MobileDropdownItem>
            ))}
          </MobileDropdown>
        </MobileNavItem>

        <MobileNavItem onClick={() => goTo("/about")}>About</MobileNavItem>
        <MobileNavItem onClick={() => goTo("/contact")}>Contact</MobileNavItem>
      </MobileMenu>

      <DripStrip />
    </NavWrapper>
  );
};

export default Navbar;