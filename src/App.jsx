import Hero from "./components/Hero";

export default function App() {
  return (
    <>
    <header className="siteHeader">
  <div className="siteHeaderInner">
    <div className="siteBrand">
      <div className="siteBrandTitle">Elevat Solar</div>
      <div className="siteBrandSub">PV Engineering • EPC • Inspections</div>
    </div>

    <nav className="siteNav">
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

    <div className="siteLang">
      <button>BG</button>
      <button>EN</button>
    </div>
  </div>
</header>
      <Hero />

      <section id="services" className="pageSection" style={{ background: "#fff" }}>
  <div className="sectionInner">
    <h2 style={{ fontSize: "36px", marginBottom: "16px", color: "#0b1220" }}>
      What We Do
    </h2>
    <p style={{ fontSize: "18px", color: "#516074", maxWidth: "800px" }}>
      We help solar developers, EPCs and investors optimise CAPEX, reduce
      technical risk and improve project delivery.
    </p>

    <div className="cardsGrid">
      <div className="cardBox">
        <h3>CAPEX Optimisation</h3>
        <p>Identify savings across BoQ, procurement and technical scope.</p>
      </div>

      <div className="cardBox">
        <h3>BoQ Audit</h3>
        <p>Review quantities, pricing logic and hidden cost overruns.</p>
      </div>

      <div className="cardBox">
        <h3>Construction Planning</h3>
        <p>Improve buildability, sequencing and installation productivity.</p>
      </div>

      <div className="cardBox">
        <h3>Project Risk Review</h3>
        <p>Spot execution risks early and reduce expensive mistakes.</p>
      </div>
    </div>
  </div>
</section>

      <section id="projects" className="pageSection" style={{ background: "#f7f9fc" }}>
  <div className="sectionInner">
    <h2 style={{ fontSize: "36px", marginBottom: "16px", color: "#0b1220" }}>
      Projects
    </h2>
    <p style={{ fontSize: "18px", color: "#516074", maxWidth: "800px" }}>
      Selected utility-scale PV and commercial solar advisory work.
    </p>

    <div className="projectsGrid">
      <div className="projectBox">
        <h3>Utility-Scale PV Advisory</h3>
        <p>Technical review, CAPEX benchmarking and delivery support.</p>
      </div>

      <div className="projectBox">
        <h3>Industrial Rooftop Solar</h3>
        <p>Engineering review and optimisation for commercial assets.</p>
      </div>

      <div className="projectBox">
        <h3>EPC Scope Support</h3>
        <p>Scope clarification, value engineering and execution planning.</p>
      </div>
    </div>
  </div>
</section>
      <section id="contact" className="pageSection" style={{ background: "#fff" }}>
  <div className="sectionInner">
    <h2 style={{ fontSize: "36px", marginBottom: "16px", color: "#0b1220" }}>
      Contact
    </h2>
    <p style={{ fontSize: "18px", color: "#516074", maxWidth: "800px" }}>
      Tell us about your solar project and we will review the right scope.
    </p>

    <div className="contactWrap">
      <a className="contactBtn" href="mailto:info@elevatsolar.com">
        Contact Us
      </a>
    </div>
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