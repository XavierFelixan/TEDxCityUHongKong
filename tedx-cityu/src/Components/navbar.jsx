import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logoWhite from "../Assets/logo-white.png";

const Container = styled.div``;
const NavbarWrapper = styled.div``;
const LogoWrapper = styled.div``;
const NavSelectionWrapper = styled.div``;
const Selection = styled.a`
    &:hover {
        color: #FCBA2E;
        cursor: pointer;
    }
`;
const Logo = styled.img``;


export default function Navbar() {
    const Selection_list = ["About", "Crew", "Past Event", "Join Us", "Registration"];
    return (
        <Container>
            <NavbarWrapper className="flex justify-between px-8 py-9 bg-black w-full max-h-28">
                <LogoWrapper className="w-96 h-14">
                    <Logo src={logoWhite} alt="TEDxCityU" />
                </LogoWrapper>
                <NavSelectionWrapper className="flex justify-around items-end h-14">
                    {Selection_list.map((selection) => (
                        <Selection className="text-white mx-11">{selection}</Selection>
                    ))}
                </NavSelectionWrapper>
            </NavbarWrapper>
        </Container>
    );
}