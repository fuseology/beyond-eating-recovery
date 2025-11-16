import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, LogIn, Compass, DollarSign, MessageSquare, Building, Search } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "understanding",
      title: "Understanding Eating Disorders",
      icon: Brain,
      count: 8,
      samples: ["What is an eating disorder?", "Do I have an eating disorder?", "Types of eating disorders"],
    },
    {
      id: "getting-started",
      title: "Getting Started with Treatment",
      icon: LogIn,
      count: 6,
      samples: ["How do I know if I need help?", "What's the first step?", "What happens in the first session?"],
    },
    {
      id: "treatment-approach",
      title: "Our Treatment Approach",
      icon: Compass,
      count: 7,
      samples: ["What is HAES®?", "What is Intuitive Eating?", "How long does treatment take?"],
    },
    {
      id: "insurance",
      title: "Insurance & Financial Information",
      icon: DollarSign,
      count: 5,
      samples: ["Do you accept insurance?", "What does treatment cost?", "What is a Good Faith Estimate?"],
    },
    {
      id: "therapy",
      title: "Therapy & Counseling Questions",
      icon: MessageSquare,
      count: 6,
      samples: ["What happens in therapy?", "Individual vs. group therapy?", "Teletherapy options?"],
    },
    {
      id: "about-practice",
      title: "About Our Practice",
      icon: Building,
      count: 4,
      samples: ["Who are your therapists?", "Where are you located?", "How do I contact you?"],
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Get answers to common questions about eating disorders, treatment, and our practice
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
              We understand that seeking help for eating disorders can feel overwhelming. You likely have many questions about treatment, what to expect, how it works, and whether it's right for you. We've compiled answers to the most common questions we hear. If you don't find what you're looking for, please don't hesitate to contact us.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="secondary"
                  onClick={() => scrollToSection(category.id)}
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Browse Questions by Topic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{category.count} questions</span>
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {category.samples.map((sample, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {sample}</li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => scrollToSection(category.id)}
                      className="w-full"
                      variant="outline"
                    >
                      View Questions
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Category 1: Understanding Eating Disorders */}
          <div id="understanding" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-primary">Understanding Eating Disorders</h2>
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="q1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What is an eating disorder?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>An eating disorder is a serious mental health condition characterized by persistent disturbances in eating behaviors, thoughts, and emotions. Eating disorders involve a preoccupation with food, body weight, and shape that significantly impacts physical health, emotional well-being, and daily functioning.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Common characteristics include:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Intense fear of weight gain or being 'fat'</li>
                      <li>Distorted body image</li>
                      <li>Using food (restricting, binging, purging) to cope with emotions</li>
                      <li>Obsessive thoughts about food, calories, weight, or body shape</li>
                      <li>Rituals around eating or exercise</li>
                      <li>Social isolation related to eating or body concerns</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Eating disorders are NOT:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>A choice or phase</li>
                      <li>About vanity or wanting attention</li>
                      <li>Just about food or weight</li>
                      <li>Something you can just 'get over' with willpower</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">They ARE:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Complex mental health conditions</li>
                      <li>Often rooted in trauma, genetics, and environmental factors</li>
                      <li>Treatable with proper support</li>
                      <li>Serious conditions that require professional help</li>
                    </ul>
                  </div>

                  <p className="italic">If you're questioning whether your relationship with food and your body is healthy, that question itself is often a sign that it's worth exploring further with a professional.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do I have an eating disorder? How do I know if I need help?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Many people struggle with the question of whether their eating or body image concerns 'count' as an eating disorder. You don't need a formal diagnosis to benefit from help.</p>
                  
                  <p className="font-semibold text-foreground">Consider seeking support if you:</p>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Regarding Food & Eating:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Find yourself at the fridge over and over again, never full and never fully satisfied</li>
                      <li>Think about food and eating much more than you want to or know you should</li>
                      <li>Eat in secret or hide food</li>
                      <li>Feel out of control around certain foods</li>
                      <li>Have rigid food rules (good/bad foods, forbidden foods, must eat at certain times)</li>
                      <li>Engage in binge eating episodes</li>
                      <li>Restrict food intake severely or skip meals regularly</li>
                      <li>Feel intense guilt or shame after eating</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Regarding Body Image:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Obsess over your weight, shape, or appearance</li>
                      <li>Avoid mirrors or, conversely, check your appearance constantly</li>
                      <li>Compare your body to others constantly</li>
                      <li>Avoid social situations due to body shame</li>
                      <li>Believe your worth is determined by your weight or appearance</li>
                      <li>Experience significant distress about your body</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground mt-4">The bottom line:</p>
                  <p>If your relationship with food or your body is causing you distress, interfering with your life, or occupying significant mental space—you deserve support. You don't have to wait until things get 'bad enough.' Early intervention leads to better outcomes.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What are the different types of eating disorders?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Eating disorders exist on a spectrum and can look different for different people. We treat all types of eating disorders and disordered eating patterns.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">Anorexia Nervosa:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Severe restriction of food intake</li>
                      <li>Intense fear of weight gain</li>
                      <li>Distorted body image</li>
                      <li>Significantly low body weight relative to individual needs</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Bulimia Nervosa:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Cycles of binge eating followed by compensatory behaviors</li>
                      <li>Purging behaviors (vomiting, laxatives, diuretics, excessive exercise)</li>
                      <li>Self-evaluation heavily influenced by body shape and weight</li>
                      <li>Can occur at any body size</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Binge Eating Disorder (BED):</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Recurrent episodes of eating large amounts of food</li>
                      <li>Feeling out of control during binges</li>
                      <li>Significant distress about binge eating</li>
                      <li>NO regular compensatory behaviors (unlike bulimia)</li>
                      <li>Most common eating disorder in the US</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Other Types:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>ARFID (Avoidant/Restrictive Food Intake Disorder)</li>
                      <li>OSFED (Other Specified Feeding or Eating Disorder)</li>
                      <li>Disordered eating patterns</li>
                      <li>Compulsive overeating</li>
                      <li>Emotional eating</li>
                    </ul>
                  </div>

                  <p className="italic font-semibold text-foreground">Important note: You don't need to fit perfectly into a diagnostic category to deserve help. If you're struggling with food, eating, or body image—we're here to support you.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Continue with remaining questions in this category... */}
              
            </Accordion>
          </div>

          {/* Category 2: Getting Started */}
          <div id="getting-started" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-primary">Getting Started with Treatment</h2>
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="q9" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">How do I get started? What's the first step?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Taking the first step toward recovery can feel overwhelming, but we've made the process as simple and welcoming as possible.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Step 1: Contact Us</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Call us: <a href="tel:360-726-4141" className="text-primary hover:underline">360-726-4141</a></li>
                      <li>Email us through our contact form</li>
                      <li>We'll respond within 1-2 business days</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Step 2: Initial Consultation</p>
                    <p>We'll schedule a consultation to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Learn about your concerns and goals</li>
                      <li>Explain our treatment approach</li>
                      <li>Discuss which services might be right for you</li>
                      <li>Answer your questions</li>
                      <li>Determine if we're a good fit</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Step 3: Schedule Your First Appointment</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Match you with an appropriate therapist or dietitian</li>
                      <li>Schedule your first full session</li>
                      <li>Send intake paperwork</li>
                    </ul>
                  </div>

                  <p className="italic">You don't have to have everything figured out. Just reach out, and we'll guide you through the process.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Add more questions... */}

            </Accordion>
          </div>

          {/* Category 3: Treatment Approach */}
          <div id="treatment-approach" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-primary">Our Treatment Approach</h2>
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="q15" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What is Health At Every Size® (HAES®)? Why do you use this approach?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Health At Every Size® (HAES®) is a weight-neutral, evidence-based approach to health that focuses on well-being rather than weight loss.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Core HAES® principles:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Weight Inclusivity:</strong> Accept and respect body diversity</li>
                      <li><strong>Health Enhancement:</strong> Support practices that improve well-being</li>
                      <li><strong>Respectful Care:</strong> End weight discrimination and bias</li>
                      <li><strong>Eating for Well-being:</strong> Flexible eating based on hunger and satisfaction</li>
                      <li><strong>Life-Enhancing Movement:</strong> Physical activity for enjoyment, not weight loss</li>
                    </ul>
                  </div>

                  <p>
                    To learn more about our HAES® approach, visit our{" "}
                    <Link to="/health-at-every-size" className="text-primary hover:underline font-semibold">
                      Health At Every Size® page
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q17" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">How long will treatment take?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>This is one of the most common questions—and also one of the most difficult to answer with a specific timeline because recovery is highly individual.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">General timelines (approximate):</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Symptom reduction:</strong> 3-6 months - Many clients notice decreased eating disorder symptoms</li>
                      <li><strong>Significant improvement:</strong> 6-12 months - Substantial progress in eating patterns, body image, coping skills</li>
                      <li><strong>Full recovery:</strong> 1-3+ years - Complete freedom from eating disorder thoughts and behaviors</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Important notes:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Recovery is non-linear with ups and downs</li>
                    <li>Quality matters more than speed</li>
                    <li>Session frequency decreases as you progress</li>
                    <li>You won't be in intensive therapy forever</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to End the Diet Cycle and Embrace Health At Every Size®?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            You don't have to spend another day trapped in diet culture, hating your body, or believing that your worth is determined by your weight.
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Our entire practice is built on HAES® principles. We're here to support you in this paradigm shift—from diet mentality to body liberation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Link to="/about">Meet Our HAES®-Aligned Team</Link>
            </Button>
          </div>
          <p className="mt-8 text-white/80">
            Questions? Call us at <a href="tel:360-726-4141" className="underline hover:text-white">360-726-4141</a> or{" "}
            <Link to="/contact" className="underline hover:text-white">contact us through our form</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
