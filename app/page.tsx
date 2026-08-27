"use client";
import { useEffect, useState } from "react";

const services = [
  ["✦","Branding & design","Logos, full brand identities, social-media design, posters, flyers, apparel graphics and print things that need to look good.","/services/branding-design/"],
  ["⌑","Websites","New builds, redesigns, fixes, pages, words, structure and the ongoing jobs that keep a site useful.","/services/websites/"],
  ["✎","Content & copy","Website copy, product descriptions, captions, marketing words, SEO content and all the bits people actually read.","/services/content-copy/"],
  ["▣","Ecommerce support","Shopify, Etsy, TikTok Shop, Amazon, products, collections, catalogues and everyday shop work. Shopify Partner.","/services/ecommerce-support/"],
  ["#","Product data & CSV","Imports, supplier files, bulk product jobs, catalogue clean-up and data that has gone a bit feral.","/services/product-data-csv/"],
  ["☏","VA & admin support","Inboxes, diaries, documents, customer support, research, organisation and another sensible pair of hands.","/services/va-admin-support/"],
];
export default function Page(){const [burt,setBurt]=useState(false);const [burtVisible,setBurtVisible]=useState(true);useEffect(()=>{const footer=document.querySelector('footer');if(!footer)return;const observer=new IntersectionObserver(([entry])=>setBurtVisible(!entry.isIntersecting),{threshold:.1});observer.observe(footer);return()=>observer.disconnect()},[]);useEffect(()=>{if(document.getElementById('pph-hireme-script'))return;const script=document.createElement('script');script.id='pph-hireme-script';script.async=true;script.src=`${document.location.protocol==='https:'?'https:':'http:'}//www.peopleperhour.com/hire/350038202/13691287.js?width=245&height=320&orientation=vertical&theme=dark&hourlies=1126668%2C1126676&rnd=${Math.floor(Math.random()*10000)}`;document.body.appendChild(script)},[]);return <>
<style>{`.hero-fixed{display:grid!important;grid-template-columns:1fr;grid-template-rows:540px;position:relative;min-height:540px;overflow:hidden;background:#f6f3ef}.hero-fixed .marniehero{grid-area:1/1!important;position:relative!important;width:100%!important;height:540px!important;min-height:540px!important;margin:0!important;background:#e8e2df!important;z-index:0}.hero-fixed .marniehero>img{display:block!important;width:100%!important;height:540px!important;min-height:540px!important;object-fit:cover!important;object-position:center center!important}.hero-fixed .hero-copy{grid-area:1/1;position:relative;z-index:1;width:min(54%,650px);min-height:540px;padding:clamp(52px,7vw,96px) clamp(28px,6vw,86px)!important;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(90deg,#f6f3ef 0%,#f6f3ef 76%,rgba(246,243,239,.84) 90%,rgba(246,243,239,0) 100%)}.hero-fixed .hero-copy h1{font-size:clamp(67px,7.8vw,122px)!important;line-height:.82!important}.hero-fixed .hero-copy>p:not(.eyebrow){max-width:385px}.hero-fixed .hero-copy ul{margin-bottom:0}@media(max-width:800px){.hero-fixed{min-height:720px;display:flex!important;flex-direction:column-reverse}.hero-fixed .marniehero{position:relative!important;height:330px!important;min-height:330px!important}.hero-fixed .marniehero>img{height:330px!important;min-height:330px!important;object-position:58% center!important}.hero-fixed .hero-copy{width:100%;min-height:390px;padding:42px 25px!important;background:#f6f3ef}.hero-fixed .hero-copy h1{font-size:67px!important}.hero-fixed .hero-copy ul{grid-template-columns:repeat(2,max-content)}}`}</style>
<a className="skip" href="#main">Skip to content</a>
<style>{`.mobile-nav{display:none}@media(max-width:950px){.mobile-nav{display:block;padding:0 16px 12px}.mobile-nav summary{cursor:pointer;color:var(--plum);font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.mobile-nav nav{display:grid;gap:10px;padding:15px;margin-top:9px;background:#fff;border:1px solid var(--line);font-size:11px;font-weight:700;text-transform:uppercase}}`}</style>
<header className="top">
<div className="topline">
<span>♡ CREATIVE SUPPORT. DIGITAL SOLUTIONS. SORTED.</span>
<a href="mailto:hello@smallshopsos.co.uk">hello@smallshopsos.co.uk</a>
</div>
<div className="nav">
<a href="/" className="brand">
<img style={{width:170,height:78,objectFit:'contain'}} src="/assets/final/sos-logo-primary.png?v=20260826-imagefix" alt="Small Shop SOS — Creative Digital Mechanic"/>
</a>
<nav aria-label="Main navigation">
<a href="/">Home</a>
<a href="/about/">About</a>
<a href="/services/">Services</a>
<a href="/book/">Book a time</a>
<a href="/blog/">Blog</a>
</nav>
<a className="cta" href="/work-with-me/">Work with me →</a>
</div>
<details className="mobile-nav">
<summary>Menu</summary>
<nav aria-label="Mobile navigation">
<a href="/">Home</a>
<a href="/about/">About</a>
<a href="/services/">Services</a>
<a href="/book/">Book a time</a>
<a href="/blog/">Blog</a>
<a href="/work-with-me/">Work with me</a>
</nav>
</details>
</header>
<main id="main">
<section className="hero hero-fixed" id="home">
<figure className="marniehero">
<img src="/assets/final/marnie-hero-workspace.png?v=20260826-imagefix" alt="Marnie Danson working at the Small Shop SOS desk"/>
</figure>
<div className="hero-copy">
<p className="eyebrow">GIVE ME THE MESS, THE DEADLINE AND ACCESS —</p>
<h1>I’ll sort it.</h1>
<p>Creative digital support for small businesses who are too busy running the show to fix what’s slowing it down.</p>
<ul>
<li>Branding</li>
<li>Websites</li>
<li>Content</li>
<li>Ecommerce</li>
<li>Digital tools</li>
<li>Admin support</li>
</ul>
<div className="actions">
<a className="cta" href="/work-with-me/">Work with me →</a>
<a className="textcta" href="/services/">or explore services</a>
</div>
</div>
</section>
<section className="strip">
<p>
<i>I design it.<br/>Build it.<br/>Fix it. Sort it. ♡</i>
</p>
<div>
<b>Creative digital mechanic</b>
<span>The mix of creative, tech and problem solving your business actually needs.</span>
</div>
<div>
<b>Real solutions</b>
<span>No fluff. No jargon. Just clear advice and work that gets results.</span>
</div>
<div>
<b>Real people</b>
<span>Straight talking, reliable support from someone who gets it done.</span>
</div>
<a href="/about/">About Marnie</a>
</section>
<section className="services" id="services">
<h2>What I can help you with</h2>
<div className="servicegrid">{services.map(([icon,title,text,href])=>
<article key={title}>
<b>{icon}</b>
<h3>{title}</h3>
<p>{text}</p>
<a href={href}>Work with Marnie →</a>
</article>)}</div>
</section>
{false && <section className="portfolio" id="portfolio">
<div className="section-title">
<p className="eyebrow">DESIGNED. BUILT. SORTED.</p>
<h2>A few things I’ve actually made.</h2>
<p>Not a wall of tiny boxes. Just a proper look at the sort of work I can get stuck into.</p>
</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(235px,1fr))',gap:14,maxWidth:1280,margin:'0 auto'}}>{projects.map(([image,category,title,text,label])=>
<article key={title} style={{border:'1px solid #ffffff35',background:'#211e22',overflow:'hidden',display:'grid',gridTemplateRows:'190px auto'}}>
<img src={image} alt={`${title} by Marnie Danson`} style={{width:'100%',height:'190px',objectFit:'cover',objectPosition:title==='Small Shop SOS'?'50% 20%':'center'}}/>
<div style={{padding:'16px',display:'grid',gap:6}}>
<small style={{color:'#dca8c2',fontSize:8,textTransform:'uppercase',fontWeight:700,letterSpacing:'.08em'}}>{label}</small>
<p style={{margin:0,color:'#b7bcc3',fontSize:9,textTransform:'uppercase',fontWeight:700}}>{category}</p>
<h3 style={{margin:0,fontFamily:'var(--display)',fontSize:25,lineHeight:1.05}}>{title}</h3>
<span style={{color:'#e7e1e5',fontSize:11,lineHeight:1.5}}>{text}</span>
<a href={`/portfolio/${title==='Small Shop SOS'?'small-shop-sos':title==='Acorn to Oak'?'acorn-to-oak':title==='Words by Marnie'?'words-by-marnie':'tada-co'}`} style={{marginTop:5,color:'#fff',fontSize:10,fontWeight:700,textDecoration:'underline',textUnderlineOffset:4,textDecorationColor:'#dca8c2'}}>View project →</a>
</div>
</article>)}</div>
<a className="textcta" style={{display:'block',textAlign:'center',marginTop:28,color:'#fff'}} href="/portfolio/">See the full portfolio →</a>
</section>}
<section className="about about-split" id="about">
<div className="about-split__copy">
<p className="eyebrow">A BIT ABOUT MARNIE</p>
<h2>Creative and practical aren’t separate worlds round here.</h2>
<p>I’ve spent 25+ years making, selling, writing, building, helping customers and sorting things out. I can design the logo, write the words, build the site, organise the catalogue and get the horrible little jobs behind it under control.</p>
<p>No corporate speak. No pretending I’m a huge agency. It’s just me — and I’m very good at sorting things.</p>
<a className="textcta" href="/work-with-me/">Tell me what needs sorting →</a>
</div>
<figure className="about-split__image">
<img src="/assets/final/about-creative-practical.png?v=20260826-imagefix" alt="Small Shop SOS creative and practical work: website screens, notes, branding materials and Shopify Partner card"/>
</figure>
</section>
<section className="proof" id="blog">
<div className="section-title">
<p className="eyebrow">KIND WORDS FROM AMAZING HUMANS</p>
<h2>They said nice things. I kept the receipts.</h2>
</div>
<div className="reviewgrid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',maxWidth:1120,margin:'0 auto'}}>
<article>
<b>★★★★★</b>
<p>“Working with Small Shop SOS has made running our online business much easier. From website updates to ecommerce support, everything was explained clearly and completed professionally. It’s refreshing to work with someone who genuinely understands the day-to-day challenges of a small business.”</p>
<span>BellKeeper Ink · Website &amp; Ecommerce Support</span>
</article>
<article>
<b>★★★★★</b>
<p>“Small Shop SOS has been a huge help with managing our online store. Product updates, website improvements and ongoing support have all been handled quickly and professionally. Communication has always been straightforward, and we know the job will be done properly.”</p>
<span>Neon Rage · Ecommerce Support</span>
</article>
<article>
<b>★★★★★</b>
<p>“Small Shop SOS helped us improve our website and simplify the digital side of running our business. Everything was delivered in plain English, with honest advice and practical solutions. We wouldn’t hesitate to recommend them to other small businesses looking for reliable digital support.”</p>
<span>Snickie Snackie Snoo · Website &amp; Digital Business Support</span>
</article>
</div>
<div style={{maxWidth:1120,margin:'34px auto 0',display:'grid',gap:14}}>
<p className="eyebrow" style={{margin:0,textAlign:'center'}}>AND THE SCREENSHOTS, BECAUSE RECEIPTS MATTER</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:18,alignItems:'start'}}>
<figure style={{margin:0,background:'#fff',border:'1px solid #d9d2ce',padding:10}}>
<img src="/assets/final/susie-review.png?v=20260826-imagefix" alt="Five-star PeoplePerHour review from Susie L: Really amazing work - so pleased - thank you :)" style={{width:'100%',height:'auto',display:'block'}}/>
<figcaption style={{padding:'10px 4px 2px',fontSize:12,color:'#4b4148'}}>Susie L. · Five-star PeoplePerHour feedback</figcaption>
</figure>
<figure style={{margin:0,background:'#fff',border:'1px solid #d9d2ce',padding:10}}>
<img src="/assets/final/pph-endorsements.png?v=20260826-imagefix" alt="PeoplePerHour endorsements for Marnie from Sunaina E, Muhammad H and Susie L" style={{width:'100%',height:'auto',display:'block'}}/>
<figcaption style={{padding:'10px 4px 2px',fontSize:12,color:'#4b4148'}}>Professional endorsements and client feedback</figcaption>
</figure>
</div>
</div>
</section>
<section className="contact" id="contact">
<div>
<p className="eyebrow">READY TO GET IT SORTED?</p>
<h2>Got something that needs making, fixing or sorting?</h2>
<p>Tell me what needs sorting. You do not need a polished brief or the right words.</p>
</div>
<a className="cta light" href="/work-with-me/">Let’s work together →</a>
</section>
</main>
<section className="pph-burt" aria-label="PeoplePerHour profile and Ask Burt">
<div className="pph-side" style={{minHeight:560,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
<p className="eyebrow">FIND ME ON PEOPLEPERHOUR</p>
<h2>Find me on<br/>PeoplePerHour.</h2>
<p>Prefer working through a freelance platform? You can find me there too.</p>
<div id="pph-hireme" className="pph-widget" style={{width:'100%',justifyContent:'center'}}/>
<a className="textcta" href="https://www.peopleperhour.com/hire/350038202" target="_blank" rel="noreferrer">View my PPH profile →</a>
</div>
<div className="burt-side" style={{minHeight:560,display:'flex',flexDirection:'column',justifyContent:'center'}}>
<p className="eyebrow">NOT SURE WHAT YOU NEED?</p>
<div className="burt-mark" aria-hidden="true">?</div>
<h2>Ask Burt.</h2>
<p>Burt is the Small Shop SOS Help Assistant. Tell him what you need, what has gone wrong, or where you are stuck.</p>
<p className="burt-note">No jargon. No daft questions. Just a useful place to start.</p>
<button className="cta" onClick={()=>setBurt(true)}>Ask Burt →</button>
</div>
</section>
<footer className="site-footer">
<div className="footer-brand">
<img src="/assets/final/sos-logo-primary.png?v=20260826-imagefix" alt="Small Shop SOS — Creative Digital Mechanic"/>
<p>Creative digital support for small businesses. Made, built and sorted by Marnie.</p>
</div>
<div>
<b>Quick links</b>
<nav>
<a href="/about/">About</a>
<a href="/services/">Services</a>
<a href="/book/">Book a time</a>
<a href="/blog/">Blog</a>
<a href="/work-with-me/">Work with me</a>
</nav>
</div>
<div>
<b>Services</b>
<nav>
<a href="/services/branding-design/">Branding &amp; Design</a>
<a href="/services/websites/">Websites</a>
<a href="/services/content-copy/">Content &amp; Copy</a>
<a href="/services/ecommerce-support/">Ecommerce Support</a>
<a href="/services/product-data-csv/">Product Data &amp; CSV</a>
<a href="/services/va-admin-support/">VA &amp; Admin Support</a>
</nav>
</div>
<div>
<b>Let’s connect</b>
<nav>
<a href="#contact">Instagram</a>
<a href="#contact">TikTok</a>
<a href="#contact">Facebook</a>
<a href="#contact">LinkedIn</a>
<a href="mailto:hello@smallshopsos.co.uk">hello@smallshopsos.co.uk</a>
<span>Based in Poole, UK</span>
<span>Working with clients worldwide</span>
</nav>
</div>
<div>
<b>Legal</b>
<nav>
<a href="/privacy/">Privacy Policy</a>
<a href="/cookies/">Cookie Policy</a>
<a href="/terms/">Terms &amp; Conditions</a>
<a href="/refunds/">Refund Policy</a>
<a href="/service-terms/">Service Terms</a>
<a href="/subscription-terms/">Subscription Terms</a>
<a href="/digital-product-terms/">Digital Product Terms</a>
</nav>
</div>
<div className="footer-signoff">
<img src="/assets/final/sos-logo-primary.png?v=20260826-imagefix" alt="Small Shop SOS"/>
<span>Creative digital mechanic</span>
</div>
</footer>
<style>{`.about-split{display:grid!important;grid-template-columns:1fr 1fr!important;padding:0!important;background:#f6f3ef!important;align-items:stretch!important}.about-split__copy{padding:clamp(46px,7vw,105px)!important;display:flex;flex-direction:column;justify-content:center}.about-split__copy h2{max-width:580px}.about-split__copy p{max-width:520px}.about-split__image{margin:0!important;height:540px!important;min-height:540px!important;overflow:hidden;background:#e8e2df}.about-split__image img{display:block!important;width:100%!important;height:540px!important;min-height:540px!important;object-fit:cover!important;object-position:center!important}@media(max-width:800px){.about-split{grid-template-columns:1fr!important}.about-split__copy{padding:50px 25px!important}.about-split__image{height:310px!important;min-height:310px!important}.about-split__image img{height:310px!important;min-height:310px!important;object-position:center!important}.about-split__copy h2{font-size:clamp(40px,12vw,64px)!important}}.site-footer{grid-template-columns:1.2fr .65fr .9fr 1fr .9fr .6fr!important;gap:clamp(16px,2.2vw,35px)!important;align-items:start!important;padding:36px clamp(25px,5vw,82px)!important;border-top:1px solid var(--line)}.site-footer img{width:142px!important;height:68px!important;object-fit:contain!important}.site-footer p{margin:10px 0 0!important;max-width:205px!important;font-size:10px!important;line-height:1.55}.site-footer>div>b{display:block;margin:2px 0 12px;color:var(--plum);font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.site-footer nav{display:grid!important;gap:7px!important;font-size:9px!important;font-weight:600!important}.site-footer nav a:hover{color:var(--plum)}.site-footer nav span{color:#5b565a;font-size:9px}.site-footer .footer-signoff{display:grid;justify-items:end;gap:8px;text-align:right}.site-footer .footer-signoff img{width:120px!important;height:57px!important}.site-footer .footer-signoff span{color:var(--plum);font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}@media(max-width:1050px){.site-footer{grid-template-columns:repeat(3,1fr)!important}.site-footer .footer-signoff{justify-items:start;text-align:left}}@media(max-width:650px){.site-footer{grid-template-columns:1fr!important;gap:26px!important}.site-footer .footer-signoff{justify-items:start;text-align:left}}`}</style>
{burtVisible&&<button className="burtbtn" onClick={()=>setBurt(!burt)} aria-expanded={burt}>Ask Burt</button>}{burt&&<aside className="burt" aria-label="Ask Burt assistant">
<button aria-label="Close Burt" onClick={()=>setBurt(false)}>×</button>
<b>BURT</b>
<p>Tell me what you need help with.</p>
<a className="cta" href="https://small-shop-sos-help-assistant.young-credit-2510.workers.dev/" target="_blank" rel="noreferrer">Open Burt ↗</a>
<a href="/services/">See what Marnie can help with</a>
<a href="/work-with-me/">Talk to Marnie instead</a>
</aside>}<style>{`.pph-burt{display:grid;grid-template-columns:1fr 1fr;background:#eee9e5;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.pph-burt>div{padding:clamp(40px,5vw,72px) clamp(25px,7vw,100px)}.pph-burt h2{margin:0 0 14px;font:700 clamp(38px,4.4vw,66px)/.9 var(--display);letter-spacing:-.055em}.pph-side{background:#f6f3ef;color:var(--char)}.pph-side>p:not(.eyebrow){max-width:370px;margin:0 0 20px;font-size:13px}.pph-widget{min-height:320px;display:flex;justify-content:flex-start;align-items:center;margin:8px 0 14px}.burt-side{position:relative;overflow:hidden;background:var(--char);color:#fff}.burt-side .eyebrow{color:#dba6c0}.burt-side>p:not(.eyebrow){max-width:400px;color:#e5dfe3;font-size:13px}.burt-side .burt-note{color:#dba6c0;font:italic 20px/1.1 var(--display)}.burt-side .cta{margin-top:12px;background:var(--plum);border-color:#c597af}.burt-mark{position:absolute;right:clamp(25px,5vw,72px);top:32px;display:grid;place-items:center;width:72px;height:72px;border:1px solid #b7bcc366;border-radius:50%;color:#f6f3ef;font:700 44px/1 var(--display);box-shadow:inset 0 0 0 7px #5a2a4a}.burtbtn{background:var(--plum)!important;border-color:#d7a8c0!important;color:#fff!important;border-radius:999px!important;box-shadow:0 7px 18px #1a1a1f44}.burt{background:var(--cream)!important;border-color:var(--plum)!important;box-shadow:7px 7px 0 #5a2a4a!important}.burt>b{display:block;color:var(--plum)!important;font:700 30px var(--display)}.burt a{color:var(--char)!important}.burt button{color:var(--plum)!important}@media(max-width:800px){.pph-burt{grid-template-columns:1fr}.pph-side{order:1}.burt-side{order:2}.pph-widget{justify-content:center}.burt-mark{right:26px;top:26px;width:58px;height:58px;font-size:35px}}`}</style>
</>}
