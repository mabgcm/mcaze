import { siteConfig } from "@/data/site";

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function titleTemplate(title?: string) {
  return title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Renovation Company in the GTA`;
}
