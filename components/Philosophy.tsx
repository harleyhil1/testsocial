const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Child-Led Learning",
    description:
      "Children choose their work within a thoughtfully prepared environment. This freedom builds intrinsic motivation and deep engagement that no external reward can replicate.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Hands-On Discovery",
    description:
      "Montessori materials transform abstract concepts into tangible, sensory experiences. Children build genuine understanding — not just memorized answers.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Mixed-Age Communities",
    description:
      "Younger children learn from older peers; older children deepen their own understanding through teaching. It&apos;s a natural, powerful model that mirrors life itself.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253m15.432 0C17.58 17.143 15.008 19.5 12 19.5s-5.58-2.357-6.716-5.247" />
      </svg>
    ),
    title: "Educated for Life",
    description:
      "We prepare students not just for the next grade, but for a life of curiosity, compassion, and contribution — qualities that matter in every field and every era.",
  },
];

export default function Philosophy() {
  return (
    <section className="section-padding bg-[#00205b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#e8c878]/60" />
            <span className="text-[#e8c878] text-xs font-medium uppercase tracking-[0.25em]">
              The Montessori Difference
            </span>
            <div className="h-px w-8 bg-[#e8c878]/60" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-white leading-tight text-balance">
            An education built on timeless principles
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group text-center p-8 rounded-2xl border border-white/10 hover:border-[#e8c878]/30 hover:bg-white/5 transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#e8c878]/10 text-[#e8c878] mb-6 group-hover:bg-[#e8c878]/20 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-3">
                {pillar.title}
              </h3>
              <p
                className="text-white/60 font-light leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: pillar.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
