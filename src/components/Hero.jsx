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
            "linear-gradient(to right, rgba(8,14,24,0.72) 0%, rgba(8,14,24,0.48) 38%, rgba(8,14,24,0.18) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "160px 40px 120px",
        }}
      >
        <div style={{ maxWidth: "880px" }}>
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
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: "0 0 18px 0",
              fontWeight: 800,
              maxWidth: "12ch",
            }}
          >
          Independent Solar Engineering for Developers, EPCs and Investors
          </h1>

          <p
            style={{
              fontSize: "clamp(20px, 2.2vw, 26px)",
              lineHeight: 1.55,
              margin: "0 0 30px 0",
              maxWidth: "760px",
              color: "rgba(255,255,255,0.88)",
            }}
          >
CAPEX optimisation, technical review, EPC scope supportand project, risk reduction for utility-scale and C&I solar projects
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
                padding: "16px 32px",
                borderRadius: "14px",
                background: "#ffffff",
                color: "#0b1220",
                textDecoration: "none",
                fontWeight: 700,
                boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
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
                background: "rgba(255,255,255,0.14)",
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