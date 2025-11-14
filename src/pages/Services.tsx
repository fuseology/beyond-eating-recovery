import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Home, Apple, Heart, Monitor, Brain, Shield, Sparkles, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Individual Therapy",
      description: "One-on-one counseling addressing your unique relationship with food and body image",
      details: "Modalities: CBT, DBT, Attachment Therapy",
      availability: "In-person & Virtual"
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Connect with others on similar recovery journeys in a safe, supportive environment",
      details: "Options: Process groups, skills groups, support groups",
      availability: "Weekly sessions available"
    },
    {
      icon: Home,
      title: "Family Therapy",
      description: "Healing happens in relationships. We help families understand and support recovery.",
      details: "Includes: Parent sessions, family education, communication skills",
      availability: "In-person & Virtual"
    },
    {
      icon: Apple,
      title: "Dietitian Services",
      description: "Registered Dietitians who understand eating disorders and use Intuitive Eating & HAES frameworks",
      details: "Services: Meal support, hunger/fullness awareness, nutrition counseling",
      availability: "Available for all clients"
    },
    {
      icon: Heart,
      title: "Body Image Workshops",
      description: "Intensive workshops focused on developing positive body image and self-acceptance",
      details: "Featured: \"Loveable At Any Size\" 3-day intensive",
      availability: "Quarterly workshops"
    },
    {
      icon: Monitor,
      title: "Virtual/Telehealth Services",
      description: "Secure, HIPAA-compliant video sessions for clients throughout Oregon and Washington",
      details: "Perfect for: Vancouver, WA residents and those who prefer virtual care",
      availability: "All services available virtually"
    }
  ];

  const specializedSupport = [
    { icon: Brain, text: "Co-occurring disorders (Depression, Anxiety, PTSD, BPD)" },
    { icon: Shield, text: "Trauma-informed care" },
    { icon: Sparkles, text: "LGBTQIA+ affirming therapy" },
    { icon: Users, text: "Men's eating disorder treatment" },
    { icon: User, text: "Adolescent & teen programs" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Eating Disorder Treatment Services
          </h1>
          <p className="text-xl text-white/90">
            In-person in Portland, OR | Virtual care for Vancouver, WA
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-center text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {service.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {service.availability}
                  </p>
                  <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Support */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Specialized Support
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {specializedSupport.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-lg text-foreground/80 pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Treatment Approach
          </h2>
          <p className="text-xl text-center max-w-4xl mx-auto leading-relaxed text-white/95">
            "We don't believe in diets or willpower. Real, lasting change comes from understanding what's driving these patterns and learning a new, kinder way to relate to food and your body."
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 shadow-xl">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Not sure which service is right for you?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Let's discuss your unique needs and find the best path forward together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Schedule a Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Verify Your Insurance
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <a href="tel:3607264141" className="text-primary font-semibold hover:underline text-lg">
                  360-726-4141
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;