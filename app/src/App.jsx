import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import AIChat from './components/ui/AIChat';
import CommandPalette from './components/ui/CommandPalette';
import GlobalNewsletter from './components/ui/GlobalNewsletter';

import Home from './pages/Home';
import About from './pages/About';
import Ecosystem from './pages/Ecosystem';
import News from './pages/News';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleOpenCommandPalette = () => setIsCommandPaletteOpen(true);
    document.addEventListener('open-command-palette', handleOpenCommandPalette);
    return () => document.removeEventListener('open-command-palette', handleOpenCommandPalette);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen relative selection:bg-[#2997ff] selection:text-white transition-all duration-700 ${isLightMode ? 'invert hue-rotate-180' : ''}`}>
      <CustomCursor />
      <ScrollToTop />
      <Header 
        isLightMode={isLightMode}
        toggleTheme={() => setIsLightMode(!isLightMode)}
      />
      <main className="flex-1 w-full mt-[44px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />

      {/* Global Overlays */}
      <GlobalNewsletter />
      <AIChat />
      <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} />
    </div>
  );
}
