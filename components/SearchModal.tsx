'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { Lang } from '@/lib/i18n';
import { searchPages, type SearchPage } from '@/lib/searchIndex';

const PLACEHOLDER: Record<Lang, string> = {
  en: 'Search guides, topics…',
  zh: '搜索指南、主题…',
  ru: 'Поиск по гидам и темам…',
  ja: 'ガイドやトピックを検索…',
  vi: 'Tìm kiếm hướng dẫn, chủ đề…',
};

const NO_RESULTS: Record<Lang, string> = {
  en: 'No results found.',
  zh: '未找到相关结果。',
  ru: 'Ничего не найдено.',
  ja: '結果が見つかりませんでした。',
  vi: 'Không tìm thấy kết quả.',
};

const SEARCH_LABEL: Record<Lang, string> = {
  en: 'Search',
  zh: '搜索',
  ru: 'Поиск',
  ja: '検索',
  vi: 'Tìm kiếm',
};

interface Props {
  lang: Lang;
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ lang, open, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchPage[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  // Reset state when modal opens/closes
  useEffect(() => {
    if (open) {
      setQuery('');
      setResults([]);
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Search on every query change
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length === 0) {
      setResults([]);
      setActiveIndex(0);
      return;
    }
    const found = searchPages(trimmed, lang);
    setResults(found);
    setActiveIndex(0);
  }, [query, lang]);

  const navigate = useCallback((page: SearchPage) => {
    router.push(`/${lang}/${page.slug}`);
    onClose();
  }, [router, lang, onClose]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      navigate(results[activeIndex]);
    }
  }, [results, activeIndex, navigate, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const item = listRef.current.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-16 md:pt-24">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3.5">
          <svg
            className="h-5 w-5 shrink-0 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={PLACEHOLDER[lang]}
            aria-label={SEARCH_LABEL[lang]}
            className="flex-1 bg-transparent text-base text-slate-900 placeholder-slate-400 outline-none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="shrink-0 rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              aria-label="Clear"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <kbd className="hidden shrink-0 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-500 sm:block">
            ESC
          </kbd>
        </div>

        {/* Results */}
        {query.trim().length > 0 && (
          <div className="max-h-80 overflow-y-auto">
            {results.length === 0 ? (
              <p className="px-4 py-8 text-center text-sm text-slate-400">
                {NO_RESULTS[lang]}
              </p>
            ) : (
              <ul ref={listRef} role="listbox" aria-label={SEARCH_LABEL[lang]}>
                {results.map((page, i) => (
                  <li
                    key={page.slug}
                    role="option"
                    aria-selected={i === activeIndex}
                  >
                    <button
                      onClick={() => navigate(page)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                        i === activeIndex
                          ? 'bg-rose-50'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      {/* Icon */}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl">
                        {page.icon}
                      </span>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <p className={`truncate text-sm font-semibold ${
                          i === activeIndex ? 'text-rose-600' : 'text-slate-800'
                        }`}>
                          {page.title[lang] ?? page.title.en}
                        </p>
                        <p className="truncate text-xs text-slate-400">
                          {page.description[lang] ?? page.description.en}
                        </p>
                      </div>

                      {/* Category badge */}
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                        {page.category[lang] ?? page.category.en}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Empty state — no query yet */}
        {query.trim().length === 0 && (
          <div className="px-4 py-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {lang === 'en' ? 'Popular' :
               lang === 'zh' ? '热门' :
               lang === 'ru' ? 'Популярное' :
               lang === 'ja' ? '人気' : 'Phổ biến'}
            </p>
            <div className="flex flex-wrap gap-2">
              {['bank account', 'SIM card', 'ARC card', 'visa', 'housing'].map((hint) => (
                <button
                  key={hint}
                  onClick={() => setQuery(hint)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600"
                >
                  {hint}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer hint */}
        {results.length > 0 && (
          <div className="flex items-center gap-4 border-t border-slate-100 px-4 py-2.5">
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium">↑↓</kbd>
              {lang === 'en' ? 'navigate' : lang === 'zh' ? '导航' : lang === 'ru' ? 'навигация' : lang === 'ja' ? '移動' : 'điều hướng'}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium">↵</kbd>
              {lang === 'en' ? 'open' : lang === 'zh' ? '打开' : lang === 'ru' ? 'открыть' : lang === 'ja' ? '開く' : 'mở'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
