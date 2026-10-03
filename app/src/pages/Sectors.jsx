import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const tabContentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
};

export default function Sectors() {
  const [activeTab, setActiveTab] = useState('realestate');

  const sectorData = {
    realestate: {
      title: "Bất Động Sản Chiến Lược & Đô Thị Thông Minh",
      desc: "Tiên phong phát triển các tổ hợp đô thị tích hợp tiêu chuẩn quốc tế, khu phức hợp văn phòng Grade A và nghỉ dưỡng sinh thái cao cấp. Matrix Land đang quản lý quỹ đất hơn 3.200ha tại 5 trung tâm kinh tế lớn nhất Việt Nam.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeFOWi8H8je3ZDsWbMviUkBul8_KmcXQ_qqtzPbnxXACXInUYzfjjJSDgVJjdEazq23lzqvEyUpWoQBxAOjaHHjWMxJq7oDFPGBZWZ9pw5lsGOFzlbtRfZFU755Q_zLVX1F5W5_dbaSwPLvKhRhx7LVQeR3UsHP6kmTOnbF1BzaoOS1otYCl0ruxqs6m8CseWKmHuuqdyy8-1JTSiNHbrPBQHhaTzyQP8tDw_AihsOJY9ao6dL8D5xHg",
      stats: [
        { label: "Quỹ đất sạch", val: "3.200+ ha" },
        { label: "Tổng mức đầu tư", val: "$4.5B" },
        { label: "Dự án bàn giao", val: "35+" }
      ],
      projects: [
        { name: "Matrix Grand Marina", loc: "Quận 1, TPHCM", status: "Đang bàn giao" },
        { name: "Matrix EcoCity", loc: "Hà Nội", status: "Đang xây dựng" }
      ]
    },
    energy: {
      title: "Năng Lượng Tái Tạo & Công Nghiệp Xanh",
      desc: "Dẫn đầu mục tiêu Net Zero 2050, Matrix Energy triển khai đồng bộ các nhà máy điện gió ngoài khơi, điện mặt trời phân tán. Chúng tôi đang là đối tác chiến lược của Vestas và Siemens Gamesa tại ĐNA.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9K3DHwHbdi7-xpLdyik9fxmD1-7bG-IA8KneqJC-hIGyTFCtXol4qiUnumzCMGj9ne0mUyhmwXCu5RuRFpAo9TobhNwdOvhd3FTih8YRtiq0IpOw-aWzZoSAPTWwV2R32ia3vYiNv-uZAYGlqvjHTojX0qs847fJTLdhSr3EBCANxdGhfTnlDj3LrB0OFQ0Ibh_Tolzwlh3XPoV6eEoCwHfOR6Cnq3LwcF4w12yyTWtiwojMyuv1DXg",
      stats: [
        { label: "Công suất", val: "2.800 MW" },
        { label: "Giảm phát thải", val: "4M Tấn/năm" },
        { label: "Nhà máy vận hành", val: "12" }
      ],
      projects: [
        { name: "Offshore Wind Matrix Bình Thuận", loc: "Bình Thuận", status: "Vận hành thương mại" },
        { name: "Solar Park Ninh Thuận", loc: "Ninh Thuận", status: "Giai đoạn 2" }
      ]
    },
    finance: {
      title: "Dịch Vụ Tài Chính & Quản Lý Quỹ",
      desc: "Cung cấp giải pháp quản lý tài sản, ngân hàng đầu tư (M&A) và tài trợ dự án. Matrix Capital hiện đang quản lý danh mục hơn 1.8 tỷ USD từ các quỹ hưu trí và định chế tài chính quốc tế.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZr5FMGJluNfMo9CmmircZD37AZvnW3mgnwSsKa3mXtkFnO1tiKqVXGUokGwKORjTtQz3kx20z6TeTWoVnQnjovbhE035_v00X1UwZNWt6kviXto7XvtOJU99VpAnpefqItTHzOg4__f7xWGbudTel676z1OrIolk_A-iu5bnAXFg2Zeo-401j-CYgXRAChWtJnX65OYib8SIAPk6-uYjQp089-UWSryEbt06akc5nZMWRsk4wEqD3jA",
      stats: [
        { label: "AUM", val: "$1.8B" },
        { label: "Đối tác tổ chức", val: "45+" },
        { label: "Tỷ suất sinh lời trung bình", val: "14.5%" }
      ],
      projects: [
        { name: "Matrix Green Bond Fund", loc: "Chứng chỉ quỹ xanh", status: "Giải ngân 80%" },
        { name: "Vietnam Real Estate Trust", loc: "Quỹ tín thác BĐS", status: "Mở mới 2024" }
      ]
    },
    logistics: {
      title: "Hạ Tầng Cảng Biển & Logistics",
      desc: "Sở hữu cụm cảng nước sâu quốc tế tiếp nhận tàu siêu trọng tải và hệ thống kho bãi tự động hóa 4.0. Matrix Logistics đóng vai trò yếu hầu trong chuỗi cung ứng toàn cầu.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl0cvRyMTplg7KAgIPwuRI6u0YAXLn4r7PUXDGC7ltMde_0SWBNAX5W6Xzs1ahItHFx2JfDIwFs1MtVq5bBeQR48db1vOiApyXWAlqNm-Cf2kq0hMMKeNpXtFaj69F4LyrySymjmffHZZCcQoyHLMKWFBgoTRNh5hRwN-XGGdUQA5l-JHf04ExYj1hmehnSKiLIpl2azX2XQ9WXRiUxOndlhUP5EstTto8hAvxkgD6kvFjAW-E4AGKxw",
      stats: [
        { label: "Sản lượng hàng năm", val: "6.5M TEU" },
        { label: "Kho bãi thông minh", val: "1.2M m²" },
        { label: "Cảng biển nước sâu", val: "03" }
      ],
      projects: [
        { name: "Matrix Deep Port Cái Mép", loc: "Bà Rịa - Vũng Tàu", status: "Hoạt động tối đa" },
        { name: "Smart Mega Hub Bình Dương", loc: "Bình Dương", status: "Khai trương 2025" }
      ]
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-surface-container-low py-4 px-8 lg:px-16 border-b border-outline-variant/20 pt-24">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="section-tag text-outline">Trang chủ</span>
            <span className="text-outline">/</span>
            <span className="section-tag text-secondary font-bold">Lĩnh Vực Kinh Doanh</span>
          </div>
        </div>
      </div>

      <section className="relative w-full overflow-hidden bg-surface py-24 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-16 bg-secondary"></span>
                <span className="nav-link text-secondary tracking-widest">Danh Mục Đầu Tư 2025</span>
              </div>
              <h1 className="headline text-on-surface leading-tight" style={{fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 600, letterSpacing: "-0.02em"}}>
                Hệ Sinh Thái Kinh Doanh <br/><span className="text-secondary">Toàn Diện & Đồng Bộ</span>
              </h1>
              <p className="text-on-surface-variant max-w-3xl leading-relaxed text-xl mt-4">
                Hội tụ 20 năm định chế vững vàng, Matrix Holding vận hành mô hình hợp lực tuần hoàn thông qua 4 trụ cột công nghiệp trọng yếu, dẫn dắt tăng trưởng và kiến tạo chuẩn mực mới tại Việt Nam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STICKY TABS */}
      <div className="sticky top-20 z-40 bg-surface-container-lowest/90 backdrop-blur-xl py-6 px-8 lg:px-16 shadow-lg border-y border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto flex items-center gap-4 overflow-x-auto pb-2 custom-scrollbar">
          {[
            { id: 'realestate', icon: 'apartment', name: 'Bất Động Sản' },
            { id: 'energy', icon: 'wind_power', name: 'Năng Lượng Xanh' },
            { id: 'finance', icon: 'account_balance', name: 'Tài Chính & Quỹ' },
            { id: 'logistics', icon: 'directions_boat', name: 'Logistics' }
          ].map((tab) => (
            <button 
              key={tab.id}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl nav-link whitespace-nowrap transition-all duration-300 ${activeTab === tab.id ? 'bg-primary text-white shadow-xl scale-105' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="material-symbols-outlined text-2xl">{tab.icon}</span>
              <span className="text-sm">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <section className="w-full bg-surface-container-low py-32 px-8 lg:px-16 min-h-[800px]">
        <div className="max-w-[1440px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              variants={tabContentVariants}
              initial="hidden" animate="visible" exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="headline text-on-surface text-5xl font-semibold mb-8 leading-tight">{sectorData[activeTab].title}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-12">{sectorData[activeTab].desc}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {sectorData[activeTab].stats.map((stat, i) => (
                    <div key={i} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                      <span className="section-tag text-outline block mb-2">{stat.label}</span>
                      <span className="headline text-primary font-semibold text-3xl">{stat.val}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-on-surface mb-4">Dự án Tiêu biểu</h4>
                  <div className="space-y-4">
                    {sectorData[activeTab].projects.map((proj, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                        <div>
                          <div className="font-semibold text-on-surface">{proj.name}</div>
                          <div className="text-sm text-outline flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[14px]">location_on</span>
                            {proj.loc}
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-surface-container-high text-xs font-semibold rounded-full text-primary">{proj.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="w-full h-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl relative group">
                  <img src={sectorData[activeTab].img} alt="Sector Image" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
