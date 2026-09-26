import Link from "next/link";
import { ClipboardList, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { business } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 px-8 pt-30 pb-16 md:px-6 md:pt-30">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-copy max-w-2xl">
            <BlurText
              text="Contact us"
              delay={100}
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
            />
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              <BlurText text="Let's plan your meaningful journey" delay={250} />
            </h1>
            <BlurText
              text="Share your travel plans with us and our team will help you choose the right package, route and support for your pilgrimage."
              delay={450}
              className="mt-4 block text-base text-slate-600 md:text-lg"
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal direction="left">
              <div className="h-full rounded-[28px] bg-slate-900 p-8 text-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Contact</p>
                <h1 className="mt-3 text-4xl font-bold">Gauri Shyam Sakshi Travels</h1>

                <div className="mt-8 space-y-6 text-slate-200">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-lg shadow-amber-950/20">
                      <MapPin size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="mt-1 text-sm text-slate-300">Yamuna Nagar, Haryana</p>
                      <p className="mt-1 text-xs text-slate-400">Serving your travel needs with convenient pickup arrangements.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-lg shadow-amber-950/20">
                      <Mail size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">Email Us</p>
                      <a className="mt-1 block text-sm text-slate-300 transition hover:text-white" href={business.emailHref}>{business.email}</a>
                      <p className="mt-1 text-xs text-slate-400">We&apos;re just an email away.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-lg shadow-amber-950/20">
                      <Phone size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">Call Us</p>
                      <a className="mt-1 block text-sm text-slate-300 transition hover:text-white" href={business.phoneHref}>{business.phoneDisplay}</a>
                      <p className="mt-1 text-xs text-slate-400">Talk to us about your journey.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-lg shadow-amber-950/20">
                      <MessageCircle size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">WhatsApp Us</p>
                      <a className="mt-1 block text-sm text-slate-300 transition hover:text-white" href={business.whatsappHref} target="_blank" rel="noreferrer">{business.phoneDisplay}</a>
                      <p className="mt-1 text-xs text-slate-400">Connect with us for quick assistance.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="wa-button inline-flex items-center justify-center rounded-full px-5 py-3 font-medium text-white">WhatsApp</a>
                  <a href={business.phoneHref} className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 font-medium text-slate-900">Call Now</a>
                </div>

                <div className="mt-8 flex gap-3 border-t border-white/15 pt-5 text-sm text-slate-300">
                  <ClipboardList size={18} className="mt-0.5 shrink-0 text-amber-300" aria-hidden="true" />
                  <p><strong className="text-white">For a quicker quote:</strong> share your destination or preferred package, pickup point, travel date, number of travellers, and any special travel requirements.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={140}>
              <div className="rounded-[28px] border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-slate-900">Send an enquiry</h2>
                <form className="mt-6 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Name
                  <input type="text" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Mobile
                  <input type="tel" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="Your mobile number" />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input type="email" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="your@email.com" />
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Package
                  <input type="text" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="Package name" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Travel Date
                  <input type="date" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400" />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Number of Travellers
                <input type="number" min={1} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="1" />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Message
                <textarea rows={5} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="Tell us more about your travel requirement" />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800">Submit Enquiry</button>
                <Link href={business.whatsappHref} target="_blank" rel="noreferrer" className="wa-button inline-flex items-center justify-center rounded-full px-5 py-3 font-medium text-white">WhatsApp</Link>
                <a href={business.phoneHref} className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 font-medium text-slate-900">Call Now</a>
              </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
