import {React} from 'react';
import {useState, useEffect} from 'react';
import {styled} from  'styled-components';


const Container = styled.div``;

const Timebox = styled.div`
    background-color: rgba(161, 161, 161, 0.6)
`;
const TimeNumber = styled.div``;
const Timetext = styled.div``;

export default function Timer(){

    const [Time, setTime] = useState({
        "Days": 0,
        "Hours": 0,
        "Minutes": 0
    });

    useEffect(() => {
        const target = new Date('2024-04-13T00:00:00Z').getTime();
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
        
          // Update countdown immediately before setting the interval
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
        <Container className="flex mx-auto lg:mx-0 my-4 items-center lg:items-end">
            {
                Object.entries(Time).map(([unit, value]) => (
                    <>
                    <Timebox className="flex items-center justify-center w-10 lg:w-20 h-10 lg:h-20">
                        <TimeNumber className="text-white text-xl lg:text-3xl font-medium font-textfont">
                            {value}
                        </TimeNumber>
                    </Timebox>
                    <Timetext className="ml-2 mr-3 text-white text-md lg:text-2xl font-medium font-textfont">
                        {unit}
                    </Timetext>
                    </>
                ))
            }
        </Container>
    )
}