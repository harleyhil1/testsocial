const stats = [
  { value: "40+", label: "Years of Excellence" },
  { value: "Toddler–8th", label: "Grade Range" },
  { value: "Public", label: "Charter School" },
  { value: "Small", label: "Class Sizes" },
];

export default function Stats() {
  return (
    <div className="bg-[#1e3d2f] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8 py-2 text-center first:pl-0 last:pr-0">
              <div className="font-display text-3xl md:text-4xl font-semibold text-[#e8c87a] mb-1">
                {stat.value}
              </div>
              <div className="text-white/55 text-xs uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
