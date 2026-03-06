import "./App.css";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <header className="siteHeader">
        <div className="siteHeaderInner">
          <div className="siteBrand">
            <div className="siteBrandText">ELEVAT SOLAR</div>
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

      <section id="services" className="pageSection">
        <div className="sectionInner">
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              marginBottom: "24px",
            }}
          >
            What We Do
          </h2>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "720px",
              lineHeight: 1.6,
              color: "#4b5563",
            }}
          >
            Elevat Solar supports developers and investors with engineering-first
            consultancy for utility-scale solar projects, CAPEX optimisation,
            BoQ audits, construction logic and project risk reduction.
          </p>
          <div className="cardsGrid">
  <div className="cardBox">
    <h3>CAPEX Optimisation</h3>
    <p>Identify engineering and procurement improvements
that reduce total solar project CAPEX.</p>
  </div>

  <div className="cardBox">
    <h3>BoQ Audit</h3>
    <p>Independent review EPC bills of quantities and benchmark against real projects.</p>
  </div>

  <div className="cardBox">
    <h3>Construction Planning</h3>
    <p>Improve installation productivity through better sequencing and installation productivity.</p>
  </div>

  <div className="cardBox">
    <h3>Project Risk Review</h3>
    <p>Identify execution risks early and reduce costly construction mistakes.</p>
  </div>
</div>
        </div>
      </section>
    <section id="projects" className="pageSection">

<div className="sectionInner">

<h2
style={{
fontSize:"clamp(32px,4vw,48px)",
marginBottom:"24px"
}}
>
Projects
</h2>

<p
style={{
fontSize:"20px",
maxWidth:"720px",
lineHeight:1.6,
color:"#4b5563"
}}
>
Selected utility-scale PV and commercial solar advisory work.
</p>

<div className="cardsGrid">

<div className="cardBox">
<h3>Utility-Scale PV Advisory (100 MW)</h3>
<p>Technical advisory, CAPEX benchmarking and engineering rewiew for large utility-scale solar projects.</p>
</div>

<div className="cardBox">
<h3>Industrial Rooftop Portfolio (5 MW)</h3>
<p>Engineering optimisation and CAREX rewiew for commercial and industrial rooftop PV portfolios.</p>
</div>

<div className="cardBox">
<h3>EPC Scope Support</h3>
<p>Independent EPC Scope Rewiew 250 MW  Solar Development.</p>
</div>

</div>

</div>

</section>
<section id="markets" className="pageSection">
<div className="sectionInner">
<h2
style={{
fontSize: "clamp(32px, 4vw, 48px)",
marginBottom: "24px"
}}
>
Markets
</h2>
<p
style={{
fontSize: "20px",
maxWidth: "720px",
lineHeight: 1.6,
color: "#4b5563"
}}
>
Solar engineering advisory across Bulgaria, Romania and Southeast Europe.
</p>
<div className="cardsGrid">

  <div className="cardBox">
    <h3>Bulgaria</h3>
    <p>Utility-scale PV engineering advisory and industrial rooftop optimisation.</p>
  </div>

  <div className="cardBox">
    <h3>Romania</h3>
    <p>CAPEX optimisation and technical advisory for large solar developments.</p>
  </div>

  <div className="cardBox">
    <h3>Southeast Europe</h3>
    <p>Independent engineering review and EPC scope support for regional projects.</p>
  </div>

</div>
</div>




</section>
<section id="why" className="pageSection">
<div className="sectionInner">  

<h2
style={{
fontSize:"clamp(32px,4vw,48px)",
marginBottom:"24px"
}}
>
Why Elevat Solar
</h2>

<p
style={{
fontSize:"20px",
maxWidth:"720px",
lineHeight:1.6,
color:"#4b5563"
}}
>
Independent engineering focused on reducing CAPEX,improving buildability and lowering execution risk.
</p>
<div style={{display:"flex",gap:"32px",marginTop:"10px",marginBottom:"8px",flexWrap:"wrap"}}>
  <div><strong>250+ MW</strong><br />reviewed</div>
  <div><strong>3 countries</strong><br />Bulgaria, Romania, SEE</div>
  <div><strong>Utility-scale & C&I</strong><br />engineering support</div>
</div>
<div className="cardsGrid">

<div className="cardBox">
<h3>Engineering-First Approach</h3>
<p>Technical logic before procurement or construction decisions.</p>
</div>

<div className="cardBox">
<h3>Utility-Scale Experience</h3>
<p>Real project execution knowledge from large solar developments.</p>
</div>

<div className="cardBox">
<h3>CAPEX Optimisation</h3>
<p>Identify design and procurement improvements that reduce project cost.</p>
</div>

<div className="cardBox">
<h3>Independent Review</h3>
<p>Objective technical assessment for developers, investors and EPCs.</p>
</div>

</div>

</div>

</section>
<section id="contact" className="pageSection">

<div className="sectionInner">

<h2
style={{
fontSize:"clamp(32px,4vw,48px)",
marginBottom:"24px"
}}
>
Request a Solar Project Review
</h2>
<div style={{marginTop:"20px", textAlign:"center"}}>

<p><strong>Venelin Dimitrov</strong></p>

<p>Managing Consultant – Elevat Solar Consulting</p>

<p>
<a href="mailto:venelin@elevatsolar.com">
venelin@elevatsolar.com
</a>
</p>

<p>
<a href="https://linkedin.com/in/venelindimitrov" target="_blank">
linkedin.com/in/venelindimitrov
</a>
</p>

<p>Sofia, Bulgaria</p>

</div>
<p
style={{
fontSize:"20px",
maxWidth:"720px",
lineHeight:1.6,
color:"#4b5563"
}}
>
Tell us about your solar project and we will review scope, design logic and CAPEX optimisation potential.
</p>

<div style={{marginTop:"40px", maxWidth:"600px"}}>

<input placeholder="Name" style={{width:"100%", padding:"14px", marginBottom:"12px"}} />

<input placeholder="Email" style={{width:"100%", padding:"14px", marginBottom:"12px"}} />

<input placeholder="Project size (MW)" style={{width:"100%", padding:"14px", marginBottom:"12px"}} />

<textarea placeholder="Project description"
style={{width:"100%", padding:"14px", height:"120px", marginBottom:"16px"}}
/>

<button style={{
padding:"14px 28px",
background:"#0b1220",
color:"#fff",
borderRadius:"8px",
border:"none"
}}>
Send Request
</button>

</div>

</div>

</section>
<footer className="footer">
  <div className="sectionInner">
    <p>Elevat Solar</p>
    <p>PV Engineering • EPC • Inspections</p>
    <p>Utility-scale and C&I solar advisory</p>
  </div>
</footer>  
    </>
  );
}