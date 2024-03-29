import React, { useState, useEffect } from "react";
import { styled } from "styled-components";



const Container = styled.div``;
const Wrapper = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const CounterContainer = styled.div``;
const DescriptionWrapper = styled.div``;


export default function Counter(){
    return(
        <Container className="flex justify-center">
            <Wrapper className="grid grid-cols-3 gap-4 items-center">
                <Left className="col-span-2 flex flex-col">
                    <CounterContainer>
                        Hello
                    </CounterContainer>
                    <DescriptionWrapper>
                        HI
                    </DescriptionWrapper>
                </Left>
                <Right className="col-span-1">
                    hello
                </Right>
            </Wrapper>
        </Container>            
    );
}