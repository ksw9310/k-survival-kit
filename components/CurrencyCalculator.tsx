'use client';

import { useState, useEffect } from 'react';
import type { Lang } from '@/lib/i18n';

const FALLBACK_RATES: Record<string, number> = {
  USD: 1370,
  EUR: 1490,
  JPY: 9.1,
  CNY: 189,
  RUB: 15.2,
  VND: 0.054,
};

const CURRENCIES = [
  { code: 'USD', flag: '🇺🇸', name: 'USD' },
  { code: 'EUR', flag: '🇪🇺', name: 'EUR' },
  { code: 'JPY', flag: '🇯🇵', name: 'JPY' },
  { code: 'CNY', flag: '🇨🇳', name: 'CNY' },
  { code: 'RUB', flag: '🇷🇺', name: 'RUB' },
  { code: 'VND', flag: '🇻🇳', name: 'VND' },
];

const T: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    placeholder: string;
    note: string;
    direction: string;
    live: string;
    loading: string;
  }
> = {
  en: {
    title: '💱 Currency Calculator',
    subtitle: 'Live KRW rates',
    placeholder: 'Enter amount',
    note: 'Rates via open.er-api.com',
    direction: 'Click a row to flip direction',
    live: 'Live',
    loading: 'Loading rates…',
  },
  zh: {
    title: '💱 汇率计算器',
    subtitle: '实时韩元汇率',
    placeholder: '输入金额',
    note: '汇率来源：open.er-api.com',
    direction: '点击行切换方向',
    live: '实时',
    loading: '加载中…',
  },
  ru: {
    title: '💱 Калькулятор валют',
    subtitle: 'Актуальный курс вон',
    placeholder: 'Введите сумму',
    note: 'Курс: open.er-api.com',
    direction: 'Нажмите строку для смены направления',
    live: 'Онлайн',
    loading: 'Загрузка…',
  },
  ja: {
    title: '💱 為替計算機',
    subtitle: 'リアルタイムレート',
    placeholder: '金額を入力',
    note: 'レート: open.er-api.com',
    direction: '行をクリックして方向切替',
    live: 'リアル',
    loading: '読み込み中…',
  },
  vi: {
    title: '💱 Máy tính tiền tệ',
    subtitle: 'Tỷ giá KRW trực tiếp',
    placeholder: 'Nhập số tiền',
    note: 'Tỷ giá từ open.er-api.com',
    direction: 'Nhấn vào hàng để đổi chiều',
    live: 'Trực tiếp',
    loading: 'Đang tải…',
  },
};

function formatKRW(n: number) {
  return Math.round(n).toLocaleString() + ' ₩';
}
function formatForeign(n: number, code: string) {
  const d = code === 'JPY' || code === 'VND' ? 0 : 2;
  return n.toLocaleString(undefined, {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
}

export default function CurrencyCalculator({ lang }: { lang: Lang }) {
  const t = T[lang];
  const [amount, setAmount] = useState('');
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedAt, setUpdatedAt] = useState('');

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/KRW')
      .then((r) => r.json())
      .then((data) => {
        const raw: Record<string, number> = data.rates ?? {};
        const parsed: Record<string, number> = {};
        for (const code of ['USD', 'EUR', 'JPY', 'CNY', 'RUB', 'VND']) {
          if (raw[code]) parsed[code] = parseFloat((1 / raw[code]).toFixed(4));
        }
        setRates(parsed);
        setIsLive(true);
        const d = new Date(data.time_last_update_utc ?? Date.now());
        setUpdatedAt(
          d.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
        );
      })
      .catch(() => setIsLive(false))
      .finally(() => setLoading(false));
  }, [lang]);

  const num = parseFloat(amount.replace(/,/g, '')) || 0;

  return (
    <section className="py-12 px-4 bg-slate-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{t.title}</h2>
            <p className="text-slate-500 text-sm mt-1">
              {t.subtitle} ·{' '}
              <span className="text-slate-400">{t.direction}</span>
            </p>
          </div>
          <div
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 border text-xs font-semibold ${isLive ? 'bg-green-50 border-green-200 text-green-700' : 'bg-slate-100 border-slate-200 text-slate-400'}`}
          >
            {loading ? (
              <span>{t.loading}</span>
            ) : (
              <>
                {isLive && (
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                )}
                <span>{isLive ? updatedAt || t.live : t.note}</span>
              </>
            )}
          </div>
        </div>

        {/* Input */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4 shadow-sm">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={t.placeholder}
            className="w-full text-3xl font-bold text-slate-900 outline-none placeholder:text-slate-300 bg-transparent"
          />
        </div>

        {/* Currency rows */}
        <div className="space-y-3">
          {CURRENCIES.map((c) => {
            const isFlipped = !!flipped[c.code];
            const rate = rates[c.code] ?? FALLBACK_RATES[c.code];
            const result = isFlipped ? num * rate : num / rate;
            const fromStr = isFlipped ? `${c.flag} ${c.code}` : '🇰🇷 KRW';
            const toStr = isFlipped ? '🇰🇷 KRW' : `${c.flag} ${c.code}`;
            const resultStr = isFlipped
              ? formatKRW(result)
              : formatForeign(result, c.code);

            return (
              <button
                key={c.code}
                onClick={() =>
                  setFlipped((p) => ({ ...p, [c.code]: !p[c.code] }))
                }
                className="w-full text-left bg-white rounded-2xl border border-slate-200 px-5 py-4 shadow-sm hover:border-rose-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-500">
                    {fromStr} → {toStr}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-rose-400 transition-colors">
                    1 {c.code} ≈ {rate.toLocaleString()} ₩
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg text-slate-400 font-semibold">
                    {num > 0 ? num.toLocaleString() : '—'}
                  </span>
                  <span className="text-rose-500">→</span>
                  <span className="text-2xl font-bold text-slate-900">
                    {num > 0 ? resultStr : '—'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        <p className="text-xs text-slate-400 mt-4 text-center">{t.note}</p>
      </div>
    </section>
  );
}
