import React from 'react';

export default function SearchBox({ value, onChange, placeholder }) {
  return (
    <div className="relative flex items-center">
      <span className="material-symbols-outlined absolute left-3 text-on-surface-variant" style={{ fontSize: '20px' }}>
        search
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
      />
    </div>
  );
}
