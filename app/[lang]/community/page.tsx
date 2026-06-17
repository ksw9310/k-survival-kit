import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import StoriesSection from '@/components/StoriesSection';
import { isValidLocale, type Lang } from '@/lib/i18n';

type Props = {
  params: Promise<{ lang: string }>;
};

const pageTitles: Record<string, string> = {
  en: 'Community Stories — K-Survival Kit',
  zh: '社区故事 — K-Survival Kit',
  ru: 'Истории сообщества — K-Survival Kit',
  ja: 'コミュニティ体験談 — K-Survival Kit',
  vi: 'Câu chuyện cộng đồng — K-Survival Kit',
};

const pageDescs: Record<string, string> = {
  en: 'Real stories and tips from foreigners and international students living in Korea. Share your own experience too!',
  zh: '来自在韩外国人和留学生的真实故事与心得。也分享您的经历吧！',
  ru: 'Реальные истории и советы от иностранцев и студентов, живущих в Корее. Поделитесь и своим опытом!',
  ja: '韓国に住む外国人・留学生のリアルな体験談とアドバイス。あなたの経験もシェアしてみましょう！',
  vi: 'Câu chuyện thật và mẹo từ người nước ngoài và du học sinh sống tại Hàn Quốc. Hãy chia sẻ trải nghiệm của bạn!',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) return {};

  return {
    title: pageTitles[lang] ?? pageTitles.en,
    description: pageDescs[lang] ?? pageDescs.en,
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}/community`,
      languages: {
        en: 'https://ksurvivalkit.com/en/community',
        zh: 'https://ksurvivalkit.com/zh/community',
        ru: 'https://ksurvivalkit.com/ru/community',
        ja: 'https://ksurvivalkit.com/ja/community',
        vi: 'https://ksurvivalkit.com/vi/community',
      },
    },
    openGraph: {
      title: pageTitles[lang] ?? pageTitles.en,
      description: pageDescs[lang] ?? pageDescs.en,
      url: `https://ksurvivalkit.com/${lang}/community`,
      locale: lang,
      type: 'website',
    },
  };
}

export default async function CommunityPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <StoriesSection lang={lang as Lang} preview={false} />
    </main>
  );
}
