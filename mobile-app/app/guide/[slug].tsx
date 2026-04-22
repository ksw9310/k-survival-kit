import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useLang, Lang } from '../../context/LanguageContext';

const WISE_URL = 'https://wise.prf.hn/click/camref:1101l5IGWo';
const COUPANG_URL = 'https://link.coupang.com/a/esx4lG';

const WISE_BANNER: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: { title: 'Send money with Wise', desc: 'Real exchange rates, low fees. No hidden markups.', cta: 'Open Wise', badge: 'Affiliate' },
  ko: { title: 'Wise로 해외 송금', desc: '실제 환율, 낮은 수수료. 숨겨진 수수료 없음.', cta: 'Wise 열기', badge: '제휴' },
  zh: { title: '使用Wise汇款', desc: '真实汇率，低手续费，无隐藏费用。', cta: '打开Wise', badge: '推广' },
  ja: { title: 'Wiseで海外送金', desc: '実際の為替レート・低手数料・隠れた手数料なし。', cta: 'Wiseを開く', badge: 'PR' },
  ru: { title: 'Переводы через Wise', desc: 'Реальный курс, низкие комиссии. Без скрытых наценок.', cta: 'Открыть Wise', badge: 'Партнёр' },
};

const COUPANG_BANNER: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: { title: 'Shop on Coupang', desc: 'Korea\'s #1 shopping app. Fast delivery, great prices.', cta: 'Open Coupang', badge: 'Affiliate' },
  ko: { title: '쿠팡에서 쇼핑하기', desc: '한국 1위 쇼핑 앱. 빠른 배송, 합리적인 가격.', cta: '쿠팡 열기', badge: '제휴' },
  zh: { title: '在Coupang购物', desc: '韩国第一购物应用，快速配送，价格实惠。', cta: '打开Coupang', badge: '推广' },
  ja: { title: 'Coupangで買い物', desc: '韓国No.1ショッピングアプリ。即日配送・お得な価格。', cta: 'Coupangを開く', badge: 'PR' },
  ru: { title: 'Покупки на Coupang', desc: 'Лучший шопинг-приложение Кореи. Быстрая доставка.', cta: 'Открыть Coupang', badge: 'Партнёр' },
};

const KLOOK_URL = 'https://affiliate.klook.com/redirect?aid=118997&aff_adid=1259369&k_site=https%3A%2F%2Fwww.klook.com%2F';
const KLOOK_BANNER: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: { title: 'Book Transport Passes with Klook', desc: 'Airport bus, T-money, KTX passes — book in advance with instant confirmation.', cta: 'Browse Klook', badge: 'Affiliate' },
  ko: { title: 'Klook에서 교통권 예약', desc: '공항버스, T-머니, KTX패스 등 사전 예약 가능.', cta: 'Klook 보기', badge: '제휴' },
  zh: { title: '在Klook预订交通票券', desc: '机场大巴、T-money卡、KTX通票——提前预订，即时确认。', cta: '浏览Klook', badge: '推广' },
  ja: { title: 'Klookで交通パスを予約', desc: '空港バス・T-money・KTXパス——事前予約で即時確認。', cta: 'Klookを見る', badge: 'PR' },
  ru: { title: 'Транспортные билеты на Klook', desc: 'Автобус из аэропорта, T-money, KTX — бронируйте заранее.', cta: 'Смотреть Klook', badge: 'Партнёр' },
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
          body: '• Airport SIM (KT, SK Telecom at Incheon): Easy, no ARC needed\n• eSIM (Airalo, KT eSIM): Activate before you land\n• Full Korean Plan: Cheapest long-term, requires ARC',
        },
        {
          heading: 'Best for Short Stay',
          body: 'Get an eSIM through Airalo before flying. Plans start from $5 for 1GB.',
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
  ko: {
    'arc-card': {
      title: '외국인등록증 가이드',
      emoji: '🪪',
      sections: [
        {
          heading: '외국인등록증이란?',
          body: '외국인등록증(ARC)은 한국에 거주하는 외국인을 위한 신분증입니다. 은행, 휴대폰 개통, 보험 등 대부분의 공식 서비스에 필요합니다.',
        },
        {
          heading: '신청 시기',
          body: '입국 후 90일 이상 체류할 경우 90일 이내에 신청해야 합니다. 예약이 빨리 차므로 가능한 빨리 신청하세요.',
        },
        {
          heading: '필요 서류',
          body: '• 여권\n• 비자 서류\n• 재학증명서\n• 여권 사진\n• 신청서\n• 국내 주소',
        },
        {
          heading: '신청 장소',
          body: '가까운 출입국관리사무소를 방문하세요. 대학교 국제처에서 가장 가까운 사무소를 안내해 드립니다.',
        },
      ],
    },
    bank: {
      title: '외국인 은행 계좌 개설',
      emoji: '🏦',
      sections: [
        {
          heading: '추천 은행',
          body: '카카오뱅크와 토스뱅크는 외국인이 온라인으로 개설하기 가장 쉽습니다. 오프라인은 우리은행과 IBK기업은행이 외국인 전담 서비스를 운영합니다.',
        },
        {
          heading: '필요 서류',
          body: '• 여권\n• 외국인등록증 (대부분의 은행에서 필수)\n• 한국 휴대폰 번호\n• 국내 주소',
        },
        {
          heading: '팁',
          body: '외국인등록증을 받자마자 은행 계좌를 개설하세요. 일부 지점에는 영어 가능 직원이 있으니 미리 전화로 확인하세요.',
        },
      ],
    },
    sim: {
      title: '한국 SIM 카드',
      emoji: '📱',
      sections: [
        {
          heading: '옵션',
          body: '• 공항 SIM (인천공항 KT·SK텔레콤): 간편, 외국인등록증 불필요\n• eSIM (Airalo, KT eSIM): 입국 전 개통 가능\n• 정식 요금제: 장기 거주에 저렴, 외국인등록증 필요',
        },
        {
          heading: '단기 체류',
          body: '출국 전 Airalo에서 eSIM을 구매하세요. 1GB에 약 $5부터 시작합니다.',
        },
        {
          heading: '장기 체류',
          body: '외국인등록증 발급 후 알뜰폰 요금제를 사용하세요. 데이터 무제한이 월 1~3만 원 수준입니다.',
        },
      ],
    },
    delivery: {
      title: '한국 배달 앱',
      emoji: '🛵',
      sections: [
        {
          heading: '주요 앱',
          body: '• 배달의민족: 가장 많은 음식점\n• 쿠팡이츠: 빠른 배달, 할인 많음\n• 요기요: 서울 외 지역에서도 커버리지 좋음',
        },
        {
          heading: '주문 방법',
          body: '1. 배민 또는 쿠팡이츠 다운로드\n2. 한국 휴대폰 번호로 가입\n3. 한국어로 주소 입력\n4. 카드 결제 (대부분 앱에서 외국 카드 사용 가능)',
        },
        {
          heading: '팁',
          body: '네이버 지도에서 한국어 주소를 확인하세요. 배민은 설정에서 영어 모드를 지원합니다.',
        },
      ],
    },
    rent: {
      title: '한국 전월세 가이드',
      emoji: '🏠',
      sections: [
        {
          heading: '월세',
          body: '보증금과 월 임대료를 내는 일반적인 임대 방식입니다. 외국인에게 가장 일반적입니다.',
        },
        {
          heading: '전세',
          body: '집값의 30~80%에 해당하는 보증금을 일시 납부하고 월세 없이 거주하는 방식입니다. 계약 종료 시 전액 반환됩니다.',
        },
        {
          heading: '외국인을 위한 팁',
          body: '외국인에게는 월세가 강력히 추천됩니다. 반드시 공인중개사를 통해 계약하고, 동 주민센터에서 전입신고를 하세요.',
        },
        {
          heading: '계약 시 주의사항',
          body: '• 집주인 소유 여부 확인\n• 근저당 설정 여부 확인\n• 전입신고 필수\n• 모든 서류 보관',
        },
      ],
    },
    transport: {
      title: '한국 교통 이용',
      emoji: '🚇',
      sections: [
        {
          heading: 'T-머니 카드',
          body: '편의점에서 2,500원에 구매할 수 있습니다. 지하철, 버스, 택시에서 사용하며 단건 구매보다 저렴합니다.',
        },
        {
          heading: '지하철',
          body: '서울 지하철은 수도권 전 지역을 커버합니다. 기본 요금 1,400원. 네이버 지도나 카카오맵으로 경로를 확인하세요.',
        },
        {
          heading: '버스',
          body: '파란 버스: 서울 주요 간선 노선\n초록 버스: 동네 지선 노선\n빨간 버스: 수도권 급행',
        },
        {
          heading: '유용한 앱',
          body: '• 카카오맵 / 네이버 지도: 대중교통 경로\n• 카카오버스: 실시간 버스 위치\n• 코레일 앱: KTX 예매',
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
          body: '• 机场SIM（仁川机场KT·SK电信）：方便快捷，无需登录证\n• eSIM（Airalo、KT eSIM）：入境前可激活\n• 正式套餐：长期居住最划算，需要登录证',
        },
        {
          heading: '短期居住',
          body: '出发前通过Airalo购买eSIM。1GB套餐约5美元起。',
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
          body: '• 空港SIM（仁川空港KT・SKテレコム）：簡単、登録証不要\n• eSIM（Airalo、KT eSIM）：入国前に開通可能\n• 正規プラン：長期滞在に最安、登録証が必要',
        },
        {
          heading: '短期滞在',
          body: '出発前にAiraloでeSIMを購入。1GBプランは約500円から。',
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
          body: '• SIM в аэропорту (KT, SK Telecom в Инчхоне): просто, без ARC\n• eSIM (Airalo, KT eSIM): активируйте до прилёта\n• Местный тариф: дешевле всего для долгого проживания, нужна ARC',
        },
        {
          heading: 'Для краткосрочного пребывания',
          body: 'Купите eSIM через Airalo до отлёта. Тарифы от $5 за 1 ГБ.',
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
            {slug === 'bank' && (
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
});
