import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { isValidLocale } from '@/lib/i18n';

type Props = { params: Promise<{ lang: string }> };

type L = 'en' | 'zh' | 'ru' | 'ja';
const loc = (lang: string, m: Record<L, string>) => m[lang as L] ?? m.en;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const title: Record<L, string> = {
    en: 'Emergency Korean Phrases | K-Survival Kit',
    zh: '紧急韩语短句 | K-Survival Kit',
    ru: 'Экстренные фразы на корейском | K-Survival Kit',
    ja: '緊急韓国語フレーズ | K-Survival Kit',
  };
  const desc: Record<L, string> = {
    en: 'Essential Korean phrases for emergencies — hospital, police, landlord, taxi, subway and daily situations.',
    zh: '紧急情况必备韩语短句——医院、警察、房东、出租车、地铁及日常所需。',
    ru: 'Необходимые корейские фразы для экстренных ситуаций — больница, полиция, домовладелец, такси, метро.',
    ja: '緊急時に役立つ韓国語フレーズ集 — 病院・警察・家主・タクシー・地下鉄など。',
  };
  return {
    title: title[lang as L] ?? title.en,
    description: desc[lang as L] ?? desc.en,
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}/emergency-korean`,
      languages: {
        en: 'https://ksurvivalkit.com/en/emergency-korean',
        zh: 'https://ksurvivalkit.com/zh/emergency-korean',
        ru: 'https://ksurvivalkit.com/ru/emergency-korean',
        ja: 'https://ksurvivalkit.com/ja/emergency-korean',
        vi: 'https://ksurvivalkit.com/vi/emergency-korean',
      },
    },
  };
}

const EMERGENCY_NUMBERS = [
  {
    number: '119',
    label: 'Ambulance / Fire',
    korean: '소방·구급',
    color: 'bg-red-500',
  },
  { number: '112', label: 'Police', korean: '경찰', color: 'bg-blue-600' },
  {
    number: '1339',
    label: 'Medical Helpline',
    korean: '의료상담',
    color: 'bg-emerald-600',
  },
  {
    number: '1345',
    label: 'Immigration',
    korean: '외국인 종합안내',
    color: 'bg-violet-600',
  },
];

type Phrase = {
  korean: string;
  romanization: string;
  meaning: Record<L, string>;
};
type Section = {
  icon: string;
  title: Record<L, string>;
  color: string;
  bg: string;
  border: string;
  phrases: Phrase[];
};

const SECTIONS: Section[] = [
  {
    icon: '🏥',
    title: {
      en: 'At the Hospital / Clinic',
      zh: '在医院 / 诊所',
      ru: 'В больнице / Клинике',
      ja: '病院・クリニックで',
    },
    color: 'text-red-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
    phrases: [
      {
        korean: '아파요.',
        romanization: 'A-pa-yo.',
        meaning: {
          en: "I'm sick / It hurts.",
          zh: '我不舒服 / 很痛。',
          ru: 'Мне плохо / Больно.',
          ja: '具合が悪いです / 痛いです。',
        },
      },
      {
        korean: '여기가 아파요.',
        romanization: 'Yeo-gi-ga a-pa-yo.',
        meaning: {
          en: 'It hurts here. (point to area)',
          zh: '这里痛。（指向患处）',
          ru: 'Здесь больно. (укажите на место)',
          ja: 'ここが痛いです。（患部を指して）',
        },
      },
      {
        korean: '두통이 있어요.',
        romanization: 'Du-tong-i i-sseo-yo.',
        meaning: {
          en: 'I have a headache.',
          zh: '我头痛。',
          ru: 'У меня болит голова.',
          ja: '頭が痛いです。',
        },
      },
      {
        korean: '열이 있어요.',
        romanization: 'Yeol-i i-sseo-yo.',
        meaning: {
          en: 'I have a fever.',
          zh: '我发烧了。',
          ru: 'У меня жар.',
          ja: '熱があります。',
        },
      },
      {
        korean: '구역질이 나요.',
        romanization: 'Gu-yeok-jil-i na-yo.',
        meaning: {
          en: "I'm nauseous.",
          zh: '我感到恶心。',
          ru: 'Меня тошнит.',
          ja: '吐き気がします。',
        },
      },
      {
        korean: '영어 할 수 있는 의사 있나요?',
        romanization: 'Yeong-eo hal su in-neun ui-sa it-na-yo?',
        meaning: {
          en: 'Is there a doctor who speaks English?',
          zh: '有会说英语的医生吗？',
          ru: 'Есть ли врач, говорящий по-английски?',
          ja: '英語が話せる医師はいますか？',
        },
      },
      {
        korean: '외국인등록증이 있어요.',
        romanization: 'Oe-guk-in-deung-rok-jeung-i i-sseo-yo.',
        meaning: {
          en: 'I have my ARC card.',
          zh: '我有外国人登录证（ARC卡）。',
          ru: 'У меня есть карта иностранца (ARC).',
          ja: '外国人登録証を持っています。',
        },
      },
      {
        korean: '건강보험이 있어요.',
        romanization: 'Geon-gang-bo-heom-i i-sseo-yo.',
        meaning: {
          en: 'I have health insurance.',
          zh: '我有健康保险。',
          ru: 'У меня есть медицинская страховка.',
          ja: '健康保険に加入しています。',
        },
      },
      {
        korean: '처방전 주세요.',
        romanization: 'Cheo-bang-jeon ju-se-yo.',
        meaning: {
          en: 'Please give me a prescription.',
          zh: '请给我开处方。',
          ru: 'Пожалуйста, дайте рецепт.',
          ja: '処方箋をください。',
        },
      },
      {
        korean: '알레르기가 있어요.',
        romanization: 'Al-le-reu-gi-ga i-sseo-yo.',
        meaning: {
          en: 'I have an allergy.',
          zh: '我有过敏症。',
          ru: 'У меня аллергия.',
          ja: 'アレルギーがあります。',
        },
      },
    ],
  },
  {
    icon: '💊',
    title: {
      en: 'At the Pharmacy',
      zh: '在药店',
      ru: 'В аптеке',
      ja: '薬局で',
    },
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    phrases: [
      {
        korean: '두통약 주세요.',
        romanization: 'Du-tong-yak ju-se-yo.',
        meaning: {
          en: 'Headache medicine, please.',
          zh: '请给我头痛药。',
          ru: 'Пожалуйста, лекарство от головной боли.',
          ja: '頭痛薬をください。',
        },
      },
      {
        korean: '소화제 주세요.',
        romanization: 'So-hwa-je ju-se-yo.',
        meaning: {
          en: 'Digestive medicine, please.',
          zh: '请给我消化药。',
          ru: 'Пожалуйста, средство для пищеварения.',
          ja: '消化薬をください。',
        },
      },
      {
        korean: '감기약 주세요.',
        romanization: 'Gam-gi-yak ju-se-yo.',
        meaning: {
          en: 'Cold medicine, please.',
          zh: '请给我感冒药。',
          ru: 'Пожалуйста, лекарство от простуды.',
          ja: '風邪薬をください。',
        },
      },
      {
        korean: '처방전이 있어요.',
        romanization: 'Cheo-bang-jeon-i i-sseo-yo.',
        meaning: {
          en: 'I have a prescription.',
          zh: '我有处方。',
          ru: 'У меня есть рецепт.',
          ja: '処方箋があります。',
        },
      },
      {
        korean: '이거 처방전 없이 살 수 있어요?',
        romanization: 'I-geo cheo-bang-jeon eop-si sal su i-sseo-yo?',
        meaning: {
          en: 'Can I buy this without a prescription?',
          zh: '这个不用处方就能买吗？',
          ru: 'Могу ли я купить это без рецепта?',
          ja: 'これは処方箋なしで買えますか？',
        },
      },
    ],
  },
  {
    icon: '🚔',
    title: {
      en: 'Police / Emergency',
      zh: '警察 / 紧急情况',
      ru: 'Полиция / Экстренная помощь',
      ja: '警察・緊急',
    },
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    phrases: [
      {
        korean: '도와주세요!',
        romanization: 'Do-wa-ju-se-yo!',
        meaning: {
          en: 'Help me!',
          zh: '救命！',
          ru: 'Помогите!',
          ja: '助けてください！',
        },
      },
      {
        korean: '경찰을 불러주세요.',
        romanization: 'Gyeong-chal-eul bul-leo-ju-se-yo.',
        meaning: {
          en: 'Please call the police.',
          zh: '请叫警察。',
          ru: 'Пожалуйста, вызовите полицию.',
          ja: '警察を呼んでください。',
        },
      },
      {
        korean: '구급차를 불러주세요.',
        romanization: 'Gu-geup-cha-reul bul-leo-ju-se-yo.',
        meaning: {
          en: 'Please call an ambulance.',
          zh: '请叫救护车。',
          ru: 'Пожалуйста, вызовите скорую помощь.',
          ja: '救急車を呼んでください。',
        },
      },
      {
        korean: '도둑맞았어요.',
        romanization: 'Do-dung-ma-ja-sseo-yo.',
        meaning: {
          en: 'I was robbed.',
          zh: '我被抢劫了。',
          ru: 'Меня ограбили.',
          ja: '盗難に遭いました。',
        },
      },
      {
        korean: '지갑을 잃어버렸어요.',
        romanization: 'Ji-gab-eul il-eo-beo-ryeo-sseo-yo.',
        meaning: {
          en: 'I lost my wallet.',
          zh: '我丢了钱包。',
          ru: 'Я потерял(а) кошелёк.',
          ja: '財布をなくしました。',
        },
      },
      {
        korean: '여권을 잃어버렸어요.',
        romanization: 'Yeo-gwon-eul il-eo-beo-ryeo-sseo-yo.',
        meaning: {
          en: 'I lost my passport.',
          zh: '我丢了护照。',
          ru: 'Я потерял(а) паспорт.',
          ja: 'パスポートをなくしました。',
        },
      },
      {
        korean: '영어 통역사가 필요해요.',
        romanization: 'Yeong-eo tong-yeok-sa-ga pi-ryo-hae-yo.',
        meaning: {
          en: 'I need an English interpreter.',
          zh: '我需要英语翻译。',
          ru: 'Мне нужен переводчик с английского.',
          ja: '英語の通訳が必要です。',
        },
      },
      {
        korean: '저는 외국인이에요.',
        romanization: 'Jeo-neun oe-guk-in-i-e-yo.',
        meaning: {
          en: "I'm a foreigner.",
          zh: '我是外国人。',
          ru: 'Я иностранец/иностранка.',
          ja: '外国人です。',
        },
      },
    ],
  },
  {
    icon: '🏠',
    title: {
      en: 'Talking to Your Landlord',
      zh: '与房东沟通',
      ru: 'Разговор с хозяином жилья',
      ja: '家主との会話',
    },
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    phrases: [
      {
        korean: '물이 안 나와요.',
        romanization: 'Mul-i an na-wa-yo.',
        meaning: {
          en: "The water isn't coming out.",
          zh: '没有水。',
          ru: 'Вода не идёт.',
          ja: '水が出ません。',
        },
      },
      {
        korean: '보일러가 고장났어요.',
        romanization: 'Bo-il-leo-ga go-jang-na-sseo-yo.',
        meaning: {
          en: 'The boiler is broken.',
          zh: '热水器坏了。',
          ru: 'Бойлер сломан.',
          ja: 'ボイラーが故障しています。',
        },
      },
      {
        korean: '에어컨이 고장났어요.',
        romanization: 'E-eo-keon-i go-jang-na-sseo-yo.',
        meaning: {
          en: "The air conditioner isn't working.",
          zh: '空调不工作了。',
          ru: 'Кондиционер не работает.',
          ja: 'エアコンが壊れています。',
        },
      },
      {
        korean: '전기가 안 들어와요.',
        romanization: 'Jeon-gi-ga an deul-eo-wa-yo.',
        meaning: {
          en: "The electricity isn't working.",
          zh: '停电了。',
          ru: 'Электричества нет.',
          ja: '電気がつきません。',
        },
      },
      {
        korean: '수리를 부탁드려요.',
        romanization: 'Su-ri-reul bu-tak-deu-ryeo-yo.',
        meaning: {
          en: 'Please fix it.',
          zh: '请修理一下。',
          ru: 'Пожалуйста, почините.',
          ja: '修理してください。',
        },
      },
      {
        korean: '언제 고칠 수 있어요?',
        romanization: 'Eon-je go-chil su i-sseo-yo?',
        meaning: {
          en: 'When can it be fixed?',
          zh: '什么时候能修好？',
          ru: 'Когда это можно починить?',
          ja: 'いつ直してもらえますか？',
        },
      },
      {
        korean: '계약서를 다시 확인하고 싶어요.',
        romanization: 'Gye-yak-seo-reul da-si hwa-gin-ha-go si-peo-yo.',
        meaning: {
          en: 'I want to review the contract again.',
          zh: '我想再确认一下合同。',
          ru: 'Я хочу пересмотреть договор.',
          ja: '契約書を再確認したいです。',
        },
      },
      {
        korean: '보증금을 돌려받고 싶어요.',
        romanization: 'Bo-jeung-geum-eul dol-lyeo-bat-go si-peo-yo.',
        meaning: {
          en: 'I want to get my deposit back.',
          zh: '我想要回押金。',
          ru: 'Я хочу вернуть залог.',
          ja: '保証金を返してほしいです。',
        },
      },
    ],
  },
  {
    icon: '🚕',
    title: { en: 'Taxi', zh: '出租车', ru: 'Такси', ja: 'タクシー' },
    color: 'text-yellow-700',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    phrases: [
      {
        korean: '이 주소로 가주세요.',
        romanization: 'I ju-so-ro ga-ju-se-yo.',
        meaning: {
          en: 'Please take me to this address. (show address)',
          zh: '请载我去这个地址。（出示地址）',
          ru: 'Пожалуйста, отвезите меня по этому адресу. (покажите адрес)',
          ja: 'このアドレスまで連れて行ってください。（住所を見せる）',
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
        },
      },
      {
        korean: '조금 더 가주세요.',
        romanization: 'Jo-geum deo ga-ju-se-yo.',
        meaning: {
          en: 'Please go a little further.',
          zh: '请再走一点。',
          ru: 'Поезжайте ещё немного вперёд.',
          ja: 'もう少し進んでください。',
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
        },
      },
      {
        korean: '트렁크 열어주세요.',
        romanization: 'Teu-reong-keu yeol-eo-ju-se-yo.',
        meaning: {
          en: 'Please open the trunk.',
          zh: '请开后备箱。',
          ru: 'Пожалуйста, откройте багажник.',
          ja: 'トランクを開けてください。',
        },
      },
      {
        korean: '에어컨 좀 틀어주세요.',
        romanization: 'E-eo-keon jom teul-eo-ju-se-yo.',
        meaning: {
          en: 'Could you turn on the AC?',
          zh: '请开空调。',
          ru: 'Не могли бы вы включить кондиционер?',
          ja: 'エアコンをつけてもらえますか？',
        },
      },
      {
        korean: '빨리 가주세요. 급해요.',
        romanization: 'Ppal-li ga-ju-se-yo. Geu-pae-yo.',
        meaning: {
          en: "Please hurry. I'm in a rush.",
          zh: '请快点，我很急。',
          ru: 'Поторопитесь, пожалуйста. Я спешу.',
          ja: '急いでください。急いでいます。',
        },
      },
      {
        korean: '잠깐만요, 길을 확인할게요.',
        romanization: 'Jam-kkan-man-yo, gil-eul hwa-gin-hal-ge-yo.',
        meaning: {
          en: "Just a moment, I'll check the directions.",
          zh: '稍等，我查一下路。',
          ru: 'Одну минуту, я проверю маршрут.',
          ja: '少し待って、道を確認します。',
        },
      },
    ],
  },
  {
    icon: '🚇',
    title: {
      en: 'Subway & Bus',
      zh: '地铁与公交',
      ru: 'Метро и автобус',
      ja: '地下鉄・バス',
    },
    color: 'text-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    phrases: [
      {
        korean: '지하철 몇 호선이에요?',
        romanization: 'Ji-ha-cheol myeot ho-seon-i-e-yo?',
        meaning: {
          en: 'Which subway line is it?',
          zh: '几号地铁线？',
          ru: 'Какая это линия метро?',
          ja: '何号線ですか？',
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
        },
      },
      {
        korean: '이 역에서 환승할 수 있어요?',
        romanization: 'I yeok-e-seo hwan-seung-hal su i-sseo-yo?',
        meaning: {
          en: 'Can I transfer at this station?',
          zh: '这一站可以换乘吗？',
          ru: 'Можно ли здесь пересесть?',
          ja: 'この駅で乗り換えられますか？',
        },
      },
      {
        korean: '몇 정거장이에요?',
        romanization: 'Myeot jeong-geo-jang-i-e-yo?',
        meaning: {
          en: 'How many stops is it?',
          zh: '还有几站？',
          ru: 'Сколько остановок?',
          ja: '何駅ありますか？',
        },
      },
      {
        korean: '종점이 어디예요?',
        romanization: 'Jong-jeom-i eo-di-ye-yo?',
        meaning: {
          en: 'Where is the last stop?',
          zh: '终点站在哪里？',
          ru: 'Где конечная остановка?',
          ja: '終点はどこですか？',
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
        },
      },
      {
        korean: '티머니 카드 어디서 충전해요?',
        romanization: 'Ti-meo-ni ka-deu eo-di-seo chung-jeon-hae-yo?',
        meaning: {
          en: 'Where can I top up my T-money card?',
          zh: 'T-money卡在哪里充值？',
          ru: 'Где я могу пополнить T-money карту?',
          ja: 'T-moneyカードはどこでチャージできますか？',
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
        },
      },
    ],
  },
  {
    icon: '🗣️',
    title: {
      en: 'General Communication',
      zh: '日常沟通',
      ru: 'Общение',
      ja: '日常コミュニケーション',
    },
    color: 'text-slate-700',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    phrases: [
      {
        korean: '어디예요?',
        romanization: 'Eo-di-ye-yo?',
        meaning: {
          en: 'Where is it?',
          zh: '在哪里？',
          ru: 'Где это?',
          ja: 'どこですか？',
        },
      },
      {
        korean: '길을 잃었어요.',
        romanization: 'Gil-eul il-eo-sseo-yo.',
        meaning: {
          en: "I'm lost.",
          zh: '我迷路了。',
          ru: 'Я заблудился/заблудилась.',
          ja: '迷子になりました。',
        },
      },
      {
        korean: '얼마예요?',
        romanization: 'Eol-ma-ye-yo?',
        meaning: {
          en: 'How much is it?',
          zh: '多少钱？',
          ru: 'Сколько стоит?',
          ja: 'いくらですか？',
        },
      },
      {
        korean: '한국어를 잘 못해요.',
        romanization: 'Han-gug-eo-reul jal mo-tae-yo.',
        meaning: {
          en: "I can't speak Korean well.",
          zh: '我韩语不好。',
          ru: 'Я плохо говорю по-корейски.',
          ja: '韓国語があまり話せません。',
        },
      },
      {
        korean: '천천히 말해주세요.',
        romanization: 'Cheon-cheon-hi mal-hae-ju-se-yo.',
        meaning: {
          en: 'Please speak slowly.',
          zh: '请说慢一点。',
          ru: 'Говорите, пожалуйста, помедленнее.',
          ja: 'ゆっくり話してください。',
        },
      },
      {
        korean: '다시 말해주세요.',
        romanization: 'Da-si mal-hae-ju-se-yo.',
        meaning: {
          en: 'Please say that again.',
          zh: '请再说一遍。',
          ru: 'Пожалуйста, повторите.',
          ja: 'もう一度言ってください。',
        },
      },
      {
        korean: '이해가 안 돼요.',
        romanization: 'I-hae-ga an dwae-yo.',
        meaning: {
          en: "I don't understand.",
          zh: '我听不懂。',
          ru: 'Я не понимаю.',
          ja: 'わかりません。',
        },
      },
      {
        korean: '써주세요.',
        romanization: 'Sseo-ju-se-yo.',
        meaning: {
          en: 'Please write it down.',
          zh: '请写下来。',
          ru: 'Пожалуйста, запишите.',
          ja: '書いてください。',
        },
      },
    ],
  },
];

const UI = {
  pageTitle: {
    en: 'Emergency Korean',
    zh: '紧急韩语短句',
    ru: 'Экстренные фразы',
    ja: '緊急韓国語フレーズ',
  },
  pageSubtitle: {
    en: 'Essential phrases for urgent situations — hospital, police, landlord, and daily needs. Save or print this page.',
    zh: '紧急情况必备韩语——医院、警察、房东及日常所需。请保存或打印本页面。',
    ru: 'Необходимые фразы для экстренных ситуаций — больница, полиция, домовладелец и повседневные нужды.',
    ja: '緊急時に必要なフレーズ集 — 病院・警察・家主・日常のニーズ。保存または印刷してください。',
  },
  emergencyNumbers: {
    en: '☎️ Emergency Numbers',
    zh: '☎️ 紧急电话',
    ru: '☎️ Экстренные номера',
    ja: '☎️ 緊急電話番号',
  },
  tip: {
    en: "Show your phone screen to Korean speakers when you can't pronounce the phrase. Google Translate's camera feature can also help translate signs in real time.",
    zh: '无法发音时，可将手机屏幕展示给韩国人看。谷歌翻译的相机功能也可实时翻译标志和菜单。',
    ru: 'Показывайте экран телефона корейцам, когда не можете произнести фразу. Функция камеры в Google Переводчике поможет переводить вывески в реальном времени.',
    ja: 'フレーズを発音できない時は、スマホ画面を韓国人に見せましょう。Googleレンズの翻訳機能で看板やメニューをリアルタイム翻訳できます。',
  },
  printBtn: {
    en: '🖨️ Print / Save as PDF',
    zh: '🖨️ 打印 / 另存为PDF',
    ru: '🖨️ Печать / Сохранить как PDF',
    ja: '🖨️ 印刷 / PDFとして保存',
  },
  relatedContacts: {
    en: 'Emergency Contacts',
    zh: '紧急联系电话',
    ru: 'Экстренные контакты',
    ja: '緊急連絡先',
  },
  relatedContactsDesc: {
    en: 'Full directory · Embassies · Foreigner helplines',
    zh: '完整号码 · 大使馆 · 外国人支援中心',
    ru: 'Полный справочник · Посольства · Линии помощи',
    ja: '番号一覧 · 大使館 · 外国人支援センター',
  },
  relatedTransport: {
    en: 'Getting Around',
    zh: '在韩国出行',
    ru: 'Передвижение',
    ja: '交通ガイド',
  },
  relatedTransportDesc: {
    en: 'Subway · Bus · Taxi · T-money guide',
    zh: '地铁 · 公交 · 出租车 · T-money',
    ru: 'Метро · Автобус · Такси · T-money',
    ja: '地下鉄 · バス · タクシー · T-money',
  },
};

export default async function EmergencyKoreanPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-10 print:py-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🇰🇷</span>
                <h1 className="text-3xl font-black text-slate-900">
                  {loc(lang, UI.pageTitle)}
                </h1>
              </div>
              <p className="mt-2 text-slate-500 text-sm leading-6 max-w-xl">
                {loc(lang, UI.pageSubtitle)}
              </p>
            </div>
          </div>
          <div className="mt-4 print:hidden">
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              id="print-button"
            >
              {loc(lang, UI.printBtn)}
            </button>
            <script
              dangerouslySetInnerHTML={{
                __html: `document.getElementById('print-button').onclick=function(){window.print();}`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Emergency Numbers */}
      <div className="border-b border-slate-200 bg-slate-900 px-6 py-6 print:bg-white print:border-slate-300">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 print:text-slate-600">
            {loc(lang, UI.emergencyNumbers)}
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {EMERGENCY_NUMBERS.map((n) => (
              <a
                key={n.number}
                href={`tel:${n.number}`}
                className={`flex items-center gap-3 rounded-2xl ${n.color} px-4 py-3 text-white transition hover:opacity-90 print:border print:border-current print:bg-transparent print:text-slate-900`}
              >
                <span className="text-2xl font-black">{n.number}</span>
                <div>
                  <p className="text-sm font-bold">{n.label}</p>
                  <p className="text-xs opacity-80">{n.korean}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Phrase sections */}
      <div className="mx-auto max-w-4xl px-6 py-8 space-y-8">
        {SECTIONS.map((section) => (
          <div
            key={section.title.en}
            className={`overflow-hidden rounded-2xl border ${section.border} bg-white`}
          >
            <div className={`${section.bg} px-5 py-4 flex items-center gap-3`}>
              <span className="text-2xl">{section.icon}</span>
              <h2 className={`font-bold text-lg ${section.color}`}>
                {loc(lang, section.title)}
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              {section.phrases.map((phrase, idx) => (
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
        ))}

        {/* Tip */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800">
          <strong>💡 Tip:</strong> {loc(lang, UI.tip)}
        </div>

        {/* Cross-links */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href={`/${lang}/emergency-contacts`}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 hover:bg-slate-50 transition group"
          >
            <span className="text-3xl">📞</span>
            <div>
              <p className="font-bold text-slate-900 group-hover:text-rose-600 transition">
                {loc(lang, UI.relatedContacts)}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {loc(lang, UI.relatedContactsDesc)}
              </p>
            </div>
            <span className="ml-auto text-slate-400">→</span>
          </Link>
          <Link
            href={`/${lang}/transport`}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 hover:bg-slate-50 transition group"
          >
            <span className="text-3xl">🚇</span>
            <div>
              <p className="font-bold text-slate-900 group-hover:text-rose-600 transition">
                {loc(lang, UI.relatedTransport)}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {loc(lang, UI.relatedTransportDesc)}
              </p>
            </div>
            <span className="ml-auto text-slate-400">→</span>
          </Link>
        </div>
      </div>

      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { font-size: 12px; }
          .print\\:bg-white { background: white !important; }
          .print\\:text-slate-900 { color: #0f172a !important; }
        }
      `}</style>
    </main>
  );
}
