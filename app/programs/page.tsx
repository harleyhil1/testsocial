import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TourCTA from "@/components/TourCTA";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs | Montessori Academy Paradise Valley",
  description:
    "Explore Montessori Academy's programs from Toddler through 8th Grade. Each program is carefully designed to meet children at their developmental stage.",
};

const programs = [
  {
    id: "toddler",
    age: "18 months – 3 years",
    title: "Toddler",
    tagline: "A gentle first step toward independence.",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80",
    color: "bg-[#f0ddd6]",
    accent: "#8b3a2a",
    description:
      "Our Toddler program offers a warm, nurturing environment where the youngest learners begin their journey toward independence. Guided by trained educators, children ages 18 months to 3 years develop language, coordination, and social skills through hands-on exploration.",
    highlights: [
      "Small, consistent classroom community",
      "Practical life activities that build independence",
      "Sensory-rich materials and outdoor time",
      "Language-rich environment fostering early vocabulary",
    ],
  },
  {
    id: "primary",
    age: "3 – 6 years",
    title: "Primary",
    tagline: "Where curiosity finds its first great tools.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80",
    color: "bg-[#d4e6dc]",
    accent: "#1e3d2f",
    description:
      "The Primary years are a sensitive period for absorbing language, mathematics, and social norms. Children ages 3 to 6 work with classic Montessori materials — golden beads, sandpaper letters, bead chains — developing concentration, fine motor skills, and a foundation for all future learning.",
    highlights: [
      "Montessori materials for mathematics and literacy",
      "Mixed-age 3-6 community",
      "Grace and courtesy lessons",
      "Science, art, music, and cultural exploration",
    ],
  },
  {
    id: "lower-elementary",
    age: "6 – 9 years",
    title: "Lower Elementary",
    tagline: "Big questions, collaborative minds.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    color: "bg-[#f7efd8]",
    accent: "#c8922a",
    description:
      "The elementary years awaken a child's passion for understanding the world. In Lower Elementary, students ages 6 to 9 explore mathematics, language arts, history, science, and geography through integrated, story-driven curriculum — the Great Lessons — that makes learning feel epic.",
    highlights: [
      "Integrated curriculum anchored in the Great Lessons",
      "Collaborative work and peer learning",
      "Research projects and independent study",
      "Nature, geography, and cultural studies",
    ],
  },
  {
    id: "upper-elementary",
    age: "9 – 12 years",
    title: "Upper Elementary",
    tagline: "Ownership, depth, and real contribution.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    color: "bg-[#d4e6dc]",
    accent: "#1e3d2f",
    description:
      "Upper Elementary students ages 9 to 12 take increasing ownership of their education. They pursue extended research, community service projects, and advanced work in all academic areas. Peer collaboration and accountability build the leadership skills they'll carry for life.",
    highlights: [
      "Student-driven research and long-form projects",
      "Community service and civic engagement",
      "Advanced mathematics and written expression",
      "Peer mentorship and leadership opportunities",
    ],
  },
  {
    id: "middle-school",
    age: "12 – 15 years",
    title: "Middle School",
    tagline: "Purpose, identity, and readiness for the world.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    color: "bg-[#f0ddd6]",
    accent: "#8b3a2a",
    description:
      "Adolescence is a time of profound change. Our Middle School honors this by connecting students' academic work to real-world relevance. Ages 12 to 15 engage in entrepreneurial projects, community participation, and rigorous academics — emerging prepared for high school and life beyond.",
    highlights: [
      "Real-world economics and entrepreneurship projects",
      "Internship and community partnership opportunities",
      "College-preparatory academics",
      "Social-emotional learning and identity development",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-[#1e3d2f] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,146,42,0.15),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#e8c87a]/60" />
            <span className="text-[#e8c87a] text-xs font-medium uppercase tracking-[0.25em]">
              Programs
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-white leading-tight max-w-3xl text-balance">
            A path for every child, every age.
          </h1>
          <p className="mt-6 text-white/60 text-xl font-light max-w-2xl leading-relaxed">
            From first steps to high school readiness — five programs designed to
            meet children exactly where they are and guide them to where they&apos;re
            meant to go.
          </p>
        </div>
      </section>

      <main className="bg-[#faf6ef]">
        {/* Program Anchors */}
        <div className="border-b border-[#ede0cb] sticky top-20 z-30 bg-[#faf6ef]/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex gap-6 overflow-x-auto py-4 text-sm font-medium">
              {programs.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="text-[#4a3f30] hover:text-[#1e3d2f] whitespace-nowrap transition-colors"
                >
                  {p.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Program Sections */}
        {programs.map((program, i) => (
          <section
            key={program.id}
            id={program.id}
            className={`section-padding ${i % 2 === 1 ? "bg-[#ede0cb]/30" : "bg-[#faf6ef]"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/10">
                    <Image
                      src={program.image}
                      alt={`${program.title} program`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl text-white text-xs font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: program.accent }}
                  >
                    {program.age}
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div
                    className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] mb-6`}
                    style={{ backgroundColor: program.color, color: program.accent }}
                  >
                    {program.title}
                  </div>
                  <h2 className="font-display text-5xl font-light leading-tight mb-3" style={{ color: program.accent }}>
                    {program.title}
                  </h2>
                  <p className="font-display text-2xl text-[#6b8f71] italic mb-6">{program.tagline}</p>
                  <p className="text-[#4a3f30] leading-relaxed text-lg font-light mb-8">
                    {program.description}
                  </p>
                  <ul className="space-y-3">
                    {program.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[#4a3f30]">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: program.accent }}
                        />
                        <span className="text-base font-light">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <TourCTA />
      <Footer />
    </>
  );
}
