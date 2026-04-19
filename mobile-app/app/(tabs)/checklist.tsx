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
  ko: {
    title: '입국 체크리스트',
    groups: [
      {
        heading: '📅 입국 당일',
        items: [
          {
            id: 'd1-1',
            label: '공항 SIM 또는 eSIM 개통',
            sub: '인천공항 KT / SK텔레콤 부스',
          },
          {
            id: 'd1-2',
            label: '한국 주소 메모',
            sub: '기숙사 또는 계약서의 주소',
          },
          { id: 'd1-3', label: '현금 환전', sub: '공항 은행 환율이 가장 좋음' },
        ],
      },
      {
        heading: '📅 첫째 주',
        items: [
          { id: 'w1-1', label: 'T-머니 카드 구매', sub: '편의점에서 2,500원' },
          {
            id: 'w1-2',
            label: '카카오맵 & 네이버 지도 다운로드',
            sub: '이동에 필수',
          },
          {
            id: 'w1-3',
            label: '동 주민센터에서 전입신고',
            sub: '여권 지참 필요',
          },
          {
            id: 'w1-4',
            label: '외국인등록증 예약',
            sub: 'hi.korea.go.kr (입국 90일 이내 필수)',
          },
        ],
      },
      {
        heading: '📅 첫 달',
        items: [
          {
            id: 'm1-1',
            label: '외국인등록증 신청',
            sub: '출입국관리사무소 방문 — 서류 모두 지참',
          },
          {
            id: 'm1-2',
            label: '국민건강보험 가입',
            sub: '외국인등록증 발급 후 — 건강보험공단 방문',
          },
          {
            id: 'm1-3',
            label: '은행 계좌 개설',
            sub: '카카오뱅크(온라인) 또는 우리·IBK(방문)',
          },
          {
            id: 'm1-4',
            label: '한국 요금제 개통',
            sub: '알뜰폰 — 외국인등록증 있으면 가장 저렴',
          },
        ],
      },
      {
        heading: '✅ 추가 추천',
        items: [
          { id: 'n1', label: '배민 또는 쿠팡이츠 다운로드', sub: '배달 앱' },
          { id: 'n2', label: '카카오톡 설치', sub: '한국 주요 메신저' },
          { id: 'n3', label: '코레일 앱 다운로드', sub: 'KTX 예매용' },
          {
            id: 'n4',
            label: '기본 한국어 표현 익히기',
            sub: '긴급 탭에서 확인',
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
  ko: '입국 체크리스트',
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
