"use client";

import { CookieBanner } from "./cookie-banner";
import "./homepage-rebuild.css";

const services = [
  ["01", "Branding", "Identity that connects and converts.", "/services/branding-design/"],
  ["02", "Websites", "Beautiful, built right, easy to manage.", "/services/websites/"],
  ["03", "Digital tools", "Systems and automations that save hours.", "/services/"],
  ["04", "Content", "Messaging and assets that get results.", "/services/content-copy/"],
  ["05", "Ecommerce", "Stores that are simple for you and seamless for them.", "/services/ecommerce-support/"],
  ["06", "Admin support", "The behind-the-scenes that keeps everything running.", "/services/"],
];

export default function Page() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="rebuild-header">
      <a className="rebuild-brand" href="/" aria-label="Small Shop SOS home">
        <span>SMALL SHOP</span><strong>SOS</strong><em>CREATIVE DIGITAL MECHANIC</em>
      </a>
      <nav aria-label="Main navigation">
        <a href="/services/">Services</a><a href="/about/">About</a><a href="/work-with-me/">Work with me</a><a href="/blog/">Journal</a>
      </nav>
      <a className="rebuild-button" href="/book/">Book a time →</a>
    </header>

    <main id="main" className="homepage-rebuild">
      <section className="rebuild-hero">
        <div className="hero-copy">
          <p className="hero-kicker">CREATIVE SUPPORT. DIGITAL SOLUTIONS. <b>SORTED.</b></p>
          <h1>I’ll sort<br/><i>it.</i></h1>
          <p className="hero-label">GIVE ME THE MESS, THE DEADLINE AND ACCESS —</p>
          <p className="hero-lede">I’m the creative digital mechanic for small businesses who are too busy running the show to fix what’s slowing it down.</p>
          <a className="rebuild-button light" href="/work-with-me/">Work with me →</a>
          <p className="scribble scribble-one">Let’s get<br/>you sorted.</p>
        </div>
        <figure className="hero-portrait">
          <div className="metal-ring" aria-hidden="true" />
          <img src="/assets/final/marnie-black-blazer.png?v=20260827-livefix" alt="Marnie Danson, founder of Small Shop SOS" />
          <p className="scribble scribble-two">Clear systems<br/>Calm creative<br/>Real results</p>
          <p className="scribble scribble-three">The mix of<br/>creative, tech<br/>and problem<br/>solving.</p>
        </figure>
      </section>

      <section className="help-section" aria-labelledby="help-heading">
        <div className="help-intro">
          <p className="section-label">HOW I HELP</p>
          <h2 id="help-heading">Strategy. Systems.<br/><i>Standout.</i></h2>
          <p>The blend of creative, tech and problem solving that actually moves your business forward.</p>
        </div>
        <div className="help-list">
          {services.map(([number, title, copy, href]) => <a href={href} key={title} className="help-row">
            <span className="service-number">{number}</span><span className="service-mark" aria-hidden="true">✦</span>
            <span><b>{title}</b><em>{copy}</em></span>
          </a>)}
        </div>
        <aside className="help-note">Pick your<br/>problem.<br/>I’ll handle<br/>the fix.<a href="/services/" aria-label="Explore services">→</a></aside>
      </section>

      <section className="method-section" aria-labelledby="method-heading">
        <div className="method-image"><img src="/assets/final/creative-digital-mechanic-flatlay.png?v=20260827-livefix" alt="Creative digital mechanic tools in the Small Shop SOS studio" /></div>
        <div className="method-copy">
          <p className="section-label">THE SOS METHOD</p>
          <h2 id="method-heading">Diagnose. Design. Deliver.<br/><i>Done right.</i></h2>
          <p>No fluff. No jargon. Just clear advice and work that gets results. Straight talking, reliable support from someone who gets it done.</p>
          <a className="rebuild-button light" href="/about/">See how it works →</a>
          <p className="scribble method-note">You run<br/>the show.<br/>I keep it<br/>moving.</p>
        </div>
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