import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import {Banner} from "../Components/banner";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Container = styled.div``
const ContentWrapper = styled.div``;
const DepartmentWrapper = styled.div``;
const DepartmentTitle = styled.div``;
const DepartmentList = styled.div``;
const DepartmentMemberWrapper = styled.div``;
const Department = styled.div`
    transition: all 200ms ease-out;
    &:hover {
        transition-timing-function: ease-in;
        border-bottom: 2px solid;
        color: black;
        cursor: pointer;
    }
    &:checked {
        color: black;
    }
`;
const DepartmentRadio = styled.input.attrs({
    type: "radio",
})``;
const CarouselWrapper = styled.div``;


export default function TeamPage(){
    
    const list_of_department = ["Procurement", "Event Management", "Finance & Sponsorship", "Human Resources", "Speaker Relations", "External Relations", "Creative", "Technical"]
    const [Dept, setDept] = useState('Procurement')

    return(
        <Container>
            <Navbar />
            <Banner text={"The Crew"}/>
            <ContentWrapper className="flex py-28 px-14">
                <DepartmentWrapper className="flex flex-col">
                    <DepartmentTitle className="text-2xl font-subheaderfont mb-8">
                        Department
                    </DepartmentTitle>
                    <DepartmentList className="flex flex-col">
                        {list_of_department.map((department) => (
                            <DepartmentMemberWrapper className="my-2.5">
                                <DepartmentRadio id={department} name='department' className='item hidden peer' value={department} onClick={() => setDept(department)}/>
                                <Department htmlFor={department} className='w-full py-1 text-base text-gray border-b border-gray inline-flex peer-checked:text-black peer-checked:border-black peer-checked:border-b-2'>
                                    {department}
                                </Department>
                            </DepartmentMemberWrapper>
                        ))}
                    </DepartmentList>
                </DepartmentWrapper>
                <CarouselWrapper className="flex">
                    {Dept}
                </CarouselWrapper>
            </ContentWrapper>
            <Footer />
        </Container>
    )
}