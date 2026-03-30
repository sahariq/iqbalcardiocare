import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldPlus,
  Star,
  GraduationCap,
  Building2,
  BarChart2,
} from "lucide-react";
// Helper to get next working day (Mon-Fri), 5pm
function getNextAvailableTime(now = new Date()) {
  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  let day = now.getDay();
  let daysToAdd = 1;
  if (day === 5) { // Friday
    daysToAdd = 3;
  } else if (day === 6) { // Saturday
    daysToAdd = 2;
  } else if (day === 0) { // Sunday
    daysToAdd = 1;
  }
  // Next working day
  const next = new Date(now);
  next.setDate(now.getDate() + daysToAdd);
  next.setHours(17, 0, 0, 0); // 5:00 PM
  // Format: 5:00 PM Monday
  const options = { weekday: 'long' };
  const weekday = next.toLocaleDateString(undefined, options);
  let hour = next.getHours();
  const minute = next.getMinutes().toString().padStart(2, '0');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  if (hour === 0) hour = 12;
  return `${hour}:${minute} ${ampm} ${weekday}`;
}
import { Link } from "react-router-dom";

import { BookingForm } from "@/components/site/booking-form";
import { Seo } from "@/components/site/seo";
import { FloatingOrb, GlassPanel, MapSurface } from "@/components/site/styled";
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel";
import { Button } from "@/components/ui/button";
import {
  clinicDoctors,
  clinicHighlights,
  clinicName,
  clinicPromises,
  clinicServices,
  clinicStats,
  contactDetails,
  trustIndicators,
} from "@/lib/clinic-data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Index() {
  return (
    <>
      <Seo
        title="Iqbal Cardiocare | Modern Cardiology Clinic"
        description="Iqbal Cardiocare is a modern cardiology clinic with preventive care, diagnostics, patient testimonials, and a polished appointment booking experience."
      />

      <div className="relative isolate overflow-hidden">
        <FloatingOrb
          tone="hsl(193 95% 48% / 0.18)"
          size={340}
          className="left-[-140px] top-14"
        />
        <FloatingOrb
          tone="hsl(349 92% 72% / 0.14)"
          size={280}
          className="right-[-100px] top-44"
        />

        <section id="home" className="relative py-16 sm:py-20 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <motion.div {...fadeUp} className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <HeartPulse className="h-4 w-4" />
                Compassionate heart care for every stage of life
              </div>

              <div className="space-y-5">
                <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                  Trusted cardiology care built around clarity, calm, and faster decisions.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Iqbal Cardiocare Clinic brings together preventive screening, modern diagnostics, and supportive follow-up in one polished clinic experience designed for patients and families.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white font-bold shadow-[0_0_6px_1px_rgba(59,130,246,0.3)] hover:from-blue-600 hover:to-blue-700 hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.4)] transition"
                >
                  <Link to="/#booking">Book Appointment</Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {trustIndicators.map((indicator) => (
                  <div
                    key={indicator}
                    className="rounded-[1.5rem] border border-border/70 bg-card/70 px-4 py-4 text-sm font-medium text-foreground shadow-soft"
                  >
                    {indicator}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <GlassPanel className="rounded-[2rem] p-6 sm:p-8">
                <div className="grid gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                        A reassuring experience from booking to follow-up.
                      </h2>
                    </div>
                    <div className="hidden h-16 w-16 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-soft sm:flex">
                      <HeartPulse className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-border/70 bg-background/85 p-8 shadow-panel flex flex-col items-center text-center">
                    <img
                      src="/doctor.jpg"
                      alt="Prof. Dr. Mohammad Naeem Malik"
                      className="h-64 w-64 rounded-[2.5rem] object-cover border border-border/70 shadow-soft mb-6"
                    />
                    <h2 className="font-display text-2xl font-bold text-foreground mb-1">Prof. Dr. Mohammad Naeem Malik</h2>
                    <p className="text-primary font-semibold mb-2">Professor & Head of Cardiology, HBS Medical College, Islamabad</p>
                    <div className="flex flex-wrap justify-center gap-2 my-4">
                      {/* Badges removed as requested */}
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        <CalendarClock className="h-4 w-4" /> Next available: <span className="font-bold text-foreground">{getNextAvailableTime()}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </section>

        <section className="pb-6 sm:pb-10">
          <div className="container">
            <div className="grid gap-4 rounded-[2rem] border border-border/60 bg-card/70 p-5 shadow-panel sm:grid-cols-2 xl:grid-cols-4 xl:p-6">
              {clinicStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  {...fadeUp}
                  className="rounded-[1.5rem] bg-background/70 p-5 border-2 border-blue-400 transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
                >
                  <p className="font-display text-4xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{stat.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-20">
          <div className="container grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
            <motion.div {...fadeUp} className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/40 px-4 py-2 text-sm font-semibold text-foreground">
                <ShieldPlus className="h-4 w-4 text-primary" />
                About the clinic
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Built for modern, human-centered cardiac care.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                The clinic combines careful listening, structured diagnostics, and practical treatment plans so patients leave with both reassurance and a clear next step.
              </p>
              <div className="grid gap-4">
                {clinicPromises.map((promise) => (
                  <GlassPanel key={promise.title} className="rounded-[1.75rem] p-5">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {promise.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {promise.detail}
                    </p>
                  </GlassPanel>
                ))}
              </div>
            </motion.div>

            <div className="flex justify-center">
              <motion.article
                {...fadeUp}
                className="rounded-[2rem] border border-border/70 bg-background/85 p-8 shadow-panel flex flex-col items-center text-center max-w-xl w-full"
              >
                <img
                  src="/cardic-slider-1.png"
                  alt="Cardiac care slider"
                  className="h-52 w-52 rounded-[2.5rem] object-cover border border-border/70 shadow-soft mb-6"
                />
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">Prof. Dr. Mohammad Naeem Malik</h3>
                <p className="text-base font-medium text-muted-foreground mb-2">Professor &amp; Head of Cardiology<br/>HBS Medical College, Islamabad</p>
                <hr className="my-4 w-full border-blue-100" />
                <div className="w-full text-left mb-4">
                  <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> Credentials
                  </h4>
                  <ul className="ml-4 list-disc text-sm text-blue-900 dark:text-blue-100 space-y-1">
                    <li>MBBS</li>
                    <li>MD (Cardiology)</li>
                    <li>Diploma in Cardiology</li>
                    <li>FACC, FESC</li>
                  </ul>
                </div>
                <div className="w-full text-left mb-4">
                  <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-2">
                    <Building2 className="h-4 w-4" /> Experience
                  </h4>
                  <ul className="ml-4 list-disc text-sm text-blue-900 dark:text-blue-100 space-y-1">
                    <li>Former Executive Director, PIMS</li>
                    <li>Former Chairman, Cardiac Centre PIMS</li>
                    <li>35+ years in cardiology</li>
                  </ul>
                </div>
                <div className="w-full mt-2">
                  <div className="rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-4 py-2 text-center font-semibold text-sm border border-blue-300 dark:border-blue-700">
                    Highest-volume cardiac practice in Pakistan
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-20">
          <div className="container space-y-10">
            <motion.div {...fadeUp} className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Services
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Comprehensive cardiology services with a reassuring, polished workflow.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                The homepage now includes the core service catalog. A full dedicated services page route is scaffolded and can be expanded next without changing the shared design system.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {clinicServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                    className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-panel"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 sm:py-20">
          <div className="container space-y-10">
            <motion.div {...fadeUp} className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/40 px-4 py-2 text-sm font-semibold text-foreground">
                <Star className="h-4 w-4 text-primary" />
                Testimonials
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Patient stories that reinforce trust before the first visit.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                The carousel supports keyboard navigation and responsive card layouts, making it ready for real testimonials when available.
              </p>
            </motion.div>
            <TestimonialsCarousel />
          </div>
        </section>

        <section id="booking" className="py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <motion.div {...fadeUp} className="space-y-5 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Book your visit in minutes—no hassle.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Use our simple form to schedule an appointment. Your details are secure and the process is quick and easy.
              </p>
            </motion.div>

            <BookingForm compact />
          </div>
        </section>

        <section id="contact" className="pb-24">
          <div className="container grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <motion.div {...fadeUp} className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/40 px-4 py-2 text-sm font-semibold text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Contact and location
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Visit, call, or message us for directions and support.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Find our clinic location, contact details, and map below. WhatsApp support coming soon.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard icon={MapPin} label="Address" value={contactDetails.address} />
                <ContactCard icon={Phone} label="Phone" value={contactDetails.phone} />
                <ContactCard icon={Mail} label="Email" value={contactDetails.email} />
                <ContactCard icon={Clock3} label="Hours" value={contactDetails.hours} />
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <MapSurface className="p-6 sm:p-8">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-border/70 bg-background/75 p-6 backdrop-blur-md">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                      Clinic location map
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">
                      Easy-to-find heart care, designed for calm arrivals.
                    </h3>
                  </div>
                  <div>
                    <div className="rounded-[1.5rem] overflow-hidden border border-card bg-card/85 flex flex-col items-center">
                      <iframe
                        title="Prof. Dr Mohammed Naeem Malik Clinic Map"
                        src="https://www.google.com/maps?q=M3W2%2BJ6+Islamabad,+Pakistan&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '1rem' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                      <a
                        href="https://maps.app.goo.gl/Y9dxNQaKyUYaHpSM9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block rounded-lg bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary/90 transition"
                        style={{ width: '100%', textAlign: 'center' }}
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </MapSurface>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

type ContactCardProps = {
  icon: typeof MapPin;
  label: string;
  value: string;
};

function ContactCard({ icon: Icon, label, value }: ContactCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-soft">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-base font-medium text-foreground">{value}</p>
    </div>
  );
}