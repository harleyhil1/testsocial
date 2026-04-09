import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=1920&q=85"
          alt="Children engaged in hands-on Montessori learning"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00205b]/80 via-[#00205b]/60 to-[#001540]/85" />
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,160,80,0.15),_transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center pt-24">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#e8c878]/60" />
          <span className="text-[#e8c878] text-xs font-medium uppercase tracking-[0.3em]">
            Paradise Valley, Arizona
          </span>
          <div className="h-px w-12 bg-[#e8c878]/60" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6 text-balance">
          Where Curiosity Leads.
          <br />
          <em className="text-[#e8c878]">Excellence Follows.</em>
        </h1>

        {/* Subtext */}
        <p className="text-white/75 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
          A public Montessori charter school guiding children from toddler through
          eighth grade — honoring the whole child, one discovery at a time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#e8c878] text-[#00205b] font-semibold px-8 py-4 rounded-full hover:bg-[#f5e4b8] transition-all text-base tracking-wide shadow-lg shadow-black/20"
          >
            Schedule a Tour
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 border border-white/40 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all text-base tracking-wide"
          >
            Explore Programs
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-[0.2em]">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
