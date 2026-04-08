"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    interest: "tour",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", childAge: "", interest: "tour", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#1e3d2f] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,146,42,0.12),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#e8c87a]/60" />
            <span className="text-[#e8c87a] text-xs font-medium uppercase tracking-[0.25em]">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-white leading-tight max-w-2xl text-balance">
            We&apos;d love to meet your family.
          </h1>
          <p className="mt-6 text-white/60 text-xl font-light max-w-xl leading-relaxed">
            Whether you&apos;re ready to enroll or simply curious, we&apos;re here to
            answer every question.
          </p>
        </div>
      </section>

      <main className="section-padding bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-semibold text-[#1e3d2f] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      ),
                      label: "Address",
                      value: "6050 N Invergordon Rd\nParadise Valley, AZ 85253",
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      ),
                      label: "Phone",
                      value: "(480) 945-1121",
                      href: "tel:4809451121",
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      ),
                      label: "Email",
                      value: "info@azma.academy",
                      href: "mailto:info@azma.academy",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#d4e6dc] flex items-center justify-center text-[#1e3d2f] flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-[#6b8f71] uppercase tracking-[0.15em] font-medium mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[#2a2015] hover:text-[#1e3d2f] transition-colors whitespace-pre-line"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-[#2a2015] whitespace-pre-line">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#d4e6dc] rounded-2xl">
                <h3 className="font-display text-2xl font-semibold text-[#1e3d2f] mb-3">
                  Office Hours
                </h3>
                <div className="space-y-1 text-sm text-[#2d5a45]">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium">7:30 am – 4:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday – Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-10 shadow-sm">
                <h2 className="font-display text-3xl font-semibold text-[#1e3d2f] mb-8">
                  Send us a message
                </h2>

                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-[#d4e6dc] flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#1e3d2f" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-display text-3xl text-[#1e3d2f] mb-3">Thank you!</h3>
                    <p className="text-[#6b8f71]">We&apos;ll be in touch with you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field label="Full Name" name="name" type="text" value={form.name} onChange={handleChange} required />
                      <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                      <Field label="Child&apos;s Age" name="childAge" type="text" placeholder="e.g. 4 years" value={form.childAge} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4a3f30] mb-2">
                        I&apos;m interested in
                      </label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#ede0cb] bg-[#faf6ef] text-[#2a2015] focus:outline-none focus:ring-2 focus:ring-[#1e3d2f]/30 focus:border-[#1e3d2f] transition-colors"
                      >
                        <option value="tour">Scheduling a Campus Tour</option>
                        <option value="enrollment">Enrollment Information</option>
                        <option value="programs">Program Details</option>
                        <option value="other">General Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4a3f30] mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us a little about your child and what you're looking for..."
                        className="w-full px-4 py-3.5 rounded-xl border border-[#ede0cb] bg-[#faf6ef] text-[#2a2015] placeholder-[#6b8f71]/60 focus:outline-none focus:ring-2 focus:ring-[#1e3d2f]/30 focus:border-[#1e3d2f] transition-colors resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm">
                        Something went wrong. Please try again or call us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#1e3d2f] text-white font-semibold py-4 rounded-full hover:bg-[#2d5a45] transition-all disabled:opacity-60 text-base tracking-wide"
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#4a3f30] mb-2">
        {label.replace("&apos;", "'")}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl border border-[#ede0cb] bg-[#faf6ef] text-[#2a2015] placeholder-[#6b8f71]/60 focus:outline-none focus:ring-2 focus:ring-[#1e3d2f]/30 focus:border-[#1e3d2f] transition-colors"
      />
    </div>
  );
}
