import React, { useState, useEffect } from "react";
import '@splidejs/splide/dist/css/splide.min.css';
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import {Banner} from "../Components/banner";
import { MemberCard } from "../Components/membercard";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import technicalData from '../Data/technicalData.json';
import Luping from '../Assets/Members/Technical/Reynaldo.jpg';

import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Container = styled.div``
const ContentWrapper = styled.div``;
const DepartmentWrapper = styled.div``;
const DepartmentTitle = styled.div``;
const DepartmentList = styled.div``;
const DepartmentMemberWrapper = styled.div``;
const Department = styled.label`
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
    const [Dept, setDept] = useState('Technical')

    const handleChange = (e) => {
        const department = e.target.value
        setDept(department)
        console.log(Department)
    }

    const RenderDepartment = (Dept) => {
        if (Dept === "Technical") {
            return (
                <Splide
                    hasTrack={false}
                    options={{
                        perPage: 3,
                        rewind: true,
                        width: "1100px",
                        height: "400px",
                        gap: '80px',
                        type:"loop",
                        arrows: true,
                        pagination: false,
                    }}
                    className="splide justify-center items-center"
                >
                    <SplideTrack>
                        {technicalData.map((item, index) => (
                            <SplideSlide key={index}>
                                <MemberCard
                                    img={Luping}
                                    fname={item.fname}
                                    lname={item.lname}
                                    major={item.major}
                                    origin={item.origin}
                                    position={item.position}
                                />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
            );
        }
        return null;
    };

    return(
        <Container>
            <Navbar />
            <Banner text={"The Crew"}/>
            <ContentWrapper className="flex items-center py-20 px-14">
                <DepartmentWrapper className="flex flex-col">
                    <DepartmentTitle className="text-2xl font-subheaderfont mb-8">
                        Department
                    </DepartmentTitle>
                    <DepartmentList className="flex flex-col">
                        {list_of_department.map((department, index) => (
                            <DepartmentMemberWrapper key={index} className="my-2.5">
                                <DepartmentRadio id={department} name='department' className='hidden peer' value={department} onChange={handleChange} defaultChecked={department === "Technical"}/>
                                <Department htmlFor={department} className='w-full py-1 text-base text-gray border-b border-gray inline-flex peer-checked:text-black peer-checked:border-black peer-checked:border-b-2'>
                                    {department}
                                </Department>
                            </DepartmentMemberWrapper>
                        ))}
                    </DepartmentList>
                </DepartmentWrapper>
                <CarouselWrapper className="ml-9 h-96 flex justify-center items-center justify-center">
                    {RenderDepartment(Dept)}
                </CarouselWrapper>
            </ContentWrapper>
            <Footer />
        </Container>
    )
}