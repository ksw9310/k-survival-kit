type StepItem = {
  title: string;
  bullets: string[];
};

type StepSection = {
  emoji: string;
  label: string;
  title: string;
  items: StepItem[];
};

type Props = {
  steps: StepSection[];
};

export default function StepGuide({ steps }: Props) {
  return (
    <section className="bg-slate-50 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-600">
            Quick Guide
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            What to do first
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.label}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Top accent bar */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500" />

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-2xl">
                  {step.emoji}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-rose-500">
                    {step.label}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                {step.items.map((item) => (
                  <div key={item.title}>
                    <h4 className="mb-2 font-semibold text-slate-800">
                      {item.title}
                    </h4>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-0.5 shrink-0 text-rose-400">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
