import { useState, useEffect } from "react";
import { Check, AlertCircle } from "lucide-react";

const NewsletterFooterSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const FORM_ID = "1e4bff82-8959-4098-ba51-ed75e027a11c";
    const selector = `.ctct-inline-form[data-form-id="${FORM_ID}"]`;

    let attempts = 0;
    const maxAttempts = 8;
    let timer: number | undefined;

    console.log('[Newsletter Form] Starting form load...');

    const isRendered = () => {
      const el = document.querySelector(selector) as HTMLElement | null;
      const rendered = !!el && el.children.length > 0;
      if (rendered) {
        console.log('[Newsletter Form] Form successfully rendered!');
        setIsLoading(false);
      }
      return rendered;
    };

    const load = () => {
      console.log(`[Newsletter Form] Loading script (attempt ${attempts + 1}/${maxAttempts})...`);
      
      (window as any)._ctct_m = "9ec9c776cead1cd42af6640d7a07a35e";
      const src = "https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";

      const prev = document.getElementById("signupScript-retry") as HTMLScriptElement | null;
      if (prev) prev.remove();

      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.defer = true;
      s.id = "signupScript-retry";
      
      s.onerror = () => {
        console.error('[Newsletter Form] Script failed to load');
        setLoadError(true);
        setIsLoading(false);
      };
      
      s.onload = () => {
        console.log('[Newsletter Form] Script loaded successfully');
      };
      
      document.body.appendChild(s);
    };

    const tick = () => {
      if (isRendered()) {
        if (timer) window.clearInterval(timer);
        return;
      }
      
      if (attempts >= maxAttempts) {
        console.error('[Newsletter Form] Max attempts reached, form failed to load');
        if (timer) window.clearInterval(timer);
        setLoadError(true);
        setIsLoading(false);
        return;
      }
      
      attempts += 1;
      if (attempts === 1 || attempts === 3 || attempts === 5) load();
    };

    timer = window.setInterval(tick, 1000);
    tick();

    return () => {
      if (timer) window.clearInterval(timer);
    };
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
              {!isSubmitted ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20">
                  {/* Loading State */}
                  {isLoading && !loadError && (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-3"></div>
                      <p className="text-white/70 text-sm">Loading form...</p>
                    </div>
                  )}
                  
                  {/* Error Fallback */}
                  {loadError && (
                    <div className="text-center py-6">
                      <AlertCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">
                        Unable to Load Form
                      </h3>
                      <p className="text-white/90 mb-6">
                        Please visit our signup page directly:
                      </p>
                      <a
                        href="https://lp.constantcontactpages.com/sl/jVs1X63/beyondeating"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        Sign Up Here
                      </a>
                    </div>
                  )}
                  
                  {/* Constant Contact Form */}
                  <div 
                    className={`ctct-inline-form ${isLoading ? 'hidden' : 'block'}`} 
                    data-form-id="1e4bff82-8959-4098-ba51-ed75e027a11c"
                  ></div>
                  
                  {!loadError && (
                    <p className="text-xs md:text-sm text-white/70 text-center mt-4">
                      🔒 We respect your privacy. Unsubscribe anytime.
                    </p>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Success! Check Your Email
                  </h3>
                  <p className="text-foreground/80">
                    Your first video is on its way. Check your inbox in a few minutes.
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterFooterSection;
