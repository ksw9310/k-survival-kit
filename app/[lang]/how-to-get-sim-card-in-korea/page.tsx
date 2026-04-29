import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import ArticleHero from '@/components/ArticleHero';
import PageDisclaimer from '@/components/PageDisclaimer';
import RelatedPosts from '@/components/RelatedPosts';
import AffiliateBanner from '@/components/AffiliateBanner';
import JsonLd from '@/components/JsonLd';

// TODO: Replace href with Airalo affiliate link once approved
const AIRALO_AFFILIATE_URL = 'https://www.airalo.com/korea-esim';

type L = 'en' | 'zh' | 'ru' | 'ja';

const META: Record<L, { title: string; description: string }> = {
  en: {
    title: 'How to Get a SIM Card in Korea (2026 Guide) | K-Survival Kit',
    description: 'Struggling to get a SIM card in Korea? This guide shows foreigners and international students the easiest way to buy a SIM at the airport, compare plans, and avoid common mistakes.',
  },
  zh: {
    title: '韩国SIM卡购买指南 | K-Survival Kit',
    description: '在韩国买SIM卡感到困惑？本指南帮助外国人和留学生在机场购卡、比较资费方案，轻松完成手机网络设置。',
  },
  ru: {
    title: 'Как получить SIM-карту в Корее | K-Survival Kit',
    description: 'Не знаете, как купить SIM-карту в Корее? Этот гайд поможет иностранцам и студентам купить карту в аэропорту, выбрать тариф и избежать ошибок.',
  },
  ja: {
    title: '韓国でSIMカードを取得する方法 | K-Survival Kit',
    description: '韓国でSIMカードの購入に困っていませんか？このガイドでは、空港での購入方法、プランの比較、よくあるミスの回避方法を外国人向けに解説します。',
  },
};

type PageContent = {
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  introP: string;
  affiliateTitle: string;
  affiliateDesc: string;
  affiliateCta: string;
  quickAnswerTitle: string;
  quickAnswerText: string;
  s1Title: string;
  s1P: string;
  s1Items: string[];
  s2Title: string;
  s2P: string;
  s2KT: string;
  s2SKT: string;
  s2LG: string;
  s3Title: string;
  s3P1: string;
  s3P2: string;
  s4Title: string;
  s4P: string;
  s4Items: string[];
  s5Title: string;
  s5P: string;
  s5Items: string[];
  s6Title: string;
  s6P: string;
  s7Title: string;
  s7P: string;
  s8Title: string;
  s8Items: string[];
  finalTitle: string;
  finalP: string;
  nextTitle: string;
  nextP: string;
  arcLabel: string;
  bankLabel: string;
  deliveryLabel: string;
  relatedTitle: string;
  relatedDesc: string;
  relatedStartBtn: string;
  relatedHousingBtn: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Daily Life / SIM Card Guide',
    heroTitle: 'How to Get a SIM Card in Korea for Foreigners (2026 Guide)',
    heroLead: 'If you are a foreigner or international student arriving in Korea, getting a Korean phone number early makes life much easier. A SIM card in Korea is often needed for delivery apps, banking, account verification, and everyday communication.',
    introP: 'A SIM card in Korea is essential for foreigners and international students who want to use delivery apps, open bank accounts, and verify online services.',
    affiliateTitle: 'Get a Korea eSIM Before You Land',
    affiliateDesc: 'Airalo lets you buy a Korea eSIM online and activate it before your flight. No airport queues, no physical SIM needed — just scan a QR code and you\'re connected the moment you land.',
    affiliateCta: 'Browse Korea eSIM Plans',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText: 'The easiest way to get a SIM card in Korea is to buy one at Incheon Airport or reserve one online for airport pickup. Most international students start with a prepaid SIM card or eSIM, then compare monthly plans later if they stay long-term.',
    s1Title: 'Where to Buy a SIM Card in Korea',
    s1P: 'The easiest places to buy a SIM card in Korea are Incheon Airport, telecom stores, and some convenience stores. Most travelers and new students choose the airport first because it is simple and fast.',
    s1Items: ['Incheon Airport telecom counters', 'Official KT, SKT, and LG U+ stores', 'Some convenience stores and travel SIM sellers', 'Online reservation with airport pickup'],
    s2Title: 'Main Telecom Companies in Korea',
    s2P: 'The three major telecom providers are KT, SKT, and LG U+. All are commonly used in Korea and usually offer tourist SIM cards, prepaid plans, and data options.',
    s2KT: 'KT: often easy for foreigners and airport pickup',
    s2SKT: 'SKT: strong brand and wide coverage',
    s2LG: 'LG U+: sometimes good prepaid options',
    s3Title: 'How Much Does a SIM Card Cost in Korea?',
    s3P1: 'A SIM card in Korea usually costs around 30,000 to 60,000 KRW, depending on the data amount, call options, and length of use. eSIM and prepaid plans may have slightly different prices.',
    s3P2: 'If you stay for a short period, a prepaid tourist SIM is usually the easiest choice. If you stay longer, you may want to compare monthly plans after getting your ARC.',
    s4Title: 'Best Option for International Students',
    s4P: 'For most international students, the best first step is a prepaid SIM card or eSIM. It is fast, simple, and does not require much setup on your first day in Korea.',
    s4Items: ['Short stay: prepaid SIM or eSIM', 'Long stay: monthly plan after settling in', 'Bring your passport when buying', 'Some long-term plans may require an ARC later'],
    s5Title: 'eSIM vs Physical SIM',
    s5P: 'eSIM is convenient because you do not need to insert a physical card. However, not every phone supports eSIM. A physical SIM is still the most common option for many new arrivals.',
    s5Items: ['eSIM: fast setup, no card needed', 'Physical SIM: more common, easy to find', 'Check your phone compatibility before buying'],
    s6Title: 'What You Need to Buy',
    s6P: 'In most cases, you should bring your passport. For some long-term mobile plans in Korea, additional documents may be required later.',
    s7Title: 'Practical Tips Before You Buy',
    s7P: '',
    s8Title: '',
    s8Items: ['Buy at the airport if you want the easiest first-day setup', 'Compare data limits before choosing a plan', 'Check whether tethering is included', 'Make sure your phone is unlocked', 'Keep your receipt and SIM packaging for support'],
    finalTitle: 'Final Advice',
    finalP: 'If you are new to Korea, do not overthink it. Start with the easiest SIM card in Korea that gives you data and a Korean number quickly. After that, you can switch to a more suitable plan once you understand your needs better.',
    nextTitle: 'What to Do After Getting Your SIM Card',
    nextP: 'After setting up your SIM card in Korea, the next steps usually include getting your ARC card and opening a bank account.',
    arcLabel: 'ARC Card Guide',
    bankLabel: 'Bank Account Guide',
    deliveryLabel: 'Delivery Apps Guide',
    relatedTitle: 'Related Guides',
    relatedDesc: 'After getting your SIM card, the next important step is usually your ARC and basic setup for living in Korea.',
    relatedStartBtn: 'Getting Started',
    relatedHousingBtn: 'Housing Guide',
    faqTitle: 'FAQ',
    faq1Q: 'Can foreigners buy a SIM card in Korea?',
    faq1A: 'Yes, foreigners can easily buy a SIM card in Korea. Most people purchase one at Incheon Airport or telecom stores using their passport.',
    faq2Q: 'Do I need an ARC to get a SIM card in Korea?',
    faq2A: 'No, you do not need an ARC for prepaid SIM cards. However, long-term mobile plans usually require an ARC.',
    faq3Q: 'Which SIM card is best for international students in Korea?',
    faq3A: 'Most international students start with a prepaid SIM or eSIM because it is quick and does not require complicated setup.',
  },
  zh: {
    eyebrow: '日常生活 / SIM卡指南',
    heroTitle: '外国人在韩国如何办理SIM卡（2026年指南）',
    heroLead: '如果您是刚到韩国的外国人或留学生，尽早获得韩国手机号码会让生活方便很多。在韩国，SIM卡通常是使用外卖应用、开设银行账户、账户验证和日常通话所必需的。',
    introP: '对于想使用外卖应用、开设银行账户和验证网络服务的外国人和留学生来说，韩国SIM卡是必不可少的。',
    affiliateTitle: '落地前先购入韩国eSIM',
    affiliateDesc: 'Airalo可让您在线购买韩国eSIM并在出发前激活。无需在机场排队，无需实体SIM卡——只需扫描二维码，落地即可上网。',
    affiliateCta: '浏览韩国eSIM套餐',
    quickAnswerTitle: '简要回答',
    quickAnswerText: '在韩国获取SIM卡最简单的方式是在仁川机场购买，或在线预订并在机场取卡。大多数留学生从预付SIM卡或eSIM开始，如果长期居住则之后再比较月租套餐。',
    s1Title: '在韩国哪里可以买到SIM卡',
    s1P: '在韩国购买SIM卡最方便的地方是仁川机场、电信营业厅以及部分便利店。大多数旅客和新生优先选择机场，因为简单快捷。',
    s1Items: ['仁川机场电信柜台', 'KT、SKT和LG U+官方营业厅', '部分便利店和旅游SIM卡销售商', '在线预约并在机场取卡'],
    s2Title: '韩国主要电信运营商',
    s2P: '三大主要电信运营商是KT、SKT和LG U+，均在韩国广泛使用，通常提供旅游SIM卡、预付套餐和流量选项。',
    s2KT: 'KT：对外国人友好，机场取卡方便',
    s2SKT: 'SKT：品牌强大，网络覆盖广',
    s2LG: 'LG U+：有时提供较好的预付套餐',
    s3Title: '在韩国买SIM卡要多少钱？',
    s3P1: '韩国SIM卡通常售价在30,000至60,000韩元之间，具体取决于流量、通话选项和使用时长。eSIM和预付套餐的价格可能略有不同。',
    s3P2: '如果短期逗留，旅游预付SIM通常是最简便的选择。如果长期居住，拿到ARC后可以再比较月租套餐。',
    s4Title: '留学生的最佳选择',
    s4P: '对大多数留学生来说，第一步最好选择预付SIM卡或eSIM。它速度快、流程简单，不需要在抵韩第一天进行复杂的设置。',
    s4Items: ['短期：预付SIM或eSIM', '长期：安顿后选择月租套餐', '购买时携带护照', '部分长期套餐之后可能需要ARC'],
    s5Title: 'eSIM与实体SIM对比',
    s5P: 'eSIM方便之处在于无需插入实体卡，但并非所有手机都支持eSIM。对于许多新来者来说，实体SIM仍然是最常见的选择。',
    s5Items: ['eSIM：设置快速，无需实体卡', '实体SIM：更常见，容易购买', '购买前请确认手机兼容性'],
    s6Title: '购买时需要准备什么',
    s6P: '大多数情况下只需携带护照。某些韩国长期手机套餐日后可能需要提供额外文件。',
    s7Title: '购买前的实用建议',
    s7P: '',
    s8Title: '',
    s8Items: ['如果想要最简便的第一天设置，在机场购买', '选择套餐前比较流量限制', '确认是否包含热点功能', '确保手机已解锁', '保留收据和SIM卡包装以备客服使用'],
    finalTitle: '最终建议',
    finalP: '如果您刚到韩国，不要想太多。先选择最简单、能快速提供流量和韩国号码的SIM卡。之后，等您更了解自己的需求时，再换到更合适的套餐。',
    nextTitle: '获取SIM卡后的下一步',
    nextP: '在韩国办好SIM卡后，下一步通常是办理ARC卡和开设银行账户。',
    arcLabel: 'ARC卡指南',
    bankLabel: '银行账户指南',
    deliveryLabel: '外卖App指南',
    relatedTitle: '相关指南',
    relatedDesc: '获取SIM卡后，下一步通常是办理ARC和完成在韩国生活的基本设置。',
    relatedStartBtn: '入门指南',
    relatedHousingBtn: '住房指南',
    faqTitle: '常见问题',
    faq1Q: '外国人可以在韩国购买SIM卡吗？',
    faq1A: '可以，外国人在韩国购买SIM卡很方便。大多数人在仁川机场或电信营业厅凭护照购买。',
    faq2Q: '在韩国买SIM卡需要ARC吗？',
    faq2A: '购买预付SIM卡不需要ARC。但长期手机套餐通常需要ARC。',
    faq3Q: '留学生在韩国最适合哪种SIM卡？',
    faq3A: '大多数留学生从预付SIM或eSIM开始，因为速度快且不需要复杂的设置。',
  },
  ru: {
    eyebrow: 'Повседневная жизнь / Руководство по SIM-карте',
    heroTitle: 'Как получить SIM-карту в Корее для иностранцев (Руководство 2026)',
    heroLead: 'Если вы иностранец или студент, приезжающий в Корею, ранний доступ к корейскому номеру телефона значительно упростит жизнь. SIM-карта в Корее часто нужна для приложений доставки, банковских услуг, верификации аккаунтов и повседневного общения.',
    introP: 'SIM-карта в Корее необходима иностранцам и студентам, которые хотят пользоваться приложениями доставки, открывать банковские счета и верифицировать онлайн-сервисы.',
    affiliateTitle: 'Купите корейскую eSIM до вылета',
    affiliateDesc: 'Airalo позволяет купить корейскую eSIM онлайн и активировать её до рейса. Никаких очередей в аэропорту, никакой физической SIM-карты — просто отсканируйте QR-код и выходите в интернет сразу после приземления.',
    affiliateCta: 'Посмотреть планы eSIM для Кореи',
    quickAnswerTitle: 'Быстрый ответ',
    quickAnswerText: 'Самый простой способ получить SIM-карту в Корее — купить её в аэропорту Инчхон или заказать онлайн с получением в аэропорту. Большинство студентов начинают с предоплаченной SIM-карты или eSIM, а потом при необходимости выбирают месячный тариф.',
    s1Title: 'Где купить SIM-карту в Корее',
    s1P: 'Самые удобные места для покупки SIM-карты в Корее — аэропорт Инчхон, магазины операторов связи и некоторые круглосуточные магазины. Большинство путешественников и новых студентов выбирают аэропорт, потому что это просто и быстро.',
    s1Items: ['Стойки операторов в аэропорту Инчхон', 'Официальные магазины KT, SKT и LG U+', 'Некоторые удобные магазины и продавцы туристических SIM-карт', 'Онлайн-заказ с получением в аэропорту'],
    s2Title: 'Основные операторы связи в Корее',
    s2P: 'Три крупных оператора — KT, SKT и LG U+. Все широко используются в Корее и обычно предлагают туристические SIM-карты, предоплаченные тарифы и пакеты интернета.',
    s2KT: 'KT: часто удобен для иностранцев, можно получить в аэропорту',
    s2SKT: 'SKT: сильный бренд и широкое покрытие',
    s2LG: 'LG U+: иногда хорошие предоплаченные варианты',
    s3Title: 'Сколько стоит SIM-карта в Корее?',
    s3P1: 'SIM-карта в Корее обычно стоит от 30 000 до 60 000 вон, в зависимости от объёма данных, опций звонков и срока использования. eSIM и предоплаченные тарифы могут стоить немного иначе.',
    s3P2: 'Для короткого пребывания туристическая предоплаченная SIM обычно самый простой вариант. При длительном пребывании можно сравнить месячные тарифы после получения карты ARC.',
    s4Title: 'Лучший вариант для иностранных студентов',
    s4P: 'Для большинства студентов лучший первый шаг — предоплаченная SIM-карта или eSIM. Это быстро, просто и не требует сложной настройки в первый день в Корее.',
    s4Items: ['Короткое пребывание: предоплаченная SIM или eSIM', 'Длительное пребывание: месячный тариф после обустройства', 'Возьмите паспорт при покупке', 'Некоторые долгосрочные тарифы позже могут потребовать карту ARC'],
    s5Title: 'eSIM vs физическая SIM-карта',
    s5P: 'eSIM удобна тем, что не нужно вставлять физическую карту. Однако не каждый телефон поддерживает eSIM. Физическая SIM по-прежнему самый распространённый вариант для многих новоприбывших.',
    s5Items: ['eSIM: быстрая настройка, не нужна физическая карта', 'Физическая SIM: более распространена, легко найти', 'Проверьте совместимость телефона перед покупкой'],
    s6Title: 'Что нужно для покупки',
    s6P: 'В большинстве случаев достаточно паспорта. Для некоторых долгосрочных мобильных тарифов в Корее позже могут понадобиться дополнительные документы.',
    s7Title: 'Практические советы перед покупкой',
    s7P: '',
    s8Title: '',
    s8Items: ['Купите в аэропорту, если хотите простейшую настройку в первый день', 'Сравните лимиты данных перед выбором тарифа', 'Проверьте, включена ли раздача интернета', 'Убедитесь, что телефон разблокирован', 'Сохраните чек и упаковку SIM-карты для поддержки'],
    finalTitle: 'Финальный совет',
    finalP: 'Если вы только приехали в Корею, не усложняйте. Начните с самой простой SIM-карты, которая даст вам интернет и корейский номер. После этого, когда лучше поймёте свои потребности, можно перейти на более подходящий тариф.',
    nextTitle: 'Что делать после получения SIM-карты',
    nextP: 'После настройки SIM-карты в Корее следующими шагами обычно будут получение карты ARC и открытие банковского счёта.',
    arcLabel: 'Руководство по карте ARC',
    bankLabel: 'Руководство по банковскому счёту',
    deliveryLabel: 'Руководство по приложениям доставки',
    relatedTitle: 'Связанные руководства',
    relatedDesc: 'После получения SIM-карты следующий важный шаг — обычно карта ARC и базовая настройка для жизни в Корее.',
    relatedStartBtn: 'Начало работы',
    relatedHousingBtn: 'Руководство по жилью',
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Могут ли иностранцы купить SIM-карту в Корее?',
    faq1A: 'Да, иностранцы легко могут купить SIM-карту в Корее. Большинство покупает её в аэропорту Инчхон или магазинах операторов по паспорту.',
    faq2Q: 'Нужна ли карта ARC для покупки SIM-карты в Корее?',
    faq2A: 'Нет, для предоплаченных SIM-карт карта ARC не нужна. Однако долгосрочные мобильные тарифы обычно её требуют.',
    faq3Q: 'Какая SIM-карта лучше для иностранных студентов в Корее?',
    faq3A: 'Большинство студентов начинают с предоплаченной SIM или eSIM, потому что это быстро и не требует сложной настройки.',
  },
  ja: {
    eyebrow: '日常生活 / SIMカードガイド',
    heroTitle: '韓国でSIMカードを取得する方法（外国人向け2026年ガイド）',
    heroLead: '韓国に来る外国人や留学生にとって、早めに韓国の電話番号を入手すると生活が格段に楽になります。韓国のSIMカードは、デリバリーアプリ・銀行口座・アカウント認証・日常のコミュニケーションに必要となることが多いです。',
    introP: 'デリバリーアプリを使いたい、銀行口座を開設したい、オンラインサービスを認証したい外国人・留学生にとって、韓国のSIMカードは必須です。',
    affiliateTitle: '渡航前に韓国eSIMを購入しよう',
    affiliateDesc: 'Airaloなら韓国のeSIMをオンラインで購入し、フライト前に有効化できます。空港での行列も物理SIMも不要 — QRコードをスキャンするだけで、着陸と同時に接続できます。',
    affiliateCta: '韓国eSIMプランを見る',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText: '韓国でSIMカードを入手する最も簡単な方法は、仁川空港で購入するか、オンラインで予約して空港で受け取ることです。多くの留学生はまずプリペイドSIMまたはeSIMから始め、長期滞在の場合は後で月額プランを比較します。',
    s1Title: '韓国でSIMカードを買う場所',
    s1P: '韓国でSIMカードを最も簡単に購入できる場所は、仁川空港・通信会社のショップ・一部のコンビニです。旅行者や新入生の多くは、シンプルで早い空港を最初に選びます。',
    s1Items: ['仁川空港の通信会社カウンター', 'KT・SKT・LG U+の公式ショップ', '一部のコンビニや旅行者向けSIM販売店', 'オンライン予約・空港受け取り'],
    s2Title: '韓国の主要通信会社',
    s2P: '三大通信会社はKT、SKT、LG U+です。いずれも韓国で広く使用されており、通常は旅行者向けSIM・プリペイドプラン・データオプションを提供しています。',
    s2KT: 'KT：外国人に対応しやすく、空港での受け取りも便利',
    s2SKT: 'SKT：強いブランドと広いエリアカバー',
    s2LG: 'LG U+：プリペイドオプションが充実している場合がある',
    s3Title: '韓国のSIMカードはいくらですか？',
    s3P1: '韓国のSIMカードは通常、データ量・通話オプション・使用期間によって30,000〜60,000ウォン程度です。eSIMやプリペイドプランは若干異なる場合があります。',
    s3P2: '短期滞在の場合、旅行者向けプリペイドSIMが最も手軽な選択肢です。長期滞在の場合は、ARC取得後に月額プランを比較するとよいでしょう。',
    s4Title: '留学生にとっての最良の選択肢',
    s4P: 'ほとんどの留学生にとって最初の一歩は、プリペイドSIMまたはeSIMです。韓国初日に複雑な設定が不要で、素早く簡単に使えます。',
    s4Items: ['短期滞在：プリペイドSIMまたはeSIM', '長期滞在：落ち着いてから月額プランに切り替え', '購入時はパスポートを持参', '長期プランは後でARCが必要になる場合がある'],
    s5Title: 'eSIMと物理SIMの比較',
    s5P: 'eSIMは物理カードを挿入する必要がないため便利ですが、すべての端末がeSIMに対応しているわけではありません。多くの新来者にとって物理SIMがまだ最も一般的な選択肢です。',
    s5Items: ['eSIM：素早いセットアップ、カード不要', '物理SIM：より一般的で入手しやすい', '購入前に端末の対応状況を確認する'],
    s6Title: '購入に必要なもの',
    s6P: 'ほとんどの場合、パスポートがあれば大丈夫です。韓国の一部の長期モバイルプランでは、後で追加書類が必要になる場合があります。',
    s7Title: '購入前の実践的なヒント',
    s7P: '',
    s8Title: '',
    s8Items: ['初日を最も楽にしたいなら空港で購入', 'プランを選ぶ前にデータ上限を比較する', 'テザリングが含まれているか確認する', '端末がSIMロック解除済みであることを確認する', 'サポート用にレシートとSIMカードのパッケージを保管する'],
    finalTitle: '最後のアドバイス',
    finalP: '韓国に来たばかりの方は、難しく考えないでください。まずはデータと韓国の番号を素早く手に入れられる、最もシンプルなSIMカードから始めましょう。自分のニーズがわかってきたら、より適切なプランに切り替えることができます。',
    nextTitle: 'SIMカード取得後にすること',
    nextP: '韓国でSIMカードのセットアップが終わったら、次のステップは通常ARCカードの取得と銀行口座の開設です。',
    arcLabel: 'ARCカードガイド',
    bankLabel: '銀行口座ガイド',
    deliveryLabel: 'デリバリーアプリガイド',
    relatedTitle: '関連ガイド',
    relatedDesc: 'SIMカードを取得した後は、ARCと韓国生活の基本的なセットアップが次の重要なステップです。',
    relatedStartBtn: 'はじめに',
    relatedHousingBtn: '住居ガイド',
    faqTitle: 'よくある質問',
    faq1Q: '外国人は韓国でSIMカードを買えますか？',
    faq1A: 'はい、外国人は韓国でSIMカードを簡単に購入できます。ほとんどの人はパスポートを持って仁川空港または通信会社のショップで購入します。',
    faq2Q: '韓国でSIMカードを購入するにはARCが必要ですか？',
    faq2A: 'プリペイドSIMカードにはARCは不要です。ただし、長期の携帯プランには通常ARCが必要です。',
    faq3Q: '韓国の留学生に最適なSIMカードはどれですか？',
    faq3A: 'ほとんどの留学生は、素早く手続きができて複雑な設定が不要なプリペイドSIMまたはeSIMから始めます。',
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

  const url = `https://ksurvivalkit.com/${lang}/how-to-get-sim-card-in-korea`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: 'https://ksurvivalkit.com/en/how-to-get-sim-card-in-korea',
        zh: 'https://ksurvivalkit.com/zh/how-to-get-sim-card-in-korea',
        ru: 'https://ksurvivalkit.com/ru/how-to-get-sim-card-in-korea',
        ja: 'https://ksurvivalkit.com/ja/how-to-get-sim-card-in-korea',
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
      title: 'How to Get a SIM Card in Korea (2026 Guide)',
      description:
        'A practical SIM card guide for foreigners and international students in Korea.',
    },
  };
}

export default async function SimCardGuidePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const l: L = (lang as L) in CONTENT ? (lang as L) : 'en';
  const c = CONTENT[l];
  const pageUrl = `https://ksurvivalkit.com/${lang}/how-to-get-sim-card-in-korea`;

  const jsonLdData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: c.heroTitle,
      description: META[l].description,
      url: pageUrl,
      inLanguage: lang,
      publisher: { '@type': 'Organization', name: 'K-Survival Kit', url: 'https://ksurvivalkit.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: c.faq1Q, acceptedAnswer: { '@type': 'Answer', text: c.faq1A } },
        { '@type': 'Question', name: c.faq2Q, acceptedAnswer: { '@type': 'Answer', text: c.faq2A } },
        { '@type': 'Question', name: c.faq3Q, acceptedAnswer: { '@type': 'Answer', text: c.faq3A } },
      ],
    },
  ];

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

        <p className="leading-7 text-slate-700">{c.introP}</p>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">{c.quickAnswerTitle}</h2>
          <p className="mt-3 leading-7 text-slate-700">{c.quickAnswerText}</p>
        </section>

        <AffiliateBanner
          icon="📱"
          title={c.affiliateTitle}
          description={c.affiliateDesc}
          href={AIRALO_AFFILIATE_URL}
          ctaText={c.affiliateCta}
          accentColor="rose"
        />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s1Title}</h2>
          <p className="leading-7 text-slate-700">{c.s1P}</p>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            {c.s1Items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s2Title}</h2>
          <p className="leading-7 text-slate-700">{c.s2P}</p>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            <li><strong>KT:</strong> {c.s2KT.replace('KT: ', '').replace('KT：', '')}</li>
            <li><strong>SKT:</strong> {c.s2SKT.replace('SKT: ', '').replace('SKT：', '')}</li>
            <li><strong>LG U+:</strong> {c.s2LG.replace('LG U+: ', '').replace('LG U+：', '')}</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s3Title}</h2>
          <p className="leading-7 text-slate-700">{c.s3P1}</p>
          <p className="leading-7 text-slate-700">{c.s3P2}</p>
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
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s6Title}</h2>
          <p className="leading-7 text-slate-700">{c.s6P}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s7Title}</h2>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            {c.s8Items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900">{c.finalTitle}</h2>
          <p className="mt-3 leading-7 text-slate-700">{c.finalP}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.nextTitle}</h2>
          <p className="leading-7 text-slate-700">{c.nextP}</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <a href={`/${lang}/arc-card-korea-guide`} className="text-blue-600 underline">
                {c.arcLabel}
              </a>
            </li>
            <li>
              <a href={`/${lang}/best-bank-account-for-foreigners-korea`} className="text-blue-600 underline">
                {c.bankLabel}
              </a>
            </li>
            <li>
              <a href={`/${lang}/korea-delivery-apps-guide`} className="text-blue-600 underline">
                {c.deliveryLabel}
              </a>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">{c.relatedTitle}</h2>
          <p className="mt-3 text-slate-300">{c.relatedDesc}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`/${lang}/getting-started`}
              className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900"
            >
              {c.relatedStartBtn}
            </a>
            <a
              href={`/${lang}/housing`}
              className="rounded-xl border border-white/30 px-4 py-2 font-semibold text-white"
            >
              {c.relatedHousingBtn}
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.faqTitle}</h2>
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold">{c.faq1Q}</h3>
              <p>{c.faq1A}</p>
            </div>
            <div>
              <h3 className="font-semibold">{c.faq2Q}</h3>
              <p>{c.faq2A}</p>
            </div>
            <div>
              <h3 className="font-semibold">{c.faq3Q}</h3>
              <p>{c.faq3A}</p>
            </div>
          </div>
        </section>
      </article>
      <RelatedPosts lang={lang as string} current="how-to-get-sim-card-in-korea" />
      </main>
    </>
  );
}