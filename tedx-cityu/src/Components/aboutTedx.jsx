import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PastEvent from "../Assets/PastEvent.png";
import PastSpeaker from "../Assets/Pastspeaker.png";
import TEDTeam from "../Assets/TEDxTeam.png";
import TEDPhotoX from "../Assets/Homepage-Photo.png";
import XFrame from "../Assets/X-FrameHome.png";
import ReadMore from "../Assets/ReadMoreText.png";
import '@fontsource/bayon';
import '@fontsource/commissioner'


const Container = styled.div``;
const ContentWrapper = styled.div``;
const Partition = styled.div``;
const TedxdescWrapper = styled.div``;
const Tedxdesc = styled.div``;


const Left1 = styled.div`
    float:right;
    width:50%;
    margin: 0 0 0 1.3rem;

    @media (max-width: 768px){
        width:100%;
        margin: 0 0 1rem 0;
    }
`;
const Left2 = styled.div`
    float:left;
    width:30%;
    // margin: 0 1.3rem 0 0;

    @media (max-width: 768px){
        width:100%;
        margin: 0 0 0.5rem 0;
    }
`;

const Right = styled.div`
`;


const ArtWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }

  @media (max-width: 768px){
    justify-content: center !important;
  }
`;

const ArtPic = styled.img`
  width: 95%;
  height: auto;
`;



const RectShape = styled.div`
    position: relative;
    text-align: center;
    margin: 0 auto;
    background-color: #E00028;
    display: flex;
    flex-direction: column;
    height: 65rem;
    width: 72rem;
    margin-bottom: 5rem;
    z-index: -1;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    width : 50rem;
    height: 60rem;
    }

    @media (max-width: 768px){
    width: 100%;
    height: 800px;
    }
`;
const TEDPhoto = styled.img`
    z-index: 1;
    position: relative;
    top: -1.5rem;
    left: -0.5rem;
    width: 55%;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    position: static;
    margin: 0 auto;
    width: 100%;
    }

    @media (max-width: 768px){
    position: static;
    margin: 0 auto;
    width: 100%;
    }
    
`;

const TextIdeas = styled.div`
    z-index: 1;
    position: absolute;
    color: white;
    top: 7rem;
    left: 42rem;
    font-weight: 700;
    font-size: 50px;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    display: none;
    }

    @media (max-width: 768px){
    display: none;
    }
`;

const TextEmbark = styled.div`
    z-index: 1;
    position: absolute;
    color: black;
    top: 11rem;
    left: 42rem;
    font-weight: 700;
    font-size: 50px;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    display: none;
    }

    @media (max-width: 768px){
    display: none;
    }
`;

const TextPossibilities = styled.div`
    z-index: 1;
    position: absolute;
    color: black;
    left: 42rem;
    top: 15rem;
    font-weight: 700;
    font-size: 50px;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    display: none;
    }

    @media (max-width: 768px){
    display: none;
    }
`;

const TEDTitle = styled.div`
    z-index: 1;
    position: absolute;
    left: 42rem;
    top: 20rem;
    font-weight: 800;
    font-size: 25px;
    letter-spacing: 10px;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    position: relative;
    left: 0px;
    right: 0px;
    top: 0.5rem;
    }

    @media (max-width: 768px){
    position: relative;
    left: 0px;
    right: 0px;
    top: 0.2rem;
    }
`;

const XFrames = styled.img `
    position: absolute;
    z-index: 1;
    left: 36.5rem;
    top: 1.2rem;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    display: none;
    }

    @media (max-width: 768px){
    display: none;
    }
`;

const TextHome = styled.div`
    position: absolute;
    text-align: start;
    color: white;
    font-weight: 600;
    font-size: 22px;
    top: 28rem;
    margin-left: 3rem;
    margin-right: 3rem;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    position: relative;
    z-index: 1;
    top: 2rem;
    font-size: 15px;
    text-align: center;
    }

    @media (max-width: 768px){
    position: relative;
    z-index: 1;
    top: 2rem;
    font-size: 12px;
    right: 0px;
    left: 0px;
    margin: 0 6px;
    text-align: center;
    }
`;

const ReadMoreText = styled.img`
    position: absolute;
    top: 45rem;
    width: 15%;
    left: 3.5rem;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    position: relative;
    width: 15%;
    top: 8rem;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    }

    @media (max-width: 768px){
    position: relative;
    width: 18%;
    top: 3.9rem;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    }
    
`;

const TitleResp = styled.div`
    display: none;

    @media (min-width: 768px) and (max-width: 1023px) { // Tablet view
    display: inline-block;
    font-size: 40px;
    color: white;
    letter-spacing: 0.1em;
    }

    @media (max-width: 768px){
    display: inline-block;
    font-size: 40px;
    color: white;
    letter-spacing: 0.1em;
    }
`;

export default function AboutTedx({show = true}){

    return(
        <Container className="flex justify-center w-[100%] font-textfond">
            <ContentWrapper className="flex flex-col justify-center">
                {/* {!show && <Partition className="flex justify-center items-center min-w-full min-h-[400px] mb-5 bg-cover bg-no-repeat text-white text-7xl font-semibold font-textfont text-center md:text-left " style={{ backgroundImage: `url(${PastEvent})` }}>
                    What is TED
                </Partition>} */}

                <RectShape>
                    <TEDPhoto src={TEDPhotoX}></TEDPhoto>
                    <XFrames src={XFrame}/>
                    <TitleResp style={{ fontFamily: 'Bayon, sans-serif'}}>IDEAS EMBARK POSSIBILITIES</TitleResp>
                    <TextIdeas style={{ fontFamily: 'Bayon, sans-serif'}}>IDEAS</TextIdeas>
                    <TextEmbark style={{ fontFamily: 'Bayon, sans-serif'}}>EMBARK</TextEmbark>
                    <TextPossibilities style={{ fontFamily: 'Bayon, sans-serif'}}>POSSIBILITIES</TextPossibilities>
                    <TEDTitle style={{ fontFamily: 'Bayon, sans-serif'}}>TED<span className="text-white" style={{ fontFamily: 'Bayon, sans-serif'}}>X</span>CITYUHONGKONG</TEDTitle>
                    <TextHome style={{ fontFamily: 'Commissioner, sans-serif'}}>In the spirit of ideas worth spreading, <span className="text-black font-bold" >TED</span> has created a program called <span className="text-black font-bold" >TEDx</span>. 
                    <span className="text-black font-bold" > TEDx</span> is a program of local, self-organized events that bring people together to share a <span className="text-black font-bold" >TED</span>-like experience. Our event is called <span className="text-black font-bold" >TEDx</span><span className="font-bold">CityUHongKong 2025</span>, where x = independently organized  <span className="text-black font-bold" >TED</span> event. At our <span className="text-black font-bold" >TEDx</span><span className="font-bold">CityUHongKong 2025</span> event, 
                    <span className="text-black font-bold" >TED</span> Talks video and live speakers will combine to spark deep discussion and connection in a small group. The <span className="text-black font-bold" >TED</span> Conference provides general guidance for the <span className="text-black font-bold" >TED</span> program, but individual <span className="text-black font-bold" >TEDx</span> events, including ours, are self-organized.</TextHome>
                    <ReadMoreText src={ReadMore}/>
                </RectShape>
                

                <TedxdescWrapper className="flex justify-center mx-5 md:mx-20 ">
                    {/* {!show && <Tedxdesc className="text-xl md:my-5">
                        In the spirit of ideas worth spreading, <span className="text-red font-bold font-textfont">TED</span> has created a program called <span className="text-red font-bold">TEDx</span>.
                        <span className="text-red font-bold"> TEDx</span> is a program of local, self-organized events that bring people together to share a <span className="text-red font-bold">TED</span>-like experience. 
                        Our event is called <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span>, 
                        where <span className="text-red font-bold">x</span> = independently organized <span className="text-red font-bold">TED</span> event. 
                        At our <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span> event, 
                        <span className="text-red font-bold"> TED</span> Talks video and live speakers will combine to spark deep discussion and connection in a small group. 
                        The <span className="text-red font-bold">TED</span> Conference provides general guidance for the 
                        <span className="text-red font-bold"> TEDx</span> program, but individual <span className="text-red font-bold">TEDx</span> events, including ours, are self-organized.
                    </Tedxdesc>} */}
                    
                    
                    {show && <Tedxdesc className="my-5 md:my-12 className=text-lg">
                        <Container>
                            <Left1>
                                <ArtWrapper style={{"justify-content":"right"}}>
                                        <ArtPic src={TEDTeam} alt="TEDxCityUHongKong 2024 Art"/>
                                </ArtWrapper>
                                
                            </Left1>
                            <Right className="w-full">
                            <div className="font-bold text-2xl md:text-5xl mb-5">
                                    About <span className="text-red font-bold">TEDx</span><br></br> <span className="text-xl md:text-3xl"><span className="text-red font-bold">x</span> = independently organized event</span>
                                </div>
                                
                                <hr className="lg:h-[10px] h-[5px] mb-3 " style={{color:'red','background-color':'red'}}/>

                                <div className="text-base md:text-2xl text-justify text-md">
                                    In the spirit of ideas worth spreading, <span className="text-red font-bold">TEDx</span> is a program of local, self-organized events that bring people together to share a <span className="text-red font-bold">TED</span>-like experience. At a <span className="text-red font-bold">TEDx</span> event, <span className="text-red font-bold">TED</span> Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded <span className="text-red font-bold">TEDx</span>, where <span className="text-red font-bold">x</span> = independently organized <span className="text-red font-bold">TED</span> event. The <span className="text-red font-bold">TED</span> Conference provides general guidance for the <span className="text-red font-bold">TEDx</span> program, but individual <span className="text-red font-bold">TEDx</span> events are self-organized. (Subject to certain rules and regulations.)
                                </div>
                            </Right>
                        </Container>
                        <Container style={{clear:"both","margin-top":"8%"}}>

                            <Right className="w-full">
                                <div className="font-bold text-2xl md:text-5xl mb-5">
                                    <span className="font-bold">About </span><span className="text-red font-bold">TED</span>
                                </div>

                                <hr className="lg:h-[10px] h-[5px] mb-3 md:w-[48%]" style={{color:'red','background-color':'red'}}/>

                                <div className="text-base md:text-2xl text-justify text-md">
                                    <span className="text-red font-bold">TED</span> is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
                                    <span className="text-red font-bold"> TED</span> began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the hundreds of <span className="text-red font-bold">TED</span> Talks curated from our annual conferences and published on <span className="text-red font-bold">TED</span>.com, we produce original podcasts, short video series, animated educational lessons (<span className="text-red font-bold">TED</span>-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, more than 3,000 independently run <span className="text-red font-bold">TEDx</span> events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, <span className="text-red font-bold">TED</span> has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, <span className="text-red font-bold">TED</span> launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future. View a full list of <span className="text-red font-bold">TED</span> many programs and initiatives.
                                    <span className="text-red font-bold">TED</span> is owned by a nonprofit, nonpartisan foundation. Our aim is to help create a future worth pursuing for all.
                                    Follow <span className="text-red font-bold">TED</span> on Twitter, Facebook, Instagram, TikTok and on LinkedIn.
                                </div>
                            </Right>
                        </Container>
                    </Tedxdesc>}
                </TedxdescWrapper>
            </ContentWrapper>
        </Container>
    )
}