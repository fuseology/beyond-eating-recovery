import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// Map of routes to readable titles
const routeTitles: Record<string, string> = {
  about: "About Us",
  services: "Services",
  conditions: "Conditions",
  philosophy: "Our Philosophy",
  resources: "Resources",
  contact: "Contact",
  workshop: "Workshop",
  faq: "FAQ",
  careers: "Careers",
  "privacy-notice": "Privacy Notice",
  "secure-file-submissions": "Secure File Submissions",
  "our-approach": "Our Approach",
  "health-at-every-size": "Health At Every Size",
  "body-shame": "Body Shame",
  "5-steps-diet-roller-coaster": "5 Steps Off The Diet Roller Coaster",
  "battle-of-the-binge": "Battle Of The Binge",
  // Team members
  "anne-cuthbert": "Anne Cuthbert, MA, LPC, LMHC",
  "michelle-commons": "Michelle Commons",
  "bailey-benn": "Bailey Benn, MA, LPC, LMHC",
  "sara-kranich": "Sara Kranich, MA",
  "rachel-bennett": "Rachel Bennett, MA",
  "stephanie-okumura": "Stephanie Okumura, MS, RDN",
  "alyssa-pataki": "Alyssa Pataki, MA, LMFT",
  "kiandra-cole": "Kiandra Cole, MA",
  "mary-cooper": "Mary Cooper",
  "emery-pederson": "Emery Pederson",
  "annie-calhoun-randall": "Annie Calhoun Randall, MA",
  "michelle-meredith": "Michelle Meredith",
  "mackenzie-stracke": "Mackenzie Stracke, MS, RDN",
  "move-toward-your-emotions": "Move Toward Your Emotions",
  // Conditions
  "anorexia-nervosa": "Anorexia Nervosa",
  "bulimia-nervosa": "Bulimia Nervosa",
  "binge-eating-disorder": "Binge Eating Disorder",
  "atypical-anorexia": "Atypical Anorexia",
  "arfid": "ARFID",
  "osfed": "OSFED",
  "orthorexia": "Orthorexia",
  "body-dysmorphia": "Body Dysmorphia",
  "disordered-eating": "Disordered Eating",
  "emotional-eating": "Emotional Eating",
  "exercise-addiction": "Exercise Addiction",
  "co-occurring-issues": "Co-Occurring Issues",
  "men-eating-disorders": "Men & Eating Disorders",
  "lgbtqia-eating-disorders": "LGBTQIA+ & Eating Disorders",
  "athletes-eating-disorders": "Athletes & Eating Disorders",
};

// Convert slug to title (fallback for unmapped routes)
const slugToTitle = (slug: string): string => {
  if (routeTitles[slug]) {
    return routeTitles[slug];
  }
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const BASE_URL = "https://www.beyondeatingrecovery.com";

interface BreadcrumbSchemaProps {
  customItems?: Array<{ name: string; url: string }>;
}

const BreadcrumbSchema = ({ customItems }: BreadcrumbSchemaProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Build breadcrumb items
  const items = customItems || [
    { name: "Home", url: BASE_URL },
    ...pathnames.map((segment, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        name: slugToTitle(segment),
        url: `${BASE_URL}${path}`,
      };
    }),
  ];

  // Don't render schema on homepage (only Home item)
  if (items.length <= 1 && !customItems) {
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
