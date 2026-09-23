"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
import { useEffect, useState, type KeyboardEvent } from "react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { featuredPackages, getPackageWhatsAppMessage } from "@/lib/site-data";

const AUTOPLAY_DELAY = 4000;

export function FeaturedJourneys() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const activePackage = featuredPackages[activeIndex];

  const previousIndex =
    (activeIndex - 1 + featuredPackages.length) % featuredPackages.length;

  const nextIndex = (activeIndex + 1) % featuredPackages.length;

  const previousPackage = featuredPackages[previousIndex];
  const nextPackage = featuredPackages[nextIndex];

  const isPaused = isFocused;

  useEffect(() => {
    if (isPaused || featuredPackages.length < 2) return;

    const timeoutId = window.setTimeout(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % featuredPackages.length,
      );
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, isPaused]);

  if (!activePackage) return null;

  const goPrevious = () =>
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + featuredPackages.length) % featuredPackages.length,
    );

  const goNext = () =>
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % featuredPackages.length,
    );

  // Click any preview image to make it the main image.
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const pickupPreview = activePackage.pickupPoints.slice(0, 4).join(" • ");
  const pickupRemainder = activePackage.pickupPoints.length - 4;

  return (
    <section
      className="home-section-motion featured-journeys relative overflow-hidden bg-stone-50! px-4 py-20 text-slate-900! md:px-6"
      aria-labelledby="featured-journeys-title"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
    >
      <div
        className="featured-pattern featured-pattern-top"
        aria-hidden="true"
      />

      <div
        className="featured-pattern featured-pattern-bottom"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="featured-heading mx-auto max-w-2xl text-center">
          <p className="featured-eyebrow text-amber-700!">
            Featured journey
          </p>

          <h2
            id="featured-journeys-title"
            className="featured-title font-sans! text-3xl! font-bold! tracking-tight! text-slate-900! md:text-4xl!"
          >
            Discover Sacred Journeys
          </h2>

          <p className="featured-description text-base! text-slate-600! md:text-lg!">
            Travel with comfort, devotion and meaningful experiences across
            India&apos;s most cherished destinations.
          </p>
        </div>

        <div className="mt-4 grid gap-12 lg:mt-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          {/* CONTENT */}
          <div
            className="order-2 lg:-translate-y-8 lg:order-1"
            aria-live="polite"
          >
            <div key={activePackage.id} className="journey-copy">
              <h3 className="journey-title !mb-6 font-sans! text-xl! font-bold! tracking-tight! text-slate-900! md:text-3xl!">
                {activePackage.name}
              </h3>

              <div className="journey-meta mt-2 flex flex-wrap gap-4 text-slate-600!">
                {activePackage.duration ? (
                  <span>
                    <Clock3 size={16} aria-hidden="true" />{" "}
                    {activePackage.duration}
                  </span>
                ) : null}

                {activePackage.date ? (
                  <span>
                    <CalendarDays size={16} aria-hidden="true" />{" "}
                    {activePackage.date}
                  </span>
                ) : null}
              </div>

              <div className="journey-pickup text-slate-600!">
                <MapPin size={18} aria-hidden="true" />

                <p>
                  <strong>Pickup:</strong> {pickupPreview}
                  {pickupRemainder > 0 ? ` + ${pickupRemainder} more` : ""}
                </p>
              </div>

              <p className="journey-price font-sans! text-slate-900!">
                <span>From</span>{" "}
                {activePackage.price ?? "Enquire for price"}
              </p>

              <div className="journey-actions">
                <Link
                  href={`/packages/${activePackage.slug}`}
                  className="journey-primary-action"
                >
                  Explore Journey{" "}
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <WhatsAppButton
                  label="WhatsApp"
                  message={getPackageWhatsAppMessage(activePackage.name)}
                  className="journey-whatsapp"
                />
              </div>
            </div>

            <div
              className="journey-controls mt-4"
              aria-label="Journey slider controls"
            >
              <button
                type="button"
                onClick={goPrevious}
                className="journey-arrow text-base md:text-lg"
                aria-label={`Previous journey, ${previousPackage.name}`}
              >
                <ArrowLeft size={24} strokeWidth={2.2} aria-hidden="true" />
                Previous
              </button>

              <span
                className="journey-counter text-base md:text-lg"
                aria-label={`Slide ${activeIndex + 1} of ${featuredPackages.length}`}
              >
                <strong className="text-lg md:text-xl">
                  {String(activeIndex + 1).padStart(2, "0")}
                </strong>{" "}
                / {String(featuredPackages.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={goNext}
                className="journey-arrow text-base md:text-lg"
                aria-label={`Next journey, ${nextPackage.name}`}
              >
                Next
                <ArrowRight size={24} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* IMAGE GALLERY */}
          <div
            className="journey-gallery order-1 lg:order-2"
            aria-label={`Images for ${activePackage.name}`}
          >
            {/* MAIN CARD */}
            <button
              type="button"
              onClick={() => goToSlide(activeIndex)}
              aria-label={`Current journey: ${activePackage.name}`}
              className="journey-image-main top-[9%]! bottom-[4%]! left-0! right-[59%]! cursor-default rounded-[22px]! border-2 border-[#fff8ed]!"
              style={{
                animation: "none",
                transform: "none",
                rotate: "0deg",
              }}
            >
              <Image
                src={activePackage.image}
                alt={activePackage.name}
                fill
                priority={activeIndex === 0}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </button>

            {/* TOP SMALL CARD - CLICK TO MAKE MAIN */}
            <button
              type="button"
              onClick={() => goToSlide(previousIndex)}
              aria-label={`Show ${previousPackage.name}`}
              className="journey-image-small journey-image-small-top top-[29%]! right-[29%]! w-[28%]! aspect-3/4! cursor-pointer rounded-[22px]! border-[6px] border-[#fff8ed]!"
              style={{
                animation: "none",
                transform: "none",
                rotate: "0deg",
              }}
            >
              <Image
                src={previousPackage.image}
                alt={`${previousPackage.name} preview`}
                fill
                sizes="220px"
                className="object-cover"
              />
            </button>

            {/* RIGHT SMALL CARD - CLICK TO MAKE MAIN */}
            <button
              type="button"
              onClick={() => goToSlide(nextIndex)}
              aria-label={`Show ${nextPackage.name}`}
              className="journey-image-small journey-image-small-bottom top-[20%]! right-0! bottom-auto! w-[28%]! aspect-3/4! cursor-pointer rounded-[22px]! border-[6px] border-[#fff8ed]!"
              style={{
                animation: "none",
                transform: "none",
                rotate: "0deg",
              }}
            >
              <Image
                src={nextPackage.image}
                alt={`${nextPackage.name} preview`}
                fill
                sizes="250px"
                className="object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 