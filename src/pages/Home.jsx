import Navbar from "../components/Navbar"; // Navbar only for this page
import Hero from "../components/Hero";
import Companylogo from "../components/Companylogo";
import VideoPreview from "../components/VideoPreview";
import ScreenFrame from "../components/ScreenFrame";
import Screenimage from "../assets/images/img-sharedinbox.png";
import TestimonialSlider from "../components/TestimonialSlider ";
import DarkHero from "../components/Darkhero";
function Home() {
  return (
    <>
      <Hero />
      <ScreenFrame imageUrl={Screenimage} alt="Demo Image" />

      <VideoPreview />
      <Companylogo />
      <TestimonialSlider />
      <DarkHero />

    </>
  );
}

export default Home;
