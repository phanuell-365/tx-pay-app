import i18n from 'i18next';
import type { CustomDetector } from 'i18next-browser-languagedetector';
// import DetectorInterface from "i18next-browser-languagedetector"
// import LanguageDetector from 'i18next-browser-languagedetector';

const countryToLangMap: Record<string, string> = {
  US: 'en',
  GB: 'en',
  ES: 'es',
  MX: 'es',
  FR: 'fr',
  DE: 'de',
};

export const customDetector: CustomDetector = {
  name: 'customDetector',
  lookup(): string | undefined | string[] {
    // 1. Check existing settings
    if (localStorage.getItem('i18nextLng')) return undefined;

    // 2. Use cached geo result
    const geoCache = sessionStorage.getItem('geoLanguage');
    if (geoCache) return geoCache;

    // 3. Fetch geolocation (non-blocking)
    // await fetchGeoLanguage().then(async (lng) => {
    //   if (lng && i18n.language !== lng) {
    //     await i18n.changeLanguage(lng);
    //   }
    // });

    fetchGeoLanguage()
      .then(async (lng) => {
        if (lng && i18n.language !== lng) {
          await i18n.changeLanguage(lng);
        }
      })
      .catch(() => {
        // Handle error if needed
      });

    return undefined;
  },
  cacheUserLanguage(lng: string) {
    // Cache the detected language for the session
    sessionStorage.setItem('geoLanguage', lng);
  },
};

async function fetchGeoLanguage(): Promise<string | undefined> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const { country } = (await response.json()) as { country: string };
    const lang = countryToLangMap[country] || 'en';

    // Cache for session
    sessionStorage.setItem('geoLanguage', lang);
    return lang;
  } catch {
    return undefined;
  }
}
