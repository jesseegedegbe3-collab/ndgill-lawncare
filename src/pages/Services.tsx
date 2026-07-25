import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Phone,
  Scissors,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Trees,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { Photo } from "@/components/site/Photo";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SITE } from "@/components/site/Brand";

const SERVICES = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    tagline: "Tidy, even cuts every week.",
    img: "https://images.unsplash.com/photo-1589923188900-85dae523342b",
    body: "Sharp blades, consistent lines, and clippings cleared from walks and driveways. We mow to the right height for your grass type, so roots stay healthy through the summer.",
    bullets: [
      "Weekly, bi-weekly, or one-time cuts",
      "Sharp-bladed mowers for a cleaner cut",
      "Trimming around trees, fences & beds",
      "Blower-cleaned walks & driveways",
    ],
  },
  {
    icon: Trees,
    title: "Trimming & Edging",
    tagline: "Hard lines where it counts.",
    img: "https://images.unsplash.com/photo-1620331311520-246422fd0821",
    body: "Crisp edges along the driveway, sidewalk, and beds. We string-trim everything the mower can't reach — no ragged corners, no missed patches.",
    bullets: [
      "Driveway & curb edging",
      "Sidewalk & patio edges",
      "Detail-trim around trees & posts",
      "Beds and border clean-up",
    ],
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    tagline: "Cleared before you head out.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    body: "Driveways, sidewalks, and front walks cleared with a snowblower or shovel — your choice. We monitor weather and show up before the first flake of traffic.",
    bullets: [
      "Per-visit clearing",
      "Seasonal contracts (best value)",
      "Driveway, walks & front entry",
      "De-icing / salting available",
    ],
  },
  {
    icon: Wind,
    title: "Spring & Fall Cleanup",
    tagline: "Start and end every season right.",
    img: "https://images.unsplash.com/photo-1507710650323-cd64178dfbbd",
    body: "A thorough yard reset when the season turns. Dethatch, first-of-season mow, leaf removal, and final cut. Leaves hauled — not blown into the neighbour's yard.",
    bullets: [
      "Spring dethatch & raking",
      "Leaf removal & haul-away",
      "First and final mow of the season",
      "Bed clean-up & edging touch-up",
    ],
  },
];

const PROMISE = [
  {
    icon: Clock,
    title: "On-time, every time",
    body: "We confirm a window the day before. If we say 8 a.m., we mean 8 a.m.",
  },
  {
    icon: DollarSign,
    title: "Lower rates, no surprises",
    body: "Locally owned. No franchise fees. Bring us a competitor's written quote and we'll usually beat it.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    body: "$2M general liability + WSIB coverage. Your property and our crew are both protected.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      {/* ── HEadline ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo
            src="https://images.unsplash.com/photo-1592417817038-d13fd7342606"
            alt="Crew maintaining a residential lawn in Winnipeg"
            ratio="21/9"
            overlay="strong"
            priority
            className="h-full w-full"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-8 pt-24 pb-24 md:pt-32 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Residential Services
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-foreground text-balance text-shadow-hero">
              Lawn Care & Snow Removal, Done Right the First Time.
            </h1>
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-primary-foreground/90 text-shadow-hero leading-relaxed">
              Honest, friendly service for Winnipeg homeowners. Clear pricing,
              clean cuts, cleared drives — backed by a real local crew.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-md font-bold uppercase tracking-wider shadow-soft-lg text-sm h-12 px-7"
              >
                <a href="#service-quote">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/85 transition-colors font-semibold"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Service blocks ── */}
      <section
        aria-labelledby="services-list"
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h2
              id="services-list"
              className="text-3xl md:text-5xl font-bold tracking-tight text-balance"
            >
              Services built for Winnipeg homes.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Pick what you need this season. Add or drop services any time —
              no long contracts to sign.
            </p>
          </div>

          <div className="mt-14 space-y-20 md:space-y-28">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className={`grid gap-10 lg:gap-14 lg:grid-cols-12 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`lg:col-span-7 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    <Photo
                      src={s.img}
                      alt={s.title}
                      ratio="4/3"
                      className="rounded-2xl shadow-soft-lg"
                    />
                    <div className="absolute -bottom-5 -right-5 hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft-lg">
                      <s.icon className="h-7 w-7" />
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-lg text-primary font-semibold">
                    {s.tagline}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-foreground/85"
                      >
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promise band ── */}
      <section
        aria-label="What you can count on"
        className="bg-secondary/40 border-y border-border/70"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {PROMISE.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote CTA ── */}
      <section
        id="service-quote"
        aria-labelledby="services-quote-heading"
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 rounded-2xl bg-card border border-border/70 p-6 md:p-10 shadow-soft-lg">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary self-start">
                <Sparkles className="h-3.5 w-3.5" />
                Free · No obligation
              </span>
              <h2
                id="services-quote-heading"
                className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
              >
                Ready to book a service?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Send a few details and we'll come back with a clear quote
                within 24 hours. Most homes same-day.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
              >
                Or open the full contact page
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <QuoteForm id="services-quote" />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
