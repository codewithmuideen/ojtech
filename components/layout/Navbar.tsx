"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { primaryNav } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;
  const flagshipServices = services.filter((s) => s.flagship);

  return (
    <div
      className={cn(
        "transition-colors duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white/90 shadow-sm backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={transparent ? "/logo_white.png" : "/logo.png"}
            alt="Olamitobi Technologies"
            width={140}
            height={36}
            priority
            className="h-8 w-auto lg:h-9"
          />
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-1 md:flex",
            transparent ? "text-white" : "text-ink-900"
          )}
        >
          {primaryNav.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-current/5"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-ink-900/10 bg-white p-4 text-ink-900 shadow-xl">
                      {flagshipServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="rounded-xl p-3 transition-colors hover:bg-mist-100"
                        >
                          <p className="font-display text-sm font-semibold">
                            {service.name}
                          </p>
                          <p className="mt-1 text-xs text-ink-700 line-clamp-2">
                            {service.summary}
                          </p>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="col-span-2 mt-1 rounded-xl bg-mist-50 p-3 text-center text-sm font-medium text-brand-700 transition-colors hover:bg-mist-100"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-current/5"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Button
            variant={transparent ? "brand" : "primary"}
            asChild
          >
            <Link href="/request-a-quote">Start a Project</Link>
          </Button>
        </div>

        <div className={cn(transparent ? "text-white" : "text-ink-900")}>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
