/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import en from './en.json';
import hi from './hi.json';
import es from './es.json';

const dictionaries = { en, hi, es };
const I18nContext = createContext();

const getNested = (obj, path) => path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = (key) => getNested(dictionaries[language], key) || getNested(dictionaries.en, key) || key;

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used inside I18nProvider');
  return context;
};
