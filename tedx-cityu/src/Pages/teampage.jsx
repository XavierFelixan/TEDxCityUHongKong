import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { Banner } from "../Components/banner";
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
  mobile: '768px',
};

const Container = styled.div`
  overflow-x: hidden;
  max-width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 65px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

const DepartmentWrapper = styled.div`
  width: 200px;
  margin-right: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 35%;
    height: 100%;
    background-color: white;
    padding: 20px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-out;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40%;
  }
`;

const DepartmentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 50px;
  }
`;

const DepartmentMemberWrapper = styled.div``;

const Department = styled.label`
  transition: all 200ms ease-out;
  display: block;
  padding: 10px 0;
  font-size: 1.2rem;
  color: gray;
  border-bottom: 1px solid gray;
  cursor: pointer;

  &:hover {
    transition-timing-function: ease-in;
    color: black;
    border-bottom-color: black;
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: black;
    border-bottom-color: black;
  `}

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const DepartmentRadio = styled.input.attrs({
  type: "radio",
})`
  display: none;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;
  transition: transform 0.5s ease-in-out;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledMemberCard = styled(MemberCard)`
  height: 500px;
`;

const HamburgerButton = styled.button`
  display: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'block')};
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;

const HamburgerIcon = styled.div`
  width: 25px;
  height: 2.5px;
  background-color: black;
  margin: 5px 0;
  transition: 0.4s;
`;

const CurrentDepartment = styled.div`
  font-size: 1.65rem;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.45rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const TitleLine = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 10px 0;
`;

const ArrowButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  line-height: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

export default function TeamPage() {
  const [Dept, setDept] = useState('Curators');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const carouselRef = useRef(null);
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const department = e.target.value;
    setDept(department);
    setIsMenuOpen(false);
    setCurrentRow(0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollLeft = () => {
    if (currentRow > 0) {
      setCurrentRow(currentRow - 1);
    }
  };

  const scrollRight = () => {
    const data = list_of_department[Dept] || [];
    const totalRows = Math.ceil(data.length / 3); 
    if (currentRow < totalRows - 1) {
      setCurrentRow(currentRow + 1);
    }
  };

  const RenderDepartment = (Dept) => {
    let data = list_of_department[Dept] || [];

    if (isDesktop) {
      const startIndex = currentRow * 3;
      const endIndex = startIndex + 3;
      data = data.slice(startIndex, endIndex);
    }

    return (
      <>
        {data.map((item, index) => (
          <StyledMemberCard
            key={index}
            img={require("../Assets/Members/" + item.img)}
            fname={item.fname}
            lname={item.lname}
            major={item.major}
            origin={item.origin}
            position={item.position}
          />
        ))}
      </>
    );
  };

  return (
    <Container>
      <Banner text={"The Crew"} />
      <ContentWrapper>
        <DepartmentWrapper isOpen={isMenuOpen} ref={menuRef}>
          <DepartmentTitle>Department</DepartmentTitle>
          <DepartmentList>
            {Object.keys(list_of_department).map((department, index) => (
              <DepartmentMemberWrapper key={index}>
                <DepartmentRadio
                  id={department}
                  name='department'
                  value={department}
                  onChange={handleChange}
                  defaultChecked={department === "Curators"}
                />
                <Department
                  htmlFor={department}
                  isActive={Dept === department}
                >
                  {department}
                </Department>
              </DepartmentMemberWrapper>
            ))}
          </DepartmentList>
        </DepartmentWrapper>
        <div style={{ flex: 1, position: 'relative' }}>
          <CurrentDepartment>
            {window.innerWidth <= 1024 && (
              <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu}>
                <HamburgerIcon />
                <HamburgerIcon />
                <HamburgerIcon />
              </HamburgerButton>
            )}
            {Dept}
          </CurrentDepartment>
          <TitleLine />
          <CarouselWrapper ref={carouselRef}>
            {RenderDepartment(Dept)}
          </CarouselWrapper>
          {isDesktop && (
            <>
              {currentRow > 0 && <LeftArrow onClick={scrollLeft}>&lt;</LeftArrow>}
              {currentRow < Math.ceil((list_of_department[Dept] || []).length / 3) - 1 && (
                <RightArrow onClick={scrollRight}>&gt;</RightArrow>
              )}
            </>
          )}
        </div>
      </ContentWrapper>
    </Container>
  );
}