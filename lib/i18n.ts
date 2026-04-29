export const locales = ['en', 'zh', 'ru', 'ja', 'vi'] as const;

export type Lang = (typeof locales)[number];

export const defaultLocale: Lang = 'en';

export function isValidLocale(value: string): value is Lang {
  return locales.includes(value as Lang);
}
