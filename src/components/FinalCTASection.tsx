import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our compassionate team. We're here to help you heal your relationship with food and your body.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8"
              onClick={() => window.location.href = '/contact'}
            >
              Book Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/contact'}
            >
              Verify Insurance
            </Button>
          </div>

          <p className="text-sm text-muted-foreground italic mb-4">
            No insurance? We offer sliding scale fees and payment plans.
          </p>

          <div className="flex items-center justify-center gap-2 text-base font-semibold text-primary">
            <Phone className="w-5 h-5" />
            <span>Or call us: 360-726-4141</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
