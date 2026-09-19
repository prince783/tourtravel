import Link from "next/link";

import { business } from "@/lib/site-data";

type CallButtonProps = {
  label?: string;
  className?: string;
  compact?: boolean;
};

export function CallButton({
  label = "Call Now",
  className = "",
  compact = false,
}: CallButtonProps) {
  return (
    <Link
      href={business.phoneHref}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full border border-amber-400 bg-amber-400 px-5 py-3 font-medium text-slate-900 shadow-sm transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2",
        compact ? "px-4 py-2 text-sm" : "",
        className,
      ].join(" ")}
      aria-label={`${label} for ${business.name}`}
    >
      {compact ? "Call" : label}
    </Link>
  );
}
