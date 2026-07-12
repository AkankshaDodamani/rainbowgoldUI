// components/Navbar.jsx
// eslint-disable-next-line no-unused-vars
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
  color: ${({ $active }) => ($active ? "#3b1c10" : "#4a3a2c")};
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  cursor: pointer;

  &:hover {
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

  const links = [
    { label: "Brands", path: "/brands" },
    { label: "Contact", path: "/contact" },
    { label: "About", path: "/about" },
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
          {links.map((link) => (
            <NavItem
              key={link.path}
              $active={location.pathname === link.path}
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </NavItem>
          ))}
        </NavLinks>
      </Nav>

      <DripStrip />
    </NavWrapper>
  );
};

export default Navbar;