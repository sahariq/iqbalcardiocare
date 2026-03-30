import { AlertCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Seo } from "@/components/site/seo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Page not found | Iqbal Cardiocare"
        description="The requested page could not be found. Return to the Iqbal Cardiocare homepage."
      />
      <section className="flex min-h-[70vh] items-center py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-border/70 bg-card p-8 text-center shadow-panel sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
              <AlertCircle className="h-7 w-7" />
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              The route <span className="font-medium text-foreground">{location.pathname}</span> does not exist yet.
              Return to the clinic homepage or open the booking page.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/">Back to homepage</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/booking">Open booking page</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
