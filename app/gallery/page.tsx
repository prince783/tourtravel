import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

const galleryImages = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1534996858221-380b92700493?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1603250840238-0c9d9ca8ea53?auto=format&fit=crop&w=1200&q=80",
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
          {galleryImages.map((src, index) => (
            <div key={src} className="mb-5 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm break-inside-avoid">
              <div className="relative h-[280px]">
                <Image src={src} alt={`Travel gallery image ${index + 1}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
