import "./global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SiteShell } from "@/components/site/site-shell";
import { PlaceholderPage } from "@/components/site/placeholder-page";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Booking from "@/pages/Booking";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<SiteShell />}>
              <Route path="/" element={<Index />} />
              <Route path="/booking" element={<Booking />} />
              <Route
                path="/about"
                element={
                  <PlaceholderPage
                    title="About Iqbal Cardiocare"
                    description="The design system, routing, and shared layout are in place. This dedicated page can be expanded next with the clinic story, doctor bios, and mission details."
                    bullets={[
                      "Clinic story and brand voice section",
                      "Expanded doctor profiles and credentials",
                      "Mission, values, and patient care philosophy",
                      "Additional imagery and outcomes content",
                    ]}
                  />
                }
              />
              <Route
                path="/services"
                element={
                  <PlaceholderPage
                    title="Cardiology Services"
                    description="The homepage already includes the service overview. This route is scaffolded so a richer services directory can be generated next without changing the global navigation."
                    bullets={[
                      "Service-specific detail cards",
                      "Diagnostic and follow-up categories",
                      "Preparation notes for patients",
                      "Insurance or consultation guidance",
                    ]}
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <PlaceholderPage
                    title="Contact the Clinic"
                    description="The homepage already has the contact block and styled map surface. This page shell is ready for an expanded contact and directions experience if needed."
                    bullets={[
                      "Interactive map embed",
                      "Transport and parking notes",
                      "Expanded contact methods",
                      "FAQ for first-time visitors",
                    ]}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
