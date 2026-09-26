import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CallButton } from "@/components/CallButton";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, getPackageBySlug, getPackageWhatsAppMessage } from "@/lib/site-data";

export default async function PackageDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    getPackageWhatsAppMessage(pkg.name)
  )}`;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pt-30 pb-10 md:px-6 md:pt-30">
        <Reveal>
          <nav className="mb-8 text-sm text-slate-600">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/packages">Packages</Link>
              <span>/</span>
              <span className="text-slate-900">{pkg.name}</span>
            </div>
          </nav>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="left">
            <div>
              <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image src={pkg.image} alt={pkg.name} fill unoptimized sizes="100vw" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={140}>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Package</p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">{pkg.name}</h1>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                {pkg.price ? <span className="rounded-full bg-amber-50 px-3 py-1.5 font-semibold text-amber-800">{pkg.price}</span> : null}
                {pkg.date ? <span className="rounded-full bg-slate-100 px-3 py-1.5">{pkg.date}</span> : null}
                {pkg.duration ? <span className="rounded-full bg-slate-100 px-3 py-1.5">{pkg.duration}</span> : null}
              </div>

              {pkg.description ? <p className="mt-6 text-base leading-7 text-slate-600">{pkg.description}</p> : null}

              <div className="mt-6 space-y-3">
                <WhatsAppButton label="WhatsApp Enquiry" message={getPackageWhatsAppMessage(pkg.name)} className="w-full" />
                <CallButton className="w-full" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6">
              <SectionHeading title="Overview" />
              <ul className="mt-5 space-y-3 text-slate-600">
                {pkg.pickupPoints.length ? <li><strong className="text-slate-900">Pickup points:</strong> {pkg.pickupPoints.join(", ")}</li> : null}
                {pkg.transport ? <li><strong className="text-slate-900">Transport:</strong> {pkg.transport}</li> : null}
                {pkg.accommodation ? <li><strong className="text-slate-900">Accommodation:</strong> {pkg.accommodation}</li> : null}
                {pkg.meals?.length ? <li><strong className="text-slate-900">Meals:</strong> {pkg.meals.join(", ")}</li> : null}
                {pkg.advance ? <li><strong className="text-slate-900">Advance:</strong> {pkg.advance}</li> : null}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6">
              <SectionHeading title="Places to visit" />
              <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
                {pkg.placesToVisit.map((place) => <li key={place}>{place}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6">
            <SectionHeading title="Inclusions & important information" />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Inclusions</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                  {(pkg.inclusions ?? ["Package details pending confirmation"]).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Important note</h3>
                <p className="mt-3 text-slate-600">
                  Please confirm the latest dates, pickup points and availability before planning your journey. Information shown here is client-provided reference content and may require update.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="mt-10 rounded-[28px] bg-slate-900 p-8 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Need help?</p>
                <h2 className="mt-2 text-2xl font-bold">Get the latest details for {pkg.name}</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 font-medium text-white">WhatsApp</a>
                <a href={business.phoneHref} className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 font-medium text-slate-900">Call Now</a>
              </div>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
