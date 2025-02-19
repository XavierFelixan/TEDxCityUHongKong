import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logoWhite from "../Assets/logo-white.png";
import logoBlack from "../Assets/logo-black.png";

const Container = styled.div``;
const NavbarWrapper = styled.div``;

const LogoWrapper = styled.a`
    &:hover {
        cursor: pointer;
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
const Logo = styled.img``;

export default function Navbar() {
    const Selection_list = [
        { label: 'About', url: '/about' },
        // { label: 'Sponsors', url: '/sponsor' },
        { label: 'Crew', url: '/crew' },
        { label: 'Past Events', url: '/pastevent' }
    ];
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <NavbarWrapper className="flex justify-between items-center px-8 py-9 bg-white w-full">
                <LogoWrapper className="flex items-center justify-center w-96 h-14" onClick={() => handleNavigate('/')}>
                    <Logo src={logoBlack} alt="TEDxCityU" className="h-full" />
                </LogoWrapper>
                <NavSelectionWrapper className="flex items-center justify-around h-14">
                    {Selection_list.map((selection, index) => (
                        <Selection
                            key={index}
                            className="text-black mx-11 text-base md:text-xl hover:text-yellow-400"
                            onClick={() => handleNavigate(selection.url)}
                        >
                            {selection.label}
                        </Selection>
                    ))}
                    <Selection
                        className="text-black mx-11 text-base md:text-xl hover:text-yellow-400"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfujwCWqpJWzu89hCKiVtBcFli5rVOhqM5uGHtO1AuZEcX6jg/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Registration
                    </Selection>
                </NavSelectionWrapper>
            </NavbarWrapper>
        </Container>
    );
}