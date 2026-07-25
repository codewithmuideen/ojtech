"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
            color: "#211f3d",
          }}
        >
          <h1 style={{ fontSize: "1.75rem", fontWeight: 600 }}>
            Something went wrong.
          </h1>
          <p style={{ marginTop: "0.75rem", maxWidth: 420, color: "#46456f" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "1.5rem",
              borderRadius: "999px",
              background: "#211f3d",
              color: "#fff",
              padding: "0.75rem 1.75rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
