import { motion } from "framer-motion";
import { ArrowRight, BadgeAlert, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { BookingForm } from "@/components/site/booking-form";
import { Seo } from "@/components/site/seo";
import { GlassPanel } from "@/components/site/styled";
import { Button } from "@/components/ui/button";
import { contactDetails, emergencyNotice, trustIndicators } from "@/lib/clinic-data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Booking() {
  return (
    <>
      <Seo
        title="Book a Consultation | Iqbal Cardiocare"
        description="Schedule a cardiology appointment with Iqbal Cardiocare using the clinic booking form."
      />
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <motion.div {...fadeUp} className="space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <HeartHandshake className="h-4 w-4" />
              Appointment booking
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Book a consultation with a calm, structured intake experience.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Use the form to request a visit for a new concern, preventive screening, or follow-up review. This first pass includes local validation and a polished booking flow ready to connect to a backend later.
              </p>
            </div>

            <GlassPanel className="rounded-[2rem] p-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/40 px-3 py-1 text-sm font-semibold text-foreground">
                  <BadgeAlert className="h-4 w-4 text-primary" />
                  Important guidance
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {emergencyNotice.title}
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">{emergencyNotice.detail}</p>
              </div>
            </GlassPanel>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="rounded-[1.5rem] border border-border/70 bg-card/75 p-4 text-sm font-medium text-foreground shadow-soft"
                >
                  {indicator}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <BookingForm
              title="Schedule a patient appointment"
              description="Choose a preferred date and time, then share the reason for the visit so the clinic team can prepare appropriately."
            />

            <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-panel">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  What happens next
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  The clinic can review the request, confirm availability, and share any instructions for tests, fasting, or reports to bring.
                </p>
              </div>
              <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-panel">
                <h2 className="font-display text-xl font-semibold text-foreground">Need help booking?</h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <p>{contactDetails.phone}</p>
                  <p>{contactDetails.email}</p>
                  <p>{contactDetails.hours}</p>
                </div>
                {/* Return home button removed */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
