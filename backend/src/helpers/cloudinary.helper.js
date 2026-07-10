/**
 * ===========================================================
 * Extract Cloudinary Public ID
 * ===========================================================
 *
 * Converts:
 *
 * https://res.cloudinary.com/demo/image/upload/v123/folder/image.jpg
 *
 * Into:
 *
 * folder/image
 *
 * ===========================================================
 */

/**
 * Extract public ID from Cloudinary URL.
 *
 * @param {string} imageUrl
 * @returns {string|null}
 */
export const getPublicIdFromUrl = (imageUrl) => {
  if (!imageUrl) return null;

  // Split the URL after "/upload/"
  const uploadIndex = imageUrl.indexOf("/upload/");

  if (uploadIndex === -1) return null;

  // Get everything after "/upload/"
  let path = imageUrl.substring(uploadIndex + 8);

  // Remove version (e.g. v1783602169/)
  path = path.replace(/^v\d+\//, "");

  // Remove file extension
  path = path.replace(/\.[^/.]+$/, "");

  return path;
};
