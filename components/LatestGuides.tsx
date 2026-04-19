import Link from 'next/link';

type Guide = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
};

const guides: Guide[] = [
  {
    href: '/arc-card-korea-guide',
    eyebrow: 'Identity',
    title: 'How to Get Your ARC Card in Korea',
    description:
      'Step-by-step walkthrough of registering your Alien Registration Card — what to bring, where to go, and what to expect.',
    icon: '🪪',
    badge: 'Must-read',
  },
  {
    href: '/best-bank-account-for-foreigners-korea',
    eyebrow: 'Banking',
    title: 'Best Bank Account for Foreigners',
    description:
      'Which Korean bank is easiest to open without full Korean language skills, and what documents you actually need.',
    icon: '🏦',
  },
  {
    href: '/how-to-get-sim-card-in-korea',
    eyebrow: 'Mobile',
    title: 'SIM Card & eSIM Guide for Foreigners',
    description:
      'How to get connected on arrival — prepaid SIMs, long-term plans, and eSIM options that work without a Korean bank account.',
    icon: '📱',
  },
  {
    href: '/korea-delivery-apps-guide',
    eyebrow: 'Food & Apps',
    title: 'Korea Delivery Apps Guide',
    description:
      'Baemin, Coupang Eats, and Yogiyo explained — how to order food in Korea as a foreigner, even without Korean.',
    icon: '🛵',
  },
  {
    href: '/korea-rent-deposit-system',
    eyebrow: 'Housing',
    title: 'Korea Rent Deposit System Explained',
    description:
      "Jeonse vs Wolse — Korea's unique rental deposit system can be confusing. Here's what every foreigner needs to know before signing.",
    icon: '🏘️',
  },
];

export default function LatestGuides({ lang }: { lang: string }) {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-rose-500">
              Practical Guides
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Latest Guides
            </h2>
            <p className="mt-2 max-w-xl text-slate-500">
              In-depth articles on the most important topics for foreigners in Korea.
            </p>
          </div>
        </div>

        {/* Featured first card + rest */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Featured (first guide) */}
          <Link
            href={`/${lang}${guides[0].href}`}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:col-span-1 lg:row-span-2"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{guides[0].icon}</span>
                {guides[0].badge && (
                  <span className="rounded-full bg-rose-500 px-2.5 py-0.5 text-xs font-bold text-white">
                    {guides[0].badge}
                  </span>
                )}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-1">
                {guides[0].eyebrow}
              </p>
              <h3 className="text-xl font-extrabold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors">
                {guides[0].title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {guides[0].description}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-rose-500 opacity-0 transition-all group-hover:opacity-100">
              <span>Read guide</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
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
                  {guide.eyebrow}
                </p>
                <h3 className="mt-0.5 font-bold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="mt-1.5 text-sm leading-5 text-slate-500 line-clamp-2">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
