import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import ArticleHero from '@/components/ArticleHero';
import PageDisclaimer from '@/components/PageDisclaimer';
import RelatedPosts from '@/components/RelatedPosts';
import JsonLd from '@/components/JsonLd';

type L = 'en' | 'zh' | 'ru' | 'ja';

const META: Record<L, { title: string; description: string }> = {
  en: {
    title: 'Korea Rent Deposit System Guide (Jeonse, Wolse) | K-Survival Kit',
    description:
      'Confused about Korea rent deposits? Learn the difference between jeonse and wolse, how much you need to pay, and what foreigners must check before signing a contract.',
  },
  zh: {
    title: '韩国租房保证金制度指南（全税·月租） | K-Survival Kit',
    description:
      '对韩国租房保证金感到困惑？了解全税与月租的区别、需要支付多少，以及外国人签约前必须注意的事项。',
  },
  ru: {
    title: 'Система аренды в Корее: чонсэ и вольсэ | K-Survival Kit',
    description:
      'Запутались в корейской системе аренды? Узнайте разницу между чонсэ и вольсэ, сколько платить и что проверить перед подписанием договора.',
  },
  ja: {
    title: '韓国賃貸保証金制度ガイド（チョンセ・ウォルセ） | K-Survival Kit',
    description:
      '韓国の家賃保証金制度に戸惑っていませんか？チョンセとウォルセの違い、必要な金額、外国人が契約前に確認すべきことを解説します。',
  },
};

type PageContent = {
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  quickAnswerTitle: string;
  quickAnswerText: string;
  s1Title: string;
  s1P1: string;
  s1P2: string;
  s2Title: string;
  s2P: string;
  s2Items: string[];
  s2Example: string;
  s3Title: string;
  s3P: string;
  s3Items: string[];
  s4Title: string;
  s4P1: string;
  s4P2: string;
  s5Title: string;
  s5P: string;
  s5Items: string[];
  s6Title: string;
  s6P: string;
  s6Items: string[];
  s7Title: string;
  s7Items: string[];
  s8Title: string;
  s8P1: string;
  s8P2: string;
  finalTitle: string;
  finalP: string;
  relatedTitle: string;
  relatedDesc: string;
  relatedHousingBtn: string;
  relatedStartBtn: string;
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Housing / Rent Guide',
    heroTitle:
      'Korea Rent Deposit System Explained (Jeonse, Wolse for Foreigners)',
    heroLead:
      'The Korea rent deposit system can feel confusing if you are new to Korean housing. Many foreigners and international students are not used to paying a deposit before moving in, and the difference between jeonse and wolse can be hard to understand at first.',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText:
      'In Korea, most renters pay a deposit before moving in. Students usually deal with wolse, which means a deposit plus monthly rent. Jeonse involves a much larger deposit and usually no monthly rent, but it is often too expensive for most international students.',
    s1Title: 'What Is the Korea Rent Deposit System?',
    s1P1: 'The Korea rent deposit system is built around the idea that renters give the landlord a deposit before moving in. The size of that deposit can vary a lot depending on the type of contract, the area, and the condition of the property.',
    s1P2: 'For international students, the deposit may feel unusual, but it is a normal part of the housing market in Korea.',
    s2Title: 'What Is Wolse?',
    s2P: 'Wolse is the most common option for many students. It means you pay a deposit and also pay monthly rent.',
    s2Items: [
      'Smaller deposit than jeonse',
      'Monthly rent is paid every month',
      'Common for one-room apartments and student housing',
      'Usually the most realistic option for foreigners',
    ],
    s2Example:
      'Example: you might pay a deposit plus a monthly rent amount for a small apartment near your university.',
    s3Title: 'What Is Jeonse?',
    s3P: 'Jeonse is a system where you pay a very large deposit and usually do not pay monthly rent. It can be attractive in theory, but the deposit amount is often too high for most international students.',
    s3Items: [
      'Very large upfront deposit',
      'Usually no monthly rent',
      'More common in long-term residential contracts',
      'Less practical for most students and short-term residents',
    ],
    s4Title: 'What Is a Typical Deposit for Students?',
    s4P1: 'For international students, the deposit amount depends on the city, neighborhood, and housing type. One-room apartments, goshiwons, and shared housing all work differently.',
    s4P2: 'In general, student-friendly places usually involve a lower deposit than family housing, but you should still confirm the exact amount and refund conditions before signing anything.',
    s5Title: 'Why Deposits Matter',
    s5P: 'The deposit is important because it is often a large amount of money for a student. If something goes wrong with the contract, getting the deposit back can become difficult.',
    s5Items: [
      'Always check the contract carefully',
      'Confirm who receives the deposit',
      'Keep payment records',
      'Take photos before moving in',
    ],
    s6Title: 'What Should Be in the Contract?',
    s6P: 'Before paying a deposit, make sure the rental contract clearly shows the important details.',
    s6Items: [
      'Deposit amount',
      'Monthly rent amount',
      'Move-in and move-out dates',
      'Utility payment details',
      'Refund conditions',
      'Landlord or property details',
    ],
    s7Title: 'Common Risks for Foreigners',
    s7Items: [
      'Signing without fully understanding the contract',
      'Sending money before checking the property',
      'Not confirming deposit return conditions',
      'Relying only on verbal promises',
      'Not keeping copies of documents and receipts',
    ],
    s8Title: 'Best Housing Option for Most International Students',
    s8P1: 'For most students, the safest and most realistic option is usually a dormitory, a student-friendly one-room with wolse, or another housing arrangement with a manageable deposit.',
    s8P2: 'Jeonse is important to understand, but in practice many students do not choose it because of the high upfront cost.',
    finalTitle: 'Final Advice',
    finalP:
      'The Korea rent deposit system is different from what many foreigners expect. Do not rush. Read the contract carefully, confirm the total cost, and choose a rental option that matches your real budget. Understanding jeonse, wolse, and deposits early can save you money and stress later.',
    relatedTitle: 'Related Guides',
    relatedDesc:
      'If you are preparing to live in Korea, these guides may also help.',
    relatedHousingBtn: 'Housing Guide',
    relatedStartBtn: 'Getting Started',
  },
  zh: {
    eyebrow: '住房 / 租房指南',
    heroTitle: '韩国租房保证金制度详解（全税与月租，适合外国人）',
    heroLead:
      '如果您刚接触韩国租房，全税和月租制度可能会让您感到困惑。许多外国人和留学生不习惯在入住前支付保证金，而且全税和月租的区别一开始也很难理解。',
    quickAnswerTitle: '简要回答',
    quickAnswerText:
      '在韩国，大多数租客在入住前需要支付保证金。留学生通常接触的是月租（월세），即押金加每月租金。全税（전세）需要支付非常高的一次性押金，通常不用再交月租，但对大多数留学生来说费用往往过高。',
    s1Title: '什么是韩国租房保证金制度？',
    s1P1: '韩国租房保证金制度的核心是租客在入住前向房东缴纳一笔保证金。保证金的金额因合同类型、地区和房产状况不同而差异很大。',
    s1P2: '对留学生来说，这种方式可能感觉不寻常，但这是韩国住房市场的正常组成部分。',
    s2Title: '什么是月租（Wolse）？',
    s2P: '月租是许多学生最常见的选择，即支付押金的同时每月支付租金。',
    s2Items: [
      '押金比全税少',
      '每月支付租金',
      '适用于一居室公寓和学生住房',
      '通常是外国人最现实的选择',
    ],
    s2Example: '示例：您可能需要支付一笔押金，加上大学附近小公寓的每月租金。',
    s3Title: '什么是全税（Jeonse）？',
    s3P: '全税是一种支付大额一次性押金、通常不需要每月租金的制度。理论上很有吸引力，但押金金额对大多数留学生来说往往过高。',
    s3Items: [
      '前期需要支付大额押金',
      '通常不需要每月租金',
      '更多见于长期住宅合同',
      '对大多数学生和短期居住者来说不太实际',
    ],
    s4Title: '留学生的典型押金是多少？',
    s4P1: '对留学生来说，押金金额取决于城市、地区和住房类型。一居室公寓、考试院和合租房的情况各不相同。',
    s4P2: '总体而言，面向学生的住房押金通常比家庭住房低，但在签合同前仍应确认确切金额和退款条件。',
    s5Title: '为什么押金很重要',
    s5P: '押金之所以重要，是因为对学生来说这通常是一笔大额资金。如果合同出现问题，追回押金可能会变得困难。',
    s5Items: [
      '务必仔细查阅合同',
      '确认押金由谁接收',
      '保存付款记录',
      '入住前拍照留存',
    ],
    s6Title: '合同中应包含哪些内容？',
    s6P: '在支付押金之前，请确保租赁合同中明确列出重要细节。',
    s6Items: [
      '押金金额',
      '每月租金金额',
      '入住和退房日期',
      '水电费支付详情',
      '退款条件',
      '房东或房产信息',
    ],
    s7Title: '外国人常见风险',
    s7Items: [
      '未完全理解合同就签字',
      '未查看房产就汇款',
      '未确认押金退还条件',
      '仅凭口头承诺',
      '未保存文件和收据副本',
    ],
    s8Title: '大多数留学生的最佳住房选择',
    s8P1: '对大多数学生来说，最安全、最现实的选择通常是宿舍、月租一居室，或其他押金可负担的住房安排。',
    s8P2: '了解全税很重要，但实际上许多学生因为前期费用过高而不会选择全税。',
    finalTitle: '最终建议',
    finalP:
      '韩国租房保证金制度与许多外国人的预期不同。不要着急。仔细阅读合同，确认总费用，选择符合实际预算的租房方案。提前了解全税、月租和押金制度，能在日后为您节省金钱和麻烦。',
    relatedTitle: '相关指南',
    relatedDesc: '如果您正在准备在韩国生活，这些指南可能也会有所帮助。',
    relatedHousingBtn: '住房指南',
    relatedStartBtn: '入门指南',
  },
  ru: {
    eyebrow: 'Жильё / Руководство по аренде',
    heroTitle:
      'Система залогов при аренде в Корее (чонсэ и вольсэ для иностранцев)',
    heroLead:
      'Система залогов при аренде в Корее может показаться запутанной, если вы впервые сталкиваетесь с корейским рынком жилья. Многие иностранцы и студенты не привыкли платить залог перед въездом, а разница между чонсэ и вольсэ поначалу трудна для понимания.',
    quickAnswerTitle: 'Быстрый ответ',
    quickAnswerText:
      'В Корее большинство арендаторов платят залог перед въездом. Студенты обычно сталкиваются с вольсэ (월세) — залогом плюс ежемесячной арендой. Чонсэ (전세) предполагает гораздо больший залог и обычно не требует ежемесячной оплаты, но для большинства иностранных студентов это слишком дорого.',
    s1Title: 'Что такое система залогов при аренде в Корее?',
    s1P1: 'Система залогов при аренде в Корее построена на принципе, что арендатор выплачивает залог арендодателю до въезда. Размер залога может сильно варьироваться в зависимости от типа договора, района и состояния недвижимости.',
    s1P2: 'Для иностранных студентов залог может показаться необычным, но это нормальная часть рынка жилья в Корее.',
    s2Title: 'Что такое вольсэ?',
    s2P: 'Вольсэ — наиболее распространённый вариант для многих студентов. Это означает, что вы платите залог и также платите ежемесячную аренду.',
    s2Items: [
      'Залог меньше, чем при чонсэ',
      'Ежемесячная аренда платится каждый месяц',
      'Распространено для однокомнатных квартир и студенческого жилья',
      'Обычно самый реалистичный вариант для иностранцев',
    ],
    s2Example:
      'Пример: вы можете заплатить залог плюс ежемесячную аренду за небольшую квартиру рядом с университетом.',
    s3Title: 'Что такое чонсэ?',
    s3P: 'Чонсэ — система, при которой вы платите очень большой залог и обычно не платите ежемесячную аренду. В теории это привлекательно, но сумма залога зачастую слишком высока для большинства иностранных студентов.',
    s3Items: [
      'Очень большой первоначальный залог',
      'Обычно без ежемесячной аренды',
      'Чаще встречается в долгосрочных жилых договорах',
      'Менее практично для большинства студентов и краткосрочных резидентов',
    ],
    s4Title: 'Какой типичный залог для студентов?',
    s4P1: 'Для иностранных студентов сумма залога зависит от города, района и типа жилья. Однокомнатные квартиры, косивоны и совместное жильё работают по-разному.',
    s4P2: 'В целом, жильё, ориентированное на студентов, обычно предполагает меньший залог, чем семейное, но всё равно следует уточнить точную сумму и условия возврата до подписания чего-либо.',
    s5Title: 'Почему залог важен',
    s5P: 'Залог важен, потому что для студента это часто значительная сумма денег. Если с договором что-то пойдёт не так, вернуть залог может быть непросто.',
    s5Items: [
      'Всегда внимательно читайте договор',
      'Уточните, кто получает залог',
      'Храните подтверждения платежей',
      'Сфотографируйте всё перед въездом',
    ],
    s6Title: 'Что должно быть в договоре?',
    s6P: 'Перед выплатой залога убедитесь, что в договоре аренды чётко прописаны важные детали.',
    s6Items: [
      'Сумма залога',
      'Сумма ежемесячной аренды',
      'Даты въезда и выезда',
      'Условия оплаты коммунальных услуг',
      'Условия возврата залога',
      'Данные арендодателя или недвижимости',
    ],
    s7Title: 'Типичные риски для иностранцев',
    s7Items: [
      'Подписание без полного понимания договора',
      'Перевод денег без осмотра жилья',
      'Отсутствие подтверждения условий возврата залога',
      'Доверие только устным обещаниям',
      'Отсутствие копий документов и чеков',
    ],
    s8Title: 'Лучший вариант жилья для большинства иностранных студентов',
    s8P1: 'Для большинства студентов самый безопасный и реалистичный вариант — обычно общежитие, студенческая однокомнатная квартира с вольсэ или другое жильё с управляемым залогом.',
    s8P2: 'Чонсэ важно понимать, но на практике многие студенты не выбирают его из-за высоких первоначальных затрат.',
    finalTitle: 'Финальный совет',
    finalP:
      'Система залогов при аренде в Корее отличается от того, к чему привыкли многие иностранцы. Не спешите. Внимательно читайте договор, уточните общую стоимость и выбирайте вариант аренды, соответствующий вашему реальному бюджету. Понимание чонсэ, вольсэ и системы залогов заранее поможет сэкономить деньги и нервы в будущем.',
    relatedTitle: 'Связанные руководства',
    relatedDesc:
      'Если вы готовитесь к жизни в Корее, эти руководства также могут помочь.',
    relatedHousingBtn: 'Руководство по жилью',
    relatedStartBtn: 'Начало работы',
  },
  ja: {
    eyebrow: '住居 / 賃貸ガイド',
    heroTitle: '韓国の賃貸保証金制度解説（チョンセ・ウォルセ、外国人向け）',
    heroLead:
      '韓国の住居事情に慣れていない方にとって、保証金制度は戸惑いを感じさせることがあります。多くの外国人や留学生は入居前に保証金を支払う習慣がなく、チョンセとウォルセの違いも最初は理解しにくいかもしれません。',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText:
      '韓国では、ほとんどの入居者が入居前に保証金を支払います。留学生が多く利用するのはウォルセ（월세）で、保証金と毎月の家賃を支払う方式です。チョンセ（전세）は非常に高額の保証金を払う代わりに月々の家賃がかからない制度ですが、ほとんどの留学生には費用が高すぎることが多いです。',
    s1Title: '韓国の賃貸保証金制度とは？',
    s1P1: '韓国の賃貸保証金制度は、借主が入居前に家主に保証金を預ける仕組みです。保証金の額は契約の種類・エリア・物件の状態によって大きく異なります。',
    s1P2: '留学生には保証金の概念が珍しく感じられるかもしれませんが、韓国の住宅市場では一般的なことです。',
    s2Title: 'ウォルセとは？',
    s2P: 'ウォルセは多くの学生にとって最も一般的な選択肢で、保証金を支払い、さらに毎月家賃を支払う方式です。',
    s2Items: [
      'チョンセより保証金が少ない',
      '毎月家賃を支払う',
      'ワンルームアパートや学生向け住居に多い',
      '外国人にとって最も現実的な選択肢',
    ],
    s2Example:
      '例：大学近くの小さなアパートで保証金を支払い、毎月家賃を支払うというイメージです。',
    s3Title: 'チョンセとは？',
    s3P: 'チョンセは非常に高額の保証金を支払い、通常は月々の家賃がかからない制度です。理論上は魅力的ですが、ほとんどの留学生には保証金が高すぎることが多いです。',
    s3Items: [
      '非常に高額の初期保証金が必要',
      '通常は月々の家賃不要',
      '長期の住宅契約に多い',
      'ほとんどの学生・短期居住者には非現実的',
    ],
    s4Title: '学生の典型的な保証金はいくら？',
    s4P1: '留学生の場合、保証金の額は都市・地域・住居タイプによって異なります。ワンルームアパート・コシウォン・シェアハウスではそれぞれ異なります。',
    s4P2: '一般的に学生向けの住居はファミリー向けより保証金が低めですが、それでも契約前に正確な金額と返金条件を必ず確認しましょう。',
    s5Title: '保証金が重要な理由',
    s5P: '保証金は学生にとって大きな金額になることが多いため重要です。契約に問題が生じた場合、保証金の返還が難しくなることがあります。',
    s5Items: [
      '必ず契約書を丁寧に確認する',
      '誰が保証金を受け取るかを確認する',
      '支払い記録を保管する',
      '入居前に写真を撮っておく',
    ],
    s6Title: '契約書に含まれるべき内容',
    s6P: '保証金を支払う前に、賃貸契約書に重要な詳細が明記されていることを確認してください。',
    s6Items: [
      '保証金の金額',
      '毎月の家賃金額',
      '入居日と退去日',
      '光熱費の支払い詳細',
      '返金条件',
      '家主または物件の情報',
    ],
    s7Title: '外国人がよく直面するリスク',
    s7Items: [
      '契約書を十分に理解せずにサインする',
      '物件を確認する前にお金を送る',
      '保証金返還条件を確認しない',
      '口頭の約束のみに頼る',
      '書類や領収書のコピーを保管しない',
    ],
    s8Title: 'ほとんどの留学生に最適な住居の選択肢',
    s8P1: 'ほとんどの学生にとって最も安全で現実的な選択肢は、寮・ウォルセのワンルームアパート、または管理しやすい保証金の住居です。',
    s8P2: 'チョンセについて理解しておくことは大切ですが、実際には初期費用が高いため選ばない学生が多いです。',
    finalTitle: '最後のアドバイス',
    finalP:
      '韓国の賃貸保証金制度は多くの外国人が想像するものと異なります。焦らず、契約書をよく読み、総費用を確認し、自分の実際の予算に合った賃貸を選びましょう。チョンセ・ウォルセ・保証金の仕組みを早めに理解しておくことで、後々のお金と苦労を節約できます。',
    relatedTitle: '関連ガイド',
    relatedDesc:
      '韓国での生活を準備している方に、これらのガイドも役立つかもしれません。',
    relatedHousingBtn: '住居ガイド',
    relatedStartBtn: 'はじめに',
  },
};

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const url = `https://k-survival-kit.vercel.app/${lang}/korea-rent-deposit-system`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: '/en/korea-rent-deposit-system',
        zh: '/zh/korea-rent-deposit-system',
        ru: '/ru/korea-rent-deposit-system',
        ja: '/ja/korea-rent-deposit-system',
      },
    },
    openGraph: {
      title: m.title.replace(' | K-Survival Kit', ''),
      description: m.description,
      url,
      type: 'article',
      siteName: 'K-Survival Kit',
      locale: lang,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Korea Rent Deposit System Guide',
      description:
        'Understand deposits, monthly rent, and rental contract basics in Korea.',
    },
  };
}

export default async function KoreaRentDepositSystemPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const l: L = (lang as L) in CONTENT ? (lang as L) : 'en';
  const c = CONTENT[l];
  const pageUrl = `https://k-survival-kit.vercel.app/${lang}/korea-rent-deposit-system`;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.heroTitle,
    description: META[l].description,
    url: pageUrl,
    inLanguage: lang,
    publisher: { '@type': 'Organization', name: 'K-Survival Kit', url: 'https://k-survival-kit.vercel.app' },
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ArticleHero eyebrow={c.eyebrow} title={c.heroTitle} lead={c.heroLead} />
      <PageDisclaimer type="general" />
      <main className="bg-slate-50 px-6 py-12">
        <article className="mx-auto max-w-4xl space-y-10">
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {c.quickAnswerTitle}
            </h2>
            <p className="mt-3 leading-7 text-slate-700">{c.quickAnswerText}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s1Title}</h2>
            <p className="leading-7 text-slate-700">{c.s1P1}</p>
            <p className="leading-7 text-slate-700">{c.s1P2}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s2Title}</h2>
            <p className="leading-7 text-slate-700">{c.s2P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="leading-7 text-slate-700">{c.s2Example}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s3Title}</h2>
            <p className="leading-7 text-slate-700">{c.s3P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s3Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s4Title}</h2>
            <p className="leading-7 text-slate-700">{c.s4P1}</p>
            <p className="leading-7 text-slate-700">{c.s4P2}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s5Title}</h2>
            <p className="leading-7 text-slate-700">{c.s5P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s5Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s6Title}</h2>
            <p className="leading-7 text-slate-700">{c.s6P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s6Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s7Title}</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s7Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s8Title}</h2>
            <p className="leading-7 text-slate-700">{c.s8P1}</p>
            <p className="leading-7 text-slate-700">{c.s8P2}</p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {c.finalTitle}
            </h2>
            <p className="mt-3 leading-7 text-slate-700">{c.finalP}</p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6 text-white">
            <h2 className="text-2xl font-bold">{c.relatedTitle}</h2>
            <p className="mt-3 text-slate-300">{c.relatedDesc}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`/${lang}/housing`}
                className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900"
              >
                {c.relatedHousingBtn}
              </a>
              <a
                href={`/${lang}/getting-started`}
                className="rounded-xl border border-white/30 px-4 py-2 font-semibold text-white"
              >
                {c.relatedStartBtn}
              </a>
            </div>
          </section>
        </article>
        <RelatedPosts
          lang={lang as string}
          current="korea-rent-deposit-system"
        />
      </main>
    </>
  );
}
