'use client';

/**
 * Design reminder for this file:
 * Pro is a dedicated execution workspace, not an extension of the article body.
 * The UI should feel like a calm operational desk with strong information hierarchy,
 * visible continuity, and a trustworthy sense that progress belongs to the user.
 */

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { proTools, type ProTool } from '@/data/pro-tools';
import { useProSession } from './ProSessionProvider';
import type { ProDict } from '@/types/content';

type ProExecutionWorkspaceProps = {
  lang: string;
  tool: ProTool;
  relatedTools: ProTool[];
  dict: ProDict;
};

function formatSavedAt(value: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

export default function ProExecutionWorkspace({
  lang,
  tool,
  relatedTools,
  dict: t,
}: ProExecutionWorkspaceProps) {
  const essentialTasks = useMemo(
    () => tool.tasks.filter((task) => !task.optional),
    [tool.tasks],
  );
  const taskMap = useMemo(
    () => new Map(tool.tasks.map((task) => [task.id, task])),
    [tool.tasks],
  );

  const {
    hydrated,
    profile,
    getWorkspace,
    saveWorkspace,
    resetWorkspace,
    signIn,
    signOut,
  } = useProSession();

  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [authMessage, setAuthMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    const workspace = getWorkspace(tool.slug);
    setCheckedIds(workspace?.checked ?? []);
    setNote(workspace?.note ?? '');
    // getWorkspace is intentionally excluded from deps:
    // including it causes a feedback loop where saveWorkspace updates
    // workspaceStore → getWorkspace changes reference → this effect re-runs
    // with stale checkedIds → wipes the saved state → oscillates indefinitely.
    // This effect should only re-run when hydration, slug, or profile changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, tool.slug, profile?.id]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    saveWorkspace(tool.slug, {
      checked: checkedIds,
      note,
      updatedAt: new Date().toISOString(),
    });
  }, [checkedIds, hydrated, note, saveWorkspace, tool.slug]);

  useEffect(() => {
    setFormName(profile?.name ?? '');
    setFormEmail(profile?.email ?? '');
  }, [profile?.email, profile?.name]);

  const workspace = hydrated ? getWorkspace(tool.slug) : null;
  const lastSavedAt = workspace?.updatedAt ?? null;
  const essentialCompleted = essentialTasks.filter((task) => checkedIds.includes(task.id)).length;
  const totalCompleted = tool.tasks.filter((task) => checkedIds.includes(task.id)).length;
  const progressPercent = essentialTasks.length
    ? Math.round((essentialCompleted / essentialTasks.length) * 100)
    : 0;

  const portfolioStats = useMemo(() => {
    return proTools.reduce(
      (acc, entry) => {
        const state = getWorkspace(entry.slug);
        const completed = entry.tasks.filter((task) => state?.checked.includes(task.id)).length;

        if (completed > 0) {
          acc.startedTools += 1;
        }

        if (completed === entry.tasks.length && entry.tasks.length > 0) {
          acc.completedTools += 1;
        }

        acc.completedTasks += completed;
        acc.totalTasks += entry.tasks.length;
        return acc;
      },
      {
        startedTools: 0,
        completedTools: 0,
        completedTasks: 0,
        totalTasks: 0,
      },
    );
  }, [getWorkspace, profile?.id]);

  const saveStateLabel = !hydrated
    ? t.savingLoading
    : profile
      ? t.savingProfile
      : t.savingGuest;

  const accountTitle = profile ? profile.name : t.guestLabel;
  const accountDescription = profile
    ? `${profile.email} is active on this browser.`
    : t.guestModeDesc;

  function toggleTask(taskId: string) {
    setCheckedIds((current) =>
      current.includes(taskId)
        ? current.filter((id) => id !== taskId)
        : [...current, taskId],
    );
  }

  function handleResetWorkspace() {
    setCheckedIds([]);
    setNote('');
    resetWorkspace(tool.slug);
  }

  function handleSignIn() {
    const result = signIn({ name: formName, email: formEmail });

    if (!result.ok) {
      setAuthMessage(result.message ?? 'We could not create your local profile.');
      return;
    }

    setAuthMessage('Guest progress has been merged into your local Pro profile on this browser.');
  }

  return (
    <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-6">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#172554_52%,#111827_100%)] px-6 py-7 text-white md:px-8 md:py-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                {t.workspaceBadge}
              </span>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                {saveStateLabel}
              </span>
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              {t.workspaceMainTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 md:text-lg">
              {tool.executionSummary}
            </p>
          </div>

          <div className="grid gap-4 border-b border-slate-200 bg-slate-50 p-6 md:grid-cols-3 md:p-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t.essentialProgress}
              </p>
              <p className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                {progressPercent}%
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {essentialCompleted} / {essentialTasks.length}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t.activeMode}
              </p>
              <p className="mt-4 text-xl font-semibold text-slate-950">{accountTitle}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{accountDescription}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t.lastSaved}
              </p>
              <p className="mt-4 text-xl font-semibold text-slate-950">{lastSavedAt ? formatSavedAt(lastSavedAt) : t.notSavedYet}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {saveStateLabel}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500">
                  {t.checklistBadge}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {t.checklistTitle}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {t.checklistDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetWorkspace}
                className="inline-flex rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {t.resetWorkspace}
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {tool.tasks.map((task, index) => {
                const checked = checkedIds.includes(task.id);
                const relatedStep = taskMap.get(task.id)?.stepHint;

                return (
                  <label
                    key={task.id}
                    className={`grid cursor-pointer gap-4 rounded-[1.5rem] border p-5 transition md:grid-cols-[auto_1fr] md:items-start ${
                      checked
                        ? 'border-emerald-200 bg-emerald-50/80'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleTask(task.id)}
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-slate-950 focus:ring-slate-400"
                      />
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-semibold text-slate-950">{task.title}</h4>
                        {task.optional ? (
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                            {t.optionalTag}
                          </span>
                        ) : (
                          <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600">
                            {t.coreTaskTag}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{task.description}</p>
                      {relatedStep ? (
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {t.supportsStep} {relatedStep}
                        </p>
                      ) : null}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {t.notesBadge}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
              {t.notesTitle}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {t.notesDesc}
            </p>
          </div>

          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder={tool.notePlaceholder}
            className="mt-6 min-h-[180px] w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
          />
        </section>
      </div>

      <aside className="space-y-6">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.localProfileBadge}
          </p>
          {!profile ? (
            <>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                {t.guestModeTitle}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {t.guestModeDesc}
              </p>
              <div className="mt-6 space-y-3">
                <input
                  type="text"
                  value={formName}
                  onChange={(event) => setFormName(event.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
                <input
                  type="email"
                  value={formEmail}
                  onChange={(event) => setFormEmail(event.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </div>
              <button
                type="button"
                onClick={handleSignIn}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {t.createProfile}
              </button>
            </>
          ) : (
            <>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                {t.profileTitle}
              </h3>
              <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-lg font-semibold text-slate-950">{profile.name}</p>
                <p className="mt-1 text-sm text-slate-600">{profile.email}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {t.profileBrowserNote}
                </p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t.toolsStarted}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">{portfolioStats.startedTools}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t.tasksCompleted}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">
                    {portfolioStats.completedTasks}/{portfolioStats.totalTasks}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={signOut}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {t.switchToGuest}
              </button>
            </>
          )}
          {authMessage ? (
            <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-700">
              {authMessage}
            </p>
          ) : null}
        </section>

        <section className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            {t.executionSequence}
          </p>
          <ol className="mt-6 space-y-4">
            {tool.steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-400/15 text-sm font-bold text-rose-200">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{step.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.completionSnapshot}
          </p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-slate-950 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            {t.completedCount.replace('{done}', String(totalCompleted)).replace('{total}', String(tool.tasks.length))}
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">{t.whyPublicMatters}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {t.whyPublicMattersDesc}
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            <Link
              href={`/${lang}${tool.guideHref}`}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              {t.returnToGuide}
            </Link>
            {tool.nextToolSlug ? (
              <Link
                href={`/${lang}/pro/${tool.nextToolSlug}`}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Continue to {tool.nextToolTitle}
              </Link>
            ) : null}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.relatedProPages}
          </p>
          <div className="mt-5 space-y-3">
            {relatedTools.map((related) => (
              <Link
                key={related.slug}
                href={`/${lang}/pro/${related.slug}`}
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
                  {related.eyebrow}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{related.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{related.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </aside>
    </section>
  );
}
