import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import { isValidLocale } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';
import PageDisclaimer from '@/components/PageDisclaimer';
import NearbyStrip from '@/components/NearbyStrip';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const content = getDictionary(lang).healthContent;

  return {
    title: `${content.title} | K-Survival Kit`,
    description: content.subtitle,
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}/health`,
      languages: {
        en: 'https://ksurvivalkit.com/en/health',
        zh: 'https://ksurvivalkit.com/zh/health',
        ru: 'https://ksurvivalkit.com/ru/health',
        ja: 'https://ksurvivalkit.com/ja/health',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://ksurvivalkit.com/${lang}/health`,
      locale: lang,
      type: 'website',
    },
  };
}

export default async function HealthPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).healthContent;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <PageDisclaimer type="health" />
      <SectionGrid items={content.cards} />
      <NearbyStrip
        lang={lang}
        titleKey="healthcare"
        items={[{ icon: '💊', label: 'Pharmacy', category: 'pharmacy' }]}
      />
      <RelatedPosts lang={lang as string} current="health" />
    </main>
  );
}
