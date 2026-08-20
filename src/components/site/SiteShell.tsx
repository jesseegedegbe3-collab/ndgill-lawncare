import type { ReactNode } from "react";
import { SiteHeader } from "./Header";
import { SiteFooter, StickyMobileBar } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <a href="#main" className="sr-only z-[70] rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <div className="h-20 lg:hidden" aria-hidden />
      <StickyMobileBar />
    </div>
  );
}
