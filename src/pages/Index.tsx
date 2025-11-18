import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NotAloneSection from "@/components/NotAloneSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import HomepageFourBlockNavigation from "@/components/HomepageFourBlockNavigation";
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
      <HomepageFourBlockNavigation />
      <BookSection />
      <WorkshopSection />
      <ConditionsAccordionSection />
      <FinalCTASection />
      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Index;
