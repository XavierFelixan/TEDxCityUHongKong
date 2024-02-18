import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";



const Container = styled.div``
const FooterContainer = styled.div``
const CopyrightWrapper = styled.div``;
const Copyright = styled.p``;
const SocialMediaWrapper = styled.div``;
const SocialMediaLogoWrapper = styled.div``
const SocialMediaLogo = styled.img``;

export default function Footer() {

    const Social_media_logo = [""]

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
                <SocialMediaWrapper className="flex justify-between items-center">

                </SocialMediaWrapper>
            </FooterContainer>
        </Container>
    )
}