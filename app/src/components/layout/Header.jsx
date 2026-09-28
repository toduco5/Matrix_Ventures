import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    const base = "nav-link px-3 py-2 transition-colors ";
    return location.pathname === path 
      ? base + "text-secondary border-b-2 border-secondary"
      : base + "text-on-surface-variant hover:text-on-surface";
  };

  const getMobileLinkClass = (path) => {
    return location.pathname === path
      ? "nav-link py-2 text-secondary"
      : "nav-link py-2 text-on-surface-variant hover:text-on-surface transition-colors";
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 shadow-sm border-b border-outline-variant/30 bg-surface/93 backdrop-blur-md">
        <div className="h-20 max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/logo-mark.png" alt="Matrix Ventures Logo" className="max-w-full max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              <div className="hidden w-10 h-10 bg-primary rounded items-center justify-center">
                <span className="text-on-primary font-bold text-lg headline">M</span>
              </div>
            </div>
<div className="flex flex-col">
              <span className="headline text-lg font-semibold uppercase tracking-wide text-on-surface leading-tight">Matrix Ventures</span>
              <span className="section-tag text-secondary" style={{fontSize: "10px"}}>Hệ Sinh Thái Cộng Đồng Kết Nối Đầu Tư</span>
            </div>
          </Link>
<nav className="hidden xl:flex items-center gap-1">
            <Link to="/" className={getLinkClass("/")}>Trang Chủ</Link>
            <Link to="/about" className={getLinkClass("/about")}>Về Tập Đoàn</Link>
            <Link to="/sectors" className={getLinkClass("/sectors")}>Lĩnh Vực Kinh Doanh</Link>
            <Link to="/ecosystem" className={getLinkClass("/ecosystem")}>Hệ Sinh Thái Đầu Tư</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex">
              <LanguageSwitcher />
            </div>
            <Link to="/contact" className="hidden sm:inline-flex items-center px-4 py-2.5 bg-secondary-fixed text-on-secondary-fixed nav-link rounded-lg shadow-sm hover:bg-secondary-container transition-all">
              Liên Hệ
            </Link>
            <button 
              className="xl:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined text-on-surface">menu</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="xl:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-4">
            <nav className="flex flex-col gap-2">
              <Link to="/" className={getMobileLinkClass("/")} onClick={() => setMenuOpen(false)}>Trang Chủ</Link>
              <Link to="/about" className={getMobileLinkClass("/about")} onClick={() => setMenuOpen(false)}>Về Tập Đoàn</Link>
              <Link to="/sectors" className={getMobileLinkClass("/sectors")} onClick={() => setMenuOpen(false)}>Lĩnh Vực Kinh Doanh</Link>
              <Link to="/ecosystem" className={getMobileLinkClass("/ecosystem")} onClick={() => setMenuOpen(false)}>Hệ Sinh Thái Đầu Tư</Link>
              <Link to="/contact" className={getMobileLinkClass("/contact")} onClick={() => setMenuOpen(false)}>Liên Hệ</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
