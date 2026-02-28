import { useState } from "react";

export default function ElevatSolar() {
  const [lang, setLang] = useState("en");

  const text = {
    en: {
      title: "Your solar CAPEX. Optimised.",
      button: "Start Review"
    },
    bg: {
      title: "Твоят соларен CAPEX. Оптимизиран.",
      button: "Започни преглед"
    }
  };

  return (
    <div style={{ background: "#0b1220", color: "white", minHeight: "100vh", padding: 40 }}>
      
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("bg")}>BG</button>
      </div>

      <h1>{text[lang].title}</h1>
      <button>{text[lang].button}</button>

    </div>
  );
}