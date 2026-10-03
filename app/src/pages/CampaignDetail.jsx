import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { campaigns } from '@/data/campaigns';
import { ventures } from '@/data/ventures';
import SectorTag from '@/components/shared/SectorTag';
import StatusBadge from '@/components/shared/StatusBadge';
import ProgressBar from '@/components/shared/ProgressBar';

export default function CampaignDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  const campaign = campaigns.find(c => c.slug === slug);
  const campaignVentures = ventures.filter(v => campaign?.projects?.includes(v.id));

  if (!campaign) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-outline text-6xl mb-4 block">error</span>
          <h2 className="headline text-on-surface text-2xl mb-2">KhÃ´ng tÃ¬m tháº¥y vÃ²ng gá»i vá»‘n</h2>
          <Link to="/campaigns" className="text-secondary hover:underline">
            â† Quay láº¡i danh sÃ¡ch
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Tá»•ng quan', icon: 'info' },
    { id: 'projects', label: 'Dá»± Ã¡n tham gia', icon: 'campaign' },
    { id: 'timeline', label: 'Lá»‹ch trÃ¬nh', icon: 'timeline' }
  ];

  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <img src={campaign.image} alt={campaign.title.vi} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16 h-full flex items-end pb-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <SectorTag sector={campaign.sector} label={t(`sectors.${campaign.sector}`)} />
              <StatusBadge
                status={campaign.status}
                statusLabel={{ active: 'Äang má»Ÿ', upcoming: 'Sáº¯p má»Ÿ', closed: 'ÄÃ£ Ä‘Ã³ng' }[campaign.status]}
              />
            </div>
            <h1 className="headline text-white text-4xl lg:text-5xl font-semibold mb-4">
              {campaign.title.vi}
            </h1>
            <p className="text-on-primary-container text-lg mb-8 max-w-2xl">
              {campaign.description.vi}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-2 border-b border-outline-variant/20 mb-8">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-secondary text-secondary'
                        : 'border-transparent text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="headline text-on-surface text-2xl font-semibold mb-4">Giá»›i thiá»‡u</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {campaign.description.vi}
                    </p>
                  </div>

                  {campaign.highlights && campaign.highlights.vi && (
                    <div>
                      <h4 className="font-semibold text-on-surface mb-3">Äiá»ƒm ná»•i báº­t</h4>
                      <ul className="space-y-2">
                        {campaign.highlights.vi.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'projects' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="headline text-on-surface text-2xl font-semibold mb-6">
                    Dá»± Ã¡n tham gia ({campaignVentures.length})
                  </h3>
                  {campaignVentures.length === 0 ? (
                    <p className="text-on-surface-variant">ChÆ°a cÃ³ dá»± Ã¡n tham gia.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {campaignVentures.map(venture => (
                        <Link
                          key={venture.id}
                          to={`/ventures/${venture.slug}`}
                          className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 hover:border-secondary/30 hover:shadow-lg transition-all"
                        >
                          <div className="h-40 overflow-hidden">
                            <img src={venture.coverImage} alt={venture.name.vi} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4">
                            <h4 className="headline text-on-surface font-semibold mb-1">{venture.name.vi}</h4>
                            <p className="text-on-surface-variant text-sm line-clamp-2">{venture.tagline.vi}</p>
                            <ProgressBar progress={venture.progress} height="h-2" />
                            <div className="flex justify-between text-xs text-on-surface-variant mt-2">
                              <span>{venture.fundingRaisedFormatted.vi}</span>
                              <span>{venture.investors} nhÃ  Ä‘áº§u tÆ°</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'timeline' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="headline text-on-surface text-2xl font-semibold mb-6">Lá»‹ch trÃ¬nh vÃ²ng gá»i vá»‘n</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-secondary">event</span>
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface">Khá»Ÿi Ä‘á»™ng vÃ²ng gá»i vá»‘n</p>
                        <p className="text-on-surface-variant">{new Date(campaign.startDate).toLocaleDateString('vi-VN')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-secondary">flag</span>
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface">Káº¿t thÃºc vÃ²ng gá»i vá»‘n</p>
                        <p className="text-on-surface-variant">{new Date(campaign.endDate).toLocaleDateString('vi-VN')}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 sticky top-24">
                <h3 className="headline text-on-surface text-xl font-semibold mb-6">ThÃ´ng tin vÃ²ng gá»i vá»‘n</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-on-surface-variant mb-2">Quá»¹ Ä‘á»‘i á»©ng cá»™ng Ä‘á»“ng</p>
                    <p className="text-3xl font-bold text-secondary headline">
                      {campaign.matchingPoolFormatted.vi}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-on-surface-variant mb-2">Tiáº¿n Ä‘á»™ huy Ä‘á»™ng</p>
                    <ProgressBar progress={campaign.progress} height="h-4" color="bg-secondary" />
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-on-surface-variant">{campaign.raisedAmountFormatted.vi}</span>
                      <span className="font-semibold text-on-surface">{campaign.progress}%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-on-surface headline">{campaign.projectCount}</p>
                      <p className="text-xs text-on-surface-variant">Dá»± Ã¡n</p>
                    </div>
                    <div className="bg-surface-container p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-on-surface headline">
                        {Math.ceil((new Date(campaign.endDate) - new Date()) / (1000 * 60 * 60 * 24))}
                      </p>
                      <p className="text-xs text-on-surface-variant">NgÃ y cÃ²n láº¡i</p>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-secondary text-on-secondary font-semibold rounded-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">how_to_reg</span>
                    Tham gia ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
