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
          backgroundSize: "cover",
          backgroundPosition: "left center",
          filter: "brightness(0.7) saturate(0.9)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),transparent_28%),linear-gradient(to_right,rgba(2,6,23,0.96),rgba(15,23,42,0.92),rgba(15,23,42,0.86))]" />

      <Reveal>
        <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.9fr_1.1fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_24px_60px_rgba(15,23,42,0.26)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[24px] border border-amber-400/20 bg-slate-950/60 p-5">
                <div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage: "url('/logo/haryana.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.75)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-amber-900/25" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-[150px] overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
                      <Image
                        src="/logo/gauri.png"
                        alt="Gauri Shyam Sakshi Travels logo"
                        fill
                        sizes="150px"
                        className="object-contain p-1"
                      />
                    </div>
                  </div>

                  <p className="mt-5 max-w-md text-sm leading-6 text-slate-200/90">
                    Premium pilgrimage and tour travel experiences for spiritually meaningful journeys, family travel and trusted group planning across India.
                  </p>

                  <div className="mt-6 inline-flex items-center rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-amber-200">
                    Trusted travel partner
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Quick Links</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {[
                  ["/about", "About"],
                  ["/packages", "Packages"],
                  ["/destinations", "Destinations"],
                  ["/gallery", "Gallery"],
                  ["/contact", "Contact"],
                  ["/privacy-policy", "Privacy Policy"],
                  ["/terms", "Terms & Conditions"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="inline-flex items-center gap-2 transition hover:-translate-x-1 hover:text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Popular Packages</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {packages.slice(0, 4).map((pkg) => (
                  <li key={pkg.id}>
                    <Link href={`/packages/${pkg.slug}`} className="inline-flex items-center gap-2 transition hover:-translate-x-1 hover:text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                      {pkg.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="rounded-xl border border-white/5 bg-slate-900/60 px-3 py-2">{business.location}</li>
                <li className="rounded-xl border border-white/5 bg-slate-900/60 px-3 py-2">
                  <a href={business.phoneHref} className="transition hover:text-white">{business.phoneDisplay}</a>
                </li>
                <li className="rounded-xl border border-white/5 bg-slate-900/60 px-3 py-2">
                  <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-white">
                    WhatsApp: {business.phoneDisplay}
                  </a>
                </li>
                <li className="rounded-xl border border-white/5 bg-slate-900/60 px-3 py-2">
                  <a href={business.emailHref} className="transition hover:text-white">{business.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="relative border-t border-slate-800/90 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms &amp; Conditions</Link>
            <a href="https://softfyr.com/" target="_blank" rel="noreferrer" className="font-medium text-slate-300 transition hover:text-amber-300">
              Developed by Softfyr Technology
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
