import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary min-h-[100vh] flex items-center pt-20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfGALsm6SJm0L9e4VhZtsgpWH-asU1i-oDwG70by7yJtyPukWJmo1noZUqD9AMgYg1pt4o0kXZWR_FHr1gUDb6CW3oElGpleT_LgAaywOkc6QBS7k6AEf0UcU25DpTO_vQc0ayJHO4hfU2TVZLNGOosQrDskvpNEDpl8BH4i08_Xak18X_duQztS7VKCZnsqsOg3lmJ5bc5npCbKq3tN266Jp4FVkOIJHmYNKB_fpw5eV8r_b5RS93Hg')"}}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50"></div>
        
        <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16 py-12 w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
              <span className="section-tag text-secondary-fixed" style={{letterSpacing: "0.15em"}}>Kiến Tạo Di Sản Quốc Gia • Thành Lập 2005</span>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="h-px w-16 bg-secondary-fixed"></span>
              <span className="nav-link text-secondary-fixed text-sm">Tập Đoàn Đầu Tư Mạo Hiểm Hàng Đầu Việt Nam</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="headline text-white leading-tight mb-8" style={{fontSize: "clamp(3rem,6vw,4.5rem)", fontWeight: 700, letterSpacing: "-0.03em"}}>
              Kiến Tạo Tương Lai<br/>
              <span className="italic font-normal text-secondary-fixed" style={{fontSize: "clamp(2rem,4.5vw,3.5rem)"}}>Vươn Tầm Thế Giới</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-surface-variant text-xl leading-relaxed max-w-3xl mb-12" style={{fontWeight: 300}}>
              Hai thập kỷ đồng hành cùng sự phồn vinh của đất nước, Matrix Ventures kiến tạo nền móng vững chắc qua 4 trụ cột chiến lược: Bất động sản thông minh, Năng lượng xanh, Hậu cần quốc tế và Quản lý tài chính toàn cầu.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
              <Link to="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-fixed text-on-secondary-fixed nav-link rounded-lg shadow-xl hover:bg-secondary-container hover:scale-105 transition-all duration-300 group">
                <span>Thông Điệp Lãnh Đạo</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </Link>
              <Link to="/ir" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white nav-link rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="material-symbols-outlined text-secondary-fixed text-xl">insights</span>
                <span>Báo Cáo Thường Niên 2024</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            {[
              { label: "Mã cổ phiếu niêm yết", value: "HOSE: MHG", sub: "+3.12%", subColor: "text-emerald-400 bg-emerald-950/80" },
              { label: "Quy mô tài sản", value: "85.000+ Tỷ VND", sub: "Tăng 14% YoY", subColor: "text-secondary-fixed bg-secondary-fixed/20" },
              { label: "Xếp hạng tín nhiệm", value: "vnAAA", sub: "Fitch Ratings 2024", subColor: "text-blue-300 bg-blue-900/50" },
              { label: "Chứng chỉ Phát triển", value: "LEED Gold", sub: "ISO 14001:2015", subColor: "text-emerald-400 bg-emerald-950/80" }
            ].map((stat, idx) => (
              <div key={idx} className="relative overflow-hidden group">
                <span className="section-tag text-surface-variant block mb-2 opacity-80">{stat.label}</span>
                <p className="font-bold text-white text-2xl mt-1 tracking-tight group-hover:text-secondary-fixed transition-colors duration-300">{stat.value}</p>
                <div className="mt-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${stat.subColor}`}>{stat.sub}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KPI SECTION */}
      <section className="w-full bg-surface-container-lowest shadow-xl relative z-10 -mt-10 max-w-[1360px] mx-auto rounded-2xl overflow-hidden border border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {[
            { title: "Tổng Tài Sản Quản Lý", num: "85K", sym: "+", desc: "Tỷ đồng (~3.6 Tỷ USD)", detail: "Tăng trưởng kép 16.8% CAGR qua 5 năm" },
            { title: "Vốn Hóa Thị Trường", num: "56.4", sym: "K", desc: "Tỷ VND (VN30 Index)", detail: "Top 20 tập đoàn tư nhân lớn nhất HOSE" },
            { title: "Quy Mô Nhân Lực", num: "18K", sym: "+", desc: "Cán bộ chuyên gia toàn cầu", detail: "Hiện diện tại 3 quốc gia Đông Nam Á" },
            { title: "Trụ Cột Kinh Doanh", num: "04", sym: "", desc: "Lĩnh vực cốt lõi tương hỗ", detail: "BĐS, Năng lượng, Logistics, Tài chính" },
            { title: "Hành Trình Di Sản", num: "20", sym: "Năm", desc: "Thành tựu kiên định 2005-2025", detail: "Đồng hành cùng sự phát triển đất nước" }
          ].map((kpi, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx} 
              className={`p-8 flex flex-col bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300 ${idx !== 4 ? 'border-r border-outline-variant/30 border-b lg:border-b-0' : ''}`}
            >
              <span className="section-tag text-secondary mb-4">{kpi.title}</span>
              <div className="metric-num text-primary leading-none" style={{fontSize: "3.2rem"}}>
                {kpi.num}<span className="text-secondary text-2xl ml-1">{kpi.sym}</span>
              </div>
              <span className="section-tag text-on-surface-variant mt-2">{kpi.desc}</span>
              <p className="mt-4 text-sm text-outline border-t border-outline-variant/20 pt-4">{kpi.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="w-full py-32 max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 w-full overflow-hidden rounded-2xl shadow-2xl group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img className="w-full h-[600px] object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgK3WhTyGC-rr_-eAQ5ieWq-dBaEIaCF9Lod-MC7oFFoEyz3m2ckTvdk5R55PgxWl9iUuyewdkK3_-lTDn50b8usL6vwY1UMbO0bbmkQQ9BynccOtahomEzHM0e6olkhZcrNNEYDQmdKSQKWdd7AYYmBopZafTDF41zG75YCFjluST8PvTbCoHvp-fRhTMqXRVo7-k2eddM-rAwKdmfyFbCsBwsBMY9k2Q8HCU9MUA2SWHS8sx_93lA" alt="Chủ Tịch Matrix Ventures"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-10 z-20">
                <span className="section-tag text-secondary-fixed block mb-2">Chủ Tịch Hội Đồng Quản Trị</span>
                <h3 className="headline text-3xl text-white mt-1 font-semibold">Ông Nguyễn Minh Đức</h3>
                <div className="w-12 h-1 bg-secondary-fixed mt-4"></div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-secondary rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-surface-variant rounded-full opacity-50 -z-10"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center lg:pl-10"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-secondary"></span>
              <span className="nav-link text-secondary tracking-widest">Triết Lý Cầm Lái & Tầm Nhìn Chiến Lược</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="headline text-on-surface leading-tight mb-10" style={{fontSize: "clamp(2rem,3vw,2.8rem)", fontWeight: 600, letterSpacing: "-0.015em"}}>
              "Chúng tôi không chỉ xây dựng doanh nghiệp, mà còn góp phần kiến tạo nền tảng <span className="text-secondary italic">thịnh vượng cho dân tộc</span>."
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>Hai mươi năm trước, Matrix Ventures khởi đầu với một khát vọng giản dị nhưng kiên định: tạo ra những giá trị thực sự bền vững trong nền kinh tế hội nhập toàn cầu của Việt Nam. Từng dự án, từng công trình đều xuất phát từ lòng tôn trọng con người và tư duy quản trị chuẩn mực quốc tế.</p>
              <p>Bước sang thập kỷ thứ ba, Matrix Ventures cam kết dẫn đầu cuộc chuyển đổi xanh, đưa các tiêu chuẩn ESG vào từng quyết định đầu tư, đảm bảo sự thịnh vượng hài hòa giữa cổ đông, cộng đồng và môi trường.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Signature_of_Nguyen_Van_Thieu.svg/1280px-Signature_of_Nguyen_Van_Thieu.svg.png" className="h-16 opacity-40 mix-blend-multiply mb-2" alt="Signature" />
                <div className="headline text-xl text-on-surface font-semibold">Nguyễn Minh Đức</div>
                <span className="section-tag text-outline block mt-1">Đại Biểu Doanh Nhân Tiêu Biểu ASEAN 2023</span>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low p-5 rounded-xl border border-outline-variant/20">
                <span className="material-symbols-outlined text-4xl text-secondary">verified</span>
                <div>
                  <span className="section-tag text-on-surface block font-bold">Bảo chứng niềm tin</span>
                  <span className="text-sm text-outline">Quyết định HĐQT Số 01/2024</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CORE BUSINESS */}
      <section className="w-full py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary opacity-5 rounded-full blur-[100px]"></div>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag text-secondary-fixed block mb-3">Hệ Sinh Thái Toàn Diện</span>
              <h2 className="headline text-white" style={{fontSize: "3.5rem", fontWeight: 600, letterSpacing: "-0.015em"}}>4 Trụ Cột Vững Chắc<br/><span className="text-secondary-fixed italic font-normal">Tạo Lập Giá Trị</span></h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-on-primary-container max-w-md leading-relaxed text-lg"
            >
              Mô hình liên kết tương hỗ giữa hạ tầng đô thị, năng lượng sạch, logistics quốc tế và định chế vốn hàng đầu. Đây là lợi thế cạnh tranh độc tôn của Matrix Ventures.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: "01", name: "Bất Động Sản & Đô Thị",
                desc: "Tiên phong phát triển các tổ hợp đô thị tích hợp tiêu chuẩn quốc tế, khu phức hợp văn phòng Grade A.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFTMZvCtPNAG-ljwdkwqzkJUXZ4MOtFqNJoTB5yujytgCOZSBNOwUKqSSWlmtaVibhED8V3qIPvlYvjqyRioXyzWJHElsQMsBHUnQv613ZT6ZuXj7NiXTAaVXqIHHl4kIzLrrrvNxAJQngAn8B2pGnvQFlimqFVwaqdShm1UPor58_ygwiuFv9YRnw2zTKXDgdoqkfjgAF3Oehqs2IKkoqnyrSg69G6cuSe18MLg4XUbpczQLG2dmlYg",
                stat: "3.200+ ha", statDesc: "Quỹ đất sạch"
              },
              {
                id: "02", name: "Năng Lượng Xanh",
                desc: "Đón đầu Net Zero 2050 với các nhà máy điện gió ngoài khơi, điện mặt trời và hạ tầng sạc xe điện.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9K3DHwHbdi7-xpLdyik9fxmD1-7bG-IA8KneqJC-hIGyTFCtXol4qiUnumzCMGj9ne0mUyhmwXCu5RuRFpAo9TobhNwdOvhd3FTih8YRtiq0IpOw-aWzZoSAPTWwV2R32ia3vYiNv-uZAYGlqvjHTojX0qs847fJTLdhSr3EBCANxdGhfTnlDj3LrB0OFQ0Ibh_Tolzwlh3XPoV6eEoCwHfOR6Cnq3LwcF4w12yyTWtiwojMyuv1DXg",
                stat: "2.800 MW", statDesc: "Công suất hòa lưới"
              },
              {
                id: "03", name: "Quản Lý Quỹ & Tài Chính",
                desc: "Giải pháp quản lý tài sản, M&A và tài trợ dự án quy mô lớn, đưa doanh nghiệp vươn ra thế giới.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
                stat: "$1.8B", statDesc: "Tài sản quản lý (AUM)"
              },
              {
                id: "04", name: "Cảng Biển & Logistics",
                desc: "Sở hữu cụm cảng nước sâu quốc tế tiếp nhận tàu siêu trọng tải và hệ thống kho bãi tự động hóa 4.0.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl0cvRyMTplg7KAgIPwuRI6u0YAXLn4r7PUXDGC7ltMde_0SWBNAX5W6Xzs1ahItHFx2JfDIwFs1MtVq5bBeQR48db1vOiApyXWAlqNm-Cf2kq0hMMKeNpXtFaj69F4LyrySymjmffHZZCcQoyHLMKWFBgoTRNh5hRwN-XGGdUQA5l-JHf04ExYj1hmehnSKiLIpl2azX2XQ9WXRiUxOndlhUP5EstTto8hAvxkgD6kvFjAW-E4AGKxw",
                stat: "6.5M TEU", statDesc: "Sản lượng hàng năm"
              }
            ].map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-primary-container border border-white/10 rounded-2xl overflow-hidden group flex flex-col h-full"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" src={sector.img} alt={sector.name}/>
                  <div className="absolute top-6 left-6 px-4 py-2 bg-primary/80 backdrop-blur-md text-secondary-fixed nav-link rounded-lg z-20 border border-secondary/30">
                    {sector.id}
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-5 rounded-bl-full"></div>
                  <div className="relative z-10">
                    <h3 className="headline text-white group-hover:text-secondary-fixed transition-colors duration-300 mb-4" style={{fontSize: "2rem", fontWeight: 500}}>{sector.name}</h3>
                    <p className="text-on-primary-container leading-relaxed text-lg">{sector.desc}</p>
                  </div>
                  <div className="mt-10 pt-6 border-t border-white/10 flex items-end justify-between relative z-10">
                    <div>
                      <span className="section-tag text-on-primary-container block mb-1">{sector.statDesc}</span>
                      <span className="text-3xl font-semibold text-secondary-fixed headline">{sector.stat}</span>
                    </div>
                    <Link className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary-fixed group-hover:text-primary transition-all duration-300" to="/sectors">
                      <span className="material-symbols-outlined text-2xl group-hover:rotate-45 transition-transform duration-300">arrow_upward</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH CHART SECTION */}
      <section className="w-full py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <span className="section-tag text-secondary block mb-3">Phát Triển</span>
              <h2 className="headline text-on-surface text-4xl font-semibold mb-6">Tăng Trưởng Bền Vững Qua Các Năm</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">Doanh thu thuần tăng từ 15.200 tỷ (2020) lên 24.680 tỷ VND (2024), đạt mức tăng trưởng kép 16.8% CAGR.</p>
              <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/30">
                <span className="section-tag text-outline block mb-2">Mục tiêu 2025</span>
                    <span className="metric-num text-primary text-4xl">35.000 <span className="text-xl text-on-surface-variant font-sans font-normal">Tỷ VND</span></span>
              </div>
            </div>
            <div className="lg:col-span-8 h-[400px] bg-white p-8 rounded-2xl shadow-xl border border-outline-variant/20">
              <h3 className="font-semibold text-on-surface mb-6 text-xl">Biểu đồ Doanh thu thuần (Tỷ VND)</h3>
              <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={[
                  { year: '2020', revenue: 15200 },
                  { year: '2021', revenue: 18400 },
                  { year: '2022', revenue: 21500 },
                  { year: '2023', revenue: 20800 },
                  { year: '2024', revenue: 24680 },
                  { year: '2025', revenue: 29800 },
                  { year: '2026', revenue: 32000 },
                  { year: '2027', revenue: 35000 }
                ]} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fedeb2" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#fedeb2" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e6eeff" vertical={false} />
                  <XAxis dataKey="year" stroke="#75777e" tick={{ fill: '#44474d', fontSize: 14 }} tickMargin={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#75777e" tick={{ fill: '#44474d', fontSize: 14 }} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#0a192f', color: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
                    itemStyle={{ color: '#fedeb2' }}
                    formatter={(value) => [`${value.toLocaleString()} Tỷ VND`, 'Doanh thu']}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#725b38" strokeWidth={3} fill="url(#revenueGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
