import React from 'react';

export default function SectorTag({ sector, label }) {
  const sectorStyles = {
    realestate: 'bg-sector-realestate/10 text-sector-realestate border-sector-realestate/20',
    energy: 'bg-sector-energy/10 text-sector-energy border-sector-energy/20',
    finance: 'bg-sector-finance/10 text-sector-finance border-sector-finance/20',
    logistics: 'bg-sector-logistics/10 text-sector-logistics border-sector-logistics/20'
  };

  const sectorIcons = {
    realestate: 'apartment',
    energy: 'bolt',
    finance: 'account_balance',
    logistics: 'local_shipping'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${sectorStyles[sector] || 'bg-surface-container text-on-surface-variant border-outline-variant'}`}>
      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{sectorIcons[sector]}</span>
      {label}
    </span>
  );
}
