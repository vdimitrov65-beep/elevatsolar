import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";

export default function App() {
  const [lang, setLang] = useState("en");
  return (
       <>
      <header className="siteHeader">
        <div className="siteHeaderInner">
          <div className="siteBrand">
            <div className="siteBrandText">
              {lang === "bg" ? "ЕЛЕВАТ СОЛАР" : "ELEVAT SOLAR"}
            </div>
          </div>

          <nav className="siteNav">
            <a href="#services">{lang === "bg" ? "Услуги" : "Services"}</a>
            <a href="#projects">{lang === "bg" ? "Проекти" : "Projects"}</a>
            <a href="#contact">{lang === "bg" ? "Контакт" : "Contact"}</a>
          </nav>

          <div className="siteLang">
            <button
              onClick={() => setLang("bg")}
              style={{
                fontWeight: lang === "bg" ? "700" : "400",
                opacity: lang === "bg" ? 1 : 0.6,
              }}
            >
              BG
            </button>

            <button
              onClick={() => setLang("en")}
              style={{
                fontWeight: lang === "en" ? "700" : "400",
                opacity: lang === "en" ? 1 : 0.6,
              }}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <Hero lang={lang} />

    
 

      <section id="services" className="pageSection">
        <div className="sectionInner">
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              marginBottom: "24px",
            }}
          >
                      {lang === "bg" ? "Какво правим" : "What We Do"}
          </h2>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "720px",
              lineHeight: 1.6,
              color: "#4b5563",
            }}
          >
                       {lang === "bg"
              ? "Elevat Solar подкрепя инвеститори и разработчици с инженерно ориентирани консултантски услуги за utility-scale соларни проекти, оптимизация на CAPEX, BoQ одити, строителна логика и намаляване на проектния риск."
              : "Elevat Solar supports developers and investors with engineering-first consultancy for utility-scale solar projects, CAPEX optimisation, BoQ audits, construction logic and project risk reduction."}
          </p>
          <div className="cardsGrid">
  <div className="cardBox">
       <h3>{lang === "bg" ? "Оптимизация на CAPEX" : "CAPEX Optimisation"}</h3>
    <p>{lang === "bg" ? "Идентифициране на инженерни и снабдителни подобрения, които намаляват общия CAPEX на соларния проект." : "Identify engineering and procurement improvements that reduce total solar project CAPEX."}</p>
  </div>

  <div className="cardBox">
       <h3>{lang === "bg" ? "BoQ одит" : "BoQ Audit"}</h3>
    <p>{lang === "bg" ? "Независим преглед на EPC количествените сметки и сравнение с реални проекти." : "Independent review EPC bills of quantities and benchmark against real projects."}</p> 
  </div>

  <div className="cardBox">
        <h3>{lang === "bg" ? "Строително планиране" : "Construction Planning"}</h3>
    <p>{lang === "bg" ? "Подобряване на производителността на монтажа чрез по-добра последователност и организация на изпълнението." : "Improve installation productivity through better sequencing and installation productivity."}</p>
  </div>

  <div className="cardBox">
        <h3>{lang === "bg" ? "Преглед на проектния риск" : "Project Risk Review"}</h3>
    <p>{lang === "bg" ? "Идентифициране на рисковете по изпълнението на ранен етап и намаляване на скъпоструващи строителни грешки." : "Identify execution risks early and reduce costly construction mistakes."}</p>
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
{lang === "bg" ? "Проекти" : "Projects"}
</h2>

<p
style={{
fontSize:"20px",
maxWidth:"720px",
lineHeight:1.6,
color:"#4b5563"
}}
>
{lang === "bg"
  ? "Подбрани проекти и консултантска работа в utility-scale и търговския соларен сектор."
  : "Selected utility-scale PV and commercial solar advisory work."}
</p>

<div className="cardsGrid">

<div className="cardBox">
<h3>{lang === "bg" ? "Консултиране за utility-scale PV (100 MW)" : "Utility-Scale PV Advisory (100 MW)"}</h3>
<p>{lang === "bg" ? "Техническо консултиране, CAPEX бенчмаркинг и инженерен преглед за големи utility-scale соларни проекти." : "Technical advisory, CAPEX benchmarking and engineering review for large utility-scale solar projects."}</p>
</div>

<div className="cardBox">
<h3>{lang === "bg" ? "Портфолио от индустриални покривни системи (5 MW)" : "Industrial Rooftop Portfolio (5 MW)"}</h3>
<p>{lang === "bg" ? "Инженерна оптимизация и CAPEX преглед за търговски и индустриални покривни PV портфейли." : "Engineering optimisation and CAPEX review for commercial and industrial rooftop PV portfolios."}</p>
</div>

<div className="cardBox">
<h3>{lang === "bg" ? "Подкрепа по EPC обхват" : "EPC Scope Support"}</h3>
<p>{lang === "bg" ? "Независим преглед на EPC обхвата за 250 MW соларен проект в развитие." : "Independent EPC Scope Review 250 MW Solar Development."}</p>
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
{lang === "bg" ? "Пазари" : "Markets"}
</h2>
<p
style={{
fontSize: "20px",
maxWidth: "720px",
lineHeight: 1.6,
color: "#4b5563"
}}
>
{lang === "bg"
  ? "Инженерно консултиране за соларни проекти в България, Румъния и Югоизточна Европа."
  : "Solar engineering advisory across Bulgaria, Romania and Southeast Europe."}
</p>
<div className="cardsGrid">

  <div className="cardBox">
    <h3>Bulgaria</h3>
    <h3>{lang === "bg" ? "България" : "Bulgaria"}</h3>
<p>{lang === "bg" ? "Инженерно консултиране за utility-scale PV и оптимизация на индустриални покривни системи." : "Utility-scale PV engineering advisory and industrial rooftop optimisation."}</p>
  </div>

  <div className="cardBox">
   <h3>{lang === "bg" ? "Румъния" : "Romania"}</h3>
<p>{lang === "bg" ? "Оптимизация на CAPEX и техническо консултиране за големи соларни проекти в развитие." : "CAPEX optimisation and technical advisory for large solar developments."}</p>
  </div>

  <div className="cardBox">
    <h3>Southeast Europe</h3>
    <h3>{lang === "bg" ? "Югоизточна Европа" : "Southeast Europe"}</h3>
<p>{lang === "bg" ? "Независим инженерен преглед и подкрепа при определяне на EPC обхвата за регионални проекти." : "Independent engineering review and EPC scope support for regional projects."}</p>
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
{lang === "bg" ? "Защо Elevat Solar" : "Why Elevat Solar"}  
</h2>

<p
style={{
fontSize:"20px",
maxWidth:"720px",
lineHeight:1.6,
color:"#4b5563"
}}
>
{lang === "bg"
  ? "Независим инженерен подход, насочен към намаляване на CAPEX, подобряване на изпълнимостта и ограничаване на риска при реализация."
  : "Independent engineering focused on reducing CAPEX, improving buildability and lowering execution risk."}
</p>
<div style={{display:"flex",gap:"32px",marginTop:"10px",marginBottom:"8px",flexWrap:"wrap"}}>
  <div><strong>250+ MW</strong><br />{lang === "bg" ? "прегледани" : "reviewed"}</div>
  <div><strong>{lang === "bg" ? "3 държави" : "3 countries"}</strong><br />{lang === "bg" ? "България, Румъния, ЮИЕ" : "Bulgaria, Romania, SEE"}</div>
  <div><strong>Utility-scale & C&I</strong><br />engineering support</div>
</div>
<div className="cardsGrid">

<div className="cardBox">
<h3>{lang === "bg" ? "Инженерен подход на първо място" : "Engineering-First Approach"}</h3>
<p>{lang === "bg" ? "Техническа логика преди решенията за доставки или строителство." : "Technical logic before procurement or construction decisions."}</p>
</div>

<div className="cardBox">
<h3>Utility-Scale Experience</h3>
<p>Real project execution knowledge from large solar developments.</p>
</div>

<div className="cardBox">
<h3>{lang === "bg" ? "Оптимизация на CAPEX" : "CAPEX Optimisation"}</h3>
<p>{lang === "bg" ? "Идентифициране на проектни и снабдителни подобрения, които намаляват цената на проекта." : "Identify design and procurement improvements that reduce project cost."}</p>
</div>

<div className="cardBox">
<h3>{lang === "bg" ? "Независим преглед" : "Independent Review"}</h3>
<p>{lang === "bg" ? "Обективна техническа оценка за разработчици, инвеститори и EPC компании." : "Objective technical assessment for developers, investors and EPCs."}</p>
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
{lang === "bg" ? "Заяви преглед на соларен проект" : "Request a Solar Project Review"}
</h2>
<div style={{marginTop:"20px", textAlign:"center"}}>

<p><strong>Venelin Dimitrov</strong></p>

<p>{lang === "bg" ? "Управляващ консултант – Elevat Solar Consulting" : "Managing Consultant – Elevat Solar Consulting"}</p>

<p>
<a href="mailto:office@elevatsolar.eu">
office@elevatsolar.eu
</a>
</p>
<p>
<a href="tel:+359888220330">
+359888220330
</a>
</p>

<p>
<a href="https://linkedin.com/in/venelindimitrov" target="_blank">
linkedin.com/in/venelindimitrov
</a>
</p>

<p>{lang === "bg" ? "София, ж.к. Яворов, бл. 73, ап. 4, България" : "Sofia, Yavorov district, bl. 73, ap. 4, Bulgaria"}</p>

</div>
<p
style={{
fontSize:"20px",
maxWidth:"720px",
lineHeight:1.6,
color:"#4b5563"
}}
>
{lang === "bg"
  ? "Разкажете ни за вашия соларен проект и ще прегледаме обхвата, проектната логика и потенциала за оптимизация на CAPEX."
  : "Tell us about your solar project and we will review scope, design logic and CAPEX optimisation potential."}
</p>

<div style={{marginTop:"40px", maxWidth:"600px"}}>

<input placeholder={lang === "bg" ? "Име" : "Name"} style={{width:"100%", padding:"14px", marginBottom:"12px"}} />

<input placeholder={lang === "bg" ? "Имейл" : "Email"} style={{width:"100%", padding:"14px", marginBottom:"12px"}} />

<input placeholder={lang === "bg" ? "Размер на проекта (MW)" : "Project size (MW)"} style={{width:"100%", padding:"14px", marginBottom:"12px"}} />

<textarea placeholder={lang === "bg" ? "Описание на проекта" : "Project description"}
style={{width:"100%", padding:"14px", height:"120px", marginBottom:"16px"}}
/>

<button style={{
padding:"14px 28px",
background:"#0b1220",
color:"#fff",
borderRadius:"8px",
border:"none"
}}>
{lang === "bg" ? "Изпрати запитване" : "Send Request"}
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