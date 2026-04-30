import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';

type CheckItem = { id: string; label: string; sub: string };
type ChecklistData = {
  title: string;
  groups: { heading: string; items: CheckItem[] }[];
};

const DATA: Record<string, ChecklistData> = {
  en: {
    title: 'Arrival Checklist',
    groups: [
      {
        heading: '📅 Day 1',
        items: [
          {
            id: 'd1-1',
            label: 'Get airport SIM or activate eSIM',
            sub: 'KT / SK Telecom booths at Incheon',
          },
          {
            id: 'd1-2',
            label: 'Note your Korean address',
            sub: 'University dorm or housing contract',
          },
          {
            id: 'd1-3',
            label: 'Exchange some cash',
            sub: 'Banks & ATMs in airport are best rate',
          },
        ],
      },
      {
        heading: '📅 Week 1',
        items: [
          {
            id: 'w1-1',
            label: 'Get a T-Money card',
            sub: 'Any convenience store — ₩2,500',
          },
          {
            id: 'w1-2',
            label: 'Download KakaoMap & Naver Maps',
            sub: 'Essential for navigation',
          },
          {
            id: 'w1-3',
            label: 'Register address at Dong office',
            sub: '동 주민센터 — bring passport',
          },
          {
            id: 'w1-4',
            label: 'Book ARC appointment',
            sub: 'hi.korea.go.kr (must apply within 90 days)',
          },
        ],
      },
      {
        heading: '📅 Month 1',
        items: [
          {
            id: 'm1-1',
            label: 'Apply for ARC card',
            sub: 'Local Immigration Office — bring all docs',
          },
          {
            id: 'm1-2',
            label: 'Enroll in National Health Insurance',
            sub: 'After ARC — visit NHIS office',
          },
          {
            id: 'm1-3',
            label: 'Open bank account',
            sub: 'KakaoBank (online) or Woori / IBK (in-person)',
          },
          {
            id: 'm1-4',
            label: 'Get a Korean SIM plan',
            sub: 'MVNO 알뜰폰 — cheapest option with ARC',
          },
        ],
      },
      {
        heading: '✅ Nice to have',
        items: [
          {
            id: 'n1',
            label: 'Download Baemin or Coupang Eats',
            sub: 'Food delivery apps',
          },
          {
            id: 'n2',
            label: 'Get KakaoTalk',
            sub: 'Main messaging app in Korea',
          },
          {
            id: 'n3',
            label: 'Download Korail app',
            sub: 'For KTX train tickets',
          },
          {
            id: 'n4',
            label: 'Learn basic Korean phrases',
            sub: 'Check Emergency tab for starters',
          },
        ],
      },
    ],
  },
  vi: {
    title: 'Danh sách kiểm tra',
    groups: [
      {
        heading: '📅 Ngày 1',
        items: [
          {
            id: 'd1-1',
            label: 'Mua SIM sân bay hoặc kích hoạt eSIM',
            sub: 'Quầy KT / SK Telecom tại Incheon',
          },
          {
            id: 'd1-2',
            label: 'Ghi lại địa chỉ Hàn Quốc',
            sub: 'Ký túc xá hoặc hợp đồng nhà ở',
          },
          { id: 'd1-3', label: 'Đổi một ít tiền mặt', sub: 'Ngân hàng & ATM sân bay có tỷ giá tốt nhất' },
        ],
      },
      {
        heading: '📅 Tuần 1',
        items: [
          { id: 'w1-1', label: 'Mua thẻ T-Money', sub: 'Bất kỳ cửa hàng tiện lợi nào — 2.500₩' },
          {
            id: 'w1-2',
            label: 'Tải KakaoMap & Naver Maps',
            sub: 'Cần thiết để đi lại',
          },
          {
            id: 'w1-3',
            label: 'Đăng ký địa chỉ tại văn phòng Dong',
            sub: '동 주민센터 — mang hộ chiếu',
          },
          {
            id: 'w1-4',
            label: 'Đặt lịch hẹn ARC',
            sub: 'hi.korea.go.kr (phải nộp trong 90 ngày)',
          },
        ],
      },
      {
        heading: '📅 Tháng 1',
        items: [
          {
            id: 'm1-1',
            label: 'Nộp đơn xin thẻ ARC',
            sub: 'Văn phòng Xuất nhập cảnh — mang đầy đủ giấy tờ',
          },
          {
            id: 'm1-2',
            label: 'Đăng ký Bảo hiểm Y tế Quốc gia',
            sub: 'Sau khi có ARC — đến văn phòng NHIS',
          },
          {
            id: 'm1-3',
            label: 'Mở tài khoản ngân hàng',
            sub: 'KakaoBank (online) hoặc Woori / IBK (trực tiếp)',
          },
          {
            id: 'm1-4',
            label: 'Đăng ký gói SIM Hàn Quốc',
            sub: 'MVNO 알뜰폰 — rẻ nhất khi có ARC',
          },
        ],
      },
      {
        heading: '✅ Nên có',
        items: [
          {
            id: 'n1',
            label: 'Tải Baemin hoặc Coupang Eats',
            sub: 'Ứng dụng giao đồ ăn',
          },
          { id: 'n2', label: 'Cài KakaoTalk', sub: 'Ứng dụng nhắn tin chính ở Hàn Quốc' },
          { id: 'n3', label: 'Tải ứng dụng Korail', sub: 'Đặt vé tàu KTX' },
          {
            id: 'n4',
            label: 'Học một số câu tiếng Hàn cơ bản',
            sub: 'Xem tab Khẩn cấp để bắt đầu',
          },
        ],
      },
    ],
  },
  zh: {
    title: '入境清单',
    groups: [
      {
        heading: '📅 入境当天',
        items: [
          {
            id: 'd1-1',
            label: '购买机场SIM或激活eSIM',
            sub: '仁川机场KT / SK电信柜台',
          },
          { id: 'd1-2', label: '记下韩国地址', sub: '宿舍或租房合同上的地址' },
          { id: 'd1-3', label: '兑换部分现金', sub: '机场银行汇率最划算' },
        ],
      },
      {
        heading: '📅 第一周',
        items: [
          { id: 'w1-1', label: '购买T-Money卡', sub: '便利店购买，2,500韩元' },
          { id: 'w1-2', label: '下载KakaoMap和Naver地图', sub: '出行必备' },
          { id: 'w1-3', label: '在洞住民中心办理迁入登记', sub: '携带护照' },
          {
            id: 'w1-4',
            label: '预约申请外国人登录证',
            sub: 'hi.korea.go.kr（入境90天内必须申请）',
          },
        ],
      },
      {
        heading: '📅 第一个月',
        items: [
          {
            id: 'm1-1',
            label: '申请外国人登录证',
            sub: '前往出入境管理事务所，携带所有材料',
          },
          {
            id: 'm1-2',
            label: '加入国民健康保险',
            sub: '拿到登录证后前往健康保险公团办理',
          },
          {
            id: 'm1-3',
            label: '开设银行账户',
            sub: 'KakaoBank（线上）或友利·IBK（线下）',
          },
          {
            id: 'm1-4',
            label: '办理韩国手机套餐',
            sub: '알뜰폰——有登录证最划算',
          },
        ],
      },
      {
        heading: '✅ 建议安装',
        items: [
          { id: 'n1', label: '下载Baemin或Coupang Eats', sub: '外卖APP' },
          { id: 'n2', label: '安装KakaoTalk', sub: '韩国主流聊天软件' },
          { id: 'n3', label: '下载Korail APP', sub: 'KTX高铁购票' },
          { id: 'n4', label: '学几句基本韩语', sub: '可参考紧急标签页' },
        ],
      },
    ],
  },
  ja: {
    title: '入国チェックリスト',
    groups: [
      {
        heading: '📅 入国当日',
        items: [
          {
            id: 'd1-1',
            label: '空港SIMまたはeSIMを開通',
            sub: '仁川空港KT・SKテレコムブース',
          },
          {
            id: 'd1-2',
            label: '韓国の住所をメモ',
            sub: '寮または契約書の住所',
          },
          { id: 'd1-3', label: '現金を両替', sub: '空港の銀行がレートが良い' },
        ],
      },
      {
        heading: '📅 最初の1週間',
        items: [
          {
            id: 'w1-1',
            label: 'T-Moneyカードを購入',
            sub: 'コンビニで2,500ウォン',
          },
          {
            id: 'w1-2',
            label: 'KakaoMap・Naver Mapsをダウンロード',
            sub: '移動に必須',
          },
          {
            id: 'w1-3',
            label: '洞住民センターで転入届を提出',
            sub: 'パスポート持参',
          },
          {
            id: 'w1-4',
            label: '外国人登録証の予約',
            sub: 'hi.korea.go.kr（入国90日以内に必須）',
          },
        ],
      },
      {
        heading: '📅 最初の1ヶ月',
        items: [
          {
            id: 'm1-1',
            label: '外国人登録証を申請',
            sub: '出入国管理事務所に書類一式持参',
          },
          {
            id: 'm1-2',
            label: '国民健康保険に加入',
            sub: '登録証取得後、健康保険公団で手続き',
          },
          {
            id: 'm1-3',
            label: '銀行口座を開設',
            sub: 'KakaoBank（オンライン）またはウリ・IBK（窓口）',
          },
          {
            id: 'm1-4',
            label: '韓国の携帯プランを契約',
            sub: '알뜰폰——登録証があれば最安',
          },
        ],
      },
      {
        heading: '✅ あると便利',
        items: [
          {
            id: 'n1',
            label: 'BaeminまたはCoupang Eatsをインストール',
            sub: 'フードデリバリーアプリ',
          },
          {
            id: 'n2',
            label: 'KakaoTalkをインストール',
            sub: '韓国主要メッセージアプリ',
          },
          {
            id: 'n3',
            label: 'Korailアプリをダウンロード',
            sub: 'KTX新幹線の予約',
          },
          {
            id: 'n4',
            label: '基本韓国語フレーズを学ぶ',
            sub: '緊急タブで確認できます',
          },
        ],
      },
    ],
  },
  ru: {
    title: 'Чеклист для новоприбывших',
    groups: [
      {
        heading: '📅 День приезда',
        items: [
          {
            id: 'd1-1',
            label: 'Купить SIM в аэропорту или активировать eSIM',
            sub: 'Стойки KT / SK Telecom в аэропорту Инчхон',
          },
          {
            id: 'd1-2',
            label: 'Записать корейский адрес',
            sub: 'Адрес из договора аренды или общежития',
          },
          {
            id: 'd1-3',
            label: 'Обменять немного наличных',
            sub: 'Лучший курс — в банках аэропорта',
          },
        ],
      },
      {
        heading: '📅 Первая неделя',
        items: [
          {
            id: 'w1-1',
            label: 'Купить карту T-Money',
            sub: 'В любом удобном магазине — 2 500 вон',
          },
          {
            id: 'w1-2',
            label: 'Скачать KakaoMap и Naver Maps',
            sub: 'Необходимы для навигации',
          },
          {
            id: 'w1-3',
            label: 'Зарегистрироваться по адресу в офисе Дон',
            sub: 'Нужен паспорт',
          },
          {
            id: 'w1-4',
            label: 'Записаться на получение карты ARC',
            sub: 'hi.korea.go.kr (обязательно в течение 90 дней)',
          },
        ],
      },
      {
        heading: '📅 Первый месяц',
        items: [
          {
            id: 'm1-1',
            label: 'Получить карту ARC',
            sub: 'Офис по делам иностранцев — все документы',
          },
          {
            id: 'm1-2',
            label: 'Оформить медицинскую страховку',
            sub: 'После получения ARC — в офисе NHIS',
          },
          {
            id: 'm1-3',
            label: 'Открыть банковский счёт',
            sub: 'KakaoBank (онлайн) или Woori / IBK (лично)',
          },
          {
            id: 'm1-4',
            label: 'Оформить корейский тарифный план',
            sub: 'MVNO 알뜰폰 — самый дешёвый с ARC',
          },
        ],
      },
      {
        heading: '✅ Рекомендуется',
        items: [
          {
            id: 'n1',
            label: 'Скачать Baemin или Coupang Eats',
            sub: 'Приложения доставки еды',
          },
          {
            id: 'n2',
            label: 'Установить KakaoTalk',
            sub: 'Основной мессенджер в Корее',
          },
          {
            id: 'n3',
            label: 'Скачать приложение Korail',
            sub: 'Для билетов на KTX',
          },
          {
            id: 'n4',
            label: 'Выучить базовые корейские фразы',
            sub: 'Смотрите вкладку "Экстренные"',
          },
        ],
      },
    ],
  },
};

const TITLES: Record<string, string> = {
  en: 'Arrival Checklist',
  vi: 'Danh sách kiểm tra',
  zh: '入境清单',
  ja: '入国チェックリスト',
  ru: 'Чеклист',
};

export default function ChecklistScreen() {
  const { lang } = useLang();
  const data = DATA[lang];
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const totalItems = data.groups.reduce((sum, g) => sum + g.items.length, 0);
  const doneCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? doneCount / totalItems : 0;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Progress */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>{TITLES[lang]}</Text>
        <Text style={styles.progressCount}>
          {doneCount} / {totalItems}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${progress * 100}%` as any },
            ]}
          />
        </View>
      </View>

      {data.groups.map((group) => (
        <View key={group.heading} style={styles.group}>
          <Text style={styles.groupHeading}>{group.heading}</Text>
          {group.items.map((item) => {
            const done = !!checked[item.id];
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.item, done && styles.itemDone]}
                onPress={() => toggle(item.id)}
                activeOpacity={0.7}
              >
                <View style={[styles.checkbox, done && styles.checkboxDone]}>
                  {done && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <View style={styles.itemText}>
                  <Text
                    style={[styles.itemLabel, done && styles.itemLabelDone]}
                  >
                    {item.label}
                  </Text>
                  <Text style={styles.itemSub}>{item.sub}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, paddingBottom: 48 },

  progressCard: {
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  progressCount: { fontSize: 14, color: '#94a3b8', marginBottom: 12 },
  progressBar: {
    height: 8,
    backgroundColor: '#1e293b',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#f43f5e',
    borderRadius: 4,
  },

  group: { marginBottom: 24 },
  groupHeading: {
    fontSize: 15,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 12,
  },
  itemDone: {
    backgroundColor: '#f0fdf4',
    borderColor: '#bbf7d0',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  checkmark: { fontSize: 14, color: '#fff', fontWeight: '800' },
  itemText: { flex: 1 },
  itemLabel: { fontSize: 14, fontWeight: '600', color: '#0f172a' },
  itemLabelDone: { color: '#86efac', textDecorationLine: 'line-through' },
  itemSub: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
});
