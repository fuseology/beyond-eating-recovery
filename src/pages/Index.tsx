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
        "areaServed": [
          { "@type": "City", "name": "Portland" },
          { "@type": "City", "name": "Beaverton" },
          { "@type": "City", "name": "Lake Oswego" },
          { "@type": "City", "name": "Tigard" },
          { "@type": "City", "name": "Hillsboro" },
          { "@type": "City", "name": "Milwaukie" },
          { "@type": "City", "name": "Gresham" },
          { "@type": "City", "name": "Tualatin" },
          { "@type": "AdministrativeArea", "name": "Multnomah County, Oregon" },
          { "@type": "AdministrativeArea", "name": "Washington County, Oregon" },
          { "@type": "AdministrativeArea", "name": "Clackamas County, Oregon" }
        ],
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
        "sameAs": [
          ...Object.values(NAP_DATA.socialMedia),
          "https://www.google.com/maps/place/?q=place_id:0x54950b992a10ec77:0x27e481ed74713d36"
        ],
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
        "areaServed": [
          { "@type": "City", "name": "Vancouver" },
          { "@type": "City", "name": "Camas" },
          { "@type": "City", "name": "Washougal" },
          { "@type": "City", "name": "Battle Ground" },
          { "@type": "City", "name": "Ridgefield" },
          { "@type": "City", "name": "Hazel Dell" },
          { "@type": "City", "name": "Salmon Creek" },
          { "@type": "City", "name": "Brush Prairie" },
          { "@type": "AdministrativeArea", "name": "Clark County, Washington" }
        ],
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
        "sameAs": [
          ...Object.values(NAP_DATA.socialMedia),
          "https://www.google.com/maps/place/?q=place_id:0x0:0xfe6c6aa5392359df"
        ],
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
      },
      {
        "@type": "Service",
        "@id": `${NAP_DATA.website}/#eating-disorder-treatment`,
        "name": "Eating Disorder Treatment",
        "description": "Evidence-based outpatient eating disorder treatment for adolescents and adults across the Portland metro and Vancouver area. Recovery-focused care from licensed clinicians, including treatment for anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and OSFED.",
        "provider": { "@id": `${NAP_DATA.website}/#organization` },
        "serviceType": "Eating Disorder Treatment",
        "medicalSpecialty": "EatingDisorder",
        "areaServed": [
          { "@type": "City", "name": "Portland" },
          { "@type": "City", "name": "Vancouver" },
          { "@type": "City", "name": "Beaverton" },
          { "@type": "City", "name": "Lake Oswego" },
          { "@type": "City", "name": "Camas" },
          { "@type": "City", "name": "Washougal" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${NAP_DATA.website}/#nutrition-counseling`,
        "name": "Nutrition Counseling for Eating Disorder Recovery",
        "description": "Recovery-aligned nutrition counseling supporting clinical eating disorder treatment. Non-diet, evidence-based therapeutic approach delivered by registered dietitians as part of a coordinated care team.",
        "provider": { "@id": `${NAP_DATA.website}/#organization` },
        "serviceType": "Clinical Nutrition Therapy",
        "medicalSpecialty": "EatingDisorder",
        "areaServed": [
          { "@type": "City", "name": "Portland" },
          { "@type": "City", "name": "Vancouver" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${NAP_DATA.website}/#family-based-treatment`,
        "name": "Family-Based Treatment (FBT)",
        "description": "Family-Based Treatment is an evidence-based outpatient treatment approach for adolescents with eating disorders. FBT empowers families to play a central, active role in their loved one's recovery alongside clinical guidance.",
        "provider": { "@id": `${NAP_DATA.website}/#organization` },
        "serviceType": "Family-Based Treatment",
        "medicalSpecialty": "EatingDisorder",
        "audience": {
          "@type": "PeopleAudience",
          "suggestedMinAge": 10,
          "suggestedMaxAge": 18
        }
      },
      {
        "@type": "Service",
        "@id": `${NAP_DATA.website}/#individual-therapy`,
        "name": "Individual Therapy for Eating Disorder Recovery",
        "description": "One-on-one therapeutic support for adolescents and adults navigating eating disorder recovery. Evidence-based modalities tailored to each client's clinical needs and recovery journey.",
        "provider": { "@id": `${NAP_DATA.website}/#organization` },
        "serviceType": "Individual Psychotherapy",
        "medicalSpecialty": "EatingDisorder"
      },
      {
        "@type": "Service",
        "@id": `${NAP_DATA.website}/#telehealth-treatment`,
        "name": "Telehealth Eating Disorder Treatment",
        "description": "Virtual eating disorder treatment sessions for clients across Oregon and Washington. Same evidence-based clinical care delivered via secure telehealth, expanding access for clients outside immediate Portland or Vancouver service areas.",
        "provider": { "@id": `${NAP_DATA.website}/#organization` },
        "serviceType": "Telehealth Eating Disorder Treatment",
        "medicalSpecialty": "EatingDisorder",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": NAP_DATA.website,
          "availableLanguage": "English"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${NAP_DATA.website}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you accept insurance for eating disorder treatment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept most major insurance plans. Please call us to verify your specific plan and benefits."
            }
          },
          {
            "@type": "Question",
            "name": "What types of eating disorders do you treat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide evidence-based outpatient treatment for anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and other specified feeding or eating disorders (OSFED)."
            }
          },
          {
            "@type": "Question",
            "name": "What ages do you treat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We treat both adolescents and adults at our Portland and Vancouver locations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer in-person and virtual sessions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer both in-person sessions at our Portland (SE Division) and Vancouver (E. Evergreen) locations, and telehealth sessions for clients across Oregon and Washington."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started with treatment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call our intake line to schedule a consultation. Our team will guide you through the intake process and help match you with the right clinician for your needs."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${NAP_DATA.website}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${NAP_DATA.website}/`
          }
        ]
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
