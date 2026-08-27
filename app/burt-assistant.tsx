"use client";

import { FormEvent, useState } from "react";

const ASSISTANT_URL = "https://small-shop-sos-help-assistant.young-credit-2510.workers.dev/";
const WHATSAPP_URL = "https://wa.me/447342729158";
const SITE_CONTEXT = `Small Shop SOS is Marnie Danson's creative and practical digital support business.

Current services only:
- Branding & design: logos, brand identities, social-media design, posters, flyers, apparel graphics and print.
- Websites: new builds, redesigns, fixes, pages, words, structure and ongoing website help.
- Content & copy: website copy, product descriptions, captions, marketing words and SEO content.
- Ecommerce support: Shopify, Etsy, TikTok Shop, Amazon, products, collections, catalogues and shop support.
- Product data & CSV: imports, supplier files, bulk product jobs, catalogue clean-up and data work.
- VA & admin support: inboxes, diaries, documents, customer support, research and organisation.

Routes: /services/, /services/branding-design/, /services/websites/, /services/content-copy/, /services/ecommerce-support/, /services/product-data-csv/, /services/va-admin-support/, /book/, /work-with-me/.
There is no live portfolio. Do not mention old packages, products, prices, Website MOTs, old pages or old services.`;

type Message = { role: "user" | "assistant"; content: string };

export function BurtAssistant() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi, I’m Burt. Tell me what you need help with and I’ll point you in the right direction." },
  ]);
  const [busy, setBusy] = useState(false);

  async function send(event: FormEvent) {
    event.preventDefault();
    const message = text.trim();
    if (!message || busy) return;
    const history = messages.slice(-6);
    setMessages((current) => [...current, { role: "user", content: message }]);
    setText("");
    setBusy(true);
    try {
      const response = await fetch(ASSISTANT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, page: window.location.pathname, context: SITE_CONTEXT, history }),
      });
      const result = await response.json();
      setMessages((current) => [...current, { role: "assistant", content: result.answer || "I’m not sure enough to answer that. You can talk to Marnie instead." }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "I can’t answer right now. You can talk to Marnie on WhatsApp or book a call instead." }]);
    } finally {
      setBusy(false);
    }
  }

  return <>
    <button className="burt-launcher" onClick={() => setOpen(true)} aria-label="Ask Burt">Ask Burt</button>
    {open && <aside className="burt-chat" aria-label="Burt, the Small Shop SOS help assistant">
      <div className="burt-chat__head"><div><small>SMALL SHOP SOS</small><strong>Burt</strong></div><button onClick={() => setOpen(false)} aria-label="Close Burt">×</button></div>
      <div className="burt-chat__messages" aria-live="polite">{messages.map((item, index) => <p key={index} className={`burt-chat__message burt-chat__message--${item.role}`}>{item.content}</p>)}{busy && <p className="burt-chat__message burt-chat__message--assistant">Burt is thinking…</p>}</div>
      <form className="burt-chat__form" onSubmit={send}><label className="sr-only" htmlFor="burt-question">What do you need help with?</label><textarea id="burt-question" value={text} onChange={(event) => setText(event.target.value)} placeholder="What do you need help with?" rows={2} /><button type="submit" disabled={busy}>Send</button></form>
      <div className="burt-chat__handoff"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Talk to a human</a><a href="/book/">Book a call</a></div>
    </aside>}
    <style>{`.burt-launcher{position:fixed;right:22px;bottom:22px;z-index:60;border:1px solid #d7a8c0;border-radius:999px;background:#5a2a4a;color:#fff;padding:13px 19px;font:700 12px/1 system-ui,sans-serif;box-shadow:0 10px 25px #1a1a1f44;cursor:pointer}.burt-chat{position:fixed;right:20px;bottom:20px;z-index:70;width:min(390px,calc(100vw - 32px));overflow:hidden;border:1px solid #5a2a4a;background:#f6f3ef;color:#1a1a1f;box-shadow:8px 10px 0 #5a2a4a}.burt-chat__head{display:flex;justify-content:space-between;align-items:center;padding:17px 18px;background:#1a1a1f;color:#fff}.burt-chat__head small{display:block;color:#dba6c0;font-size:9px;font-weight:800;letter-spacing:.12em}.burt-chat__head strong{font:700 30px/.9 var(--display)}.burt-chat__head button{border:0;background:transparent;color:#fff;font-size:28px;cursor:pointer}.burt-chat__messages{display:grid;gap:10px;max-height:290px;overflow:auto;padding:16px}.burt-chat__message{margin:0;max-width:88%;padding:11px 13px;font-size:13px;line-height:1.45}.burt-chat__message--assistant{justify-self:start;background:#fff;border:1px solid #ded7d3}.burt-chat__message--user{justify-self:end;background:#5a2a4a;color:#fff}.burt-chat__form{display:grid;grid-template-columns:1fr auto;gap:8px;padding:0 16px 12px}.burt-chat__form textarea{resize:none;border:1px solid #cfc7c2;padding:10px;background:#fff;font:13px/1.4 system-ui,sans-serif}.burt-chat__form button{border:0;background:#5a2a4a;color:#fff;padding:0 13px;font-weight:700;cursor:pointer}.burt-chat__form button:disabled{opacity:.55}.burt-chat__handoff{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #d8d3ce}.burt-chat__handoff a{padding:13px 8px;text-align:center;color:#5a2a4a;font-size:11px;font-weight:800;text-decoration:none}.burt-chat__handoff a+a{border-left:1px solid #d8d3ce}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}@media(max-width:600px){.burt-launcher{right:15px;bottom:15px}.burt-chat{right:12px;bottom:12px}}`}</style>
  </>;
}
