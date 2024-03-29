import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PastEvent from "../Assets/PastEvent.png";


const Container = styled.div``
const ContentWrapper = styled.div``;
const Partition = styled.div``;
const TedxdescWrapper = styled.div``;
const Tedxdesc = styled.div``;


export default function AbouTedx(){
    return(
        <Container className="flex justify-center mb-5 w-[100%] ">
            <ContentWrapper className="flex flex-col justify-center">
                <Partition className="flex justify-center items-center min-w-full min-h-[400px] mb-5 bg-cover bg-no-repeat text-white text-4xl font-semibold font-textfond" style={{ backgroundImage: `url(${PastEvent})` }}>
                    What is TEDx
                </Partition>
                <TedxdescWrapper className="flex justify-center w-[1200px]">
                    <Tedxdesc>
                        In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. 
                        Our event is called <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span>, where x = independently organized TED event. At our <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span> event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. 
                        The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                    </Tedxdesc>
                </TedxdescWrapper>
            </ContentWrapper>
        </Container>
    )
}