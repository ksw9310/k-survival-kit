import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useLang, Lang } from '../../context/LanguageContext';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: '🇺🇸 EN' },
  { code: 'ko', label: '🇰🇷 KO' },
  { code: 'zh', label: '🇨🇳 ZH' },
  { code: 'ja', label: '🇯🇵 JA' },
  { code: 'ru', label: '🇷🇺 RU' },
];

const T = {
  en: {
    subtitle: 'Everything you need to survive in Korea',
    quickGuides: 'Quick Guides',
    emergency: 'Emergency Numbers',
    guides: [
      { emoji: '🪪', label: 'ARC Card', route: '/guide/arc-card' },
      { emoji: '🏦', label: 'Bank Account', route: '/guide/bank' },
      { emoji: '📱', label: 'SIM Card', route: '/guide/sim' },
      { emoji: '🛵', label: 'Delivery Apps', route: '/guide/delivery' },
      { emoji: '🏠', label: 'Rent & Deposit', route: '/guide/rent' },
      { emoji: '🚇', label: 'Transport', route: '/guide/transport' },
    ],
  },
  ko: {
    subtitle: '한국 생활에 필요한 모든 것',
    quickGuides: '빠른 가이드',
    emergency: '긴급 전화번호',
    guides: [
      { emoji: '🪪', label: '외국인등록증', route: '/guide/arc-card' },
      { emoji: '🏦', label: '은행 계좌', route: '/guide/bank' },
      { emoji: '📱', label: 'SIM 카드', route: '/guide/sim' },
      { emoji: '🛵', label: '배달 앱', route: '/guide/delivery' },
      { emoji: '🏠', label: '전월세', route: '/guide/rent' },
      { emoji: '🚇', label: '교통', route: '/guide/transport' },
    ],
  },
  zh: {
    subtitle: '在韩国生活所需的一切',
    quickGuides: '快速指南',
    emergency: '紧急电话',
    guides: [
      { emoji: '🪪', label: '外国人登录证', route: '/guide/arc-card' },
      { emoji: '🏦', label: '银行开户', route: '/guide/bank' },
      { emoji: '📱', label: 'SIM卡', route: '/guide/sim' },
      { emoji: '🛵', label: '外卖APP', route: '/guide/delivery' },
      { emoji: '🏠', label: '租房押金', route: '/guide/rent' },
      { emoji: '🚇', label: '交通出行', route: '/guide/transport' },
    ],
  },
  ja: {
    subtitle: '韓国生活に必要なすべて',
    quickGuides: 'クイックガイド',
    emergency: '緊急電話番号',
    guides: [
      { emoji: '🪪', label: '外国人登録証', route: '/guide/arc-card' },
      { emoji: '🏦', label: '銀行口座', route: '/guide/bank' },
      { emoji: '📱', label: 'SIMカード', route: '/guide/sim' },
      { emoji: '🛵', label: 'デリバリーアプリ', route: '/guide/delivery' },
      { emoji: '🏠', label: '賃貸・敷金', route: '/guide/rent' },
      { emoji: '🚇', label: '交通機関', route: '/guide/transport' },
    ],
  },
  ru: {
    subtitle: 'Всё необходимое для жизни в Корее',
    quickGuides: 'Быстрые гайды',
    emergency: 'Экстренные номера',
    guides: [
      { emoji: '🪪', label: 'Карта ARC', route: '/guide/arc-card' },
      { emoji: '🏦', label: 'Банковский счёт', route: '/guide/bank' },
      { emoji: '📱', label: 'SIM-карта', route: '/guide/sim' },
      { emoji: '🛵', label: 'Доставка еды', route: '/guide/delivery' },
      { emoji: '🏠', label: 'Аренда жилья', route: '/guide/rent' },
      { emoji: '🚇', label: 'Транспорт', route: '/guide/transport' },
    ],
  },
};

const EMERGENCY_NUMBERS = [
  { label: '경찰 Police', number: '112' },
  { label: '소방/구급 Fire & EMS', number: '119' },
  { label: '외국인 상담 Foreigners', number: '1345' },
];

export default function HomeScreen() {
  const router = useRouter();
  const { lang, setLang } = useLang();
  const t = T[lang];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>🎒</Text>
        <Text style={styles.heroTitle}>K-Survival Kit</Text>
        <Text style={styles.heroSub}>{t.subtitle}</Text>

        {/* Language Switcher */}
        <View style={styles.langRow}>
          {LANGS.map((l) => (
            <TouchableOpacity
              key={l.code}
              style={[styles.langBtn, lang === l.code && styles.langBtnActive]}
              onPress={() => setLang(l.code)}
            >
              <Text
                style={[
                  styles.langText,
                  lang === l.code && styles.langTextActive,
                ]}
              >
                {l.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Quick Guides */}
      <Text style={styles.sectionTitle}>{t.quickGuides}</Text>
      <View style={styles.grid}>
        {t.guides.map((item) => (
          <TouchableOpacity
            key={item.route}
            style={styles.card}
            onPress={() => router.push(item.route as any)}
            activeOpacity={0.7}
          >
            <Text style={styles.cardEmoji}>{item.emoji}</Text>
            <Text style={styles.cardLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Emergency Numbers */}
      <Text style={styles.sectionTitle}>{t.emergency}</Text>
      <View style={styles.emergencyBox}>
        {EMERGENCY_NUMBERS.map((item) => (
          <TouchableOpacity
            key={item.number}
            style={styles.emergencyRow}
            onPress={() => Linking.openURL(`tel:${item.number}`)}
            activeOpacity={0.7}
          >
            <Text style={styles.emergencyLabel}>{item.label}</Text>
            <Text style={styles.emergencyNumber}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, paddingBottom: 40 },

  hero: {
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    marginBottom: 28,
  },
  heroEmoji: { fontSize: 48, marginBottom: 8 },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: -0.5,
  },
  heroSub: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 6,
    textAlign: 'center',
    marginBottom: 16,
  },

  langRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  langBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  langBtnActive: {
    backgroundColor: '#f43f5e',
    borderColor: '#f43f5e',
  },
  langText: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: '600',
  },
  langTextActive: {
    color: '#fff',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 28,
  },
  card: {
    width: '30%',
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  cardEmoji: { fontSize: 28, marginBottom: 6 },
  cardLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
  },

  emergencyBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 8,
  },
  emergencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  emergencyLabel: { fontSize: 14, color: '#334155', fontWeight: '500' },
  emergencyNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f43f5e',
    letterSpacing: 1,
  },
});
