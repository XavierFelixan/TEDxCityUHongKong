import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import {Banner} from "../Components/banner";
import { MemberCard } from "../Components/membercard";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';



import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Container = styled.div``;

export default function AboutPage(){
    return(
        <Container>
            <Navbar /> 
            <Footer />
        </Container>            
    );
}