import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import ctaImage from "@/assets/michelle-commons-cta.webp";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Column: Image - Takes 1/3 width */}
            <div className="order-2 md:order-1">
              <img
                src={ctaImage}
                alt="Michelle Commons - Beyond Eating Recovery therapist"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Right Column: Text and CTA - Takes 2/3 width */}
            <div className="order-1 md:order-2 md:col-span-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Ready to Begin Your Recovery Journey?
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                We understand that reaching out can feel overwhelming — and that's okay. Our compassionate team meets you exactly where you are, without judgment. Whether you're just beginning to explore your relationship with food or you've been navigating these struggles for years, you deserve thoughtful, individualized support. Recovery looks different for everyone, and we're here to walk alongside you at your own pace. Schedule a free consultation to take that first step.
              </p>
              
              <div className="flex justify-center md:justify-start mb-6">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white px-8"
                  asChild
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground italic mb-4">
                No insurance? We offer sliding scale fees and payment plans.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 text-base font-semibold text-primary">
                <Phone className="w-5 h-5" />
                <span>Or call us: 360-726-4141</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
