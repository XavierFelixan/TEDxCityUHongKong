import styled from "styled-components";

const Container = styled.div``
const TailwindTest = styled.div``;

function App() {
  return (
    <Container>
      <TailwindTest className="text-red-500 font-bold">
        Hello World
      </TailwindTest>
    </Container>
  );
}

export default App;
