// Import envalid helpers
import { cleanEnv, str, port } from "envalid";
import dotenv from "dotenv";

dotenv.config();

/**
 * ===========================================================
 * Environment Variable Validation
 * ===========================================================
 *
 * Validates all required environment variables
 * before the application starts.
 */

const env = cleanEnv(process.env, {
  DATABASE_URL: str(),

  JWT_SECRET: str(),

  PORT: port({
    default: 5000,
  }),

  CLOUDINARY_CLOUD_NAME: str(),

  CLOUDINARY_API_KEY: str(),

  CLOUDINARY_API_SECRET: str(),
});

// Export validated environment variables
export default env;

