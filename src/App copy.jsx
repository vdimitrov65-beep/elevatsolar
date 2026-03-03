import { useState } from "react";
import { content } from "./content";

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
            <div className="brandTag">PV Engineering • EPC • Inspections</div>
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

      <main className="main">
        <section className="hero">
         <h1>{t.hero.title}</h1>
          <p>
           {t.hero.subtitle}
          </p>
          <div className="heroActions">
            <a className="btn" href="#contact">Get a quote</a>
            <a className="btn ghost" href="#services">See services</a>
          </div>
        </section>

        <section id="services" className="section">
          <h2>Services</h2>
          <div className="grid">
            <div className="card">
              <h3>PV Engineering</h3>
              <p>Layouts, electrical design, DC/AC ratio, yield & loss analysis.</p>
            </div>
            <div className="card">
              <h3>EPC Support</h3>
              <p>BoQ review, procurement support, method statements, QA/QC.</p>
            </div>
            <div className="card">
              <h3>Inspections</h3>
              <p>Thermal checks, connector/cabling audits, punch lists, reporting.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="card">
            <p>
              Add your projects here (e.g., 250 MW portfolio, rooftop PV, grid studies, etc.).
              We’ll format it later.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card">
            <p><b>Email:</b> office@elevatsolar.com</p>
            <p><b>Location:</b> Sofia, Bulgaria</p>
            <p className="muted">
              (Ще го направим с форма за контакт след това.)
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Elevat Solar. All rights reserved.
      </footer>
    </div>
  );
}