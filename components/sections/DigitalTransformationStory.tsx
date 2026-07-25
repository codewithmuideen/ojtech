import { Reveal } from "@/components/motion/Reveal";
import { StickyCard, StickyStack } from "@/components/motion/StickyCards";

const stages = [
  {
    label: "Business Challenge",
    title: "Manual processes are quietly limiting growth.",
    description:
      "Spreadsheets, disconnected tools, and paper-based approvals slow teams down and hide the data leaders need to make decisions.",
  },
  {
    label: "Strategy",
    title: "We map the path before writing a line of code.",
    description:
      "We identify which processes to digitize first, sequenced around what will disrupt operations least and deliver value fastest.",
  },
  {
    label: "Design",
    title: "Interfaces designed around how your team actually works.",
    description:
      "Every workflow is designed around the people who will use it daily — not a generic template forced onto your business.",
  },
  {
    label: "Technology",
    title: "Systems built to integrate, not isolate.",
    description:
      "We build on architecture that connects with the tools you already rely on, rather than creating another disconnected silo.",
  },
  {
    label: "Automation",
    title: "Repetitive work moves from people to systems.",
    description:
      "Approvals, reporting, and data entry get automated — freeing your team to focus on work that needs real judgment.",
  },
  {
    label: "Growth",
    title: "A foundation that scales with the business.",
    description:
      "The systems we build are designed to grow with you, so the next stage of growth doesn't require starting over.",
  },
];

export function DigitalTransformationStory() {
  return (
    <section className="bg-ink-950 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Digital Transformation
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            From business challenges to digital solutions.
          </h2>
        </Reveal>

        <StickyStack className="mt-16">
          {stages.map((stage, index) => (
            <StickyCard key={stage.label} index={index} className="mb-6">
              <div className="rounded-3xl border border-white/10 bg-ink-900 p-8 sm:p-12">
                <span className="font-display text-sm font-semibold text-brand-400">
                  {String(index + 1).padStart(2, "0")} — {stage.label}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                  {stage.title}
                </h3>
                <p className="mt-4 max-w-xl text-white/70">{stage.description}</p>
              </div>
            </StickyCard>
          ))}
        </StickyStack>
      </div>
    </section>
  );
}
