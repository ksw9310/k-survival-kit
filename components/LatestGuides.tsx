import Link from 'next/link';

type L = 'en' | 'zh' | 'ru' | 'ja' | 'vi';

type Guide = {
  href: string;
  icon: string;
  badge?: Record<L, string>;
  eyebrow: Record<L, string>;
  title: Record<L, string>;
  description: Record<L, string>;
};

type UI = {
  eyebrow: string;
  heading: string;
  subheading: string;
  readGuide: string;
};

const UI_STRINGS: Record<L, UI> = {
  en: {
    eyebrow: 'Practical Guides',
    heading: 'Latest Guides',
    subheading: 'In-depth articles on the most important topics for foreigners in Korea.',
    readGuide: 'Read guide',
  },
  zh: {
    eyebrow: '实用指南',
    heading: '最新指南',
    subheading: '针对在韩外国人最重要话题的深度文章。',
    readGuide: '阅读指南',
  },
  ru: {
    eyebrow: 'Практические гайды',
    heading: 'Последние гайды',
    subheading: 'Подробные статьи по самым важным темам для иностранцев в Корее.',
    readGuide: 'Читать гайд',
  },
  ja: {
    eyebrow: '実用ガイド',
    heading: '最新ガイド',
    subheading: '韓国在住外国人に最も重要なトピックの詳細記事。',
    readGuide: 'ガイドを読む',
  },
  vi: {
    eyebrow: 'Hướng dẫn thực tế',
    heading: 'Hướng dẫn mới nhất',
    subheading: 'Bài viết chuyên sâu về các chủ đề quan trọng nhất cho người nước ngoài tại Hàn Quốc.',
    readGuide: 'Đọc hướng dẫn',
  },
};

const guides: Guide[] = [
  {
    href: '/arc-card-korea-guide',
    icon: '🪪',
    badge: {
      en: 'Must-read',
      zh: '必读',
      ru: 'Обязательно',
      ja: '必読',
      vi: 'Phải đọc',
    },
    eyebrow: {
      en: 'Identity',
      zh: '身份证明',
      ru: 'Документы',
      ja: '在留証明',
      vi: 'Giấy tờ',
    },
    title: {
      en: 'How to Get Your ARC Card in Korea',
      zh: '在韩国如何办理外国人登录证(ARC)',
      ru: 'Как получить карту ARC в Корее',
      ja: '韓国で外国人登録証（ARC）を取得する方法',
      vi: 'Cách làm thẻ ARC tại Hàn Quốc',
    },
    description: {
      en: 'Step-by-step walkthrough of registering your Alien Registration Card — what to bring, where to go, and what to expect.',
      zh: '外国人登录证申请全流程——需要携带的材料、前往的地点，以及整个办理过程。',
      ru: 'Пошаговое руководство по регистрации карты ARC — что взять, куда идти и чего ожидать.',
      ja: '外国人登録証の申請手順を一から解説 — 持参物・申請場所・当日の流れ。',
      vi: 'Hướng dẫn từng bước đăng ký Thẻ Đăng ký Người nước ngoài — mang gì, đến đâu và cần chuẩn bị gì.',
    },
  },
  {
    href: '/best-bank-account-for-foreigners-korea',
    icon: '🏦',
    eyebrow: {
      en: 'Banking',
      zh: '银行开户',
      ru: 'Банки',
      ja: '銀行口座',
      vi: 'Ngân hàng',
    },
    title: {
      en: 'Best Bank Account for Foreigners',
      zh: '外国人最易开户的韩国银行',
      ru: 'Лучший банк для иностранцев в Корее',
      ja: '外国人向けおすすめ銀行口座',
      vi: 'Tài khoản ngân hàng tốt nhất cho người nước ngoài',
    },
    description: {
      en: 'Which Korean bank is easiest to open without full Korean language skills, and what documents you actually need.',
      zh: '不懂韩语也能开户的银行，以及实际所需的材料清单。',
      ru: 'Какой корейский банк проще всего открыть без знания корейского и какие документы реально нужны.',
      ja: '韓国語が苦手でも開設しやすい銀行と、実際に必要な書類を解説。',
      vi: 'Ngân hàng Hàn Quốc nào dễ mở nhất khi không biết tiếng Hàn và những giấy tờ thực sự cần thiết.',
    },
  },
  {
    href: '/how-to-get-sim-card-in-korea',
    icon: '📱',
    eyebrow: {
      en: 'Mobile',
      zh: '手机通讯',
      ru: 'Связь',
      ja: 'モバイル',
      vi: 'Di động',
    },
    title: {
      en: 'SIM Card & eSIM Guide for Foreigners',
      zh: '外国人SIM卡与eSIM购买指南',
      ru: 'Гайд по SIM-карте и eSIM для иностранцев',
      ja: '外国人向けSIMカード・eSIMガイド',
      vi: 'Hướng dẫn SIM & eSIM cho người nước ngoài',
    },
    description: {
      en: 'How to get connected on arrival — prepaid SIMs, long-term plans, and eSIM options that work without a Korean bank account.',
      zh: '入境即可上网——预付费SIM、长期套餐及无需韩国银行账户的eSIM方案。',
      ru: 'Как подключиться к сети сразу по прилёту — предоплаченные SIM, долгосрочные тарифы и eSIM без корейского счёта.',
      ja: '到着後すぐネットに繋がる方法 — プリペイドSIM・長期プラン・韓国口座不要のeSIMを比較。',
      vi: 'Cách kết nối ngay khi đến — SIM trả trước, gói dài hạn và eSIM không cần tài khoản ngân hàng Hàn Quốc.',
    },
  },
  {
    href: '/korea-delivery-apps-guide',
    icon: '🛵',
    eyebrow: {
      en: 'Food & Apps',
      zh: '外卖应用',
      ru: 'Еда и приложения',
      ja: 'フード・アプリ',
      vi: 'Đồ ăn & App',
    },
    title: {
      en: 'Korea Delivery Apps Guide',
      zh: '韩国外卖App使用指南',
      ru: 'Гайд по приложениям доставки еды в Корее',
      ja: '韓国フードデリバリーアプリガイド',
      vi: 'Hướng dẫn ứng dụng giao đồ ăn Hàn Quốc',
    },
    description: {
      en: 'Baemin, Coupang Eats, and Yogiyo explained — how to order food in Korea as a foreigner, even without Korean.',
      zh: 'Baemin、Coupang Eats、Yogiyo全攻略——外国人不懂韩语也能轻松点餐。',
      ru: 'Baemin, Coupang Eats и Yogiyo — как заказывать еду в Корее иностранцу, даже без знания корейского.',
      ja: 'Baemin・Coupang Eats・Yogiyoを徹底解説 — 韓国語が分からなくても注文できる方法。',
      vi: 'Baemin, Coupang Eats và Yogiyo — cách đặt đồ ăn tại Hàn Quốc với tư cách người nước ngoài, kể cả không biết tiếng Hàn.',
    },
  },
  {
    href: '/korea-rent-deposit-system',
    icon: '🏘️',
    eyebrow: {
      en: 'Housing',
      zh: '住房租赁',
      ru: 'Жильё',
      ja: '住まい',
      vi: 'Nhà ở',
    },
    title: {
      en: 'Korea Rent Deposit System Explained',
      zh: '韩国租房保证金制度详解',
      ru: 'Система аренды жилья в Корее: чонсэ и вольсэ',
      ja: '韓国の賃貸保証金制度（チョンセ・ウォルセ）解説',
      vi: 'Giải thích hệ thống đặt cọc thuê nhà Hàn Quốc',
    },
    description: {
      en: "Jeonse vs Wolse — Korea's unique rental deposit system can be confusing. Here's what every foreigner needs to know before signing.",
      zh: '全税vs月租——韩国独特的租房保证金制度令人困惑，签合同前外国人必须了解的要点。',
      ru: 'Чонсэ и вольсэ — уникальная корейская система аренды жилья. Всё, что нужно знать иностранцу перед подписанием договора.',
      ja: 'チョンセとウォルセの違いとは？契約前に外国人が知っておくべき韓国独自の賃貸制度。',
      vi: 'Jeonse vs Wolse — hệ thống đặt cọc thuê nhà độc đáo của Hàn Quốc. Những gì mọi người nước ngoài cần biết trước khi ký hợp đồng.',
    },
  },
  {
    href: '/how-to-send-money-from-korea',
    icon: '💸',
    eyebrow: {
      en: 'Money',
      zh: '汇款',
      ru: 'Деньги',
      ja: '送金',
      vi: 'Chuyển tiền',
    },
    title: {
      en: 'How to Send Money from Korea',
      zh: '如何从韩国向海外汇款',
      ru: 'Как отправить деньги из Кореи',
      ja: '韓国から海外送金する方法',
      vi: 'Cách chuyển tiền từ Hàn Quốc',
    },
    description: {
      en: 'Wise vs Korean bank — the cheapest and fastest way to send money internationally from Korea as a foreigner.',
      zh: 'Wise与韩国银行对比——外国人从韩国进行国际汇款最省钱、最快速的方式。',
      ru: 'Wise против корейских банков — самый дешёвый и быстрый способ международного перевода из Кореи.',
      ja: 'Wise vs 韓国銀行 — 外国人が韓国から海外送金するための最安・最速の方法。',
      vi: 'Wise vs ngân hàng Hàn Quốc — cách rẻ nhất và nhanh nhất để chuyển tiền quốc tế từ Hàn Quốc.',
    },
  },
];

function t<T>(obj: Record<L, T>, lang: string): T {
  return obj[(lang as L) in obj ? (lang as L) : 'en'];
}

export default function LatestGuides({ lang }: { lang: string }) {
  const ui = UI_STRINGS[(lang as L) in UI_STRINGS ? (lang as L) : 'en'];
  const featured = guides[0];

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-rose-500">
              {ui.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              {ui.heading}
            </h2>
            <p className="mt-2 max-w-xl text-slate-500">
              {ui.subheading}
            </p>
          </div>
        </div>

        {/* Featured first card + rest */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Featured (first guide) */}
          <Link
            href={`/${lang}${featured.href}`}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:col-span-1 lg:row-span-2"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{featured.icon}</span>
                {featured.badge && (
                  <span className="rounded-full bg-rose-500 px-2.5 py-0.5 text-xs font-bold text-white">
                    {t(featured.badge, lang)}
                  </span>
                )}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-1">
                {t(featured.eyebrow, lang)}
              </p>
              <h3 className="text-xl font-extrabold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors">
                {t(featured.title, lang)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {t(featured.description, lang)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-rose-500 opacity-0 transition-all group-hover:opacity-100">
              <span>{ui.readGuide}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>

          {/* Remaining 4 guides */}
          {guides.slice(1).map((guide) => (
            <Link
              key={guide.href}
              href={`/${lang}${guide.href}`}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl transition-colors group-hover:bg-rose-50">
                {guide.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-rose-500">
                  {t(guide.eyebrow, lang)}
                </p>
                <h3 className="mt-0.5 font-bold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors">
                  {t(guide.title, lang)}
                </h3>
                <p className="mt-1.5 text-sm leading-5 text-slate-500 line-clamp-2">
                  {t(guide.description, lang)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
