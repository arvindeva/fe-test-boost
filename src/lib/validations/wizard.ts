import * as z from "zod";
import { BLOG_CATEGORIES } from "@/constants/categories";

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
    .refine((val) => BLOG_CATEGORIES.includes(val as any), {
      message: "Please select a valid category",
    }),
});

export type MetadataFormData = z.infer<typeof metadataSchema>;
export type SummaryFormData = z.infer<typeof summarySchema>;
