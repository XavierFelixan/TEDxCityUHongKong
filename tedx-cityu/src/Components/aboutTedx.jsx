import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PastEvent from "../Assets/PastEvent.png";
import PastSpeaker from "../Assets/Pastspeaker.png";
import TEDTeam from "../Assets/TEDxTeam.png";


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


export default function AboutTedx({show = true}){

    return(
        <Container className="flex justify-center w-[100%] font-textfond">
            <ContentWrapper className="flex flex-col justify-center">
                {!show && <Partition className="flex justify-center items-center min-w-full min-h-[400px] mb-5 bg-cover bg-no-repeat text-white text-7xl font-semibold font-textfont text-center md:text-left " style={{ backgroundImage: `url(${PastEvent})` }}>
                    What is TEDx
                </Partition>}
                <TedxdescWrapper className="flex justify-center mx-5 md:mx-20 ">
                    {!show && <Tedxdesc className="text-xl md:my-5">
                        In the spirit of ideas worth spreading, <span className="text-red font-bold font-textfont">TED</span> has created a program called <span className="text-red font-bold">TEDx</span>.
                        <span className="text-red font-bold"> TEDx</span> is a program of local, self-organized events that bring people together to share a <span className="text-red font-bold">TED</span>-like experience. 
                        Our event is called <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span>, 
                        where <span className="text-red font-bold">x</span> = independently organized <span className="text-red font-bold">TED</span> event. 
                        At our <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span> event, 
                        <span className="text-red font-bold"> TED</span> Talks video and live speakers will combine to spark deep discussion and connection in a small group. 
                        The <span className="text-red font-bold">TED</span> Conference provides general guidance for the 
                        <span className="text-red font-bold"> TEDx</span> program, but individual <span className="text-red font-bold">TEDx</span> events, including ours, are self-organized.
                    </Tedxdesc>}
                    
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