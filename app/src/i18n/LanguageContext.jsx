import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();
export { LanguageContext };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'vi';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
