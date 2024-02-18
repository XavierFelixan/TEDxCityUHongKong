import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import DarkWave from "../Assets/wave_dark_red.svg";
import LightWave from "../Assets/wave_tedx_red.svg";


const Container = styled.div``
const BannerWrapper = styled.div`
    box-shadow: 0px 6px 4.4px rgba(0, 0, 0, 0.25);
`;
const Text = styled.h1``;
const Vector = styled.img``;

export const Banner = ({text}) =>{
    return(
        <Container>
            <BannerWrapper className="relative flex justify-center items-center min-h-72 w-full bg-black">
                <Text className="text-white text-6xl font-headerfont">{text}</Text>
                <Vector src={DarkWave} alt="Dark Wave Vector" className="absolute top-0 left-0 w-full h-full"/>
                <Vector src={LightWave} alt="Light Wave Vector" className="absolute top-0 left-0 w-full h-full"/>
            </BannerWrapper>
        </Container>
    )
}