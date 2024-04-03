import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "styled-components";


import Speakerdata from "../Data/SpeakerData.json"

const Container = styled.div`
background-color: rgb(0, 0, 0);
`
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const Card = styled.div``;
const Image = styled.img``;
const Data = styled.div``;




export default function SpeakerCard() {
    return (
        <Container>
            <div className="mt-5 font-bold text-white text-center text-3xl py-3 lg:text-7xl lg:py-7">
                Speakers
            </div>
            <CardWrapper>
            {Speakerdata.map((item, index) => (
                <Link className="my-2 mx-3 text-white pb-5" key={index} to={item.fname}>
                    <Card className="flex justify-center items-center overflow-hidden inline-block">
                        <Image src= {require("../Assets/Members/Speaker/" + item.img) } alt={item.fname} className="w-26 h-26 lg:w-48 lg:h-48 rounded-md hover:scale-110 transition-transform duration-500 cursor-pointer mx-auto"/>
                    </Card>
                    <div className="text-center font-bold text-md lg:text-3xl mt-2 lg:mt-5">
                        {item.fname}
                    </div>
                </Link>
            ))}
            </CardWrapper>
        </Container>
    )
}