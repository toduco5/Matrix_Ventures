import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronRight, FileText, Lock, TrendingUp, AlertTriangle, X, Mail } from 'lucide-react';
import TiltCard from '../components/ui/TiltCard';

export default function News() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'DeepTech', 'Fintech', 'M&A', 'IPO'];

  

  const featuredArticle = {
    category: 'Báo Cáo Độc Quyền',
    title: 'Tại sao dòng vốn ngầm 1.2 Tỷ USD của giới siêu giàu Châu Á đang âm thầm dịch chuyển từ BĐS sang Bán dẫn?',
    desc: 'Lãi suất neo cao, bong bóng tài sản xẹp xuống. Giới tinh hoa đang bí mật cơ cấu lại danh mục. Đây là cách họ "bắt đáy" kỷ nguyên DeepTech mà không ai hay biết...',
    date: 'Tháng 10, 2026',
    author: 'Jonathan Marcus - Managing Partner',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  };

  const insights = [
    {
      tag: 'M&A',
      title: 'Hậu trường vụ M&A 50 triệu USD của Project CyberNet: Chúng tôi đã chốt deal thế nào trong 72 giờ?',
      desc: 'Bí mật đằng sau mức định giá điên rồ và cách các nhà đầu tư trong Syndicate Hub nhân 3 tài khoản chỉ sau 36 tháng.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      tag: 'DeepTech',
      title: '90% Startup AI hiện nay là cú lừa "bình mới rượu cũ". Đây là 3 tiêu chí cốt tử để soi rọi rủi ro.',
      desc: 'Đừng để chữ "AI" đánh lừa bạn. Khung thẩm định 5 bước của Matrix Group đã bóc trần hàng loạt báo cáo tài chính được "trang điểm".',
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
    },
    {
      tag: 'DeepTech',
      title: 'Động cơ Plasma siêu nhỏ: Thị trường nghìn tỷ đô bị bỏ ngỏ. Matrix vừa ký e-NDA với ai?',
      desc: 'NASA vừa công bố cắt giảm ngân sách LEO. Cơ hội lịch sử để tư bản tư nhân thâu tóm công nghệ hàng không vũ trụ với giá "rẻ mạt".',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    },
    {
      tag: 'Fintech',
      title: 'Khi DeFi gặp gỡ Private Equity: Cú nổ Big Bang của thị trường vốn thứ cấp.',
      desc: 'Giải quyết bài toán thanh khoản cho Startup giai đoạn sớm. Đây là cách Matrix token hóa danh mục đầu tư.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const filteredInsights = activeTab === 'All' ? insights : insights.filter(i => i.tag === activeTab);

  return (
    <div className="w-full relative z-0 bg-transparent text-[#f5f5f7] pb-40">
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#2997ff] origin-left z-[100]" style={{ scaleX }} />

      {/* 1. Hero Section - Tin Tức & Alpha */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden border-b border-[rgba(255,255,255,0.05)] perspective-[2000px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-10 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

        <motion.div
          initial={{ rotateX: -30, opacity: 0, y: 50 }} animate={{ rotateX: 0, opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-10 px-4 mt-20 max-w-4xl" style={{ transformStyle: "preserve-3d" }}
        >
          <div className="mx-auto w-20 h-20 bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(41,151,255,0.2)]">
            <TrendingUp className="text-[#2997ff]" size={32} />
          </div>
          <span className="text-[#2997ff] font-bold tracking-widest uppercase text-[13px] mb-4 block" style={{ transform: "translateZ(30px)" }}>Alpha Insights</span>
          <h1 className="text-[56px] md:text-[80px] headline-massive tracking-tight text-gradient-apple mb-6" style={{ transform: "translateZ(50px)" }}>Kiến Thức Tiền Trạm.</h1>
          <p className="text-[21px] md:text-[28px] text-[#86868b] font-medium max-w-3xl mx-auto leading-relaxed" style={{ transform: "translateZ(20px)" }}>
            Báo cáo nội bộ, góc nhìn sắc lẹm và những sự thật trần trụi về thị trường vốn. Dữ liệu độc quyền chỉ dành riêng cho giới tinh hoa.
          </p>
        </motion.div>
      </section>

      {/* 2. Tin Tiêu Điểm (FOMO Featured Article) */}
      <section className="py-24 px-4 bg-transparent relative">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TiltCard>
              <div className="apple-card-light grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden shadow-2xl border border-[rgba(0,0,0,0.1)] group">
                <div className="h-[400px] md:h-full relative overflow-hidden">
                  <img src={featuredArticle.img} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="News" />
                  <div className="absolute top-4 left-4 bg-transparent text-white text-[11px] uppercase font-bold tracking-widest px-4 py-2 rounded-full flex items-center gap-2">
                    <AlertTriangle size={14} className="text-red-500" /> Tuyệt Mật
                  </div>
                </div>

                <div className="p-12 md:p-16 flex flex-col justify-center relative bg-[#f5f5f7]">
                  <span className="text-[#2997ff] font-bold text-[13px] uppercase tracking-widest mb-4">{featuredArticle.category}</span>
                  <h2 className="text-[32px] md:text-[40px] headline-massive tracking-tight text-[#1d1d1f] leading-tight mb-6">{featuredArticle.title}</h2>
                  <p className="text-[17px] text-[#86868b] font-medium leading-relaxed mb-8">{featuredArticle.desc}</p>

                  <div className="flex items-center justify-between mb-10 border-t border-[rgba(0,0,0,0.1)] pt-6">
                    <span className="text-[13px] font-bold text-[#1d1d1f] uppercase">{featuredArticle.author}</span>
                    <span className="text-[13px] font-bold text-[#86868b] uppercase tracking-widest">{featuredArticle.date}</span>
                  </div>

                  <button className="apple-btn-secondary bg-[#1d1d1f] text-white hover:bg-[#2997ff] px-8 py-4 w-full flex items-center justify-center gap-2">
                    Mở Khóa Báo Cáo Đầy Đủ <Lock size={16} />
                  </button>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* 3. Tin Tức Thị Trường (Grid Insights) */}
      <section className="py-24 px-4 bg-transparent">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="text-[40px] md:text-[48px] headline-massive tracking-tight text-[#f5f5f7] mb-2">Góc Nhìn Thực Chiến.</h2>
              <p className="text-[17px] text-[#86868b] font-medium">Bóc tách các bản ngã của thị trường.</p>
            </div>
            
            {/* iOS Segmented Control */}
            <div className="flex p-1 bg-[#1d1d1f] rounded-xl border border-[rgba(255,255,255,0.05)] w-full md:w-auto overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2 text-[13px] font-bold uppercase tracking-widest rounded-lg transition-colors whitespace-nowrap ${activeTab === tab ? 'text-white' : 'text-[#86868b] hover:text-white'}`}
                >
                  {activeTab === tab && (
                    <motion.div layoutId="active-tab" className="absolute inset-0 bg-[#2997ff] rounded-lg" style={{ zIndex: -1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredInsights.map((article, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }} 
                  key={article.title} 
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <div className="apple-card-dark border border-[rgba(255,255,255,0.05)] overflow-hidden h-full flex flex-col group cursor-pointer hover:border-[#2997ff]/50 transition-colors">
                      <div className="h-[240px] overflow-hidden relative">
                        <img src={article.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Thumbnail" />
                        <div className="absolute top-4 left-4 bg-[#1d1d1f]/80 backdrop-blur-md text-[#f5f5f7] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)]">
                          {article.tag}
                        </div>
                      </div>

                      <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-[21px] font-semibold text-[#f5f5f7] headline mb-4 group-hover:text-[#2997ff] transition-colors">{article.title}</h3>
                        <p className="text-[15px] text-[#86868b] font-medium leading-relaxed mb-8 flex-1 line-clamp-3">{article.desc}</p>

                        <div className="mt-auto border-t border-[rgba(255,255,255,0.1)] pt-4">
                          <span className="text-[13px] font-bold text-[#2997ff] flex items-center gap-1 group-hover:gap-2 transition-all">
                            Đọc phần còn lại <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Kêu Gọi Hợp Tác Gắt Gao (The Hook) */}
      <section className="py-32 px-4 bg-[#f5f5f7] relative overflow-hidden perspective-[2000px]">
        <div className="max-w-[1024px] mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <FileText className="mx-auto text-[#1d1d1f] mb-8" size={48} />
            <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight text-[#1d1d1f] mb-8 leading-[1.05]">
              Bạn đang bỏ lỡ<br />những cơ hội tốt nhất.
            </h2>
            <p className="text-[21px] text-[#86868b] font-medium max-w-2xl mx-auto mb-12">
              Báo chí đại chúng chỉ đưa tin khi cuộc chơi đã tàn. Lợi nhuận thực sự nằm trong những bản báo cáo được bảo mật. Gia nhập mạng lưới Matrix để nắm bắt quyền tiếp cận thông tin bất đối xứng.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="/contact" className="apple-btn-secondary bg-[#1d1d1f] text-white hover:bg-[#2997ff] px-12 py-5 text-[17px] inline-flex items-center gap-2 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                Ký e-NDA Cấp Độ 1 <Lock size={18} />
              </a>
              <a href="/contact" className="apple-btn-secondary px-12 py-5 text-[17px] inline-flex items-center gap-2 text-[#1d1d1f]">
                Lịch Hẹn Riêng Tư <ChevronRight size={18} />
              </a>
            </div>
            <p className="text-[13px] text-[#86868b] font-bold uppercase tracking-widest mt-8 flex items-center justify-center gap-2">
              <AlertTriangle size={14} /> Hồ sơ của bạn sẽ được hội đồng xét duyệt trong 48h.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
