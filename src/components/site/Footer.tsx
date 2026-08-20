import { ExternalLink, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { BrandMark, SERVICE_AREAS, SITE } from "./Brand";
import { Container, PrimaryCta } from "./ui";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <BrandMark className="size-10" tone="light" />
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-semibold tracking-tight">ND Gill Lawn Care Services</span>
                <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-background/50">Winnipeg · Manitoba</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">Friendly, fast, and priced lower than the big guys. Residential lawn care, snow removal, and seasonal service across Winnipeg.</p>
            <ul className="mt-6 space-y-2 text-sm text-background/75">
              <li><a href={`tel:${SITE.phoneRaw}`} className="transition-colors hover:text-primary-foreground">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="transition-colors hover:text-primary-foreground">{SITE.email}</a></li>
              <li className="text-background/60">{SITE.address}</li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-background/15 bg-background/5 px-3 py-2 text-xs font-semibold text-background/80"><ShieldCheck className="size-4 text-primary-foreground/80" /> Fully licensed & insured · Available 24/7</div>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => <li key={item.to}><Link to={item.to} className="text-sm text-background/75 transition-colors hover:text-primary-foreground">{item.label}</Link></li>)}
            </ul>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-background/45">Service area</p>
            <p className="mt-3 text-sm leading-relaxed text-background/60">{SERVICE_AREAS.slice(0, 6).join(" · ")} and surrounding Winnipeg neighbourhoods.</p>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">Get started</p>
            <p className="mt-4 text-sm leading-relaxed text-background/60">Free, no-obligation quotes. Most homes quoted within 24 hours.</p>
            <PrimaryCta href="/contact" className="mt-5 w-full" arrow={false}>Get a Free Quote</PrimaryCta>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary-foreground"><MapPin className="size-4" /> Open in Google Maps <ExternalLink className="size-3" /></a>
            <a href={`mailto:${SITE.email}`} className="mt-3 flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary-foreground"><Mail className="size-4" /> Email the team</a>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/80">Unofficial Website Redesign Concept — Created for Demonstration</p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-background/50">This landscaping website is a redesign concept created for demonstration purposes. It is not the official website of ND Gill Lawn Care Services, and it is not affiliated with or approved by the business.</p>
          <p className="mt-6 text-xs text-background/40">© {new Date().getFullYear()} ND Gill Lawn Care Services. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export function StickyMobileBar() {
  return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur xl:hidden">
    <a href={`tel:${SITE.phoneRaw}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border text-sm font-semibold text-foreground"><Phone className="size-4" /> Call</a>
    <Link to="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-2 text-sm font-semibold text-primary-foreground">Get Quote</Link>
  </div>;
}
