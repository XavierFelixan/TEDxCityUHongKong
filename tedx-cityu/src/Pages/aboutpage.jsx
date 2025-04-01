import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Banner } from "../Components/banner";



import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Counter from "../Components/Counter";
import AboutTedx from "../Components/aboutTedx";

const Container = styled.div``;
const Description = styled.div``;


export default function AboutPage(){   
     
    useEffect(() => {
        // This scrolls the page to the top on component mount
        window.scrollTo(0, 0);
    }, []);

    return(
        <Container>
            <Banner text1={"ABOUT"} text2 = {<span style={{color:"black"}}>TEDX</span>}/>
            <AboutTedx show={true}/>
        </Container>            
    );
}