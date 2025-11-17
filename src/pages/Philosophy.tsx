import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Utensils, Users, Scale, Shield, Sparkles, CheckCircle } from "lucide-react";

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

      {/* HAES Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Intuitive Eating Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
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
                  Intuitive Eating is an approach developed to help people heal from the side effects of chronic dieting. An intuitive eater is a person who makes food choices without experiencing guilt, honors hunger, respects fullness and enjoys the pleasure of eating.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary mb-3">10 Principles:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {intuitiveEatingPrinciples.map((principle, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-accent font-semibold flex-shrink-0">{index + 1}.</span>
                        <span className="text-foreground/80">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fat Acceptance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="w-20 h-20 text-accent" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  Fat Acceptance & Body Positivity
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  There is nothing bad, wrong, or unhealthy about being fat! Fat is a word that has been vilified by culture, media, and medical teachings. As a result, people in larger bodies have been made to feel shame about their bodies.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary mb-3">Our commitment:</p>
                  {commitments.map((commitment, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/80">{commitment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Diet Approach Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-20 h-20 text-accent" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  Non-Diet Approach
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Diets don't work. In fact, they're a major cause of eating disorders. We help you break free from diet culture and develop a healthy, sustainable relationship with food and your body. Our approach rejects restriction and embraces nourishment, flexibility, and food freedom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trauma-Informed Care Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-20 h-20 text-accent" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  Trauma-Informed Care
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We understand that eating disorders often develop as coping mechanisms for deeper emotional wounds—childhood trauma, societal pressures, identity struggles, and more. Our trauma-informed approach creates safety, builds trust, and supports healing at the deepest level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LGBTQIA+ Affirming Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-20 h-20 text-accent" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  LGBTQIA+ Affirming
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Your identity is valid and valued here. We provide affirming, inclusive care for all gender identities and sexual orientations. We celebrate who you are and create a space where you can be fully yourself as you heal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience compassionate, body-positive care
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to work with a team that truly understands? Let's talk about how we can support your healing journey.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
            Book Your Consultation
          </Button>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Philosophy;