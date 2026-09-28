import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { campaigns } from '@/data/campaigns';
import SearchBox from '@/components/shared/SearchBox';
import CampaignCard from '@/components/campaigns/CampaignCard';

export default function Campaigns() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  const sectors = [
    { value: 'all', label: t('common.filter.all') || 'Tất cả' },
    { value: 'realestate', label: t('sectors.realestate') },
    { value: 'energy', label: t('sectors.energy') },
    { value: 'finance', label: t('sectors.finance') },
    { value: 'logistics', label: t('sectors.logistics') }
  ];

  const statuses = [
    { value: 'all', label: t('common.filter.all') || 'Tất cả' },
    { value: 'active', label: t('campaigns.status.active') },
    { value: 'upcoming', label: t('campaigns.status.upcoming') },
    { value: 'closed', label: t('campaigns.status.closed') }
  ];

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter(campaign => {
      const matchesSearch = campaign.title.vi.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           campaign.title.en.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'all' || campaign.sector === selectedSector;
      const matchesStatus = selectedStatus === 'all' || campaign.status === selectedStatus;
      return matchesSearch && matchesSector && matchesStatus;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.startDate) - new Date(a.startDate);
        case 'endingSoon':
          return new Date(a.endDate) - new Date(b.endDate);
        case 'progress':
          return b.progress - a.progress;
        case 'pool':
          return b.matchingPool - a.matchingPool;
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedSector, selectedStatus, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Page Header */}
      <section className="w-full bg-surface-container-low py-16 px-8 lg:px-16 border-b border-outline-variant/20 pt-24">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="section-tag text-secondary block mb-3">{t('nav.campaigns')}</span>
            <h1 className="headline text-on-surface text-4xl lg:text-5xl font-semibold">{t('campaigns.title')}</h1>
          </motion.div>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            {t('campaigns.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="w-full bg-surface py-8 px-8 lg:px-16 border-b border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <SearchBox
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('common.search') || 'Tìm kiếm vòng gọi vốn...'}
            />
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all min-w-[180px]"
              >
                {sectors.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all min-w-[160px]"
              >
                {statuses.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all min-w-[180px]"
              >
                <option value="newest">{t('campaigns.sort.newest') || 'Mới nhất'}</option>
                <option value="endingSoon">{t('campaigns.sort.endingSoon') || 'Sắp kết thúc'}</option>
                <option value="progress">{t('campaigns.sort.progress') || 'Tiến độ cao'}</option>
                <option value="pool">{t('campaigns.sort.pool') || 'Quỹ lớn nhất'}</option>
              </select>
              <div className="flex items-center gap-2 border border-outline-variant rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 transition-colors ${viewMode === 'grid' ? 'bg-secondary text-on-secondary' : 'text-on-surface-variant hover:bg-surface-container'}`}
                  aria-label="Grid view"
                >
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 transition-colors ${viewMode === 'list' ? 'bg-secondary text-on-secondary' : 'text-on-surface-variant hover:bg-surface-container'}`}
                  aria-label="List view"
                >
                  <span className="material-symbols-outlined">view_list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Grid/List */}
      <section className="w-full bg-surface-container-low py-16 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          {filteredCampaigns.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-outline text-6xl mb-4 block">search_off</span>
              <h3 className="headline text-on-surface text-2xl mb-2">{t('campaigns.empty.title') || 'Không tìm thấy vòng gọi vốn'}</h3>
              <p className="text-on-surface-variant">{t('campaigns.empty.desc') || 'Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm'}</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}
            >
              {filteredCampaigns.map((campaign) => (
                <motion.div key={campaign.slug} variants={itemVariants}>
                  <CampaignCard
                    campaign={campaign}
                    variant={viewMode}
                    onJoin={() => {}}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}