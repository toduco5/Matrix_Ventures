import React from 'react';

export default function StatusBadge({ status, statusLabel }) {
  const statusStyles = {
    active: 'bg-status-active/10 text-status-active border-status-active/20',
    upcoming: 'bg-status-upcoming/10 text-status-upcoming border-status-upcoming/20',
    closed: 'bg-surface-variant text-on-surface-variant border-outline-variant',
    completed: 'bg-status-active/10 text-status-active border-status-active/20',
    'in-progress': 'bg-status-upcoming/10 text-status-upcoming border-status-upcoming/20'
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${statusStyles[status] || statusStyles.closed}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'active' || status === 'completed' ? 'bg-status-active' : status === 'upcoming' || status === 'in-progress' ? 'bg-status-upcoming' : 'bg-outline'}`} />
      {statusLabel}
    </span>
  );
}
