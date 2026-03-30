import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clinicTestimonials } from "@/lib/clinic-data";

export function TestimonialsCarousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="relative mx-auto max-w-6xl px-4 sm:px-10"
    >
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {clinicTestimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.name}
              className="md:basis-1/2 xl:basis-1/3"
            >
              <article className="flex h-full flex-col rounded-[2rem] border border-border/70 bg-card p-6 shadow-panel">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="flex-1 text-base leading-8 text-muted-foreground">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6 border-t border-border/60 pt-5">
                  <p className="font-display text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 top-auto bottom-[-4.5rem] border-border/70 bg-background/90 text-foreground hover:bg-background sm:left-0" />
        <CarouselNext className="right-1 top-auto bottom-[-4.5rem] border-border/70 bg-background/90 text-foreground hover:bg-background sm:right-0" />
      </Carousel>
    </motion.div>
  );
}
