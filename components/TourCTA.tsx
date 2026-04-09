import Link from "next/link";
import Image from "next/image";

export default function TourCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Welcoming school environment"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#00205b]/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,160,80,0.12),_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#e8c878]/60" />
          <span className="text-[#e8c878] text-xs font-medium uppercase tracking-[0.3em]">
            Open Enrollment
          </span>
          <div className="h-px w-8 bg-[#e8c878]/60" />
        </div>

        <h2 className="font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 text-balance">
          Come see it{" "}
          <em className="text-[#e8c878]">for yourself.</em>
        </h2>

        <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
          A campus tour is the best way to understand what makes Montessori
          Academy special. We&apos;d love to show you around and answer every
          question you have.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#e8c878] text-[#00205b] font-semibold px-10 py-4 rounded-full hover:bg-[#f5e4b8] transition-all text-base tracking-wide shadow-lg shadow-black/30"
          >
            Schedule a Tour
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="tel:4809451121"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (480) 945-1121
          </a>
        </div>
      </div>
    </section>
  );
}
