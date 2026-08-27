"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sos-cookie-consent-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const choice = JSON.parse(saved);
        setAnalytics(Boolean(choice.analytics));
        setMarketing(Boolean(choice.marketing));
      } else setVisible(true);
    } catch { setVisible(true); }
  }, []);

  function save(nextAnalytics: boolean, nextMarketing: boolean) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: nextAnalytics, marketing: nextMarketing, savedAt: new Date().toISOString() }));
    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    setVisible(false);
    setSettings(false);
  }

  if (!visible) return null;
  return <aside className="cookie-banner" aria-label="Cookie choices">
    <div className="cookie-banner__copy"><strong>Cookies, but kept simple.</strong><span>Essential storage keeps the site working. Optional analytics and marketing stay off unless you choose them. <a href="/cookies/">Cookie policy</a></span></div>
    {settings && <div className="cookie-banner__settings"><label><input type="checkbox" checked disabled /> Essential storage <small>Always on</small></label><label><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /> Optional analytics</label><label><input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} /> Optional marketing</label></div>}
    <div className="cookie-banner__actions"><button onClick={() => save(true, true)}>Accept all</button><button className="secondary" onClick={() => save(false, false)}>Reject non-essential</button><button className="text" onClick={() => settings ? save(analytics, marketing) : setSettings(true)}>{settings ? "Save choices" : "Cookie settings"}</button></div>
    <style>{`.cookie-banner{position:fixed;z-index:80;left:16px;right:16px;bottom:16px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;align-items:center;padding:14px 16px;border:1px solid #5a2a4a;background:#f6f3ef;color:#1a1a1f;box-shadow:6px 7px 0 #5a2a4a;font:12px/1.4 system-ui,sans-serif}.cookie-banner__copy{display:grid;gap:3px}.cookie-banner__copy strong{font:700 15px/.95 var(--display)}.cookie-banner__copy span{max-width:650px}.cookie-banner a{color:#5a2a4a;font-weight:800}.cookie-banner__actions{display:flex;gap:8px;align-items:center}.cookie-banner button{border:1px solid #5a2a4a;background:#5a2a4a;color:#fff;padding:9px 11px;font:800 10px/1 system-ui,sans-serif;cursor:pointer;white-space:nowrap}.cookie-banner button.secondary{background:transparent;color:#5a2a4a}.cookie-banner button.text{border-color:transparent;background:transparent;color:#5a2a4a;text-decoration:underline;text-underline-offset:3px}.cookie-banner__settings{grid-column:1/-1;display:flex;gap:20px;padding-top:10px;border-top:1px solid #d8d3ce}.cookie-banner__settings label{display:flex;gap:6px;align-items:center;font-size:11px}.cookie-banner__settings small{color:#625c60}@media(max-width:720px){.cookie-banner{left:10px;right:10px;bottom:10px;grid-template-columns:1fr}.cookie-banner__actions{flex-wrap:wrap}.cookie-banner__settings{display:grid;gap:8px}}`}</style>
  </aside>;
}
