'use client';

import { useState } from 'react';

type L = 'en' | 'zh' | 'ru' | 'ja';

type CheckItem = {
  id: string;
  emoji: string;
  title: Record<L, string>;
  note: Record<L, string>;
  urgent: boolean;
};

type UI = {
  badge: string;
  heading: string;
  subheading: string;
  completed: (done: number, total: number) => string;
  allDone: string;
  urgent: string;
  reset: string;
};

const UI_STRINGS: Record<L, UI> = {
  en: {
    badge: 'Interactive Checklist',
    heading: 'First Week in Korea',
    subheading: 'Tick each item off as you complete it. Start with the urgent ones first.',
    completed: (done, total) => `${done} / ${total} completed`,
    allDone: "🎉 You're all set! Welcome to Korea.",
    urgent: 'Urgent',
    reset: 'Reset all',
  },
  zh: {
    badge: '互动清单',
    heading: '在韩第一周',
    subheading: '完成每项后打勾。优先处理紧急事项。',
    completed: (done, total) => `${done} / ${total} 已完成`,
    allDone: '🎉 全部完成！欢迎来到韩国。',
    urgent: '紧急',
    reset: '重置全部',
  },
  ru: {
    badge: 'Интерактивный чеклист',
    heading: 'Первая неделя в Корее',
    subheading: 'Отмечайте пункты по мере выполнения. Начните с срочных.',
    completed: (done, total) => `${done} / ${total} выполнено`,
    allDone: '🎉 Всё готово! Добро пожаловать в Корею.',
    urgent: 'Срочно',
    reset: 'Сбросить всё',
  },
  ja: {
    badge: 'インタラクティブチェックリスト',
    heading: '韓国での最初の1週間',
    subheading: '完了したら各項目にチェックを入れてください。緊急のものから始めましょう。',
    completed: (done, total) => `${done} / ${total} 完了`,
    allDone: '🎉 準備完了！韓国へようこそ。',
    urgent: '緊急',
    reset: 'すべてリセット',
  },
};

const checkItems: CheckItem[] = [
  {
    id: 'sim',
    emoji: '📱',
    urgent: true,
    title: {
      en: 'Get a SIM card or eSIM',
      zh: '购买SIM卡或eSIM',
      ru: 'Купить SIM-карту или eSIM',
      ja: 'SIMカード・eSIMを入手する',
    },
    note: {
      en: 'Available at the airport (Incheon Terminal 1 & 2). You need this for almost everything.',
      zh: '仁川机场1、2号航站楼均有售。几乎所有事情都需要它。',
      ru: 'Доступно в аэропорту Инчхон (терминалы 1 и 2). Нужна почти для всего.',
      ja: '仁川空港（第1・第2ターミナル）で購入可能。ほぼすべてに必要。',
    },
  },
  {
    id: 'tmoney',
    emoji: '🚇',
    urgent: true,
    title: {
      en: 'Buy a T-money card',
      zh: '购买T-money交通卡',
      ru: 'Купить карту T-money',
      ja: 'T-moneyカードを買う',
    },
    note: {
      en: 'Tap-to-pay transit card for subway and bus. Buy at any convenience store (CU, GS25, 7-Eleven).',
      zh: '地铁和公交刷卡支付。可在任意便利店购买（CU、GS25、7-Eleven）。',
      ru: 'Карта для оплаты метро и автобуса. Купить в любом удобном магазине (CU, GS25, 7-Eleven).',
      ja: '地下鉄・バスで使えるタッチ決済カード。コンビニ（CU・GS25・7-Eleven）で購入可。',
    },
  },
  {
    id: 'arc',
    emoji: '🪪',
    urgent: true,
    title: {
      en: 'Register for your ARC card',
      zh: '申请外国人登录证(ARC)',
      ru: 'Зарегистрировать карту ARC',
      ja: '外国人登録証（ARC）を申請する',
    },
    note: {
      en: 'Must apply within 90 days of arrival at the Immigration Office. Book an appointment early.',
      zh: '须在抵达后90天内前往出入境管理局申请。请提前预约。',
      ru: 'Необходимо подать заявление в течение 90 дней после прибытия. Запишитесь заранее.',
      ja: '入国から90日以内に出入国在留管理局で申請が必要。早めに予約を。',
    },
  },
  {
    id: 'bank',
    emoji: '🏦',
    urgent: false,
    title: {
      en: 'Open a Korean bank account',
      zh: '开设韩国银行账户',
      ru: 'Открыть корейский банковский счёт',
      ja: '韓国の銀行口座を開設する',
    },
    note: {
      en: 'Bring your passport + ARC card. Kakao Bank or IBK are easiest for foreigners.',
      zh: '携带护照和ARC卡前往。Kakao Bank或IBK银行对外国人最为友好。',
      ru: 'Возьмите паспорт и карту ARC. Kakao Bank или IBK — проще всего для иностранцев.',
      ja: 'パスポートとARCカードを持参。Kakao BankまたはIBKが外国人に最も使いやすい。',
    },
  },
  {
    id: 'insurance',
    emoji: '🏥',
    urgent: false,
    title: {
      en: 'Enroll in National Health Insurance (NHIS)',
      zh: '加入国民健康保险(NHIS)',
      ru: 'Оформить государственную медицинскую страховку (NHIS)',
      ja: '国民健康保険（NHIS）に加入する',
    },
    note: {
      en: 'Automatic after 6 months, or apply early at your local district office (구청).',
      zh: '6个月后自动加入，或提前前往区政府（구청）申请。',
      ru: 'Автоматически через 6 месяцев, или подайте заявление раньше в местном районном офисе (구청).',
      ja: '6ヶ月後に自動加入、または区役所（구청）で早めに申請可。',
    },
  },
  {
    id: 'school',
    emoji: '🎓',
    urgent: false,
    title: {
      en: 'Complete university registration',
      zh: '完成大学注册',
      ru: 'Завершить регистрацию в университете',
      ja: '大学の登録を完了する',
    },
    note: {
      en: 'Confirm enrollment, get your student ID, and pick up your Certificate of Enrollment.',
      zh: '确认入学、领取学生证及在读证明。',
      ru: 'Подтвердить зачисление, получить студенческий билет и справку о зачислении.',
      ja: '在籍確認・学生証の受け取り・在学証明書の取得。',
    },
  },
  {
    id: 'delivery',
    emoji: '🛵',
    urgent: false,
    title: {
      en: 'Set up a delivery app',
      zh: '安装外卖App',
      ru: 'Установить приложение доставки еды',
      ja: 'デリバリーアプリを設定する',
    },
    note: {
      en: 'Baemin or Coupang Eats. Requires a Korean phone number and bank account.',
      zh: 'Baemin或Coupang Eats。需要韩国手机号和银行账户。',
      ru: 'Baemin или Coupang Eats. Нужен корейский номер телефона и банковский счёт.',
      ja: 'BaeminまたはCoupang Eats。韓国の電話番号と銀行口座が必要。',
    },
  },
  {
    id: 'emergency',
    emoji: '🚨',
    urgent: false,
    title: {
      en: 'Save emergency numbers',
      zh: '保存紧急联系电话',
      ru: 'Сохранить экстренные номера',
      ja: '緊急電話番号を保存する',
    },
    note: {
      en: '119 (ambulance/fire), 112 (police), 1345 (foreigner helpline in English, 24h).',
      zh: '119（急救/消防）、112（警察）、1345（外国人英语热线，24小时）。',
      ru: '119 (скорая/пожарные), 112 (полиция), 1345 (помощь иностранцам на английском, 24ч).',
      ja: '119（救急・消防）、112（警察）、1345（外国人向け英語ヘルプライン、24時間）。',
    },
  },
];

function loc<T>(obj: Record<L, T>, lang: string): T {
  return obj[(lang as L) in obj ? (lang as L) : 'en'];
}

export default function FirstWeekChecklist({ lang = 'en' }: { lang?: string }) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const ui = UI_STRINGS[(lang as L) in UI_STRINGS ? (lang as L) : 'en'];

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const reset = () => setChecked(new Set());

  const done = checked.size;
  const total = checkItems.length;
  const pct = Math.round((done / total) * 100);

  return (
    <section className="bg-slate-50 px-6 py-14">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-600">
            {ui.badge}
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            {ui.heading}
          </h2>
          <p className="mt-2 text-slate-500">{ui.subheading}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">
              {ui.completed(done, total)}
            </span>
            <span className="text-sm font-bold text-rose-500">{pct}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-400 transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          {done === total && (
            <p className="mt-3 text-center text-sm font-semibold text-emerald-600">
              {ui.allDone}
            </p>
          )}
        </div>

        {/* Checklist items */}
        <div className="space-y-3">
          {checkItems.map((item) => {
            const isChecked = checked.has(item.id);
            return (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`group w-full rounded-2xl border p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  isChecked ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isChecked
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : 'border-slate-300 group-hover:border-rose-400'
                    }`}
                  >
                    {isChecked && (
                      <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7l4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xl">{item.emoji}</span>
                      <span
                        className={`font-bold ${
                          isChecked ? 'text-emerald-700 line-through' : 'text-slate-900'
                        }`}
                      >
                        {loc(item.title, lang)}
                      </span>
                      {item.urgent && !isChecked && (
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-600">
                          {ui.urgent}
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-1 text-sm leading-6 ${
                        isChecked ? 'text-emerald-600' : 'text-slate-500'
                      }`}
                    >
                      {loc(item.note, lang)}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Reset */}
        {done > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={reset}
              className="text-sm text-slate-400 underline underline-offset-2 hover:text-slate-600"
            >
              {ui.reset}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
