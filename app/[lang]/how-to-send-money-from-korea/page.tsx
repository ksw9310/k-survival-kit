import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import ArticleHero from '@/components/ArticleHero';
import PageDisclaimer from '@/components/PageDisclaimer';
import RelatedPosts from '@/components/RelatedPosts';
import AffiliateBanner from '@/components/AffiliateBanner';
import JsonLd from '@/components/JsonLd';

const WISE_AFFILIATE_URL = 'https://wise.prf.hn/click/camref:1101l5IGWo';

type L = 'en' | 'zh' | 'ru' | 'ja';

const META: Record<L, { title: string; description: string }> = {
  en: {
    title: 'How to Send Money from Korea (2026 Guide) | K-Survival Kit',
    description:
      'Need to send money abroad from Korea? This guide explains the cheapest and easiest way for foreigners and international students to transfer money internationally from Korea.',
  },
  zh: {
    title: '如何从韩国向海外汇款（2026年指南） | K-Survival Kit',
    description:
      '需要从韩国向海外汇款？本指南为外国人和留学生介绍从韩国进行国际汇款的最便宜、最简便方式。',
  },
  ru: {
    title: 'Как отправить деньги из Кореи за рубеж (2026) | K-Survival Kit',
    description:
      'Нужно отправить деньги из Кореи? Этот гайд объясняет самый дешёвый и простой способ международного перевода для иностранцев и студентов в Корее.',
  },
  ja: {
    title: '韓国から海外送金する方法（2026年版） | K-Survival Kit',
    description:
      '韓国から海外にお金を送りたいですか？このガイドでは、韓国在住の外国人・留学生向けに最も安くて簡単な国際送金の方法を解説します。',
  },
};

type PageContent = {
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
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
  s2Items: { label: string; desc: string }[];
  s3Title: string;
  s3P: string;
  s3Steps: string[];
  s4Title: string;
  s4P1: string;
  s4Items: string[];
  s4P2: string;
  s5Title: string;
  s5P: string;
  s5Items: string[];
  s6Title: string;
  s6P1: string;
  s6P2: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  finalTitle: string;
  finalP: string;
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Money / International Transfer',
    heroTitle: 'How to Send Money from Korea Abroad (Cheapest & Easiest Way)',
    heroLead:
      'Whether you are sending money home, paying tuition overseas, or splitting costs with family, transferring money internationally from Korea can be confusing. Korean banks often charge high fees and unfavorable exchange rates. This guide shows you a better way.',
    affiliateTitle: 'Send Money Abroad with Wise',
    affiliateDesc:
      'Wise uses the real mid-market exchange rate — the same rate you see on Google — with low, transparent fees. No hidden markups. Most transfers arrive within 1–2 business days. Trusted by millions of people worldwide.',
    affiliateCta: 'Send Money with Wise',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText:
      'The cheapest and most reliable way to send money from Korea internationally is through Wise (formerly TransferWise). Korean bank international wire transfers typically cost ₩5,000–₩10,000 in fees plus a 2–3% exchange rate markup. Wise charges a small flat fee and uses the real exchange rate, saving you significantly on every transfer.',
    s1Title: 'Why Korean Bank Transfers Are Expensive',
    s1P: 'Most people instinctively try to use their Korean bank for international transfers — but this often costs more than expected.',
    s1Items: [
      'Exchange rate markup of 1.5–3% above the real rate',
      'Fixed wire transfer fee of ₩5,000–₩10,000 per transfer',
      'Additional intermediary bank fees in some cases',
      'Slow processing time (2–5 business days)',
      'Paperwork and branch visits sometimes required for large amounts',
    ],
    s2Title: 'Ways to Send Money from Korea',
    s2P: 'There are several options available to foreigners in Korea. Here is a comparison of the most common methods.',
    s2Items: [
      {
        label: 'Wise (Recommended)',
        desc: 'Real exchange rate, low transparent fees, fast transfers (1–2 days), fully online. Best for most people.',
      },
      {
        label: 'Korean Bank Wire Transfer',
        desc: 'Available at any major bank (KB, Shinhan, IBK, etc.). High fees and poor exchange rates. Reliable but expensive.',
      },
      {
        label: 'Western Union / MoneyGram',
        desc: 'Widely available but typically has very high fees and poor exchange rates. Not recommended for regular use.',
      },
      {
        label: 'Kakao Pay / Toss (Domestic only)',
        desc: 'Convenient for payments within Korea, but not available for international transfers.',
      },
    ],
    s3Title: 'How to Send Money with Wise from Korea',
    s3P: 'Wise works entirely online — no branch visits needed. Here is the basic process.',
    s3Steps: [
      'Create a free Wise account at wise.com',
      'Verify your identity (passport or ARC card)',
      'Enter how much you want to send and the destination currency',
      'See the exact fee and exchange rate before confirming',
      'Add your recipient\'s bank details',
      'Pay from your Korean bank account via wire transfer or card',
      'Your recipient gets the money — usually within 1–2 business days',
    ],
    s4Title: 'What You Need to Send Money from Korea',
    s4P1: 'Before making an international transfer from Korea, you will typically need the following.',
    s4Items: [
      'A valid passport or ARC card for identity verification',
      'A Korean bank account or debit/credit card to fund the transfer',
      'Your recipient\'s full name, bank name, account number, and SWIFT/BIC code',
      'The recipient\'s address (required by some services)',
    ],
    s4P2: 'For larger amounts, some services may ask for additional documentation to comply with Korean financial regulations.',
    s5Title: 'Tips for International Transfers from Korea',
    s5P: 'A few practical things to keep in mind when sending money abroad from Korea.',
    s5Items: [
      'Always compare the exchange rate to the mid-market rate (check xe.com or Google)',
      'Avoid transferring on weekends if you need fast delivery',
      'For large amounts, check if your Korean bank has transfer limits per day',
      'Keep a record of your transfers for tax or visa purposes',
      'Wise shows you the total cost upfront — no surprises on arrival',
    ],
    s6Title: 'Can International Students Send Money from Korea?',
    s6P1:
      'Yes. International students with a Korean bank account can send money abroad. You will need to verify your identity with Wise using your passport or ARC card. There are no restrictions on sending money abroad for personal use as a student.',
    s6P2:
      'If you are receiving money from family abroad rather than sending, Wise also lets you receive money into a Wise account easily — often faster and cheaper than a standard bank wire to your Korean account.',
    faqTitle: 'FAQ',
    faq1Q: 'What is the cheapest way to send money from Korea?',
    faq1A:
      'Wise is generally the cheapest option for most international transfers from Korea. It uses the real exchange rate and charges a small, transparent fee — significantly less than Korean bank wire transfers in most cases.',
    faq2Q: 'Can I use Wise in Korea?',
    faq2A:
      'Yes. Wise is available in Korea. You can create an account, verify your identity, and send money internationally from Korea entirely online.',
    faq3Q: 'How long does an international transfer from Korea take?',
    faq3A:
      'With Wise, most transfers arrive within 1–2 business days. Korean bank wire transfers typically take 2–5 business days depending on the destination country.',
    faq4Q: 'Do I need an ARC card to send money abroad from Korea?',
    faq4A:
      'You need some form of identity verification. A passport is sufficient for Wise. Your ARC card can also be used. For Korean bank transfers, you will need your bank account and may need to visit a branch for larger amounts.',
    finalTitle: 'Summary',
    finalP:
      'For most foreigners and international students in Korea, Wise is the most practical and cost-effective way to send money abroad. It works fully online, uses the real exchange rate, and is transparent about fees before you commit. Korean bank wire transfers remain an option but will almost always cost more in fees and exchange rate losses.',
  },
  zh: {
    eyebrow: '汇款 / 国际转账',
    heroTitle: '如何从韩国向海外汇款（最省钱、最简便的方式）',
    heroLead:
      '无论是向家人汇款、支付海外学费，还是与家人分担费用，从韩国进行国际汇款都可能令人困惑。韩国银行的手续费通常较高，汇率也不划算。本指南将为您介绍更好的解决方案。',
    affiliateTitle: '用Wise向海外汇款',
    affiliateDesc:
      'Wise采用真实的中间市场汇率——与您在谷歌上看到的相同——手续费低且透明，无隐藏加价。大多数汇款在1–2个工作日内到账。全球数百万用户信赖。',
    affiliateCta: '使用Wise汇款',
    quickAnswerTitle: '简要回答',
    quickAnswerText:
      '从韩国向海外汇款最便宜、最可靠的方式是通过Wise（前身为TransferWise）。韩国银行国际电汇通常收取₩5,000–₩10,000的手续费，加上2–3%的汇率加价。Wise收取少量固定费用并使用真实汇率，每笔转账都能为您节省不少费用。',
    s1Title: '为何韩国银行转账费用高',
    s1P: '大多数人本能地会通过韩国银行进行国际汇款——但这往往比预期花费更多。',
    s1Items: [
      '在真实汇率基础上额外收取1.5–3%的汇率加价',
      '每次转账固定手续费₩5,000–₩10,000',
      '某些情况下还有中间银行附加费用',
      '处理时间较慢（2–5个工作日）',
      '大额转账有时需要填写文件或前往分行',
    ],
    s2Title: '从韩国汇款的几种方式',
    s2P: '在韩外国人有多种汇款选择，以下是最常见方式的比较。',
    s2Items: [
      {
        label: 'Wise（推荐）',
        desc: '真实汇率，手续费低且透明，转账快速（1–2天），全程在线。适合大多数人的最佳选择。',
      },
      {
        label: '韩国银行电汇',
        desc: '任何主要银行均可办理（KB、新韩、IBK等）。手续费高，汇率差。可靠但费用高。',
      },
      {
        label: 'Western Union / MoneyGram',
        desc: '覆盖范围广，但手续费通常很高，汇率也差。不建议日常使用。',
      },
      {
        label: 'Kakao Pay / Toss（仅限国内）',
        desc: '在韩国境内支付很方便，但不支持国际转账。',
      },
    ],
    s3Title: '如何通过Wise从韩国汇款',
    s3P: 'Wise完全在线操作——无需前往银行分行。以下是基本流程。',
    s3Steps: [
      '在wise.com注册免费账户',
      '验证身份（护照或ARC卡）',
      '输入汇款金额和目标货币',
      '确认前查看确切手续费和汇率',
      '填写收款人银行信息',
      '通过韩国银行账户电汇或刷卡付款',
      '收款人收到转账——通常在1–2个工作日内',
    ],
    s4Title: '从韩国汇款需要准备什么',
    s4P1: '从韩国进行国际转账前，通常需要准备以下材料。',
    s4Items: [
      '有效护照或ARC卡（身份验证）',
      '韩国银行账户或借记/信用卡（用于资金来源）',
      '收款人的全名、银行名称、账户号码及SWIFT/BIC码',
      '收款人地址（部分服务需要）',
    ],
    s4P2: '大额转账时，某些服务可能会要求提供额外文件，以符合韩国金融法规。',
    s5Title: '从韩国国际汇款的实用技巧',
    s5P: '从韩国向海外汇款时，需要注意以下几点实用事项。',
    s5Items: [
      '始终将汇率与中间市场汇率进行比较（查看xe.com或谷歌）',
      '如需快速到账，避免在周末转账',
      '大额汇款前，确认韩国银行的每日转账限额',
      '保留转账记录，以备税务或签证使用',
      'Wise会提前显示总费用——到账无意外',
    ],
    s6Title: '留学生可以从韩国向海外汇款吗？',
    s6P1:
      '可以。持有韩国银行账户的留学生可以向海外汇款。您需要使用护照或ARC卡在Wise上验证身份。作为留学生，个人用途向海外汇款没有限制。',
    s6P2:
      '如果您是接收家人从海外汇来的款项，Wise也支持便捷接收——通常比标准银行电汇到韩国账户更快、更便宜。',
    faqTitle: '常见问题',
    faq1Q: '从韩国汇款最便宜的方式是什么？',
    faq1A:
      '对于大多数从韩国进行的国际汇款，Wise通常是最便宜的选择。它使用真实汇率，收取少量透明手续费——在大多数情况下远低于韩国银行电汇。',
    faq2Q: '在韩国可以使用Wise吗？',
    faq2A:
      '可以。Wise在韩国可用。您可以注册账户、验证身份，并完全在线从韩国向海外汇款。',
    faq3Q: '从韩国进行国际转账需要多长时间？',
    faq3A:
      '使用Wise，大多数转账在1–2个工作日内到账。韩国银行电汇通常需要2–5个工作日，具体取决于目的地国家。',
    faq4Q: '从韩国向海外汇款需要ARC卡吗？',
    faq4A:
      '您需要某种形式的身份验证。护照对Wise来说就足够了，ARC卡也可以使用。韩国银行转账需要银行账户，大额转账可能需要前往分行办理。',
    finalTitle: '总结',
    finalP:
      '对于大多数在韩外国人和留学生来说，Wise是向海外汇款最实用、最具成本效益的方式。它完全在线操作，使用真实汇率，并在确认前透明显示手续费。韩国银行电汇仍是一种选择，但在手续费和汇率损失方面几乎总是花费更多。',
  },
  ru: {
    eyebrow: 'Деньги / Международные переводы',
    heroTitle: 'Как отправить деньги из Кореи за рубеж (самый дешёвый способ)',
    heroLead:
      'Хотите перевести деньги домой, оплатить учёбу за границей или помочь семье? Международные переводы из Кореи могут сбивать с толку. Корейские банки часто взимают высокие комиссии и дают невыгодный курс обмена. Этот гайд покажет лучший способ.',
    affiliateTitle: 'Отправляйте деньги за рубеж через Wise',
    affiliateDesc:
      'Wise использует реальный межбанковский курс обмена — тот же, что вы видите в Google — с прозрачными низкими комиссиями. Никаких скрытых наценок. Большинство переводов поступают в течение 1–2 рабочих дней. Более 16 млн пользователей по всему миру.',
    affiliateCta: 'Отправить деньги через Wise',
    quickAnswerTitle: 'Быстрый ответ',
    quickAnswerText:
      'Самый дешёвый и надёжный способ отправить деньги из Кореи за рубеж — использовать Wise (бывший TransferWise). Международные банковские переводы в корейских банках обычно стоят ₩5,000–₩10,000 в виде комиссий плюс наценка на курс 2–3%. Wise берёт небольшую фиксированную комиссию и использует реальный курс, что позволяет значительно сэкономить.',
    s1Title: 'Почему переводы через корейские банки дорогие',
    s1P: 'Большинство людей интуитивно обращаются в свой корейский банк для международных переводов — но это часто обходится дороже, чем ожидается.',
    s1Items: [
      'Наценка на курс обмена 1,5–3% сверх реального курса',
      'Фиксированная комиссия за перевод ₩5,000–₩10,000',
      'В некоторых случаях — дополнительные комиссии банков-посредников',
      'Медленная обработка (2–5 рабочих дней)',
      'Для крупных сумм иногда требуются документы и визит в отделение',
    ],
    s2Title: 'Способы отправки денег из Кореи',
    s2P: 'Для иностранцев в Корее доступно несколько вариантов. Сравниваем наиболее распространённые.',
    s2Items: [
      {
        label: 'Wise (Рекомендуем)',
        desc: 'Реальный курс обмена, низкие прозрачные комиссии, быстрые переводы (1–2 дня), полностью онлайн. Лучший вариант для большинства.',
      },
      {
        label: 'Банковский перевод из корейского банка',
        desc: 'Доступно в любом крупном банке (KB, Shinhan, IBK и др.). Высокие комиссии и плохой курс. Надёжно, но дорого.',
      },
      {
        label: 'Western Union / MoneyGram',
        desc: 'Широко доступны, но обычно очень высокие комиссии и плохой курс. Не рекомендуется для регулярных переводов.',
      },
      {
        label: 'Kakao Pay / Toss (только внутри страны)',
        desc: 'Удобны для платежей внутри Кореи, но не поддерживают международные переводы.',
      },
    ],
    s3Title: 'Как отправить деньги через Wise из Кореи',
    s3P: 'Wise работает полностью онлайн — никаких визитов в отделение. Вот основной процесс.',
    s3Steps: [
      'Создайте бесплатный аккаунт на wise.com',
      'Подтвердите личность (паспорт или карта ARC)',
      'Укажите сумму и валюту получателя',
      'Убедитесь в точной комиссии и курсе перед подтверждением',
      'Введите банковские реквизиты получателя',
      'Оплатите с корейского банковского счёта или карты',
      'Получатель получает деньги — обычно в течение 1–2 рабочих дней',
    ],
    s4Title: 'Что нужно для отправки денег из Кореи',
    s4P1: 'Перед международным переводом из Кореи вам обычно потребуется следующее.',
    s4Items: [
      'Действующий паспорт или карта ARC для верификации личности',
      'Корейский банковский счёт или дебетовая/кредитная карта для финансирования перевода',
      'Полное имя получателя, название банка, номер счёта и SWIFT/BIC-код',
      'Адрес получателя (требуется некоторыми сервисами)',
    ],
    s4P2: 'Для крупных сумм некоторые сервисы могут запросить дополнительные документы в соответствии с корейским финансовым законодательством.',
    s5Title: 'Советы по международным переводам из Кореи',
    s5P: 'Несколько практических моментов, о которых стоит помнить при отправке денег за рубеж из Кореи.',
    s5Items: [
      'Всегда сравнивайте курс с межбанковским (проверяйте xe.com или Google)',
      'Избегайте переводов в выходные, если нужна быстрая доставка',
      'Для крупных сумм уточните суточные лимиты переводов вашего корейского банка',
      'Сохраняйте записи о переводах для налоговых или визовых целей',
      'Wise показывает итоговую стоимость заранее — никаких сюрпризов',
    ],
    s6Title: 'Могут ли иностранные студенты отправлять деньги из Кореи?',
    s6P1:
      'Да. Иностранные студенты с корейским банковским счётом могут переводить деньги за рубеж. Вам потребуется подтвердить личность через Wise с помощью паспорта или карты ARC. Никаких ограничений на личные переводы за рубеж для студентов нет.',
    s6P2:
      'Если вы получаете деньги от семьи из-за рубежа, а не отправляете, Wise также позволяет удобно принимать деньги на счёт Wise — часто быстрее и дешевле, чем стандартный банковский перевод на корейский счёт.',
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Какой самый дешёвый способ отправить деньги из Кореи?',
    faq1A:
      'Для большинства международных переводов из Кореи Wise является самым дешёвым вариантом. Он использует реальный курс обмена и берёт небольшую прозрачную комиссию — значительно меньше, чем банковские переводы в большинстве случаев.',
    faq2Q: 'Работает ли Wise в Корее?',
    faq2A:
      'Да. Wise доступен в Корее. Вы можете создать аккаунт, подтвердить личность и отправлять деньги за рубеж из Кореи полностью онлайн.',
    faq3Q: 'Сколько времени занимает международный перевод из Кореи?',
    faq3A:
      'Через Wise большинство переводов поступают в течение 1–2 рабочих дней. Банковские переводы из корейских банков обычно занимают 2–5 рабочих дней в зависимости от страны назначения.',
    faq4Q: 'Нужна ли карта ARC для отправки денег за рубеж из Кореи?',
    faq4A:
      'Вам нужен какой-либо документ для подтверждения личности. Для Wise достаточно паспорта. Карта ARC также подходит. Для банковских переводов потребуется банковский счёт, а для крупных сумм, возможно, визит в отделение.',
    finalTitle: 'Итог',
    finalP:
      'Для большинства иностранцев и студентов в Корее Wise — самый практичный и экономически выгодный способ отправить деньги за рубеж. Он работает полностью онлайн, использует реальный курс обмена и прозрачно показывает комиссии до подтверждения. Банковские переводы остаются вариантом, но почти всегда обходятся дороже.',
  },
  ja: {
    eyebrow: '送金 / 国際送金',
    heroTitle: '韓国から海外に送金する方法（最安値・最も簡単な方法）',
    heroLead:
      '仕送り・海外の学費支払い・家族への送金など、韓国から国際送金をする場面は多くあります。しかし韓国の銀行は手数料が高く、為替レートも不利なことがほとんどです。このガイドでは、もっと賢い方法を紹介します。',
    affiliateTitle: 'Wiseで海外送金する',
    affiliateDesc:
      'WiseはGoogleで表示されるのと同じ実勢為替レートを使用し、手数料は低く明瞭。隠れた上乗せ手数料はありません。ほとんどの送金は1〜2営業日で着金。世界中で1,600万人以上に利用されています。',
    affiliateCta: 'Wiseで送金する',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText:
      '韓国から海外への送金で最も安くて信頼できる方法は、Wise（旧TransferWise）を使うことです。韓国銀行の国際電信送金は手数料₩5,000〜₩10,000に加え、為替レートに2〜3%の上乗せがかかります。Wiseは少額の固定手数料で実勢レートを使用するため、毎回の送金でかなり節約できます。',
    s1Title: '韓国銀行送金が高い理由',
    s1P: '多くの人は国際送金に韓国の銀行を使おうとしますが、実際には予想以上に費用がかかることがよくあります。',
    s1Items: [
      '実勢レートより1.5〜3%高い為替レートの上乗せ',
      '1回の送金ごとに₩5,000〜₩10,000の固定手数料',
      '場合によっては中継銀行の手数料も発生',
      '処理に時間がかかる（2〜5営業日）',
      '高額送金では書類や窓口での手続きが必要な場合も',
    ],
    s2Title: '韓国から送金する方法の比較',
    s2P: '韓国在住の外国人が利用できる方法はいくつかあります。主な方法を比較します。',
    s2Items: [
      {
        label: 'Wise（おすすめ）',
        desc: '実勢為替レート、低くて透明な手数料、迅速な送金（1〜2日）、完全オンライン。ほとんどの人に最適。',
      },
      {
        label: '韓国銀行の国際電信送金',
        desc: '主要銀行（KB・新韓・IBKなど）で利用可能。手数料が高く為替レートも不利。信頼性はあるが費用が高い。',
      },
      {
        label: 'Western Union / MoneyGram',
        desc: '広く利用可能だが、手数料が非常に高く為替レートも不利。定期的な利用はおすすめしない。',
      },
      {
        label: 'Kakao Pay / Toss（国内専用）',
        desc: '国内の支払いには便利だが、国際送金には対応していない。',
      },
    ],
    s3Title: 'Wiseを使った韓国からの送金手順',
    s3P: 'Wiseは完全オンラインで完結します。窓口への来店は不要です。',
    s3Steps: [
      'wise.comで無料アカウントを作成',
      '本人確認（パスポートまたはARCカード）',
      '送金額と送金先の通貨を入力',
      '確認前に正確な手数料と為替レートを確認',
      '受取人の銀行口座情報を入力',
      '韓国の銀行口座または카드から支払い',
      '受取人に入金 — 通常1〜2営業日以内',
    ],
    s4Title: '韓国から海外送金に必要なもの',
    s4P1: '韓国から国際送金を行う前に、通常以下のものが必要です。',
    s4Items: [
      '有効なパスポートまたはARCカード（本人確認用）',
      '送金資金となる韓国の銀行口座またはデビット/クレジットカード',
      '受取人のフルネーム・銀行名・口座番号・SWIFT/BICコード',
      '受取人の住所（一部サービスで必要）',
    ],
    s4P2: '高額送金の場合、韓国の金融規制に対応するため追加書類が求められることがあります。',
    s5Title: '韓国からの国際送金のコツ',
    s5P: '韓国から海外に送金する際に覚えておくと便利なポイントです。',
    s5Items: [
      '為替レートは必ず実勢レートと比較する（xe.comやGoogleで確認）',
      '迅速な入金が必要な場合は週末の送金を避ける',
      '高額送金の前に韓国銀行の1日の送金限度額を確認する',
      '税務やビザのために送金記録を保管しておく',
      'Wiseは確認前に総費用を表示 — 着金後の驚きなし',
    ],
    s6Title: '留学生は韓国から海外送金できますか？',
    s6P1:
      'できます。韓国の銀行口座を持つ留学生は海外送金が可能です。Wiseではパスポートまたはがん ARC カードで本人確認が必要です。学生の個人用途での海外送金に制限はありません。',
    s6P2:
      '家族から海外送金を受け取る場合も、WiseのアカウントへWise経由で受け取る方が、韓国口座への標準的な国際電信送金より速く、安いことが多いです。',
    faqTitle: 'よくある質問',
    faq1Q: '韓国からの送金で最も安い方法は？',
    faq1A:
      'ほとんどの韓国からの国際送金において、Wiseが最も安い選択肢です。実勢為替レートを使用し、少額の透明な手数料のみ請求されます — ほとんどの場合、韓国銀行の国際電信送金より大幅に安くなります。',
    faq2Q: '韓国でWiseは使えますか？',
    faq2A:
      'はい。Wiseは韓国で利用可能です。アカウントを作成し、本人確認を行い、完全オンラインで韓国から海外に送金できます。',
    faq3Q: '韓国からの国際送金にどのくらいかかりますか？',
    faq3A:
      'Wiseを使えば、ほとんどの送金は1〜2営業日で到着します。韓国銀行の国際電信送金は送金先の国によって2〜5営業日かかるのが一般的です。',
    faq4Q: '韓国から海外送金するにはARCカードが必要ですか？',
    faq4A:
      '何らかの本人確認書類が必要です。Wiseではパスポートで十分です。ARCカードも使用できます。韓国銀行送金では銀行口座が必要で、高額の場合は窓口での手続きが必要なこともあります。',
    finalTitle: 'まとめ',
    finalP:
      '韓国在住の外国人や留学生のほとんどにとって、Wiseが海外送金で最も実用的でコスト効率の高い方法です。完全オンラインで動作し、実勢為替レートを使用し、確認前に手数料を透明に表示します。韓国銀行送金も選択肢としては残りますが、手数料と為替レートのロスでほぼ必ず割高になります。',
  },
};

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};

  const url = `https://ksurvivalkit.com/${lang}/how-to-send-money-from-korea`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: 'https://ksurvivalkit.com/en/how-to-send-money-from-korea',
        zh: 'https://ksurvivalkit.com/zh/how-to-send-money-from-korea',
        ru: 'https://ksurvivalkit.com/ru/how-to-send-money-from-korea',
        ja: 'https://ksurvivalkit.com/ja/how-to-send-money-from-korea',
      },
    },
    openGraph: {
      title: m.title.replace(' | K-Survival Kit', ''),
      description: m.description,
      url,
      type: 'article',
      siteName: 'K-Survival Kit',
      locale: lang,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'K-Survival Kit' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title.replace(' | K-Survival Kit', ''),
      description: m.description,
      images: ['/og-image.png'],
    },
  };
}

export default async function HowToSendMoneyFromKoreaPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const l: L = (lang as L) in CONTENT ? (lang as L) : 'en';
  const c = CONTENT[l];
  const pageUrl = `https://ksurvivalkit.com/${lang}/how-to-send-money-from-korea`;

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
        { '@type': 'Question', name: c.faq4Q, acceptedAnswer: { '@type': 'Answer', text: c.faq4A } },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ArticleHero eyebrow={c.eyebrow} title={c.heroTitle} lead={c.heroLead} />
      <PageDisclaimer type="general" />
      <main className="bg-slate-50 px-6 py-12">
        <article className="mx-auto max-w-4xl space-y-10">

          {/* Wise affiliate banner — top */}
          <AffiliateBanner
            icon="💸"
            title={c.affiliateTitle}
            description={c.affiliateDesc}
            href={WISE_AFFILIATE_URL}
            ctaText={c.affiliateCta}
            accentColor="green"
          />

          {/* Quick Answer */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">{c.quickAnswerTitle}</h2>
            <p className="mt-3 leading-7 text-slate-700">{c.quickAnswerText}</p>
          </section>

          {/* Why banks are expensive */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s1Title}</h2>
            <p className="leading-7 text-slate-700">{c.s1P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s1Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          {/* Comparison */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s2Title}</h2>
            <p className="leading-7 text-slate-700">{c.s2P}</p>
            <div className="space-y-3">
              {c.s2Items.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-4 ${i === 0 ? 'border-green-200 bg-green-50' : 'border-slate-200 bg-white'}`}
                >
                  <p className={`font-bold ${i === 0 ? 'text-green-700' : 'text-slate-800'}`}>
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to use Wise */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s3Title}</h2>
            <p className="leading-7 text-slate-700">{c.s3P}</p>
            <ol className="space-y-2 pl-6 text-slate-700 list-decimal">
              {c.s3Steps.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </section>

          {/* Wise banner mid */}
          <AffiliateBanner
            icon="💱"
            title={c.affiliateTitle}
            description={c.affiliateDesc}
            href={WISE_AFFILIATE_URL}
            ctaText={c.affiliateCta}
            accentColor="green"
          />

          {/* What you need */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s4Title}</h2>
            <p className="leading-7 text-slate-700">{c.s4P1}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s4Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="leading-7 text-slate-700">{c.s4P2}</p>
          </section>

          {/* Tips */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s5Title}</h2>
            <p className="leading-7 text-slate-700">{c.s5P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s5Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          {/* Students */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s6Title}</h2>
            <p className="leading-7 text-slate-700">{c.s6P1}</p>
            <p className="leading-7 text-slate-700">{c.s6P2}</p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.faqTitle}</h2>
            <div className="space-y-4 text-slate-700">
              {[
                { q: c.faq1Q, a: c.faq1A },
                { q: c.faq2Q, a: c.faq2A },
                { q: c.faq3Q, a: c.faq3A },
                { q: c.faq4Q, a: c.faq4A },
              ].map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">{c.finalTitle}</h2>
            <p className="mt-3 leading-7 text-slate-700">{c.finalP}</p>
          </section>

        </article>

        <RelatedPosts lang={lang as string} current="how-to-send-money-from-korea" />
      </main>
    </>
  );
}
