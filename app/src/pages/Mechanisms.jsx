import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { mechanisms } from '@/data/mechanisms';

export default function Mechanisms() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'public-goods', label: 'Hàng Công Cộng' },
    { value: 'traditional', label: 'Truyền Thống' },
    { value: 'hybrid', label: 'Kết Hợp' },
    { value: 'governance', label: 'Quản Trị' }
  ];

  const difficulties = [
    { value: 'all', label: 'Tất cả' },
    { value: 'beginner', label: 'Cơ bản' },
    { value: 'intermediate', label: 'Trung cấp' },
    { value: 'advanced', label: 'Nâng cao' }
  ];

  const filteredMechanisms = useMemo(() => {
    return mechanisms.filter(m => {
      const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || m.difficulty === selectedDifficulty;
      return matchesCategory && matchesDifficulty;
    });
  }, [selectedCategory, selectedDifficulty]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Header */}
      <section className="w-full bg-surface-container-low py-16 px-8 lg:px-16 border-b border-outline-variant/20 pt-24">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="section-tag text-secondary block mb-3">{t('nav.mechanisms')}</span>
            <h1 className="headline text-on-surface text-4xl lg:text-5xl font-semibold">{t('mechanisms.title')}</h1>
          </motion.div>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            {t('mechanisms.subtitle')}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full bg-surface py-8 px-8 lg:px-16 border-b border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all flex-1 md:w-auto"
            >
              {categories.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all flex-1 md:w-auto"
            >
              {difficulties.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Mechanisms Grid */}
      <section className="w-full bg-surface-container-low py-16 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMechanisms.map((mechanism) => (
              <motion.div key={mechanism.id} variants={itemVariants}>
                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-secondary/30 hover:shadow-xl transition-all h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={mechanism.featuredImage} alt={mechanism.title.vi} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <span className="material-symbols-outlined text-white/80 text-3xl">arrow_forward</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2 py-1 bg-surface-container rounded text-on-surface-variant">
                        {t(`mechanisms.category.${mechanism.category}`) || mechanism.categoryLabel.vi}
                      </span>
                      <span className="text-xs font-semibold px-2 py-1 bg-secondary/10 text-secondary rounded">
                        {t(`mechanisms.difficulty.${mechanism.difficulty}`) || mechanism.difficultyLabel.vi}
                      </span>
                    </div>
                    <h3 className="headline text-on-surface text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {mechanism.title.vi}
                    </h3>
                    <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-1">
                      {mechanism.description.vi}
                    </p>
                    {mechanism.formula && (
                      <div className="mt-auto pt-4 border-t border-outline-variant/20">
                        <p className="font-mono text-xs bg-surface-container p-2 rounded text-on-surface text-center">
                          {mechanism.formula}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}