import { useEffect, useMemo, useRef, useState } from "react";

const sectionIds = ["about", "services", "projects", "contact"];
const NEWSLETTER_SUBSCRIBE_URL =
  "https://e5a3aca6.sibforms.com/serve/MUIFAGl6jZRusfmZKbTl9o-b_SPdLh6sO3poXKCLSH6tcgH62ll7r8ZV8VvCDpAy1wuqh2HlZJfNaMH7KvPXMRUPf_VgkOjq143QmaYpCEDL730q1L4NOd76MnQd0i-30bervCd8a0rn1HcGbKToPR8nvriIGuulu0f0OpvB57THmb4-SPs2v0TvhaHupMRuTkZL6gnHfHNHx-rWcg==";

const copy = {
  en: {
    brand: "elevat solar",
    nav: ["about", "services", "projects", "contact"],
    lang: "language",
    heroTitle:
      "Independent solar engineering for developers, EPCs and investors",
    heroText:
      "Independent technical partner for solar and storage projects across design review, due diligence, and delivery support.",
    heroCta: "Review our scope",
    eyebrows: {
      services: "What we do",
      projects: "Selected work",
      markets: "Where we operate",
      why: "Why elevat solar",
      contact: "Get in touch",
    },
    footerTagline: "independent engineering for solar and storage",
    whatTitle: "What we do",
    whatText:
      "We combine bankable engineering standards with practical project execution support from pre-development to commissioning.",
    services: [
      {
        title: "Solar engineering",
        text: "Preliminary and detailed design studies for utility-scale and C&I systems.",
      },
      {
        title: "Owner's engineer",
        text: "Independent technical oversight for scope, quality, schedule, and interface risks.",
      },
      {
        title: "Technical due diligence",
        text: "Technical risk screening for financing, acquisitions, and portfolio decisions.",
      },
      {
        title: "Project risk review",
        text: "Structured review of grid, permitting, design, and procurement constraints.",
      },
    ],
    projectsTitle: "Projects",
    projectsText: "Selected references from recent engagements.",
    projects: [
      {
        title: "South battery solar platform",
        meta: "Bulgaria · 42 MWp PV + 68 MWh BESS",
      },
      {
        title: "Merchant portfolio advisory",
        meta: "Romania · 120 MW pipeline technical DD",
      },
      {
        title: "C&I rooftop rollout program",
        meta: "Bulgaria · Multi-site design standardization",
      },
    ],
    marketsTitle: "Markets",
    markets: [
      {
        title: "Utility",
        text: "Owner-side engineering and bankability reviews.",
      },
      {
        title: "Storage",
        text: "PV+BESS design integration and technical validation.",
      },
      {
        title: "Commercial & industrial",
        text: "Site screening and capex optimization support.",
      },
      {
        title: "Portfolio acquisitions",
        text: "Investment-grade technical risk filtering.",
      },
    ],
    whyTitle: "Why elevat solar",
    whyText:
      "Execution-minded engineering built for sponsors, investors, and EPC interfaces.",
    stats: [
      { value: "250+ MW", label: "advised" },
      { value: "7 countries", label: "operational footprint" },
      { value: "utility-scale + C&I", label: "delivery mix" },
    ],
    pillars: [
      { title: "Independent", text: "Not tied to EPC or equipment vendors." },
      {
        title: "Bankable",
        text: "Outputs aligned with lender and investor requirements.",
      },
      {
        title: "Pragmatic",
        text: "Recommendations focused on buildability and outcomes.",
      },
      {
        title: "Fast response",
        text: "Short technical decision cycles for active projects.",
      },
    ],
    reviewTitle: "Request a solar project review",
    reviewText:
      "Share key project parameters and receive an independent technical risk snapshot.",
    bullets: [
      "Site location",
      "Target COD and status",
      "Planned DC/AC size",
      "Main constraints",
    ],
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
      messagePlaceholder:
        "Site location, target COD and status, planned DC/AC size, main constraints",
      submit: "Submit brief",
      helper: "Required fields: name, email, and project notes.",
    },
    briefTitle: "Monthly solar market brief",
    briefText:
      "One concise monthly update on market moves and technical risk signals.",
    briefCta: "Subscribe",
    legal: { privacy: "Privacy policy", terms: "Terms of service" },
    errors: {
      required: "Please fill in all required fields.",
      email: "Please enter a valid email address.",
    },
    success: {
      review: "Brief received. We will contact you shortly.",
      subscribe: "Subscription confirmed.",
    },
  },
  bg: {
    brand: "elevat solar",
    nav: ["за нас", "услуги", "проекти", "контакт"],
    lang: "език",
    heroTitle:
      "Независимо соларно инженерство за developer-и, EPC и инвеститори",
    heroText:
      "Независим технически партньор за solar и storage проекти: design review, due diligence и подкрепа при изпълнение.",
    heroCta: "Вижте обхвата",
    eyebrows: {
      services: "Какво правим",
      projects: "Избрани проекти",
      markets: "Където работим",
      why: "Защо elevat solar",
      contact: "Свържете се",
    },
    footerTagline: "независимо инженерство за solar и storage",
    whatTitle: "Какво правим",
    whatText:
      "Комбинираме банкируеми инженерни стандарти с практическа подкрепа от pre-development до commissioning.",
    services: [
      {
        title: "Соларно инженерство",
        text: "Предварителни и детайлни проектни анализи за utility и C&I системи.",
      },
      {
        title: "Owner's engineer",
        text: "Независим технически контрол на обхват, качество, срок и интерфейсни рискове.",
      },
      {
        title: "Technical due diligence",
        text: "Технически risk screening при финансиране, придобивания и портфолио решения.",
      },
      {
        title: "Преглед на проектен риск",
        text: "Структуриран преглед на мрежа, разрешителни, дизайн и доставки.",
      },
    ],
    projectsTitle: "Проекти",
    projectsText: "Избрани референции от последни ангажименти.",
    projects: [
      {
        title: "South battery solar platform",
        meta: "България · 42 MWp PV + 68 MWh BESS",
      },
      {
        title: "Merchant portfolio advisory",
        meta: "Румъния · 120 MW pipeline technical DD",
      },
      {
        title: "C&I rooftop rollout program",
        meta: "България · Multi-site стандартизация на дизайна",
      },
    ],
    marketsTitle: "Пазари",
    markets: [
      {
        title: "Utility",
        text: "Owner-side engineering и bankability ревюта.",
      },
      { title: "Storage", text: "PV+BESS интеграция и техническа валидация." },
      {
        title: "Commercial & industrial",
        text: "Site screening и capex оптимизация.",
      },
      {
        title: "Portfolio acquisitions",
        text: "Инвестиционно ниво на техническо филтриране.",
      },
    ],
    whyTitle: "Защо elevat solar",
    whyText:
      "Инженерство с фокус върху изпълнението за спонсори, инвеститори и EPC интерфейси.",
    stats: [
      { value: "250+ MW", label: "консултиран капацитет" },
      { value: "7 държави", label: "оперативен обхват" },
      { value: "utility-scale + C&I", label: "микс на изпълнение" },
    ],
    pillars: [
      {
        title: "Независими",
        text: "Без обвързаност с EPC или доставчици на оборудване.",
      },
      {
        title: "Банкируеми",
        text: "Резултати според изискванията на финансиращи и инвеститори.",
      },
      {
        title: "Практични",
        text: "Препоръки с фокус върху изпълнимост и резултат.",
      },
      {
        title: "Бърза реакция",
        text: "Кратки технически цикли за активни проекти.",
      },
    ],
    reviewTitle: "Заяви преглед на соларен проект",
    reviewText:
      "Изпрати основните параметри на проекта и получи независим технически преглед на риска.",
    bullets: [
      "Локация",
      "Целева COD дата и статус",
      "Планиран DC/AC размер",
      "Основни ограничения",
    ],
    poc: {
      label: "Основно лице за контакт",
      name: "Venelin Dimitrov",
      role: "Managing Consultant - Elevat Solar Consulting",
      email: "office@elevatsolar.eu",
      linkedin: "https://www.linkedin.com/in/venelin-dimitrov-17296b3aa/",
      location: "Sofia, Yavorov district, bl.73, ap.4, 1110",
      phone: "+359 888 220 330",
    },
    form: {
      name: "Име",
      email: "Имейл",
      phone: "Телефон",
      company: "Компания",
      message: "Бележки по проекта",
      messagePlaceholder:
        "Локация, целева COD дата и статус, планиран DC/AC размер, основни ограничения",
      submit: "Изпрати бриф",
      helper: "Задължителни полета: име, имейл и бележки по проекта.",
    },
    briefTitle: "Месечен solar market brief",
    briefText:
      "Едно месечно писмо с пазарни движения и сигнали за технически риск.",
    briefCta: "Абонирай се",
    legal: { privacy: "Политика за поверителност", terms: "Общи условия" },
    errors: {
      required: "Моля попълнете всички задължителни полета.",
      email: "Моля въведете валиден имейл адрес.",
    },
    success: {
      review: "Брифът е получен. Ще се свържем с вас скоро.",
      subscribe: "Абонаментът е потвърден.",
    },
  },
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function ScrollVideoSection() {
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

    // Extract frames from video into memory for instant seeking
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
      // Draw the first frame immediately
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
        if (frame) {
          ctx.drawImage(frame, 0, 0);
        }
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
              <p className="scv-stat-label">advised across 7 countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoBg({ size, rotate, dur, delay, style }) {
  return (
    <div
      className="logo-bg"
      aria-hidden="true"
      style={{
        width: size,
        "--logo-rot": `${rotate}deg`,
        "--logo-dur": dur,
        "--logo-delay": delay,
        ...style,
      }}
    >
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
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("about");
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [reviewState, setReviewState] = useState({ error: "", success: "" });
  const [briefEmail, setBriefEmail] = useState("");
  const [briefState, setBriefState] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const t = useMemo(() => copy[lang], [lang]);

  // Active section tracking
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-20% 0px -20% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scroll reveal
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    setBriefState({ loading: false, error: "", success: "" });

    if (!isValidEmail(briefEmail)) {
      setBriefState({ loading: false, error: t.errors.email, success: "" });
      return;
    }

    setBriefState({ loading: true, error: "", success: "" });
    window.location.href = NEWSLETTER_SUBSCRIBE_URL;
  };

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      {/* ── FLOATING NAV ── */}
      <nav className="nav" aria-label="Primary">
        <span className="nav-brand">
          <svg
            width="22"
            height="34"
            viewBox="0 0 28 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Elevat Solar"
          >
            <rect x="14" y="0" width="12" height="12" rx="2" fill="#e89a1d" />
            <rect x="0" y="14" width="12" height="12" rx="2" fill="#e89a1d" />
            <rect x="14" y="14" width="12" height="12" rx="2" fill="#e89a1d" />
            <rect x="0" y="28" width="12" height="12" rx="2" fill="#e89a1d" />
            <rect x="14" y="28" width="12" height="12" rx="2" fill="#e89a1d" />
          </svg>
        </span>
        <div className="nav-links">
          {t.nav.map((item, i) => (
            <a
              key={item}
              href={`#${sectionIds[i]}`}
              className={activeSection === sectionIds[i] ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </div>
        <span className="nav-sep" aria-hidden="true" />
        <div className="nav-lang" aria-label={t.lang}>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={lang === "en" ? "active" : ""}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("bg")}
            className={lang === "bg" ? "active" : ""}
          >
            BG
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
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
                  <span className="hero-title-main">
                    {lang === "en"
                      ? "Independent solar engineering"
                      : "Независимо соларно инженерство"}
                  </span>
                  <span className="hero-title-sub">
                    {lang === "en"
                      ? "for developers, EPCs & investors"
                      : "за developer-и, EPC и инвеститори"}
                  </span>
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

      <ScrollVideoSection />

      <main>
        {/* ── SERVICES ── */}
        <section className="section" id="services">
          <LogoBg
            size={300}
            rotate={-16}
            dur="18s"
            delay="0s"
            style={{ top: "6%", right: "2%" }}
          />
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
                    <span className="bento-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="section" id="projects">
          <LogoBg
            size={240}
            rotate={24}
            dur="15s"
            delay="2.5s"
            style={{ bottom: "8%", left: "3%" }}
          />
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
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARKETS ── */}
        <section className="section">
          <LogoBg
            size={260}
            rotate={-6}
            dur="22s"
            delay="1s"
            style={{ top: "8%", left: "3%" }}
          />
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

        {/* ── WHY / STATS ── */}
        <section className="section">
          <LogoBg
            size={200}
            rotate={32}
            dur="13s"
            delay="4s"
            style={{ bottom: "10%", right: "3%" }}
          />
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

        {/* ── CONTACT ── */}
        <section className="section" id="contact">
          <LogoBg
            size={260}
            rotate={-28}
            dur="17s"
            delay="0.8s"
            style={{ top: "6%", right: "3%" }}
          />
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
                    <a href={t.poc.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn Profile
                    </a>
                    <a href={`tel:${t.poc.phone.replace(/\s+/g, "")}`}>
                      {t.poc.phone}
                    </a>
                  </div>
                  <p className="poc-location">{t.poc.location}</p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* ── BRIEF ── */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="subscribe-slab reveal">
              <h2 className="subscribe-heading">{t.briefTitle}</h2>
              <p className="subscribe-sub">{t.briefText}</p>
              <form
                className="subscribe-form"
                onSubmit={handleSubscribe}
                noValidate
              >
                <input
                  className="subscribe-input"
                  type="email"
                  placeholder="your@email.com"
                  value={briefEmail}
                  onChange={(e) => setBriefEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button
                  className="btn btn-light"
                  type="submit"
                  disabled={briefState.loading}
                >
                  {briefState.loading ? "..." : t.briefCta}
                  <span className="btn-arrow">↗</span>
                </button>
              </form>
              {briefState.error && (
                <p className="subscribe-status error">{briefState.error}</p>
              )}
              {briefState.success && (
                <p className="subscribe-status success">{briefState.success}</p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="footer-brand">
            {t.brand} · {t.footerTagline}
          </span>
          <div className="footer-links">
            <a href="#privacy">{t.legal.privacy}</a>
            <a href="#terms">{t.legal.terms}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
