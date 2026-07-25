"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-ink-700">
        <AlertTriangle className="h-7 w-7" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-ink-900">
        Something went wrong.
      </h1>
      <p className="mt-3 max-w-md text-ink-700">
        An unexpected error occurred while loading this page. You can try
        again, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
