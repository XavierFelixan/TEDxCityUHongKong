import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";


const Container = styled.div``
const FooterContainer = styled.div``
const CopyrightWrapper = styled.div``;
const Copyright = styled.p``;
const SocialMediaWrapper = styled.div``;
const SocialMediaLogoWrapper = styled.a`
    &:hover {
        cursor: pointer;
    }
`;
export default function Footer() {
    const sizing = "w-7 h-7"
    const Social_media_logo = [<AiOutlineInstagram className={sizing}/>, <AiOutlineFacebook className={sizing}/>, <AiOutlineMail className={sizing}/>]
    return (
        <Container>
            <FooterContainer className="flex justify-between items-center h-24 w-full bg-black px-8">
                <CopyrightWrapper className="flex">
                    <Copyright className="text-gray">
                        Copyright © 2024
                    </Copyright>
                    <Copyright className="text-white">
                        &nbsp; TEDxCityUHong Kong
                    </Copyright>
                </CopyrightWrapper>
                <SocialMediaWrapper className="flex justify-between items-center text-white">
                    {Social_media_logo.map((logo) => (
                        <SocialMediaLogoWrapper className="mx-11">
                            {logo}
                        </SocialMediaLogoWrapper>
                    ))}
                </SocialMediaWrapper>
            </FooterContainer>
        </Container>
    )
}