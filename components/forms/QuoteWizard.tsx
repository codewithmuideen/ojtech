"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

import {
  quoteSchema,
  quoteSteps,
  projectTypeOptions,
  budgetOptions,
  timelineOptions,
  type QuoteInput,
} from "@/lib/validations/quote";
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
import { cn } from "@/lib/utils";

export function QuoteWizard() {
  const [stepIndex, setStepIndex] = React.useState(0);
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<QuoteInput>({ resolver: zodResolver(quoteSchema) });

  const step = quoteSteps[stepIndex];
  const isLastStep = stepIndex === quoteSteps.length - 1;
  const values = watch();

  async function handleNext() {
    if (step.fields.length > 0) {
      const valid = await trigger(step.fields as unknown as (keyof QuoteInput)[]);
      if (!valid) return;
    }
    setStepIndex((i) => Math.min(i + 1, quoteSteps.length - 1));
  }

  function handleBack() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  async function onSubmit(data: QuoteInput) {
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand-500/20 bg-brand-50/40 px-8 py-20 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-600" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900">
          Quote request received
        </h3>
        <p className="mt-3 max-w-md text-sm text-ink-700">
          Thanks, {getValues("fullName")?.split(" ")[0] || "there"} — our team will
          review your requirements and follow up by email within one business day.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress indicator */}
      <div className="mb-10 flex items-center gap-2">
        {quoteSteps.map((s, i) => (
          <div
            key={s.id}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              i <= stepIndex ? "bg-brand-500" : "bg-mist-200"
            )}
          />
        ))}
      </div>
      <p className="mb-6 text-xs font-medium uppercase tracking-wide text-ink-700">
        Step {stepIndex + 1} of {quoteSteps.length} — {step.title}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("company_website_confirm")}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            {step.id === "about-you" && (
              <>
                <div>
                  <Label htmlFor="fullName">Full name</Label>
                  <Input id="fullName" className="mt-2" {...register("fullName")} />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="role">Your role (optional)</Label>
                  <Input id="role" className="mt-2" {...register("role")} />
                </div>
              </>
            )}

            {step.id === "business" && (
              <>
                <div>
                  <Label htmlFor="company">Company / organization</Label>
                  <Input id="company" className="mt-2" {...register("company")} />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-600">{errors.company.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="industry">Industry (optional)</Label>
                  <Input id="industry" className="mt-2" {...register("industry")} />
                </div>
                <div>
                  <Label htmlFor="website">Website (optional)</Label>
                  <Input id="website" className="mt-2" {...register("website")} />
                </div>
              </>
            )}

            {step.id === "project-type" && (
              <div>
                <Label>What are you looking to build?</Label>
                <Select
                  value={values.projectType}
                  onValueChange={(v) => setValue("projectType", v)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.projectType && (
                  <p className="mt-1 text-xs text-red-600">{errors.projectType.message}</p>
                )}
              </div>
            )}

            {step.id === "requirements" && (
              <div>
                <Label htmlFor="requirements">
                  Tell us about your requirements and goals
                </Label>
                <Textarea
                  id="requirements"
                  rows={6}
                  className="mt-2"
                  {...register("requirements")}
                />
                {errors.requirements && (
                  <p className="mt-1 text-xs text-red-600">{errors.requirements.message}</p>
                )}
              </div>
            )}

            {step.id === "budget" && (
              <div>
                <Label>What&apos;s your estimated budget?</Label>
                <Select
                  value={values.budget}
                  onValueChange={(v) => setValue("budget", v)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="mt-1 text-xs text-red-600">{errors.budget.message}</p>
                )}
              </div>
            )}

            {step.id === "timeline" && (
              <div>
                <Label>What&apos;s your preferred timeline?</Label>
                <Select
                  value={values.timeline}
                  onValueChange={(v) => setValue("timeline", v)}
                >
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
                {errors.timeline && (
                  <p className="mt-1 text-xs text-red-600">{errors.timeline.message}</p>
                )}
              </div>
            )}

            {step.id === "contact" && (
              <>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="mt-2" {...register("email")} />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" className="mt-2" {...register("phone")} />
                </div>
              </>
            )}

            {step.id === "review" && (
              <div className="space-y-3 rounded-2xl border border-ink-900/10 bg-mist-50 p-6 text-sm">
                <ReviewRow label="Name" value={values.fullName} />
                <ReviewRow label="Company" value={values.company} />
                <ReviewRow label="Project type" value={values.projectType} />
                <ReviewRow label="Budget" value={values.budget} />
                <ReviewRow label="Timeline" value={values.timeline} />
                <ReviewRow label="Email" value={values.email} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {status === "error" && (
          <p className="mt-4 text-sm text-red-600">
            Something went wrong submitting your request. Please try again.
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={handleBack}
            disabled={stepIndex === 0}
            className={stepIndex === 0 ? "invisible" : ""}
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>

          {isLastStep ? (
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit Request
            </Button>
          ) : (
            <Button type="button" onClick={handleNext}>
              Continue <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-ink-900/5 py-2 last:border-0">
      <span className="text-ink-700">{label}</span>
      <span className="font-medium text-ink-900">{value || "—"}</span>
    </div>
  );
}
