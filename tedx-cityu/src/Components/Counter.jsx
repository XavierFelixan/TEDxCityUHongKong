import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Timer from "./timer";
import Artpiece from "../Assets/Artpiece.png";

const Container = styled.div``;
const Wrapper = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const CounterContainer = styled.div``;
const DescriptionWrapper = styled.div``;

const TitleText = styled.div``;
const ArtWrapper = styled.div``;
const ArtPic = styled.img``;
const Description = styled.div``;

export default function Counter(){
    return(
        <Container className="flex justify-center w-full">
            <Wrapper className="flex flex-col md:flex-row items-center justify-center w-full md:mx-24 md:my-16">
                <Left className="w-full md:w-1/2">
                    <CounterContainer className="flex flex-col justify-center text-center md:text-left bg-red h-72 w-full py-3 md:py-9 px-5 md:px-14">
                        <TitleText className="text-white text-center md:text-left text-4xl font-semibold font-textfont my-2">
                            TEDxCityUHongKong 2024:
                        </TitleText>
                        <TitleText className="text-white text-4xl font-semibold font-textfont my-2">
                            SPILL THE TEA
                        </TitleText>
                        <Timer/>
                    </CounterContainer>
                    <DescriptionWrapper className="w-full px-5 py-5 md:pt-9 md:pb-0 md:px-14 font-textfont text-xl">
                        Our theme for the <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span> event is “<span className="text-red font-bold">Spill the Tea</span>”. 
                        We expect our speakers to share their "secrets" to the audience. The secrets that we are referring may include industry insider insights, or the key to their personal successes. 
                        We are giving the speakers a platform to talk about their inspiring achievements in a beneficial way for the audience. 
                    </DescriptionWrapper>
                </Left>
                <Right className="w-full md:w-1/2">
                    <ArtWrapper>
                        <ArtPic src={Artpiece} className="mx-auto w-[60%] h-[60%]"/>
                    </ArtWrapper>
                </Right>
            </Wrapper>
        </Container>            
    );
}