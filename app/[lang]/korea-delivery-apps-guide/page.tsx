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
    title: 'Best Korea Delivery Apps for Foreigners (2026 Guide) | K-Survival Kit',
    description: 'Not sure which Korea delivery app to use? Compare Baemin, Coupang Eats, and Yogiyo, and learn how foreigners can order food easily without getting stuck.',
  },
  zh: {
    title: '韩国外卖App使用指南 | K-Survival Kit',
    description: '不知道用哪个韩国外卖App？比较Baemin、Coupang Eats和Yogiyo，了解外国人如何轻松点餐。',
  },
  ru: {
    title: 'Лучшие приложения доставки еды в Корее | K-Survival Kit',
    description: 'Не знаете, какое приложение доставки выбрать? Сравниваем Baemin, Coupang Eats и Yogiyo — как иностранцу легко заказать еду в Корее.',
  },
  ja: {
    title: '韓国デリバリーアプリガイド | K-Survival Kit',
    description: '韓国のデリバリーアプリに迷っていませんか？Baemin・Coupang Eats・Yogiyoを比較し、外国人が簡単に注文できる方法を解説します。',
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
  s3Title: string;
  s3P: string;
  s3Items: string[];
  s4Title: string;
  s4P: string;
  s4Items: string[];
  s5Title: string;
  s5P: string;
  s5Items: string[];
  s5P2: string;
  s6Title: string;
  s6Items: string[];
  s6P: string;
  s7Title: string;
  s7Items: string[];
  s8Title: string;
  s8P1: string;
  s8P2: string;
  finalTitle: string;
  finalP: string;
  relatedTitle: string;
  relatedDesc: string;
  relatedSimBtn: string;
  relatedStartBtn: string;
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Daily Life / Delivery Apps Guide',
    heroTitle: 'Best Korea Delivery Apps for Foreigners (Baemin, Coupang Eats Guide)',
    heroLead: 'Food delivery in Korea is fast, common, and extremely convenient. But many foreigners and international students feel confused at first because the most popular Korea delivery apps are built mainly for local users. This guide explains the main apps, how they work, and what to watch out for.',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText: 'The most well-known Korea delivery apps are Baemin, Coupang Eats, and Yogiyo. For many international students, Baemin and Coupang Eats are the most useful starting points, but payment, phone verification, and address setup can sometimes be confusing if you are new to Korea.',
    s1Title: 'Why Korea Delivery Apps Feel Different',
    s1P1: 'Korea delivery apps are not just for food. They are part of daily life, and people use them often because delivery is fast and widely available. However, many apps assume that you already have a Korean phone number, a local payment method, and a clear Korean address.',
    s1P2: 'That is why many foreigners can download an app but still get stuck during sign-up, payment, or address entry.',
    s2Title: '1. Baemin (Baedal Minjok)',
    s2P: 'Baemin is one of the most popular Korea delivery apps. It has a huge number of restaurants and is widely used in many cities. If you ask people in Korea which delivery app they use most often, Baemin is usually one of the first names you will hear.',
    s2Items: ['Very large restaurant selection', 'Popular in daily life', 'Good for comparing many nearby stores', 'May feel more Korean-language focused for beginners'],
    s3Title: '2. Coupang Eats',
    s3P: 'Coupang Eats is another major Korea delivery app and is often seen as simple and convenient. Some users prefer it because the app flow can feel cleaner, and promotions or discounts may appear depending on the area.',
    s3Items: ['Often simple to browse', 'Sometimes strong promotion offers', 'Useful if you already use other Coupang services', 'Availability can vary by neighborhood'],
    s4Title: '3. Yogiyo',
    s4P: 'Yogiyo is another well-known Korea delivery app and has been used by many residents for years. Depending on your area, it may still be a useful option, especially when comparing restaurant availability and prices.',
    s4Items: ['Recognized food delivery platform', 'Useful as an alternative when comparing apps', 'Restaurant availability depends on area'],
    s5Title: 'What You Usually Need Before Ordering',
    s5P: 'Most Korea delivery apps work more smoothly after you have basic local setup completed.',
    s5Items: ['A Korean phone number', 'A clear delivery address in Korea', 'A local card or supported payment method', 'Basic understanding of your building or dorm location'],
    s5P2: 'Without these, the app may still open, but actual ordering can be frustrating.',
    s6Title: 'Common Problems Foreigners Face',
    s6Items: ['Phone number verification issues', 'Address entry confusion', 'Korean-only instructions from stores', 'Payment method not working', 'Not understanding delivery requests or notes'],
    s6P: 'These problems are normal at first. Most new students need a little time before ordering becomes easy.',
    s7Title: 'How to Make Delivery Easier',
    s7Items: ['Set up your Korean phone number early', 'Save your address carefully and double-check it', 'Use simple delivery notes if needed', 'Compare the same restaurant across different apps', 'Start with popular chain stores if you want fewer surprises'],
    s8Title: 'Which Delivery App Is Best for International Students?',
    s8P1: 'There is no perfect single answer, but many international students start with Baemin or Coupang Eats. The best choice often depends on where you live, whether you already have a Korean number, and which app feels easiest for you to use.',
    s8P2: 'The practical approach is simple: install two apps, compare a few restaurants, and use the one that works best in your neighborhood.',
    finalTitle: 'Final Advice',
    finalP: 'Korea delivery apps can feel difficult on day one, but they become one of the easiest parts of daily life once your phone number, address, and payment setup are ready. For most foreigners, the best strategy is to start simple, compare apps, and learn by using them a few times.',
    relatedTitle: 'Related Guides',
    relatedDesc: 'These guides will help you use daily services in Korea more easily.',
    relatedSimBtn: 'SIM Card Guide',
    relatedStartBtn: 'Getting Started',
  },
  zh: {
    eyebrow: '日常生活 / 外卖App指南',
    heroTitle: '外国人在韩国使用外卖App指南（Baemin、Coupang Eats详解）',
    heroLead: '韩国的外卖配送速度快、普及率高、极为便捷。但许多外国人和留学生刚开始会感到困惑，因为最热门的韩国外卖App主要面向本地用户设计。本指南介绍主要App的功能、使用方式及注意事项。',
    quickAnswerTitle: '简要回答',
    quickAnswerText: '韩国最知名的外卖App有Baemin、Coupang Eats和Yogiyo。对许多留学生来说，Baemin和Coupang Eats是最实用的起点，但如果您刚到韩国，支付方式、手机验证和地址填写有时会令人困惑。',
    s1Title: '为什么韩国外卖App感觉不太一样',
    s1P1: '韩国外卖App不仅仅用于点餐，它们已融入日常生活，因为配送速度快且覆盖广。然而，大多数App默认您已有韩国手机号、本地支付方式和清晰的韩国地址。',
    s1P2: '这就是为什么许多外国人下载了App，却在注册、付款或填写地址时遇到障碍。',
    s2Title: '1. Baemin（배달의민족）',
    s2P: 'Baemin是韩国最受欢迎的外卖App之一，拥有大量餐厅资源，在许多城市广泛使用。如果你问韩国人最常用哪个外卖App，Baemin通常是最先被提到的名字之一。',
    s2Items: ['餐厅选择非常丰富', '日常生活中普遍使用', '方便比较附近多家商家', '对初学者来说界面偏向韩语'],
    s3Title: '2. Coupang Eats',
    s3P: 'Coupang Eats是另一款主流韩国外卖App，通常被认为简洁便捷。部分用户更喜欢它，因为App流程更清晰，而且根据地区不同可能会有促销优惠。',
    s3Items: ['界面简洁易浏览', '有时提供较强的促销优惠', '如果您已使用其他Coupang服务则更方便', '可用性因地区而有所不同'],
    s4Title: '3. Yogiyo',
    s4P: 'Yogiyo是另一款知名的韩国外卖App，已被许多居民使用多年。根据您所在区域，它仍可能是一个实用选择，尤其是在比较餐厅可用性和价格时。',
    s4Items: ['知名的外卖配送平台', '作为比较其他App时的备选', '餐厅可用性因地区而异'],
    s5Title: '下单前通常需要准备什么',
    s5P: '大多数韩国外卖App在您完成基本本地设置后使用起来会更顺畅。',
    s5Items: ['韩国手机号码', '清晰的韩国配送地址', '本地银行卡或支持的支付方式', '了解您所在楼栋或宿舍的位置'],
    s5P2: '没有这些，App虽然可以打开，但实际下单过程可能会令人沮丧。',
    s6Title: '外国人常遇到的问题',
    s6Items: ['手机号码验证失败', '地址填写困惑', '商家备注仅提供韩语', '支付方式不支持', '看不懂配送备注或要求'],
    s6P: '这些问题一开始很正常。大多数新生需要一点时间才能轻松下单。',
    s7Title: '如何让外卖更顺畅',
    s7Items: ['尽早办好韩国手机号', '仔细保存地址并反复确认', '如有需要，使用简单的配送备注', '在不同App上比较同一家餐厅', '如果想减少意外，从知名连锁店开始'],
    s8Title: '哪款外卖App最适合留学生？',
    s8P1: '没有完美的单一答案，但许多留学生从Baemin或Coupang Eats开始。最佳选择通常取决于您的居住地、是否已有韩国号码，以及哪款App对您来说最容易上手。',
    s8P2: '实用的方法很简单：安装两款App，比较几家餐厅，然后使用在您所在区域效果最好的那款。',
    finalTitle: '最终建议',
    finalP: '韩国外卖App在第一天可能感觉有些难用，但一旦您的手机号、地址和支付设置就绪，它就会成为日常生活中最简单的部分之一。对大多数外国人来说，最好的策略是从简单开始，多比较几款App，多用几次慢慢熟悉。',
    relatedTitle: '相关指南',
    relatedDesc: '这些指南将帮助您更轻松地使用韩国的日常服务。',
    relatedSimBtn: 'SIM卡指南',
    relatedStartBtn: '入门指南',
  },
  ru: {
    eyebrow: 'Повседневная жизнь / Руководство по приложениям доставки',
    heroTitle: 'Лучшие приложения доставки еды в Корее для иностранцев (Baemin, Coupang Eats)',
    heroLead: 'Доставка еды в Корее — быстрая, распространённая и очень удобная. Но многие иностранцы и студенты поначалу теряются, потому что популярные корейские приложения доставки созданы в первую очередь для местных пользователей. Это руководство объясняет основные приложения, как они работают и на что обратить внимание.',
    quickAnswerTitle: 'Быстрый ответ',
    quickAnswerText: 'Самые известные приложения доставки в Корее — Baemin, Coupang Eats и Yogiyo. Для многих иностранных студентов Baemin и Coupang Eats — лучшие отправные точки, однако оплата, верификация номера и ввод адреса могут вызвать затруднения, если вы только приехали в Корею.',
    s1Title: 'Почему корейские приложения доставки кажутся непривычными',
    s1P1: 'Корейские приложения доставки — это не просто еда. Они часть повседневной жизни, и люди пользуются ими часто, потому что доставка быстрая и широко доступная. Однако большинство приложений предполагают, что у вас уже есть корейский номер телефона, местный способ оплаты и чёткий корейский адрес.',
    s1P2: 'Именно поэтому многие иностранцы могут скачать приложение, но застревают на этапе регистрации, оплаты или ввода адреса.',
    s2Title: '1. Baemin (Baedal Minjok)',
    s2P: 'Baemin — одно из самых популярных приложений доставки в Корее. В нём огромный выбор ресторанов, и оно широко используется во многих городах. Если спросить корейцев, какое приложение они используют чаще всего, Baemin обычно называют одним из первых.',
    s2Items: ['Очень большой выбор ресторанов', 'Популярно в повседневной жизни', 'Удобно для сравнения многих ближайших заведений', 'Для новичков интерфейс может казаться ориентированным на корейский язык'],
    s3Title: '2. Coupang Eats',
    s3P: 'Coupang Eats — ещё одно крупное приложение доставки в Корее, которое часто считают простым и удобным. Некоторые пользователи предпочитают его, потому что интерфейс кажется чище, а в зависимости от района могут появляться акции и скидки.',
    s3Items: ['Простой и понятный интерфейс', 'Иногда выгодные акционные предложения', 'Удобно, если вы уже пользуетесь другими сервисами Coupang', 'Доступность может варьироваться в зависимости от района'],
    s4Title: '3. Yogiyo',
    s4P: 'Yogiyo — ещё одно известное приложение доставки в Корее, которым жители пользуются уже много лет. В зависимости от вашего района оно по-прежнему может быть полезным вариантом, особенно при сравнении доступности ресторанов и цен.',
    s4Items: ['Известная платформа доставки еды', 'Полезно как альтернатива при сравнении приложений', 'Доступность ресторанов зависит от района'],
    s5Title: 'Что обычно нужно перед первым заказом',
    s5P: 'Большинство корейских приложений доставки работают значительно удобнее после базовой местной настройки.',
    s5Items: ['Корейский номер телефона', 'Чёткий адрес доставки в Корее', 'Местная карта или поддерживаемый способ оплаты', 'Понимание местоположения вашего здания или общежития'],
    s5P2: 'Без этого приложение может открыться, но реальный процесс заказа будет вызывать раздражение.',
    s6Title: 'Типичные проблемы иностранцев',
    s6Items: ['Проблемы с верификацией номера телефона', 'Путаница при вводе адреса', 'Инструкции от магазинов только на корейском', 'Способ оплаты не работает', 'Непонимание запросов или комментариев к доставке'],
    s6P: 'Эти проблемы нормальны поначалу. Большинству новых студентов нужно немного времени, чтобы привыкнуть к заказам.',
    s7Title: 'Как упростить доставку',
    s7Items: ['Оформите корейский номер телефона заблаговременно', 'Тщательно сохраните адрес и перепроверьте его', 'При необходимости используйте простые комментарии к доставке', 'Сравнивайте один и тот же ресторан в разных приложениях', 'Начните с популярных сетевых заведений, чтобы избежать неожиданностей'],
    s8Title: 'Какое приложение доставки лучше для иностранных студентов?',
    s8P1: 'Единственного идеального ответа нет, но многие иностранные студенты начинают с Baemin или Coupang Eats. Лучший выбор часто зависит от места проживания, наличия корейского номера и того, какое приложение кажется вам проще.',
    s8P2: 'Практичный подход прост: установите два приложения, сравните несколько ресторанов и используйте то, которое лучше работает в вашем районе.',
    finalTitle: 'Финальный совет',
    finalP: 'Приложения доставки в Корее могут показаться сложными в первый день, но после настройки номера телефона, адреса и оплаты они становятся одной из самых простых частей повседневной жизни. Для большинства иностранцев лучшая стратегия — начать с простого, сравнить приложения и освоиться, используя их несколько раз.',
    relatedTitle: 'Связанные руководства',
    relatedDesc: 'Эти руководства помогут вам легче пользоваться повседневными сервисами в Корее.',
    relatedSimBtn: 'Руководство по SIM-карте',
    relatedStartBtn: 'Начало работы',
  },
  ja: {
    eyebrow: '日常生活 / デリバリーアプリガイド',
    heroTitle: '外国人向け韓国デリバリーアプリガイド（Baemin・Coupang Eats解説）',
    heroLead: '韓国のフードデリバリーは速く、一般的で、非常に便利です。しかし、最も人気のある韓国のデリバリーアプリは主に地元ユーザー向けに作られているため、多くの外国人や留学生は最初に戸惑いを感じます。このガイドでは、主要なアプリの特徴、使い方、注意点を解説します。',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText: '韓国で最も有名なデリバリーアプリはBaemin・Coupang Eats・Yogiyoです。多くの留学生にとってBaeminとCoupang Eatsが最初の選択肢として使いやすいですが、韓国に来たばかりの方には支払い・電話番号認証・住所入力で戸惑うことがあります。',
    s1Title: '韓国のデリバリーアプリが独特に感じる理由',
    s1P1: '韓国のデリバリーアプリは単なる食事注文ツールではありません。配達が速く広く利用できるため、日常生活の一部になっています。ただし、ほとんどのアプリは韓国の電話番号・現地の支払い方法・明確な韓国の住所があることを前提に設計されています。',
    s1P2: 'そのため、多くの外国人はアプリをダウンロードできても、登録・支払い・住所入力で詰まってしまいます。',
    s2Title: '1. Baemin（배달의민족）',
    s2P: 'Baeminは韓国で最も人気のあるデリバリーアプリの一つです。レストランの数が非常に多く、多くの都市で広く使われています。韓国人に「どのデリバリーアプリをよく使うか」と聞くと、Baeminは最初に挙がる名前の一つです。',
    s2Items: ['非常に多いレストランの選択肢', '日常生活で広く使われている', '近くの多くの店舗を比較しやすい', '初心者には韓国語中心のUIに感じることがある'],
    s3Title: '2. Coupang Eats',
    s3P: 'Coupang Eatsも韓国の主要デリバリーアプリで、シンプルで使いやすいと評価されています。アプリの流れがすっきりしており、エリアによってはプロモーションや割引が表示されることもあります。',
    s3Items: ['シンプルで見やすいUI', '時に充実したプロモーションオファー', 'すでに他のCoupangサービスを使っている方に便利', '利用可能なエリアが地域によって異なる'],
    s4Title: '3. Yogiyo',
    s4P: 'Yogiyoも長年多くの住民に使われている有名なデリバリーアプリです。お住まいのエリアによっては、特にレストランの利用可能性や価格を比較する際に有用な選択肢です。',
    s4Items: ['知名度のあるフードデリバリープラットフォーム', 'アプリを比較する際の代替として有用', 'レストランの利用可能性はエリアによって異なる'],
    s5Title: '注文前に通常必要なもの',
    s5P: 'ほとんどの韓国デリバリーアプリは、基本的な現地設定が完了していると使いやすくなります。',
    s5Items: ['韓国の電話番号', '韓国の明確な配達先住所', '現地カードまたは対応した支払い方法', '自分の建物や寮の場所の基本的な理解'],
    s5P2: 'これらがなくてもアプリは開けますが、実際の注文が煩わしくなることがあります。',
    s6Title: '外国人がよく直面する問題',
    s6Items: ['電話番号の認証エラー', '住所入力の混乱', '店舗からの案内が韓国語のみ', '支払い方法が機能しない', '配達メモや要望が理解できない'],
    s6P: 'これらの問題は最初は普通のことです。ほとんどの新入生は注文に慣れるまで少し時間が必要です。',
    s7Title: 'デリバリーをより使いやすくするために',
    s7Items: ['早めに韓国の電話番号を取得しておく', '住所を丁寧に保存し、再確認する', '必要に応じてシンプルな配達メモを使う', '同じレストランを複数のアプリで比較する', '予想外を減らしたいなら人気チェーン店から始める'],
    s8Title: '留学生に最適なデリバリーアプリは？',
    s8P1: '完璧な唯一の答えはありませんが、多くの留学生はBaeminまたはCoupang Eatsから始めます。最良の選択肢は居住地・韓国の番号の有無・どのアプリが使いやすいかによって異なります。',
    s8P2: '実践的なアプローチはシンプルです：2つのアプリをインストールし、いくつかのレストランを比較して、自分の地域で最もよく機能する方を使いましょう。',
    finalTitle: '最後のアドバイス',
    finalP: '韓国のデリバリーアプリは初日は難しく感じるかもしれませんが、電話番号・住所・支払いの設定が整えば、日常生活で最も簡単な部分の一つになります。ほとんどの外国人にとって、シンプルに始め、アプリを比較して、何度か使いながら慣れていくのが最善の戦略です。',
    relatedTitle: '関連ガイド',
    relatedDesc: 'これらのガイドは、韓国での日常サービスをより簡単に利用するのに役立ちます。',
    relatedSimBtn: 'SIMカードガイド',
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

  const url = `https://k-survival-kit.vercel.app/${lang}/korea-delivery-apps-guide`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: '/en/korea-delivery-apps-guide',
        zh: '/zh/korea-delivery-apps-guide',
        ru: '/ru/korea-delivery-apps-guide',
        ja: '/ja/korea-delivery-apps-guide',
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
      title: 'Best Korea Delivery Apps for Foreigners (2026 Guide)',
      description:
        'A practical Korea food delivery guide for international students and foreigners.',
    },
  };
}

export default async function KoreaDeliveryAppsGuidePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const l: L = (lang as L) in CONTENT ? (lang as L) : 'en';
  const c = CONTENT[l];
  const pageUrl = `https://k-survival-kit.vercel.app/${lang}/korea-delivery-apps-guide`;

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
      <ArticleHero
        eyebrow={c.eyebrow}
        title={c.heroTitle}
        lead={c.heroLead}
      />
      <PageDisclaimer type="general" />
      <main className="bg-slate-50 px-6 py-12">
        <article className="mx-auto max-w-4xl space-y-10">

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">{c.quickAnswerTitle}</h2>
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
              {c.s2Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s3Title}</h2>
            <p className="leading-7 text-slate-700">{c.s3P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s3Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s4Title}</h2>
            <p className="leading-7 text-slate-700">{c.s4P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s4Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s5Title}</h2>
            <p className="leading-7 text-slate-700">{c.s5P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s5Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="leading-7 text-slate-700">{c.s5P2}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s6Title}</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s6Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="leading-7 text-slate-700">{c.s6P}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s7Title}</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s7Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s8Title}</h2>
            <p className="leading-7 text-slate-700">{c.s8P1}</p>
            <p className="leading-7 text-slate-700">{c.s8P2}</p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">{c.finalTitle}</h2>
            <p className="mt-3 leading-7 text-slate-700">{c.finalP}</p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6 text-white">
            <h2 className="text-2xl font-bold">{c.relatedTitle}</h2>
            <p className="mt-3 text-slate-300">{c.relatedDesc}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`/${lang}/how-to-get-sim-card-in-korea`}
                className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900"
              >
                {c.relatedSimBtn}
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
        <div className="mt-10 max-w-4xl mx-auto">
          <AffiliateBanner
            icon="🛍️"
            title={
              ({ en: 'Shop on Coupang', zh: '在Coupang购物', ru: 'Покупки на Coupang', ja: 'Coupangでショッピング' } as Record<string, string>)[lang] ?? 'Shop on Coupang'
            }
            description={
              ({
                en: "Can't find something in a Korean store? Order it on Coupang — Korea's largest online marketplace with rocket-fast delivery.",
                zh: '在韩国找不到某样东西？在韩国最大的网上商城Coupang下单，享受超快火箭配送。',
                ru: 'Не можете найти нужный товар в корейском магазине? Заказывайте на Coupang — крупнейшем онлайн-маркетплейсе Кореи с молниеносной доставкой.',
                ja: '韓国のお店で見つからないものは、Coupangで注文！韓国最大のオンラインマーケットプレイスで超速ロケット配送。',
              } as Record<string, string>)[lang] ?? "Can't find something in a Korean store? Order it on Coupang — Korea's largest online marketplace with rocket-fast delivery."
            }
            href="https://link.coupang.com/a/esx4lG"
            ctaText={({ en: 'Shop on Coupang', zh: '前往Coupang', ru: 'Перейти на Coupang', ja: 'Coupangで購入' } as Record<string, string>)[lang] ?? 'Shop on Coupang'}
            accentColor="rose"
          />
        </div>
        <RelatedPosts lang={lang as string} current="korea-delivery-apps-guide" />
      </main>
    </>
  );
}