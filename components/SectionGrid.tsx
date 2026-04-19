import { InfoCardItem } from '@/types/content';
import SectionCard from './SectionCard';

type SectionGridProps = {
  items: InfoCardItem[];
};

export default function SectionGrid({ items }: SectionGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <SectionCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
