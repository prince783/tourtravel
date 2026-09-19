import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { packages } from "@/lib/site-data";

const galleryImages = [
  ...packages.map((pkg) => ({ src: pkg.image, alt: pkg.name })),
  { src: "/packages/delhi.jpg", alt: "Delhi travel" },
  { src: "/packages/kedharnath.webp", alt: "Kedarnath pilgrimage" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the journeys"
          description="A curated visual collection inspired by pilgrimage routes, sacred destinations and group travel experiences."
        />

        <div className="mt-10 columns-1 gap-5 sm:columns-2 xl:columns-3">
          {galleryImages.map((image) => (
            <div key={image.src} className="mb-5 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm break-inside-avoid">
              <div className="relative h-[280px]">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
