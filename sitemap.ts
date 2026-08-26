import type { MetadataRoute } from "next";

const pages = ["","about","services","services/branding-design","services/websites","services/content-copy","services/ecommerce-support","services/product-data-csv","services/va-admin-support","book","blog","blog/you-do-not-need-a-perfect-brief","blog/the-product-spreadsheet-is-not-the-boring-bit","blog/before-you-rebuild-your-website","work-with-me","privacy","cookies","terms","refunds","service-terms","subscription-terms","digital-product-terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: `https://www.smallshopsos.co.uk/${path}`, lastModified: new Date() }));
}
