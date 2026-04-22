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
      canonical: `https://k-survival-kit.vercel.app/${lang}/housing`,
      languages: {
        en: 'https://k-survival-kit.vercel.app/en/housing',
        zh: 'https://k-survival-kit.vercel.app/zh/housing',
        ru: 'https://k-survival-kit.vercel.app/ru/housing',
        ja: 'https://k-survival-kit.vercel.app/ja/housing',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://k-survival-kit.vercel.app/${lang}/housing`,
      locale: lang,
      type: 'website',
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
