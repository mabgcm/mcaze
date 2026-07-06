import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import type { BlogPost, FaqItem, Service } from "@/lib/types";
import { absoluteUrl, titleTemplate } from "@/lib/utils";

type MetadataInput = {
  title?: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({ title, description, path = "/", image = siteConfig.logo }: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const imageSize = image === siteConfig.logo ? { width: 646, height: 281 } : { width: 1200, height: 630 };

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: titleTemplate(title),
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: imageUrl, ...imageSize, alt: titleTemplate(title) }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titleTemplate(title),
      description,
      images: [imageUrl],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    name: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: absoluteUrl(siteConfig.logo),
    sameAs: Object.values(siteConfig.social),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    image: absoluteUrl(siteConfig.logo),
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: ["Vaughan", "Markham", "Richmond Hill", "Toronto", "North York", "Mississauga"],
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    areaServed: "Greater Toronto Area",
    serviceType: service.title,
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo),
      },
    },
  };
}

export function imageObjectSchema(url: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl(url),
    name,
  };
}
