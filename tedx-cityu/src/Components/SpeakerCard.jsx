import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "styled-components";


import Speakerdata from "../Data/SpeakerData.json"

const Container = styled.div`
background-color: rgb(217 217 217);
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
            <div className="font-bold text-center text-7xl my-7">
                Speakers
            </div>
            <CardWrapper>
            {Speakerdata.map((item, index) => (
                <Link className="my-2" key={index} to={`/speaker/${item.path}`}>
                    <Card className="flex justify-center items-center overflow-hidden inline-block">
                        <Image src= {require("../Assets/Members/Speaker/" + item.img) } alt={item.fname} className="w-48 h-48 rounded-md hover:scale-110 transition-transform duration-500 cursor-pointer mx-auto"/>
                    </Card>
                    <div className="text-center font-bold text-xl mt-5">
                        {item.fname}
                    </div>
                </Link>
            ))}
            </CardWrapper>
        </Container>
    )
}