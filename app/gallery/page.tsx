import Image from "next/image";

import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { galleryGroups } from "@/lib/site-data";

const topGalleryMoments = [
  { src: "/packages/moment1.png", alt: "Travel moment 1" },
  { src: "/packages/moment2.png", alt: "Travel moment 2" },
];

const galleryImages = [
  ...topGalleryMoments,
  ...galleryGroups.flatMap((group) => group.images),
  { src: "/packages/badrinath1.jpg", alt: "Badrinath journey" },
];

const galleryLayout = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 px-4 pt-30 pb-16 md:px-6 md:pt-30">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-copy max-w-2xl">
            <BlurText
              text="Gallery"
              delay={100}
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
            />
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              <BlurText text="Moments from the journeys" delay={250} />
            </h1>
            <BlurText
              text="A curated visual collection inspired by pilgrimage routes, sacred destinations and group travel experiences."
              delay={450}
              className="mt-4 block text-base text-slate-600 md:text-lg"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[220px] md:gap-5">
            {galleryImages.map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 100}
                direction={index % 2 === 0 ? "left" : "right"}
                className={`h-full ${galleryLayout[index % galleryLayout.length]}`}
              >
                <div className="group relative h-full min-h-[18rem] overflow-hidden rounded-[18px] border border-white/80 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.1)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.16)] md:min-h-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute inset-x-4 bottom-4 translate-y-2 text-sm font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {image.alt}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
