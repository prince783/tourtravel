import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BusFront, Snowflake, Users } from "lucide-react";

import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getWhatsAppUrl } from "@/lib/site-data";

const tempoTravellers = [
  {
    name: "12 Seater Tempo Traveller",
    image: "/tempo/tempo12.png",
    capacity: "Up to 12 travellers",
    description: "A comfortable choice for small families and groups travelling together on a yatra or weekend tour.",
    features: ["Air-conditioned comfort", "Spacious seating", "Ideal for small groups"],
  },
  {
    name: "16 Seater Tempo Traveller",
    image: "/tempo/tempo16.png",
    capacity: "Up to 16 travellers",
    description: "Extra room for larger family groups, with comfortable seating for long-distance pilgrimage travel.",
    features: ["Air-conditioned comfort", "Ample luggage space", "Great for group yatras"],
  },
  {
    name: "18 Seater Tempo Traveller",
    image: "/tempo/tempo18.png",
    capacity: "Up to 18 travellers",
    description: "Our largest Tempo Traveller option for organised group journeys, tours and multi-day trips.",
    features: ["Air-conditioned comfort", "Large group capacity", "Comfortable long-route travel"],
  },
];

export default function TempoTravellersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50 text-slate-900">
        <section className="relative overflow-hidden bg-slate-900 px-4 py-16 text-white md:px-6 md:py-24">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-amber-300/20" aria-hidden="true" />
          <div className="absolute -bottom-48 left-1/4 h-96 w-96 rounded-full border border-emerald-300/10" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl">
            <div className="hero-copy max-w-3xl">
                <div className="flex items-center gap-3 text-amber-300">
                  <BusFront size={22} aria-hidden="true" />
                  <BlurText
                    text="Travel together"
                    delay={100}
                    className="text-xs font-semibold uppercase tracking-[0.28em]"
                  />
                </div>
                <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                  <BlurText text="Tempo Travellers for every group journey." delay={250} />
                </h1>
                <BlurText
                  text="Choose the right size for your family, friends or pilgrimage group. Contact us for current availability, route planning and a personalised quote."
                  delay={450}
                  className="mt-5 block max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#available-vehicles"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
                  >
                    View vehicles <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <WhatsAppButton label="Check availability" className="border-emerald-400 bg-emerald-500 hover:bg-emerald-400" message="Hello, I would like to check Tempo Traveller availability and pricing." />
                </div>
            </div>
          </div>
        </section>

        <section id="available-vehicles" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Available options</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Find your group&apos;s comfortable fit.</h2>
              <p className="mt-4 leading-7 text-slate-600">Vehicle availability and pricing can change by date and route. Enquire directly for the latest details.</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tempoTravellers.map((traveller, index) => (
              <Reveal key={traveller.name} delay={index * 100} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <Image src={traveller.image} alt={traveller.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 hover:scale-105" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                      <Users size={15} aria-hidden="true" /> {traveller.capacity}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-bold text-slate-900">{traveller.name}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{traveller.description}</p>
                    <ul className="mt-5 space-y-3 text-sm text-slate-700">
                      {traveller.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Snowflake size={16} className="shrink-0 text-amber-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={getWhatsAppUrl(`Hello, I would like to enquire about the ${traveller.name}. Please share availability and pricing.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                    >
                      Enquire about this vehicle <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-amber-100 bg-[#fff8ed] px-4 py-14 md:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Planning a group trip?</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">Let&apos;s match your group with the right vehicle.</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
              Contact us <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
