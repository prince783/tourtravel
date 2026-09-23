import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { business, packages } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-2 overflow-hidden border-t border-slate-200 bg-slate-950 text-slate-200">
      <div
        className="absolute inset-y-0 left-0 w-full opacity-30"
        style={{
          backgroundImage: "url('/logo/haryana.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          filter: 'brightness(0.7) saturate(0.9)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />

      <Reveal>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/50 p-4 shadow-[0_24px_50px_rgba(15,23,42,0.25)] backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/50 p-5">
              <div
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage: "url('/logo/haryana.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.75)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-amber-900/25" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-[150px] overflow-hidden">
                    <Image
                      src="/logo/gauri.png"
                      alt="Gauri Shyam Sakshi Travels logo"
                      fill
                      sizes="150px"
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                <p className="mt-5 max-w-md text-sm leading-6 text-slate-200">
                  Premium pilgrimage and tour travel experiences for spiritually meaningful journeys, family travel and trusted group planning across India.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Popular Packages</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {packages.slice(0, 4).map((pkg) => (
                <li key={pkg.id}><Link href={`/packages/${pkg.slug}`}>{pkg.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>{business.location}</li>
              <li><a href={business.phoneHref}>{business.phoneDisplay}</a></li>
              <li><a href={business.whatsappHref} target="_blank" rel="noreferrer">WhatsApp: {business.phoneDisplay}</a></li>
              <li><a href={business.emailHref}>{business.email}</a></li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="relative border-t border-slate-800/90">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
            <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
