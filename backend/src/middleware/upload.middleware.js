// ============================================================
// Multer Configuration
// ============================================================
//
// This middleware handles incoming file uploads.
//
// It:
//
// ✔ Accepts images only
// ✔ Limits file size
// ✔ Stores files temporarily in memory
//
// ============================================================

import multer from "multer";

/**
 * Store uploaded files in memory.
 *
 * We don't save files locally because they
 * will immediately be uploaded to Cloudinary.
 */
const storage = multer.memoryStorage();

/**
 * Accept image files only.
 */
const fileFilter = (req, file, cb) => {
  // Allowed MIME types
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed."), false);
  }
};

/**
 * Create Multer instance.
 */
const upload = multer({
  storage,

  fileFilter,

  limits: {
    // Maximum file size: 10MB
    fileSize: 10 * 1024 * 1024,
  },
});

// Export middleware
export default upload;
