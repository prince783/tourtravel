import Image from "next/image";
import { Headphones, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { AnimatedStat } from "@/components/AnimatedStat";
import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 pt-16 md:pt-12">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="hero-copy max-w-2xl">
            <BlurText
              text="About us"
              delay={100}
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
            />
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              <BlurText
                text="Meaningful journeys with thoughtful guidance"
                delay={250}
              />
            </h1>
            <BlurText
              text="Gauri Shyam Sakshi Travels is committed to creating spiritually enriching travel experiences rooted in comfort, care and trust."
              delay={450}
              className="mt-4 block text-base text-slate-600 md:text-lg"
            />
          </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <Image
                src="/abouthome.jpg"
                alt="Gauri Shyam Sakshi Travels representative"
                width={900}
                height={1000}
                priority
                className="h-[420px] w-full rounded-[24px] object-cover object-center sm:h-[520px]"
              />
              <div className="absolute bottom-7 left-7 rounded-2xl bg-slate-950/90 px-5 py-4 text-white shadow-lg backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Travel with purpose</p>
                <p className="mt-1 text-sm text-slate-200">Yamuna Nagar, Haryana</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="space-y-6 text-lg leading-8 text-slate-600 lg:pl-4">
              <p>
                Based in Yamuna Nagar, Haryana, Gauri Shyam Sakshi Travels serves families and devotees who value reliable travel support and peaceful pilgrimage experiences.
              </p>
              <p>
                We focus on creating organised, respectful and comfortable travel plans for spiritual destinations, temple visits and group journeys.
              </p>
              <p>
                Our approach highlights clarity, convenience and personal attention while keeping the journey focused on devotion and memorable experiences.
              </p>
              <p>
                From choosing the right package and coordinating pickup points to sharing timely updates, we help every traveler feel prepared, welcomed and cared for throughout the journey.
              </p>
              <div className="flex justify-between gap-3 border-t border-slate-200 pt-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <AnimatedStat target={25} suffix="+" label="packages" />
                <div>
                  <p className="text-3xl font-black tracking-tight text-slate-900">1:1</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">personal support</p>
                </div>
                <AnimatedStat target={100} suffix="%" label="clear communication" />
              </div>
            </div>
          </Reveal>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Travel with confidence and care"
              description="We combine thoughtful planning with personal support so your pilgrimage feels safe, smooth and spiritually fulfilling."
              align="center"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Safe & comfortable",
                text: "We prioritise your safety and comfort with reliable arrangements, experienced guidance and well-planned itineraries for every yatra.",
              },
              {
                icon: Sparkles,
                title: "Curated experiences",
                text: "From Char Dham to Kashi Ayodhya, each journey is thoughtfully designed to honour tradition while creating smooth, memorable experiences.",
              },
              {
                icon: Headphones,
                title: "Personal support",
                text: "Our team stays available before, during and after your pilgrimage, helping you travel with clarity and confidence.",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 120}>
                <article className="about-value-card h-full rounded-[28px] bg-slate-900 p-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                    <Icon size={23} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
          <Reveal>
            <div className="rounded-[28px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm md:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Our vision</p>
              <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                A future where every devotee travels with faith and ease
              </h2>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-5 py-5 md:px-6 md:py-6">
                <p className="text-lg italic leading-8 text-slate-600 md:text-xl">
                  &ldquo;To make sacred journeys more accessible, authentic and deeply transformative for every devotee, every family and every group we serve.&rdquo;
                </p>
              </div>

              <div className="mt-8 max-w-5xl space-y-5 text-base leading-7 text-slate-600 md:text-lg">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">The vision explained</h3>
                  <p className="mt-3">
                    Pilgrimage is more than reaching a destination. It is about feeling prepared, respected and supported while making space for devotion, family and meaningful memories.
                  </p>
                </div>
                <p>
                  We imagine a future where planning a yatra, temple visit or group journey feels simple, dignified and joyful. From the first enquiry to the journey home, Gauri Shyam Sakshi Travels aims to be a trustworthy companion for every traveller.
                </p>
                <p>
                  Through clear communication, thoughtful arrangements and personal care, we help families and devotees experience India&apos;s sacred destinations with greater confidence and ease.
                </p>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {[
                  { icon: ShieldCheck, title: "Trust & safety" },
                  { icon: HeartHandshake, title: "Meaningful pilgrimage" },
                  { icon: Sparkles, title: "Devotion & ease" },
                ].map(({ icon: Icon, title }) => (
                  <div key={title} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 text-slate-900">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                      <Icon size={17} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">The way we travel</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Simple planning, peaceful journeys</h2>
              <p className="mt-4 text-base text-slate-600 md:text-lg">From the first enquiry to the return home, we stay close to the details that make group travel feel easy.</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { number: "01", title: "Listen first", text: "We understand your group, preferred pace and travel priorities before shaping the right plan." },
              { number: "02", title: "Plan clearly", text: "You get straightforward information about routes, pickup points, schedules and package inclusions." },
              { number: "03", title: "Support throughout", text: "Our team remains available for updates and practical guidance before and during your journey." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <article className="about-value-card h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-bold tracking-[0.2em] text-orange-700">{item.number}</p>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 md:px-6 md:pb-24">
          <Reveal direction="right">
            <div className="about-promise rounded-[32px] bg-slate-900 px-6 py-10 text-white md:px-10 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">Our promise</p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Travel with more calm, care and confidence.</h2>
                <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">Every destination has its own rhythm. We help you experience it with thoughtful preparation, dependable communication and the warmth of a travel partner who understands why the journey matters.</p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
