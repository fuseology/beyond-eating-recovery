import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const SecureFileSubmissions = () => {
  return (
    <>
      <Helmet>
        <title>Secure File Submissions | Beyond Eating Recovery</title>
        <meta 
          name="description" 
          content="Securely submit files and documents to Beyond Eating Recovery. Our encrypted form ensures your privacy and confidentiality." 
        />
        <link rel="canonical" href="https://beyondeatingrecovery.com/secure-file-submissions" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Secure File Submissions | Beyond Eating Recovery" />
        <meta 
          property="og:description" 
          content="Securely submit files and documents to Beyond Eating Recovery. Our encrypted form ensures your privacy and confidentiality." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beyondeatingrecovery.com/secure-file-submissions" />
        <meta property="og:image" content="https://beyondeatingrecovery.com/og-image.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secure File Submissions | Beyond Eating Recovery" />
        <meta 
          name="twitter:description" 
          content="Securely submit files and documents to Beyond Eating Recovery. Our encrypted form ensures your privacy and confidentiality." 
        />
        <meta name="twitter:image" content="https://beyondeatingrecovery.com/og-image.jpg" />
      </Helmet>

      <BreadcrumbSchema />
      <Header />
      <Breadcrumbs />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Secure File Submissions
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Submit your documents securely and confidentially
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Use the form below to securely upload files to Beyond Eating Recovery. 
                All submissions are encrypted and handled with the utmost confidentiality.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfHvkpMJbdNF6m-eZFtRrwv4xrb2vUH6plb-rwJ5ERETqFX8A/viewform?embedded=true" 
                  width="100%" 
                  height="1200" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  title="Secure File Submission Form"
                  className="w-full"
                >
                  Loading form...
                </iframe>
              </div>
              
              <div className="mt-8 text-center text-muted-foreground">
                <p className="text-sm">
                  If you have any questions about submitting files, please{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    contact us
                  </a>
                  {" "}or call us at{" "}
                  <a href="tel:3607264141" className="text-primary hover:underline">
                    360-726-4141
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SecureFileSubmissions;
