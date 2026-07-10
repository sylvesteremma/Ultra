// Import Express
import express from "express";
// Import authentication middleware
import protect from "../middleware/auth.middleware.js";
// Import validation middleware
import validate from "../middleware/validate.middleware.js";
// Import Zod schema
import { createNewsSchema } from "../validations/news.validation.js";
// Import controllers
import {
  createNews,
  getPublishedNews,
  getNewsById,
  getAllNews,
  updateNews,
  deleteNews,
} from "../controllers/news.controller.js";
import upload from "../middleware/upload.middleware.js";

// Create an Express router
const router = express.Router();

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Get all published news
 *     tags:
 *       - News
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by title or excerpt
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [latest, oldest]
 *         description: Sort order
 *     responses:
 *       200:
 *         description: List of published news.
 */
router.get("/news", getPublishedNews);

/**
 * @swagger
 * /api/news/{id}:
 *   get:
 *     summary: Get a single news article
 *     tags:
 *       - News
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: News article found.
 *       404:
 *         description: News article not found.
 */
router.get("/news/:id", getNewsById);

/**
 * @swagger
 * /api/admin/news:
 *   post:
 *     summary: Create a news article
 *     tags:
 *       - News
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - excerpt
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               excerpt:
 *                 type: string
 *               content:
 *                 type: string
 *               isPublished:
 *                 type: boolean
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: News article created successfully.
 */
router.post(
  "/admin/news",

  protect,

  upload.single("image"),

  validate(createNewsSchema),

  createNews
);

/**
 * @route   GET /api/admin/news
 * @desc    Get all news articles (Admin)
 * @access  Private (Admin)
 */
router.get("/admin/news", protect, getAllNews);

/**
 * @route   PUT /api/admin/news/:id
 * @desc    Update an existing news article
 * @access  Private (Admin)
 */
router.put(
  "/admin/news/:id",

  // Verify JWT token
  protect,

  // Accept optional image upload
  upload.single("image"),

  // Validate request body
  validate(createNewsSchema.partial()),

  // Controller
  updateNews
);

/**
 * @route   DELETE /api/admin/news/:id
 * @desc    Delete a news article
 * @access  Private (Admin)
 */
router.delete("/admin/news/:id", protect, deleteNews);

// Export the router
export default router;
