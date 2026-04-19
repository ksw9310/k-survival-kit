type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 pb-16 pt-14 text-white">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.14),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.12),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-rose-500/8 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-rose-300 ring-1 ring-white/20 backdrop-blur-sm">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          {subtitle}
        </p>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40L60 34.5C120 29 240 18 360 13.3C480 8.7 600 11.3 720 15.5C840 20 960 26.7 1080 28.7C1200 31 1320 29 1380 27.7L1440 26.7V40H1380C1320 40 1200 40 1080 40C960 40 840 40 720 40C600 40 480 40 360 40C240 40 120 40 60 40H0Z"
            fill="rgb(248 250 252)"
          />
        </svg>
      </div>
    </section>
  );
}
