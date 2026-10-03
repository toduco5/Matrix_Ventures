import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Layers, Network, ShieldCheck, Zap, ArrowRight, Activity, Cpu, Globe, RefreshCcw, Briefcase } from 'lucide-react';
import TiltCard from '../components/ui/TiltCard';
import Odometer from '../components/ui/Odometer';

export default function Ecosystem() {
  // Parallax cho Bánh Đà (Flywheel)
  const { scrollYProgress } = useScroll();
  const rotateFlywheel = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const pillars = [
    {
      title: 'Matrix Ventures',
      subtitle: 'Quỹ Đầu Tư Cốt Lõi',
      icon: <Activity size={40} className="text-[#2997ff]" />,
      desc: 'Trái tim của hệ sinh thái. Quỹ tập trung phân bổ vốn vào các vòng Seed, Series A cho các startup công nghệ sâu (DeepTech), Bán dẫn và Trí tuệ nhân tạo (AI).',
      features: ['Nguồn vốn kiên nhẫn (Patient Capital)', 'Tham gia HĐQT chiến lược', 'Mạng lưới co-invest toàn cầu'],
      metrics: { label: 'AUM Khởi điểm', value: '$150M' },
      align: 'left'
    },
    {
      title: 'Syndicate Hub',
      subtitle: 'Liên Minh Đồng Đầu Tư',
      icon: <Globe size={40} className="text-[#f5f5f7]" />,
      desc: 'Nền tảng kết nối các cá nhân UHNWIs và Family Office để cùng tham gia vào các thương vụ triệu đô. Bảo vệ quyền lợi nhà đầu tư cá nhân bằng cấu trúc hợp đồng chuẩn quốc tế.',
      features: ['Quyền đồng đầu tư (Co-invest)', 'Báo cáo DD độc quyền', 'Minh bạch SPV'],
      metrics: { label: 'Thành viên VIP', value: '500+' },
      align: 'right'
    },
    {
      title: 'Venture Labs',
      subtitle: 'Vườn Ươm Công Nghệ',
      icon: <Cpu size={40} className="text-[#2997ff]" />,
      desc: 'Bệ phóng cho các nhà khoa học và kỹ sư xuất chúng. Cung cấp vốn mồi (Pre-seed), không gian R&D và hạ tầng máy chủ AI để thương mại hóa phát minh.',
      features: ['Tài trợ phí bằng sáng chế', 'Mô hình Venture Builder', 'Cố vấn Fortune 500'],
      metrics: { label: 'Thương mại hóa', value: '78%' },
      align: 'left'
    },
    {
      title: 'Growth & PE',
      subtitle: 'Bảo Trợ M&A & Tái Cấu Trúc',
      icon: <ShieldCheck size={40} className="text-[#f5f5f7]" />,
      desc: 'Cánh tay nối dài hỗ trợ các doanh nghiệp trưởng thành. Cung cấp giải pháp tài chính cấu trúc, nghiệp vụ M&A và dọn đường cho đợt phát hành IPO rực rỡ.',
      features: ['Dọn dẹp sổ sách', 'Chiến lược thâu tóm', 'Bảo vệ giá trị cổ đông'],
      metrics: { label: 'Ticket tối đa', value: '$25M' },
      align: 'right'
    }
  ];

  return (
    <div className="w-full relative z-0 bg-transparent text-[#f5f5f7] pb-40 overflow-hidden">

      {/* 1. Hero 3D */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-[rgba(255,255,255,0.05)] perspective-[2000px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2997ff]/15 via-black to-black"></div>
        <div className="z-10 px-4 max-w-[1024px] mx-auto w-full text-center mt-20">
          <motion.div
            initial={{ rotateX: 45, opacity: 0, y: 100 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-[#2997ff] font-bold tracking-widest uppercase text-[13px] mb-6 block" style={{ transform: "translateZ(30px)" }}>Kiến Trúc Đa Tầng</span>
            <h1 className="text-[56px] md:text-[80px] headline-massive tracking-tight leading-[1] mb-8 text-gradient-apple" style={{ transform: "translateZ(50px)" }}>
              Hệ Sinh Thái<br />Khép Kín.
            </h1>
            <p className="text-[21px] md:text-[28px] text-[#86868b] max-w-3xl mx-auto font-medium tracking-tight" style={{ transform: "translateZ(20px)" }}>
              Sự kết hợp hoàn hảo giữa Nguồn vốn, Công nghệ và Mạng lưới. Bốn trụ cột tương hỗ tạo nên sức mạnh không thể phá vỡ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Impact Stats */}
      <section className="py-24 px-4 bg-transparent border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {[
            { val: 12, suf: '+', label: 'Quỹ Thành Phần' },
            { val: 40, suf: '+', label: 'Startup Công Nghệ' },
            { val: 8, suf: ' Trụ sở', label: 'Phủ Sóng Toàn Cầu' },
            { val: 2.4, suf: 'B', prefix: '$', label: 'Giá Trị Tạo Ra' }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-[48px] headline-massive mb-2 text-[#f5f5f7]">
                <Odometer value={stat.val} prefix={stat.prefix} suffix={stat.suf} decimals={stat.val % 1 !== 0 ? 1 : 0} />
              </h3>
              <p className="text-[13px] text-[#2997ff] font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The 4 Pillars (Kiến Trúc Tương Hỗ) - Staggered Layout */}
      <section className="py-40 px-4 relative max-w-[1200px] mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight text-gradient-apple mb-6">4 Trụ Cột Chiến Lược.</h2>
          <p className="text-[21px] text-[#86868b] font-medium max-w-2xl mx-auto">Mỗi trụ cột đảm nhận một chuỗi giá trị riêng biệt, nhưng liên kết chặt chẽ để tối ưu hóa sự thành công của mọi thương vụ.</p>
        </div>

        <div className="space-y-32 relative">
          {/* Trục nối giữa các khối */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#2997ff]/30 to-transparent hidden lg:block"></div>

          {pillars.map((pillar, idx) => (
            <div key={idx} className={`flex flex-col ${pillar.align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 relative`}>

              {/* Điểm nối trên trục */}
              <div className="absolute left-[50%] w-4 h-4 rounded-full bg-[#2997ff] shadow-[0_0_20px_#2997ff] -translate-x-[50%] hidden lg:block"></div>

              <div className="flex-1 w-full perspective-[2000px]">
                <motion.div
                  initial={{ opacity: 0, x: pillar.align === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                >
                  <TiltCard>
                    <div className="apple-card-dark p-12 h-full border border-[rgba(255,255,255,0.05)] shadow-2xl relative overflow-hidden group hover:border-[#2997ff]/50 transition-colors">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff] rounded-full blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>

                      <div className="w-20 h-20 bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-[24px] flex items-center justify-center mb-10 shadow-lg relative z-10" style={{ transform: "translateZ(30px)" }}>
                        {pillar.icon}
                      </div>

                      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                        <h3 className="text-[32px] font-bold headline mb-2 text-[#f5f5f7]">{pillar.title}</h3>
                        <p className="text-[15px] text-[#2997ff] font-bold tracking-widest uppercase mb-6">{pillar.subtitle}</p>
                        <p className="text-[17px] text-[#86868b] font-medium leading-relaxed mb-10">
                          {pillar.desc}
                        </p>
                      </div>

                      <div className="space-y-4 mb-10 relative z-10" style={{ transform: "translateZ(10px)" }}>
                        {pillar.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-4 text-[15px] text-[#f5f5f7]">
                            <Zap size={18} className="text-[#86868b] shrink-0" />
                            <span className="font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.1)] relative z-10" style={{ transform: "translateZ(20px)" }}>
                        <span className="text-[13px] text-[#86868b] uppercase tracking-widest font-bold">{pillar.metrics.label}</span>
                        <span className="text-[28px] font-bold headline text-[#2997ff]">{pillar.metrics.value}</span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </div>

              {/* Text bổ trợ bên cạnh (Chỉ hiện trên desktop) */}
              <div className="hidden lg:block flex-1 pl-12 pr-12 opacity-50">
                <h4 className="text-[24px] headline text-[#86868b] mb-4">Giá trị Cốt lõi</h4>
                <p className="text-[17px] leading-relaxed">
                  Mỗi dòng vốn được luân chuyển đều tạo ra sức bật kép (Multiplier effect) cho toàn bộ hệ sinh thái của Matrix Group.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Động cơ Bánh đà (The Synergy Flywheel) - Animated Graphic */}
      <section className="py-40 px-4 bg-transparent relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight text-[#f5f5f7] mb-6">Cơ chế Bánh đà.</h2>
            <p className="text-[21px] text-[#86868b] font-medium max-w-2xl mx-auto">
              Không có thực thể nào đơn độc. Lợi nhuận của khối này là nguồn nhiên liệu cho khối khác, sinh ra sự tăng trưởng theo hàm mũ.
            </p>
          </motion.div>

          {/* Vòng quay Flywheel 3D Graphic */}
          <div className="relative w-full max-w-[800px] mx-auto aspect-square flex items-center justify-center perspective-[2000px]">
            {/* Vòng quay nền */}
            <motion.div
              style={{ rotate: rotateFlywheel, transformStyle: "preserve-3d" }}
              className="absolute inset-0 border-[4px] border-dashed border-[#2997ff]/20 rounded-full"
            ></motion.div>
            <motion.div
              style={{ rotate: rotateFlywheel }}
              className="absolute inset-8 border-[2px] border-[#2997ff]/10 rounded-full"
            ></motion.div>

            {/* Khối tĩnh ở giữa */}
            <TiltCard>
              <div className="w-64 h-64 bg-[#1d1d1f] rounded-full flex flex-col items-center justify-center border-4 border-[#2997ff] shadow-[0_0_50px_rgba(41,151,255,0.3)] z-20 relative">
                <RefreshCcw size={48} className="text-[#2997ff] mb-4" />
                <span className="text-[24px] headline font-bold text-white">Tăng Trưởng</span>
                <span className="text-[13px] font-bold tracking-widest uppercase text-[#86868b]">Hàm Mũ</span>
              </div>
            </TiltCard>

            {/* Các icon bám vòng ngoài (minh họa logic) với hiệu ứng Hover Glow */}
            <div className="absolute top-0 -translate-y-1/2 apple-card-dark p-6 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center gap-4 z-10 hover:border-[#2997ff] hover:shadow-[0_0_30px_rgba(41,151,255,0.5)] transition-all duration-300 cursor-pointer group">
              <Cpu className="text-[#2997ff] group-hover:scale-125 transition-transform" /> <span className="font-bold group-hover:text-white">Ươm Mầm (Labs)</span>
            </div>
            <div className="absolute bottom-0 translate-y-1/2 apple-card-dark p-6 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center gap-4 z-10 hover:border-[#2997ff] hover:shadow-[0_0_30px_rgba(41,151,255,0.5)] transition-all duration-300 cursor-pointer group">
              <Activity className="text-[#2997ff] group-hover:scale-125 transition-transform" /> <span className="font-bold group-hover:text-white">Cấp Vốn (Ventures)</span>
            </div>
            <div className="absolute left-0 -translate-x-1/2 apple-card-dark p-6 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center gap-4 z-10 hover:border-[#2997ff] hover:shadow-[0_0_30px_rgba(41,151,255,0.5)] transition-all duration-300 cursor-pointer group">
              <Briefcase className="text-[#2997ff] group-hover:scale-125 transition-transform" /> <span className="font-bold group-hover:text-white">M&A (Growth)</span>
            </div>
            <div className="absolute right-0 translate-x-1/2 apple-card-dark p-6 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center gap-4 z-10 hidden md:flex hover:border-[#2997ff] hover:shadow-[0_0_30px_rgba(41,151,255,0.5)] transition-all duration-300 cursor-pointer group">
              <Globe className="text-[#2997ff] group-hover:scale-125 transition-transform" /> <span className="font-bold group-hover:text-white">Đồng Đầu Tư (Syndicate)</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
