import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Travel support designed around your pilgrimage"
          description="We offer guidance and travel arrangements for journeys where the client has confirmed the relevant service scope."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
