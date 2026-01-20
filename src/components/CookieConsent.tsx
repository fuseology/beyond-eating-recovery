import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "declined" | null;

const CookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = localStorage.getItem(CONSENT_KEY) as ConsentStatus;
    
    if (storedConsent === "accepted") {
      setConsentStatus("accepted");
      enableAnalytics();
    } else if (storedConsent === "declined") {
      setConsentStatus("declined");
    } else {
      // No choice made yet, show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const enableAnalytics = () => {
    // Initialize Google Analytics
    if (typeof window !== "undefined" && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const disableAnalytics = () => {
    // Disable Google Analytics
    if (typeof window !== "undefined" && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
    setIsVisible(false);
    enableAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsentStatus("declined");
    setIsVisible(false);
    disableAnalytics();
  };

  // Don't render if user has already made a choice or banner isn't visible yet
  if (consentStatus || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-background border-t shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground text-sm md:text-base">
                  We use cookies to analyze website traffic and improve your experience. 
                  By clicking "Accept," you consent to our use of cookies for analytics purposes.
                </p>
                <a 
                  href="/privacy-notice" 
                  className="text-accent hover:underline text-sm mt-1 inline-block"
                >
                  Learn more in our Privacy Notice
                </a>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleDecline}
                className="flex-1 md:flex-none"
              >
                Decline
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-accent hover:bg-accent/90 text-white flex-1 md:flex-none"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
