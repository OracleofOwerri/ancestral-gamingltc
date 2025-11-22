import { NeonCard } from "@ui";

export function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top, #071726 0, #02040a 45%, #020308 100%)",
        color: "#e5f9ff"
      }}
    >
      <NeonCard>
        <h1 style={{ marginTop: 0 }}>CueLTC Neon Arena</h1>
        <p>Vite + React app is running. Replace this with full UI later.</p>
      </NeonCard>
    </div>
  );
}
