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




export default function PerformerCard() {
    return (
        <Container>
            <div className="font-bold text-center text-4xl my-4">
                Performers
            </div>
            <CardWrapper>
            {Performerdata.map((item, index) => (
                <Link className="my-2 flex flex-col items-center" key={index} to={item.fname}>
                    <Card className="flex justify-center items-center overflow-hidden inline-block w-full">
                        <Image src= {require("../Assets/Members/Performer/" + item.img) } alt={item.fname} className="w-48 h-48 mb-3 rounded-md hover:scale-110 transition-transform duration-500 cursor-pointer"/>
                    </Card>
                    <div className="text-center font-bold text-xl">
                        {item.fname}
                    </div>
                </Link>
            ))}
            </CardWrapper>
        </Container>
    )
}