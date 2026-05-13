import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionGrid from '@/components/SectionGrid';
import { getDictionary } from '@/data';
import { isValidLocale } from '@/lib/i18n';
import RelatedPosts from '@/components/RelatedPosts';
import PageDisclaimer from '@/components/PageDisclaimer';
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

  const content = getDictionary(lang).healthContent;

  return {
    title: `${content.title} | K-Survival Kit`,
    description: content.subtitle,
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}/health`,
      languages: {
        en: 'https://ksurvivalkit.com/en/health',
        zh: 'https://ksurvivalkit.com/zh/health',
        ru: 'https://ksurvivalkit.com/ru/health',
        ja: 'https://ksurvivalkit.com/ja/health',
        vi: 'https://ksurvivalkit.com/vi/health',
        'x-default': 'https://ksurvivalkit.com/en/health',
      },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `https://ksurvivalkit.com/${lang}/health`,
      locale: lang,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'K-Survival Kit' }],
    },
  };
}

export default async function HealthPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const content = getDictionary(lang).healthContent;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />
      <PageDisclaimer type="health" />
      <SectionGrid items={content.cards} />

      {/* NHIS deep-dive link */}
      <section className="bg-white px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <a
            href={`/${lang}/korea-health-insurance-guide`}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 transition hover:border-slate-400 hover:shadow-sm"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">NHIS Guide</p>
              <p className="mt-1 font-semibold text-slate-900">
                {lang === 'zh' ? '国民健康保险（NHIS）完整指南 →' :
                 lang === 'ru' ? 'Полное руководство по NHIS →' :
                 lang === 'ja' ? '国民健康保険（NHIS）完全ガイド →' :
                 lang === 'vi' ? 'Hướng dẫn đầy đủ về NHIS →' :
                 'Full NHIS Health Insurance Guide →'}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {lang === 'zh' ? '月费₩79,320 · 6个月后自动加入 · 未缴影响签证' :
                 lang === 'ru' ? '₩79,320/мес · Авто-включение после 6 мес · Долг блокирует визу' :
                 lang === 'ja' ? '月額₩79,320 · 6ヶ月後に自動加入 · 未払いはビザに影響' :
                 lang === 'vi' ? '₩79,320/tháng · Tự động đăng ký sau 6 tháng · Nợ phí ảnh hưởng visa' :
                 '₩79,320/month · Auto-enrolled after 6 months · Unpaid fees affect visa renewal'}
              </p>
            </div>
            <span className="ml-4 text-2xl text-slate-400">→</span>
          </a>
        </div>
      </section>

      <NearbyStrip
        lang={lang}
        titleKey="healthcare"
        items={[{ icon: '💊', label: 'Pharmacy', category: 'pharmacy' }]}
      />

      {/* SafetyWing affiliate banner */}
      <section className="bg-white px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <AffiliateBanner
            lang={lang}
            icon="🛡️"
            title={
              lang === 'zh' ? '留学生旅行保险 — SafetyWing' :
              lang === 'ru' ? 'Страховка для студентов — SafetyWing' :
              lang === 'ja' ? '留学生向け旅行保険 — SafetyWing' :
              lang === 'vi' ? 'Bảo hiểm du lịch cho du học sinh — SafetyWing' :
              'Travel Insurance for Students — SafetyWing'
            }
            description={
              lang === 'zh' ? '国家健康保险（NHIS）加入前，或学校保险保障不足时的最佳选择。月均约$45，覆盖全球医疗费用，无需长期合同。' :
              lang === 'ru' ? 'Лучший вариант до оформления NHIS или если страховки университета недостаточно. Около $45 в месяц, покрытие медрасходов по всему миру, без долгосрочного контракта.' :
              lang === 'ja' ? 'NHIS加入前や大学保険のカバーが不十分な場合の最善策。月約$45で世界中の医療費をカバー、長期契約不要。' :
              lang === 'vi' ? 'Lựa chọn tốt nhất trước khi tham gia NHIS hoặc khi bảo hiểm trường không đủ. Khoảng $45/tháng, bao gồm chi phí y tế toàn cầu, không cần cam kết dài hạn.' :
              'Best option before joining NHIS or when your university insurance falls short. Around $45/month, covers medical costs worldwide, no long-term commitment.'
            }
            href="https://safetywing.com/?referenceID=26519381&utm_source=26519381&utm_medium=Ambassador"
            ctaText={
              lang === 'zh' ? '查看SafetyWing保险' :
              lang === 'ru' ? 'Посмотреть страховку' :
              lang === 'ja' ? 'SafetyWingを見る' :
              lang === 'vi' ? 'Xem bảo hiểm SafetyWing' :
              'Get Covered with SafetyWing'
            }
            accentColor="blue"
          />
        </div>
      </section>

      <RelatedPosts lang={lang as string} current="health" />
    </main>
  );
}
