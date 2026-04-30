import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import { isValidLocale } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';
import AffiliateBanner from '@/components/AffiliateBanner';

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
      canonical: `https://ksurvivalkit.com/${lang}/culture`,
      languages: {
        en: 'https://ksurvivalkit.com/en/culture',
        zh: 'https://ksurvivalkit.com/zh/culture',
        ru: 'https://ksurvivalkit.com/ru/culture',
        ja: 'https://ksurvivalkit.com/ja/culture',
        vi: 'https://ksurvivalkit.com/vi/culture',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://ksurvivalkit.com/${lang}/culture`,
      locale: lang,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'K-Survival Kit' }],
    },
  };
}

export default async function CulturePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).cultureContent;

  const klook: Record<string, { title: string; description: string; ctaText: string }> = {
    en: {
      title: 'Explore Korea with Klook',
      description: 'Book tours, activities, and experiences in Korea — from temple stays to K-pop classes. Easy booking, instant confirmation.',
      ctaText: 'Browse Korea Activities',
    },
    zh: {
      title: '用Klook探索韩国',
      description: '预订韩国的旅游、活动和体验——从寺庙住宿到K-pop课程。轻松预订，即时确认。',
      ctaText: '浏览韩国活动',
    },
    ru: {
      title: 'Исследуйте Корею с Klook',
      description: 'Бронируйте туры, мероприятия и впечатления в Корее — от ночёвок в храмах до K-pop занятий. Удобное бронирование, мгновенное подтверждение.',
      ctaText: 'Смотреть активности',
    },
    ja: {
      title: 'Klookで韓国を探索しよう',
      description: '寺院ステイからK-popクラスまで、韓国のツアーやアクティビティを簡単予約。予約後すぐに確認できます。',
      ctaText: '韓国のアクティビティを見る',
    },
    vi: {
      title: 'Khám phá Hàn Quốc với Klook',
      description: 'Đặt tour, hoạt động và trải nghiệm tại Hàn Quốc — từ ở chùa đến lớp K-pop. Đặt dễ dàng, xác nhận tức thì.',
      ctaText: 'Khám phá hoạt động Hàn Quốc',
    },
  };

  const klookT = klook[lang] ?? klook.en;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <SectionGrid items={content.cards} />

      <div className="bg-slate-50 px-4 py-8 max-w-4xl mx-auto">
        <AffiliateBanner
          icon="🎟️"
          title={klookT.title}
          description={klookT.description}
          href="https://affiliate.klook.com/redirect?aid=118997&aff_adid=1259369&k_site=https%3A%2F%2Fwww.klook.com%2F"
          ctaText={klookT.ctaText}
          accentColor="rose"
        />
      </div>

      <RelatedPosts lang={lang as string} current="culture" />
    </main>
  );
}
