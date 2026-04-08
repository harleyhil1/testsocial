import Link from "next/link";

const footerLinks = {
  School: [
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Our Philosophy", href: "/about#philosophy" },
    { label: "Faculty", href: "/about#faculty" },
  ],
  Families: [
    { label: "Academic Calendar", href: "/families" },
    { label: "Resources", href: "/families#resources" },
    { label: "News & Events", href: "/families#news" },
    { label: "Parent Portal", href: "/families#portal" },
  ],
  Connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Schedule a Tour", href: "/contact" },
    { label: "Enrollment", href: "/contact#enrollment" },
    { label: "Volunteer", href: "/contact#volunteer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2a2015] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Top Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#e8c87a]/20 border border-[#e8c87a]/30 flex items-center justify-center text-xl font-display font-semibold text-[#e8c87a]">
                壽
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-white leading-none">
                  Montessori Academy
                </div>
                <div className="text-[10px] text-[#e8c87a]/60 uppercase tracking-[0.2em] mt-0.5">
                  Paradise Valley, Arizona
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              A public Montessori charter school honoring the whole child —
              from toddler through eighth grade.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <svg className="mt-0.5 flex-shrink-0 text-[#e8c87a]/60" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>6050 N Invergordon Rd<br />Paradise Valley, AZ 85253</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="flex-shrink-0 text-[#e8c87a]/60" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:4809451121" className="hover:text-white transition-colors">
                  (480) 945-1121
                </a>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Montessori Academy. All rights reserved.
          </p>
          <p>
            6050 N Invergordon Rd, Paradise Valley, AZ 85253
          </p>
        </div>
      </div>
    </footer>
  );
}
