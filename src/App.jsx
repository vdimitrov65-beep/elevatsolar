/* ============================================
   ELEVAT SOLAR — Design System 2026
   Refined B2B Engineering Advisory Aesthetic
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

/* ── Tokens ── */
:root {
  --navy:       #0b1220;
  --navy-80:    rgba(11,18,32,0.80);
  --navy-40:    rgba(11,18,32,0.40);
  --orange:     #e89a1d;
  --orange-dim: #c47e10;
  --cream:      #f5f4ef;
  --mid:        #6b7280;
  --border:     rgba(11,18,32,0.10);
  --white:      #ffffff;

  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:  cubic-bezier(0.7, 0, 0.84, 0);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;

  --shadow-card: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06);
  --shadow-hover: 0 8px 32px rgba(0,0,0,0.12);
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.65;
  color: var(--navy);
  background: var(--white);
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }

/* ── Header ── */
.siteHeader {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 64px;
  background: rgba(11,18,32,0.72);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: background 0.3s var(--ease-out);
}

.siteHeader.scrolled {
  background: rgba(11,18,32,0.95);
}

/* ── Brand ── */
.siteBrand a {
  display: flex;
  align-items: center;
  gap: 10px;
}

.siteBrand svg {
  flex-shrink: 0;
  transition: transform 0.3s var(--ease-out);
}

.siteBrand a:hover svg {
  transform: scale(1.08);
}

.siteBrandText {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.12em;
  color: var(--white);
  transition: color 0.2s;
}

/* ── Nav ── */
.siteNav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.siteNav a {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(255,255,255,0.70);
  position: relative;
  transition: color 0.2s;
}

.siteNav a::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: var(--orange);
  transition: width 0.25s var(--ease-out);
}

.siteNav a:hover {
  color: var(--white);
}

.siteNav a:hover::after {
  width: 100%;
}

/* ── Lang toggle ── */
.siteLang {
  display: flex;
  gap: 2px;
  background: rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 3px;
}

.siteLang button {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.55);
  padding: 4px 10px;
  border-radius: 16px;
  transition: background 0.2s, color 0.2s;
}

.siteLang button:hover,
.siteLang button[style*="700"] {
  background: var(--orange);
  color: var(--white);
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: var(--radius-sm);
  transition: background 0.2s;
}

.hamburger:hover { background: rgba(255,255,255,0.08); }

.hamburger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: rgba(255,255,255,0.80);
  border-radius: 2px;
  transition: transform 0.3s var(--ease-out), opacity 0.3s;
}

.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* ── Mobile nav ── */
.mobileNav {
  position: fixed;
  top: 64px; left: 0; right: 0;
  z-index: 99;
  background: var(--navy);
  padding: 0 24px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s var(--ease-out), padding 0.3s;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.mobileNav.open {
  max-height: 360px;
  padding: 20px 24px 28px;
}

.mobileNav a {
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.80);
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: color 0.2s;
}

.mobileNav a:hover { color: var(--orange); }

.mobileLang {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.mobileLang button {
  background: none;
  border: 1px solid rgba(255,255,255,0.20);
  border-radius: 20px;
  color: rgba(255,255,255,0.60);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 6px 18px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.mobileLang button:hover {
  border-color: var(--orange);
  color: var(--orange);
}

/* ── Sections ── */
.pageSection {
  padding: 100px 24px;
  background: var(--white);
}

.pageSection:nth-child(even) {
  background: var(--cream);
}

.sectionInner {
  max-width: 1080px;
  margin: 0 auto;
}

.sectionInner > h2 {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(32px, 4.5vw, 56px);
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--navy);
  margin-bottom: 20px;
}

.sectionInner > p {
  font-size: clamp(16px, 1.8vw, 19px);
  color: var(--mid);
  max-width: 680px;
  line-height: 1.7;
  margin-bottom: 52px;
}

/* ── Cards ── */
.cardsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 48px;
}

.cardsGrid--3col {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.cardBox {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 32px 28px;
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out), border-color 0.3s;
  position: relative;
  overflow: hidden;
}

.cardBox::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 0;
  background: var(--orange);
  transition: height 0.35s var(--ease-out);
}

.cardBox:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: rgba(232,154,29,0.20);
}

.cardBox:hover::before {
  height: 100%;
}

.cardBox h3 {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--navy);
  margin-bottom: 10px;
}

.cardBox p {
  font-size: 14px;
  color: var(--mid);
  line-height: 1.65;
}

/* ── Stats row ── */
.statsRow {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  margin: 48px 0;
  padding: 40px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.statsRow > div {
  font-size: 13px;
  color: var(--mid);
  letter-spacing: 0.02em;
  line-height: 1.5;
}

.statsRow strong {
  display: block;
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 400;
  color: var(--navy);
  margin-bottom: 4px;
}

/* ── Contact ── */
.contactInfo {
  margin: 28px auto;
  max-width: 480px;
  text-align: left;
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 32px 36px;
}

.contactInfo p {
  font-size: 14px;
  color: var(--mid);
  margin-bottom: 6px;
}

.contactInfo p strong {
  font-size: 16px;
  font-weight: 600;
  color: var(--navy);
}

.contactInfo a {
  color: var(--orange);
  transition: opacity 0.2s;
}

.contactInfo a:hover { opacity: 0.75; }

.contactForm {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

.contactForm input,
.contactForm textarea {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--navy);
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 13px 16px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.contactForm input:focus,
.contactForm textarea:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(232,154,29,0.12);
}

.contactForm textarea {
  min-height: 120px;
  resize: vertical;
}

.contactForm button {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--white);
  background: var(--navy);
  border: none;
  border-radius: var(--radius-sm);
  padding: 15px 28px;
  cursor: pointer;
  transition: background 0.25s, transform 0.2s;
}

.contactForm button:hover {
  background: var(--orange);
  transform: translateY(-1px);
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .siteHeader { padding: 0 20px; }
  .siteNav { display: none; }
  .siteLang { display: none; }
  .hamburger { display: flex; }
  .pageSection { padding: 72px 20px; }
  .statsRow { gap: 28px; }
  .contactInfo { padding: 24px 20px; }
}
