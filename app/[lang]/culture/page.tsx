import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import { isValidLocale } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const content = getDictionary(lang).cultureContent;

  return {
    title: `${content.title} | K-Survival Kit`,
    description: content.subtitle,
    alternates: {
      canonical: `https://k-survival-kit.vercel.app/${lang}/culture`,
      languages: {
        en: '/en/culture',
        zh: '/zh/culture',
        ru: '/ru/culture',
        ja: '/ja/culture',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://k-survival-kit.vercel.app/${lang}/culture`,
      locale: lang,
      type: 'website',
    },
  };
}

export default async function CulturePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).cultureContent;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <SectionGrid items={content.cards} />
      <RelatedPosts lang={lang as string} current="culture" />
    </main>
  );
}
