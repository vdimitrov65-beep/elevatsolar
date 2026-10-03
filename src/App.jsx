import { useEffect, useMemo, useRef, useState } from "react";

const sectionIds = ["about", "services", "projects", "insights", "contact"];
const NEWSLETTER_SUBSCRIBE_URL = "https://elevatsolar.eu/brief.html";
const copy = {
  en: {
    brand: "elevat solar",
    nav: ["about", "services", "projects", "insights", "contact"],
    lang: "language",
    heroTitle: "Independent solar engineering for developers, EPCs and investors",
    heroText: "Independent technical partner for solar and storage projects across design review, due diligence, and delivery support.",
    heroCta: "Review our scope",
    eyebrows: { services: "What we do", projects: "Selected work", insights: "Insights", markets: "Where we operate", why: "Why elevat solar", contact: "Get in touch" },
    footerTagline: "independent engineering for solar and storage",
    whatTitle: "What we do",
    whatText: "We combine bankable engineering standards with practical project execution support from pre-development to commissioning.",
    services: [
      { title: "Solar engineering", text: "Preliminary and detailed design studies for utility-scale and C&I systems." },
      { title: "Owner's engineer", text: "Independent technical oversight for scope, quality, schedule, and interface risks." },
      { title: "Technical due diligence", text: "Technical risk screening for financing, acquisitions, and portfolio decisions." },
      { title: "Project risk review", text: "Structured review of grid, permitting, design, and procurement constraints." },
    ],
    projectsTitle: "Projects",
    projectsText: "Selected references from recent engagements.",
    projects: [
      { title: "South battery solar platform", meta: "Bulgaria · 42 MWp PV + 68 MWh BESS" },
      { title: "Merchant portfolio advisory", meta: "Romania · 120 MW pipeline technical DD" },
      { title: "C&I rooftop rollout program", meta: "Bulgaria · Multi-site design standardization" },
    ],
    insightsTitle: "Insights",
    insightsText: "Technical analysis of the Southeast European solar and storage market.",
    insightsCta: "Read the article",
    insightsLangNote: "",
    insights: [
      {
        title: "The old PV park holds the scarcest resource",
        meta: "Article · October 2026",
        href: "/old-pv-park-scarcest-resource.html",
      },
      {
        title: "What makes a BESS project bankable in Southeast Europe",
        meta: "Article · October 2026",
        href: "/bess-bankability-see.html",
      },
    ],
    marketsTitle: "Markets",
    markets: [
      { title: "Utility", text: "Owner-side engineering and bankability reviews." },
      { title: "Storage", text: "PV+BESS design integration and technical validation." },
      { title: "Commercial & industrial", text: "Site screening and capex optimization support." },
      { title: "Portfolio acquisitions", text: "Investment-grade technical risk filtering." },
    ],
    whyTitle: "Why elevat solar",
    whyText: "Execution-minded engineering built for sponsors, investors, and EPC interfaces.",
    stats: [
      { value: "250+ MW", label: "advised" },
      { value: "7 countries", label: "operational footprint" },
      { value: "utility-scale + C&I", label: "delivery mix" },
    ],
    pillars: [
      { title: "Independent", text: "Not tied to EPC or equipment vendors." },
      { title: "Bankable", text: "Outputs aligned with lender and investor requirements." },
      { title: "Pragmatic", text: "Recommendations focused on buildability and outcomes." },
      { title: "Fast response", text: "Short technical decision cycles for active projects." },
    ],
    reviewTitle: "Request a solar project review",
    reviewText: "Share key project parameters and receive an independent technical risk snapshot.",
    bullets: ["Site location", "Target COD and status", "Planned DC/AC size", "Main constraints"],
    poc: {
      label: "Main point of contact",
      name: "Venelin Dimitrov",
      role: "Managing Consultant - Elevat Solar Consulting",
      email: "office@elevatsolar.eu",
      linkedin: "https://www.linkedin.com/in/venelin-dimitrov-17296b3aa/",
      location: "Sofia, Yavorov district, bl.73, ap.4, 1110",
      phone: "+359 888 220 330",
    },
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      message: "Project notes",
      messagePlaceholder: "Site location, target COD and status, planned DC/AC size, main constraints",
      submit: "Submit brief",
      helper: "Required fields: name, email, and project notes.",
    },
    briefTitle: "Monthly solar market brief",
    briefText: "One concise monthly update on market moves and technical risk signals.",
    briefCta: "Subscribe",
    skip: "Skip to content",
    linkedinLabel: "LinkedIn profile",
    emailLabel: "Email address",
    videoStatLabel: "advised across 7 countries",
    errors: {
      required: "Please fill in all required fields.",
      email: "Please enter a valid email address.",
      subscribe: "The subscription could not be saved. Please try again or write to office@elevatsolar.eu.",
    },
    success: {
      review: "Brief received. We will contact you shortly.",
      subscribe: "Subscription confirmed.",
    },
  },
  bg: {
    brand: "elevat solar",
    nav: ["за нас", "услуги", "проекти", "публикации", "контакт"],
    lang: "език",
    heroTitle: "Независимо соларно инженерство за разработчици, EPC изпълнители и инвеститори",
    heroText: "Независим технически партньор за проекти със соларни централи и батерии: преглед на проекта, техническа проверка (due diligence) и подкрепа при изпълнението.",
    heroCta: "Вижте обхвата",
    eyebrows: { services: "Какво правим", projects: "Избрани проекти", insights: "Публикации", markets: "Където работим", why: "Защо elevat solar", contact: "Свържете се" },
    footerTagline: "независимо инженерство за соларни централи и съхранение",
    whatTitle: "Какво правим",
    whatText: "Съчетаваме инженерни стандарти, приемливи за финансиращите, с практическа подкрепа по изпълнението, от подготовката на проекта до въвеждането в експлоатация.",
    services: [
      { title: "Соларно инженерство", text: "Предварителни и детайлни проектни анализи за големи централи и системи за бизнеса (C&I)." },
      { title: "Инженер на собственика (Owner's engineer)", text: "Независим технически контрол на обхвата, качеството, срока и рисковете по интерфейсите." },
      { title: "Техническа проверка (due diligence)", text: "Технически преглед на риска при финансиране, придобиване и решения за портфейли." },
      { title: "Преглед на проектния риск", text: "Структуриран преглед на присъединяването, разрешенията, проекта и доставките." },
    ],
    projectsTitle: "Проекти",
    projectsText: "Избрани референции от последни ангажименти.",
    projects: [
      { title: "Южна соларна платформа с батерии", meta: "България · 42 MWp PV + 68 MWh BESS" },
      { title: "Консултиране на портфейл от пазарни (merchant) проекти", meta: "Румъния · техническа проверка на портфейл от 120 MW в разработка" },
      { title: "Програма за покривни системи за бизнеса (C&I)", meta: "България · стандартизация на проектирането за множество обекти" },
    ],
    insightsTitle: "Публикации",
    insightsText: "Технически анализи на пазара на соларна енергия и съхранение в Югоизточна Европа.",
    insightsCta: "Прочети статията",
    insightsLangNote: "на английски език",
    insights: [
      {
        title: "Старият PV парк държи най-дефицитния ресурс",
        meta: "Статия · октомври 2026",
        href: "/hibridizacia-pv-parkove.html",
      },
      {
        title: "Какво прави един BESS проект банкируем в Югоизточна Европа",
        meta: "Статия · октомври 2026",
        href: "/bankiruemost-bess-yugoiztochna-evropa.html",
      },
    ],
    marketsTitle: "Пазари",
    markets: [
      { title: "Големи централи (utility-scale)", text: "Инженеринг от страната на собственика и прегледи на банкируемостта." },
      { title: "Съхранение (BESS)", text: "Интеграция на PV+BESS в проекта и техническа валидация." },
      { title: "Системи за бизнеса (C&I)", text: "Оценка на площадки и оптимизация на капиталовите разходи." },
      { title: "Придобиване на портфейли", text: "Технически филтър на риска на инвестиционно ниво." },
    ],
    whyTitle: "Защо elevat solar",
    whyText: "Инженерство, насочено към изпълнението, за спонсори, инвеститори и интерфейса с EPC изпълнителите.",
    stats: [
      { value: "250+ MW", label: "консултиран капацитет" },
      { value: "7 държави", label: "оперативен обхват" },
      { value: "големи централи + C&I", label: "обхват на изпълнение" },
    ],
    pillars: [
      { title: "Независими", text: "Без обвързаност с EPC или доставчици на оборудване." },
      { title: "Банкируеми", text: "Резултати според изискванията на финансиращи и инвеститори." },
      { title: "Практични", text: "Препоръки с фокус върху изпълнимост и резултат." },
      { title: "Бърза реакция", text: "Кратки технически цикли за активни проекти." },
    ],
    reviewTitle: "Заяви преглед на соларен проект",
    reviewText: "Изпрати основните параметри на проекта и получи независим технически преглед на риска.",
    bullets: ["Местоположение", "Целева дата на въвеждане (COD) и статус", "Планирана мощност DC/AC", "Основни ограничения"],
    poc: {
      label: "Основно лице за контакт",
      name: "Венелин Димитров",
      role: "Управляващ консултант, Elevat Solar Consulting",
      email: "office@elevatsolar.eu",
      linkedin: "https://www.linkedin.com/in/venelin-dimitrov-17296b3aa/",
      location: "София 1110, ж.к. Яворов, бл. 73, ап. 4",
      phone: "+359 888 220 330",
    },
    form: {
      name: "Име",
      email: "Имейл",
      phone: "Телефон",
      company: "Компания",
      message: "Бележки по проекта",
      messagePlaceholder: "Местоположение, целева дата на въвеждане (COD) и статус, планирана мощност DC/AC, основни ограничения",
      submit: "Изпрати бриф",
      helper: "Задължителни полета: име, имейл и бележки по проекта.",
    },
    briefTitle: "Месечен бюлетин за соларния пазар",
    briefText: "Едно месечно писмо с пазарни движения и сигнали за технически риск.",
    briefCta: "Абонирай се",
    skip: "Към съдържанието",
    linkedinLabel: "Профил в LinkedIn",
    emailLabel: "Имейл адрес",
    videoStatLabel: "консултиран капацитет в 7 държави",
    errors: {
      required: "Моля, попълнете всички задължителни полета.",
      email: "Моля, въведете валиден имейл адрес.",
      subscribe: "Абонаментът не можа да бъде записан. Опитайте отново или пишете на office@elevatsolar.eu.",
    },
    success: {
      review: "Запитването е получено. Ще се свържем с вас скоро.",
      subscribe: "Абонаментът е потвърден.",
    },
  },
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function ScrollVideoSection({ label }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    const PLAY_END = 2.0;
    const FPS = 30;
    const TOTAL_FRAMES = Math.ceil(PLAY_END * FPS);

    let lerpProgress = 0;
    let rafId;
    let ready = false;

    const video = document.createElement("video");
    video.src = "/video5.mp4";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const extractFrames = async () => {
      await new Promise((r) => {
        if (video.readyState >= 2) r();
        else video.addEventListener("canplaythrough", r, { once: true });
      });

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const frames = [];
      for (let i = 0; i <= TOTAL_FRAMES; i++) {
        const time = (i / TOTAL_FRAMES) * PLAY_END;
        video.currentTime = time;
        await new Promise((r) =>
          video.addEventListener("seeked", r, { once: true }),
        );
        const bmp = await createImageBitmap(video);
        frames.push(bmp);
      }
      framesRef.current = frames;
      ready = true;
      ctx.drawImage(frames[0], 0, 0);
    };

    extractFrames();

    const getTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      return Math.max(0, Math.min(1, scrolled / scrollable));
    };

    const tick = () => {
      if (ready) {
        const target = getTarget();
        lerpProgress += (target - lerpProgress) * 0.12;
        const frameIdx = Math.round(lerpProgress * TOTAL_FRAMES);
        const clamped = Math.max(0, Math.min(TOTAL_FRAMES, frameIdx));
        const frame = framesRef.current[clamped];
        if (frame) ctx.drawImage(frame, 0, 0);
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      framesRef.current.forEach((bmp) => bmp.close());
      framesRef.current = [];
    };
  }, []);

  return (
    <div ref={sectionRef} className="scv-section">
      <div className="scv-sticky">
        <div className="scv-shell">
          <canvas ref={canvasRef} className="scv-canvas" />
          <div className="scv-overlay">
            <div className="scv-overlay-content reveal">
              <p className="scv-stat">250+ MW</p>
              <p className="scv-stat-label">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoBg({ size, rotate, dur, delay, style }) {
  return (
    <div className="logo-bg" aria-hidden="true" style={{ width: size, "--logo-rot": `${rotate}deg`, "--logo-dur": dur, "--logo-delay": delay, ...style }}>
      <svg viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="0" width="12" height="12" rx="2" fill="currentColor" />
        <rect x="0" y="14" width="12" height="12" rx="2" fill="currentColor" />
        <rect x="14" y="14" width="12" height="12" rx="2" fill="currentColor" />
        <rect x="0" y="28" width="12" height="12" rx="2" fill="currentColor" />
        <rect x="14" y="28" width="12" height="12" rx="2" fill="currentColor" />
      </svg>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState(() => {
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("lang");
      if (fromUrl === "bg" || fromUrl === "en") return fromUrl;
      const saved = window.localStorage.getItem("lang");
      if (saved === "bg" || saved === "en") return saved;
    } catch {
      /* storage unavailable */
    }
    return "en";
  });
  const [activeSection, setActiveSection] = useState("about");
  const [navHidden, setNavHidden] = useState(false);
  const [reviewData, setReviewData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [reviewState, setReviewState] = useState({ error: "", success: "" });
  const [briefEmail, setBriefEmail] = useState("");
  const [briefState, setBriefState] = useState({ loading: false, error: "", success: "" });

  const t = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 8) return;
      setNavHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const go = () => document.getElementById(id)?.scrollIntoView({ block: "start" });
    const raf = requestAnimationFrame(go);
    const timer = setTimeout(go, 400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-20% 0px -20% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [lang]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviewState({ error: "", success: "" });
    if (!reviewData.name || !reviewData.email || !reviewData.message) {
      setReviewState({ error: t.errors.required, success: "" });
      return;
    }
    if (!isValidEmail(reviewData.email)) {
      setReviewState({ error: t.errors.email, success: "" });
      return;
    }
    setReviewState({ error: "", success: t.success.review });
    setReviewData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setBriefState({ loading: false, error: "", success: "" });
    if (!isValidEmail(briefEmail)) {
      setBriefState({ loading: false, error: "email", success: "" });
      return;
    }
    setBriefState({ loading: true, error: "", success: "" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: briefEmail }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setBriefState({ loading: false, error: "", success: "subscribe" });
      setBriefEmail("");
      setTimeout(() => {
        window.location.href = NEWSLETTER_SUBSCRIBE_URL;
      }, 1200);
    } catch {
      setBriefState({ loading: false, error: "subscribe", success: "" });
    }
  };

  return (
    <>
      <a className="skip-link" href="#about">{t.skip}</a>
      <nav className={navHidden ? "nav nav-hidden" : "nav"} aria-label="Primary">
        <span className="nav-brand">
          <svg width="22" height="34" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Elevat Solar">
            <rect x="14" y="0" width="12" height="12" rx="2" fill="#e89a1d" />
            <rect x="0" y="14" width="12" height="12" rx="2" fill="#e89a1d" />
            <rect x="14" y="14" width="12" height="12" rx="2" fill="#e89a1d" />
            <rect x="0" y="28" width="12" height="12" rx="2" fill="#e89a1d" />
            <rect x="14" y="28" width="12" height="12" rx="2" fill="#e89a1d" />
          </svg>
        </span>
        <div className="nav-links">
          {t.nav.map((item, i) => (
            <a key={item} href={`#${sectionIds[i]}`} className={activeSection === sectionIds[i] ? "active" : ""}>
              {item}
            </a>
          ))}
        </div>
        <span className="nav-sep" aria-hidden="true" />
        <div className="nav-lang" aria-label={t.lang}>
          <button type="button" onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
          <button type="button" onClick={() => setLang("bg")} className={lang === "bg" ? "active" : ""}>BG</button>
        </div>
      </nav>

      <section className="hero" id="about" aria-label="Hero">
        <div className="hero-video" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/video8.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-bar">
          <div className="wrap">
            <div className="hero-body">
              <div className="hero-left">
                <h1>
                  <span className="hero-title-main">{lang === "en" ? "Independent solar engineering" : "Независимо соларно инженерство"}</span>
                  <span className="hero-title-sub">{lang === "en" ? "for developers, EPCs & investors" : "за разработчици, EPC изпълнители и инвеститори"}</span>
                </h1>
              </div>
              <div className="hero-aside">
                <p className="hero-sub">{t.heroText}</p>
                <a className="btn btn-light" href="#contact">
                  {t.heroCta}
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollVideoSection label={t.videoStatLabel} />

      <main>
        <section className="section" id="services">
          <LogoBg size={300} rotate={-16} dur="18s" delay="0s" style={{ top: "6%", right: "2%" }} />
          <div className="wrap">
            <div className="section-header reveal">
              <p className="section-eyebrow">{t.eyebrows.services}</p>
              <h2 className="section-heading">{t.whatTitle}</h2>
              <p className="section-lead">{t.whatText}</p>
            </div>
            <div className="bento">
              {t.services.map((item, i) => (
                <div key={i} className={`card-shell bento-${i + 1} reveal`}>
                  <div className="card-core">
                    <div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text">{item.text}</p>
                    </div>
                    <span className="bento-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <LogoBg size={240} rotate={24} dur="15s" delay="2.5s" style={{ bottom: "8%", left: "3%" }} />
          <div className="wrap">
            <div className="reveal">
              <p className="section-eyebrow">{t.eyebrows.projects}</p>
              <h2 className="section-heading">{t.projectsTitle}</h2>
              <p className="section-lead">{t.projectsText}</p>
            </div>
            <div className="projects-stack">
              {t.projects.map((item, i) => (
                <div key={i} className="card-shell project-card reveal">
                  <div className="card-core">
                    <div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="project-meta">{item.meta}</p>
                    </div>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="insights">
          <LogoBg size={220} rotate={18} dur="19s" delay="1.6s" style={{ top: "10%", right: "4%" }} />
          <div className="wrap">
            <div className="reveal">
              <p className="section-eyebrow">{t.eyebrows.insights}</p>
              <h2 className="section-heading">{t.insightsTitle}</h2>
              <p className="section-lead">{t.insightsText}</p>
            </div>
            <div className="projects-stack">
              {t.insights.map((item, i) => (
                <a key={i} className="card-shell project-card reveal" href={item.href}>
                  <div className="card-core">
                    <div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="project-meta">
                        {item.meta}
                        {item.en && t.insightsLangNote ? ` · ${t.insightsLangNote}` : ""}
                      </p>
                    </div>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <LogoBg size={260} rotate={-6} dur="22s" delay="1s" style={{ top: "8%", left: "3%" }} />
          <div className="wrap">
            <div className="reveal">
              <p className="section-eyebrow">{t.eyebrows.markets}</p>
              <h2 className="section-heading">{t.marketsTitle}</h2>
            </div>
            <div className="grid-2" style={{ marginTop: "3rem" }}>
              {t.markets.map((item, i) => (
                <div key={i} className="card-shell reveal">
                  <div className="card-core">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <LogoBg size={200} rotate={32} dur="13s" delay="4s" style={{ bottom: "10%", right: "3%" }} />
          <div className="wrap">
            <div className="reveal">
              <p className="section-eyebrow">{t.eyebrows.why}</p>
              <h2 className="section-heading">{t.whyTitle}</h2>
              <p className="section-lead">{t.whyText}</p>
            </div>
            <div className="stats-row" style={{ marginTop: "3rem" }}>
              {t.stats.map((item, i) => (
                <div key={i} className="card-shell reveal">
                  <div className="card-core">
                    <p className="stat-value">{item.value}</p>
                    <p className="stat-label">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid-2">
              {t.pillars.map((item, i) => (
                <div key={i} className="card-shell reveal">
                  <div className="card-core">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <LogoBg size={260} rotate={-28} dur="17s" delay="0.8s" style={{ top: "6%", right: "3%" }} />
          <div className="wrap">
            <div className="contact-grid">
              <div className="reveal">
                <p className="section-eyebrow">{t.eyebrows.contact}</p>
                <h2 className="section-heading">{t.reviewTitle}</h2>
                <p className="section-lead">{t.reviewText}</p>
              </div>
              <div className="contact-side">
                <aside className="brief-poc reveal" aria-label={t.poc.label}>
                  <p className="poc-label">{t.poc.label}</p>
                  <p className="poc-name">{t.poc.name}</p>
                  <p className="poc-role">{t.poc.role}</p>
                  <div className="poc-links">
                    <a href={`mailto:${t.poc.email}`}>{t.poc.email}</a>
                    <a href={t.poc.linkedin} target="_blank" rel="noreferrer">{t.linkedinLabel}</a>
                    <a href={`tel:${t.poc.phone.replace(/\s+/g, "")}`}>{t.poc.phone}</a>
                  </div>
                  <p className="poc-location">{t.poc.location}</p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="subscribe-slab reveal">
              <h2 className="subscribe-heading">{t.briefTitle}</h2>
              <p className="subscribe-sub">{t.briefText}</p>
              <form className="subscribe-form" onSubmit={handleSubscribe} noValidate>
                <input
                  className="subscribe-input"
                  type="email"
                  placeholder="your@email.com"
                  value={briefEmail}
                  onChange={(e) => setBriefEmail(e.target.value)}
                  required
                  aria-label={t.emailLabel}
                />
                <button className="btn btn-light" type="submit" disabled={briefState.loading}>
                  {briefState.loading ? "..." : t.briefCta}
                  <span className="btn-arrow">↗</span>
                </button>
              </form>
              {briefState.error && <p className="subscribe-status error">{t.errors[briefState.error]}</p>}
              {briefState.success && <p className="subscribe-status success">{t.success[briefState.success]}</p>}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="footer-brand">{t.brand} · {t.footerTagline}</span>
        </div>
      </footer>
    </>
  );
}

export default App;
