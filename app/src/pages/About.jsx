import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="w-full">
      <div className="w-full bg-surface-container-low py-4 px-8 lg:px-16 border-b border-outline-variant/20 pt-24">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="section-tag text-outline">Trang chủ</span>
            <span className="text-outline">/</span>
            <span className="section-tag text-secondary font-bold">Về Tập Đoàn</span>
          </div>
        </div>
      </div>

      <section className="relative w-full overflow-hidden bg-primary-container py-32 px-8 lg:px-16">
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="80%" cy="20%" id="lux-glow" r="60%">
                <stop offset="0%" stopColor="#fedeb2" stopOpacity="0.35"></stop>
                <stop offset="100%" stopColor="#051b3c" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
            <rect fill="url(#lux-glow)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container/10 border border-secondary/20 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                <span className="section-tag text-secondary-fixed">Di Sản 20 Năm Vững Vàng (2005 - 2025)</span>
              </div>
              <h1 className="headline text-white leading-tight" style={{fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 600, letterSpacing: "-0.02em"}}>
                Hành Trình Hai Thập Kỷ <br/><span className="italic text-secondary-fixed font-normal">Kiến Tạo Giá Trị Vượt Thời Gian</span>
              </h1>
              <p className="text-on-primary-container max-w-2xl leading-relaxed text-xl" style={{fontWeight: 300}}>
                Khởi nguồn từ ý chí phụng sự quốc gia thông qua các công trình thế kỷ, Matrix Ventures đã phát triển thành tập đoàn kinh tế đa ngành tỷ USD, biểu trưng cho sự bền vững, minh bạch và tầm nhìn toàn cầu hóa.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-fixed/20 rounded-full blur-xl"></div>
                <div className="bg-cover bg-center w-full h-80 rounded-xl overflow-hidden relative shadow-inner" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4eeAuUlwpq5tNHfq2I6_lgrDR9ITsUgXEqFtBIm3aKWUKSLRxB1luCjeSm0b-jHLUAWTPCX3p8PTNVVS7hTbnwXZ-EmW34eFhhAQeuDeh2G9aC5N4_MYrN355MiJ28wAKkfZXbw3qkpWeJ79Yi73kgjJSJN8Gqnc6N47p8INHVf1e0i3-GvchvXhlgy5V702zmjJIk6uUKoJZsAw_JRsbC4XmrEJmVhrdJXp7mgMTYWifU2wLmisKIQ')"}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="section-tag text-secondary-fixed mb-1">Trụ Sở Điều Hành Toàn Cầu</div>
                    <div className="text-white font-semibold text-2xl headline">Matrix Grand Tower TPHCM</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-primary/50 p-4 rounded-xl text-center border border-white/10">
                    <span className="metric-num text-secondary-fixed block text-3xl">20+</span>
                    <span className="section-tag text-on-primary-container">Năm Bền Vững</span>
                  </div>
                  <div className="bg-primary/50 p-4 rounded-xl text-center border border-white/10">
                    <span className="metric-num text-secondary-fixed block text-3xl">$2.4B</span>
                    <span className="section-tag text-on-primary-container">Vốn Hóa TT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-20 max-w-3xl mx-auto">
            <span className="section-tag text-secondary block mb-4">Giá Trị Cốt Lõi</span>
            <h2 className="headline text-on-surface text-5xl mb-6 font-semibold">Triết Lý 5T Chuẩn Mực</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">Năm trụ cột giá trị dẫn dắt mọi quyết định, mọi hành động và mọi dự án của tập đoàn trong suốt 20 năm qua.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { t: 'TẦM', title: 'Tầm Vóc', desc: 'Nghĩ lớn, làm lớn, không ngừng vươn ra biển lớn quốc tế.', icon: 'rocket_launch' },
              { t: 'TÂM', title: 'Tận Tâm', desc: 'Đặt đạo đức nghề nghiệp và lợi ích khách hàng lên hàng đầu.', icon: 'favorite' },
              { t: 'TÍN', title: 'Tín Nhiệm', desc: 'Chữ Tín là tài sản vô giá, là lợi thế cạnh tranh số một.', icon: 'handshake' },
              { t: 'BỀN', title: 'Bền Vững', desc: 'Phát triển kinh tế phải đi đôi với bảo vệ môi trường.', icon: 'eco' },
              { t: 'THỊNH', title: 'Thịnh Vượng', desc: 'Chia sẻ thành quả, góp phần vào sự giàu mạnh của Đất nước.', icon: 'diamond' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-surface-container-lowest p-8 rounded-2xl shadow-lg border border-outline-variant/10 text-center hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-20 h-20 mx-auto bg-surface-container rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary-fixed transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <h3 className="headline text-primary text-2xl font-bold mb-2">{item.t}</h3>
                <h4 className="text-secondary font-semibold mb-4">{item.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="w-full py-32 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="mb-16">
            <span className="section-tag text-secondary block mb-4">Đội Ngũ Dẫn Dắt</span>
            <h2 className="headline text-on-surface text-5xl font-semibold">Hội Đồng Quản Trị & Ban Giám Đốc</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Ông Nguyễn Minh Đức', role: 'Chủ Tịch HĐQT', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
              { name: 'Bà Trần Thị Thu Hà', role: 'Tổng Giám Đốc', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
              { name: 'Ông Lê Việt Hoàng', role: 'P.Tổng Giám Đốc Tài Chính', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop' },
              { name: 'Ông David Chen', role: 'Giám Đốc Chiến Lược ESG', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' }
            ].map((person, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-xl"
              >
                <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 transform group-hover:-translate-y-4 transition-transform duration-300">
                  <h3 className="headline text-white text-2xl font-semibold mb-1">{person.name}</h3>
                  <p className="text-secondary-fixed text-sm font-semibold uppercase tracking-wider">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
