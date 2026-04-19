import Link from 'next/link';
import { getDictionary } from '@/data';
import type { Lang } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';

const mainNavLinks = (lang: string, t: { nav: Record<string, string> }) => [
  { href: `/${lang}`, label: t.nav.home },
  { href: `/${lang}/getting-started`, label: t.nav.gettingStarted },
  { href: `/${lang}/daily-life`, label: t.nav.dailyLife },
  { href: `/${lang}/health`, label: t.nav.health },
  { href: `/${lang}/housing`, label: t.nav.housing },
  { href: `/${lang}/culture`, label: t.nav.culture },
  { href: `/${lang}/visa`, label: t.nav.visa },
];

const QUICK_HELP_LABELS: Record<Lang, { nearby: string; transport: string; emergencyKorean: string; emergencyContacts: string }> = {
  en: { nearby: '📍 Find Nearby', transport: '🚇 Transport', emergencyKorean: '🆘 Emergency Korean', emergencyContacts: '📞 Emergency Contacts' },
  zh: { nearby: '📍 查找周边', transport: '🚇 交通指南', emergencyKorean: '🆘 紧急韩语', emergencyContacts: '📞 紧急联系电话' },
  ru: { nearby: '📍 Рядом со мной', transport: '🚇 Транспорт', emergencyKorean: '🆘 Экстренные фразы', emergencyContacts: '📞 Экстренные контакты' },
  ja: { nearby: '📍 近くを探す', transport: '🚇 交通ガイド', emergencyKorean: '🆘 緊急韓国語', emergencyContacts: '📞 緊急連絡先' },
};

const quickHelpLinks = (lang: Lang) => {
  const t = QUICK_HELP_LABELS[lang] ?? QUICK_HELP_LABELS.en;
  return [
    { href: `/${lang}/nearby`, label: t.nearby },
    { href: `/${lang}/transport`, label: t.transport },
    { href: `/${lang}/emergency-korean`, label: t.emergencyKorean },
    { href: `/${lang}/emergency-contacts`, label: t.emergencyContacts },
  ];
};

const dropdownLabel: Record<Lang, string> = {
  en: 'Quick Help',
  zh: '快速帮助',
  ru: 'Быстрая помощь',
  ja: 'クイックヘルプ',
};

export default function Navbar({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).common;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex shrink-0 items-center gap-1.5 text-xl font-extrabold text-slate-900 transition-opacity hover:opacity-80"
        >
          <span className="text-2xl">🎒</span>
          K-<span className="text-rose-500">Survival</span> Kit
        </Link>

        {/* Main nav links */}
        <div className="hidden gap-0.5 md:flex">
          {mainNavLinks(lang, t).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-rose-50 hover:text-rose-600"
            >
              {link.label}
            </Link>
          ))}
          {/* Quick Help dropdown */}
          <NavDropdown
            label={dropdownLabel[lang] ?? 'Quick Help'}
            items={quickHelpLinks(lang)}
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Language switcher — desktop only */}
          <div className="hidden md:block">
            <LanguageSwitcher currentLang={lang} />
          </div>
          {/* Hamburger — mobile only */}
          <MobileMenu
            mainLinks={mainNavLinks(lang, t)}
            quickHelpLinks={quickHelpLinks(lang)}
            quickHelpLabel={dropdownLabel[lang] ?? 'Quick Help'}
            currentLang={lang}
          />
        </div>
      </nav>
    </header>
  );
}
