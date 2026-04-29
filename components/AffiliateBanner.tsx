type L = 'en' | 'zh' | 'ru' | 'ja' | 'vi';

const BADGE: Record<L, string> = {
  en: 'Recommended',
  zh: '推荐',
  ru: 'Рекомендуем',
  ja: 'おすすめ',
  vi: 'Được đề xuất',
};

const DISCLOSURE: Record<L, string> = {
  en: '* This is an affiliate link. We may earn a small commission if you sign up — at no extra cost to you.',
  zh: '* 这是一个联盟推广链接。您通过此链接注册时，我们可能会获得少量佣金，对您不产生任何额外费用。',
  ru: '* Это партнёрская ссылка. При регистрации через неё мы можем получить небольшую комиссию — без дополнительных затрат для вас.',
  ja: '* これはアフィリエイトリンクです。こちらから登録いただくと、追加費用なしで少額の手数料が発生する場合があります。',
  vi: '* Đây là liên kết tiếp thị liên kết. Chúng tôi có thể nhận hoa hồng nhỏ nếu bạn đăng ký — không mất thêm chi phí cho bạn.',
};

type AffiliateBannerProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  ctaText: string;
  accentColor?: 'rose' | 'blue' | 'green';
  lang?: string;
};

export default function AffiliateBanner({
  icon,
  title,
  description,
  href,
  ctaText,
  accentColor = 'rose',
  lang = 'en',
}: AffiliateBannerProps) {
  const l: L = (lang as L) in BADGE ? (lang as L) : 'en';

  const colors = {
    rose: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      button: 'bg-rose-500 hover:bg-rose-600',
      badge: 'text-rose-600 bg-rose-100',
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700',
      badge: 'text-blue-600 bg-blue-100',
    },
    green: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      badge: 'text-emerald-700 bg-emerald-100',
    },
  };

  const c = colors[accentColor];

  return (
    <div className={`rounded-2xl border ${c.border} ${c.bg} p-6`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{icon}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                {BADGE[l]}
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-600">{description}</p>
          </div>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`shrink-0 rounded-xl ${c.button} px-5 py-2.5 text-sm font-bold text-white transition-colors`}
        >
          {ctaText} →
        </a>
      </div>
      <p className="mt-3 text-xs text-slate-400">{DISCLOSURE[l]}</p>
    </div>
  );
}
