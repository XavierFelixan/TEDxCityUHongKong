import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoWhite from "../Assets/logo-white.png";

// Add a breakpoint for tablet
const tabletBreakpoint = '1024px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: black;
  align-items: center;
`;
const LogoWrapper = styled.div`
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  cursor: pointer;
  // Hide the burger menu on tablet devices and larger screens
  @media (min-width: ${tabletBreakpoint}) {
    display: none;
  }
`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: black;
  width: 100%;
  // Only show the mobile menu if the screen size is less than 1024px
  @media (min-width: ${tabletBreakpoint}) {
    display: none;
  }
`;

const Selection = styled.div``;

const Logo = styled.img`
  width: 70%;
  height: auto;
`;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Selection_list = [
    { label: "About", url: "/about" },
    { label: "Crew", url: "/crew" },
    { label: "Past Event", url: "/pastevent" },
  ];

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <Container>
      <NavbarWrapper>
        <LogoWrapper onClick={() => handleNavigate(`/`)}>
          <Logo src={logoWhite} alt="TEDxCityU" />
        </LogoWrapper>
        <BurgerMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="text-white text-center text-2xl">☰</div>
        </BurgerMenu>
      </NavbarWrapper>
      {isMobileMenuOpen && (
        <MobileMenu>
          {Selection_list.map((selection, index) => (
            <Selection key={index} onClick={() => handleNavigate(selection.url)} className="my-2 text-3xl text-white text-center">
              {selection.label}
            </Selection>
          ))}
          <Selection className="my-2 text-3xl text-white text-center">
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfujwCWqpJWzu89hCKiVtBcFli5rVOhqM5uGHtO1AuZEcX6jg/viewform">Registration</a>
          </Selection>
        </MobileMenu>
      )}
    </Container>
  );
}