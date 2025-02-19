import React from 'react';
import styled from 'styled-components';
import DarkWave from '../Assets/wave_dark_red.svg';
import LightWave from '../Assets/wave_tedx_red.svg';
import Background1 from '../Assets/background1.png';
import Background2 from '../Assets/background2.png';
import Background3 from '../Assets/background3.JPG';


const Container = styled.div``;
const BannerWrapper = styled.div`
    box-shadow: 0px 6px 4.4px rgba(0, 0, 0, 0.25);
    position: relative;
`;

const InnerContainer = styled.div`
    background-color: red;
    padding: 1% 2%;
    width: auto;
    height: auto;
    position: absolute;
    left: 5%;
`;

const Text = styled.h1`
    font-family: sans-serif;
    font-weight: bold;
    // font-size: 2rem;
    @media (min-width:1024px){
        // font-size: 3rem;
    }
    @media (max-width: 768px){
        font-size: 1.8rem;
        padding-bottom: 0;
    }
`;

const Layout1 = styled.div`
    background-image : url(${Background1});
    background-size: cover;
    background-position : center;
`;
const Layout2 = styled.div`
    background-image : url(${Background2});
    background-size: cover;
    background-position : center;
`;
const Layout3 = styled.div`
    background-image : url(${Background3});
    background-size: cover;
    background-position : center;    
`;

const Vector = styled.img.attrs(({ className }) => ({ className }))``;

export const Banner = ({text1,text2}) =>{
    return(
        <Container>
            <BannerWrapper className="relative flex justify-center items-center min-h-36 md:min-h-[30rem] w-full bg-black">
                <Layout1 className='absolute top-0 left-0 bg-red w-[40%] h-[50%]'/>
                <Layout2 className='absolute bottom-0 left-0 bg-red w-[40%] h-[50%]'/>
                <Layout3 className='absolute top-0 right-0 bg-red w-[60%] h-full'/>
                <InnerContainer>
                    <Text className="text-white text-4xl md:text-6xl z-10 pb-3">{text1}</Text>
                    <Text className="text-white text-4xl md:text-6xl z-10">{text2}</Text>
                </InnerContainer>
            </BannerWrapper>
        </Container>
    )
}

// export const Banner = ({ text }) => {
//     return (
//         <Container>
//             <BannerWrapper className="relative flex justify-center items-center min-h-72 md:min-h-[18rem] w-full bg-black">
//                 <Text className="text-white text-center text-4xl md:text-6xl font-textfont z-10">{text}</Text>
//                 <Vector src={DarkWave} alt="Dark Wave Vector" className="absolute bottom-0 left-0 w-full"/>
//                 <Vector src={LightWave} alt="Light Wave Vector" className="absolute bottom-0 left-0 w-full"/>
//             </BannerWrapper>
//         </Container>
//     );
// };