"use client";

import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { business } from "@/lib/site-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"sticky top-0 z-50 transition-all duration-300 " + (scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent") }>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-amber-300">
            GS
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-900">Gauri Shyam</div>
            <div className="text-xs uppercase tracking-[0.22em] text-amber-700">Sakshi Travels</div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50">
            <MessageCircle size={16} /> WhatsApp
          </Link>
          <Link href={business.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300">
            <Phone size={16} /> Call Now
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
            <MessageCircle size={18} />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
