import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Banner } from "../Components/banner";

import Speakerdata from "../Data/SpeakerData.json"

import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Speaker from "../Components/Speaker";

const Container = styled.div``;
const Description = styled.div``;


export default function Speakerpage(){
  let Query = useParams().link;
  const FilteredData = Speakerdata.filter((data) => data.link === Query);
  
    return(
        <Container>
            {/* <Navbar />  */}
            <Banner text={"Speaker"}/>
            <Speaker data={FilteredData}/>
            {/* <Footer /> */}
        </Container>            
    );
}