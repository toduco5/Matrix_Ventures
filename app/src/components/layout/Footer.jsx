import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden pt-24 pb-12 z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center justify-center">
                <span className="text-white font-bold text-lg headline">M</span>
              </div>
              <div>
                <div className="headline text-xl font-bold text-white">{t('header.brand')}</div>
              </div>
            </div>
            <p className="text-[#86868b] text-[15px] leading-relaxed mb-8 max-w-md font-medium">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              {['IN', 'TW', 'FB'].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#1d1d1f] flex items-center justify-center text-xs font-bold text-[#86868b] hover:text-white hover:border-[#2997ff] transition-colors shadow-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6 opacity-50">{t('footer.institution')}</h4>
            <ul className="space-y-4 text-[15px] font-medium text-[#86868b]">
              <li><Link to="/about" className="hover:text-[#2997ff] transition-colors">{t('header.nav.about')}</Link></li>
              <li><Link to="/ecosystem" className="hover:text-[#2997ff] transition-colors">{t('header.nav.ecosystem')}</Link></li>
              <li><Link to="/news" className="hover:text-[#2997ff] transition-colors">{t('header.nav.deals')}</Link></li>
              <li><Link to="/careers" className="hover:text-[#2997ff] transition-colors">{t('header.nav.careers')}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6 opacity-50">{t('footer.legal')}</h4>
            <ul className="space-y-4 text-[15px] font-medium text-[#86868b]">
              <li><a href="#" className="hover:text-[#2997ff] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#2997ff] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#2997ff] transition-colors">Investor Disclosure</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-6 opacity-50">{t('footer.hubs')}</h4>
            <ul className="space-y-4 text-[15px] text-[#86868b] font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#2997ff] mt-0.5 shrink-0" />
                <span>12 Marina Boulevard<br/>Marina Bay, Singapore</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#2997ff] shrink-0" />
                <div className="flex justify-between w-full">
                  <span>Singapore (SGT)</span>
                  <span className="text-white font-mono text-[13px] font-bold">14:00</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#2997ff] shrink-0" />
                <div className="flex justify-between w-full">
                  <span>San Francisco (PST)</span>
                  <span className="text-white font-mono text-[13px] font-bold">23:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="w-full bg-[#1d1d1f] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-16 text-[#86868b] text-[13px] leading-relaxed text-justify">
          <strong className="text-[#f5f5f7]">Thông Báo Pháp Lý Quan Trọng:</strong> Toàn bộ nội dung và dữ liệu được trình bày trên nền tảng Matrix Ventures được cung cấp nhằm mục đích giới thiệu cơ chế kết nối đầu tư và năng lực nghiên cứu thị trường của hệ sinh thái, tuyệt đối không cấu thành lời mời chào phát hành chứng khoán công khai hoặc tư vấn tài chính đại chúng. Quyền tiếp cận hồ sơ tài chính chi tiết (Investment Memorandum) chỉ được kích hoạt sau khi cá nhân/tổ chức hoàn tất xác minh tư cách Nhà đầu tư được công nhận (Accredited Investor) theo luật định và ký kết Thỏa thuận Bảo mật Thông tin (NDA). Matrix Ventures không chịu trách nhiệm đối với các quyết định phân bổ vốn độc lập nằm ngoài cơ chế giám sát ủy thác chính thức.
        </div>

        <div className="w-full border-t border-[rgba(255,255,255,0.05)] pt-12 flex flex-col items-center">
          <h1 className="text-[12vw] font-bold headline text-white/[0.03] select-none leading-none tracking-tighter w-full text-center mb-12 pointer-events-none">
            {t('header.brand').toUpperCase()}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between w-full text-[11px] text-[#86868b] font-bold tracking-widest uppercase">
            <span>{t('footer.rights')}</span>
            <span className="mt-2 md:mt-0 flex items-center gap-2">{t('footer.design')} <Globe2 size={12}/></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
