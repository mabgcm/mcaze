import type { MetadataRoute } from "next";
import { authors, blogCategories, blogPosts } from "@/data/blog";
import { cities } from "@/data/locations";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/careers",
    "/services",
    "/portfolio",
    "/service-areas",
    "/blog",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`),
    ...projects.map((project) => `/portfolio/${project.slug}`),
    ...cities.map((city) => `/service-areas/${city.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...blogCategories.map((category) => `/blog/category/${category.slug}`),
    ...authors.map((author) => `/blog/author/${author.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
