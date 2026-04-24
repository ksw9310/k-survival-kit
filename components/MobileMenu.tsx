'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Lang } from '@/lib/i18n';

type Item = { href: string; label: string };
type Group = { label: string; items: Item[] };

type Props = {
  groups: Group[];
  currentLang: Lang;
};

const langLabels: Record<Lang, { flag: string; name: string }> = {
  en: { flag: '🇺🇸', name: 'English' },
  zh: { flag: '🇨🇳', name: '中文' },
  ru: { flag: '🇷🇺', name: 'Русский' },
  ja: { flag: '🇯🇵', name: '日本語' },
};

export default function MobileMenu({ groups, currentLang }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? '/';
  const pathWithoutLang = pathname.replace(/^\/(en|zh|ru|ja)(?=\/|$)/, '') || '/';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Hamburger / X button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 active:bg-slate-200"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-[57px] z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div className="relative bg-white border-b border-slate-200 shadow-xl overflow-y-auto max-h-[calc(100vh-57px)]">
            <div className="px-4 py-4 space-y-1">

              {/* 3 groups */}
              {groups.map((group, i) => (
                <div key={group.label} className={i > 0 ? 'border-t border-slate-100 pt-4 mt-2' : ''}>
                  <p className="px-4 pb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {group.label}
                  </p>
                  {group.items.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-rose-50 hover:text-rose-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}

              {/* Language section */}
              <div className="border-t border-slate-100 pt-4 mt-2">
                <p className="px-4 pb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Language
                </p>
                <div className="flex flex-wrap gap-2 px-4">
                  {locales.map((lang) => {
                    const { flag, name } = langLabels[lang];
                    const href = `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
                    return (
                      <Link
                        key={lang}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                          currentLang === lang
                            ? 'bg-yellow-300 text-slate-900'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <span>{flag}</span>
                        <span>{name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
