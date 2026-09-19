import { PackageCard } from "@/components/PackageCard";
import type { TourPackage } from "@/lib/site-data";

export function PackageGrid({ packages }: { packages: TourPackage[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}
