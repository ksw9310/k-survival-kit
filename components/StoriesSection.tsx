'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Lang } from '@/lib/i18n';
import type { Story } from '@/lib/supabase';

// ── 국가 목록 ──────────────────────────────────────────────
const COUNTRIES = [
  { emoji: '🇨🇳', name: 'China' },
  { emoji: '🇻🇳', name: 'Vietnam' },
  { emoji: '🇺🇿', name: 'Uzbekistan' },
  { emoji: '🇲🇳', name: 'Mongolia' },
  { emoji: '🇺🇸', name: 'USA' },
  { emoji: '🇯🇵', name: 'Japan' },
  { emoji: '🇷🇺', name: 'Russia' },
  { emoji: '🇰🇿', name: 'Kazakhstan' },
  { emoji: '🇵🇭', name: 'Philippines' },
  { emoji: '🇮🇩', name: 'Indonesia' },
  { emoji: '🇲🇾', name: 'Malaysia' },
  { emoji: '🇹🇭', name: 'Thailand' },
  { emoji: '🇧🇩', name: 'Bangladesh' },
  { emoji: '🇳🇵', name: 'Nepal' },
  { emoji: '🇮🇳', name: 'India' },
  { emoji: '🇵🇰', name: 'Pakistan' },
  { emoji: '🇫🇷', name: 'France' },
  { emoji: '🇩🇪', name: 'Germany' },
  { emoji: '🇬🇧', name: 'UK' },
  { emoji: '🇧🇷', name: 'Brazil' },
  { emoji: '🇲🇽', name: 'Mexico' },
  { emoji: '🇪🇬', name: 'Egypt' },
  { emoji: '🇹🇷', name: 'Turkey' },
  { emoji: '🇺🇦', name: 'Ukraine' },
  { emoji: '🌍', name: 'Other' },
];

// ── 다국어 라벨 ────────────────────────────────────────────
const T: Record<Lang, {
  title: string;
  subtitle: string;
  namePlaceholder: string;
  countryLabel: string;
  contentPlaceholder: string;
  submit: string;
  submitting: string;
  successMsg: string;
  charCount: string;
  shareBtn: string;
  emptyMsg: string;
  loadingMsg: string;
  selectCountry: string;
  seeAll: string;
}> = {
  en: {
    title: 'Real Stories from Korea',
    subtitle: 'Foreigners and international students share their Korea experiences.',
    namePlaceholder: 'Your name or nickname',
    countryLabel: 'Where are you from?',
    contentPlaceholder: 'Share a tip, experience, or something you wish you knew before coming to Korea… (max 500 chars)',
    submit: 'Share my story',
    submitting: 'Sending…',
    successMsg: '✅ Submitted! Your story will appear after a quick review.',
    charCount: 'characters left',
    shareBtn: '✏️ Share your story',
    emptyMsg: 'Be the first to share your Korea story!',
    loadingMsg: 'Loading stories…',
    selectCountry: 'Select your country',
    seeAll: 'See all stories →',
  },
  zh: {
    title: '在韩留学生的真实故事',
    subtitle: '外国人和留学生分享他们在韩国的经历与心得。',
    namePlaceholder: '您的姓名或昵称',
    countryLabel: '您来自哪里？',
    contentPlaceholder: '分享一个小贴士、经历，或希望来韩国前就知道的事情……（最多500字）',
    submit: '分享我的故事',
    submitting: '提交中…',
    successMsg: '✅ 已提交！审核后将显示您的故事。',
    charCount: '字剩余',
    shareBtn: '✏️ 分享您的故事',
    emptyMsg: '成为第一个分享韩国故事的人！',
    loadingMsg: '加载中…',
    selectCountry: '选择您的国家',
    seeAll: '查看所有故事 →',
  },
  ru: {
    title: 'Реальные истории из Кореи',
    subtitle: 'Иностранцы и студенты делятся опытом жизни в Корее.',
    namePlaceholder: 'Ваше имя или псевдоним',
    countryLabel: 'Откуда вы?',
    contentPlaceholder: 'Поделитесь советом, опытом или тем, что хотели бы знать до приезда в Корею… (макс. 500 символов)',
    submit: 'Поделиться историей',
    submitting: 'Отправка…',
    successMsg: '✅ Отправлено! Ваша история появится после проверки.',
    charCount: 'символов осталось',
    shareBtn: '✏️ Поделиться историей',
    emptyMsg: 'Станьте первым, кто поделится историей о Корее!',
    loadingMsg: 'Загрузка…',
    selectCountry: 'Выберите страну',
    seeAll: 'Смотреть все истории →',
  },
  ja: {
    title: '韓国のリアルな体験談',
    subtitle: '外国人・留学生が韓国での経験やアドバイスをシェアしています。',
    namePlaceholder: '名前またはニックネーム',
    countryLabel: 'どちらの出身ですか？',
    contentPlaceholder: '韓国に来る前に知っておきたかったこと、体験談やアドバイスをシェアしてください…（最大500文字）',
    submit: '体験談を投稿する',
    submitting: '送信中…',
    successMsg: '✅ 送信しました！確認後に表示されます。',
    charCount: '文字残り',
    shareBtn: '✏️ 体験談をシェアする',
    emptyMsg: '最初に韓国の体験談をシェアしてみましょう！',
    loadingMsg: '読み込み中…',
    selectCountry: '国を選択',
    seeAll: 'すべての体験談を見る →',
  },
  vi: {
    title: 'Câu chuyện thật từ Hàn Quốc',
    subtitle: 'Người nước ngoài và du học sinh chia sẻ trải nghiệm tại Hàn Quốc.',
    namePlaceholder: 'Tên hoặc biệt danh của bạn',
    countryLabel: 'Bạn đến từ đâu?',
    contentPlaceholder: 'Chia sẻ một mẹo, trải nghiệm hoặc điều bạn ước mình biết trước khi đến Hàn Quốc… (tối đa 500 ký tự)',
    submit: 'Chia sẻ câu chuyện của tôi',
    submitting: 'Đang gửi…',
    successMsg: '✅ Đã gửi! Câu chuyện của bạn sẽ xuất hiện sau khi được duyệt.',
    charCount: 'ký tự còn lại',
    shareBtn: '✏️ Chia sẻ câu chuyện',
    emptyMsg: 'Hãy là người đầu tiên chia sẻ câu chuyện tại Hàn Quốc!',
    loadingMsg: 'Đang tải…',
    selectCountry: 'Chọn quốc gia của bạn',
    seeAll: 'Xem tất cả câu chuyện →',
  },
};

// ── 스토리 카드 ────────────────────────────────────────────
function StoryCard({ story }: { story: Story }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-sm leading-relaxed text-slate-700 line-clamp-4">
        "{story.content}"
      </p>
      <div className="flex items-center gap-2 border-t border-slate-50 pt-3">
        <span className="text-xl">{story.country_emoji || '🌏'}</span>
        <div>
          <p className="text-sm font-semibold text-slate-800">{story.name}</p>
          {story.country && (
            <p className="text-xs text-slate-400">{story.country}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── 제출 폼 ────────────────────────────────────────────────
function StoryForm({ lang, onSuccess }: { lang: Lang; onSuccess: () => void }) {
  const t = T[lang];
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [countryEmoji, setCountryEmoji] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const remaining = 500 - content.length;

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = COUNTRIES.find((c) => c.name === e.target.value);
    setCountry(selected?.name ?? '');
    setCountryEmoji(selected?.emoji ?? '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim() || status === 'submitting') return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, country, country_emoji: countryEmoji, content, lang }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      onSuccess();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 px-6 py-8 text-center">
        <p className="text-base font-medium text-green-700">{t.successMsg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            maxLength={50}
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
          />
        </div>
        <div className="flex-1">
          <select
            value={country}
            onChange={handleCountryChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
          >
            <option value="">{t.selectCountry}</option>
            {COUNTRIES.map((c) => (
              <option key={c.name} value={c.name}>
                {c.emoji} {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value.slice(0, 500))}
          placeholder={t.contentPlaceholder}
          required
          rows={4}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 resize-none"
        />
        <p className={`text-right text-xs mt-1 ${remaining < 50 ? 'text-rose-400' : 'text-slate-400'}`}>
          {remaining} {t.charCount}
        </p>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting' || !name.trim() || !content.trim()}
        className="rounded-xl bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? t.submitting : t.submit}
      </button>
    </form>
  );
}

// ── 메인 컴포넌트 ──────────────────────────────────────────
export default function StoriesSection({ lang, preview = false }: { lang: Lang; preview?: boolean }) {
  const t = T[lang];
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const fetchStories = async () => {
    try {
      const res = await fetch('/api/stories');
      const data = await res.json();
      setStories(data.stories ?? []);
    } catch {
      setStories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const displayedStories = preview ? stories.slice(0, 3) : stories;

  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* 헤더 */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-rose-500">
              Community
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {t.title}
            </h2>
            <p className="mt-2 text-sm text-slate-500">{t.subtitle}</p>
          </div>
          {!preview && !showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="shrink-0 rounded-xl border border-rose-200 bg-white px-5 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
            >
              {t.shareBtn}
            </button>
          )}
        </div>

        {/* 폼 (커뮤니티 전체 페이지에서만) */}
        {!preview && showForm && (
          <div className="mb-10">
            <StoryForm
              lang={lang}
              onSuccess={() => {
                setShowForm(false);
                fetchStories();
              }}
            />
          </div>
        )}

        {/* 스토리 목록 */}
        {loading ? (
          <p className="text-center text-sm text-slate-400">{t.loadingMsg}</p>
        ) : stories.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
            <p className="text-slate-400">{t.emptyMsg}</p>
            {!preview && !showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="mt-4 rounded-xl bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
              >
                {t.shareBtn}
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {displayedStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>

            {/* 미리보기 모드: "모두 보기" 버튼 */}
            {preview && (
              <div className="mt-10 text-center">
                <Link
                  href={`/${lang}/community`}
                  className="inline-block rounded-xl border border-rose-200 bg-white px-8 py-3 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
                >
                  {t.seeAll}
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
