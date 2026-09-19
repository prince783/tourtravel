import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="About us"
          title="Meaningful journeys with thoughtful guidance"
          description="Gauri Shyam Sakshi Travels is committed to creating spiritually enriching travel experiences rooted in comfort, care and trust."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Travel representative portrait"
              width={900}
              height={1000}
              className="h-full w-full rounded-[22px] object-cover"
            />
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Based in Yamuna Nagar, Haryana, Gauri Shyam Sakshi Travels serves families and devotees who value reliable travel support and peaceful pilgrimage experiences.
            </p>
            <p>
              We focus on creating organised, respectful and comfortable travel plans for spiritual destinations, temple visits and group journeys.
            </p>
            <p>
              Our approach highlights clarity, convenience and personal attention while keeping the journey focused on devotion and memorable experiences.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { title: "Our travel philosophy", text: "Every trip should balance spiritual purpose with comfort, clarity and peace of mind." },
            { title: "Who we help", text: "Families, devotees and groups planning pilgrimage tours and destination-based travel." },
            { title: "Why choose us", text: "Simple communication, organised group travel support and a premium travel experience." },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
