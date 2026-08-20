import { ArrowRight, Calendar, Check, Phone, Scissors, Snowflake, Trees, Wind } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Photo } from "@/components/site/Photo";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SITE } from "@/components/site/Brand";
import { Container, Eyebrow, OutlineCta, PrimaryCta, Reveal, SectionHeading } from "@/components/site/ui";

const HERO_IMG = "https://images.unsplash.com/photo-1558904541-efa843a96f01";
const LAWN_IMG = "https://images.pexels.com/photos/6728933/pexels-photo-6728933.jpeg";
const TRIM_IMG = "https://images.pexels.com/photos/29288279/pexels-photo-29288279.jpeg";
const SNOW_IMG = "https://images.pexels.com/photos/6952452/pexels-photo-6952452.jpeg";
const CLEANUP_IMG = "https://images.pexels.com/photos/33356825/pexels-photo-33356825.jpeg";
const LANDSCAPE_AFTER_IMG = "https://images.pexels.com/photos/27135591/pexels-photo-27135591.jpeg";
const BEFORE_IMG = "https://lh3.googleusercontent.com/d/1mR-CRd5vFSRf7V1YCZKL_Hc3ce7ekWg6";
const AFTER_IMG = "https://lh3.googleusercontent.com/d/1WhtnrKjR3O-Z4_BT0Opq4tIZnqGch_-9";

const SERVICES = [
  { title: "Lawn Mowing", description: "Weekly, bi-weekly, or one-time cuts with crisp lines, clean walks, and a healthy mowing height.", icon: Scissors },
  { title: "Trimming & Edging", description: "Sharp edges along driveways, sidewalks, beds, fences, trees, and every spot the mower cannot reach.", icon: Trees },
  { title: "Snow Removal", description: "Driveways, sidewalks, front walks, and salting cleared before you head out after a Winnipeg storm.", icon: Snowflake },
  { title: "Spring & Fall Cleanup", description: "Dethatching, first and final mows, leaf removal, bed cleanup, and a fresh start for every season.", icon: Wind },
  { title: "Seasonal Contracts", description: "One familiar crew, automatic scheduling, priority storm response, and predictable year-round pricing.", icon: Calendar },
];

const FEATURED = [
  { kicker: "Weekly or bi-weekly", title: "Lawn mowing with a clean finish", description: "Sharp blades, consistent lines, and clippings cleared from walks and driveways. A tidy lawn without giving up your weekend.", image: LAWN_IMG, alt: "Lawn mower cutting a residential lawn in Winnipeg" },
  { kicker: "Driveways, walks & beds", title: "Edges that make the whole yard look finished", description: "We string-trim what the mower cannot reach and leave hard lines along sidewalks, driveways, patios, and garden beds.", image: TRIM_IMG, alt: "Landscaping trimming and edging work" },
  { kicker: "Per visit or seasonal", title: "Snow removal before the day gets moving", description: "We clear the driveway, sidewalk, and front entry and can salt high-traffic areas so your property is ready when you are.", image: SNOW_IMG, alt: "Snow removal service clearing a residential walkway" },
  { kicker: "Spring and fall", title: "A proper reset when the season turns", description: "From dethatch and first cut to leaf haul-away and the final mow, we help your yard start and end the season right.", image: CLEANUP_IMG, alt: "Seasonal yard cleanup and landscaping" },
];

const REVIEWS = [
  { name: "Harvinder S.", body: "Showed up early and finished fast. Lawn has never looked this clean. Already booked for the rest of the season.", service: "Weekly mowing" },
  { name: "Priya K.", body: "Called in the morning and the driveway was clear before lunch after the storm. Reliable, on-time, and priced fairly.", service: "Snow removal" },
  { name: "Marcus T.", body: "Got quotes from two other companies before ND Gill — half the price and the work was better. Highly recommend.", service: "First-time lawn care" },
];

export default function Home() {
  return (
    <SiteShell>
      <section id="top" className="relative overflow-hidden bg-foreground">
        <img src={`${HERO_IMG}?auto=format&fit=crop&w=2200&q=80`} alt="Freshly maintained residential lawn in Winnipeg" className="absolute inset-0 h-full w-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/85 to-transparent" />
        <Container className="relative flex min-h-[82vh] flex-col justify-center pb-24 pt-20 sm:min-h-[88vh] sm:pb-28">
          <div className="max-w-3xl">
            <Eyebrow className="text-primary-foreground/80">Winnipeg Lawn Care & Snow Removal</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-background text-balance sm:text-6xl lg:text-7xl">{SITE.tagline}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/75 sm:text-lg">Friendly, fast, and priced lower than the big guys. Mowing, trimming, edging, snow clearing, and seasonal service — done right the first time.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"><PrimaryCta href="/contact">Get a Free Quote</PrimaryCta><OutlineCta href="/services" dark>Explore Services</OutlineCta></div>
            <a href={`tel:${SITE.phoneRaw}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-background/80 transition-colors hover:text-primary-foreground"><Phone className="size-4" /> Call {SITE.phone}</a>
            <dl className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-background/15 pt-8"><div className="flex items-center gap-3"><dd className="text-2xl font-semibold tracking-tight text-background sm:text-3xl">5.0★</dd><dt className="max-w-[6.5rem] text-xs font-medium uppercase tracking-wider text-background/60">Google rating</dt></div><div className="flex items-center gap-3"><dd className="text-2xl font-semibold tracking-tight text-background sm:text-3xl">15+</dd><dt className="max-w-[6.5rem] text-xs font-medium uppercase tracking-wider text-background/60">Winnipeg reviews</dt></div><div className="flex items-center gap-3"><dd className="text-2xl font-semibold tracking-tight text-background sm:text-3xl">24/7</dd><dt className="max-w-[6.5rem] text-xs font-medium uppercase tracking-wider text-background/60">Snow response</dt></div></dl>
          </div>
        </Container>
      </section>

      <section aria-label="Key credentials" className="border-b border-foreground/10 bg-secondary"><Container className="py-8 sm:py-10"><ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">{["5.0★ Google rated", "15+ homeowner reviews", "Available 24/7", "Locally owned & operated", "Fully licensed & insured"].map((item) => <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"><Check className="size-4 shrink-0 text-primary" />{item}</li>)}</ul></Container></section>

      <section className="bg-background py-20 sm:py-28"><Container><SectionHeading eyebrow="Real results" title="One Winnipeg home, before & after ND Gill" description="A neglected yard brought back to life — the same house and the same angle, one season of care later." /><Reveal className="mt-10"><BeforeAfter before={BEFORE_IMG} after={AFTER_IMG} afterAlt="The same Winnipeg home after ND Gill lawn care and cleanup" /></Reveal><p className="mt-4 text-center text-sm text-muted-foreground">Drag the handle — or use the arrow keys — to compare the same property.</p></Container></section>

      <section className="overflow-hidden bg-background py-20 sm:py-28"><Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"><Reveal><Eyebrow>Our approach</Eyebrow><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">A better yard starts with dependable care.</h2><p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">We keep the process simple: clear pricing, a real local crew, and the same care whether you need a weekly mow or a driveway cleared before sunrise.</p><p className="mt-4 text-base leading-relaxed text-muted-foreground">We work respectfully around your property, clean up after every visit, and stay available through every Winnipeg season.</p><ul className="mt-7 grid gap-2.5 sm:grid-cols-2">{["Fast quotes, usually within 24 hours", "Friendly, reliable crew", "Lower rates than the big guys", "Lawn and snow in one plan"].map((point) => <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"><span className="grid size-5 place-items-center rounded-full bg-accent text-primary"><Check className="size-3" strokeWidth={3} /></span>{point}</li>)}</ul><PrimaryCta href="/contact" className="mt-8">Request a free quote</PrimaryCta></Reveal><Reveal delay={0.1} className="relative"><Photo src={LANDSCAPE_AFTER_IMG} alt="Landscaped residential yard in Winnipeg" ratio="4/3" className="rounded-lg" /><div className="absolute -bottom-5 left-5 right-5 rounded-md border border-foreground/5 bg-background p-4 shadow-soft sm:left-8 sm:right-auto sm:max-w-xs"><p className="text-sm font-semibold text-foreground">One crew. Every season.</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Summer mowing, fall cleanup, and winter snow clearing from people who know your property.</p></div></Reveal></Container></section>

      <section className="bg-secondary py-20 sm:py-28"><Container><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="What we do" title="Practical services for Winnipeg homes" description="Pick what you need today and add more any time. No confusing packages, no hard sell." /><PrimaryCta href="/contact" className="hidden shrink-0 md:inline-flex">Request a quote</PrimaryCta></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{SERVICES.map((service, i) => <Reveal key={service.title} delay={(i % 5) * 0.05} className="group flex flex-col rounded-lg border border-foreground/5 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/10 hover:shadow-soft"><span className="grid size-11 place-items-center rounded-md bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><service.icon className="size-5" /></span><h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">{service.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p><a href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/65 transition-colors group-hover:text-primary">Get a quote <ArrowRight className="size-3.5" /></a></Reveal>)}</div></Container></section>

      <section className="bg-background py-20 sm:py-28"><Container><SectionHeading eyebrow="Featured services" title="The work that makes a home feel cared for" description="A closer look at the services Winnipeg homeowners call ND Gill for most." /><div className="mt-14 space-y-20 lg:space-y-28">{FEATURED.map((item, i) => <div key={item.title} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"><Reveal className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}><Photo src={item.image} alt={item.alt} ratio="16/11" className="rounded-lg" imgClassName="transition-transform duration-700 hover:scale-[1.03]" /></Reveal><Reveal delay={0.08} className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}><Eyebrow>{item.kicker}</Eyebrow><h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{item.title}</h3><p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.description}</p><a href="/contact" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">Request a quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></a></Reveal></div>)}</div><div className="mt-16 flex justify-center"><OutlineCta href="/services">See all services</OutlineCta></div></Container></section>

      <section className="bg-secondary py-20 sm:py-28"><Container><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Real Winnipeg homeowners" title="The kind of service people tell their neighbours about" description={`${SITE.rating}★ average across ${SITE.reviewCount}+ Google reviews. Here are a few paraphrased highlights.`} /><a href="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">Read all reviews <ArrowRight className="size-4" /></a></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{REVIEWS.map((review, i) => <Reveal key={review.name} delay={i * 0.06}><ReviewCard name={review.name} body={review.body} service={review.service} /></Reveal>)}</div></Container></section>

      <section className="bg-foreground py-16 sm:py-20"><Container><div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">{[{ value: "5.0★", label: "Google rating" }, { value: "15+", label: "Winnipeg reviews" }, { value: "24/7", label: "Snow response" }, { value: "1", label: "Local crew for every season" }].map((stat, i) => <Reveal key={stat.label} delay={i * 0.07} className="flex flex-col items-center text-center"><span className="text-4xl font-semibold tracking-tight text-background sm:text-5xl">{stat.value}</span><span className="mt-2 max-w-[12rem] text-xs font-medium uppercase tracking-[0.16em] text-background/55">{stat.label}</span></Reveal>)}</div></Container></section>

      <section className="bg-foreground py-20 sm:py-24"><Container className="flex flex-col items-center text-center"><Eyebrow className="text-primary-foreground/80">Free, no-obligation quotes</Eyebrow><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-background text-balance sm:text-4xl">Ready for a yard you do not have to think about?</h2><p className="mt-4 max-w-xl text-base leading-relaxed text-background/70">Tell us what your property needs and get a free quote from a local Winnipeg crew.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><PrimaryCta href="/contact">Get a Free Quote</PrimaryCta><OutlineCta href="/reviews" dark>Read Customer Reviews</OutlineCta></div><a href={`tel:${SITE.phoneRaw}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-background/75 hover:text-background"><Phone className="size-4" /> {SITE.phone}</a></Container></section>
    </SiteShell>
  );
}
