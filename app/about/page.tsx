import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TourCTA from "@/components/TourCTA";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Montessori Academy Paradise Valley",
  description:
    "Learn about Montessori Academy's history, philosophy, and dedicated faculty in Paradise Valley, Arizona.",
};

const values = [
  {
    title: "Respect for the Child",
    description:
      "Every child is treated as a capable, curious individual worthy of dignity and trust — not managed, but guided.",
  },
  {
    title: "Prepared Environments",
    description:
      "Every classroom is intentionally designed to invite exploration, independence, and concentration.",
  },
  {
    title: "Intrinsic Motivation",
    description:
      "We cultivate internal drive rather than reliance on external rewards, building lasting love of learning.",
  },
  {
    title: "Whole Child Development",
    description:
      "Academic, social, emotional, and physical growth are equally valued — none subordinated to grades.",
  },
  {
    title: "Community & Family",
    description:
      "Parents are partners. Together, school and family form a cohesive community around each child.",
  },
  {
    title: "Peace & Virtue",
    description:
      "Grace, courtesy, and ethical character are woven into every interaction — not extras, but essentials.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#faf6ef] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="font-display text-[20rem] font-light text-[#1e3d2f] leading-none select-none">
            壽
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c8922a]" />
            <span className="text-[#c8922a] text-xs font-medium uppercase tracking-[0.25em]">
              About Us
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-[#1e3d2f] leading-tight max-w-3xl text-balance">
            More than a school.{" "}
            <em>A community.</em>
          </h1>
          <p className="mt-6 text-[#4a3f30] text-xl font-light max-w-2xl leading-relaxed">
            Montessori Academy is where educators, families, and students come
            together around a shared belief: that every child deserves an
            education that truly honors who they are.
          </p>
        </div>
      </section>

      <main>
        {/* Story */}
        <section className="section-padding bg-[#faf6ef]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-5xl font-light text-[#1e3d2f] mb-8 text-balance">
                  Rooted in Paradise Valley,{" "}
                  <em>grown over decades</em>
                </h2>
                <div className="space-y-5 text-[#4a3f30] text-lg font-light leading-relaxed">
                  <p>
                    Montessori Academy has served the Paradise Valley community for
                    over four decades. Founded on the belief that children learn
                    best when they are free to explore, collaborate, and discover at
                    their own pace, we have grown into a cherished institution in
                    one of Arizona&apos;s most beautiful communities.
                  </p>
                  <p>
                    As a public charter school, we are tuition-free and open to all
                    families in the region — making world-class Montessori education
                    accessible to every child who wants it.
                  </p>
                  <p>
                    Our logo — a symbol drawn from the Chinese Five Fortunes
                    (Health, Wealth, Longevity, Love, and Virtue) — reflects our
                    aspiration: to graduate students who flourish in every dimension
                    of a good life.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-[#1e3d2f]/15">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85"
                  alt="Montessori Academy campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="philosophy" className="section-padding bg-[#ede0cb]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#c8922a]" />
                <span className="text-[#c8922a] text-xs font-medium uppercase tracking-[0.25em]">
                  Our Values
                </span>
                <div className="h-px w-8 bg-[#c8922a]" />
              </div>
              <h2 className="font-display text-5xl font-light text-[#1e3d2f] text-balance">
                What we believe
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-display text-2xl font-semibold text-[#1e3d2f] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[#4a3f30] font-light leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty */}
        <section id="faculty" className="section-padding bg-[#1e3d2f]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#e8c87a]/60" />
              <span className="text-[#e8c87a] text-xs font-medium uppercase tracking-[0.25em]">
                Our Team
              </span>
              <div className="h-px w-8 bg-[#e8c87a]/60" />
            </div>
            <h2 className="font-display text-5xl font-light text-white mb-6 text-balance">
              Educators who truly know your child
            </h2>
            <p className="text-white/60 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Our faculty are trained Montessori educators — careful observers,
              skilled guides, and passionate advocates for every child&apos;s
              growth. They don&apos;t just teach subjects; they know people.
            </p>
          </div>
        </section>
      </main>

      <TourCTA />
      <Footer />
    </>
  );
}
