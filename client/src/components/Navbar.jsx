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
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  background-color: #f8ecd6;
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
`;

const LogoLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 42px;
  width: auto;
  object-fit: contain;
  display: block;
`;

const Divider = styled.span`
  width: 1px;
  height: 32px;
  background-color: #4a3a2c;
  opacity: 0.35;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
  color: ${({ $active }) => ($active ? "#3b1c10" : "#4a3a2c")};
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  cursor: pointer;

  &:hover {
    color: #3b1c10;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff8ee;
  border: 1px solid #e0c9a6;
  border-radius: 10px;
  padding: 0.5rem 0;
  list-style: none;
  min-width: 180px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  display: none;
  z-index: 100;

  ${NavItem}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li`
  padding: 0.75rem 1rem;
  color: #4a3a2c;
  font-weight: 500;

  &:hover {
    background: #f8ecd6;
    color: #3b1c10;
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
          <NavItem $active={location.pathname.startsWith("/brands")}>
            Brands
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

          <NavItem
            $active={location.pathname === "/contact"}
            onClick={() => navigate("/contact")}
          >
            Contact
          </NavItem>

          <NavItem
            $active={location.pathname === "/about"}
            onClick={() => navigate("/about")}
          >
            About
          </NavItem>
        </NavLinks>
      </Nav>

      <DripStrip />
    </NavWrapper>
  );
};

export default Navbar;