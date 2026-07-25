"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { contactSchema, type ContactInput } from "@/lib/validations/contact";
import { services } from "@/lib/data/services";
import { budgetOptions, timelineOptions } from "@/lib/validations/quote";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand-500/20 bg-brand-50/40 px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-700">
          Thanks for reaching out — our team will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, catches naive bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("company_website")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" className="mt-2" {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" className="mt-2" {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" className="mt-2" {...register("phone")} />
        </div>
        <div>
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" className="mt-2" {...register("company")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <Label>Service needed</Label>
          <Select onValueChange={(v) => setValue("service", v)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.slug} value={service.name}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Budget range</Label>
          <Select onValueChange={(v) => setValue("budget", v)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Project timeline</Label>
          <Select onValueChange={(v) => setValue("timeline", v)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelineOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" rows={5} className="mt-2" {...register("message")} />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
