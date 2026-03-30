import { Menu, MessageCircle, MoveRight, Stethoscope } from "lucide-react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// Custom hook for scroll spy with navbar offset
const useScrollSpy = (sectionIds: string[], navbarHeight = 72) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: `-${navbarHeight + 1}px 0px 0px 0px`,
      }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds, navbarHeight]);
  return activeSection;
};
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
  // Section IDs for scroll spy (include booking)
  const sectionIds = ["home", "about", "services", "testimonials", "booking", "contact"];
  const activeSection = useScrollSpy(sectionIds, 80); // 80px for safety

  // Smooth scroll to section with navbar offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 80;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Navbar link click handler
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);
  };

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
          <Link to="/" className="flex items-center gap-3" aria-label="Iqbal Cardiocare Clinic homepage">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft overflow-hidden">
              <img src="/heartbeat.png" alt="Heartbeat Icon" className="h-8 w-8" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                Iqbal Cardiocare Clinic
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Cardiology clinic
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              let isActive = false;
              let section = "";
              if (item.to.startsWith("/#")) {
                section = item.to.replace("/#", "");
                isActive = activeSection === section;
              } else if (item.to === "/") {
                section = "home";
                isActive = activeSection === "home";
              }
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  className={`rounded-full px-4 text-sm font-medium hover:text-foreground transition-all duration-200 ${isActive ? 'font-bold text-teal-600 dark:text-teal-400 underline underline-offset-8 decoration-2 decoration-teal-500' : 'text-foreground/80'}`}
                  onClick={item.to.startsWith("/#") || item.to === "/" ? (e) => handleNavClick(e, section) : undefined}
                  asChild={false}
                >
                  <a href={item.to} tabIndex={0}>{item.label}</a>
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
          window.open('https://wa.me/923355411602', '_blank')
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-4.988-1.357l-.361-.214-3.709.974.991-3.617-.235-.372A9.86 9.86 0 012.1 11.893C2.122 6.728 6.714 2.13 11.88 2.102h.019c2.652 0 5.14 1.037 7.013 2.911a9.825 9.825 0 012.893 6.995c-.017 5.165-4.609 9.763-9.764 9.763zm8.413-18.185A11.815 11.815 0 0011.881.102h-.022C5.29.134.13 5.308.102 11.899c.019 2.104.553 4.149 1.601 5.965L.057 23.925a1 1 0 001.225 1.225l6.091-1.646a11.822 11.822 0 005.006 1.184h.005c6.591 0 11.765-5.174 11.798-11.764a11.74 11.74 0 00-3.454-8.389z"/></svg>
      </WhatsAppDock>
    </div>
  );
}
