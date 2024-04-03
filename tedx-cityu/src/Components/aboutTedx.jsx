import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PastEvent from "../Assets/PastEvent.png";


const Container = styled.div``
const ContentWrapper = styled.div``;
const Partition = styled.div``;
const TedxdescWrapper = styled.div``;
const Tedxdesc = styled.div``;


export default function AboutTedx(){
    return(
        <Container className="flex justify-center w-[100%] ">
            <ContentWrapper className="flex flex-col justify-center">
                <Partition className="flex justify-center items-center min-w-full min-h-[400px] mb-5 bg-cover bg-no-repeat text-white text-7xl font-semibold font-textfond text-center md:text-left " style={{ backgroundImage: `url(${PastEvent})` }}>
                    What is TEDx
                </Partition>
                <TedxdescWrapper className="flex justify-center mx-5 md:mx-20 md:my-5 text-xl">
                    <Tedxdesc>
                        In the spirit of ideas worth spreading, <span className="text-red font-bold font-textfont">TED</span> has created a program called <span className="text-red font-bold">TEDx</span>.
                        <span className="text-red font-bold"> TEDx</span> is a program of local, self-organized events that bring people together to share a <span className="text-red font-bold">TED</span>-like experience. 
                        Our event is called <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span>, 
                        where <span className="text-red font-bold">x</span> = independently organized <span className="text-red font-bold">TED</span> event. 
                        At our <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span> event, 
                        <span className="text-red font-bold"> TED</span> Talks video and live speakers will combine to spark deep discussion and connection in a small group. 
                        The <span className="text-red font-bold">TED</span> Conference provides general guidance for the 
                        <span className="text-red font-bold"> TEDx</span> program, but individual <span className="text-red font-bold">TEDx</span> events, including ours, are self-organized.
                    </Tedxdesc>
                </TedxdescWrapper>
            </ContentWrapper>
        </Container>
    )
}