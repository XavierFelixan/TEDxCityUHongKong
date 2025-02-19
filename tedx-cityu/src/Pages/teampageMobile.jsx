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
import eventManagementData from '../Data/eventManagementData.json';
import financeSponsorshipData from '../Data/financeSponsorshipData.json';
import humanResourcesData from '../Data/humanResourcesData.json';
import speakerRelationsData from '../Data/speakerRelationsData.json';
import marketingCommunicationData from '../Data/marketingCommunicationData.json';
import procurementData from '../Data/procurementData.json';

const breakpoints = {
    mobile: '768px',
  };
  
  const Container = styled.div`
    overflow-x-hidden;
    max-w-full;
  `;

  const ContentWrapper = styled.div``;
  
  const DepartmentList = styled.div``;
  
  const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const BackButton = styled.button`
    display: none;
    @media (max-width: ${breakpoints.mobile}) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 25;
    }
  `;
  
  const BurgerIcon = styled.div`
    cursor: pointer;
    z-index: 20;
    div {
        width: 25px;
        height: 3px;
        background-color: #333;
        margin: 5px 0;
        transition: 0.4s;
    }
    @media (min-width: ${breakpoints.mobile}) {
        display: none;
    }
  `;
  
  const DepartmentWrapper = styled.div`
    transition: transform 0.3s ease-out;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 1000;
    @media (max-width: ${breakpoints.mobile}) {
        position: fixed;
        top: 0;
        left: 0;
        width: 60%;
        height: 100%;
        background-color: white;
        padding: 20px;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    }
`;

export default function TeamPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [Dept, setDept] = useState('Curators');
  
    const list_of_department = {
      "Curators": curatorData,
      "Creative": creativeData,
      "Event Management": eventManagementData,
      "Finance and Sponsorship": financeSponsorshipData,
      "Human Resources": humanResourcesData,
      "Speaker Relations": speakerRelationsData,
      "Marketing and Communication": marketingCommunicationData,
      "Procurement": procurementData,
      "Technical": technicalData
    };
  
    const handleChange = (department) => {
      setDept(department);
    }
  
    const RenderDepartment = (Dept) => {
        let data = list_of_department[Dept] || [];
        return (
          <div>
            {data.map((item, index) => (
              <div key={index} className="p-4 mx-auto">
                <MemberCard
                  img={require("../Assets/Members/" + item.img)}
                  fname={item.fname}
                  lname={item.lname}
                  major={item.major}
                  origin={item.origin}
                  position={item.position}
                />
              </div>
            ))}
          </div>
        );
      };
  
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    
      return (
        <Container>
          <Banner text1={"OUR"} text2={"CREW"}/>
          <BurgerIcon isOpen={!menuOpen} onClick={toggleMenu} className="p-5">
            <div />
            <div />
            <div />
          </BurgerIcon>
          <ContentWrapper>
            <DepartmentWrapper isOpen={menuOpen}>
              <BackButton onClick={toggleMenu} className="font-bold text-2xl">
                Back
              </BackButton>
              <DepartmentList className="pt-8 text-xl">
                {Object.keys(list_of_department).map((department, index) => (
                    <div key={index} className="cursor-pointer my-5" onClick={() => handleChange(department)}>
                    {department}
                    </div>
                ))}
              </DepartmentList>
            </DepartmentWrapper>
            <CarouselWrapper>
              {RenderDepartment(Dept)}
            </CarouselWrapper>
          </ContentWrapper>
        </Container>
      );
    }
