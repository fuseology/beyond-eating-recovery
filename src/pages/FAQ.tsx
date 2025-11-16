import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, LogIn, Compass, DollarSign, MessageSquare, Search } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "understanding",
      title: "Understanding Eating Disorders",
      icon: Brain,
      count: 3,
      samples: ["What is an eating disorder?", "Do I have an eating disorder?", "Types of eating disorders"],
    },
    {
      id: "getting-started",
      title: "Getting Started with Treatment",
      icon: LogIn,
      count: 1,
      samples: ["How do I get started?", "What's the first step?"],
    },
    {
      id: "treatment-approach",
      title: "Our Treatment Approach",
      icon: Compass,
      count: 5,
      samples: ["What is HAES®?", "Will you give me a meal plan?", "Do you weigh clients?"],
    },
    {
      id: "insurance",
      title: "Insurance & Financial Information",
      icon: DollarSign,
      count: 5,
      samples: ["Do you accept insurance?", "What does treatment cost?", "What is a Good Faith Estimate?"],
    },
    {
      id: "what-to-expect",
      title: "What to Expect in Treatment",
      icon: MessageSquare,
      count: 3,
      samples: ["Is therapy confidential?", "Support between sessions?", "Can I switch therapists?"],
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
                  <p className="italic">If you're questioning whether your relationship with food and your body is healthy, that question itself is often a sign that it's worth exploring further with a professional.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do I have an eating disorder? How do I know if I need help?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>You don't need a formal diagnosis to benefit from help. If your relationship with food or your body is causing you distress, interfering with your life, or occupying significant mental space—you deserve support. You don't have to wait until things get 'bad enough.'</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What are the different types of eating disorders?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>We treat Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder (BED), ARFID, OSFED, and all forms of disordered eating and emotional eating patterns.</p>
                </AccordionContent>
              </AccordionItem>
              
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
                  <p>Call us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> for an initial consultation. We'll learn about your concerns, explain our approach, and match you with the right provider.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          {/* Category 3: Treatment Approach */}
          <div id="treatment-approach" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-primary">Our Treatment Approach</h2>
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="q15" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What is Health At Every Size® (HAES®)?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>HAES® is a weight-neutral, evidence-based approach focusing on well-being rather than weight loss. <Link to="/health-at-every-size" className="text-primary hover:underline font-semibold">Learn more about HAES®</Link></p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q17" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">How long will treatment take?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Recovery timelines vary widely: 3-6 months for symptom reduction, 6-12 months for significant improvement, 1-3+ years for full recovery. It's highly individual based on many factors.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q19" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Will you give me a meal plan or tell me what to eat?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">No—we do NOT provide prescriptive meal plans. Here's why:</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">Why we don't use traditional meal plans:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Meal plans reinforce the problem:</strong> External rules about eating are PART of what creates eating disorders. They teach you NOT to trust yourself and keep you dependent on outside control.</li>
                      <li><strong>They don't address root causes:</strong> They focus on symptoms (what you eat) not causes (why you struggle with food).</li>
                      <li><strong>One-size-fits-all doesn't work:</strong> Your body's needs are unique and constantly changing. Rigid plans can't account for hunger variability or life circumstances.</li>
                      <li><strong>Our goal is AUTONOMY:</strong> We want you to trust YOURSELF, not a meal plan. True recovery means internal guidance, not external rules.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mt-4">What we do instead:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Intuitive Eating guidance:</strong> Learn to recognize and honor hunger and fullness, give yourself unconditional permission to eat</li>
                      <li><strong>General nutrition education:</strong> Understanding how foods affect your body using gentle nutrition principles (not rigid rules)</li>
                      <li><strong>Structured flexibility:</strong> For those very disconnected from hunger/fullness, temporary general structure as a bridge while rebuilding internal awareness</li>
                      <li><strong>Meal support:</strong> Working through challenging food situations, addressing fear foods gradually, practical strategies individualized to YOU</li>
                      <li><strong>Addressing emotional roots:</strong> Why you struggle with food—emotional patterns, using food to cope, perfectionism</li>
                      <li><strong>Building coping skills:</strong> Managing emotions without food, tolerating discomfort, self-compassion</li>
                    </ul>
                  </div>

                  <p className="italic mt-4">We're here to help you learn to eat intuitively, trust your body, and make food decisions based on YOUR needs—not to give you another set of rules to follow. This may feel scary at first if you're used to external control, but the freedom you gain is worth it.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q20" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do you weigh clients? What if I don't want to be weighed?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Our practice is weight-neutral and HAES®-aligned—weight is NOT a focus of treatment.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">Our standard practice:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We do NOT routinely weigh clients—weight is not a measure of health or recovery progress</li>
                      <li>You can be weighed "blind" (backwards, without seeing the number) if medically necessary for monitoring</li>
                      <li>You can decline weighing—we respect your boundaries and you always have the right to refuse</li>
                      <li>Weight is not discussed or focused on in sessions</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mt-4">Why we don't focus on weight:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Weight is not a reliable indicator of health</li>
                      <li>Weight focus reinforces eating disorders and creates anxiety</li>
                      <li>Weight-neutral approach works better—reduces shame, improves outcomes</li>
                      <li>Your body will find its natural weight when you stop restricting and binging</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mt-4">What we focus on INSTEAD:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Behaviors:</strong> Eating patterns, binge/purge frequency, exercise balance</li>
                      <li><strong>Physical health:</strong> Energy levels, digestion, strength, medical markers if needed</li>
                      <li><strong>Mental well-being:</strong> Mood, anxiety, food thoughts, body image</li>
                      <li><strong>Relationship with food and body:</strong> Trust with hunger/fullness, food flexibility, body acceptance</li>
                      <li><strong>Quality of life:</strong> Engaging in relationships and activities, pursuing values</li>
                    </ul>
                  </div>

                  <p className="italic mt-4">You will not be pressured to weigh yourself or know your weight. Our focus is on your well-being, recovery, and building a peaceful relationship with your body—not on numbers on a scale.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q21" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Can I see a therapist and a dietitian at the same time?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Yes—and we strongly recommend it! Combined treatment is most effective for eating disorders.</p>
                  
                  <p>Eating disorders have both psychological/emotional and behavioral/nutritional dimensions. Therapists and dietitians address different but overlapping aspects.</p>

                  <div>
                    <p className="font-semibold text-foreground mt-4">Therapists focus on:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Root causes (trauma, perfectionism, emotional avoidance)</li>
                      <li>Emotional coping skills and processing</li>
                      <li>Body image work and challenging shame</li>
                      <li>Mental health concerns (depression, anxiety)</li>
                      <li>Why you use food the way you do</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mt-4">Dietitians focus on:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Rebuilding trust with hunger and fullness signals</li>
                      <li>Nutrition education and food flexibility</li>
                      <li>Challenging food rules and fears</li>
                      <li>Intuitive Eating principles</li>
                      <li>Practical meal support</li>
                      <li>How to nourish your body</li>
                    </ul>
                  </div>

                  <p className="mt-4">Together, they provide comprehensive care addressing both the "why" and "how" of recovery. They coordinate (with your consent) to ensure consistent messaging and faster progress.</p>
                  
                  <p className="italic mt-4">If you can only afford one provider initially, we can discuss which to start with based on your needs. The goal is to add the other when possible for most effective treatment.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          {/* Category 4: Insurance & Financial */}
          <div id="insurance" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-primary">Insurance & Financial Information</h2>
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="q22" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do you accept insurance? Which plans?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Yes, we accept many insurance plans for both therapy and dietitian services. Coverage varies by plan and provider.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">What we commonly accept:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Most major insurance plans</li>
                      <li>PPO plans (typically better coverage for out-of-network)</li>
                      <li>Medicare (select providers)</li>
                      <li>Oregon Health Plan/Medicaid (limited availability)</li>
                    </ul>
                  </div>

                  <p>Call us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> with your insurance info and we'll verify your coverage, explain your benefits, and estimate your out-of-pocket costs.</p>
                  
                  <p>We provide detailed superbills for out-of-network reimbursement and help with authorization processes.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q23" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">How much does treatment cost if I don't use insurance?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Self-pay rates vary by provider and service type. Contact us for specific pricing information.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">Financial assistance options:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Sliding scale fees (limited availability based on demonstrated need)</li>
                      <li>Payment plans to spread costs over time</li>
                      <li>HSA/FSA accepted (use pre-tax dollars, saves 20-40%)</li>
                      <li>Out-of-network insurance reimbursement (PPO plans often reimburse 50-80%)</li>
                      <li>Group therapy (more affordable than individual)</li>
                      <li>Reduced session frequency options</li>
                    </ul>
                  </div>

                  <p>Don't let cost concerns prevent you from reaching out. We'll work with you to explore all possible options for making treatment accessible. Call <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> to discuss your situation.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q24" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What is a Good Faith Estimate?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>A Good Faith Estimate is a document showing the expected costs of your healthcare services, required by federal law (the No Surprises Act).</p>
                  
                  <p>You'll receive an estimate before starting treatment showing:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Expected service types and frequency</li>
                    <li>Cost per session</li>
                    <li>Total expected costs</li>
                  </ul>

                  <p className="mt-4"><strong>Your rights:</strong> If you're billed $400 or more over the Good Faith Estimate, you can dispute the bill through a federal resolution process.</p>
                  
                  <p>Learn more: <a href="http://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cms.gov/nosurprises</a> or call (800) 368-1019</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q25" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do you offer sliding scale or reduced fees?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Yes, we offer a limited number of sliding scale spots for clients experiencing financial hardship.</p>
                  
                  <p>Sliding scale is based on demonstrated financial need (household income, dependents, expenses, etc.). Availability varies as spots fill quickly.</p>

                  <div>
                    <p className="font-semibold text-foreground mt-4">Other affordable options:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Group therapy—significantly more affordable than individual</li>
                      <li>Reduced session frequency (every other week)</li>
                      <li>Payment plans to spread costs</li>
                      <li>Battle of the Binge self-study course</li>
                      <li>HSA/FSA to use pre-tax dollars</li>
                      <li>Out-of-network insurance reimbursement</li>
                    </ul>
                  </div>
                  
                  <p>Call <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> to discuss your financial situation and available options. We believe everyone deserves quality care.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q26" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Can I use my HSA or FSA for treatment?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Yes! HSAs (Health Savings Accounts) and FSAs (Flexible Spending Accounts) typically cover eating disorder treatment.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">What's typically covered:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Individual therapy with licensed mental health providers</li>
                      <li>Group therapy for medical/mental health conditions</li>
                      <li>Dietitian services (medical nutrition therapy for eating disorders)</li>
                      <li>Couples/family therapy (if related to eating disorder treatment)</li>
                      <li>Copays, deductibles, and coinsurance amounts</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mt-4">How to use your HSA/FSA:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Option 1:</strong> Use your HSA/FSA debit card at time of service</li>
                      <li><strong>Option 2:</strong> Pay out of pocket and submit receipts for reimbursement</li>
                    </ul>
                  </div>

                  <p className="mt-4">We provide detailed documentation with all required information for your HSA/FSA. <strong>Using pre-tax dollars saves you 20-40% depending on your tax bracket!</strong></p>
                  
                  <p className="italic">Questions? Contact your HSA/FSA administrator or our billing coordinator at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a>.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          {/* Category 5: What to Expect */}
          <div id="what-to-expect" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-primary">What to Expect in Treatment</h2>
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="q27" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Is therapy confidential? Who will know I'm in treatment?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Yes, therapy is confidential. What you share in therapy stays in therapy, with specific legal exceptions.</p>
                  
                  <p>Everything you share, the fact that you're in treatment, your diagnosis, and your records are protected by law. We cannot share information without your written permission.</p>

                  <div>
                    <p className="font-semibold text-foreground mt-4">Legal exceptions (we MUST break confidentiality):</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Imminent danger to self (serious, immediate suicide risk)</li>
                      <li>Imminent danger to others (credible, specific threat)</li>
                      <li>Child abuse or neglect</li>
                      <li>Elder or dependent adult abuse</li>
                      <li>Valid court orders</li>
                    </ul>
                  </div>

                  <p className="mt-4"><strong>Insurance note:</strong> Using insurance requires sharing your diagnosis and treatment information with the insurance company. This becomes part of your medical record. Some clients choose self-pay for complete privacy—we can discuss pros and cons.</p>
                  
                  <p className="italic mt-4">Your privacy is protected by federal law (HIPAA) and our professional ethics. Your therapy is a safe, private space. Questions about confidentiality? Ask during your first session.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q28" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What if I need support between sessions?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>For non-emergencies, email your provider or leave a voicemail at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a>. We respond within 24-48 business hours for brief check-ins or questions.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground mt-4">In crisis or emergency situations:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>CALL 988</strong> - Suicide & Crisis Lifeline (free, 24/7, confidential)</li>
                      <li><strong>CALL 911</strong> or go to nearest Emergency Room if in immediate danger</li>
                      <li><strong>NEDA Helpline:</strong> Call/Text (800) 931-2237</li>
                      <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                      <li><strong>Trevor Project (LGBTQIA+ Youth):</strong> 1-866-488-7386</li>
                    </ul>
                  </div>

                  <p className="mt-4">We'll help you develop between-session coping strategies and create a safety plan. If you frequently need crisis support, we can discuss increasing session frequency or whether more intensive treatment is appropriate.</p>
                  
                  <p className="italic">Most therapy actually happens BETWEEN sessions—practicing skills, trying new behaviors, reflecting on insights. Some discomfort is normal and part of growth.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q29" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Can I switch therapists if it's not a good fit?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Absolutely yes! Therapeutic fit is crucial to effective treatment, and we fully support switching if needed.</p>
                  
                  <p>Research shows the therapeutic relationship is one of the strongest predictors of treatment success. "Fit" matters as much as or more than specific techniques used.</p>

                  <div>
                    <p className="font-semibold text-foreground mt-4">Signs it might not be a good fit:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You don't feel heard or understood</li>
                      <li>You don't trust your therapist</li>
                      <li>Their approach doesn't resonate with you</li>
                      <li>You feel judged or uncomfortable</li>
                      <li>Something just feels "off"</li>
                    </ul>
                  </div>

                  <p className="mt-4"><strong>Important distinction:</strong> Discomfort with the WORK (exploring difficult emotions, changing behaviors) is normal and different from discomfort with the THERAPIST. Therapy should feel challenging sometimes—but you should still feel supported.</p>

                  <p className="mt-4"><strong>How to switch:</strong> Contact us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> and we'll help match you with a different therapist in our practice. We'll facilitate a smooth transition—you won't have to start completely over.</p>
                  
                  <p className="italic mt-4">You don't need to explain in detail why you're switching. Give it 3-4 sessions before deciding, but trust your gut. We want you to get the help that works for YOU.</p>
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
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We're here to help. Don't let unanswered questions prevent you from getting the support you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <a href="tel:360-726-4141">Call 360-726-4141</a>
            </Button>
          </div>
          <p className="mt-8 text-white/80">
            Or <Link to="/contact" className="underline hover:text-white">send us a message</Link> and we'll get back to you within 1-2 business days.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
