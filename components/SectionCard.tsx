import { InfoCardItem } from '@/types/content';

type SectionCardProps = {
  item: InfoCardItem;
};

export default function SectionCard({ item }: SectionCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Top gradient accent */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500" />

      {/* Emoji badge */}
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-2xl">
        {item.emoji}
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {item.description}
      </p>

      <ul className="mt-4 space-y-2">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
            <span className="mt-0.5 shrink-0 text-rose-400">▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">
        <span className="shrink-0 text-amber-500">💡</span>
        <p className="text-sm font-medium leading-6 text-amber-800">{item.tip}</p>
      </div>
    </article>
  );
}
