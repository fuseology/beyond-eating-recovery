import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
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
import { NAP_DATA } from "@/components/NAPConsistency";
import { getAggregateRatingSchema, BUSINESS_RATING } from "@/components/schemas";

const Index = () => {
  const portland = NAP_DATA.locations.portland;
  const vancouver = NAP_DATA.locations.vancouver;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": `${NAP_DATA.website}/#organization`,
        "name": NAP_DATA.businessName,
        "alternateName": "Food Is Not The Enemy",
        "url": NAP_DATA.website,
        "logo": `${NAP_DATA.website}/logo.png`,
        "image": `${NAP_DATA.website}/assets/hero-background.jpg`,
        "description": "Compassionate eating disorder treatment and recovery support in Portland, OR & Vancouver, WA. Specializing in anorexia, bulimia, binge eating disorder, and intuitive eating.",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": portland.street,
            "addressLocality": portland.city,
            "addressRegion": portland.state,
            "postalCode": portland.zip,
            "addressCountry": portland.countryCode
          },
          {
            "@type": "PostalAddress",
            "streetAddress": vancouver.street,
            "addressLocality": vancouver.city,
            "addressRegion": vancouver.state,
            "postalCode": vancouver.zip,
            "addressCountry": vancouver.countryCode
          }
        ],
        "telephone": NAP_DATA.phoneInternational,
        "email": NAP_DATA.email,
        "priceRange": "$$",
        "medicalSpecialty": ["Eating Disorder Treatment", "Mental Health Counseling", "Nutrition Counseling"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": NAP_DATA.phoneInternational,
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": Object.values(NAP_DATA.socialMedia),
        "areaServed": [
          {
            "@type": "City",
            "name": portland.city,
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": portland.stateFullName
            }
          },
          {
            "@type": "City",
            "name": vancouver.city,
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": vancouver.stateFullName
            }
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Eating Disorder Treatment Services",
          "itemListElement": NAP_DATA.services.slice(0, 4).map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": service
            }
          }))
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "aggregateRating": getAggregateRatingSchema(BUSINESS_RATING)
      },
      {
        "@type": "LocalBusiness",
        "@id": `${NAP_DATA.website}/#localbusiness-portland`,
        "name": `${NAP_DATA.businessName} - ${portland.city}`,
        "image": `${NAP_DATA.website}/assets/office-space.webp`,
        "description": `Eating disorder treatment center in ${portland.city}, ${portland.stateFullName} offering compassionate therapy for anorexia, bulimia, binge eating disorder, and body image concerns.`,
        "url": NAP_DATA.website,
        "telephone": NAP_DATA.phoneInternational,
        "email": NAP_DATA.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": portland.street,
          "addressLocality": portland.city,
          "addressRegion": portland.state,
          "postalCode": portland.zip,
          "addressCountry": portland.countryCode
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": portland.coordinates.latitude.toString(),
          "longitude": portland.coordinates.longitude.toString()
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": portland.coordinates.latitude.toString(),
            "longitude": portland.coordinates.longitude.toString()
          },
          "geoRadius": "40000"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "sameAs": Object.values(NAP_DATA.socialMedia),
        "hasMap": portland.googleMapsUrl,
        "aggregateRating": getAggregateRatingSchema(BUSINESS_RATING)
      },
      {
        "@type": "LocalBusiness",
        "@id": `${NAP_DATA.website}/#localbusiness-vancouver`,
        "name": `${NAP_DATA.businessName} - ${vancouver.city}`,
        "image": `${NAP_DATA.website}/assets/office-space.webp`,
        "description": `Eating disorder treatment center in ${vancouver.city}, ${vancouver.stateFullName} offering compassionate therapy for anorexia, bulimia, binge eating disorder, and body image concerns.`,
        "url": NAP_DATA.website,
        "telephone": NAP_DATA.phoneInternational,
        "email": NAP_DATA.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": vancouver.street,
          "addressLocality": vancouver.city,
          "addressRegion": vancouver.state,
          "postalCode": vancouver.zip,
          "addressCountry": vancouver.countryCode
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": vancouver.coordinates.latitude.toString(),
          "longitude": vancouver.coordinates.longitude.toString()
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": vancouver.coordinates.latitude.toString(),
            "longitude": vancouver.coordinates.longitude.toString()
          },
          "geoRadius": "40000"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "sameAs": Object.values(NAP_DATA.socialMedia),
        "hasMap": vancouver.googleMapsUrl,
        "aggregateRating": getAggregateRatingSchema(BUSINESS_RATING)
      },
      {
        "@type": "WebSite",
        "@id": `${NAP_DATA.website}/#website`,
        "url": NAP_DATA.website,
        "name": NAP_DATA.businessName,
        "description": "Portland & Vancouver eating disorder treatment center",
        "publisher": {
          "@id": `${NAP_DATA.website}/#organization`
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
      <BreadcrumbSchema />
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
