import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "styled-components";


import Performerdata from "../Data/PerformerData.json"

const Container = styled.div`
background-color: rgb(255 255 255);
`
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const Card = styled.div``;
const Image = styled.img``;
const Data = styled.div``;
const Performer = styled.div``;




export default function PerformerCard() {
    return (
        <Container>
            <div className="font-bold text-center text-3xl py-3 font-textfont md:text-7xl md:py-7">   
                Performers
            </div>
            <CardWrapper>
            {Performerdata.map((item, index) => (
                <Performer className="my-2 mx-3 pb-5" key={index} to={`/Performer/${item.path}`}>
                    <Card className="flex justify-center items-center overflow-hidden inline-block">
                        <Image src= {require("../Assets/Members/Performer/" + item.img) } alt={item.fname} className="w-26 h-26 md:w-48 md:h-48 rounded-md transition-transform duration-500 cursor-pointer mx-auto"/>
                    </Card>
                    <div className="text-center font-textfont font-bold text-md md:text-3xl mt-2 md:mt-5">
                        {item.fname}
                    </div>
                </Performer>
            ))}
            </CardWrapper>
        </Container>
    )
}