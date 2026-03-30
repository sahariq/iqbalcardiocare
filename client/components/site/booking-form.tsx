import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CalendarCheck2, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

  /* ---------------- Schema ---------------- */

  const bookingSchema = z.object({
    fullName: z.string().min(2, "Enter full name"),
    contact: z
      .string()
      .min(5, "Enter phone or email")
      .refine(
        (val) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^[0-9+\-\s()]+$/.test(val),
        "Enter a valid email or phone number"
      ),
    date: z.string().min(1, "Select a date"),
    time: z.string().min(1, "Select a time"),
    reason: z.string().min(10, "Minimum 10 characters"),
  });

  type BookingFormValues = z.infer<typeof bookingSchema>;

  type Props = {
    compact?: boolean;
    title?: string;
    description?: string;
    className?: string;
  };

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  /* ---------------- Component ---------------- */

  export function BookingForm({
    compact = false,
    title = "Request an appointment",
    description = "Fill in your details and we’ll confirm your visit.",
    className,
  }: Props) {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<BookingFormValues>({
      resolver: zodResolver(bookingSchema),
    });

    const onSubmit = async (values: BookingFormValues) => {
      try {
        const res = await fetch("/api/send-appointment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: values.fullName,
            email: values.contact.includes("@") ? values.contact : undefined,
            phone: values.contact.includes("@") ? undefined : values.contact,
            reason: values.reason,
            date: values.date,
            time: values.time,
          }),
        });

        if (!res.ok) throw new Error();

        toast.success("Appointment request sent!", {
          description: `${values.date} at ${values.time}`,
        });

        reset();
      } catch {
        toast.error("Something went wrong", {
          description: "Please try again later",
        });
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "rounded-2xl border bg-card p-6 sm:p-8 shadow-sm",
          className
        )}
      >
        {/* Header */}
        <div className="mb-6 space-y-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className={cn("grid gap-5", compact ? "lg:grid-cols-2" : "sm:grid-cols-2")}> 

            {/* Name */}
            <Field label="Full name" error={errors.fullName?.message}>
              <Input {...register("fullName")} placeholder="John Doe" />
            </Field>

            {/* Contact */}
            <Field label="Contact" error={errors.contact?.message}>
              <Input {...register("contact")} placeholder="Phone or email" />
            </Field>

            {/* Date */}
            <Field label="Preferred date" error={errors.date?.message}>
              <div className="relative">
                <Input
                  {...register("date")}
                  type="date"
                  className="pr-10 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                  aria-label="Preferred date"
                />
                <CalendarCheck2
                  onClick={(e) => {
                    const input = e.currentTarget.parentElement?.querySelector("input");
                    input?.showPicker?.();
                    input?.focus();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer"
                />
              </div>
            </Field>

            {/* Time */}
            <Field label="Preferred time" error={errors.time?.message}>
              <div className="relative">
                <select
                  {...register("time")}
                  defaultValue=""
                  className="h-12 w-full rounded-2xl border bg-background px-4 pr-10 text-sm appearance-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  {timeSlots.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </Field>
          </div>

          {/* Reason */}
          <Field label="Reason" error={errors.reason?.message}>
            <Textarea
              {...register("reason")}
              placeholder="Describe your issue..."
              className="min-h-[120px]"
            />
          </Field>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Request appointment"}
          </Button>
        </form>
      </motion.div>
    );
  }

  /* ---------------- Reusable Field ---------------- */

  function Field({
    label,
    error,
    children,
  }: {
    label: string;
    error?: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="space-y-2">
        <Label className="text-sm font-medium">{label}</Label>
        {children}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }