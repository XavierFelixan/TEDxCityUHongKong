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
const Desciprtion = styled.div``;

const Picture = styled.img``;
const SpeakerLink = styled.a`
    &:hover {
        color: #0000EE;
        cursor: pointer;
    }
`;


const Speaker = ({data}) =>{
    useEffect(() => {
      return () => {
        console.log(data)
      }
    }, [data])
    
    return(
        <Container>
            {data.map((item, index) => (
                <Wrapper key={index} className="flex flex-col items-center md:flex-row md:items-start md:gap-5 md:mt-10 md:mb-10 font-textfont text-center md:text-left justify-center">
                    <Picture
                        src={require("../Assets/Members/Speaker/" + item.img)}
                        alt={item.fname}
                        className="object-scale-down w-48 h-48 md:ml-36 mb-5 md:mb-auto mt-10 md:mt-auto md:my-auto rounded-md"
                    />
                    <Wrapper className="flex flex-col items-center md:items-start">
                        <TitleText className="font-bold text-3xl md:my-0">
                            {item.fname}
                        </TitleText>
                        <DescriptionWrapper className="mx-5 md:mx-0 text-justify text-lg mt-3 md:mt-4 md:mr-36">
                            {item.desc}
                        </DescriptionWrapper>
                        <DescriptionWrapper className="mx-5 md:mx-0 text-lg my-5 md:mt-4 md:mr-36">
                            {item.link && <SpeakerLink target="_blank" href={item.link}>{item.link}</SpeakerLink>}
                        </DescriptionWrapper>
                    </Wrapper>
                </Wrapper>
            ))}
        </Container>
        // <Container className="flex justify-center mt-10">
        //     <Wrapper className="flex items-center">
        //         <Left className="flex flex-col items-center justify-center">
        //             <CounterContainer className="flex flex-col justify-center bg-red h-72 w-[683px] py-9 px-14">
        //                 <TitleText className="text-white text-4xl font-semibold font-textfont my-2">
        //                     TEDxCityUHongKong 2024:
        //                 </TitleText>
        //                 <TitleText className="text-white text-4xl font-semibold font-textfond my-2">
        //                     SPILL THE TEA
        //                 </TitleText>
        //                 <Timer />
        //             </CounterContainer>
        //             <DescriptionWrapper className="w-[683px] py-9 px-14 font-textfont">
        //                 Our theme for the <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span> event is “<span className="text-red font-bold">Spill the Tea</span>”. 
        //                 We expect our speakers to share their "secrets" to the audience. The secrets that we are referring may include industry insider insights, or the key to their personal successes. 
        //                 We are giving the speakers a platform to talk about their inspiring achievements in a beneficial way for the audience. 
        //             </DescriptionWrapper>
        //         </Left>
        //         <Right>
        //             <ArtWrapper className="h-[681px]">
        //                 <ArtPic src={Artpiece} className="h-[681px]"/>
        //             </ArtWrapper>
        //         </Right>
        //     </Wrapper>
        // </Container>            
    );
}

export default Speaker