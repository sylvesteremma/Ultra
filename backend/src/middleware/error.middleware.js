import logger from "../config/logger.js";

/**
 * Global error handling middleware.
 *
 * This middleware catches errors passed with next(error)
 * and returns a consistent JSON response.
 *
 * NOTE:
 * This middleware must be registered AFTER all routes.
 */
const errorHandler = (err, req, res, next) => {
  // Log the full error for debugging
  logger.error(err.stack || err.message);

  // Send a standardized error response
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
