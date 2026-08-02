/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const navItems = [
  { key: "brands", label: "Brands", icon: "❚", route: "/adminBrands" },
  { key: "products", label: "Products", icon: "▣", route: "/adminProducts" },
  { key: "contact", label: "Contact Inbox", icon: "✉", route: "/adminContact" },
];

const SidebarWrapper = styled.aside`
  width: 220px;
  flex-shrink: 0;
  min-height: 100vh;
  background: #241c14;
  color: #d8d2c6;
  padding: 28px 20px;
`;

const BrandMark = styled.div`
  font-family: Georgia, "Times New Roman", serif;
  font-size: 24px;
  font-weight: 700;
  color: #d8ae4d;
  margin-bottom: 36px;
`;

const SidebarSubtitle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #a89f8f;
  margin-top: 2px;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#fff" : "#c7bfae")};
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.06)" : "transparent"};
  border-left: 3px solid
    ${({ $active }) => ($active ? "#d8ae4d" : "transparent")};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const NavIcon = styled.span`
  width: 18px;
  text-align: center;
  font-size: 14px;
`;

export default function Sidebar({ active = "dashboard" }) {
  return (
    <SidebarWrapper>
      <BrandMark>
        Wobniar<sup>®</sup>
        <SidebarSubtitle>Admin Portal</SidebarSubtitle>
      </BrandMark>

      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.key} $active={item.key === active}>
            <NavIcon>{item.icon}</NavIcon>
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </SidebarWrapper>
  );
}
