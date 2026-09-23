import Link from "next/link";

import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { PackageGrid } from "@/components/PackageGrid";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { packages } from "@/lib/site-data";

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pt-34 pb-16 md:px-6 md:pt-36">
        <div className="hero-copy max-w-2xl">
          <BlurText
            text="Our packages"
            delay={100}
            className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
          />
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <BlurText text="Pilgrimage journeys and travel plans" delay={250} />
          </h1>
          <BlurText
            text="Browse the latest pilgrimage and tour packages curated for families, devotees and group travellers."
            delay={450}
            className="mt-4 block text-base text-slate-600 md:text-lg"
          />
        </div>

        <Reveal direction="left" delay={160}>
          <div className="mt-10 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-600">Package details are treated as client reference information and may be updated easily.</p>
            <WhatsAppButton label="Enquire on WhatsApp" compact />
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-10">
            <PackageGrid packages={packages} />
          </div>
        </Reveal>

        <Reveal direction="right" delay={180}>
          <div className="mt-14 rounded-[28px] bg-slate-900 p-8 text-white">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Need custom help?</p>
                <h2 className="mt-3 text-3xl font-bold">Tell us which yatra you want to plan.</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-3 font-medium text-white transition hover:bg-slate-800">
                  Contact Us
                </Link>
                <WhatsAppButton label="WhatsApp Us" compact />
              </div>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
