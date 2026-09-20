"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { useEffect, useState, type KeyboardEvent } from "react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { featuredPackages, getPackageWhatsAppMessage } from "@/lib/site-data";

const AUTOPLAY_DELAY = 2000;

export function FeaturedJourneys() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const activePackage = featuredPackages[activeIndex];
  const previousPackage =
    featuredPackages[
      (activeIndex - 1 + featuredPackages.length) % featuredPackages.length
    ];
  const nextPackage =
    featuredPackages[(activeIndex + 1) % featuredPackages.length];

  const isPaused = isHovered || isFocused;

  useEffect(() => {
    if (isPaused || featuredPackages.length < 2) return;

    const timeoutId = window.setTimeout(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % featuredPackages.length
      );
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, isPaused]);

  if (!activePackage) return null;

  const goPrevious = () =>
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + featuredPackages.length) %
        featuredPackages.length
    );

  const goNext = () =>
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % featuredPackages.length
    );

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
      className="featured-journeys relative overflow-hidden bg-stone-50! px-4 py-20 text-slate-900! md:px-6"
      aria-labelledby="featured-journeys-title"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        <div className="featured-heading max-w-2xl">
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

        <div className="mt-8 grid gap-12 lg:mt-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          {/* CONTENT */}
          <div className="order-2 lg:order-1" aria-live="polite">
            <div key={activePackage.id} className="journey-copy">
              <p className="journey-type text-amber-700!">Pilgrimage</p>

              <h3 className="journey-title font-sans! text-2xl! font-bold! tracking-tight! text-slate-900! md:text-4xl!">
                {activePackage.name}
              </h3>

              <div className="journey-meta text-slate-600!">
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
                  {pickupRemainder > 0
                    ? ` + ${pickupRemainder} more`
                    : ""}
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
              className="journey-controls"
              aria-label="Journey slider controls"
            >
              <button
                type="button"
                onClick={goPrevious}
                className="journey-arrow"
                aria-label={`Previous journey, ${previousPackage.name}`}
              >
                <ArrowLeft size={17} aria-hidden="true" />
                Previous
              </button>

              <span
                className="journey-counter"
                aria-label={`Slide ${activeIndex + 1} of ${featuredPackages.length}`}
              >
                <strong>
                  {String(activeIndex + 1).padStart(2, "0")}
                </strong>{" "}
                / {String(featuredPackages.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={goNext}
                className="journey-arrow"
                aria-label={`Next journey, ${nextPackage.name}`}
              >
                Next
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* IMAGE GALLERY */}
          <div
            className="journey-gallery order-1 lg:order-2"
            aria-label={`Images for ${activePackage.name}`}
          >
            {/* MAIN CARD */}
            <div
              key={`main-${activePackage.id}`}
              className="journey-image-main top-[9%]! bottom-[4%]! left-0! right-[59%]! rounded-[22px]! border-2 border-[#fff8ed]!"
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
            </div>

            {/* TOP SMALL CARD */}
            <div
              key={`previous-${previousPackage.id}`}
              className="journey-image-small journey-image-small-top top-[29%]! right-[29%]! w-[28%]! aspect-3/4! rounded-[22px]! border-[6px] border-[#fff8ed]!"
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
            </div>

            {/* RIGHT SMALL CARD */}
            <div
              key={`next-${nextPackage.id}`}
              className="journey-image-small journey-image-small-bottom top-[20%]! right-0! bottom-auto! w-[28%]! aspect-3/4! rounded-[22px]! border-[6px] border-[#fff8ed]!"
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
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}