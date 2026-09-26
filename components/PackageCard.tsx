import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

import { business, getPackageWhatsAppMessage } from "@/lib/site-data";
import type { TourPackage } from "@/lib/site-data";

export function PackageCard({ pkg }: { pkg: TourPackage }) {
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    getPackageWhatsAppMessage(pkg.name)
  )}`;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Pilgrimage</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">{pkg.name}</h3>
          </div>
          {pkg.price ? <p className="text-base font-bold text-slate-900">{pkg.price}</p> : null}
        </div>

        <div className="space-y-2 text-sm text-slate-600">
          {pkg.date ? <p className="flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" />{pkg.date}</p> : null}
          {pkg.duration ? <p className="flex items-center gap-2"><Clock3 size={16} aria-hidden="true" />{pkg.duration}</p> : null}
          {pkg.pickupPoints.length ? <p className="flex items-center gap-2"><MapPin size={16} aria-hidden="true" /><span>Pickup: {pkg.pickupPoints.slice(0, 3).join(" • ")}</span></p> : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {(pkg.highlights ?? []).slice(0, 3).map((item) => (
            <span key={item} className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
          >
            View Details
          </Link>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}
