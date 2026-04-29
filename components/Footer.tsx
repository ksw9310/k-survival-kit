import Link from 'next/link';
import { getDictionary } from '@/data';
import type { Lang } from '@/lib/i18n';

type L = 'en' | 'zh' | 'ru' | 'ja';

const AFFILIATE_DISCLOSURE: Record<L, string> = {
  en: 'This site contains affiliate links. We may earn a small commission at no extra cost to you when you make a purchase through our links.',
  zh: '本站包含联盟推广链接。您通过链接购买时，我们可能会获得少量佣金，对您不产生任何额外费用。',
  ru: 'Этот сайт содержит партнёрские ссылки. При покупке через наши ссылки мы можем получить небольшую комиссию — без дополнительных затрат для вас.',
  ja: '当サイトにはアフィリエイトリンクが含まれています。リンクを通じてご購入いただいた場合、追加費用なしで少額の手数料が発生することがあります。',
};

const EXTRA_LABELS: Record<
  L,
  {
    nearby: string;
    transport: string;
    emergencyKorean: string;
    emergencyContacts: string;
    about: string;
    terms: string;
    makingFriends: string;
  }
> = {
  en: {
    nearby: 'Find Nearby',
    transport: 'Transport',
    emergencyKorean: 'Emergency Korean',
    emergencyContacts: 'Emergency Contacts',
    about: 'About',
    terms: 'Terms of Use',
    makingFriends: 'Making Friends',
  },
  zh: {
    nearby: '查找周边',
    transport: '交通指南',
    emergencyKorean: '紧急韩语',
    emergencyContacts: '紧急联系电话',
    about: '关于',
    terms: '使用条款',
    makingFriends: '交朋友',
  },
  ru: {
    nearby: 'Рядом со мной',
    transport: 'Транспорт',
    emergencyKorean: 'Экстренные фразы',
    emergencyContacts: 'Экстренные контакты',
    about: 'О нас',
    terms: 'Условия',
    makingFriends: 'Знакомства',
  },
  ja: {
    nearby: '近くを探す',
    transport: '交通ガイド',
    emergencyKorean: '緊急韓国語',
    emergencyContacts: '緊急連絡先',
    about: 'About',
    terms: '利用規約',
    makingFriends: '友達を作ろう',
  },
};

export default function Footer({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).common;
  const ex = EXTRA_LABELS[(lang as L) in EXTRA_LABELS ? (lang as L) : 'en'];
  const disclosure = AFFILIATE_DISCLOSURE[(lang as L) in AFFILIATE_DISCLOSURE ? (lang as L) : 'en'];

  const links = [
    { href: `/${lang}/getting-started`, label: t.nav.gettingStarted },
    { href: `/${lang}/daily-life`, label: t.nav.dailyLife },
    { href: `/${lang}/health`, label: t.nav.health },
    { href: `/${lang}/housing`, label: t.nav.housing },
    { href: `/${lang}/culture`, label: t.nav.culture },
    { href: `/${lang}/visa`, label: t.nav.visa },
    { href: `/${lang}/nearby`, label: ex.nearby },
    { href: `/${lang}/transport`, label: ex.transport },
    { href: `/${lang}/emergency-korean`, label: ex.emergencyKorean },
    { href: `/${lang}/emergency-contacts`, label: ex.emergencyContacts },
    { href: `/${lang}/making-friends`, label: ex.makingFriends },
  ];

  return (
    <footer className="bg-slate-950 px-6 pt-12 pb-8 text-sm text-slate-400">
      <div className="mx-auto max-w-6xl">
        {/* Top row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-lg font-extrabold text-white">
              🎒 K-<span className="text-rose-400">Survival</span> Kit
            </p>
            <p className="mt-2 leading-6 text-slate-400">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 transition-colors hover:text-rose-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Business Info (사업자 정보) */}
        <div className="mb-6 text-xs leading-6 text-slate-500">
          {/* Mobile: one-line */}
          <p className="md:hidden">
            케이빌드랩 (KBuild Lab) &nbsp;|&nbsp; 사업자등록번호: 843-12-02937
          </p>
          {/* Desktop: full */}
          <div className="hidden md:block">
            <p className="font-semibold text-slate-400">사업자 정보</p>
            <p>상호명: 케이빌드랩 (KBuild Lab) &nbsp;|&nbsp; 대표자: 강상욱 &nbsp;|&nbsp; 사업자등록번호: 843-12-02937</p>
            <p>사업장 소재지: 인천광역시 서구 청라한내로72번길 7-29, 1909호(청라동, 인천청라 골드클래스2차 오피스텔)</p>
            <p>업태: 도매 및 소매업 &nbsp;|&nbsp; 종목: 전자상거래 소매업 &nbsp;|&nbsp; 과세유형: 간이과세자</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 border-t border-slate-800" />

        {/* Affiliate disclosure */}
        <p className="mb-6 text-xs leading-5 text-slate-600">{disclosure}</p>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-2 text-center text-xs text-slate-500 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()} K-Survival Kit · Always Free</p>
            <span className="hidden text-slate-700 md:inline">·</span>
            <Link
              href={`/${lang}/about`}
              className="transition-colors hover:text-rose-400"
            >
              {ex.about}
            </Link>
            <span className="hidden text-slate-700 md:inline">·</span>
            <Link
              href={`/${lang}/terms`}
              className="transition-colors hover:text-rose-400"
            >
              {ex.terms}
            </Link>
          </div>
          <p className="max-w-md">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
