import GenericPage from "../GenericPage";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GenericPage title="Contact Us" />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Location
              </h3>
              <p className="text-gray-700 text-lg">
                Ultrapoly, Afaha Obio Enwang – Itak, Ikono L.G.A., Akwa Ibom
                State, Nigeria.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Email Us
              </h3>
              <a
                href="mailto:info@ultraglopoly.edu.ng"
                className="text-gray-700 text-lg hover:text-blue-700 transition-colors"
              >
                info@ultraglopoly.edu.ng
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Call Us
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+2349124227325"
                  className="text-gray-700 text-lg hover:text-blue-700 transition-colors block"
                >
                  +234(0) 9124227325
                </a>
                <a
                  href="tel:+2349031415917"
                  className="text-gray-700 text-lg hover:text-blue-700 transition-colors block"
                >
                  +234(0) 9031415917
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
