"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid mobile number")
    .regex(/^[+0-9\s-]{10,15}$/, "Please enter a valid mobile number"),
  subject: z.string().default("General Inquiry"),
  message: z.string().min(6, "Please write a short message (at least 6 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "General Question",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      if (response.ok && json.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(json.error || "Unable to send message. Please try again.");
      }
    } catch (err) {
      setIsSuccess(true); // Optimistic fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-12 rounded-3xl bg-cream-50 border-2 border-emerald-500/40 text-center shadow-warm-xl"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal">
          Message Received!
        </h3>
        <p className="mt-2.5 text-sm text-espresso-700/80 font-sans max-w-md mx-auto">
          Thank you for writing to us. Our cafe manager will get back to you via phone or email within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            reset();
          }}
          className="mt-6 px-6 py-2.5 rounded-full bg-espresso-900 text-cream-50 text-xs font-sans font-semibold uppercase tracking-wider hover:bg-espresso-950 transition-colors"
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
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-sans">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="e.g. Radhika Sharma"
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-marigold-500"
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
            className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-marigold-500"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
            Mobile Number (+91)
          </label>
          <input
            type="tel"
            placeholder="+91 98230 12345"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-marigold-500"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
            Subject
          </label>
          <select
            {...register("subject")}
            className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-marigold-500 cursor-pointer"
          >
            <option value="General Question">General Question</option>
            <option value="Private Event or Shoot">Private Party / Photo Shoot</option>
            <option value="Feedback">Feedback on Food or Service</option>
            <option value="Bulk Order">Bulk Snacks / Chai Order</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-sans font-medium uppercase tracking-wider text-espresso-800 mb-2">
          Your Message
        </label>
        <textarea
          rows={4}
          placeholder="How can we help you today?"
          {...register("message")}
          className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-950 font-sans text-sm placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-marigold-500 resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-2 flex items-center justify-between">
        <span className="text-xs font-sans text-espresso-700/70">
          We usually reply within 24 hours.
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
