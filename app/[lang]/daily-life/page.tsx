import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import { isValidLocale } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';
import NearbyStrip from '@/components/NearbyStrip';
import AffiliateBanner from '@/components/AffiliateBanner';

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
      canonical: `https://ksurvivalkit.com/${lang}/daily-life`,
      languages: {
        en: 'https://ksurvivalkit.com/en/daily-life',
        zh: 'https://ksurvivalkit.com/zh/daily-life',
        ru: 'https://ksurvivalkit.com/ru/daily-life',
        ja: 'https://ksurvivalkit.com/ja/daily-life',
        vi: 'https://ksurvivalkit.com/vi/daily-life',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://ksurvivalkit.com/${lang}/daily-life`,
      locale: lang,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'K-Survival Kit' }],
    },
  };
}

export default async function DailyLifePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).dailyLifeContent;

  const coupang: Record<string, { title: string; description: string; ctaText: string }> = {
    en: { title: 'Shop on Coupang', description: 'Korea\'s largest online store — groceries, daily essentials, electronics, and more. Rocket delivery gets it to your door fast.', ctaText: 'Shop on Coupang' },
    zh: { title: '在Coupang购物', description: '韩国最大的网上商店——食品杂货、日用品、电子产品等。火箭配送，快速送达。', ctaText: '前往Coupang' },
    ru: { title: 'Покупки на Coupang', description: 'Крупнейший интернет-магазин Кореи — продукты, товары первой необходимости, электроника и многое другое. Быстрая доставка Rocket.', ctaText: 'Перейти на Coupang' },
    ja: { title: 'Coupangでショッピング', description: '韓国最大のオンラインショップ——食料品、日用品、電化製品など。ロケット配送で素早くお届け。', ctaText: 'Coupangで購入' },
    vi: { title: 'Mua sắm trên Coupang', description: 'Cửa hàng trực tuyến lớn nhất Hàn Quốc — thực phẩm, đồ dùng hàng ngày, điện tử và nhiều hơn. Giao hàng Rocket nhanh chóng đến tận cửa.', ctaText: 'Mua sắm trên Coupang' },
  };

  const coupangT = coupang[lang] ?? coupang.en;

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
      <div className="bg-slate-50 px-4 py-8 max-w-4xl mx-auto">
        <AffiliateBanner
          icon="🛍️"
          title={coupangT.title}
          description={coupangT.description}
          href="https://link.coupang.com/a/esx4lG"
          ctaText={coupangT.ctaText}
          accentColor="rose"
        />
      </div>
      <RelatedPosts lang={lang as string} current="daily-life" />
    </main>
  );
}
