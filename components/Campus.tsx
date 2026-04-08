import Image from "next/image";
import Link from "next/link";

export default function Campus() {
  return (
    <section className="section-padding bg-[#faf6ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#1e3d2f]/15">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=85"
                alt="Paradise Valley, Arizona campus"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3d2f]/40 to-transparent" />
            </div>
            {/* Address card overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1e3d2f] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#2a2015] text-sm">Montessori Academy</div>
                  <div className="text-[#6b8f71] text-sm mt-0.5">6050 N Invergordon Rd</div>
                  <div className="text-[#6b8f71] text-sm">Paradise Valley, AZ 85253</div>
                  <a href="tel:4809451121" className="text-[#c8922a] text-sm font-medium mt-1 block hover:underline">
                    (480) 945-1121
                  </a>
                </div>
              </div>
            </div>
            {/* Accent */}
            <div className="absolute -top-5 -right-5 w-28 h-28 bg-[#c4622d]/10 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c8922a]" />
              <span className="text-[#c8922a] text-xs font-medium uppercase tracking-[0.25em]">
                Our Campus
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-light text-[#1e3d2f] leading-tight mb-8 text-balance">
              Rooted in one of{" "}
              <em>Arizona&apos;s most beautiful communities</em>
            </h2>

            <div className="space-y-5 text-[#4a3f30] leading-relaxed text-lg font-light">
              <p>
                Nestled in Paradise Valley — surrounded by the Sonoran Desert&apos;s
                iconic saguaros, mountain views, and year-round sunshine — our
                campus is an environment that itself inspires. Beauty, we
                believe, is part of the education.
              </p>
              <p>
                Our prepared indoor and outdoor spaces invite children to move
                freely, think deeply, and connect with the natural world around
                them. Learning doesn&apos;t stop at the classroom door.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1e3d2f] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2d5a45] transition-all text-sm tracking-wide"
              >
                Schedule a Visit
              </Link>
              <a
                href="https://www.google.com/maps/search/6050+N+Invergordon+Rd+Paradise+Valley+AZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#ede0cb] text-[#4a3f30] font-medium px-8 py-4 rounded-full hover:border-[#1e3d2f] transition-all text-sm"
              >
                Get Directions
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
