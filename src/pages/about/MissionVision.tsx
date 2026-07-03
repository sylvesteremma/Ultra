import GenericPage from "../GenericPage";

const MissionVision: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GenericPage title="Mission & Vision">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Vision Section */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Vision Statement
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              The institution typically aims to be a globally recognized leader
              in innovation, research and education, focusing on developing
              sustainable, ethical, and practical solutions to solve complex
              societal challenges. It emphasizes fostering a technology with a
              conscience mindset, empowering students to drive economic growth
              and create a positive impact.
            </p>
          </section>

          {/* Mission Section */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Mission Statement
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              The institution seeks to create solutions for society by
              delivering action based learners education, discovering new
              knowledge through research, and launching new technologies through
              innovation.
            </p>
          </section>
        </div>
      </GenericPage>
    </div>
  );
};

export default MissionVision;
