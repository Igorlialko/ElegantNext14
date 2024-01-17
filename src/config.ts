
export type TLocale = 'en' | 'fr' | 'ua';

export const locales: TLocale[] = ['en', 'fr', 'ua'];

export const pathnames = {
  '/': '/',
};

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
