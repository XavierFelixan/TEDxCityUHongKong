import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";



import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Counter from "../Components/Counter";

const Container = styled.div``;

export default function AboutPage(){
    return(
        <Container>
            <Navbar /> 
            <Counter />
            <Footer />
        </Container>            
    );
}