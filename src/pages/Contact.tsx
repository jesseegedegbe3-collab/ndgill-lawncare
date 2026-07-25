import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { Photo } from "@/components/site/Photo";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SERVICE_AREAS, SITE } from "@/components/site/Brand";

export default function ContactPage() {
  return (
    <SiteShell>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01"
            alt="Winnipeg residential lawn and home"
            ratio="21/9"
            overlay="strong"
            priority
            className="h-full w-full"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Free · No obligation
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-foreground text-shadow-hero text-balance">
              Get Your Free Quote.
            </h1>
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-primary-foreground/90 text-shadow-hero leading-relaxed">
              Drop your details, or just give us a ring — same friendly
              service either way. We answer 24/7 during snow season.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form + contact card ── */}
      <section className="py-16 md:py-24 -mt-12 relative z-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-8"
            >
              <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-10 shadow-soft-lg">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Tell us about your property.
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Most homes quoted within 24 hours.
                </p>
                <div className="mt-6">
                  <QuoteForm id="contact-quote" variant="plain" />
                </div>
              </div>
            </motion.div>

            {/* contact card */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-4"
            >
              <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-soft h-full">
                <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-primary">
                  Reach us directly
                </h3>

                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="mt-5 flex items-start gap-3 rounded-lg bg-primary px-4 py-4 text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15 shrink-0">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-primary-foreground/85">
                      Tap to call — 24/7
                    </span>
                    <span className="block text-2xl font-bold tracking-tight">
                      {SITE.phone}
                    </span>
                  </span>
                </a>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        Email
                      </div>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-semibold break-all hover:text-primary transition-colors"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        Based at
                      </div>
                      <a
                        href={SITE.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold leading-snug hover:text-primary transition-colors"
                      >
                        {SITE.address}
                        <span className="block text-xs text-primary mt-0.5">
                          Open in Google Maps →
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        Hours
                      </div>
                      <div className="font-semibold">Available 24/7</div>
                      <div className="text-sm text-muted-foreground">
                        Snow calls answered any hour. Office hours 7 a.m. – 9 p.m.
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex items-center gap-2 rounded-lg bg-secondary/60 p-3 text-xs">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="leading-snug">
                    <span className="font-bold text-foreground block">
                      Fully licensed & insured.
                    </span>
                    <span className="text-muted-foreground">
                      $2M general liability + WSIB coverage.
                    </span>
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </span>
                  {SITE.rating}★ average · {SITE.reviewCount}+ Winnipeg reviews
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section
        aria-labelledby="map-heading"
        className="bg-secondary/30 border-y border-border/70 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary self-start">
                <MapPin className="h-3.5 w-3.5" />
                Where we work
              </span>
              <h2
                id="map-heading"
                className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
              >
                Serving Winnipeg & the surrounding area.
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Home base at {SITE.address}. We service homes across the city
                — see the list of neighbourhoods below.
              </p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
              >
                Open in Google Maps
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft h-full min-h-[360px]">
                <iframe
                  title="ND Gill Lawn Care Services — Winnipeg, MB location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&hl=en&z=14&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 360 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Service area
            </div>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/70 bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/85 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pre-footer CTA ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Same friendly service either way
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Prefer to chat? Give us a ring.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real local people, real local answers.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-md font-bold uppercase tracking-wider shadow-soft text-sm h-12 px-7"
            >
              <a href={`tel:${SITE.phoneRaw}`}>
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-md font-bold uppercase tracking-wider text-sm h-12 px-7"
            >
              <a href={`mailto:${SITE.email}`}>
                <Mail className="h-4 w-4" /> Email us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
