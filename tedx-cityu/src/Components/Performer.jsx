import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Timer from "./timer";
import Artpiece from "../Assets/Artpiece.png";

const Container = styled.div``;
const Wrapper = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const CounterContainer = styled.div``;
const DescriptionWrapper = styled.div``;

const TitleText = styled.div``;
const ArtWrapper = styled.div``;
const ArtPic = styled.img``;
const Desciprtion = styled.div``;





const Speaker = ({data}) =>{
    useEffect(() => {
      return () => {
        console.log(data)
      }
    }, [data])
    
    return(
        <Container>
            <Wrapper>
                {data.map((item,index)=>(
                <div className="flex gap-5 mt-10 mb-10">
                    <img src= {require("../Assets/Members/Performer/" + item.img) } alt={item.fname} className="object-scale-down w-48 h-48 ml-36 my-auto rounded-md"/>
                    <div>
                        <div className="font-bold text-3xl">
                            {item.fname}
                        </div>
                        <div className="mt-4 mr-36 text-lg">
                            {item.desc}
                        </div>
                    </div>
                </div>
                ))}
            </Wrapper>
        </Container>
        // <Container className="flex justify-center mt-10">
        //     <Wrapper className="flex items-center">
        //         <Left className="flex flex-col items-center justify-center">
        //             <CounterContainer className="flex flex-col justify-center bg-red h-72 w-[683px] py-9 px-14">
        //                 <TitleText className="text-white text-4xl font-semibold font-textfont my-2">
        //                     TEDxCityUHongKong 2024:
        //                 </TitleText>
        //                 <TitleText className="text-white text-4xl font-semibold font-textfond my-2">
        //                     SPILL THE TEA
        //                 </TitleText>
        //                 <Timer />
        //             </CounterContainer>
        //             <DescriptionWrapper className="w-[683px] py-9 px-14 font-textfont">
        //                 Our theme for the <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span> event is “<span className="text-red font-bold">Spill the Tea</span>”. 
        //                 We expect our speakers to share their "secrets" to the audience. The secrets that we are referring may include industry insider insights, or the key to their personal successes. 
        //                 We are giving the speakers a platform to talk about their inspiring achievements in a beneficial way for the audience. 
        //             </DescriptionWrapper>
        //         </Left>
        //         <Right>
        //             <ArtWrapper className="h-[681px]">
        //                 <ArtPic src={Artpiece} className="h-[681px]"/>
        //             </ArtWrapper>
        //         </Right>
        //     </Wrapper>
        // </Container>            
    );
}

export default Speaker