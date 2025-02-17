import React, { useState, useEffect } from "react";
import '@splidejs/splide/dist/css/splide.min.css';
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import {Banner} from "../Components/banner";
import { MemberCard } from "../Components/membercard";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import technicalData from '../Data/technicalData.json';
import curatorData from '../Data/curatorData.json';
import creativeData from '../Data/creativeData.json';
import eventManagementProcurementData from '../Data/eventManagementProcurementData.json';
import financeSponsorshipData from '../Data/financeSponsorshipData.json';
import humanResourcesData from '../Data/humanResourcesData.json';
import speakerRelationsData from '../Data/speakerRelationsData.json';
import marketingCommunicationData from '../Data/marketingCommunicationData.json';

const Container = styled.div``
const ContentWrapper = styled.div`
  display: flex;
  padding: 20px;
`;
const DepartmentWrapper = styled.div`
  width: 200px;
  margin-right: 20px;
`;
const DepartmentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;
`;
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
const CarouselWrapper = styled.div`
  width: 100%;
`;

const StyledMemberCard = styled(MemberCard)`
  height: 500px;
`;

export default function TeamPage(){
    
    const list_of_department = {
        "Curators": curatorData,
        "Creative": creativeData,
        "Event Management and Procurement": eventManagementProcurementData,
        "Finance and Sponsorship": financeSponsorshipData,
        "Human Resources": humanResourcesData,
        "Speaker Relations": speakerRelationsData,
        "Marketing and Communication": marketingCommunicationData,
        "Technical": technicalData
    };

    const [Dept, setDept] = useState('Curators')

    const handleChange = (e) => {
        const department = e.target.value
        setDept(department)
        console.log(department)
    }

    const RenderDepartment = (Dept) => {
        let data = list_of_department[Dept] || [];
        const showArrows = data.length > 3;
        const perPage = data.length < 3 ? data.length : 3;
        const cardWidth = 320;
        const gapSize = 20;
        const splideWidth = (cardWidth * perPage) + (gapSize * (perPage - 1));
    
        return (
            <Splide
                hasTrack={false}
                options={{
                    perPage: perPage,
                    rewind: true,
                    width: splideWidth,
                    height: "500px",
                    gap: gapSize,
                    arrows: showArrows,
                    pagination: false,
                    drag: data.length > perPage ? true : false,
                }}
                className="splide justify-center items-center"
            >
                <SplideTrack>
                    {data.map((item, index) => (
                        <SplideSlide key={index}>
                            <StyledMemberCard
                                img={require("../Assets/Members/" + item.img)}
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
    };

    return(
        <Container>
            <Banner text={"The Crew"}/>
            <ContentWrapper className="flex items-center py-20 px-14">
                <DepartmentWrapper className="flex flex-col">
                    <DepartmentTitle className="text-3xl font-bold font-textfont mb-8">
                        Department
                    </DepartmentTitle>
                    <DepartmentList className="flex flex-col">
                        {Object.keys(list_of_department).map((department, index) => (
                            <DepartmentMemberWrapper key={index} className="my-2.5">
                                <DepartmentRadio id={department} name='department' className='hidden peer' value={department} onChange={handleChange} defaultChecked={department === "Curators"}/>
                                <Department htmlFor={department} className='w-full py-1 text-xl text-base text-gray border-b border-gray inline-flex peer-checked:text-black peer-checked:border-black peer-checked:border-b-2'>
                                    {department}
                                </Department>
                            </DepartmentMemberWrapper>
                        ))}
                    </DepartmentList>
                </DepartmentWrapper>
                <CarouselWrapper className="ml-10 mx-auto h-96 flex justify-center items-center">
                    {RenderDepartment(Dept)}
                </CarouselWrapper>
            </ContentWrapper>
        </Container>
    )
}