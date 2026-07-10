// Import the Prisma client
import prisma from "../db/prisma.js";

// Import Cloudinary delete service
import { deleteImageService } from "./upload.service.js";

// Import helper
import { getPublicIdFromUrl } from "../helpers/cloudinary.helper.js";

/**
 * ===========================================================
 * NEWS SERVICE
 * ===========================================================
 * This file contains all business logic related to News.
 * Controllers should call these functions instead of
 * communicating directly with Prisma.
 * ===========================================================
 */

/**
 * Create a new news article.
 *
 * @param {Object} newsData - News data.
 * @returns {Object} Newly created article.
 */
export const createNewsService = async (newsData) => {
  return await prisma.news.create({
    data: newsData,
  });
};

/**
 * ===========================================================
 * Get published news with pagination and search
 * ===========================================================
 *
 * @param {Object} options
 *
 * @returns {Object}
 */
export const getPublishedNewsService = async ({ page, limit, search }) => {
  // Calculate the number of records to skip
  const skip = (page - 1) * limit;

  /**
   * Build the search filter.
   *
   * If no search keyword is provided,
   * Prisma ignores this filter.
   */
  const where = {
    isPublished: true,

    ...(search && {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },

        {
          excerpt: {
            contains: search,
            mode: "insensitive",
          },
        },

        {
          content: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    }),
  };

  // Count total matching records
  const total = await prisma.news.count({
    where,
  });

  // Fetch paginated records
  const news = await prisma.news.findMany({
    where,

    skip,

    take: limit,

    orderBy: {
      createdAt: "desc",
    },

    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return {
    news,
    total,
  };
};

/**
 * Get a single news article by ID.
 *
 * @param {String} id
 * @returns {Object}
 */
export const getNewsByIdService = async (id) => {
  return await prisma.news.findUnique({
    where: {
      id,
    },

    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
};

/**
 * ===========================================================
 * Get all news articles (including drafts)
 * ===========================================================
 *
 * Used by the admin dashboard.
 *
 * @returns {Array}
 */
export const getAllNewsService = async () => {
  return await prisma.news.findMany({
    orderBy: {
      createdAt: "desc",
    },

    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
};

/**
 * ===========================================================
 * Update a news article
 * ===========================================================
 *
 * @param {String} id
 * @param {Object} updateData
 *
 * @returns {Object}
 */
export const updateNewsService = async (id, updateData) => {
  return await prisma.news.update({
    where: {
      id,
    },

    data: updateData,
  });
};

/**
 * ===========================================================
 * Delete News Service
 * ===========================================================
 *
 * Deletes a news article and its image from Cloudinary.
 *
 * @param {string} id
 * @returns {Promise<void>}
 */
export const deleteNewsService = async (id) => {
  // Find the article
  const news = await prisma.news.findUnique({
    where: { id },
  });

  if (!news) {
    throw new Error("News article not found.");
  }

  // Delete image if available
  if (news.imageUrl) {
    const publicId = getPublicIdFromUrl(news.imageUrl);

    if (publicId) {
      await deleteImageService(publicId);
    }
  }

  // Delete the database record
  await prisma.news.delete({
    where: { id },
  });
};
