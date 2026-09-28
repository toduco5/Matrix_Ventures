import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import AnimatedCounter from '../shared/AnimatedCounter';
import { platformStats } from '@/data/stats';

export default function PlatformStats() {
  const { t } = useTranslation();

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="w-full py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50" />
      <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {platformStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={statVariants}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(10,25,47,0.15)" }}
              transition={{ duration: 0.3 }}
              className="group relative p-8 lg:p-10 rounded-2xl bg-primary-container border border-white/10 text-white text-center"
            >
              <div className="absolute inset-0 opacity-5">
                <span className="material-symbols-outlined absolute top-4 right-4 text-7xl" style={{ fontSize: '80px' }}>{stat.icon}</span>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="section-tag text-secondary-fixed block mb-4">{t(`ecosystem.stats.${stat.id}`) || stat.label.vi}</span>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-baseline gap-1 mb-2"
                >
                  <AnimatedCounter value={stat.value} duration={2} />
                  <span className="text-secondary-fixed text-4xl font-bold headline">{stat.suffix}</span>
                </motion.div>
                <span className="material-symbols-outlined text-secondary-fixed text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">{stat.icon}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}