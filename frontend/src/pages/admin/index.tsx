/**
 * Main Admin Dashboard Component
 * This is the main landing page for authenticated administrators
 * Contains dashboard overview and navigation to management sections
 */
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Check if user is logged in on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

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
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">Welcome, Admin</span>
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

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
          <p className="text-gray-600">Manage your university website from here</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-900">12</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total News</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-900">8</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Published News</p>
                <p className="text-2xl font-bold text-gray-900">20</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-900">3</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Pending News</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-900">5</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Pages</p>
                <p className="text-2xl font-bold text-gray-900">35</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News Management Card */}
          <Link
            to="/admin/news"
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow group"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">News Management</h3>
            <p className="text-gray-600">
              Create, edit, publish, and delete news articles. Upload images with your news posts.
            </p>
          </Link>

          {/* Page Management Card (Placeholder) */}
          <div className="bg-white p-8 rounded-xl shadow-md opacity-60 cursor-not-allowed">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">📄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Page Management</h3>
            <p className="text-gray-600">
              Coming soon: Manage static pages on your website
            </p>
          </div>

          {/* Media Management Card (Placeholder) */}
          <div className="bg-white p-8 rounded-xl shadow-md opacity-60 cursor-not-allowed">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🖼️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Media Library</h3>
            <p className="text-gray-600">
              Coming soon: Manage all your uploaded media files
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
