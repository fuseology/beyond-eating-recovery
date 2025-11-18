import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";

const PrivacyNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Notice of Privacy Practice</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-[900px]">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notice of Privacy Practice
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Your Information. Your Rights. Our Responsibilities.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This notice describes how medical information about you may be used and disclosed 
            and how you can get access to this information.{" "}
            <strong className="text-foreground">Please review it carefully.</strong>
          </p>
        </header>

        {/* Primary Download CTA */}
        <section className="mb-12">
          <div className="bg-accent/20 border-2 border-primary rounded-lg p-6 text-center">
            <a 
              href="/documents/Beyond-Eating-Recovery-Privacy-Notice.pdf" 
              download="Beyond-Eating-Recovery-Privacy-Notice.pdf"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Full Privacy Notice (PDF)
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Last Updated: January 2024 | Format: PDF
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <article className="space-y-12">
          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Your Rights</h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              As a client of Beyond Eating Recovery, you have important rights regarding your health information:
            </p>
            <ul className="space-y-3 text-base text-foreground leading-relaxed">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Get a copy of your paper or electronic medical record</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Correct your paper or electronic medical record</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Request confidential communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Ask us to limit the information we share</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Get a list of those with whom we've shared your information</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Get a copy of this privacy notice</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Choose someone to act for you</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>File a complaint if you believe your privacy rights have been violated</span>
              </li>
            </ul>
          </section>

          {/* Your Choices */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Your Choices</h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              You have choices in the way that we use and share information as we:
            </p>
            <ul className="space-y-3 text-base text-foreground leading-relaxed">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Tell family and friends about your condition</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Provide disaster relief</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Include you in a hospital directory</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Provide mental health care</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Market our services and sell your information</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Raise funds</span>
              </li>
            </ul>
          </section>

          {/* Our Uses and Disclosures */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Uses and Disclosures</h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              We may use and share your information as we:
            </p>
            <ul className="space-y-3 text-base text-foreground leading-relaxed">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Treat you</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Run our organization</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Bill for your services</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Help with public health and safety issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Do research</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Comply with the law</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Respond to organ and tissue donation requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Work with a medical examiner or funeral director</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Address workers' compensation, law enforcement, and other government requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>Respond to lawsuits and legal actions</span>
              </li>
            </ul>
          </section>
        </article>

        {/* Important Notice Box */}
        <aside className="my-12 bg-accent/20 border-l-4 border-orange-500 rounded-r-lg p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">Important Information</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            This page provides a summary of your privacy rights. The full Notice of Privacy Practice 
            contains detailed information about:
          </p>
          <ul className="space-y-2 text-base text-foreground leading-relaxed mb-4">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span>How to exercise your rights</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span>Our responsibilities under HIPAA</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span>Detailed descriptions of permitted uses and disclosures</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span>How to file a complaint</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span>Contact information for privacy concerns</span>
            </li>
          </ul>
          <p className="text-base text-foreground font-semibold">
            Please download and review the complete notice using the button above.
          </p>
        </aside>

        {/* Contact Section */}
        <section className="my-12 bg-card border border-border rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Questions About Your Privacy?</h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            If you have questions about this notice or your privacy rights, please contact us:
          </p>
          <div className="space-y-4 text-base text-foreground">
            <div>
              <p className="font-semibold text-lg mb-2">Beyond Eating Recovery</p>
              <p className="text-muted-foreground">1235 SE Division Street, Suite 104</p>
              <p className="text-muted-foreground mb-2">Portland, OR 97202</p>
              <p className="text-muted-foreground">400 E. Evergreen Blvd, Suite 309</p>
              <p className="text-muted-foreground">Vancouver, WA 98660</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">Phone:</span>
              <a href="tel:3607264141" className="text-primary hover:underline">(360) 726-4141</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold">Hours:</span>
              <span className="text-muted-foreground">Monday–Friday, 9:00 AM – 5:00 PM</span>
            </div>
          </div>
        </section>

        {/* Footer Download CTA */}
        <section className="text-center py-8">
          <p className="text-lg text-muted-foreground mb-4">Ready to download the full notice?</p>
          <a 
            href="/documents/Beyond-Eating-Recovery-Privacy-Notice.pdf" 
            download="Beyond-Eating-Recovery-Privacy-Notice.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Privacy Notice (PDF)
            </Button>
          </a>
        </section>
      </div>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default PrivacyNotice;
