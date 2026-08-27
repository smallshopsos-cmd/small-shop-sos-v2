"use client";

import { CookieBanner } from "./cookie-banner";

const work = [
  ["/assets/final/sos-identity-board.png?v=20260827-livefix", "Small Shop SOS", "Brand identity, web design and the whole working system."],
  ["/assets/final/writing.png?v=20260827-livefix", "Words that work", "Books, web copy and a story-led way of seeing things."],
  ["/assets/final/acorn.png?v=20260827-livefix", "Acorn to Oak", "Identity, real-world design and details with a point."],
  ["/assets/final/creative-digital-mechanic-flatlay.png?v=20260827-livefix", "Creative mechanic", "The paper, the screen, the making and the fixing."],
];

const services = [
  ["Brand identity & design", "Make it recognisable, memorable and properly yours.", "/services/branding-design/"],
  ["Websites that work", "Build it, fix it, write it, make it easier to run.", "/services/websites/"],
  ["Words & content", "Copy, campaigns, captions and stories people actually read.", "/services/content-copy/"],
  ["Ecommerce & systems", "The shop, the catalogue, the data and all the unsexy bits.", "/services/ecommerce-support/"],
];

export default function Page() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="top">
      <div className="topline"><span>CREATIVE SUPPORT. DIGITAL SOLUTIONS. SORTED.</span><a href="mailto:hello@smallshopsos.co.uk">hello@smallshopsos.co.uk</a></div>
      <div className="nav">
        <a href="/" className="brand" aria-label="Small Shop SOS home"><span className="brand-type"><b>SMALL SHOP</b><strong>SOS</strong><em>CREATIVE DIGITAL MECHANIC</em></span></a>
        <nav aria-label="Main navigation"><a href="/services/">Services</a><a href="/about/">About</a><a href="#work">Work</a><a href="/blog/">Journal</a></nav>
        <a className="cta" href="/book/">Book a time →</a>
      </div>
      <details className="mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation"><a href="/services/">Services</a><a href="/about/">About</a><a href="#work">Work</a><a href="/blog/">Journal</a><a href="/book/">Book a time</a></nav></details>
    </header>
    <main id="main" className="showcase image-one">
      <section className="image-one__hero">
        <div className="image-one__copy">
          <p className="kicker">CREATIVE WORK. PRACTICAL HELP. ONE ACTUAL PERSON.</p>
          <h1>I’ll<br/><i>sort it.</i></h1>
          <p className="image-one__lede">I’m Marnie — author, designer, social-content manager and the creative digital mechanic you call when it needs to look brilliant <em>and</em> work properly.</p>
          <div className="showcase-actions"><a className="cta" href="/work-with-me/">Work with me →</a><a className="textcta" href="/services/">See what I can sort</a></div>
          <p className="hero-side-note">Give me the mess,<br/>the deadline and access.</p>
        </div>
        <figure className="image-one__portrait">
          <img src="/assets/final/marnie-black-blazer.png?v=20260827-livefix" alt="Marnie Danson, founder of Small Shop SOS" />
          <figcaption><b>MARNIE DANSON</b>Author · designer · content maker<br/>Creative digital mechanic</figcaption>
          <aside className="image-one__note image-one__note--top">This isn’t just content.<br/><i>It’s clarity. Consistency.<br/>Connection. Results.</i></aside>
          <aside className="image-one__note image-one__note--bottom">The mix of creative, tech<br/>and problem solving.</aside>
        </figure>
      </section>
      <section className="image-one__manifesto">
        <div className="image-one__chapter"><span>CHAPTER</span><b>01</b><i>THE STORY SO FAR</i></div>
        <div><p className="kicker">THE SOS METHOD</p><h2>Diagnose.<br/>Design.<br/><i>Deliver.</i></h2><p>Whether you need a show-stopping identity, a website with an actual personality, words that stick, or the systems behind it all brought back under control — I’m here for the whole job.</p></div>
        <figure><img src="/assets/final/creative-digital-mechanic-flatlay.png?v=20260827-livefix" alt="Small Shop SOS creative work materials" /></figure>
      </section>
      <section className="image-one__work" id="work">
        <div className="image-one__work-heading"><p className="kicker">THE GOOD STUFF</p><h2>Look what I make.</h2><p>Not neat little samples tucked away where nobody sees them. Actual creative work, with a point of view.</p></div>
        <div className="image-one__grid">{work.map(([image,title,text], index)=><figure className={"image-one__work-card card-"+index} key={title}><img src={image} alt={title}/><figcaption><b>{title}</b><span>{text}</span></figcaption></figure>)}</div>
        <a className="textcta image-one__all-work" href="/services/">Explore the work →</a>
      </section>
      <section className="image-one__services">
        <div><p className="kicker">NOT JUST PRETTY POSTS</p><h2>Creative digital support for small businesses who want more than beige.</h2><p>Strategy that makes sense. Systems that save time. Content that connects. A person who can genuinely get it done.</p></div>
        <div className="image-one__service-list">{services.map(([title,text,href],index)=><a href={href} key={title}><span>0{index+1}</span><b>{title}</b><em>{text}</em></a>)}</div>
      </section>
      <section className="image-one__close"><p className="kicker">I’M NOT HERE TO DO MORE.</p><h2>I’m here to make it <i>work better.</i></h2><p>Let’s get you sorted.</p><a className="cta" href="/work-with-me/">Tell me what needs doing →</a></section>
    </main>
    <footer className="site-footer">
      <div className="footer-brand"><span className="brand-type"><b>SMALL SHOP</b><strong>SOS</strong><em>CREATIVE DIGITAL MECHANIC</em></span><p>Creative digital support for small businesses. Made, built and sorted by Marnie.</p></div>
      <div><b>Work with me</b><nav><a href="/services/branding-design/">Branding</a><a href="/services/websites/">Websites</a><a href="/services/content-copy/">Content</a><a href="/services/ecommerce-support/">Ecommerce</a></nav></div>
      <div><b>Explore</b><nav><a href="/about/">About</a><a href="#work">Our work</a><a href="/blog/">Journal</a><a href="/services/">All services</a></nav></div>
      <div><b>Let’s connect</b><nav><a href="/book/">Book a time</a><a href="mailto:hello@smallshopsos.co.uk">Email</a><span>Poole, UK · worldwide</span></nav></div>
      <div className="footer-signoff"><strong>SOS</strong><span>Marnie Danson<br/>Author · Designer · Content maker</span></div>
    </footer>
    <CookieBanner />
  </>;
}