import Link from 'next/link';
import type { Lang } from '@/lib/i18n';

type QuickStartProps = { lang: Lang };

type L = 'en' | 'zh' | 'ru' | 'ja';

type QuickItem = {
  href: string;
  eyebrow: Record<L, string>;
  title: Record<L, string>;
  description: Record<L, string>;
  icon: string;
  accent: string;
  bg: string;
  border: string;
  eyebrowColor: string;
  iconBg: string;
  learnMoreLabel?: Record<L, string>;
};

const OPEN_GUIDE: Record<L, string> = {
  en: 'Open guide',
  zh: '查看指南',
  ru: 'Открыть',
  ja: 'ガイドを開く',
};

const quickItems: QuickItem[] = [
  {
    href: '/getting-started',
    eyebrow: { en: 'New in Korea?', zh: '刚到韩国？', ru: 'Только приехали?', ja: '韓国に来たばかり？' },
    title: { en: 'Start Here', zh: '从这里开始', ru: 'Начните здесь', ja: 'まずはここから' },
    description: { en: 'SIM card, ARC, bank account basics', zh: 'SIM卡、外国人登录证、银行开户基础', ru: 'SIM-карта, ARC, основы банковского счёта', ja: 'SIMカード・ARC・銀行口座の基礎' },
    icon: '🚀',
    accent: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    eyebrowColor: 'text-rose-500',
    iconBg: 'bg-rose-100',
    learnMoreLabel: { en: 'Learn more', zh: '了解更多', ru: 'Подробнее', ja: '詳しく見る' },
  },
  {
    href: '/housing',
    eyebrow: { en: 'Looking for housing?', zh: '在找住房？', ru: 'Ищете жильё?', ja: '住む場所を探している？' },
    title: { en: 'Find a Place', zh: '找房子', ru: 'Найти жильё', ja: '住まいを探す' },
    description: { en: 'Deposits, rent, and contract basics', zh: '保证金、租金和合同基础知识', ru: 'Залог, аренда и основы договора', ja: '保証金・家賃・契約の基礎' },
    icon: '🏠',
    accent: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    eyebrowColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
    learnMoreLabel: { en: 'Learn more', zh: '了解更多', ru: 'Подробнее', ja: '詳しく見る' },
  },
  {
    href: '/daily-life',
    eyebrow: { en: 'Need daily tips?', zh: '需要日常生活指南？', ru: 'Нужны советы на каждый день?', ja: '日常生活のヒントが必要？' },
    title: { en: 'Daily Life', zh: '日常生活', ru: 'Повседневная жизнь', ja: '日常生活' },
    description: { en: 'Transport, delivery apps, and essentials', zh: '交通、外卖App和日常必备', ru: 'Транспорт, приложения доставки и всё важное', ja: '交通・デリバリーアプリ・生活必需品' },
    icon: '🌆',
    accent: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    eyebrowColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    learnMoreLabel: { en: 'Learn more', zh: '了解更多', ru: 'Подробнее', ja: '詳しく見る' },
  },
  {
    href: '/nearby',
    eyebrow: { en: 'Where can I find…?', zh: '在哪里可以找到…？', ru: 'Где найти…?', ja: 'どこで見つかる…？' },
    title: { en: 'Nearby Places', zh: '查找周边', ru: 'Рядом со мной', ja: '近くの場所' },
    description: { en: 'Bank · Pharmacy · Mart · Trash bags · T-money', zh: '银行 · 药店 · 超市 · 垃圾袋 · T-money', ru: 'Банк · Аптека · Магазин · Пакеты · T-money', ja: '銀行 · 薬局 · スーパー · ゴミ袋 · T-money' },
    icon: '📍',
    accent: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    eyebrowColor: 'text-violet-600',
    iconBg: 'bg-violet-100',
    learnMoreLabel: { en: 'Learn more', zh: '了解更多', ru: 'Подробнее', ja: '詳しく見る' },
  },
];

export default function QuickStart({ lang }: QuickStartProps) {
  const l = (lang as L) in { en: 1, zh: 1, ru: 1, ja: 1 } ? (lang as L) : 'en';

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickItems.map((item) => (
          <div
            key={item.href}
            className={`group relative overflow-hidden rounded-2xl border ${item.border} ${item.bg} p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className={`text-sm font-semibold ${item.eyebrowColor}`}>{item.eyebrow[l]}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{item.title[l]}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description[l]}</p>
              </div>
              <div className={`ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg} text-2xl`}>
                {item.icon}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link
                href={`/${lang}${item.href}`}
                className="inline-flex items-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                {OPEN_GUIDE[l]}
              </Link>
            </div>

            <div className={`mt-4 flex items-center gap-1 text-sm font-semibold ${item.eyebrowColor} opacity-0 transition-all group-hover:opacity-100`}>
              <span>{item.learnMoreLabel?.[l] ?? 'Learn more'}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
