import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Hero />

      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px", color: "#0b1220" }}>
          What We Do
        </h2>
        <p style={{ fontSize: "18px", color: "#516074", maxWidth: "800px" }}>
          We help solar developers, EPCs and investors optimise CAPEX, reduce
          technical risk and improve project delivery.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginTop: "32px",
          }}
        >
          <div style={cardStyle}>
            <h3>CAPEX Optimisation</h3>
            <p>Identify savings across BoQ, procurement and technical scope.</p>
          </div>

          <div style={cardStyle}>
            <h3>BoQ Audit</h3>
            <p>Review quantities, pricing logic and hidden cost overruns.</p>
          </div>

          <div style={cardStyle}>
            <h3>Construction Planning</h3>
            <p>Improve buildability, sequencing and installation productivity.</p>
          </div>

          <div style={cardStyle}>
            <h3>Project Risk Review</h3>
            <p>Spot execution risks early and reduce expensive mistakes.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 40px", background: "#f7f9fc" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px", color: "#0b1220" }}>
          Projects
        </h2>
        <p style={{ fontSize: "18px", color: "#516074", maxWidth: "800px" }}>
          Selected utility-scale PV and commercial solar advisory work.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "32px",
          }}
        >
          <div style={projectCardStyle}>
            <h3>Utility-Scale PV Advisory</h3>
            <p>Technical review, CAPEX benchmarking and delivery support.</p>
          </div>

          <div style={projectCardStyle}>
            <h3>Industrial Rooftop Solar</h3>
            <p>Engineering review and optimisation for commercial assets.</p>
          </div>

          <div style={projectCardStyle}>
            <h3>EPC Scope Support</h3>
            <p>Scope clarification, value engineering and execution planning.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px", color: "#0b1220" }}>
          Contact
        </h2>
        <p style={{ fontSize: "18px", color: "#516074", maxWidth: "800px" }}>
          Tell us about your solar project and we will review the right scope.
        </p>

        <div style={{ marginTop: "24px" }}>
          <a
            href="mailto:info@elevatsolar.com"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              background: "#0b1220",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: 600,
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  color: "#0b1220",
};

const projectCardStyle = {
  background: "#ffffff",
  padding: "24px",
  borderRadius: "16px",
  border: "1px solid rgba(10,20,40,0.08)",
  boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
  color: "#0b1220",
};