import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BrandMark, SITE } from "./Brand";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow",
        scrolled && "shadow-soft",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 md:h-20 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label={`${SITE.name} — home`}
        >
          <BrandMark className="h-10 w-10 md:h-11 md:w-11 transition-transform group-hover:scale-[1.04]" />
          <div className="leading-tight">
            <div className="font-bold text-base md:text-lg text-primary tracking-tight">
              ND Gill
            </div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
              Lawn Care · Snow Removal
            </div>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1"
        >
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-md text-sm font-semibold transition-colors",
                  isActive
                    ? "text-primary bg-accent"
                    : "text-foreground/75 hover:text-primary hover:bg-accent/60",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-foreground/90 hover:text-primary transition-colors"
            aria-label={`Call us at ${SITE.phone}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-4 w-4" />
            </span>
            <span className="hidden xl:inline">{SITE.phone}</span>
          </a>
          <Button
            asChild
            size="lg"
            className="rounded-md font-bold tracking-wider uppercase text-xs px-5 shadow-soft"
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground hover:bg-accent transition-colors"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden border-t border-border/60 bg-background overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        )}
      >
        <nav
          aria-label="Mobile primary"
          className="flex flex-col p-4 gap-1 max-w-7xl mx-auto"
        >
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-3 rounded-md text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-accent text-primary"
                    : "text-foreground/85 hover:bg-accent",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary/10 px-3 py-3 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" />
            Call {SITE.phone}
          </a>
          <Button
            asChild
            size="lg"
            className="mt-1 font-bold uppercase tracking-wider"
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
