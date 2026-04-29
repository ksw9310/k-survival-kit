import type { Metadata } from 'next';
import { isValidLocale, type Lang } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import FirstWeekChecklist from '@/components/FirstWeekChecklist';
import NearbyStrip from '@/components/NearbyStrip';
import AffiliateBanner from '@/components/AffiliateBanner';

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
      canonical: `https://ksurvivalkit.com/${lang}/getting-started`,
      languages: {
        en: 'https://ksurvivalkit.com/en/getting-started',
        zh: 'https://ksurvivalkit.com/zh/getting-started',
        ru: 'https://ksurvivalkit.com/ru/getting-started',
        ja: 'https://ksurvivalkit.com/ja/getting-started',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://ksurvivalkit.com/${lang}/getting-started`,
      locale: lang,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'K-Survival Kit' }],
    },
  };
}

export default async function GettingStartedPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).gettingStartedContent;

  const italki: Record<string, { title: string; description: string; ctaText: string }> = {
    en: {
      title: 'Learn Korean with italki',
      description: 'Connect with native Korean tutors for 1-on-1 lessons. Start with basics before or after arriving in Korea — at your own pace.',
      ctaText: 'Find a Korean Tutor',
    },
    zh: {
      title: '用italki学习韩语',
      description: '与母语为韩语的教师进行1对1课程。在来韩国之前或之后，按自己的节奏开始学习基础知识。',
      ctaText: '寻找韩语老师',
    },
    ru: {
      title: 'Учите корейский с italki',
      description: 'Занимайтесь 1 на 1 с носителями корейского языка. Начните с основ до или после приезда в Корею — в удобном темпе.',
      ctaText: 'Найти репетитора',
    },
    ja: {
      title: 'italki で韓国語を学ぼう',
      description: 'ネイティブの韓国語チューターと1対1レッスン。来韓前でも来韓後でも、自分のペースで基礎から始められます。',
      ctaText: '韓国語チューターを探す',
    },
  };

  const italkiT = italki[lang] ?? italki.en;

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
      <FirstWeekChecklist lang={lang as string} />

      <div className="bg-slate-50 px-4 py-8 max-w-4xl mx-auto">
        <AffiliateBanner
          icon="🗣️"
          title={italkiT.title}
          description={italkiT.description}
          href="https://www.italki.com/affshare?ref=af31844697"
          ctaText={italkiT.ctaText}
          accentColor="blue"
        />
      </div>

      <RelatedPosts lang={lang as string} current="getting-started" />
    </main>
  );
}
