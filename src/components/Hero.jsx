export default function Hero() {
  return (
    <section
      style={{
        height: "80vh",
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      <div style={{ position: "relative", padding: "0 40px" }}>
        <h1 style={{ fontSize: "56px" }}>Your Solar CAPEX. Optimised.</h1>

        <p style={{ fontSize: "20px", marginTop: "20px", maxWidth: "600px" }}>
          Engineering-first PV delivery. Technical optimisation. Bankable results.
        </p>
      </div>
    </section>
  );
}