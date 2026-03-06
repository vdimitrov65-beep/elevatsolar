export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "95vh",
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(8,14,24,0.58) 0%, rgba(8,14,24,0.32) 38%, rgba(8,14,24,0.10) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 40px 80px",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <div
            style={{
              display: "inline-block",
              marginBottom: "18px",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              fontSize: "13px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Solar Consultancy
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: "0 0 18px 0",
              fontWeight: 800,
              maxWidth: "10ch",
            }}
          >
            Your Solar CAPEX. Optimised.
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.55,
              margin: "0 0 30px 0",
              maxWidth: "640px",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Engineering-first support for developers, EPCs and investors:
            BoQ audit, CAPEX review, construction logic and project risk
            reduction for utility-scale and C&I solar.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "12px",
                background: "#ffffff",
                color: "#0b1220",
                textDecoration: "none",
                fontWeight: 700,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              Explore Services
            </a>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.20)",
                backdropFilter: "blur(6px)",
              }}
            >
              Request a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}