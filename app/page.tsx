"use client";

import { CookieBanner } from "./cookie-banner";
import "./homepage-rebuild.css";

const serviceStrip = [
  ["✦", "Creative & branding", "Stand out for all the right reasons.", "/services/branding-design/"],
  ["▣", "Websites & content", "Beautiful, functional and found online.", "/services/websites/"],
  ["⌑", "Ecommerce support", "Shopify, listings, data and daily admin.", "/services/ecommerce-support/"],
  ["◌", "Digital tools & systems", "Smart tools that save time and headaches.", "/services/"],
  ["◉", "Admin support", "Reliable help so you can focus on growth.", "/services/"],
];

export default function Page() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="target-header">
      <div className="target-topline"><span>✦ &nbsp; CREATIVE SUPPORT. DIGITAL SOLUTIONS. SORTED.</span><a href="mailto:hello@smallshopsos.co.uk">hello@smallshopsos.co.uk</a></div>
      <div className="target-nav">
        <a className="target-brand" href="/" aria-label="Small Shop SOS home"><span>SMALL SHOP</span><strong>SOS</strong><em>CREATIVE & DIGITAL ASSISTANCE</em><i>Marnie Danson</i></a>
        <nav aria-label="Main navigation"><a className="active" href="/">Home</a><a href="/about/">About</a><a href="/services/">Services</a><a href="/book/">Book a time</a><a href="/blog/">Blog</a></nav>
        <a className="outline-button" href="/work-with-me/">Work with me <b>→</b></a>
      </div>
    </header>

    <main id="main" className="target-home">
      <section className="target-hero">
        <div className="target-copy">
          <p className="target-kicker">GIVE ME THE MESS, THE DEADLINE AND ACCESS —</p>
          <h1>I’ll <i>sort</i> it.</h1>
          <p className="target-lede">Creative digital support for small businesses who are too busy running the show to fix what’s slowing it down.</p>
          <ul><li>Branding</li><li>Websites</li><li>Content</li><li>Ecommerce</li><li>Digital tools</li><li>Admin support</li></ul>
          <p><a className="plum-button" href="/work-with-me/">Work with me →</a><a className="line-link" href="/services/">or explore services</a></p>
        </div>
        <figure className="target-photo"><img src="/assets/final/marnie-hero-workspace.png?v=20260827-livefix" alt="Marnie Danson at her desk, ready to sort the creative and practical work" /></figure>
        <div className="chrome-sweep" aria-hidden="true" />
      </section>

      <section className="target-services" aria-label="Ways Marnie can help">
        <p className="service-manifesto">I design it.<br/>Build it.<br/>Fix it. Sort it. <b>♡</b></p>
        {serviceStrip.map(([mark, title, copy, href]) => <a className="strip-service" href={href} key={title}><span>{mark}</span><b>{title}</b><em>{copy}</em></a>)}
        <a href="/bespoke-quote/" className="strip-bespoke">Need something<br/>specific?<i>Let’s talk.</i><b>→</b></a>
      </section>

      <section className="target-close">
        <div><p className="close-label">CREATIVE DIGITAL MECHANIC</p><p>The mix of creative, tech and problem solving your business actually needs.</p><a href="/about/">About Marnie →</a></div>
        <div><p className="close-label">REAL SOLUTIONS</p><p>No fluff. No jargon. Just clear advice and work that gets results.</p><a href="/services/">See how I can help →</a></div>
        <div className="sorted-mark"><span>SMALL SHOP SOS</span><b>SORTED</b><i>✦</i></div>
        <div><p className="close-label">REAL PEOPLE</p><p>Straight talking, reliable support from someone who gets it done.</p><a href="/about/">Kind words →</a></div>
        <div className="burt-promo"><span>◉</span><div><p className="close-label">ASK BURT</p><p>Your built-in assistant for quick answers and good ideas.</p><a href="#burt-assistant">Chat with Burt →</a></div></div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-brand"><span className="brand-type"><b>SMALL SHOP</b><strong>SOS</strong><em>CREATIVE DIGITAL MECHANIC</em></span><p>Creative digital support for small businesses. Made, built and sorted by Marnie.</p></div>
      <div><b>Work with me</b><nav><a href="/services/branding-design/">Branding</a><a href="/services/websites/">Websites</a><a href="/services/content-copy/">Content</a><a href="/services/ecommerce-support/">Ecommerce</a></nav></div>
      <div><b>Explore</b><nav><a href="/about/">About</a><a href="/work-with-me/">Our work</a><a href="/blog/">Journal</a><a href="/services/">All services</a></nav></div>
      <div><b>Let’s connect</b><nav><a href="/book/">Book a time</a><a href="mailto:hello@smallshopsos.co.uk">Email</a><span>Poole, UK · worldwide</span></nav></div>
      <div className="footer-signoff"><strong>SOS</strong><span>Marnie Danson<br/>Author · Designer · Content maker</span></div>
    </footer>
    <CookieBanner />
  </>;
}