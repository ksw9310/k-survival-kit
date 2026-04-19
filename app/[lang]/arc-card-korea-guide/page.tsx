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
    title: 'ARC Card Korea Guide for International Students (2026) | K-Survival Kit',
    description: 'Need an ARC card in Korea? This guide explains what it is, when to apply, required documents, and how international students can avoid delays and confusion.',
  },
  zh: {
    title: '韩国外国人登录证(ARC)申请指南 | K-Survival Kit',
    description: '在韩国需要办理外国人登录证(ARC卡)？本指南详细说明ARC是什么、何时申请、所需材料，以及留学生如何避免常见问题。',
  },
  ru: {
    title: 'Руководство по карте ARC в Корее | K-Survival Kit',
    description: 'Нужна карта ARC в Корее? В этом руководстве объясняется, что это такое, когда подавать заявку, какие документы нужны и как избежать задержек.',
  },
  ja: {
    title: '韓国外国人登録証（ARC）取得ガイド | K-Survival Kit',
    description: '韓国でARCカードが必要？このガイドでは、ARCとは何か、いつ申請するか、必要書類、そして留学生がよくあるミスを避ける方法を解説します。',
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
  arcImportantP: string;
  s2Title: string;
  s2P: string;
  s2Items: string[];
  s3Title: string;
  s3P1: string;
  s3P2: string;
  s4Title: string;
  s4P: string;
  s4Items: string[];
  s4P2: string;
  s5Title: string;
  s5P: string;
  s5Items: string[];
  s6Title: string;
  s6Items: string[];
  s7Title: string;
  s7Items: string[];
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
  simLabel: string;
  bankLabel: string;
  deliveryLabel: string;
  relatedTitle: string;
  relatedDesc: string;
  relatedSimBtn: string;
  relatedStartBtn: string;
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Visa / ARC Guide',
    heroTitle: 'ARC Card Korea Guide for International Students (2026)',
    heroLead: 'If you plan to stay in Korea for more than a short period, the ARC card is one of the most important documents you will need. This guide explains what it is, why it matters, and how international students can prepare for the process.',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText: 'The ARC, often called the Alien Registration Card or residence card, is an essential ID for foreigners living in Korea. International students usually need it for banking, phone plans, insurance, and many official services.',
    s1Title: 'What Is an ARC Card in Korea?',
    s1P1: 'The ARC card in Korea is the identification card used by registered foreign residents. It helps prove your legal stay and is often required for important daily tasks after arrival.',
    s1P2: 'Even if people still say "ARC," the terminology and procedures may change over time, so always check the most current official guidance before applying.',
    arcImportantP: 'The ARC card in Korea is one of the most important steps for foreigners and international students who plan to stay long-term and use local services.',
    s2Title: 'Why the ARC Is Important',
    s2P: 'For many international students, life in Korea becomes much easier after receiving the ARC card. Without it, some services can be limited or slower to access.',
    s2Items: ['Opening a Korean bank account', 'Signing up for longer mobile phone plans', 'Using some financial and identity verification services', 'Handling immigration-related updates more smoothly'],
    s3Title: 'When Should You Apply?',
    s3P1: 'If you are staying in Korea long-term, you usually need to register within the required period after arrival. International students should not wait until the last minute because reservation slots and processing times may vary.',
    s3P2: 'The safest approach is to check your visa conditions early and begin preparing as soon as possible after entering Korea.',
    s4Title: 'Common Documents You May Need',
    s4P: 'Requirements can vary, but international students often prepare a similar set of documents before their ARC application.',
    s4Items: ['Passport', 'Visa-related documents', 'School enrollment or admission documents', 'Passport-style photo', 'Application form or appointment confirmation', 'Address information in Korea'],
    s4P2: 'Always confirm the latest checklist through the official immigration system or your school\'s international office.',
    s5Title: 'How the ARC Process Usually Works',
    s5P: 'The ARC process in Korea usually involves preparing documents, booking an appointment if needed, visiting the immigration office, submitting your application, and waiting for processing.',
    s5Items: ['Check the current requirements', 'Prepare your documents carefully', 'Book an appointment if required', 'Visit the immigration office on time', 'Submit documents and complete the process', 'Wait for card issuance or delivery'],
    s6Title: 'Common Mistakes to Avoid',
    s6Items: ['Waiting too long before checking requirements', 'Bringing incomplete documents', 'Using outdated online information', 'Missing your reservation or appointment time', 'Assuming every visa follows the same process'],
    s7Title: 'Useful Tips for International Students',
    s7Items: ['Ask your university international office for help', 'Prepare digital and printed copies of key documents', 'Keep your Korean address written clearly', 'Arrive early on appointment day', 'Check official updates instead of relying only on blogs'],
    faqTitle: 'FAQ',
    faq1Q: 'What is an ARC card in Korea?',
    faq1A: 'The ARC card in Korea is an ID card for foreign residents. It is required for many services such as banking, phone plans, and official verification.',
    faq2Q: 'Do international students need an ARC in Korea?',
    faq2A: 'Yes, most international students staying long-term need to apply for an ARC after arriving in Korea.',
    faq3Q: 'How long does it take to get an ARC card?',
    faq3A: 'Processing time can vary, but it usually takes a few weeks depending on the immigration office and application timing.',
    finalTitle: 'Final Advice',
    finalP: 'The ARC card Korea process may feel complicated at first, but it is manageable if you prepare early and follow current guidance. For most international students, the best strategy is to handle the ARC application as one of the first major tasks after arrival.',
    prepTitle: 'What to Do Before and After Getting Your ARC',
    prepP: 'Before applying for your ARC card in Korea, it is helpful to prepare your SIM card and basic setup. After receiving your ARC, you can access more services like banking and mobile plans.',
    simLabel: 'SIM Card Guide',
    bankLabel: 'Bank Account Guide',
    deliveryLabel: 'Delivery Apps Guide',
    relatedTitle: 'Related Guides',
    relatedDesc: 'After checking the ARC process, you may also want to set up your SIM card and learn the basics of getting started in Korea.',
    relatedSimBtn: 'SIM Card Guide',
    relatedStartBtn: 'Getting Started',
  },
  zh: {
    eyebrow: '签证 / ARC指南',
    heroTitle: '韩国外国人登录证（ARC）申请指南（2026）',
    heroLead: '如果您计划在韩国停留较长时间，ARC卡（外国人登录证）是您最重要的证件之一。本指南将说明它是什么、为何重要，以及留学生如何顺利完成申请。',
    quickAnswerTitle: '简要回答',
    quickAnswerText: 'ARC（外国人登录证）是在韩国居住的外国人必备的身份证件。留学生通常需要它来办理银行开户、手机套餐、保险以及许多官方服务。',
    s1Title: '韩国ARC卡是什么？',
    s1P1: '韩国ARC卡是已登记外国居民使用的身份证件，能证明您的合法居留身份，并且在入境后的许多重要日常事务中经常被要求出示。',
    s1P2: '虽然大家还是习惯叫"ARC"，但相关术语和程序可能随时间变化，请在申请前务必查阅最新的官方指引。',
    arcImportantP: '对于计划长期居住并使用本地服务的外国人和留学生来说，办理ARC卡是在韩国最重要的步骤之一。',
    s2Title: 'ARC的重要性',
    s2P: '对许多留学生来说，拿到ARC卡后在韩国的生活会方便很多。没有它，部分服务可能受限或需要更长时间才能使用。',
    s2Items: ['开立韩国银行账户', '申请长期手机套餐', '使用部分金融和身份验证服务', '更顺畅地处理出入境相关事务'],
    s3Title: '何时申请？',
    s3P1: '如果您计划长期居住，通常需要在入境后的规定期限内完成登记。留学生不应拖到最后一刻，因为预约名额和审批时间可能会有所不同。',
    s3P2: '最稳妥的方法是尽早了解签证条件，入境后尽快开始准备。',
    s4Title: '可能需要的常见证件',
    s4P: '所需材料可能有所不同，但留学生在申请ARC前通常需要准备一套类似的文件。',
    s4Items: ['护照', '签证相关文件', '学校录取或在读证明', '证件照', '申请表或预约确认单', '在韩国的地址信息'],
    s4P2: '请务必通过官方移民系统或学校国际处确认最新所需材料清单。',
    s5Title: 'ARC申请流程通常是怎样的',
    s5P: '韩国的ARC申请流程通常包括：准备材料、如有需要则预约、前往出入境管理事务所、提交申请、等待审批。',
    s5Items: ['确认当前要求', '仔细准备材料', '如有需要则提前预约', '准时前往出入境管理事务所', '提交文件并完成流程', '等待证件签发或邮寄'],
    s6Title: '常见错误及避免方法',
    s6Items: ['太晚才开始了解要求', '携带不完整的证件', '使用过时的网络信息', '错过预约或就诊时间', '以为所有签证的流程都一样'],
    s7Title: '对留学生的实用建议',
    s7Items: ['向大学国际处寻求帮助', '准备重要文件的电子版和纸质版', '清楚记录在韩国的住址', '预约当天提前到达', '查阅官方信息，不要只依赖博客'],
    faqTitle: '常见问题',
    faq1Q: '韩国的ARC卡是什么？',
    faq1A: '韩国ARC卡是外国居民的身份证件，用于办理银行、手机套餐和官方身份验证等多项服务。',
    faq2Q: '留学生在韩国需要ARC吗？',
    faq2A: '是的，大多数长期居住的留学生需要在抵韩后申请ARC。',
    faq3Q: '办理ARC卡需要多长时间？',
    faq3A: '审批时间因出入境管理事务所和申请时间不同而有所差异，通常需要几周时间。',
    finalTitle: '最终建议',
    finalP: '韩国ARC卡的申请流程一开始可能看起来复杂，但只要提前准备并遵循最新指引，是完全可以顺利完成的。对大多数留学生来说，最好的策略是将ARC申请作为入境后的首要任务之一来处理。',
    prepTitle: '办理ARC前后需要做的事',
    prepP: '申请ARC卡之前，建议先准备好SIM卡和基本设置。拿到ARC后，您就可以使用更多服务，如银行和手机套餐。',
    simLabel: 'SIM卡指南',
    bankLabel: '银行账户指南',
    deliveryLabel: '外卖App指南',
    relatedTitle: '相关指南',
    relatedDesc: '了解ARC申请流程后，您可能还需要办理SIM卡，并了解在韩国入门生活的基础知识。',
    relatedSimBtn: 'SIM卡指南',
    relatedStartBtn: '入门指南',
  },
  ru: {
    eyebrow: 'Виза / Руководство по ARC',
    heroTitle: 'Руководство по карте ARC в Корее для иностранных студентов (2026)',
    heroLead: 'Если вы планируете пробыть в Корее долгое время, карта ARC — один из самых важных документов. Это руководство объясняет, что это такое, почему она важна и как иностранным студентам подготовиться к процессу оформления.',
    quickAnswerTitle: 'Быстрый ответ',
    quickAnswerText: 'ARC (карта регистрации иностранца или вид на жительство) — это обязательный документ для иностранцев, живущих в Корее. Иностранным студентам он обычно нужен для банковского счёта, мобильных тарифов, страховки и многих официальных услуг.',
    s1Title: 'Что такое карта ARC в Корее?',
    s1P1: 'Карта ARC в Корее — это удостоверение личности для зарегистрированных иностранных резидентов. Она подтверждает ваше законное пребывание и часто требуется для важных повседневных задач после приезда.',
    s1P2: 'Хотя многие по-прежнему говорят «ARC», терминология и процедуры могут меняться, поэтому всегда проверяйте актуальные официальные инструкции перед подачей заявки.',
    arcImportantP: 'Карта ARC — один из важнейших шагов для иностранцев и студентов, планирующих остаться в Корее надолго и пользоваться местными услугами.',
    s2Title: 'Почему карта ARC важна',
    s2P: 'Для многих иностранных студентов жизнь в Корее становится значительно проще после получения карты ARC. Без неё некоторые услуги могут быть ограничены или доступны с задержкой.',
    s2Items: ['Открытие корейского банковского счёта', 'Подключение долгосрочных мобильных тарифов', 'Использование некоторых финансовых и верификационных сервисов', 'Более гладкое решение вопросов, связанных с миграцией'],
    s3Title: 'Когда нужно подавать заявку?',
    s3P1: 'Если вы остаётесь в Корее надолго, обычно нужно зарегистрироваться в течение установленного срока после въезда. Студентам не стоит тянуть до последнего, так как слоты для записи и сроки обработки могут варьироваться.',
    s3P2: 'Безопаснее всего — заблаговременно ознакомиться с условиями визы и начать подготовку как можно скорее после въезда в Корею.',
    s4Title: 'Документы, которые могут понадобиться',
    s4P: 'Требования могут различаться, но иностранные студенты обычно готовят схожий пакет документов перед подачей заявки на ARC.',
    s4Items: ['Паспорт', 'Документы, связанные с визой', 'Документы о зачислении или поступлении в школу/университет', 'Фото в паспортном формате', 'Заявление или подтверждение записи', 'Адресная информация в Корее'],
    s4P2: 'Всегда уточняйте актуальный список документов через официальную иммиграционную систему или международный отдел вашего вуза.',
    s5Title: 'Как обычно проходит процесс получения ARC',
    s5P: 'Процесс получения ARC в Корее обычно включает подготовку документов, запись при необходимости, визит в иммиграционный офис, подачу заявки и ожидание оформления.',
    s5Items: ['Ознакомьтесь с текущими требованиями', 'Тщательно подготовьте документы', 'При необходимости запишитесь на приём', 'Приходите в иммиграционный офис вовремя', 'Подайте документы и завершите процедуру', 'Дождитесь выдачи или доставки карты'],
    s6Title: 'Распространённые ошибки, которых стоит избегать',
    s6Items: ['Слишком позднее ознакомление с требованиями', 'Неполный пакет документов', 'Использование устаревшей информации из интернета', 'Пропуск записи или опоздание на приём', 'Предположение, что для любой визы процесс одинаков'],
    s7Title: 'Полезные советы для иностранных студентов',
    s7Items: ['Обратитесь за помощью в международный отдел университета', 'Подготовьте электронные и распечатанные копии ключевых документов', 'Запишите свой корейский адрес чётко', 'Приходите заблаговременно в день записи', 'Проверяйте официальные обновления, а не только блоги'],
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Что такое карта ARC в Корее?',
    faq1A: 'Карта ARC в Корее — это удостоверение личности для иностранных резидентов. Она требуется для многих услуг: банкинга, мобильных тарифов и официальной верификации.',
    faq2Q: 'Нужна ли иностранным студентам карта ARC в Корее?',
    faq2A: 'Да, большинству студентов, остающихся надолго, необходимо получить ARC после приезда в Корею.',
    faq3Q: 'Сколько времени занимает оформление карты ARC?',
    faq3A: 'Сроки варьируются, но обычно занимают несколько недель в зависимости от иммиграционного офиса и времени подачи заявки.',
    finalTitle: 'Финальный совет',
    finalP: 'Процесс получения карты ARC в Корее поначалу может показаться сложным, но с ранней подготовкой и следованием актуальным инструкциям всё вполне выполнимо. Для большинства студентов лучшая стратегия — сделать подачу заявки на ARC одной из первоочередных задач после приезда.',
    prepTitle: 'Что делать до и после получения ARC',
    prepP: 'Перед подачей заявки на карту ARC полезно подготовить SIM-карту и базовый набор. После получения ARC вам станут доступны больше услуг, например банковский счёт и мобильные тарифы.',
    simLabel: 'Руководство по SIM-карте',
    bankLabel: 'Руководство по банковскому счёту',
    deliveryLabel: 'Руководство по приложениям доставки',
    relatedTitle: 'Связанные руководства',
    relatedDesc: 'После ознакомления с процессом получения ARC вам также может понадобиться настроить SIM-карту и узнать основы жизни в Корее.',
    relatedSimBtn: 'Руководство по SIM-карте',
    relatedStartBtn: 'Начало работы',
  },
  ja: {
    eyebrow: 'ビザ / ARCガイド',
    heroTitle: '韓国外国人登録証（ARCカード）取得ガイド（2026年・留学生向け）',
    heroLead: '韓国に長期滞在する予定がある方にとって、ARCカードは最も重要な書類の一つです。このガイドでは、ARCとは何か、なぜ重要か、そして留学生がどのように申請準備をすればよいかを解説します。',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText: 'ARC（外国人登録証）は、韓国に住む外国人にとって必須の身分証明書です。留学生は通常、銀行口座の開設・携帯プランの契約・保険・各種公的サービスの利用に必要となります。',
    s1Title: '韓国のARCカードとは？',
    s1P1: '韓国のARCカードは、登録された外国人居住者が使用する身分証明書です。合法的な在留を証明するものであり、入国後の重要な日常手続きに頻繁に求められます。',
    s1P2: '「ARC」という呼び方は一般的ですが、用語や手続きは時間とともに変わる場合があります。申請前には必ず最新の公式情報を確認してください。',
    arcImportantP: '韓国に長期滞在して現地のサービスを利用する予定の外国人・留学生にとって、ARCカードの取得は最も重要なステップの一つです。',
    s2Title: 'ARCが重要な理由',
    s2P: '多くの留学生にとって、ARCカードを取得した後の韓国生活は格段に楽になります。ARCがなければ、一部のサービスが制限されたり、利用が遅れたりすることがあります。',
    s2Items: ['韓国の銀行口座を開設できる', '長期の携帯プランに加入できる', '一部の金融・本人確認サービスが利用できる', '出入国関連の手続きがよりスムーズになる'],
    s3Title: 'いつ申請すればよいですか？',
    s3P1: '韓国に長期滞在する場合、通常は入国後の定められた期間内に登録する必要があります。予約枠や処理時間が変動することがあるため、留学生は直前まで待つべきではありません。',
    s3P2: '最も安全な方法は、ビザの条件を早めに確認し、入国後できるだけ早く準備を始めることです。',
    s4Title: '必要になる可能性のある書類',
    s4P: '要件は異なる場合がありますが、留学生はARC申請前に通常、同様の書類セットを準備します。',
    s4Items: ['パスポート', 'ビザ関連書類', '学校の在籍証明または入学書類', 'パスポートサイズの写真', '申請書または予約確認書', '韓国の住所情報'],
    s4P2: '公式の出入国管理システムまたは大学の国際部を通じて、最新のチェックリストを必ず確認してください。',
    s5Title: 'ARC申請の一般的な流れ',
    s5P: '韓国のARC申請プロセスは通常、書類の準備・必要に応じた予約・出入国管理局への訪問・申請書の提出・審査待ちという流れで進みます。',
    s5Items: ['現在の要件を確認する', '書類を丁寧に準備する', '必要であれば予約を取る', '出入国管理局に時間通りに訪問する', '書類を提出してプロセスを完了する', 'カードの発行または配達を待つ'],
    s6Title: 'よくあるミスと回避方法',
    s6Items: ['要件の確認を後回しにする', '不完全な書類を持参する', '古いネット情報を信頼する', '予約や面談時間を逃す', '全てのビザで同じプロセスだと思い込む'],
    s7Title: '留学生への実践的なアドバイス',
    s7Items: ['大学の国際部に助けを求める', '重要書類のデジタルコピーと印刷コピーを用意する', '韓国の住所を明確に書き留めておく', '予約当日は早めに到着する', 'ブログだけでなく公式情報を確認する'],
    faqTitle: 'よくある質問',
    faq1Q: '韓国のARCカードとは何ですか？',
    faq1A: '韓国のARCカードは外国人居住者のための身分証明書です。銀行、携帯プラン、公的な本人確認など多くのサービスに必要です。',
    faq2Q: '韓国の留学生はARCが必要ですか？',
    faq2A: 'はい、長期滞在する留学生のほとんどは、韓国に到着した後にARCを申請する必要があります。',
    faq3Q: 'ARCカードの取得にはどれくらいかかりますか？',
    faq3A: '処理時間は異なりますが、通常は出入国管理局や申請時期によって数週間かかります。',
    finalTitle: '最後のアドバイス',
    finalP: '韓国のARCカード取得プロセスは最初は複雑に感じるかもしれませんが、早めに準備し最新のガイダンスに従えば対処できます。ほとんどの留学生にとって、入国後の最初の重要タスクの一つとしてARC申請を進めるのが最善の戦略です。',
    prepTitle: 'ARC取得前後にすべきこと',
    prepP: 'ARCカードを申請する前に、SIMカードと基本的なセットアップを済ませておくと便利です。ARCを取得した後は、銀行や携帯プランなどのサービスが利用できるようになります。',
    simLabel: 'SIMカードガイド',
    bankLabel: '銀行口座ガイド',
    deliveryLabel: 'デリバリーアプリガイド',
    relatedTitle: '関連ガイド',
    relatedDesc: 'ARC申請の流れを確認した後は、SIMカードの設定や韓国生活の基本についても確認しておきましょう。',
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

  const url = `https://k-survival-kit.vercel.app/${lang}/arc-card-korea-guide`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: '/en/arc-card-korea-guide',
        zh: '/zh/arc-card-korea-guide',
        ru: '/ru/arc-card-korea-guide',
        ja: '/ja/arc-card-korea-guide',
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
      title: 'ARC Card Korea Guide for International Students (2026)',
      description:
        'A practical ARC guide for foreigners and students living in Korea.',
    },
  };
}

export default async function ArcCardGuidePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const l: L = (lang as L) in CONTENT ? (lang as L) : 'en';
  const c = CONTENT[l];
  const pageUrl = `https://k-survival-kit.vercel.app/${lang}/arc-card-korea-guide`;

  const jsonLdData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: c.heroTitle,
      description: META[l].description,
      url: pageUrl,
      inLanguage: lang,
      publisher: { '@type': 'Organization', name: 'K-Survival Kit', url: 'https://k-survival-kit.vercel.app' },
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
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: c.s5Title,
      description: c.s5P,
      step: c.s5Items.map((text, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        text,
      })),
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

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">{c.quickAnswerTitle}</h2>
          <p className="mt-3 leading-7 text-slate-700">{c.quickAnswerText}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s1Title}</h2>
          <p className="leading-7 text-slate-700">{c.s1P1}</p>
          <p className="leading-7 text-slate-700">{c.s1P2}</p>
        </section>

        <p className="leading-7 text-slate-700">{c.arcImportantP}</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s2Title}</h2>
          <p className="leading-7 text-slate-700">{c.s2P}</p>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            {c.s2Items.map((item, i) => <li key={i}>{item}</li>)}
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
          <p className="leading-7 text-slate-700">{c.s4P2}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s5Title}</h2>
          <p className="leading-7 text-slate-700">{c.s5P}</p>
          <ol className="list-decimal space-y-2 pl-6 text-slate-700">
            {c.s5Items.map((item, i) => <li key={i}>{item}</li>)}
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s6Title}</h2>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            {c.s6Items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s7Title}</h2>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            {c.s7Items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
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

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900">{c.finalTitle}</h2>
          <p className="mt-3 leading-7 text-slate-700">{c.finalP}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.prepTitle}</h2>
          <p className="leading-7 text-slate-700">{c.prepP}</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <a href={`/${lang}/how-to-get-sim-card-in-korea`} className="text-blue-600 underline">
                {c.simLabel}
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
      <RelatedPosts lang={lang as string} current="arc-card-korea-guide" />
      </main>
    </>
  );
}