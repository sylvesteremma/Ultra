import GenericPage from "../GenericPage";

const GetInTouch: React.FC = () => {
  return (
    <GenericPage title="Get In Touch">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Contact Details
            </h2>
            <ul className="text-gray-700 space-y-3">
              <li>
                <strong>Address:</strong> 123 Polytechnic Ave, Knowledge City,
                Country
              </li>
              <li>
                <strong>Main Phone:</strong> +1 (555) 123-4567
              </li>
              <li>
                <strong>Admissions:</strong> +1 (555) 234-5678
              </li>
              <li>
                <strong>Email (General):</strong> info@ultraglobalpoly.edu
              </li>
              <li>
                <strong>Email (Admissions):</strong>{" "}
                admissions@ultraglobalpoly.edu
              </li>
              <li>
                <strong>Email (Support):</strong> support@ultraglobalpoly.edu
              </li>
              <li>
                <strong>Office Hours:</strong> Mon - Fri, 8:30 AM - 5:00 PM
              </li>
              <li>
                <strong>Website Admin:</strong> webmaster@ultraglobalpoly.edu
              </li>
              <li>
                <strong>Social:</strong> Twitter: @UltraGlobalPoly · Facebook:
                /UltraGlobalPoly
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Leave a Message
            </h2>
            <p className="text-gray-600 mb-4">
              Have a question or feedback? Send us a quick message below.
            </p>
            <label htmlFor="message" className="sr-only">
              Leave a message
            </label>
            <div className="flex items-start">
              <textarea
                id="message"
                placeholder="Leave a message"
                className="w-full rounded-md border-gray-300 p-3 text-gray-700 resize-y"
                rows={5}
              />
              <button
                type="button"
                className="ml-4 px-4 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800"
              >
                Send
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Note: This form is for display only and is not functional.
            </p>
          </div>
        </div>
      </div>
    </GenericPage>
  );
};

export default GetInTouch;
