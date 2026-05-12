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
    title: 'Part-Time Jobs in Korea for International Students (2026 Guide) | K-Survival Kit',
    description:
      'Can international students work part-time in Korea? Yes — here is everything you need to know about visa rules, work permits, job types, and how to find a part-time job in Korea in 2026.',
  },
  zh: {
    title: '韩国留学生打工指南（2026年）| K-Survival Kit',
    description:
      '留学生在韩国可以打工吗？可以——本指南详解签证规定、工作许可、工作类型及求职方式，2026年最新内容。',
  },
  ru: {
    title: 'Подработка в Корее для иностранных студентов (2026) | K-Survival Kit',
    description:
      'Можно ли иностранным студентам работать неполный рабочий день в Корее? Да — полный гайд по визовым правилам, разрешениям на работу и поиску подработки в 2026 году.',
  },
  ja: {
    title: '韓国で留学生がアルバイトする方法（2026年版） | K-Survival Kit',
    description:
      '留学生は韓国でアルバイトできますか？できます。ビザのルール、就労許可の取り方、仕事の種類、求人の探し方まで2026年版で解説します。',
  },
  vi: {
    title: 'Làm thêm ở Hàn Quốc cho Du học sinh (Hướng dẫn 2026) | K-Survival Kit',
    description:
      'Du học sinh có thể làm thêm ở Hàn Quốc không? Có — hướng dẫn đầy đủ về quy định visa, giấy phép lao động, loại công việc và cách tìm việc làm thêm năm 2026.',
  },
};

type PageContent = {
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  disclaimerNote: string;
  quickAnswerTitle: string;
  quickAnswerText: string;
  s1Title: string;
  s1P: string;
  s1Items: { label: string; desc: string }[];
  s2Title: string;
  s2P: string;
  s2Items: { visa: string; hours: string; note: string }[];
  s3Title: string;
  s3P: string;
  s3Steps: string[];
  s4Title: string;
  s4P: string;
  s4Items: { label: string; desc: string }[];
  s5Title: string;
  s5P: string;
  s5Items: string[];
  s6Title: string;
  s6P: string;
  s6Items: string[];
  s7Title: string;
  s7P: string;
  s7Items: string[];
  warnTitle: string;
  warnItems: string[];
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
};

const CONTENT: Record<L, PageContent> = {
  en: {
    eyebrow: 'Money / Work',
    heroTitle: 'Part-Time Jobs in Korea for International Students (2026 Guide)',
    heroLead:
      'Many international students in Korea want to earn money while studying — and it is possible. But working without the right visa permission can result in fines or deportation. This guide covers everything you need to know about legally working part-time in Korea in 2026.',
    disclaimerNote:
      'Visa and labor rules change. Always confirm current requirements with your university international office or the Korea Immigration Service before starting any job.',
    quickAnswerTitle: 'Quick Answer',
    quickAnswerText:
      'Yes, international students in Korea can work part-time — but only with a valid work permit. Most D-2 visa holders can work up to 20 hours per week during the semester and unlimited hours during vacation periods. You must apply for a part-time work permit (시간제취업허가) through immigration before you start working. The 2026 minimum wage in Korea is ₩10,320 per hour.',
    s1Title: 'Can International Students Work in Korea?',
    s1P: 'Yes — but the rules depend on your visa type. Working without proper authorization is a serious violation that can affect your ability to stay in Korea.',
    s1Items: [
      {
        label: 'D-2 Visa (Student)',
        desc: 'The most common student visa. Allows part-time work after obtaining a work permit. Undergraduate students can work up to 20 hours/week during semester, graduate students up to 30 hours/week. Unlimited during vacation.',
      },
      {
        label: 'D-4 Visa (Language Training)',
        desc: 'For students enrolled in Korean language programs. Part-time work is allowed with a work permit, generally up to 20 hours/week after completing 6 months of study.',
      },
      {
        label: 'Other Visas',
        desc: 'F-series visas (F-2, F-4, F-6) generally allow unrestricted work. Always confirm your specific visa conditions with your university or the immigration office.',
      },
    ],
    s2Title: 'How Many Hours Can You Work?',
    s2P: 'Work hour limits depend on your visa type and whether it is a semester period or a vacation period.',
    s2Items: [
      { visa: 'D-2 (Undergraduate)', hours: 'Up to 20 hrs/week (semester) · Unlimited (vacation)', note: 'Work permit required' },
      { visa: 'D-2 (Graduate)', hours: 'Up to 30 hrs/week (semester) · Unlimited (vacation)', note: 'Work permit required' },
      { visa: 'D-4 (Language school)', hours: 'Up to 20 hrs/week (after 6 months)', note: 'Work permit required' },
      { visa: 'F-2 / F-4 / F-6', hours: 'No restriction', note: 'No permit needed' },
    ],
    s3Title: 'How to Get a Work Permit in Korea',
    s3P: 'You must get a part-time work permit (시간제취업허가) from the Korea Immigration Service before starting any job. Here is the process.',
    s3Steps: [
      'Visit your nearest Immigration Office or apply online via HiKorea (hikorea.go.kr)',
      'Bring your passport, ARC card, enrollment certificate (재학증명서), and one photo',
      'Fill out the application for part-time work permission (시간제취업허가 신청서)',
      'Processing typically takes 1–2 weeks — apply early before you start job hunting',
      'Once approved, your ARC card is updated with work authorization',
      'Show your ARC card to your employer before starting work',
    ],
    s4Title: 'Types of Part-Time Jobs Available',
    s4P: 'These are the most common part-time jobs for international students in Korea. Korean language ability greatly increases your options.',
    s4Items: [
      {
        label: 'Convenience Store (편의점)',
        desc: 'CU, GS25, 7-Eleven. Basic Korean required. One of the most foreigner-friendly options. Night shifts often easier to get.',
      },
      {
        label: 'Cafe / Coffee Shop',
        desc: 'Starbucks, Ediya, local cafes. Some require conversational Korean, others are more flexible. Popular among students.',
      },
      {
        label: 'Restaurant / Food Service',
        desc: 'Kitchen prep or serving. Korean language ability varies by location — some tourist areas hire without Korean.',
      },
      {
        label: 'English Tutoring / Teaching',
        desc: 'Private tutoring for Korean students. High demand, flexible hours, and good pay (₩25,000–₩50,000/hr). No Korean needed.',
      },
      {
        label: 'University TA / Research Assistant',
        desc: 'Available through your university department. Good pay and relevant experience. Requires academic standing.',
      },
      {
        label: 'Delivery / Logistics',
        desc: 'Warehouse packing at Coupang or similar. Physical work, minimal language required. Good hourly rate.',
      },
    ],
    s5Title: 'Where to Find Part-Time Jobs in Korea',
    s5P: 'These are the main platforms and resources for finding part-time work as a foreigner in Korea.',
    s5Items: [
      'Albamon (알바몬, albamon.com) — Korea\'s largest part-time job board. Most listings are in Korean.',
      'Albacheon (알바천국, alba.co.kr) — Similar to Albamon, widely used.',
      'Your university international office — Many schools have foreigner-friendly job listings.',
      'University Facebook groups and Kakao open chats — Fellow students often share job leads.',
      'Seoul Global Center (global.seoul.go.kr) — English-language resources for foreigners.',
      'Wanted (wanted.co.kr) — Useful for English-speaking or skilled part-time work.',
    ],
    s6Title: 'What You Need to Start Working',
    s6P: 'Before applying for jobs, make sure you have everything employers will ask for.',
    s6Items: [
      'ARC card with work permit stamped — employers are required to check this',
      'Korean phone number — essential for job applications and communication',
      'Korean bank account — for receiving your salary',
      'Basic Korean (for most service jobs) — even a little Korean helps a lot',
      'Enrollment certificate (재학증명서) — some employers request this',
    ],
    s7Title: 'Tips for Getting Hired',
    s7P: 'A few practical things that will help you land a part-time job faster.',
    s7Items: [
      'Apply in person — visiting the store directly often works better than online applications',
      'Go during off-peak hours (weekday afternoons) when managers have time to talk',
      'Prepare a simple Korean self-introduction — even a few sentences shows effort',
      'Start with convenience stores or campus jobs — most foreigner-friendly',
      'Ask your international office — they often know which local businesses hire foreigners',
      'Be upfront about your visa and work permit — reputable employers will want to see it',
    ],
    warnTitle: '⚠️ Important: Do Not Work Without a Permit',
    warnItems: [
      'Working without a valid work permit is a visa violation — even one shift counts',
      'Penalties include fines up to ₩10,000,000, forced departure, and visa bans',
      'Your employer can also be fined — many employers know this and will refuse to hire without a permit',
      'Always get your permit sorted before you start applying for jobs',
    ],
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'Can I work in Korea with a D-2 student visa?',
    faq1A: 'Yes, but only after obtaining a part-time work permit (시간제취업허가) from immigration. Undergraduate students can work up to 20 hours per week during semester, and unlimited hours during vacation. Apply at your nearest immigration office or online via HiKorea.',
    faq2Q: 'How much is minimum wage in Korea in 2026?',
    faq2A: 'The minimum wage in Korea in 2026 is ₩10,320 per hour. Most part-time jobs in convenience stores, cafes, and restaurants will pay this rate. English tutoring and skilled jobs typically pay significantly more.',
    faq3Q: 'Do I need to speak Korean to get a part-time job?',
    faq3A: 'For most service jobs like convenience stores and restaurants, at least basic Korean is helpful. However, English tutoring, some campus jobs, and certain warehouse roles can be done without Korean. The more Korean you speak, the more options you have.',
    faq4Q: 'Can I work during vacation in Korea as a student?',
    faq4A: 'Yes. D-2 visa holders can work unlimited hours during official vacation periods (winter and summer breaks). You still need your work permit — the hour limit is just lifted during vacations.',
    faq5Q: 'What happens if I work without a work permit?',
    faq5A: 'Working without a permit is a violation of your visa conditions. Penalties can include fines of up to ₩10,000,000, deportation, and bans from re-entering Korea. It also creates problems for your employer. Always get your permit before working.',
    finalTitle: 'Summary',
    finalP: 'Working part-time in Korea as an international student is absolutely possible — just make sure you do it legally. Get your work permit first, stay within your hour limits during semester, and use the right platforms to find jobs. With the 2026 minimum wage at ₩10,320/hour, even a part-time job can meaningfully support your living expenses in Korea.',
  },
  zh: {
    eyebrow: '工作 / 收入',
    heroTitle: '韩国留学生打工完全指南（2026年）',
    heroLead:
      '许多在韩留学生希望在学习期间赚些生活费——这完全可以实现。但未获得正式许可就打工可能导致罚款或被驱逐出境。本指南涵盖2026年在韩合法兼职工作所需了解的全部内容。',
    disclaimerNote:
      '签证和劳动法规随时可能变化。开始工作前，请务必向所在大学的国际学生处或韩国出入境管理事务所确认最新要求。',
    quickAnswerTitle: '简要回答',
    quickAnswerText:
      '是的，在韩留学生可以兼职打工——但必须持有有效的工作许可。大多数D-2签证持有者在学期间每周最多可工作20小时，假期无限制。开始工作前，必须通过出入境管理局申请兼职工作许可（시간제취업허가）。2026年韩国最低时薪为₩10,320。',
    s1Title: '留学生可以在韩国打工吗？',
    s1P: '可以——但规定因签证类型而异。未经授权工作是严重违规行为，可能影响您在韩国的居留资格。',
    s1Items: [
      { label: 'D-2签证（学生）', desc: '最常见的学生签证。获得工作许可后可兼职。本科生学期间每周最多20小时，研究生最多30小时，假期不限。' },
      { label: 'D-4签证（语言进修）', desc: '适用于语言学校学生。学习6个月后凭工作许可可兼职，一般每周最多20小时。' },
      { label: '其他签证', desc: 'F系列签证（F-2、F-4、F-6）通常允许不受限制地工作。请向学校或出入境管理局确认您的具体签证条件。' },
    ],
    s2Title: '每周可以工作多少小时？',
    s2P: '工作时间限制取决于您的签证类型以及当前是学期还是假期。',
    s2Items: [
      { visa: 'D-2（本科）', hours: '学期最多20小时/周 · 假期不限', note: '需要工作许可' },
      { visa: 'D-2（研究生）', hours: '学期最多30小时/周 · 假期不限', note: '需要工作许可' },
      { visa: 'D-4（语言学校）', hours: '6个月后每周最多20小时', note: '需要工作许可' },
      { visa: 'F-2 / F-4 / F-6', hours: '无限制', note: '无需许可' },
    ],
    s3Title: '如何申请工作许可',
    s3P: '开始任何工作前，必须先从韩国出入境管理局获得兼职工作许可（시간제취업허가）。以下是申请流程。',
    s3Steps: [
      '前往最近的出入境管理事务所，或通过HiKorea（hikorea.go.kr）在线申请',
      '携带护照、外国人登录证、在学证明（재학증명서）和一张近照',
      '填写兼职工作许可申请表（시간제취업허가 신청서）',
      '审核通常需要1-2周——建议在求职前提前申请',
      '获批后，您的外国人登录证将更新工作授权信息',
      '开始工作前，向雇主出示您的外国人登录证',
    ],
    s4Title: '可选择的兼职工作类型',
    s4P: '以下是在韩留学生最常见的兼职工作。韩语能力越强，选择越多。',
    s4Items: [
      { label: '便利店（편의점）', desc: 'CU、GS25、7-Eleven等。需要基本韩语。对外国人较友好，夜班更容易获得。' },
      { label: '咖啡厅', desc: '星巴克、Ediya等连锁或独立咖啡厅。部分需要会话韩语，留学生中很受欢迎。' },
      { label: '餐厅/餐饮', desc: '备餐或服务员。韩语要求因地点而异——旅游区有时无需韩语。' },
      { label: '英语辅导/教学', desc: '为韩国学生提供私教。需求量大、时间灵活、薪酬较高（₩25,000-₩50,000/小时）。无需韩语。' },
      { label: '大学助教/研究助理', desc: '通过所在院系申请。薪资较好且有助于职业发展，需要良好的学业成绩。' },
      { label: '配送/仓储', desc: 'Coupang等平台的仓库分拣工作。体力劳动为主，对语言要求较低，时薪较高。' },
    ],
    s5Title: '在哪里找兼职工作',
    s5P: '以下是在韩外国人求职的主要平台和资源。',
    s5Items: [
      '알바몬（albamon.com）——韩国最大的兼职招聘平台，大多数招聘信息为韩语。',
      '알바천국（alba.co.kr）——与알바몬类似，使用广泛。',
      '学校国际学生处——许多学校有面向外国人的职位信息。',
      '大学Facebook群组和KakaoTalk群——同学间经常分享求职信息。',
      '首尔全球中心（global.seoul.go.kr）——提供英文外国人资源。',
      'Wanted（wanted.co.kr）——适合英语或技能性兼职工作。',
    ],
    s6Title: '开始工作前需要准备什么',
    s6P: '在申请工作之前，请确保您准备好雇主会要求的所有材料。',
    s6Items: [
      '已盖章工作许可的外国人登录证——雇主有义务核查',
      '韩国手机号——求职和沟通必备',
      '韩国银行账户——用于接收工资',
      '基本韩语能力（大多数服务类岗位）——哪怕一点点韩语也很有帮助',
      '在学证明（재학증명서）——部分雇主会要求提供',
    ],
    s7Title: '求职小技巧',
    s7P: '以下几点实用建议，帮助您更快找到兼职工作。',
    s7Items: [
      '直接上门求职——亲自去店里通常比网上申请效果更好',
      '选择非高峰时段（工作日下午）前往，此时店长有时间交谈',
      '准备简单的韩语自我介绍——哪怕几句话也能展现诚意',
      '从便利店或校内工作开始——对外国人最为友好',
      '向国际学生处咨询——他们通常了解哪些当地商家愿意雇用外国人',
      '坦诚说明您的签证和工作许可情况——正规雇主会要求核查',
    ],
    warnTitle: '⚠️ 重要提示：未持许可请勿工作',
    warnItems: [
      '未持有效工作许可工作属于违反签证规定——哪怕只工作一班次也算',
      '处罚包括最高₩10,000,000罚款、强制遣返及禁止入境',
      '雇主也可能因此受罚——许多雇主因此拒绝雇用无许可的外国人',
      '求职前，请务必先办理好工作许可',
    ],
    faqTitle: '常见问题',
    faq1Q: '持D-2学生签证可以在韩国打工吗？',
    faq1A: '可以，但必须先从出入境管理局获得兼职工作许可（시간제취업허가）。本科生学期间每周最多工作20小时，假期不限。可前往最近的出入境管理事务所或通过HiKorea在线申请。',
    faq2Q: '2026年韩国最低时薪是多少？',
    faq2A: '2026年韩国最低时薪为₩10,320。大多数便利店、咖啡厅、餐厅的兼职工作均按此标准支付。英语辅导和技能性工作的薪酬通常更高。',
    faq3Q: '不会韩语能在韩国找到兼职工作吗？',
    faq3A: '对于便利店、餐厅等大多数服务类工作，基本韩语会很有帮助。但英语辅导、部分校内工作及仓储岗位不需要韩语。韩语越好，选择越多。',
    faq4Q: '假期期间留学生可以全天工作吗？',
    faq4A: '可以。D-2签证持有者在正式假期（寒暑假）期间可无限制工作。仍需持有工作许可——假期期间只是取消了小时数限制。',
    faq5Q: '没有工作许可打工会有什么后果？',
    faq5A: '未持许可工作属于违反签证规定，可能面临最高₩10,000,000的罚款、被驱逐出境及禁止再次入境韩国。同时也会给雇主带来麻烦。请务必先办理好工作许可。',
    finalTitle: '总结',
    finalP: '作为留学生在韩国打工完全可行——只需确保合法进行。先办理工作许可，学期内遵守工时限制，利用正确的平台求职。2026年最低时薪为₩10,320/小时，即使是兼职也能为您在韩国的生活提供有力支持。',
  },
  ru: {
    eyebrow: 'Работа / Заработок',
    heroTitle: 'Подработка в Корее для иностранных студентов (2026)',
    heroLead:
      'Многие иностранные студенты в Корее хотят подрабатывать во время учёбы — и это возможно. Однако работа без надлежащего разрешения может привести к штрафам или депортации. Этот гайд охватывает всё, что нужно знать о легальной подработке в Корее в 2026 году.',
    disclaimerNote:
      'Визовые и трудовые правила могут меняться. Перед началом работы обязательно уточните актуальные требования в международном отделе вашего университета или в Службе иммиграции Кореи.',
    quickAnswerTitle: 'Коротко о главном',
    quickAnswerText:
      'Да, иностранные студенты в Корее могут подрабатывать — но только при наличии действующего разрешения на работу. Большинство владельцев визы D-2 могут работать до 20 часов в неделю в течение семестра и без ограничений во время каникул. Перед началом работы необходимо получить разрешение на частичную занятость (시간제취업허가) через иммиграционную службу. Минимальная заработная плата в Корее в 2026 году составляет ₩10 320 в час.',
    s1Title: 'Могут ли иностранные студенты работать в Корее?',
    s1P: 'Да — но правила зависят от типа визы. Работа без надлежащего разрешения является серьёзным нарушением, которое может повлиять на ваш статус в Корее.',
    s1Items: [
      { label: 'Виза D-2 (студенческая)', desc: 'Наиболее распространённая студенческая виза. Подработка разрешена после получения разрешения на работу. Студенты-бакалавры — до 20 ч/нед в семестре, магистры — до 30 ч/нед, в каникулы без ограничений.' },
      { label: 'Виза D-4 (языковые курсы)', desc: 'Для студентов языковых школ. Подработка разрешена с разрешением на работу после 6 месяцев обучения, как правило до 20 ч/нед.' },
      { label: 'Другие визы', desc: 'Визы серии F (F-2, F-4, F-6) как правило не имеют ограничений на работу. Уточняйте условия своей визы в университете или иммиграционном офисе.' },
    ],
    s2Title: 'Сколько часов в неделю можно работать?',
    s2P: 'Ограничения по часам зависят от типа визы и периода — семестр или каникулы.',
    s2Items: [
      { visa: 'D-2 (бакалавр)', hours: 'До 20 ч/нед (семестр) · Без ограничений (каникулы)', note: 'Нужно разрешение' },
      { visa: 'D-2 (магистр/аспирант)', hours: 'До 30 ч/нед (семестр) · Без ограничений (каникулы)', note: 'Нужно разрешение' },
      { visa: 'D-4 (языковая школа)', hours: 'До 20 ч/нед (после 6 месяцев)', note: 'Нужно разрешение' },
      { visa: 'F-2 / F-4 / F-6', hours: 'Без ограничений', note: 'Разрешение не нужно' },
    ],
    s3Title: 'Как получить разрешение на работу в Корее',
    s3P: 'Перед началом любой работы необходимо получить разрешение на частичную занятость (시간제취업허가) в Службе иммиграции Кореи. Вот как это сделать.',
    s3Steps: [
      'Обратитесь в ближайший иммиграционный офис или подайте заявку онлайн через HiKorea (hikorea.go.kr)',
      'Возьмите с собой паспорт, карту ARC, справку о зачислении (재학증명서) и одну фотографию',
      'Заполните заявление на разрешение частичной занятости (시간제취업허가 신청서)',
      'Рассмотрение обычно занимает 1–2 недели — подавайте заранее, до начала поиска работы',
      'После одобрения в вашу карту ARC вносится отметка о разрешении на работу',
      'Покажите карту ARC работодателю перед началом работы',
    ],
    s4Title: 'Виды доступных подработок',
    s4P: 'Вот наиболее распространённые варианты подработки для иностранных студентов в Корее. Знание корейского языка значительно расширяет возможности.',
    s4Items: [
      { label: 'Продуктовые магазины / convenience store (편의점)', desc: 'CU, GS25, 7-Eleven. Нужен базовый корейский. Один из наиболее дружелюбных к иностранцам форматов. Ночные смены легче получить.' },
      { label: 'Кафе / кофейня', desc: 'Starbucks, Ediya, небольшие кофейни. Требования к корейскому языку варьируются. Популярно среди студентов.' },
      { label: 'Ресторан / общественное питание', desc: 'Работа на кухне или обслуживание. Требования к языку зависят от места — в туристических районах иногда берут и без корейского.' },
      { label: 'Репетиторство по английскому', desc: 'Высокий спрос, гибкий график, хорошая оплата (₩25 000–₩50 000/ч). Знание корейского не требуется.' },
      { label: 'Ассистент преподавателя / научный ассистент', desc: 'Через кафедру вашего университета. Хорошая оплата и полезный опыт. Требуется хорошая успеваемость.' },
      { label: 'Доставка / склад', desc: 'Упаковка на складе Coupang и аналогичных платформ. Физический труд, минимальные языковые требования, высокая почасовая ставка.' },
    ],
    s5Title: 'Где искать подработку в Корее',
    s5P: 'Основные платформы и ресурсы для поиска работы иностранцем в Корее.',
    s5Items: [
      'Albamon (알바몬, albamon.com) — крупнейшая площадка подработки в Корее. Большинство вакансий на корейском.',
      'Albacheon (알바천국, alba.co.kr) — аналог Albamon, широко используется.',
      'Международный отдел вашего университета — многие вузы имеют базы вакансий для иностранных студентов.',
      'Facebook-группы и KakaoTalk-чаты университета — студенты часто делятся вакансиями.',
      'Seoul Global Center (global.seoul.go.kr) — ресурсы на английском языке для иностранцев.',
      'Wanted (wanted.co.kr) — полезен для поиска англоязычной или квалифицированной подработки.',
    ],
    s6Title: 'Что нужно для начала работы',
    s6P: 'Перед тем как откликаться на вакансии, убедитесь, что у вас есть всё необходимое.',
    s6Items: [
      'Карта ARC с отметкой о разрешении на работу — работодатели обязаны это проверять',
      'Корейский номер телефона — обязателен для подачи заявок и связи',
      'Корейский банковский счёт — для получения зарплаты',
      'Базовое знание корейского (для большинства сервисных работ) — даже минимум сильно помогает',
      'Справка о зачислении (재학증명서) — некоторые работодатели могут её запросить',
    ],
    s7Title: 'Советы по поиску работы',
    s7P: 'Несколько практических советов, которые помогут найти подработку быстрее.',
    s7Items: [
      'Приходите лично — визит в магазин зачастую эффективнее онлайн-заявки',
      'Приходите в будние дни после обеда, когда у менеджера есть время',
      'Подготовьте краткое самопредставление на корейском — даже пара фраз произведёт хорошее впечатление',
      'Начните с магазинов у дома или студенческих вакансий — там лояльнее к иностранцам',
      'Уточните в международном отделе — там обычно знают, кто из местных работодателей берёт иностранцев',
      'Честно расскажите о визе и разрешении на работу — добросовестный работодатель обязательно это проверит',
    ],
    warnTitle: '⚠️ Важно: не работайте без разрешения',
    warnItems: [
      'Работа без действующего разрешения — нарушение условий визы, даже одна смена имеет значение',
      'Штрафы достигают ₩10 000 000, возможны принудительный выезд и запрет на въезд',
      'Работодателя также могут оштрафовать — многие поэтому отказываются брать иностранцев без разрешения',
      'Сначала оформите разрешение — и только потом ищите работу',
    ],
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Можно ли работать в Корее с визой D-2?',
    faq1A: 'Да, но только после получения разрешения на частичную занятость (시간제취업허가) в иммиграционной службе. Студенты-бакалавры могут работать до 20 часов в неделю в семестре, в каникулы без ограничений. Подать заявку можно в ближайшем иммиграционном офисе или онлайн через HiKorea.',
    faq2Q: 'Какова минимальная зарплата в Корее в 2026 году?',
    faq2A: 'Минимальная почасовая оплата труда в Корее в 2026 году составляет ₩10 320. Большинство подработок в магазинах, кафе и ресторанах оплачиваются по этой ставке. За репетиторство и квалифицированную работу платят значительно больше.',
    faq3Q: 'Можно ли найти подработку в Корее без знания корейского?',
    faq3A: 'Для большинства сервисных работ (магазины, рестораны) базовый корейский очень желателен. Однако репетиторство по английскому, часть университетских вакансий и некоторые складские должности не требуют корейского. Чем лучше корейский — тем больше выбор.',
    faq4Q: 'Могу ли я работать полный день в каникулы?',
    faq4A: 'Да. Владельцы визы D-2 могут работать без ограничений по часам в официальные каникулы (летние и зимние). Разрешение на работу при этом всё равно необходимо — в каникулы просто снимается лимит часов.',
    faq5Q: 'Что будет, если работать без разрешения?',
    faq5A: 'Это нарушение условий визы. Возможные последствия — штраф до ₩10 000 000, депортация и запрет на въезд в Корею. Работодателя также могут оштрафовать. Всегда оформляйте разрешение заранее.',
    finalTitle: 'Итог',
    finalP: 'Работать неполный рабочий день в Корее как иностранный студент вполне реально — главное делать это законно. Сначала получите разрешение на работу, соблюдайте лимит часов в семестре и используйте правильные платформы для поиска. При минимальной ставке ₩10 320 в час даже подработка способна существенно помочь с расходами на жизнь в Корее.',
  },
  ja: {
    eyebrow: '仕事 / 収入',
    heroTitle: '韓国で留学生がアルバイトする方法（2026年版完全ガイド）',
    heroLead:
      '韓国に留学中にアルバイトをしたいと考えている人は多いでしょう。それは可能です。ただし、正式な許可なく働くと罰金や強制帰国になる可能性があります。このガイドでは、2026年に韓国で合法的にアルバイトするために必要なすべての情報を解説します。',
    disclaimerNote:
      'ビザや労働に関するルールは変更されることがあります。アルバイトを始める前に、必ず大学の国際学生センターまたは韓国出入国管理庁で最新の要件を確認してください。',
    quickAnswerTitle: 'ひと言で言うと',
    quickAnswerText:
      'はい、韓国の留学生はアルバイトができます——ただし有効な就労許可が必要です。D-2ビザ保有者のほとんどは、学期中は週20時間まで、休暇期間中は時間無制限で働くことができます。働き始める前に、入国管理局を通じてアルバイト就労許可（시간제취업허가）を申請する必要があります。2026年の韓国の最低賃金は時給₩10,320です。',
    s1Title: '留学生は韓国で働けますか？',
    s1P: 'はい——ただしルールはビザの種類によって異なります。正式な許可なく働くことは重大な違反であり、在留資格に影響する可能性があります。',
    s1Items: [
      { label: 'D-2ビザ（学生）', desc: '最も一般的な学生ビザ。就労許可取得後にアルバイト可能。学部生は学期中週20時間まで、大学院生は週30時間まで。休暇中は無制限。' },
      { label: 'D-4ビザ（語学研修）', desc: '語学学校の学生向け。6ヶ月の学習後、就労許可を取得することで週20時間までアルバイト可能。' },
      { label: 'その他のビザ', desc: 'Fシリーズビザ（F-2、F-4、F-6）は一般的に就労制限なし。具体的な条件は大学または入国管理局で確認してください。' },
    ],
    s2Title: '週何時間働けますか？',
    s2P: '労働時間の制限はビザの種類と学期中・休暇中によって異なります。',
    s2Items: [
      { visa: 'D-2（学部生）', hours: '学期中：週20時間まで · 休暇中：無制限', note: '就労許可が必要' },
      { visa: 'D-2（大学院生）', hours: '学期中：週30時間まで · 休暇中：無制限', note: '就労許可が必要' },
      { visa: 'D-4（語学学校）', hours: '6ヶ月後：週20時間まで', note: '就労許可が必要' },
      { visa: 'F-2 / F-4 / F-6', hours: '制限なし', note: '許可不要' },
    ],
    s3Title: '就労許可の取り方',
    s3P: '仕事を始める前に、韓国出入国管理庁からアルバイト就労許可（시간제취업허가）を取得する必要があります。手続きの流れは以下のとおりです。',
    s3Steps: [
      '最寄りの出入国管理事務所を訪問するか、HiKorea（hikorea.go.kr）からオンライン申請',
      'パスポート、外国人登録証（ARCカード）、在学証明書（재학증명서）、写真1枚を持参',
      'アルバイト就労許可申請書（시간제취업허가 신청서）を記入・提出',
      '審査には通常1〜2週間かかります——求職活動の前に早めに申請してください',
      '承認後、ARCカードに就労許可の記載が更新されます',
      '働き始める前に雇用主にARCカードを提示してください',
    ],
    s4Title: 'アルバイトの種類',
    s4P: '韓国の留学生に人気のアルバイトを紹介します。韓国語力があるほど選択肢が広がります。',
    s4Items: [
      { label: 'コンビニ（편의점）', desc: 'CU、GS25、7-Elevenなど。基本的な韓国語が必要。外国人に比較的寛容なバイト先のひとつ。夜勤は採用されやすい。' },
      { label: 'カフェ', desc: 'スターバックス、Ediyaなど。韓国語のレベルは店によって異なる。学生に人気。' },
      { label: 'レストラン/飲食店', desc: 'キッチンやホールスタッフ。韓国語の必要レベルは場所による——観光地なら韓国語なしで働ける場合も。' },
      { label: '英語家庭教師・個人指導', desc: '韓国人学生向けの個別指導。需要が高く、柔軟な勤務時間、高めの報酬（時給₩25,000〜₩50,000）。韓国語不要。' },
      { label: 'TA（ティーチングアシスタント）・研究補助', desc: '大学の学科を通じて応募。高い報酬と有益な経験が得られる。学業成績が必要。' },
      { label: '配送・倉庫作業', desc: 'Coupangなどの倉庫でのピッキング作業。体力仕事だが言語要件は低め。時給は高め。' },
    ],
    s5Title: 'アルバイトの探し方',
    s5P: '韓国で外国人がアルバイトを探す主なプラットフォームとリソースです。',
    s5Items: [
      'アルバモン（알바몬、albamon.com）——韓国最大のアルバイト求人サイト。ほとんどの求人は韓国語。',
      'アルバチョングク（알바천국、alba.co.kr）——알바몬と同様、広く使われています。',
      '大学の国際学生センター——多くの大学が外国人向け求人を掲載しています。',
      '大学のFacebookグループやKakaoトークオープンチャット——学生同士で求人情報を共有することが多い。',
      'ソウルグローバルセンター（global.seoul.go.kr）——外国人向け英語リソースあり。',
      'Wanted（wanted.co.kr）——英語対応または専門スキルを活かした求人を探す場合に便利。',
    ],
    s6Title: '仕事を始めるために必要なもの',
    s6P: '求人に応募する前に、雇用主に提示できるものを揃えておきましょう。',
    s6Items: [
      '就労許可のスタンプが押されたARCカード——雇用主は確認義務があります',
      '韓国の携帯電話番号——応募や連絡に必須',
      '韓国の銀行口座——給与受け取りに必要',
      '基本的な韓国語（ほとんどのサービス業）——少しでも話せると大きく違います',
      '在学証明書（재학증명서）——要求する雇用主もいます',
    ],
    s7Title: '採用されるためのコツ',
    s7P: 'アルバイトを早く見つけるための実践的なアドバイスです。',
    s7Items: [
      '直接お店に行く——ネット応募よりも直接訪問のほうが効果的なことが多い',
      '平日の午後（ピーク外の時間）に訪問すると、店長に話す時間がある',
      '簡単な韓国語の自己紹介を準備する——数文でも誠意が伝わります',
      'まずコンビニやキャンパス内の仕事から始める——外国人に最も寛容です',
      '国際学生センターに相談する——外国人を雇う地元の事業主を知っていることが多い',
      'ビザと就労許可について正直に話す——まともな雇用主は必ず確認します',
    ],
    warnTitle: '⚠️ 重要：許可なしで働かないでください',
    warnItems: [
      '有効な就労許可なしで働くことはビザ違反です——たった1シフトでも対象になります',
      '罰金は最大₩10,000,000、強制出国および入国禁止になる可能性があります',
      '雇用主も罰せられる可能性があります——そのため許可のない外国人の採用を断る事業主が多いです',
      '必ず先に許可を取ってから求職活動を始めてください',
    ],
    faqTitle: 'よくある質問',
    faq1Q: 'D-2学生ビザで韓国でアルバイトできますか？',
    faq1A: 'はい、ただし入国管理局からアルバイト就労許可（시간제취업허가）を取得してからになります。学部生は学期中週20時間まで、休暇中は無制限で働けます。最寄りの出入国管理事務所、またはHiKoreaオンラインで申請できます。',
    faq2Q: '2026年の韓国の最低賃金はいくらですか？',
    faq2A: '2026年の韓国の最低時給は₩10,320です。コンビニ・カフェ・飲食店のほとんどのアルバイトはこの金額が基準です。英語家庭教師やスキルを要する仕事はそれ以上の報酬が一般的です。',
    faq3Q: '韓国語なしでアルバイトを見つけられますか？',
    faq3A: 'コンビニやレストランなどほとんどのサービス業では基本的な韓国語があると便利です。ただし英語指導・一部の大学内業務・倉庫作業は韓国語なしでもOKです。韓国語が話せるほど選択肢は広がります。',
    faq4Q: '休暇中はフルタイムで働けますか？',
    faq4A: 'はい。D-2ビザ保有者は公式の休暇期間（冬休み・夏休み）中は時間の制限なく働けます。就労許可は引き続き必要ですが、休暇中は時間の上限がなくなります。',
    faq5Q: '許可なしで働くとどうなりますか？',
    faq5A: 'ビザの条件違反となります。罰金は最大₩10,000,000、強制帰国、韓国への入国禁止になる可能性があります。雇用主も罰せられる場合があります。必ず事前に就労許可を取得してください。',
    finalTitle: 'まとめ',
    finalP: '外国人留学生として韓国でアルバイトをすることは十分可能です——合法的に行えば問題ありません。まず就労許可を取得し、学期中は時間の制限を守り、適切なプラットフォームを使って仕事を探しましょう。2026年の最低時給は₩10,320で、アルバイトでも韓国での生活費を大きくサポートできます。',
  },
  vi: {
    eyebrow: 'Công việc / Thu nhập',
    heroTitle: 'Làm thêm ở Hàn Quốc cho Du học sinh (Hướng dẫn 2026)',
    heroLead:
      'Nhiều du học sinh ở Hàn Quốc muốn kiếm thêm thu nhập trong khi học — và điều đó hoàn toàn có thể. Tuy nhiên, làm việc không có giấy phép có thể dẫn đến phạt tiền hoặc trục xuất. Hướng dẫn này bao gồm tất cả những gì bạn cần biết về làm thêm hợp pháp tại Hàn Quốc năm 2026.',
    disclaimerNote:
      'Quy định về visa và lao động có thể thay đổi. Luôn xác nhận các yêu cầu hiện hành với văn phòng quốc tế của trường hoặc Cục Quản lý Xuất nhập cảnh Hàn Quốc trước khi bắt đầu làm việc.',
    quickAnswerTitle: 'Trả lời nhanh',
    quickAnswerText:
      'Có, du học sinh ở Hàn Quốc có thể làm thêm — nhưng chỉ khi có giấy phép lao động hợp lệ. Hầu hết người có visa D-2 có thể làm tối đa 20 giờ/tuần trong học kỳ và không giới hạn trong kỳ nghỉ. Bạn phải xin giấy phép làm thêm bán thời gian (시간제취업허가) qua cơ quan xuất nhập cảnh trước khi bắt đầu làm việc. Lương tối thiểu ở Hàn Quốc năm 2026 là ₩10.320/giờ.',
    s1Title: 'Du học sinh có được làm việc ở Hàn Quốc không?',
    s1P: 'Có — nhưng quy định phụ thuộc vào loại visa. Làm việc không có phép là vi phạm nghiêm trọng có thể ảnh hưởng đến tư cách lưu trú của bạn.',
    s1Items: [
      { label: 'Visa D-2 (Du học sinh)', desc: 'Visa học sinh phổ biến nhất. Cho phép làm thêm sau khi có giấy phép lao động. Sinh viên đại học: tối đa 20 giờ/tuần trong học kỳ, cao học: 30 giờ/tuần. Không giới hạn trong kỳ nghỉ.' },
      { label: 'Visa D-4 (Học tiếng Hàn)', desc: 'Dành cho học sinh trường ngôn ngữ. Được phép làm thêm với giấy phép lao động sau 6 tháng học, thường tối đa 20 giờ/tuần.' },
      { label: 'Các visa khác', desc: 'Visa dòng F (F-2, F-4, F-6) thường không hạn chế làm việc. Luôn xác nhận điều kiện visa cụ thể của bạn với trường hoặc văn phòng xuất nhập cảnh.' },
    ],
    s2Title: 'Được làm bao nhiêu giờ mỗi tuần?',
    s2P: 'Giới hạn giờ làm phụ thuộc vào loại visa và thời điểm trong học kỳ hay kỳ nghỉ.',
    s2Items: [
      { visa: 'D-2 (Đại học)', hours: 'Tối đa 20 giờ/tuần (học kỳ) · Không giới hạn (kỳ nghỉ)', note: 'Cần giấy phép' },
      { visa: 'D-2 (Sau đại học)', hours: 'Tối đa 30 giờ/tuần (học kỳ) · Không giới hạn (kỳ nghỉ)', note: 'Cần giấy phép' },
      { visa: 'D-4 (Trường ngôn ngữ)', hours: 'Tối đa 20 giờ/tuần (sau 6 tháng)', note: 'Cần giấy phép' },
      { visa: 'F-2 / F-4 / F-6', hours: 'Không giới hạn', note: 'Không cần phép' },
    ],
    s3Title: 'Cách xin giấy phép lao động ở Hàn Quốc',
    s3P: 'Bạn phải xin giấy phép làm thêm bán thời gian (시간제취업허가) từ Cục Quản lý Xuất nhập cảnh Hàn Quốc trước khi bắt đầu bất kỳ công việc nào. Đây là quy trình.',
    s3Steps: [
      'Đến văn phòng xuất nhập cảnh gần nhất hoặc đăng ký trực tuyến qua HiKorea (hikorea.go.kr)',
      'Mang theo hộ chiếu, thẻ ARC, giấy xác nhận đang học (재학증명서) và một ảnh chân dung',
      'Điền đơn xin giấy phép làm thêm bán thời gian (시간제취업허가 신청서)',
      'Xử lý thường mất 1–2 tuần — nộp sớm trước khi tìm việc',
      'Sau khi được duyệt, thẻ ARC của bạn sẽ được cập nhật quyền làm việc',
      'Xuất trình thẻ ARC cho nhà tuyển dụng trước khi bắt đầu làm việc',
    ],
    s4Title: 'Các loại công việc làm thêm phổ biến',
    s4P: 'Đây là những công việc làm thêm phổ biến nhất dành cho du học sinh ở Hàn Quốc. Khả năng tiếng Hàn càng tốt, càng có nhiều lựa chọn.',
    s4Items: [
      { label: 'Cửa hàng tiện lợi (편의점)', desc: 'CU, GS25, 7-Eleven. Cần tiếng Hàn cơ bản. Là một trong những lựa chọn thân thiện nhất với người nước ngoài. Ca đêm dễ xin hơn.' },
      { label: 'Quán cà phê', desc: 'Starbucks, Ediya, quán địa phương. Yêu cầu tiếng Hàn khác nhau tùy nơi. Phổ biến với sinh viên.' },
      { label: 'Nhà hàng / Dịch vụ ăn uống', desc: 'Phụ bếp hoặc phục vụ. Yêu cầu ngôn ngữ tùy địa điểm — khu du lịch đôi khi tuyển không cần tiếng Hàn.' },
      { label: 'Gia sư tiếng Anh', desc: 'Nhu cầu cao, giờ làm linh hoạt, thu nhập tốt (₩25.000–₩50.000/giờ). Không cần tiếng Hàn.' },
      { label: 'Trợ giảng / Trợ lý nghiên cứu tại trường', desc: 'Thông qua khoa của bạn. Lương tốt và kinh nghiệm hữu ích. Yêu cầu học lực tốt.' },
      { label: 'Giao hàng / Kho bãi', desc: 'Đóng gói tại kho Coupang hoặc tương tự. Lao động thể chất, ít yêu cầu ngôn ngữ, lương giờ cao.' },
    ],
    s5Title: 'Tìm việc làm thêm ở đâu',
    s5P: 'Các nền tảng và nguồn tài nguyên chính để người nước ngoài tìm việc làm thêm ở Hàn Quốc.',
    s5Items: [
      'Albamon (알바몬, albamon.com) — Trang tuyển dụng bán thời gian lớn nhất Hàn Quốc. Hầu hết tin đăng bằng tiếng Hàn.',
      'Albacheon (알바천국, alba.co.kr) — Tương tự Albamon, được sử dụng rộng rãi.',
      'Văn phòng quốc tế của trường — Nhiều trường có danh sách việc làm dành cho sinh viên nước ngoài.',
      'Nhóm Facebook và KakaoTalk của trường — Sinh viên thường chia sẻ thông tin việc làm.',
      'Seoul Global Center (global.seoul.go.kr) — Tài nguyên tiếng Anh dành cho người nước ngoài.',
      'Wanted (wanted.co.kr) — Hữu ích cho việc làm thêm tiếng Anh hoặc kỹ năng chuyên môn.',
    ],
    s6Title: 'Những gì cần chuẩn bị trước khi đi làm',
    s6P: 'Trước khi ứng tuyển, hãy đảm bảo bạn có đầy đủ những gì nhà tuyển dụng sẽ yêu cầu.',
    s6Items: [
      'Thẻ ARC có đóng dấu giấy phép lao động — nhà tuyển dụng có nghĩa vụ kiểm tra',
      'Số điện thoại Hàn Quốc — cần thiết để ứng tuyển và liên lạc',
      'Tài khoản ngân hàng Hàn Quốc — để nhận lương',
      'Tiếng Hàn cơ bản (với hầu hết công việc dịch vụ) — dù ít cũng rất có ích',
      'Giấy xác nhận đang học (재학증명서) — một số nhà tuyển dụng yêu cầu',
    ],
    s7Title: 'Mẹo để được tuyển dụng',
    s7P: 'Một số lời khuyên thực tế giúp bạn tìm được việc làm thêm nhanh hơn.',
    s7Items: [
      'Đến trực tiếp — đến tận cửa hàng thường hiệu quả hơn ứng tuyển online',
      'Đến vào giờ thấp điểm (chiều ngày thường) khi quản lý có thời gian nói chuyện',
      'Chuẩn bị phần tự giới thiệu ngắn bằng tiếng Hàn — dù vài câu cũng thể hiện sự cố gắng',
      'Bắt đầu với cửa hàng tiện lợi hoặc việc làm trong khuôn viên trường — thân thiện nhất với người nước ngoài',
      'Hỏi văn phòng quốc tế — họ thường biết những doanh nghiệp địa phương nào tuyển người nước ngoài',
      'Thành thật về visa và giấy phép lao động của bạn — nhà tuyển dụng uy tín sẽ muốn kiểm tra',
    ],
    warnTitle: '⚠️ Quan trọng: Không làm việc khi chưa có giấy phép',
    warnItems: [
      'Làm việc không có giấy phép lao động hợp lệ là vi phạm visa — dù chỉ một ca làm việc cũng tính',
      'Hình phạt bao gồm phạt tiền đến ₩10.000.000, buộc xuất cảnh và cấm nhập cảnh',
      'Nhà tuyển dụng cũng có thể bị phạt — nhiều chủ lao động vì thế từ chối nhận người nước ngoài không có giấy phép',
      'Luôn lo xong giấy phép trước rồi mới tìm việc',
    ],
    faqTitle: 'Câu hỏi thường gặp',
    faq1Q: 'Tôi có thể làm việc ở Hàn Quốc với visa D-2 không?',
    faq1A: 'Có, nhưng chỉ sau khi xin được giấy phép làm thêm bán thời gian (시간제취업허가) từ cơ quan xuất nhập cảnh. Sinh viên đại học có thể làm tối đa 20 giờ/tuần trong học kỳ và không giới hạn trong kỳ nghỉ. Nộp đơn tại văn phòng xuất nhập cảnh gần nhất hoặc trực tuyến qua HiKorea.',
    faq2Q: 'Lương tối thiểu ở Hàn Quốc năm 2026 là bao nhiêu?',
    faq2A: 'Lương tối thiểu theo giờ ở Hàn Quốc năm 2026 là ₩10.320. Hầu hết công việc bán thời gian tại cửa hàng tiện lợi, quán cà phê và nhà hàng trả theo mức này. Gia sư và công việc kỹ năng thường được trả nhiều hơn đáng kể.',
    faq3Q: 'Không biết tiếng Hàn có tìm được việc làm thêm không?',
    faq3A: 'Với hầu hết công việc dịch vụ như cửa hàng tiện lợi và nhà hàng, tiếng Hàn cơ bản rất hữu ích. Tuy nhiên, gia sư tiếng Anh, một số việc trong khuôn viên trường và làm kho có thể làm mà không cần tiếng Hàn. Tiếng Hàn càng tốt thì càng nhiều lựa chọn.',
    faq4Q: 'Tôi có thể làm toàn thời gian trong kỳ nghỉ không?',
    faq4A: 'Có. Người có visa D-2 có thể làm không giới hạn giờ trong kỳ nghỉ chính thức (nghỉ đông và nghỉ hè). Bạn vẫn cần giấy phép lao động — chỉ là giới hạn giờ được bỏ trong kỳ nghỉ.',
    faq5Q: 'Làm việc không có giấy phép thì sao?',
    faq5A: 'Đây là vi phạm điều kiện visa. Hình phạt có thể gồm phạt tiền đến ₩10.000.000, trục xuất và cấm nhập cảnh Hàn Quốc. Nhà tuyển dụng cũng có thể bị phạt. Luôn xin giấy phép trước khi đi làm.',
    finalTitle: 'Tóm tắt',
    finalP: 'Làm thêm bán thời gian ở Hàn Quốc với tư cách du học sinh hoàn toàn khả thi — chỉ cần thực hiện đúng pháp luật. Xin giấy phép lao động trước, tuân thủ giới hạn giờ trong học kỳ và dùng đúng nền tảng để tìm việc. Với mức lương tối thiểu ₩10.320/giờ năm 2026, ngay cả công việc bán thời gian cũng có thể hỗ trợ đáng kể chi phí sinh hoạt tại Hàn Quốc.',
  },
};

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const url = `https://ksurvivalkit.com/${lang}/part-time-jobs-korea`;
  const m = META[(lang as L) in META ? (lang as L) : 'en'];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        en: 'https://ksurvivalkit.com/en/part-time-jobs-korea',
        zh: 'https://ksurvivalkit.com/zh/part-time-jobs-korea',
        ru: 'https://ksurvivalkit.com/ru/part-time-jobs-korea',
        ja: 'https://ksurvivalkit.com/ja/part-time-jobs-korea',
        vi: 'https://ksurvivalkit.com/vi/part-time-jobs-korea',
        'x-default': 'https://ksurvivalkit.com/en/part-time-jobs-korea',
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

export default async function PartTimeJobsKoreaPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const l: L = (lang as L) in CONTENT ? (lang as L) : 'en';
  const c = CONTENT[l];
  const pageUrl = `https://ksurvivalkit.com/${lang}/part-time-jobs-korea`;

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
      <ArticleHero eyebrow={c.eyebrow} title={c.heroTitle} lead={c.heroLead} />
      <PageDisclaimer type="general" />
      <main className="bg-slate-50 px-6 py-12">
        <article className="mx-auto max-w-4xl space-y-10">

          {/* Quick Answer */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">{c.quickAnswerTitle}</h2>
            <p className="mt-3 leading-7 text-slate-700">{c.quickAnswerText}</p>
          </section>

          {/* Can students work? */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s1Title}</h2>
            <p className="leading-7 text-slate-700">{c.s1P}</p>
            <div className="space-y-3">
              {c.s1Items.map((item, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="font-bold text-slate-800">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hours table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s2Title}</h2>
            <p className="leading-7 text-slate-700">{c.s2P}</p>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Visa</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Hours</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Permit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {c.s2Items.map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 font-medium text-slate-800">{row.visa}</td>
                      <td className="px-4 py-3 text-slate-600">{row.hours}</td>
                      <td className="px-4 py-3 text-slate-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Warning box */}
          <section className="rounded-xl border border-rose-200 bg-rose-50 p-5 space-y-2">
            <h2 className="font-bold text-rose-700">{c.warnTitle}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {c.warnItems.map((item, i) => (
                <li key={i} className="text-sm leading-6 text-rose-700">{item}</li>
              ))}
            </ul>
          </section>

          {/* How to get permit */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s3Title}</h2>
            <p className="leading-7 text-slate-700">{c.s3P}</p>
            <ol className="list-decimal space-y-2 pl-6 text-slate-700">
              {c.s3Steps.map((step, i) => <li key={i} className="leading-7">{step}</li>)}
            </ol>
          </section>

          {/* Job types */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s4Title}</h2>
            <p className="leading-7 text-slate-700">{c.s4P}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {c.s4Items.map((item, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="font-bold text-slate-800">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Where to find */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s5Title}</h2>
            <p className="leading-7 text-slate-700">{c.s5P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s5Items.map((item, i) => <li key={i} className="leading-7">{item}</li>)}
            </ul>
          </section>

          {/* What you need */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s6Title}</h2>
            <p className="leading-7 text-slate-700">{c.s6P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s6Items.map((item, i) => <li key={i} className="leading-7">{item}</li>)}
            </ul>
          </section>

          {/* Tips */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.s7Title}</h2>
            <p className="leading-7 text-slate-700">{c.s7P}</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              {c.s7Items.map((item, i) => <li key={i} className="leading-7">{item}</li>)}
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{c.faqTitle}</h2>
            <div className="space-y-5 text-slate-700">
              {[
                { q: c.faq1Q, a: c.faq1A },
                { q: c.faq2Q, a: c.faq2A },
                { q: c.faq3Q, a: c.faq3A },
                { q: c.faq4Q, a: c.faq4A },
                { q: c.faq5Q, a: c.faq5A },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
                  <h3 className="font-semibold text-slate-800">{faq.q}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
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

        <RelatedPosts lang={lang as string} current="part-time-jobs-korea" />
      </main>
    </>
  );
}
