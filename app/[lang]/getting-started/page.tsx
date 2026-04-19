import type { Metadata } from 'next';
import { isValidLocale, type Lang } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import FirstWeekChecklist from '@/components/FirstWeekChecklist';
import NearbyStrip from '@/components/NearbyStrip';

/**
 * Design reminder for this file:
 * The public guide must end cleanly as an article.
 * The Pro invitation should appear as a deliberate transition after the guide content,
 * not as another card glued into the same reading flow.
 */

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const content = getDictionary(lang).gettingStartedContent;

  return {
    title: `${content.title} | K-Survival Kit`,
    description: content.subtitle,
    alternates: {
      canonical: `https://k-survival-kit.vercel.app/${lang}/getting-started`,
      languages: {
        en: '/en/getting-started',
        zh: '/zh/getting-started',
        ru: '/ru/getting-started',
        ja: '/ja/getting-started',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://k-survival-kit.vercel.app/${lang}/getting-started`,
      locale: lang,
      type: 'website',
    },
  };
}

export default async function GettingStartedPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).gettingStartedContent;

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
        titleKey="services"
        items={[
          { icon: '🏦', label: 'Bank', category: 'bank' },
          { icon: '🏪', label: 'Convenience Store', category: 'convenience' },
        ]}
      />
      <FirstWeekChecklist />

      <RelatedPosts lang={lang as string} current="getting-started" />
    </main>
  );
}
