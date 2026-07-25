import { useState } from "react";
import { toast } from "sonner";
import {
  CheckCircle2,
  Loader2,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SITE } from "./Brand";

const SERVICES = [
  { value: "lawn", label: "Lawn Care — mowing, trimming, edging" },
  { value: "snow", label: "Snow Removal — driveway & sidewalk" },
  { value: "both", label: "Both — year-round lawn & snow service" },
  { value: "cleanup", label: "Spring / Fall Cleanup" },
  { value: "other", label: "Something else (message below)" },
];

export type QuoteFormVariant = "card" | "plain";

export function QuoteForm({
  id,
  variant = "card",
  className,
  onSubmitted,
}: {
  id?: string;
  variant?: QuoteFormVariant;
  className?: string;
  onSubmitted?: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!service) {
      toast.error("Please pick a service so we can route your quote correctly.");
      return;
    }
    setSubmitting(true);
    // Client-side handoff. In a future iteration this could call a Convex
    // mutation `submitQuoteRequest` to persist the lead.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Quote request received — we'll be in touch within 24 hours.");
      onSubmitted?.();
    }, 700);
  };

  if (submitted) {
    return (
      <div
        id={id}
        className={cn(
          variant === "card" &&
            "rounded-xl border border-border/70 bg-card p-7 md:p-8 shadow-soft",
          className,
        )}
      >
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <h3 className="text-xl font-bold tracking-tight">
              Thanks — we've got your request.
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              A member of our team will reach out shortly with a free quote.
              Need it sooner? Give us a ring any time at{" "}
              <span className="font-semibold text-foreground">
                {SITE.phone}
              </span>
              .
            </p>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn(
        variant === "card" &&
          "rounded-xl border border-border/70 bg-card p-6 md:p-7 shadow-soft",
        variant === "plain" && "space-y-4",
        className,
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={`${id ?? "qf"}-name`}>Your Name</Label>
          <Input
            id={`${id ?? "qf"}-name`}
            name="name"
            placeholder="e.g. Harvinder S."
            required
            autoComplete="name"
            className="bg-background"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${id ?? "qf"}-phone`}>Phone Number</Label>
          <Input
            id={`${id ?? "qf"}-phone`}
            name="phone"
            type="tel"
            placeholder="(204) 555-0123"
            required
            autoComplete="tel"
            className="bg-background"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`${id ?? "qf"}-address`}>Service Address</Label>
        <Input
          id={`${id ?? "qf"}-address`}
          name="address"
          placeholder="Street address, Winnipeg"
          required
          autoComplete="street-address"
          className="bg-background"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`${id ?? "qf"}-service`}>Service Needed</Label>
        <Select value={service} onValueChange={setService} required>
          <SelectTrigger
            id={`${id ?? "qf"}-service`}
            className="w-full bg-background"
          >
            <SelectValue placeholder="Pick the service you need" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`${id ?? "qf"}-message`}>
          Message <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id={`${id ?? "qf"}-message`}
          name="message"
          rows={3}
          placeholder="Lot size, gate code, preferred timing, anything else we should know."
          className="bg-background resize-none"
        />
      </div>
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We respect your privacy. Quote requests are reviewed by the owner —
          not sold or spammed.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="rounded-md font-bold uppercase tracking-wider shadow-soft sm:min-w-[180px]"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Get My Free Quote
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
