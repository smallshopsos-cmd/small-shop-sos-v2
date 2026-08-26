import { SiteFooter, SiteHeader } from "../site-chrome";
import CalEmbed from "./cal-embed";

export const metadata = {
  title: "Book a Time | Small Shop SOS",
  description: "Book a Quick Fix Chat or Project Chat with Marnie at Small Shop SOS.",
  alternates: { canonical: "/book/" },
};

export default function BookPage() {
  return <main className="route-page book-page"><SiteHeader />
    <style>{`.book-wrap{max-width:1240px;margin:0 auto;padding:clamp(55px,8vw,105px) clamp(22px,7vw,90px)}.book-intro{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(35px,8vw,110px);align-items:start;margin-bottom:42px}.book-intro h1{margin:8px 0 20px;font:700 clamp(54px,8vw,103px)/.88 var(--display);letter-spacing:-.065em}.book-intro p{max-width:500px;font-size:16px;line-height:1.7}.book-note{padding:28px;background:#5a2a4a;color:#fff;border-left:5px solid #b7bcc3}.book-note p{margin:0 0 16px;color:#f6f3ef}.book-note em{color:#e9c8d7;font:italic 22px/1.2 var(--display)}.book-frame{min-height:720px;padding:14px;background:#fff;border:1px solid #d8d3ce;box-shadow:14px 14px 0 #e7e1e3}.book-frame>div{min-height:690px;width:100%}@media(max-width:780px){.book-intro{grid-template-columns:1fr}.book-frame{min-height:780px;padding:6px;box-shadow:7px 7px 0 #e7e1e3}.book-frame>div{min-height:760px}}`}</style>
    <section className="book-wrap"><div className="book-intro"><div><p className="eyebrow">BOOK A TIME WITH ME</p><h1>Sometimes it’s easier to just talk it through.</h1><p>Got something you need to build, fix, create or sort? Pick a time that works for you and tell me what’s going on.</p></div><aside className="book-note"><p className="eyebrow" style={{ color: "#e9c8d7" }}>RATHER WRITE IT ALL DOWN?</p><p>You do not need a polished brief or the right words.</p><a className="cta light" href="/work-with-me/">Tell me about your project →</a></aside></div><div className="book-frame"><CalEmbed /></div></section>
    <SiteFooter />
  </main>;
}
