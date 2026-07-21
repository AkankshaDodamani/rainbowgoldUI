// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import topLeftImg from "../assets/top-left.png"
import topRightImg from "../assets/top-right.png"
import bottomLeftImg from "../assets/bottom-left.png"
import bottomRightImg from "../assets/bottom-right.png"

// ================= Animations =================

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ================= Styled Components =================

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8ECD6; /* Outer Cream Background */
  font-family: 'Inter', system-ui, sans-serif;
  padding: 1.5rem;
`;

const LoginCard = styled.div`
  position: relative;
  background: #ffffff;
  width: 100%;
  max-width: 420px;
  padding: 3rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(59, 28, 16, 0.08);
  border: 1px solid rgba(59, 28, 16, 0.05);
  overflow: hidden; /* Clips the corner images so they don't bleed out */
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

// --- Corner Decorations ---

const CornerDecoration = styled.img`
  position: absolute;
  width: 180px; 
  height: auto;
  opacity: 0.15; /* Keeps the images subtle */
  z-index: 0; /* Puts them behind the content */
  pointer-events: none; /* Ensures users can click inputs/buttons through the image */
  
  /* Use multiply for PNGs so the white background becomes transparent */
  mix-blend-mode: multiply; 
`;

const TopLeftDecoration = styled(CornerDecoration)`
  top: -10px;
  left: -10px;
`;

const TopRightDecoration = styled(CornerDecoration)`
  top: -10px;
  right: -10px;
`;

const BottomLeftDecoration = styled(CornerDecoration)`
  bottom: -10px;
  left: -10px;
`;

const BottomRightDecoration = styled(CornerDecoration)`
  bottom: -10px;
  right: -10px;
  /* Note: Since your bottom-right asset is a JPG, you might need to use 
     mix-blend-mode: screen or lighten depending on if the background is pure black,
     or convert it to a transparent PNG for the best effect. */
`;

// --- Interactive Content Wrapper ---

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10; /* Lifts the form above the background images */
  display: flex;
  flex-direction: column;
`;

const HeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const LockIcon = styled.div`
  width: 56px;
  height: 56px;
  background: #2B1A13;
  color: #D4A017; /* Gold */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 16px rgba(43, 26, 19, 0.2);
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: #3b1c10;
  margin: 0 0 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #8c7b70;
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 700;
  color: #4a3a2c;
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  padding-right: ${({ $hasIcon }) => ($hasIcon ? "2.5rem" : "1rem")};
  font-size: 0.95rem;
  color: #3b1c10;
  background: #ffffff;
  border: 1px solid #e0c9a6;
  border-radius: 12px;
  transition: all 0.2s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #D4A017;
    box-shadow: 0 0 0 4px rgba(212, 160, 23, 0.1);
  }

  &::placeholder {
    color: #b5a89f;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 0.75rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #8c7b70;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #3b1c10;
  }
  
  &:focus {
    outline: none;
    color: #D4A017;
  }
`;

const ErrorMessage = styled.div`
  color: #C8102E;
  background: rgba(200, 16, 46, 0.05);
  border-left: 3px solid #C8102E;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 4px;
  margin-bottom: -0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.1rem;
  margin-top: 1rem;
  background: #2B1A13;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1A110E;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 28, 16, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

// ================= SVG Icons =================

const PadlockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

// ================= Main Component =================

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Placeholder Validation
    if (credentials.username === "admin" && credentials.password === "rainbow2026") {
      navigate("/admin-dashboard"); 
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <PageWrapper>
      <LoginCard>
        {/* Background Decorative Images */}
        <TopLeftDecoration src={topLeftImg} alt="" />
        <TopRightDecoration src={topRightImg} alt="" />
        <BottomLeftDecoration src={bottomLeftImg} alt="" />
        <BottomRightDecoration src={bottomRightImg} alt="" />

        {/* Foreground Content */}
        <ContentWrapper>
          <HeaderBlock>
            <LockIcon>
              <PadlockIcon />
            </LockIcon>
            <Title>Admin Portal</Title>
            <Subtitle>Secure access for Rainbow Gold staff</Subtitle>
          </HeaderBlock>

          <Form onSubmit={handleLogin}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter admin username"
                value={credentials.username}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <PasswordWrapper>
                <Input
                  id="password"
                  name="password"
                  $hasIcon={true}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <ToggleButton 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </ToggleButton>
              </PasswordWrapper>
            </FormGroup>

            <SubmitButton type="submit">Secure Login</SubmitButton>
          </Form>
        </ContentWrapper>
      </LoginCard>
    </PageWrapper>
  );
};

export default AdminLogin;