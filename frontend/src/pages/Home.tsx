import Carousel from "../components/Carousel";
import NewsSection from "../components/NewsSection";
import VisionMission from "../components/VisionMission";
import ViceChancellor from "../components/ViceChancellor";
import { apiBaseUrl } from "../config/api";

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-slate-100 border border-slate-200 px-4 py-3 text-sm text-slate-700">
        API base: <span className="font-semibold">{apiBaseUrl}</span>
      </div>
      <Carousel />
      <VisionMission />
      <NewsSection />
      <ViceChancellor />
    </div>
  );
};

export default Home;
