import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { comparisons } from "@/lib/compare";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://applass.com";

  // Static core routes
  const staticRoutes = ["", "/about", "/apps", "/blog", "/compare"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  // Specific App Landing Pages
  const appRoutes = ["/apps/fomogen", "/apps/mindful-guard"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic blog posts
  const posts = await getBlogPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic comparison pages
  const compareRoutes = comparisons.map((compare) => ({
    url: `${baseUrl}/compare/${compare.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...appRoutes, ...blogRoutes, ...compareRoutes];
}
