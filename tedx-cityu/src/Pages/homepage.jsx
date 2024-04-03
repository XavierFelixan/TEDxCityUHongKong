import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Banner } from "../Components/banner";


import Navbar from "../Components/navbar";
import MobileNavbar from "../Components/mobileNavbar"
import Footer from "../Components/footer";
import Counter from "../Components/Counter";
import AboutTedx from "../Components/aboutTedx";
import SpeakerCard  from "../Components/SpeakerCard";
import Performer from "../Components/PerformerCard";

const Container = styled.div``;

export default function HomePage(){
    return(
        <Container className="min-h-72 w-full">
            <Banner text={"TEDxCityU Hong Kong 2024"}/>
            <Counter />
            <AboutTedx />
            <SpeakerCard/>
            <Performer />
        </Container>            
    );
}