"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown, Headphones, MapPin, Phone, ShieldCheck, Sparkles, User, Users } from "lucide-react";
import { type FormEvent, useState } from "react";

import { BlurText } from "@/components/BlurText";
import { CallButton } from "@/components/CallButton";
import { FeaturedJourneys } from "@/components/FeaturedJourneys";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { YatraCalendar } from "@/components/YatraCalendar";
import { business, destinations, galleryGroups } from "@/lib/site-data";

const WHATSAPP_BUSINESS_NUMBER = business.whatsappNumber;
const homeTempoVehicles = [
  {
    name: "12 Seater Tempo Traveller",
    image: "/tempo/tempo12.png",
    capacity: "Up to 12 travellers",
    description: "A comfortable choice for families and small yatra groups.",
  },
  {
    name: "16 Seater Tempo Traveller",
    image: "/tempo/tempo16.png",
    capacity: "Up to 16 travellers",
    description: "Extra room for larger family groups travelling together.",
  },
  {
    name: "18 Seater Tempo Traveller",
    image: "/tempo/tempo18.png",
    capacity: "Up to 18 travellers",
    description: "Spacious travel for organised groups and multi-day trips.",
  },
];
const homeGalleryImages = galleryGroups
  .flatMap((group) => group.images.slice(0, 1))
  .slice(0, 5);
const galleryLayout = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isBookingLoading, setIsBookingLoading] = useState(false);

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const destination = String(formData.get("destination") ?? "").trim();
    const travelDate = String(formData.get("travelDate") ?? "").trim();
    const travelers = String(formData.get("travelers") ?? "").trim();

    if (!name || !phone || !destination || !travelDate || !travelers) {
      form.reportValidity();
      return;
    }

    setIsBookingLoading(true);

    const message = [
      "Hello Gauri Shyam Sakshi Travels,",
      "",
      "I would like to book a pilgrimage journey.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Destination: ${destination}`,
      `Travel Date: ${travelDate}`,
      `Travelers: ${travelers}`,
      "",
      "Please share the available packages and details.",
      "",
      "Thank you.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    window.setTimeout(() => setIsBookingLoading(false), 700);
  };

  const faqItems = [
    {
      question: "Which pilgrimage destinations do you cover?",
      answer:
        "We offer a wide range of sacred and spiritual journeys including major yatra routes, temple circuit tours, family pilgrimage packages and curated group travel experiences across India.",
    },
    {
      question: "Can I customize a package for my family or group?",
      answer:
        "Absolutely. We can tailor trip dates, accommodation, vehicle type and route preferences to match your comfort level, group size and travel schedule.",
    },
    {
      question: "Do you provide Tempo Traveller for group travel?",
      answer:
        "Yes. Our Tempo Traveller options are designed for comfortable pilgrimage and family travel, with seating choices suited to small and medium group journeys.",
    },
    {
      question: "How do I book my tour with Gauri Shyam Sakshi Travels?",
      answer:
        "You can contact us directly via WhatsApp, phone or the enquiry form on our website. We will guide you through package options, pricing and trip planning.",
    },
    {
      question: "Do you help with travel planning for long-distance yatras?",
      answer:
        "Yes. We help travellers plan important details such as route suggestions, suitable travel timings, comfort planning and support throughout the journey.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-stone-50 text-slate-900 pt-20 md:pt-20">
        <section className="home-section-motion relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-label="Pilgrimage travel experiences"
              className="hero-video h-full w-full object-cover"
            >
              <source src="/HeroVideo/tourvideo.mp4" type="video/mp4" />
            </video>
            <div className="home-hero-overlay absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="relative mx-auto grid min-h-170 max-w-7xl items-center gap-12 px-4 py-20 md:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-10 lg:py-24">
            <div className="hero-copy max-w-2xl text-white">
              <BlurText
                text="Premium Pilgrimage Tours"
                delay={100}
                className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300"
              />
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                <BlurText
                  text="Divine Journeys, Lifetime Memories"
                  delay={250}
                />
              </h1>
              <BlurText
                text="Gauri Shyam Sakshi Travels helps families and groups plan spiritually uplifting journeys with comfortable travel, trusted support and memorable experiences."
                delay={450}
                className="mt-6 block max-w-xl text-lg text-slate-200 md:text-xl"
              />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Explore Packages
                </Link>
                <WhatsAppButton
                  message="Hello, I would like to know more about Gauri Shyam Sakshi Travels tour packages."
                  className="bg-emerald-600"
                />
                <CallButton />
              </div>
            </div>

            <div className="hero-booking-card isolate w-full max-w-[420px] justify-self-center rounded-[26px] border border-white/25 bg-white/[0.13] p-5 text-white shadow-[0_24px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-6 lg:justify-self-end">
              <div className="absolute inset-0 z-0 rounded-[26px] bg-[linear-gradient(145deg,rgba(255,255,255,0.16),transparent_45%,rgba(251,191,36,0.1))]" aria-hidden="true" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-200">Start planning</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Book Your Journey</h2>
                <p className="mt-2 text-sm text-slate-200">Plan your pilgrimage with us</p>
              </div>

              <form className="relative z-10 mt-5 space-y-3" onSubmit={handleBookingSubmit}>
                <label className="booking-field">
                  <span className="sr-only">Name</span>
                  <User size={17} aria-hidden="true" />
                  <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
                </label>
                <label className="booking-field">
                  <span className="sr-only">Phone Number</span>
                  <Phone size={17} aria-hidden="true" />
                  <input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" required />
                </label>
                <label className="booking-field">
                  <span className="sr-only">Destination</span>
                  <MapPin size={17} aria-hidden="true" />
                  <input name="destination" type="text" placeholder="Preferred destination" required />
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="booking-field">
                    <span className="sr-only">Travel Date</span>
                    <CalendarDays size={17} aria-hidden="true" />
                    <input name="travelDate" type="date" aria-label="Travel date" required />
                  </label>
                  <label className="booking-field">
                    <span className="sr-only">Number of Travelers</span>
                    <Users size={17} aria-hidden="true" />
                    <input name="travelers" type="number" min="1" placeholder="Travelers" aria-label="Number of travelers" required />
                  </label>
                </div>
                <button type="submit" disabled={isBookingLoading} className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-5 py-3.5 font-semibold text-slate-950 shadow-[0_10px_24px_rgba(251,191,36,0.22)] transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 disabled:cursor-wait disabled:opacity-75">
                  {isBookingLoading ? "Preparing WhatsApp..." : "Continue on WhatsApp"}
                </button>
              </form>
              <p className="mt-4 text-center text-xs text-slate-200/85">Quick response <span aria-hidden="true">•</span> Trusted travel support</p>
            </div>
          </div>
        </section>

        <section className="home-section-motion about-page relative overflow-hidden bg-stone-50 px-4 pt-10 pb-5 md:px-6">
          <div className="about-background about-background-top" aria-hidden="true" />
          <div className="about-background about-background-bottom" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
            <Reveal
              className="overflow-hidden rounded-[28px] shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              direction="left"
            >
              <Image
                src="/abouthome.jpg"
                alt="Gauri Shyam Sakshi Travels representative"
                width={900}
                height={1000}
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={140}>
              <SectionHeading
                eyebrow="About the brand"
                title="Travel that feels personal, spiritual and seamless."
                description="Gauri Shyam Sakshi Travels is a pilgrimage and tour travel brand based in Yamuna Nagar, Haryana, focused on meaningful journeys and group travel support."
              />
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We aim to make each trip comfortable, well-organised and
                spiritually enriching for families, devotees and groups planning
                their next sacred journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  Learn More
                </Link>
                <WhatsAppButton label="Ask on WhatsApp" compact />
              </div>
            </Reveal>
            </div>
          </div>
        </section>

        <FeaturedJourneys />

        <section className="home-section-motion relative overflow-hidden bg-[#fffaf2] px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
                  Group travel made easy
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Tempo Traveller for every sacred journey
                </h2>
                <p className="mt-4 text-base text-slate-600 md:text-lg">
                  Spacious, dependable and comfortable travel for pilgrimage groups, family outings and multi-stop spiritual trips across India.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {homeTempoVehicles.map((vehicle, index) => (
                <Reveal key={vehicle.name} delay={index * 100} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                        <Users size={15} aria-hidden="true" /> {vehicle.capacity}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-slate-900">{vehicle.name}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{vehicle.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/tempo-travellers"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                View all options <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </section>

<section className="home-section-motion destination-showcase relative overflow-hidden px-4 py-16 md:px-6 md:py-20">        
    <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Sacred destinations"
                title="Discover Divine Abodes"
                description="From the Himalayas to the Ganges, embark on journeys that touch the soul."
                align="center"
              />
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {destinations.slice(0, 4).map((destination, index) => (
                <Reveal key={destination.slug} delay={index * 100}>
                  <Link
                    href={`/destinations#${destination.slug}`}
                    className="destination-showcase-card group relative block h-80 overflow-hidden rounded-[22px] shadow-[0_16px_35px_rgba(93,29,41,0.16)]"
                  >
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <p className="mt-1 text-sm text-slate-200">{destination.description}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180}>
              <div className="mt-10 text-center">
                <Link
                  href="/destinations"
                  className="inline-flex items-center rounded-full border border-amber-700/40 px-6 py-3 font-semibold text-[#681e2a] transition hover:bg-amber-100"
                >
                  View all destinations
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="home-section-motion relative overflow-hidden bg-stone-50 px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
                Sacred moments
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Gallery
              </h2>
              <p className="mt-4 text-base text-slate-600 md:text-lg">
                Glimpses from our pilgrimage destinations across India.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-55 md:gap-5">
              {homeGalleryImages.map((image, index) => (
                <Reveal
                  key={image.src}
                  delay={index * 100}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={`h-full ${galleryLayout[index % galleryLayout.length]}`}
                >
                  <Link
                    href="/gallery"
                    aria-label={`Explore gallery: ${image.alt}`}
                    className="group relative block h-full min-h-72 overflow-hidden rounded-[18px] border border-white/80 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.1)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.16)] md:min-h-0"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                    <p className="absolute inset-x-4 bottom-4 translate-y-2 text-left text-sm font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {image.alt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180}>
              <div className="mt-10 text-center">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-700/40 px-6 py-3 font-semibold text-[#681e2a] transition hover:bg-amber-100"
                >
                  Explore full gallery <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="home-section-motion relative overflow-hidden px-4 py-16 md:px-6 md:py-20">
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal direction="left" className="mx-auto w-full max-w-md">
              <div className="relative aspect-4/5 overflow-hidden rounded-[28px] border border-white shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
                <Image
                  src="/packages/vrindavan.jpg"
                  alt="Badrinath temple and Himalayan pilgrimage landscape"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="max-w-2xl">
                <div className="mb-4 h-0.5 w-12 bg-amber-500" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">How it works</p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-2">
                  Start your journey in 4 easy steps
                </h2>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      number: "1",
                      title: "Choose your yatra",
                      text: "Browse our curated packages and choose the pilgrimage that calls to you.",
                    },
                    {
                      number: "2",
                      title: "Share your details",
                      text: "Tell us your travel dates, group size and any special requests so we can guide you well.",
                    },
                    {
                      number: "3",
                      title: "Confirm and prepare",
                      text: "Receive your itinerary and confirmation with practical guidance for the journey ahead.",
                    },
                    {
                      number: "4",
                      title: "Begin your journey",
                      text: "Travel with peace of mind while our team supports you every step of the way.",
                    },
                  ].map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400 bg-white text-lg font-bold text-slate-900">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 md:text-lg">{step.title}</h3>
                        <p className="mt-1 max-w-xl leading-7 text-slate-600">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/packages"
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Start your journey
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <YatraCalendar />

        <TestimonialsCarousel />

        <section className="home-section-motion relative overflow-hidden px-4 py-16 md:px-6 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,247,237,0.55))]" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
                  Frequently asked questions
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Everything you need to know before booking
                </h2>
                <p className="mt-4 text-base text-slate-600 md:text-lg">
                  Clear answers for a smoother, more comfortable pilgrimage planning experience.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal direction="left" className="hidden lg:block">
                <div className="faq-visual rounded-[32px] border border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 shadow-[0_30px_60px_rgba(120,53,15,0.08)]">
                  <div className="rounded-[26px] bg-slate-900 p-6 text-white shadow-[0_25px_45px_rgba(15,23,42,0.18)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300">
                      Travel support
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">Need a custom itinerary?</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Our team helps plan comfortable journeys with personal attention, transparent guidance and stress-free travel support.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        "Personalized trip guidance",
                        "Group travel planning",
                        "Comfort-first itinerary support",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">
                            ✓
                          </span>
                          <span className="text-sm text-slate-100">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="space-y-4">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <Reveal key={item.question} delay={index * 80}>
                      <div className={`faq-item rounded-[28px] border ${isOpen ? "border-amber-300 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.06)]" : "border-slate-200 bg-white/80 shadow-[0_10px_25px_rgba(15,23,42,0.025)]"}`}>
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : index)}
                          className="faq-question flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                          aria-expanded={isOpen}
                        >
                          <span className="text-base font-semibold text-slate-900 md:text-lg">
                            {item.question}
                          </span>
                          <span
                            className={`faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-amber-300 bg-amber-100 text-amber-700" : "border-slate-200 bg-slate-50 text-slate-700"}`}
                          >
                            <ChevronDown size={18} className={isOpen ? "rotate-180" : "rotate-0"} />
                          </span>
                        </button>

                        <div
                          className="faq-answer-wrapper grid transition-all duration-500 ease-out"
                          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 pb-5 pt-0 text-sm leading-7 text-slate-600 md:px-6 md:text-base">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="home-section-motion relative overflow-hidden bg-stone-50 px-4 py-16 md:px-6 md:py-20">
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Why choose us"
                title="Travel with confidence and care"
                description="We combine thoughtful planning with personal support so your pilgrimage feels safe, smooth and spiritually fulfilling."
                align="center"
              />
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Safe & comfortable",
                  text: "We prioritise your safety and comfort with reliable arrangements, experienced guidance and well-planned itineraries for every yatra.",
                },
                {
                  icon: Sparkles,
                  title: "Curated experiences",
                  text: "From Char Dham to Kashi Ayodhya, each journey is thoughtfully designed to honour tradition while creating smooth, memorable experiences.",
                },
                {
                  icon: Headphones,
                  title: "Personal support",
                  text: "Our team stays available before, during and after your pilgrimage, helping you travel with clarity and confidence.",
                },
              ].map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 120}>
                  <article className="about-value-card h-full rounded-[28px] bg-slate-900 p-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
                      <Icon size={23} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section-motion mx-auto max-w-7xl px-4 pt-2 pb-3 md:px-6">
          <Reveal direction="right">
            <div className="cta-panel rounded-4xl bg-slate-900 px-6 py-10 text-white md:px-10 md:py-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                    Need assistance?
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">
                    Talk to us for the latest package details.
                  </h2>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton
                    label="WhatsApp Enquiry"
                    className="bg-emerald-500 text-white"
                  />
                  <CallButton className="bg-amber-400 text-slate-900" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
