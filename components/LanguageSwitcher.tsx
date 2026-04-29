'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Lang } from '@/lib/i18n';

const labels: Record<Lang, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
  ru: '🇷🇺',
  ja: '🇯🇵',
  vi: '🇻🇳',
};

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: Lang;
}) {
  const pathname = usePathname() ?? '/';

  const pathWithoutLang =
    pathname.replace(/^\/(en|zh|ru|ja|vi)(?=\/|$)/, '') || '/';

  return (
    <div className="flex gap-2">
      {locales.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`}
          className={`rounded-full px-3 py-1 text-sm ${
            currentLang === lang
              ? 'bg-yellow-300 font-bold text-black'
              : 'bg-slate-200 text-slate-600'
          }`}
        >
          {labels[lang]}
        </Link>
      ))}
    </div>
  );
}
