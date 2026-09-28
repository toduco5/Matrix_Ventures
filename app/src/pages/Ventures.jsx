import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { ventures } from '@/data/ventures';
import SectorTag from '@/components/shared/SectorTag';
import StageLabel from '@/components/shared/StageLabel';
import ProgressBar from '@/components/shared/ProgressBar';

export default function Ventures() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedStage, setSelectedStage] = useState('all');

  const sectors = [
    { value: 'all', label: 'Tất cả' },
    { value: 'realestate', label: t('sectors.realestate') },
    { value: 'energy', label: t('sectors.energy') },
    { value: 'finance', label: t('sectors.finance') },
    { value: 'logistics', label: t('sectors.logistics') }
  ];

  const stages = [
    { value: 'all', label: 'Tất cả' },
    { value: 'seed', label: 'Seed' },
    { value: 'seriesA', label: 'Series A' },
    { value: 'seriesB', label: 'Series B' },
    { value: 'growth', label: 'Growth' }
  ];

  const filteredVentures = useMemo(() => {
    return ventures.filter(venture => {
      const matchesSearch = venture.name.vi.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           venture.name.en.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'all' || venture.sector === selectedSector;
      const matchesStage = selectedStage === 'all' || venture.stage === selectedStage;
      return matchesSearch && matchesSector && matchesStage;
    });
  }, [searchTerm, selectedSector, selectedStage]);

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
            <span className="section-tag text-secondary block mb-3">{t('nav.ventures')}</span>
            <h1 className="headline text-on-surface text-4xl lg:text-5xl font-semibold">{t('ventures.title')}</h1>
          </motion.div>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            {t('ventures.subtitle')}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full bg-surface py-8 px-8 lg:px-16 border-b border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm dự án..."
                className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              >
                {sectors.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              >
                {stages.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="w-full bg-surface-container-low py-16 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          {filteredVentures.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-outline text-6xl mb-4 block">search_off</span>
              <h3 className="headline text-on-surface text-2xl mb-2">Không tìm thấy dự án</h3>
              <p className="text-on-surface-variant">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredVentures.map((venture) => (
                <motion.div key={venture.id} variants={itemVariants}>
                  <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-secondary/30 hover:shadow-xl transition-all h-full flex flex-col group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={venture.coverImage}
                        alt={venture.name.vi}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4">
                        <StageLabel stage={venture.stage} label={t(`ventures.stage.${venture.stage}`) || venture.stageLabel.vi} />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <span className="material-symbols-outlined text-white/80 text-3xl">arrow_forward</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="headline text-on-surface text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                        {venture.name.vi}
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-1">
                        {venture.tagline.vi}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <SectorTag sector={venture.sector} label={t(`sectors.${venture.sector}`)} />
                      </div>
                      <div className="border-t border-outline-variant/20 pt-4 mt-auto">
                        <div className="flex justify-between text-xs text-on-surface-variant mb-2">
                          <span>{venture.fundingGoalFormatted.vi}</span>
                          <span>{venture.progress}%</span>
                        </div>
                        <ProgressBar progress={venture.progress} height="h-2" color="bg-secondary" />
                        <div className="flex justify-between text-xs text-on-surface-variant mt-2">
                          <span>{venture.fundingRaisedFormatted.vi}</span>
                          <span>{venture.investors} nhà đầu tư</span>
                        </div>
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