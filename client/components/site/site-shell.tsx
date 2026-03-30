import { Menu, MessageCircle, MoveRight } from "lucide-react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { WhatsAppDock } from "@/components/site/styled";
import {
  clinicName,
  contactDetails,
  navItems,
  socialLabels,
} from "@/lib/clinic-data";

export function SiteShell() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/88 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label={`${clinicName} homepage`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft overflow-hidden">
              <img src="/pic6.png" alt="Clinic Logo" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                {clinicName}
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Cardiology clinic
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));
              return (
                <Button
                  key={item.label}
                  asChild
                  variant="ghost"
                  className={`rounded-full px-4 text-sm font-medium hover:text-foreground ${isActive ? 'font-bold text-foreground' : 'text-foreground/80'}`}
                >
                  <Link to={item.to}>{item.label}</Link>
                </Button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Book visit button removed */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-full border border-border/70 lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[320px] border-border/70 bg-background/95 px-6">
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="font-display text-2xl">{clinicName}</SheetTitle>
                </SheetHeader>
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      asChild
                      variant="ghost"
                      className="w-full justify-start rounded-2xl px-4 py-6 text-base"
                    >
                      <Link to={item.to}>{item.label}</Link>
                    </Button>
                  ))}
                </div>
                <div className="mt-8 rounded-[1.75rem] border border-primary/15 bg-primary/10 p-5 text-sm text-primary">
                  Same-week slots available for many consultations.
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border/60 bg-card/65 py-14">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr,0.8fr,0.8fr]">
          <div className="space-y-4">
            <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {clinicName}
            </p>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Modern cardiology care with thoughtful diagnostics, preventive planning, and follow-up support designed around patients and families.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLabels.map((label) => (
                <Button
                  key={label}
                  type="button"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => toast("Add clinic social profile", { description: `${label} is styled in the footer and ready to connect once the profile URL is available.` })}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Quick links</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-foreground" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">
            <h2 className="font-display text-lg font-semibold text-foreground">Clinic contact</h2>
            <p>{contactDetails.address}</p>
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.hours}</p>
          </div>
        </div>
        <div className="container mt-10 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {clinicName}. All rights reserved.
        </div>
      </footer>

      <WhatsAppDock
        type="button"
        aria-label="WhatsApp consultation button"
        onClick={() =>
          toast("WhatsApp shortcut ready", {
            description:
              "Connect the clinic WhatsApp number to turn this floating action into direct messaging.",
          })
        }
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp consult</span>
      </WhatsAppDock>
    </div>
  );
}
