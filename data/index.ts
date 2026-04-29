import * as en from './en';
import * as zh from './zh';
import * as ru from './ru';
import * as ja from './ja';
import * as vi from './vi';
import type { Lang } from '@/lib/i18n';

export const dictionary = {
  en,
  zh,
  ru,
  ja,
  vi,
} as const;

export function getDictionary(lang: Lang) {
  return dictionary[lang];
}
