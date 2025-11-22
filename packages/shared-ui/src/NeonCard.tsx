import type { ReactNode } from "react";

export function NeonCard({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "1rem",
        border: "1px solid rgba(0,255,255,0.4)",
        boxShadow: "0 0 20px rgba(0,255,255,0.4)",
        background: "radial-gradient(circle at top, #05101a, #020409)",
        color: "#e5f9ff"
      }}
    >
      {children}
    </div>
  );
}
