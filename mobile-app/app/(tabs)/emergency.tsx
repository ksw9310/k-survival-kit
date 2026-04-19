import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import { useLang, Lang } from '../../context/LanguageContext';

const EMERGENCY = [
  { emoji: '🚔', number: '112', color: '#3b82f6' },
  { emoji: '🚒', number: '119', color: '#ef4444' },
  { emoji: '🚑', number: '119', color: '#ef4444' },
  { emoji: '☎️', number: '1345', color: '#8b5cf6' },
  { emoji: '🆘', number: '110', color: '#f59e0b' },
];

const LABELS: Record<Lang, {
  banner: string;
  bannerSub: string;
  labels: string[];
  phrasesTitle: string;
  tip: string;
}> = {
  en: {
    banner: '🆘 Emergency Numbers',
    bannerSub: 'Tap to call directly',
    labels: ['Police', 'Fire Department', 'Ambulance', 'Foreigners Helpline', 'Emergency Report'],
    phrasesTitle: 'Emergency Korean Phrases',
    tip: 'Tap a number to call directly. 1345 is the 24h foreigners helpline (multilingual).',
  },
  ko: {
    banner: '🆘 긴급 전화번호',
    bannerSub: '탭하여 바로 전화',
    labels: ['경찰', '소방서', '구급차', '외국인 상담 전화', '긴급신고'],
    phrasesTitle: '긴급 한국어 표현',
    tip: '번호를 탭하면 바로 전화가 연결됩니다. 1345는 24시간 다국어 외국인 상담 전화입니다.',
  },
  zh: {
    banner: '🆘 紧急电话号码',
    bannerSub: '点击直接拨打',
    labels: ['警察', '消防局', '救护车', '外国人咨询热线', '紧急报告'],
    phrasesTitle: '紧急韩语表达',
    tip: '点击号码可直接拨打。1345是24小时多语言外国人咨询热线。',
  },
  ja: {
    banner: '🆘 緊急電話番号',
    bannerSub: 'タップで直接電話',
    labels: ['警察', '消防署', '救急車', '外国人相談窓口', '緊急通報'],
    phrasesTitle: '緊急韓国語フレーズ',
    tip: '番号をタップすると直接電話できます。1345は24時間多言語対応の外国人相談窓口です。',
  },
  ru: {
    banner: '🆘 Экстренные номера',
    bannerSub: 'Нажмите для звонка',
    labels: ['Полиция', 'Пожарная служба', 'Скорая помощь', 'Горячая линия для иностранцев', 'Экстренный вызов'],
    phrasesTitle: 'Экстренные фразы на корейском',
    tip: 'Нажмите на номер, чтобы позвонить. 1345 — круглосуточная многоязычная линия для иностранцев.',
  },
};

const PHRASES: { ko: string; phonetic: string; en: string; zh: string; ja: string; ru: string }[] = [
  { ko: '도와주세요', phonetic: 'Do-wa-ju-se-yo', en: 'Help me!', zh: '救命！', ja: '助けてください', ru: 'Помогите!' },
  { ko: '응급실이 어디예요?', phonetic: 'Eung-geup-sil-i eo-di-ye-yo?', en: 'Where is the ER?', zh: '急诊室在哪里？', ja: '救急室はどこですか？', ru: 'Где скорая помощь?' },
  { ko: '경찰을 불러주세요', phonetic: 'Gyeong-chal-eul bul-leo-ju-se-yo', en: 'Call the police', zh: '请叫警察', ja: '警察を呼んでください', ru: 'Вызовите полицию' },
  { ko: '길을 잃었어요', phonetic: 'Gil-eul il-leo-sseo-yo', en: 'I am lost', zh: '我迷路了', ja: '道に迷いました', ru: 'Я потерялся' },
  { ko: '병원에 가야 해요', phonetic: 'Byeong-won-e ga-ya hae-yo', en: 'I need to go to hospital', zh: '我需要去医院', ja: '病院に行かないといけません', ru: 'Мне нужно в больницу' },
];

export default function EmergencyScreen() {
  const { lang } = useLang();
  const t = LABELS[lang];

  const getPhraseTranslation = (p: typeof PHRASES[0]) => {
    if (lang === 'ko') return p.ko;
    if (lang === 'zh') return p.zh;
    if (lang === 'ja') return p.ja;
    if (lang === 'ru') return p.ru;
    return p.en;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>{t.banner}</Text>
        <Text style={styles.bannerSub}>{t.bannerSub}</Text>
      </View>

      {EMERGENCY.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={styles.row}
          onPress={() => Linking.openURL(`tel:${item.number}`)}
          activeOpacity={0.7}
        >
          <View style={[styles.iconBox, { backgroundColor: item.color + '18' }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
          </View>
          <Text style={styles.label}>{t.labels[i]}</Text>
          <Text style={[styles.number, { color: item.color }]}>{item.number}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.tipBox}>
        <Text style={styles.tipText}>{t.tip}</Text>
      </View>

      <Text style={styles.sectionTitle}>{t.phrasesTitle}</Text>
      {PHRASES.map((p) => (
        <View key={p.ko} style={styles.phrase}>
          <Text style={styles.phraseKo}>{p.ko}</Text>
          <Text style={styles.phrasePhonetic}>{p.phonetic}</Text>
          <Text style={styles.phraseTranslation}>{getPhraseTranslation(p)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, paddingBottom: 40 },
  banner: {
    backgroundColor: '#ef4444',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  bannerText: { fontSize: 22, fontWeight: '800', color: '#fff' },
  bannerSub: { fontSize: 13, color: '#fecaca', marginTop: 4 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 22 },
  label: { flex: 1, fontSize: 14, fontWeight: '600', color: '#0f172a' },
  number: { fontSize: 22, fontWeight: '800', letterSpacing: 1 },
  tipBox: {
    backgroundColor: '#fff7ed',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  tipText: { fontSize: 13, color: '#7c2d12', lineHeight: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 12,
  },
  phrase: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  phraseKo: { fontSize: 18, fontWeight: '700', color: '#0f172a' },
  phrasePhonetic: { fontSize: 13, color: '#f43f5e', marginTop: 3, fontStyle: 'italic' },
  phraseTranslation: { fontSize: 13, color: '#64748b', marginTop: 2 },
});
