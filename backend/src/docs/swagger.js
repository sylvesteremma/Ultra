// Import swagger-jsdoc
import swaggerJSDoc from "swagger-jsdoc";

/**
 * ===========================================================
 * Swagger Configuration
 * ===========================================================
 *
 * This file generates the OpenAPI documentation
 * for the Ultra Global Polytechnic Backend API.
 */

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Ultra Global Polytechnic API",

      version: "1.0.0",

      description:
        "Backend API documentation for Ultra Global Polytechnic.",
    },

    servers: [
      {
        url: "http://localhost:5000",

        description: "Development Server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",

          scheme: "bearer",

          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  /**
   * Scan all route files for Swagger comments.
   */
  apis: ["./src/routes/*.js"],
};

// Generate Swagger specification
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Export specification
export default swaggerSpec;
