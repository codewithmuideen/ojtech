"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown, ArrowUpRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface NavDropdownItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface NavDropdownFeatured {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  viewAllHref: string;
  viewAllLabel: string;
  featured?: NavDropdownFeatured;
  columns?: 1 | 2;
  /** Wider panel with a 3-column grid, for long lists. */
  wide?: boolean;
  triggerClassName?: string;
}

export function NavDropdown({
  label,
  items,
  viewAllHref,
  viewAllLabel,
  featured,
  columns = 2,
  wide = false,
  triggerClassName,
}: NavDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-current/5 xl:px-4",
          triggerClassName
        )}
      >
        {label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
          >
            <div
              className={cn(
                "flex overflow-hidden rounded-2xl border border-ink-900/10 bg-white text-ink-900 shadow-2xl shadow-ink-950/10",
                wide ? "w-[900px]" : featured ? "w-[700px]" : columns === 2 ? "w-[560px]" : "w-[320px]"
              )}
            >
              <div
                className={cn(
                  "grid flex-1 gap-1 p-4",
                  wide ? "grid-cols-3" : columns === 2 ? "grid-cols-2" : "grid-cols-1"
                )}
              >
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-mist-100"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-display text-sm font-semibold">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-ink-700 line-clamp-2">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                ))}
                <Link
                  href={viewAllHref}
                  className={cn(
                    "mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-mist-50 p-3 text-sm font-medium text-brand-700 transition-colors hover:bg-mist-100",
                    wide ? "col-span-3" : columns === 2 && "col-span-2"
                  )}
                >
                  {viewAllLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {featured && (
                <div className="flex w-64 shrink-0 flex-col justify-between bg-gradient-to-br from-ink-950 to-ink-800 p-6">
                  <div>
                    <p className="font-display text-base font-semibold text-white">
                      {featured.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {featured.description}
                    </p>
                  </div>
                  <Link
                    href={featured.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                  >
                    {featured.ctaLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
