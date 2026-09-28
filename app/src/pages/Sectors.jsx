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
      title: "Bat Dong San Chien Luoc & Do Thi Thong Minh",
      desc: "Tien phong phat trien cac to hop do thi tich hop tieu chuan quoc te, khu phuc hop van phong Grade A va nghi duong sinh thai cao cap. Matrix Land dang quan ly quy dat hon 3.200ha tai 5 trung tam kinh te lon nhat Viet Nam.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeFOWi8H8je3ZDsWbMviUkBul8_KmcXQ_qqtzPbnxXACXInUYzfjjJSDgVJjdEazq23lzqvEyUpWoQBxAOjaHHjWMxJq7oDFPGBZWZ9pw5lsGOFzlbtRfZFU755Q_zLVX1F5W5_dbaSwPLvKhRhx7LVQeR3UsHP6kmTOnbF1BzaoOS1otYCl0ruxqs6m8CseWKmHuuqdyy8-1JTSiNHbrPBQHhaTzyQP8tDw_AihsOJY9ao6dL8D5xHg",
      stats: [
        { label: "Quy dat sach", val: "3.200+ ha" },
        { label: "Tong muc dau tu", val: "$4.5B" },
        { label: "Du an ban giao", val: "35+" }
      ],
      projects: [
        { name: "Matrix Grand Marina", loc: "Quan 1, TPHCM", status: "Dang ban giao" },
        { name: "Matrix EcoCity", loc: "Ha Noi", status: "Dang xay dung" }
      ]
    },
    energy: {
      title: "Nang Luong Tai Tao & Cong Nghiep Xanh",
      desc: "Don dau muc tieu Net Zero 2050, Matrix Energy trien khai dong bo cac nha may dien gio ngoai khoi, dien mat troi phan tan. Chung toi dang la doi tac chien luoc cua Vestas va Siemens Gamesa tai DNA.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9K3DHwHbdi7-xpLdyik9fxmD1-7bG-IA8KneqJC-hIGyTFCtXol4qiUnumzCMGj9ne0mUyhmwXCu5RuRFpAo9TobhNwdOvhd3FTih8YRtiq0IpOw-aWzZoSAPTWwV2R32ia3vYiNv-uZAYGlqvjHTojX0qs847fJTLdhSr3EBCANxdGhfTnlDj3LrB0OFQ0Ibh_Tolzwlh3XPoV6eEoCwHfOR6Cnq3LwcF4w12yyTWtiwojMyuv1DXg",
      stats: [
        { label: "Cong suat", val: "2.800 MW" },
        { label: "Giam phat thai", val: "4M Tan/nam" },
        { label: "Nha may van hanh", val: "12" }
      ],
      projects: [
        { name: "Offshore Wind Matrix Binh Thuan", loc: "Binh Thuan", status: "Van hanh thuong mai" },
        { name: "Solar Park Ninh Thuan", loc: "Ninh Thuan", status: "Giai doan 2" }
      ]
    },
    finance: {
      title: "Dich Vu Tai Chinh & Quan Ly Quy",
      desc: "Cung cap giai phap quan ly tai san, ngan hang dau tu (M&A) va tai tro du an. Matrix Capital hien dang quan ly danh muc hon 1.8 ty USD tu cac quy huu tri va dinh che tai chinh quoc te.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZr5FMGJluNfMo9CmmircZD37AZvnW3mgnwSsKa3mXtkFnO1tiKqVXGUokGwKORjTtQz3kx20z6TeTWoVnQnjovbhE035_v00X1UwZNWt6kviXto7XvtOJU99VpAnpefqItTHzOg4__f7xWGbudTel676z1OrIolk_A-iu5bnAXFg2Zeo-401j-CYgXRAChWtJnX65OYib8SIAPk6-uYjQp089-UWSryEbt06akc5nZMWRsk4wEqD3jA",
      stats: [
        { label: "AUM", val: "$1.8B" },
        { label: "Doi tac to chuc", val: "45+" },
        { label: "Ty suat sinh loi trung binh", val: "14.5%" }
      ],
      projects: [
        { name: "Matrix Green Bond Fund", loc: "Chung chi quy xanh", status: "Giai ngan 80%" },
        { name: "Vietnam Real Estate Trust", loc: "Quy tin thac BDS", status: "Mo moi 2024" }
      ]
    },
    logistics: {
      title: "Ha Tang Cang Bien & Logistics",
      desc: "So huu cum cang nuoc sau quoc te tiep nhan tau sieu trong tai va he thong kho bai tu dong hoa 4.0. Matrix Logistics dong vai tro yethau trong chuoi cung ung toan cau.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl0cvRyMTplg7KAgIPwuRI6u0YAXLn4r7PUXDGC7ltMde_0SWBNAX5W6Xzs1ahItHFx2JfDIwFs1MtVq5bBeQR48db1vOiApyXWAlqNm-Cf2kq0hMMKeNpXtFaj69F4LyrySymjmffHZZCcQoyHLMKWFBgoTRNh5hRwN-XGGdUQA5l-JHf04ExYj1hmehnSKiLIpl2azX2XQ9WXRiUxOndlhUP5EstTto8hAvxkgD6kvFjAW-E4AGKxw",
      stats: [
        { label: "San luong hang nam", val: "6.5M TEU" },
        { label: "Kho bai thong minh", val: "1.2M m2" },
        { label: "Cang bien nuoc sau", val: "03" }
      ],
      projects: [
        { name: "Matrix Deep Port Cai Mep", loc: "Ba Ria - Vung Tau", status: "Hoat dong toi da" },
        { name: "Smart Mega Hub Binh Duong", loc: "Binh Duong", status: "Khai truong 2025" }
      ]
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-surface-container-low py-4 px-8 lg:px-16 border-b border-outline-variant/20 pt-24">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="section-tag text-outline">Trang chu</span>
            <span className="text-outline">/</span>
            <span className="section-tag text-secondary font-bold">Linh Vuc Kinh Doanh</span>
          </div>
        </div>
      </div>

      <section className="relative w-full overflow-hidden bg-surface py-24 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-16 bg-secondary"></span>
                <span className="nav-link text-secondary tracking-widest">Danh Muc Dau Tu 2025</span>
              </div>
              <h1 className="headline text-on-surface leading-tight" style={{fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 600, letterSpacing: "-0.02em"}}>
                He Sinh Thai Kinh Doanh <br/><span className="text-secondary">Toan Dien & Dong Bo</span>
              </h1>
              <p className="text-on-surface-variant max-w-3xl leading-relaxed text-xl mt-4">
                Hoi tu 20 nam dinh che vung vang, Matrix Holding van hanh mo hinh hop luc tuan hoan thong qua 4 tru cot cong nghiep trong yeu, dan dat tang truong va kien tao chuan muc moi tai Viet Nam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STICKY TABS */}
      <div className="sticky top-20 z-40 bg-surface-container-lowest/90 backdrop-blur-xl py-6 px-8 lg:px-16 shadow-lg border-y border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto flex items-center gap-4 overflow-x-auto pb-2 custom-scrollbar">
          {[
            { id: 'realestate', icon: 'apartment', name: 'Bat Dong San' },
            { id: 'energy', icon: 'wind_power', name: 'Nang Luong Xanh' },
            { id: 'finance', icon: 'account_balance', name: 'Tai Chinh & Quy' },
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
                  <h4 className="font-semibold text-on-surface mb-4">Du an Tieu bieu</h4>
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
