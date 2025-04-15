import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;

const TitleText = styled.div``;

const Picture = styled.img`
    max-width: 200px;
  width: 100%;
  height: auto;
  object-fit: contain;`
;

const Sponsor = ({data}) =>{
    useEffect(() => {
      return () => {
        console.log(data)
      }
    }, [data])
    
    return(
        <Container>
            {data.map((item, index) => (
                <Wrapper key={index} className="flex flex-col items-center md:flex-row md:items-start md:gap-5 md:mt-10 md:mb-10 font-textfont text-center md:text-left justify-center">
                    <Picture
                        src={require("../Assets/Members/Sponsor/" + item.img)}
                        alt={item.name}
                        className="object-scale-down w-48 h-48 md:ml-36 mb-5 md:mb-auto mt-10 md:mt-auto md:my-auto rounded-md"
                    />
                    <Wrapper className="flex flex-col items-center md:items-start">
                        <TitleText className="font-bold text-3xl md:my-0">
                            {item.name}
                        </TitleText>
                        {/* <DescriptionWrapper className="mx-5 md:mx-0 text-lg my-5 md:mt-4 md:mr-36">
                            {item.link && <SpeakerLink target="_blank" href={item.link}>{item.link}</SpeakerLink>}
                        </DescriptionWrapper> */}
                    </Wrapper>
                </Wrapper>
            ))}
        </Container>        
    );
}

export default Sponsor