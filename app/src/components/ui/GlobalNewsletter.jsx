import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function GlobalNewsletter() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const location = useLocation();

  // Hide modal automatically when changing pages
  useEffect(() => {
    setShowNewsletter(false);
  }, [location.pathname]);

  if (location.pathname === '/contact') return null;

  return (
    <>
      {/* Floating Glowing Button to manually trigger Newsletter */}
      <AnimatePresence>
        {!showNewsletter && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setShowNewsletter(true)}
            className="fixed bottom-14 left-8 md:bottom-8 z-[80] w-14 h-14 bg-[#ff3b30] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,59,48,0.6)] hover:shadow-[0_0_40px_rgba(255,59,48,1)] hover:scale-110 transition-all duration-300 group"
          >
            <Mail className="text-white group-hover:scale-110 transition-transform" size={24} />
            <span className="absolute inset-0 rounded-full bg-[#ff3b30] animate-ping opacity-40"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Glassmorphism Newsletter Modal */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-8 left-4 right-4 md:left-8 md:right-auto md:w-[450px] z-[90]"
          >
            <div className="bg-[#1d1d1f]/70 backdrop-blur-3xl border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <button onClick={() => setShowNewsletter(false)} className="absolute top-4 right-4 text-[#86868b] hover:text-white transition-colors bg-black/20 p-2 rounded-full"><X size={20}/></button>
              
              <div className="w-12 h-12 bg-gradient-to-br from-[#2997ff] to-black rounded-full flex items-center justify-center mb-6 border border-[rgba(255,255,255,0.2)]">
                <Mail className="text-white" size={24} />
              </div>
              
              <h3 className="text-[24px] font-bold text-white headline mb-2">Nhận Đặc Quyền Thông Tin.</h3>
              <p className="text-[15px] text-[#86868b] font-medium mb-6">Đăng ký email để nhận phân tích Deal Flow bí mật hàng tuần trực tiếp từ Managing Partner.</p>
              
              <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); setShowNewsletter(false); }}>
                <input type="email" placeholder="Email của bạn..." required className="flex-1 bg-black/50 border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#2997ff] transition-colors" />
                <button type="submit" className="bg-[#2997ff] text-white rounded-xl px-6 py-3 font-bold text-[13px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors shrink-0">Tham Gia</button>
              </form>
              <p className="text-[11px] text-[#86868b] mt-4 flex items-center gap-1"><Lock size={12}/> Chúng tôi cam kết bảo mật email tuyệt đối.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
