import Link from "next/link";

const programs = [
  {
    age: "18 mo – 3 yr",
    title: "Toddler",
    description:
      "A gentle, nurturing environment where our youngest learners build independence, language, and social awareness through exploration and routine.",
    color: "bg-[#f0ddd6]",
    accent: "text-[#8b3a2a]",
    dot: "bg-[#8b3a2a]",
  },
  {
    age: "3 – 6 yr",
    title: "Primary",
    description:
      "Children develop concentration, fine motor skills, early literacy, and mathematical thinking using classic Montessori materials in a prepared environment.",
    color: "bg-[#d4e6dc]",
    accent: "text-[#1e3d2f]",
    dot: "bg-[#1e3d2f]",
  },
  {
    age: "6 – 9 yr",
    title: "Lower Elementary",
    description:
      "Collaborative and inquiry-driven, students dive into mathematics, science, history, and language arts through integrated, hands-on curriculum.",
    color: "bg-[#f7efd8]",
    accent: "text-[#c8922a]",
    dot: "bg-[#c8922a]",
  },
  {
    age: "9 – 12 yr",
    title: "Upper Elementary",
    description:
      "Students take greater ownership of their education, pursuing deep research projects, community service, and advanced academic skills.",
    color: "bg-[#d4e6dc]",
    accent: "text-[#1e3d2f]",
    dot: "bg-[#1e3d2f]",
  },
  {
    age: "12 – 15 yr",
    title: "Middle School",
    description:
      "Adolescents thrive with purposeful work, real-world application, and a community that honors their growing identity and intellect.",
    color: "bg-[#f0ddd6]",
    accent: "text-[#8b3a2a]",
    dot: "bg-[#8b3a2a]",
  },
];

export default function Programs() {
  return (
    <section className="section-padding bg-[#ede0cb]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c8922a]" />
            <span className="text-[#c8922a] text-xs font-medium uppercase tracking-[0.25em]">
              Programs
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#1e3d2f] leading-tight text-balance">
            A path for every stage of childhood
          </h2>
          <p className="mt-5 text-[#4a3f30] text-lg font-light leading-relaxed">
            From their first steps toward independence to the cusp of high
            school, our programs meet children exactly where they are.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 md:max-w-2xl lg:max-w-none lg:grid-cols-2 lg:ml-auto lg:w-2/3">
          {programs.slice(3).map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 border-2 border-[#1e3d2f] text-[#1e3d2f] font-semibold px-8 py-3.5 rounded-full hover:bg-[#1e3d2f] hover:text-white transition-all text-sm tracking-wide"
          >
            View All Programs
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
}: {
  program: (typeof programs)[number];
}) {
  return (
    <div className={`${program.color} rounded-2xl p-8 group hover:shadow-lg transition-all`}>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-2 h-2 rounded-full ${program.dot}`} />
        <span className="text-xs font-medium text-[#6b8f71] uppercase tracking-[0.2em]">
          {program.age}
        </span>
      </div>
      <h3 className={`font-display text-3xl font-semibold ${program.accent} mb-3`}>
        {program.title}
      </h3>
      <p className="text-[#4a3f30] leading-relaxed font-light text-base">
        {program.description}
      </p>
      <Link
        href="/programs"
        className={`inline-flex items-center gap-1.5 mt-6 text-sm font-medium ${program.accent} opacity-70 hover:opacity-100 transition-opacity`}
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
