export default function Hero({ lang }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 40px 80px",
        backgroundImage:
          "linear-gradient(rgba(11,18,32,0.55), rgba(11,18,32,0.05)), url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <h1
          style={{
            fontSize: "48px",
            lineHeight: 1.1,
            margin: "0 0 24px 0",
            fontWeight: 800,
          }}
        >
          {lang === "bg"
            ? "Независими инженерни услуги за девелопъри, EPC и инвеститори"
            : "Independent Solar Engineering for Developers, EPCs and Investors"}
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: 1.5,
            margin: "0 0 30px 0",
            maxWidth: "760px",
            color: "rgba(255,255,255,0.88)",
          }}
        >
          {lang === "bg"
            ? "Оптимизация на CAPEX, технически преглед, подкрепа по EPC обхват и намаляване на риска за utility-scale и C&I соларни проекти."
            : "CAPEX optimisation, technical review, EPC scope support and project risk reduction for utility-scale and C&I solar projects."}
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a
            href="#services"
            style={{
              display: "inline-block",
              padding: "16px 32px",
              borderRadius: "14px",
              background: "#ffffff",
              color: "#0b1220",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            {lang === "bg" ? "Услуги" : "Services"}
          </a>

          <a
            href="#projects"
            style={{
              display: "inline-block",
              padding: "16px 32px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            {lang === "bg" ? "Проекти" : "Projects"}
          </a>
        </div>
      </div>
    </section>
  );
}