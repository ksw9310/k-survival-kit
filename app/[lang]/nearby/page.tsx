import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import NearbyPlacesClient from '@/components/NearbyPlacesClient';

type Props = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ category?: string }>;
};

type L = 'en' | 'zh' | 'ru' | 'ja';
const loc = (lang: string, m: Record<L, string>) => m[lang as L] ?? m.en;

const META_TITLE: Record<L, string> = {
  en: 'Find Nearby | K-Survival Kit',
  zh: '查找周边 | K-Survival Kit',
  ru: 'Найти рядом | K-Survival Kit',
  ja: '近くを探す | K-Survival Kit',
};
const META_DESC: Record<L, string> = {
  en: 'Find the nearest bank, pharmacy, supermarket, and convenience store based on your current location.',
  zh: '根据您的当前位置查找附近的银行、药店、大型超市和便利店。',
  ru: 'Найдите ближайший банк, аптеку, супермаркет и магазин рядом с вами.',
  ja: '現在地から近くの銀行・薬局・スーパー・コンビニを検索できます。',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return {
    title: loc(lang, META_TITLE),
    description: loc(lang, META_DESC),
  };
}

type PageStrings = {
  pageTitle: string;
  pageDesc: string;
  categories: { icon: string; label: string; desc: string }[];
  infoTitle: string;
  infoItems: { icon: string; label: string; body: string }[];
};

const PAGE_CONTENT: Record<L, PageStrings> = {
  en: {
    pageTitle: 'Find Nearby',
    pageDesc:
      'Find the nearest bank, pharmacy, supermarket, and convenience store within 1km of your location, sorted by distance.',
    categories: [
      { icon: '🏦', label: 'Bank', desc: 'Account opening · Banking' },
      { icon: '💊', label: 'Pharmacy', desc: 'Prescription · OTC medicine' },
      { icon: '🛒', label: 'Supermarket', desc: 'Groceries · Household goods' },
      {
        icon: '🏪',
        label: 'Convenience Store',
        desc: 'Trash bags · T-money card',
      },
    ],
    infoTitle: '💡 Useful Information',
    infoItems: [
      {
        icon: '🗑️',
        label: 'Trash bags (종량제)',
        body: 'You must buy bags matching your registered district (구). Sold at most convenience stores (GS25, CU, 7-Eleven, etc.).',
      },
      {
        icon: '🚌',
        label: 'T-money card',
        body: 'Available at convenience stores and subway station service centers. Works on buses and subways nationwide once issued.',
      },
      {
        icon: '🏦',
        label: 'Foreign bank account',
        body: 'Bring your passport and ARC card. Woori Bank and Shinhan Bank are well-known for foreigner services.',
      },
      {
        icon: '💊',
        label: 'Pharmacy',
        body: 'Many OTC medicines are available without a prescription, including headache, digestive, and cold medicine. Some are also sold at convenience stores.',
      },
    ],
  },
  zh: {
    pageTitle: '查找周边',
    pageDesc:
      '根据您的当前位置，查找周边1km内的银行、药店、大型超市和便利店，按距离排序显示。',
    categories: [
      { icon: '🏦', label: '银行', desc: '开户 · 银行业务' },
      { icon: '💊', label: '药店', desc: '处方 · OTC非处方药' },
      { icon: '🛒', label: '大型超市', desc: '食品 · 日常用品' },
      { icon: '🏪', label: '便利店', desc: '垃圾袋 · T-money交通卡' },
    ],
    infoTitle: '💡 实用信息',
    infoItems: [
      {
        icon: '🗑️',
        label: '垃圾袋（종량제）',
        body: '必须购买与住址所在区（구）对应的垃圾袋。GS25、CU、7-Eleven等大部分便利店均有销售。',
      },
      {
        icon: '🚌',
        label: 'T-money交通卡',
        body: '便利店和地铁站客服中心均可购买，发卡后可在全国公交和地铁使用。',
      },
      {
        icon: '🏦',
        label: '外国人银行开户',
        body: '需携带护照和外国人登录证（ARC卡）。友利银行和新韩银行的外国人服务较为完善。',
      },
      {
        icon: '💊',
        label: '药店',
        body: '多种OTC药品无需处方即可购买，包括头痛药、消化药、感冒药等。部分药品在便利店也有销售。',
      },
    ],
  },
  ru: {
    pageTitle: 'Найти рядом',
    pageDesc:
      'Найдите ближайший банк, аптеку, супермаркет и магазин в радиусе 1 км от вас, отсортированные по расстоянию.',
    categories: [
      { icon: '🏦', label: 'Банк', desc: 'Открытие счёта · Услуги' },
      { icon: '💊', label: 'Аптека', desc: 'Рецептурные · OTC препараты' },
      { icon: '🛒', label: 'Супермаркет', desc: 'Продукты · Товары для дома' },
      { icon: '🏪', label: 'Магазин', desc: 'Мусорные пакеты · Карта T-money' },
    ],
    infoTitle: '💡 Полезная информация',
    infoItems: [
      {
        icon: '🗑️',
        label: 'Мусорные пакеты (종량제)',
        body: 'Нужно купить пакеты, соответствующие вашему зарегистрированному району (구). Продаются в большинстве магазинов (GS25, CU, 7-Eleven и др.).',
      },
      {
        icon: '🚌',
        label: 'Карта T-money',
        body: 'Доступна в магазинах и клиентских центрах станций метро. После получения действует на автобусах и метро по всей стране.',
      },
      {
        icon: '🏦',
        label: 'Счёт в банке для иностранцев',
        body: 'Нужны паспорт и карта ARC. Woori Bank и Shinhan Bank хорошо известны услугами для иностранцев.',
      },
      {
        icon: '💊',
        label: 'Аптека',
        body: 'Многие препараты OTC доступны без рецепта, включая средства от головной боли, для пищеварения и от простуды. Часть продаётся и в магазинах.',
      },
    ],
  },
  ja: {
    pageTitle: '近くを探す',
    pageDesc:
      '現在地から1km以内の銀行・薬局・スーパー・コンビニを距離順で表示します。',
    categories: [
      { icon: '🏦', label: '銀行', desc: '口座開設 · 各種手続き' },
      { icon: '💊', label: '薬局', desc: '処方箋 · 市販薬' },
      { icon: '🛒', label: 'スーパー', desc: '食品 · 日用品' },
      { icon: '🏪', label: 'コンビニ', desc: 'ゴミ袋 · T-moneyカード' },
    ],
    infoTitle: '💡 知っておくと便利な情報',
    infoItems: [
      {
        icon: '🗑️',
        label: '指定ゴミ袋（종량제）',
        body: '住民登録住所の区（구）に対応した袋を購入する必要があります。GS25・CU・7-Elevenなどのコンビニで販売しています。',
      },
      {
        icon: '🚌',
        label: 'T-moneyカード',
        body: 'コンビニや地下鉄駅のカスタマーセンターで購入できます。一度発行すれば全国のバス・地下鉄で使用可能です。',
      },
      {
        icon: '🏦',
        label: '外国人の銀行口座開設',
        body: 'パスポートと外国人登録証（ARCカード）が必要です。ウリ銀行・新韓銀行は外国人向けサービスが充実しています。',
      },
      {
        icon: '💊',
        label: '薬局',
        body: '頭痛薬・消化薬・風邪薬など、処方箋なしで購入できる市販薬が豊富です。一部はコンビニでも販売しています。',
      },
    ],
  },
};

const VALID_CATEGORIES = ['bank', 'pharmacy', 'supermarket', 'convenience'];

export default async function NearbyPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const { category } = await searchParams;
  const initialCategory = VALID_CATEGORIES.includes(category ?? '')
    ? category!
    : 'bank';

  if (!isValidLocale(lang)) notFound();

  const c = PAGE_CONTENT[(lang as L) in PAGE_CONTENT ? (lang as L) : 'en'];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-3xl">📍</span>
            <h1 className="text-3xl font-black text-slate-900">
              {c.pageTitle}
            </h1>
          </div>
          <p className="mt-2 text-slate-500 text-sm leading-6">{c.pageDesc}</p>

          {/* Category legend */}
          <div className="mt-5 flex flex-wrap gap-3">
            {c.categories.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-sm"
              >
                <span>{item.icon}</span>
                <div>
                  <span className="font-semibold text-slate-800">
                    {item.label}
                  </span>
                  <span className="ml-1.5 text-slate-500">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-3xl px-6 py-8">
        <NearbyPlacesClient initialCategory={initialCategory} lang={lang} />

        {/* Info box */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-800 mb-3">{c.infoTitle}</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {c.infoItems.map((item) => (
              <li key={item.icon} className="flex gap-2">
                <span className="shrink-0">{item.icon}</span>
                <span>
                  <strong>{item.label}</strong> {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
