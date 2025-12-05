import { Check } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    SignUpFormWidget?: { init: () => void };
  }
}

const NewsletterFooterSection = () => {
  useEffect(() => {
    // Reinitialize Constant Contact forms when component mounts
    if (window.SignUpFormWidget) {
      window.SignUpFormWidget.init();
    }
  }, []);

  return (
    <section 
      className="newsletter-footer bg-gradient-to-r from-primary to-[#2a5399] py-16 md:py-20"
      aria-labelledby="newsletter-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            
            {/* Content Column - 60% */}
            <div className="md:col-span-3 text-white">
              <h2 
                id="newsletter-heading" 
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              >
                Ready to Exit the Diet Roller Coaster?
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-2xl">
                Sign up for Anne Cuthbert's free video series and discover practical steps to find peace and freedom with food and your body. One video delivered to your inbox every few days.
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-3 text-white/95">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">No diet rules or restrictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Learn at your own pace</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Expert guidance from Anne Cuthbert, MA, LPC</span>
                </li>
              </ul>
            </div>
            
            {/* Form Column - 40% */}
            <div className="md:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20">
                <div 
                  className="ctct-inline-form" 
                  data-form-id="1e4bff82-8959-4098-ba51-ed75e027a11c"
                ></div>
                <p className="text-xs md:text-sm text-white/70 text-center mt-4">
                  🔒 We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterFooterSection;
