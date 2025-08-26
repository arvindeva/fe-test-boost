export const BLOG_CATEGORIES = [
  "Tech",
  "Lifestyle",
  "Business",
  "Health",
  "Travel",
  "Food",
  "Finance",
  "Education",
  "Entertainment",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
