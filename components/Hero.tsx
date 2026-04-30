import Link from 'next/link';
import { getDictionary } from '@/data';
import type { Lang } from '@/lib/i18n';

export default function Hero({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).common;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 pb-36 pt-20 text-white md:pt-28">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating blobs */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-5 py-1.5 text-sm font-bold text-slate-900 shadow-lg shadow-yellow-300/20">
          <span>🎓</span>
          <span>{t.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          {t.hero.title}{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
              {t.hero.highlight}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-xl">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={`/${lang}/getting-started`}
            className="group inline-flex items-center gap-2 rounded-xl bg-yellow-300 px-7 py-3.5 font-bold text-slate-900 shadow-lg shadow-yellow-300/25 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-300/30"
          >
            <span>{t.hero.primaryCta}</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href={`/${lang}/housing`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-14 flex max-w-sm flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          {/* <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>5 Topics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>4 Languages</span>
          </div> */}
          {/* <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span>Always Free</span>
          </div> */}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L60 51.7C120 43.3 240 26.7 360 20C480 13.3 600 16.7 720 23.3C840 30 960 40 1080 43.3C1200 46.7 1320 43.3 1380 41.7L1440 40V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="rgb(248 250 252)"
          />
        </svg>
      </div>
    </section>
  );
}
