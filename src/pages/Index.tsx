import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NotAloneSection from "@/components/NotAloneSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import VideoSection from "@/components/VideoSection";
import WorkshopSection from "@/components/WorkshopSection";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <NotAloneSection />
      <HowWeHelpSection />
      <VideoSection />
      <WorkshopSection />
      <TrustIndicators />
      <Footer />
    </div>
  );
};

export default Index;
