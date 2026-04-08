const testimonials = [
  {
    quote:
      "Watching our daughter's confidence and curiosity bloom here has been remarkable. She doesn't just go to school — she genuinely loves it. That's something we never expected to say.",
    author: "Sarah M.",
    role: "Parent of a Primary student",
    initial: "S",
  },
  {
    quote:
      "The teachers here truly know our son as an individual. They've built a community where children are respected, not just managed. It's an entirely different approach to childhood education.",
    author: "David & Rachel K.",
    role: "Parents of Elementary students",
    initial: "D",
  },
  {
    quote:
      "Our daughter graduated to high school with skills that go far beyond academics — independence, critical thinking, and a deep love of learning. Montessori Academy gave her that foundation.",
    author: "Priya T.",
    role: "Parent of a Middle School graduate",
    initial: "P",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#ede0cb]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c8922a]" />
            <span className="text-[#c8922a] text-xs font-medium uppercase tracking-[0.25em]">
              Community Voices
            </span>
            <div className="h-px w-8 bg-[#c8922a]" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#1e3d2f] leading-tight text-balance">
            Heard from our families
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#c8922a"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#4a3f30] leading-relaxed font-light text-base flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#ede0cb]">
                <div className="w-10 h-10 rounded-full bg-[#1e3d2f] flex items-center justify-center text-[#e8c87a] font-display font-semibold text-lg">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[#2a2015] font-semibold text-sm">{t.author}</div>
                  <div className="text-[#6b8f71] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
