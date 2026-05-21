import type { Lang } from '@/lib/i18n';

export interface SearchPage {
  slug: string;
  icon: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  keywords: Record<Lang, string[]>;
  category: Record<Lang, string>;
}

export const SEARCH_PAGES: SearchPage[] = [
  {
    slug: 'getting-started',
    icon: '🚀',
    title: {
      en: 'Getting Started in Korea',
      zh: '入门指南',
      ru: 'С чего начать в Корее',
      ja: '韓国での始め方',
      vi: 'Bắt đầu ở Hàn Quốc',
    },
    description: {
      en: 'First steps when you arrive — ARC, bank account, SIM card, and essentials.',
      zh: '刚到韩国的第一步：登录证、银行账户、SIM卡和必备事项。',
      ru: 'Первые шаги по приезду — ARC, банковский счёт, SIM-карта и основные вещи.',
      ja: '到着後の最初のステップ — ARC、銀行口座、SIMカードと必需品。',
      vi: 'Các bước đầu tiên khi đến — ARC, tài khoản ngân hàng, SIM và những điều cần thiết.',
    },
    keywords: {
      en: ['arrive', 'first steps', 'checklist', 'new', 'foreigner', 'international'],
      zh: ['到达', '第一步', '清单', '新来', '外国人', '留学生'],
      ru: ['приезд', 'первые шаги', 'чеклист', 'новичок', 'иностранец'],
      ja: ['到着', '最初', 'チェックリスト', '新しい', '外国人', '留学生'],
      vi: ['đến nơi', 'bước đầu', 'danh sách', 'mới', 'người nước ngoài'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'daily-life',
    icon: '🏙️',
    title: {
      en: 'Daily Life in Korea',
      zh: '韩国日常生活',
      ru: 'Повседневная жизнь в Корее',
      ja: '韓国での日常生活',
      vi: 'Cuộc sống hàng ngày ở Hàn Quốc',
    },
    description: {
      en: 'Everything you need for day-to-day life — food, shopping, apps, and routines.',
      zh: '日常生活所需的一切 — 饮食、购物、应用程序和日常习惯。',
      ru: 'Всё для повседневной жизни — еда, шопинг, приложения и распорядок.',
      ja: '日常生活に必要なすべて — 食事、ショッピング、アプリ、ルーティン。',
      vi: 'Tất cả cho cuộc sống hàng ngày — ăn uống, mua sắm, ứng dụng và thói quen.',
    },
    keywords: {
      en: ['daily', 'food', 'shopping', 'apps', 'life', 'routine', 'convenience store', 'market'],
      zh: ['日常', '饮食', '购物', '应用', '生活', '便利店', '超市'],
      ru: ['повседневная', 'еда', 'покупки', 'приложения', 'жизнь', 'рутина'],
      ja: ['日常', '食事', 'ショッピング', 'アプリ', '生活', 'コンビニ'],
      vi: ['hàng ngày', 'ăn uống', 'mua sắm', 'ứng dụng', 'cuộc sống'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'health',
    icon: '🏥',
    title: {
      en: 'Health & Medical Care',
      zh: '健康与医疗',
      ru: 'Здоровье и медицина',
      ja: '健康・医療',
      vi: 'Sức khỏe & Chăm sóc y tế',
    },
    description: {
      en: 'Hospitals, clinics, pharmacies, and navigating the Korean healthcare system.',
      zh: '医院、诊所、药店以及如何使用韩国医疗体系。',
      ru: 'Больницы, клиники, аптеки и навигация в системе здравоохранения Кореи.',
      ja: '病院、クリニック、薬局、韓国の医療システムの使い方。',
      vi: 'Bệnh viện, phòng khám, nhà thuốc và cách sử dụng hệ thống y tế Hàn Quốc.',
    },
    keywords: {
      en: ['hospital', 'doctor', 'clinic', 'pharmacy', 'sick', 'medicine', 'insurance', 'medical'],
      zh: ['医院', '医生', '诊所', '药店', '生病', '药', '保险', '医疗'],
      ru: ['больница', 'врач', 'клиника', 'аптека', 'болезнь', 'лекарство', 'страховка'],
      ja: ['病院', '医者', 'クリニック', '薬局', '病気', '薬', '保険'],
      vi: ['bệnh viện', 'bác sĩ', 'phòng khám', 'nhà thuốc', 'bệnh', 'thuốc', 'bảo hiểm'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'housing',
    icon: '🏠',
    title: {
      en: 'Housing in Korea',
      zh: '韩国住房',
      ru: 'Жильё в Корее',
      ja: '韓国の住まい',
      vi: 'Nhà ở ở Hàn Quốc',
    },
    description: {
      en: 'Finding an apartment, jeonse, wolse, contracts, and what to watch out for.',
      zh: '找公寓、全税、月租、合同以及注意事项。',
      ru: 'Поиск квартиры, чонсе, вольсе, договоры и на что обращать внимание.',
      ja: 'アパート探し、チョンセ、ウォルセ、契約と注意点。',
      vi: 'Tìm căn hộ, jeonse, wolse, hợp đồng và những điều cần lưu ý.',
    },
    keywords: {
      en: ['apartment', 'rent', 'jeonse', 'wolse', 'contract', 'deposit', 'room', 'officetel', 'house'],
      zh: ['公寓', '租房', '全税', '月租', '合同', '押金', '房间', '住房'],
      ru: ['квартира', 'аренда', 'чонсе', 'вольсе', 'договор', 'депозит', 'комната'],
      ja: ['アパート', '賃貸', 'チョンセ', 'ウォルセ', '契約', '敷金', '部屋'],
      vi: ['căn hộ', 'thuê nhà', 'jeonse', 'wolse', 'hợp đồng', 'đặt cọc', 'phòng'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'visa',
    icon: '📋',
    title: {
      en: 'Visa & ARC Guide',
      zh: '签证与外国人登录证',
      ru: 'Виза и ARC',
      ja: 'ビザ・外国人登録証ガイド',
      vi: 'Hướng dẫn Visa & ARC',
    },
    description: {
      en: 'Student visa (D-2), D-10, ARC card application, and staying legal in Korea.',
      zh: '学生签证（D-2）、D-10、外国人登录证申请及在韩合法居住指南。',
      ru: 'Студенческая виза (D-2), D-10, подача заявки на ARC и легальное пребывание.',
      ja: '留学ビザ（D-2）、D-10、ARC申請、韓国での合法的な滞在。',
      vi: 'Visa sinh viên (D-2), D-10, đăng ký thẻ ARC và ở lại hợp pháp tại Hàn Quốc.',
    },
    keywords: {
      en: ['visa', 'arc', 'immigration', 'd-2', 'd-10', 'student visa', 'work visa', 'residence', 'permit'],
      zh: ['签证', '外国人登录证', '移民', 'D-2', 'D-10', '学生签证', '居留', '许可'],
      ru: ['виза', 'ARC', 'иммиграция', 'D-2', 'D-10', 'студенческая виза', 'вид на жительство'],
      ja: ['ビザ', 'ARC', '入国管理', 'D-2', 'D-10', '留学ビザ', '在留'],
      vi: ['visa', 'ARC', 'nhập cư', 'D-2', 'D-10', 'visa sinh viên', 'cư trú'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'how-to-get-sim-card-in-korea',
    icon: '📱',
    title: {
      en: 'SIM Card Guide',
      zh: 'SIM卡指南',
      ru: 'Как купить SIM-карту в Корее',
      ja: 'SIMカードの買い方',
      vi: 'Hướng dẫn mua SIM ở Hàn Quốc',
    },
    description: {
      en: 'How to get a Korean SIM card — airport, convenience stores, and online options.',
      zh: '如何在韩国购买SIM卡 — 机场、便利店和网上购买方式。',
      ru: 'Как купить корейскую SIM-карту — в аэропорту, в магазинах и онлайн.',
      ja: '韓国でSIMカードを手に入れる方法 — 空港、コンビニ、オンライン。',
      vi: 'Cách mua SIM Hàn Quốc — sân bay, cửa hàng tiện lợi và mua online.',
    },
    keywords: {
      en: ['sim', 'phone', 'mobile', 'data', 'carrier', 'kt', 'skt', 'lgu+', 'prepaid', 'esim'],
      zh: ['SIM卡', '手机', '移动', '流量', '运营商', 'KT', 'SKT', '预付费', 'eSIM'],
      ru: ['SIM', 'телефон', 'мобильный', 'данные', 'оператор', 'предоплата', 'eSIM'],
      ja: ['SIM', '電話', 'モバイル', 'データ', 'キャリア', 'プリペイド', 'eSIM'],
      vi: ['SIM', 'điện thoại', 'di động', 'dữ liệu', 'nhà mạng', 'trả trước', 'eSIM'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'culture',
    icon: '🎎',
    title: {
      en: 'Korean Culture',
      zh: '韩国文化',
      ru: 'Корейская культура',
      ja: '韓国文化',
      vi: 'Văn hóa Hàn Quốc',
    },
    description: {
      en: 'Etiquette, customs, holidays, food culture, and social norms in Korea.',
      zh: '礼仪、习俗、节日、饮食文化和韩国社会规范。',
      ru: 'Этикет, обычаи, праздники, кулинарная культура и социальные нормы Кореи.',
      ja: 'マナー、習慣、祝日、食文化、韓国の社会規範。',
      vi: 'Phép xã giao, phong tục, lễ hội, văn hóa ẩm thực và chuẩn mực xã hội ở Hàn Quốc.',
    },
    keywords: {
      en: ['culture', 'customs', 'etiquette', 'manners', 'holiday', 'food', 'tradition', 'social', 'norms'],
      zh: ['文化', '习俗', '礼仪', '节日', '饮食', '传统', '社会', '规范'],
      ru: ['культура', 'обычаи', 'этикет', 'манеры', 'праздники', 'еда', 'традиции'],
      ja: ['文化', '習慣', 'マナー', '祝日', '食文化', '伝統', '社会'],
      vi: ['văn hóa', 'phong tục', 'lễ nghi', 'lễ hội', 'ẩm thực', 'truyền thống'],
    },
    category: {
      en: 'Explore', zh: '探索', ru: 'Город', ja: '探索', vi: 'Khám phá',
    },
  },
  {
    slug: 'transport',
    icon: '🚇',
    title: {
      en: 'Transport Guide',
      zh: '交通指南',
      ru: 'Транспорт в Корее',
      ja: '交通ガイド',
      vi: 'Hướng dẫn giao thông',
    },
    description: {
      en: 'Subway, buses, T-money card, taxis, KTX, and getting around Korea.',
      zh: '地铁、公交、T-money卡、出租车、KTX和在韩国的出行方式。',
      ru: 'Метро, автобусы, карта T-money, такси, KTX и передвижение по Корее.',
      ja: '地下鉄、バス、T-moneyカード、タクシー、KTX、韓国での移動方法。',
      vi: 'Tàu điện ngầm, xe buýt, thẻ T-money, taxi, KTX và cách di chuyển ở Hàn Quốc.',
    },
    keywords: {
      en: ['subway', 'bus', 't-money', 'taxi', 'ktx', 'train', 'metro', 'kakao taxi', 'transport'],
      zh: ['地铁', '公交', 'T-money', '出租车', 'KTX', '火车', '交通'],
      ru: ['метро', 'автобус', 'T-money', 'такси', 'KTX', 'поезд', 'транспорт'],
      ja: ['地下鉄', 'バス', 'T-money', 'タクシー', 'KTX', '電車', '交通'],
      vi: ['tàu điện ngầm', 'xe buýt', 'T-money', 'taxi', 'KTX', 'tàu hỏa', 'giao thông'],
    },
    category: {
      en: 'Explore', zh: '探索', ru: 'Город', ja: '探索', vi: 'Khám phá',
    },
  },
  {
    slug: 'nearby',
    icon: '📍',
    title: {
      en: 'Find Places Nearby',
      zh: '查找周边地点',
      ru: 'Найти места рядом',
      ja: '近くの場所を探す',
      vi: 'Tìm địa điểm gần đây',
    },
    description: {
      en: 'Find hospitals, pharmacies, immigration offices, and other useful places near you.',
      zh: '查找附近的医院、药店、出入国管理局和其他有用地点。',
      ru: 'Найти больницы, аптеки, иммиграционные офисы и другие полезные места рядом.',
      ja: '近くの病院、薬局、出入国管理局などの便利な場所を探す。',
      vi: 'Tìm bệnh viện, nhà thuốc, văn phòng xuất nhập cảnh và các địa điểm hữu ích gần bạn.',
    },
    keywords: {
      en: ['nearby', 'map', 'location', 'find', 'hospital', 'pharmacy', 'immigration', 'police'],
      zh: ['附近', '地图', '位置', '查找', '医院', '药店', '出入国管理局', '警察'],
      ru: ['рядом', 'карта', 'местоположение', 'найти', 'больница', 'аптека', 'иммиграция'],
      ja: ['近く', 'マップ', '場所', '探す', '病院', '薬局', '出入国管理局'],
      vi: ['gần đây', 'bản đồ', 'vị trí', 'tìm', 'bệnh viện', 'nhà thuốc', 'xuất nhập cảnh'],
    },
    category: {
      en: 'Explore', zh: '探索', ru: 'Город', ja: '探索', vi: 'Khám phá',
    },
  },
  {
    slug: 'making-friends',
    icon: '🤝',
    title: {
      en: 'Making Friends in Korea',
      zh: '在韩国交朋友',
      ru: 'Как найти друзей в Корее',
      ja: '韓国で友達を作ろう',
      vi: 'Kết bạn ở Hàn Quốc',
    },
    description: {
      en: 'Language exchanges, clubs, apps, and tips for building a social life in Korea.',
      zh: '语言交流、社团、应用程序和在韩国建立社交生活的技巧。',
      ru: 'Языковые обмены, клубы, приложения и советы по социальной жизни в Корее.',
      ja: '語学交換、クラブ、アプリ、韓国での社会生活を築くヒント。',
      vi: 'Trao đổi ngôn ngữ, câu lạc bộ, ứng dụng và mẹo xây dựng cuộc sống xã hội ở Hàn Quốc.',
    },
    keywords: {
      en: ['friends', 'social', 'meetup', 'language exchange', 'club', 'community', 'dating', 'network'],
      zh: ['朋友', '社交', '聚会', '语言交流', '社团', '社区', '约会', '网络'],
      ru: ['друзья', 'общение', 'встречи', 'языковой обмен', 'клуб', 'сообщество'],
      ja: ['友達', '社交', 'ミートアップ', '語学交換', 'クラブ', 'コミュニティ'],
      vi: ['bạn bè', 'xã hội', 'gặp gỡ', 'trao đổi ngôn ngữ', 'câu lạc bộ', 'cộng đồng'],
    },
    category: {
      en: 'Connect', zh: '社交', ru: 'Общение', ja: 'つながる', vi: 'Kết nối',
    },
  },
  {
    slug: 'emergency-korean',
    icon: '🆘',
    title: {
      en: 'Emergency Korean Phrases',
      zh: '紧急韩语短语',
      ru: 'Экстренные фразы на корейском',
      ja: '緊急韓国語フレーズ',
      vi: 'Cụm từ tiếng Hàn khẩn cấp',
    },
    description: {
      en: 'Essential Korean phrases for emergencies, hospitals, police, and urgent situations.',
      zh: '紧急情况、医院、警察和紧急场合的基本韩语短语。',
      ru: 'Основные корейские фразы для экстренных ситуаций, больниц, полиции.',
      ja: '緊急事態、病院、警察など急を要する場面のための基本韓国語フレーズ。',
      vi: 'Các cụm từ tiếng Hàn thiết yếu cho tình huống khẩn cấp, bệnh viện, cảnh sát.',
    },
    keywords: {
      en: ['emergency', 'korean', 'phrases', 'help', 'police', 'hospital', 'language', 'words'],
      zh: ['紧急', '韩语', '短语', '帮助', '警察', '医院', '语言', '词汇'],
      ru: ['экстренный', 'корейский', 'фразы', 'помощь', 'полиция', 'больница'],
      ja: ['緊急', '韓国語', 'フレーズ', '助け', '警察', '病院', '言葉'],
      vi: ['khẩn cấp', 'tiếng Hàn', 'cụm từ', 'giúp đỡ', 'cảnh sát', 'bệnh viện'],
    },
    category: {
      en: 'Connect', zh: '社交', ru: 'Общение', ja: 'つながる', vi: 'Kết nối',
    },
  },
  {
    slug: 'emergency-contacts',
    icon: '📞',
    title: {
      en: 'Emergency Contacts',
      zh: '紧急联系电话',
      ru: 'Экстренные контакты',
      ja: '緊急連絡先',
      vi: 'Số liên lạc khẩn cấp',
    },
    description: {
      en: 'Korea\'s emergency numbers — police (112), fire & ambulance (119), and more.',
      zh: '韩国紧急电话 — 警察（112）、消防和急救（119）等。',
      ru: 'Экстренные номера Кореи — полиция (112), пожарная и скорая (119) и другие.',
      ja: '韓国の緊急番号 — 警察（112）、消防・救急（119）など。',
      vi: 'Số khẩn cấp ở Hàn Quốc — cảnh sát (112), cứu hỏa & cấp cứu (119) và nhiều hơn.',
    },
    keywords: {
      en: ['emergency', 'number', '112', '119', 'police', 'ambulance', 'fire', 'contact', 'call'],
      zh: ['紧急', '号码', '112', '119', '警察', '救护车', '消防', '联系'],
      ru: ['экстренный', 'номер', '112', '119', 'полиция', 'скорая', 'пожарная', 'контакт'],
      ja: ['緊急', '番号', '112', '119', '警察', '救急', '消防', '連絡'],
      vi: ['khẩn cấp', 'số điện thoại', '112', '119', 'cảnh sát', 'cấp cứu', 'cứu hỏa'],
    },
    category: {
      en: 'Connect', zh: '社交', ru: 'Общение', ja: 'つながる', vi: 'Kết nối',
    },
  },
  {
    slug: 'arc-card-korea-guide',
    icon: '🪪',
    title: {
      en: 'ARC Card Guide',
      zh: '外国人登录证申请指南',
      ru: 'Как получить карту ARC',
      ja: '外国人登録証（ARC）申請ガイド',
      vi: 'Hướng dẫn đăng ký thẻ ARC',
    },
    description: {
      en: 'Step-by-step guide to applying for your Alien Registration Card in Korea.',
      zh: '在韩国申请外国人登录证的详细步骤指南。',
      ru: 'Пошаговое руководство по подаче заявки на карту иностранца в Корее.',
      ja: '韓国で外国人登録証を申請するためのステップバイステップガイド。',
      vi: 'Hướng dẫn từng bước đăng ký thẻ Đăng ký người nước ngoài ở Hàn Quốc.',
    },
    keywords: {
      en: ['arc', 'alien registration', 'card', 'id', 'immigration office', 'apply', 'foreigner', 'registration'],
      zh: ['外国人登录证', 'ARC', '申请', '身份证', '出入国管理局', '注册'],
      ru: ['ARC', 'карта иностранца', 'регистрация', 'удостоверение', 'иммиграция', 'заявка'],
      ja: ['ARC', '外国人登録証', '申請', 'ID', '出入国管理局', '在留カード'],
      vi: ['ARC', 'thẻ đăng ký người nước ngoài', 'đăng ký', 'ID', 'xuất nhập cảnh', 'nộp đơn'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'best-bank-account-for-foreigners-korea',
    icon: '🏦',
    title: {
      en: 'Best Bank Account for Foreigners',
      zh: '外国人最佳银行账户',
      ru: 'Лучший банк для иностранцев в Корее',
      ja: '外国人向け銀行口座ガイド',
      vi: 'Tài khoản ngân hàng tốt nhất cho người nước ngoài',
    },
    description: {
      en: 'Kakao Bank, Toss, Shinhan, KB — which bank is easiest to open as a foreigner.',
      zh: 'Kakao Bank、Toss、新韩、国民银行 — 哪家银行对外国人最容易开户。',
      ru: 'Kakao Bank, Toss, Shinhan, KB — какой банк проще всего открыть иностранцу.',
      ja: 'Kakao Bank、Toss、新韓、国民銀行 — 外国人が最も開設しやすい銀行。',
      vi: 'Kakao Bank, Toss, Shinhan, KB — ngân hàng nào dễ mở nhất cho người nước ngoài.',
    },
    keywords: {
      en: ['bank', 'account', 'kakao bank', 'toss', 'shinhan', 'kb', 'woori', 'open account', 'foreigner'],
      zh: ['银行', '账户', 'Kakao Bank', 'Toss', '新韩', '国民', '友利', '开户', '外国人'],
      ru: ['банк', 'счёт', 'Kakao Bank', 'Toss', 'Shinhan', 'KB', 'открыть счёт', 'иностранец'],
      ja: ['銀行', '口座', 'カカオバンク', 'Toss', '新韓', 'KB', '口座開設', '外国人'],
      vi: ['ngân hàng', 'tài khoản', 'Kakao Bank', 'Toss', 'Shinhan', 'KB', 'mở tài khoản', 'người nước ngoài'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'how-to-send-money-from-korea',
    icon: '💸',
    title: {
      en: 'How to Send Money from Korea',
      zh: '如何从韩国汇款',
      ru: 'Как отправить деньги из Кореи',
      ja: '韓国からの送金方法',
      vi: 'Cách chuyển tiền từ Hàn Quốc',
    },
    description: {
      en: 'International money transfers — Wise, bank wire, and cheapest ways to send money home.',
      zh: '国际汇款 — Wise、银行电汇以及向国内汇款的最便宜方式。',
      ru: 'Международные переводы — Wise, банковский перевод и самые дешёвые способы отправки денег.',
      ja: '国際送金 — Wise、銀行振込、本国への最安値送金方法。',
      vi: 'Chuyển tiền quốc tế — Wise, chuyển khoản ngân hàng và cách rẻ nhất để gửi tiền về nhà.',
    },
    keywords: {
      en: ['transfer', 'send money', 'wise', 'remittance', 'international', 'wire', 'fee', 'exchange rate'],
      zh: ['汇款', '转账', 'Wise', '汇款', '国际', '电汇', '手续费', '汇率'],
      ru: ['перевод', 'отправить деньги', 'Wise', 'ремиттанс', 'международный', 'курс'],
      ja: ['送金', 'Wise', '海外送金', '国際', '為替レート', '手数料'],
      vi: ['chuyển tiền', 'Wise', 'kiều hối', 'quốc tế', 'tỷ giá', 'phí'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'korea-delivery-apps-guide',
    icon: '🛵',
    title: {
      en: 'Delivery Apps Guide',
      zh: '韩国外卖APP指南',
      ru: 'Приложения доставки еды в Корее',
      ja: 'デリバリーアプリガイド',
      vi: 'Hướng dẫn ứng dụng giao đồ ăn',
    },
    description: {
      en: 'Baemin, Coupang Eats — how to order food delivery in Korea as a foreigner.',
      zh: '배달의민족、Coupang Eats — 外国人如何在韩国点外卖。',
      ru: 'Baemin, Coupang Eats — как заказать доставку еды в Корее иностранцу.',
      ja: 'Baemin、Coupang Eats — 外国人として韓国でフードデリバリーを注文する方法。',
      vi: 'Baemin, Coupang Eats — cách đặt giao đồ ăn ở Hàn Quốc cho người nước ngoài.',
    },
    keywords: {
      en: ['delivery', 'baemin', 'coupang eats', 'food', 'order', 'app', '배달', 'restaurant'],
      zh: ['外卖', '배달의민족', 'Coupang Eats', '食物', '点餐', '应用', '餐厅'],
      ru: ['доставка', 'Baemin', 'Coupang Eats', 'еда', 'заказ', 'приложение', 'ресторан'],
      ja: ['デリバリー', 'Baemin', 'Coupang Eats', '食事', '注文', 'アプリ', 'レストラン'],
      vi: ['giao hàng', 'Baemin', 'Coupang Eats', 'thức ăn', 'đặt hàng', 'ứng dụng', 'nhà hàng'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'korea-health-insurance-guide',
    icon: '🩺',
    title: {
      en: 'Health Insurance Guide',
      zh: '韩国健康保险指南',
      ru: 'Медицинское страхование в Корее',
      ja: '健康保険ガイド',
      vi: 'Hướng dẫn bảo hiểm y tế Hàn Quốc',
    },
    description: {
      en: 'NHIS health insurance for foreigners — enrollment, costs, and how to use it.',
      zh: '外国人国民健康保险 — 加入方法、费用及如何使用。',
      ru: 'Медицинское страхование NHIS для иностранцев — как записаться, стоимость и как пользоваться.',
      ja: '外国人向けNHIS健康保険 — 加入方法、費用、利用方法。',
      vi: 'Bảo hiểm y tế NHIS cho người nước ngoài — đăng ký, chi phí và cách sử dụng.',
    },
    keywords: {
      en: ['health insurance', 'nhis', 'insurance', 'medical', 'coverage', 'premium', 'enroll', 'foreigner'],
      zh: ['健康保险', 'NHIS', '保险', '医疗', '保障', '保费', '加入', '外国人'],
      ru: ['медицинская страховка', 'NHIS', 'страхование', 'медицина', 'взносы', 'иностранец'],
      ja: ['健康保険', 'NHIS', '保険', '医療', '保障', '保険料', '加入', '外国人'],
      vi: ['bảo hiểm y tế', 'NHIS', 'bảo hiểm', 'y tế', 'phí bảo hiểm', 'đăng ký', 'người nước ngoài'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'korea-rent-deposit-system',
    icon: '💰',
    title: {
      en: 'Korea Rent Deposit System (Jeonse)',
      zh: '韩国全税制度',
      ru: 'Система аренды в Корее (Чонсе)',
      ja: '韓国の保証金制度（チョンセ）',
      vi: 'Hệ thống đặt cọc thuê nhà Hàn Quốc (Jeonse)',
    },
    description: {
      en: 'How Korea\'s unique Jeonse and Wolse rental systems work — explained for foreigners.',
      zh: '韩国独特的全税和月租制度如何运作 — 为外国人详细解释。',
      ru: 'Как работают уникальные системы аренды Кореи — Чонсе и Вольсе — объяснение для иностранцев.',
      ja: '韓国独自のチョンセとウォルセの賃貸制度の仕組み — 外国人向け解説。',
      vi: 'Cách hệ thống thuê nhà Jeonse và Wolse độc đáo của Hàn Quốc hoạt động — giải thích cho người nước ngoài.',
    },
    keywords: {
      en: ['jeonse', 'wolse', 'rent', 'deposit', 'housing', 'apartment', 'lease', 'contract', 'guarantee'],
      zh: ['全税', '月租', '租房', '押金', '住房', '公寓', '租约', '合同'],
      ru: ['чонсе', 'вольсе', 'аренда', 'депозит', 'жильё', 'квартира', 'договор'],
      ja: ['チョンセ', 'ウォルセ', '賃貸', '保証金', '住まい', 'アパート', '契約'],
      vi: ['jeonse', 'wolse', 'thuê nhà', 'đặt cọc', 'nhà ở', 'căn hộ', 'hợp đồng'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
  {
    slug: 'part-time-jobs-korea',
    icon: '💼',
    title: {
      en: 'Part-Time Jobs in Korea',
      zh: '在韩国兼职打工',
      ru: 'Подработка в Корее',
      ja: '韓国でのアルバイト',
      vi: 'Việc làm bán thời gian ở Hàn Quốc',
    },
    description: {
      en: 'How to find part-time work in Korea as a foreign student — visa rules, platforms, and tips.',
      zh: '作为外国留学生如何在韩国找兼职 — 签证规定、平台和技巧。',
      ru: 'Как найти подработку в Корее иностранному студенту — визовые правила, платформы и советы.',
      ja: '外国人留学生として韓国でアルバイトを見つける方法 — ビザ規則、プラットフォーム、ヒント。',
      vi: 'Cách tìm việc làm bán thời gian ở Hàn Quốc với tư cách là sinh viên nước ngoài — quy định visa, nền tảng và mẹo.',
    },
    keywords: {
      en: ['part-time', 'job', 'work', 'student', 'arubaito', 'alba', 'earn', 'money', 'visa', 'permission'],
      zh: ['兼职', '工作', '打工', '留学生', '打工许可', '赚钱', '签证'],
      ru: ['подработка', 'работа', 'студент', 'арубайто', 'заработок', 'деньги', 'виза'],
      ja: ['アルバイト', '仕事', '働く', '留学生', '稼ぎ', 'お金', 'ビザ', '許可'],
      vi: ['bán thời gian', 'việc làm', 'làm thêm', 'sinh viên', 'kiếm tiền', 'visa', 'giấy phép'],
    },
    category: {
      en: 'Living', zh: '生活', ru: 'Жизнь', ja: '生活', vi: 'Cuộc sống',
    },
  },
];

/**
 * Search pages by query string for a given language.
 * Returns matched pages sorted by relevance.
 */
export function searchPages(query: string, lang: Lang): SearchPage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return SEARCH_PAGES
    .map((page) => {
      const title = (page.title[lang] ?? page.title.en).toLowerCase();
      const desc = (page.description[lang] ?? page.description.en).toLowerCase();
      const keywords = (page.keywords[lang] ?? page.keywords.en).join(' ').toLowerCase();
      const category = (page.category[lang] ?? page.category.en).toLowerCase();

      let score = 0;
      if (title.startsWith(q)) score += 10;
      if (title.includes(q)) score += 5;
      if (keywords.includes(q)) score += 3;
      if (desc.includes(q)) score += 2;
      if (category.includes(q)) score += 1;

      // Also match each word in query individually
      const words = q.split(/\s+/);
      for (const word of words) {
        if (word.length < 2) continue;
        if (title.includes(word)) score += 2;
        if (keywords.includes(word)) score += 1;
      }

      return { page, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ page }) => page);
}
