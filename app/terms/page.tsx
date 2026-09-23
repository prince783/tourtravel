import { Navbar } from "@/components/Navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-32 md:px-6 md:pt-40">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Before you travel</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: September 23, 2026</p>

          <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Enquiries and bookings</h2>
              <p className="mt-3">Information submitted through this website or WhatsApp is an enquiry only. A booking becomes effective after the itinerary, availability, price and payment requirements have been confirmed directly by Gauri Shyam Sakshi Travels.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Package information</h2>
              <p className="mt-3">Destinations, dates, accommodation, transport, inclusions and prices are subject to availability and confirmation. We may update package details when operating conditions, supplier availability or client requirements change.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Payments and cancellation</h2>
              <p className="mt-3">Any advance payment, balance payment, cancellation charge or refund condition will be communicated before confirmation. Please request the applicable terms for your selected package before making a payment.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Traveller responsibilities</h2>
              <p className="mt-3">Travellers are responsible for providing accurate contact and passenger information, arriving at agreed pickup points on time, carrying required identification and following applicable travel and safety instructions.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p className="mt-3">For the latest itinerary, availability or package terms, contact Gauri Shyam Sakshi Travels at +91 97289 86528 or <a className="font-medium text-amber-700 underline underline-offset-4" href="mailto:gaurisyam.sakshi@gmail.com">gaurisyam.sakshi@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
