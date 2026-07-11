// Import envalid helpers
import { cleanEnv, str, port } from "envalid";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

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

  DIRECT_URL: str({
    default: "",
  }),

  SUPABASE_URL: str({
    default: "",
  }),

  SUPABASE_ANON_KEY: str({
    default: "",
  }),

  SUPABASE_SERVICE_ROLE_KEY: str({
    default: "",
  }),

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

