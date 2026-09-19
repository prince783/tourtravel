import Image from "next/image";

import { AnimatedStat } from "@/components/AnimatedStat";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50">
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          eyebrow="About us"
          title="Meaningful journeys with thoughtful guidance"
          description="Gauri Shyam Sakshi Travels is committed to creating spiritually enriching travel experiences rooted in comfort, care and trust."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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
            <div className="grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <AnimatedStat target={25} suffix="+" label="packages" />
              <div>
                <p className="text-3xl font-black tracking-tight text-slate-900">1:1</p>
                <p className="mt-1 text-sm leading-5 text-slate-500">personal support</p>
              </div>
              <div>
                <p className="text-3xl font-black tracking-tight text-slate-900">100%</p>
                <p className="mt-1 text-sm leading-5 text-slate-500">clear communication</p>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 md:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Our travel philosophy", text: "Every trip should balance spiritual purpose with comfort, clarity and peace of mind." },
            { title: "Who we help", text: "Families, devotees and groups planning pilgrimage tours and destination-based travel." },
            { title: "Why choose us", text: "Simple communication, organised group travel support and a premium travel experience." },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
        </section>
      </main>
    </>
  );
}
