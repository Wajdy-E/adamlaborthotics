import type { MetadataRoute } from "next";
import { blogPosts, sitePages } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = sitePages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: page.path === "/" ? 1 : page.path.startsWith("/services") ? 0.9 : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00`),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...pages, ...posts];
}
