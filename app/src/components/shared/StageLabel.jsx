import React from 'react';

export default function StageLabel({ stage, label }) {
  const stageStyles = {
    seed: 'bg-stage-seed/10 text-stage-seed border-stage-seed/20',
    'series-a': 'bg-stage-series-a/10 text-stage-series-a border-stage-series-a/20',
    'series-b': 'bg-stage-series-b/10 text-stage-series-b border-stage-series-b/20',
    growth: 'bg-pink-500/10 text-pink-600 border-pink-500/20'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${stageStyles[stage] || 'bg-surface-container text-on-surface-variant border-outline-variant'}`}>
      {label}
    </span>
  );
}
