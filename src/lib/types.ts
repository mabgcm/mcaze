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
  seoTitle?: string;
  seoDescription?: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  image: string;
  benefits: string[];
  process: string[];
  faqs: FaqItem[];
  related: string[];
  pageContent?: {
    heroEyebrow: string;
    heroCopy: string;
    secondaryCta?: { label: string; href: string };
    introQuestion: string;
    intro: string[];
    questions: Array<{
      eyebrow?: string;
      question: string;
      paragraphs: string[];
      bullets?: string[];
      sourceLink?: { label: string; href: string };
    }>;
    projectSlugs?: string[];
    projectQuestion?: string;
    relatedQuestion?: string;
    faqQuestion?: string;
    ctaQuestion?: string;
    ctaCopy?: string;
  };
};

export type City = {
  slug: string;
  name: string;
  intro: string;
  neighborhoods: string[];
  pageContent?: {
    seoTitle: string;
    seoDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroCopy: string;
    image: string;
    introQuestion: string;
    intro: string[];
    questions: Array<{
      eyebrow?: string;
      question: string;
      paragraphs: string[];
      bullets?: string[];
      sourceLink?: { label: string; href: string };
    }>;
    serviceSlugs: string[];
    projectSlugs?: string[];
    faqs: FaqItem[];
    ctaTitle: string;
    ctaCopy: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  location: string;
  serviceSlug: string;
  projectType?: string;
  categories?: string[];
  summary: string;
  overviewTitle?: string;
  challengeTitle?: string;
  solutionTitle?: string;
  scopeTitle?: string;
  scopeCopy?: string;
  featureEyebrow?: string;
  featureTitle?: string;
  featureCopy?: string;
  featureImage?: string;
  galleryTitle?: string;
  galleryCopy?: string;
  faqTitle?: string;
  faqCopy?: string;
  localEyebrow?: string;
  localTitle?: string;
  localCopy?: string;
  localHref?: string;
  localLinkLabel?: string;
  relatedLinks?: Array<{ label: string; href: string }>;
  ctaTitle?: string;
  ctaCopy?: string;
  ctaLabel?: string;
  intro?: string[];
  challenge?: string[];
  solution?: string[];
  scope: string[];
  materials?: string[];
  qualityChecks?: string[];
  contentSections?: Array<{
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faqs?: FaqItem[];
  year: string;
  image: string;
  imageAlt?: string;
  gallery: string[];
  galleryItems?: Array<{
    image: string;
    alt: string;
    caption: string;
    orientation?: "landscape" | "portrait";
  }>;
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
