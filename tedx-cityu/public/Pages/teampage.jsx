import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Container = styled.div``




export default function TeamPage(){
    return(
        <Container>
            <Header />
            <Footer />
        </Container>
    )
}