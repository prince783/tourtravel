"use client";

import Image from "next/image";
import Link from "next/link";
import { BusFront } from "lucide-react";
import { useState } from "react";

import { BlurText } from "@/components/BlurText";
import { CallButton } from "@/components/CallButton";
import { FeaturedJourneys } from "@/components/FeaturedJourneys";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { YatraCalendar } from "@/components/YatraCalendar";
import { destinations } from "@/lib/site-data";

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  return (
    <>
      <Navbar />
      <main className="bg-stone-50 text-slate-900">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-label="Pilgrimage travel experiences"
              className="hero-video h-full w-full object-cover"
            >
              <source src="/HeroVideo/tourvideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="tempo-badge-wrap absolute right-4 top-4 z-20 md:right-6 md:top-6">
            <Link
              href="/tempo-travellers"
              className="tempo-badge group"
              aria-label="Check available Tempo Traveller options"
            >
              <BusFront aria-hidden="true" size={17} strokeWidth={2.2} />
              <span>Check Tempo Traveller</span>
              <span aria-hidden="true" className="tempo-badge-arrow">
                &rarr;
              </span>
            </Link>
          </div>

          <div className="relative mx-auto flex min-h-170 max-w-7xl items-center px-4 py-24 md:px-6">
            <div className="hero-copy max-w-2xl text-white">
              <BlurText
                text="Premium Pilgrimage Tours"
                delay={100}
                className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300"
              />
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                <BlurText
                  text="Divine Journeys, Lifetime Memories"
                  delay={250}
                />
              </h1>
              <BlurText
                text="Gauri Shyam Sakshi Travels helps families and groups plan spiritually uplifting journeys with comfortable travel, trusted support and memorable experiences."
                delay={450}
                className="mt-6 block max-w-xl text-lg text-slate-200 md:text-xl"
              />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Explore Packages
                </Link>
                <WhatsAppButton
                  message="Hello, I would like to know more about Gauri Shyam Sakshi Travels tour packages."
                  className="bg-emerald-600"
                />
                <CallButton />
              </div>
            </div>
          </div>
        </section>

        <section className="about-page relative overflow-hidden bg-stone-50 px-4 pt-10 pb-5 md:px-6">
          <div className="about-background about-background-top" aria-hidden="true" />
          <div className="about-background about-background-bottom" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
            <Reveal
              className="overflow-hidden rounded-[28px] shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              direction="left"
            >
              <Image
                src="/abouthome.jpg"
                alt="Gauri Shyam Sakshi Travels representative"
                width={900}
                height={1000}
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={140}>
              <SectionHeading
                eyebrow="About the brand"
                title="Travel that feels personal, spiritual and seamless."
                description="Gauri Shyam Sakshi Travels is a pilgrimage and tour travel brand based in Yamuna Nagar, Haryana, focused on meaningful journeys and group travel support."
              />
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We aim to make each trip comfortable, well-organised and
                spiritually enriching for families, devotees and groups planning
                their next sacred journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  Learn More
                </Link>
                <WhatsAppButton label="Ask on WhatsApp" compact />
              </div>
            </Reveal>
            </div>
          </div>
        </section>

        <FeaturedJourneys />

<section className="destination-showcase relative overflow-hidden px-4 py-16 md:px-6 md:py-20">        
    <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Sacred destinations"
                title="Discover Divine Abodes"
                description="From the Himalayas to the Ganges, embark on journeys that touch the soul."
                align="center"
              />
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {destinations.slice(0, 4).map((destination, index) => (
                <Reveal key={destination.slug} delay={index * 100}>
                  <Link
                    href={`/destinations#${destination.slug}`}
                    className="destination-showcase-card group relative block h-80 overflow-hidden rounded-[22px] shadow-[0_16px_35px_rgba(93,29,41,0.16)]"
                  >
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <p className="mt-1 text-sm text-slate-200">{destination.description}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180}>
              <div className="mt-10 text-center">
                <Link
                  href="/destinations"
                  className="inline-flex items-center rounded-full border border-amber-700/40 px-6 py-3 font-semibold text-[#681e2a] transition hover:bg-amber-100"
                >
                  View all destinations
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f3eedf] px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-left md:text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#9a5d3c]">
                Sacred moments
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#5d1d29] md:text-6xl">
                Gallery
              </h2>
              <p className="mt-4 text-base text-slate-700 md:text-lg">
                Glimpses from our pilgrimage destinations across India.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-start gap-3 md:justify-center">
              {destinations.map((destination, index) => (
                <button
                  key={destination.slug}
                  type="button"
                  aria-pressed={selectedDestination.slug === destination.slug}
                  onClick={() => setSelectedDestination(destination)}
                  className={[
                    "cursor-pointer rounded-full border border-[#7a4d3d]/25 bg-white/40 px-4 py-2 text-sm font-medium text-[#5d1d29] shadow-sm transition hover:-translate-y-0.5 hover:bg-white",
                    selectedDestination.slug === destination.slug ? "bg-[#681e2a] text-white shadow-[0_10px_20px_rgba(104,30,42,0.2)]" : "",
                    index === 0 ? "" : "",
                  ].join(" ")}
                >
                  {destination.name}
                </button>
              ))}
            </div>

            <div className="mt-10 flex justify-start">
              <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-[#d7cab6] bg-white p-2 shadow-[0_20px_40px_rgba(43,28,18,0.12)]">
                <Image
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  width={900}
                  height={680}
                  className="h-[320px] w-full rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-16 md:px-6 md:py-20">
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal direction="left" className="mx-auto w-full max-w-md">
              <div className="relative aspect-4/5 overflow-hidden rounded-[28px] border border-white shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
                <Image
                  src="/packages/vrindavan.jpg"
                  alt="Badrinath temple and Himalayan pilgrimage landscape"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="max-w-2xl">
                <div className="mb-4 h-0.5 w-12 bg-amber-500" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">How it works</p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-2">
                  Start your journey in 4 easy steps
                </h2>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      number: "1",
                      title: "Choose your yatra",
                      text: "Browse our curated packages and choose the pilgrimage that calls to you.",
                    },
                    {
                      number: "2",
                      title: "Share your details",
                      text: "Tell us your travel dates, group size and any special requests so we can guide you well.",
                    },
                    {
                      number: "3",
                      title: "Confirm and prepare",
                      text: "Receive your itinerary and confirmation with practical guidance for the journey ahead.",
                    },
                    {
                      number: "4",
                      title: "Begin your journey",
                      text: "Travel with peace of mind while our team supports you every step of the way.",
                    },
                  ].map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400 bg-white text-lg font-bold text-slate-900">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 md:text-lg">{step.title}</h3>
                        <p className="mt-1 max-w-xl leading-7 text-slate-600">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/packages"
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Start your journey
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <YatraCalendar />

        <TestimonialsCarousel />

        <section className="mx-auto max-w-7xl px-4 pt-2 pb-3 md:px-6">
          <Reveal direction="right">
            <div className="cta-panel rounded-4xl bg-slate-900 px-6 py-10 text-white md:px-10 md:py-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                    Need assistance?
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">
                    Talk to us for the latest package details.
                  </h2>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton
                    label="WhatsApp Enquiry"
                    className="bg-emerald-500 text-white"
                  />
                  <CallButton className="bg-amber-400 text-slate-900" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
