import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import { isValidLocale } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';
import PageDisclaimer from '@/components/PageDisclaimer';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const content = getDictionary(lang).housingContent;

  return {
    title: `${content.title} | K-Survival Kit`,
    description: content.subtitle,
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}/housing`,
      languages: {
        en: 'https://ksurvivalkit.com/en/housing',
        zh: 'https://ksurvivalkit.com/zh/housing',
        ru: 'https://ksurvivalkit.com/ru/housing',
        ja: 'https://ksurvivalkit.com/ja/housing',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://ksurvivalkit.com/${lang}/housing`,
      locale: lang,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'K-Survival Kit' }],
    },
  };
}

export default async function HousingPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).housingContent;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <PageDisclaimer type="housing" />
      <SectionGrid items={content.cards} />
      <RelatedPosts lang={lang as string} current="housing" />
    </main>
  );
}
