import Image from "next/image";
import Logo from "./Logo";

export default function Mission() {
  return (
    <section className="section-padding bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c8a050]" />
              <span className="text-[#c8a050] text-xs font-medium uppercase tracking-[0.25em]">
                Our Mission
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-light text-[#00205b] leading-tight mb-8 text-balance">
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

            <div className="mt-10 pt-8 border-t border-[#dce4f2] flex items-center gap-6">
              <div className="flex-shrink-0">
                <Logo size={48} color="#00205b" />
              </div>
              <div className="text-sm text-[#5a7090] leading-relaxed max-w-xs">
                Our circular symbol represents the interconnected growth of mind,
                body, and spirit — the whole child at the heart of everything we do.
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[#00205b]/20">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=85"
                alt="Students engaged in hands-on learning"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00205b]/30 to-transparent" />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#e8c878]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00205b]/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
