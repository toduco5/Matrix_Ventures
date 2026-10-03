import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudies() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'realestate', label: t('sectors.realestate') },
    { value: 'energy', label: t('sectors.energy') },
    { value: 'finance', label: t('sectors.finance') },
    { value: 'logistics', label: t('sectors.logistics') }
  ];

  const dates = [
    { value: 'all', label: 'Tất cả' },
    { value: '2026', label: '2026' },
    { value: '2025', label: '2025' }
  ];

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(s => {
      const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
      const matchesDate = selectedDate === 'all' || s.date.includes(selectedDate);
      return matchesCategory && matchesDate;
    });
  }, [selectedCategory, selectedDate]);

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
            <span className="section-tag text-secondary block mb-3">{t('nav.caseStudies')}</span>
            <h1 className="headline text-on-surface text-4xl lg:text-5xl font-semibold">{t('caseStudies.title')}</h1>
          </motion.div>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            {t('caseStudies.subtitle')}
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
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all flex-1 md:w-auto"
            >
              {dates.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="w-full bg-surface-container-low py-16 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-outline text-6xl mb-4 block">search_off</span>
              <h3 className="headline text-on-surface text-2xl mb-2">Không tìm thấy cÃ¢u chuyá»‡n</h3>
              <p className="text-on-surface-variant">Thá»­ thay Ä‘á»•i bá»™ lá»c</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCaseStudies.map((story) => (
                <motion.div key={story.id} variants={itemVariants}>
                  <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-secondary/30 hover:shadow-xl transition-all h-full flex flex-col group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={story.coverImage} alt={story.title.vi} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-secondary/90 text-on-secondary text-xs font-semibold rounded">
                          {story.categoryLabel.vi}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <span className="material-symbols-outlined text-white/80 text-3xl">arrow_forward</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-on-surface-variant mb-2">{story.dateFormatted.vi}</span>
                      <h3 className="headline text-on-surface text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                        {story.title.vi}
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-1">
                        {story.subtitle.vi}
                      </p>
                      <div className="flex items-center justify-between text-xs text-on-surface-variant mt-auto pt-4 border-t border-outline-variant/20">
                        <span>{story.author.name.vi}</span>
                        <span className="font-semibold text-secondary">{t('caseStudies.readMore')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
