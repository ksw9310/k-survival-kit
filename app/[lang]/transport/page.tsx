import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import AffiliateBanner from '@/components/AffiliateBanner';

type Props = { params: Promise<{ lang: string }> };
type L = 'en' | 'zh' | 'ru' | 'ja' | 'vi';
const loc = (lang: string, m: Record<L, string>) => m[lang as L] ?? m.en;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return {
    title: loc(lang, {
      en: 'Getting Around Korea | K-Survival Kit',
      zh: '在韩国出行 | K-Survival Kit',
      ru: 'Передвижение по Корее | K-Survival Kit',
      ja: '韓国での移動ガイド | K-Survival Kit',
      vi: 'Di chuyển tại Hàn Quốc | K-Survival Kit',
    }),
    description: loc(lang, {
      en: 'How to use public transport in Korea — subway, bus, taxi, T-money card, and Kakao T. Practical guide for foreigners.',
      zh: '在韩国如何使用公共交通——地铁、公交、出租车、T-money交通卡及Kakao T。外国人实用指南。',
      ru: 'Как пользоваться общественным транспортом в Корее — метро, автобус, такси, карта T-money и Kakao T.',
      ja: '韓国の公共交通機関の使い方 — 地下鉄・バス・タクシー・T-moneyカード・Kakao T。外国人向け実用ガイド。',
      vi: 'Cách sử dụng giao thông công cộng tại Hàn Quốc — tàu điện ngầm, xe buýt, taxi, thẻ T-money và Kakao T. Hướng dẫn thực tế cho người nước ngoài.',
    }),
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}/transport`,
      languages: {
        en: 'https://ksurvivalkit.com/en/transport',
        zh: 'https://ksurvivalkit.com/zh/transport',
        ru: 'https://ksurvivalkit.com/ru/transport',
        ja: 'https://ksurvivalkit.com/ja/transport',
        vi: 'https://ksurvivalkit.com/vi/transport',
      },
    },
  };
}

type Tip = { heading: Record<L, string>; body: Record<L, string> };
type InfoBlock = {
  icon: string;
  title: Record<L, string>;
  color: string;
  bg: string;
  border: string;
  badge?: Record<L, string>;
  tips: Tip[];
};

const TRANSPORT_SECTIONS: InfoBlock[] = [
  {
    icon: '💳',
    title: {
      en: 'T-money Card (티머니 카드)',
      zh: 'T-money交通卡',
      ru: 'Карта T-money',
      ja: 'T-moneyカード',
      vi: 'Thẻ T-money (티머니 카드)',
    },
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: { en: 'Essential', zh: '必备', ru: 'Обязательно', ja: '必須', vi: 'Thiết yếu' },
    tips: [
      {
        heading: {
          en: 'Where to buy?',
          zh: '在哪里购买？',
          ru: 'Где купить?',
          ja: 'どこで購入できますか？',
          vi: 'Mua ở đâu?',
        },
        body: {
          en: 'Available at the counter of most convenience stores (GS25, CU, 7-Eleven) for about ₩2,500. Also sold at some subway station service centers.',
          zh: '可在GS25、CU、7-Eleven等大部分便利店收银台购买（约2,500韩元）。部分地铁站客服中心也有出售。',
          ru: 'Продаётся на кассе большинства магазинов GS25, CU, 7-Eleven (около 2 500 вон). Также в клиентских центрах некоторых станций метро.',
          ja: 'GS25・CU・7-Elevenなどほとんどのコンビニのレジで購入可能（約2,500ウォン）。一部の地下鉄駅のサービスセンターでも販売しています。',
          vi: 'Có bán tại quầy thu ngân của hầu hết cửa hàng tiện lợi (GS25, CU, 7-Eleven) khoảng 2.500₩. Cũng có tại một số trung tâm dịch vụ ga tàu điện ngầm.',
        },
      },
      {
        heading: {
          en: 'How to top up',
          zh: '如何充值',
          ru: 'Как пополнить',
          ja: 'チャージ方法',
          vi: 'Cách nạp tiền',
        },
        body: {
          en: 'Cash top-up at any convenience store counter (₩1,000 increments minimum). Also via ATMs at subway stations. Mobile T-money available through Naver Pay / Kakao Pay.',
          zh: '可在便利店收银台用现金充值（最少1,000韩元为单位）。也可在地铁站自动充值机充值。Naver Pay/Kakao Pay支持移动T-money。',
          ru: 'Наличными на кассе любого магазина (от 1 000 вон). Также через автоматы на станциях метро. Мобильный T-money доступен через Naver Pay / Kakao Pay.',
          ja: 'コンビニのレジで現金チャージ（最低1,000ウォン単位）。地下鉄駅の自動チャージ機でも可能。Naver Pay / Kakao Payでモバイルチャージも対応。',
          vi: 'Nạp tiền mặt tại bất kỳ quầy thu ngân cửa hàng tiện lợi nào (tăng tối thiểu 1.000₩). Cũng có thể nạp qua máy tự động tại ga tàu điện ngầm. Nạp tiền di động qua Naver Pay / Kakao Pay.',
        },
      },
      {
        heading: {
          en: 'Where can I use it?',
          zh: '可以在哪里使用？',
          ru: 'Где использовать?',
          ja: 'どこで使えますか？',
          vi: 'Dùng được ở đâu?',
        },
        body: {
          en: 'Subway, city buses, some taxis, convenience stores and vending machines nationwide. Transfer discounts are applied automatically within 30 minutes.',
          zh: '全国地铁、市内公交、部分出租车、便利店、自动贩卖机等均可使用。30分钟内换乘可自动享受折扣。',
          ru: 'Метро, городские автобусы, некоторые такси, магазины и вендинговые автоматы по всей Корее. Скидка за пересадку (в течение 30 минут) применяется автоматически.',
          ja: '全国の地下鉄・市内バス・一部タクシー・コンビニ・自動販売機などで使用可能。30分以内の乗り換え割引が自動適用されます。',
          vi: 'Tàu điện ngầm, xe buýt thành phố, taxi, cửa hàng tiện lợi và máy bán hàng tự động. Chiết khấu chuyển tuyến áp dụng tự động trong vòng 30 phút.',
        },
      },
      {
        heading: {
          en: 'Check your balance',
          zh: '查询余额',
          ru: 'Проверка баланса',
          ja: '残高確認',
          vi: 'Kiểm tra số dư',
        },
        body: {
          en: 'The remaining balance is displayed when you tap the card reader. You can also ask at any convenience store counter.',
          zh: '刷卡时会显示余额。也可在便利店收银台查询。',
          ru: 'Баланс отображается при касании считывателя. Также можно уточнить на кассе магазина.',
          ja: '交通機器にタッチすると残高が表示されます。コンビニのレジでも確認してもらえます。',
          vi: 'Số dư hiển thị khi bạn chạm thẻ vào máy đọc. Bạn cũng có thể hỏi tại bất kỳ cửa hàng tiện lợi nào.',
        },
      },
    ],
  },
  {
    icon: '🚇',
    title: {
      en: 'Subway (지하철)',
      zh: '地铁（지하철）',
      ru: 'Метро (지하철)',
      ja: '地下鉄（지하철）',
      vi: 'Tàu điện ngầm (지하철)',
    },
    color: 'text-red-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
    tips: [
      {
        heading: {
          en: 'Recommended apps',
          zh: '推荐App',
          ru: 'Рекомендуемые приложения',
          ja: 'おすすめアプリ',
          vi: 'Ứng dụng được đề xuất',
        },
        body: {
          en: 'Naver Map (네이버 지도) or Kakao Map — both support English. They calculate transfer routes, travel time, and last train info automatically.',
          zh: 'Naver Map（네이버 지도）或Kakao Map——均支持英语。可自动计算换乘路线、所需时间和末班车信息。',
          ru: 'Naver Map (네이버 지도) или Kakao Map — оба поддерживают английский язык. Автоматически рассчитывают маршруты пересадок, время в пути и время последнего поезда.',
          ja: 'Naver Map（네이버 지도）またはKakao Map — どちらも英語対応。乗り換えルート・所要時間・終電情報を自動計算してくれます。',
          vi: 'Naver Map (네이버 지도) hoặc Kakao Map — cả hai đều hỗ trợ tiếng Anh. Tính toán tuyến đường, thời gian di chuyển và tàu đầu tiên/cuối cùng một cách tự động.',
        },
      },
      {
        heading: {
          en: 'Fares',
          zh: '票价',
          ru: 'Стоимость проезда',
          ja: '運賃',
          vi: 'Giá vé',
        },
        body: {
          en: 'Base fare approx. ₩1,400 with T-money. +₩100 per 5 km after the first 10 km. Transfers within 30 minutes are free (T-money auto-discount).',
          zh: '使用T-money基本票价约1,400韩元。超过10km每5km追加100韩元。30分钟内换乘免费（T-money自动折扣）。',
          ru: 'Базовый тариф около 1 400 вон с T-money. +100 вон за каждые 5 км после первых 10 км. Пересадки в течение 30 минут бесплатны (автоматическая скидка T-money).',
          ja: 'T-money使用時の基本運賃は約1,400ウォン。10km超過後は5kmごとに100ウォン追加。30分以内の乗り換えは無料（T-money自動割引）。',
          vi: 'Giá cơ bản khoảng 1.450₩ với T-money, thêm 100₩/5 km sau 10 km đầu. Chuyển tuyến miễn phí trong 30 phút (thẻ T-money).',
        },
      },
      {
        heading: {
          en: 'Operating hours',
          zh: '运营时间',
          ru: 'Время работы',
          ja: '運行時間',
          vi: 'Đêm muộn',
        },
        body: {
          en: 'First train around 05:30, last train around midnight (varies by line and station). Operates the same on weekends and public holidays. Check last train times via Naver Map.',
          zh: '首班车约5:30，末班车约午夜（因线路和车站而异）。周末及节假日运营时间相同。建议通过Naver Map查询末班车时间。',
          ru: 'Первый поезд около 05:30, последний — около полуночи (зависит от линии и станции). Расписание одинаково в выходные и праздники. Время последнего поезда — в Naver Map.',
          ja: '始発は約5時30分、終電は約深夜（路線・駅により異なります）。週末・祝日も同じ時刻で運行。終電時刻はNaver Mapで確認できます。',
          vi: 'Hầu hết tàu điện ngầm dừng lúc nửa đêm. Tàu cuối cùng ở mỗi ga có thể khác nhau — kiểm tra trên ứng dụng. Tàu không chạy vào ngày lễ — kiểm tra thời gian tàu qua Naver Map.',
        },
      },
      {
        heading: {
          en: 'Key Seoul lines',
          zh: '首尔主要线路',
          ru: 'Основные линии Сеула',
          ja: 'ソウル主要路線',
          vi: 'Tuyến chính tại Seoul',
        },
        body: {
          en: 'Line 1 (blue) · Line 2 (green, circular) · Line 3 (orange) · Line 4 (sky blue) · Line 9 (gold/express). AREX Airport Railroad: Incheon Airport ↔ Seoul Station (direct ~43 min, ₩9,500).',
          zh: '1号线（蓝色）· 2号线（绿色，环线）· 3号线（橙色）· 4号线（天蓝）· 9号线（金色/快线）。机场铁路AREX：仁川机场↔首尔站直通（约43分钟，9,500韩元）。',
          ru: 'Линия 1 (синяя) · Линия 2 (зелёная, кольцевая) · Линия 3 (оранжевая) · Линия 4 (голубая) · Линия 9 (золотая/экспресс). AREX: Аэропорт Инчхон ↔ Сеул-Стейшн (прямой ~43 мин, 9 500 вон).',
          ja: '1号線（青）· 2号線（緑・環状）· 3号線（オレンジ）· 4号線（水色）· 9号線（金/急行）。空港鉄道AREX：仁川空港↔ソウル駅直通（約43分、9,500ウォン）。',
          vi: 'Tuyến 1 (xanh lam) · Tuyến 2 (xanh lục, vòng tròn) · Tuyến 3 (cam) · Tuyến 4 (xanh lam nhạt) · Tuyến 9 (vàng) · AREX Sân bay Incheon / Gimpo / Suseo.',
        },
      },
    ],
  },
  {
    icon: '🚌',
    title: {
      en: 'Bus (버스)',
      zh: '公交车（버스）',
      ru: 'Автобус (버스)',
      ja: 'バス（버스）',
      vi: 'Xe buýt (버스)',
    },
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    tips: [
      {
        heading: {
          en: 'Bus colors (Seoul)',
          zh: '车身颜色含义（首尔）',
          ru: 'Значение цветов (Сеул)',
          ja: 'バスの色の意味（ソウル）',
          vi: 'Màu sắc xe buýt (Seoul)',
        },
        body: {
          en: 'Blue (trunk routes) — city-wide / Green (branch routes) — local / Red (wide-area) — suburban / Yellow (circular) — city centre loop.',
          zh: '蓝色（干线）——覆盖全市 / 绿色（支线）——社区循环 / 红色（广域）——郊区 / 黄色（循环）——市中心环线。',
          ru: 'Синие (магистральные) — по всему городу / Зелёные (ветвевые) — районные / Красные (пригородные) — пригороды / Жёлтые (кольцевые) — центр.',
          ja: '青（幹線）——市内全域 / 緑（支線）——地域循環 / 赤（広域）——郊外 / 黄（循環）——都心ループ。',
          vi: 'Xanh lam (xa xôi) · Xanh lục (nhánh ngắn) · Đỏ (tốc hành) · Vàng (vòng khu phố) · Xanh lá (vùng ngoại ô) · Nâu vàng (trung tâm thành phố vòng tròn)',
        },
      },
      {
        heading: {
          en: 'How to board',
          zh: '如何乘车',
          ru: 'Как сесть',
          ja: '乗り方',
          vi: 'Cách lên xe',
        },
        body: {
          en: 'Board from the front door and tap your T-money card. Tap again at the rear door when getting off (required for transfer discount). Cash accepted but no change given.',
          zh: '从前门上车，用T-money刷卡；下车时在后门再次刷卡（享受换乘折扣必须）。可付现金，但不找零。',
          ru: 'Садитесь через переднюю дверь и прикоснитесь T-money к считывателю. При выходе — снова через заднюю дверь (обязательно для скидки за пересадку). Наличные принимаются, но сдача не даётся.',
          ja: '前扉から乗車してT-moneyをタッチ。降車時は後扉でもう一度タッチ（乗り換え割引適用に必須）。現金も使えますが、おつりは出ません。',
          vi: 'Lên cửa trước và chạm thẻ T-money. Chạm lại ở cửa sau khi xuống (yêu cầu để áp dụng chiết khấu chuyển tuyến). Tiền mặt được chấp nhận nhưng không có tiền thối.',
        },
      },
      {
        heading: {
          en: 'Track arrivals',
          zh: '查看到站时间',
          ru: 'Отслеживание прибытия',
          ja: '到着確認',
          vi: 'Theo dõi xe đến',
        },
        body: {
          en: 'Check real-time bus locations and ETA in Naver Map or Kakao Map. Arrival times are also shown on digital displays at bus stops.',
          zh: '可在Naver Map或Kakao Map查看实时公交位置和预计到站时间。公交站的电子屏上也会显示。',
          ru: 'Реальное расположение автобусов и время прибытия — в Naver Map или Kakao Map. Также отображается на электронных табло на остановках.',
          ja: 'Naver MapまたはKakao Mapでリアルタイムのバス位置と到着予定時刻を確認できます。バス停の電光掲示板にも表示されます。',
          vi: 'Kiểm tra thời gian xe đến thực tế và ETA trong Naver Map hoặc Kakao Map. Thời gian đến cũng hiển thị trên bảng điện tử tại điểm dừng xe buýt.',
        },
      },
      {
        heading: {
          en: 'Stop button',
          zh: '下车按钮',
          ru: 'Кнопка остановки',
          ja: '停車ボタン',
          vi: 'Nút dừng xe',
        },
        body: {
          en: 'Press the "하차" (stop) button 1–2 stops before your destination. If you don\'t press it, the bus may not stop.',
          zh: '到达目的地前1-2站按下"하차"（下车）按钮。不按按钮的话，公交车可能不停车。',
          ru: 'Нажмите кнопку "하차" (выход) за 1–2 остановки до вашей. Если не нажать — автобус может проехать мимо.',
          ja: '目的地の1〜2駅前に「하차」（降車）ボタンを押してください。押さないとバスが止まらないことがあります。',
          vi: 'Nhấn nút "↓" (nút dừng) 1-2 điểm dừng trước điểm xuống của bạn. Nếu bạn không nhấn, xe có thể không dừng.',
        },
      },
    ],
  },
  {
    icon: '🚕',
    title: {
      en: 'Taxi (택시)',
      zh: '出租车（택시）',
      ru: 'Такси (택시)',
      ja: 'タクシー（택시）',
      vi: 'Taxi (택시)',
    },
    color: 'text-yellow-700',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    badge: {
      en: 'Recommended: Kakao T',
      zh: '推荐：Kakao T',
      ru: 'Рекомендуем: Kakao T',
      ja: 'おすすめ：Kakao T',
      vi: 'Đề xuất Kakao T',
    },
    tips: [
      {
        heading: {
          en: 'Kakao T app (카카오T)',
          zh: 'Kakao T应用',
          ru: 'Приложение Kakao T',
          ja: 'Kakao Tアプリ',
          vi: 'Ứng dụng Kakao T (카카오T)',
        },
        body: {
          en: 'Foreigners can register with just a Korean phone number. Enter your origin and destination in the app — no Korean needed. Estimated fare shown in advance.',
          zh: '外国人只需有韩国手机号即可注册。在App中输入出发地和目的地，无需韩语。可提前查看预计费用。',
          ru: 'Иностранцы могут зарегистрироваться только по корейскому номеру телефона. Введите начальную и конечную точки в приложении — корейский не нужен. Стоимость показывается заранее.',
          ja: '韓国の電話番号があれば外国人も登録可能。アプリで出発地・目的地を入力するだけで韓国語不要。事前に予想料金を確認できます。',
          vi: 'Người nước ngoài có thể đăng ký chỉ với số điện thoại Hàn Quốc. Nhập điểm đến và điểm đón trong ứng dụng — không cần tiếng Hàn. Giá ước tính hiển thị trước.',
        },
      },
      {
        heading: { en: 'Fares', zh: '收费', ru: 'Стоимость', ja: '料金', vi: 'Giá cước' },
        body: {
          en: 'Base fare approx. ₩4,800 (regular taxi in Seoul). Late night surcharge (00:00–04:00): +20%. Card and cash both accepted.',
          zh: '基本起步价约4,800韩元（首尔普通出租车）。深夜附加费（00:00-04:00）：+20%。可刷卡或付现金。',
          ru: 'Базовый тариф около 4 800 вон (обычное такси в Сеуле). Ночная надбавка (00:00–04:00): +20%. Принимаются карта и наличные.',
          ja: '基本料金は約4,800ウォン（ソウルの一般タクシー）。深夜割増（00:00〜04:00）は+20%。カード・現金どちらも使用可能。',
          vi: 'Giá cơ bản khoảng 4.800₩ (taxi thường tại Seoul). Phụ phí đêm (22:00-04:00): +20%. Thẻ và tiền mặt đều được chấp nhận.',
        },
      },
      {
        heading: {
          en: 'Types of taxis',
          zh: '出租车类型',
          ru: 'Виды такси',
          ja: 'タクシーの種類',
          vi: 'Các loại taxi',
        },
        body: {
          en: 'Regular (orange/white) — standard fare / Deluxe (black) — premium, ~2× fare / Kakao Black — app-only premium / Large — suitable for 4+ passengers.',
          zh: '普通（橙色/白色）——标准价 / 豪华（黑色）——高档，约2倍价格 / Kakao Black——App专属高档 / 大型——适合4人以上。',
          ru: 'Обычное (оранжевое/белое) — стандарт / Люкс (чёрное) — премиум, ~2× тариф / Kakao Black — только через приложение / Большое — для 4+ человек.',
          ja: '一般（オレンジ/白）——通常料金 / 模範（黒）——高級、約2倍料金 / Kakao Black——アプリ限定高級 / 大型——4名以上対応。',
          vi: 'Thường (일반택시) — tiêu chuẩn · DeLuxe (모범택시) — cao cấp · 대형 — phù hợp 4+ hành khách',
        },
      },
      {
        heading: {
          en: 'Hailing on the street',
          zh: '路边拦车',
          ru: 'Такси на улице',
          ja: '路上でのタクシーの拾い方',
          vi: 'Vẫy xe trên đường',
        },
        body: {
          en: 'Raise your hand at a taxi showing a "빈차" (vacant) light. Show your destination on a map or address on your phone — Naver Map route screen works perfectly.',
          zh: '向显示"빈차"（空车）灯的出租车招手。将目的地地图或地址展示在手机上——Naver Map路线截图最为直接。',
          ru: 'Поднимите руку, когда такси показывает "빈차" (свободно). Покажите адрес или карту на телефоне — экран маршрута в Naver Map подойдёт идеально.',
          ja: '「빈차」（空車）表示のタクシーに手を挙げてください。目的地はスマホの地図や住所を見せるだけでOK。Naver Mapのルート画面が最も便利です。',
          vi: 'Giơ tay vẫy taxi đang bật đèn "빈차" (trống). Hiển thị điểm đến trên bản đồ hoặc địa chỉ bằng điện thoại — Never Map hoạt động hoàn hảo.',
        },
      },
      {
        heading: {
          en: 'Useful apps',
          zh: '实用App',
          ru: 'Полезные приложения',
          ja: '便利なアプリ',
          vi: 'Ứng dụng hữu ích',
        },
        body: {
          en: "Kakao T (카카오T) — Korea's most popular / UT (우티) — Uber partnership / TADA (타다) — available in select areas.",
          zh: 'Kakao T（카카오T）——最受欢迎 / UT（우티）——与Uber合作 / TADA（타다）——部分地区运营。',
          ru: 'Kakao T (카카오T) — самое популярное / UT (우티) — партнёр Uber / TADA (타다) — в отдельных районах.',
          ja: 'Kakao T（카카오T）——最もポピュラー / UT（우티）——Uber提携 / TADA（타다）——一部地域で運行。',
          vi: 'Kakao T (카카오T) · UT (유티) — hợp tác Uber · Naver Map và địa chỉ — có tại các khu vực nhất định.',
        },
      },
    ],
  },
  {
    icon: '🚄',
    title: {
      en: 'KTX & Intercity Train',
      zh: 'KTX高铁及城际列车',
      ru: 'KTX и межгородские поезда',
      ja: 'KTX・高速鉄道',
      vi: 'KTX & Tàu liên tỉnh',
    },
    color: 'text-slate-700',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    tips: [
      {
        heading: {
          en: 'How to book',
          zh: '如何购票',
          ru: 'Как забронировать',
          ja: '予約方法',
          vi: 'Cách đặt vé',
        },
        body: {
          en: 'Book via the Korail (코레일) or SRT app using your ARC or passport. Same-day tickets can be bought at station windows (watch out for sell-outs on weekends).',
          zh: '可使用Korail（코레일）或SRT App，凭外国人登录证或护照注册购票。当天也可在车站售票窗口购票（周末注意售罄）。',
          ru: 'Бронирование через приложение Korail (코레일) или SRT по карте иностранца или паспорту. Билеты в день отправления продаются в кассах (в выходные могут раскупить).',
          ja: 'Korail（코레일）またはSRTアプリで外国人登録証またはパスポートを使って予約できます。当日券は駅の窓口でも購入可能（週末は売り切れに注意）。',
          vi: 'Đặt qua ứng dụng Korail (코레일) hoặc SRT bằng ARC hoặc hộ chiếu của bạn. Vé ngày hôm đó có thể mua tại cửa sổ bán vé (chú ý bán hết ghế vào cuối tuần).',
        },
      },
      {
        heading: {
          en: 'Key routes',
          zh: '主要线路',
          ru: 'Основные маршруты',
          ja: '主要路線',
          vi: 'Tuyến chính',
        },
        body: {
          en: 'KTX: Seoul ↔ Busan (~2h 10m), Seoul ↔ Gwangju (~1h 35m). SRT: Suseo ↔ Busan / Mokpo branch.',
          zh: 'KTX：首尔↔釜山（约2小时10分），首尔↔光州（约1小时35分）。SRT：水西↔釜山/木浦方向。',
          ru: 'KTX: Сеул ↔ Пусан (~2ч 10м), Сеул ↔ Кванджу (~1ч 35м). SRT: Сусо ↔ Пусан / Мокпо.',
          ja: 'KTX：ソウル↔釜山（約2時間10分）、ソウル↔光州（約1時間35分）。SRT：水西↔釜山・木浦方面。',
          vi: 'KTX: Seoul → Busan (2h 15p) / Seoul → Gyeongju (1h 58p). SRT: Suseo → Busan / Suseo → Mokpo chi nhánh.',
        },
      },
      {
        heading: {
          en: 'Foreigner discount',
          zh: '外国人优惠',
          ru: 'Скидка для иностранцев',
          ja: '外国人割引',
          vi: 'Ưu đãi người nước ngoài',
        },
        body: {
          en: "Korail Pass — foreigner-only 1/3/5-day passes available on the Korea Tourism Organization website or Korail's official site.",
          zh: 'Korail Pass——外国人专属1/3/5日票，可在韩国旅游组织官网或Korail官方网站购买。',
          ru: 'Korail Pass — абонементы на 1/3/5 дней только для иностранцев. Доступны на сайте Корейской туристической организации или Korail.',
          ja: 'Korail Pass——外国人専用の1/3/5日券。韓国観光公社サイトまたはKorail公式サイトで購入できます。',
          vi: 'Thẻ KR: đi 1-10 ngày liên tục, bán trên trang web Tổ chức Du lịch Hàn Quốc hoặc trang chính thức của Korail.',
        },
      },
    ],
  },
];

type Phrase = {
  korean: string;
  romanization: string;
  meaning: Record<L, string>;
};
const TRANSPORT_PHRASES: Phrase[] = [
  {
    korean: '이 주소로 가주세요.',
    romanization: 'I ju-so-ro ga-ju-se-yo.',
    meaning: {
      en: 'Please take me to this address.',
      zh: '请载我去这个地址。',
      ru: 'Пожалуйста, отвезите меня по этому адресу.',
      ja: 'このアドレスまで連れて行ってください。',
      vi: 'Cho tôi đến địa chỉ này.',
    },
  },
  {
    korean: '미터기 켜주세요.',
    romanization: 'Mi-teo-gi kyeo-ju-se-yo.',
    meaning: {
      en: 'Please turn on the meter.',
      zh: '请开计价器。',
      ru: 'Пожалуйста, включите счётчик.',
      ja: 'メーターを入れてください。',
      vi: 'Bật đồng hồ.',
    },
  },
  {
    korean: '여기서 세워주세요.',
    romanization: 'Yeo-gi-seo se-wo-ju-se-yo.',
    meaning: {
      en: 'Please stop here.',
      zh: '请在这里停车。',
      ru: 'Остановитесь здесь, пожалуйста.',
      ja: 'ここで止めてください。',
      vi: 'Dừng ở đây.',
    },
  },
  {
    korean: '카드로 결제할게요.',
    romanization: 'Ka-deu-ro gyeol-je-hal-ge-yo.',
    meaning: {
      en: "I'll pay by card.",
      zh: '我要刷卡。',
      ru: 'Я заплачу картой.',
      ja: 'カードで払います。',
      vi: 'Tôi trả bằng thẻ.',
    },
  },
  {
    korean: '영수증 주세요.',
    romanization: 'Yeong-su-jeung ju-se-yo.',
    meaning: {
      en: 'Please give me a receipt.',
      zh: '请给我收据。',
      ru: 'Пожалуйста, дайте чек.',
      ja: '領収書をください。',
      vi: 'Cho tôi biên lai.',
    },
  },
  {
    korean: '지하철 몇 호선이에요?',
    romanization: 'Ji-ha-cheol myeot ho-seon-i-e-yo?',
    meaning: {
      en: 'Which subway line is it?',
      zh: '几号地铁线？',
      ru: 'Какая это линия метро?',
      ja: '何号線ですか？',
      vi: 'Đây là tuyến tàu số mấy?',
    },
  },
  {
    korean: '이 버스가 ___에 가요?',
    romanization: 'I beo-seu-ga ___-e ga-yo?',
    meaning: {
      en: 'Does this bus go to ___?',
      zh: '这辆公交车去___吗？',
      ru: 'Этот автобус едет до ___?',
      ja: 'このバスは___に行きますか？',
      vi: 'Xe buýt này có đi ___ không?',
    },
  },
  {
    korean: '다음 역이 어디예요?',
    romanization: 'Da-eum yeok-i eo-di-ye-yo?',
    meaning: {
      en: 'What is the next station?',
      zh: '下一站是哪里？',
      ru: 'Какая следующая станция?',
      ja: '次の駅はどこですか？',
      vi: 'Ga tiếp theo là đâu?',
    },
  },
  {
    korean: '환승하려면 어디서 내려야 해요?',
    romanization: 'Hwan-seung-ha-ryeo-myeon eo-di-seo nae-ryeo-ya hae-yo?',
    meaning: {
      en: 'Where do I get off to transfer?',
      zh: '在哪里下车换乘？',
      ru: 'Где выйти, чтобы пересесть?',
      ja: 'どこで降りて乗り換えますか？',
      vi: 'Tôi xuống ở đâu để chuyển tuyến?',
    },
  },
  {
    korean: '막차가 몇 시예요?',
    romanization: 'Mak-cha-ga myeot si-ye-yo?',
    meaning: {
      en: 'What time is the last train/bus?',
      zh: '末班车是几点？',
      ru: 'В какое время последний поезд/автобус?',
      ja: '終電・最終バスは何時ですか？',
      vi: 'Chuyến cuối lúc mấy giờ?',
    },
  },
  {
    korean: '티머니 카드 어디서 살 수 있어요?',
    romanization: 'Ti-meo-ni ka-deu eo-di-seo sal su i-sseo-yo?',
    meaning: {
      en: 'Where can I buy a T-money card?',
      zh: 'T-money卡在哪里买？',
      ru: 'Где купить карту T-money?',
      ja: 'T-moneyカードはどこで買えますか？',
      vi: 'Mua thẻ T-money ở đâu?',
    },
  },
  {
    korean: '충전해주세요.',
    romanization: 'Chung-jeon-hae-ju-se-yo.',
    meaning: {
      en: 'Please top it up. (T-money)',
      zh: '请帮我充值。',
      ru: 'Пожалуйста, пополните (T-money).',
      ja: 'チャージしてください。',
      vi: 'Nạp tiền giúp tôi. (T-money)',
    },
  },
  {
    korean: '출구가 어디예요?',
    romanization: 'Chul-gu-ga eo-di-ye-yo?',
    meaning: {
      en: 'Where is the exit?',
      zh: '出口在哪里？',
      ru: 'Где выход?',
      ja: '出口はどこですか？',
      vi: 'Lối ra ở đâu?',
    },
  },
  {
    korean: '이 방향이 맞아요?',
    romanization: 'I bang-hyang-i ma-ja-yo?',
    meaning: {
      en: 'Is this the right direction?',
      zh: '这个方向对吗？',
      ru: 'Это правильное направление?',
      ja: 'この方向で合っていますか？',
      vi: 'Đây có phải hướng đúng không?',
    },
  },
];

const APPS = [
  {
    app: 'Naver Map (네이버 지도)',
    desc: {
      en: 'Best for transit routing — English support.',
      zh: '最佳路线规划——支持英语。',
      ru: 'Лучший для маршрутов — поддержка английского.',
      ja: '交通ルート検索に最適。英語対応。',
      vi: 'Tốt nhất để lên kế hoạch tuyến đường — hỗ trợ tiếng Anh.',
    },
  },
  {
    app: 'Kakao T (카카오T)',
    desc: {
      en: 'Taxi hailing — no Korean needed.',
      zh: '打车首选——无需韩语。',
      ru: 'Вызов такси — корейский не нужен.',
      ja: 'タクシー配車——韓国語不要。',
      vi: 'Gọi taxi — không cần tiếng Hàn.',
    },
  },
  {
    app: 'Kakao Map (카카오맵)',
    desc: {
      en: 'Maps & directions — real-time bus tracking.',
      zh: '地图导航——实时公交位置。',
      ru: 'Карты и маршруты — отслеживание автобусов.',
      ja: '地図・ルート案内——バスのリアルタイム追跡。',
      vi: 'Bản đồ & chỉ đường — theo dõi xe buýt thời gian thực.',
    },
  },
  {
    app: 'Korail / SRT',
    desc: {
      en: 'KTX / high-speed rail booking.',
      zh: 'KTX高铁购票。',
      ru: 'Бронирование KTX / скоростных поездов.',
      ja: 'KTX・高速鉄道の予約。',
      vi: 'Đặt vé KTX / tàu cao tốc.',
    },
  },
];

const UI = {
  pageTitle: {
    en: 'Getting Around Korea',
    zh: '在韩国出行',
    ru: 'Передвижение по Корее',
    ja: '韓国での移動ガイド',
    vi: 'Di chuyển tại Hàn Quốc',
  },
  pageSubtitle: {
    en: 'Subway · Bus · Taxi · T-money — the complete practical guide to Korean public transport.',
    zh: '地铁 · 公交 · 出租车 · T-money——韩国公共交通完全实用指南。',
    ru: 'Метро · Автобус · Такси · T-money — полное практическое руководство.',
    ja: '地下鉄 · バス · タクシー · T-money — 韓国交通機関完全実用ガイド。',
    vi: 'Tàu điện ngầm · Xe buýt · Taxi · T-money — hướng dẫn thực tế đầy đủ về giao thông công cộng Hàn Quốc.',
  },
  phrasesTitle: {
    en: '🗣️ Korean Phrases for Transport',
    zh: '🗣️ 交通韩语短句',
    ru: '🗣️ Корейские фразы для транспорта',
    ja: '🗣️ 交通に役立つ韓国語フレーズ',
    vi: '🗣️ Cụm từ tiếng Hàn cho giao thông',
  },
  appsTitle: {
    en: '📱 Essential Apps Summary',
    zh: '📱 必备App汇总',
    ru: '📱 Краткий обзор необходимых приложений',
    ja: '📱 必須アプリまとめ',
    vi: '📱 Tóm tắt ứng dụng thiết yếu',
  },
  tip: {
    en: 'In a taxi, show the driver your Naver Map route screen to communicate your destination without language barriers. Subway/bus transfer discounts require a T-money tap within 30 minutes.',
    zh: '乘坐出租车时，将Naver Map路线页面展示给司机，无需语言也能传达目的地。地铁/公交换乘折扣需在30分钟内刷T-money。',
    ru: 'В такси покажите водителю экран маршрута в Naver Map — так вы передадите пункт назначения без языкового барьера. Скидка на пересадку в метро/автобусе — T-money в течение 30 минут.',
    ja: 'タクシーではNaver Mapのルート画面を運転手に見せると言語不要で目的地を伝えられます。地下鉄・バスの乗り換え割引にはT-moneyを30分以内にタッチする必要があります。',
    vi: 'Trong taxi, hãy cho tài xế xem màn hình chỉ đường Naver Map để truyền đạt điểm đến mà không cần ngôn ngữ. Chiết khấu chuyển tuyến tàu/xe buýt yêu cầu chạm T-money trong vòng 30 phút.',
  },
};

export default async function TransportPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-3xl">🚇</span>
            <h1 className="text-3xl font-black text-slate-900">
              {loc(lang, UI.pageTitle)}
            </h1>
          </div>
          <p className="mt-2 text-slate-500 text-sm leading-6 max-w-xl">
            {loc(lang, UI.pageSubtitle)}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              {
                icon: '💳',
                label: {
                  en: 'T-money',
                  zh: 'T-money卡',
                  ru: 'T-money',
                  ja: 'T-money',
                  vi: 'T-money',
                },
              },
              {
                icon: '🚇',
                label: { en: 'Subway', zh: '地铁', ru: 'Метро', ja: '地下鉄', vi: 'Tàu điện ngầm' },
              },
              {
                icon: '🚌',
                label: { en: 'Bus', zh: '公交', ru: 'Автобус', ja: 'バス', vi: 'Xe buýt' },
              },
              {
                icon: '🚕',
                label: {
                  en: 'Taxi · Kakao T',
                  zh: '出租车 · Kakao T',
                  ru: 'Такси · Kakao T',
                  ja: 'タクシー · Kakao T',
                  vi: 'Taxi · Kakao T',
                },
              },
              {
                icon: '🚄',
                label: { en: 'KTX', zh: 'KTX高铁', ru: 'KTX', ja: 'KTX', vi: 'KTX' },
              },
            ].map((b) => (
              <span
                key={b.icon}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700"
              >
                {b.icon} {loc(lang, b.label)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        {TRANSPORT_SECTIONS.map((section) => (
          <div
            key={section.title.en}
            className={`overflow-hidden rounded-2xl border ${section.border} bg-white`}
          >
            <div className={`${section.bg} px-5 py-4 flex items-center gap-3`}>
              <span className="text-2xl">{section.icon}</span>
              <h2 className={`font-bold text-lg ${section.color} flex-1`}>
                {loc(lang, section.title)}
              </h2>
              {section.badge && (
                <span className="rounded-full bg-white/70 border border-current px-2.5 py-0.5 text-xs font-bold">
                  {loc(lang, section.badge)}
                </span>
              )}
            </div>
            <div className="divide-y divide-slate-100">
              {section.tips.map((tip) => (
                <div key={tip.heading.en} className="px-5 py-4">
                  <p className="text-sm font-bold text-slate-800 mb-1">
                    {loc(lang, tip.heading)}
                  </p>
                  <p className="text-sm text-slate-600 leading-6">
                    {loc(lang, tip.body)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Korean phrases */}
        <div className="overflow-hidden rounded-2xl border border-indigo-200 bg-white">
          <div className="bg-indigo-50 px-5 py-4 flex items-center gap-3">
            <h2 className="font-bold text-lg text-indigo-700">
              {loc(lang, UI.phrasesTitle)}
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {TRANSPORT_PHRASES.map((phrase, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 gap-1 px-5 py-3.5 md:grid-cols-3 md:gap-4"
              >
                <div>
                  <p className="text-lg font-bold text-slate-900">
                    {phrase.korean}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {phrase.romanization}
                  </p>
                </div>
                <div className="md:col-span-2 flex items-center">
                  <p className="text-sm text-slate-600">
                    {loc(lang, phrase.meaning)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App cards */}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-5">
          <p className="font-bold text-emerald-800 mb-3">
            {loc(lang, UI.appsTitle)}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {APPS.map((item) => (
              <div
                key={item.app}
                className="rounded-xl bg-white border border-emerald-200 px-4 py-3"
              >
                <p className="text-sm font-bold text-slate-900">{item.app}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {loc(lang, item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800">
          <strong>💡 Tip:</strong> {loc(lang, UI.tip)}
        </div>

        {/* Saily eSIM Banner */}
        <AffiliateBanner
          icon="📱"
          title={loc(lang, {
            en: 'Need Data to Use These Apps? Get a Korea eSIM',
            zh: '使用这些App需要流量？购买韩国eSIM',
            ru: 'Нужен интернет для этих приложений? Купите корейскую eSIM',
            ja: 'アプリを使うにはデータが必要？韓国eSIMを入手しよう',
            vi: 'Cần data để dùng các app này? Mua eSIM Hàn Quốc',
          })}
          description={loc(lang, {
            en: 'Naver Map, Kakao T and all transport apps need mobile data to work. Saily lets you buy a Korea eSIM online and activate it before landing — no airport queues.',
            zh: 'Naver Map、Kakao T等所有交通App都需要移动数据。Saily让您在线购买韩国eSIM并在落地前激活——无需在机场排队。',
            ru: 'Naver Map, Kakao T и другие транспортные приложения требуют мобильного интернета. Saily позволяет купить корейскую eSIM онлайн и активировать до посадки — без очередей в аэропорту.',
            ja: 'Naver Map・Kakao Tなどの交通アプリにはモバイルデータが必要です。Sailyなら韓国eSIMをオンラインで購入し、着陸前に有効化できます——空港での行列不要。',
            vi: 'Naver Map, Kakao T và tất cả ứng dụng giao thông cần có dữ liệu di động. Saily cho phép bạn mua eSIM Hàn Quốc trực tuyến và kích hoạt trước khi đáp — không cần xếp hàng sân bay.',
          })}
          href="https://go.saily.site/aff_c?offer_id=101&aff_id=13847"
          ctaText={loc(lang, {
            en: 'Get a Korea eSIM on Saily',
            zh: '在Saily获取韩国eSIM',
            ru: 'Купить eSIM для Кореи на Saily',
            ja: 'SailyでeSIMを入手',
            vi: 'Mua eSIM Hàn Quốc trên Saily',
          })}
          accentColor="blue"
          lang={lang}
          couponCode="KSURVIVALKIT"
        />

        {/* Klook Affiliate Banner */}
        <AffiliateBanner
          icon="🎟️"
          title={loc(lang, {
            en: 'Book Transport Passes with Klook',
            zh: '在Klook预订交通票券',
            ru: 'Купите проездные через Klook',
            ja: 'Klookで交通パスを予約しよう',
            vi: 'Đặt vé giao thông với Klook',
          })}
          description={loc(lang, {
            en: 'Airport bus, T-money card, KTX passes and more — all bookable in advance with instant confirmation.',
            zh: '机场大巴、T-money卡、KTX通票等——均可提前预订，即时确认。',
            ru: 'Автобус из аэропорта, карта T-money, абонементы KTX и многое другое — бронирование заранее с мгновенным подтверждением.',
            ja: '空港バス・T-moneyカード・KTXパスなど——事前予約で即時確認。',
            vi: 'Xe buýt sân bay, thẻ T-money, vé KTX và nhiều hơn — đặt trước với xác nhận tức thì.',
          })}
          href="https://affiliate.klook.com/redirect?aid=118997&aff_adid=1259369&k_site=https%3A%2F%2Fwww.klook.com%2F"
          ctaText={loc(lang, {
            en: 'Browse Transport on Klook',
            zh: '在Klook浏览交通选项',
            ru: 'Смотреть транспорт на Klook',
            ja: 'Klookで交通を探す',
            vi: 'Xem giao thông trên Klook',
          })}
          accentColor="rose"
        />
      </div>
    </main>
  );
}
