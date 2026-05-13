import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import ArticleHero from '@/components/ArticleHero';
import PageDisclaimer from '@/components/PageDisclaimer';
import RelatedPosts from '@/components/RelatedPosts';
import JsonLd from '@/components/JsonLd';

type L = 'en' | 'zh' | 'ru' | 'ja' | 'vi';

const META: Record<L, { title: string; description: string }> = {
  en: {
    title: 'ARC Card Korea Guide for International Students (2026) | K-Survival Kit',
    description: 'Need an ARC card in Korea? Apply within 90 days of arrival. This guide covers documents, the ₩30,000 fee, hikorea.go.kr booking, and step-by-step tips for international students.',
  },
  zh: {
    title: '韩国外国人登录证(ARC)申请指南 | K-Survival Kit',
    description: '在韩国需要办理外国人登录证(ARC卡)？入境后90天内必须申请，费用₩30,000。本指南详细说明所需材料、hikorea.go.kr预约方法及留学生常见问题。',
  },
  ru: {
    title: 'Руководство по карте ARC в Корее | K-Survival Kit',
    description: 'Нужна карта ARC в Корее? Нужно подать заявку в течение 90 дней после въезда. Стоимость ₩30,000. Руководство включает документы, запись через hikorea.go.kr и пошаговые советы.',
  },
  ja: {
    title: '韓国外国人登録証（ARC）取得ガイド | K-Survival Kit',
    description: '韓国でARCカードが必要？入国から90日以内に申請が必要です。費用は₩30,000。hikorea.go.krでの予約方法・必要書類・留学生向けの手順を詳しく解説。',
  },
  vi: {
    title: 'Hướng dẫn thẻ ARC Hàn Quốc cho Du học sinh (2026) | K-Survival Kit',
    description: 'Cần thẻ ARC ở Hàn Quốc? Phải nộp đơn trong 90 ngày kể từ khi nhập cảnh. Phí ₩30,000. Hướng dẫn gồm giấy tờ, đặt lịch tại hikorea.go.kr và các bước chi tiết cho du học sinh.',
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
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;
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

const LINKS_TITLE: Record<L, string> = {
  en: 'Official Links & Resources',
  zh: '官方链接与资源',
  ru: 'Официальные ссылки и ресурсы',
  ja: '公式リンク・リソース',
  vi: 'Liên kết chính thức & Tài nguyên',
};

const LINKS_DESC: Record<L, string> = {
  en: 'Official sites for booking ARC appointments and checking the latest requirements.',
  zh: '用于预约ARC申请和查询最新要求的官方网站。',
  ru: 'Официальные сайты для записи на ARC и проверки актуальных требований.',
  ja: 'ARC予約と最新要件の確認に使用する公式サイト。',
  vi: 'Các trang chính thức để đặt lịch ARC và kiểm tra yêu cầu mới nhất.',
};

const HIKOREA_LABEL: Record<L, string> = {
  en: 'HiKorea — Online Immigration Portal',
  zh: 'HiKorea — 在线出入境申请平台',
  ru: 'HiKorea — Онлайн-портал по иммиграции',
  ja: 'HiKorea — オンライン入出国ポータル',
  vi: 'HiKorea — Cổng thông tin xuất nhập cảnh trực tuyến',
};

const HIKOREA_DESC: Record<L, string> = {
  en: 'Book your ARC appointment, check requirements, and track your application status.',
  zh: '预约ARC申请、查询所需材料、追踪申请进度。',
  ru: 'Запись на ARC, проверка требований и отслеживание статуса заявки.',
  ja: 'ARC予約・必要書類の確認・申請状況の確認ができます。',
  vi: 'Đặt lịch hẹn ARC, kiểm tra yêu cầu và theo dõi trạng thái đơn.',
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Visa / ARC Guide',
    heroTitle: 'ARC Card Korea Guide for International Students (2026)',
    heroLead: 'The ARC card (외국인등록증) is your official ID as a foreign resident in Korea. Without it, you cannot open a bank account, sign a phone plan, or access most government services. This guide walks you through every step — from the 90-day deadline to the ₩30,000 fee.',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText: 'If you hold a D-2 (university student) or D-4 (language institute) visa, you must apply for your ARC within 90 days of arriving in Korea. The application fee is ₩30,000, paid at the immigration office. Book your appointment in advance at hikorea.go.kr.',
    s1Title: 'What Is an ARC Card in Korea?',
    s1P1: 'The ARC (Alien Registration Card), officially called 외국인등록증, is the national ID card for foreign residents in Korea. It works like a resident registration number and is used to verify your identity for almost every official service in the country.',
    s1P2: 'Once you have your ARC, daily life in Korea becomes much smoother — you can open a bank account, sign up for mobile plans, access health insurance, and use government portals that require Korean ID verification.',
    arcImportantP: 'For D-2 and D-4 visa holders, the ARC is not optional. Working, banking, or signing contracts without one creates unnecessary complications — and failing to register within 90 days is a visa violation.',
    s2Title: 'Why the ARC Is Important',
    s2P: 'Many services in Korea are only fully accessible after you register as a foreign resident. Here is what becomes available once you have your ARC:',
    s2Items: [
      'Opening a Korean bank account (required for receiving wages)',
      'Signing up for a post-paid mobile plan (more affordable than prepaid)',
      'Enrolling in national health insurance (건강보험)',
      'Using government portals that require identity verification',
      'Signing apartment contracts and rental agreements',
      'Accessing Korea Post, some delivery services, and parcel pickup',
    ],
    s3Title: 'When Should You Apply?',
    s3P1: 'D-2 and D-4 visa holders must apply within 90 days of their arrival date in Korea. For example, if you arrive on March 1, your deadline is May 29. Do not wait — immigration office appointment slots fill up fast at the start of semesters (March and September).',
    s3P2: 'Book your appointment as soon as you arrive using hikorea.go.kr. If you miss the 90-day window, you may face fines and complications with your visa status. Other visa types (E-7, F-2, F-4, F-6, etc.) also require ARC registration within 90 days — check your visa\'s specific conditions.',
    s4Title: 'Documents You Need to Bring',
    s4P: 'Bring all of the following to your immigration office appointment. Missing even one item will require a second trip.',
    s4Items: [
      'Passport (original)',
      'Visa documents (your entry stamp and visa confirmation)',
      'University enrollment certificate — 재학증명서 (get this from your school\'s administrative office)',
      'Passport-style photo — 3.5cm × 4.5cm, white background, taken within the last 6 months',
      'Application form (available at the immigration office or downloadable from hikorea.go.kr)',
      'Address in Korea — your dormitory address or officetel/apartment contract',
      '₩30,000 application fee (cash or card accepted at most offices)',
    ],
    s4P2: 'Requirements can change — always confirm the latest checklist at hikorea.go.kr or through your university\'s international office before your appointment.',
    s5Title: 'Step-by-Step: How to Apply for ARC',
    s5P: 'The entire process from booking to receiving your card takes 2–4 weeks. Here is what to do:',
    s5Items: [
      'Book your appointment at hikorea.go.kr (go to Online Application → Foreigner Registration)',
      'Prepare all required documents (see list above)',
      'Arrive at the immigration office 10 minutes early with your appointment confirmation',
      'Submit your documents and get your fingerprints and photo taken',
      'Pay the ₩30,000 application fee',
      'Wait 2–3 weeks — your card will be mailed to your registered address or available for pickup',
    ],
    s6Title: 'Common Mistakes to Avoid',
    s6Items: [
      'Missing the 90-day deadline — fines start immediately after',
      'Bringing the wrong photo (wrong size, colored background, old photo)',
      'Not having your enrollment certificate ready (allow 1–2 days to get it from admin)',
      'Booking an appointment at the wrong immigration office (use the one nearest your registered address)',
      'Forgetting cash — some offices do not accept card for the ₩30,000 fee',
      'Using outdated information from blogs — check hikorea.go.kr for current requirements',
    ],
    s7Title: 'Useful Tips for International Students',
    s7Items: [
      'Check hikorea.go.kr first — it has English support and shows real-time appointment availability',
      'Ask your university\'s international office for help with the enrollment certificate',
      'Take your photo at a 사진관 (photo studio) near campus — they know the exact specs',
      'Keep a digital copy of your ARC at all times once you receive it',
      'Your ARC number (13 digits) is your main ID number for most Korean services',
    ],
    faqTitle: 'FAQ',
    faq1Q: 'What is an ARC card in Korea?',
    faq1A: 'The ARC (외국인등록증) is the official ID card for foreign residents in Korea. It is required for opening bank accounts, signing phone plans, and accessing government services.',
    faq2Q: 'Do international students need an ARC in Korea?',
    faq2A: 'Yes. D-2 (university) and D-4 (language institute) visa holders must register and obtain an ARC within 90 days of arriving in Korea. Failing to do so is a visa violation.',
    faq3Q: 'How long does it take to get an ARC card?',
    faq3A: 'Processing takes approximately 2–3 weeks after you submit your application at the immigration office. Your card will be mailed to your registered address.',
    faq4Q: 'How much does the ARC cost?',
    faq4A: 'The application fee is ₩30,000, paid directly at the immigration office when you submit your documents. There is no charge for booking the appointment on hikorea.go.kr.',
    faq5Q: 'Can I apply for ARC online?',
    faq5A: 'You can book your appointment online at hikorea.go.kr, but the actual application — including fingerprinting and photo submission — must be done in person at your local immigration office (출입국외국인청).',
    finalTitle: 'Final Advice',
    finalP: 'Do not put off your ARC application. The 90-day window goes by quickly, especially at the start of a new semester when you are busy with classes, housing, and settling in. Book your appointment within the first week of arrival, prepare your documents in advance, and treat the ARC as your single most important administrative task in Korea.',
    prepTitle: 'What to Set Up Before and After Your ARC',
    prepP: 'Before your ARC appointment, make sure you have a working SIM card so you can receive confirmation texts. After receiving your ARC, you can open a bank account and sign up for a full mobile plan.',
    simLabel: 'SIM Card Guide',
    bankLabel: 'Bank Account Guide',
    deliveryLabel: 'Delivery Apps Guide',
    relatedTitle: 'Related Guides',
    relatedDesc: 'After setting up your ARC, your next steps are usually getting a SIM card and opening a bank account.',
    relatedSimBtn: 'SIM Card Guide',
    relatedStartBtn: 'Getting Started',
  },
  zh: {
    eyebrow: '签证 / ARC指南',
    heroTitle: '韩国外国人登录证（ARC）申请指南（2026）',
    heroLead: 'ARC卡（외국인등록증，外国人登录证）是您在韩国作为外国居民的官方身份证件。没有它，您将无法开立银行账户、签订手机套餐或使用大多数政府服务。本指南从90天申请期限到₩30,000手续费，逐步带您了解整个流程。',
    quickAnswerTitle: '简要回答',
    quickAnswerText: '持D-2（大学生）或D-4（语言学院）签证者，须在抵韩后90天内申请ARC。申请费用为₩30,000，在出入境管理事务所缴纳。请提前在hikorea.go.kr预约。',
    s1Title: '韩国ARC卡是什么？',
    s1P1: 'ARC（外国人登录证，韩语：외국인등록증）是韩国颁发给外国居民的国家级身份证件。它类似于居民登录号，几乎用于国内所有官方服务的身份验证。',
    s1P2: '拥有ARC后，在韩日常生活将顺畅许多——您可以开立银行账户、办理手机套餐、参加健康保险，并使用需要韩国身份验证的政府门户网站。',
    arcImportantP: '对于D-2和D-4签证持有者而言，ARC不是可选项。没有ARC就工作、开户或签合同会造成不必要的麻烦，而未能在90天内完成登记则属于签证违规。',
    s2Title: 'ARC为何重要',
    s2P: '在韩国，许多服务只有在您注册为外国居民后才能完整使用。持有ARC后，以下服务将对您开放：',
    s2Items: [
      '开立韩国银行账户（领取工资所必需）',
      '签订后付费手机套餐（比预付费更经济）',
      '加入国家健康保险（건강보험）',
      '使用需要身份验证的政府门户网站',
      '签订公寓合同和租赁协议',
      '使用韩国邮政、部分快递服务及包裹取件',
    ],
    s3Title: '何时申请？',
    s3P1: 'D-2和D-4签证持有者须在入境韩国后90天内申请。例如，若您3月1日入境，则截止日期为5月29日。不要拖延——学期初（3月和9月）出入境管理事务所的预约名额会很快被占满。',
    s3P2: '抵达韩国后请尽快通过hikorea.go.kr预约。若错过90天期限，可能面临罚款及签证状态问题。其他签证类型（E-7、F-2、F-4、F-6等）同样须在90天内完成ARC登记——请确认您签证的具体条件。',
    s4Title: '需要携带的材料',
    s4P: '前往出入境管理事务所预约时，请携带以下所有材料。缺少任何一项都需要再跑一次。',
    s4Items: [
      '护照（原件）',
      '签证文件（入境章和签证确认单）',
      '大学在校证明——재학증명서（向学校行政部门申请获取）',
      '证件照——3.5cm × 4.5cm，白色背景，6个月内拍摄',
      '申请表（可在出入境管理事务所领取，或从hikorea.go.kr下载）',
      '在韩地址——宿舍地址或住宅/公寓合同',
      '₩30,000申请费（大多数事务所支持现金或刷卡）',
    ],
    s4P2: '要求可能随时变化——在预约前，请务必通过hikorea.go.kr或学校国际处确认最新所需材料清单。',
    s5Title: '申请ARC的详细步骤',
    s5P: '从预约到收到卡片，整个流程约需2至4周。以下是具体步骤：',
    s5Items: [
      '在hikorea.go.kr预约（进入"在线申请"→"外国人登记"）',
      '准备所有所需材料（见上方清单）',
      '携带预约确认单提前10分钟到达出入境管理事务所',
      '提交材料并进行指纹采集和拍照',
      '缴纳₩30,000申请费',
      '等待2至3周——卡片将邮寄至您登记的地址，或可到场领取',
    ],
    s6Title: '需要避免的常见错误',
    s6Items: [
      '错过90天期限——逾期后立即开始收取罚款',
      '携带不符合要求的证件照（尺寸错误、有色背景、旧照片）',
      '未提前准备在校证明（从行政部门申请需1至2个工作日）',
      '在错误的出入境管理事务所预约（应使用离登记地址最近的事务所）',
      '忘记带现金——部分事务所不接受刷卡缴纳₩30,000费用',
      '依赖博客上的过时信息——请在hikorea.go.kr查询最新要求',
    ],
    s7Title: '留学生实用建议',
    s7Items: [
      '首先查看hikorea.go.kr——支持英文，可实时查看预约空位',
      '向学校国际处寻求在校证明申请方面的帮助',
      '在校园附近的사진관（照相馆）拍证件照——他们熟悉具体规格要求',
      '收到ARC后随时保存电子版',
      '您的ARC号码（13位数字）是大多数韩国服务的主要身份证号',
    ],
    faqTitle: '常见问题',
    faq1Q: '韩国的ARC卡是什么？',
    faq1A: 'ARC（외국인등록증）是韩国颁发给外国居民的官方身份证件，用于开立银行账户、办理手机套餐及使用政府服务等。',
    faq2Q: '留学生在韩国需要ARC吗？',
    faq2A: '是的。D-2（大学）和D-4（语言学院）签证持有者须在抵韩后90天内完成登记并领取ARC，否则属于签证违规。',
    faq3Q: '办理ARC卡需要多长时间？',
    faq3A: '在出入境管理事务所提交申请后，审批大约需要2至3周。卡片将邮寄至您登记的地址。',
    faq4Q: 'ARC申请费用是多少？',
    faq4A: '申请费为₩30,000，在提交材料时直接在出入境管理事务所缴纳。在hikorea.go.kr预约不收取任何费用。',
    faq5Q: '可以网上申请ARC吗？',
    faq5A: '您可以在hikorea.go.kr在线预约，但实际申请（包括指纹采集和照片提交）必须本人前往当地出入境管理事务所（출입국외국인청）完成。',
    finalTitle: '最终建议',
    finalP: '不要拖延ARC申请。90天的期限会在忙于课程、住房和日常安顿中快速流逝，尤其是在新学期开始时。入境后第一周内就预约，提前准备好材料，将ARC申请视为在韩最重要的行政事务。',
    prepTitle: '办理ARC前后需要做的事',
    prepP: '预约前请确保已有可用的SIM卡，以便接收确认短信。收到ARC后，您就可以开立银行账户并办理全功能手机套餐。',
    simLabel: 'SIM卡指南',
    bankLabel: '银行账户指南',
    deliveryLabel: '外卖App指南',
    relatedTitle: '相关指南',
    relatedDesc: '办理ARC后，您的下一步通常是办理SIM卡和开立银行账户。',
    relatedSimBtn: 'SIM卡指南',
    relatedStartBtn: '入门指南',
  },
  ru: {
    eyebrow: 'Виза / Руководство по ARC',
    heroTitle: 'Руководство по карте ARC в Корее для иностранных студентов (2026)',
    heroLead: 'Карта ARC (외국인등록증 — удостоверение иностранного резидента) — ваш официальный документ как иностранного жителя Кореи. Без неё невозможно открыть банковский счёт, оформить мобильный тариф или получить большинство государственных услуг. В этом руководстве разобраны все шаги — от 90-дневного срока до комиссии ₩30,000.',
    quickAnswerTitle: 'Быстрый ответ',
    quickAnswerText: 'Обладатели визы D-2 (университет) или D-4 (языковые курсы) обязаны подать заявку на ARC в течение 90 дней после въезда в Корею. Размер комиссии — ₩30,000, оплачивается в иммиграционном офисе. Запись на приём заранее осуществляется через hikorea.go.kr.',
    s1Title: 'Что такое карта ARC в Корее?',
    s1P1: 'Карта ARC (외국인등록증 — удостоверение иностранного резидента) — это национальный документ для иностранных жителей Кореи. Она работает как идентификационный номер резидента и используется для подтверждения личности при обращении практически ко всем официальным услугам в стране.',
    s1P2: 'Получив карту ARC, вы сможете без труда открыть банковский счёт, оформить мобильный тариф, записаться в систему медицинского страхования и пользоваться государственными порталами, требующими корейской верификации личности.',
    arcImportantP: 'Для обладателей виз D-2 и D-4 карта ARC — не опция. Работа, банковские операции или заключение договоров без ARC создадут ненужные трудности, а нерегистрация в течение 90 дней является нарушением визового режима.',
    s2Title: 'Почему карта ARC важна',
    s2P: 'Многие услуги в Корее полностью доступны только после регистрации в качестве иностранного резидента. Вот что становится возможным после получения ARC:',
    s2Items: [
      'Открытие корейского банковского счёта (необходимо для получения заработной платы)',
      'Подключение постоплатного мобильного тарифа (выгоднее предоплатного)',
      'Регистрация в системе обязательного медицинского страхования (건강보험)',
      'Использование государственных порталов, требующих верификации личности',
      'Подписание договоров аренды квартиры',
      'Доступ к Korea Post, некоторым курьерским службам и получение посылок',
    ],
    s3Title: 'Когда нужно подавать заявку?',
    s3P1: 'Обладатели виз D-2 и D-4 обязаны подать заявку в течение 90 дней с даты въезда в Корею. Например, если вы въехали 1 марта, крайний срок — 29 мая. Не откладывайте: в начале семестра (март и сентябрь) слоты в иммиграционных офисах разбирают очень быстро.',
    s3P2: 'Запишитесь на приём сразу после приезда через hikorea.go.kr. Нарушение 90-дневного срока грозит штрафами и проблемами с визой. Другие типы виз (E-7, F-2, F-4, F-6 и др.) также требуют регистрации ARC в течение 90 дней — уточните условия вашей визы.',
    s4Title: 'Какие документы нужно принести',
    s4P: 'Принесите все перечисленные документы на запись в иммиграционный офис. Отсутствие даже одного из них означает повторный визит.',
    s4Items: [
      'Паспорт (оригинал)',
      'Визовые документы (въездной штамп и подтверждение визы)',
      'Справка о зачислении из университета — 재학증명서 (получается в административном отделе)',
      'Фото в паспортном формате — 3,5×4,5 см, белый фон, снятое не позднее 6 месяцев назад',
      'Анкета-заявление (выдаётся в иммиграционном офисе или скачивается с hikorea.go.kr)',
      'Адрес в Корее — адрес общежития или договор аренды',
      'Комиссия ₩30,000 (в большинстве офисов принимаются наличные и карта)',
    ],
    s4P2: 'Требования могут меняться — перед визитом обязательно уточняйте актуальный список документов на hikorea.go.kr или в международном отделе вашего вуза.',
    s5Title: 'Пошаговое руководство по получению ARC',
    s5P: 'Весь процесс от записи до получения карты занимает 2–4 недели. Вот что нужно делать:',
    s5Items: [
      'Запишитесь на hikorea.go.kr (раздел «Онлайн-заявка» → «Регистрация иностранца»)',
      'Подготовьте все необходимые документы (см. список выше)',
      'Придите в иммиграционный офис на 10 минут раньше с подтверждением записи',
      'Сдайте документы, пройдите дактилоскопию и фотографирование',
      'Оплатите комиссию ₩30,000',
      'Подождите 2–3 недели — карта придёт по почте на указанный адрес или будет доступна для самовывоза',
    ],
    s6Title: 'Распространённые ошибки, которых стоит избегать',
    s6Items: [
      'Нарушение 90-дневного срока — штрафы начисляются сразу',
      'Неправильное фото (не тот формат, цветной фон, старое фото)',
      'Отсутствие справки о зачислении (её получение занимает 1–2 рабочих дня)',
      'Запись в неправильный иммиграционный офис (нужен ближайший к вашему адресу регистрации)',
      'Отсутствие наличных — некоторые офисы не принимают карту для оплаты ₩30,000',
      'Использование устаревших данных из блогов — проверяйте актуальные требования на hikorea.go.kr',
    ],
    s7Title: 'Полезные советы для иностранных студентов',
    s7Items: [
      'Начните с hikorea.go.kr — сайт поддерживает английский язык, доступность слотов видна в реальном времени',
      'Попросите международный отдел университета помочь оформить справку о зачислении',
      'Сделайте фото в 사진관 (фотоателье) рядом с кампусом — там знают точные требования к размеру',
      'Сохраните цифровую копию карты ARC сразу после получения',
      'Номер ARC (13 цифр) — ваш основной идентификатор для большинства корейских сервисов',
    ],
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Что такое карта ARC в Корее?',
    faq1A: 'Карта ARC (외국인등록증) — официальное удостоверение личности для иностранных резидентов в Корее. Требуется для открытия банковского счёта, оформления мобильных тарифов и доступа к государственным услугам.',
    faq2Q: 'Нужна ли иностранным студентам карта ARC в Корее?',
    faq2A: 'Да. Обладатели виз D-2 (университет) и D-4 (языковые курсы) обязаны зарегистрироваться и получить ARC в течение 90 дней после въезда. Нарушение этого требования является визовым нарушением.',
    faq3Q: 'Сколько времени занимает оформление карты ARC?',
    faq3A: 'После подачи заявки в иммиграционном офисе рассмотрение занимает около 2–3 недель. Карта придёт по почте на указанный адрес.',
    faq4Q: 'Сколько стоит получение ARC?',
    faq4A: 'Размер комиссии составляет ₩30,000, оплачивается непосредственно в иммиграционном офисе при подаче документов. Запись на приём через hikorea.go.kr бесплатна.',
    faq5Q: 'Можно ли подать заявку на ARC онлайн?',
    faq5A: 'Записаться на приём можно онлайн на hikorea.go.kr, однако сама подача заявки — включая дактилоскопию и фотографирование — должна проходить лично в местном иммиграционном офисе (출입국외국인청).',
    finalTitle: 'Финальный совет',
    finalP: 'Не откладывайте подачу заявки на ARC. 90-дневный срок проходит очень быстро, особенно в начале нового семестра, когда вы заняты учёбой, поиском жилья и обустройством. Запишитесь на приём в первую же неделю после приезда, заблаговременно подготовьте документы и считайте ARC главным административным приоритетом в Корее.',
    prepTitle: 'Что сделать до и после получения ARC',
    prepP: 'Перед записью на приём убедитесь, что у вас есть рабочая SIM-карта — для получения подтверждающих SMS. После получения ARC вы сможете открыть банковский счёт и оформить полноценный мобильный тариф.',
    simLabel: 'Руководство по SIM-карте',
    bankLabel: 'Руководство по банковскому счёту',
    deliveryLabel: 'Руководство по приложениям доставки',
    relatedTitle: 'Связанные руководства',
    relatedDesc: 'После получения ARC следующие шаги — оформление SIM-карты и открытие банковского счёта.',
    relatedSimBtn: 'Руководство по SIM-карте',
    relatedStartBtn: 'Начало работы',
  },
  ja: {
    eyebrow: 'ビザ / ARCガイド',
    heroTitle: '韓国外国人登録証（ARCカード）取得ガイド（2026年・留学生向け）',
    heroLead: 'ARCカード（외국인등록증）は、韓国における外国人居住者としての公式身分証明書です。これがないと、銀行口座を開設できず、携帯プランも契約できず、ほとんどの行政サービスも利用できません。このガイドでは、90日間の期限から₩30,000の手数料まで、すべての手順を詳しく解説します。',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText: 'D-2（大学生）またはD-4（語学学院）ビザの方は、韓国入国後90日以内にARCを申請する必要があります。申請手数料は₩30,000で、出入国管理局で支払います。事前にhikorea.go.krで予約してください。',
    s1Title: '韓国のARCカードとは？',
    s1P1: 'ARC（외국인등록증）は、韓国に居住する外国人向けの国家身分証明書です。住民登録番号のように機能し、国内のほぼすべての公的サービスで本人確認に使用されます。',
    s1P2: 'ARCを取得すると、韓国での日常生活が格段に便利になります。銀行口座の開設、携帯プランの契約、健康保険への加入、韓国の本人確認が必要な行政ポータルの利用が可能になります。',
    arcImportantP: 'D-2・D-4ビザ保持者にとって、ARCは任意ではありません。ARCなしでの労働、銀行取引、契約は不要なトラブルを招き、90日以内に登録しないことはビザ違反となります。',
    s2Title: 'ARCが重要な理由',
    s2P: '韓国では、外国人居住者として登録して初めてフルに利用できるサービスが多くあります。ARCを取得することで利用可能になること：',
    s2Items: [
      '韓国の銀行口座の開設（給与受け取りに必須）',
      '後払い携帯プランへの加入（プリペイドより割安）',
      '国民健康保険（건강보험）への加入',
      '本人確認が必要な行政ポータルの利用',
      '賃貸契約・アパート契約の締結',
      '郵便局、一部宅配サービス、荷物受け取りの利用',
    ],
    s3Title: 'いつ申請すればよいですか？',
    s3P1: 'D-2・D-4ビザ保持者は、韓国入国日から90日以内に申請しなければなりません。たとえば3月1日に入国した場合、期限は5月29日です。セメスター開始時期（3月・9月）は出入国管理局の予約枠がすぐに埋まるため、後回しにしないでください。',
    s3P2: '到着後すぐにhikorea.go.krで予約を取りましょう。90日を過ぎると罰金やビザステータスの問題が生じる可能性があります。その他のビザ（E-7・F-2・F-4・F-6など）も90日以内にARC登録が必要です。お使いのビザの条件をご確認ください。',
    s4Title: '持参する必要がある書類',
    s4P: '出入国管理局の予約当日は、以下の書類をすべて持参してください。1点でも不足すると、再度来庁が必要になります。',
    s4Items: [
      'パスポート（原本）',
      'ビザ関連書類（入国スタンプとビザ確認書）',
      '在学証明書（재학증명서）— 大学の事務局から取得',
      'パスポートサイズ写真 — 3.5cm×4.5cm、白背景、6ヶ月以内撮影',
      '申請書（出入国管理局にて入手、またはhikorea.go.krからダウンロード可）',
      '韓国の住所 — 寮の住所または賃貸契約書',
      '申請手数料₩30,000（ほとんどの窓口で現金・カード対応）',
    ],
    s4P2: '要件は変わることがあります。予約前に必ずhikorea.go.krまたは大学の国際部で最新の必要書類リストを確認してください。',
    s5Title: 'ARC申請の手順（ステップバイステップ）',
    s5P: '予約からカード受け取りまで、全体で2〜4週間かかります。手順は以下の通りです：',
    s5Items: [
      'hikorea.go.krで予約（「オンライン申請」→「外国人登録」）',
      '必要書類をすべて準備する（上記リスト参照）',
      '予約確認書を持って10分前に出入国管理局に到着',
      '書類を提出し、指紋採取と写真撮影を受ける',
      '申請手数料₩30,000を支払う',
      '2〜3週間待つ — カードは登録住所に郵送、または窓口受け取り可',
    ],
    s6Title: 'よくあるミスと回避方法',
    s6Items: [
      '90日の期限を過ぎる — 超過翌日から即座に罰金が発生',
      '写真の不備（サイズ違い・有色背景・古い写真）',
      '在学証明書の未準備（事務局での取得に1〜2営業日かかる）',
      '間違った出入国管理局に予約（登録住所に最も近い窓口を使用すること）',
      '現金を忘れる — ₩30,000の支払いにカードが使えない窓口もある',
      'ブログの古い情報を使う — hikorea.go.krで最新情報を確認すること',
    ],
    s7Title: '留学生への実践的なアドバイス',
    s7Items: [
      'まずhikorea.go.krを確認 — 英語対応で予約空き状況もリアルタイムで確認可能',
      '在学証明書の取得は大学の国際部に相談しましょう',
      '証明写真はキャンパス近くの사진관（写真館）で撮影 — 正確なサイズ規格を把握しています',
      'ARC受け取り後はすぐにデジタルコピーを保存しておく',
      'ARC番号（13桁）は韓国のほぼすべてのサービスで使用するメイン番号です',
    ],
    faqTitle: 'よくある質問',
    faq1Q: '韓国のARCカードとは何ですか？',
    faq1A: 'ARC（외국인등록증）は韓国における外国人居住者のための公式身分証明書です。銀行口座の開設、携帯プラン、行政サービスの利用に必要です。',
    faq2Q: '韓国の留学生はARCが必要ですか？',
    faq2A: 'はい。D-2（大学）・D-4（語学学院）ビザ保持者は、入国後90日以内に登録してARCを取得する必要があります。未登録はビザ違反となります。',
    faq3Q: 'ARCカードの取得にはどれくらいかかりますか？',
    faq3A: '出入国管理局に申請を提出した後、審査には約2〜3週間かかります。カードは登録住所に郵送されます。',
    faq4Q: 'ARC申請の費用はいくらですか？',
    faq4A: '申請手数料は₩30,000で、書類提出時に出入国管理局で直接支払います。hikorea.go.krでの予約は無料です。',
    faq5Q: 'ARCはオンラインで申請できますか？',
    faq5A: 'hikorea.go.krでオンライン予約は可能ですが、実際の申請（指紋採取・写真撮影を含む）は最寄りの出入国管理局（출입국외국인청）に直接出向いて行う必要があります。',
    finalTitle: '最後のアドバイス',
    finalP: 'ARC申請を後回しにしないでください。90日間は、新学期が始まって授業・住まい・生活準備で忙しくしているうちにあっという間に過ぎてしまいます。到着後1週間以内に予約を取り、事前に書類を揃え、ARCを韓国での最重要行政手続きとして最優先で対処しましょう。',
    prepTitle: 'ARC取得前後にすべきこと',
    prepP: 'ARC予約前に、確認SMSを受け取れるよう使用中のSIMカードを用意しておきましょう。ARC取得後は、銀行口座の開設や本格的な携帯プランへの加入が可能になります。',
    simLabel: 'SIMカードガイド',
    bankLabel: '銀行口座ガイド',
    deliveryLabel: 'デリバリーアプリガイド',
    relatedTitle: '関連ガイド',
    relatedDesc: 'ARC取得後の次のステップは、通常SIMカードの設定と銀行口座の開設です。',
    relatedSimBtn: 'SIMカードガイド',
    relatedStartBtn: 'はじめに',
  },
  vi: {
    eyebrow: 'Visa / Hướng dẫn ARC',
    heroTitle: 'Hướng dẫn thẻ ARC Hàn Quốc cho Du học sinh (2026)',
    heroLead: 'Thẻ ARC (외국인등록증) là giấy tờ tùy thân chính thức của bạn với tư cách cư dân nước ngoài tại Hàn Quốc. Không có thẻ này, bạn không thể mở tài khoản ngân hàng, ký hợp đồng điện thoại hay sử dụng hầu hết các dịch vụ chính phủ. Hướng dẫn này sẽ đưa bạn qua từng bước — từ thời hạn 90 ngày đến phí ₩30,000.',
    quickAnswerTitle: 'Trả lời nhanh',
    quickAnswerText: 'Người giữ visa D-2 (sinh viên đại học) hoặc D-4 (trường ngôn ngữ) phải nộp đơn xin ARC trong vòng 90 ngày kể từ khi nhập cảnh Hàn Quốc. Phí nộp đơn là ₩30,000, trả tại văn phòng xuất nhập cảnh. Đặt lịch hẹn trước tại hikorea.go.kr.',
    s1Title: 'ARC Card ở Hàn Quốc là gì?',
    s1P1: 'ARC (외국인등록증) là thẻ căn cước quốc gia dành cho cư dân nước ngoài tại Hàn Quốc. Nó hoạt động như số đăng ký cư dân và được dùng để xác minh danh tính trong hầu hết các dịch vụ chính thức tại Hàn Quốc.',
    s1P2: 'Sau khi có ARC, cuộc sống hàng ngày ở Hàn Quốc trở nên thuận tiện hơn nhiều — bạn có thể mở tài khoản ngân hàng, đăng ký gói điện thoại, tham gia bảo hiểm sức khỏe và sử dụng các cổng thông tin chính phủ yêu cầu xác minh danh tính Hàn Quốc.',
    arcImportantP: 'Đối với người giữ visa D-2 và D-4, ARC không phải tùy chọn. Làm việc, giao dịch ngân hàng hoặc ký hợp đồng mà không có ARC sẽ tạo ra những phức tạp không cần thiết — và không đăng ký trong 90 ngày là vi phạm visa.',
    s2Title: 'Tại sao ARC Quan trọng',
    s2P: 'Nhiều dịch vụ ở Hàn Quốc chỉ có thể truy cập đầy đủ sau khi bạn đăng ký với tư cách cư dân nước ngoài. Đây là những gì có thể sử dụng khi bạn có ARC:',
    s2Items: [
      'Mở tài khoản ngân hàng Hàn Quốc (cần thiết để nhận lương)',
      'Đăng ký gói điện thoại trả sau (tiết kiệm hơn trả trước)',
      'Tham gia bảo hiểm y tế quốc gia (건강보험)',
      'Sử dụng cổng thông tin chính phủ yêu cầu xác minh danh tính',
      'Ký hợp đồng thuê căn hộ',
      'Sử dụng Korea Post, một số dịch vụ chuyển phát nhanh và nhận bưu kiện',
    ],
    s3Title: 'Khi nào Nên Nộp đơn?',
    s3P1: 'Người giữ visa D-2 và D-4 phải nộp đơn trong vòng 90 ngày kể từ ngày nhập cảnh Hàn Quốc. Ví dụ, nếu bạn đến ngày 1 tháng 3, hạn chót là ngày 29 tháng 5. Đừng để đến phút cuối — các slot đặt lịch tại văn phòng xuất nhập cảnh lấp đầy rất nhanh vào đầu học kỳ (tháng 3 và tháng 9).',
    s3P2: 'Đặt lịch hẹn ngay sau khi đến thông qua hikorea.go.kr. Nếu vượt quá thời hạn 90 ngày, bạn có thể bị phạt và gặp vấn đề với tình trạng visa. Các loại visa khác (E-7, F-2, F-4, F-6, v.v.) cũng yêu cầu đăng ký ARC trong 90 ngày — hãy kiểm tra điều kiện cụ thể của visa bạn.',
    s4Title: 'Giấy tờ Cần Mang Theo',
    s4P: 'Mang đầy đủ tất cả các giấy tờ dưới đây đến lịch hẹn tại văn phòng xuất nhập cảnh. Thiếu dù chỉ một mục sẽ phải đến lần nữa.',
    s4Items: [
      'Hộ chiếu (bản gốc)',
      'Giấy tờ visa (dấu nhập cảnh và xác nhận visa)',
      'Giấy xác nhận nhập học — 재학증명서 (lấy từ phòng hành chính của trường)',
      'Ảnh cỡ hộ chiếu — 3,5cm × 4,5cm, nền trắng, chụp trong vòng 6 tháng',
      'Mẫu đơn (có tại văn phòng xuất nhập cảnh hoặc tải từ hikorea.go.kr)',
      'Địa chỉ tại Hàn Quốc — địa chỉ ký túc xá hoặc hợp đồng thuê nhà',
      'Phí nộp đơn ₩30,000 (hầu hết các văn phòng chấp nhận tiền mặt hoặc thẻ)',
    ],
    s4P2: 'Yêu cầu có thể thay đổi — luôn xác nhận danh sách kiểm tra mới nhất tại hikorea.go.kr hoặc qua văn phòng quốc tế của trường trước khi đến.',
    s5Title: 'Từng bước: Cách Đăng ký ARC',
    s5P: 'Toàn bộ quá trình từ đặt lịch đến nhận thẻ mất khoảng 2–4 tuần. Đây là những gì cần làm:',
    s5Items: [
      'Đặt lịch hẹn tại hikorea.go.kr (vào "Đơn đăng ký trực tuyến" → "Đăng ký người nước ngoài")',
      'Chuẩn bị tất cả giấy tờ cần thiết (xem danh sách trên)',
      'Đến văn phòng xuất nhập cảnh sớm 10 phút với xác nhận lịch hẹn',
      'Nộp giấy tờ và lấy dấu vân tay, chụp ảnh',
      'Thanh toán phí nộp đơn ₩30,000',
      'Chờ 2–3 tuần — thẻ sẽ được gửi đến địa chỉ đã đăng ký hoặc có thể nhận trực tiếp',
    ],
    s6Title: 'Những Lỗi Thường Gặp Cần Tránh',
    s6Items: [
      'Bỏ lỡ thời hạn 90 ngày — phạt bắt đầu ngay sau đó',
      'Ảnh không đúng yêu cầu (sai kích thước, nền có màu, ảnh cũ)',
      'Không chuẩn bị sẵn giấy xác nhận nhập học (lấy từ phòng hành chính mất 1–2 ngày)',
      'Đặt lịch ở văn phòng xuất nhập cảnh sai (dùng văn phòng gần nhất với địa chỉ đã đăng ký)',
      'Quên tiền mặt — một số văn phòng không chấp nhận thẻ cho phí ₩30,000',
      'Dùng thông tin lỗi thời từ blog — kiểm tra yêu cầu hiện tại tại hikorea.go.kr',
    ],
    s7Title: 'Mẹo Hữu ích cho Du học sinh',
    s7Items: [
      'Kiểm tra hikorea.go.kr trước — hỗ trợ tiếng Anh và hiển thị slot trống theo thời gian thực',
      'Nhờ văn phòng quốc tế của trường hỗ trợ lấy giấy xác nhận nhập học',
      'Chụp ảnh tại 사진관 (tiệm ảnh) gần trường — họ biết chính xác các thông số yêu cầu',
      'Lưu bản sao điện tử thẻ ARC ngay khi nhận được',
      'Số ARC (13 chữ số) là số ID chính của bạn cho hầu hết các dịch vụ Hàn Quốc',
    ],
    faqTitle: 'Câu hỏi thường gặp',
    faq1Q: 'ARC Card ở Hàn Quốc là gì?',
    faq1A: 'ARC (외국인등록증) là thẻ căn cước chính thức cho người nước ngoài tại Hàn Quốc. Cần thiết cho nhiều dịch vụ như mở tài khoản ngân hàng, gói điện thoại và xác minh chính thức.',
    faq2Q: 'Du học sinh có cần ARC ở Hàn Quốc không?',
    faq2A: 'Có. Người giữ visa D-2 (đại học) và D-4 (trường ngôn ngữ) phải đăng ký và nhận ARC trong vòng 90 ngày sau khi đến Hàn Quốc. Không làm vậy là vi phạm visa.',
    faq3Q: 'Mất bao lâu để nhận thẻ ARC?',
    faq3A: 'Sau khi nộp đơn tại văn phòng xuất nhập cảnh, xử lý mất khoảng 2–3 tuần. Thẻ sẽ được gửi bưu điện đến địa chỉ đã đăng ký.',
    faq4Q: 'Phí ARC là bao nhiêu?',
    faq4A: 'Phí nộp đơn là ₩30,000, trả trực tiếp tại văn phòng xuất nhập cảnh khi nộp giấy tờ. Đặt lịch hẹn trên hikorea.go.kr miễn phí.',
    faq5Q: 'Có thể nộp đơn ARC trực tuyến không?',
    faq5A: 'Bạn có thể đặt lịch hẹn trực tuyến tại hikorea.go.kr, nhưng việc nộp đơn thực tế — bao gồm lấy dấu vân tay và chụp ảnh — phải thực hiện trực tiếp tại văn phòng xuất nhập cảnh địa phương (출입국외국인청).',
    finalTitle: 'Lời khuyên cuối',
    finalP: 'Đừng trì hoãn việc đăng ký ARC. Thời hạn 90 ngày trôi qua rất nhanh, đặc biệt là vào đầu học kỳ mới khi bạn bận rộn với việc học, tìm chỗ ở và ổn định cuộc sống. Đặt lịch trong tuần đầu tiên sau khi đến, chuẩn bị giấy tờ trước, và coi ARC là nhiệm vụ hành chính quan trọng nhất tại Hàn Quốc.',
    prepTitle: 'Cần làm Trước và Sau khi Nhận ARC',
    prepP: 'Trước khi đặt lịch hẹn ARC, hãy đảm bảo bạn có SIM card hoạt động để nhận tin nhắn xác nhận. Sau khi nhận ARC, bạn có thể mở tài khoản ngân hàng và đăng ký gói điện thoại đầy đủ.',
    simLabel: 'Hướng dẫn SIM Card',
    bankLabel: 'Hướng dẫn tài khoản ngân hàng',
    deliveryLabel: 'Hướng dẫn ứng dụng giao đồ ăn',
    relatedTitle: 'Hướng dẫn liên quan',
    relatedDesc: 'Sau khi nhận ARC, các bước tiếp theo thường là đăng ký SIM card và mở tài khoản ngân hàng.',
    relatedSimBtn: 'Hướng dẫn SIM Card',
    relatedStartBtn: 'Bắt đầu',
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

  const url = `https://ksurvivalkit.com/${lang}/arc-card-korea-guide`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: 'https://ksurvivalkit.com/en/arc-card-korea-guide',
        zh: 'https://ksurvivalkit.com/zh/arc-card-korea-guide',
        ru: 'https://ksurvivalkit.com/ru/arc-card-korea-guide',
        ja: 'https://ksurvivalkit.com/ja/arc-card-korea-guide',
        vi: 'https://ksurvivalkit.com/vi/arc-card-korea-guide',
        'x-default': 'https://ksurvivalkit.com/en/arc-card-korea-guide',
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
        'Apply within 90 days of arrival. ₩30,000 fee. Step-by-step guide for D-2 and D-4 visa holders.',
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
  const pageUrl = `https://ksurvivalkit.com/${lang}/arc-card-korea-guide`;

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
        { '@type': 'Question', name: c.faq5Q, acceptedAnswer: { '@type': 'Answer', text: c.faq5A } },
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
            <div>
              <h3 className="font-semibold">{c.faq4Q}</h3>
              <p>{c.faq4A}</p>
            </div>
            <div>
              <h3 className="font-semibold">{c.faq5Q}</h3>
              <p>{c.faq5A}</p>
            </div>
          </div>
        </section>

        {/* Useful Links Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{LINKS_TITLE[l]}</h2>
          <p className="leading-7 text-slate-700">{LINKS_DESC[l]}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.hikorea.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-400 hover:shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">hikorea.go.kr</span>
              <span className="font-semibold text-slate-900">{HIKOREA_LABEL[l]}</span>
              <span className="text-sm text-slate-600">{HIKOREA_DESC[l]}</span>
            </a>
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
