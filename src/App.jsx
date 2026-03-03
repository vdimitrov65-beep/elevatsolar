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
    <Hero />
   
  


  </div>
);
} 
 