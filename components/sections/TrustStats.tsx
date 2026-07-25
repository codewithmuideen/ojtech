import { siteConfig, companyStats } from "@/lib/data/site-config";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export function TrustStats() {
  return (
    <section className="border-b border-ink-900/5 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-700">
            Building Technology Since {siteConfig.foundedYear}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {companyStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-ink-900 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-700">{stat.label}</p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
