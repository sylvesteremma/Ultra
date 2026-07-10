/**
 * Custom application error.
 *
 * Extends the built-in Error object
 * to include an HTTP status code.
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;

    // Capture the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
