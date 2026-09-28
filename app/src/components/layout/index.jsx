import React, { useState, useEffect } from 'react';

const NAV = [
  { id: 'top', label: 'Trang Chủ' },
  { id: 'eco', label: 'Hệ Sinh Thái' },
  { id: 'flow', label: 'Luồng Vận Hành' },
  { id: 'projects', label: 'Dự Án' },
  { id: 'profile', label: 'Hồ Sơ' },
  { id: 'faq', label: 'FAQ' },
];

export function Header() {
  const [activeId, setActiveId] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );
    
    NAV.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header" style={{ position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 100, borderBottom: '1px solid var(--line)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#top" style={{ textDecoration: 'none' }}>
          <h2 style={{ margin: 0, color: 'var(--ac)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '28px' }}>✦</span> InvestHub
          </h2>
        </a>
        
        <nav style={{ display: 'flex', gap: 'var(--sp-3)' }}>
          {NAV.map(({ id, label }) => (
            <a 
              key={id} 
              href={`#${id}`} 
              style={{ 
                color: activeId === id ? 'var(--ac)' : 'var(--ink)', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                transition: 'color 0.2s'
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#join" className="btn" style={{ textDecoration: 'none' }}>Tham Gia Khảo Sát</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer container">
      <div className="legal-notice">
        <strong>Khuyến cáo pháp lý bắt buộc: </strong>
        Nền tảng chỉ cung cấp không gian kết nối thông tin giữa các bên. Chúng tôi không cam kết lợi nhuận, không đưa ra lời hứa sinh lời hay đảm bảo kết quả đầu tư. Mọi số liệu mô phỏng (nếu có) chỉ mang tính chất minh họa. Vui lòng tham khảo ý kiến luật sư và chuyên gia tài chính trước khi đưa ra quyết định giao dịch.
      </div>
      <p>© 2026 InvestHub. Lập trình Landing Page 1 trang Frontend thuần React + Vite.</p>
    </footer>
  );
}
