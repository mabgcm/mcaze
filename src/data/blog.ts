import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [];

export const blogCategories = [
  {
    slug: "renovation-planning",
    title: "Renovation Planning",
    description: "Guides for budgeting, scheduling, permits, and preparing for renovation work.",
  },
  {
    slug: "materials-finishes",
    title: "Materials & Finishes",
    description: "Practical notes on finishes, durability, maintenance, and product decisions.",
  },
  {
    slug: "home-maintenance",
    title: "Home Maintenance",
    description: "Seasonal and ongoing home care advice for Canadian homeowners.",
  },
];

export const authors = [
  {
    slug: "mcaze-team",
    name: "McAze Team",
    bio: "Renovation planning, project coordination, and home improvement notes from the McAze team.",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}
