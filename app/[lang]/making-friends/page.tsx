import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';

type Props = { params: Promise<{ lang: string }> };
type L = 'en' | 'zh' | 'ru' | 'ja';
const loc = (lang: string, m: Record<L, string>) => m[lang as L] ?? m.en;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return {
    title: loc(lang, {
      en: 'Making Friends in Korea | K-Survival Kit',
      zh: '在韩国交朋友 | K-Survival Kit',
      ru: 'Как познакомиться в Корее | K-Survival Kit',
      ja: '韓国で友達を作ろう | K-Survival Kit',
    }),
    description: loc(lang, {
      en: 'How to meet people and make friends as a foreigner in Korea — apps, events, language exchange, and communities.',
      zh: '在韩国作为外国人如何交朋友——应用、活动、语言交换和社群。',
      ru: 'Как познакомиться с людьми в Корее — приложения, мероприятия, языковой обмен и сообщества.',
      ja: '韓国で外国人として友達を作る方法——アプリ・イベント・言語交換・コミュニティ。',
    }),
    alternates: {
      canonical: `https://ksurvivalkit.com/${lang}/making-friends`,
      languages: {
        en: 'https://ksurvivalkit.com/en/making-friends',
        zh: 'https://ksurvivalkit.com/zh/making-friends',
        ru: 'https://ksurvivalkit.com/ru/making-friends',
        ja: 'https://ksurvivalkit.com/ja/making-friends',
      },
    },
  };
}

const UI = {
  pageTitle: { en: 'Making Friends in Korea', zh: '在韩国交朋友', ru: 'Знакомства в Корее', ja: '韓国で友達を作ろう' },
  pageSubtitle: {
    en: 'Apps, events, and communities to meet people as a foreigner in Korea.',
    zh: '在韩国作为外国人结交朋友的应用、活动和社群。',
    ru: 'Приложения, мероприятия и сообщества для знакомств иностранцев в Корее.',
    ja: '韓国で外国人として友達を作るためのアプリ・イベント・コミュニティ。',
  },
  tip: {
    en: '💡 Language exchange is one of the easiest ways to meet Korean friends. Koreans learning English or other languages are always looking for native-speaking partners.',
    zh: '💡 语言交换是结交韩国朋友最简单的方式之一。正在学英语或其他语言的韩国人一直在寻找母语交流伙伴。',
    ru: '💡 Языковой обмен — один из самых простых способов познакомиться с корейцами. Корейцы, изучающие английский или другие языки, всегда ищут носителей языка.',
    ja: '💡 言語交換は韓国人の友達を作る最も簡単な方法の一つです。英語や他の言語を勉強している韓国人はいつもネイティブスピーカーを探しています。',
  },
};

type Card = {
  icon: string;
  name: string;
  tag: Record<L, string>;
  desc: Record<L, string>;
  url: string;
  btnColor: string;
  btn: Record<L, string>;
};

const APPS: Card[] = [
  {
    icon: '🌍',
    name: 'Meetup',
    tag: { en: 'Events & Groups', zh: '活动与团体', ru: 'Мероприятия', ja: 'イベント・グループ' },
    desc: {
      en: 'Find local events and groups in Korea — hiking, language exchange, board games, expat meetups and more. Free to join most events.',
      zh: '在韩国寻找本地活动和团体——徒步、语言交换、桌游、外籍人士聚会等。大多数活动免费参加。',
      ru: 'Найдите местные мероприятия и группы в Корее — походы, языковой обмен, настольные игры, встречи экспатов и многое другое.',
      ja: '韓国でのローカルイベントやグループを探せます。ハイキング・言語交換・ボードゲーム・外国人交流など。多くのイベントは無料。',
    },
    url: 'https://www.meetup.com/find/?keywords=korea&source=EVENTS',
    btnColor: 'bg-rose-500',
    btn: { en: 'Find Korea Meetups', zh: '查找韩国聚会', ru: 'Найти встречи в Корее', ja: '韓国のMeetupを探す' },
  },
  {
    icon: '🌐',
    name: 'InterNations',
    tag: { en: 'Expat Community', zh: '外籍人士社区', ru: 'Сообщество экспатов', ja: '外国人コミュニティ' },
    desc: {
      en: 'The largest expat network in the world. Join Korea chapters for events, forums, and networking with other foreigners living in Korea.',
      zh: '全球最大的外籍人士网络。加入韩国分会，参加活动、论坛，与其他在韩外国人建立联系。',
      ru: 'Крупнейшая сеть экспатов в мире. Вступайте в корейские отделения для участия в мероприятиях и общения с другими иностранцами.',
      ja: '世界最大の外国人ネットワーク。韓国チャプターに参加してイベントやフォーラム、在韓外国人とのネットワーキングを楽しもう。',
    },
    url: 'https://www.internations.org/korea-expats',
    btnColor: 'bg-blue-500',
    btn: { en: 'Join InterNations Korea', zh: '加入InterNations韩国', ru: 'Присоединиться к InterNations', ja: 'InterNations韓国に参加' },
  },
  {
    icon: '💬',
    name: 'Tandem',
    tag: { en: 'Language Exchange', zh: '语言交换', ru: 'Языковой обмен', ja: '言語交換' },
    desc: {
      en: 'Find a Korean language partner who wants to learn your language. Chat by text, voice, or video — a natural way to make Korean friends.',
      zh: '寻找想学你语言的韩语交流伙伴。文字、语音或视频聊天——自然地结交韩国朋友的方式。',
      ru: 'Найдите партнёра по корейскому языку, который хочет учить ваш язык. Общайтесь по тексту, голосу или видео.',
      ja: 'あなたの言語を学びたい韓国語パートナーを見つけましょう。テキスト・音声・ビデオで自然に韓国人の友達ができます。',
    },
    url: 'https://www.tandem.net',
    btnColor: 'bg-violet-500',
    btn: { en: 'Find a Language Partner', zh: '寻找语言伙伴', ru: 'Найти партнёра', ja: '言語パートナーを探す' },
  },
  {
    icon: '📱',
    name: 'HelloTalk',
    tag: { en: 'Language Exchange', zh: '语言交换', ru: 'Языковой обмен', ja: '言語交換' },
    desc: {
      en: 'Chat with native Korean speakers who want to practice your language. Built-in translation and correction tools make conversation easy.',
      zh: '与想练习你语言的韩语母语者聊天。内置翻译和纠错工具让交流更轻松。',
      ru: 'Общайтесь с носителями корейского, которые хотят практиковать ваш язык. Встроенные инструменты перевода и исправления упрощают общение.',
      ja: 'あなたの言語を練習したい韓国語ネイティブとチャットしよう。翻訳・添削ツール内蔵で会話が簡単。',
    },
    url: 'https://www.hellotalk.com',
    btnColor: 'bg-emerald-500',
    btn: { en: 'Open HelloTalk', zh: '打开HelloTalk', ru: 'Открыть HelloTalk', ja: 'HelloTalkを開く' },
  },
  {
    icon: '🏫',
    name: 'University International Office',
    tag: { en: 'On Campus', zh: '校内资源', ru: 'В кампусе', ja: 'キャンパス内' },
    desc: {
      en: "Check your university's international office for buddy programs, orientation events, and student clubs. This is often the easiest way to meet both Koreans and other international students.",
      zh: '查看你大学的国际处，了解结对项目、迎新活动和学生社团。这通常是同时结识韩国学生和其他留学生的最简单方式。',
      ru: 'Обратитесь в международный отдел вашего университета — там есть программы наставничества, ориентационные мероприятия и студенческие клубы.',
      ja: '大学の国際センターでバディプログラム・オリエンテーション・学生クラブをチェック。韓国人学生と留学生両方と出会う最も簡単な方法です。',
    },
    url: 'https://www.google.com/search?q=korea+university+international+student+buddy+program',
    btnColor: 'bg-slate-600',
    btn: { en: 'Search Buddy Programs', zh: '搜索结对项目', ru: 'Найти программы', ja: 'バディプログラムを探す' },
  },
  {
    icon: '🎮',
    name: 'Facebook Groups',
    tag: { en: 'Online Community', zh: '线上社区', ru: 'Онлайн-сообщество', ja: 'オンラインコミュニティ' },
    desc: {
      en: 'Join expat Facebook groups like "Foreigners in Korea", "Seoul Expats", or groups specific to your city. Great for asking questions and finding local hangouts.',
      zh: '加入"Foreigners in Korea"、"Seoul Expats"等外籍人士Facebook群组，或特定城市的群组。非常适合提问和寻找本地聚集地。',
      ru: 'Вступайте в группы Facebook для экспатов: "Foreigners in Korea", "Seoul Expats" или группы вашего города.',
      ja: '「Foreigners in Korea」「Seoul Expats」などのFacebookグループに参加しましょう。質問や地元の集まりを見つけるのに最適。',
    },
    url: 'https://www.facebook.com/search/groups?q=foreigners%20in%20korea',
    btnColor: 'bg-blue-600',
    btn: { en: 'Find Facebook Groups', zh: '查找Facebook群组', ru: 'Найти группы', ja: 'Facebookグループを探す' },
  },
];

const TIPS: { icon: string; title: Record<L, string>; body: Record<L, string> }[] = [
  {
    icon: '🗣️',
    title: { en: 'Try even a little Korean', zh: '尝试说几句韩语', ru: 'Попробуйте говорить по-корейски', ja: '少しでも韓国語を試してみよう' },
    body: {
      en: 'Koreans greatly appreciate any effort to speak Korean, even just basic greetings. A simple "안녕하세요" (hello) goes a long way.',
      zh: '韩国人非常欣赏任何学说韩语的努力，哪怕只是基本问候。一句简单的"안녕하세요"（你好）效果出奇地好。',
      ru: 'Корейцы очень ценят любые попытки говорить по-корейски, даже самые базовые приветствия. Простое "안녕하세요" творит чудеса.',
      ja: '韓国語を話そうとする努力をとても大切にしてくれます。簡単な「안녕하세요」だけでも大きな違いがあります。',
    },
  },
  {
    icon: '🍻',
    title: { en: 'Join hoesik (회식)', zh: '参加회식（聚餐）', ru: 'Участвуйте в хвесик (회식)', ja: '회식（飲み会）に参加しよう' },
    body: {
      en: 'Team dinners and group outings (회식) are central to Korean social life. If you are invited, going even once makes a big difference for bonding.',
      zh: '团体聚餐和集体外出（회식）是韩国社交生活的核心。如果被邀请，哪怕去一次也会对增进感情大有帮助。',
      ru: 'Командные ужины и групповые мероприятия (회식) — важная часть корейской социальной жизни. Если вас пригласили, обязательно сходите хотя бы раз.',
      ja: '飲み会や集まり（회식）は韓国の社交生活の中心です。誘われたら一度でも参加すると絆が深まります。',
    },
  },
  {
    icon: '📚',
    title: { en: 'Take a Korean language class', zh: '参加韩语课', ru: 'Запишитесь на курс корейского', ja: '韓国語クラスに参加しよう' },
    body: {
      en: 'University language programs often mix Korean and international students. It\'s a structured environment where friendships form naturally.',
      zh: '大学语言课程通常将韩国学生和国际学生混合。这是一个友谊自然形成的有组织的环境。',
      ru: 'Языковые программы в университетах часто объединяют корейских и иностранных студентов. Дружба завязывается естественно.',
      ja: '大学の語学プログラムは韓国人学生と留学生が混在することが多く、自然と友情が育まれる環境です。',
    },
  },
];

export default async function MakingFriendsPage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-3xl">🤝</span>
            <h1 className="text-3xl font-black text-slate-900">{loc(lang, UI.pageTitle)}</h1>
          </div>
          <p className="mt-2 text-slate-500 text-sm leading-6 max-w-xl">{loc(lang, UI.pageSubtitle)}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 space-y-6">

        {/* Tip banner */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          {loc(lang, UI.tip)}
        </div>

        {/* Apps & Communities */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {APPS.map((card) => (
            <div key={card.name} className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{card.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-slate-900">{card.name}</p>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500">
                      {loc(lang, card.tag)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-500 leading-6">{loc(lang, card.desc)}</p>
                </div>
              </div>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${card.btnColor} inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold text-white hover:opacity-90 transition-opacity`}
              >
                {loc(lang, card.btn)} →
              </a>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100">
          {TIPS.map((tip) => (
            <div key={tip.icon} className="flex gap-4 px-5 py-4">
              <span className="text-xl shrink-0">{tip.icon}</span>
              <div>
                <p className="font-bold text-slate-900 text-sm">{loc(lang, tip.title)}</p>
                <p className="mt-1 text-sm text-slate-500 leading-6">{loc(lang, tip.body)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
