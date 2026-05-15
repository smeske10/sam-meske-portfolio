import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sammeske.com";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/audit`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/ai-innovation-incubator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/daily-log`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/side-effects-story-finder`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/treatment-navigator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/vv-agent-delivery-system`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/geo-audit-platform`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/bco-content-ops`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/thanks`,
      lastModified: new Date(),
    },
  ];
}
