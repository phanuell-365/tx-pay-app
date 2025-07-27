import { useEffect } from 'react';
import i18n from '../../i18n/config';

export const GeoDetectHandler = () => {
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      document.documentElement.lang = lng;
      document.documentElement.dir =
        ['ar', 'he'].includes(lng) ? 'rtl' : 'ltr';
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return null;
};
