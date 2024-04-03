import {styled} from "styled-components";

const Container = styled.div``;
const ImageFlex = styled.div``;
const TextFlex = styled.div``;
const Image = styled.img``;
const BoldText = styled.div``;
const List = styled.ul``;
const Text = styled.p``;
const Break = styled.br``;

function EventCard({img, title, desc, MappedSpeakers}){
    return(
        <Container className="px-10 py-5 bg-slate-100 lg:mx-20 lg:flex">  
          <ImageFlex className="h-64 w-64 lg:h-96 lg:w-96">
            <Image src={img} alt={title}/>
          </ImageFlex>
          <TextFlex className="mx-3 lg:ml-10 font-sans w-[59vw]"> 
            <Text className="my-3 lg:my-5 justify-center text-orange-800 text-2xl lg:text-4xl font-bold">{title}</Text>
            <Text className="justify-center">{desc}</Text>
            <BoldText className="my-3 font-bold">Speakers:</BoldText>
            <List>
              {MappedSpeakers}
            </List>
          </TextFlex>
      </Container>
    );
}

export default EventCard