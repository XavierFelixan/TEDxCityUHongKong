import React, {useState, useEffect} from "react";
import {styled} from "styled-components";
import Timer from "./timer";
import Artpiece from "../Assets/Artpiece.png";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @media (min-width: 768px) { // Assuming 768px is the tablet breakpoint
    padding: 4rem;
    margin:0;
  }

  @media (min-width: 1024px) { // Adjust for desktop view if necessary
    flex-direction: row;
    align-items: center;
  }
`;

const CounterContainer = styled.div`
  height: 18rem;
  padding: 0.75rem;

  @media (min-width: 768px){ // Adjust for tablet view
    text-align:center;
  }

  @media (min-width: 1024px) { // Adjust for desktop view
    text-align: left;
    padding: 2.25rem 3.5rem;
  }
  
`;

const TitleText = styled.div`
  @media (min-width: 768px){ // Adjust for tablet view
    text-align:center;
    // font-size: 2rem;
    font-weight: 600;
    margin: 1rem;
  }

  @media (min-width: 1024px) { // Adjust for desktop view
    text-align: left;
    margin:0.5rem;
  }
`;

const DescriptionWrapper = styled.div`
  font-size: 1.25rem;
  font-weight: normal;

  @media (min-width: 768px) { // Adjust for tablet view
    padding-top: 2.25rem;
    padding-bottom: 0;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
`;

const Left = styled.div`
  width: 100%;
  align-items: center;


  @media (min-width: 1024px) { // Desktop view
    width: 50%;
    justify-content: flex-start;
  }
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media (min-width: 1024px) { // Desktop view
    width: 50%;
    justify-content: flex-start; 
  }
`;

const ArtWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const ArtPic = styled.img`
  width: 60%;
  height: auto;
`;

export default function Counter() {
  return (
    <Container className="flex justify-center w-full">
      <Wrapper className="md:mx-8">
        <Left className="w-full md:w-1/2">
          <CounterContainer className="flex flex-col justify-center text-center md:text-left bg-red h-72 w-full py-3 md:py-9 px-5 md:px-14">
            <TitleText className="text-white text-center md:text-left text-4xl font-semibold font-textfont my-2">TEDxCityUHongKong 2024:</TitleText>
            <TitleText className="text-white text-4xl font-semibold font-textfont my-2">SPILL THE TEA</TitleText>
            <Timer />
          </CounterContainer>
          <DescriptionWrapper className="w-full px-5 py-5 md:pt-9 md:pb-0 md:px-14 font-textfont text-xl">
            Our theme for the <span className="text-red font-bold">TEDx</span>
            <span className="font-bold">CityUHongKong 2024</span> event is “
            <span className="text-red font-bold">Spill the Tea</span>”.
            We expect our speakers to share their "secrets" with the audience.
            These secrets may include industry insider insights or the keys to
            their personal successes. We are giving the speakers a platform to
            talk about their inspiring achievements in a beneficial way for the
            audience.
          </DescriptionWrapper>
        </Left>

        <Right className="w-full md:w-1/2">
          <ArtWrapper>
            <ArtPic src={Artpiece} alt="TEDxCityUHongKong 2024 Art" className="mx-auto w-[60%] h-[60%]"/>
          </ArtWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
}