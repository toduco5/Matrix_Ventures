import useLanguage from '../../i18n/useLanguage';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container transition-all duration-300 group"
      aria-label="Switch language"
    >
      <span className={`text-xs font-semibold transition-colors ${
        language === 'vi' ? 'text-primary' : 'text-on-surface-variant'
      }`}>
        VN
      </span>
      
      <div className="relative w-9 h-5 bg-surface-container-high rounded-full overflow-hidden">
        <div 
          className={`absolute top-0.5 w-4 h-4 bg-secondary-fixed rounded-full transition-transform duration-300 shadow-sm ${
            language === 'en' ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </div>
      
      <span className={`text-xs font-semibold transition-colors ${
        language === 'en' ? 'text-primary' : 'text-on-surface-variant'
      }`}>
        EN
      </span>
    </button>
  );
}
