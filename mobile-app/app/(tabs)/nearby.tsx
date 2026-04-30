import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useLang, Lang } from '../../context/LanguageContext';

const NEARBY_ITEMS = [
  { emoji: '🏥', query: '병원 근처', color: '#ef4444' },
  { emoji: '💊', query: '약국 근처', color: '#10b981' },
  { emoji: '🏦', query: 'ATM 근처', color: '#3b82f6' },
  { emoji: '🛒', query: '편의점 근처', color: '#f59e0b' },
  { emoji: '🚇', query: '지하철역 근처', color: '#8b5cf6' },
  { emoji: '🚌', query: '버스정류장 근처', color: '#06b6d4' },
  { emoji: '🍽️', query: '음식점 근처', color: '#f97316' },
  { emoji: '🚔', query: '경찰서 근처', color: '#64748b' },
];

const LABELS: Record<Lang, {
  title: string;
  sub: string;
  items: string[];
  tipTitle: string;
  tipText: string;
}> = {
  en: {
    title: '📍 Find Nearby',
    sub: 'Tap any category to open Google Maps',
    items: ['Hospital', 'Pharmacy', 'Bank / ATM', 'Convenience Store', 'Subway Station', 'Bus Stop', 'Restaurant', 'Police Station'],
    tipTitle: '💡 Tip',
    tipText: 'Searches use Korean keywords for more accurate local results.',
  },
  vi: {
    title: '📍 Tìm xung quanh',
    sub: 'Nhấn vào danh mục để mở Google Maps',
    items: ['Bệnh viện', 'Nhà thuốc', 'Ngân hàng / ATM', 'Cửa hàng tiện lợi', 'Ga tàu điện ngầm', 'Trạm xe buýt', 'Nhà hàng', 'Đồn cảnh sát'],
    tipTitle: '💡 Mẹo',
    tipText: 'Tìm kiếm dùng từ khóa tiếng Hàn để có kết quả địa phương chính xác hơn.',
  },
  zh: {
    title: '📍 查找周边',
    sub: '点击任意类别以打开谷歌地图',
    items: ['医院', '药店', '银行 / ATM', '便利店', '地铁站', '公交站', '餐厅', '警察局'],
    tipTitle: '💡 提示',
    tipText: '使用韩文关键词搜索可以获得更准确的本地结果。',
  },
  ja: {
    title: '📍 近くを探す',
    sub: 'タップするとGoogleマップが開きます',
    items: ['病院', '薬局', '銀行 / ATM', 'コンビニ', '地下鉄駅', 'バス停', 'レストラン', '警察署'],
    tipTitle: '💡 ヒント',
    tipText: '韓国語のキーワードで検索することで、より正確な地域結果が表示されます。',
  },
  ru: {
    title: '📍 Рядом со мной',
    sub: 'Нажмите, чтобы открыть Google Карты',
    items: ['Больница', 'Аптека', 'Банк / Банкомат', 'Магазин у дома', 'Станция метро', 'Автобусная остановка', 'Ресторан', 'Полицейский участок'],
    tipTitle: '💡 Совет',
    tipText: 'Поиск ведётся по корейским ключевым словам — так результаты точнее.',
  },
};

function openMaps(query: string) {
  const url = `https://maps.google.com/?q=${encodeURIComponent(query)}`;
  Linking.openURL(url);
}

export default function NearbyScreen() {
  const { lang } = useLang();
  const t = LABELS[lang];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>{t.title}</Text>
      <Text style={styles.sub}>{t.sub}</Text>

      <View style={styles.grid}>
        {NEARBY_ITEMS.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.card}
            onPress={() => openMaps(item.query)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconBox, { backgroundColor: item.color + '18' }]}>
              <Text style={styles.emoji}>{item.emoji}</Text>
            </View>
            <Text style={styles.label}>{t.items[i]}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipTitle}>{t.tipTitle}</Text>
        <Text style={styles.tipText}>{t.tipText}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, paddingBottom: 40 },
  pageTitle: { fontSize: 24, fontWeight: '800', color: '#0f172a', marginBottom: 6 },
  sub: { fontSize: 13, color: '#64748b', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  emoji: { fontSize: 26 },
  label: { fontSize: 13, fontWeight: '600', color: '#334155', textAlign: 'center' },
  tip: {
    backgroundColor: '#fefce8',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fde68a',
  },
  tipTitle: { fontSize: 14, fontWeight: '700', color: '#92400e', marginBottom: 4 },
  tipText: { fontSize: 13, color: '#78350f', lineHeight: 20 },
});
