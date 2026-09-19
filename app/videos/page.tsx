import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

const videoCards = [
  { title: "Temple Tour Reel", poster: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80" },
  { title: "Devotional Journey", poster: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" },
  { title: "Group Yatra Highlights", poster: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80" },
];

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Videos"
          title="Travel moments and guided reels"
          description="Client-uploaded video content can be added here with responsive previews and lightbox playback when ready."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videoCards.map((video) => (
            <div key={video.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-72 bg-slate-200">
                <img src={video.poster} alt={video.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/25">
                  <button type="button" className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-slate-900 shadow-lg">
                    ▶
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">{video.title}</h3>
                <p className="mt-2 text-sm text-slate-600">Preview ready for client video content.</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
