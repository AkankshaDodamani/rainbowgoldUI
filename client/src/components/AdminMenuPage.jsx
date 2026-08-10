// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../middleware/authSlice.js";

// ==========================================
// STYLED COMPONENTS
// ==========================================
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #e3e0d8;
  border-radius: 10px;
  padding: 8px 14px;
  font-size: 13px;
  color: #3a352d;
  cursor: pointer;
  position: relative; /* Crucial for the absolute dropdown */
  user-select: none;
`;

const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover; 
  background: #e7e2d4; 
`;

const Chevron = styled.span`
  color: #8a8375;
  font-size: 12px;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 115%;
  right: 0;
  background: #fff;
  border: 1px solid #e6e3da;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 140px;
  z-index: 50;
  overflow: hidden;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  font-size: 13px;
  color: #c1443a; 
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #fdf5f4;
  }
`;

const LogoutIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

// ==========================================
// MAIN COMPONENT
// ==========================================
const AdminProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = (e) => {
    e.stopPropagation(); // Stop the click from toggling the menu again
    
    // Wipe token & user from Redux and LocalStorage
    dispatch(logoutUser()); 
    
    // Kick user to login page
    navigate("/rainbow-admin"); 
  };

  return (
    <ProfileWrapper ref={dropdownRef} onClick={() => setIsOpen(!isOpen)}>
      <Avatar src="/favicon.ico" alt="Admin Profile" />
      Admin profile
      <Chevron $isOpen={isOpen}>⌄</Chevron>

      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={handleLogout}>
            <LogoutIcon />
            Logout
          </DropdownItem>
        </DropdownMenu>
      )}
    </ProfileWrapper>
  );
};

export default AdminProfileMenu;