"use client";

import { useRef, useState } from "react";
import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";

const videoCards = [
  { title: "Temple Tour Reel", src: "/videos/templetours.mp4" },
  { title: "Pilgrimage Moments", src: "/videos/video1.mp4" },
  { title: "Sacred Journey", src: "/videos/video2.mp4" },
  { title: "Family Yatra Highlights", src: "/videos/video3.mp4" },
  { title: "Travel Experience", src: "/videos/WhatsApp Video 2026-09-21 at 11.56.32.mp4" },
];

export default function VideosPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const playVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const isPlaying = playingIndex === index && !video.paused;

    if (isPlaying) {
      video.pause();
      setPlayingIndex(null);
      return;
    }

    videoRefs.current.forEach((item, currentIndex) => {
      if (item && currentIndex !== index) {
        item.pause();
      }
    });

    void video.play()
      .then(() => setPlayingIndex(index))
      .catch(() => setPlayingIndex(null));
  };

  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 px-4 pt-24 pb-16 md:px-6 md:pt-36">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-copy max-w-2xl">
            <BlurText
              text="Videos"
              delay={100}
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
            />
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              <BlurText text="Travel moments and guided reels" delay={250} />
            </h1>
            <BlurText
              text="Client-uploaded video content can be added here with responsive previews and lightbox playback when ready."
              delay={450}
              className="mt-4 block text-base text-slate-600 md:text-lg"
            />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {videoCards.map((video, index) => (
              <Reveal
                key={video.title}
                delay={index * 120}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-56 bg-slate-200 sm:h-60 lg:h-64">
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      src={video.src}
                      title={video.title}
                      preload="metadata"
                      playsInline
                      onPlay={() => setPlayingIndex(index)}
                      onPause={() => {
                        setPlayingIndex((current) => (current === index ? null : current));
                      }}
                      onEnded={() => setPlayingIndex(null)}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        playVideo(index);
                      }}
                      className="h-full w-full object-cover"
                    />
                    {playingIndex === index ? null : (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          playVideo(index);
                        }}
                        aria-label={`Play ${video.title}`}
                        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-slate-900 shadow-lg transition hover:scale-105 hover:bg-white"
                      >
                        <span aria-hidden="true">&#9654;</span>
                      </button>
                    )}
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{video.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">Pilgrimage travel moments captured during the journey.</p>
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
