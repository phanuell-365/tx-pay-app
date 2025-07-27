import 'i18next';
import type common from './locales/en/common.json';
import type site from './locales/en/site.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      site: typeof site;
    };
    returnNull: false;
  }
}
export interface I18nResources {
  common: typeof common;
}
export type I18nResourceKeys = keyof I18nResources;