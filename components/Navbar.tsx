import Link from 'next/link';
import { getDictionary } from '@/data';
import type { Lang } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';

type Item = { href: string; label: string };
type Group = { label: string; items: Item[] };

const LABELS: Record<Lang, {
  living: string;
  explore: string;
  connect: string;
  gettingStarted: string;
  dailyLife: string;
  health: string;
  housing: string;
  visa: string;
  simCard: string;
  culture: string;
  transport: string;
  nearby: string;
  makingFriends: string;
  emergencyKorean: string;
  emergencyContacts: string;
}> = {
  en: {
    living: 'Living',
    explore: 'Explore',
    connect: 'Connect',
    gettingStarted: 'Getting Started',
    dailyLife: 'Daily Life',
    health: 'Health',
    housing: 'Housing',
    visa: 'Visa & ARC',
    simCard: '📱 SIM Card',
    culture: 'Culture',
    transport: '🚇 Transport',
    nearby: '📍 Find Nearby',
    makingFriends: '🤝 Making Friends',
    emergencyKorean: '🆘 Emergency Korean',
    emergencyContacts: '📞 Emergency Contacts',
  },
  zh: {
    living: '生活',
    explore: '探索',
    connect: '社交',
    gettingStarted: '入门指南',
    dailyLife: '日常生活',
    health: '健康',
    housing: '住房',
    visa: '签证与登录证',
    simCard: '📱 SIM卡指南',
    culture: '文化',
    transport: '🚇 交通指南',
    nearby: '📍 查找周边',
    makingFriends: '🤝 交朋友',
    emergencyKorean: '🆘 紧急韩语',
    emergencyContacts: '📞 紧急联系电话',
  },
  ru: {
    living: 'Жизнь',
    explore: 'Город',
    connect: 'Общение',
    gettingStarted: 'С чего начать',
    dailyLife: 'Быт',
    health: 'Здоровье',
    housing: 'Жильё',
    visa: 'Виза и ARC',
    simCard: '📱 SIM-карта',
    culture: 'Культура',
    transport: '🚇 Транспорт',
    nearby: '📍 Рядом со мной',
    makingFriends: '🤝 Знакомства',
    emergencyKorean: '🆘 Экстренные фразы',
    emergencyContacts: '📞 Экстренные контакты',
  },
  ja: {
    living: '生活',
    explore: '探索',
    connect: 'つながる',
    gettingStarted: '始め方',
    dailyLife: '日常生活',
    health: '健康',
    housing: '住まい',
    visa: 'ビザ・登録証',
    simCard: '📱 SIMカード',
    culture: 'カルチャー',
    transport: '🚇 交通ガイド',
    nearby: '📍 近くを探す',
    makingFriends: '🤝 友達を作ろう',
    emergencyKorean: '🆘 緊急韓国語',
    emergencyContacts: '📞 緊急連絡先',
  },
  vi: {
    living: 'Cuộc sống',
    explore: 'Khám phá',
    connect: 'Kết nối',
    gettingStarted: 'Bắt đầu',
    dailyLife: 'Cuộc sống hàng ngày',
    health: 'Sức khỏe',
    housing: 'Nhà ở',
    visa: 'Visa & ARC',
    simCard: '📱 SIM',
    culture: 'Văn hóa',
    transport: '🚇 Giao thông',
    nearby: '📍 Tìm gần đây',
    makingFriends: '🤝 Kết bạn',
    emergencyKorean: '🆘 Tiếng Hàn khẩn cấp',
    emergencyContacts: '📞 Liên lạc khẩn cấp',
  },
};

function getGroups(lang: Lang): Group[] {
  const L = LABELS[lang] ?? LABELS.en;
  return [
    {
      label: L.living,
      items: [
        { href: `/${lang}/getting-started`, label: L.gettingStarted },
        { href: `/${lang}/daily-life`, label: L.dailyLife },
        { href: `/${lang}/health`, label: L.health },
        { href: `/${lang}/housing`, label: L.housing },
        { href: `/${lang}/visa`, label: L.visa },
        { href: `/${lang}/how-to-get-sim-card-in-korea`, label: L.simCard },
      ],
    },
    {
      label: L.explore,
      items: [
        { href: `/${lang}/culture`, label: L.culture },
        { href: `/${lang}/transport`, label: L.transport },
        { href: `/${lang}/nearby`, label: L.nearby },
      ],
    },
    {
      label: L.connect,
      items: [
        { href: `/${lang}/making-friends`, label: L.makingFriends },
        { href: `/${lang}/emergency-korean`, label: L.emergencyKorean },
        { href: `/${lang}/emergency-contacts`, label: L.emergencyContacts },
      ],
    },
  ];
}

export default function Navbar({ lang }: { lang: Lang }) {
  const groups = getGroups(lang);

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

        {/* Desktop nav — 3 dropdowns */}
        <div className="hidden gap-0.5 md:flex">
          {groups.map((group) => (
            <NavDropdown key={group.label} label={group.label} items={group.items} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language switcher — desktop only */}
          <div className="hidden md:block">
            <LanguageSwitcher currentLang={lang} />
          </div>
          {/* Hamburger — mobile only */}
          <MobileMenu groups={groups} currentLang={lang} />
        </div>
      </nav>
    </header>
  );
}
