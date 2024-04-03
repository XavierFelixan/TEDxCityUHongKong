import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamPage from "./Pages/teampage";
import AboutPage from "./Pages/aboutpage";
import HomePage from "./Pages/homepage";
import SpeakerPage from "./Pages/Speakerpage";
import PastEventPage from "./Pages/pasteventpage";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

const Container = styled.div``

function App() {
  return (
    <Container>
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          {/* <Route path="/:speakername" element={<Speakerpage/>} /> */}
          {/* <Route path="/sponsor" element={<Sponsor/>} /> */}
          <Route path="/crew" element={<TeamPage/>} />
          <Route path="/pastevent" element={<PastEventPage/>} />
          <Route path="/speaker/:path" element={<SpeakerPage/>} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </Container>
  );
}

export default App;
