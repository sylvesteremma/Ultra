const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ? `${import.meta.env.VITE_API_BASE_URL}/api` : "http://localhost:5000/api";

export const apiBaseUrl = API_BASE_URL.replace(/\/$/, "");

export const buildApiUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${apiBaseUrl}${normalizedPath}`;
};
