import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-container text-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded p-1">
                <img src="/logo-mark.png" alt="Matrix Ventures Logo" className="max-w-full max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div className="hidden w-10 h-10 bg-secondary-fixed rounded flex items-center justify-center">
                  <span className="text-on-secondary-fixed font-bold text-lg headline">M</span>
                </div>
</div>
              </div>
              <div>
                <div className="headline text-lg font-semibold text-white">Matrix Ventures</div>
                <div className="section-tag text-secondary-fixed" style={{fontSize: "10px"}}>Hệ Sinh Thái Cộng Đồng Kết Nối Đầu Tư</div>
              </div>
              <p className="text-on-primary-container text-sm leading-relaxed">Kết nối Startup - Nhà đầu tư - Mentor - Đối tác, cùng xây dựng tương lai bền vững.</p>
          </div>
          <div>
            <h4 className="nav-link text-secondary-fixed mb-4">Về Tập Đoàn</h4>
            <ul className="space-y-2 text-sm text-on-primary-container">
              <li><Link to="/about" className="hover:text-white transition-colors">Lịch sử hình thành</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Tầm nhìn & Sứ mệnh</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Hội đồng quản trị</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Trách nhiệm ESG</a></li>
            </ul>
          </div>
          <div>
            <h4 className="nav-link text-secondary-fixed mb-4">Lĩnh Vực Kinh Doanh</h4>
            <ul className="space-y-2 text-sm text-on-primary-container">
              <li><Link to="/sectors" className="hover:text-white transition-colors">Bất động sản & Đô thị</Link></li>
              <li><Link to="/sectors" className="hover:text-white transition-colors">Năng lượng tái tạo</Link></li>
              <li><Link to="/sectors" className="hover:text-white transition-colors">Cảng biển & Logistics</Link></li>
              <li><Link to="/sectors" className="hover:text-white transition-colors">Quản lý quỹ & Tài chính</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="nav-link text-secondary-fixed mb-4">Liên Hệ</h4>
<ul className="space-y-3 text-sm text-on-primary-container">
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary-fixed text-sm mt-0.5">location_on</span><span>107 Nguyễn Như, KonTum, Thanh Xuân, Hà Nội</span></li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-fixed text-sm">phone</span><span>(+84) 332318460</span></li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-fixed text-sm">mail</span><span>contact@matrixventures.vn</span></li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary-fixed text-sm">schedule</span><span>8:00-18:00 (Thứ 2 - Thứ 6)</span></li>
            </ul>
          </div>
        </div>
        <div className="gold-line mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-on-primary-container">© 2025 Matrix Ventures - Hệ Sinh Thái Cộng Đồng Kết Nối Đầu Tư. Bảo lưu mọi quyền.</span>
          <div className="flex items-center gap-6 text-sm text-on-primary-container">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white transition-colors">Công bố thông tin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
