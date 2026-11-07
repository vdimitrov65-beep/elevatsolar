/* Cookie consent for elevatsolar.eu. Google Analytics loads only after the visitor accepts. */
(function () {
  var GA_ID = "G-Q5HHP98NM4";
  var KEY = "cookie-consent";
  var loaded = false;
  var langFromPage = false;

  function getChoice() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setChoice(v) {
    try { window.localStorage.setItem(KEY, v); } catch (e) { /* storage unavailable */ }
  }
  function isBg() {
    var path = window.location.pathname;
    if (!langFromPage && (path === "/" || path === "/index.html")) {
      try {
        var q = new URLSearchParams(window.location.search).get("lang");
        if (q === "bg" || q === "en") return q === "bg";
        var saved = window.localStorage.getItem("lang");
        if (saved === "bg" || saved === "en") return saved === "bg";
      } catch (e) { /* storage unavailable */ }
    }
    return (document.documentElement.lang || "").toLowerCase().indexOf("bg") === 0;
  }

  function loadGA() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  function clearGACookies() {
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name === "_ga" || name.indexOf("_ga_") === 0) {
        var host = window.location.hostname;
        var expire = "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        document.cookie = name + expire;
        document.cookie = name + expire + "; domain=" + host;
        document.cookie = name + expire + "; domain=." + host.replace(/^www\./, "");
      }
    });
  }

  function text() {
    return isBg()
      ? {
          msg: "Използваме Google Analytics, за да разберем как се използва сайтът. Бисквитките се поставят само с Ваше съгласие.",
          policy: "Политика за поверителност",
          href: "/politika-za-poveritelnost.html",
          accept: "Приемам",
          decline: "Отказвам",
        }
      : {
          msg: "We use Google Analytics to understand how the site is used. Cookies are set only with your consent.",
          policy: "Privacy policy",
          href: "/privacy-policy.html",
          accept: "Accept",
          decline: "Decline",
        };
  }

  function showBanner() {
    if (document.getElementById("cc-banner")) return;
    var t = text();
    var style = document.getElementById("cc-style") || document.createElement("style");
    style.id = "cc-style";
    style.textContent =
      "#cc-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:640px;margin:0 auto;" +
      "background:#1c1a17;color:#f8f7f2;border-radius:14px;padding:18px 20px;box-shadow:0 10px 30px rgba(0,0,0,.25);" +
      "font:14px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;}" +
      "#cc-banner p{margin:0 0 12px;}#cc-banner a{color:#e8922a;}" +
      "#cc-banner .cc-btns{display:flex;gap:10px;flex-wrap:wrap;}" +
      "#cc-banner button{flex:1 1 120px;border:1px solid #f8f7f2;border-radius:999px;padding:9px 16px;cursor:pointer;" +
      "font:600 13px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;}" +
      "#cc-banner .cc-accept{background:#f8f7f2;color:#1c1a17;}#cc-banner .cc-decline{background:transparent;color:#f8f7f2;}";
    document.head.appendChild(style);

    var box = document.createElement("div");
    box.id = "cc-banner";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-live", "polite");
    box.setAttribute("aria-label", t.policy);
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(t.msg + " "));
    var a = document.createElement("a");
    a.href = t.href;
    a.textContent = t.policy;
    p.appendChild(a);
    var btns = document.createElement("div");
    btns.className = "cc-btns";
    var acc = document.createElement("button");
    acc.type = "button";
    acc.className = "cc-accept";
    acc.textContent = t.accept;
    var dec = document.createElement("button");
    dec.type = "button";
    dec.className = "cc-decline";
    dec.textContent = t.decline;
    btns.appendChild(dec);
    btns.appendChild(acc);
    box.appendChild(p);
    box.appendChild(btns);
    document.body.appendChild(box);

    acc.addEventListener("click", function () {
      setChoice("granted");
      box.remove();
      loadGA();
    });
    dec.addEventListener("click", function () {
      var wasGranted = getChoice() === "granted";
      setChoice("denied");
      box.remove();
      clearGACookies();
      if (wasGranted) window.location.reload();
    });
  }

  window.openCookieSettings = function () {
    showBanner();
    return false;
  };

  // Keep the banner in the page language when the visitor switches BG/EN on the home page.
  new MutationObserver(function () {
    langFromPage = true;
    var box = document.getElementById("cc-banner");
    if (!box) return;
    box.remove();
    showBanner();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  function init() {
    var c = getChoice();
    if (c === "granted") loadGA();
    else if (c !== "denied") showBanner();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
