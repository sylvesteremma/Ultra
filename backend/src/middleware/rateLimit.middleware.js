// Import express-rate-limit
import rateLimit from "express-rate-limit";

/**
 * ===========================================================
 * Global API Rate Limiter
 * ===========================================================
 *
 * Limits each IP address to 100 requests
 * every 15 minutes.
 */
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 100,

  message: {
    success: false,

    message:
      "Too many requests. Please try again in 15 minutes.",
  },

  standardHeaders: true,

  legacyHeaders: false,
});

// Export middleware
export default apiLimiter;
