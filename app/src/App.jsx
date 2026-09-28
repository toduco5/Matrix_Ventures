import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sectors from './pages/Sectors';
import IR from './pages/IR';
import Ecosystem from './pages/Ecosystem';
import Campaigns from './pages/Campaigns';
import CampaignDetail from './pages/CampaignDetail';
import Ventures from './pages/Ventures';
import VentureDetail from './pages/VentureDetail';
import Mechanisms from './pages/Mechanisms';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import FlowProcess from './pages/FlowProcess';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/ir" element={<IR />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:slug" element={<CampaignDetail />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/ventures/:slug" element={<VentureDetail />} />
          <Route path="/mechanisms" element={<Mechanisms />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flow" element={<FlowProcess />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
