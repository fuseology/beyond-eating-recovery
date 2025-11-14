import { Award, Heart, Users, Video, CreditCard } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Award,
      title: "Licensed Therapists",
      subtitle: "LPC, LMHC, LCSW"
    },
    {
      icon: Heart,
      title: "HAES Approach",
      subtitle: "Health At Every Size"
    },
    {
      icon: Users,
      title: "LGBTQIA+ Affirming",
      subtitle: "Inclusive Care"
    },
    {
      icon: Video,
      title: "Virtual & In-Person",
      subtitle: "Flexible Options"
    },
    {
      icon: CreditCard,
      title: "Insurance Accepted",
      subtitle: "Verify Coverage"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <indicator.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-primary mb-1">
                {indicator.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {indicator.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
