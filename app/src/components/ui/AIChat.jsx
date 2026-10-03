import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function AIChat() {
  // Chỉ hiện logo chat góc dưới bên phải, chưa tích hợp popup
  return (
    <motion.button 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-[#2997ff] shadow-[0_0_30px_rgba(41,151,255,0.2)] hover:bg-[#2997ff] hover:text-white transition-all group"
    >
      <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
    </motion.button>
  );
}
