import {styled} from "styled-components";

const Container = styled.div``;
const ImageFlex = styled.div``;
const TextFlex = styled.div``;
const Image = styled.img``;
const BoldText = styled.div``;
const List = styled.ul``;
const Text = styled.p``;
const Break = styled.br``;

function EventCard({ img, title, desc, MappedSpeakers }) {
  return (
    <Container className="mx-5 md:mx-20 px-5 md:px-10 my-5 md:my-5 py-5 md:py-auto bg-slate-100 md:flex">
      <ImageFlex className="flex justify-center items-center h-64 w-64 md:h-96 md:w-96">
        <Image src={img} alt={title} className="max-w-full max-h-full object-contain"/>
      </ImageFlex>
      <TextFlex className="mx-0 md:ml-10 font-sans w-[100%]">
        <Text className="my-3 md:my-5 justify-center text-orange-800 text-2xl md:text-4xl font-bold">{title}</Text>
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