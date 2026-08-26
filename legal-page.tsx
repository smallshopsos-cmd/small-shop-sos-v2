import { legalContent } from "./legal-content";

export function LegalPage({ title }: { title: string }) {
  return (
    <main className="legal-page">
      <header className="legal-page__header">
        <a href="/" aria-label="Back to Small Shop SOS home">
          SMALL SHOP SOS
        </a>
        <span>Creative digital mechanic</span>
      </header>
      <article className="legal-page__article">
        <a className="legal-page__back" href="/">← Back to home</a>
        <p className="legal-page__eyebrow">SMALL SHOP SOS · LEGAL</p>
        <h1>{title}</h1>
        <div
          className="legal"
          dangerouslySetInnerHTML={{ __html: legalContent(title) }}
        />
      </article>
      <footer className="legal-page__footer">
        <span>Small Shop SOS · Marnie Danson</span>
        <a href="mailto:hello@smallshopsos.co.uk">hello@smallshopsos.co.uk</a>
      </footer>
      <style>{`
        .legal-page{min-height:100vh;background:#f6f3ef;color:#1a1a1f}
        .legal-page__header{display:flex;align-items:center;justify-content:space-between;padding:22px clamp(24px,7vw,110px);border-bottom:1px solid #d9d2ce;font:700 10px/1 Montserrat,Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase}
        .legal-page__header a{color:#1a1a1f;text-decoration:none}.legal-page__header span{color:#5a2a4a}
        .legal-page__article{max-width:850px;margin:0 auto;padding:clamp(55px,8vw,110px) clamp(24px,5vw,64px)}
        .legal-page__back{display:inline-block;margin-bottom:38px;color:#5a2a4a;font:700 11px/1 Montserrat,Arial,sans-serif;text-decoration:underline;text-underline-offset:4px}
        .legal-page__eyebrow{margin:0 0 14px;color:#5a2a4a;font:700 10px/1 Montserrat,Arial,sans-serif;letter-spacing:.16em}
        .legal-page h1{margin:0 0 34px;font:700 clamp(48px,7vw,84px)/.9 'Playfair Display',Georgia,serif;letter-spacing:-.055em}
        .legal{font:400 16px/1.75 Montserrat,Arial,sans-serif}.legal h2{margin:42px 0 12px;font:700 clamp(25px,4vw,37px)/1 'Playfair Display',Georgia,serif;letter-spacing:-.03em}.legal p,.legal li{max-width:76ch}.legal ul{padding-left:22px}.legal li+li{margin-top:8px}.legal address{padding:18px 20px;border-left:3px solid #5a2a4a;background:#eee9e5;font-style:normal}.legal a{color:#5a2a4a;text-decoration:underline;text-underline-offset:3px}.legal-updated{color:#625d60;font-size:13px}.legal code{font-size:13px;background:#eee9e5;padding:2px 4px}
        .legal-page__footer{display:flex;justify-content:space-between;gap:18px;padding:24px clamp(24px,7vw,110px);background:#1a1a1f;color:#f6f3ef;font:600 10px/1.5 Montserrat,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}.legal-page__footer a{color:#e3aec8;text-decoration:none}
        @media(max-width:600px){.legal-page__header,.legal-page__footer{align-items:flex-start;flex-direction:column}.legal-page__header span{display:none}}
      `}</style>
    </main>
  );
}
