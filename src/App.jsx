import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NewsletterForm from "./NewsLetterForm";

export default function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
if (window.location.pathname === '/brief') {
  window.location.href = '/brief.html';
}
  return (
    <><header className="siteHeader" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 24px",background:"transparent"}}>
        <div className="siteBrand">
      
         <a href="/" style={{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none"}}> 
            <svg width="22" height="34" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="14" y="0"  width="12" height="12" rx="2" fill="#e89a1d"/>
              <rect x="0"  y="14" width="12" height="12" rx="2" fill="#e89a1d"/>
              <rect x="14" y="14" width="12" height="12" rx="2" fill="#e89a1d"/>
              <rect x="0"  y="28" width="12" height="12" rx="2" fill="#e89a1d"/>
              <rect x="14" y="28" width="12" height="12" rx="2" fill="#e89a1d"/>
            </svg>
            <span className="siteBrandText">
              {lang === "bg" ? "ЕЛЕВАТ СОЛАР" : "ELEVAT SOLAR"}
            </span>
          </a>
        </div>

        <nav className="siteNav">
          <a href="#services">{lang === "bg" ? "Услуги" : "Services"}</a>
          <a href="#projects">{lang === "bg" ? "Проекти" : "Projects"}</a>
          <a href="#contact">{lang === "bg" ? "Контакт" : "Contact"}</a>
        </nav>

        <div className="siteLang">
          <button onClick={() => setLang("bg")} style={{ fontWeight: lang === "bg" ? "700" : "400", opacity: lang === "bg" ? 1 : 0.6 }}>BG</button>
          <button onClick={() => setLang("en")} style={{ fontWeight: lang === "en" ? "700" : "400", opacity: lang === "en" ? 1 : 0.6 }}>EN</button>
        </div>

        <button className={`hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobileNav${menuOpen ? " open" : ""}`}>
        <a href="#services" onClick={closeMenu}>{lang === "bg" ? "Услуги" : "Services"}</a>
        <a href="#projects" onClick={closeMenu}>{lang === "bg" ? "Проекти" : "Projects"}</a>
        <a href="#contact" onClick={closeMenu}>{lang === "bg" ? "Контакт" : "Contact"}</a>
        <div className="mobileLang">
          <button onClick={() => { setLang("bg"); closeMenu(); }} style={{ fontWeight: lang === "bg" ? "700" : "400" }}>BG</button>
          <button onClick={() => { setLang("en"); closeMenu(); }} style={{ fontWeight: lang === "en" ? "700" : "400" }}>EN</button>
        </div>
      </div>

      <Hero lang={lang} />

      <section id="services" className="pageSection">
        <div className="sectionInner">
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px", marginTop: 0 }}>
            {lang === "bg" ? "Какво правим" : "What We Do"}
          </h2>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "720px", lineHeight: 1.6, color: "#4b5563", margin: 0 }}>
            {lang === "bg" ? "Elevat Solar подкрепя инвеститори и разработчици с инженерно ориентирани консултантски услуги за utility-scale соларни проекти, оптимизация на CAPEX, BoQ одити, строителна логика и намаляване на проектния риск." : "Elevat Solar supports developers and investors with engineering-first consultancy for utility-scale solar projects, CAPEX optimisation, BoQ audits, construction logic and project risk reduction."}
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
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px", marginTop: 0 }}>
            {lang === "bg" ? "Проекти" : "Projects"}
          </h2>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "720px", lineHeight: 1.6, color: "#4b5563", margin: 0 }}>
            {lang === "bg" ? "Подбрани проекти и консултантска работа в utility-scale и търговския соларен сектор." : "Selected utility-scale PV and commercial solar advisory work."}
          </p>
          <div className="cardsGrid cardsGrid--3col">
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
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px", marginTop: 0 }}>
            {lang === "bg" ? "Пазари" : "Markets"}
          </h2>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "720px", lineHeight: 1.6, color: "#4b5563", margin: 0 }}>
            {lang === "bg" ? "Инженерно консултиране за соларни проекти в България, Румъния и Югоизточна Европа." : "Solar engineering advisory across Bulgaria, Romania and Southeast Europe."}
          </p>
          <div className="cardsGrid cardsGrid--3col">
            <div className="cardBox">
              <h3>{lang === "bg" ? "България" : "Bulgaria"}</h3>
              <p>{lang === "bg" ? "Инженерно консултиране за utility-scale PV и оптимизация на индустриални покривни системи." : "Utility-scale PV engineering advisory and industrial rooftop optimisation."}</p>
            </div>
            <div className="cardBox">
              <h3>{lang === "bg" ? "Румъния" : "Romania"}</h3>
              <p>{lang === "bg" ? "Оптимизация на CAPEX и техническо консултиране за големи соларни проекти в развитие." : "CAPEX optimisation and technical advisory for large solar developments."}</p>
            </div>
            <div className="cardBox">
              <h3>{lang === "bg" ? "Югоизточна Европа" : "Southeast Europe"}</h3>
              <p>{lang === "bg" ? "Независим инженерен преглед и подкрепа при определяне на EPC обхвата за регионални проекти." : "Independent engineering review and EPC scope support for regional projects."}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="pageSection">
        <div className="sectionInner">
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px", marginTop: 0 }}>
            {lang === "bg" ? "Защо Elevat Solar" : "Why Elevat Solar"}
          </h2>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "720px", lineHeight: 1.6, color: "#4b5563", margin: 0 }}>
            {lang === "bg" ? "Независим инженерен подход, насочен към намаляване на CAPEX, подобряване на изпълнимостта и ограничаване на риска при реализация." : "Independent engineering focused on reducing CAPEX, improving buildability and lowering execution risk."}
          </p>
          <div className="statsRow">
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
        <div className="sectionInner" style={{textAlign:"center"}}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px", marginTop: 0 }}>
            {lang === "bg" ? "Заяви преглед на соларен проект" : "Request a Solar Project Review"}
          </h2>
          <div className="contactInfo">
            <p><strong>Venelin Dimitrov</strong></p>
            <p>{lang === "bg" ? "Управляващ консултант – Elevat Solar Consulting" : "Managing Consultant – Elevat Solar Consulting"}</p>
            <p><a href="mailto:office@elevatsolar.eu">office@elevatsolar.eu</a></p>
            <p><a href="https://linkedin.com/in/venelindimitrov" target="_blank" rel="noreferrer">linkedin.com/in/venelindimitrov</a></p>
            <p>{lang === "bg" ? "София, ж.к. Яворов, бл.73, ап. 4, п.к.1110" : "Sofia, Yavorov district, bl.73, ap.4, 1110"}</p>
            <p><a href="tel:+359888220330">+359 888 220 330</a></p>
          </div>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "720px", lineHeight: 1.6, color: "#4b5563", margin: "24px auto" }}>
            {lang === "bg" ? "Разкажете ни за вашия соларен проект и ще прегледаме обхвата, проектната логика и потенциала за оптимизация на CAPEX." : "Tell us about your solar project and we will review scope, design logic and CAPEX optimisation potential."}
          </p>
          <div className="contactForm">
            <input placeholder={lang === "bg" ? "Име" : "Name"} />
            <input placeholder={lang === "bg" ? "Имейл" : "Email"} type="email" />
            <input placeholder={lang === "bg" ? "Размер на проекта (MW)" : "Project size (MW)"} />
            <textarea placeholder={lang === "bg" ? "Описание на проекта" : "Project description"} />
            <button type="button">{lang === "bg" ? "Изпрати запитване" : "Send Request"}</button>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px", background: "#EFF2F7", display:"flex", justifyContent:"center", alignItems:"center" }}>
        <div dangerouslySetInnerHTML={{ __html: `
          <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
          <div class="sib-form" style="text-align:center; background-color:#EFF2F7;">
            <div id="sib-form-container" class="sib-form-container">
              <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid; margin:0 auto;">
                <form id="sib-form" method="POST" action="https://e5a3aca6.sibforms.com/serve/MUIFAGl6jZRusfmZKbTl9o-b_SPdLh6sO3poXKCLSH6tcgH62ll7r8ZV8VvCDpAy1wuqh2HlZJfNaMH7KvPXMRUPf_VgkOjq143QmaYpCEDL730q1L4NOd76MnQd0i-30bervCd8a0rn1HcGbKToPR8nvriIGuulu0f0OpvB57THmb4-SPs2v0TvhaHupMRuTkZL6gnHfHNHx-rWcg==">
                  <div style="padding:8px 0;"><p style="font-size:32px;font-weight:700;font-family:Helvetica,sans-serif;color:#3C4858;">Monthly Solar Market Brief</p></div>
                  <div style="padding:8px 0;"><p style="font-size:16px;font-family:Helvetica,sans-serif;color:#3C4858;">Solar market news for Bulgaria, Romania and SEE — once a month.</p></div>
                  <div style="padding:8px 0;"><input type="text" name="EMAIL" placeholder="Your email" required style="width:90%;padding:12px;border:1px solid #C0CCD9;border-radius:3px;font-size:16px;"></div>
                  <div style="padding:8px 0;"><button type="submit" style="background:#0b1220;color:#fff;border:none;padding:14px 40px;font-size:16px;font-weight:700;border-radius:3px;cursor:pointer;width:90%;">Subscribe</button></div>
                  <input type="text" name="email_address_check" value="" style="display:none">
                  <input type="hidden" name="locale" value="en">
                  <input type="hidden" name="html_type" value="simple">
                </form>
              </div>
            </div>
          </div>
        `}} />
      </section>

      <footer style={{background:"#0b1220",padding:"48px 20px",marginTop:0}}>
        <div style={{maxWidth:"960px",margin:"0 auto",display:"flex",flexWrap:"wrap",gap:"32px",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{color:"#fff",fontWeight:700,fontSize:"1.1rem",marginBottom:"8px"}}>ELEVAT SOLAR</div>
            <div style={{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",lineHeight:1.8}}>
              Independent Solar Engineering Advisory<br/>
              Bulgaria · Romania · Southeast Europe
            </div>
          </div>
          <div style={{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",lineHeight:1.8}}>
            <a href="mailto:office@elevatsolar.eu" style={{color:"#e89a1d",textDecoration:"none"}}>office@elevatsolar.eu</a><br/>
            <a href="tel:+359888220330" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>+359 888 220 330</a><br/>
            <a href="https://linkedin.com/in/venelindimitrov" target="_blank" rel="noreferrer" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none"}}>LinkedIn</a>
          </div>
          <div style={{color:"rgba(255,255,255,0.3)",fontSize:"0.8rem",alignSelf:"flex-end"}}>
            © 2026 Elevat Solar OOD. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
