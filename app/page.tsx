"use client";

import { CookieBanner } from "./cookie-banner";

const services = [
  ["01", "Branding & design", "Identity, social design, print and the visual bits that make people stop scrolling.", "/services/branding-design/"],
  ["02", "Websites", "New builds, sharp redesigns, clever fixes and pages that actually earn their keep.", "/services/websites/"],
  ["03", "Content & copy", "Words, captions, product copy and campaigns with an actual point of view.", "/services/content-copy/"],
  ["04", "Ecommerce support", "Shopify, Etsy, TikTok Shop, Amazon, catalogues and behind-the-scenes shop wrangling.", "/services/ecommerce-support/"],
  ["05", "Product data & CSV", "Big product jobs, supplier files and data that has escaped into the wild.", "/services/product-data-csv/"],
  ["06", "VA & admin support", "The useful, unglamorous stuff that gives you your working week back.", "/services/va-admin-support/"],
];

export default function Page() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="top">
      <div className="topline"><span>CREATIVE SUPPORT. DIGITAL SOLUTIONS. SORTED.</span><a href="mailto:hello@smallshopsos.co.uk">hello@smallshopsos.co.uk</a></div>
      <div className="nav">
        <a href="/" className="brand"><img src="/assets/final/sos-logo-primary.png?v=20260827-livefix" alt="Small Shop SOS — Creative Digital Mechanic" /></a>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about/">About</a><a href="/services/">Services</a><a href="/book/">Book a time</a><a href="/blog/">Journal</a></nav>
        <a className="cta" href="/work-with-me/">Work with me →</a>
      </div>
      <details className="mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation"><a href="/">Home</a><a href="/about/">About</a><a href="/services/">Services</a><a href="/book/">Book a time</a><a href="/blog/">Journal</a><a href="/work-with-me/">Work with me</a></nav></details>
    </header>
    <main id="main" className="showcase">
      <section className="showcase-hero">
        <div className="showcase-copy">
          <p className="kicker">AUTHOR • DESIGNER • DIGITAL MECHANIC</p>
          <h1>I’ll <em>sort it.</em></h1>
          <p className="lede">Creative work, practical help and a person who can make the messy bit look brilliant — then make it work properly too.</p>
          <div className="showcase-actions"><a className="cta" href="/work-with-me/">Work with me →</a><a className="textcta" href="/services/">Explore the ways I help</a></div>
          <span className="eyebrow-label">No jargon. No beige business energy.</span>
        </div>
        <figure className="showcase-portrait">
          <img src="/assets/final/marnie-hero-workspace.png?v=20260827-livefix" alt="Marnie Danson at her desk" />
          <img className="mechanical-mark" src="/favicon.svg?v=20260827-round" alt="" aria-hidden="true" />
          <figcaption className="portrait-caption"><b>Marnie Danson</b>Author. Designer. Content maker. The person you call when it needs doing properly.</figcaption>
        </figure>
      </section>
      <div className="hero-ticker" aria-hidden="true"><span>DESIGN IT. BUILD IT. FIX IT. SORT IT. • DESIGN IT. BUILD IT. FIX IT. SORT IT. • </span><span>DESIGN IT. BUILD IT. FIX IT. SORT IT. • DESIGN IT. BUILD IT. FIX IT. SORT IT. • </span></div>
      <section className="manifesto">
        <aside><img src="/favicon.svg?v=20260827-round" alt="" aria-hidden="true" /><p>Small Shop SOS<br/>System: Organise. Simplify. Sort.</p></aside>
        <div><p className="kicker">A CREATIVE BRAIN WITH A TOOLKIT</p><h2>The <i>beautiful</i> bit and the boring bit — both handled.</h2><p>I’m not here to sell you a shiny strategy PDF and disappear. I make brands, build websites, write words, sort ecommerce, rescue product data and get the job over the line.</p></div>
      </section>
      <section className="service-rail">
        <div className="service-rail__head"><h2>Pick the knot.<br/>I’ll untangle it.</h2><p>Six ways to get actual creative, technical and behind-the-scenes support — without pretending they live in separate worlds.</p></div>
        <div className="service-list">{services.map(([number, title, text, href]) => <article className="service-line" key={title}><span className="service-number">{number}</span><h3>{title}</h3><p>{text}</p><a href={href}>Go there →</a></article>)}</div>
      </section>
      <section className="proof-collage">
        <figure className="proof-collage__visual"><img src="/assets/final/about-creative-practical.png?v=20260827-livefix" alt="A Small Shop SOS mix of design, web and practical creative work" /><span>Things should look good.<br/>They should also <i>work.</i></span></figure>
        <div className="proof-collage__copy"><p className="kicker">MORE THAN A PRETTY PAGE</p><h2>Make it memorable. Make it useful.</h2><p>I bring author-level storytelling, designer-level detail and hands-on digital problem solving to the same table. Your business gets a website with a pulse — and someone who can sort the complicated bits behind it.</p><a className="textcta" href="/about/">Read the real version →</a></div>
      </section>
      <section className="closeout"><p className="kicker">GOT A BIG IDEA OR A SMALL DISASTER?</p><h2>Give me the mess, the deadline and access.</h2><p>You don’t need a perfect brief. You just need to know it cannot stay as it is.</p><a className="cta" href="/work-with-me/">Let’s make it happen →</a></section>
    </main>
    <footer className="site-footer">
      <div className="footer-brand"><img src="/assets/final/sos-logo-primary.png?v=20260827-livefix" alt="Small Shop SOS" /><p>Creative digital support for small businesses. Made, built and sorted by Marnie.</p></div>
      <div><b>Start here</b><nav><a href="/about/">About</a><a href="/services/">Services</a><a href="/book/">Book a time</a><a href="/work-with-me/">Work with me</a></nav></div>
      <div><b>Useful things</b><nav><a href="/services/websites/">Websites</a><a href="/services/content-copy/">Content & copy</a><a href="/services/ecommerce-support/">Ecommerce</a><a href="/services/va-admin-support/">VA & admin</a></nav></div>
      <div><b>Say hello</b><nav><a href="mailto:hello@smallshopsos.co.uk">hello@smallshopsos.co.uk</a><span>Poole, UK</span><span>Working with clients worldwide</span></nav></div>
      <div className="footer-signoff"><img src="/favicon.svg?v=20260827-round" alt="Small Shop SOS mark" /><span>Creative digital mechanic</span></div>
    </footer>
    <CookieBanner />
  </>;
}