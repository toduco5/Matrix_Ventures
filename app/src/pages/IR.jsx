import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const stockData = [
  { time: '10:00', price: 47200 }, { time: '11:00', price: 47800 },
  { time: '13:00', price: 48100 }, { time: '14:00', price: 47900 },
  { time: '14:30', price: 48600 }
];

const revenueData = [
  { year: '2020', revenue: 15200 }, { year: '2021', revenue: 18400 },
  { year: '2022', revenue: 21500 }, { year: '2023', revenue: 20800 },
  { year: '2024', revenue: 24680 }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function IR() {
  const [activeTab, setActiveTab] = useState('bctn');

  return (
    <div className="w-full bg-surface">
      <div className="w-full bg-surface-container-low py-4 px-8 lg:px-16 border-b border-outline-variant/20 pt-24">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="section-tag text-outline">Trang chu</span>
            <span className="text-outline">/</span>
            <span className="section-tag text-secondary font-bold">Quan He Co Dong (IR)</span>
          </div>
        </div>
      </div>

      <section className="w-full bg-primary py-24 px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={{hidden: {opacity:0, x:-50}, visible:{opacity:1, x:0, transition:{duration:0.8}}}}>
              <span className="section-tag text-secondary-fixed block mb-4">Cong Thong Tin Nha Dau Tu</span>
              <h1 className="headline text-white leading-tight mb-8" style={{fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, letterSpacing: "-0.02em"}}>
                Minh Bach. Hieu Qua. <span className="italic text-secondary-fixed font-normal">Ben Vung.</span>
              </h1>
              <p className="text-on-primary-container leading-relaxed mb-10 text-xl" style={{fontWeight: 300}}>
                Matrix Holding cam ket cung cap thong tin tai chinh day du, chinh xac va kip thoi cho cong dong nha dau tu, tuan thu tuyet doi cac tieu chuan quan tri IFRS va ESG toan cau.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary">Dang Ky Nhan Tin</button>
                <button className="btn-ghost">Lien He IR</button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="section-tag text-secondary-fixed block mb-2">Ma chung khoan niem yet</span>
                  <div className="flex items-center gap-4">
                    <h2 className="headline text-white font-bold text-4xl">MHG : HOSE</h2>
                    <span className="px-3 py-1 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-bold text-lg">+3.07%</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="section-tag text-on-primary-container block mb-1">Gia khop lenh (VND)</span>
                  <span className="metric-num text-white text-5xl">48.600</span>
                </div>
              </div>
              
              <div className="h-[200px] w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stockData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#fedeb2" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#fedeb2" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
                    <YAxis domain={['dataMin - 500', 'dataMax + 500']} hide />
                    <Tooltip contentStyle={{backgroundColor: '#0a192f', borderColor: '#725b38', color: '#fff'}} itemStyle={{color: '#fedeb2'}} />
                    <Area type="monotone" dataKey="price" stroke="#fedeb2" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-6 border-t border-white/10 pt-6">
                {[
                  { label: "P/E", val: "13.2x" }, { label: "P/B", val: "1.95x" },
                  { label: "EPS", val: "3.682" }, { label: "KLGD", val: "3.2M" }
                ].map((item, i) => (
                  <div key={i} className="text-center bg-white/5 rounded-lg p-3 border border-white/5">
                    <span className="section-tag text-on-primary-container block mb-1">{item.label}</span>
                    <span className="text-white font-bold text-lg">{item.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINANCIAL CHART SECTION */}
      <section className="py-24 px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="w-full md:w-1/3">
            <span className="section-tag text-secondary block mb-4">Hoat Dong Phat Trien</span>
            <h2 className="headline text-on-surface text-4xl mb-6 font-semibold">Tang truong ben vung qua cac nam</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">Nam 2024 ghi nhan muc doanh thu ky luc 24.680 Ty dong, tang 18.4% so voi cung ky, the hien su phuc hoi manh me cua mang Bat dong san va nang luc khai thac on dinh tu Nang luong.</p>
            <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/30">
              <span className="section-tag text-outline block mb-2">Muc tieu Doanh thu 2025</span>
              <span className="metric-num text-primary text-4xl">30.000 <span className="text-xl text-on-surface-variant font-sans font-normal">Ty VND</span></span>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="w-full md:w-2/3 h-[450px] bg-white p-8 rounded-2xl shadow-xl border border-outline-variant/20">
            <h3 className="font-semibold text-on-surface mb-6 text-xl">Bieu do Doanh thu thuan (Ty VND)</h3>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e6eeff" vertical={false} />
                <XAxis dataKey="year" stroke="#75777e" tick={{fill: '#44474d', fontSize: 14}} tickMargin={10} axisLine={false} tickLine={false} />
                <YAxis stroke="#75777e" tick={{fill: '#44474d', fontSize: 14}} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f8f9ff'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'}} />
                <Line type="monotone" dataKey="revenue" stroke="#0a192f" strokeWidth={4} dot={{r: 6, fill: '#725b38', strokeWidth: 0}} activeDot={{r: 8, fill: '#0a192f', stroke: '#fedeb2', strokeWidth: 3}} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* DOCUMENT CENTER */}
      <section className="py-24 px-8 lg:px-16 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-center mb-16">
            <span className="section-tag text-secondary block mb-3">Trung Tam Du Lieu</span>
            <h2 className="headline text-on-surface text-4xl font-semibold">Kho Tai Lieu Chinh Thuc</h2>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            <button onClick={() => setActiveTab('bctn')} className={`px-6 py-3 rounded-full nav-link transition-all ${activeTab === 'bctn' ? 'bg-primary text-white shadow-lg' : 'bg-white text-on-surface hover:bg-surface-variant'}`}>Bao Cao Thuong Nien</button>
            <button onClick={() => setActiveTab('bctc')} className={`px-6 py-3 rounded-full nav-link transition-all ${activeTab === 'bctc' ? 'bg-primary text-white shadow-lg' : 'bg-white text-on-surface hover:bg-surface-variant'}`}>Bao Cao Tai Chinh</button>
            <button onClick={() => setActiveTab('dhcd')} className={`px-6 py-3 rounded-full nav-link transition-all ${activeTab === 'dhcd' ? 'bg-primary text-white shadow-lg' : 'bg-white text-on-surface hover:bg-surface-variant'}`}>Dai Hoi Co Dong</button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-outline-variant/20 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="p-6 section-tag text-on-surface">Ten Tai Lieu</th>
                  <th className="p-6 section-tag text-on-surface w-48">Ngay Phat Hanh</th>
                  <th className="p-6 section-tag text-on-surface w-32 text-right">Tai Xuong</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Bao Cao Thuong Nien Nam 2024 - 'Vuon Tam Khu Vuc'", date: "15/04/2025", cat: "bctn" },
                  { name: "Bao Cao Phat Trien Ben Vung (ESG) Nam 2024", date: "30/05/2025", cat: "bctn" },
                  { name: "Bao Cao Tai Chinh Hop Nhat Kiem Toan 2024", date: "28/03/2025", cat: "bctc" },
                  { name: "Bao Cao Tai Chinh Quy 1/2025 (So bo)", date: "20/04/2025", cat: "bctc" },
                  { name: "Nghi Quyet Dai Hoi Dong Co Dong Thuong Nien 2025", date: "25/04/2025", cat: "dhcd" },
                  { name: "Tai lieu Hop Dai Hoi Dong Co Dong Thuong Nien 2025", date: "05/04/2025", cat: "dhcd" },
                ].filter(item => item.cat === activeTab).map((doc, idx) => (
                  <tr key={idx} className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform">picture_as_pdf</span>
                        <span className="font-semibold text-on-surface text-lg">{doc.name}</span>
                      </div>
                    </td>
                    <td className="p-6 text-on-surface-variant">{doc.date}</td>
                    <td className="p-6 text-right">
                      <button className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center ml-auto hover:bg-secondary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
