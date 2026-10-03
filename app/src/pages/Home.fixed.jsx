import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Lock, Activity, Globe, ShieldCheck, Cpu, Users, Handshake, BarChart3, Play, Quote } from 'lucide-react';
import Odometer from '../components/ui/Odometer';
import TiltCard from '../components/ui/TiltCard';
import VaultModal from '../components/ui/VaultModal';
import ROISimulator from '../components/ui/ROISimulator';

// Magnetic Button Component
const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div style={{ position: "relative", display: "inline-block" }} ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>
      <button className={className} onClick={onClick}>{children}</button>
    </motion.div>
  );
};

// Text Scroll Reveal Component
const ScrollRevealText = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 50%"]
  });
  
  // Ánh sáng lướt qua văn bản
  const color = useTransform(scrollYProgress, [0, 1], ["rgba(134, 134, 139, 0.3)", "rgba(245, 245, 247, 1)"]);
  
  return (
    <motion.p ref={ref} className={className} style={{ color }}>
      {children}
    </motion.p>
  );
};

// Animated Bar Chart Component
const AnimatedChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const data = [
    { label: 'Vàng', value: 5, color: '#f5f5f7' },
    { label: 'Bất động sản', value: 8, color: '#f5f5f7' },
    { label: 'S&P 500', value: 10, color: '#f5f5f7' },
    { label: 'Matrix DeepTech', value: 35, color: '#2997ff', glow: true }
  ];

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto h-[400px] flex items-end justify-between gap-4 md:gap-12 mt-16 px-4 pb-12 relative">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-12">
        {[40, 30, 20, 10, 0].map((tick, i) => (
          <div key={i} className="flex items-center w-full opacity-20">
            <span className="text-[10px] w-8">{tick}%</span>
            <div className="flex-1 h-[1px] bg-white/30 border-dashed"></div>
          </div>
        ))}
      </div>
      
      {data.map((item, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full relative z-10 group">
          <motion.div 
            initial={{ height: 0 }}
            animate={isInView ? { height: `${(item.value / 40) * 100}%` } : { height: 0 }}
            transition={{ duration: 1.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full max-w-[80px] rounded-t-lg relative flex items-start justify-center pt-4 transition-all duration-300 ${item.glow ? 'bg-[#2997ff] shadow-[0_0_40px_rgba(41,151,255,0.4)] group-hover:shadow-[0_0_60px_rgba(41,151,255,0.6)] backdrop-blur-md' : 'bg-white/10 backdrop-blur-md hover:bg-white/20'}`}
          >
            <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: i * 0.2 + 1 }} className={`text-[15px] md:text-[21px] font-bold headline ${item.glow ? 'text-white' : 'text-[#86868b]'}`}>
              {item.value}%
            </motion.span>
          </motion.div>
          <span className={`absolute bottom-[-40px] text-[11px] md:text-[13px] uppercase font-bold tracking-widest whitespace-nowrap ${item.glow ? 'text-[#2997ff]' : 'text-[#86868b]'}`}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
  };

  const originalDeals = [
    { id: 'Neuralis', name: 'Project Neuralis', desc: 'Vi mạch & Bán dẫn AI. Ký MOU cung ứng với TSMC.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', irr: '31.4%' },
    { id: 'SolarFlow', name: 'Project SolarFlow', desc: 'Pin Điện Hóa Thể Rắn. Giảm 40% chi phí sản xuất.', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop', irr: '28.5%' },
    { id: 'FinNexus', name: 'Project FinNexus', desc: 'Thanh toán B2B & Quản lý Thanh khoản Xuyên biên giới.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', irr: '34.2%' },
    { id: 'BioSync', name: 'Project BioSync', desc: 'MedTech chuẩn đoán lâm sàng bằng lượng tử vi thể AI.', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop', irr: '38.0%' },
    { id: 'AeroSpaceX', name: 'Project AeroSpace', desc: 'Động cơ đẩy Plasma siêu nhỏ cho vệ tinh LEO.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', irr: '42.1%' },
    { id: 'OmniRobotics', name: 'Project OmniBot', desc: 'Robot tự hành kho bãi. Triển khai tại 12 trung tâm Amazon.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', irr: '29.8%' }
  ];

  const duplicatedDeals = [...originalDeals, ...originalDeals];

  const testimonials = [
    { quote: "Matrix Ventures không chỉ cấp vốn. Họ đã cấu trúc lại toàn bộ hệ thống lõi của chúng tôi và đưa công ty lên định giá 200 triệu đô chỉ trong 18 tháng.", author: "Founder, Project FinNexus" },
    { quote: "Tầm nhìn của Jonathan và đội ngũ về DeepTech vượt xa bất kỳ quỹ PE nào tôi từng làm việc cùng tại Thung lũng Silicon.", author: "GP, Horizon Tech Fund" },
    { quote: "Cách họ kiểm toán công nghệ và làm DD sâu đến mức khiến chúng tôi phải toát mồ hôi. Nhưng kết quả thì vô cùng xứng đáng.", author: "CTO, Project Neuralis" },
    { quote: "Thẩm định khắt khe nhưng giải ngân cực nhanh. Syndicate của họ là một thế lực thực sự trong giới đầu tư cá nhân tại Châu Á.", author: "Anonymous UHNWI, Singapore" }
  ];

  return (
    <div className="w-full relative z-0 bg-transparent text-[#f5f5f7] pb-20 overflow-hidden">
      <VaultModal isOpen={isVaultOpen} onClose={() => setIsVaultOpen(false)} dealName={selectedDeal} />
      
      {/* 1. Hero 3D Parallax */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-[44px] overflow-hidden text-center perspective-[2000px] z-10" onMouseMove={handleMouseMove}>
        <motion.div className="absolute inset-0 z-0 scale-110" animate={{ x: mousePosition.x * -50, y: mousePosition.y * -50 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/80 to-[#020202]"></div>
        </motion.div>

        <motion.div className="w-full max-w-[1024px] mx-auto px-4 z-10 relative mt-[-10vh]" animate={{ x: mousePosition.x * 20, y: mousePosition.y * 20 }} transition={{ type: "spring", stiffness: 50, damping: 20 }} style={{ transformStyle: "preserve-3d" }}>
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 1 }} className="text-[17px] md:text-[21px] font-semibold text-[#86868b] mb-4 tracking-widest uppercase flex items-center justify-center gap-2" style={{ transform: "translateZ(10px)" }}>
            <Globe size={18}/> Mạng Lưới Đầu Tư Toàn Cầu
          </motion.h2>
          
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="text-[56px] md:text-[96px] leading-[1.05] headline-massive mb-6 tracking-tight text-gradient-apple" style={{ transform: "translateZ(50px)" }}>
            Gia Nhập.<br />
            Cộng Đồng Tinh Hoa.
          </motion.h1>
          
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} style={{ transform: "translateZ(30px)" }}>
            <ScrollRevealText className="text-[19px] md:text-[26px] max-w-3xl mx-auto mb-12 font-medium tracking-tight leading-relaxed">
              Hệ sinh thái duy nhất kết nối nguồn vốn nhàn rỗi khổng lồ của các cá nhân với những startup công nghệ DeepTech đang viết lại tương lai.
            </ScrollRevealText>
          </motion.div>
          
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} className="flex flex-col sm:flex-row items-center justify-center gap-6" style={{ transform: "translateZ(40px)" }}>
            <MagneticButton className="apple-btn-primary px-10 py-4 text-[17px] shadow-2xl flex items-center gap-2" onClick={() => document.getElementById('deal-vault').scrollIntoView({ behavior: 'smooth' })}>
              Xem Thương Vụ <ChevronRight size={18} />
            </MagneticButton>
            <button className="flex items-center gap-3 text-[#f5f5f7] font-bold text-[17px] hover:text-[#2997ff] transition-colors group">
              <div className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center group-hover:border-[#2997ff] group-hover:bg-[rgba(41,151,255,0.1)] transition-all">
                <Play size={16} className="ml-1" />
              </div>
              Xem Tuyên Ngôn (60s)
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Glow Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2997ff]/20 to-transparent"></div>

      {/* 2. As Featured In (Dải Logo Bảo Chứng) */}
      <section className="py-8 bg-transparent overflow-hidden relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <span className="text-[11px] text-[#86868b] uppercase font-bold tracking-widest shrink-0">Bảo chứng bởi</span>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#020202] to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#020202] to-transparent z-10"></div>
            <motion.div 
              className="flex items-center gap-16 text-[24px] font-bold text-[#86868b]/50 headline opacity-50"
              animate={{ x: [0, -1000] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              <span>Forbes</span>
              <span>Bloomberg</span>
              <span>TechCrunch</span>
              <span>WSJ</span>
              <span>CNBC</span>
              <span>FinancialTimes</span>
              <span>Forbes</span>
              <span>Bloomberg</span>
              <span>TechCrunch</span>
              <span>WSJ</span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      {/* 3. Biểu đồ sức mạnh & ROI Simulator */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight text-gradient-apple mb-4">Sức mạnh của lãi kép.</h2>
          <ScrollRevealText className="text-[21px] font-medium max-w-2xl mx-auto">
            Tự mình kiểm chứng. Vượt xa lợi suất của các kênh tài sản truyền thống nhờ việc nắm giữ quyền sở hữu trí tuệ lõi từ giai đoạn hạt giống.
          </ScrollRevealText>
        </div>
        
        <AnimatedChart />

        <div className="max-w-[1024px] mx-auto mt-32">
          <ROISimulator />
        </div>
      </section>

      {/* Glow Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2997ff]/20 to-transparent"></div>

      {/* 4. Kho Thương Vụ Private (Vault Carousel) */}
      <section id="deal-vault" className="py-32 relative overflow-hidden z-10">
        <div className="text-center mb-20 px-4 relative z-10">
          <Lock className="mx-auto text-[#2997ff] mb-4" size={40} />
          <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight leading-[1.05] text-[#f5f5f7]">Kho Thương Vụ Private.</h2>
          <ScrollRevealText className="text-[21px] mt-4 font-medium max-w-2xl mx-auto">
            Chỉ dành cho hội viên. Đây là nơi dòng vốn của cộng đồng Syndicate được phân bổ vào những phát minh thay đổi thế giới.
          </ScrollRevealText>
        </div>
        
        <div className="flex w-max relative z-10">
          <motion.div className="flex gap-8 px-4" animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 40, repeat: Infinity }}>
            {duplicatedDeals.map((deal, i) => (
              <div key={i} className="w-[85vw] md:w-[420px] shrink-0 h-[520px] perspective-[2000px]">
                <TiltCard className="h-full w-full">
                  <div className="bg-white/5 backdrop-blur-2xl h-full w-full border border-[rgba(255,255,255,0.05)] rounded-3xl overflow-hidden cursor-pointer group hover:border-[#2997ff]/50 hover:bg-white/10 transition-all flex flex-col shadow-2xl" onClick={() => { setSelectedDeal(deal.id); setIsVaultOpen(true); }}>
                    <div className="h-[220px] overflow-hidden shrink-0 relative">
                      <img src={deal.img} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={deal.name}/>
                      <div className="absolute top-4 right-4 bg-transparent/80 backdrop-blur-md px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] text-[10px] font-bold text-[#2997ff] uppercase flex items-center gap-1 shadow-lg">
                        <Lock size={12}/> Đang mở vòng
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        <h3 className="text-[26px] font-bold headline text-[#f5f5f7] mb-2">{deal.name}</h3>
                        <p className="text-[15px] text-[#86868b] font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{deal.desc}</p>
                      </div>
                      <div className="flex justify-between items-center border-t border-[rgba(255,255,255,0.1)] pt-5 mt-5">
                        <div>
                          <span className="block text-[10px] text-[#86868b] uppercase font-bold tracking-widest mb-1">Mục tiêu IRR</span>
                          <span className="text-[24px] text-[#2997ff] font-bold headline">{deal.irr}</span>
                        </div>
                        <span className="text-[#f5f5f7] text-[11px] font-bold uppercase tracking-widest group-hover:text-[#2997ff] transition-colors border border-[rgba(255,255,255,0.2)] group-hover:border-[#2997ff] px-4 py-2 rounded-full flex items-center gap-2 bg-transparent/20">
                           Yêu Cầu DD <ChevronRight size={14}/>
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* Glow Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2997ff]/20 to-transparent"></div>

      {/* 5. Lời Kêu Gọi Hợp Tác - Cộng Đồng Tinh Hoa */}
      <section id="community" className="py-40 px-4 relative overflow-hidden perspective-[2000px] z-10">
        <div className="max-w-[1200px] mx-auto text-center mb-24 relative z-10">
          <Handshake className="mx-auto text-[#2997ff] mb-6" size={48} />
          <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[48px] md:text-[64px] headline-massive tracking-tight leading-[1.05] mb-6">Hệ Sinh Thái Cộng Đồng.</motion.h2>
          <ScrollRevealText className="text-[21px] max-w-3xl mx-auto font-medium leading-relaxed">
            Chúng tôi không huy động vốn một cách vô danh. Matrix là một <strong className="text-white">Cộng đồng đặc quyền (Syndicate)</strong>, nơi các cá nhân tinh hoa chung tay nâng tầm các doanh nhân kiệt xuất.
          </ScrollRevealText>
        </div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <motion.div initial={{ opacity: 0, x: -100, rotateY: -15 }} whileInView={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <TiltCard className="h-full">
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl h-full overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.05)] relative cursor-pointer hover:border-[#2997ff]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 group-hover:opacity-20 group-hover:grayscale-0 transition-all duration-700 mix-blend-overlay"></div>
                <div className="p-12 h-full flex flex-col justify-center text-center relative z-10" style={{ transform: "translateZ(30px)" }}>
                  <Users size={40} className="mx-auto text-white mb-6" />
                  <h3 className="text-[36px] headline-massive mb-4 tracking-tight text-white">Cá Nhân Xuất Chúng.</h3>
                  <p className="text-[17px] text-[#86868b] mb-10 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">Gia nhập Hội đồng Syndicate. Quyền tiếp cận sớm các Deal chất lượng. Không cần bỏ ra hàng triệu đô để sở hữu cổ phần tại các công ty tương lai.</p>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-[rgba(255,255,255,0.1)] rounded-full text-[15px] font-bold hover:bg-[#2997ff] hover:border-[#2997ff] transition-colors shadow-xl mx-auto">
                    Mở Tài Khoản Đầu Tư <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 100, rotateY: 15 }} whileInView={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <TiltCard className="h-full">
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl h-full overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.05)] relative cursor-pointer hover:border-[#2997ff]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 group-hover:opacity-20 group-hover:grayscale-0 transition-all duration-700 mix-blend-overlay"></div>
                <div className="p-12 h-full flex flex-col justify-center text-center relative z-10" style={{ transform: "translateZ(30px)" }}>
                  <Activity size={40} className="mx-auto text-white mb-6" />
                  <h3 className="text-[36px] headline-massive mb-4 tracking-tight text-white">Doanh Nghiệp Đột Phá.</h3>
                  <p className="text-[17px] text-[#86868b] mb-10 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">Kết nối với cộng đồng 500+ nhà đầu tư UHNWIs. Nhận vốn, nhận cố vấn, và hợp đồng B2B trực tiếp từ hệ sinh thái nội bộ.</p>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-[rgba(255,255,255,0.1)] rounded-full text-[15px] font-bold hover:bg-[#2997ff] hover:border-[#2997ff] transition-colors shadow-xl mx-auto">
                    Nộp Hồ Sơ Gọi Vốn <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* Glow Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* 6. Testimonials Carousel */}
      <section className="py-24 overflow-hidden relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 mb-12">
          <h2 className="text-[13px] text-[#2997ff] font-bold uppercase tracking-widest text-center mb-2">Lời Chứng Thực</h2>
          <h3 className="text-[32px] headline font-bold text-center mb-8">Góc Nhìn Tinh Hoa</h3>
        </div>
        <div className="flex w-max relative">
          <motion.div className="flex gap-6 px-4" animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 30, repeat: Infinity }}>
            {[...testimonials, ...testimonials].map((test, i) => (
              <div key={i} className="w-[80vw] md:w-[450px] shrink-0">
                <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-[rgba(255,255,255,0.05)] h-full flex flex-col justify-between hover:border-[#2997ff]/30 hover:bg-white/10 transition-colors shadow-lg">
                  <div>
                    <Quote className="text-[#2997ff] mb-6" size={32} />
                    <p className="text-[17px] text-[#f5f5f7] font-medium leading-relaxed italic">"{test.quote}"</p>
                  </div>
                  <p className="text-[13px] text-[#86868b] font-bold uppercase tracking-widest mt-8 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#2997ff]"></span> {test.author}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Khối Kêu gọi cuối cùng */}
      <section className="py-40 px-4 text-center relative z-10">
        <BarChart3 size={48} className="mx-auto text-[#2997ff] mb-8" />
        <h2 className="text-[48px] md:text-[64px] headline-massive mb-6 text-[#f5f5f7] tracking-tight">Sẵn sàng để tăng trưởng?</h2>
        <p className="text-[21px] text-[#86868b] font-medium max-w-2xl mx-auto mb-12">
          Đăng ký để trở thành một phần của hệ sinh thái khép kín. Nơi cộng đồng đầu tư tinh hoa dẫn dắt kỷ nguyên công nghệ.
        </p>
        <Link to="/contact" className="inline-block">
          <MagneticButton className="apple-btn-primary px-12 py-5 text-[19px] shadow-[0_0_40px_rgba(41,151,255,0.2)] hover:shadow-[0_0_60px_rgba(41,151,255,0.5)] font-bold transition-shadow">
            Gửi Biểu Mẫu Định Danh KYC
          </MagneticButton>
        </Link>
      </section>

      {/* LIVE TICKER BAR */}
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#020202]/90 backdrop-blur-md border-t border-[#2997ff]/20 flex items-center z-[100] overflow-hidden">
        <div className="bg-[#2997ff] text-white font-bold text-[11px] uppercase tracking-widest px-4 h-full flex items-center shrink-0 z-10 shadow-[5px_0_10px_rgba(0,0,0,0.5)]">
          Live Ticker <div className="w-2 h-2 rounded-full bg-white ml-2 animate-pulse"></div>
        </div>
        <motion.div 
          className="flex whitespace-nowrap text-[12px] font-mono text-[#86868b] items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {Array(2).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-8"><span className="text-green-400">▲</span> MATRIX FUND I IRR: 42.8%</span>
              <span className="text-[rgba(255,255,255,0.2)]">|</span>
              <span className="mx-8"><span className="text-[#2997ff]">✦</span> LATEST DEAL: FINNEXUS OVERSUBSCRIBED 150%</span>
              <span className="text-[rgba(255,255,255,0.2)]">|</span>
              <span className="mx-8">LPS ONLINE: 2,401</span>
              <span className="text-[rgba(255,255,255,0.2)]">|</span>
              <span className="mx-8"><span className="text-green-400">▲</span> BIO-SYNC VALUATION: $150M</span>
              <span className="text-[rgba(255,255,255,0.2)]">|</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

    </div>
  );
}


