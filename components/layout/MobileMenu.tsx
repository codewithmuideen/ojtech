"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { primaryNav } from "@/lib/data/nav";
import { siteConfig, telHref } from "@/lib/data/site-config";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-current lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </DialogPrimitive.Trigger>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-ink-950"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink-950 px-6 pb-10 pt-6 text-white"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between">
                  <DialogPrimitive.Title asChild>
                    <Link href="/" onClick={() => setOpen(false)}>
                      <Image
                        src="/logo_part_white.png"
                        alt="Olamitobi Technologies"
                        width={140}
                        height={36}
                        className="h-8 w-auto"
                      />
                    </Link>
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </DialogPrimitive.Close>
                </div>

                <nav className="mt-12 flex flex-1 flex-col gap-2">
                  {primaryNav.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl font-medium"
                      >
                        {link.label}
                        <ArrowUpRight className="h-6 w-6 text-brand-400" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <Button
                  variant="brand"
                  size="lg"
                  asChild
                  className="mt-8 w-full"
                >
                  <Link href="/request-a-quote" onClick={() => setOpen(false)}>
                    Start a Project
                  </Link>
                </Button>
                <div className="mt-8 space-y-1 text-sm text-white/60">
                  {siteConfig.offices.map((o) => (
                    <p key={o.slug}>
                      <span className="font-medium text-white">{o.city}:</span> {o.street}
                    </p>
                  ))}
                  <a href={telHref(siteConfig.phones[0])} className="block pt-2 text-white">
                    {siteConfig.phones[0]}
                  </a>
                </div>
                <SocialLinks links={siteConfig.social} className="mt-6" />
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
