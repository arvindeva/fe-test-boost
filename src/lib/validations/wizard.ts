import * as z from "zod";
import { BLOG_CATEGORIES, BlogCategory } from "@/constants/categories";

export const metadataSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be less than 200 characters"),
  author: z
    .string()
    .min(1, "Author name is required")
    .max(100, "Author name must be less than 100 characters"),
});

export const summarySchema = z.object({
  summary: z
    .string()
    .min(1, "Summary is required")
    .max(500, "Summary must be less than 500 characters"),
  category: z
    .string()
    .min(1, "Category is required")
    .refine((val) => BLOG_CATEGORIES.includes(val as BlogCategory), {
      message: "Please select a valid category",
    }),
});

export const contentSchema = z.object({
  content: z
    .string()
    .min(1, "Blog content is required")
    .max(999999, "Content must be less than 999,999 characters"),
});

export type MetadataFormData = z.infer<typeof metadataSchema>;
export type SummaryFormData = z.infer<typeof summarySchema>;
export type ContentFormData = z.infer<typeof contentSchema>;
