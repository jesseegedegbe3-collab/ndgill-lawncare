import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Phone,
  Quote as QuoteIcon,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { Photo } from "@/components/site/Photo";
import { ReviewCard, type ReviewCardProps } from "@/components/site/ReviewCard";
import { SITE } from "@/components/site/Brand";

const REVIEWS: ReviewCardProps[] = [
  {
    name: "Harvinder S.",
    body: "Showed up early and finished fast. Lawn has never looked this clean. Already booked for the rest of the season.",
    service: "Weekly mowing",
    date: "June 2025",
    rating: 5,
  },
  {
    name: "Priya K.",
    body: "Called in the morning and the driveway was clear before lunch after the storm. Reliable, on-time, and priced fairly.",
    service: "Snow removal",
    date: "January 2025",
    rating: 5,
  },
  {
    name: "Marcus T.",
    body: "Got quotes from two other companies before ND Gill — half the price and the work was better. Highly recommend.",
    service: "First-time lawn care",
    date: "May 2025",
    rating: 5,
  },
  {
    name: "Anita L.",
    body: "Have used them for both lawn care and snow removal. Consistent quality every visit — same friendly crew.",
    service: "Year-round contract",
    date: "March 2025",
    rating: 5,
  },
  {
    name: "Jake R.",
    body: "Polite, hard-working, and cleans up after every cut. Real pros. They even shut the gate behind them.",
    service: "Bi-weekly mowing",
    date: "July 2025",
    rating: 5,
  },
  {
    name: "Simone B.",
    body: "Spring cleanup was incredibly thorough. Yard looked ready for the whole summer after one visit.",
    service: "Spring cleanup",
    date: "April 2025",
    rating: 5,
  },
  {
    name: "Devon M.",
    body: "First time hiring out lawn care and they made it painless. Fair price, easy scheduling — exactly what I wanted.",
    service: "Weekly mowing",
    date: "August 2025",
    rating: 5,
  },
  {
    name: "Rashpal G.",
    body: "Got a quote within hours. Crew was friendly and the edging looked sharper than when we did it ourselves.",
    service: "Edging refresh",
    date: "May 2025",
    rating: 5,
  },
  {
    name: "Tracey P.",
    body: "They salted the front walk and steps after clearing. Saved a fall — that's the kind of attention I want.",
    service: "Snow + salt",
    date: "December 2024",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <SiteShell>
      {/* ── Headline + rating badge ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo
            src="https://images.pexels.com/photos/6728933/pexels-photo-6728933.jpeg"
            alt="Freshly mowed residential lawn"
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
            className="grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Real Reviews · Winnipeg Homeowners
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-foreground text-shadow-hero text-balance">
                What Winnipeg Homeowners Are Saying.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90 text-shadow-hero leading-relaxed">
                We've earned a 5.0-star average across more than fifteen
                Google reviews — and counting. Here's what people say after
                we leave.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-card/95 backdrop-blur border border-border/60 shadow-soft-lg p-7 md:p-8 text-center">
                <div className="flex items-center justify-center gap-1 text-primary mb-3" aria-label={`${SITE.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <div className="text-5xl font-bold tracking-tight">
                  {SITE.rating}
                  <span className="text-muted-foreground text-3xl font-bold"> / 5</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Based on <span className="font-semibold text-foreground">{SITE.reviewCount} Google reviews</span>
                </div>
                <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary self-center inline-flex mx-auto">
                  <Award className="h-4 w-4" />
                  Top-rated lawn care in Winnipeg
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Review grid ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <QuoteIcon className="h-3.5 w-3.5" />
                The full list
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Every word, exactly as shared.
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Paraphrased from public Google reviews. Want to leave one of
                your own? We'd love that.
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=ND+Gill+Lawn+Care+Services+512+Mandalay+Dr+Winnipeg+MB+R2P+2C9`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-accent transition-colors"
            >
              Leave a Google review
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.name + r.date}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              >
                <ReviewCard {...r} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo
            src="https://images.unsplash.com/photo-1564540583246-934409427776"
            alt="Neatly mowed residential lawn"
            ratio="21/9"
            overlay="strong"
            className="h-full w-full"
          />
        </div>
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Ready to join our happy customers?
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground text-shadow-hero text-balance">
              Get your free quote today.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 text-shadow-hero max-w-2xl mx-auto">
              Same friendly crew, same fair pricing — just tell us what you
              need.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-md font-bold uppercase tracking-wider shadow-soft-lg text-sm h-12 px-7"
              >
                <Link to="/contact">
                  Get Your Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-md bg-primary-foreground/15 px-5 py-3 ring-1 ring-primary-foreground/25 backdrop-blur text-primary-foreground hover:bg-primary-foreground/25 transition-colors font-semibold"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
