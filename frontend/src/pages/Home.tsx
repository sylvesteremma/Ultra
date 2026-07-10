import Carousel from "../components/Carousel";
import NewsSection from "../components/NewsSection";
import VisionMission from "../components/VisionMission";
import ViceChancellor from "../components/ViceChancellor";

const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <VisionMission />
      <NewsSection />
      <ViceChancellor />
    </div>
  );
};

export default Home;
