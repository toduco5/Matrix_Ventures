import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n/useTranslation';
import SectorTag from '@/components/shared/SectorTag';
import StatusBadge from '@/components/shared/StatusBadge';
import ProgressBar from '@/components/shared/ProgressBar';

export default function CampaignCard({ campaign, variant = 'grid' }) {
  const { t } = useTranslation();

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    return num.toLocaleString();
  };

  const statusLabels = {
    vi: { active: 'Đang mở', upcoming: 'Sắp mở', closed: 'Đã đóng' },
    en: { active: 'Active', upcoming: 'Upcoming', closed: 'Closed' }
  };

  if (variant === 'list') {
    return (
      <Link
        to={`/campaigns/${campaign.slug}`}
        className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-surface-container relative">
          <img
            src={campaign.image}
            alt={campaign.title.vi}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <SectorTag sector={campaign.sector} label={t(`sectors.${campaign.sector}`)} />
            <StatusBadge
              status={campaign.status}
              statusLabel={statusLabels.vi[campaign.status] || campaign.status}
            />
            {campaign.featured && (
              <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded">
                {t('campaigns.featured') || 'Nổi bật'}
              </span>
            )}
          </div>
          <h3 className="headline text-on-surface text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
            {campaign.title.vi}
          </h3>
          <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">
            {campaign.description.vi}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[16px]">account_balance_wallet</span>
              <span>{t('campaigns.matchingPool')}: <span className="font-semibold text-on-surface">{formatNumber(campaign.matchingPool)} VND</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[16px]">campaign</span>
              <span>{campaign.projectCount} {t('campaigns.projects')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[16px]">schedule</span>
              <span>{t('campaigns.endDate')}: {new Date(campaign.endDate).toLocaleDateString('vi-VN')}</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-48 mt-4 md:mt-0 flex-shrink-0">
          <ProgressBar progress={campaign.progress} height="h-3" />
          <div className="flex justify-between text-xs text-on-surface-variant mt-1">
            <span>{t('campaigns.raised') || 'Đã huy động'}: {formatNumber(campaign.raisedAmount)} VND</span>
            <span className="font-semibold text-on-surface">{campaign.progress}%</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/campaigns/${campaign.slug}`}
      className="group block bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-secondary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title.vi}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          <SectorTag sector={campaign.sector} label={t(`sectors.${campaign.sector}`)} />
          <StatusBadge
            status={campaign.status}
            statusLabel={statusLabels.vi[campaign.status] || campaign.status}
          />
          {campaign.featured && (
            <span className="px-2 py-1 bg-secondary/90 text-on-secondary text-xs font-semibold rounded">
              {t('campaigns.featured') || 'Nổi bật'}
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <span className="material-symbols-outlined text-white text-3xl">arrow_forward</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="headline text-on-surface text-xl font-semibold mb-3 group-hover:text-secondary transition-colors line-clamp-1">
          {campaign.title.vi}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {campaign.description.vi}
        </p>
        {campaign.highlights && campaign.highlights.vi && (
          <div className="flex flex-wrap gap-2 mb-4">
            {campaign.highlights.vi.slice(0, 3).map((highlight, i) => (
              <span key={i} className="px-2 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">
                {highlight}
              </span>
            ))}
          </div>
        )}
        <div className="border-t border-outline-variant/20 pt-4 mt-auto">
          <div className="flex items-center justify-between text-sm text-on-surface-variant mb-2">
            <span>{t('campaigns.matchingPool') || 'Quỹ đối ứng'}</span>
            <span className="font-semibold text-secondary">{formatNumber(campaign.matchingPool)} VND</span>
          </div>
          <ProgressBar progress={campaign.progress} height="h-2" color="bg-secondary" />
          <div className="flex justify-between text-xs text-on-surface-variant mt-1">
            <span>{campaign.projectCount} {t('campaigns.projects')}</span>
            <span>{t('campaigns.endDate')}: {new Date(campaign.endDate).toLocaleDateString('vi-VN')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}