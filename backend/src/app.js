import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
// Swagger UI
import swaggerUi from "swagger-ui-express";
// Swagger configuration
import swaggerSpec from "./docs/swagger.js";
// Import the authentication routes
import routes from "./routes/auth.routes.js";
// Import the news routes
import newsRoutes from "./routes/news.routes.js";
// Import the global error handler
import errorHandler from "./middleware/error.middleware.js";
import apiLimiter from "./middleware/rateLimit.middleware.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

/**
 * ===========================================================
 * Security Middleware
 * ===========================================================
 */

// Secure HTTP headers
app.use(helmet());

// Compress all responses
app.use(compression());

// Apply rate limiting
app.use(apiLimiter);

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.post("/test", (req, res) => {
  console.log(req.body);

  res.json({
    body: req.body,
  });
});

// Mount authentication routes
app.use("/api/auth", routes);

// Mount news routes
app.use("/api/", newsRoutes);

/**
 * ===========================================================
 * Swagger Documentation
 * ===========================================================
 *
 * Visit:
 *
 * http://localhost:5000/api-docs
 */
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Check API health
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: API is running successfully.
 */
// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ultra Global Polytechnic API is running smoothly.",
  });
});

// Global error handler
app.use(errorHandler);

export default app;
