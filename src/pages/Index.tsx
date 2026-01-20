import { Helmet } from "react-helmet";
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://www.beyondeatingrecovery.com/#organization",
        "name": "Beyond Eating Recovery",
        "alternateName": "Food Is Not The Enemy",
        "url": "https://www.beyondeatingrecovery.com",
        "logo": "https://beyondeatingrecovery.com/logo.png",
        "description": "Compassionate eating disorder treatment and recovery support in Portland, OR & Vancouver, WA. Specializing in anorexia, bulimia, binge eating disorder, and intuitive eating.",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "1235 SE Division Street, Suite 104",
            "addressLocality": "Portland",
            "addressRegion": "OR",
            "postalCode": "97202",
            "addressCountry": "US"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "400 E. Evergreen Blvd, Suite 309",
            "addressLocality": "Vancouver",
            "addressRegion": "WA",
            "postalCode": "98660",
            "addressCountry": "US"
          }
        ],
        "telephone": "+1-360-726-4141",
        "email": "info@beyondeating.com",
        "priceRange": "$$",
        "medicalSpecialty": ["Eating Disorder Treatment", "Mental Health Counseling", "Nutrition Counseling"],
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "45.5051",
            "longitude": "-122.6750"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Eating Disorder Treatment Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Individual Therapy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Group Therapy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Nutrition Counseling"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Telehealth Services"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.beyondeatingrecovery.com/#website",
        "url": "https://www.beyondeatingrecovery.com",
        "name": "Beyond Eating Recovery",
        "description": "Portland & Vancouver eating disorder treatment center",
        "publisher": {
          "@id": "https://www.beyondeatingrecovery.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.beyondeatingrecovery.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Beyond Eating Recovery | Eating Disorder Treatment in Portland & Vancouver</title>
        <meta 
          name="description" 
          content="Compassionate eating disorder treatment in Portland, OR & Vancouver, WA. Specializing in anorexia, bulimia, binge eating, ARFID, and intuitive eating. In-person and virtual therapy available." 
        />
        <meta name="keywords" content="eating disorder treatment Portland, eating disorder therapist Vancouver WA, anorexia treatment, bulimia treatment, binge eating disorder, intuitive eating, HAES therapist" />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
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
