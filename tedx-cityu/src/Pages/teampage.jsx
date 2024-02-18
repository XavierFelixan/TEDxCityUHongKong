import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import {Banner} from "../Components/banner";

import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Container = styled.div``




export default function TeamPage(){
    return(
        <Container>
            <Navbar />
            <Banner text={"The Crew"}/>
            <Footer />  
        </Container>
    )
}