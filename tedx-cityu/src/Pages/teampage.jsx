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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  justify-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledMemberCard = styled(MemberCard)`
  height: 500px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 550px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 0;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
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
  align-items: center;
  justify-content: center;
  position: relative;

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

export default function TeamPage() {
  const [Dept, setDept] = useState('Curators');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleChange = (e) => {
    const department = e.target.value;
    setDept(department);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const RenderDepartment = (Dept) => {
    let data = list_of_department[Dept] || [];
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (departmentWrapperRef.current && !departmentWrapperRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Container>
      <Banner text={"The Crew"} />
      <ContentWrapper>
        <DepartmentWrapper isOpen={isMenuOpen} ref={departmentWrapperRef}>
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
        <div style={{ flex: 1 }}>
          <CurrentDepartment>
            {window.innerWidth <= 1024 && (
              <HamburgerButton onClick={toggleMenu}>
                <HamburgerIcon />
                <HamburgerIcon />
                <HamburgerIcon />
              </HamburgerButton>
            )}
            {Dept}
          </CurrentDepartment>
          <TitleLine />
          <CarouselWrapper>
            {RenderDepartment(Dept)}
          </CarouselWrapper>
        </div>
      </ContentWrapper>
    </Container>
  );
}