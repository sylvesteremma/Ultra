/**
 * Generic validation middleware.
 *
 * Accepts a Zod schema and validates the request body.
 */
const validate = (schema) => {
  return (req, res, next) => {
    // Validate request body
    const result = schema.safeParse(req.body);

    // Validation failed
    if (!result.success) {
      return res.status(400).json({
        success: false,

        message: "Validation failed.",

        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),

          message: issue.message,
        })),
      });
    }

    // Replace request body with validated data
    req.body = result.data;

    next();
  };
};

export default validate;
