import Link from "next/link";

import { business, getWhatsAppUrl } from "@/lib/site-data";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  className?: string;
  compact?: boolean;
};

export function WhatsAppButton({
  label = "WhatsApp Us",
  message = "Hello, I would like to know more about Gauri Shyam Sakshi Travels tour packages.",
  className = "",
  compact = false,
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(message);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500 bg-emerald-500 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2",
        compact ? "px-4 py-2 text-sm" : "",
        className,
      ].join(" ")}
      aria-label={`${label} for ${business.name}`}
    >
      {compact ? "WhatsApp" : label}
    </Link>
  );
}
