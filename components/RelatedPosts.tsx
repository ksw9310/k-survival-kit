import Link from 'next/link';

type L = 'en' | 'zh' | 'ru' | 'ja';

type RelatedPost = {
  href: string;
  icon: string;
  eyebrow: Record<L, string>;
  title: Record<L, string>;
  description: Record<L, string>;
};

type RelatedPostsProps = {
  lang: string;
  current: string;
};

const READ_NEXT: Record<L, string> = {
  en: 'Read Next',
  zh: '继续阅读',
  ru: 'Читать далее',
  ja: '次に読む',
};

const allRelated: Record<string, RelatedPost> = {
  'getting-started': {
    href: '/getting-started',
    icon: '🚀',
    eyebrow: { en: 'First Steps', zh: '入门须知', ru: 'С чего начать', ja: 'はじめの一歩' },
    title: { en: 'Getting Started', zh: '入门指南', ru: 'Начало', ja: '始め方' },
    description: {
      en: 'ARC card, SIM card, bank account, and first-week essentials.',
      zh: 'ARC卡、SIM卡、银行开户及第一周必知事项。',
      ru: 'Карта ARC, SIM-карта, банковский счёт и главное на первой неделе.',
      ja: 'ARCカード・SIMカード・銀行口座など到着後1週間の必須事項。',
    },
  },
  'daily-life': {
    href: '/daily-life',
    icon: '🌆',
    eyebrow: { en: 'Everyday', zh: '日常生活', ru: 'Быт', ja: '日常生活' },
    title: { en: 'Daily Life', zh: '日常生活指南', ru: 'Повседневная жизнь', ja: '日常生活ガイド' },
    description: {
      en: 'Transport, groceries, delivery apps, and trash rules.',
      zh: '交通、购物、外卖App及垃圾分类规则。',
      ru: 'Транспорт, продукты, приложения доставки и правила вывоза мусора.',
      ja: '交通・買い物・デリバリーアプリ・ゴミ分別ルール。',
    },
  },
  health: {
    href: '/health',
    icon: '🏥',
    eyebrow: { en: 'Medical', zh: '医疗', ru: 'Здоровье', ja: '医療' },
    title: { en: 'Health & Emergency', zh: '医疗与紧急情况', ru: 'Здоровье и экстренные случаи', ja: '健康・緊急対応' },
    description: {
      en: 'Hospitals, insurance, pharmacies, and emergency contacts.',
      zh: '医院、保险、药店及紧急联系方式。',
      ru: 'Больницы, страховка, аптеки и экстренные номера.',
      ja: '病院・保険・薬局・緊急連絡先。',
    },
  },
  housing: {
    href: '/housing',
    icon: '🏠',
    eyebrow: { en: 'Where you live', zh: '住所', ru: 'Жильё', ja: '住まい' },
    title: { en: 'Housing Guide', zh: '住房指南', ru: 'Гайд по жилью', ja: '住まいガイド' },
    description: {
      en: 'Dorms, one-rooms, deposits, and rental contracts.',
      zh: '宿舍、单间、押金及租房合同须知。',
      ru: 'Общежития, однокомнатные квартиры, депозиты и аренда.',
      ja: '寮・ワンルーム・保証金・賃貸契約の基礎知識。',
    },
  },
  culture: {
    href: '/culture',
    icon: '🎎',
    eyebrow: { en: 'Life tips', zh: '生活技巧', ru: 'Советы', ja: '生活tips' },
    title: { en: 'Culture & Etiquette', zh: '文化与礼仪', ru: 'Культура и этикет', ja: '文化・マナー' },
    description: {
      en: 'Basic etiquette, social rules, and public manners.',
      zh: '基本礼仪、社交规则及公共场合礼节。',
      ru: 'Базовый этикет, социальные нормы и правила поведения в общественных местах.',
      ja: '基本的なマナー・社会的ルール・公共の場での振る舞い。',
    },
  },
  visa: {
    href: '/visa',
    icon: '🛂',
    eyebrow: { en: 'Stay legal', zh: '签证合法', ru: 'Легальный статус', ja: 'ビザ' },
    title: { en: 'Visa & Immigration', zh: '签证与出入境', ru: 'Виза и иммиграция', ja: 'ビザ・在留資格' },
    description: {
      en: 'Visa types, ARC card, extensions, and immigration rules.',
      zh: '签证类型、ARC卡、延签及出入境法规。',
      ru: 'Типы виз, карта ARC, продление и правила иммиграции.',
      ja: 'ビザの種類・ARCカード・延長・在留ルール。',
    },
  },
  'arc-card-korea-guide': {
    href: '/arc-card-korea-guide',
    icon: '🪪',
    eyebrow: { en: 'Guide', zh: '指南', ru: 'Гайд', ja: 'ガイド' },
    title: {
      en: 'ARC Card Guide',
      zh: '外国人登录证(ARC)申请指南',
      ru: 'Гайд по карте ARC',
      ja: '外国人登録証（ARC）ガイド',
    },
    description: {
      en: 'Step-by-step guide to getting your ARC card in Korea.',
      zh: '在韩国办理外国人登录证的完整流程。',
      ru: 'Пошаговое руководство по получению карты ARC в Корее.',
      ja: '韓国でARCカードを取得するためのステップバイステップガイド。',
    },
  },
  'best-bank-account-for-foreigners-korea': {
    href: '/best-bank-account-for-foreigners-korea',
    icon: '🏦',
    eyebrow: { en: 'Banking', zh: '银行', ru: 'Банки', ja: '銀行' },
    title: {
      en: 'Best Bank Account',
      zh: '最佳银行账户',
      ru: 'Лучший банк',
      ja: 'おすすめ銀行口座',
    },
    description: {
      en: 'Which Korean bank account is easiest for foreigners to open.',
      zh: '外国人最容易开户的韩国银行账户。',
      ru: 'Какой корейский банк проще всего открыть иностранцу.',
      ja: '外国人が最も開設しやすい韓国の銀行口座。',
    },
  },
  'how-to-get-sim-card-in-korea': {
    href: '/how-to-get-sim-card-in-korea',
    icon: '📱',
    eyebrow: { en: 'SIM Card', zh: 'SIM卡', ru: 'SIM-карта', ja: 'SIMカード' },
    title: {
      en: 'SIM Card in Korea',
      zh: '韩国SIM卡购买指南',
      ru: 'SIM-карта в Корее',
      ja: '韓国でSIMカードを取得する方法',
    },
    description: {
      en: 'How to get a SIM card or eSIM as a foreigner in Korea.',
      zh: '外国人在韩国购买SIM卡或eSIM的方法。',
      ru: 'Как купить SIM-карту или eSIM в Корее иностранцу.',
      ja: '外国人として韓国でSIMカード・eSIMを取得する方法。',
    },
  },
  'korea-delivery-apps-guide': {
    href: '/korea-delivery-apps-guide',
    icon: '🛵',
    eyebrow: { en: 'Apps', zh: '外卖App', ru: 'Приложения', ja: 'アプリ' },
    title: {
      en: 'Korea Delivery Apps',
      zh: '韩国外卖App指南',
      ru: 'Приложения доставки еды',
      ja: '韓国デリバリーアプリ',
    },
    description: {
      en: 'Baemin, Coupang Eats, and how to use them as a foreigner.',
      zh: 'Baemin、Coupang Eats外国人使用全攻略。',
      ru: 'Baemin, Coupang Eats и как пользоваться ими иностранцу.',
      ja: 'Baemin・Coupang Eatsを外国人として使う方法。',
    },
  },
  'korea-rent-deposit-system': {
    href: '/korea-rent-deposit-system',
    icon: '🏘️',
    eyebrow: { en: 'Housing', zh: '住房', ru: 'Жильё', ja: '住まい' },
    title: {
      en: 'Rent Deposit System',
      zh: '租房保证金制度',
      ru: 'Система аренды жилья',
      ja: '賃貸保証金制度',
    },
    description: {
      en: "Jeonse vs Wolse — Korea's unique rental deposit system explained.",
      zh: '全税vs月租——韩国独特的租房保证金制度详解。',
      ru: 'Чонсэ и вольсэ — уникальная корейская система аренды жилья.',
      ja: 'チョンセとウォルセ — 韓国独自の賃貸保証金制度を解説。',
    },
  },
  'how-to-send-money-from-korea': {
    href: '/how-to-send-money-from-korea',
    icon: '💸',
    eyebrow: { en: 'Money', zh: '汇款', ru: 'Деньги', ja: '送金' },
    title: {
      en: 'Send Money from Korea',
      zh: '从韩国向海外汇款',
      ru: 'Отправить деньги из Кореи',
      ja: '韓国から海外送金',
    },
    description: {
      en: 'Cheapest way to send money abroad from Korea — Wise vs Korean banks explained.',
      zh: '从韩国向海外汇款最省钱的方式——Wise与韩国银行对比。',
      ru: 'Самый дешёвый способ отправить деньги из Кореи — Wise против корейских банков.',
      ja: '韓国から海外送金の最安値方法 — Wiseと韓国銀行の比較。',
    },
  },
};

const relatedMap: Record<string, string[]> = {
  'getting-started': ['arc-card-korea-guide', 'how-to-get-sim-card-in-korea', 'best-bank-account-for-foreigners-korea'],
  'daily-life': ['korea-delivery-apps-guide', 'housing', 'culture'],
  health: ['getting-started', 'visa', 'housing'],
  housing: ['korea-rent-deposit-system', 'getting-started', 'visa'],
  culture: ['daily-life', 'getting-started', 'health'],
  visa: ['arc-card-korea-guide', 'getting-started', 'best-bank-account-for-foreigners-korea'],
  'arc-card-korea-guide': ['visa', 'how-to-get-sim-card-in-korea', 'best-bank-account-for-foreigners-korea'],
  'best-bank-account-for-foreigners-korea': ['arc-card-korea-guide', 'how-to-send-money-from-korea', 'how-to-get-sim-card-in-korea'],
  'how-to-get-sim-card-in-korea': ['arc-card-korea-guide', 'best-bank-account-for-foreigners-korea', 'korea-delivery-apps-guide'],
  'korea-delivery-apps-guide': ['daily-life', 'how-to-get-sim-card-in-korea', 'best-bank-account-for-foreigners-korea'],
  'korea-rent-deposit-system': ['housing', 'visa', 'getting-started'],
  'how-to-send-money-from-korea': ['best-bank-account-for-foreigners-korea', 'arc-card-korea-guide', 'getting-started'],
};

function loc<T>(obj: Record<L, T>, lang: string): T {
  return obj[(lang as L) in obj ? (lang as L) : 'en'];
}

export default function RelatedPosts({ lang, current }: RelatedPostsProps) {
  const keys = relatedMap[current] ?? [];
  const posts = keys.map((k) => allRelated[k]).filter(Boolean);

  if (posts.length === 0) return null;

  const readNext = READ_NEXT[(lang as L) in READ_NEXT ? (lang as L) : 'en'];

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            {readNext}
          </h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={`/${lang}${post.href}`}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl transition-colors group-hover:bg-rose-50">
                {post.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                  {loc(post.eyebrow, lang)}
                </p>
                <h3 className="mt-0.5 font-bold text-slate-900 group-hover:text-rose-600">
                  {loc(post.title, lang)}
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  {loc(post.description, lang)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
