import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      {/* Top Footer */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-6">Ultrapoly</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Page coming soon.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <span className="text-sm">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <span className="text-sm">TW</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <span className="text-sm">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <span className="text-sm">LI</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academics/programs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Admission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Admissions */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Admissions</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/admission/apply"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission/requirements"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Requirements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission/scholarships"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Scholarships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission/faqs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-blue-400 mt-1">📍</span>
                  <span className="text-gray-300">
                    Ultrapoly, Afaha Obio Enwang – Itak, Ikono L.G.A., Akwa Ibom
                    State, Nigeria.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-blue-400 mt-1">📞</span>
                  <div className="text-gray-300 space-y-1">
                    <span>+234(0) 9124227325</span>
                    <br />
                    <span>+234(0) 9031415917</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 text-blue-400">✉️</span>
                  <a
                    href="mailto:info@ultraglopoly.edu.ng"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@ultraglopoly.edu.ng
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-900 py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Ultrapoly. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
