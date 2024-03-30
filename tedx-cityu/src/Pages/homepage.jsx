import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";



import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Counter from "../Components/Counter";
import AboutTedx from "../Components/aboutTedx";

const Container = styled.div``;

export default function HomePage(){
    return(
        <Container className="min-h-72 w-full">
            <Navbar /> 
            <Counter />
            <AboutTedx />
            <Footer />
        </Container>            
    );
}