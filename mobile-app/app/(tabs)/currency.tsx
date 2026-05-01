import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useLang } from '../../context/LanguageContext';

const WISE_URL = 'https://wise.prf.hn/click/camref:1101l5IGWo';

const WISE_LABELS: Record<string, { title: string; desc: string; cta: string; badge: string }> = {
  en: {
    title: 'Send money with Wise',
    desc: 'Real exchange rates, low fees. No hidden bank markups.',
    cta: 'Open Wise',
    badge: 'Affiliate',
  },
  vi: {
    title: 'Chuyển tiền với Wise',
    desc: 'Tỷ giá thực, phí thấp. Không có phí ngân hàng ẩn.',
    cta: 'Mở Wise',
    badge: 'Liên kết',
  },
  zh: {
    title: '使用Wise汇款',
    desc: '真实汇率，低手续费，无隐藏费用。',
    cta: '打开Wise',
    badge: '推广',
  },
  ja: {
    title: 'Wiseで海外送金',
    desc: '実際の為替レート・低手数料・隠れた手数料なし。',
    cta: 'Wiseを開く',
    badge: 'PR',
  },
  ru: {
    title: 'Переводы через Wise',
    desc: 'Реальный курс, низкие комиссии. Без скрытых наценок.',
    cta: 'Открыть Wise',
    badge: 'Партнёр',
  },
};

const FALLBACK_RATES: Record<string, number> = {
  USD: 1370,
  EUR: 1490,
  JPY: 9.1,
  CNY: 189,
  RUB: 15.2,
  VND: 0.055,
};

const CURRENCIES = [
  { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
  { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
  { code: 'JPY', flag: '🇯🇵', name: 'Japanese Yen' },
  { code: 'CNY', flag: '🇨🇳', name: 'Chinese Yuan' },
  { code: 'RUB', flag: '🇷🇺', name: 'Russian Ruble' },
  { code: 'VND', flag: '🇻🇳', name: 'Vietnamese Dong' },
];

const LABELS: Record<
  string,
  {
    title: string;
    note: string;
    loading: string;
    error: string;
    updated: string;
  }
> = {
  en: {
    title: 'Currency Calculator',
    note: 'Rates updated hourly',
    loading: 'Fetching live rates…',
    error: 'Using fallback rates',
    updated: 'Updated',
  },
  vi: {
    title: 'Máy tính tỷ giá',
    note: 'Tỷ giá cập nhật mỗi giờ',
    loading: 'Đang tải tỷ giá…',
    error: 'Đang dùng tỷ giá dự phòng',
    updated: 'Cập nhật',
  },
  zh: {
    title: '汇率计算器',
    note: '实时汇率（每小时更新）',
    loading: '获取实时汇率…',
    error: '使用备用汇率',
    updated: '更新于',
  },
  ja: {
    title: '為替計算機',
    note: 'リアルタイムレート（1時間更新）',
    loading: 'レート取得中…',
    error: 'フォールバックレート使用中',
    updated: '更新',
  },
  ru: {
    title: 'Калькулятор валют',
    note: 'Актуальный курс (обновл. каждый час)',
    loading: 'Загрузка курсов…',
    error: 'Используется резервный курс',
    updated: 'Обновлено',
  },
};

function formatKRW(n: number): string {
  if (!isFinite(n)) return '—';
  return Math.round(n).toLocaleString() + ' ₩';
}

function formatForeign(n: number, code: string): string {
  if (!isFinite(n)) return '—';
  const decimals = code === 'JPY' ? 0 : 2;
  return n.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function CurrencyScreen() {
  const { lang } = useLang();
  const labels = LABELS[lang] ?? LABELS.en;

  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [updatedAt, setUpdatedAt] = useState('');
  const [input, setInput] = useState('');
  const [direction, setDirection] = useState<
    Record<string, 'toKRW' | 'fromKRW'>
  >({});

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/KRW')
      .then((r) => r.json())
      .then((data) => {
        const raw: Record<string, number> = data.rates ?? {};
        const codes = ['USD', 'EUR', 'JPY', 'CNY', 'RUB', 'VND'];
        const parsed: Record<string, number> = {};
        for (const code of codes) {
          if (raw[code]) parsed[code] = parseFloat((1 / raw[code]).toFixed(4));
        }
        setRates(parsed);
        setIsLive(true);
        const d = new Date(data.time_last_update_utc ?? Date.now());
        setUpdatedAt(
          d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        );
      })
      .catch(() => {
        setIsLive(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const numVal = parseFloat(input.replace(/,/g, '')) || 0;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>{labels.title}</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#94a3b8" />
          ) : (
            <View
              style={[
                styles.badge,
                isLive ? styles.badgeLive : styles.badgeFallback,
              ]}
            >
              {isLive && <View style={styles.dot} />}
              <Text
                style={[
                  styles.badgeText,
                  isLive ? styles.badgeTextLive : styles.badgeTextFallback,
                ]}
              >
                {isLive ? updatedAt || labels.note : labels.error}
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.subtitle}>{labels.note}</Text>
      </View>

      {/* Input */}
      <View style={styles.inputCard}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#475569"
        />
      </View>

      {/* Currency Rows */}
      {CURRENCIES.map((c) => {
        const dir = direction[c.code] ?? 'fromKRW';
        const rate = rates[c.code] ?? FALLBACK_RATES[c.code];
        const result = dir === 'toKRW' ? numVal * rate : numVal / rate;
        const fromLabel = dir === 'toKRW' ? `${c.flag} ${c.code}` : '🇰🇷 KRW';
        const toLabel = dir === 'toKRW' ? '🇰🇷 KRW' : `${c.flag} ${c.code}`;
        const resultText =
          dir === 'toKRW' ? formatKRW(result) : formatForeign(result, c.code);

        return (
          <TouchableOpacity
            key={c.code}
            style={styles.card}
            onPress={() =>
              setDirection((prev) => ({
                ...prev,
                [c.code]: (prev[c.code] ?? 'fromKRW') === 'fromKRW' ? 'toKRW' : 'fromKRW',
              }))
            }
            activeOpacity={0.75}
          >
            <View style={styles.cardTop}>
              <Text style={styles.currencyName}>
                {c.flag} {c.name}
              </Text>
              <View style={styles.dirBadge}>
                <Text style={styles.dirText}>
                  {fromLabel} → {toLabel}
                </Text>
              </View>
            </View>
            <View style={styles.cardBottom}>
              <Text style={styles.inputAmount}>
                {numVal > 0 ? numVal.toLocaleString() : '—'}
              </Text>
              <Text style={styles.arrow}>→</Text>
              <Text style={styles.resultAmount}>
                {numVal > 0 ? resultText : '—'}
              </Text>
            </View>
            <Text style={styles.rateHint}>
              1 {c.code} ≈ {rate.toLocaleString()} ₩
            </Text>
          </TouchableOpacity>
        );
      })}

      {/* Wise Affiliate Banner */}
      <TouchableOpacity
        style={styles.wiseBanner}
        onPress={() => Linking.openURL(WISE_URL)}
        activeOpacity={0.85}
      >
        <View style={styles.wiseLeft}>
          <Text style={styles.wiseEmoji}>💸</Text>
          <View style={styles.wiseTextWrap}>
            <View style={styles.wiseTitleRow}>
              <Text style={styles.wiseTitle}>{(WISE_LABELS[lang] ?? WISE_LABELS.en).title}</Text>
              <View style={styles.wiseBadge}>
                <Text style={styles.wiseBadgeText}>{(WISE_LABELS[lang] ?? WISE_LABELS.en).badge}</Text>
              </View>
            </View>
            <Text style={styles.wiseDesc}>{(WISE_LABELS[lang] ?? WISE_LABELS.en).desc}</Text>
          </View>
        </View>
        <Text style={styles.wiseCta}>{(WISE_LABELS[lang] ?? WISE_LABELS.en).cta} →</Text>
      </TouchableOpacity>

      <Text style={styles.disclaimer}>open.er-api.com</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, paddingBottom: 48 },

  header: {
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: { fontSize: 20, fontWeight: '800', color: '#fff' },
  subtitle: { fontSize: 12, color: '#64748b' },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 5,
  },
  badgeLive: { backgroundColor: '#14532d' },
  badgeFallback: { backgroundColor: '#1e293b' },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#4ade80' },
  badgeText: { fontSize: 11, fontWeight: '700' },
  badgeTextLive: { color: '#4ade80' },
  badgeTextFallback: { color: '#94a3b8' },

  inputCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  input: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
    padding: 0,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  currencyName: { fontSize: 14, fontWeight: '700', color: '#0f172a' },
  dirBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  dirText: { fontSize: 11, color: '#64748b', fontWeight: '600' },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
  },
  inputAmount: { fontSize: 16, color: '#94a3b8', fontWeight: '600' },
  arrow: { fontSize: 14, color: '#f43f5e' },
  resultAmount: { fontSize: 22, fontWeight: '800', color: '#0f172a', flex: 1 },
  rateHint: { fontSize: 11, color: '#94a3b8' },

  disclaimer: {
    fontSize: 11,
    color: '#cbd5e1',
    textAlign: 'center',
    marginTop: 8,
  },

  wiseBanner: {
    backgroundColor: '#f0fdf4',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#86efac',
    gap: 12,
  },
  wiseLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 10,
  },
  wiseEmoji: { fontSize: 28, marginTop: 2 },
  wiseTextWrap: { flex: 1 },
  wiseTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 3 },
  wiseTitle: { fontSize: 14, fontWeight: '700', color: '#14532d' },
  wiseBadge: {
    backgroundColor: '#bbf7d0',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  wiseBadgeText: { fontSize: 10, fontWeight: '700', color: '#166534' },
  wiseDesc: { fontSize: 12, color: '#166534', lineHeight: 18 },
  wiseCta: {
    fontSize: 13,
    fontWeight: '800',
    color: '#16a34a',
    textAlign: 'right',
  },
});
