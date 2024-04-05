import React from 'react';
import styled from 'styled-components';
import Timer from './timer';
import Artpiece from '../Assets/Artpiece.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem;

  @media (min-width: 768px) { // Assuming 768px is the tablet breakpoint
    padding: 4rem;
  }

  @media (min-width: 1024px) { // Adjust for desktop view if necessary
    flex-direction: row;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: red;
  height: 18rem;
  width: 100%;
  padding: 0.75rem;

  @media (min-width: 1024px) { // Adjust for desktop view
    text-align: left;
    padding: 2.25rem 3.5rem;
  }
`;

const TitleText = styled.div`
  color: white;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0.5rem;

  @media (min-width: 1024px) { // Adjust for desktop view
    text-align: left;
  }
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 1.25rem;
  font-size: 1.25rem;
  font-weight: normal;

  @media (min-width: 768px) { // Adjust for tablet view
    padding-top: 2.25rem;
    padding-bottom: 0;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) { // Adjust for desktop view
    width: 50%;
  }
`;

const ArtWrapper = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const ArtPic = styled.img`
  width: 60%;
  height: auto;
`;

export default function Counter() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <CounterContainer>
            <TitleText>TEDxCityUHongKong 2024:</TitleText>
            <TitleText>SPILL THE TEA</TitleText>
            <Timer />
          </CounterContainer>
          <DescriptionWrapper>
            Our theme for the <span className="text-red font-bold">TEDx</span><span className="font-bold">CityUHongKong 2024</span> event is “<span className="text-red font-bold">Spill the Tea</span>”. 
            We expect our speakers to share their "secrets" to the audience. The secrets that we are referring may include industry insider insights, or the key to their personal successes. 
            We are giving the speakers a platform to talk about their inspiring achievements in a beneficial way for the audience.
          </DescriptionWrapper>
        </Left>
        <Right>
          <ArtWrapper>
            <ArtPic src={Artpiece} alt="Artwork representing TEDxCityUHongKong 2024 event" className="mx-auto w-[60%] h-[60%]"/>
          </ArtWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
}