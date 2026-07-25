import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  DollarSign,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Trees,
  Snowflake,
  Scissors,
  Wind,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { Photo } from "@/components/site/Photo";
import { QuoteForm } from "@/components/site/QuoteForm";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SITE } from "@/components/site/Brand";

const HERO_IMG =
  "https://images.unsplash.com/photo-1558904541-efa843a96f01";

const SERVICES = [
  {
    title: "Lawn Mowing",
    href_img:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b",
    blurb:
      "Weekly or bi-weekly cuts, bagged & blown clean. Crisp, consistent lines every visit.",
    icon: Scissors,
  },
  {
    title: "Trimming & Edging",
    href_img:
      "https://images.unsplash.com/photo-1564540583246-934409427776",
    blurb:
      "Hard edges along walkways, driveways, and beds. String-trimmed where mowers can't reach.",
    icon: Trees,
  },
  {
    title: "Snow Removal",
    href_img:
      "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f",
    blurb:
      "Driveways, sidewalks, and front walks cleared before you head out. Per-visit or seasonal.",
    icon: Snowflake,
  },
  {
    title: "Spring & Fall Cleanup",
    href_img:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
    blurb:
      "Spring dethatch & first cut, fall leaf removal and final mow ⸺ start each season fresh.",
    icon: Wind,
  },
];

const WHY = [
  {
    icon: Clock,
    title: "Fast Response",
    body:
      "Most quotes back within 24 hours. Snow calls answered around the clock — even at 4 a.m.",
  },
  {
    icon: DollarSign,
    title: "Lower Rates",
    body:
      "Locally owned with low overhead. We'll happily beat any comparable written quote.",
  },
  {
    icon: ThumbsUp,
    title: "Reliable Crew",
    body:
      "Same team each visit. Friendly, uniformed, and respectful of your property.",
  },
  {
    icon: Sparkles,
    title: "Year-Round",
    body:
      "Lawn care in summer, snow removal in winter. One trusted partner for every season.",
  },
];

const PREVIEW_REVIEWS = [
  {
    name: "Harvinder S.",
    body:
      "Showed up early and finished fast. Lawn has never looked this clean. Already booked for the rest of the season.",
    service: "Weekly mowing",
    date: "June 2025",
  },
  {
    name: "Priya K.",
    body:
      "Called in the morning and the driveway was clear before lunch after the storm. Reliable, on-time, and priced fairly.",
    service: "Snow removal",
    date: "January 2025",
  },
  {
    name: "Marcus T.",
    body:
      "Got quotes from two other companies before ND Gill — half the price and the work was better. Highly recommend.",
    service: "First-time lawn care",
    date: "May 2025",
  },
];

export default function Home() {
  return (
    <SiteShell>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo
            src={HERO_IMG}
            alt="Freshly mowed green residential lawn"
            ratio="21/9"
            overlay="strong"
            priority
            className="h-full w-full"
            imgClassName="transition-transform duration-[2.5s] ease-out"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-8 pt-20 pb-28 md:pt-28 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" />
              Fully Licensed · Insured · Available 24/7
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground text-balance text-shadow-hero">
              {SITE.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-primary-foreground/90 text-shadow-hero leading-relaxed">
              Friendly, fast, and priced lower than the big guys. Mowing,
              trimming, edging, snow clearing — done right, the first time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-md font-bold uppercase tracking-wider shadow-soft-lg text-sm h-12 px-7"
              >
                <a href="#quote">
                  Get Your Free Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/85 transition-colors font-semibold"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15 ring-1 ring-primary-foreground/25 backdrop-blur">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-primary-foreground/75">
                    Or just call
                  </span>
                  <span className="text-lg">{SITE.phone}</span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── QUOTE FORM (NEAR THE TOP) ──────────────────────────── */}
      <section
        id="quote"
        className="relative -mt-16 md:-mt-24 z-10 pb-12 md:pb-20"
        aria-labelledby="quote-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid lg:grid-cols-12 gap-6 lg:gap-10 rounded-2xl bg-card border border-border/70 p-6 md:p-10 shadow-soft-lg"
          >
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary self-start">
                <Sparkles className="h-3.5 w-3.5" />
                Free quote · No obligation
              </span>
              <h2
                id="quote-heading"
                className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-balance"
              >
                Tell us about your property.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Drop your details and we'll get back to you with a quote within
                24 hours. Most homes receive a same-day ballpark.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Honest pricing, no surprise fees",
                  "Locally owned — answers the phone himself",
                  "$2M liability + WSIB coverage",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 text-foreground/85"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <QuoteForm id="home-quote" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <section
        aria-label="Why customers trust ND Gill"
        className="border-y border-border/70 bg-secondary/40"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-14">
          <div className="grid gap-6 sm:grid-cols-3">
            <TrustBadge
              icon={Star}
              headline={`${SITE.rating}★ Rated`}
              subline={`by ${SITE.reviewCount} Winnipeg homeowners`}
            />
            <TrustBadge
              icon={Clock}
              headline="Available 24/7"
              subline="Snow calls answered any hour, day or night"
            />
            <TrustBadge
              icon={BadgeCheck}
              headline="Locally Owned & Operated"
              subline="Winnipeg-based · Not a franchise"
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────── */}
      <section
        id="services-preview"
        aria-labelledby="services-heading"
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              What we do
            </span>
            <h2
              id="services-heading"
              className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-balance"
            >
              Honest work for the lawn and the driveway.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Residential lawn care and snow removal across Winnipeg. Pick
              what you need today — add more any time.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex flex-col"
              >
                <Photo
                  src={s.href_img}
                  alt={s.title}
                  ratio="4/3"
                  className="rounded-xl shadow-soft overflow-hidden"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="mt-5 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.blurb}
                </p>
                <Link
                  to="/services"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg" className="rounded-md font-semibold">
              <Link to="/services">
                See all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section
        aria-labelledby="why-heading"
        className="relative isolate overflow-hidden bg-foreground text-background"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-noise opacity-20"
        />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground ring-1 ring-primary/40">
                Why Winnipeg homeowners pick us
              </span>
              <h2
                id="why-heading"
                className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-balance"
              >
                Reliability you can actually feel.
              </h2>
              <p className="mt-5 text-background/80 leading-relaxed text-lg">
                We're not the biggest crew in town — and that's on purpose.
                Smaller means we show up on time, remember your property, and
                price it right.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-md font-bold uppercase tracking-wider"
                >
                  <Link to="/contact">
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-background/90 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
              {WHY.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-xl border border-background/15 bg-background/5 p-6 hover:bg-background/10 transition-colors"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold tracking-tight">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-background/75 leading-relaxed">
                    {w.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ──────────────────────────────── */}
      <section
        aria-labelledby="testimonials-heading"
        className="py-20 md:py-28 bg-secondary/30"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Real Winnipeg homeowners
              </span>
              <h2
                id="testimonials-heading"
                className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-balance"
              >
                The kind of service people tell their neighbours about.
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                {SITE.rating}★ average across {SITE.reviewCount}+ reviews on
                Google. Here are a few.
              </p>
            </motion.div>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
            >
              Read all reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PREVIEW_REVIEWS.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <ReviewCard
                  name={r.name}
                  body={r.body}
                  service={r.service}
                  date={r.date}
                  className="bg-background"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ──────────────────────────────────── */}
      <FinalCTA />
    </SiteShell>
  );
}

function TrustBadge({
  icon: Icon,
  headline,
  subline,
}: {
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  subline: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 ring-1 ring-primary/20">
        <Icon className="h-6 w-6" />
      </span>
      <div className="leading-tight">
        <div className="text-lg md:text-xl font-bold tracking-tight">{headline}</div>
        <div className="text-sm text-muted-foreground mt-0.5">{subline}</div>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Photo
          src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09"
          alt="Front yard in summer — Winnipeg residential property"
          ratio="21/9"
          overlay="strong"
          className="h-full w-full"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Ready when you are
            </span>
            <h2
              id="final-cta-heading"
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-foreground text-shadow-hero text-balance"
            >
              Get Your Free Quote Today.
            </h2>
            <p className="mt-5 max-w-2xl text-primary-foreground/90 text-lg text-shadow-hero leading-relaxed">
              Tell us about your property. We'll reply within 24 hours — usually
              much sooner.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-3 rounded-md bg-primary-foreground/15 px-5 py-3 ring-1 ring-primary-foreground/25 backdrop-blur hover:bg-primary-foreground/25 transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-primary-foreground/80">
                    Call us now
                  </span>
                  <span className="block text-xl font-bold text-primary-foreground">
                    {SITE.phone}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/85">
                <MapPin className="h-4 w-4" />
                Based at {SITE.address.split(",")[0]}, Winnipeg
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl bg-card/95 backdrop-blur p-2 shadow-soft-lg">
              <QuoteForm id="final-quote" variant="card" className="shadow-none border-0 p-4 md:p-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

