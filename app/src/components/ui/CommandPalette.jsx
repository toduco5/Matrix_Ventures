import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Home, Info, Globe, FileText, Briefcase, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Listen for Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : document.dispatchEvent(new CustomEvent('open-command-palette'));
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Chỉ hiển thị các trang chức năng đã có
  const results = [
    { type: 'Page', title: 'Trang chủ', icon: <Home size={16}/>, path: '/' },
    { type: 'Page', title: 'Về Tập đoàn', icon: <Info size={16}/>, path: '/about' },
    { type: 'Page', title: 'Hệ Sinh Thái', icon: <Globe size={16}/>, path: '/ecosystem' },
    { type: 'Page', title: 'Tin Tức', icon: <FileText size={16}/>, path: '/news' },
    { type: 'Page', title: 'Tuyển Dụng', icon: <Briefcase size={16}/>, path: '/careers' },
    { type: 'Page', title: 'Liên Hệ Hợp Tác', icon: <Mail size={16}/>, path: '/contact' }
  ];

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -20 }} className="bg-[#1d1d1f] border border-[rgba(255,255,255,0.1)] rounded-2xl w-full max-w-2xl relative z-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            
            <div className="flex items-center px-6 py-4 border-b border-[rgba(255,255,255,0.1)]">
              <Search className="text-[#86868b] mr-4" size={20} />
              <input 
                autoFocus
                type="text" 
                placeholder="Tìm kiếm trang chức năng (Trang chủ, Tin tức...)" 
                className="w-full bg-transparent border-none text-[17px] text-white focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="text-[10px] text-[#86868b] border border-[rgba(255,255,255,0.1)] px-2 py-1 rounded-md uppercase font-bold tracking-widest ml-4">ESC</span>
            </div>

            <div className="p-4 max-h-[400px] overflow-y-auto">
              <div className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold mb-4 px-2">Các chức năng</div>
              <div className="space-y-1">
                {results.filter(r => r.title.toLowerCase().includes(query.toLowerCase())).map((res, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSelect(res.path)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#2997ff] hover:text-white group transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#86868b] group-hover:text-white/80">{res.icon}</span>
                      <span className="text-[15px] font-medium text-[#f5f5f7]">{res.title}</span>
                    </div>
                    <ArrowRight size={16} className="text-[#86868b] group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
