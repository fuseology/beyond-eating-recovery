import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Check, User, Apple, Users, Heart, Phone, ExternalLink } from "lucide-react";

const Services = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
       "@id": "https://www.beyondeatingrecovery.com/services#webpage",
       "url": "https://www.beyondeatingrecovery.com/services",
       "name": "Eating Disorder Treatment Services | Beyond Eating Recovery",
       "description": "Comprehensive eating disorder treatment: individual therapy, group therapy, nutrition counseling, family therapy, and virtual care in Portland & Vancouver.",
       "specialty": "Eating Disorder Treatment",
       "about": {
         "@type": "MedicalBusiness",
         "@id": "https://www.beyondeatingrecovery.com/#organization"
       }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.beyondeatingrecovery.com/services#individual-therapy",
      "name": "Individual Eating Disorder Therapy",
      "description": "One-on-one therapy sessions with specialized eating disorder therapists using evidence-based approaches including CBT-E, DBT, and trauma-informed care.",
      "serviceType": "Mental Health Therapy",
      "category": "Eating Disorder Treatment",
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Beyond Eating Recovery",
        "telephone": "+1-360-726-4141",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1235 SE Division Street, Suite 104",
          "addressLocality": "Portland",
          "addressRegion": "OR",
          "postalCode": "97202",
          "addressCountry": "US"
        }
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Oregon" },
        { "@type": "AdministrativeArea", "name": "Washington" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Individual Therapy Sessions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Individual Therapy Session (50-55 minutes)"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.beyondeatingrecovery.com/services#nutrition-counseling",
      "name": "Nutrition Counseling for Eating Disorders",
      "description": "Dietitian-led nutrition therapy using Intuitive Eating and Health At Every Size (HAES) principles to support eating disorder recovery.",
      "serviceType": "Nutrition Therapy",
      "category": "Eating Disorder Treatment",
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Beyond Eating Recovery",
        "telephone": "+1-360-726-4141",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1235 SE Division Street, Suite 104",
          "addressLocality": "Portland",
          "addressRegion": "OR",
          "postalCode": "97202",
          "addressCountry": "US"
        }
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Oregon" },
        { "@type": "AdministrativeArea", "name": "Washington" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.beyondeatingrecovery.com/services#group-therapy",
      "name": "Group Therapy for Eating Disorders",
      "description": "Supportive group therapy sessions for eating disorder recovery and body image healing, providing community and shared experiences.",
      "serviceType": "Group Therapy",
      "category": "Eating Disorder Treatment",
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Beyond Eating Recovery",
        "telephone": "+1-503-868-9434"
      },
      "areaServed": [
        { "@type": "City", "name": "Portland" },
        { "@type": "City", "name": "Vancouver" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.beyondeatingrecovery.com/services#telehealth",
      "name": "Virtual Eating Disorder Therapy",
      "description": "Telehealth therapy sessions for eating disorder treatment available throughout Oregon and Washington states.",
      "serviceType": "Telehealth Mental Health Services",
      "category": "Eating Disorder Treatment",
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Beyond Eating Recovery",
        "telephone": "+1-503-868-9434"
      },
      "areaServed": [
        { "@type": "State", "name": "Oregon" },
        { "@type": "State", "name": "Washington" }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Telehealth",
        "availableLanguage": "English"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.beyondeatingrecovery.com/services#family-therapy",
      "name": "Family Therapy for Eating Disorders",
      "description": "Family-based treatment and support to help families understand and support their loved one's eating disorder recovery journey.",
      "serviceType": "Family Therapy",
      "category": "Eating Disorder Treatment",
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Beyond Eating Recovery",
        "telephone": "+1-503-868-9434"
      },
      "areaServed": [
        { "@type": "State", "name": "Oregon" },
        { "@type": "State", "name": "Washington" }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Eating Disorder Treatment Services | Individual, Group & Nutrition Therapy</title>
        <meta 
          name="description" 
          content="Comprehensive eating disorder treatment in Portland & Vancouver: individual therapy, group therapy, nutrition counseling, family therapy, and virtual care. Evidence-based, compassionate support." 
        />
        <meta name="keywords" content="eating disorder therapy Portland, group therapy eating disorders, nutrition counseling Vancouver WA, virtual eating disorder treatment, family therapy eating disorders, telehealth therapy Oregon" />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <BreadcrumbSchema />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Treatment Options for Your Recovery Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Comprehensive, compassionate care tailored to your unique needs
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/80 leading-relaxed max-w-4xl mx-auto">
            At Beyond Eating Recovery, we offer multiple pathways to healing. Whether you're seeking individual therapy, nutrition counseling, group support, or a combination of services—we're here to help you find freedom from eating disorders and build a peaceful relationship with food and your body.
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('individual-therapy')}
              variant="secondary" 
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              Individual Therapy
            </Button>
            <Button 
              onClick={() => scrollToSection('dietitian-services')}
              variant="secondary" 
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              Dietitian Services
            </Button>
            <Button 
              onClick={() => scrollToSection('group-therapy')}
              variant="secondary" 
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              Group Therapy
            </Button>
            <Button 
              onClick={() => scrollToSection('good-faith-estimate')}
              variant="secondary" 
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              Good Faith Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Finding the Right Treatment for You
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed mb-12">
            <p>
              Recovery from eating disorders isn't one-size-fits-all. Everyone's journey is unique, and the treatment that works best for you depends on your specific needs, challenges, and goals.
            </p>
            
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">At Beyond Eating Recovery, we offer:</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Individual Therapy</h4>
                  <p className="text-sm text-foreground/80">One-on-one counseling with experienced eating disorder specialists</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Apple className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Dietitian Services</h4>
                  <p className="text-sm text-foreground/80">Nutrition counseling using Intuitive Eating and HAES® principles</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Group Therapy</h4>
                  <p className="text-sm text-foreground/80">Supportive community-based healing with peers who understand</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <p className="font-semibold mb-3">Integrated Care</p>
                <p className="text-base text-foreground/80">Coordinated treatment combining therapy, nutrition, and group support</p>
              </div>
            </div>
            
            <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">All of our services are grounded in:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Health At Every Size® (HAES®) philosophy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Intuitive Eating framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Trauma-informed, affirming care</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Non-diet, weight-neutral approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Cultural humility and social justice values</span>
                </li>
              </ul>
            </div>
            
            <p className="text-center italic">
              Scroll down to explore each option in detail and discover which path—or combination of paths—is right for you.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Therapy Section */}
      <section id="individual-therapy" className="py-16 md:py-24 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Individual Therapy: Personalized Support for Deep Healing
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Have You Been Struggling with an Eating Disorder, but Too Afraid to Ask for Help?
              </h3>
              
              <p className="text-lg mb-8">
                We offer individual therapy for those who suffer with eating disorders and related challenges.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-primary">Conditions We Treat:</h4>
                  <ul className="space-y-2">
                    {[
                      "Binge Eating Disorder (Compulsive Overeating)",
                      "Bulimia Nervosa",
                      "Anorexia Nervosa",
                      "Emotional Eating",
                      "Body Image Issues and Body Shame",
                      "Excessive Exercise and Compulsive Movement",
                      "History of Childhood Abuse (as it relates to eating disorders)",
                      "Overeating and Food Preoccupation"
                    ].map((condition, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold text-lg mb-4">As your therapist, I will help you discover how to:</h4>
                  <ul className="space-y-3">
                    {[
                      "Eat and enjoy the foods you really love, without worrying about gaining weight",
                      "Accept and even like your body",
                      "Find and maintain your natural healthy weight by uncovering the underlying causes for your behaviors",
                      "Focus on and improve your relationships by moving away from blaming food and your body",
                      "Learn to like yourself—your whole self"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-6 h-6 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/about">Meet Our Therapists</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dietitian Services */}
      <section id="dietitian-services" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Dietitian Services: Nutrition Counseling That Heals Your Relationship with Food
          </h2>
          
          <div className="space-y-8">
            <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent">
              <h4 className="text-xl font-bold text-primary mb-6">
                A dietitian can help you follow an Intuitive Eating and Health At Every Size® framework to:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Make peace with food and ditch dieting",
                  "Stop the restrict-binge cycle",
                  "Re-learn your internal hunger and fullness cues",
                  "Regain the freedom to include a variety of foods",
                  "Learn how to adequately nourish your body",
                  "Feel satisfied with your meals",
                  "Build trust in your body's natural ability to self-regulate",
                  "Stress less about food and enjoy life more"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/about">Meet Our Dietitians</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:+13607264141">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 360-726-4141
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Group Therapy */}
      <section id="group-therapy" className="py-16 md:py-24 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Group Therapy: Healing in Community
          </h2>
          
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Group therapy offers a unique opportunity to connect with others who understand your experience. 
            Sharing your journey in a supportive community can accelerate healing and reduce feelings of isolation.
          </p>

          {/* No Active Groups Notice */}
          <div className="bg-card p-8 md:p-12 rounded-lg border shadow-sm max-w-2xl mx-auto text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              No Active Groups at This Time
            </h3>
            <p className="text-muted-foreground mb-8">
              We currently do not have any active groups. Please contact us if you are interested in Group Therapy—we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:+13607264141">
                  <Phone className="w-5 h-5 mr-2" />
                  360-726-4141
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Good Faith Estimate */}
      <section id="good-faith-estimate" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Good Faith Estimate of Costs: Your Rights and Protections
          </h2>
          
          <div className="space-y-8">
            <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
              <p className="text-lg">
                As part of the No Surprises Act, you have important rights regarding healthcare costs. We are required to provide a Good Faith Estimate of costs for our services, and you have protections if you are billed more than the estimate.
              </p>
            </div>

            <div className="bg-accent/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">For More Information</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="border-2 border-primary">
                  <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer">
                    Visit cms.gov/nosurprises
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="tel:+18003681019">
                    <Phone className="w-5 h-5 mr-2" />
                    (800) 368-1019
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Recovery Journey?
          </h2>
          
          <p className="text-lg mb-10">
            Choosing to seek treatment is a courageous first step. We're here to support you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-6 h-auto">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-6 h-auto">
              <a href="tel:+13607264141">
                <Phone className="w-5 h-5 mr-2" />
                360-726-4141
              </a>
            </Button>
          </div>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Services;
