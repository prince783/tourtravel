import Image from "next/image";
import Link from "next/link";

import { CallButton } from "@/components/CallButton";
import { Navbar } from "@/components/Navbar";
import { PackageCard } from "@/components/PackageCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, featuredPackages } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50 text-slate-900">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="Pilgrimage travel scene in India"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-24 md:px-6">
            <div className="max-w-2xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Premium Pilgrimage Tours
              </p>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Divine Journeys, Lifetime Memories
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-200 md:text-xl">
                Gauri Shyam Sakshi Travels helps families and groups plan spiritually uplifting journeys with comfortable travel, trusted support and memorable experiences.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/packages" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-amber-300">
                  Explore Packages
                </Link>
                <WhatsAppButton message="Hello, I would like to know more about Gauri Shyam Sakshi Travels tour packages." className="bg-emerald-600" />
                <CallButton />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
            <div className="overflow-hidden rounded-[28px] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1534996858221-380b92700493?auto=format&fit=crop&w=900&q=80"
                alt="Representative portrait"
                width={900}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="About the brand"
                title="Travel that feels personal, spiritual and seamless."
                description="Gauri Shyam Sakshi Travels is a pilgrimage and tour travel brand based in Yamuna Nagar, Haryana, focused on meaningful journeys and group travel support."
              />
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We aim to make each trip comfortable, well-organised and spiritually enriching for families, devotees and groups planning their next sacred journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                  Learn More
                </Link>
                <WhatsAppButton label="Ask on WhatsApp" compact />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <SectionHeading
            eyebrow="Featured journeys"
            title="Pilgrimage packages for every kind of traveller"
            description="A curated collection of spiritual tours and group travel plans designed to make planning simpler."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="rounded-[32px] bg-slate-900 px-6 py-10 text-white md:px-10 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">Need assistance?</p>
                <h2 className="mt-3 text-3xl font-bold">Talk to us for the latest package details.</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton label="WhatsApp Enquiry" className="bg-emerald-500 text-white" />
                <CallButton className="bg-amber-400 text-slate-900" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600 md:px-6">
          <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
            <p>{business.name}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">Contact</Link>
              <Link href="/packages">Packages</Link>
              <Link href="/destinations">Destinations</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
