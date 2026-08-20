import { cn } from "@/lib/utils";

export const SITE = {
  name: "ND Gill Lawn Care Services",
  short: "ND Gill",
  tagline: "Winnipeg's Trusted Lawn Care & Snow Removal Team",
  phone: "(431) 997-9237",
  phoneRaw: "+14319979237",
  email: "service@ndgilllawncare.ca",
  address: "512 Mandalay Dr, Winnipeg, MB R2P 2C9",
  rating: "5.0",
  reviewCount: "15+",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=ND+Gill+Lawn+Care+Services+512+Mandalay+Dr+Winnipeg+MB+R2P+2C9",
} as const;

export const SERVICE_AREAS = [
  "Winnipeg",
  "West Kildonan",
  "North Kildonan",
  "St. Boniface",
  "Transcona",
  "Garden City",
  "The Maples",
  "River East",
  "St. Vital",
  "Charleswood",
  "Tuxedo",
  "Whyte Ridge",
];

export function BrandMark({
  className,
  tone = "primary",
}: {
  className?: string;
  tone?: "primary" | "light";
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-md",
        tone === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-background/10 text-background ring-1 ring-background/20",
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-1/2 w-1/2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 22c0-7 6-14 20-14-1 12-9 18-20 18z" />
        <path d="M6 22c2-6 8-10 14-12" />
      </svg>
    </span>
  );
}
