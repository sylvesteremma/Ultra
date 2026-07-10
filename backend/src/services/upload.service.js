// ===========================================================
// Upload Service
// ===========================================================
//
// This service uploads image files to Cloudinary.
//
// Instead of saving the image to the server,
// we stream it directly to Cloudinary.
//
// ===========================================================

// Import Node.js stream module
import { Readable } from "stream";

// Import configured Cloudinary instance
import cloudinary from "../config/cloudinary.js";

/**
 * ===========================================================
 * Upload Image to Cloudinary
 * ===========================================================
 *
 * @param {Buffer} fileBuffer
 * @returns {Promise<Object>}
 */
export const uploadImageService = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    /**
     * Create Cloudinary upload stream.
     */
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "ultra-global/news",
      },

      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve(result);
      },
    );

    /**
     * Convert Buffer into Readable Stream
     */
    const readableStream = new Readable();

    readableStream.push(fileBuffer);

    readableStream.push(null);

    /**
     * Pipe the stream into Cloudinary
     */
    readableStream.pipe(uploadStream);
  });
};

/**
 * ===========================================================
 * Delete Image From Cloudinary
 * ===========================================================
 *
 * Deletes an image using its public ID.
 *
 * @param {string} publicId
 * @returns {Promise<Object>}
 */
export const deleteImageService = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};
