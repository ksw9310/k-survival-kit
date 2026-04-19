import Link from 'next/link';
import type { ProTool } from '@/data/pro-tools';
import { getDictionary } from '@/data';
import type { Lang } from '@/lib/i18n';

/**
 * Design reminder for this file:
 * This is the boundary marker between the public guide and Pro.
 * It should feel like the guide has concluded cleanly and the user is now being invited
 * into a separate execution workspace, not another continuation block inside the same article.
 */

type GuideToProBridgeProps = {
  lang: string;
  tool: ProTool & { href?: string };
};

export default function GuideToProBridge({ lang, tool }: GuideToProBridgeProps) {
  const href = tool.href ?? `/${lang}/pro/${tool.slug}`;
  const t = getDictionary(lang as Lang).common.pro;

  return (
    <section className="space-y-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
          {t.endOfGuide}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          {t.endOfGuideTitle}
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          {t.endOfGuideDesc}
        </p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#172554_55%,#111827_100%)] px-6 py-7 text-white md:px-8 md:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                {t.separateWorkspace}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                {tool.bridgeTitle}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                {tool.bridgeDescription}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[24rem]">
              <Link
                href={href}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-50"
              >
                {tool.ctaLabel}
              </Link>
              <Link
                href={`/${lang}${tool.guideHref}`}
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {t.stayInGuide}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 px-6 py-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-8">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
                {t.whatChanges}
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-sm font-semibold text-slate-900">{t.changeCard1Title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t.changeCard1Desc}
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-sm font-semibold text-slate-900">{t.changeCard2Title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t.changeCard2Desc}
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-sm font-semibold text-slate-900">{t.changeCard3Title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t.changeCard3Desc}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                {t.whyExists}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">{tool.highlight}</p>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {tool.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              {t.recommendedSwitch}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              {t.recommendedSwitchDesc}
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
          </div>
        </div>
      </div>
    </section>
  );
}
