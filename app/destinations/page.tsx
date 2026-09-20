import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { destinations } from "@/lib/site-data";

export default function DestinationsPage() {
  return (
    <>
      <Navbar /> 
      <main className="about-page relative overflow-hidden  px-4 py-16 md:px-6">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Destinations"
              title="Sacred places and spiritual stops"
              description="Explore destination highlights and related travel plans for devotees and families seeking a meaningful journey."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination, index) => (
              <Reveal
                key={destination.slug}
                delay={index * 120}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <article className="h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-64">
                    <Image src={destination.image} alt={destination.name} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-2xl font-bold text-slate-900">{destination.name}</h3>
                    <p className="mt-3 text-slate-600">{destination.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {destination.relatedPackages.map((pkg) => (
                        <span key={pkg} className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">{pkg}</span>
                      ))}
                    </div>
                    <Link href="/packages" className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
                      Explore Packages
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
