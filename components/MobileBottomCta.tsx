import Link from "next/link";

import { business } from "@/lib/site-data";

export function MobileBottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-10px_25px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Link
          href={`https://wa.me/${business.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-3 font-semibold text-white"
        >
          WhatsApp
        </Link>
        <Link
          href={business.phoneHref}
          className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-3 font-semibold text-slate-900"
        >
          Call Now
        </Link>
      </div>
    </div>
  );
}
