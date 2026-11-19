"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Code2,
  Globe2,
  Palette,
  Cloud,
  BrainCircuit,
  Workflow,
  Rocket,
  Building2,
  Users,
  TrendingUp,
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Truck,
  Info,
  Briefcase,
  Award,
  ShieldCheck,
  Database,
  Smartphone,
  Server,
  Megaphone,
  Baby,
  Network,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { primaryNav } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { solutions } from "@/lib/data/solutions";
import { industries } from "@/lib/data/industries";
import { projects } from "@/lib/data/projects";
import { trainingCategories } from "@/lib/data/training";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavDropdown, type NavDropdownItem } from "@/components/layout/NavDropdown";

const serviceIcons: Record<string, typeof Code2> = {
  "software-development": Code2,
  "web-development": Globe2,
  "ui-ux-design": Palette,
  "cloud-solutions": Cloud,
  "artificial-intelligence": BrainCircuit,
  "digital-transformation": Workflow,
};

const solutionIcons: Record<string, typeof Code2> = {
  "startup-mvp": Rocket,
  "saas-launch": Cloud,
  "enterprise-modernization": Building2,
  "digital-transformation-program": Workflow,
  "embedded-product-team": Users,
  "growth-and-visibility": TrendingUp,
};

const industryIcons: Record<string, typeof Code2> = {
  "financial-services": Landmark,
  healthcare: HeartPulse,
  education: GraduationCap,
  "e-commerce": ShoppingCart,
  government: Building2,
  startups: Rocket,
};

const projectIcons: Record<string, typeof Code2> = {
  "fintech-payments-platform": Landmark,
  "healthcare-patient-portal": HeartPulse,
  "logistics-fleet-tracking": Truck,
  "ecommerce-marketplace": ShoppingCart,
};

const trainingIcons: Record<string, typeof Code2> = {
  "software-development": Code2,
  "mobile-development": Smartphone,
  design: Palette,
  "data-ai": Database,
  "cloud-devops": Server,
  cybersecurity: ShieldCheck,
  "networking-it": Network,
  "digital-business": Megaphone,
  "kids-corporate": Baby,
};

const trainingItems: NavDropdownItem[] = trainingCategories.map((c) => ({
  icon: trainingIcons[c.slug] ?? GraduationCap,
  title: c.name,
  description: c.summary,
  href: `/training#${c.slug}`,
}));

const aboutItems: NavDropdownItem[] = [
  {
    icon: Info,
    title: "Our Story",
    description: "Who we are, and how we got here since 2011.",
    href: "/about",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Open roles and what it's like to build with us.",
    href: "/careers",
  },
  {
    icon: Building2,
    title: "Our Offices",
    description: "Visit us in Ibadan, Oyo State or Osogbo, Osun State.",
    href: "/contact#locations",
  },
  {
    icon: Award,
    title: "Case Studies",
    description: "Real outcomes from real engagements.",
    href: "/case-studies",
  },
];

export function Navbar() {
  const pathname = usePathname();
  // Routes that open with a dark, full-bleed hero get a transparent header.
  const isHome =
    pathname === "/" ||
    pathname.startsWith("/training") ||
    pathname.startsWith("/locations");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;
  const textClassName = transparent ? "text-white" : "text-ink-900";

  const serviceItems: NavDropdownItem[] = services
    .filter((s) => s.flagship)
    .map((s) => ({
      icon: serviceIcons[s.slug] ?? Code2,
      title: s.name,
      description: s.summary,
      href: `/services/${s.slug}`,
    }));

  const solutionItems: NavDropdownItem[] = solutions.map((s) => ({
    icon: solutionIcons[s.slug] ?? Rocket,
    title: s.name,
    description: s.summary,
    href: `/solutions#${s.slug}`,
  }));

  const industryItems: NavDropdownItem[] = industries
    .filter((i) => i.featured)
    .map((i) => ({
      icon: industryIcons[i.slug] ?? Building2,
      title: i.name,
      description: i.summary,
      href: `/industries/${i.slug}`,
    }));

  const projectItems: NavDropdownItem[] = projects
    .slice(0, 4)
    .map((p) => ({
      icon: projectIcons[p.slug] ?? Briefcase,
      title: p.name,
      description: p.summary,
      href: `/projects/${p.slug}`,
    }));

  return (
    <div
      className={cn(
        "transition-colors duration-300",
        transparent ? "bg-transparent" : "bg-white/90 shadow-sm backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={transparent ? "/logo_part_white.png" : "/logo.png"}
            alt="Olamitobi Technologies"
            width={140}
            height={36}
            priority
            className="h-8 w-auto lg:h-9"
          />
        </Link>

        <nav className={cn("hidden items-center gap-0.5 lg:flex", textClassName)}>
          {primaryNav.map((link) => {
            switch (link.label) {
              case "Services":
                return (
                  <NavDropdown
                    key={link.href}
                    label="Services"
                    items={serviceItems}
                    viewAllHref="/services"
                    viewAllLabel="View all services"
                    featured={{
                      title: "Not sure where to start?",
                      description:
                        "Tell us about your project and we'll recommend the right service.",
                      href: "/request-a-quote",
                      ctaLabel: "Get a tailored quote",
                    }}
                    triggerClassName={textClassName}
                  />
                );
              case "Solutions":
                return (
                  <NavDropdown
                    key={link.href}
                    label="Solutions"
                    items={solutionItems}
                    viewAllHref="/solutions"
                    viewAllLabel="View all solutions"
                    featured={{
                      title: "Packaged, not generic.",
                      description:
                        "Our solutions bundle the exact services proven to work for that outcome.",
                      href: "/book-consultation",
                      ctaLabel: "Book a consultation",
                    }}
                    triggerClassName={textClassName}
                  />
                );
              case "Industries":
                return (
                  <NavDropdown
                    key={link.href}
                    label="Industries"
                    items={industryItems}
                    viewAllHref="/industries"
                    viewAllLabel="View all industries"
                    triggerClassName={textClassName}
                  />
                );
              case "Training":
                return (
                  <NavDropdown
                    key={link.href}
                    label="Training"
                    items={trainingItems}
                    viewAllHref="/training"
                    viewAllLabel="Browse all tech courses"
                    featured={{
                      title: "Training Academy",
                      description:
                        "Practical tech courses in Osogbo, Ibadan and online. Physical, live online and weekend classes.",
                      href: "/training",
                      ctaLabel: "Find your course",
                    }}
                    wide
                    triggerClassName={textClassName}
                  />
                );
              case "Projects":
                return (
                  <NavDropdown
                    key={link.href}
                    label="Projects"
                    items={projectItems}
                    viewAllHref="/projects"
                    viewAllLabel="View all projects"
                    triggerClassName={textClassName}
                  />
                );
              case "About":
                return (
                  <NavDropdown
                    key={link.href}
                    label="About"
                    items={aboutItems}
                    viewAllHref="/about"
                    viewAllLabel="More about us"
                    columns={1}
                    triggerClassName={textClassName}
                  />
                );
              default:
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-current/5 xl:px-4"
                  >
                    {link.label}
                  </Link>
                );
            }
          })}
        </nav>

        <div className="hidden lg:block">
          <Button variant={transparent ? "brand" : "primary"} asChild>
            <Link href="/request-a-quote">Start a Project</Link>
          </Button>
        </div>

        <div className={textClassName}>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
