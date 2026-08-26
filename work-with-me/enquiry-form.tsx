"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const contact = String(form.get("contact") || "").trim();
    const message = String(form.get("message") || "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, contact ? `Phone / preferred contact: ${contact}` : "", "", "What I need help with:", message].filter(Boolean).join("\n");
    window.location.href = `mailto:hello@smallshopsos.co.uk?subject=${encodeURIComponent(`Small Shop SOS enquiry from ${name || "website visitor"}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return <form className="enquiry-form" onSubmit={submit}>
    <div className="enquiry-form__grid"><label>Your name<input name="name" autoComplete="name" required /></label><label>Your email<input name="email" type="email" autoComplete="email" required /></label></div>
    <label>Phone number or how you would rather I reply <span>(optional)</span><input name="contact" autoComplete="tel" /></label>
    <label>What is going on?<textarea name="message" required placeholder="My website is doing my head in and I don't really know what I need…" /></label>
    <button className="cta" type="submit">Send your enquiry →</button>
    {sent && <p className="enquiry-form__note">Your email app should open with everything filled in. If it does not, email <a href="mailto:hello@smallshopsos.co.uk">hello@smallshopsos.co.uk</a> instead.</p>}
  </form>;
}
