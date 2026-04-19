import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import { isValidLocale } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';
import NearbyStrip from '@/components/NearbyStrip';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const content = getDictionary(lang).dailyLifeContent;

  return {
    title: `${content.title} | K-Survival Kit`,
    description: content.subtitle,
    alternates: {
      canonical: `https://k-survival-kit.vercel.app/${lang}/daily-life`,
      languages: {
        en: '/en/daily-life',
        zh: '/zh/daily-life',
        ru: '/ru/daily-life',
        ja: '/ja/daily-life',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://k-survival-kit.vercel.app/${lang}/daily-life`,
      locale: lang,
      type: 'website',
    },
  };
}

export default async function DailyLifePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).dailyLifeContent;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <SectionGrid items={content.cards} />
      <NearbyStrip
        lang={lang}
        titleKey="nearby"
        items={[
          { icon: '🛒', label: 'Supermarket', category: 'supermarket' },
          { icon: '🏪', label: 'Convenience Store', category: 'convenience' },
        ]}
      />
      <RelatedPosts lang={lang as string} current="daily-life" />
    </main>
  );
}
