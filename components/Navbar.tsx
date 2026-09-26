"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
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
          <div className="relative h-14 w-[210px] max-w-[calc(100vw-88px)] overflow-hidden sm:h-12 sm:w-[220px] md:h-14 md:w-[260px]">
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
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "nav-link group relative inline-flex items-center px-2.5 py-2 text-sm font-semibold tracking-[0.02em] " +
                  (isActive ? "active text-slate-900" : "text-slate-700")
                }
              >
                <span className="nav-link-label relative z-10">{item.label}</span>
              </Link>
            );
          })}
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

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "rounded-xl px-3 py-2 text-base font-medium transition " +
                    (isActive ? "bg-amber-100 text-slate-900" : "text-slate-700 hover:bg-slate-100")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
