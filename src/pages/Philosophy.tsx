import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Utensils, Users, Scale, Shield, Sparkles, CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const Philosophy = () => {
  const haesprinciples = [
    "Weight inclusivity",
    "Health enhancement",
    "Respectful care",
    "Eating for well-being",
    "Life-enhancing movement"
  ];

  const intuitiveEatingPrinciples = [
    "Reject the diet mentality",
    "Honor your hunger",
    "Make peace with food",
    "Challenge the food police",
    "Discover the satisfaction factor",
    "Feel your fullness",
    "Cope with emotions with kindness",
    "Respect your body",
    "Movement—feel the difference",
    "Honor your health with gentle nutrition"
  ];

  const commitments = [
    "We will never tell you to change your body size",
    "We will not prescribe a diet",
    "We will not shame your body",
    "We come in all shapes and sizes",
    "We appreciate you as you are"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            A Different Approach to Eating Disorder Recovery
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            We don't believe in diets, willpower, or changing your body. We believe in healing from the inside out.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Main Content Column */}
          <main className="space-y-12">
            {/* HAES Section */}
            <section>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center">
                    <Scale className="w-20 h-20 text-accent" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                    Health At Every Size (HAES)
                  </h2>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Health At Every Size (HAES) is a health-centered paradigm that focuses on total health and well-being, not weight. It promotes active living, eating well without dieting, and a nurturing environment that includes respect and acceptance for people of all sizes.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary mb-3">Key principles:</p>
                    {haesprinciples.map((principle, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground/80">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Card className="mt-8 border-l-4 border-l-accent bg-secondary/20">
                <CardContent className="pt-6">
                  <p className="text-lg italic text-foreground/90 leading-relaxed">
                    "HAES transformed not only how I practice, but how I live. When we stop focusing on changing bodies and start focusing on healing minds and hearts, real recovery becomes possible." 
                    <span className="block mt-2 font-semibold not-italic text-primary">— Anne Cuthbert, MA, LPC, LMHC</span>
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Intuitive Eating Section */}
            <section>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center">
                    <Utensils className="w-20 h-20 text-accent" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                    Intuitive Eating
                  </h2>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Intuitive Eating is a weight-neutral framework that teaches you to listen to your body's signals and make peace with food. Based on 10 key principles, it's backed by over 200+ research studies and helps you break free from diet culture.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary mb-3">The 10 Principles:</p>
                    {intuitiveEatingPrinciples.map((principle, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground/80">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* What We Don't Do Section */}
            <section>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-20 h-20 text-accent" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                    What We Don't Do
                  </h2>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Our approach is rooted in respect, compassion, and acceptance. Here's what you won't find at Beyond Eating Recovery:
                  </p>
                  <div className="space-y-2">
                    {commitments.map((commitment, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground/80">{commitment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Why This Approach Works Section */}
            <section>
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Sparkles className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                        Why This Approach Works
                      </h2>
                      <div className="space-y-4 text-foreground/80 leading-relaxed">
                        <p>
                          <strong className="text-primary">Decades of research</strong> show that diets don't work long-term. In fact, 95% of diets fail, and dieting is the #1 predictor of developing an eating disorder.
                        </p>
                        <p>
                          <strong className="text-primary">Our approach</strong> focuses on healing your relationship with food and your body—not changing your weight. When you stop trying to control your body and start listening to it, real transformation happens.
                        </p>
                        <p>
                          <strong className="text-primary">The evidence</strong> is clear: HAES-based approaches improve health markers (blood pressure, cholesterol), increase body satisfaction, and reduce disordered eating—all without weight loss goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Learn More CTA */}
            <section className="text-center">
              <Card className="bg-primary text-white border-primary">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Experience This Different Approach?
                  </h3>
                  <p className="text-lg mb-6 text-white/95 max-w-2xl mx-auto">
                    Let's talk about how HAES and Intuitive Eating can help you find freedom from food and body struggles.
                  </p>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="/contact">Schedule Your Free Consultation</a>
                  </Button>
                </CardContent>
              </Card>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Anne Cuthbert Profile */}
            <Card className="border-l-4 border-primary">
              <CardHeader>
                <CardTitle className="text-xl">Meet Anne Cuthbert</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={anneCuthbertPhoto} 
                  alt="Anne Cuthbert, MA, LPC, LMHC - Founder and Clinical Director" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="text-center">
                  <h3 className="font-bold text-lg">Anne Cuthbert, MA, LPC, LMHC</h3>
                  <p className="text-sm text-muted-foreground">Founder & Clinical Director</p>
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mt-2">
                    20+ Years Experience
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Anne is a licensed therapist specializing in eating disorders and body image with over 20 years of experience. As someone with personal recovery experience, Anne brings deep empathy and understanding to her work.
                </p>
                <Button className="w-full bg-[#f49a39] hover:bg-[#e38929]" asChild>
                  <Link to="/about/anne-cuthbert">Learn More About Anne</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Book CTA */}
            <Card className="bg-[#FFF4E6]">
              <CardHeader>
                <CardTitle className="text-xl text-[#1a428a]">If Your Hunger Could Talk</CardTitle>
                <p className="text-sm text-muted-foreground">Real Steps to Finding Freedom from Food & Weight Obsession</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={bookCover} 
                  alt="If Your Hunger Could Talk book cover by Anne Cuthbert" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground">
                  Anne's book explores the deeper meanings behind eating struggles and offers compassionate guidance for healing your relationship with food.
                </p>
                <div className="text-center">
                  <a 
                    href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[#f49a39] hover:underline"
                  >
                    View on Amazon →
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Consultation */}
            <Card className="bg-[#1a428a] text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Ready to Start Your Journey?
                </CardTitle>
                <p className="text-sm text-white/90">Free 15-Minute Consultation</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-white/90">
                  Take the first step toward freedom. Schedule a free consultation to learn how we can support your healing journey.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="tel:+13039223262" className="hover:underline">(303) 922-3262</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div>Denver, CO</div>
                  </div>
                </div>
                <Button className="w-full bg-[#f49a39] hover:bg-[#e38929]" asChild>
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Philosophy;