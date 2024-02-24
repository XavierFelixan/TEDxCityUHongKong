import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";




const Container = styled.div``
const CardWrapper = styled.div``;
const Card = styled.div`
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Image = styled.img``;
const Data = styled.div``;



export const MemberCard = ({img, fname, lname, major, origin, position}) => {
    return (
        <Container>
            <CardWrapper>
                <Card className="flex flex-col items-center justify-center w-80 h-96 bg-lightgray pr-0">
                    <Image src={img} alt={fname} className="w-32 h-32 rounded-full"/>
                    <Data className="text-black text-lg font-textfont">{fname}</Data>
                    <Data className="text-black text-lg font-textfont">{lname}</Data>
                    <Data className="text-gray text-sm font-textfont">{major}</Data>
                    <Data className="text-black text-sm font-textfont font-light mt-4">{origin}</Data>
                    <Data className="text-black text-sm font-textfont font-semibold mt-20">{position}</Data>
                </Card>
            </CardWrapper>
        </Container>
    )

}