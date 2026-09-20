"use client";

import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const videoCards = [
  { title: "Temple Tour Reel", src: "/videos/templereel.mp4" },
  { title: "Devotional Journey", src: "/videos/devotional.mp4" },
  { title: "Group Yatra Highlights", src: "/videos/yatra.mp4" },
];

export default function VideosPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const playVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    void video.play();
  };

  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 px-4 py-16 md:px-6">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Videos"
              title="Travel moments and guided reels"
              description="Client-uploaded video content can be added here with responsive previews and lightbox playback when ready."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videoCards.map((video, index) => (
              <Reveal
                key={video.title}
                delay={index * 120}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-72 bg-slate-200">
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      src={video.src}
                      title={video.title}
                      preload="metadata"
                      onPlay={() => setPlayingIndex(index)}
                      onPause={() => setPlayingIndex(null)}
                      onEnded={() => setPlayingIndex(null)}
                      className="h-full w-full object-cover"
                    />
                    {playingIndex !== index ? (
                      <button
                        type="button"
                        onClick={() => playVideo(index)}
                        aria-label={`Play ${video.title}`}
                        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-slate-900 shadow-lg transition hover:scale-105 hover:bg-white"
                      >
                        <span aria-hidden="true">&#9654;</span>
                      </button>
                    ) : null}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900">{video.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">Preview ready for client video content.</p>
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
