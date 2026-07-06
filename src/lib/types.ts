export type NavItem = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  image: string;
  benefits: string[];
  process: string[];
  faqs: FaqItem[];
  related: string[];
};

export type City = {
  slug: string;
  name: string;
  intro: string;
  neighborhoods: string[];
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  serviceSlug: string;
  summary: string;
  scope: string[];
  year: string;
  image: string;
  gallery: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  image: string;
  headings: string[];
};
