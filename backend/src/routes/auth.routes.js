import express from "express";
import { register, login, getMe } from "../controllers/auth.controller.js";
import protect from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";
import {
  registerSchema,
  loginSchema,
} from "../validations/auth.validation.js";

const router = express.Router();

// Public routes
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new admin
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Iben Connect
 *               email:
 *                 type: string
 *                 example: admin@ultra.edu
 *               password:
 *                 type: string
 *                 example: Password123
 *     responses:
 *       201:
 *         description: Admin registered successfully.
 *       400:
 *         description: Validation error.
 */
router.post(
  "/register",
  validate(registerSchema),
  register
);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login as an administrator
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@ultra.edu
 *               password:
 *                 type: string
 *                 example: Password123
 *     responses:
 *       200:
 *         description: Login successful.
 *       401:
 *         description: Invalid credentials.
 */
router.post(
  "/login",
  validate(loginSchema),
  login
);

// Protected route
router.get("/me", protect, getMe);

export default router;
