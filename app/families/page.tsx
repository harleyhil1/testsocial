import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Families | Montessori Academy Paradise Valley",
  description:
    "Resources, calendar, and information for current Montessori Academy families in Paradise Valley, Arizona.",
};

export default function FamiliesPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c8922a]" />
            <span className="text-[#c8922a] text-xs font-medium uppercase tracking-[0.25em]">
              Families
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-[#1e3d2f] leading-tight max-w-3xl text-balance">
            Resources for our community.
          </h1>
          <p className="mt-6 text-[#4a3f30] text-xl font-light max-w-xl leading-relaxed">
            Everything current families need — from the academic calendar to school
            resources and updates.
          </p>
        </div>
      </section>

      <main className="section-padding bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Calendar",
                description: "Important dates, school holidays, early release days, and events for the current academic year.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                ),
                color: "bg-[#d4e6dc]",
                textColor: "text-[#1e3d2f]",
                href: "#calendar",
              },
              {
                title: "Parent Portal",
                description: "Access your child's progress notes, attendance records, and teacher communications.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                color: "bg-[#f7efd8]",
                textColor: "text-[#c8922a]",
                href: "#portal",
              },
              {
                title: "School Handbook",
                description: "Policies, procedures, expectations, and everything you need to know about life at Montessori Academy.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                color: "bg-[#f0ddd6]",
                textColor: "text-[#8b3a2a]",
                href: "#handbook",
              },
              {
                title: "Volunteer",
                description: "Join our vibrant parent community. Volunteer opportunities support classroom programs and school events.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                color: "bg-[#d4e6dc]",
                textColor: "text-[#1e3d2f]",
                href: "#volunteer",
              },
              {
                title: "News & Events",
                description: "Stay up to date with school announcements, community events, and student achievements.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                ),
                color: "bg-[#f7efd8]",
                textColor: "text-[#c8922a]",
                href: "#news",
              },
              {
                title: "Contact the Office",
                description: "Have a question? Reach our administrative team at (480) 945-1121 or stop by during school hours.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                color: "bg-[#f0ddd6]",
                textColor: "text-[#8b3a2a]",
                href: "/contact",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group bg-white rounded-2xl p-8 hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 rounded-full ${item.color} ${item.textColor} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#1e3d2f] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4a3f30] font-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
