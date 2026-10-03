import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, X, ShieldCheck, ScanFace, Lock, RefreshCcw } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [step, setStep] = useState('select'); // select, scanning, success

  useEffect(() => {
    if (isOpen) setStep('select');
  }, [isOpen]);

  const handleAuth = () => {
    setStep('scanning');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onClose();
        setStep('select');
      }, 2000);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={onClose}></motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-3xl w-full max-w-md relative z-10 shadow-[0_0_80px_rgba(41,151,255,0.2)] overflow-hidden">
            <button onClick={onClose} className="absolute top-6 right-6 text-[#86868b] hover:text-white transition-colors z-20"><X size={24} /></button>
            
            <div className="p-10 text-center">
              <Lock className="mx-auto text-[#2997ff] mb-6" size={32} />
              <h2 className="text-[28px] font-bold headline text-white mb-2">Investor Portal</h2>
              <p className="text-[13px] text-[#86868b] font-medium mb-10">Khu vực kiểm soát dòng vốn nội bộ. Yêu cầu xác thực Cấp Độ 2.</p>

              {step === 'select' && (
                <div className="space-y-4">
                  <div className="relative">
                    <input type="text" placeholder="Nhập Syndicate ID..." className="w-full bg-black border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-4 text-center text-white font-mono tracking-widest focus:outline-none focus:border-[#2997ff] transition-colors" />
                  </div>
                  <div className="flex items-center gap-4 py-4">
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                    <span className="text-[11px] text-[#86868b] font-bold uppercase tracking-widest">Hoặc</span>
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={handleAuth} className="bg-black border border-[rgba(255,255,255,0.05)] hover:border-[#2997ff] rounded-2xl p-6 flex flex-col items-center gap-3 transition-colors group">
                      <ScanFace size={32} className="text-[#86868b] group-hover:text-[#2997ff] transition-colors" />
                      <span className="text-[11px] font-bold text-white uppercase tracking-widest">Face ID</span>
                    </button>
                    <button onClick={handleAuth} className="bg-black border border-[rgba(255,255,255,0.05)] hover:border-[#2997ff] rounded-2xl p-6 flex flex-col items-center gap-3 transition-colors group">
                      <Fingerprint size={32} className="text-[#86868b] group-hover:text-[#2997ff] transition-colors" />
                      <span className="text-[11px] font-bold text-white uppercase tracking-widest">Touch ID</span>
                    </button>
                  </div>
                </div>
              )}

              {step === 'scanning' && (
                <div className="py-12 flex flex-col items-center">
                  <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-[#2997ff] border-t-transparent rounded-full"></motion.div>
                    <Fingerprint size={48} className="text-[#2997ff] animate-pulse" />
                  </div>
                  <p className="text-[#2997ff] text-[13px] font-bold uppercase tracking-widest animate-pulse">Đang quét sinh trắc học...</p>
                  <p className="text-[11px] text-[#86868b] mt-2">Đang thiết lập kết nối mã hóa end-to-end</p>
                </div>
              )}

              {step === 'success' && (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-12 flex flex-col items-center">
                  <div className="w-24 h-24 bg-[#34c759]/20 rounded-full flex items-center justify-center mb-6 border border-[#34c759]/50">
                    <ShieldCheck size={48} className="text-[#34c759]" />
                  </div>
                  <h3 className="text-[24px] font-bold text-white headline mb-2">Đã Xác Thực</h3>
                  <p className="text-[13px] text-[#86868b] font-bold uppercase tracking-widest">Chào mừng, Mr. Anderson</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
