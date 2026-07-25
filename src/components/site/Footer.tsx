import {
  Award,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  Trees,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { BrandMark, SERVICE_AREAS, SITE } from "./Brand";

const SERVICES = [
  { label: "Lawn Mowing", icon: Trees, to: "/services" },
  { label: "Trimming & Edging", icon: Trees, to: "/services" },
  { label: "Snow Removal", icon: Snowflake, to: "/services" },
  { label: "Salting & De-icing", icon: Snowflake, to: "/services" },
  { label: "Spring & Fall Cleanup", icon: Trees, to: "/services" },
  { label: "Seasonal Contracts", icon: Trees, to: "/services" },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate bg-foreground text-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 pt-16 pb-10">
        {/* Trust band */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between pb-12 border-b border-background/15">
          <div className="flex items-center gap-4">
            <BrandMark className="h-14 w-14" tone="light" />
            <div>
              <div className="text-xl md:text-2xl font-bold tracking-tight">
                ND Gill Lawn Care Services
              </div>
              <div className="text-sm text-background/70 mt-0.5">
                Residential lawn care & snow removal · Winnipeg, MB
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/25 px-3.5 py-1.5 text-sm font-semibold text-background ring-1 ring-primary/40">
              <ShieldCheck className="h-4 w-4" /> Fully Licensed & Insured
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/10 px-3.5 py-1.5 text-sm font-medium text-background ring-1 ring-background/15">
              <Clock className="h-4 w-4" /> Available 24/7
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/10 px-3.5 py-1.5 text-sm font-medium text-background ring-1 ring-background/15">
              <Award className="h-4 w-4" /> {SITE.rating}★ Google ({SITE.reviewCount})
            </span>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="group flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>
                    <span className="block font-bold text-base">{SITE.phone}</span>
                    <span className="text-xs text-background/65">Tap to call — 24/7</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span className="break-all text-background/90">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>
                    <span className="block text-background/90">{SITE.address}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-primary mt-1 font-semibold">
                      Open in Google Maps
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="flex items-center gap-2.5 text-background/85 hover:text-primary transition-colors"
                  >
                    <s.icon className="h-3.5 w-3.5 text-primary shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Service Area
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="text-background/85 flex items-center gap-1.5"
                >
                  <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Get Started
            </h3>
            <p className="text-sm text-background/80 mb-4 leading-relaxed">
              Free, no-obligation quotes. Most homes quoted within 24 hours —
              no phone tag, no hassle.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full rounded-md font-bold uppercase tracking-wider shadow-soft"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <div className="mt-5 flex items-start gap-3 rounded-md border border-background/15 bg-background/5 p-3.5">
              <ShieldCheck className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <p className="text-xs text-background/80 leading-relaxed">
                <span className="font-semibold text-background block mb-0.5">
                  Fully licensed & insured.
                </span>
                Winnipeg-based, locally owned. WSIB coverage and $2M general liability.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-background/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-background/65">
            © {new Date().getFullYear()} ND Gill Lawn Care Services. All rights reserved.
          </p>
          <p className="text-xs text-background/65">
            Serving Winnipeg &amp; surrounding areas · Licensed &amp; Insured · MB
          </p>
        </div>
      </div>
    </footer>
  );
}
