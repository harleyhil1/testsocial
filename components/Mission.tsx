import Image from "next/image";

export default function Mission() {
  return (
    <section className="section-padding bg-[#faf6ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c8922a]" />
              <span className="text-[#c8922a] text-xs font-medium uppercase tracking-[0.25em]">
                Our Mission
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-light text-[#1e3d2f] leading-tight mb-8 text-balance">
              Learning that moves at{" "}
              <em>the speed of wonder</em>
            </h2>

            <div className="space-y-5 text-[#4a3f30] leading-relaxed text-lg font-light">
              <p>
                At Montessori Academy, we believe education is most powerful
                when it is personal, purposeful, and rooted in the whole child.
                Every student arrives with an innate desire to understand the
                world — our role is to nurture that spark, not extinguish it.
              </p>
              <p>
                Guided by the philosophy of Dr. Maria Montessori, our educators
                serve as careful observers and skilled guides — creating
                environments where children lead their own discovery, build
                genuine confidence, and develop a lifelong love of learning.
              </p>
              <p>
                Rather than one-size-fits-all instruction, students here explore
                hands-on materials, follow their curiosity, and progress at the
                pace that honors their individual readiness.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#ede0cb] flex items-center gap-6">
              <div className="text-center">
                <div className="font-display text-4xl font-semibold text-[#1e3d2f]">壽</div>
                <div className="text-[10px] text-[#6b8f71] uppercase tracking-[0.2em] mt-1">
                  Five Fortunes
                </div>
              </div>
              <div className="text-sm text-[#6b8f71] leading-relaxed max-w-xs">
                Our symbol draws from the Chinese Five Fortunes — Health, Wealth,
                Longevity, Love, and Virtue — values that guide our community.
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[#1e3d2f]/20">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=85"
                alt="Students engaged in hands-on learning"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3d2f]/30 to-transparent" />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#e8c87a]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1e3d2f]/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
