import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Shield, CheckCircle2 } from 'lucide-react';

export default function VaultModal({ isOpen, onClose, dealName }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Move to signing
    setTimeout(() => {
      setStep(3); // Success
    }, 1500);
  };

  const handleClose = () => {
    setTimeout(() => setStep(1), 300);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ivory border border-sandstone rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
            >
              {/* Header */}
              <div className="bg-navy p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-antique/20 blur-[30px] rounded-full"></div>
                <button onClick={handleClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
                  <X size={20} />
                </button>
                <div className="w-16 h-16 mx-auto bg-ivory rounded-full flex items-center justify-center shadow-inner mb-4 relative z-10">
                  <Lock size={28} className="text-navy" />
                </div>
                <h3 className="text-xl font-bold text-white headline relative z-10">Private Deal Room</h3>
                <p className="text-gold-antique text-xs font-bold uppercase tracking-widest mt-1 relative z-10">{dealName}</p>
              </div>

              {/* Body */}
              <div className="p-8">
                {step === 1 && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <p className="text-stone text-sm text-center mb-6">
                      Vui lòng xác thực danh tính để ký Thỏa thuận Bảo mật (e-NDA) và mở khóa báo cáo tài chính chi tiết.
                    </p>
                    <div>
                      <label className="block text-xs font-bold text-stone uppercase tracking-widest mb-1">Email Doanh Nghiệp</label>
                      <input 
                        type="email" required
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="investor@company.com"
                        className="w-full bg-linen border border-sandstone rounded px-4 py-3 text-charcoal focus:border-navy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone uppercase tracking-widest mb-1">Chữ Ký Số (Họ Tên)</label>
                      <input 
                        type="text" required
                        placeholder="Nhập tên để làm chữ ký"
                        className="w-full bg-linen border border-sandstone rounded px-4 py-3 text-charcoal focus:border-navy outline-none font-serif italic"
                      />
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-navy rounded font-bold text-white uppercase tracking-widest mt-2 shadow-warm hover:bg-charcoal transition-colors flex items-center justify-center gap-2">
                      <Shield size={16} /> Xác Nhận & Ký NDA
                    </button>
                  </form>
                )}

                {step === 2 && (
                  <div className="flex flex-col items-center justify-center py-10">
                    <div className="w-12 h-12 border-4 border-linen border-t-gold-antique rounded-full animate-spin mb-4"></div>
                    <p className="text-navy font-bold headline">Đang mã hóa chữ ký...</p>
                    <p className="text-stone text-xs mt-2">Connecting to secure vault</p>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col items-center text-center py-6">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-charcoal mb-2 headline">Xác Thực Thành Công</h4>
                    <p className="text-stone text-sm mb-6">Hồ sơ thẩm định (Investment Memo) của {dealName} đã được mở khóa và gửi đến {email}.</p>
                    <button onClick={handleClose} className="w-full py-3 bg-linen border border-sandstone rounded font-bold text-navy uppercase tracking-widest hover:bg-navy hover:text-white transition-colors">
                      Đóng Vault
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
