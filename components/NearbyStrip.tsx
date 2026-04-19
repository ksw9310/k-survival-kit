import Link from 'next/link';

type L = 'en' | 'zh' | 'ru' | 'ja';

type NearbyItem = {
  icon: string;
  label: string;
  category: string;
  hint?: string; // optional: overrides auto-translated hint
};

type TitleKey = 'nearby' | 'healthcare' | 'services';

type Props = {
  lang: string;
  items: NearbyItem[];
  titleKey?: TitleKey;
  title?: string; // fallback if no titleKey
};

const TITLES: Record<L, Record<TitleKey, string>> = {
  en: { nearby: 'Find Nearby', healthcare: 'Find Nearby Healthcare', services: 'Find Nearby Services' },
  zh: { nearby: '查找周边', healthcare: '查找附近医疗', services: '查找周边服务' },
  ru: { nearby: 'Рядом со мной', healthcare: 'Медицина рядом', services: 'Услуги рядом' },
  ja: { nearby: '近くを探す', healthcare: '近くの医療機関', services: '近くのサービス' },
};

const ITEM_LABELS: Record<L, Record<string, string>> = {
  en: { bank: 'Bank', convenience: 'Convenience Store', supermarket: 'Supermarket', pharmacy: 'Pharmacy' },
  zh: { bank: '银行', convenience: '便利店', supermarket: '大型超市', pharmacy: '药店' },
  ru: { bank: 'Банк', convenience: 'Магазин', supermarket: 'Супермаркет', pharmacy: 'Аптека' },
  ja: { bank: '銀行', convenience: 'コンビニ', supermarket: 'スーパー', pharmacy: '薬局' },
};

const HINTS: Record<L, Record<string, string>> = {
  en: {
    bank: 'Account opening · Foreigner services',
    convenience: 'T-money card · Trash bags',
    supermarket: 'E-Mart · Homeplus · Lotte Mart',
    pharmacy: 'OTC medicine · No prescription needed',
  },
  zh: {
    bank: '开户 · 外国人服务',
    convenience: 'T-money卡 · 垃圾袋',
    supermarket: '易买得 · 家乐福 · 乐天超市',
    pharmacy: 'OTC非处方药 · 无需处方',
  },
  ru: {
    bank: 'Открытие счёта · Для иностранцев',
    convenience: 'Карта T-money · Мусорные пакеты',
    supermarket: 'E-Mart · Homeplus · Lotte Mart',
    pharmacy: 'Препараты без рецепта · OTC',
  },
  ja: {
    bank: '口座開設 · 外国人サービス',
    convenience: 'T-moneyカード · ゴミ袋',
    supermarket: 'イーマート · ホームプラス · ロッテマート',
    pharmacy: '市販薬 · 処方箋不要',
  },
};

export default function NearbyStrip({ lang, items, titleKey, title }: Props) {
  const l: L = (lang as L) in TITLES ? (lang as L) : 'en';
  const resolvedTitle = titleKey ? TITLES[l][titleKey] : (title ?? TITLES[l].nearby);

  return (
    <section className="border-t border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
          📍 {resolvedTitle}
        </p>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <Link
              key={item.category}
              href={`/${lang}/nearby?category=${item.category}`}
              className="group inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {ITEM_LABELS[l][item.category] ?? item.label}
                </p>
                <p className="text-xs text-slate-400">
                  {item.hint ?? HINTS[l][item.category] ?? ''}
                </p>
              </div>
              <span className="ml-1 text-blue-400 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
