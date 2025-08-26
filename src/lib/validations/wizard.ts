import * as z from "zod";

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

export type MetadataFormData = z.infer<typeof metadataSchema>;
