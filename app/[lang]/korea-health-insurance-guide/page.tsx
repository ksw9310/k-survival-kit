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
    title: 'Korea Health Insurance (NHIS) Guide for International Students (2026) | K-Survival Kit',
    description: 'How does NHIS work for foreign students in Korea? Auto-enrolled after 6 months. Monthly fee ₩79,320 in 2026. Unpaid premiums block visa renewal. Full guide with nhis.or.kr steps.',
  },
  zh: {
    title: '韩国国民健康保险（NHIS）留学生指南（2026）| K-Survival Kit',
    description: '在韩留学生如何使用NHIS健康保险？在韩6个月后自动加入，2026年月费₩79,320。未缴保费将影响签证续签。含nhis.or.kr操作步骤的完整指南。',
  },
  ru: {
    title: 'Медицинская страховка NHIS в Корее для иностранных студентов (2026) | K-Survival Kit',
    description: 'Как работает NHIS для иностранных студентов в Корее? Автоматическое включение после 6 месяцев. Ежемесячная плата ₩79,320 в 2026 году. Неоплаченные взносы блокируют продление визы.',
  },
  ja: {
    title: '韓国国民健康保険（NHIS）留学生ガイド（2026年） | K-Survival Kit',
    description: '韓国のNHISは留学生にどう適用される？6ヶ月後に自動加入。2026年の月額保険料は₩79,320。未払いはビザ更新に影響。nhis.or.krの手順を含む完全ガイド。',
  },
  vi: {
    title: 'Hướng dẫn Bảo hiểm Y tế Quốc gia (NHIS) Hàn Quốc cho Du học sinh (2026) | K-Survival Kit',
    description: 'NHIS hoạt động như thế nào với du học sinh ở Hàn Quốc? Tự động tham gia sau 6 tháng. Phí hàng tháng ₩79,320 năm 2026. Phí chưa thanh toán sẽ chặn gia hạn visa.',
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
  s3P1: string;
  s3P2: string;
  s4Title: string;
  s4P: string;
  s4Items: string[];
  s5Title: string;
  s5P1: string;
  s5P2: string;
  s6Title: string;
  s6P: string;
  s6Items: string[];
  s7Title: string;
  s7P1: string;
  s7P2: string;
  s8Title: string;
  s8Items: string[];
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
  arcLabel: string;
  simLabel: string;
  bankLabel: string;
  relatedTitle: string;
  relatedDesc: string;
  relatedArcBtn: string;
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
  en: 'Official portals for checking your NHIS enrollment status and managing your coverage.',
  zh: '查询NHIS加入状态及管理保险的官方平台。',
  ru: 'Официальные порталы для проверки статуса регистрации в NHIS и управления страховкой.',
  ja: 'NHIS加入状況の確認・保険管理ができる公式ポータル。',
  vi: 'Các cổng thông tin chính thức để kiểm tra trạng thái đăng ký NHIS và quản lý bảo hiểm.',
};

const NHIS_LABEL: Record<L, string> = {
  en: 'NHIS — National Health Insurance Service',
  zh: 'NHIS — 国民健康保险公团',
  ru: 'NHIS — Служба национального медицинского страхования',
  ja: 'NHIS — 国民健康保険公団',
  vi: 'NHIS — Dịch vụ Bảo hiểm Y tế Quốc gia',
};

const NHIS_DESC: Record<L, string> = {
  en: 'Check enrollment status, pay premiums online, and find multilingual support (1577-1000).',
  zh: '查询加入状态、在线缴纳保费，并获取多语言支持（1577-1000）。',
  ru: 'Проверка статуса регистрации, оплата взносов онлайн и многоязычная поддержка (1577-1000).',
  ja: '加入状況の確認、保険料オンライン支払い、多言語サポート（1577-1000）。',
  vi: 'Kiểm tra trạng thái đăng ký, thanh toán phí trực tuyến và hỗ trợ đa ngôn ngữ (1577-1000).',
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Health / Insurance Guide',
    heroTitle: 'Korea Health Insurance (NHIS) Guide for International Students (2026)',
    heroLead: 'National Health Insurance (건강보험, NHIS) is Korea\'s public health system — and as a foreign student, you will be enrolled automatically after 6 months in the country. The monthly premium in 2026 is ₩79,320. This guide explains exactly how it works, what it covers, and what happens if you don\'t pay.',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText: 'Foreign students on D-2 or D-4 visas are automatically enrolled in NHIS after 6 continuous months in Korea. The 2026 monthly premium is ₩79,320. You pay around 30–50% of medical costs at the clinic; NHIS covers the rest. Unpaid premiums can block your visa renewal.',
    s1Title: 'What Is NHIS?',
    s1P1: 'NHIS (National Health Insurance Service / 국민건강보험공단) is Korea\'s mandatory public health insurance system. It covers the majority of medical costs at hospitals, clinics, and pharmacies — meaning you only pay a fraction of the actual bill.',
    s1P2: 'Before NHIS was extended to foreigners, international students often faced full uninsured costs for even minor health issues. Now, most long-term foreign residents are included in the system, making basic healthcare genuinely affordable.',
    s2Title: 'Who Gets Enrolled — and When?',
    s2P: 'Enrollment rules differ depending on your visa type and length of stay:',
    s2Items: [
      'D-2 (university student) and D-4 (language institute) visa holders are automatically enrolled after 6 continuous months in Korea',
      'Some universities enroll students earlier through a university group insurance scheme — check with your international office in the first week',
      'F-visa holders (F-2, F-4, F-6) are generally enrolled from the moment they register as residents',
      'If you are on a short-term visa or have been in Korea less than 6 months, you are not yet covered by NHIS',
    ],
    s3Title: 'How Much Does It Cost in 2026?',
    s3P1: 'The standard monthly NHIS premium for foreign local subscribers (지역가입자) in 2026 is ₩79,320. This amount is fixed regardless of your income or how often you visit the doctor — it is a flat monthly fee.',
    s3P2: 'On top of the monthly premium, you pay a copay at each visit. For a standard clinic visit, this is usually ₩5,000–20,000 after NHIS covers its share. Hospital stays, surgery, and specialist visits have higher copays but are still significantly cheaper than uninsured rates.',
    s4Title: 'What Does NHIS Cover?',
    s4P: 'NHIS covers a broad range of medical services. Here is what international students commonly use it for:',
    s4Items: [
      'GP and clinic visits (의원) — 30–50% copay, typically ₩5,000–20,000 per visit',
      'Prescriptions — you pay around 30% of the drug cost at the pharmacy',
      'Hospital stays and surgery — covered, with higher copays depending on the ward type',
      'Dental — basic dental care is partially covered (fillings, extractions, scaling once per year)',
      'Mental health consultations at clinics — covered at the same copay rate as regular visits',
      'Emergency room visits — covered, though ER copays are higher than regular clinics',
    ],
    s5Title: 'Before 6 Months: What Are Your Options?',
    s5P1: 'During the first 6 months in Korea, you are not yet covered by NHIS. This is the gap period where most international students are most vulnerable to unexpected medical costs.',
    s5P2: 'Your options during this period: (1) University insurance — many Korean universities provide basic group health insurance for enrolled students; check your student portal or international office on arrival. (2) Private travel/expat insurance such as SafetyWing (~$45/month), which covers medical emergencies worldwide with no long-term commitment and works well as a bridge until NHIS kicks in.',
    s6Title: 'How to Check Your Enrollment Status',
    s6P: 'Once you have been in Korea for 6 months, you should verify that you have been enrolled. Here is how:',
    s6Items: [
      'Visit nhis.or.kr → log in with your ARC number to check your enrollment status and monthly premium',
      'Call 1577-1000 — NHIS customer service is available with multilingual support (Korean, English, Chinese, and more)',
      'Visit your nearest district office (구청/주민센터) — they can confirm your status and help you register if needed',
      'Once enrolled, you will receive a health insurance card in the mail — keep it with your ARC',
    ],
    s7Title: 'What Happens If You Don\'t Pay?',
    s7P1: 'Missing NHIS payments has real consequences. After a few months of unpaid premiums, your NHIS coverage is suspended — meaning you lose the copay benefit and pay full uninsured rates at clinics.',
    s7P2: 'More importantly: unpaid NHIS premiums are checked during visa renewal. If you have outstanding balances, your visa renewal can be delayed or denied. Pay on time every month — you can set up auto-payment at nhis.or.kr or your Korean bank\'s app.',
    s8Title: 'Practical Tips for International Students',
    s8Items: [
      'Check with your international office in the first week — some universities start insurance coverage from day one of enrollment',
      'Set up auto-payment for NHIS premiums through your Korean bank account so you never miss a payment',
      'Keep your NHIS health insurance card with your ARC — you need to present it at every clinic visit',
      'If you visit a clinic without your card, you pay the full uninsured rate upfront (you can claim a refund later but it\'s a hassle)',
      'For dental cleanings (스케일링), NHIS covers one session per year — use it',
      'If you go to a large university hospital (대학병원) instead of a local clinic for a minor issue, your copay is significantly higher',
    ],
    faqTitle: 'FAQ',
    faq1Q: 'When am I automatically enrolled in NHIS as a foreign student?',
    faq1A: 'D-2 and D-4 visa holders are automatically enrolled in NHIS after 6 continuous months in Korea. Some universities enroll students earlier through group insurance — check with your international office.',
    faq2Q: 'How much is the NHIS monthly premium in 2026?',
    faq2A: 'The standard monthly premium for foreign local subscribers in 2026 is ₩79,320. This is a flat monthly fee — the same regardless of income or how often you visit the doctor.',
    faq3Q: 'What happens if I don\'t pay my NHIS premiums?',
    faq3A: 'Your NHIS coverage is suspended after several months of non-payment. More critically, unpaid premiums are flagged during visa renewal — this can delay or block your visa extension. Pay on time and set up auto-payment.',
    faq4Q: 'Am I covered before the 6-month mark?',
    faq4A: 'Not by NHIS. During the first 6 months, check if your university provides group health insurance for enrolled students. If not, private travel insurance like SafetyWing (~$45/month) is a reliable bridge until NHIS enrollment kicks in.',
    faq5Q: 'Can I use NHIS at any hospital or clinic in Korea?',
    faq5A: 'Yes — NHIS is accepted at virtually all registered hospitals, clinics, and pharmacies in Korea. Present your ARC and NHIS card at reception before your appointment.',
    finalTitle: 'Final Advice',
    finalP: 'Health insurance is one of those things that feels unnecessary — until you actually need it. Korea\'s NHIS makes healthcare genuinely affordable once you are enrolled, but the gap before 6 months is real. Don\'t ignore it. Sort out university insurance or private coverage on arrival, set up auto-payment as soon as NHIS enrollment kicks in, and keep your insurance card with your ARC at all times.',
    prepTitle: 'Related Setup Steps',
    prepP: 'Your ARC card is required to register for NHIS and to use your insurance at clinics. Make sure you have it sorted before your 6-month mark.',
    arcLabel: 'ARC Card Guide',
    simLabel: 'SIM Card Guide',
    bankLabel: 'Bank Account Guide',
    relatedTitle: 'Related Guides',
    relatedDesc: 'Health insurance connects to your ARC registration and bank account setup — these are the next steps.',
    relatedArcBtn: 'ARC Card Guide',
    relatedStartBtn: 'Getting Started',
  },
  zh: {
    eyebrow: '健康 / 保险指南',
    heroTitle: '韩国国民健康保险（NHIS）留学生完全指南（2026）',
    heroLead: '国民健康保险（건강보험，NHIS）是韩国的公共医疗体系。作为外国留学生，在韩连续居住6个月后将自动加入。2026年月保费为₩79,320。本指南将详细说明具体运作方式、保障范围，以及未缴保费的后果。',
    quickAnswerTitle: '简要回答',
    quickAnswerText: '持D-2或D-4签证的留学生在韩连续居住6个月后，将自动加入NHIS。2026年月保费为₩79,320。就医时您承担30–50%的费用，其余由NHIS承担。未缴保费将影响签证续签。',
    s1Title: 'NHIS是什么？',
    s1P1: 'NHIS（国民健康保险公团）是韩国强制性公共健康保险体系，承担医院、诊所和药局大部分医疗费用，您只需支付账单的一小部分。',
    s1P2: '在外国人纳入NHIS之前，留学生即使是小病也要承担全额自费医疗费用。如今，大多数长期居住的外国人都已纳入该体系，基本医疗保障真正变得触手可及。',
    s2Title: '谁能加入——何时加入？',
    s2P: '加入规则因签证类型和在韩时长而异：',
    s2Items: [
      'D-2（大学生）和D-4（语言学院）签证持有者在韩连续居住6个月后自动加入',
      '部分大学通过团体保险提前为学生加入——入学第一周咨询国际处',
      'F类签证（F-2、F-4、F-6）持有者通常在完成居民登记时即可加入',
      '持短期签证或在韩不足6个月者，尚未纳入NHIS覆盖范围',
    ],
    s3Title: '2026年费用是多少？',
    s3P1: '2026年外国地区加入者（지역가입자）的标准月保费为₩79,320。无论收入高低或就医频率如何，均为统一固定月费。',
    s3P2: '在月保费之外，每次就诊还需支付自付费用。一般诊所就诊，扣除NHIS承担部分后，通常自付₩5,000至20,000。住院、手术和专科门诊自付比例更高，但仍远低于自费标准。',
    s4Title: 'NHIS保障什么？',
    s4P: 'NHIS涵盖广泛的医疗服务。以下是留学生最常使用的项目：',
    s4Items: [
      '普通诊所（의원）就诊——自付30至50%，通常每次₩5,000至20,000',
      '处方药——在药局自付约30%的药费',
      '住院和手术——在NHIS承保范围内，根据病房类型自付比例不同',
      '牙科——基本牙科治疗（补牙、拔牙、每年一次洗牙）部分承保',
      '诊所心理咨询——与普通门诊相同的自付比例',
      '急诊就诊——承保，但急诊自付比例高于普通诊所',
    ],
    s5Title: '6个月前怎么办？',
    s5P1: '在韩最初6个月内，尚不属于NHIS覆盖范围。这是大多数留学生面对意外医疗费用时最脆弱的阶段。',
    s5P2: '在此期间的选项：（1）大学保险——许多韩国高校为在读学生提供基本团体健康保险，入学时咨询学生门户或国际处确认。（2）私人旅行/外派保险，如SafetyWing（约$45/月），承保全球范围内的医疗紧急情况，无需长期合同，是NHIS生效前的理想过渡方案。',
    s6Title: '如何查询加入状态',
    s6P: '在韩居住满6个月后，请确认您已完成加入。查询方式如下：',
    s6Items: [
      '访问nhis.or.kr，使用ARC卡号登录，查询加入状态和月保费',
      '拨打1577-1000——NHIS客服提供多语言支持（韩语、英语、中文等）',
      '前往最近的区政府（구청/주민센터）——可确认状态，如需要可协助办理加入手续',
      '加入后将收到邮寄的健康保险卡，请与ARC卡一同妥善保管',
    ],
    s7Title: '不缴保费会怎样？',
    s7P1: '拖欠NHIS保费会有实质性后果。连续数月未缴后，NHIS保障将暂停，就诊时将失去自付优惠，须按全额自费标准支付。',
    s7P2: '更重要的是：签证续签时会核查NHIS保费缴纳情况。若存在欠费，签证续签可能被延迟或拒绝。请按时每月缴纳——可在nhis.or.kr或韩国银行App上设置自动扣款。',
    s8Title: '留学生实用建议',
    s8Items: [
      '入学第一周咨询国际处——部分大学从入学当天起就开始提供保险',
      '通过韩国银行账户设置NHIS保费自动扣款，确保按时缴纳',
      '随时携带健康保险卡和ARC卡——就诊时均需出示',
      '如忘带保险卡就诊，须按全额自费支付（之后可申请报销，但较麻烦）',
      'NHIS每年承保一次牙齿洁治（스케일링），记得使用',
      '小病请去附近诊所，而非直接前往大学附属医院——后者自付费用远高于普通诊所',
    ],
    faqTitle: '常见问题',
    faq1Q: '作为外国留学生，何时自动加入NHIS？',
    faq1A: 'D-2和D-4签证持有者在韩连续居住6个月后自动加入NHIS。部分大学通过团体保险提前为学生加入——请咨询国际处确认。',
    faq2Q: '2026年NHIS月保费是多少？',
    faq2A: '2026年外国地区加入者的标准月保费为₩79,320。无论收入高低或就医频率如何，均为统一固定月费。',
    faq3Q: '不缴纳NHIS保费会有什么后果？',
    faq3A: '连续数月未缴后，NHIS保障将暂停。更重要的是，欠费会在签证续签时被标记，可能导致续签延迟或被拒。请按时缴纳并设置自动扣款。',
    faq4Q: '6个月前有保险保障吗？',
    faq4A: 'NHIS不承保。在最初6个月内，请确认学校是否为在读学生提供团体健康保险。若无，SafetyWing等私人旅行保险（约$45/月）是NHIS生效前的可靠过渡方案。',
    faq5Q: 'NHIS可在韩国任何医院使用吗？',
    faq5A: '是的——NHIS几乎适用于韩国所有注册医院、诊所和药局。就诊前，请在前台出示ARC卡和健康保险卡。',
    finalTitle: '最终建议',
    finalP: '医疗保险是那种平时感觉用不上、但真正需要时至关重要的东西。加入NHIS后，韩国的医疗保障确实实惠可及，但6个月前的空白期是真实存在的。请认真对待——入学时立即办理大学保险或私人保险，NHIS生效后设置自动扣款，并随时将保险卡与ARC卡放在一起。',
    prepTitle: '相关办理步骤',
    prepP: 'ARC卡是办理NHIS登记和就诊时出示保险的前提。请确保在满6个月前完成ARC申请。',
    arcLabel: 'ARC卡指南',
    simLabel: 'SIM卡指南',
    bankLabel: '银行账户指南',
    relatedTitle: '相关指南',
    relatedDesc: '健康保险与ARC登记和银行账户开户密切相关——这些是您的下一步。',
    relatedArcBtn: 'ARC卡指南',
    relatedStartBtn: '入门指南',
  },
  ru: {
    eyebrow: 'Здоровье / Страховка',
    heroTitle: 'Медицинская страховка NHIS в Корее для иностранных студентов (2026)',
    heroLead: 'NHIS (국민건강보험, Национальное медицинское страхование) — корейская система обязательного медицинского страхования. Как иностранный студент, вы будете автоматически включены в неё после 6 месяцев в стране. Ежемесячный взнос в 2026 году — ₩79,320. В этом руководстве подробно объясняется, как работает система, что она покрывает и что произойдёт, если не платить взносы.',
    quickAnswerTitle: 'Быстрый ответ',
    quickAnswerText: 'Иностранные студенты с визой D-2 или D-4 автоматически включаются в NHIS после 6 непрерывных месяцев в Корее. Ежемесячный взнос в 2026 году — ₩79,320. При обращении к врачу вы платите около 30–50% от стоимости, остальное покрывает NHIS. Неоплаченные взносы могут заблокировать продление визы.',
    s1Title: 'Что такое NHIS?',
    s1P1: 'NHIS (Национальное медицинское страхование / 국민건강보험공단) — обязательная государственная система медицинского страхования Кореи. Она покрывает большую часть расходов в больницах, клиниках и аптеках — то есть вы платите лишь небольшую долю от реальной стоимости лечения.',
    s1P2: 'До включения иностранцев в NHIS студенты нередко платили полную стоимость даже за незначительные проблемы со здоровьем. Сейчас большинство иностранных жителей охвачены системой, и базовая медицинская помощь стала по-настоящему доступной.',
    s2Title: 'Кого включают в систему — и когда?',
    s2P: 'Правила включения зависят от типа визы и срока пребывания:',
    s2Items: [
      'Обладатели виз D-2 (университет) и D-4 (языковые курсы) автоматически включаются после 6 непрерывных месяцев в Корее',
      'Некоторые университеты включают студентов раньше через корпоративную страховку — уточните в международном отделе в первую же неделю',
      'Обладатели визы F (F-2, F-4, F-6) как правило включаются с момента регистрации в качестве резидентов',
      'Краткосрочные визы или пребывание менее 6 месяцев — NHIS не распространяется',
    ],
    s3Title: 'Сколько стоит в 2026 году?',
    s3P1: 'Стандартный ежемесячный взнос для иностранных местных застрахованных (지역가입자) в 2026 году составляет ₩79,320. Сумма фиксированная — не зависит от дохода и частоты посещения врача.',
    s3P2: 'Помимо ежемесячного взноса, при каждом визите вы платите соплатёж (copay). При стандартном обращении в клинику это обычно ₩5,000–20,000 после того, как NHIS покрыл свою долю. Госпитализация, операции и приём специалистов обходятся дороже, но всё равно значительно дешевле, чем без страховки.',
    s4Title: 'Что покрывает NHIS?',
    s4P: 'NHIS охватывает широкий спектр медицинских услуг. Вот что иностранные студенты используют чаще всего:',
    s4Items: [
      'Приём терапевта и посещение клиники (의원) — соплатёж 30–50%, обычно ₩5,000–20,000 за визит',
      'Рецептурные лекарства — вы платите около 30% стоимости препарата в аптеке',
      'Госпитализация и операции — покрываются, соплатёж зависит от типа палаты',
      'Стоматология — базовая помощь частично покрывается (пломбирование, удаление, чистка зубов один раз в год)',
      'Психологические консультации в клиниках — покрываются по той же ставке соплатежа, что и обычные приёмы',
      'Приём скорой помощи — покрывается, но соплатёж выше, чем в обычных клиниках',
    ],
    s5Title: 'До 6 месяцев: что делать?',
    s5P1: 'В первые 6 месяцев в Корее NHIS на вас не распространяется. Это уязвимый период, когда непредвиденные медицинские расходы особенно болезненны.',
    s5P2: 'Варианты на этот период: (1) Страховка университета — многие корейские вузы предоставляют базовую групповую страховку для зачисленных студентов; уточните в студенческом портале или международном отделе сразу по прибытии. (2) Частная международная страховка, например SafetyWing (~$45 в месяц) — покрывает экстренную медицинскую помощь по всему миру без долгосрочных обязательств; отлично работает как мост до включения в NHIS.',
    s6Title: 'Как проверить статус регистрации',
    s6P: 'После 6 месяцев пребывания в Корее убедитесь, что вы включены в систему. Как это сделать:',
    s6Items: [
      'Посетите nhis.or.kr → войдите с номером ARC и проверьте статус и размер взноса',
      'Позвоните по номеру 1577-1000 — поддержка NHIS доступна на нескольких языках (корейский, английский, китайский и другие)',
      'Обратитесь в ближайший районный офис (구청/주민센터) — подтвердят статус и при необходимости помогут оформить',
      'После включения вы получите страховую карту по почте — храните её вместе с ARC',
    ],
    s7Title: 'Что будет, если не платить?',
    s7P1: 'Задержка взносов NHIS имеет реальные последствия. После нескольких месяцев неоплаты страховка приостанавливается — вы теряете льготный соплатёж и платите полную стоимость без страховки.',
    s7P2: 'Важнее другое: задолженность по NHIS проверяется при продлении визы. Непогашенный долг может задержать или заблокировать продление. Платите вовремя каждый месяц — настройте автоплатёж на nhis.or.kr или в приложении своего корейского банка.',
    s8Title: 'Практические советы для иностранных студентов',
    s8Items: [
      'Уточните в международном отделе в первую неделю — некоторые вузы предоставляют страховку с первого дня',
      'Настройте автоплатёж взносов NHIS через корейский банковский счёт, чтобы не пропускать',
      'Всегда носите с собой страховую карту NHIS вместе с ARC — она нужна при каждом визите в клинику',
      'Если пришли без карты — придётся заплатить полную стоимость (потом можно вернуть деньги, но это хлопотно)',
      'NHIS покрывает одну чистку зубов (스케일링) в год — воспользуйтесь этим',
      'При незначительных проблемах идите в местную клинику, а не в университетскую больницу — там соплатёж значительно выше',
    ],
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Когда меня автоматически включат в NHIS как иностранного студента?',
    faq1A: 'Обладатели виз D-2 и D-4 автоматически включаются в NHIS после 6 непрерывных месяцев в Корее. Некоторые вузы включают студентов раньше через групповую страховку — уточните в международном отделе.',
    faq2Q: 'Каков ежемесячный взнос NHIS в 2026 году?',
    faq2A: 'Стандартный ежемесячный взнос для иностранных местных застрахованных в 2026 году — ₩79,320. Сумма фиксированная, не зависит от дохода и частоты обращений.',
    faq3Q: 'Что будет, если не платить взносы NHIS?',
    faq3A: 'После нескольких месяцев неоплаты страховка приостанавливается. Что важнее: задолженность проверяется при продлении визы — это может привести к задержке или отказу. Платите вовремя и настройте автоплатёж.',
    faq4Q: 'Есть ли страховка до 6-месячной отметки?',
    faq4A: 'От NHIS — нет. В первые 6 месяцев уточните, предоставляет ли университет групповую страховку для зачисленных студентов. Если нет, частная страховка вроде SafetyWing (~$45 в месяц) — надёжный вариант до включения в NHIS.',
    faq5Q: 'Можно ли использовать NHIS в любой больнице или клинике Кореи?',
    faq5A: 'Да — NHIS принимается практически во всех зарегистрированных больницах, клиниках и аптеках Кореи. Предъявите ARC и страховую карту на ресепшене перед приёмом.',
    finalTitle: 'Финальный совет',
    finalP: 'Медицинская страховка — это то, что кажется ненужным ровно до того момента, когда она по-настоящему нужна. С NHIS медицина в Корее становится доступной, но первые 6 месяцев — реальная «серая зона». Не игнорируйте её. Оформите университетскую или частную страховку сразу по приезду, настройте автоплатёж, как только NHIS заработает, и всегда держите страховую карту вместе с ARC.',
    prepTitle: 'Смежные шаги',
    prepP: 'Карта ARC необходима для регистрации в NHIS и предъявления страховки в клиниках. Убедитесь, что оформили её до 6-месячной отметки.',
    arcLabel: 'Руководство по ARC',
    simLabel: 'Руководство по SIM-карте',
    bankLabel: 'Руководство по банковскому счёту',
    relatedTitle: 'Связанные руководства',
    relatedDesc: 'Медицинская страховка связана с регистрацией ARC и открытием банковского счёта — это ваши следующие шаги.',
    relatedArcBtn: 'Руководство по ARC',
    relatedStartBtn: 'Начало работы',
  },
  ja: {
    eyebrow: '健康 / 保険ガイド',
    heroTitle: '韓国国民健康保険（NHIS）留学生ガイド（2026年）',
    heroLead: 'NHIS（건강보험、国民健康保険）は韓国の公的医療保険制度です。外国人留学生は在韓6ヶ月後に自動加入となります。2026年の月額保険料は₩79,320。このガイドでは、仕組み・給付内容・未払い時のリスクまでを詳しく解説します。',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText: 'D-2またはD-4ビザの留学生は、韓国に連続して6ヶ月滞在した後、NHISに自動加入されます。2026年の月額保険料は₩79,320。医療費の30〜50%を自己負担し、残りはNHISが負担します。未払いはビザ更新に影響します。',
    s1Title: 'NHISとは？',
    s1P1: 'NHIS（国民健康保険公団）は韓国の強制加入型公的医療保険制度です。病院・クリニック・薬局での医療費の大部分を賄うため、実際の請求額のごく一部しか支払う必要がありません。',
    s1P2: '外国人がNHISに含まれるようになる以前、留学生は軽い症状でも全額自費で負担するケースが多くありました。現在は長期在住の外国人のほとんどが制度に組み込まれ、基本的な医療が本当に手頃な価格で受けられるようになりました。',
    s2Title: '誰が加入できる？いつから？',
    s2P: '加入条件はビザの種類と滞在期間によって異なります：',
    s2Items: [
      'D-2（大学生）・D-4（語学学院）ビザ保持者は、韓国に連続して6ヶ月滞在後に自動加入',
      '一部の大学は団体保険でより早く加入できる場合あり — 最初の週に国際部に確認すること',
      'Fビザ（F-2、F-4、F-6）保持者は居住者登録と同時に加入が一般的',
      '短期ビザや6ヶ月未満の滞在の場合はNHISの適用外',
    ],
    s3Title: '2026年の費用は？',
    s3P1: '2026年における外国人地域加入者（지역가입자）の標準月額保険料は₩79,320です。収入や受診頻度に関わらず一律の固定月額です。',
    s3P2: '月額保険料に加え、受診のたびに自己負担額（コペイ）が発生します。一般的なクリニック受診でNHIS負担分を引いた後の自己負担は、通常₩5,000〜20,000程度です。入院・手術・専門医受診はコペイが高めですが、それでも保険なしの場合より大幅に安くなります。',
    s4Title: 'NHISはどこまでカバーする？',
    s4P: 'NHISは幅広い医療サービスをカバーします。留学生がよく利用するものは以下の通りです：',
    s4Items: [
      '一般クリニック（의원）受診 — 自己負担30〜50%、通常1回₩5,000〜20,000',
      '処方薬 — 薬局で薬代の約30%を自己負担',
      '入院・手術 — 適用あり、病棟の種類によってコペイが異なる',
      '歯科 — 基本的な処置（充填・抜歯・年1回のスケーリング）が一部適用',
      'クリニックでのメンタルヘルス相談 — 通常の受診と同じコペイで適用',
      '救急受診 — 適用あり、ただし救急のコペイは一般クリニックより高め',
    ],
    s5Title: '6ヶ月前はどうすれば？',
    s5P1: '韓国到着後の最初の6ヶ月間はNHISが適用されません。予想外の医療費に最も無防備な時期です。',
    s5P2: 'この期間の選択肢：（1）大学の保険 — 多くの韓国の大学は在籍学生向けの基本的な団体健康保険を提供しています。到着後すぐに学生ポータルまたは国際部で確認してください。（2）SafetyWingなどの民間旅行・海外在住者保険（約$45/月） — 長期契約不要で世界中の緊急医療をカバーし、NHIS加入までのつなぎとして機能します。',
    s6Title: '加入状況の確認方法',
    s6P: '韓国滞在6ヶ月後は、確実に加入されているか確認してください。確認方法は以下の通りです：',
    s6Items: [
      'nhis.or.krにアクセス → ARC番号でログインして加入状況と保険料を確認',
      '1577-1000に電話 — NHISカスタマーサービスは多言語対応（韓国語・英語・中国語など）',
      '最寄りの区役所（구청/주민센터）を訪問 — 状況を確認し、必要であれば登録を手伝ってもらえる',
      '加入後、健康保険証が郵送されます — ARCカードと一緒に保管してください',
    ],
    s7Title: '支払わないとどうなる？',
    s7P1: '保険料未払いには実際の影響があります。数ヶ月未払いが続くとNHISの適用が停止され、コペイの恩恵を失い、クリニックで全額自費を支払うことになります。',
    s7P2: 'さらに重要なのは：未払い保険料はビザ更新時にチェックされます。未払い残高があると、ビザ更新が遅れたり拒否されたりすることがあります。毎月期日通りに支払い、nhis.or.krまたは韓国の銀行アプリで自動引き落としを設定してください。',
    s8Title: '留学生向け実践的アドバイス',
    s8Items: [
      '最初の週に国際部で確認 — 入学初日から保険が適用される大学もある',
      '韓国の銀行口座でNHIS保険料の自動振替を設定し、未払いを防ぐ',
      'クリニック受診時には毎回ARCと健康保険証が必要 — 常に持ち歩くこと',
      '保険証を忘れた場合は全額自費払い（後で返金申請できるが手間がかかる）',
      'NHISは年1回の歯石除去（스케일링）をカバー — 忘れずに活用する',
      '軽い症状には近くのクリニックへ。大学病院（대학병원）はコペイが大幅に高くなる',
    ],
    faqTitle: 'よくある質問',
    faq1Q: '外国人留学生はいつNHISに自動加入されますか？',
    faq1A: 'D-2・D-4ビザ保持者は、韓国に連続して6ヶ月滞在した後にNHISへ自動加入されます。一部の大学は団体保険でより早く加入できます — 国際部で確認してください。',
    faq2Q: '2026年のNHIS月額保険料はいくらですか？',
    faq2A: '2026年における外国人地域加入者の標準月額保険料は₩79,320です。収入や受診頻度に関わらず一律の固定月額です。',
    faq3Q: 'NHIS保険料を払わないとどうなりますか？',
    faq3A: '数ヶ月未払いが続くとNHIS適用が停止されます。さらに重要なのは、未払いはビザ更新時に確認され、更新の遅延や拒否につながる可能性があります。毎月期日通りに支払い、自動振替を設定してください。',
    faq4Q: '6ヶ月前には保険の適用がありますか？',
    faq4A: 'NHISは適用されません。最初の6ヶ月間は、大学が在籍学生向けに団体健康保険を提供しているか確認してください。提供がない場合、SafetyWingなどの民間保険（約$45/月）がNHIS加入までの頼れる選択肢です。',
    faq5Q: '韓国のどの病院・クリニックでもNHISは使えますか？',
    faq5A: 'はい — NHISは韓国のほぼすべての登録病院・クリニック・薬局で使えます。受診前に受付でARCと健康保険証を提示してください。',
    finalTitle: '最後のアドバイス',
    finalP: '医療保険は、実際に必要になるまで不要に感じるものです。NHISに加入すれば韓国での医療は本当に手頃になりますが、最初の6ヶ月の空白期間は現実です。その問題を無視しないでください。到着後すぐに大学保険または民間保険を確保し、NHIS加入後は自動振替を設定し、常に健康保険証をARCと一緒に持ち歩いてください。',
    prepTitle: '関連する手続きステップ',
    prepP: 'NHIS登録とクリニックでの保険提示にはARCカードが必要です。6ヶ月を迎える前に取得しておきましょう。',
    arcLabel: 'ARCカードガイド',
    simLabel: 'SIMカードガイド',
    bankLabel: '銀行口座ガイド',
    relatedTitle: '関連ガイド',
    relatedDesc: '健康保険はARC登録や銀行口座開設と密接に関わっています — これらが次のステップです。',
    relatedArcBtn: 'ARCカードガイド',
    relatedStartBtn: 'はじめに',
  },
  vi: {
    eyebrow: 'Sức khỏe / Hướng dẫn Bảo hiểm',
    heroTitle: 'Hướng dẫn Bảo hiểm Y tế Quốc gia (NHIS) Hàn Quốc cho Du học sinh (2026)',
    heroLead: 'NHIS (건강보험) là hệ thống bảo hiểm y tế công cộng của Hàn Quốc. Là du học sinh nước ngoài, bạn sẽ được tự động đăng ký sau 6 tháng ở Hàn Quốc. Phí hàng tháng năm 2026 là ₩79,320. Hướng dẫn này giải thích cách thức hoạt động, phạm vi bảo hiểm và hậu quả nếu không đóng phí.',
    quickAnswerTitle: 'Trả lời nhanh',
    quickAnswerText: 'Du học sinh giữ visa D-2 hoặc D-4 được tự động đăng ký NHIS sau 6 tháng liên tục ở Hàn Quốc. Phí hàng tháng năm 2026 là ₩79,320. Bạn thanh toán khoảng 30–50% chi phí y tế, NHIS chi trả phần còn lại. Phí chưa thanh toán có thể chặn gia hạn visa.',
    s1Title: 'NHIS là gì?',
    s1P1: 'NHIS (Dịch vụ Bảo hiểm Y tế Quốc gia / 국민건강보험공단) là hệ thống bảo hiểm y tế bắt buộc của Hàn Quốc. Nó chi trả phần lớn chi phí y tế tại bệnh viện, phòng khám và nhà thuốc — nghĩa là bạn chỉ trả một phần nhỏ của hóa đơn thực tế.',
    s1P2: 'Trước khi người nước ngoài được đưa vào NHIS, du học sinh thường phải chịu toàn bộ chi phí tự túc dù chỉ là vấn đề sức khỏe nhỏ. Hiện nay, hầu hết cư dân nước ngoài dài hạn đều được đưa vào hệ thống, giúp chăm sóc sức khỏe cơ bản thực sự trở nên chi phí phải chăng.',
    s2Title: 'Ai được đăng ký — và khi nào?',
    s2P: 'Quy tắc đăng ký khác nhau tùy thuộc vào loại visa và thời gian lưu trú:',
    s2Items: [
      'Người giữ visa D-2 (sinh viên đại học) và D-4 (trường ngôn ngữ) được tự động đăng ký sau 6 tháng liên tục ở Hàn Quốc',
      'Một số trường đại học đăng ký sinh viên sớm hơn qua bảo hiểm nhóm — kiểm tra với văn phòng quốc tế trong tuần đầu tiên',
      'Người giữ visa F (F-2, F-4, F-6) thường được đăng ký ngay khi đăng ký cư trú',
      'Visa ngắn hạn hoặc ở Hàn Quốc dưới 6 tháng — chưa được NHIS bảo hiểm',
    ],
    s3Title: 'Chi phí năm 2026 là bao nhiêu?',
    s3P1: 'Phí hàng tháng tiêu chuẩn cho người tham gia địa phương nước ngoài (지역가입자) năm 2026 là ₩79,320. Số tiền này cố định bất kể thu nhập hay tần suất khám bệnh — đây là mức phí hàng tháng cố định.',
    s3P2: 'Ngoài phí hàng tháng, bạn trả khoản đồng chi trả (copay) tại mỗi lần khám. Với lần khám phòng khám thông thường, điều này thường là ₩5,000–20,000 sau khi NHIS chi trả phần của mình. Nhập viện, phẫu thuật và khám chuyên gia có copay cao hơn nhưng vẫn rẻ hơn đáng kể so với không có bảo hiểm.',
    s4Title: 'NHIS bảo hiểm những gì?',
    s4P: 'NHIS bao gồm nhiều dịch vụ y tế. Đây là những gì du học sinh thường sử dụng nhất:',
    s4Items: [
      'Khám bác sĩ đa khoa và phòng khám (의원) — tự chi trả 30–50%, thường ₩5,000–20,000/lần',
      'Đơn thuốc — bạn trả khoảng 30% giá thuốc tại nhà thuốc',
      'Nằm viện và phẫu thuật — được bảo hiểm, copay khác nhau tùy loại phòng',
      'Nha khoa — chăm sóc nha khoa cơ bản được bảo hiểm một phần (trám, nhổ, cạo vôi răng một lần/năm)',
      'Tư vấn sức khỏe tâm thần tại phòng khám — được bảo hiểm với cùng tỷ lệ copay như lần khám thông thường',
      'Khám cấp cứu — được bảo hiểm, nhưng copay cấp cứu cao hơn phòng khám thông thường',
    ],
    s5Title: 'Trước 6 tháng: Các lựa chọn là gì?',
    s5P1: 'Trong 6 tháng đầu tiên ở Hàn Quốc, bạn chưa được NHIS bảo hiểm. Đây là khoảng trống dễ bị tổn thương nhất trước chi phí y tế bất ngờ.',
    s5P2: 'Các lựa chọn trong giai đoạn này: (1) Bảo hiểm của trường đại học — nhiều trường đại học Hàn Quốc cung cấp bảo hiểm sức khỏe nhóm cơ bản cho sinh viên đã đăng ký; kiểm tra trên cổng thông tin sinh viên hoặc văn phòng quốc tế khi đến. (2) Bảo hiểm du lịch/expat tư nhân như SafetyWing (~$45/tháng), bao gồm trường hợp khẩn cấp y tế toàn cầu, không cần cam kết dài hạn và hoạt động tốt như cầu nối cho đến khi NHIS có hiệu lực.',
    s6Title: 'Cách kiểm tra trạng thái đăng ký',
    s6P: 'Sau 6 tháng ở Hàn Quốc, hãy xác nhận rằng bạn đã được đăng ký. Cách thực hiện:',
    s6Items: [
      'Truy cập nhis.or.kr → đăng nhập bằng số ARC để kiểm tra trạng thái đăng ký và phí hàng tháng',
      'Gọi 1577-1000 — dịch vụ khách hàng NHIS hỗ trợ đa ngôn ngữ (tiếng Hàn, tiếng Anh, tiếng Trung, v.v.)',
      'Đến văn phòng quận gần nhất (구청/주민센터) — xác nhận trạng thái và giúp đăng ký nếu cần',
      'Sau khi đăng ký, bạn sẽ nhận được thẻ bảo hiểm y tế qua bưu điện — giữ cùng với ARC',
    ],
    s7Title: 'Điều gì xảy ra nếu bạn không trả phí?',
    s7P1: 'Bỏ lỡ thanh toán NHIS có hậu quả thực sự. Sau vài tháng không thanh toán, NHIS của bạn bị đình chỉ — nghĩa là bạn mất lợi ích copay và trả toàn bộ chi phí không có bảo hiểm tại phòng khám.',
    s7P2: 'Quan trọng hơn: phí NHIS chưa thanh toán được kiểm tra trong quá trình gia hạn visa. Nếu bạn còn số dư chưa thanh toán, việc gia hạn visa có thể bị trì hoãn hoặc từ chối. Trả đúng hạn mỗi tháng — bạn có thể thiết lập thanh toán tự động tại nhis.or.kr hoặc ứng dụng ngân hàng Hàn Quốc.',
    s8Title: 'Mẹo thực tế cho Du học sinh',
    s8Items: [
      'Kiểm tra với văn phòng quốc tế trong tuần đầu tiên — một số trường bắt đầu bảo hiểm từ ngày đầu nhập học',
      'Thiết lập thanh toán tự động phí NHIS qua tài khoản ngân hàng Hàn Quốc để không bao giờ bỏ lỡ',
      'Luôn mang theo thẻ bảo hiểm y tế NHIS cùng với ARC — bạn cần xuất trình tại mỗi lần khám',
      'Nếu đến phòng khám mà không có thẻ, bạn trả toàn bộ chi phí trước (sau có thể hoàn tiền nhưng rắc rối)',
      'NHIS bảo hiểm một lần cạo vôi răng (스케일링) mỗi năm — hãy sử dụng',
      'Với vấn đề nhỏ, hãy đến phòng khám địa phương chứ không phải bệnh viện đại học lớn — copay cao hơn đáng kể',
    ],
    faqTitle: 'Câu hỏi thường gặp',
    faq1Q: 'Khi nào du học sinh nước ngoài được tự động đăng ký NHIS?',
    faq1A: 'Người giữ visa D-2 và D-4 được tự động đăng ký NHIS sau 6 tháng liên tục ở Hàn Quốc. Một số trường đại học đăng ký sinh viên sớm hơn qua bảo hiểm nhóm — kiểm tra với văn phòng quốc tế.',
    faq2Q: 'Phí hàng tháng NHIS năm 2026 là bao nhiêu?',
    faq2A: 'Phí hàng tháng tiêu chuẩn cho người tham gia địa phương nước ngoài năm 2026 là ₩79,320. Đây là mức phí cố định bất kể thu nhập hay tần suất khám bệnh.',
    faq3Q: 'Điều gì xảy ra nếu tôi không trả phí NHIS?',
    faq3A: 'NHIS của bạn bị đình chỉ sau vài tháng không thanh toán. Quan trọng hơn, phí chưa thanh toán được gắn cờ trong quá trình gia hạn visa — điều này có thể trì hoãn hoặc chặn gia hạn. Trả đúng hạn và thiết lập thanh toán tự động.',
    faq4Q: 'Tôi có được bảo hiểm trước mốc 6 tháng không?',
    faq4A: 'Không phải từ NHIS. Trong 6 tháng đầu, hãy kiểm tra xem trường đại học của bạn có cung cấp bảo hiểm sức khỏe nhóm cho sinh viên đã đăng ký không. Nếu không, bảo hiểm du lịch tư nhân như SafetyWing (~$45/tháng) là cầu nối đáng tin cậy cho đến khi đăng ký NHIS.',
    faq5Q: 'Tôi có thể sử dụng NHIS tại bất kỳ bệnh viện hoặc phòng khám nào ở Hàn Quốc không?',
    faq5A: 'Có — NHIS được chấp nhận tại hầu hết tất cả các bệnh viện, phòng khám và nhà thuốc đã đăng ký ở Hàn Quốc. Xuất trình ARC và thẻ NHIS tại quầy lễ tân trước cuộc hẹn.',
    finalTitle: 'Lời khuyên cuối',
    finalP: 'Bảo hiểm y tế là thứ cảm thấy không cần thiết — cho đến khi bạn thực sự cần nó. NHIS giúp chăm sóc sức khỏe ở Hàn Quốc trở nên thực sự chi phí phải chăng sau khi bạn đăng ký, nhưng khoảng trống trước 6 tháng là có thật. Đừng bỏ qua nó. Sắp xếp bảo hiểm của trường hoặc bảo hiểm tư nhân khi đến, thiết lập thanh toán tự động ngay khi đăng ký NHIS, và luôn giữ thẻ bảo hiểm cùng với ARC.',
    prepTitle: 'Các bước thiết lập liên quan',
    prepP: 'Thẻ ARC là cần thiết để đăng ký NHIS và xuất trình bảo hiểm tại phòng khám. Đảm bảo bạn đã hoàn thành trước mốc 6 tháng.',
    arcLabel: 'Hướng dẫn thẻ ARC',
    simLabel: 'Hướng dẫn SIM Card',
    bankLabel: 'Hướng dẫn tài khoản ngân hàng',
    relatedTitle: 'Hướng dẫn liên quan',
    relatedDesc: 'Bảo hiểm y tế liên kết với đăng ký ARC và mở tài khoản ngân hàng — đây là các bước tiếp theo.',
    relatedArcBtn: 'Hướng dẫn thẻ ARC',
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

  const url = `https://ksurvivalkit.com/${lang}/korea-health-insurance-guide`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: 'https://ksurvivalkit.com/en/korea-health-insurance-guide',
        zh: 'https://ksurvivalkit.com/zh/korea-health-insurance-guide',
        ru: 'https://ksurvivalkit.com/ru/korea-health-insurance-guide',
        ja: 'https://ksurvivalkit.com/ja/korea-health-insurance-guide',
        vi: 'https://ksurvivalkit.com/vi/korea-health-insurance-guide',
        'x-default': 'https://ksurvivalkit.com/en/korea-health-insurance-guide',
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
      title: 'Korea Health Insurance (NHIS) Guide 2026',
      description: 'Auto-enrolled after 6 months. ₩79,320/month. Unpaid premiums block visa renewal. Full guide for foreign students.',
    },
  };
}

export default async function KoreaHealthInsuranceGuidePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const l: L = (lang as L) in CONTENT ? (lang as L) : 'en';
  const c = CONTENT[l];
  const pageUrl = `https://ksurvivalkit.com/${lang}/korea-health-insurance-guide`;

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
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ArticleHero
        eyebrow={c.eyebrow}
        title={c.heroTitle}
        lead={c.heroLead}
      />
      <PageDisclaimer type="health" />
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

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">{c.s5Title}</h2>
          <p className="leading-7 text-slate-700">{c.s5P1}</p>
          <p className="leading-7 text-slate-700">{c.s5P2}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s6Title}</h2>
          <p className="leading-7 text-slate-700">{c.s6P}</p>
          <ol className="list-decimal space-y-2 pl-6 text-slate-700">
            {c.s6Items.map((item, i) => <li key={i}>{item}</li>)}
          </ol>
        </section>

        <section className="rounded-2xl border border-red-200 bg-red-50 p-6 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">{c.s7Title}</h2>
          <p className="leading-7 text-slate-700">{c.s7P1}</p>
          <p className="leading-7 text-slate-700">{c.s7P2}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.s8Title}</h2>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            {c.s8Items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{c.faqTitle}</h2>
          <div className="space-y-4 text-slate-700">
            <div><h3 className="font-semibold">{c.faq1Q}</h3><p>{c.faq1A}</p></div>
            <div><h3 className="font-semibold">{c.faq2Q}</h3><p>{c.faq2A}</p></div>
            <div><h3 className="font-semibold">{c.faq3Q}</h3><p>{c.faq3A}</p></div>
            <div><h3 className="font-semibold">{c.faq4Q}</h3><p>{c.faq4A}</p></div>
            <div><h3 className="font-semibold">{c.faq5Q}</h3><p>{c.faq5A}</p></div>
          </div>
        </section>

        {/* Official Links */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{LINKS_TITLE[l]}</h2>
          <p className="leading-7 text-slate-700">{LINKS_DESC[l]}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.nhis.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-400 hover:shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">nhis.or.kr</span>
              <span className="font-semibold text-slate-900">{NHIS_LABEL[l]}</span>
              <span className="text-sm text-slate-600">{NHIS_DESC[l]}</span>
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
              <a href={`/${lang}/arc-card-korea-guide`} className="text-blue-600 underline">
                {c.arcLabel}
              </a>
            </li>
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
              href={`/${lang}/getting-started`}
              className="rounded-xl border border-white/30 px-4 py-2 font-semibold text-white"
            >
              {c.relatedStartBtn}
            </a>
          </div>
        </section>

      </article>
      <RelatedPosts lang={lang as string} current="korea-health-insurance-guide" />
      </main>
    </>
  );
}
