import React, { useState } from 'react';
import { TrendingUp, ShieldCheck } from 'lucide-react';

export default function ROISimulator() {
  const [investment, setInvestment] = useState(100000);
  const [years, setYears] = useState(3);
  const targetIRR = 0.31; // 31% target IRR

  // Calculate return using compound interest formula: A = P(1 + r)^t
  const projectedReturn = Math.round(investment * Math.pow(1 + targetIRR, years));
  const profit = projectedReturn - investment;
  const multiplier = (projectedReturn / investment).toFixed(1);

  return (
    <div className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-8 lg:p-12 border border-[rgba(255,255,255,0.08)] shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      {/* Background ambient light */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2997ff] rounded-full blur-[150px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8a2be2] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 border-b border-[rgba(255,255,255,0.05)] pb-8 relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-gradient-to-br from-[#2997ff] to-[#004499] rounded-[16px] flex items-center justify-center text-white shadow-[0_0_30px_rgba(41,151,255,0.4)]">
            <TrendingUp size={28} />
          </div>
          <div>
            <h3 className="text-[28px] md:text-[32px] font-bold text-white headline tracking-tight">Mô Phỏng Lợi Nhuận</h3>
            <p className="text-[#86868b] text-[15px] mt-1 font-medium">Bảng tính dựa trên danh mục DeepTech (Mục tiêu IRR 31%)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        {/* Input Sliders */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Slider 1: Vốn đầu tư */}
          <div className="bg-black/20 p-6 rounded-2xl border border-[rgba(255,255,255,0.03)]">
            <div className="flex justify-between items-end mb-6">
              <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest flex items-center gap-2">
                Quy mô giải ngân
              </label>
              <span className="text-[32px] font-bold text-white headline tracking-tight">${investment.toLocaleString()}</span>
            </div>
            <div className="relative">
              <input 
                type="range" 
                min="20000" max="1000000" step="10000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1d1d1f] rounded-full appearance-none cursor-pointer outline-none relative z-10"
                style={{
                  background: `linear-gradient(to right, #2997ff 0%, #2997ff ${((investment - 20000) / (1000000 - 20000)) * 100}%, #1d1d1f ${((investment - 20000) / (1000000 - 20000)) * 100}%, #1d1d1f 100%)`
                }}
              />
              <style>{`
                input[type=range]::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  height: 24px;
                  width: 24px;
                  border-radius: 50%;
                  background: #fff;
                  border: 4px solid #2997ff;
                  cursor: pointer;
                  box-shadow: 0 0 20px rgba(41, 151, 255, 0.8);
                  transition: transform 0.1s;
                }
                input[type=range]::-webkit-slider-thumb:hover {
                  transform: scale(1.2);
                }
              `}</style>
            </div>
            <div className="flex justify-between text-[13px] text-[#86868b] mt-4 font-medium">
              <span>$20,000 (Min)</span>
              <span>$1,000,000+</span>
            </div>
          </div>

          {/* Slider 2: Thời gian */}
          <div className="bg-black/20 p-6 rounded-2xl border border-[rgba(255,255,255,0.03)]">
            <div className="flex justify-between items-end mb-6">
              <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-widest">
                Thời gian nắm giữ
              </label>
              <span className="text-[32px] font-bold text-white headline tracking-tight">{years} Năm</span>
            </div>
            <div className="relative">
              <input 
                type="range" 
                min="1" max="5" step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1d1d1f] rounded-full appearance-none cursor-pointer outline-none relative z-10"
                style={{
                  background: `linear-gradient(to right, #8a2be2 0%, #8a2be2 ${((years - 1) / (5 - 1)) * 100}%, #1d1d1f ${((years - 1) / (5 - 1)) * 100}%, #1d1d1f 100%)`
                }}
              />
              <style>{`
                input[type=range]:nth-of-type(2)::-webkit-slider-thumb {
                  border-color: #8a2be2;
                  box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
                }
              `}</style>
            </div>
            <div className="flex justify-between text-[13px] text-[#86868b] mt-4 font-medium">
              <span>1 Năm</span>
              <span>5 Năm (Thoái vốn)</span>
            </div>
          </div>

          <div className="flex gap-4 items-start pt-2">
            <ShieldCheck className="text-[#86868b] shrink-0 mt-0.5" size={18} />
            <p className="text-[12px] text-[#86868b] leading-relaxed font-medium">
              Lợi nhuận thực tế phụ thuộc vào biến động vĩ mô và thanh khoản thương vụ. <br className="hidden md:block"/>Mô phỏng không phải là cam kết đầu tư.
            </p>
          </div>
        </div>

        {/* Output Results - Glass Card */}
        <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-[28px] p-8 md:p-12 border border-[rgba(255,255,255,0.1)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-center relative overflow-hidden">
          {/* Internal Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#2997ff]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 mb-12">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[#f5f5f7] text-[11px] font-bold uppercase tracking-widest mb-6 border border-[rgba(255,255,255,0.1)]">
              Giá trị dự phóng
            </span>
            <div className="text-[64px] lg:text-[88px] font-bold text-white headline tracking-tight leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              ${projectedReturn.toLocaleString()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 relative z-10 border-t border-[rgba(255,255,255,0.05)] pt-10">
            <div>
              <span className="block text-[#86868b] text-[12px] font-bold uppercase tracking-widest mb-3">Lợi nhuận ròng</span>
              <span className="text-[32px] md:text-[40px] font-bold text-[#34c759] headline tracking-tight drop-shadow-[0_0_15px_rgba(52,199,89,0.3)]">
                +${profit.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="block text-[#86868b] text-[12px] font-bold uppercase tracking-widest mb-3">Hệ số (MOIC)</span>
              <span className="text-[32px] md:text-[40px] font-bold text-white headline tracking-tight">
                {multiplier}x
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
