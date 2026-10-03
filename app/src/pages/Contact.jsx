import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from '../components/ui/TiltCard';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="w-full relative z-0 bg-transparent text-[#f5f5f7] pb-32">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-24 border-b border-[rgba(255,255,255,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Global Network" className="w-full h-full object-cover grayscale opacity-30 mix-blend-screen" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto perspective-[2000px]">
          <motion.div
            initial={{ rotateX: 45, opacity: 0, y: 50 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className="text-[56px] md:text-[80px] headline-massive tracking-tight leading-[1.05] mb-6 text-gradient-apple" style={{ transform: "translateZ(50px)" }}>Liên Hệ Hợp Tác.</h1>
            <p className="text-[21px] text-[#86868b] font-medium max-w-2xl mx-auto" style={{ transform: "translateZ(20px)" }}>
              Kết nối trực tiếp với đội ngũ chuyên gia thẩm định và phân bổ vốn của Matrix Ventures.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Hubs */}
          <div className="space-y-16">
            <div>
              <h2 className="text-[32px] headline font-semibold mb-8 tracking-tight">Kênh Trực Tiếp</h2>
              <div className="space-y-6">
                <TiltCard>
                  <div className="apple-card-dark p-6 flex items-center gap-6 border border-[rgba(255,255,255,0.05)] hover:border-[#2997ff] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#1d1d1f] flex items-center justify-center shrink-0 border border-[rgba(255,255,255,0.1)]">
                      <Mail className="text-[#f5f5f7]" size={20} />
                    </div>
                    <div>
                      <span className="block text-[11px] text-[#86868b] uppercase tracking-widest font-bold mb-1">Dành cho Nhà Đầu Tư (Syndicate)</span>
                      <a href="mailto:invest@matrixventures.com" className="text-[17px] font-semibold text-[#2997ff] hover:underline">invest@matrixventures.com</a>
                    </div>
                  </div>
                </TiltCard>
                <TiltCard>
                  <div className="apple-card-dark p-6 flex items-center gap-6 border border-[rgba(255,255,255,0.05)] hover:border-[#2997ff] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#1d1d1f] flex items-center justify-center shrink-0 border border-[rgba(255,255,255,0.1)]">
                      <Mail className="text-[#f5f5f7]" size={20} />
                    </div>
                    <div>
                      <span className="block text-[11px] text-[#86868b] uppercase tracking-widest font-bold mb-1">Gửi Pitch Deck (Doanh Nghiệp)</span>
                      <a href="mailto:pitch@matrixventures.com" className="text-[17px] font-semibold text-[#2997ff] hover:underline">pitch@matrixventures.com</a>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>

            <div>
              <h2 className="text-[32px] headline font-semibold mb-8 tracking-tight">Global Hubs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { city: 'Singapore', desc: 'Trụ sở HĐQT & Trung tâm phân bổ vốn Châu Á', addr: '12 Marina Boulevard, Marina Bay Financial Centre' },
                  { city: 'Dubai, UAE', desc: 'Family Office Hub & Quản lý tài sản UHNWIs', addr: 'DIFC, Gate Precinct Building 5' }
                ].map((hub, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} className="apple-card-dark p-6 border border-[rgba(255,255,255,0.05)]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin size={18} className="text-[#2997ff]" />
                      <h4 className="text-[19px] font-semibold text-[#f5f5f7] headline">{hub.city}</h4>
                    </div>
                    <p className="text-[11px] text-[#2997ff] uppercase font-bold tracking-widest mb-3">{hub.desc}</p>
                    <p className="text-[14px] text-[#86868b] leading-relaxed font-medium">{hub.addr}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <div className="apple-card-dark p-10 border border-[rgba(255,255,255,0.05)] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
              <h3 className="text-[28px] headline font-semibold mb-2 relative z-10 text-[#f5f5f7]">Gửi Yêu Cầu Định Danh</h3>
              <p className="text-[15px] text-[#86868b] mb-8 font-medium relative z-10">Quy trình thẩm định khách hàng KYC/AML sẽ bắt đầu sau khi bạn gửi thông tin.</p>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold">Họ và Tên</label>
                    <input type="text" className="w-full bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-[#f5f5f7] focus:outline-none focus:border-[#2997ff] transition-colors" placeholder="VD: Nguyen Van A" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold">Đơn vị / Tổ chức</label>
                    <input type="text" className="w-full bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-[#f5f5f7] focus:outline-none focus:border-[#2997ff] transition-colors" placeholder="Tên công ty" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold">Email Công Việc</label>
                  <input type="email" className="w-full bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-[#f5f5f7] focus:outline-none focus:border-[#2997ff] transition-colors" placeholder="name@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold">Lĩnh Vực Quan Tâm</label>
                  <select className="w-full bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-[#f5f5f7] focus:outline-none focus:border-[#2997ff] transition-colors appearance-none">
                    <option>Đăng ký thành viên Syndicate Hub</option>
                    <option>Gửi Pitch Deck gọi vốn</option>
                    <option>Hợp tác tư vấn M&A</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full mt-4 apple-btn-primary py-4 flex items-center justify-center gap-2 group">
                  <span className="text-[15px]">Gửi Yêu Cầu</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-center text-[#86868b] mt-4 font-medium">Bằng việc gửi thông tin, bạn đồng ý với chính sách bảo mật (e-NDA).</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
