import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "New Science Laboratory Inaugurated",
    excerpt: "Page coming soon.",
    date: "June 28, 2026",
    image: "https://picsum.photos/seed/news1/600/400",
  },
  {
    id: 2,
    title: "Student Achieves National Award",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "June 25, 2026",
    image: "https://picsum.photos/seed/news2/600/400",
  },
  {
    id: 3,
    title: "Annual Sports Day Celebration",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "June 20, 2026",
    image: "https://picsum.photos/seed/news3/600/400",
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Latest News
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Ultrapoly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Link
                  to={`/news/${news.id}`}
                  className="text-blue-700 font-semibold hover:text-blue-900 transition-colors flex items-center gap-2"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
