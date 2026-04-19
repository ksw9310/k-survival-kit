type AffiliateBannerProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  ctaText: string;
  accentColor?: 'rose' | 'blue' | 'green';
};

export default function AffiliateBanner({
  icon,
  title,
  description,
  href,
  ctaText,
  accentColor = 'rose',
}: AffiliateBannerProps) {
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
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}
              >
                Recommended
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
      <p className="mt-3 text-xs text-slate-400">
        * This is an affiliate link. We may earn a small commission if you sign
        up — at no extra cost to you.
      </p>
    </div>
  );
}
