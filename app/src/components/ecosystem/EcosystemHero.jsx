import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';

export default function EcosystemHero() {
  const { t } = useTranslation();

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const meshVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 2, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full overflow-hidden bg-primary min-h-[100vh] flex items-center pt-20">
      {/* Animated gradient mesh background */}
      <motion.div
        variants={meshVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "radial-gradient(ellipse at 20% 20%, #fedeb2 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, #0e9f83 0%, transparent 50%)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary/50" />
      
      <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16 py-12 w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.div variants={titleVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
            <span className="section-tag text-secondary-fixed" style={{ letterSpacing: "0.15em" }}>
              {t('ecosystem.hero.badge') || 'Hệ Sinh Thái Đầu Tư • Thành Lập 2005'}
            </span>
          </motion.div>

          <motion.div variants={subtitleVariants} className="flex items-center gap-4 mb-6">
            <span className="h-px w-16 bg-secondary-fixed" />
            <span className="nav-link text-secondary-fixed text-sm">{t('ecosystem.hero.subtitle') || 'Kết nối Startup - Nhà đầu tư - Mentor - Đối tác'}</span>
          </motion.div>

          <motion.h1 variants={titleVariants} className="headline text-white leading-tight mb-2" style={{ fontSize: "clamp(3rem,6vw,4.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Hệ Sinh Thái Cộng Đồng
          </motion.h1>
          <motion.h2 variants={subtitleVariants} className="headline text-secondary-fixed leading-tight mb-8 italic font-normal" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", letterSpacing: "-0.015em" }}>
            Kết Nối Đầu Tư — Tạo Giá Trị Bền Vững
          </motion.h2>

          <motion.p variants={subtitleVariants} className="text-surface-variant text-xl leading-relaxed max-w-3xl mb-12" style={{ fontWeight: 300 }}>
            {t('ecosystem.hero.description') || 'Nền tảng kết nối minh bạch giữa các startup tiềm năng, nhà đầu tư chiến lược, mentor dày dạn kinh nghiệm và đối tác phát triển bền vững.'}
          </motion.p>

          <motion.div variants={ctaVariants} className="flex flex-wrap items-center gap-6">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-fixed text-on-secondary-fixed nav-link rounded-lg shadow-xl hover:bg-secondary-container hover:scale-105 transition-all duration-300 group">
              <span>{t('ecosystem.hero.cta1') || 'Đăng ký tham gia'}</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
            </Link>
            <Link to="/flow" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white nav-link rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <span className="material-symbols-outlined text-secondary-fixed text-xl">timeline</span>
              <span>{t('ecosystem.hero.cta2') || 'Xem quy trình'}</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <span className="material-symbols-outlined text-secondary-fixed text-4xl">keyboard_arrow_down</span>
        </motion.div>
      </div>
    </section>
  );
}