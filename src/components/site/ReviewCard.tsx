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

export function ReviewCard({
  name,
  rating = 5,
  body,
  service,
  initials,
  className,
  date,
}: ReviewCardProps) {
  const computedInitials =
    initials ??
    name
      .split(/\s+|\./)
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <figure
      className={cn(
        "group relative flex h-full flex-col gap-4 rounded-xl border border-border/70 bg-card p-6 md:p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg",
        className,
      )}
    >
      <Quote
        className="absolute top-4 right-4 h-7 w-7 text-primary/15 transition-colors group-hover:text-primary/25"
        aria-hidden
      />
      <div
        className="flex items-center gap-1 text-primary"
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "fill-current" : "fill-none opacity-25",
            )}
          />
        ))}
      </div>
      <blockquote className="text-[15px] leading-relaxed text-foreground/90">
        “{body}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-3 border-t border-border/60">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider"
        >
          {computedInitials}
        </span>
        <div className="leading-tight flex-1">
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-xs text-muted-foreground flex flex-wrap gap-x-2">
            {service && <span>{service}</span>}
            {service && date && <span aria-hidden>·</span>}
            {date && <span>{date}</span>}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
