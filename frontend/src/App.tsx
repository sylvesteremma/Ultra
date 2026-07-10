import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/about";
import OurStory from "./pages/about/OurStory";
import MissionVision from "./pages/about/MissionVision";
import Management from "./pages/about/Management";
import History from "./pages/about/History";
import Accreditation from "./pages/about/Accreditation";
import Testimonials from "./pages/about/Testimonials";
import Contact from "./pages/contact";
import GetInTouch from "./pages/contact/GetInTouch";
import Location from "./pages/contact/Location";
import Support from "./pages/contact/Support";
import Feedback from "./pages/contact/Feedback";
import Admission from "./pages/admission";
import ApplyNow from "./pages/admission/ApplyNow";
import Requirements from "./pages/admission/Requirements";
import Process from "./pages/admission/Process";
import Scholarships from "./pages/admission/Scholarships";
import FeesPayments from "./pages/admission/FeesPayments";
import FAQs from "./pages/admission/FAQs";
import Academics from "./pages/academics";
import Programs from "./pages/academics/Programs";
import Courses from "./pages/academics/Courses";
import Schools from "./pages/academics/Schools";
import Research from "./pages/academics/Research";
import Curriculum from "./pages/academics/Curriculum";
import ResearchPage from "./pages/research";
import ResearchAreas from "./pages/research/ResearchAreas";
import Projects from "./pages/research/Projects";
import Publications from "./pages/research/Publications";
import Funding from "./pages/research/Funding";
import ResearchCenters from "./pages/research/ResearchCenters";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
// Import admin pages
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin";
import AdminNews from "./pages/admin/News";

function App() {
  const location = useLocation();

  // Check if current route is an admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen">
      {/* Only show Navbar and Footer for non-admin routes */}
      {!isAdminRoute && <Navbar />}

      <main className={!isAdminRoute ? "flex-grow" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/management" element={<Management />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/accreditation" element={<Accreditation />} />
          <Route path="/about/testimonials" element={<Testimonials />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/get-in-touch" element={<GetInTouch />} />
          <Route path="/contact/location" element={<Location />} />
          <Route path="/contact/support" element={<Support />} />
          <Route path="/contact/feedback" element={<Feedback />} />

          {/* Admission */}
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission/apply" element={<ApplyNow />} />
          <Route path="/admission/requirements" element={<Requirements />} />
          <Route path="/admission/process" element={<Process />} />
          <Route path="/admission/scholarships" element={<Scholarships />} />
          <Route path="/admission/fees-payments" element={<FeesPayments />} />
          <Route path="/admission/faqs" element={<FAQs />} />

          {/* Academics */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/programs" element={<Programs />} />
          <Route path="/academics/courses" element={<Courses />} />
          <Route path="/academics/schools" element={<Schools />} />
          <Route path="/academics/research" element={<Research />} />
          <Route path="/academics/curriculum" element={<Curriculum />} />

          {/* Research */}
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/areas" element={<ResearchAreas />} />
          <Route path="/research/projects" element={<Projects />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/funding" element={<Funding />} />
          <Route path="/research/centers" element={<ResearchCenters />} />

          {/* News */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />

          {/* Legal */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/news" element={<AdminNews />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
