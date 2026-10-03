import React, { useState } from 'react';
import TiltCard from '../components/ui/TiltCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Compass, ChevronRight, X, MapPin, CheckCircle2, Globe2 } from 'lucide-react';

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const timeline = [
    { year: '2004', title: 'Khởi Nguyên Tại Geneva', desc: 'Thành lập dưới dạng Single Family Office, quản lý gia sản cho một gia tộc công nghiệp Thụy Sĩ.' },
    { year: '2012', title: 'Chuyển Hướng Công Nghệ Lõi', desc: 'Nhận thấy giới hạn của tài chính truyền thống, quỹ phân bổ 40% AUM vào các startup Bán Dẫn tại Silicon Valley.' },
    { year: '2018', title: 'Thành Lập Matrix Syndicate', desc: 'Mở rộng quy mô, cho phép các UHNWIs Châu Á đồng đầu tư. Khai trương trụ sở tại Singapore.' },
    { year: '2024', title: 'Ra Mắt Venture Labs', desc: 'Khép kín hệ sinh thái. Đầu tư trực tiếp vào R&D giai đoạn Pre-seed tại thị trường mới nổi.' },
  ];

  const steps = [
    { step: '01', title: 'Sàng Lọc & Rào Cản (Barrier to Entry)', desc: 'Phân tích rào cản công nghệ lõi và lợi thế độc quyền. Loại bỏ mô hình sao chép.', metric: '10%' },
    { step: '02', title: 'Kiểm Toán Độc Lập (Due Diligence)', desc: 'Big 4 thực hiện soát xét dòng tiền, cấu trúc nợ và tính pháp lý của sở hữu trí tuệ.', metric: '5%' },
    { step: '03', title: 'Định Giá Biên An Toàn (Margin of Safety)', desc: 'Stress-test mô hình tài chính. Đảm bảo mức định giá bảo vệ vốn tuyệt đối cho nhà đầu tư.', metric: '1.8%' },
    { step: '04', title: 'Phân Bổ Vốn (Syndication)', desc: 'Giải ngân 15% vốn tự có (Skin-in-the-game). Phân bổ 85% hạn ngạch cho Liên minh Syndicate.', metric: '72h' },
    { step: '05', title: 'Hậu Vận Hành & Exit', desc: 'Tham gia HĐQT, cấu trúc M&A, dọn đường IPO và hiện thực hóa lợi nhuận.', metric: '28%+' },
  ];

  const leaders = [
    { 
      id: 'jonathan', name: 'Jonathan Marcus', role: 'Chủ Tịch & Managing Partner', desc: 'Kết nối thành công hơn 18 thương vụ công nghệ. 22 năm quản lý danh mục UHNWIs.', 
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      bio: 'Từng là cựu Giám đốc Điều hành Khối Tài sản Tư nhân tại Goldman Sachs. Ông sáng lập Matrix với niềm tin rằng mô hình Family Office cần được dân chủ hóa cho giới tinh hoa.',
      achievements: ['Quản lý khối tài sản 2.4 Tỷ USD', 'Thoái vốn thành công 12 công ty (MOIC > 3x)', 'Top 50 Nhà đầu tư Thiên thần Châu Á']
    },
    { 
      id: 'elena', name: 'Elena Vũ', role: 'Partner, Trưởng Ban Thẩm Định', desc: 'Chuyên gia cấu trúc M&A xuyên biên giới (Ex-Big4 TAS). Trực tiếp rà soát số liệu.', 
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      bio: 'Từng là Giám đốc Dịch vụ Tư vấn M&A (TAS) tại PwC London. Elena nổi tiếng với khả năng phát hiện các lỗ hổng tài chính trong báo cáo của các startup.',
      achievements: ['Soát xét DD hơn 300 thương vụ', 'Bảo vệ thành công vốn đầu tư qua 3 đợt khủng hoảng', 'Cấu trúc Deal MedLink trị giá $120M']
    },
    { 
      id: 'david', name: 'Dr. David Chen', role: 'Giám Đốc Venture Labs', desc: 'Cố vấn AI cho Fortune 500. Trực tiếp bảo trợ công nghệ cho 4 startup kỳ lân.', 
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
      bio: 'Tiến sĩ Khoa học Máy tính tại MIT. David không nhìn vào báo cáo tài chính, ông nhìn vào mã nguồn và bằng sáng chế để định đoạt giá trị thực sự của công nghệ lõi.',
      achievements: ['Sở hữu 14 Bằng sáng chế AI/Robotics', 'Thành viên HĐQT của 4 Kỳ lân DeepTech', 'Nguyên Kiến trúc sư trưởng tại DeepMind']
    },
    { 
      id: 'michael', name: 'Michael Anderson', role: 'Giám Đốc Pháp Lý (CLO)', desc: 'Đoàn Luật sư Singapore. Chuyên trách tuân thủ, cấu trúc SAFE và hợp đồng thoái vốn.', 
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop',
      bio: 'Chuyên gia cấu trúc vốn (Fund Structuring) và thuế quốc tế. Michael thiết lập các SPV (Special Purpose Vehicles) tại Cayman và Singapore để tối ưu thuế cho nhà đầu tư.',
      achievements: ['Cấu trúc thành công 42 SPVs', 'Cố vấn pháp lý cho 3 đợt IPO', 'Luật sư danh dự tại Bar of California']
    }
  ];

  const locations = [
    { city: 'Geneva', desc: 'Trụ sở Quản lý Tài sản (Wealth Management & LP Relations).', lat: '46.2044° N', lng: '6.1432° E' },
    { city: 'Silicon Valley', desc: 'Trung tâm Sourcing dự án DeepTech & AI.', lat: '37.3875° N', lng: '122.0575° W' },
    { city: 'Singapore', desc: 'Hub quản lý Quỹ Syndicate & Pháp lý Châu Á.', lat: '1.3521° N', lng: '103.8198° E' },
    { city: 'Dubai', desc: 'Văn phòng huy động vốn vùng Vịnh (GCC).', lat: '25.2048° N', lng: '55.2708° E' }
  ];

  return (
    <div className="w-full relative z-0 text-[#f5f5f7] bg-transparent">
      
      {/* 1. Hero 3D */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b border-[rgba(255,255,255,0.05)] perspective-[2000px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-30 mix-blend-screen grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        
        <motion.div 
          initial={{ rotateX: 40, opacity: 0, y: 100 }} animate={{ rotateX: 0, opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-10 px-6 mt-16 max-w-5xl" style={{ transformStyle: "preserve-3d" }}
        >
          <span className="text-[#2997ff] font-bold tracking-widest uppercase text-[13px] mb-6 block" style={{ transform: "translateZ(30px)" }}>Heritage & Legacy</span>
          <h1 className="text-[64px] md:text-[96px] headline-massive tracking-tight leading-[1] mb-8 text-gradient-apple" style={{ transform: "translateZ(50px)" }}>Về Tập Đoàn.</h1>
          <p className="text-[#86868b] text-[24px] md:text-[32px] font-medium tracking-tight leading-tight" style={{ transform: "translateZ(20px)" }}>
            Matrix ra đời từ một nghịch lý: Dòng vốn nhàn rỗi lớn nhất thế giới lại đứng ngoài những cuộc cách mạng công nghệ quan trọng nhất.
          </p>
        </motion.div>
      </section>

      {/* NEW: Thư ngỏ từ Chủ tịch */}
      <section className="py-32 px-4 bg-transparent relative border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[21px] text-[#86868b] uppercase tracking-widest font-bold mb-12 text-center">Thư Ngỏ Từ Chủ Tịch</h2>
            <div className="space-y-6 text-[19px] md:text-[24px] text-[#f5f5f7] leading-relaxed font-serif italic">
              <p>
                "Chào mừng bạn đến với Matrix Ventures. Suốt 20 năm làm việc tại các nhà băng đầu tư khổng lồ, tôi nhận ra một sự thật: Các sản phẩm tài chính truyền thống đang vắt kiệt sự sáng tạo của xã hội chỉ để duy trì những biên lợi nhuận mỏng manh."
              </p>
              <p>
                "Thế giới thực sự được thay đổi bởi những kỹ sư đang cặm cụi trong phòng thí nghiệm, những người dám nghĩ đến việc thương mại hóa năng lượng nhiệt hạch, vi mạch lượng tử hay thuốc sinh học AI. Nhưng họ lại thiếu trầm trọng nguồn vốn mồi."
              </p>
              <p>
                "Matrix ra đời để phá bỏ bức tường đó. Chúng tôi xây dựng một cầu nối trực tiếp, minh bạch và khắt khe giữa khối tài sản khổng lồ của các gia tộc, các cá nhân xuất chúng với những khối óc vĩ đại nhất của nhân loại. Khi bạn đầu tư cùng chúng tôi, bạn không chỉ mua cổ phần. Bạn đang tài trợ cho tương lai của chính mình."
              </p>
            </div>
            <div className="mt-16 border-t border-[rgba(255,255,255,0.1)] pt-8 flex items-center justify-between">
              <div>
                <h4 className="text-[21px] font-bold headline text-white">Jonathan Marcus</h4>
                <p className="text-[#86868b] text-[15px] uppercase tracking-widest font-bold">Chủ Tịch HĐQT</p>
              </div>
              <div className="text-[40px] font-serif italic opacity-30">J.Marcus</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Triết Lý Đầu Tư (Apple-style Sticky Scroll) */}
      <section className="relative bg-[#f5f5f7] text-[#1d1d1f] h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-transparent pointer-events-none"></div>
          
          <div className="max-w-[1200px] w-full mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[48px] md:text-[80px] headline-massive tracking-tight leading-[1] mb-6">Triết lý<br/>bất di bất dịch.</h2>
              <p className="text-[21px] text-[#86868b] font-medium max-w-md">Ba trụ cột đảm bảo sự sinh tồn của nguồn vốn qua các chu kỳ suy thoái khốc liệt nhất.</p>
            </div>

            <div className="relative h-[400px]">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", amount: "all" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 apple-card-light p-10 border border-[rgba(0,0,0,0.05)] shadow-2xl flex flex-col justify-center bg-white"
              >
                <Shield size={48} className="text-[#1d1d1f] mb-8" />
                <h3 className="text-[32px] font-semibold headline mb-4">Skin in the game</h3>
                <p className="text-[17px] text-[#86868b] font-medium leading-relaxed">Chúng tôi không bao giờ mời gọi đầu tư nếu quỹ không trực tiếp bỏ tiền. Matrix luôn giải ngân 15-20% bằng vốn tự có trong mọi deal.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-200px", amount: "all" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute inset-0 apple-card-light p-10 border border-[rgba(0,0,0,0.05)] shadow-2xl flex flex-col justify-center bg-[#f5f5f7] origin-bottom scale-95"
              >
                <Compass size={48} className="text-[#1d1d1f] mb-8" />
                <h3 className="text-[32px] font-semibold headline mb-4">Biên An Toàn (MoS)</h3>
                <p className="text-[17px] text-[#86868b] font-medium leading-relaxed">Bảo toàn vốn quan trọng hơn sinh lời. Chúng tôi mua tài sản công nghệ ở mức định giá thấp hơn giá trị nội tại ít nhất 30%.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-300px", amount: "all" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute inset-0 apple-card-light p-10 border border-[rgba(0,0,0,0.05)] shadow-2xl flex flex-col justify-center bg-white origin-bottom scale-90"
              >
                <TrendingUp size={48} className="text-[#1d1d1f] mb-8" />
                <h3 className="text-[32px] font-semibold headline mb-4">Tập trung DeepTech</h3>
                <p className="text-[17px] text-[#86868b] font-medium leading-relaxed">Tránh xa các mô hình đốt tiền (Cash-burn). Chỉ đầu tư vào công nghệ lõi có khả năng thương mại hóa ngay lập tức.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Bản Đồ Hiện Diện Toàn Cầu (Global Footprint) */}
      <section className="py-32 px-4 bg-transparent border-b border-[rgba(255,255,255,0.05)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2997ff] blur-[250px] opacity-[0.05] rounded-full pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <Globe2 size={40} className="mx-auto text-[#2997ff] mb-6" />
            <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight text-[#f5f5f7] mb-6">Hiện Diện Toàn Cầu.</h2>
            <p className="text-[21px] text-[#86868b] font-medium max-w-2xl mx-auto">Kiến trúc tài chính đa quốc gia giúp tối ưu hóa luân chuyển vốn và tận dụng lợi thế địa chính trị.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, i) => (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i}>
                <TiltCard className="h-full">
                  <div className="apple-card-dark p-8 h-full border border-[rgba(255,255,255,0.05)] hover:border-[#2997ff]/50 transition-colors">
                    <MapPin className="text-[#2997ff] mb-4" size={28} />
                    <h3 className="text-[28px] font-semibold text-[#f5f5f7] headline mb-2">{loc.city}</h3>
                    <div className="flex gap-2 text-[11px] text-[#86868b] font-bold tracking-widest uppercase mb-6">
                      <span>{loc.lat}</span> | <span>{loc.lng}</span>
                    </div>
                    <p className="text-[15px] text-[#86868b] font-medium leading-relaxed">{loc.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Lịch Sử Hình Thành (Timeline) */}
      <section className="py-32 px-4 bg-transparent relative">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight text-gradient-apple mb-6">Lịch Sử Phát Triển.</h2>
          </div>

          <div className="relative border-l border-[rgba(255,255,255,0.1)] ml-4 md:ml-8 space-y-16 py-8">
            {timeline.map((item, i) => (
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: i * 0.1 }} key={i} className="relative pl-12 md:pl-24 group">
                <div className="absolute top-0 left-0 w-3 h-3 bg-[#1d1d1f] border-2 border-[#86868b] rounded-full -translate-x-[7px] group-hover:border-[#2997ff] group-hover:bg-[#2997ff] transition-colors duration-500 shadow-[0_0_15px_rgba(41,151,255,0)] group-hover:shadow-[0_0_15px_rgba(41,151,255,0.8)]"></div>
                
                <span className="block text-[48px] font-bold headline text-[rgba(255,255,255,0.05)] group-hover:text-[rgba(255,255,255,0.1)] transition-colors duration-500 absolute top-[-20px] left-12 md:left-24 z-0 pointer-events-none">{item.year}</span>
                
                <div className="relative z-10">
                  <h4 className="text-[15px] font-bold text-[#2997ff] tracking-widest uppercase mb-2">{item.year}</h4>
                  <h3 className="text-[28px] font-semibold text-[#f5f5f7] headline mb-4">{item.title}</h3>
                  <p className="text-[17px] text-[#86868b] font-medium leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ban Điều Hành & Modal */}
      <section className="py-32 px-4 bg-transparent border-y border-[rgba(255,255,255,0.05)] relative z-0">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight text-[#f5f5f7] mb-6">Ban Điều Hành.</h2>
            <p className="text-[21px] text-[#86868b] max-w-3xl mx-auto font-medium">Hội đồng quản trị gồm những cựu binh dày dạn từ Wall Street, Big 4 và thung lũng Silicon.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} onClick={() => setSelectedLeader(leader)}>
                <TiltCard>
                  <div className="apple-card-dark p-10 flex flex-col items-center text-center border border-[rgba(255,255,255,0.05)] hover:border-[#2997ff]/50 transition-colors cursor-pointer group">
                    <div className="w-40 h-40 rounded-full border-2 border-[rgba(255,255,255,0.1)] overflow-hidden mb-8 group-hover:border-[#2997ff] transition-all" style={{ transform: "translateZ(30px)" }}>
                      <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div style={{ transform: "translateZ(20px)" }}>
                      <h4 className="text-[28px] font-semibold text-[#f5f5f7] mb-2 headline">{leader.name}</h4>
                      <p className="text-[#2997ff] text-[13px] uppercase font-bold tracking-widest mb-6">{leader.role}</p>
                      <p className="text-[#86868b] text-[16px] leading-relaxed font-medium mb-6">{leader.desc}</p>
                      <span className="text-[13px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white flex items-center justify-center gap-1">Xem Hồ Sơ <ChevronRight size={14}/></span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Hồ Sơ Lãnh Đạo */}
        <AnimatePresence>
          {selectedLeader && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-transparent/80 backdrop-blur-md" onClick={() => setSelectedLeader(null)}></motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 md:p-12 max-w-2xl w-full relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <button onClick={() => setSelectedLeader(null)} className="absolute top-6 right-6 text-[#86868b] hover:text-white bg-transparent/20 p-2 rounded-full transition-colors"><X size={24} /></button>
                <div className="flex flex-col md:flex-row gap-8 items-start mb-8 border-b border-[rgba(255,255,255,0.1)] pb-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-2 border-[#2997ff]"><img src={selectedLeader.img} alt={selectedLeader.name} className="w-full h-full object-cover"/></div>
                  <div>
                    <h3 className="text-[32px] font-bold headline text-white mb-2">{selectedLeader.name}</h3>
                    <p className="text-[#2997ff] text-[13px] font-bold uppercase tracking-widest mb-4">{selectedLeader.role}</p>
                    <p className="text-[#86868b] text-[16px] leading-relaxed">{selectedLeader.bio}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-white mb-6 uppercase tracking-widest">Thành tựu nổi bật</h4>
                  <ul className="space-y-4">
                    {selectedLeader.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3 text-[16px] text-[#f5f5f7]"><CheckCircle2 className="text-[#34c759] shrink-0 mt-0.5" size={20}/> <span>{ach}</span></li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* NEW: Quản trị & Đối tác Kiểm toán (Corporate Governance) */}
      <section className="py-24 px-4 bg-transparent border-y border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-[24px] headline text-[#f5f5f7] mb-4">Đối Tác Bảo Chứng Độc Lập</h3>
          <p className="text-[#86868b] text-[15px] mb-12 max-w-2xl mx-auto">Sự minh bạch tuyệt đối được duy trì thông qua các báo cáo soát xét độc lập định kỳ hàng quý từ nhóm Big 4 và các hãng luật hàng đầu thế giới.</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
            {/* Giả lập Logo */}
            <span className="text-[28px] font-serif font-bold tracking-tighter">PwC</span>
            <span className="text-[28px] font-serif font-bold">KPMG</span>
            <span className="text-[28px] font-sans font-bold tracking-tight">ALLEN & OVERY</span>
            <span className="text-[28px] font-sans font-black tracking-widest">EY</span>
          </div>
        </div>
      </section>

      {/* 5. Khung Thẩm Định 5 Bước (Workflow) */}
      <section className="py-32 px-4 bg-transparent pb-40">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[48px] md:text-[64px] headline-massive tracking-tight text-[#f5f5f7] mb-6">Quy trình mổ xẻ.</h2>
            <p className="text-[21px] text-[#86868b] font-medium">Khung thẩm định 5 bước loại bỏ 98.2% dự án không đạt chuẩn.</p>
          </div>

          <div className="space-y-6">
            {steps.map((item, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} key={i} className="apple-card-dark p-8 flex flex-col md:flex-row md:items-center gap-8 border border-[rgba(255,255,255,0.05)] group hover:border-[#2997ff] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
                <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-[#1d1d1f] rounded-[20px] border border-[rgba(255,255,255,0.1)] text-[#f5f5f7] font-semibold text-[32px] headline relative z-10">{item.step}</div>
                <div className="flex-1 relative z-10">
                  <h4 className="text-[24px] font-semibold text-[#f5f5f7] mb-2">{item.title}</h4>
                  <p className="text-[17px] text-[#86868b] font-medium">{item.desc}</p>
                </div>
                <div className="shrink-0 md:text-right relative z-10">
                  <span className="block text-[11px] text-[#86868b] uppercase tracking-widest font-bold mb-1">Chỉ số chuyển đổi</span>
                  <span className="text-[28px] font-bold text-[#2997ff] headline">{item.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
