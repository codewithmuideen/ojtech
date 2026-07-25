"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check } from "lucide-react";

import { newsletterSchema, type NewsletterInput } from "@/lib/validations/newsletter";
import { cn } from "@/lib/utils";

export function NewsletterForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(data: NewsletterInput) {
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
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
      <div
        className={cn(
          "flex items-center gap-2 text-sm font-medium",
          variant === "dark" ? "text-brand-300" : "text-brand-700"
        )}
      >
        <Check className="h-4 w-4" /> You&apos;re subscribed. Thanks for joining.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border p-1.5",
          variant === "dark" ? "border-white/20" : "border-ink-900/15"
        )}
      >
        <input
          type="email"
          placeholder="you@company.com"
          aria-label="Email address"
          className={cn(
            "h-10 flex-1 bg-transparent px-4 text-sm outline-none placeholder:opacity-60",
            variant === "dark" ? "text-white" : "text-ink-900"
          )}
          {...register("email")}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors disabled:opacity-60",
            variant === "dark"
              ? "bg-brand-500 text-ink-950 hover:bg-brand-400"
              : "bg-ink-900 text-white hover:bg-ink-800"
          )}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {errors.email && (
        <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
