import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, User, Apple, Users, Heart, Phone, ExternalLink } from "lucide-react";

const Services = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
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
          
          {/* Featured LGBTQIA+ Group */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-8 md:p-12 rounded-lg border-2 border-purple-200 dark:border-purple-800 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-purple-900 dark:text-purple-100">
                LGBTQIA+ Eating Disorder Support Group
              </h3>
            </div>
            
            <p className="text-xl font-semibold mb-6 text-purple-800 dark:text-purple-200">
              A Safe, Affirming Space for Healing
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/50 dark:bg-black/20 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-purple-900 dark:text-purple-100">Group Details:</h4>
                <ul className="space-y-2">
                  <li><strong>When:</strong> Every Thursday evening from 6:00–7:15 PM</li>
                  <li><strong>Where:</strong> Virtual (link provided at sign-up)</li>
                  <li><strong>Who:</strong> Adults 18 and up, all genders welcome</li>
                  <li><strong>Cost:</strong> $40 per session</li>
                  <li className="text-sm italic">No one turned away for lack of funds • OHP accepted</li>
                </ul>
              </div>
              
              <div className="bg-white/50 dark:bg-black/20 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-purple-900 dark:text-purple-100">Facilitator:</h4>
                <p className="mb-4">
                  <strong>Katie Gregg (she/her)</strong>, counseling student intern
                </p>
                <p className="text-sm">
                  Katie is committed to creating a supportive environment where every member feels seen and valued. She provides affirming, inclusive care for LGBTQIA+ individuals navigating eating disorders and body image challenges.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <a href="tel:+13607264141">
                  <Phone className="w-5 h-5 mr-2" />
                  360-726-4141
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <p className="mt-6 text-xl font-bold text-center text-purple-900 dark:text-purple-100">
              You are welcome here—just as you are.
            </p>
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

      <Footer />
    </div>
  );
};

export default Services;
