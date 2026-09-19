import Link from "next/link";

import { business, packages } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-900">GS</div>
            <div>
              <div className="text-lg font-bold text-white">Gauri Shyam</div>
              <div className="text-xs uppercase tracking-[0.22em] text-amber-300">Sakshi Travels</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Premium pilgrimage and tour travel experiences for spiritual journeys and meaningful family holidays.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
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
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
