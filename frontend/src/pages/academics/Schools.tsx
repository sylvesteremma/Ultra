import GenericPage from "../GenericPage";

const Schools: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GenericPage title="Schools" />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <ul className="space-y-4">
            <li className="text-xl font-semibold text-blue-900">
              School of Administration and Management
            </li>
            <li className="text-xl font-semibold text-blue-900">
              School of Agriculture and Industry
            </li>
            <li className="text-xl font-semibold text-blue-900">
              School of Applied Science and Technology
            </li>
            <li className="text-xl font-semibold text-blue-900">
              School of Engineering and Technology
            </li>
            <li className="text-xl font-semibold text-blue-900">
              School of Nursing and Health Technology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schools;
