import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-xs font-semibold uppercase tracking-[0.22em] text-primary", className)}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <Eyebrow className={dark ? "text-primary-foreground/70" : undefined}>{eyebrow}</Eyebrow>}
      <h2 className={cn("mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl", dark ? "text-background" : "text-foreground")}>
        {title}
      </h2>
      {description && <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-background/70" : "text-muted-foreground")}>{description}</p>}
    </div>
  );
}

export function PrimaryCta({ href, children, className, arrow = true }: { href: string; children: ReactNode; className?: string; arrow?: boolean }) {
  return (
    <Link to={href} className={cn("group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function OutlineCta({ href, children, className, dark = false }: { href: string; children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <Link to={href} className={cn("inline-flex h-12 items-center justify-center gap-2 rounded-md border px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", dark ? "border-background/30 text-background hover:border-background/60 hover:bg-background/10" : "border-foreground/20 text-foreground hover:border-foreground/50 hover:bg-foreground/5", className)}>
      {children}
    </Link>
  );
}
