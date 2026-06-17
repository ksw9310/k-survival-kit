import Link from 'next/link';
import { getDictionary } from '@/data';
import type { Lang } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';
import SearchButton from './SearchButton';

type Item = { href: string; label: string };
type Group = { label: string; items: Item[]; href?: string }; // href 있으면 드롭다운 없이 직접 링크

const LABELS: Record<Lang, {
  setup: string;
  dailyLife: string;
  explore: string;
  community: string;
  // Setup
  gettingStarted: string;
  visa: string;
  arcCard: string;
  simCard: string;
  bankAccount: string;
  // Daily Life
  dailyLifePage: string;
  housing: string;
  health: string;
  deliveryApps: string;
  sendMoney: string;
  partTimeJobs: string;
  // Explore
  culture: string;
  transport: string;
  nearby: string;
  makingFriends: string;
  emergencyKorean: string;
  emergencyContacts: string;
}> = {
  en: {
    setup: 'Setup',
    dailyLife: 'Daily Life',
    explore: 'Explore',
    community: 'Community',
    gettingStarted: '🚀 Getting Started',
    visa: '🛂 Visa & ARC',
    arcCard: '🪪 ARC Card Guide',
    simCard: '📱 SIM Card',
    bankAccount: '🏦 Bank Account',
    dailyLifePage: '☀️ Daily Life',
    housing: '🏠 Housing & Rent',
    health: '🏥 Health & Insurance',
    deliveryApps: '🛵 Delivery Apps',
    sendMoney: '💸 Send Money',
    partTimeJobs: '💼 Part-time Jobs',
    culture: '🎎 Culture',
    transport: '🚇 Transport',
    nearby: '📍 Find Nearby',
    makingFriends: '🤝 Making Friends',
    emergencyKorean: '🆘 Emergency Korean',
    emergencyContacts: '📞 Emergency Contacts',
  },
  zh: {
    setup: '入门',
    dailyLife: '日常',
    explore: '探索',
    community: '社区',
    gettingStarted: '🚀 入门指南',
    visa: '🛂 签证与登录证',
    arcCard: '🪪 登录证指南',
    simCard: '📱 SIM卡',
    bankAccount: '🏦 银行开户',
    dailyLifePage: '☀️ 日常生活',
    housing: '🏠 住房与租赁',
    health: '🏥 健康与保险',
    deliveryApps: '🛵 外卖应用',
    sendMoney: '💸 海外汇款',
    partTimeJobs: '💼 兼职打工',
    culture: '🎎 文化',
    transport: '🚇 交通',
    nearby: '📍 查找周边',
    makingFriends: '🤝 交朋友',
    emergencyKorean: '🆘 紧急韩语',
    emergencyContacts: '📞 紧急联系',
  },
  ru: {
    setup: 'Старт',
    dailyLife: 'Быт',
    explore: 'Город',
    community: 'Сообщество',
    gettingStarted: '🚀 С чего начать',
    visa: '🛂 Виза и ARC',
    arcCard: '🪪 Карта ARC',
    simCard: '📱 SIM-карта',
    bankAccount: '🏦 Банковский счёт',
    dailyLifePage: '☀️ Повседневная жизнь',
    housing: '🏠 Жильё и аренда',
    health: '🏥 Здоровье и страховка',
    deliveryApps: '🛵 Доставка еды',
    sendMoney: '💸 Перевод денег',
    partTimeJobs: '💼 Подработка',
    culture: '🎎 Культура',
    transport: '🚇 Транспорт',
    nearby: '📍 Рядом со мной',
    makingFriends: '🤝 Знакомства',
    emergencyKorean: '🆘 Экстренные фразы',
    emergencyContacts: '📞 Экстренные контакты',
  },
  ja: {
    setup: 'セットアップ',
    dailyLife: '日常生活',
    explore: '探索',
    community: 'コミュニティ',
    gettingStarted: '🚀 始め方',
    visa: '🛂 ビザ・登録証',
    arcCard: '🪪 外国人登録証',
    simCard: '📱 SIMカード',
    bankAccount: '🏦 銀行口座開設',
    dailyLifePage: '☀️ 日常生活',
    housing: '🏠 住まいと家賃',
    health: '🏥 健康・保険',
    deliveryApps: '🛵 デリバリーアプリ',
    sendMoney: '💸 海外送金',
    partTimeJobs: '💼 アルバイト',
    culture: '🎎 カルチャー',
    transport: '🚇 交通',
    nearby: '📍 近くを探す',
    makingFriends: '🤝 友達を作ろう',
    emergencyKorean: '🆘 緊急韓国語',
    emergencyContacts: '📞 緊急連絡先',
  },
  vi: {
    setup: 'Bắt đầu',
    dailyLife: 'Cuộc sống',
    explore: 'Khám phá',
    community: 'Cộng đồng',
    gettingStarted: '🚀 Bắt đầu',
    visa: '🛂 Visa & ARC',
    arcCard: '🪪 Thẻ ARC',
    simCard: '📱 SIM',
    bankAccount: '🏦 Tài khoản ngân hàng',
    dailyLifePage: '☀️ Cuộc sống hàng ngày',
    housing: '🏠 Nhà ở & Thuê nhà',
    health: '🏥 Sức khỏe & Bảo hiểm',
    deliveryApps: '🛵 Ứng dụng giao đồ ăn',
    sendMoney: '💸 Chuyển tiền',
    partTimeJobs: '💼 Việc làm thêm',
    culture: '🎎 Văn hóa',
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
      label: L.setup,
      items: [
        { href: `/${lang}/getting-started`, label: L.gettingStarted },
        { href: `/${lang}/visa`, label: L.visa },
        { href: `/${lang}/arc-card-korea-guide`, label: L.arcCard },
        { href: `/${lang}/how-to-get-sim-card-in-korea`, label: L.simCard },
        { href: `/${lang}/best-bank-account-for-foreigners-korea`, label: L.bankAccount },
      ],
    },
    {
      label: L.dailyLife,
      items: [
        { href: `/${lang}/daily-life`, label: L.dailyLifePage },
        { href: `/${lang}/housing`, label: L.housing },
        { href: `/${lang}/health`, label: L.health },
        { href: `/${lang}/korea-delivery-apps-guide`, label: L.deliveryApps },
        { href: `/${lang}/how-to-send-money-from-korea`, label: L.sendMoney },
        { href: `/${lang}/part-time-jobs-korea`, label: L.partTimeJobs },
      ],
    },
    {
      label: L.explore,
      items: [
        { href: `/${lang}/culture`, label: L.culture },
        { href: `/${lang}/transport`, label: L.transport },
        { href: `/${lang}/nearby`, label: L.nearby },
        { href: `/${lang}/making-friends`, label: L.makingFriends },
        { href: `/${lang}/emergency-korean`, label: L.emergencyKorean },
        { href: `/${lang}/emergency-contacts`, label: L.emergencyContacts },
      ],
    },
    {
      label: L.community,
      href: `/${lang}/community`,
      items: [],
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

        {/* Desktop nav */}
        <div className="hidden gap-0.5 md:flex items-center">
          {groups.map((group) =>
            group.href ? (
              <Link
                key={group.label}
                href={group.href}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-rose-50 hover:text-rose-600"
              >
                {group.label}
              </Link>
            ) : (
              <NavDropdown key={group.label} label={group.label} items={group.items} />
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <SearchButton lang={lang} />
          <div className="hidden md:block">
            <LanguageSwitcher currentLang={lang} />
          </div>
          <MobileMenu groups={groups} currentLang={lang} />
        </div>
      </nav>
    </header>
  );
}
