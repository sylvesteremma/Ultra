/**
 * Admin News Management Component
 * This page allows administrators to create, edit, and delete news articles
 * Includes image upload functionality (frontend only for now)
 */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define News interface for type safety
interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string | null;
  isPublished: boolean;
}

// Dummy initial data for demonstration
const initialNews: NewsArticle[] = [
  {
    id: 1,
    title: "New Science Laboratory Inaugurated",
    excerpt: "Page coming soon.",
    content: "Full content of the news article goes here...",
    date: "2026-06-28",
    imageUrl: "https://picsum.photos/seed/news1/800/400",
    isPublished: true,
  },
  {
    id: 2,
    title: "Student Achieves National Award",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    content: "Full content of this amazing achievement...",
    date: "2026-06-25",
    imageUrl: "https://picsum.photos/seed/news2/800/400",
    isPublished: true,
  },
];

const AdminNews = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsArticle[]>(initialNews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsArticle | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    imageUrl: "",
    isPublished: true,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Open modal for adding new news
  const handleAddNews = () => {
    setEditingNews(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      imageUrl: "",
      isPublished: true,
    });
    setPreviewImage(null);
    setIsModalOpen(true);
  };

  // Open modal for editing existing news
  const handleEditNews = (article: NewsArticle) => {
    setEditingNews(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      date: article.date,
      imageUrl: article.imageUrl || "",
      isPublished: article.isPublished,
    });
    setPreviewImage(article.imageUrl);
    setIsModalOpen(true);
  };

  // Handle form input changes
  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    // Check if it's a checkbox to get 'checked' property
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle image file upload (preview only for now)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a local preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPreviewImage(result);
        setFormData((prev) => ({ ...prev, imageUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission (add or edit)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingNews) {
      // Update existing news
      setNews((prev) =>
        prev.map((article) =>
          article.id === editingNews.id
            ? { ...editingNews, ...formData }
            : article,
        ),
      );
    } else {
      // Add new news
      const newArticle: NewsArticle = {
        id: Date.now(),
        ...formData,
        imageUrl: formData.imageUrl || null,
      };
      setNews((prev) => [newArticle, ...prev]);
    }

    // Close modal
    setIsModalOpen(false);
  };

  // Handle news deletion
  const handleDeleteNews = (id: number) => {
    if (window.confirm("Are you sure you want to delete this news article?")) {
      setNews((prev) => prev.filter((article) => article.id !== id));
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/admin")}
                className="text-white hover:text-blue-200 transition-colors"
              >
                ← Back to Dashboard
              </button>
              <h1 className="text-2xl font-bold">News Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* News Management Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Top Bar: Add News Button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            All News Articles
          </h2>
          <button
            onClick={handleAddNews}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2"
          >
            <span>+ Add News Article</span>
          </button>
        </div>

        {/* News List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Image
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {news.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  {/* Image Preview */}
                  <td className="px-6 py-4">
                    {article.imageUrl ? (
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-20 h-12 object-cover rounded"
                      />
                    ) : (
                      <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                        No image
                      </div>
                    )}
                  </td>
                  {/* Title */}
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">
                      {article.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {article.excerpt}
                    </div>
                  </td>
                  {/* Date */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {article.date}
                  </td>
                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        article.isPublished
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {article.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleEditNews(article)}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteNews(article.id)}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit News Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                {editingNews ? "Edit News Article" : "Add News Article"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  News Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  required
                />
              </div>

              {/* Excerpt Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Excerpt (Short Description) *
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  required
                />
              </div>

              {/* Content Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Content *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleFormChange}
                  rows={8}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Featured Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {previewImage ? (
                    <div className="space-y-4">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="max-h-64 mx-auto object-contain rounded"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewImage(null);
                          setFormData((prev) => ({ ...prev, imageUrl: "" }));
                        }}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        <span className="text-4xl">📷</span>
                        <p className="mt-2">
                          Click to upload an image or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Date and Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Publish Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex items-end pb-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isPublished"
                      checked={formData.isPublished}
                      onChange={handleFormChange}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      Publish immediately
                    </span>
                  </label>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  {editingNews ? "Update Article" : "Create Article"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNews;
