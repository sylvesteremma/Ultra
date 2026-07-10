import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    about: false,
    contact: false,
    admission: false,
    academics: false,
    research: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const closeDropdowns = () => {
    setDropdowns({
      about: false,
      contact: false,
      admission: false,
      academics: false,
      research: false,
    });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-blue-900 hover:text-blue-800 transition-colors"
          >
            Ultra Global Polytechnic
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-blue-900 font-semibold hover:text-blue-700 transition-colors"
            >
              Home
            </Link>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("about")}
                onMouseEnter={() =>
                  setDropdowns((prev) => ({ ...prev, about: true }))
                }
                onMouseLeave={() =>
                  setDropdowns((prev) => ({ ...prev, about: false }))
                }
                className="flex items-center gap-1 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                About
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${dropdowns.about ? "rotate-180" : ""}`}
                />
              </button>
              {dropdowns.about && (
                <div
                  onMouseEnter={() =>
                    setDropdowns((prev) => ({ ...prev, about: true }))
                  }
                  onMouseLeave={() =>
                    setDropdowns((prev) => ({ ...prev, about: false }))
                  }
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                >
                  <Link
                    to="/about/our-story"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, about: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/about/mission-vision"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, about: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    to="/about/management"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, about: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Management
                  </Link>
                  <Link
                    to="/about/history"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, about: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    History
                  </Link>
                  <Link
                    to="/about/accreditation"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, about: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Accreditation
                  </Link>
                  <Link
                    to="/about/testimonials"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, about: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("contact")}
                onMouseEnter={() =>
                  setDropdowns((prev) => ({ ...prev, contact: true }))
                }
                onMouseLeave={() =>
                  setDropdowns((prev) => ({ ...prev, contact: false }))
                }
                className="flex items-center gap-1 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                Contact
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${dropdowns.contact ? "rotate-180" : ""}`}
                />
              </button>
              {dropdowns.contact && (
                <div
                  onMouseEnter={() =>
                    setDropdowns((prev) => ({ ...prev, contact: true }))
                  }
                  onMouseLeave={() =>
                    setDropdowns((prev) => ({ ...prev, contact: false }))
                  }
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                >
                  <Link
                    to="/contact/get-in-touch"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, contact: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    to="/contact/location"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, contact: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Location
                  </Link>
                  <Link
                    to="/contact/support"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, contact: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Support
                  </Link>
                  <Link
                    to="/contact/feedback"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, contact: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Feedback
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("admission")}
                onMouseEnter={() =>
                  setDropdowns((prev) => ({ ...prev, admission: true }))
                }
                onMouseLeave={() =>
                  setDropdowns((prev) => ({ ...prev, admission: false }))
                }
                className="flex items-center gap-1 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                Admission
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${dropdowns.admission ? "rotate-180" : ""}`}
                />
              </button>
              {dropdowns.admission && (
                <div
                  onMouseEnter={() =>
                    setDropdowns((prev) => ({ ...prev, admission: true }))
                  }
                  onMouseLeave={() =>
                    setDropdowns((prev) => ({ ...prev, admission: false }))
                  }
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                >
                  <Link
                    to="/admission/apply"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, admission: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/admission/requirements"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, admission: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Requirements
                  </Link>
                  <Link
                    to="/admission/process"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, admission: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Process
                  </Link>
                  <Link
                    to="/admission/scholarships"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, admission: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Scholarships
                  </Link>
                  <Link
                    to="/admission/fees-payments"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, admission: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Fees & Payments
                  </Link>
                  <Link
                    to="/admission/faqs"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, admission: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("academics")}
                onMouseEnter={() =>
                  setDropdowns((prev) => ({ ...prev, academics: true }))
                }
                onMouseLeave={() =>
                  setDropdowns((prev) => ({ ...prev, academics: false }))
                }
                className="flex items-center gap-1 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                Academics
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${dropdowns.academics ? "rotate-180" : ""}`}
                />
              </button>
              {dropdowns.academics && (
                <div
                  onMouseEnter={() =>
                    setDropdowns((prev) => ({ ...prev, academics: true }))
                  }
                  onMouseLeave={() =>
                    setDropdowns((prev) => ({ ...prev, academics: false }))
                  }
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                >
                  <Link
                    to="/academics/programs"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, academics: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Programs
                  </Link>
                  <Link
                    to="/academics/courses"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, academics: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Courses
                  </Link>
                  <Link
                    to="/academics/schools"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, academics: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Schools
                  </Link>
                  <Link
                    to="/academics/research"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, academics: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Research
                  </Link>
                  <Link
                    to="/academics/curriculum"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, academics: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Curriculum
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("research")}
                onMouseEnter={() =>
                  setDropdowns((prev) => ({ ...prev, research: true }))
                }
                onMouseLeave={() =>
                  setDropdowns((prev) => ({ ...prev, research: false }))
                }
                className="flex items-center gap-1 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                Research
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${dropdowns.research ? "rotate-180" : ""}`}
                />
              </button>
              {dropdowns.research && (
                <div
                  onMouseEnter={() =>
                    setDropdowns((prev) => ({ ...prev, research: true }))
                  }
                  onMouseLeave={() =>
                    setDropdowns((prev) => ({ ...prev, research: false }))
                  }
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                >
                  <Link
                    to="/research/areas"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, research: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Research Areas
                  </Link>
                  <Link
                    to="/research/projects"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, research: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/research/publications"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, research: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Publications
                  </Link>
                  <Link
                    to="/research/funding"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, research: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Funding
                  </Link>
                  <Link
                    to="/research/centers"
                    onClick={() =>
                      setDropdowns((prev) => ({ ...prev, research: false }))
                    }
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Research Centers
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-blue-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-blue-900 font-semibold py-2"
              >
                Home
              </Link>

              {/* About */}
              <div>
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center justify-between w-full text-blue-900 font-semibold py-2"
                >
                  About
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${dropdowns.about ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdowns.about && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/about/our-story"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/about/mission-vision"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Mission & Vision
                    </Link>
                    <Link
                      to="/about/management"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Management
                    </Link>
                    <Link
                      to="/about/history"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      History
                    </Link>
                    <Link
                      to="/about/accreditation"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Accreditation
                    </Link>
                    <Link
                      to="/about/testimonials"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact */}
              <div>
                <button
                  onClick={() => toggleDropdown("contact")}
                  className="flex items-center justify-between w-full text-blue-900 font-semibold py-2"
                >
                  Contact
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${dropdowns.contact ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdowns.contact && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/contact/get-in-touch"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Get In Touch
                    </Link>
                    <Link
                      to="/contact/location"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Location
                    </Link>
                    <Link
                      to="/contact/support"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Support
                    </Link>
                    <Link
                      to="/contact/feedback"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Feedback
                    </Link>
                  </div>
                )}
              </div>

              {/* Admission */}
              <div>
                <button
                  onClick={() => toggleDropdown("admission")}
                  className="flex items-center justify-between w-full text-blue-900 font-semibold py-2"
                >
                  Admission
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${dropdowns.admission ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdowns.admission && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/admission/apply"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Apply Now
                    </Link>
                    <Link
                      to="/admission/requirements"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Requirements
                    </Link>
                    <Link
                      to="/admission/process"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Process
                    </Link>
                    <Link
                      to="/admission/scholarships"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Scholarships
                    </Link>
                    <Link
                      to="/admission/fees-payments"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Fees & Payments
                    </Link>
                    <Link
                      to="/admission/faqs"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      FAQs
                    </Link>
                  </div>
                )}
              </div>

              {/* Academics */}
              <div>
                <button
                  onClick={() => toggleDropdown("academics")}
                  className="flex items-center justify-between w-full text-blue-900 font-semibold py-2"
                >
                  Academics
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${dropdowns.academics ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdowns.academics && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/academics/programs"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Programs
                    </Link>
                    <Link
                      to="/academics/courses"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Courses
                    </Link>
                    <Link
                      to="/academics/schools"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Schools
                    </Link>
                    <Link
                      to="/academics/research"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Research
                    </Link>
                    <Link
                      to="/academics/curriculum"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Curriculum
                    </Link>
                  </div>
                )}
              </div>

              {/* Research */}
              <div>
                <button
                  onClick={() => toggleDropdown("research")}
                  className="flex items-center justify-between w-full text-blue-900 font-semibold py-2"
                >
                  Research
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${dropdowns.research ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdowns.research && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/research/areas"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Research Areas
                    </Link>
                    <Link
                      to="/research/projects"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Projects
                    </Link>
                    <Link
                      to="/research/publications"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Publications
                    </Link>
                    <Link
                      to="/research/funding"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Funding
                    </Link>
                    <Link
                      to="/research/centers"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        closeDropdowns();
                      }}
                      className="block text-gray-600 py-1"
                    >
                      Research Centers
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
