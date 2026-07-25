import Link from "next/link";
import { Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-ink-700">
        <Compass className="h-7 w-7" />
      </div>
      <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-md text-ink-700">
        The page you&apos;re looking for may have been moved or no longer
        exists. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
