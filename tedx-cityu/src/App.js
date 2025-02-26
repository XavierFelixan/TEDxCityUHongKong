import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamPage from "./Pages/teampage";
import AboutPage from "./Pages/aboutpage";
import HomePage from "./Pages/homepage";
import PastEventPage from "./Pages/pasteventpage";
import Navbar from "./Components/navbar";
import MobileNavbar from "./Components/navbarMobile";
import TabletNavbar from "./Components/navbarTablet";
import Footer from "./Components/footer";
import SpeakerPage from "./Pages/Speakerpage";
import PerformerPage from "./Pages/Performerpage";

const Container = styled.div`
  overflow-x: hidden;
`;

function App() {
  const mobileBreakpoint = 768;
  const tabletBreakpoint = 1024;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < mobileBreakpoint;
  const isTablet = windowWidth >= mobileBreakpoint && windowWidth < tabletBreakpoint;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <BrowserRouter>
        {isMobile ? <MobileNavbar /> : isTablet ? <TabletNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/crew" element={<TeamPage isMobile={isMobile} isTablet={isTablet} />} />
          <Route path="/pastevent" element={<PastEventPage />} />
          <Route path="/speaker/:path" element={<SpeakerPage />} />
          {/* <Route path="/performer/:path" element={<PerformerPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;