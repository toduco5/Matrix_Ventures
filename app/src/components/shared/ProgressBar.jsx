import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ progress, showLabel = true, height = 'h-2', color = 'bg-secondary' }) {
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-on-surface-variant">Tiến độ</span>
          <span className="text-sm font-semibold text-on-surface">{progress}%</span>
        </div>
      )}
      <div className={`w-full ${height} bg-surface-container rounded-full overflow-hidden`}>
        <motion.div
          className={`${height} ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
