import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Heart, Users, Sparkles, Shield, Calendar, MapPin, User, CheckCircle } from "lucide-react";
import workshopHero from "@/assets/workshop-hero.jpg";

const Workshop = () => {
  const experiences = [
    { icon: Heart, text: "Be your authentic self in a judgment-free space" },
    { icon: Users, text: "Connect deeply with other women on similar journeys" },
    { icon: Sparkles, text: "Receive unconditional acceptance and validation" },
    { icon: Shield, text: "Heal from past traumas and challenges" },
    { icon: Heart, text: "Develop greater self-empathy and compassion" },
    { icon: Users, text: "Learn to express emotions safely" },
    { icon: Sparkles, text: "Build lasting connections and support" }
  ];

  const attendees = [
    "Women struggling with body image",
    "Anyone recovering from an eating disorder",
    "Those seeking deeper self-acceptance",
    "Previous participants wanting to go deeper (highly encouraged!)"
  ];

  const faqs = [
    {
      question: "What should I bring?",
      answer: "Bring comfortable clothing, a journal if you like to write, an open heart, and your authentic self. We'll provide all materials needed for workshop activities."
    },
    {
      question: "What's the daily schedule?",
      answer: "Each day runs from 9:00 AM to 5:00 PM with breaks for lunch and connection time. The schedule includes group exercises, sharing circles, guided activities, and time for reflection."
    },
    {
      question: "Is this right for me?",
      answer: "If you're struggling with body image, self-acceptance, or recovering from an eating disorder, this workshop can be transformative. Call Anne at 360-726-4141 to discuss whether it's the right fit for you."
    },
    {
      question: "Can I attend if I've been before?",
      answer: "Absolutely! Previous participants are highly encouraged to return. Each time you participate, you will go deeper and get more healing benefit. The experience builds on itself."
    },
    {
      question: "What if I have questions?",
      answer: "Call Anne directly at 360-726-4141. She's happy to discuss the workshop, answer questions, and help you decide if it's right for you."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${workshopHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-accent/60" />
        
        <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
          <Badge variant="secondary" className="mb-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
            <Calendar className="w-4 h-4 mr-1" />
            Next Workshop: TBA
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Loveable At Any Size
          </h1>
          
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto text-white/95">
            A 3-Day Intensive Workshop for Deep Healing & Self-Acceptance
          </p>

          <a href="tel:3607264141">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-xl px-10 py-7 shadow-xl">
              <Phone className="w-6 h-6 mr-3" />
              Call to Register: 360-726-4141
            </Button>
          </a>
        </div>
      </section>

      {/* What Is This Workshop */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">
              What Is This Workshop?
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              This workshop is about being open and honest—being your real self, taking risks in a safe environment, deeply connecting with other women, fully receiving acceptance, validation, understanding, value and love from others, healing past traumas/challenges, greater empathy for yourself, letting your emotions out—and more!
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            What You'll Experience
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="border-2">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <experience.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-lg text-foreground/80 pt-2">{experience.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Who Should Attend?
            </h2>
            <div className="space-y-4 mb-8">
              {attendees.map((attendee, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg text-foreground/80">{attendee}</span>
                </div>
              ))}
            </div>
            <Card className="border-l-4 border-l-accent bg-accent/5">
              <CardContent className="pt-6">
                <p className="text-lg italic text-foreground/90">
                  "Each time you participate, you will go deeper and get more healing benefit. Really."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Workshop Details
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Format</h3>
                    <p className="text-white/90">3-Day Intensive</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-white/90">Portland, OR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <User className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Facilitator</h3>
                    <p className="text-white/90">Anne Cuthbert, MA, LPC, LMHC</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Group Size</h3>
                    <p className="text-white/90">Small, intimate groups</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              How to Register
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Call Anne directly to discuss the workshop and register:
            </p>
            <a href="tel:3607264141" className="inline-block mb-8">
              <div className="text-5xl font-bold text-accent hover:text-accent/80 transition-colors flex items-center gap-4 justify-center">
                <Phone className="w-12 h-12" />
                360-726-4141
              </div>
            </a>
            <p className="text-muted-foreground mb-6">or</p>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Send an Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border-2 rounded-lg px-6 bg-white"
                >
                  <AccordionTrigger className="hover:no-underline text-left">
                    <span className="text-lg font-semibold text-primary">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform your relationship with yourself
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            This could be the beginning of a profound shift in how you see and love yourself.
          </p>
          <a href="tel:3607264141">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 text-xl px-10 py-7">
              <Phone className="w-6 h-6 mr-3" />
              Call Today to Register
            </Button>
          </a>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Workshop;