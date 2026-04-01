import React from 'react';
import { Languages } from 'lucide-react';
import { useI18n } from '../i18n';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5">
      <Languages className="h-4 w-4 text-gray-600" />
      <select
        aria-label="Select language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-transparent text-sm font-medium text-gray-700 outline-none"
      >
        <option value="en">EN</option>
        <option value="hi">HI</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
