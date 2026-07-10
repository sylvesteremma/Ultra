// Import Zod
import { z } from "zod";

/**
 * Validation schema for creating a news article.
 */
export const createNewsSchema = z.object({
  /**
   * News title
   */
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters long.")
    .max(200, "Title cannot exceed 200 characters."),

  /**
   * News excerpt
   */
  excerpt: z
    .string()
    .trim()
    .min(10, "Excerpt must be at least 10 characters long.")
    .max(500, "Excerpt cannot exceed 500 characters."),

  /**
   * Main article content
   */
  content: z
    .string()
    .trim()
    .min(30, "Content must be at least 30 characters long."),

  /**
   * Publish status
   *
   * Accepts:
   * true
   * false
   * "true"
   * "false"
   */
  isPublished: z.preprocess(
    (value) => {
      if (value === "true") return true;

      if (value === "false") return false;

      return value;
    },

    z.boolean().optional(),
  ),
});
