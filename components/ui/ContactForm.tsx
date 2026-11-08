"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.enum([
    "General Inquiry",
    "Private Event & Photography",
    "Wholesale Coffee Beans",
    "Feedback & Compliments",
    "Press & Collaborations",
  ]),
  message: z.string().min(10, "Message should be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "General Inquiry",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate brief network dispatch
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-12 rounded-3xl bg-cream-50 border-2 border-gold-500/40 text-center shadow-warm-xl"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-700 mb-4">
          <CheckCircle2 className="h-8 w-8 text-sage-600" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal">
          Message Received With Gratitude
        </h3>
        <p className="mt-3 text-sm text-espresso-700/80 font-sans max-w-md mx-auto">
          Thank you for reaching out to Café Lily. A member of our host or hospitality team will respond within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            reset();
          }}
          className="mt-6 px-6 py-2.5 rounded-full bg-espresso-900 text-cream-50 text-xs font-sans font-medium uppercase tracking-wider hover:bg-espresso-950 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-10 rounded-3xl bg-cream-50 border border-cream-200/90 shadow-warm-xl space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="e.g. Radhika Sharma"
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="radhika@example.com"
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 98230 00000"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
            Inquiry Category
          </label>
          <select
            {...register("subject")}
            className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Private Event & Photography">Private Event &amp; Photography Shoot</option>
            <option value="Wholesale Coffee Beans">Wholesale Coffee &amp; Beans Supply</option>
            <option value="Feedback & Compliments">Feedback &amp; Hospitality Experience</option>
            <option value="Press & Collaborations">Press, Media &amp; Brand Pop-ups</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
          Your Message
        </label>
        <textarea
          rows={4}
          placeholder="How can our roastery team assist you today?"
          {...register("message")}
          className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-2 flex items-center justify-between">
        <span className="text-xs font-sans text-espresso-700/70">
          Response guaranteed within 24 business hours.
        </span>
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          rightIcon={<Send className="h-4 w-4" />}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
}

