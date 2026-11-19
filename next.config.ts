import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: plain HTML/CSS/JS, deployable to any host with no Node.js
  // server (e.g. cPanel public_html). Headers/rewrites/redirects and any
  // server-only routes are unsupported in this mode -- see .htaccess for the
  // security headers this used to set via next.config's `headers()`.
  output: "export",
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Static export can't run server-side image optimization at all.
    unoptimized: true,
    // TODO(client): remove once real team headshots replace these
    // placeholder portraits (see lib/data/team.ts).
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me", pathname: "/api/portraits/**" },
    ],
  },
};

export default nextConfig;
