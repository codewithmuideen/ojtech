"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { UserRound } from "lucide-react";

import { team, type TeamMember, type TeamMemberSocial } from "@/lib/data/team";
import { RevealGroup, revealItem, RevealItem } from "@/components/motion/Reveal";
import { LinkedInIcon, XIcon, FacebookIcon } from "@/components/shared/SocialIcons";
import { cn } from "@/lib/utils";

// Placeholder until each person's real profile links are added to team.ts --
// keeps the icons visible everywhere without pointing anywhere real yet.
const placeholderSocial: TeamMemberSocial = {
  linkedin: "#",
  x: "#",
  facebook: "#",
};

const overlayVariants: Variants = {
  rest: { y: "100%" },
  hover: { y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

function Avatar({ member, size }: { member: TeamMember; size: number }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={member.name}
        width={size}
        height={size}
        className="rounded-full object-cover ring-1 ring-inset ring-ink-900/10"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white"
      style={{ width: size, height: size }}
    >
      <UserRound className="h-1/2 w-1/2" strokeWidth={1.5} />
    </div>
  );
}

function SocialLinks({
  social,
  className,
  iconClassName,
}: {
  social?: TeamMemberSocial;
  className?: string;
  iconClassName?: string;
}) {
  if (!social || (!social.linkedin && !social.x && !social.facebook)) return null;

  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {social.linkedin && (
        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition-transform hover:scale-110"
        >
          <LinkedInIcon className={iconClassName} />
        </a>
      )}
      {social.x && (
        <a
          href={social.x}
          target="_blank"
          rel="noreferrer"
          aria-label="X (Twitter)"
          className="transition-transform hover:scale-110"
        >
          <XIcon className={iconClassName} />
        </a>
      )}
      {social.facebook && (
        <a
          href={social.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="transition-transform hover:scale-110"
        >
          <FacebookIcon className={iconClassName} />
        </a>
      )}
    </div>
  );
}

function FounderCard({ member }: { member: TeamMember }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover={shouldReduceMotion ? undefined : "hover"}
      variants={cardVariants}
      className="group relative overflow-hidden rounded-3xl border border-ink-900/10 bg-mist-50 p-10 text-center shadow-sm"
    >
      <motion.div
        variants={overlayVariants}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500 to-ink-900"
      />

      <div className="relative z-10">
        <div className="mx-auto w-fit overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
          <Avatar member={member} size={96} />
        </div>
        <p className="mt-6 font-display text-xl font-semibold text-ink-900 transition-colors duration-300 group-hover:text-white">
          {member.name}
        </p>
        <p className="mt-1 text-sm font-medium text-brand-700 transition-colors duration-300 group-hover:text-brand-200">
          {member.role}
        </p>
        {member.bio && (
          <p className="mt-3 text-sm leading-relaxed text-ink-700 transition-colors duration-300 group-hover:text-white/80">
            {member.bio}
          </p>
        )}
        <SocialLinks
          social={member.social ?? placeholderSocial}
          className="mt-5 text-ink-700 opacity-0 transition-opacity duration-300 group-hover:text-white group-hover:opacity-100"
          iconClassName="h-4 w-4"
        />
      </div>
    </motion.div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <RevealItem
      variants={revealItem}
      className="group rounded-2xl border border-ink-900/10 bg-white p-6 text-center transition-colors duration-300 hover:border-brand-500/40 hover:bg-mist-50"
    >
      <div className="mx-auto w-fit overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
        <Avatar member={member} size={64} />
      </div>
      <p className="mt-4 font-display text-sm font-semibold text-ink-900">{member.name}</p>
      <p className="mt-1 text-xs text-ink-700">{member.role}</p>
      <SocialLinks
        social={member.social ?? placeholderSocial}
        className="mt-3 text-ink-600 opacity-0 transition-opacity duration-300 group-hover:text-brand-700 group-hover:opacity-100"
        iconClassName="h-3.5 w-3.5"
      />
    </RevealItem>
  );
}

export function TeamGrid() {
  const founders = team.filter((member) => member.founder);
  const rest = team.filter((member) => !member.founder);

  if (team.length === 0) return null;

  return (
    <div className="mt-14">
      {founders.length > 0 && (
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {founders.map((member) => (
            <FounderCard key={member.name} member={member} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {rest.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </RevealGroup>
      )}
    </div>
  );
}
