import "./App.css";
import { useState } from "react";
import { content } from "./content";
import Hero from "./components/Hero";

export default function App() {
  const [lang, setLang] = useState("bg");
  const t = content[lang];

 return (
  <div className="page">
    <header className="header">
      <div className="brand">
        <div className="logo">ES</div>
        
        <div>
          <div className="brandName">Elevat Solar</div>
          <div className="brandTag">
            PV Engineering • EPC • Inspections
          </div>
        </div>
      </div>

      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="btn">Contact</a>
      </nav>

      <div className="lang">
        <button onClick={() => setLang("bg")}>BG</button>
        <button onClick={() => setLang("en")}>EN</button>
      </div>
    </header>
<section style={{
  height: "80vh",
  backgroundImage: "url('/hero.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  color: "white",
  
}}>
  <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
  <div style={{ position: "relative", padding: "0 40px" }}>
    <h1 style={{ fontSize: "56px" }}>Your Solar CAPEX. Optimised.</h1>
    <p style={{ fontSize: "20px", marginTop: "20px", maxWidth: "600px" }}>
      Engineering-first PV delivery. Technical optimisation. Bankable results.
    </p>
  </div>
</section>
<section style={{ padding: "80px 40px", background: "#f5f5f5" }}>
  <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
    What We Do
  </h2>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
    <div>
      <h3>PV Engineering</h3>
      <p>Technical optimisation of utility-scale photovoltaic projects.</p>
    </div>

    <div>
      <h3>EPC Support</h3>
      <p>Design review, DC/AC optimisation and site supervision.</p>
    </div>

    <div>
      <h3>Project Delivery</h3>
      <p>From concept to grid connection with engineering-first approach.</p>
    </div>
  </div>
</section>   
<section style={{ padding: "80px 40px", backgroundColor: "#ffffff" }}>
  <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#0f172a" }}>
    Projects
  </h2>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "14px", padding: "20px" }}>
      <div style={{ fontWeight: 700, marginBottom: "8px" }}>Utility-scale PV</div>
      <div style={{ color: "#475569", lineHeight: "1.6" }}>
        250 MW portfolio (70 MW + 180 MW) — engineering, optimisation and delivery support.
      </div>
    </div>

    <div style={{ border: "1px solid #e5e7eb", borderRadius: "14px", padding: "20px" }}>
      <div style={{ fontWeight: 700, marginBottom: "8px" }}>Inspections & QA</div>
      <div style={{ color: "#475569", lineHeight: "1.6" }}>
        Site inspections, cable management checks, connector quality, thermal diagnostics.
      </div>
    </div>

    <div style={{ border: "1px solid #e5e7eb", borderRadius: "14px", padding: "20px" }}>
      <div style={{ fontWeight: 700, marginBottom: "8px" }}>EPC Technical Support</div>
      <div style={{ color: "#475569", lineHeight: "1.6" }}>
        Design review, DC/AC ratio optimisation, BoQ sanity checks, commissioning readiness.
      </div>
    </div>
  </div>
</section>  


  </div>
);
} 
 