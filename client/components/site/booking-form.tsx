import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CalendarCheck2, HeartPulse } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { bookingTimeSlots } from "@/lib/clinic-data";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Enter the patient's full name."),
  contact: z
    .string()
    .min(8, "Enter a phone number or email so the clinic can confirm the visit."),
  date: z.string().min(1, "Choose a preferred appointment date."),
  time: z.string().min(1, "Choose a preferred appointment time."),
  reason: z.string().min(10, "Add a short reason for the visit."),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

type BookingFormProps = {
  compact?: boolean;
  title?: string;
  description?: string;
  className?: string;
};

const defaults: BookingFormValues = {
  fullName: "",
  contact: "",
  date: "",
  time: "",
  reason: "",
};

export function BookingForm({
  compact = false,
  title = "Request an appointment",
  description = "Share a few details and the clinic team can follow up to confirm the visit.",
  className,
}: BookingFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: defaults,
  });

  const onSubmit = async (values: BookingFormValues) => {
    try {
      const res = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.fullName,
          email: values.contact.includes('@') ? values.contact : undefined,
          phone: values.contact.includes('@') ? undefined : values.contact,
          reason: values.reason,
          date: values.date,
          time: values.time,
        }),
      });
      if (res.ok) {
        toast.success('Appointment request sent!', {
          description: `We have received your request for ${values.date} at ${values.time}. You will be contacted soon.`,
        });
        reset(defaults);
      } else {
        const data = await res.json();
        toast.error('Failed to send appointment request', {
          description: data.error || 'Please try again later.',
        });
      }
    } catch (err) {
      toast.error('Network error', {
        description: 'Could not send your request. Please try again later.',
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "rounded-[2rem] border border-border/70 bg-card p-6 shadow-panel sm:p-8",
        className,
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="space-y-3">
          {/* Patient booking form label removed */}
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>
        </div>
        <div className="hidden rounded-2xl border border-primary/15 bg-primary/10 p-3 text-primary sm:flex">
          <CalendarCheck2 className="h-5 w-5" />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className={cn("grid gap-5", compact ? "lg:grid-cols-2" : "sm:grid-cols-2")}>
          <Field label="Full name" error={errors.fullName?.message}>
            <Input
              {...register("fullName")}
              placeholder="Patient full name"
              autoComplete="name"
              aria-invalid={!!errors.fullName}
            />
          </Field>

          <Field label="Contact" error={errors.contact?.message}>
            <Input
              {...register("contact")}
              placeholder="Phone number or email"
              autoComplete="tel"
              aria-invalid={!!errors.contact}
            />
          </Field>

          <Field label="Preferred date" error={errors.date?.message}>
            <Input {...register("date")} type="date" aria-invalid={!!errors.date} />
          </Field>

          <Field label="Preferred time" error={errors.time?.message}>
            <select
              {...register("time")}
              aria-invalid={!!errors.time}
              className="flex h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue=""
            >
              <option value="" disabled>
                Select a time slot
              </option>
              {bookingTimeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Reason for visit" error={errors.reason?.message}>
          <Textarea
            {...register("reason")}
            placeholder="Describe symptoms, a follow-up need, or the type of consultation requested."
            className="min-h-[132px]"
            aria-invalid={!!errors.reason}
          />
        </Field>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request appointment"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <div className="space-y-2.5">
      <Label className="text-sm font-semibold text-foreground">{label}</Label>
      {children}
      {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}
    </div>
  );
}
