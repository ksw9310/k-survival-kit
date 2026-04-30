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
        vi: 'https://ksurvivalkit.com/vi/getting-started',
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
    vi: {
      title: 'Học tiếng Hàn với italki',
      description: 'Kết nối với gia sư tiếng Hàn bản ngữ cho các buổi học 1-1. Bắt đầu từ cơ bản trước hoặc sau khi đến Hàn Quốc — theo tốc độ của bạn.',
      ctaText: 'Tìm gia sư tiếng Hàn',
    },
    ja: {
      title: 'italki で韓国語を学ぼう',
      description: 'ネイティブの韓国語チューターと1対1レッスン。来韓前でも来韓後でも、自分のペースで基礎から始められます。',
      ctaText: '韓国語チューターを探す',
    },
  };

  const italkiT = italki[lang] ?? italki.en;

  const nordvpn: Record<string, { title: string; description: string; ctaText: string }> = {
    en: {
      title: 'Stay Safe Online in Korea with NordVPN',
      description: 'Public Wi-Fi in cafes, libraries, and universities can expose your data. NordVPN encrypts your connection so you can browse, bank, and stream securely — anywhere in Korea.',
      ctaText: 'Get NordVPN',
    },
    zh: {
      title: '在韩国使用NordVPN保护上网安全',
      description: '咖啡馆、图书馆和大学的公共Wi-Fi可能暴露你的数据。NordVPN加密你的连接，让你在韩国任何地方都能安全浏览、网银和流媒体。',
      ctaText: '获取NordVPN',
    },
    ru: {
      title: 'Безопасный интернет в Корее с NordVPN',
      description: 'Публичный Wi-Fi в кафе, библиотеках и университетах может раскрыть ваши данные. NordVPN шифрует соединение — безопасный браузинг, банкинг и стриминг в любой точке Кореи.',
      ctaText: 'Получить NordVPN',
    },
    ja: {
      title: 'NordVPNで韓国でも安全にネットを使おう',
      description: 'カフェ・図書館・大学の公共Wi-Fiはデータ漏洩のリスクがあります。NordVPNが通信を暗号化し、韓国中どこでも安全にブラウジング・銀行・動画視聴ができます。',
      ctaText: 'NordVPNを入手',
    },
    vi: {
      title: 'Duyệt web an toàn ở Hàn Quốc với NordVPN',
      description: 'Wi-Fi công cộng ở quán cà phê, thư viện và trường đại học có thể lộ dữ liệu của bạn. NordVPN mã hóa kết nối để bạn duyệt web, ngân hàng và xem phim an toàn — ở bất cứ đâu tại Hàn Quốc.',
      ctaText: 'Dùng NordVPN',
    },
  };

  const nordvpnT = nordvpn[lang] ?? nordvpn.en;

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

      <div className="bg-slate-50 px-4 py-8 max-w-4xl mx-auto space-y-6">
        <AffiliateBanner
          icon="🔒"
          title={nordvpnT.title}
          description={nordvpnT.description}
          href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=146085&url_id=23180"
          ctaText={nordvpnT.ctaText}
          accentColor="blue"
        />
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
