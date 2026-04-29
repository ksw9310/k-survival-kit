import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import Link from 'next/link';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About | K-Survival Kit',
    description:
      'K-Survival Kit was created by SW Kang to help international students navigate life in Korea more easily. Learn the story behind the site.',
    alternates: {
      canonical: 'https://ksurvivalkit.com/en/about',
      languages: {
        en: 'https://ksurvivalkit.com/en/about',
        zh: 'https://ksurvivalkit.com/zh/about',
        ru: 'https://ksurvivalkit.com/ru/about',
        ja: 'https://ksurvivalkit.com/ja/about',
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 pt-16 pb-12 border-b border-slate-100">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-3">
            About this site
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 leading-snug">
            Built for the people who have to figure it all out alone.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-500">
            K-Survival Kit is a free, practical guide for international students
            and foreigners living in Korea — built by someone who watched the
            struggle up close.
          </p>
        </div>
      </section>

      {/* Story */}
      <main className="bg-slate-50 px-6 py-14">
        <article className="mx-auto max-w-3xl space-y-10 text-slate-700">
          {/* The story */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-slate-900">
              The story behind this site
            </h2>
            <p className="leading-8">
              My girlfriend is a foreign student who has been living in Korea
              for over two years. You would think that after two years, most
              things would feel familiar — but that is not quite how it works.
              She still runs into situations where she does not know where to
              go, who to ask, or what the process actually is. Banking, health
              insurance, housing contracts, trash rules, delivery apps — things
              that locals take for granted can take hours of research for
              someone who did not grow up here.
            </p>
            <p className="leading-8">
              Watching that happen gave me an idea. Not just to help her, but to
              help the thousands of people who arrive in Korea every semester in
              exactly the same situation — navigating a new country, a new
              language, and a new system, often completely on their own.
            </p>
            <p className="leading-8">
              That is why I built K-Survival Kit. Not as a travel blog, and not
              as a business. As a practical reference — the kind of guide I wish
              she had found on her first week here.
            </p>
          </section>

          {/* Divider with avatar placeholder */}
          <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-500">
              SW
            </div>
            <div>
              <p className="font-bold text-slate-900">SW Kang</p>
              <p className="text-sm text-slate-500">
                Creator of K-Survival Kit · Based in Korea
              </p>
            </div>
          </div>

          {/* What this site is */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              What this site is
            </h2>
            <p className="leading-8">
              K-Survival Kit covers the practical things that matter most to
              foreigners living in Korea — health and insurance, housing and
              contracts, banking, SIM cards, daily life, visas, and more. All
              content is available in English, Chinese, Japanese, and Russian,
              because the language barrier is part of the problem this site is
              trying to solve.
            </p>
            <p className="leading-8">
              Everything here is general information only. I am not a lawyer, a
              doctor, or a financial advisor. Where official sources exist, I
              link to them directly. The goal is to give you enough context to
              ask the right questions — not to replace professional advice.
            </p>
          </section>

          {/* What this site is not */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              What this site is not
            </h2>
            <p className="leading-8">
              This is not a sponsored content farm. It is not written by AI with
              no editorial oversight. Some pages include affiliate links —
              mostly for services like eSIM providers and international money
              transfer apps that I genuinely think are useful for foreigners in
              Korea. When that is the case, it is always disclosed clearly.
            </p>
            <p className="leading-8">The site will always be free to use.</p>
          </section>

          {/* CTA */}
          <div className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-xl font-bold">Start exploring</h2>
            <p className="mt-2 text-slate-300 leading-7">
              If you are new to Korea or still figuring things out — start with
              the Getting Started guide. It covers the first things you actually
              need to do.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/${lang}/getting-started`}
                className="rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-rose-600 transition-colors"
              >
                Getting Started →
              </Link>
              <Link
                href={`/${lang}`}
                className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                Browse all guides
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
