'use client';

import { useState } from 'react';

type CheckItem = {
  id: string;
  emoji: string;
  title: string;
  note: string;
  urgent: boolean;
};

const checkItems: CheckItem[] = [
  {
    id: 'sim',
    emoji: '📱',
    title: 'Get a SIM card or eSIM',
    note: 'Available at the airport (Incheon Terminal 1 & 2). You need this for almost everything.',
    urgent: true,
  },
  {
    id: 'tmoney',
    emoji: '🚇',
    title: 'Buy a T-money card',
    note: 'Tap-to-pay transit card for subway and bus. Buy at any convenience store (CU, GS25, 7-Eleven).',
    urgent: true,
  },
  {
    id: 'arc',
    emoji: '🪪',
    title: 'Register for your ARC card',
    note: 'Must apply within 90 days of arrival at the Immigration Office. Book an appointment early.',
    urgent: true,
  },
  {
    id: 'bank',
    emoji: '🏦',
    title: 'Open a Korean bank account',
    note: 'Bring your passport + ARC card. Kakao Bank or IBK are easiest for foreigners.',
    urgent: false,
  },
  {
    id: 'insurance',
    emoji: '🏥',
    title: 'Enroll in National Health Insurance (NHIS)',
    note: 'Automatic after 6 months, or apply early at your local district office (구청).',
    urgent: false,
  },
  {
    id: 'school',
    emoji: '🎓',
    title: 'Complete university registration',
    note: 'Confirm enrollment, get your student ID, and pick up your Certificate of Enrollment.',
    urgent: false,
  },
  {
    id: 'delivery',
    emoji: '🛵',
    title: 'Set up a delivery app',
    note: 'Baemin or Coupang Eats. Requires a Korean phone number and bank account.',
    urgent: false,
  },
  {
    id: 'emergency',
    emoji: '🚨',
    title: 'Save emergency numbers',
    note: '119 (ambulance/fire), 112 (police), 1345 (foreigner helpline in English, 24h).',
    urgent: false,
  },
];

export default function FirstWeekChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
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
            Interactive Checklist
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            First Week in Korea
          </h2>
          <p className="mt-2 text-slate-500">
            Tick each item off as you complete it. Start with the urgent ones first.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">
              {done} / {total} completed
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
              🎉 You&apos;re all set! Welcome to Korea.
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
                  isChecked
                    ? 'border-emerald-200 bg-emerald-50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
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

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xl">{item.emoji}</span>
                      <span
                        className={`font-bold ${
                          isChecked ? 'text-emerald-700 line-through' : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </span>
                      {item.urgent && !isChecked && (
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-600">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-1 text-sm leading-6 ${
                        isChecked ? 'text-emerald-600' : 'text-slate-500'
                      }`}
                    >
                      {item.note}
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
              Reset all
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
