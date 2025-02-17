import React, { useState, useRef, useEffect } from "react";
import '@splidejs/splide/dist/css/splide.min.css';
import { styled } from "styled-components";
import {Banner} from "../Components/banner";
import { MemberCard } from "../Components/membercard";

import technicalData from '../Data/technicalData.json';
import curatorData from '../Data/curatorData.json';
import creativeData from '../Data/creativeData.json';
import eventManagementProcurementData from '../Data/eventManagementProcurementData.json';
import financeSponsorshipData from '../Data/financeSponsorshipData.json';
import humanResourcesData from '../Data/humanResourcesData.json';
import speakerRelationsData from '../Data/speakerRelationsData.json';
import marketingCommunicationData from '../Data/marketingCommunicationData.json';

const breakpoints = {
  tablet: '1024px',
};

const Container = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

const ContentWrapper = styled.div``;

const DepartmentList = styled.div``;

const CarouselWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
`;

const DepartmentButton = styled.button`
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 25;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
`;

const BurgerIcon = styled.div`
    cursor: pointer;
    z-index: 20;

    div {
        width: 35px;
        height: 3px;
        background-color: black;
        margin: 7px 0;
        transition: 0.4s;
    }
`;

const DepartmentWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 40%;
    height: 100%;
    background-color: white;
    padding: 0 20px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-out;
`;

const DepartmentItem = styled.div`
    cursor: pointer;
    padding: 10px 0;
    font-size: 1.3rem;
    color: gray;
    border-bottom: 1px solid gray;
    gap: 15px;
    transition: color 0.2s, border-color 0.2s;

    &:hover,
    &:focus {
        color: black;
        border-bottom-color: black;
    }

    ${({ isActive }) =>
        isActive &&
        `
        color: black;
        border-bottom-color: black;
    `}
`;

const CurrentDepartment = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
`;

const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export default function TeamPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [Dept, setDept] = useState('Curators');
    const departmentWrapperRef = useRef(null);

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

    const handleChange = (department) => {
        setDept(department);
        setMenuOpen(false);
    };

    const RenderDepartment = (Dept) => {
        let data = list_of_department[Dept] || [];
        return (
            <>
                {data.map((item, index) => (
                    <div key={index} className="p-4 mx-auto">
                        <MemberCard
                            img={require("../Assets/Members/" + item.img)}
                            fname={item.fname}
                            lname={item.lname}
                            major={item.major}
                            origin={item.origin}
                            position={item.position}
                            cardWidth="350px"
                            cardHeight="550px"
                        />
                    </div>
                ))}
            </>
        );
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (departmentWrapperRef.current && !departmentWrapperRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [departmentWrapperRef]);

    return (
        <Container>
            <Banner text={"The Crew"} />
            <MenuHeader>
                <BurgerIcon isOpen={!menuOpen} onClick={toggleMenu} className="p-5">
                    <div />
                    <div />
                    <div />
                </BurgerIcon>
                <CurrentDepartment>{Dept}</CurrentDepartment>
                <div></div>
            </MenuHeader>
            <ContentWrapper>
                <DepartmentWrapper isOpen={menuOpen} ref={departmentWrapperRef}>
                    <DepartmentButton onClick={toggleMenu}>
                        Department
                    </DepartmentButton>
                    <DepartmentList className="pt-10" style={{ paddingTop: '50px' }}>
                        {Object.keys(list_of_department).map((department, index) => (
                            <DepartmentItem
                                key={index}
                                onClick={() => handleChange(department)}
                                isActive={Dept === department}
                            >
                                {department}
                            </DepartmentItem>
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