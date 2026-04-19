import Link from 'next/link';

type RelatedPost = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
};

type RelatedPostsProps = {
  lang: string;
  current: string;
};

const allRelated: Record<string, RelatedPost> = {
  'getting-started': {
    href: '/getting-started',
    eyebrow: 'First Steps',
    title: 'Getting Started',
    description: 'ARC card, SIM card, bank account, and first-week essentials.',
    icon: '🚀',
  },
  'daily-life': {
    href: '/daily-life',
    eyebrow: 'Everyday',
    title: 'Daily Life',
    description: 'Transport, groceries, delivery apps, and trash rules.',
    icon: '🌆',
  },
  health: {
    href: '/health',
    eyebrow: 'Medical',
    title: 'Health & Emergency',
    description: 'Hospitals, insurance, pharmacies, and emergency contacts.',
    icon: '🏥',
  },
  housing: {
    href: '/housing',
    eyebrow: 'Where you live',
    title: 'Housing Guide',
    description: 'Dorms, one-rooms, deposits, and rental contracts.',
    icon: '🏠',
  },
  culture: {
    href: '/culture',
    eyebrow: 'Life tips',
    title: 'Culture & Etiquette',
    description: 'Basic etiquette, social rules, and public manners.',
    icon: '🎎',
  },
  visa: {
    href: '/visa',
    eyebrow: 'Stay legal',
    title: 'Visa & Immigration',
    description: 'Visa types, ARC card, extensions, and immigration rules.',
    icon: '🛂',
  },
  'arc-card-korea-guide': {
    href: '/arc-card-korea-guide',
    eyebrow: 'Guide',
    title: 'ARC Card Guide',
    description: 'Step-by-step guide to getting your ARC card in Korea.',
    icon: '🪪',
  },
  'best-bank-account-for-foreigners-korea': {
    href: '/best-bank-account-for-foreigners-korea',
    eyebrow: 'Banking',
    title: 'Best Bank Account',
    description: 'Which Korean bank account is easiest for foreigners to open.',
    icon: '🏦',
  },
  'how-to-get-sim-card-in-korea': {
    href: '/how-to-get-sim-card-in-korea',
    eyebrow: 'SIM Card',
    title: 'SIM Card in Korea',
    description: 'How to get a SIM card or eSIM as a foreigner in Korea.',
    icon: '📱',
  },
  'korea-delivery-apps-guide': {
    href: '/korea-delivery-apps-guide',
    eyebrow: 'Apps',
    title: 'Korea Delivery Apps',
    description: 'Baemin, Coupang Eats, and how to use them as a foreigner.',
    icon: '🛵',
  },
  'korea-rent-deposit-system': {
    href: '/korea-rent-deposit-system',
    eyebrow: 'Housing',
    title: 'Rent Deposit System',
    description: 'Jeonse vs Wolse — Korea\'s unique rental deposit system explained.',
    icon: '🏘️',
  },
};

// 각 페이지마다 추천할 관련 글 목록
const relatedMap: Record<string, string[]> = {
  'getting-started': ['arc-card-korea-guide', 'how-to-get-sim-card-in-korea', 'best-bank-account-for-foreigners-korea'],
  'daily-life': ['korea-delivery-apps-guide', 'housing', 'culture'],
  health: ['getting-started', 'visa', 'housing'],
  housing: ['korea-rent-deposit-system', 'getting-started', 'visa'],
  culture: ['daily-life', 'getting-started', 'health'],
  visa: ['arc-card-korea-guide', 'getting-started', 'best-bank-account-for-foreigners-korea'],
  'arc-card-korea-guide': ['visa', 'how-to-get-sim-card-in-korea', 'best-bank-account-for-foreigners-korea'],
  'best-bank-account-for-foreigners-korea': ['arc-card-korea-guide', 'how-to-get-sim-card-in-korea', 'getting-started'],
  'how-to-get-sim-card-in-korea': ['arc-card-korea-guide', 'best-bank-account-for-foreigners-korea', 'korea-delivery-apps-guide'],
  'korea-delivery-apps-guide': ['daily-life', 'how-to-get-sim-card-in-korea', 'best-bank-account-for-foreigners-korea'],
  'korea-rent-deposit-system': ['housing', 'visa', 'getting-started'],
};

export default function RelatedPosts({ lang, current }: RelatedPostsProps) {
  const keys = relatedMap[current] ?? [];
  const posts = keys.map((k) => allRelated[k]).filter(Boolean);

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Read Next
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
                  {post.eyebrow}
                </p>
                <h3 className="mt-0.5 font-bold text-slate-900 group-hover:text-rose-600">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
