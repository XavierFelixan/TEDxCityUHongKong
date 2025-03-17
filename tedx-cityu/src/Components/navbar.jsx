import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logoWhite from "../Assets/logo-white.png";
import logoBlack from "../Assets/logo-black.png";

const breakpoints = {
    tablet: 1024,
    mobile: 768,
};

const Container = styled.div`
    @media (max-width: ${breakpoints.tablet}px) {
        display: flex;
        flex-direction: column;
  }
`;

const NavbarWrapper = styled.div`
    @media (max-width: ${breakpoints.tablet}px) {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        background-color: white;
        align-items: center;
  }
`;

const LogoWrapper = styled.a`
    &:hover {
        cursor: pointer;
    }
`;

const BurgerMenu = styled.div`
  cursor: pointer;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: white;
  width: 100%;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavSelectionWrapper = styled.div``;

const Selection = styled.a`
    padding: 5px;
    text-align: center;
    transition: all 0.3s ease;
    &:hover {
        // color: #FCBA2E;
        cursor: pointer;
        background-color: #FF0000;
    }
`;
const Logo = styled.img`
    @media (max-width: ${breakpoints.tablet}px) {
        width: 70%;
        height: auto;
    }
`;

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoints.tablet);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const Selection_list = [
        { label: 'About', url: '/about' },
        // { label: 'Sponsors', url: '/sponsor' },
        { label: 'Crew', url: '/crew' },
        { label: 'Past Events', url: '/pastevent' }
    ];
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoints.tablet);
        }
    
        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            }
        }, []);

    return (
        <Container>
            {isMobile ? (
                <NavbarWrapper>
                    <LogoWrapper onClick={() => handleNavigate(`/`)}>
                        <Logo src={logoBlack} alt="TEDxCityU" />
                    </LogoWrapper>
                    <BurgerMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <div className="text-black text-center text-5xl">☰</div>
                    </BurgerMenu>
                </NavbarWrapper>
            ) : (
                <NavbarWrapper>
                    <LogoWrapper onClick={() => handleNavigate(`/`)}>
                        <Logo src={logoBlack} alt="TEDxCityU" />
                    </LogoWrapper>
                    <NavSelectionWrapper>
                        {Selection_list.map((selection, index) => (
                            <Selection key={index} onClick={() => handleNavigate(selection.url)}>
                                {selection.label}
                            </Selection>
                        ))}
                        <Selection>
                            <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/C8ZV2JNfhEAnJ1GG9">
                                Registration
                            </a>
                        </Selection>
                    </NavSelectionWrapper>
                </NavbarWrapper>
            )}
            {isMobile && isMobileMenuOpen && (
                <MobileMenu>
                    {Selection_list.map((selection, index) => (
                        <Selection key={index} onClick={() => handleNavigate(selection.url)} className="my-2 text-3xl text-black text-center">
                            {selection.label}
                        </Selection>
                    ))}
                    <Selection className="my-2 text-3xl text-black text-center">
                        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/C8ZV2JNfhEAnJ1GG9">Registration</a>
                    </Selection>
                </MobileMenu>
            )}
        </Container>
    );
}