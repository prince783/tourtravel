import Image from "next/image";
import Link from "next/link";

import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { business } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 px-8 pt-34 pb-16 md:px-6 md:pt-36">
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
                <div className="mb-4 flex justify-center sm:justify-start">
                  <div className="relative h-16 w-[200px] overflow-hidden ">
                    <Image
                      src="/logo/gauri.png"
                      alt="Gauri Shyam Sakshi Travels logo"
                      fill
                      sizes="200px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Contact</p>
                <h1 className="mt-3 text-4xl font-bold">Gauri Shyam Sakshi Travels</h1>
                <p className="mt-2 text-slate-300">Yamuna Nagar</p>

                <div className="mt-8 space-y-4 text-slate-200">
                  <p><strong className="text-white">Phone:</strong> <a href={business.phoneHref}>{business.phoneDisplay}</a></p>
                  <p><strong className="text-white">WhatsApp:</strong> <a href={business.whatsappHref} target="_blank" rel="noreferrer">{business.phoneDisplay}</a></p>
                  <p><strong className="text-white">Email:</strong> <a href={business.emailHref}>{business.email}</a></p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="wa-button inline-flex items-center justify-center rounded-full px-5 py-3 font-medium text-white">WhatsApp</a>
                  <a href={business.phoneHref} className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 font-medium text-slate-900">Call Now</a>
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
