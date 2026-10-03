import React, { createContext, useState, useContext } from 'react';
import vi from '../locales/vi';
import en from '../locales/en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('vi'); // Default is Vietnamese

  const t = (key) => {
    const keys = key.split('.');
    let value = lang === 'vi' ? vi : en;
    for (const k of keys) {
      if (value[k] === undefined) return key;
      value = value[k];
    }
    return value;
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
