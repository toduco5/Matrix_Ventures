import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { ventures } from '@/data/ventures';

export default function VentureDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  const venture = ventures.find(v => v.slug === slug);

  if (!venture) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-outline text-6xl mb-4 block">error</span>
          <h2 className="headline text-on-surface text-2xl mb-2">KhÃ´ng tÃ¬m tháº¥y dá»± Ã¡n</h2>
          <Link to="/ventures" className="text-secondary hover:underline">
            â† Quay láº¡i danh sÃ¡ch
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Tá»•ng quan', icon: 'info' },
    { id: 'financials', label: 'TÃ i chÃ­nh', icon: 'account_balance' },
    { id: 'team', label: 'Äá»™i ngÅ©', icon: 'people' },
    { id: 'milestones', label: 'Cá»™t má»‘c', icon: 'flag' }
  ];

  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] lg:h-[400px] overflow-hidden">
        <img src={venture.coverImage} alt={venture.name.vi} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary" />
        <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16 h-full flex items-end pb-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-secondary/90 text-on-secondary font-semibold rounded-lg">
                {t(`sectors.${venture.sector}`)}
              </span>
              <span className="px-4 py-2 bg-surface/20 text-white font-semibold rounded-lg backdrop-blur-md">
                {venture.stageLabel.vi}
              </span>
            </div>
            <h1 className="headline text-white text-4xl lg:text-5xl font-semibold mb-4">
              {venture.name.vi}
            </h1>
            <p className="text-on-primary-container text-lg max-w-2xl">
              {venture.tagline.vi}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
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
              <div className="space-y-8">
                {activeTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="headline text-on-surface text-2xl font-semibold mb-4">{venture.tagline.vi}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                      {venture.description.vi}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface-container p-6 rounded-xl">
                        <p className="text-sm text-on-surface-variant mb-2">Má»¥c tiÃªu gá»i vá»‘n</p>
                        <p className="text-2xl font-bold text-secondary headline">{venture.fundingGoalFormatted.vi}</p>
                      </div>
                      <div className="bg-surface-container p-6 rounded-xl">
                        <p className="text-sm text-on-surface-variant mb-2">ÄÃ£ huy Ä‘á»™ng</p>
                        <p className="text-2xl font-bold text-on-surface headline">{venture.fundingRaisedFormatted.vi}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'financials' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="headline text-on-surface text-2xl font-semibold mb-6">ThÃ´ng tin tÃ i chÃ­nh</h3>
                    <div className="bg-surface-container rounded-xl overflow-hidden">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-surface-container-high">
                            <th className="p-4 text-on-surface-variant">NÄƒm</th>
                            <th className="p-4 text-on-surface-variant">Doanh thu</th>
                          </tr>
                        </thead>
                        <tbody>
                          {venture.financials.projections.map((p, i) => (
                            <tr key={i} className="border-b border-outline-variant/20">
                              <td className="p-4">{p.year}</td>
                              <td className="p-4 font-semibold text-on-surface">{p.revenue}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'team' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="headline text-on-surface text-2xl font-semibold mb-6">Äá»™i ngÅ© sÃ¡ng láº­p</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {venture.team.map((member, i) => (
                        <div key={i} className="flex items-center gap-4 bg-surface-container p-4 rounded-xl">
                          <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                          <div>
                            <p className="font-semibold text-on-surface">{member.name}</p>
                            <p className="text-sm text-secondary">{member.role.vi}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'milestones' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="headline text-on-surface text-2xl font-semibold mb-6">Cá»™t má»‘c phÃ¡t triá»ƒn</h3>
                    <div className="space-y-6">
                      {venture.milestones.map((m) => (
                        <div key={m.id} className="flex gap-4">
                          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-secondary/10 rounded-full">
                            <span className="material-symbols-outlined text-secondary">{m.status === 'completed' ? 'check_circle' : 'schedule'}</span>
                          </div>
                          <div className="flex-1 bg-surface-container p-4 rounded-xl">
                            <div className="flex justify-between mb-2">
                              <h4 className="font-semibold text-on-surface">{m.title.vi}</h4>
                              <span className="text-sm text-on-surface-variant">{m.date}</span>
                            </div>
                            <p className="text-sm text-on-surface-variant">{m.description.vi}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 sticky top-24">
                <h3 className="headline text-on-surface text-xl font-semibold mb-6">ThÃ´ng tin dá»± Ã¡n</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-on-surface-variant mb-2">Tiáº¿n Ä‘á»™ huy Ä‘á»™ng vá»‘n</p>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-on-surface">{venture.progress}%</span>
                        <span className="text-on-surface-variant">{venture.fundingRaisedFormatted.vi} / {venture.fundingGoalFormatted.vi}</span>
                      </div>
                      <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary" style={{ width: `${venture.progress}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-on-surface headline">{venture.investors}</p>
                      <p className="text-xs text-on-surface-variant">NhÃ  Ä‘áº§u tÆ°</p>
                    </div>
                    <div className="bg-surface-container p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-on-surface headline">{venture.milestones.filter(m => m.status === 'completed').length}</p>
                      <p className="text-xs text-on-surface-variant">Milestone</p>
                    </div>
                  </div>

                  <a
                    href={venture.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-primary text-white text-center rounded-xl hover:bg-primary-container transition-all"
                  >
                    Trang web
                  </a>
                  <button className="w-full py-3 bg-secondary text-on-secondary text-center rounded-xl hover:bg-secondary-container transition-all">
                    Quan tÃ¢m Ä‘áº¿n dá»± Ã¡n
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
