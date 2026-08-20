import { ArrowUpRight, Phone, Sparkles, Star } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Photo } from "@/components/site/Photo";
import { ReviewCard, type ReviewCardProps } from "@/components/site/ReviewCard";
import { SITE } from "@/components/site/Brand";
import { Container, Eyebrow, PrimaryCta, Reveal, SectionHeading } from "@/components/site/ui";

const LAWN_IMAGE = "https://images.pexels.com/photos/6728933/pexels-photo-6728933.jpeg";
const REVIEWS: ReviewCardProps[] = [
  { name: "Harvinder S.", body: "Showed up early and finished fast. Lawn has never looked this clean. Already booked for the rest of the season.", service: "Weekly mowing", rating: 5 },
  { name: "Priya K.", body: "Called in the morning and the driveway was clear before lunch after the storm. Reliable, on-time, and priced fairly.", service: "Snow removal", rating: 5 },
  { name: "Marcus T.", body: "Got quotes from two other companies before ND Gill — half the price and the work was better. Highly recommend.", service: "First-time lawn care", rating: 5 },
  { name: "Anita L.", body: "Have used them for both lawn care and snow removal. Consistent quality every visit — same friendly crew.", service: "Year-round contract", rating: 5 },
  { name: "Jake R.", body: "Polite, hard-working, and cleans up after every cut. Real pros. They even shut the gate behind them.", service: "Bi-weekly mowing", rating: 5 },
  { name: "Simone B.", body: "Spring cleanup was incredibly thorough. Yard looked ready for the whole summer after one visit.", service: "Spring cleanup", rating: 5 },
  { name: "Devon M.", body: "First time hiring out lawn care and they made it painless. Fair price, easy scheduling — exactly what I wanted.", service: "Weekly mowing", rating: 5 },
  { name: "Rashpal G.", body: "Got a quote within hours. Crew was friendly and the edging looked sharper than when we did it ourselves.", service: "Edging refresh", rating: 5 },
  { name: "Tracey P.", body: "They salted the front walk and steps after clearing. Saved a fall — that's the kind of attention I want.", service: "Snow + salt", rating: 5 },
];

export default function ReviewsPage() {
  return (
    <SiteShell>
      <section className="bg-background py-20 sm:py-28"><Container><div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"><SectionHeading eyebrow="Reviews · Winnipeg homeowners" title="What customers say after we leave" description="ND Gill has earned a 5.0-star average across more than fifteen Google reviews — and counting. Here are a few paraphrased highlights." /><Reveal delay={0.1} className="flex shrink-0 flex-col items-start gap-3 rounded-lg border border-foreground/5 bg-secondary p-6 lg:items-end"><div className="flex items-center gap-3"><span className="text-4xl font-semibold tracking-tight">{SITE.rating}</span><div className="flex gap-0.5" aria-label="Rated 5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-primary text-primary" />)}</div></div><p className="text-sm text-muted-foreground">{SITE.reviewCount} Google reviews</p><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">See Google listing <ArrowUpRight className="size-4" /></a><div className="flex w-full items-center gap-2 border-t border-foreground/10 pt-4 lg:justify-end"><span className="rounded-sm bg-accent px-2 py-0.5 text-xs font-bold text-primary">24/7</span><p className="text-sm font-semibold">Snow calls answered</p></div></Reveal></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{REVIEWS.map((review, i) => <Reveal key={`${review.name}-${i}`} delay={(i % 3) * 0.06}><ReviewCard {...review} /></Reveal>)}</div></Container></section>

      <section className="relative overflow-hidden bg-foreground"><Photo src={LAWN_IMAGE} alt="Freshly mowed residential lawn" ratio="21/9" overlay="strong" className="absolute inset-0 h-full w-full" /><Container className="relative flex flex-col items-center py-24 text-center sm:py-32"><Eyebrow className="text-primary-foreground/80"><Sparkles className="mr-2 inline size-3.5" /> Ready to join our happy customers?</Eyebrow><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-background text-balance sm:text-5xl">Get your free quote today.</h2><p className="mt-4 max-w-xl text-base leading-relaxed text-background/75 sm:text-lg">Same friendly crew, same fair pricing — just tell us what you need.</p><div className="mt-8 flex flex-col items-center gap-3 sm:flex-row"><PrimaryCta href="/contact">Get a Free Quote</PrimaryCta><a href={`tel:${SITE.phoneRaw}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-background/30 px-6 text-sm font-semibold text-background hover:border-background/60 hover:bg-background/10"><Phone className="size-4" /> {SITE.phone}</a></div></Container></section>
    </SiteShell>
  );
}
