// Import Winston
import winston from "winston";

/**
 * ===========================================================
 * Winston Logger Configuration
 * ===========================================================
 *
 * Provides centralized logging for the application.
 */

// Create logger instance
const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    // Add timestamp
    winston.format.timestamp(),

    // Pretty print logs
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),

  transports: [
    // Log to console
    new winston.transports.Console(),
  ],
});

// Export logger
export default logger;
