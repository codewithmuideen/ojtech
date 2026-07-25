import type { Metadata } from "next";
import Link from "next/link";
import { WifiOff } from "lucide-react";

export const metadata: Metadata = {
  title: "You're offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mist-100 text-ink-700">
        <WifiOff className="h-7 w-7" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-ink-900">
        You&apos;re offline
      </h1>
      <p className="mt-3 max-w-md text-ink-700">
        It looks like you&apos;ve lost your connection. Reconnect and try again —
        pages you&apos;ve already visited may still be available.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
