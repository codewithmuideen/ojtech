import { Navbar } from "@/components/layout/Navbar";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex flex-col">
      <Navbar />
    </header>
  );
}
