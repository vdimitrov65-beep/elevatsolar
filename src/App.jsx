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
  border: "6px solid lime"
}}>
  <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
  <div style={{ position: "relative", padding: "0 40px" }}>
    <h1 style={{ fontSize: "56px" }}>Your Solar CAPEX. Optimised.</h1>
    <p style={{ fontSize: "20px", marginTop: "20px", maxWidth: "600px" }}>
      Engineering-first PV delivery. Technical optimisation. Bankable results.
    </p>
  </div>
</section>
   
  


  </div>
);
} 
 