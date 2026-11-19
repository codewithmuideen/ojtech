"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import {
  consultationSchema,
  type ConsultationInput,
} from "@/lib/validations/consultation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SuccessModal } from "@/components/forms/SuccessModal";

export function ConsultationForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationInput>({ resolver: zodResolver(consultationSchema) });

  async function onSubmit(data: ConsultationInput) {
    setStatus("loading");
    try {
      const res = await fetch("/api/consultation.php", {
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

  return (
    <>
      <SuccessModal
        open={status === "success"}
        onOpenChange={(open) => !open && setStatus("idle")}
        title="Request received"
        description="We'll confirm your preferred slot by email within a few hours. Thanks for reaching out."
      />
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
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
          <Label htmlFor="c-name">Full name</Label>
          <Input id="c-name" className="mt-2" {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" type="email" className="mt-2" {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-phone">Phone (optional)</Label>
          <Input id="c-phone" className="mt-2" {...register("phone")} />
        </div>
        <div>
          <Label htmlFor="c-company">Company (optional)</Label>
          <Input id="c-company" className="mt-2" {...register("company")} />
        </div>
      </div>

      <div>
        <Label htmlFor="c-topic">What would you like to discuss?</Label>
        <Input id="c-topic" className="mt-2" {...register("topic")} />
        {errors.topic && (
          <p className="mt-1 text-xs text-red-600">{errors.topic.message}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-date">Preferred date</Label>
          <Input id="c-date" type="date" className="mt-2" {...register("preferredDate")} />
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-red-600">{errors.preferredDate.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="c-time">Preferred time</Label>
          <Input id="c-time" type="time" className="mt-2" {...register("preferredTime")} />
          {errors.preferredTime && (
            <p className="mt-1 text-xs text-red-600">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="c-notes">Anything else we should know? (optional)</Label>
        <Textarea id="c-notes" rows={4} className="mt-2" {...register("notes")} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong submitting your request. Please try again.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Request Consultation
      </Button>
      </form>
    </>
  );
}
