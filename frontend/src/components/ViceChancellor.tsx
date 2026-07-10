/**
 * ViceChancellor Component
 * This component displays information about the school's Vice Chancellor
 * Replace the image and text with actual content later
 */
const ViceChancellor = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Rector
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Vice Chancellor Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* VC Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full transform rotate-3 opacity-20"></div>
              <img
                src="https://picsum.photos/seed/vice-chancellor/400/450"
                alt="Vice Chancellor"
                className="w-80 h-96 object-cover rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </div>

          {/* VC Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Prof. John Doe
            </h3>
            <p className="text-blue-600 font-semibold mb-6">
              Rector, Ultrapoly
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Page coming soon.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Read Biography
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViceChancellor;
