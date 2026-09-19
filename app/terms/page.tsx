import { Navbar } from "@/components/Navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <h1 className="text-4xl font-bold text-slate-900">Terms & Conditions</h1>
        <div className="mt-8 space-y-5 text-slate-600">
          <p>This placeholder document is included for client review and completion before final deployment.</p>
          <p>Travel package information, dates, pricing, and inclusions are subject to confirmation and may vary based on client updates and operational requirements.</p>
          <p>Visitors are encouraged to contact the business directly for the latest details before finalising travel plans.</p>
        </div>
      </main>
    </>
  );
}
