import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";



const Container = styled.div``
const CardWrapper = styled.div``;
const Card = styled.div``;




export const MemberCard = ({img, name, major, origin, position}) => {
    return (
        <Container>
            <CardWrapper>
                <Card className="flex flex-col items-center justify-center w-80 h-80 bg-black">
                    <img src={img} alt={name} className="w-40 h-40 rounded-full"/>
                    <h1 className="text-white text-2xl font-headerfont">{name}</h1>
                    <h2 className="text-white text-lg font-headerfont">{major}</h2>
                    <h2 className="text-white text-lg font-headerfont">{origin}</h2>
                    <h2 className="text-white text-lg font-headerfont">{position}</h2>
                </Card>
            </CardWrapper>
        </Container>
    )

}