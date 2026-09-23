"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { business } from "@/lib/site-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tempo", href: "/tempo-travellers" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const vehicleOffset = `${scrollProgress * 100}%`;
  const vehicleExitOffset = `${scrollProgress * 180}px`;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);

      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight - 220, 1);
      const rawProgress = window.scrollY / maxScroll;
      setScrollProgress(Math.min(Math.max(rawProgress, 0), 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 transition-all duration-300 " +
        (scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-white/82 backdrop-blur-md")
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center" aria-label="Gauri Shyam Sakshi Travels home">
          <div className="relative h-10 w-[170px] overflow-hidden sm:h-12 sm:w-[220px] md:h-14 md:w-[260px]">
            <Image
              src="/logo/gauri.png"
              alt="Gauri Shyam Sakshi Travels logo"
              fill
              sizes="(max-width: 640px) 170px, (max-width: 768px) 220px, 260px"
              className="object-contain p-1"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-1.5 lg:-ml-4 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link group relative inline-flex items-center px-2.5 py-2 text-sm font-semibold tracking-[0.02em] text-slate-700">
              <span className="nav-link-label relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer" className="wa-nav-button inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-white transition">
            <MessageCircle size={16} /> WhatsApp
          </Link>
          <Link href={business.phoneHref} className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300">
            <Phone size={16} /> Call Now
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer" className="wa-nav-button inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm">
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

      <div className="transport-divider bg-[#09090b]">
        <div className="mx-auto max-w-7xl overflow-hidden px-2 py-1.5">
          <div className="transport-navbar-track" aria-hidden="true">
            <svg
              viewBox="0 0 520 80"
              className="travel-vehicle"
              role="presentation"
              aria-hidden="true"
              style={{
                left: `calc(${vehicleOffset} + ${vehicleExitOffset})`,
              }}
            >
              <defs>
                <linearGradient id="vehicleBody" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="65%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                <linearGradient id="vehicleGlass" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f8fafc" />
                </linearGradient>
              </defs>

              <ellipse cx="260" cy="72" rx="180" ry="9" className="travel-vehicle-shadow" />

              <g className="travel-vehicle-body">
                <path d="M38 51 L90 51 L124 37 L222 37 L257 51 L328 51 L358 44 L405 44 L440 51 L468 51 L478 58 L491 58 L491 63 L32 63 L32 58 L38 58 Z" fill="url(#vehicleBody)" stroke="#c9d5df" strokeWidth="1.3" />
                <path d="M118 38 L186 38 L214 28 L278 28 L299 38 L344 38 L331 51 L110 51 Z" fill="url(#vehicleGlass)" stroke="#b0c4d5" strokeWidth="1.2" />
                <path d="M333 44 L380 44 L410 52 L333 52 Z" fill="#e8f0f7" stroke="#c9d5df" strokeWidth="1.2" />
                <path d="M408 44 L440 44 L468 51 L408 51 Z" fill="#edf3f8" stroke="#c9d5df" strokeWidth="1.2" />
                <path d="M81 52 L111 52" stroke="#d8e2ea" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M294 52 L328 52" stroke="#d8e2ea" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M364 52 L404 52" stroke="#d8e2ea" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="108" cy="63" r="12" fill="#dfe7ef" stroke="#8a9aad" strokeWidth="2" />
                <circle cx="108" cy="63" r="5" fill="#7a8ca0" />
                <circle cx="364" cy="63" r="12" fill="#dfe7ef" stroke="#8a9aad" strokeWidth="2" />
                <circle cx="364" cy="63" r="5" fill="#7a8ca0" />
                <path d="M32 58 L38 58 L38 51 L66 51" fill="none" stroke="#e0a02a" strokeWidth="3" strokeLinecap="round" />
                <path d="M381 44 L385 35 L429 35 L429 44" fill="none" stroke="#d5dee7" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>

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
