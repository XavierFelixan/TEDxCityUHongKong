import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logoWhite from "../Assets/logo-white.png";

const Container = styled.div``;
const NavbarWrapper = styled.div``;
const LogoWrapper = styled.a`
    &:hover {
        cursor: pointer;
    }
`;
const NavSelectionWrapper = styled.div``;
const Selection = styled.a`
    &:hover {
        color: #FCBA2E;
        cursor: pointer;
    }
`;
const Logo = styled.img``;

export default function Navbar() {
    const Selection_list = [
        { label: "About", url: "/about" },
        // { label: "Sponsors", url: "/sponsor" },
        { label: "Crew", url: "/crew" },
        { label: "Past Event", url:"/pastevent"}
    ];
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <NavbarWrapper className="flex justify-between px-8 py-9 bg-black w-full max-h-28">
                <LogoWrapper className="w-96 h-14" onClick={() => handleNavigate(`/`)}>
                    <Logo src={logoWhite} alt="TEDxCityU" />
                </LogoWrapper>
                <NavSelectionWrapper className="flex justify-around items-end h-14">
                    {Selection_list.map((selection, index) => (
                        <Selection key={index} className="text-white mx-11 text-base lg:text-xl" onClick={() => handleNavigate(`${selection.url}`)}>
                            <a target="_blank">
                                {selection.label}
                            </a>
                        </Selection>
                    ))}
                    <Selection className="text-white mx-11 text-base lg:text-xl">
                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfujwCWqpJWzu89hCKiVtBcFli5rVOhqM5uGHtO1AuZEcX6jg/viewform">Registration</a>
                    </Selection>
                </NavSelectionWrapper>
            </NavbarWrapper>
        </Container>
    );
}