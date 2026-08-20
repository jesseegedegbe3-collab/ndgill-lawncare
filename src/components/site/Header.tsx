import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandMark, SITE } from "./Brand";
import { Container, PrimaryCta } from "./ui";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="bg-foreground text-background">
        <Container className="flex max-w-7xl items-center justify-between gap-4 py-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/80">
            Unofficial Website Redesign Concept
          </p>
          <p className="hidden text-[11px] text-background/55 sm:block">Created for demonstration</p>
        </Container>
      </div>
      <header className={cn("sticky top-0 z-50 border-b bg-background/90 backdrop-blur transition-all duration-300", scrolled ? "border-border shadow-soft" : "border-transparent")}>
        <Container className={cn("flex max-w-7xl flex-nowrap items-center justify-between gap-4 transition-all duration-300", scrolled ? "py-3" : "py-4")}>
          <Link to="/" className="flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={`${SITE.name} — homepage`}>
            <BrandMark className="size-9" />
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-tight text-foreground">ND Gill Lawn Care</span>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Snow Removal · Winnipeg</span>
            </span>
          </Link>

          <nav className="hidden shrink-0 items-center gap-0.5 xl:flex" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={({ isActive }) => cn("whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", isActive ? "text-primary" : "text-foreground/70")}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary" aria-label={`Call ${SITE.phone}`}>
              <Phone className="size-4" />
              {SITE.phone}
            </a>
            <PrimaryCta href="/contact" className="h-11 whitespace-nowrap px-5" arrow={false}>Get a Free Quote</PrimaryCta>
          </div>

          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="grid size-11 shrink-0 place-items-center rounded-md border border-border text-foreground xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </header>

      <div id="mobile-menu" className={cn("fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto bg-background px-5 pb-8 pt-24 transition-opacity xl:hidden", open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")} aria-hidden={!open}>
        <nav className="flex flex-col" aria-label="Mobile">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={() => setOpen(false)} className={({ isActive }) => cn("border-b border-border py-4 text-xl font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground")}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <PrimaryCta href="/contact" className="w-full" arrow={false}>Get a Free Quote</PrimaryCta>
          <a href={`tel:${SITE.phoneRaw}`} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-border text-sm font-semibold text-foreground"><Phone className="size-4" /> Call {SITE.phone}</a>
        </div>
      </div>
    </>
  );
}
