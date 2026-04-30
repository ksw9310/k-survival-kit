import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useLang, Lang } from '../../context/LanguageContext';

const WISE_URL = 'https://wise.prf.hn/click/camref:1101l5IGWo';
const COUPANG_URL = 'https://link.coupang.com/a/esx4lG';

const WISE_BANNER: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: { title: 'Send money with Wise', desc: 'Real exchange rates, low fees. No hidden markups.', cta: 'Open Wise', badge: 'Affiliate' },
  vi: { title: 'Chuyển tiền với Wise', desc: 'Tỷ giá thực, phí thấp. Không có phí ẩn.', cta: 'Mở Wise', badge: 'Liên kết' },
  zh: { title: '使用Wise汇款', desc: '真实汇率，低手续费，无隐藏费用。', cta: '打开Wise', badge: '推广' },
  ja: { title: 'Wiseで海外送金', desc: '実際の為替レート・低手数料・隠れた手数料なし。', cta: 'Wiseを開く', badge: 'PR' },
  ru: { title: 'Переводы через Wise', desc: 'Реальный курс, низкие комиссии. Без скрытых наценок.', cta: 'Открыть Wise', badge: 'Партнёр' },
};

const COUPANG_BANNER: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: { title: 'Shop on Coupang', desc: 'Korea\'s #1 shopping app. Fast delivery, great prices.', cta: 'Open Coupang', badge: 'Affiliate' },
  vi: { title: 'Mua sắm trên Coupang', desc: 'App mua sắm số 1 Hàn Quốc. Giao hàng nhanh, giá tốt.', cta: 'Mở Coupang', badge: 'Liên kết' },
  zh: { title: '在Coupang购物', desc: '韩国第一购物应用，快速配送，价格实惠。', cta: '打开Coupang', badge: '推广' },
  ja: { title: 'Coupangで買い物', desc: '韓国No.1ショッピングアプリ。即日配送・お得な価格。', cta: 'Coupangを開く', badge: 'PR' },
  ru: { title: 'Покупки на Coupang', desc: 'Лучший шопинг-приложение Кореи. Быстрая доставка.', cta: 'Открыть Coupang', badge: 'Партнёр' },
};

const KLOOK_URL = 'https://affiliate.klook.com/redirect?aid=118997&aff_adid=1259369&k_site=https%3A%2F%2Fwww.klook.com%2F';
const KLOOK_BANNER: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: { title: 'Book Transport Passes with Klook', desc: 'Airport bus, T-money, KTX passes — book in advance with instant confirmation.', cta: 'Browse Klook', badge: 'Affiliate' },
  vi: { title: 'Đặt vé giao thông trên Klook', desc: 'Xe buýt sân bay, thẻ T-money, vé KTX — đặt trước, xác nhận ngay.', cta: 'Xem Klook', badge: 'Liên kết' },
  zh: { title: '在Klook预订交通票券', desc: '机场大巴、T-money卡、KTX通票——提前预订，即时确认。', cta: '浏览Klook', badge: '推广' },
  ja: { title: 'Klookで交通パスを予約', desc: '空港バス・T-money・KTXパス——事前予約で即時確認。', cta: 'Klookを見る', badge: 'PR' },
  ru: { title: 'Транспортные билеты на Klook', desc: 'Автобус из аэропорта, T-money, KTX — бронируйте заранее.', cta: 'Смотреть Klook', badge: 'Партнёр' },
};

const SAILY_URL = 'https://go.saily.site/aff_c?offer_id=101&aff_id=13847';
const SAILY_BANNER: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: { title: 'eSIM Korea with Saily', desc: 'Activate before you land. No physical SIM needed. Fast data from day one.', cta: 'Get Saily eSIM', badge: 'Affiliate' },
  vi: { title: 'eSIM Hàn Quốc với Saily', desc: 'Kích hoạt trước khi lên máy bay. Không cần SIM vật lý. Có data ngay ngày đầu.', cta: 'Xem Saily', badge: 'Liên kết' },
  zh: { title: '韩国eSIM — Saily', desc: '落地前激活，无需实体SIM卡，第一天就能用流量。', cta: '获取Saily eSIM', badge: '推广' },
  ja: { title: '韓国eSIM — Saily', desc: '到着前に開通。物理SIM不要。初日からデータ通信可能。', cta: 'SailyでeSIMを取得', badge: 'PR' },
  ru: { title: 'eSIM в Корею — Saily', desc: 'Активируйте до прилёта. Физическая SIM не нужна. Интернет с первого дня.', cta: 'Получить Saily eSIM', badge: 'Партнёр' },
};

const NORDVPN_URL = 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=146085&url_id=23180';
const NORDVPN_BANNER: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: { title: 'Stay Safe Online with NordVPN', desc: 'Public Wi-Fi at cafes and universities can expose your data. Browse securely anywhere in Korea.', cta: 'Get NordVPN', badge: 'Affiliate' },
  vi: { title: 'Duyệt web an toàn với NordVPN', desc: 'Wi-Fi công cộng ở quán cà phê, trường học có thể lộ dữ liệu. Bảo mật kết nối ở Hàn Quốc.', cta: 'Dùng NordVPN', badge: 'Liên kết' },
  zh: { title: '用NordVPN保护上网安全', desc: '咖啡馆、学校公共Wi-Fi可能暴露数据。在韩国随时安全上网。', cta: '获取NordVPN', badge: '推广' },
  ja: { title: 'NordVPNで安全なネット接続', desc: 'カフェや大学のWi-Fiはデータ漏洩のリスクあり。韓国中どこでも安全に接続。', cta: 'NordVPNを取得', badge: 'PR' },
  ru: { title: 'Безопасный интернет с NordVPN', desc: 'Публичный Wi-Fi в кафе и университетах небезопасен. Защитите данные в Корее.', cta: 'Получить NordVPN', badge: 'Партнёр' },
};

type Section = { heading: string; body: string };
type GuideData = { title: string; emoji: string; sections: Section[] };
type GuideMap = Record<string, GuideData>;

const GUIDES: Record<Lang, GuideMap> = {
  en: {
    'arc-card': {
      title: 'ARC Card Guide',
      emoji: '🪪',
      sections: [
        {
          heading: 'What is an ARC Card?',
          body: 'The Alien Registration Card (ARC) is an ID card for foreign residents in Korea. It is required for banking, phone plans, insurance, and many official services.',
        },
        {
          heading: 'When to Apply',
          body: 'Apply within 90 days of arrival if staying longer than 90 days. Apply as early as possible — appointment slots fill up fast.',
        },
        {
          heading: 'Documents Needed',
          body: '• Passport\n• Visa documents\n• University enrollment certificate\n• Passport photo\n• Application form\n• Korean address',
        },
        {
          heading: 'Where to Apply',
          body: 'Visit your local Immigration Office (출입국관리사무소). Your university international office can guide you to the nearest office.',
        },
      ],
    },
    bank: {
      title: 'Best Bank for Foreigners',
      emoji: '🏦',
      sections: [
        {
          heading: 'Recommended Banks',
          body: 'KakaoBank and Toss Bank are easiest for foreigners to open online. For in-person: Woori Bank and IBK have dedicated foreigner services.',
        },
        {
          heading: 'Documents Needed',
          body: '• Passport\n• ARC Card (required at most banks)\n• Korean phone number\n• Korean address',
        },
        {
          heading: 'Tips',
          body: 'Open your bank account as soon as you get your ARC. Some branches have English-speaking staff — call ahead to check.',
        },
      ],
    },
    sim: {
      title: 'SIM Card in Korea',
      emoji: '📱',
      sections: [
        {
          heading: 'Options',
          body: '• Airport SIM (KT, SK Telecom at Incheon): Easy, no ARC needed\n• eSIM (Saily, KT eSIM): Activate before you land\n• Full Korean Plan: Cheapest long-term, requires ARC',
        },
        {
          heading: 'Best for Short Stay',
          body: 'Get an eSIM through Saily before flying. Plans start from $5 for 1GB.',
        },
        {
          heading: 'Best for Long Stay',
          body: 'After getting your ARC, open an MVNO plan (알뜰폰). Cost: ₩10,000–₩30,000/month for unlimited data.',
        },
      ],
    },
    delivery: {
      title: 'Delivery Apps in Korea',
      emoji: '🛵',
      sections: [
        {
          heading: 'Main Apps',
          body: '• Baemin (배달의민족): Largest, most restaurants\n• Coupang Eats: Fast delivery, frequent discounts\n• Yogiyo: Good coverage outside Seoul',
        },
        {
          heading: 'How to Order',
          body: '1. Download Baemin or Coupang Eats\n2. Sign up with Korean phone number\n3. Add your address in Korean\n4. Pay by card (foreign cards work on most apps)',
        },
        {
          heading: 'Tips',
          body: 'Use Naver Maps to get your address in Korean. Baemin has an English mode in settings.',
        },
      ],
    },
    rent: {
      title: 'Korea Rent & Deposit System',
      emoji: '🏠',
      sections: [
        {
          heading: 'Wolse (월세)',
          body: 'Standard monthly rent. Pay a smaller deposit upfront plus monthly rent. Most common for foreigners.',
        },
        {
          heading: 'Jeonse (전세)',
          body: 'Pay a large lump-sum deposit (30–80% of property value), no monthly rent. Deposit returned at end of contract.',
        },
        {
          heading: 'For Foreigners',
          body: 'Wolse is strongly recommended. Always use a licensed real estate agent (공인중개사) and register your lease at the Dong office.',
        },
        {
          heading: 'Contract Tips',
          body: '• Verify the landlord owns the property\n• Check for existing loans on the property\n• Register your lease (전입신고)\n• Keep all documents',
        },
      ],
    },
    transport: {
      title: 'Transport in Korea',
      emoji: '🚇',
      sections: [
        {
          heading: 'T-Money Card',
          body: 'Get a T-Money card at any convenience store for ₩2,500. Tap on subways, buses, and taxis. Cheaper than single tickets.',
        },
        {
          heading: 'Subway',
          body: 'Seoul subway covers the entire metro area. Base fare ₩1,400. Use Naver Maps or KakaoMap for directions.',
        },
        {
          heading: 'Bus',
          body: 'Blue buses: Major routes across Seoul\nGreen buses: Local neighborhood routes\nRed buses: Express to suburbs',
        },
        {
          heading: 'Apps',
          body: '• KakaoMap / Naver Maps: Transit routing\n• KakaoBus: Real-time bus tracking\n• Korail: KTX high-speed train booking',
        },
      ],
    },
  },
  vi: {
    'arc-card': {
      title: 'Hướng dẫn thẻ ARC',
      emoji: '🪪',
      sections: [
        {
          heading: 'Thẻ ARC là gì?',
          body: 'Thẻ đăng ký người nước ngoài (ARC) là CMND cho người nước ngoài cư trú tại Hàn Quốc. Cần thiết để mở tài khoản ngân hàng, đăng ký SIM, bảo hiểm và nhiều dịch vụ chính thức khác.',
        },
        {
          heading: 'Khi nào nộp đơn',
          body: 'Nộp đơn trong vòng 90 ngày sau khi nhập cảnh nếu ở lại hơn 90 ngày. Nên đăng ký sớm — lịch hẹn nhanh đầy.',
        },
        {
          heading: 'Giấy tờ cần thiết',
          body: '• Hộ chiếu\n• Giấy tờ visa\n• Giấy xác nhận nhập học\n• Ảnh hộ chiếu\n• Đơn đăng ký\n• Địa chỉ tại Hàn Quốc',
        },
        {
          heading: 'Nộp đơn ở đâu',
          body: 'Đến Văn phòng Xuất nhập cảnh gần nhất (출입국관리사무소). Phòng Quốc tế của trường có thể hướng dẫn bạn đến văn phòng gần nhất.',
        },
      ],
    },
    bank: {
      title: 'Ngân hàng tốt nhất cho người nước ngoài',
      emoji: '🏦',
      sections: [
        {
          heading: 'Ngân hàng đề xuất',
          body: 'KakaoBank và Toss Bank dễ mở tài khoản online nhất. Tại quầy: Woori Bank và IBK có dịch vụ chuyên dành cho người nước ngoài.',
        },
        {
          heading: 'Giấy tờ cần thiết',
          body: '• Hộ chiếu\n• Thẻ ARC (bắt buộc ở hầu hết ngân hàng)\n• Số điện thoại Hàn Quốc\n• Địa chỉ tại Hàn Quốc',
        },
        {
          heading: 'Mẹo',
          body: 'Mở tài khoản ngay khi có thẻ ARC. Một số chi nhánh có nhân viên nói tiếng Anh — gọi điện trước để kiểm tra.',
        },
      ],
    },
    sim: {
      title: 'SIM Card ở Hàn Quốc',
      emoji: '📱',
      sections: [
        {
          heading: 'Các lựa chọn',
          body: '• SIM sân bay (KT, SK Telecom tại Incheon): Tiện lợi, không cần ARC\n• eSIM (Saily, KT eSIM): Kích hoạt trước khi lên máy bay\n• Gói dài hạn: Rẻ nhất về lâu dài, cần ARC',
        },
        {
          heading: 'Ở ngắn hạn',
          body: 'Mua eSIM qua Saily trước khi bay. Gói từ 1GB chỉ $5.',
        },
        {
          heading: 'Ở dài hạn',
          body: 'Sau khi có ARC, đăng ký gói MVNO (알뜰폰). Chi phí: 10.000–30.000₩/tháng cho data không giới hạn.',
        },
      ],
    },
    delivery: {
      title: 'Ứng dụng giao đồ ăn ở Hàn Quốc',
      emoji: '🛵',
      sections: [
        {
          heading: 'Ứng dụng chính',
          body: '• Baemin (배달의민족): Lớn nhất, nhiều nhà hàng nhất\n• Coupang Eats: Giao hàng nhanh, nhiều khuyến mãi\n• Yogiyo: Phủ sóng tốt ngoài Seoul',
        },
        {
          heading: 'Cách đặt đồ ăn',
          body: '1. Tải Baemin hoặc Coupang Eats\n2. Đăng ký bằng số điện thoại Hàn Quốc\n3. Nhập địa chỉ bằng tiếng Hàn\n4. Thanh toán bằng thẻ (thẻ nước ngoài dùng được ở hầu hết app)',
        },
        {
          heading: 'Mẹo',
          body: 'Dùng Naver Maps để lấy địa chỉ tiếng Hàn. Baemin có chế độ tiếng Anh trong cài đặt.',
        },
      ],
    },
    rent: {
      title: 'Hệ thống thuê nhà Hàn Quốc',
      emoji: '🏠',
      sections: [
        {
          heading: 'Wolse (월세)',
          body: 'Thuê nhà theo tháng thông thường. Đặt cọc nhỏ + tiền thuê hàng tháng. Phổ biến nhất cho người nước ngoài.',
        },
        {
          heading: 'Jeonse (전세)',
          body: 'Đặt cọc một lần lớn (30–80% giá trị tài sản), không trả tiền thuê hàng tháng. Hoàn lại khi hết hợp đồng.',
        },
        {
          heading: 'Dành cho người nước ngoài',
          body: 'Nên chọn Wolse. Luôn dùng môi giới bất động sản có phép (공인중개사) và đăng ký hợp đồng tại văn phòng Dong.',
        },
        {
          heading: 'Mẹo ký hợp đồng',
          body: '• Xác nhận chủ nhà có quyền sở hữu\n• Kiểm tra các khoản vay hiện có\n• Đăng ký thuê nhà (전입신고)\n• Giữ tất cả giấy tờ',
        },
      ],
    },
    transport: {
      title: 'Giao thông ở Hàn Quốc',
      emoji: '🚇',
      sections: [
        {
          heading: 'Thẻ T-Money',
          body: 'Mua thẻ T-Money tại bất kỳ cửa hàng tiện lợi nào với giá 2.500₩. Quẹt khi đi tàu điện ngầm, xe buýt và taxi. Rẻ hơn mua vé lẻ.',
        },
        {
          heading: 'Tàu điện ngầm',
          body: 'Tàu điện ngầm Seoul bao phủ toàn bộ khu vực thủ đô. Giá cơ bản 1.400₩. Dùng Naver Maps hoặc KakaoMap để tra đường.',
        },
        {
          heading: 'Xe buýt',
          body: 'Xe buýt xanh: Tuyến chính qua Seoul\nXe buýt xanh lá: Tuyến nội khu\nXe buýt đỏ: Tốc hành ra ngoại ô',
        },
        {
          heading: 'Ứng dụng',
          body: '• KakaoMap / Naver Maps: Tra tuyến xe\n• KakaoBus: Theo dõi xe buýt thời gian thực\n• Korail: Đặt vé KTX',
        },
      ],
    },
  },
  zh: {
    'arc-card': {
      title: '外国人登录证指南',
      emoji: '🪪',
      sections: [
        {
          heading: '什么是外国人登录证？',
          body: '外国人登录证(ARC)是居住在韩国的外国人身份证件，办理银行账户、手机卡、保险等大多数官方服务都需要它。',
        },
        {
          heading: '申请时间',
          body: '计划在韩停留超过90天的情况下，需在入境后90天内申请。预约名额有限，请尽早申请。',
        },
        {
          heading: '所需材料',
          body: '• 护照\n• 签证文件\n• 在校证明\n• 证件照\n• 申请表\n• 韩国地址',
        },
        {
          heading: '申请地点',
          body: '前往当地出入境管理事务所。大学国际处可以指引您前往最近的办事处。',
        },
      ],
    },
    bank: {
      title: '外国人开设银行账户',
      emoji: '🏦',
      sections: [
        {
          heading: '推荐银行',
          body: 'KakaoBank和Toss Bank最易在线开户。线下开户推荐友利银行和IBK企业银行，均有外国人专属服务。',
        },
        {
          heading: '所需材料',
          body: '• 护照\n• 外国人登录证（大多数银行必须）\n• 韩国手机号\n• 韩国地址',
        },
        {
          heading: '小贴士',
          body: '拿到外国人登录证后立刻开设银行账户。部分支行有英语工作人员，可提前致电确认。',
        },
      ],
    },
    sim: {
      title: '韩国SIM卡指南',
      emoji: '📱',
      sections: [
        {
          heading: '选择方案',
          body: '• 机场SIM（仁川机场KT·SK电信）：方便快捷，无需登录证\n• eSIM（Saily、KT eSIM）：入境前可激活\n• 正式套餐：长期居住最划算，需要登录证',
        },
        {
          heading: '短期居住',
          body: '出发前通过Saily购买eSIM。1GB套餐约5美元起。',
        },
        {
          heading: '长期居住',
          body: '拿到登录证后，办理알뜰폰（MVNO）套餐。不限量套餐每月约1~3万韩元。',
        },
      ],
    },
    delivery: {
      title: '韩国外卖APP指南',
      emoji: '🛵',
      sections: [
        {
          heading: '主要APP',
          body: '• 배달의민족（Baemin）：餐厅最多\n• 쿠팡이츠（Coupang Eats）：配送快，优惠多\n• 요기요（Yogiyo）：首尔以外地区覆盖好',
        },
        {
          heading: '如何点餐',
          body: '1. 下载Baemin或Coupang Eats\n2. 用韩国手机号注册\n3. 用韩语输入地址\n4. 刷卡支付（大多数APP支持境外卡）',
        },
        {
          heading: '小贴士',
          body: '用Naver地图查询韩语地址。Baemin设置里支持英语模式。',
        },
      ],
    },
    rent: {
      title: '韩国租房押金指南',
      emoji: '🏠',
      sections: [
        {
          heading: '月租（월세）',
          body: '支付小额押金加月租，是外国人最常见的租房方式。',
        },
        {
          heading: '全税（전세）',
          body: '一次性支付房价30~80%作为押金，不付月租。合同结束时全额返还。',
        },
        {
          heading: '外国人建议',
          body: '强烈建议外国人选择月租。务必通过持牌房产中介（공인중개사）签订合同，并在洞住民中心完成迁入登记。',
        },
        {
          heading: '签约注意事项',
          body: '• 确认房东对房屋拥有所有权\n• 查看房屋是否有抵押贷款\n• 必须办理迁入登记（전입신고）\n• 保存所有文件',
        },
      ],
    },
    transport: {
      title: '韩国交通指南',
      emoji: '🚇',
      sections: [
        {
          heading: 'T-Money卡',
          body: '在任意便利店2500韩元购买。可乘地铁、公交、打车，比单次购票便宜。',
        },
        {
          heading: '地铁',
          body: '首尔地铁覆盖整个首都圈。起步价1400韩元。可用Naver地图或KakaoMap查询路线。',
        },
        {
          heading: '公交',
          body: '蓝色公交：首尔主要干线\n绿色公交：社区支线\n红色公交：郊区快速线',
        },
        {
          heading: '实用APP',
          body: '• KakaoMap / Naver地图：公交路线\n• KakaoBus：实时公交位置\n• Korail：KTX高铁订票',
        },
      ],
    },
  },
  ja: {
    'arc-card': {
      title: '外国人登録証ガイド',
      emoji: '🪪',
      sections: [
        {
          heading: '外国人登録証とは？',
          body: '外国人登録証（ARC）は韓国に居住する外国人のための身分証明書です。銀行、携帯電話、保険など多くの公式サービスに必要です。',
        },
        {
          heading: '申請時期',
          body: '90日以上滞在する場合、入国後90日以内に申請してください。予約枠がすぐに埋まるため、早めに申請しましょう。',
        },
        {
          heading: '必要書類',
          body: '• パスポート\n• ビザ書類\n• 在学証明書\n• 証明写真\n• 申請書\n• 韓国の住所',
        },
        {
          heading: '申請場所',
          body: '最寄りの出入国管理事務所を訪問してください。大学の国際部が案内してくれます。',
        },
      ],
    },
    bank: {
      title: '外国人の銀行口座開設',
      emoji: '🏦',
      sections: [
        {
          heading: 'おすすめ銀行',
          body: 'KakaoBankとToss Bankはオンラインで最も簡単に開設できます。対面ではウリ銀行とIBK銀行が外国人専用サービスを提供しています。',
        },
        {
          heading: '必要書類',
          body: '• パスポート\n• 外国人登録証（ほとんどの銀行で必須）\n• 韓国の電話番号\n• 韓国の住所',
        },
        {
          heading: 'ヒント',
          body: '外国人登録証を受け取ったらすぐに口座を開設しましょう。英語対応スタッフがいる支店もあります。事前に電話で確認を。',
        },
      ],
    },
    sim: {
      title: '韓国SIMカードガイド',
      emoji: '📱',
      sections: [
        {
          heading: '選択肢',
          body: '• 空港SIM（仁川空港KT・SKテレコム）：簡単、登録証不要\n• eSIM（Saily、KT eSIM）：入国前に開通可能\n• 正規プラン：長期滞在に最安、登録証が必要',
        },
        {
          heading: '短期滞在',
          body: '出発前にSailyでeSIMを購入。1GBプランは約500円から。',
        },
        {
          heading: '長期滞在',
          body: '登録証取得後、알뜰폰（格安SIM）プランを契約。無制限データが月1,000〜3,000円程度。',
        },
      ],
    },
    delivery: {
      title: '韓国デリバリーアプリ',
      emoji: '🛵',
      sections: [
        {
          heading: '主要アプリ',
          body: '• 배달의민족（Baemin）：最多レストラン数\n• 쿠팡이츠（Coupang Eats）：高速配達、割引多め\n• 요기요（Yogiyo）：ソウル外でもカバレッジ良好',
        },
        {
          heading: '注文方法',
          body: '1. BaeminまたはCoupang Eatsをダウンロード\n2. 韓国の電話番号で登録\n3. 韓国語で住所を入力\n4. カード払い（外国カードも多くのアプリで使用可）',
        },
        {
          heading: 'ヒント',
          body: 'Naver Mapsで韓国語の住所を確認しましょう。Baeminは設定で英語モードに変更できます。',
        },
      ],
    },
    rent: {
      title: '韓国の賃貸・保証金ガイド',
      emoji: '🏠',
      sections: [
        {
          heading: '月払い（월세）',
          body: '少額の保証金と月払い家賃を支払う一般的な賃貸方式。外国人に最も一般的です。',
        },
        {
          heading: '全額保証金（전세）',
          body: '物件価格の30〜80%を一括で預け、家賃なしで居住。契約終了時に全額返還されます。',
        },
        {
          heading: '外国人向けアドバイス',
          body: '外国人には月払い（월세）を強くお勧めします。必ず公認不動産業者（공인중개사）を通じて契約し、洞住民センターで転入届を出してください。',
        },
        {
          heading: '契約時の注意点',
          body: '• 家主の所有権を確認\n• 抵当設定の有無を確認\n• 転入届（전입신고）は必須\n• 全書類を保管',
        },
      ],
    },
    transport: {
      title: '韓国の交通機関',
      emoji: '🚇',
      sections: [
        {
          heading: 'T-Moneyカード',
          body: 'コンビニで2,500ウォンで購入。地下鉄・バス・タクシーで使用でき、都度購入より安くなります。',
        },
        {
          heading: '地下鉄',
          body: 'ソウル地下鉄は首都圏全体をカバー。基本料金1,400ウォン。Naver MapsやKakaoMapで経路検索できます。',
        },
        {
          heading: 'バス',
          body: '青バス：ソウル主要幹線\n緑バス：地域支線\n赤バス：郊外急行',
        },
        {
          heading: 'おすすめアプリ',
          body: '• KakaoMap / Naver Maps：乗換案内\n• KakaoBus：リアルタイムバス位置\n• Korail：KTX新幹線予約',
        },
      ],
    },
  },
  ru: {
    'arc-card': {
      title: 'Карта иностранца (ARC)',
      emoji: '🪪',
      sections: [
        {
          heading: 'Что такое карта ARC?',
          body: 'Карта регистрации иностранца (ARC) — это удостоверение личности для иностранных резидентов Кореи. Необходима для открытия банковского счёта, SIM-карты, страховки и большинства официальных услуг.',
        },
        {
          heading: 'Когда подавать заявку',
          body: 'Если вы планируете пробыть в Корее более 90 дней, подайте заявку в течение первых 90 дней. Записывайтесь заранее — места быстро заканчиваются.',
        },
        {
          heading: 'Необходимые документы',
          body: '• Паспорт\n• Визовые документы\n• Справка о зачислении в университет\n• Фото на документы\n• Бланк заявления\n• Адрес в Корее',
        },
        {
          heading: 'Где подать заявку',
          body: 'Посетите местный Офис по делам иностранцев (출입국관리사무소). Международный отдел университета поможет найти ближайший офис.',
        },
      ],
    },
    bank: {
      title: 'Открытие банковского счёта',
      emoji: '🏦',
      sections: [
        {
          heading: 'Рекомендуемые банки',
          body: 'KakaoBank и Toss Bank — самые удобные для онлайн-открытия счёта. Для личного визита: Woori Bank и IBK имеют специальные услуги для иностранцев.',
        },
        {
          heading: 'Необходимые документы',
          body: '• Паспорт\n• Карта ARC (обязательна в большинстве банков)\n• Корейский номер телефона\n• Адрес в Корее',
        },
        {
          heading: 'Советы',
          body: 'Откройте счёт сразу после получения карты ARC. В некоторых отделениях есть англоговорящие сотрудники — уточните заранее по телефону.',
        },
      ],
    },
    sim: {
      title: 'SIM-карта в Корее',
      emoji: '📱',
      sections: [
        {
          heading: 'Варианты',
          body: '• SIM в аэропорту (KT, SK Telecom в Инчхоне): просто, без ARC\n• eSIM (Saily, KT eSIM): активируйте до прилёта\n• Местный тариф: дешевле всего для долгого проживания, нужна ARC',
        },
        {
          heading: 'Для краткосрочного пребывания',
          body: 'Купите eSIM через Saily до отлёта. Тарифы от $5 за 1 ГБ.',
        },
        {
          heading: 'Для долгосрочного пребывания',
          body: 'После получения ARC оформите тариф MVNO (알뜰폰). Безлимитный интернет от 10 000 до 30 000 вон в месяц.',
        },
      ],
    },
    delivery: {
      title: 'Приложения доставки еды',
      emoji: '🛵',
      sections: [
        {
          heading: 'Основные приложения',
          body: '• Baemin (배달의민족): наибольший выбор ресторанов\n• Coupang Eats: быстрая доставка, частые скидки\n• Yogiyo: хорошее покрытие за пределами Сеула',
        },
        {
          heading: 'Как сделать заказ',
          body: '1. Скачайте Baemin или Coupang Eats\n2. Зарегистрируйтесь с корейским номером телефона\n3. Введите адрес на корейском языке\n4. Оплатите картой (иностранные карты принимаются в большинстве приложений)',
        },
        {
          heading: 'Советы',
          body: 'Узнайте адрес на корейском через Naver Maps. В Baemin есть английский режим в настройках.',
        },
      ],
    },
    rent: {
      title: 'Аренда жилья в Корее',
      emoji: '🏠',
      sections: [
        {
          heading: 'Вольсе (월세)',
          body: 'Стандартная аренда: небольшой залог плюс ежемесячная плата. Наиболее распространённый вариант для иностранцев.',
        },
        {
          heading: 'Чонсе (전세)',
          body: 'Уникальная корейская система: единовременный залог (30–80% стоимости жилья), без ежемесячной платы. Залог возвращается по окончании договора.',
        },
        {
          heading: 'Советы для иностранцев',
          body: 'Иностранцам настоятельно рекомендуется вольсе. Обязательно используйте лицензированного агента (공인중개사) и зарегистрируйте аренду в местном офисе дон.',
        },
        {
          heading: 'Советы по договору',
          body: '• Убедитесь, что арендодатель — собственник\n• Проверьте наличие обременений\n• Оформите регистрацию аренды (전입신고)\n• Сохраняйте все документы',
        },
      ],
    },
    transport: {
      title: 'Транспорт в Корее',
      emoji: '🚇',
      sections: [
        {
          heading: 'Карта T-Money',
          body: 'Купите карту T-Money в любом удобном магазине за 2 500 вон. Используется в метро, автобусах и такси. Дешевле разовых билетов.',
        },
        {
          heading: 'Метро',
          body: 'Сеульское метро охватывает весь столичный регион. Базовая стоимость — 1 400 вон. Используйте Naver Maps или KakaoMap для маршрутов.',
        },
        {
          heading: 'Автобусы',
          body: 'Синие автобусы: главные маршруты по Сеулу\nЗелёные автобусы: местные районные маршруты\nКрасные автобусы: экспрессы в пригороды',
        },
        {
          heading: 'Полезные приложения',
          body: '• KakaoMap / Naver Maps: маршруты транспорта\n• KakaoBus: расписание автобусов в реальном времени\n• Korail: бронирование билетов на KTX',
        },
      ],
    },
  },
};

function AffiliateBannerBlock({
  url,
  emoji,
  data,
  bgColor,
  borderColor,
  textColor,
  descColor,
  ctaColor,
  badgeBg,
  badgeText,
  couponCode,
}: {
  url: string;
  emoji: string;
  data: { title: string; desc: string; cta: string; badge: string };
  bgColor: string;
  borderColor: string;
  textColor: string;
  descColor: string;
  ctaColor: string;
  badgeBg: string;
  badgeText: string;
  couponCode?: string;
}) {
  return (
    <TouchableOpacity
      style={[styles.banner, { backgroundColor: bgColor, borderColor }]}
      onPress={() => Linking.openURL(url)}
      activeOpacity={0.85}
    >
      <View style={styles.bannerLeft}>
        <Text style={styles.bannerEmoji}>{emoji}</Text>
        <View style={styles.bannerTextWrap}>
          <View style={styles.bannerTitleRow}>
            <Text style={[styles.bannerTitle, { color: textColor }]}>{data.title}</Text>
            <View style={[styles.bannerBadge, { backgroundColor: badgeBg }]}>
              <Text style={[styles.bannerBadgeText, { color: badgeText }]}>{data.badge}</Text>
            </View>
          </View>
          <Text style={[styles.bannerDesc, { color: descColor }]}>{data.desc}</Text>
          {couponCode && (
            <View style={styles.couponRow}>
              <Text style={styles.couponLabel}>🏷️</Text>
              <View style={styles.couponBox}>
                <Text style={styles.couponCode}>{couponCode}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
      <Text style={[styles.bannerCta, { color: ctaColor }]}>{data.cta} →</Text>
    </TouchableOpacity>
  );
}

export default function GuideScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const { lang } = useLang();
  const guide = GUIDES[lang]?.[slug ?? ''];

  return (
    <>
      <Stack.Screen options={{ title: guide?.title ?? 'Guide' }} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {!guide ? (
          <View style={styles.notFound}>
            <Text style={styles.notFoundText}>Guide not found</Text>
          </View>
        ) : (
          <>
            <View style={styles.hero}>
              <Text style={styles.heroEmoji}>{guide.emoji}</Text>
              <Text style={styles.heroTitle}>{guide.title}</Text>
            </View>
            {guide.sections.map((section) => (
              <View key={section.heading} style={styles.section}>
                <Text style={styles.heading}>{section.heading}</Text>
                <Text style={styles.body}>{section.body}</Text>
              </View>
            ))}
            {(slug === 'bank' || slug === 'rent') && (
              <AffiliateBannerBlock
                url={WISE_URL}
                emoji="💸"
                data={WISE_BANNER[lang] ?? WISE_BANNER.en}
                bgColor="#f0fdf4"
                borderColor="#86efac"
                textColor="#14532d"
                descColor="#166534"
                ctaColor="#16a34a"
                badgeBg="#bbf7d0"
                badgeText="#166534"
              />
            )}
            {slug === 'delivery' && (
              <AffiliateBannerBlock
                url={COUPANG_URL}
                emoji="🛍️"
                data={COUPANG_BANNER[lang] ?? COUPANG_BANNER.en}
                bgColor="#fff1f2"
                borderColor="#fecdd3"
                textColor="#881337"
                descColor="#9f1239"
                ctaColor="#e11d48"
                badgeBg="#ffe4e6"
                badgeText="#be123c"
              />
            )}
            {slug === 'transport' && (
              <AffiliateBannerBlock
                url={KLOOK_URL}
                emoji="🎟️"
                data={KLOOK_BANNER[lang] ?? KLOOK_BANNER.en}
                bgColor="#fff1f2"
                borderColor="#fecdd3"
                textColor="#881337"
                descColor="#9f1239"
                ctaColor="#e11d48"
                badgeBg="#ffe4e6"
                badgeText="#be123c"
              />
            )}
            {slug === 'sim' && (
              <>
                <AffiliateBannerBlock
                  url={SAILY_URL}
                  emoji="📶"
                  data={SAILY_BANNER[lang] ?? SAILY_BANNER.en}
                  bgColor="#eff6ff"
                  borderColor="#93c5fd"
                  textColor="#1e3a5f"
                  descColor="#1d4ed8"
                  ctaColor="#2563eb"
                  badgeBg="#dbeafe"
                  badgeText="#1d4ed8"
                  couponCode="KSURVIVALKIT"
                />
                <AffiliateBannerBlock
                  url={NORDVPN_URL}
                  emoji="🔒"
                  data={NORDVPN_BANNER[lang] ?? NORDVPN_BANNER.en}
                  bgColor="#f0f9ff"
                  borderColor="#7dd3fc"
                  textColor="#0c4a6e"
                  descColor="#0369a1"
                  ctaColor="#0284c7"
                  badgeBg="#e0f2fe"
                  badgeText="#0369a1"
                />
              </>
            )}
          </>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, paddingBottom: 48 },
  notFound: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  notFoundText: { fontSize: 16, color: '#64748b' },
  hero: {
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  heroEmoji: { fontSize: 44, marginBottom: 10 },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },
  banner: {
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    marginBottom: 4,
    borderWidth: 1,
    gap: 12,
  },
  bannerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 10,
  },
  bannerEmoji: { fontSize: 28, marginTop: 2 },
  bannerTextWrap: { flex: 1 },
  bannerTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 3 },
  bannerTitle: { fontSize: 14, fontWeight: '700' },
  bannerBadge: { borderRadius: 6, paddingHorizontal: 6, paddingVertical: 1 },
  bannerBadgeText: { fontSize: 10, fontWeight: '700' },
  bannerDesc: { fontSize: 12, lineHeight: 18 },
  bannerCta: { fontSize: 13, fontWeight: '800', textAlign: 'right' },
  couponRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6 },
  couponLabel: { fontSize: 12 },
  couponBox: {
    borderWidth: 1.5,
    borderColor: '#94a3b8',
    borderStyle: 'dashed',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#fff',
  },
  couponCode: { fontSize: 12, fontWeight: '800', letterSpacing: 1.5, color: '#0f172a', fontFamily: 'monospace' },
});
