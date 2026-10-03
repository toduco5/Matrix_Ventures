import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Globe, Sun, Moon, Search, Users } from 'lucide-react';

export default function Header({ isLightMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage, t } = useLanguage();
  
  const navLinks = [
    { path: '/', label: t('header.nav.home') },
    { path: '/about', label: t('header.nav.about') },
    { path: '/ecosystem', label: t('header.nav.ecosystem') },
    { path: '/news', label: t('header.nav.deals') },
    { path: '/careers', label: t('header.nav.careers') || 'Careers' }
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-[rgba(0,0,0,0.7)] backdrop-blur-md saturate-[180%] border-b border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-[54px] md:h-[44px]">
          
          {/* Brand Lockup */}
          <Link to="/" className="flex items-center group opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-[18px] h-[18px]">
              <img src="/logo-mark.png" alt="Matrix Ventures" className="w-full h-full object-contain invert" />
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#86868b] hover:text-white'}`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            
            {/* Command Palette Trigger */}
            <button 
              onClick={() => document.dispatchEvent(new CustomEvent('open-command-palette'))}
              className="hidden md:flex items-center gap-2 text-[#86868b] hover:text-white transition-colors border border-[rgba(255,255,255,0.1)] rounded-full px-3 py-1 bg-[#1d1d1f]"
            >
              <Search size={12} />
              <span className="text-[10px] font-bold tracking-widest uppercase">Cmd+K</span>
            </button>

            {/* Language Toggle */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" onClick={toggleLanguage}>
              <Globe size={14} className="text-[#f5f5f7]" />
              <span className="text-[12px] text-[#f5f5f7] font-medium uppercase">{lang}</span>
            </div>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] text-[#86868b] hover:text-white transition-colors bg-[#1d1d1f]">
              {isLightMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            
            {/* Tham gia cộng đồng CTA */}
            <Link to="/contact" className="hidden md:flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 bg-[#f5f5f7] text-black rounded-full hover:bg-white transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Users size={12}/> Tham gia cộng đồng
            </Link>
            
            {/* Mobile Hamburger */}
            <button className="lg:hidden text-[#f5f5f7] opacity-80 hover:opacity-100 p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black absolute top-[54px] left-0 w-full overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} key={link.path}>
                  <Link to={link.path} className="text-[#f5f5f7] text-[24px] font-semibold block border-b border-[rgba(255,255,255,0.1)] pb-4">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.1)]">
                <div className="flex items-center gap-2 cursor-pointer" onClick={toggleLanguage}>
                  <Globe size={20} className="text-[#f5f5f7]" />
                  <span className="text-[16px] text-[#f5f5f7] font-semibold uppercase">{lang === 'vi' ? 'Tiếng Việt' : 'English'}</span>
                </div>
                <button onClick={toggleTheme} className="text-[#f5f5f7] p-2 border border-[rgba(255,255,255,0.1)] rounded-full">
                  {isLightMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
              <Link to="/contact" className="w-full text-center py-4 bg-[#f5f5f7] text-black rounded-full font-bold uppercase tracking-widest mt-4">
                Tham gia cộng đồng
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
