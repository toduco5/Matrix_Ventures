import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Zap, Target, Cpu, X, UploadCloud, Link2 } from 'lucide-react';
import TiltCard from '../components/ui/TiltCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Careers() {
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    { id: 1, title: 'Venture Architect', dept: 'Venture Labs', type: 'Full-time', loc: 'Singapore', desc: 'Đồng hành cùng founders xây dựng MVP, go-to-market. Yêu cầu kinh nghiệm ex-founder hoặc Product Manager tại Tech Unicorn.' },
    { id: 2, title: 'Investment Analyst', dept: 'Matrix Ventures', type: 'Full-time', loc: 'Dubai', desc: 'Nghiên cứu thị trường DeepTech, mô hình tài chính. Yêu cầu CFA Level 2+ hoặc background kỹ sư.' },
    { id: 3, title: 'M&A Associate', dept: 'Growth & PE', type: 'Full-time', loc: 'Vietnam', desc: 'Thực thi Due Diligence, dọn dẹp sổ sách cho vòng Pre-IPO. Yêu cầu 3 năm tại Big4 TAS.' }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <div className="w-full relative z-0 bg-transparent text-[#f5f5f7] pb-32 overflow-x-hidden">
      
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-24 border-b border-[rgba(255,255,255,0.1)] overflow-hidden">
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover grayscale"
          >
            <source src="https://cdn.coverr.co/videos/coverr-working-in-a-modern-office-5244/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        </div>

        <div className="text-center z-10 px-4 max-w-4xl perspective-[2000px]">
          <motion.div
            initial={{ rotateX: -30, opacity: 0, y: 50 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className="text-[56px] md:text-[80px] headline-massive tracking-tight leading-[1.05] mb-6 text-gradient-apple" style={{ transform: "translateZ(50px)" }}>Đội Ngũ Tinh Hoa.</h1>
            <p className="text-[21px] text-[#86868b] font-medium max-w-2xl mx-auto" style={{ transform: "translateZ(20px)" }}>
              Nơi hội tụ của những bộ óc xuất chúng nhất trong ngành tài chính cấu trúc và công nghệ lõi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Life at Matrix Gallery (Marquee) */}
      <div className="w-full py-16 overflow-hidden border-b border-[rgba(255,255,255,0.05)]">
        <h2 className="text-center text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-8">Cuộc sống tại Matrix Ventures</h2>
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...gallery, ...gallery].map((img, i) => (
            <div key={i} className="w-[400px] h-[250px] rounded-2xl overflow-hidden shrink-0 border border-[rgba(255,255,255,0.1)] opacity-70 hover:opacity-100 transition-opacity">
              <img src={img} alt="Life at Matrix" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1024px] mx-auto px-4 mt-20 relative z-10">
        
        {/* Culture / Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <TiltCard>
            <div className="apple-card-dark p-8 border border-[rgba(255,255,255,0.05)] text-center h-full">
              <Zap size={32} className="mx-auto text-[#2997ff] mb-6" />
              <h3 className="text-[19px] font-semibold text-[#f5f5f7] mb-3">Tốc Độ & Chuẩn Xác</h3>
              <p className="text-[14px] text-[#86868b] font-medium leading-relaxed">Ra quyết định đầu tư nhanh chóng nhưng dựa trên khung thẩm định dữ liệu tuyệt đối khắt khe.</p>
            </div>
          </TiltCard>
          <TiltCard>
            <div className="apple-card-dark p-8 border border-[rgba(255,255,255,0.05)] text-center h-full">
              <Target size={32} className="mx-auto text-[#2997ff] mb-6" />
              <h3 className="text-[19px] font-semibold text-[#f5f5f7] mb-3">Skin-in-the-game</h3>
              <p className="text-[14px] text-[#86868b] font-medium leading-relaxed">Đội ngũ được chia sẻ trực tiếp lợi nhuận (Carried Interest) từ chính các thương vụ mà họ dẫn dắt.</p>
            </div>
          </TiltCard>
          <TiltCard>
            <div className="apple-card-dark p-8 border border-[rgba(255,255,255,0.05)] text-center h-full">
              <Cpu size={32} className="mx-auto text-[#2997ff] mb-6" />
              <h3 className="text-[19px] font-semibold text-[#f5f5f7] mb-3">Công Nghệ Hóa Vận Hành</h3>
              <p className="text-[14px] text-[#86868b] font-medium leading-relaxed">Ứng dụng AI độc quyền trong việc quét và đánh giá rủi ro dự án (Deal Sourcing).</p>
            </div>
          </TiltCard>
        </div>

        {/* Job Listings */}
        <div className="mb-32">
          <h2 className="text-[32px] headline font-semibold mb-8 tracking-tight">Cơ Hội Mở</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                onClick={() => setSelectedJob(job)}
                className="apple-card-dark p-8 border border-[rgba(255,255,255,0.05)] hover:border-[#2997ff] transition-colors group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-[24px] font-semibold text-[#f5f5f7] headline mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-4">
                      <span className="text-[#2997ff]">{job.dept}</span>
                      <span className="w-1 h-1 rounded-full bg-[#86868b]"></span>
                      <span>{job.loc}</span>
                      <span className="w-1 h-1 rounded-full bg-[#86868b]"></span>
                      <span>{job.type}</span>
                    </div>
                    <p className="text-[15px] text-[#86868b] font-medium leading-relaxed">{job.desc}</p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] group-hover:bg-[#2997ff] group-hover:border-[#2997ff] transition-colors">
                    <ArrowRight size={20} className="text-[#f5f5f7] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alumni Network Map */}
        <div className="py-24 border-t border-[rgba(255,255,255,0.05)] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2997ff] blur-[150px] opacity-[0.05] rounded-full pointer-events-none"></div>
          <h2 className="text-[32px] md:text-[48px] headline-massive tracking-tight text-[#f5f5f7] mb-4 relative z-10">Mạng Lưới Tinh Hoa.</h2>
          <p className="text-[17px] text-[#86868b] font-medium max-w-2xl mx-auto mb-16 relative z-10">Cựu thành viên của Matrix Ventures hiện đang nắm giữ các vị trí hạt nhân tại những siêu kỳ lân công nghệ hàng đầu thế giới.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 relative z-10">
            {['OpenAI', 'SpaceX', 'Stripe', 'Palantir', 'Andreesen Horowitz'].map((company, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="text-[24px] md:text-[32px] font-bold tracking-tighter"
                style={{ fontFamily: i % 2 === 0 ? 'sans-serif' : 'serif', fontStyle: i === 2 ? 'italic' : 'normal' }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide-over Apply Panel */}
      <AnimatePresence>
        {selectedJob && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-transparent/60 backdrop-blur-sm z-[100]"
              onClick={() => setSelectedJob(null)}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-[#1d1d1f] border-l border-[rgba(255,255,255,0.1)] z-[101] overflow-y-auto p-8 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 text-[#86868b] hover:text-white"><X size={24}/></button>
              
              <div className="mb-10">
                <span className="text-[11px] font-bold text-[#2997ff] uppercase tracking-widest mb-2 block">Ứng tuyển vị trí</span>
                <h2 className="text-[32px] font-bold text-white headline mb-2">{selectedJob.title}</h2>
                <p className="text-[15px] text-[#86868b] font-medium">{selectedJob.loc} ⬢ {selectedJob.type}</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold block mb-2">Hồ sơ năng lực (CV)</label>
                  <div className="w-full border-2 border-dashed border-[rgba(255,255,255,0.2)] hover:border-[#2997ff] rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-transparent/50 group">
                    <UploadCloud size={32} className="text-[#86868b] group-hover:text-[#2997ff] mb-4 transition-colors" />
                    <p className="text-[15px] text-white font-medium mb-1">Kéo thả CV vào đây</p>
                    <p className="text-[13px] text-[#86868b]">hoặc bấm để duyệt file (PDF, max 5MB)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold">LinkedIn Profile</label>
                  <div className="relative">
                    <Link2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868b]" />
                    <input type="text" className="w-full bg-transparent border border-[rgba(255,255,255,0.1)] rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-[#2997ff] transition-colors" placeholder="https://linkedin.com/in/..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold">Thư ngỏ (Tùy chọn)</label>
                  <textarea rows={4} className="w-full bg-transparent border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#2997ff] transition-colors resize-none" placeholder="Hãy nói ngắn gọn vì sao bạn phù hợp với Matrix Ventures..."></textarea>
                </div>

                <button className="w-full bg-[#f5f5f7] text-black hover:bg-white rounded-xl py-4 font-bold uppercase tracking-widest text-[13px] transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] mt-8">
                  Gửi Hồ Sơ
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
