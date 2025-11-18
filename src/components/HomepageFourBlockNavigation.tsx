import { Link } from "react-router-dom";
import { Users, Heart, FileText, Compass, ArrowRight } from "lucide-react";
import providersImage from "@/assets/nav-providers.jpg";
import servicesImage from "@/assets/nav-services.jpg";
import conditionsImage from "@/assets/nav-conditions.jpg";
import approachImage from "@/assets/nav-approach.jpg";

const HomepageFourBlockNavigation = () => {
  const cards = [
    {
      title: "Our Providers",
      description: "Meet our expert team of therapists and dietitians.",
      icon: Users,
      image: providersImage,
      link: "/about",
      ariaLabel: "Learn more about our providers and treatment team"
    },
    {
      title: "Our Services",
      description: "Individual therapy, nutrition support, and group programs.",
      icon: Heart,
      image: servicesImage,
      link: "/services",
      ariaLabel: "Learn more about our eating disorder treatment services"
    },
    {
      title: "Conditions We Treat",
      description: "Comprehensive treatment for all eating disorders.",
      icon: FileText,
      image: conditionsImage,
      link: "/conditions",
      ariaLabel: "Learn more about eating disorders and conditions we treat"
    },
    {
      title: "Our Approach",
      description: "Weight-neutral, compassionate, evidence-based care.",
      icon: Compass,
      image: approachImage,
      link: "/our-approach",
      ariaLabel: "Learn more about our treatment approach and philosophy"
    }
  ];

  return (
    <section 
      className="homepage-navigation-section py-16 md:py-20 bg-background"
      aria-labelledby="nav-section-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 
            id="nav-section-heading" 
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            How Can We Support Your Healing Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're seeking treatment, learning about eating disorders, or exploring our approach, we're here to help.
          </p>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Link
                key={card.title}
                to={card.link}
                className="nav-card group relative block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-3 focus:ring-accent focus:ring-offset-2"
                aria-label={card.ariaLabel}
              >
                <div className="card-image-container relative aspect-[4/3]">
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="card-overlay absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/75 group-hover:from-primary/50 group-hover:to-primary/85 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                    
                    {/* Icon */}
                    <div className="card-icon mb-4 text-accent transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-12 h-12" strokeWidth={2} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="card-title text-2xl font-bold text-white mb-3" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="card-description text-sm md:text-base text-white/90 leading-relaxed mb-4 max-w-[90%]" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}>
                      {card.description}
                    </p>
                    
                    {/* CTA */}
                    <span className="card-cta inline-flex items-center gap-2 text-accent font-semibold text-sm transition-transform duration-300 group-hover:translate-x-1">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomepageFourBlockNavigation;