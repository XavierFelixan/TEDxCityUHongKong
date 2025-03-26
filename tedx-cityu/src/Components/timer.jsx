import {React} from 'react';
import {useState, useEffect} from 'react';
import {styled} from  'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`;

const Box = styled.div`
    display: flex;
    justify-content: center; 
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

const Timebox = styled.div`
    display: flex;
    align-items: flex;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    @media (max-width: 768px) {
        width: 3rem;
        height: 3rem;
    }
`;

const TimeNumber = styled.div`
    display: flex-end;
    justify-content: bottom;
    align-items: flex-end;
    color: white;
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Timetext = styled.div`
    display: flex;
    justify-content: bottom;
    align-items: flex-end;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 0.7rem; 
    margin-right: 0.5rem;
    @media (max-width: 768px) { 
        font-size: 0.8rem;
        padding-bottom: 0.4rem;
        margin-left: 0.2rem; 
        margin-right: 0;
    }
`;

export default function Timer(){

    const [Time, setTime] = useState({
        "DAYS": 0,
        "Hours": 0,
        "Minutes": 0
    });

    useEffect(() => {
        const target = new Date('2025-04-26T06:30:00Z').getTime();
        const now = new Date().getTime();
        const distance = target - now;
        if (distance < 0) {
            setTime({
              Days: 0,
              Hours: 0,
              Minutes: 0,
            });
            return;
        }
        
        setTime({
            Days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            Hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            Minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
        
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = target - now;
    
          if (distance < 0) {
            clearInterval(interval);
            setTime({
              "Days": 0,
              "Hours": 0,
              "Minutes": 0,
            });
          } else {
            setTime({
              "Days": Math.floor(distance / (1000 * 60 * 60 * 24)),
              "Hours": Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              "Minutes": Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            });
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return(
      <Container className="flex mx-5 px-5 lg:mx-0 my-4 items-center lg:items-end">
          {
              Object.entries(Time).map(([unit, value]) => (
                  <Box key={unit}>
                    <Timebox className="flex items-center justify-center w-15 lg:w-20 h-10 lg:h-20">
                        <TimeNumber className="text-white text-xl lg:text-3xl font-medium font-textfont">
                            {value.toString().padStart(2, '0')}
                        </TimeNumber>
                    </Timebox>
                    <Timetext className="ml-2 mr-2 text-white text-md lg:text-2xl font-medium font-textfont md:ml-0 md:mr-0">
                        {unit}
                    </Timetext>
                  </Box>
              ))
          }
      </Container>
    )
}