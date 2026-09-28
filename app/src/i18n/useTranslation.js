import useLanguage from './useLanguage';
import vi from './locales/vi.json';
import en from './locales/en.json';

const translations = { vi, en };

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value === 'string') {
      Object.keys(params).forEach(param => {
        value = value.replace(new RegExp(`{{${param}}}`, 'g'), params[param]);
      });
      return value;
    }
    
    return key;
  };

  return { t, language };
}
