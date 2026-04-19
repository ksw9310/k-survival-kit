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

  const content = getDictionary(lang).visaContent;

  return {
    title: `${content.title} | K-Survival Kit`,
    description: content.subtitle,
    alternates: {
      canonical: `https://k-survival-kit.vercel.app/${lang}/visa`,
      languages: {
        en: '/en/visa',
        zh: '/zh/visa',
        ru: '/ru/visa',
        ja: '/ja/visa',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://k-survival-kit.vercel.app/${lang}/visa`,
      locale: lang,
      type: 'website',
    },
  };
}

export default async function VisaPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).visaContent;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <PageDisclaimer type="visa" />
      <SectionGrid items={content.cards} />
      <RelatedPosts lang={lang as string} current="visa" />
    </main>
  );
}
