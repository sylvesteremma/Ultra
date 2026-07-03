interface GenericPageProps {
  title: string;
  children?: React.ReactNode;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          {title}
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-md">
          {children || (
            <div className="space-y-4 text-gray-600">
              <p className="text-lg font-medium">Page coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
