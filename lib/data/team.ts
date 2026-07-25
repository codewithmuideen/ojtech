export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
}

// TODO(client): populate with verified team member details. Left empty
// rather than fabricated — the Leadership section renders a "coming soon"
// state until real profiles are supplied.
export const team: TeamMember[] = [];
