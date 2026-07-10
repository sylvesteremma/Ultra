// Import news services
import {
  createNewsService,
  getPublishedNewsService,
  getNewsByIdService,
  getAllNewsService,
  updateNewsService,
  deleteNewsService,
} from "../services/news.service.js";
// Import custom application error
import AppError from "../utils/AppError.js";
// Import Prisma client
import prisma from "../db/prisma.js";
// Import upload service
import {
  uploadImageService,
  deleteImageService,
} from "../services/upload.service.js";
// Import helper
import { getPublicIdFromUrl } from "../helpers/cloudinary.helper.js";

/**
 * @desc    Create a news article
 * @route   POST /api/admin/news
 * @access  Private (Admin)
 */
export const createNews = async (req, res, next) => {
  try {
    let imageUrl = null;

    /**
     * Upload image if provided.
     */
    if (req.file) {
      const uploadedImage = await uploadImageService(req.file.buffer);
      imageUrl = uploadedImage.secure_url;
    }

    const news = await createNewsService({
      ...req.body,
      authorId: req.admin.id,
      imageUrl,
    });

    return res.status(201).json({
      success: true,
      data: news,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * ===========================================================
 * Get Published News
 * ===========================================================
 *
 * Supports:
 * - Pagination
 * - Search
 * - Sorting
 */
export const getPublishedNews = async (req, res, next) => {
  try {
    // Read query parameters
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";
    const sort = req.query.sort || "latest";

    // Calculate how many records to skip
    const skip = (page - 1) * limit;

    // Build search filter
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
        ],
      }),
    };

    // Determine sorting order
    const orderBy = {
      createdAt: sort === "oldest" ? "asc" : "desc",
    };

    // Fetch news
    const news = await prisma.news.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    });

    // Count total records
    const total = await prisma.news.count({
      where,
    });

    // Send response
    res.status(200).json({
      success: true,

      page,

      limit,

      total,

      totalPages: Math.ceil(total / limit),

      data: news,
    });
  } catch (error) {
    next(error);
  }
};
/**
 * @desc    Get a single news article
 * @route   GET /api/news/:id
 * @access  Public
 */
export const getNewsById = async (req, res, next) => {
  try {
    // Fetch article by ID
    const news = await getNewsByIdService(req.params.id);

    // Check whether the article exists
    if (!news) {
      throw new AppError("News article not found.", 404);
    }

    return res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * ===========================================================
 * Get all news articles (Admin)
 * ===========================================================
 *
 * @route GET /api/admin/news
 * @access Private (Admin)
 */
export const getAllNews = async (req, res, next) => {
  try {
    const news = await getAllNewsService();

    return res.status(200).json({
      success: true,
      results: news.length,
      data: news,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * ===========================================================
 * Update News Article
 * ===========================================================
 *
 * Updates an existing news article.
 *
 * Supports:
 * - Updating text fields
 * - Replacing image
 * - Deleting old Cloudinary image
 */
export const updateNews = async (req, res, next) => {
  try {
    // Get ID from URL
    const { id } = req.params;

    // Find existing article
    const existingNews = await prisma.news.findUnique({
      where: { id },
    });

    // Article not found
    if (!existingNews) {
      return res.status(404).json({
        success: false,
        message: "News article not found.",
      });
    }

    // Start with current image
    let imageUrl = existingNews.imageUrl;

    /**
     * If a new image was uploaded
     */
    if (req.file) {
      // Delete old image if it exists
      if (existingNews.imageUrl) {
        const publicId = getPublicIdFromUrl(existingNews.imageUrl);

        if (publicId) {
          await deleteImageService(publicId);
        }
      }

      // Upload new image
      const uploadedImage = await uploadImageService(req.file.buffer);

      imageUrl = uploadedImage.secure_url;
    }

    // Update article
    const updatedNews = await prisma.news.update({
      where: { id },

      data: {
        ...req.body,

        imageUrl,
      },
    });

    // Success response
    res.status(200).json({
      success: true,

      message: "News updated successfully.",

      data: updatedNews,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * ===========================================================
 * Delete News Controller
 * ===========================================================
 *
 * Deletes a news article and its image.
 */
export const deleteNews = async (req, res, next) => {
  try {
    const { id } = req.params;

    await deleteNewsService(id);

    res.status(200).json({
      success: true,
      message: "News article deleted successfully.",
    });
  } catch (error) {
    if (error.message === "News article not found.") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    next(error);
  }
};
