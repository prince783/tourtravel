import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { business, services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 px-4 pb-20 pt-30 md:px-6 md:pt-30">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="hero-copy max-w-3xl">
              <BlurText
                text="Services"
                delay={100}
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
              />
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                <BlurText text="Travel support designed around your pilgrimage" delay={250} />
              </h1>
              <BlurText
                text="We offer complete guidance and travel support for spiritual journeys, helping families and groups plan a smooth, well-organised pilgrimage with thoughtful route selection, reliable transport coordination, comfortable accommodation arrangements, and practical on-trip assistance. Whether you are travelling for darshan, a family yatra, or a group devotional trip, our approach is focused on reducing stress, saving time, and creating a meaningful experience from the moment you begin planning to the day you return home. From travel planning to practical support, we make each journey easier, safer and more focused on devotion."
                delay={450}
                className="mt-5 block text-base leading-8 text-slate-600 md:text-lg"
              />
              

            </div>

            <Reveal direction="right" delay={200}>
              <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <div className="relative h-64 w-full overflow-hidden md:h-72">
                  <Image
                    src="/abouthome.jpg"
                    alt="Travel planning and pilgrimage support"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="space-y-5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Need help?</p>
                  <h2 className="text-2xl font-bold text-slate-900">Let our team plan your next journey.</h2>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={business.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="wa-button inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </Link>
                    <Link
                      href={business.phoneHref}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
                    >
                      <Phone size={16} /> Call Now
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 120}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="group h-full rounded-[28px] border border-slate-200 bg-white/90 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_18px_35px_rgba(217,119,6,0.10)] backdrop-blur-sm">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-sm">
                    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 md:text-2xl">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
