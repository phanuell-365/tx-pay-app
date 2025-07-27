import enCommon from './locales/en/common.json';
import esCommon from './locales/es/common.json';
// Add more namespaces as needed

// Strongly typed resources
const resources = {
    en: {
        common: enCommon,
    },
    es: {
        common: esCommon,
    },
} as const;

export default resources;
export type Resources = typeof resources;