import {styled} from "styled-components";

const Container = styled.div``;
const ImageFlex = styled.div``;
const TextFlex = styled.div``;
const Image = styled.img``;
const BoldText = styled.b``;
const List = styled.ul``;
const Text = styled.p``;
const Break = styled.br``;

function EventCard({img, title, desc, MappedSpeakers}){
    return(
        <Container className="my-10 p-10 bg-slate-100 lg:mx-20 lg:flex">  
          <ImageFlex className="pt-4 pl-4 pb-4 pr-8 lg:h-96 lg:w-96">
            <Image src={img} alt="pastevents"/>
          </ImageFlex>
          <TextFlex className="font-sans w-[59vw]"> 
            <Text className="justify-center text-orange-800 text-4xl font-bold">{title}</Text>
            <Break />
            <Text>{desc}</Text>
            <Break />
            <BoldText>Speakers:</BoldText>
            <List>
              {MappedSpeakers}
            </List>
          </TextFlex>
      </Container>
    );
}

export default EventCard