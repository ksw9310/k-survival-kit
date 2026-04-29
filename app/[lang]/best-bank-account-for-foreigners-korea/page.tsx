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
    title:
      'Best Bank Account for Foreigners in Korea (2026 Guide) | K-Survival Kit',
    description:
      'Opening a bank account in Korea as a foreigner? Learn the easiest way, required documents, and how international students can avoid common problems.',
  },
  zh: {
    title: '韩国外国人银行开户指南 | K-Survival Kit',
    description:
      '在韩国作为外国人开设银行账户？了解最简单的方式、所需材料，以及留学生如何避免常见问题。',
  },
  ru: {
    title: 'Лучший банк для иностранцев в Корее | K-Survival Kit',
    description:
      'Открываете банковский счёт в Корее? Узнайте, какой банк проще всего, какие документы нужны и как избежать типичных проблем.',
  },
  ja: {
    title: '韓国外国人向け銀行口座開設ガイド | K-Survival Kit',
    description:
      '韓国で銀行口座を開設したい外国人・留学生向け。おすすめの銀行、必要書類、よくある失敗の避け方を解説します。',
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
  s2Items: string[];
  s3Title: string;
  s3P1: string;
  s3Items: string[];
  s3P2: string;
  s4Title: string;
  s4P1: string;
  s4P2: string;
  s5Title: string;
  s5Items: string[];
  s5P: string;
  s6Title: string;
  s6Items: string[];
  s7Title: string;
  s7P1: string;
  s7P2: string;
  closingP: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  finalTitle: string;
  finalP: string;
  prepTitle: string;
  prepP: string;
  arcLabel: string;
  simLabel: string;
  gettingStartedLabel: string;
  relatedTitle: string;
  relatedDesc: string;
  relatedArcBtn: string;
  relatedSimBtn: string;
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Banking / Daily Life Guide',
    heroTitle: 'Best Bank Account in Korea for Foreigners (Easy Setup Guide)',
    heroLead:
      'Opening a bank account in Korea can feel confusing if you are new to the country. Many foreigners and international students need a Korean bank account for rent, transfers, part-time work, and daily payments, but the process may depend on your documents and visa status.',
    affiliateTitle: 'Receiving Money from Home? Use Wise',
    affiliateDesc:
      'Most international students receive tuition fees, living expenses, or allowances from family abroad. Wise delivers the money faster with real exchange rates and low transparent fees — no bank markups, no surprises.',
    affiliateCta: 'Get Your First Transfer Free',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText:
      'The best bank account for foreigners in Korea usually depends on how long you are staying, whether you already have your ARC, and what services you need most. For many international students, the best option is a bank with a simple branch process, clear support for foreigners, and a usable mobile app.',
    s1Title: 'Why You Need a Korean Bank Account',
    s1P: 'A Korean bank account makes daily life much easier. Without one, you may struggle with transfers, online payments, tuition-related processes, mobile services, or receiving money in Korea.',
    s1Items: [
      'Paying rent or deposits',
      'Receiving transfers from family or work',
      'Connecting with Korean payment systems',
      'Managing local spending more easily',
    ],
    s2Title: 'What Makes a Bank Good for Foreigners?',
    s2P: 'The best bank account for foreigners in Korea is not always about the biggest bank. The more important questions are whether the bank is comfortable working with foreign customers, whether the staff can explain the process clearly, and whether the app is practical for everyday use.',
    s2Items: [
      'Foreigner-friendly account opening process',
      'Reasonable document requirements',
      'Useful mobile banking app',
      'Good branch access near your university or home',
      'Stable transfer and payment functions',
    ],
    s3Title: 'Common Documents You May Need',
    s3P1: 'The exact documents can vary depending on the bank and your status, but many foreigners are asked for a similar set of documents.',
    s3Items: [
      'Passport',
      'ARC or proof of residence status',
      'Korean phone number',
      'Student certificate, school document, or address information',
    ],
    s3P2: 'Some banks may be more flexible than others, but you should not assume the process is the same everywhere.',
    s4Title: 'Can You Open a Bank Account Without an ARC?',
    s4P1: 'In some cases, a foreigner may be able to open a limited account without an ARC, but it is usually much easier after receiving the ARC. Many long-term functions become more practical once your identity and residence status are clearly confirmed in Korea.',
    s4P2: 'If you have just arrived, the most realistic plan is often to get your basic setup done first and then visit the bank with the most complete documents possible.',
    s5Title: 'Common Problems Foreigners Face at Korean Banks',
    s5Items: [
      'Different document rules depending on the branch',
      'Language barrier during account explanation',
      'Restrictions on transfers or account features at first',
      'Difficulty setting up mobile banking',
      'Confusion about account purpose or transaction limits',
    ],
    s5P: 'This is why many students ask their school international office for advice before visiting a branch.',
    s6Title: 'Practical Tips Before You Visit a Bank',
    s6Items: [
      'Bring more documents than you think you need',
      'Visit a branch near a university or foreigner-heavy area',
      'Ask your school for support or a recommendation',
      'Go earlier in the day if possible',
      'Prepare your Korean address and phone number clearly',
    ],
    s7Title: 'Which Bank Is Best?',
    s7P1: 'There is no single perfect answer for everyone. The best bank account for foreigners in Korea depends on your location, document status, and what you need the account for. A bank that works well for a student in Seoul may not be the easiest choice for someone in another city.',
    s7P2: 'In practice, the best choice is usually the bank that gives you the smoothest account opening experience, lets you manage money easily, and works well with your current documents.',
    closingP:
      'For many newcomers, finding the best bank account for foreigners in Korea is not about prestige but about which bank is easiest to open, easiest to use, and most realistic for your current documents.',
    faqTitle: 'FAQ',
    faq1Q: 'Can foreigners open a bank account in Korea?',
    faq1A:
      'Yes, foreigners can open a bank account in Korea, but the process depends on the bank, your visa status, and the documents you bring.',
    faq2Q: 'Do I need an ARC to open a bank account in Korea?',
    faq2A:
      'In many cases, opening a bank account becomes easier after getting your ARC. Some banks may offer limited options before that, but it varies.',
    faq3Q: 'What is the best bank account for international students in Korea?',
    faq3A:
      'The best bank account for international students in Korea is usually the one that has a branch near campus, handles foreigner applications clearly, and offers a practical mobile banking app.',
    finalTitle: 'Final Advice',
    finalP:
      'If you are an international student, do not focus only on brand reputation. Focus on what is realistic right now: your documents, your school location, and whether the branch can help you clearly. The best bank account for foreigners in Korea is the one you can open smoothly and use without daily frustration.',
    prepTitle: 'What to Prepare Before Opening a Bank Account',
    prepP:
      'Before visiting a bank in Korea, most international students should first prepare their basic documents, phone number, and residence-related details.',
    arcLabel: 'ARC Card Guide',
    simLabel: 'SIM Card Guide',
    gettingStartedLabel: 'Getting Started Guide',
    relatedTitle: 'Related Guides',
    relatedDesc:
      'These pages will help you handle the rest of your early setup in Korea.',
    relatedArcBtn: 'ARC Guide',
    relatedSimBtn: 'SIM Card Guide',
  },
  zh: {
    eyebrow: '银行 / 日常生活指南',
    heroTitle: '外国人在韩国开设银行账户指南（简易开户教程）',
    heroLead:
      '在韩国开设银行账户对初来者来说可能感到困惑。许多外国人和留学生需要韩国银行账户用于支付房租、汇款、兼职工资以及日常支出，但具体流程可能因您的证件和签证情况而有所不同。',
    affiliateTitle: '在海外收款？用Wise更划算',
    affiliateDesc:
      '大多数留学生从家人处收取学费、生活费或零花钱。Wise以真实汇率快速到账，手续费低且透明——没有银行加价，没有隐藏费用。',
    affiliateCta: '首次转账免手续费',
    quickAnswerTitle: '简要回答',
    quickAnswerText:
      '在韩国，外国人开设银行账户的最佳选择通常取决于您的居留时间、是否已持有ARC卡，以及您最需要哪些服务。对于许多留学生来说，最好的选择是一家开户流程简单、对外国人友好且手机银行便于使用的银行。',
    s1Title: '为何需要韩国银行账户',
    s1P: '拥有韩国银行账户会让日常生活方便很多。没有它，您在转账、网络支付、学费相关手续、手机服务或在韩收款等方面可能会遇到困难。',
    s1Items: [
      '支付房租或押金',
      '接收家人或雇主的汇款',
      '对接韩国支付系统',
      '更轻松地管理本地消费',
    ],
    s2Title: '什么样的银行对外国人更友好？',
    s2P: '外国人在韩国最好的银行账户，并不一定来自规模最大的银行。更重要的是：该银行是否习惯服务外国客户？工作人员能否清晰说明流程？手机银行是否实用？',
    s2Items: [
      '对外国人友好的开户流程',
      '合理的证件要求',
      '实用的手机银行应用',
      '大学或住所附近有分行',
      '稳定的转账和支付功能',
    ],
    s3Title: '可能需要的常见证件',
    s3P1: '所需证件因银行和您的情况而异，但许多外国人通常需要准备一套类似的材料。',
    s3Items: [
      '护照',
      'ARC卡或居留证明',
      '韩国手机号码',
      '在校证明、学校文件或地址信息',
    ],
    s3P2: '部分银行可能比其他银行更灵活，但不能假设所有地方的流程都相同。',
    s4Title: '没有ARC能开银行账户吗？',
    s4P1: '在某些情况下，外国人即使没有ARC也可以开立受限账户，但拿到ARC后通常会容易许多。一旦您的身份和居留状态在韩国得到明确确认，许多长期功能才会变得实用。',
    s4P2: '如果您刚到韩国，最现实的方案往往是先完成基本准备工作，然后带齐尽可能完整的证件前往银行。',
    s5Title: '外国人在韩国银行常遇到的问题',
    s5Items: [
      '不同分行的证件要求不同',
      '开户说明时存在语言障碍',
      '初期转账或账户功能受限',
      '手机银行设置困难',
      '对账户用途或交易限额感到困惑',
    ],
    s5P: '这就是为什么许多学生在前往分行之前，会先向学校国际处寻求建议。',
    s6Title: '前往银行前的实用建议',
    s6Items: [
      '携带比您认为所需更多的证件',
      '选择靠近大学或外国人聚集区的分行',
      '向学校寻求支持或推荐',
      '尽量早些时候前往',
      '清楚准备好您的韩国地址和电话号码',
    ],
    s7Title: '哪家银行最好？',
    s7P1: '没有对所有人都完美的答案。在韩国外国人最好的银行账户，取决于您所在的地区、证件状态以及开户目的。在首尔适合留学生的银行，未必是其他城市的最佳选择。',
    s7P2: '实际上，最好的选择通常是能让您开户最顺畅、资金管理最便捷、且与您现有证件最匹配的银行。',
    closingP:
      '对于许多初来者而言，找到在韩国最适合外国人的银行账户，并不在于名气，而在于哪家银行最容易开户、最容易使用，且最贴合您目前的证件情况。',
    faqTitle: '常见问题',
    faq1Q: '外国人可以在韩国开银行账户吗？',
    faq1A:
      '是的，外国人可以在韩国开设银行账户，但具体流程取决于银行、您的签证状态和所携带的证件。',
    faq2Q: '在韩国开银行账户需要ARC吗？',
    faq2A:
      '在许多情况下，拿到ARC后开户会更容易。部分银行在此之前可能提供有限选项，但具体情况因银行而异。',
    faq3Q: '在韩国，留学生最好的银行账户是什么？',
    faq3A:
      '对于在韩国的留学生来说，最好的银行账户通常是在校园附近有分行、能清晰处理外国人申请、且提供实用手机银行应用的银行。',
    finalTitle: '最终建议',
    finalP:
      '如果您是留学生，不要只关注品牌知名度。关注当下实际可行的方案：您的证件、学校位置，以及分行是否能为您清晰说明流程。在韩国外国人最好的银行账户，是您能顺利开户且不会在日常使用中感到烦恼的那一家。',
    prepTitle: '开设银行账户前的准备工作',
    prepP:
      '在前往韩国银行之前，大多数留学生应先准备好基本证件、手机号码和居住相关信息。',
    arcLabel: 'ARC卡指南',
    simLabel: 'SIM卡指南',
    gettingStartedLabel: '入门指南',
    relatedTitle: '相关指南',
    relatedDesc: '这些页面将帮助您完成在韩国的早期基础设置。',
    relatedArcBtn: 'ARC指南',
    relatedSimBtn: 'SIM卡指南',
  },
  ru: {
    eyebrow: 'Банковское дело / Путеводитель по жизни',
    heroTitle:
      'Открытие банковского счёта в Корее для иностранцев (Простое руководство)',
    heroLead:
      'Открытие банковского счёта в Корее может показаться непонятным для новичков. Многим иностранцам и студентам нужен корейский счёт для оплаты жилья, переводов, подработки и ежедневных расходов, однако процесс может зависеть от ваших документов и визового статуса.',
    affiliateTitle: 'Получаете деньги из-за рубежа? Используйте Wise',
    affiliateDesc:
      'Большинство студентов получают от семьи деньги на учёбу, проживание или карманные расходы. Wise доставляет их быстрее по реальному курсу обмена с прозрачными низкими комиссиями — без банковских наценок и сюрпризов.',
    affiliateCta: 'Первый перевод бесплатно',
    quickAnswerTitle: 'Быстрый ответ',
    quickAnswerText:
      'Лучший банковский счёт для иностранцев в Корее обычно зависит от срока пребывания, наличия карты ARC и нужных вам услуг. Для многих студентов лучший вариант — банк с простым процессом открытия счёта, понятной поддержкой иностранных клиентов и удобным мобильным приложением.',
    s1Title: 'Зачем нужен корейский банковский счёт',
    s1P: 'Корейский банковский счёт значительно упрощает повседневную жизнь. Без него могут возникнуть трудности с переводами, онлайн-платежами, учебными процедурами, мобильными услугами или получением денег в Корее.',
    s1Items: [
      'Оплата аренды или депозитов',
      'Получение переводов от семьи или работодателя',
      'Подключение к корейским платёжным системам',
      'Удобное управление местными расходами',
    ],
    s2Title: 'Что делает банк удобным для иностранцев?',
    s2P: 'Лучший банковский счёт для иностранцев в Корее — не всегда в самом большом банке. Важнее то, насколько банк готов работать с иностранными клиентами, могут ли сотрудники чётко объяснить процесс и насколько приложение удобно для ежедневного использования.',
    s2Items: [
      'Процесс открытия счёта для иностранцев',
      'Разумные требования к документам',
      'Удобное мобильное банковское приложение',
      'Хороший доступ к отделениям рядом с университетом или домом',
      'Стабильные функции перевода и оплаты',
    ],
    s3Title: 'Документы, которые могут понадобиться',
    s3P1: 'Точные требования варьируются в зависимости от банка и вашего статуса, но у многих иностранцев обычно запрашивают схожий пакет документов.',
    s3Items: [
      'Паспорт',
      'Карта ARC или подтверждение статуса проживания',
      'Корейский номер телефона',
      'Справка об обучении, документы из школы или адресная информация',
    ],
    s3P2: 'Некоторые банки могут быть более гибкими, но не следует предполагать, что процесс везде одинаков.',
    s4Title: 'Можно ли открыть счёт без карты ARC?',
    s4P1: 'В некоторых случаях иностранец может открыть ограниченный счёт без карты ARC, но с ней это обычно намного проще. Многие долгосрочные функции становятся доступнее после подтверждения вашей личности и статуса проживания в Корее.',
    s4P2: 'Если вы только приехали, реалистичнее всего сначала подготовить базовый пакет документов, а затем посетить банк с максимально полным комплектом.',
    s5Title: 'Типичные проблемы иностранцев в корейских банках',
    s5Items: [
      'Разные требования к документам в зависимости от отделения',
      'Языковой барьер при объяснении условий счёта',
      'Ограничения на переводы или функции счёта на начальном этапе',
      'Сложности с настройкой мобильного банка',
      'Непонимание цели счёта или лимитов транзакций',
    ],
    s5P: 'Именно поэтому многие студенты перед визитом в банк обращаются за советом в международный отдел своего университета.',
    s6Title: 'Практические советы перед визитом в банк',
    s6Items: [
      'Возьмите больше документов, чем считаете нужным',
      'Посетите отделение рядом с университетом или в районе, где много иностранцев',
      'Попросите поддержки или рекомендации у своего вуза',
      'По возможности приходите пораньше',
      'Чётко подготовьте ваш корейский адрес и номер телефона',
    ],
    s7Title: 'Какой банк лучший?',
    s7P1: 'Единственного идеального ответа для всех нет. Лучший банковский счёт для иностранцев в Корее зависит от вашего местоположения, статуса документов и того, для чего вам нужен счёт. Банк, который хорошо работает со студентами в Сеуле, может не быть лучшим вариантом в другом городе.',
    s7P2: 'На практике лучший выбор — обычно банк, в котором проще всего открыть счёт, удобнее управлять деньгами и чьи требования соответствуют вашим текущим документам.',
    closingP:
      'Для многих новоприбывших поиск лучшего банковского счёта для иностранцев в Корее — это не вопрос престижа, а вопрос того, в каком банке проще открыть счёт, легче им пользоваться и который наиболее реалистичен для ваших текущих документов.',
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Могут ли иностранцы открыть банковский счёт в Корее?',
    faq1A:
      'Да, иностранцы могут открыть банковский счёт в Корее, но процесс зависит от банка, визового статуса и привезённых документов.',
    faq2Q: 'Нужна ли карта ARC для открытия банковского счёта в Корее?',
    faq2A:
      'Во многих случаях открыть счёт проще после получения карты ARC. Некоторые банки могут предложить ограниченные варианты до этого, но всё зависит от конкретного банка.',
    faq3Q: 'Какой лучший банковский счёт для иностранных студентов в Корее?',
    faq3A:
      'Лучший банковский счёт для иностранных студентов в Корее — обычно тот, где есть отделение рядом с кампусом, где чётко обрабатывают заявки иностранцев и предлагают удобное мобильное приложение.',
    finalTitle: 'Финальный совет',
    finalP:
      'Если вы иностранный студент, не зацикливайтесь на репутации бренда. Сосредоточьтесь на том, что реально сейчас: ваши документы, местоположение вуза и сможет ли сотрудник отделения чётко помочь вам. Лучший банковский счёт для иностранцев в Корее — тот, который вы можете открыть без проблем и использовать без ежедневного разочарования.',
    prepTitle: 'Что подготовить перед открытием счёта',
    prepP:
      'Перед визитом в корейский банк большинству студентов следует сначала подготовить базовые документы, номер телефона и информацию о месте проживания.',
    arcLabel: 'Руководство по карте ARC',
    simLabel: 'Руководство по SIM-карте',
    gettingStartedLabel: 'Руководство для начинающих',
    relatedTitle: 'Связанные руководства',
    relatedDesc:
      'Эти страницы помогут вам разобраться с остальными первоначальными задачами в Корее.',
    relatedArcBtn: 'Руководство по ARC',
    relatedSimBtn: 'Руководство по SIM-карте',
  },
  ja: {
    eyebrow: '銀行 / 日常生活ガイド',
    heroTitle: '外国人向け韓国銀行口座開設ガイド（簡単セットアップ）',
    heroLead:
      '韓国で銀行口座を開設することは、初めての方には戸惑いを感じる場合があります。多くの外国人や留学生は、家賃・送金・アルバイトの給与・日常の支払いのために韓国の銀行口座が必要ですが、手続きは書類やビザの状況によって異なる場合があります。',
    affiliateTitle: '海外からお金を受け取るなら Wise',
    affiliateDesc:
      '多くの留学生は家族から学費・生活費・仕送りを受け取ります。Wiseなら実際の為替レートで素早く送金でき、手数料は低く明瞭です — 銀行の上乗せ手数料も、驚きもありません。',
    affiliateCta: '初回送金手数料無料',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText:
      '韓国で外国人に最適な銀行口座は、滞在期間・ARC取得状況・必要なサービスによって異なります。多くの留学生にとっては、開設手続きがシンプルで、外国人対応がしっかりしており、使いやすいモバイルアプリを持つ銀行が最適な選択肢となります。',
    s1Title: '韓国の銀行口座が必要な理由',
    s1P: '韓国の銀行口座があると、日常生活がぐっと楽になります。口座がなければ、送金・オンライン決済・授業料関連の手続き・携帯サービス・韓国でのお金の受け取りなどで困ることがあります。',
    s1Items: [
      '家賃や敷金の支払い',
      '家族や職場からの送金の受け取り',
      '韓国の決済システムへの接続',
      '現地での支出管理がより簡単に',
    ],
    s2Title: '外国人に良い銀行とは？',
    s2P: '韓国で外国人に最適な銀行口座が、必ずしも最大手の銀行にあるとは限りません。より重要なのは、その銀行が外国人顧客への対応に慣れているか、スタッフが手続きを明確に説明できるか、そしてアプリが日常的に使いやすいかどうかです。',
    s2Items: [
      '外国人向けの口座開設プロセス',
      '合理的な書類要件',
      '使いやすいモバイルバンキングアプリ',
      '大学や自宅近くに支店があること',
      '安定した送金・支払い機能',
    ],
    s3Title: '必要になる可能性のある書類',
    s3P1: '必要な書類は銀行や状況によって異なりますが、多くの外国人には似たようなセットが求められます。',
    s3Items: [
      'パスポート',
      'ARCカードまたは在留状況の証明',
      '韓国の電話番号',
      '在学証明書・学校の書類または住所情報',
    ],
    s3P2: '柔軟に対応してくれる銀行もありますが、どこでも同じ手続きとは限りません。',
    s4Title: 'ARCなしで銀行口座を開設できますか？',
    s4P1: 'ARCなしで限定的な口座を開設できる場合もありますが、ARC取得後の方がはるかに楽になるのが一般的です。韓国で身元と在留状況が明確に確認された後は、多くの長期機能が利用しやすくなります。',
    s4P2: '来たばかりの方にとって最も現実的な方法は、まず基本的な準備を整え、できるだけ揃った書類を持って銀行を訪れることです。',
    s5Title: '外国人が韓国の銀行でよく直面する問題',
    s5Items: [
      '支店によって書類の要件が異なる',
      '口座説明時の言語の壁',
      '最初は送金や口座機能に制限がある',
      'モバイルバンキングの設定が難しい',
      '口座の利用目的や取引限度額に関する混乱',
    ],
    s5P: 'だからこそ、多くの学生は支店を訪問する前に大学の国際部に相談します。',
    s6Title: '銀行を訪問する前の実践的なヒント',
    s6Items: [
      '必要だと思うより多くの書類を持参する',
      '大学や外国人が多い地域の近くの支店を選ぶ',
      '大学にサポートや推薦を依頼する',
      'できれば早い時間帯に行く',
      '韓国の住所と電話番号を明確に準備しておく',
    ],
    s7Title: 'どの銀行が最善ですか？',
    s7P1: '誰にでも完璧な答えはありません。韓国で外国人に最適な銀行口座は、お住まいの地域・書類の状況・口座の利用目的によって異なります。ソウルの学生に適した銀行が、他の都市では最適でない場合もあります。',
    s7P2: '実際には、最も口座開設がスムーズで、お金の管理がしやすく、現在の書類に対応している銀行が最良の選択肢となることが多いです。',
    closingP:
      '多くの新来者にとって、韓国で外国人に最適な銀行口座を見つけることは、知名度の問題ではなく、最も開設しやすく、使いやすく、現在の書類に最も現実的な銀行はどこかという問題です。',
    faqTitle: 'よくある質問',
    faq1Q: '外国人は韓国で銀行口座を開設できますか？',
    faq1A:
      'はい、外国人は韓国で銀行口座を開設できますが、手続きは銀行・ビザの状況・持参した書類によって異なります。',
    faq2Q: '韓国で銀行口座を開設するにはARCが必要ですか？',
    faq2A:
      '多くの場合、ARC取得後の方が口座開設が容易になります。一部の銀行ではARC取得前に限定的なオプションを提供している場合もありますが、銀行によって異なります。',
    faq3Q: '韓国の留学生に最適な銀行口座は何ですか？',
    faq3A:
      '韓国の留学生に最適な銀行口座は、通常、キャンパス近くに支店があり、外国人の申請を明確に処理でき、実用的なモバイルバンキングアプリを提供している銀行です。',
    finalTitle: '最後のアドバイス',
    finalP:
      '留学生の方は、ブランドの評判だけにこだわらないでください。今現実的に対応できることに集中しましょう：書類の状況、学校の場所、支店のスタッフが明確にサポートしてくれるかどうか。韓国で外国人に最適な銀行口座とは、スムーズに開設でき、日々のストレスなく使える口座のことです。',
    prepTitle: '銀行口座開設前に準備すること',
    prepP:
      '韓国の銀行を訪問する前に、ほとんどの留学生はまず基本的な書類、電話番号、居住関連の情報を準備しておく必要があります。',
    arcLabel: 'ARCカードガイド',
    simLabel: 'SIMカードガイド',
    gettingStartedLabel: '入門ガイド',
    relatedTitle: '関連ガイド',
    relatedDesc:
      'これらのページは、韓国での初期セットアップの残りの部分をサポートします。',
    relatedArcBtn: 'ARCガイド',
    relatedSimBtn: 'SIMカードガイド',
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

  const url = `https://ksurvivalkit.com/${lang}/best-bank-account-for-foreigners-korea`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: 'https://ksurvivalkit.com/en/best-bank-account-for-foreigners-korea',
        zh: 'https://ksurvivalkit.com/zh/best-bank-account-for-foreigners-korea',
        ru: 'https://ksurvivalkit.com/ru/best-bank-account-for-foreigners-korea',
        ja: 'https://ksurvivalkit.com/ja/best-bank-account-for-foreigners-korea',
        vi: 'https://ksurvivalkit.com/vi/best-bank-account-for-foreigners-korea',
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
      title: 'Best Bank Account for Foreigners in Korea (2026 Guide)',
      description:
        'A practical Korean bank account guide for foreigners and international students.',
    },
  };
}

export default async function BestBankAccountForForeignersKoreaPage({
  params,
}: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const l: L = (lang as L) in CONTENT ? (lang as L) : 'en';
  const c = CONTENT[l];
  const pageUrl = `https://ksurvivalkit.com/${lang}/best-bank-account-for-foreigners-korea`;

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
      <ArticleHero eyebrow={c.eyebrow} title={c.heroTitle} lead={c.heroLead} />
      <PageDisclaimer type="general" />
      <main className="bg-slate-50 px-6 py-12">
        <article className="mx-auto max-w-4xl space-y-10">
          <AffiliateBanner
            icon="💸"
            title={c.affiliateTitle}
            description={c.affiliateDesc}
            href={WISE_AFFILIATE_URL}
            ctaText={c.affiliateCta}
            accentColor="green"
          />

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {c.quickAnswerTitle}
            </h2>
            <p className="mt-3 leading-7 text-slate-700">{c.quickAnswerText}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s1Title}</h2>
            <p className="leading-7 text-slate-700">{c.s1P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s1Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s2Title}</h2>
            <p className="leading-7 text-slate-700">{c.s2P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s3Title}</h2>
            <p className="leading-7 text-slate-700">{c.s3P1}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s3Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="leading-7 text-slate-700">{c.s3P2}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s4Title}</h2>
            <p className="leading-7 text-slate-700">{c.s4P1}</p>
            <p className="leading-7 text-slate-700">{c.s4P2}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s5Title}</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s5Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="leading-7 text-slate-700">{c.s5P}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s6Title}</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s6Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s7Title}</h2>
            <p className="leading-7 text-slate-700">{c.s7P1}</p>
            <p className="leading-7 text-slate-700">{c.s7P2}</p>
          </section>

          <p className="leading-7 text-slate-700">{c.closingP}</p>

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

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">
              {c.finalTitle}
            </h2>
            <p className="mt-3 leading-7 text-slate-700">{c.finalP}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.prepTitle}</h2>
            <p className="leading-7 text-slate-700">{c.prepP}</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <a
                  href={`/${lang}/arc-card-korea-guide`}
                  className="text-blue-600 underline"
                >
                  {c.arcLabel}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/how-to-get-sim-card-in-korea`}
                  className="text-blue-600 underline"
                >
                  {c.simLabel}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/getting-started`}
                  className="text-blue-600 underline"
                >
                  {c.gettingStartedLabel}
                </a>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6 text-white">
            <h2 className="text-2xl font-bold">{c.relatedTitle}</h2>
            <p className="mt-3 text-slate-300">{c.relatedDesc}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`/${lang}/arc-card-korea-guide`}
                className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900"
              >
                {c.relatedArcBtn}
              </a>
              <a
                href={`/${lang}/how-to-get-sim-card-in-korea`}
                className="rounded-xl border border-white/30 px-4 py-2 font-semibold text-white"
              >
                {c.relatedSimBtn}
              </a>
            </div>
          </section>
        </article>
        <RelatedPosts
          lang={lang as string}
          current="best-bank-account-for-foreigners-korea"
        />
      </main>
    </>
  );
}
