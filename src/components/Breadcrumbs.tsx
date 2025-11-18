import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
  "our-approach": "Our Approach",
  "health-at-every-size": "Health At Every Size",
  "body-shame": "Body Shame",
  "five-steps-diet-rollercoaster": "5 Steps Off The Diet Roller Coaster",
  "battle-of-the-binge": "Battle Of The Binge",
  // Team members
  "anne-cuthbert": "Anne Cuthbert",
  "michelle-commons": "Michelle Commons",
  "bailey-benn": "Bailey Benn",
  "sara-kranich": "Sara Kranich",
  "rachel-bennett": "Rachel Bennett",
  "stephanie-okumura": "Stephanie Okumura",
  "alyssa-pataki": "Alyssa Pataki",
  "kiandra-cole": "Kiandra Cole",
  "mary-cooper": "Mary Cooper",
  "emery-pederson": "Emery Pederson",
  "annie-calhoun-randall": "Annie Calhoun Randall",
  "michelle-sullins": "Michelle Sullins",
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

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/30 border-b border-border/40">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {pathnames.map((segment, index) => {
              const path = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const title = slugToTitle(segment);

              return (
                <div key={path} className="flex items-center gap-1.5">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={path}>{title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;
