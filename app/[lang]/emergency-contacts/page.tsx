import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';

type Props = { params: Promise<{ lang: string }> };
type L = 'en' | 'zh' | 'ru' | 'ja' | 'vi';
const loc = (lang: string, m: Record<L, string>) => m[lang as L] ?? m.en;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return {
    title: loc(lang, {
      en: 'Emergency Contacts in Korea | K-Survival Kit',
      zh: '韩国紧急联系电话 | K-Survival Kit',
      ru: 'Экстренные контакты в Корее | K-Survival Kit',
      ja: '韓国の緊急連絡先 | K-Survival Kit',
      vi: 'Liên lạc khẩn cấp tại Hàn Quốc | K-Survival Kit',
    }),
    description: loc(lang, {
      en: 'Essential emergency numbers and contacts for foreigners in Korea — hotlines, embassies, and government services.',
      zh: '在韩外国人必备紧急电话和联系方式——热线电话、大使馆及政府服务。',
      ru: 'Необходимые экстренные номера для иностранцев в Корее — горячие линии, посольства, госуслуги.',
      ja: '韓国在住外国人向け緊急連絡先 — ホットライン・大使館・政府サービス。',
      vi: 'Số điện thoại khẩn cấp thiết yếu và liên lạc cho người nước ngoài tại Hàn Quốc — đường dây nóng, đại sứ quán và dịch vụ chính phủ.',
    }),
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}/emergency-contacts`,
      languages: {
        en: 'https://ksurvivalkit.com/en/emergency-contacts',
        zh: 'https://ksurvivalkit.com/zh/emergency-contacts',
        ru: 'https://ksurvivalkit.com/ru/emergency-contacts',
        ja: 'https://ksurvivalkit.com/ja/emergency-contacts',
        vi: 'https://ksurvivalkit.com/vi/emergency-contacts',
      },
    },
  };
}

type Contact = {
  number: string;
  label: Record<L, string>;
  desc: Record<L, string>;
  available: Record<L, string>;
  note?: Record<L, string>;
};
type ContactSection = {
  icon: string;
  title: Record<L, string>;
  color: string;
  bg: string;
  border: string;
  contacts: Contact[];
};

const CONTACT_SECTIONS: ContactSection[] = [
  {
    icon: '🚨',
    title: {
      en: 'Core Emergency Numbers',
      zh: '核心紧急电话',
      ru: 'Основные экстренные номера',
      ja: '主要緊急番号',
      vi: 'Số khẩn cấp cốt lõi',
    },
    color: 'text-red-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
    contacts: [
      {
        number: '119',
        label: {
          en: 'Ambulance / Fire (소방·구급)',
          zh: '救护车 / 消防 (소방·구급)',
          ru: 'Скорая / Пожарная (소방·구급)',
          ja: '救急・消防 (소방·구급)',
          vi: 'Cứu thương / Chữa cháy (소방·구급)',
        },
        desc: {
          en: 'Fire and rescue, ambulance request. Some English interpretation available.',
          zh: '火灾报警、救护车请求。部分情况下可提供英语口译。',
          ru: 'Пожар и спасение, вызов скорой помощи. Возможна интерпретация на английском.',
          ja: '火災・救急の通報。英語通訳サービスあり。',
          vi: 'Chữa cháy và cứu hộ, yêu cầu xe cứu thương. Có phiên dịch tiếng Anh.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
        note: {
          en: 'English interpreter available',
          zh: '可连线英语口译',
          ru: 'Доступен переводчик на английский',
          ja: '英語通訳連絡可能',
          vi: 'Có phiên dịch tiếng Anh',
        },
      },
      {
        number: '112',
        label: {
          en: 'Police (경찰)',
          zh: '警察 (경찰)',
          ru: 'Полиция (경찰)',
          ja: '警察 (경찰)',
          vi: 'Cảnh sát (경찰)',
        },
        desc: {
          en: 'Crime reporting, police dispatch for urgent situations.',
          zh: '犯罪举报、紧急情况警察出动请求。',
          ru: 'Сообщение о преступлениях, вызов полиции в экстренных ситуациях.',
          ja: '犯罪の通報、緊急時の警察出動要請。',
          vi: 'Báo tội phạm, điều động cảnh sát trong tình huống khẩn cấp.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
        note: {
          en: 'English interpreter available',
          zh: '可连线英语口译',
          ru: 'Доступен переводчик на английский',
          ja: '英語通訳連絡可能',
          vi: 'Có phiên dịch tiếng Anh',
        },
      },
      {
        number: '1339',
        label: {
          en: 'Medical Helpline (의료상담)',
          zh: '医疗咨询热线 (의료상담)',
          ru: 'Медицинская горячая линия (의료상담)',
          ja: '医療相談 (의료상담)',
          vi: 'Đường dây y tế (의료상담)',
        },
        desc: {
          en: 'Emergency medical consultation, hospital guidance. Basic English support available.',
          zh: '紧急医疗咨询、医院指导。提供基础英语服务。',
          ru: 'Экстренная медицинская консультация, направление в больницу. Базовая поддержка на английском.',
          ja: '救急医療相談・病院案内。基本的な英語対応可能。',
          vi: 'Tư vấn y tế khẩn cấp, hướng dẫn bệnh viện. Hỗ trợ tiếng Anh cơ bản.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
      },
      {
        number: '122',
        label: {
          en: 'Coast Guard (해양경찰)',
          zh: '海洋警察 (해양경찰)',
          ru: 'Береговая охрана (해양경찰)',
          ja: '海洋警察 (해양경찰)',
          vi: 'Cảnh sát biển (해양경찰)',
        },
        desc: {
          en: 'Marine accidents and distress at sea.',
          zh: '海上事故·遇难报警。',
          ru: 'Морские аварии и бедствия на воде.',
          ja: '海上事故・遭難通報。',
          vi: 'Tai nạn hàng hải và khó khăn trên biển.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
      },
    ],
  },
  {
    icon: '🌏',
    title: {
      en: 'Foreigner Support Lines',
      zh: '外国人支援热线',
      ru: 'Линии помощи для иностранцев',
      ja: '外国人サポートライン',
      vi: 'Đường dây hỗ trợ người nước ngoài',
    },
    color: 'text-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    contacts: [
      {
        number: '1345',
        label: {
          en: 'Immigration Info Center (외국인종합안내)',
          zh: '外国人综合咨询中心',
          ru: 'Информационный центр для иностранцев',
          ja: '外国人総合案内センター',
          vi: 'Trung tâm thông tin nhập cư (외국인종합안내)',
        },
        desc: {
          en: 'Visa, residence, and immigration inquiries. Multilingual support.',
          zh: '签证·居留·出入境咨询。提供多语言服务。',
          ru: 'Запросы о визе, проживании и иммиграции. Многоязычная поддержка.',
          ja: 'ビザ・在留・出入国の問い合わせ。多言語対応。',
          vi: 'Thị thực, cư trú và câu hỏi nhập cư. Hỗ trợ đa ngôn ngữ.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
        note: {
          en: '16 languages including English',
          zh: '含英语在内共16种语言',
          ru: '16 языков, включая английский',
          ja: '英語含む16言語対応',
          vi: '16 ngôn ngữ bao gồm tiếng Anh',
        },
      },
      {
        number: '1330',
        label: {
          en: 'Korea Tourism Helpline (관광안내)',
          zh: '韩国旅游咨询热线',
          ru: 'Туристическая горячая линия',
          ja: '韓国観光案内',
          vi: 'Đường dây du lịch Hàn Quốc (관광안내)',
        },
        desc: {
          en: 'Travel info, interpreter connection (short-term), complaints.',
          zh: '旅游信息、口译员连接（短期）、投诉受理。',
          ru: 'Туристическая информация, подключение переводчика (краткосрочно), приём жалоб.',
          ja: '旅行情報・通訳者の接続（短時間）・苦情受付。',
          vi: 'Thông tin du lịch, kết nối phiên dịch (ngắn hạn), khiếu nại.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
        note: {
          en: 'English, Japanese, Chinese, Russian',
          zh: '英语·日语·中文·俄语',
          ru: 'Английский, японский, китайский, русский',
          ja: '英語・日本語・中国語・ロシア語',
          vi: 'Tiếng Anh, Nhật, Trung, Nga',
        },
      },
      {
        number: '120',
        label: {
          en: 'Seoul City Helpline (다산콜센터)',
          zh: '首尔市综合咨询 (다산콜센터)',
          ru: 'Горячая линия Сеула (다산콜센터)',
          ja: 'ソウル市総合相談 (다산콜센터)',
          vi: 'Đường dây thành phố Seoul (다산콜센터)',
        },
        desc: {
          en: 'General Seoul city services. Interpreter connection available.',
          zh: '首尔市生活服务全面咨询。可连接口译员。',
          ru: 'Общие услуги города Сеул. Возможно подключение переводчика.',
          ja: 'ソウル市の行政サービス全般。通訳者との接続が可能。',
          vi: 'Dịch vụ thành phố Seoul chung. Có kết nối phiên dịch.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
        note: {
          en: 'Seoul residents',
          zh: '首尔居民',
          ru: 'Жители Сеула',
          ja: 'ソウル在住者向け',
          vi: 'Cư dân Seoul',
        },
      },
      {
        number: '1393',
        label: {
          en: 'Mental Health Crisis Line (자살예방)',
          zh: '心理危机热线 (자살예방)',
          ru: 'Горячая линия психического здоровья',
          ja: '心理健康危機ライン',
          vi: 'Đường dây khủng hoảng sức khỏe tâm thần (자살예방)',
        },
        desc: {
          en: 'Mental health crisis counseling. English interpreter can be requested.',
          zh: '心理健康危机咨询。可请求英语口译连线。',
          ru: 'Консультация по кризисам психического здоровья. Можно запросить переводчика на английский.',
          ja: '精神的健康危機の相談。英語通訳の接続を依頼できます。',
          vi: 'Tư vấn khủng hoảng sức khỏe tâm thần. Có thể yêu cầu phiên dịch tiếng Anh.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
      },
      {
        number: '1366',
        label: {
          en: "Women's Emergency Line (여성긴급전화)",
          zh: '女性紧急电话 (여성긴급전화)',
          ru: 'Экстренная линия для женщин',
          ja: '女性緊急電話 (여성긴급전화)',
          vi: 'Đường dây khẩn cấp phụ nữ (여성긴급전화)',
        },
        desc: {
          en: 'Counseling and protection for domestic violence and sexual assault victims.',
          zh: '家庭暴力·性暴力受害者咨询及保护支援。',
          ru: 'Консультация и защита жертв домашнего насилия и сексуального насилия.',
          ja: 'DV・性暴力被害者の相談・保護支援。',
          vi: 'Tư vấn và bảo vệ nạn nhân bạo lực gia đình và tấn công tình dục.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
      },
    ],
  },
  {
    icon: '🏛️',
    title: {
      en: 'Government & Legal',
      zh: '政府与法律',
      ru: 'Государство и юридические вопросы',
      ja: '政府・法律',
      vi: 'Chính phủ & Pháp lý',
    },
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    contacts: [
      {
        number: '1372',
        label: {
          en: 'Consumer Protection (소비자상담)',
          zh: '消费者保护中心',
          ru: 'Защита прав потребителей',
          ja: '消費者相談センター',
          vi: 'Bảo vệ người tiêu dùng (소비자상담)',
        },
        desc: {
          en: 'Product/service damage, refund disputes, consumer complaints.',
          zh: '商品·服务受损、拒绝退款等消费者纠纷咨询。',
          ru: 'Ущерб от товаров/услуг, споры о возврате, жалобы потребителей.',
          ja: '商品・サービスの被害、返金拒否などの消費者トラブル相談。',
          vi: 'Thiệt hại sản phẩm/dịch vụ, tranh chấp hoàn tiền, khiếu nại người tiêu dùng.',
        },
        available: {
          en: 'Weekdays 09:00–18:00',
          zh: '工作日 09:00–18:00',
          ru: 'Пн–Пт 09:00–18:00',
          ja: '平日 09:00–18:00',
          vi: 'Ngày thường 09:00–18:00',
        },
      },
      {
        number: '1350',
        label: {
          en: 'Labor Ministry (고용노동부)',
          zh: '雇佣劳动部',
          ru: 'Министерство труда',
          ja: '雇用労働部',
          vi: 'Bộ Lao động (고용노동부)',
        },
        desc: {
          en: 'Wage theft, unfair dismissal, labor contract disputes.',
          zh: '拖欠工资、不当解雇、劳动合同相关举报与咨询。',
          ru: 'Задержка зарплаты, незаконное увольнение, трудовые споры.',
          ja: '賃金未払い・不当解雇・労働契約に関する申告・相談。',
          vi: 'Trộm lương, sa thải bất công, tranh chấp hợp đồng lao động.',
        },
        available: {
          en: 'Weekdays 09:00–18:00',
          zh: '工作日 09:00–18:00',
          ru: 'Пн–Пт 09:00–18:00',
          ja: '平日 09:00–18:00',
          vi: 'Ngày thường 09:00–18:00',
        },
      },
      {
        number: '182',
        label: {
          en: 'Lost & Found (경찰 유실물)',
          zh: '失物招领 (경찰 유실물)',
          ru: 'Бюро находок (경찰 유실물)',
          ja: '警察遺失物 (경찰 유실물)',
          vi: 'Tìm đồ thất lạc (경찰 유실물)',
        },
        desc: {
          en: 'Report lost or found items. Subway/bus lost items handled separately by each operator.',
          zh: '遗失物·拾得物报告。地铁·公交遗失物由各运营商单独处理。',
          ru: 'Сообщить о потере или находке. Потери в метро/автобусе обрабатываются отдельно.',
          ja: '紛失物・拾得物の届け出。地下鉄・バスの遺失物は各運営者が別途対応。',
          vi: 'Báo cáo đồ vật bị mất. Tàu điện ngầm/xe buýt xử lý riêng theo từng nhà khai thác.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
      },
      {
        number: '109',
        label: {
          en: 'National Health Insurance (국민건강보험)',
          zh: '国民健康保险公团',
          ru: 'Национальное медицинское страхование',
          ja: '国民健康保険 (NHIS)',
          vi: 'Bảo hiểm y tế quốc gia (국민건강보험)',
        },
        desc: {
          en: 'Insurance eligibility, payment, and benefit inquiries.',
          zh: '健康保险资格·缴费·保险给付相关咨询。',
          ru: 'Вопросы о праве на страхование, оплате и льготах.',
          ja: '健康保険の資格・納付・給付に関する問い合わせ。',
          vi: 'Điều kiện bảo hiểm, thanh toán và phúc lợi.',
        },
        available: {
          en: 'Weekdays 09:00–18:00',
          zh: '工作日 09:00–18:00',
          ru: 'Пн–Пт 09:00–18:00',
          ja: '平日 09:00–18:00',
          vi: 'Ngày thường 09:00–18:00',
        },
      },
    ],
  },
  {
    icon: '🏦',
    title: {
      en: 'Financial Emergency',
      zh: '金融紧急情况',
      ru: 'Финансовые экстренные ситуации',
      ja: '金融緊急対応',
      vi: 'Khẩn cấp tài chính',
    },
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    contacts: [
      {
        number: '1599-9999',
        label: {
          en: 'Financial Supervisory Service (금융감독원)',
          zh: '金融监督院',
          ru: 'Служба финансового надзора',
          ja: '金融監督院',
          vi: 'Dịch vụ giám sát tài chính (금융감독원)',
        },
        desc: {
          en: 'Report financial fraud and illegal loans.',
          zh: '金融诈骗·非法贷款受害举报。',
          ru: 'Сообщить о финансовом мошенничестве и незаконных кредитах.',
          ja: '金融詐欺・違法ローン被害の申告。',
          vi: 'Báo cáo gian lận tài chính và cho vay nặng lãi.',
        },
        available: {
          en: 'Weekdays 09:00–18:00',
          zh: '工作日 09:00–18:00',
          ru: 'Пн–Пт 09:00–18:00',
          ja: '平日 09:00–18:00',
          vi: 'Ngày thường 09:00–18:00',
        },
      },
      {
        number: '118',
        label: {
          en: 'Cyber Crime (사이버범죄신고)',
          zh: '网络犯罪举报',
          ru: 'Кибер-преступления',
          ja: 'サイバー犯罪申告',
          vi: 'Tội phạm mạng (사이버범죄신고)',
        },
        desc: {
          en: 'Internet fraud, voice phishing, personal data breach reports.',
          zh: '网络诈骗、电话诈骗、个人信息侵害举报。',
          ru: 'Интернет-мошенничество, голосовой фишинг, нарушение персональных данных.',
          ja: 'インターネット詐欺・ボイスフィッシング・個人情報侵害の申告。',
          vi: 'Gian lận internet, lừa đảo qua điện thoại, báo cáo vi phạm dữ liệu cá nhân.',
        },
        available: {
          en: '24 hours',
          zh: '24小时',
          ru: '24 часа',
          ja: '24時間',
          vi: '24 giờ',
        },
      },
    ],
  },
];

type Embassy = {
  country: string;
  flag: string;
  number: string;
  address: string;
};
const EMBASSIES: Embassy[] = [
  {
    country: 'USA',
    flag: '🇺🇸',
    number: '02-397-4114',
    address: '서울 종로구 세종대로 188',
  },
  {
    country: 'China',
    flag: '🇨🇳',
    number: '02-738-1038',
    address: '서울 중구 명동 2가 54',
  },
  {
    country: 'Japan',
    flag: '🇯🇵',
    number: '02-2170-5200',
    address: '서울 종로구 율곡로 2가 18-11',
  },
  {
    country: 'UK',
    flag: '🇬🇧',
    number: '02-3210-5500',
    address: '서울 중구 태평로 1가 40',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    number: '02-3783-6000',
    address: '서울 종로구 교보생명빌딩 16층',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    number: '02-2003-0100',
    address: '서울 종로구 교보생명빌딩 19층',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    number: '02-748-4114',
    address: '서울 용산구 한남동',
  },
  {
    country: 'France',
    flag: '🇫🇷',
    number: '02-3149-4300',
    address: '서울 서대문구 합동 30',
  },
  {
    country: 'Russia',
    flag: '🇷🇺',
    number: '02-318-2116',
    address: '서울 중구 정동 34-16',
  },
  {
    country: 'India',
    flag: '🇮🇳',
    number: '02-798-4257',
    address: '서울 용산구 한남동',
  },
  {
    country: 'Vietnam',
    flag: '🇻🇳',
    number: '02-738-2318',
    address: '서울 종로구 종로1가 24',
  },
  {
    country: 'Philippines',
    flag: '🇵🇭',
    number: '02-577-6147',
    address: '서울 강남구 대치동',
  },
];

const UI = {
  pageTitle: {
    en: 'Emergency Contacts',
    zh: '紧急联系电话',
    ru: 'Экстренные контакты',
    ja: '緊急連絡先',
    vi: 'Liên lạc khẩn cấp',
  },
  pageSubtitle: {
    en: 'Essential numbers and contacts for foreigners in Korea. Save or print this page.',
    zh: '在韩外国人必备电话与联系方式。请保存或打印本页面。',
    ru: 'Необходимые номера и контакты для иностранцев в Корее. Сохраните или распечатайте.',
    ja: '韓国在住外国人向け必須番号・連絡先。保存または印刷してください。',
    vi: 'Số điện thoại và liên lạc thiết yếu cho người nước ngoài tại Hàn Quốc. Lưu hoặc in trang này.',
  },
  coreNumbers: {
    en: '☎️ Dial Immediately — Core Emergencies',
    zh: '☎️ 立即拨打——核心紧急电话',
    ru: '☎️ Звоните немедленно — экстренные номера',
    ja: '☎️ すぐ電話——緊急連絡先',
    vi: '☎️ Gọi ngay — Khẩn cấp cốt lõi',
  },
  embassyTitle: {
    en: '🏛️ Embassies in Seoul (주한 대사관)',
    zh: '🏛️ 主要驻韩大使馆',
    ru: '🏛️ Посольства в Сеуле',
    ja: '🏛️ 駐韓大使館一覧',
    vi: '🏛️ Đại sứ quán tại Seoul (주한 대사관)',
  },
  embassyWarning: {
    en: "⚠️ Embassy numbers may change. Verify the latest info on your home country's foreign ministry website before travelling.",
    zh: '⚠️ 大使馆电话可能变更。出行前请在本国外交部官网确认最新信息。',
    ru: '⚠️ Номера посольств могут измениться. Перед поездкой проверьте актуальные данные на сайте МИД вашей страны.',
    ja: '⚠️ 大使館番号は変更される場合があります。渡航前に母国の外務省サイトで最新情報を確認してください。',
    vi: '⚠️ Số điện thoại đại sứ quán có thể thay đổi. Hãy xác minh thông tin mới nhất trên trang web Bộ Ngoại giao nước bạn trước khi đi.',
  },
  printBtn: {
    en: '🖨️ Print / Save as PDF',
    zh: '🖨️ 打印 / 另存为PDF',
    ru: '🖨️ Печать / Сохранить как PDF',
    ja: '🖨️ 印刷 / PDFとして保存',
    vi: '🖨️ In / Lưu dưới dạng PDF',
  },
  tip: {
    en: 'When calling 112 (police) or 119 (fire/ambulance), say "영어 통역사 연결해주세요" to request an English interpreter. For travel translation, 1330 operates 24/7 in English, Chinese, Japanese, and Russian.',
    zh: '拨打112（警察）或119（消防/救护）时，说"영어 통역사 연결해주세요"可请求英语口译。旅游翻译可拨打1330，24小时提供英语、中文、日语、俄语服务。',
    ru: 'При звонке на 112 (полиция) или 119 (пожар/скорая) скажите "영어 통역사 연결해주세요" для подключения переводчика. Туристический перевод — 1330, круглосуточно на английском, китайском, японском, русском.',
    ja: '112（警察）や119（消防・救急）に電話する際は「영어 통역사 연결해주세요」と言うと英語通訳につないでもらえます。旅行通訳には1330（24時間、英語・中国語・日本語・ロシア語対応）も使えます。',
    vi: 'Khi gọi 112 (cảnh sát) hoặc 119 (chữa cháy/cứu thương), hãy nói "영어 통역사 연결해주세요" để yêu cầu phiên dịch tiếng Anh. Để phiên dịch du lịch, 1330 phục vụ 24/7 bằng tiếng Anh, Trung, Nhật và Nga.',
  },
};

export default async function EmergencyContactsPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-10 print:py-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-3xl">📞</span>
            <h1 className="text-3xl font-black text-slate-900">
              {loc(lang, UI.pageTitle)}
            </h1>
          </div>
          <p className="mt-2 text-slate-500 text-sm leading-6 max-w-xl">
            {loc(lang, UI.pageSubtitle)}
          </p>
          <div className="mt-4 print:hidden">
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              id="print-button"
            >
              {loc(lang, UI.printBtn)}
            </button>
            <script
              dangerouslySetInnerHTML={{
                __html: `document.getElementById('print-button').onclick=function(){window.print();}`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Quick-dial banner */}
      <div className="border-b border-slate-200 bg-slate-900 px-6 py-6 print:bg-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 print:text-slate-600">
            {loc(lang, UI.coreNumbers)}
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              {
                number: '119',
                label: {
                  en: 'Ambulance · Fire',
                  zh: '救护车 · 消防',
                  ru: 'Скорая · Пожарная',
                  ja: '救急・消防',
                  vi: 'Cứu thương · Chữa cháy',
                },
                color: 'bg-red-500',
              },
              {
                number: '112',
                label: { en: 'Police', zh: '警察', ru: 'Полиция', ja: '警察', vi: 'Cảnh sát' },
                color: 'bg-blue-600',
              },
              {
                number: '1339',
                label: {
                  en: 'Medical Helpline',
                  zh: '医疗咨询',
                  ru: 'Медицина',
                  ja: '医療相談',
                  vi: 'Y tế',
                },
                color: 'bg-emerald-600',
              },
              {
                number: '1345',
                label: {
                  en: 'Foreigner Info',
                  zh: '外国人咨询',
                  ru: 'Иностранцам',
                  ja: '外国人案内',
                  vi: 'Thông tin nước ngoài',
                },
                color: 'bg-violet-600',
              },
            ].map((n) => (
              <a
                key={n.number}
                href={`tel:${n.number}`}
                className={`flex items-center gap-3 rounded-2xl ${n.color} px-4 py-3 text-white transition hover:opacity-90`}
              >
                <span className="text-2xl font-black">{n.number}</span>
                <p className="text-sm font-bold">{loc(lang, n.label)}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact sections */}
      <div className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        {CONTACT_SECTIONS.map((section) => (
          <div
            key={section.title.en}
            className={`overflow-hidden rounded-2xl border ${section.border} bg-white`}
          >
            <div className={`${section.bg} px-5 py-4 flex items-center gap-3`}>
              <span className="text-2xl">{section.icon}</span>
              <h2 className={`font-bold text-lg ${section.color}`}>
                {loc(lang, section.title)}
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              {section.contacts.map((c) => (
                <div
                  key={c.number}
                  className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50 transition"
                >
                  <a
                    href={`tel:${c.number.replace(/-/g, '')}`}
                    className="shrink-0 rounded-xl bg-slate-900 px-3 py-2 text-center font-black text-white hover:bg-rose-600 transition min-w-[5rem]"
                  >
                    <span className="block text-base leading-tight">
                      {c.number}
                    </span>
                  </a>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-slate-900 text-sm">
                      {loc(lang, c.label)}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-5">
                      {loc(lang, c.desc)}
                    </p>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        🕐 {loc(lang, c.available)}
                      </span>
                      {c.note && (
                        <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                          {loc(lang, c.note)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Embassy section */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="bg-slate-50 px-5 py-4 flex items-center gap-3 border-b border-slate-200">
            <h2 className="font-bold text-lg text-slate-700">
              {loc(lang, UI.embassyTitle)}
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {EMBASSIES.map((e) => (
              <div
                key={e.country}
                className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition"
              >
                <span className="text-2xl shrink-0">{e.flag}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-slate-900 text-sm">
                    {e.country}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{e.address}</p>
                </div>
                <a
                  href={`tel:${e.number.replace(/-/g, '')}`}
                  className="shrink-0 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
                >
                  {e.number}
                </a>
              </div>
            ))}
          </div>
          <div className="px-5 py-3 bg-amber-50 border-t border-amber-200">
            <p className="text-xs text-amber-800">
              {loc(lang, UI.embassyWarning)}
            </p>
          </div>
        </div>

        {/* Tip */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800">
          <strong>💡 Tip:</strong> {loc(lang, UI.tip)}
        </div>
      </div>

      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { font-size: 11px; }
        }
      `}</style>
    </main>
  );
}
