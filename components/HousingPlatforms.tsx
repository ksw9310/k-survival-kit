// Affiliate / Referral links
// Amber:           ✅ active — amberstudent.com/l/edc0ed373
// University Living: ✅ active — universityliving.com/?referral=상욱강4744
// HousingAnywhere: no affiliate program found — keeping as regular link
// uhomes:          ✅ active — kr.uhomes.com/referral/partnerShare?xcode=000a65acdd6030bd1ec5

type L = 'en' | 'zh' | 'ru' | 'ja' | 'vi';

type Platform = {
  name: string;
  icon: string;
  href: string;
  badge?: Record<L, string>;
  desc: Record<L, string>;
  cta: Record<L, string>;
  color: 'indigo' | 'blue' | 'orange' | 'teal' | 'purple';
};

const UI: Record<L, { heading: string; subheading: string; disclosure: string }> = {
  en: {
    heading: 'Find Housing Online',
    subheading: 'These platforms specialise in housing for international students in Korea. Browse listings, compare prices, and book remotely before you arrive.',
    disclosure: '* Affiliate links. We may earn a small commission — at no extra cost to you.',
  },
  zh: {
    heading: '在线查找住所',
    subheading: '以下平台专为在韩国的国际学生提供住房服务。您可以在抵达前浏览房源、比较价格并远程预订。',
    disclosure: '* 联盟推广链接。您通过链接预订时，我们可能获得少量佣金，不产生任何额外费用。',
  },
  ru: {
    heading: 'Найти жильё онлайн',
    subheading: 'Эти платформы специализируются на жилье для иностранных студентов в Корее. Смотрите варианты, сравнивайте цены и бронируйте удалённо до приезда.',
    disclosure: '* Партнёрские ссылки. При бронировании через них мы можем получить небольшую комиссию — без дополнительных затрат для вас.',
  },
  ja: {
    heading: 'オンラインで住まいを探す',
    subheading: 'これらのプラットフォームは韓国の留学生向け住居を専門としています。到着前にリストを閲覧し、価格を比較してリモートで予約できます。',
    disclosure: '* アフィリエイトリンクです。こちらから予約いただくと、追加費用なしで少額の手数料が発生する場合があります。',
  },
  vi: {
    heading: 'Tìm nhà ở trực tuyến',
    subheading: 'Các nền tảng này chuyên về nhà ở cho du học sinh quốc tế tại Hàn Quốc. Duyệt danh sách, so sánh giá và đặt chỗ từ xa trước khi đến.',
    disclosure: '* Liên kết tiếp thị liên kết. Chúng tôi có thể nhận hoa hồng nhỏ — không mất thêm chi phí cho bạn.',
  },
};

const platforms: Platform[] = [
  {
    name: 'Amber',
    icon: '🏠',
    href: 'https://amberstudent.com/l/edc0ed373',
    badge: { en: 'Popular', zh: '热门', ru: 'Популярно', ja: '人気', vi: 'Phổ biến' },
    color: 'indigo',
    desc: {
      en: 'Purpose-built student accommodation near Korean universities. Verified listings, flexible lease terms, and English support.',
      zh: '专为韩国大学附近学生打造的学生公寓。经过验证的房源、灵活的租期和英语客服支持。',
      ru: 'Студенческое жильё рядом с корейскими университетами. Проверенные объявления, гибкие условия аренды, поддержка на английском.',
      ja: '韓国の大学近くの学生専用住居。認証済み物件、柔軟な契約期間、英語サポート付き。',
      vi: 'Chỗ ở sinh viên chuyên dụng gần các trường đại học Hàn Quốc. Danh sách đã xác minh, điều khoản thuê linh hoạt và hỗ trợ tiếng Anh.',
    },
    cta: {
      en: 'Search on Amber',
      zh: '在Amber上搜索',
      ru: 'Найти на Amber',
      ja: 'Amberで探す',
      vi: 'Tìm trên Amber',
    },
  },
  {
    name: 'HousingAnywhere',
    icon: '🔑',
    href: 'https://housinganywhere.com',
    color: 'blue',
    desc: {
      en: 'Mid to long-term rentals for international students and expats. Strong on exchange student listings with remote booking.',
      zh: '面向国际学生和外籍人士的中长期租赁平台。交换生房源丰富，支持远程预订。',
      ru: 'Среднесрочная и долгосрочная аренда для иностранных студентов и экспатов. Удобно для обменных студентов, бронирование онлайн.',
      ja: '留学生や駐在員向けの中〜長期賃貸。交換留学生向け物件が充実、リモート予約対応。',
      vi: 'Cho thuê trung và dài hạn cho du học sinh và người nước ngoài. Nhiều danh sách dành cho sinh viên trao đổi với đặt phòng từ xa.',
    },
    cta: {
      en: 'Browse Listings',
      zh: '浏览房源',
      ru: 'Смотреть варианты',
      ja: '物件を見る',
      vi: 'Xem danh sách',
    },
  },
  {
    name: 'University Living',
    icon: '🎓',
    href: 'https://www.universityliving.com/?referral=상욱강4744',
    color: 'orange',
    desc: {
      en: 'Student-only housing platform with listings near major Korean universities. Contract support and multilingual assistance available.',
      zh: '专为学生设计的住房平台，提供韩国主要大学附近的房源。提供合同支持和多语言协助。',
      ru: 'Платформа исключительно для студентов с жильём рядом с ведущими корейскими вузами. Помощь с договором и многоязычная поддержка.',
      ja: '韓国の主要大学近くの学生専用住居プラットフォーム。契約サポートと多言語対応あり。',
      vi: 'Nền tảng nhà ở dành riêng cho sinh viên với danh sách gần các trường đại học lớn của Hàn Quốc. Hỗ trợ hợp đồng và trợ lý đa ngôn ngữ.',
    },
    cta: {
      en: 'Find Student Housing',
      zh: '查找学生住房',
      ru: 'Найти студенческое жильё',
      ja: '学生住居を探す',
      vi: 'Tìm nhà ở sinh viên',
    },
  },
  {
    name: 'uhomes',
    icon: '🏘️',
    href: 'https://kr.uhomes.com/referral/partnerShare?xcode=000a65acdd6030bd1ec5',
    badge: { en: 'Asia-friendly', zh: '亚洲友好', ru: 'Для Азии', ja: 'アジア対応', vi: 'Thân thiện Châu Á' },
    color: 'teal',
    desc: {
      en: 'Popular among Chinese and Korean students. Listings across major Korean cities with Chinese language support.',
      zh: '在中韩学生中广受欢迎。覆盖韩国主要城市的房源，提供中文客服支持。',
      ru: 'Популярен среди китайских и корейских студентов. Варианты в крупных городах Кореи с поддержкой на китайском языке.',
      ja: '中国・韓国の学生に人気。韓国の主要都市の物件を掲載、中国語サポートあり。',
      vi: 'Phổ biến trong sinh viên Trung Quốc và Hàn Quốc. Danh sách khắp các thành phố lớn của Hàn Quốc với hỗ trợ tiếng Trung.',
    },
    cta: {
      en: 'Search on uhomes',
      zh: '在uhomes上搜索',
      ru: 'Найти на uhomes',
      ja: 'uhomesで探す',
      vi: 'Tìm trên uhomes',
    },
  },
];

const colorMap = {
  indigo: {
    border: 'border-indigo-200',
    bg: 'bg-indigo-50',
    badge: 'bg-indigo-100 text-indigo-700',
    btn: 'bg-indigo-600 hover:bg-indigo-700',
    icon: 'bg-indigo-100',
  },
  blue: {
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    btn: 'bg-blue-600 hover:bg-blue-700',
    icon: 'bg-blue-100',
  },
  orange: {
    border: 'border-orange-200',
    bg: 'bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
    btn: 'bg-orange-500 hover:bg-orange-600',
    icon: 'bg-orange-100',
  },
  teal: {
    border: 'border-teal-200',
    bg: 'bg-teal-50',
    badge: 'bg-teal-100 text-teal-700',
    btn: 'bg-teal-600 hover:bg-teal-700',
    icon: 'bg-teal-100',
  },
  purple: {
    border: 'border-purple-200',
    bg: 'bg-purple-50',
    badge: 'bg-purple-100 text-purple-700',
    btn: 'bg-purple-600 hover:bg-purple-700',
    icon: 'bg-purple-100',
  },
};

function loc<T>(obj: Record<L, T>, lang: string): T {
  return obj[(lang as L) in obj ? (lang as L) : 'en'];
}

export default function HousingPlatforms({ lang }: { lang: string }) {
  const ui = UI[(lang as L) in UI ? (lang as L) : 'en'];

  return (
    <section className="bg-slate-50 px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-slate-900">{ui.heading}</h2>
        <p className="mt-2 text-slate-500">{ui.subheading}</p>

        <div className="mt-8 space-y-4">
          {platforms.map((p) => {
            const c = colorMap[p.color];
            return (
              <div
                key={p.name}
                className={`rounded-2xl border ${c.border} ${c.bg} p-5`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${c.icon}`}>
                      {p.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900">{p.name}</span>
                        {p.badge && (
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                            {loc(p.badge, lang)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-6 text-slate-600">
                        {loc(p.desc, lang)}
                      </p>
                    </div>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`shrink-0 rounded-xl ${c.btn} px-5 py-2.5 text-sm font-bold text-white transition-colors`}
                  >
                    {loc(p.cta, lang)} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-slate-400">{ui.disclosure}</p>
      </div>
    </section>
  );
}
