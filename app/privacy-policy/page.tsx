import { Navbar } from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-32 md:px-6 md:pt-40">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Your information matters</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: September 23, 2026</p>

          <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
              <p className="mt-3">When you contact us or request a journey, we may receive your name, phone number, destination, travel date, group size and any details you choose to share.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">How we use your information</h2>
              <p className="mt-3">We use enquiry details to respond to your request, recommend suitable travel options, prepare a quotation and coordinate your journey. We do not use the booking form to create an online account or process a payment.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">WhatsApp and third-party services</h2>
              <p className="mt-3">When you choose to continue on WhatsApp, your message is opened in WhatsApp or WhatsApp Web and handled according to WhatsApp&apos;s own privacy policy and terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Sharing and security</h2>
              <p className="mt-3">We do not sell your personal information. We share details only when needed to arrange requested travel services or when required by law. Please avoid sending sensitive information through the website or WhatsApp.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Contact us</h2>
              <p className="mt-3">For questions about this policy or your information, contact Gauri Shyam Sakshi Travels at <a className="font-medium text-amber-700 underline underline-offset-4" href="mailto:gaurisyam.sakshi@gmail.com">gaurisyam.sakshi@gmail.com</a> or +91 97289 86528.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
