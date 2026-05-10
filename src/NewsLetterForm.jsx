import { useState } from "react";

export default function NewsletterForm({ lang }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
    if (!email) return;
    try {
      const res = await fetch("/api/subscribe", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
        body: JSON.stringify({
          email,
          attributes: { FIRSTNAME: name },
          listIds: [3],
          updateEnabled: true,
        }),
      });
      if (res.ok || res.status === 204) {
        setStatus("success");
        setEmail("");
        setName("");
        setTimeout(() => {
          window.location.href = "/brief3.html";
        }, 1000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ maxWidth: "480px" }}>
      {status === "success" ? (
        <p style={{ color: "#4ade80", fontSize: "18px" }}>
          {lang === "bg" ? "Успешно се абонирахте!" : "Successfully subscribed!"}
        </p>
      ) : (
        <>
          <input
            placeholder={lang === "bg" ? "Вашето име" : "Your name"}
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: "100%", padding: "14px 16px", marginBottom: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "15px" }}
          />
          <input
            placeholder={lang === "bg" ? "Вашият имейл" : "Your email"}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: "14px 16px", marginBottom: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "15px" }}
          />
          <button
            onClick={handleSubmit}
            style={{ width: "100%", padding: "15px", background: "#fff", color: "#0b1220", borderRadius: "10px", border: "none", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}
          >
            {lang === "bg" ? "Абонирай се" : "Subscribe"}
          </button>
          {status === "error" && (
            <p style={{ color: "#f87171", marginTop: "10px" }}>
              {lang === "bg" ? "Грешка. Опитайте отново." : "Error. Please try again."}
            </p>
          )}
        </>
      )}
    </div>
  );
} 
