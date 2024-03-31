import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamPage from "./Pages/teampage";
import AboutPage from "./Pages/aboutpage";
import HomePage from "./Pages/homepage";
import Speakerpage from "./Pages/Speakerpage";
import PastEventPage from "./Pages/pasteventpage";

const Container = styled.div``

function App() {
  return (
    <Container>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/:speakername" element={<Speakerpage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/pastevent" element={<PastEventPage/>} />
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
