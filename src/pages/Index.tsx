import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NotAloneSection from "@/components/NotAloneSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import VideoSection from "@/components/VideoSection";
import BookSection from "@/components/BookSection";
import ConditionsAccordionSection from "@/components/ConditionsAccordionSection";
import WorkshopSection from "@/components/WorkshopSection";
import TrustIndicators from "@/components/TrustIndicators";
import FinalCTASection from "@/components/FinalCTASection";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustIndicators />
      <NotAloneSection />
      <HowWeHelpSection />
      
      {/* Book Title */}
      <div className="py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          If Your Hunger Could Talk
        </h2>
        <p className="text-lg text-muted-foreground">
          By Anne Cuthbert MA, LPC, LMHC
        </p>
      </div>
      
      <BookSection />
      <WorkshopSection />
      <VideoSection />
      <ConditionsAccordionSection />
      <FinalCTASection />
      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Index;
