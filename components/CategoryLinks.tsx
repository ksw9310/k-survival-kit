import Link from 'next/link';
import { getDictionary } from '@/data';
import type { Lang } from '@/lib/i18n';

type L = 'en' | 'zh' | 'ru' | 'ja';

const TAG_LABELS: Record<string, Record<L, string>> = {
  'Start here': { en: 'Start here', zh: '从这里', ru: 'Старт', ja: 'まずここ' },
  Everyday: { en: 'Everyday', zh: '日常', ru: 'Каждый день', ja: '毎日' },
  Important: { en: 'Important', zh: '重要', ru: 'Важно', ja: '重要' },
  Essential: { en: 'Essential', zh: '必须', ru: 'Нужно', ja: '必須' },
  'Life tips': {
    en: 'Life tips',
    zh: '生活技巧',
    ru: 'Советы',
    ja: 'ライフtips',
  },
  'Stay legal': { en: 'Stay legal', zh: '合法居留', ru: 'Виза', ja: '在留' },
  Guide: { en: 'Guide', zh: '指南', ru: 'Гайд', ja: 'ガイド' },
};

const EXPLORE_LABEL: Record<L, string> = {
  en: 'Explore guide',
  zh: '查看指南',
  ru: 'Открыть',
  ja: 'ガイドを開く',
};

const EXPLORE_HOVER: Record<L, string> = {
  en: 'Explore',
  zh: '查看',
  ru: 'Открыть',
  ja: '開く',
};

const categoryMeta: Record<
  string,
  {
    icon: string;
    gradient: string;
    hoverBorder: string;
    hoverText: string;
    tag: string;
  }
> = {
  '/getting-started': {
    icon: '🚀',
    gradient: 'from-rose-500 to-pink-500',
    hoverBorder: 'hover:border-rose-200',
    hoverText: 'group-hover:text-rose-600',
    tag: 'Start here',
  },
  '/daily-life': {
    icon: '🌆',
    gradient: 'from-emerald-500 to-teal-500',
    hoverBorder: 'hover:border-emerald-200',
    hoverText: 'group-hover:text-emerald-600',
    tag: 'Everyday',
  },
  '/health': {
    icon: '🏥',
    gradient: 'from-red-500 to-orange-500',
    hoverBorder: 'hover:border-red-200',
    hoverText: 'group-hover:text-red-600',
    tag: 'Important',
  },
  '/housing': {
    icon: '🏠',
    gradient: 'from-blue-500 to-indigo-500',
    hoverBorder: 'hover:border-blue-200',
    hoverText: 'group-hover:text-blue-600',
    tag: 'Essential',
  },
  '/culture': {
    icon: '🎎',
    gradient: 'from-violet-500 to-purple-500',
    hoverBorder: 'hover:border-violet-200',
    hoverText: 'group-hover:text-violet-600',
    tag: 'Life tips',
  },
  '/visa': {
    icon: '🛂',
    gradient: 'from-amber-500 to-orange-500',
    hoverBorder: 'hover:border-amber-200',
    hoverText: 'group-hover:text-amber-600',
    tag: 'Stay legal',
  },
};

const fallbackMeta = {
  icon: '📌',
  gradient: 'from-slate-500 to-slate-600',
  hoverBorder: 'hover:border-slate-200',
  hoverText: 'group-hover:text-slate-600',
  tag: 'Guide',
};

export default function CategoryLinks({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).common;
  const home = getDictionary(lang).homeContent;
  const l: L = (lang as L) in TAG_LABELS['Start here'] ? (lang as L) : 'en';

  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-slate-900">
            {t.category.title}
          </h2>
          <p className="mt-2 text-slate-500">{t.category.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {home.categories.map((category) => {
            const meta = categoryMeta[category.href] ?? fallbackMeta;

            return (
              <div
                key={category.href}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${meta.hoverBorder}`}
              >
                <div
                  className={`absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b ${meta.gradient}`}
                />

                <div className="flex items-start gap-4 pl-3">
                  <div className="text-3xl">{meta.icon}</div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-lg font-bold text-slate-900 transition-colors ${meta.hoverText}`}
                      >
                        {category.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                        {TAG_LABELS[meta.tag]?.[l] ?? meta.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 pl-3">
                  <Link
                    href={`/${lang}${category.href}`}
                    className="inline-flex items-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {EXPLORE_LABEL[l]}
                  </Link>
                </div>

                <div className="mt-4 flex items-center gap-1 pl-3 text-xs font-semibold text-slate-400 opacity-0 transition-all group-hover:opacity-100">
                  <span>{EXPLORE_HOVER[l]}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
