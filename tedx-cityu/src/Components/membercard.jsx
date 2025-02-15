import React from "react";
import { styled } from "styled-components";

const Container = styled.div``;
const CardWrapper = styled.div``;
const Card = styled.div`
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Image = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    object-fit: cover; /* Or use 'contain' depending on your preference */
`;
const Data = styled.div``;

export const MemberCard = ({ img, fname, lname, major, origin, position }) => {
    return (
        <Container>
            <CardWrapper>
                <Card className="flex flex-col items-center justify-center md:w-100 lg:w-80 md:h-auto lg:h-120 bg-lightgray">
                    <Image src={img} alt={fname} />
                    <Data className="text-black text-lg md:text-2xl font-bold font-textfont">{fname}</Data>
                    <Data className="text-black text-lg md:text-2xl font-bold font-textfont">{lname}</Data>
                    <Data className="text-black text-md md:text-xl font-textfont mt-5">{major}</Data>
                    <Data className="text-black text-md md:text-xl font-textfont font-light mt-5">{origin}</Data>
                    <Data className="text-black text-center md:text-2xl text-lg font-textfont font-semibold mb-3 mt-5 mx-5">{position}</Data>
                </Card>
            </CardWrapper>
        </Container>
    );
};
