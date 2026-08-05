import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import type { BlogPost, FaqItem, Project, Service } from "@/lib/types";
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
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#logo`,
      url: absoluteUrl(siteConfig.logo),
      contentUrl: absoluteUrl(siteConfig.logo),
    },
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?search={search_term_string}`,
      },
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
    image: {
      "@id": `${siteConfig.url}/#logo`,
    },
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    branchOf: {
      "@id": `${siteConfig.url}/#organization`,
    },
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
    "@id": `${siteConfig.url}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: {
        "@id": absoluteUrl(item.href),
        url: absoluteUrl(item.href),
        name: item.name,
      },
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
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    url: `${siteConfig.url}/services/${service.slug}`,
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
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
      url,
    },
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
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteConfig.url}/#logo`,
        url: absoluteUrl(siteConfig.logo),
        contentUrl: absoluteUrl(siteConfig.logo),
      },
    },
  };
}

export function imageObjectSchema(url: string, name: string) {
  const imageUrl = absoluteUrl(url);

  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${imageUrl}#image`,
    url: imageUrl,
    contentUrl: imageUrl,
    name,
  };
}

export function projectSchema(project: Project) {
  const url = `${siteConfig.url}/portfolio/${project.slug}`;
  const images = [project.image, ...(project.galleryItems?.map((item) => item.image) ?? project.gallery)].map(absoluteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#project`,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: project.title,
    description: project.seoDescription ?? project.summary,
    image: images,
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    about: project.categories,
    contentLocation: {
      "@type": "Place",
      name: project.location,
    },
    author: {
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
