import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import QuickStart from '@/components/QuickStart';
import CategoryLinks from '@/components/CategoryLinks';
import LatestGuides from '@/components/LatestGuides';
import CurrencyCalculator from '@/components/CurrencyCalculator';
import { getDictionary } from '@/data';
import { isValidLocale, type Lang } from '@/lib/i18n';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const dict = getDictionary(lang);

  return {
    title: 'K-Survival Kit',
    description: dict.homeContent.introDesc,
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}`,
      languages: {
        en: 'https://ksurvivalkit.com/en',
        zh: 'https://ksurvivalkit.com/zh',
        ru: 'https://ksurvivalkit.com/ru',
        ja: 'https://ksurvivalkit.com/ja',
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <main>
      <Hero lang={lang as Lang} />
      <QuickStart lang={lang as Lang} />
      <CategoryLinks lang={lang as Lang} />
      <LatestGuides lang={lang} />
      <CurrencyCalculator lang={lang as Lang} />
    </main>
  );
}
