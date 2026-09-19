import { Navbar } from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-slate-600">
          <p>This placeholder policy is intended for client review and completion before deployment.</p>
          <p>We use the information provided through the enquiry form only to respond to user requests and share travel information relevant to the enquiry.</p>
          <p>Contact details are not shared publicly unless required for travel coordination and communication.</p>
        </div>
      </main>
    </>
  );
}
