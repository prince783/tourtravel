"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const testimonials = [
  {
    initials: "RP",
    name: "Rajesh & Priya M.",
    route: "Mumbai · Char Dham",
    time: "2 weeks ago",
    text: "Char Dham yatra with Gauri Shyam Sakshi Travels was life-changing. Seamless arrangements, comfortable stays, and knowledgeable guides made every moment peaceful.",
  },
  {
    initials: "AK",
    name: "Amit K.",
    route: "Delhi · Kashi Ayodhya",
    time: "1 month ago",
    text: "We travelled with our parents and felt cared for at every step. The team helped with travel details, timings and pickups to make the yatra truly comfortable.",
  },
  {
    initials: "SD",
    name: "Sunita D.",
    route: "Bangalore · Vaishno Devi",
    time: "3 weeks ago",
    text: "Everything from travel to stay was smoothly arranged. The journey felt peaceful, organised and full of beautiful memories for our family.",
  },
  {
    initials: "VM",
    name: "Vikram M.",
    route: "Chandigarh · Haridwar Rishikesh",
    time: "1 week ago",
    text: "The entire trip was thoughtfully planned and easy to follow. Our family enjoyed a comfortable journey with helpful support whenever we needed it.",
  },
];

export function TestimonialsCarousel() {
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);

    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const slidesToShow =
    viewportWidth === null ? 3 : viewportWidth < 640 ? 1 : viewportWidth < 1024 ? 2 : 3;

  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    dotsClass: "slick-dots !bottom-[-8px]",
    infinite: true,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow,
    speed: 700,
    swipeToSlide: true,
  };

  return (
    <section className="testimonials-section relative overflow-hidden px-4 py-16 md:px-6 md:py-20">
      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="What pilgrims say"
            title="Voices of Devotion"
            description="Hear from families and pilgrims who travelled with us to create peaceful, meaningful and memorable journeys."
            align="center"
          />
        </Reveal>

        {/* Rating */}
        <Reveal delay={100}>
          <div className="mb-10 mt-8 flex justify-center">
            <div className="flex w-fit items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div>
                <div className="flex items-center gap-2">
                  <strong className="text-2xl font-bold text-slate-900">
                    5.0
                  </strong>

                  <span
                    className="text-lg tracking-wide text-amber-500"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Based on 5 Google reviews
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Testimonials Slider */}
        <Reveal delay={180}>
          <Slider key={viewportWidth} {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="px-2.5 pb-8">
                <article className="testimonial-card group relative flex min-h-[310px] flex-col rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.11)]">

                  {/* Quote */}
                  <div className="absolute right-6 top-5 text-5xl font-serif leading-none text-amber-100">
                    “
                  </div>

                  {/* Stars + Time */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className="text-sm tracking-[0.15em] text-amber-500"
                      aria-label="5 out of 5 stars"
                    >
                      ★★★★★
                    </span>

                    <span className="text-xs text-slate-400">
                      {testimonial.time}
                    </span>
                  </div>

                  {/* Review */}
                  <p className="relative mt-6 flex-1 text-[15px] leading-7 text-slate-600">
                    “{testimonial.text}”
                  </p>

                  {/* User */}
                  <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#681e2a] text-sm font-bold text-white shadow-sm">
                      {testimonial.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-bold text-slate-900">
                        {testimonial.name}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-slate-500">
                        {testimonial.route}
                      </p>
                    </div>

                    <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
                      Verified
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </Reveal>

      </div>
    </section>
  );
}