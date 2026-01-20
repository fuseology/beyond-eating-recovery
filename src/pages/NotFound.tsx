import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Search, Home, Users, Stethoscope, Heart, Phone, HelpCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/lib/routes";

// Map routes to user-friendly names
const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/about': 'About Us',
  '/services': 'Services',
  '/conditions': 'Conditions We Treat',
  '/our-approach': 'Our Approach',
  '/contact': 'Contact Us',
  '/resources': 'Resources',
  '/faq': 'FAQ',
  '/workshop': 'Workshop',
  '/careers': 'Careers',
  '/philosophy': 'Our Philosophy',
  '/health-at-every-size': 'Health At Every Size',
  '/privacy-notice': 'Privacy Notice',
  '/secure-file-submissions': 'Secure File Submissions',
  '/about/anne-cuthbert': 'Anne Cuthbert',
  '/about/bailey-benn': 'Bailey Benn',
  '/about/alyssa-pataki': 'Alyssa Pataki',
  '/about/kiandra-cole': 'Kiandra Cole',
  '/about/rachel-bennett': 'Rachel Bennett',
  '/about/annie-calhoun-randall': 'Annie Calhoun Randall',
  '/about/sara-kranich': 'Sara Kranich',
  '/about/stephanie-okumura': 'Stephanie Okumura',
  '/about/michelle-commons': 'Michelle Commons',
  '/about/michelle-meredith': 'Michelle Meredith',
  '/about/mary-cooper': 'Mary Cooper',
  '/about/emery-pederson': 'Emery Pederson',
  '/conditions/anorexia-nervosa': 'Anorexia Nervosa',
  '/conditions/bulimia-nervosa': 'Bulimia Nervosa',
  '/conditions/binge-eating-disorder': 'Binge Eating Disorder',
  '/conditions/co-occurring-issues': 'Co-Occurring Issues',
  '/conditions/arfid': 'ARFID',
  '/conditions/osfed': 'OSFED',
  '/conditions/orthorexia': 'Orthorexia',
  '/conditions/atypical-anorexia': 'Atypical Anorexia',
  '/conditions/disordered-eating': 'Disordered Eating',
  '/conditions/emotional-eating': 'Emotional Eating',
  '/conditions/body-dysmorphia': 'Body Dysmorphia',
  '/conditions/exercise-addiction': 'Exercise Addiction',
  '/conditions/men-eating-disorders': 'Eating Disorders in Men',
  '/conditions/lgbtqia-eating-disorders': 'LGBTQIA+ Eating Disorders',
  '/conditions/athletes-eating-disorders': 'Athletes & Eating Disorders',
  '/battle-of-the-binge': 'Battle of the Binge',
  '/body-shame': 'Body Shame Counseling',
  '/resources/5-steps-diet-roller-coaster': '5 Steps Diet Roller Coaster',
};

const quickLinks = [
  { title: "Home", href: "/", icon: Home, description: "Return to homepage" },
  { title: "About Us", href: "/about", icon: Users, description: "Meet our team" },
  { title: "Services", href: "/services", icon: Stethoscope, description: "View therapy options" },
  { title: "Conditions", href: "/conditions", icon: Heart, description: "Conditions we treat" },
  { title: "Contact", href: "/contact", icon: Phone, description: "Get in touch" },
  { title: "FAQ", href: "/faq", icon: HelpCircle, description: "Common questions" },
];

const NotFound = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Filter routes based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return routes
      .filter(route => {
        const label = routeLabels[route.path] || route.path;
        return label.toLowerCase().includes(query) || route.path.toLowerCase().includes(query);
      })
      .slice(0, 6); // Limit to 6 results
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* 404 Badge */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <span className="text-4xl font-bold text-primary">404</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Page Not Found
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                We couldn't find the page you're looking for, but we're here to help you find your way. 
                Try searching below or explore our popular pages.
              </p>

              {/* Search Box */}
              <div className="relative max-w-md mx-auto mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search our site..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-primary/20 focus:border-primary bg-background shadow-sm"
                />
              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="max-w-md mx-auto bg-card rounded-xl shadow-lg border overflow-hidden mb-8 text-left animate-fade-in">
                  <div className="p-3 bg-muted/50 border-b">
                    <span className="text-sm font-medium text-muted-foreground">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                    </span>
                  </div>
                  <ul className="divide-y">
                    {searchResults.map((route) => (
                      <li key={route.path}>
                        <Link
                          to={route.path}
                          className="flex items-center justify-between px-4 py-3 hover:bg-accent/10 transition-colors group"
                        >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {routeLabels[route.path] || route.path}
                          </span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div className="max-w-md mx-auto text-center mb-8 p-4 bg-muted/50 rounded-lg animate-fade-in">
                  <p className="text-muted-foreground">
                    No pages found matching "{searchQuery}". Try a different search term.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">
              Popular Pages
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group flex flex-col items-center p-6 bg-card rounded-xl border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-semibold text-foreground text-center text-sm mb-1">
                      {link.title}
                    </h3>
                    <p className="text-xs text-muted-foreground text-center">
                      {link.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still Need Help?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Our team is here to support you. Reach out and we'll help you find what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="px-8">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
