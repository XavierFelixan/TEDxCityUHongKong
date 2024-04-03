import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamPage from "./Pages/teampage";
import AboutPage from "./Pages/aboutpage";
import HomePage from "./Pages/homepage";
import PastEventPage from "./Pages/pasteventpage";
import Navbar from "./Components/navbar";
import MobileNavbar from "./Components/mobileNavbar";
import Footer from "./Components/footer";
import SpeakerPage from "./Pages/Speakerpage";

const Container = styled.div`
  overflow-x: hidden;
`;

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <BrowserRouter>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/sponsor" element={<Sponsor />} /> */}
          <Route path="/crew" element={<TeamPage />} />
          <Route path="/pastevent" element={<PastEventPage />} />
          <Route path="/speaker/:path" element={<SpeakerPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;