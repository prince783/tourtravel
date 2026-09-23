import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="about-page relative overflow-hidden bg-stone-50 px-4 pt-24 pb-16 md:px-6 md:pt-36">
        <div className="about-background about-background-top" aria-hidden="true" />
        <div className="about-background about-background-bottom" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-copy max-w-2xl">
            <BlurText
              text="Services"
              delay={100}
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-amber-700"
            />
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              <BlurText text="Travel support designed around your pilgrimage" delay={250} />
            </h1>
            <BlurText
              text="We offer guidance and travel arrangements for journeys where the client has confirmed the relevant service scope."
              delay={450}
              className="mt-4 block text-base text-slate-600 md:text-lg"
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 120}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="h-full rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-slate-600">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
