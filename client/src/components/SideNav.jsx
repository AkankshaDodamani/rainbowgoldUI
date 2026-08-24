// components/SideNav.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// ---- logic ----

const navItems = [
  {
    key: "brands",
    label: "Brands",
    path: "/rainbow-admin/manage-brands",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <rect x="9" y="2" width="6" height="20" rx="2" />
      </svg>
    ),
  },
  {
    key: "products",
    label: "Products",
    path: "/rainbow-admin/manage-products",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: "contact",
    label: "Contact Inbox",
    path: "/rainbow-admin/manage-contacts",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7 10-7" />
      </svg>
    ),
  },
];

// ---- styled components ----

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(20, 16, 10, 0.4); /* Dark semi-transparent background */
    z-index: 40;
    backdrop-filter: blur(2px);
  }
`;

const Wrapper = styled.aside`
  width: 220px;
  flex-shrink: 0;
  min-height: 100vh;
  background: #241c14;
  padding-bottom: 28px;
  position: relative;
  overflow: hidden;
  z-index: 50;
  transition: transform 0.3s ease-in-out;

  /* Mobile Styles: Turn into a fixed slide-out menu */
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
    /* Slide in if open, slide out completely to the left if closed */
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  }
`;

const DripHeader = styled.svg`
  display: block;
  width: 100%;
  height: 64px;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px 0;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #c7bfae;
  border-left: 3px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
    border-left: 3px solid #d8ae4d;
  }
`;

const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
`;

// Accept isOpen and onClose as props
const SideNav = ({ isOpen, onClose }) => {
  return (
    <>
      {/* The overlay captures clicks outside the menu on mobile to close it */}
      <Overlay $isOpen={isOpen} onClick={onClose} />
      
      <Wrapper $isOpen={isOpen}>
        <DripHeader viewBox="0 0 220 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,0 H220 V18
               C210,18 205,34 196,34 C188,34 186,20 178,20 C170,20 168,40 158,40
               C150,40 148,22 138,22 C128,22 126,44 116,44
               C106,44 104,24 94,24 C84,24 82,38 72,38
               C64,38 62,20 52,20 C44,20 42,36 32,36
               C24,36 22,18 12,18 C6,18 3,26 0,26 Z"
            fill="#3d160f"
          />
        </DripHeader>

        <NavList>
          {navItems.map((item) => (
            <StyledNavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={onClose} // Auto-close the mobile menu when a link is clicked!
            >
              <IconWrap>{item.icon}</IconWrap>
              {item.label}
            </StyledNavLink>
          ))}
        </NavList>
      </Wrapper>
    </>
  );
};

export default SideNav;