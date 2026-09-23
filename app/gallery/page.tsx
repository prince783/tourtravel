import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { packages } from "@/lib/site-data";

const topGalleryMoments = [
  { src: "/packages/moment1.jpeg", alt: "Travel moment 1" },
  { src: "/packages/moment2.jpeg", alt: "Travel moment 2" },
];

const galleryImages = [
  ...topGalleryMoments,
  ...packages.map((pkg) => ({ src: pkg.image, alt: pkg.name })),
  { src: "/packages/delhi.jpg", alt: "Delhi travel" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 px-4 py-16 md:px-6">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Moments from the journeys"
              description="A curated visual collection inspired by pilgrimage routes, sacred destinations and group travel experiences."
            />
          </Reveal>

          <div className="mt-10 columns-1 gap-5 sm:columns-2 xl:columns-3">
            {galleryImages.map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 100}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="mb-5 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm break-inside-avoid transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-[280px]">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
