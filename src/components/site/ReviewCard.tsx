import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ReviewCardProps {
  name: string;
  rating?: number;
  body: string;
  service?: string;
  initials?: string;
  className?: string;
  date?: string;
}

export function ReviewCard({ name, rating = 5, body, service, initials, className, date }: ReviewCardProps) {
  const computedInitials = initials ?? name.split(/\s+|\./).filter(Boolean).map((word) => word[0]).slice(0, 2).join("").toUpperCase();
  return (
    <figure className={cn("flex h-full flex-col rounded-lg border border-border/60 bg-secondary/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-soft", className)}>
      <Quote className="size-5 text-primary" aria-hidden />
      <div className="mt-4 flex gap-0.5 text-primary" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => <Star key={index} className={cn("size-3.5", index < rating ? "fill-current" : "opacity-25")} />)}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">“{body}”</blockquote>
      <figcaption className="mt-6 border-t border-border/60 pt-4">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <span className="mt-1.5 inline-flex w-fit rounded-full border border-border/70 bg-background px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-foreground/55">{service ?? date ?? computedInitials}</span>
      </figcaption>
    </figure>
  );
}
