"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    const windowWithCal = window as Window & { Cal?: (...args: unknown[]) => unknown };
    if (windowWithCal.Cal) return;

    (function (C: Window & { Cal?: (...args: unknown[]) => unknown }, A: string, L: string) {
      const d = C.document;
      C.Cal = C.Cal || function (...args: unknown[]) {
        const cal = C.Cal as ((...inner: unknown[]) => unknown) & { loaded?: boolean; q?: unknown[][]; ns?: Record<string, ((...inner: unknown[]) => unknown) & { q?: unknown[][] }> };
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = d.createElement("script");
          script.src = A;
          script.async = true;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (args[0] === L) {
          const namespace = args[1] as string;
          const api = cal.ns?.[namespace] || Object.assign((...queueArgs: unknown[]) => { api.q = api.q || []; api.q.push(queueArgs); }, { q: [] as unknown[][] });
          if (cal.ns) cal.ns[namespace] = api;
          api(...args);
          cal("initNamespace", namespace);
          return api;
        }
        cal.q = cal.q || [];
        cal.q.push(args);
      };
    })(windowWithCal, "https://app.cal.com/embed/embed.js", "init");

    windowWithCal.Cal?.("init", "marnie-sos", { origin: "https://cal.com" });
    const cal = (windowWithCal.Cal as ((...args: unknown[]) => unknown) & { ns?: Record<string, (...args: unknown[]) => unknown> });
    cal.ns?.["marnie-sos"]?.("inline", {
      elementOrSelector: "#small-shop-sos-cal",
      calLink: "marnie-sos",
      layout: "month_view",
    });
  }, []);

  return <div id="small-shop-sos-cal" aria-label="Book a time with Marnie" />;
}
