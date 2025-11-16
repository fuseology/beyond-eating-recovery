import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, Phone, MapPin, AlertCircle, ExternalLink, Scale, Activity, Utensils, Apple, Puzzle, Sparkles, Users, Heart, Brain, Dumbbell, User, Rainbow, Trophy } from "lucide-react";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const Conditions = () => {
  const conditionCards = [
    {
      id: "anorexia-nervosa",
      icon: Scale,
      title: "Anorexia Nervosa",
      description: "A serious eating disorder involving severe food restriction, intense fear of weight gain, and distorted body image. Can be life-threatening and requires comprehensive medical and psychological treatment.",
      link: "/conditions/anorexia-nervosa"
    },
    {
      id: "bulimia-nervosa",
      icon: Activity,
      title: "Bulimia Nervosa",
      description: "Characterized by cycles of binge eating followed by compensatory behaviors such as purging, excessive exercise, or fasting. Often accompanied by feelings of shame and loss of control.",
      link: "/conditions/bulimia-nervosa"
    },
    {
      id: "binge-eating-disorder",
      icon: Utensils,
      title: "Binge Eating Disorder (BED)",
      description: "The most common eating disorder, involving recurrent episodes of eating large amounts of food with feelings of loss of control and significant distress. No regular compensatory behaviors.",
      link: "/conditions/binge-eating-disorder"
    },
    {
      id: "arfid",
      icon: Apple,
      title: "ARFID",
      description: "Avoidant/Restrictive Food Intake Disorder involves extremely limited food preferences or avoidance not related to weight concerns. Can lead to nutritional deficiencies and growth problems.",
      link: "/conditions/arfid"
    },
    {
      id: "osfed",
      icon: Puzzle,
      title: "OSFED",
      description: "Other Specified Feeding or Eating Disorder includes serious eating disorder symptoms that don't fit other categories but cause significant distress and impairment. Just as severe as other eating disorders.",
      link: "/conditions"
    },
    {
      id: "orthorexia",
      icon: Sparkles,
      title: "Orthorexia",
      description: "Obsession with eating only 'pure,' 'clean,' or 'healthy' foods that leads to malnutrition, social isolation, and significant impairment. Often disguised as wellness or healthy eating.",
      link: "/conditions"
    },
    {
      id: "atypical-anorexia",
      icon: Users,
      title: "Atypical Anorexia",
      description: "All the features of anorexia nervosa (restriction, fear of weight gain, body image distortion) but the person is not underweight. Just as serious and medically dangerous as anorexia.",
      link: "/conditions"
    },
    {
      id: "disordered-eating",
      icon: Heart,
      title: "Disordered Eating",
      description: "Problematic eating behaviors and thoughts that cause distress but may not meet full diagnostic criteria. Includes chronic dieting, food preoccupation, and rigid food rules.",
      link: "/conditions"
    },
    {
      id: "emotional-eating",
      icon: Brain,
      title: "Compulsive Overeating / Emotional Eating",
      description: "Using food to cope with emotions, stress, or difficult feelings rather than physical hunger. Often leads to feelings of guilt, shame, and loss of control around food.",
      link: "/conditions"
    },
    {
      id: "body-dysmorphia",
      icon: AlertCircle,
      title: "Body Dysmorphia / Body Image Issues",
      description: "Obsessive focus on perceived flaws in appearance, often accompanied by distorted perception of one's body. Can occur with or without an eating disorder.",
      link: "/conditions"
    },
    {
      id: "exercise-addiction",
      icon: Dumbbell,
      title: "Exercise Addiction / Compulsive Exercise",
      description: "Exercising compulsively or excessively to the point where it interferes with health, relationships, and daily life. Often used to compensate for eating or control weight.",
      link: "/conditions"
    },
    {
      id: "eating-disorders-men",
      icon: User,
      title: "Eating Disorders in Men",
      description: "Men experience eating disorders at significant rates but are often overlooked. Learn about how eating disorders present in men and why they may go undiagnosed.",
      link: "/conditions"
    },
    {
      id: "eating-disorders-lgbtqia",
      icon: Rainbow,
      title: "Eating Disorders in LGBTQIA+ Individuals",
      description: "LGBTQIA+ individuals have higher rates of eating disorders due to minority stress, discrimination, and identity-related challenges. We provide affirming, inclusive care.",
      link: "/conditions"
    },
    {
      id: "eating-disorders-athletes",
      icon: Trophy,
      title: "Eating Disorders in Athletes",
      description: "Athletes face unique pressures related to performance, body composition, and weight requirements. Learn about eating disorders in sports and specialized treatment approaches.",
      link: "/conditions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <ChevronRight className="h-4 w-4" />
          <li className="text-foreground">Eating Disorders</li>
        </ol>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          
          {/* Main Content Area */}
          <main className="space-y-12">
            
            {/* Hero Section */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Understanding Eating Disorders</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Comprehensive information about eating disorders and related concerns</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eating disorders are serious but treatable mental health conditions that affect millions of people of all ages, genders, races, and body sizes. At Beyond Eating Recovery, we specialize in compassionate, evidence-based treatment for the full spectrum of eating disorders and disordered eating patterns.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Whether you're struggling yourself, concerned about a loved one, or simply seeking to understand more—you've come to the right place. Explore the information below to learn about different types of eating disorders, recognize warning signs, and discover how recovery is possible.
              </p>
            </section>

            {/* What Are Eating Disorders */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">What Are Eating Disorders?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Eating disorders are complex mental health conditions characterized by persistent disturbances in eating behaviors, thoughts, and emotions related to food, weight, and body image.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Eating disorders are NOT:</h3>
                      <ul className="space-y-2">
                        {[
                          "A choice, phase, or cry for attention",
                          "Simply about food or vanity",
                          "Only affecting young, white, thin females",
                          "Something you can just 'get over' with willpower"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-red-600 mt-1">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Eating disorders ARE:</h3>
                      <ul className="space-y-2">
                        {[
                          "Serious, potentially life-threatening mental illnesses",
                          "Rooted in biological, psychological, and environmental factors",
                          "Affecting people of ALL genders, ages, races, and body sizes",
                          "Treatable with appropriate professional support",
                          "Often a way of coping with difficult emotions or trauma"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg mt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Important to know:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Eating disorders have the highest mortality rate of any mental illness</li>
                    <li>Early intervention significantly improves outcomes</li>
                    <li>Full recovery is possible with appropriate treatment</li>
                    <li>You don't have to hit 'rock bottom' to deserve help</li>
                    <li>Treatment should address root causes, not just symptoms</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Who We Help */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Who We Help</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Beyond Eating Recovery provides specialized treatment for individuals struggling with all types of eating disorders and related concerns.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">All Ages</h3>
                    <p className="text-sm text-muted-foreground">
                      Children, adolescents, adults, and older adults. Eating disorders can develop at any age, and it's never too late to seek help and recover.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">All Genders</h3>
                    <p className="text-sm text-muted-foreground">
                      Women, men, transgender, non-binary, and gender-diverse individuals. We provide affirming, inclusive care for all gender identities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <Scale className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">All Body Sizes</h3>
                    <p className="text-sm text-muted-foreground">
                      People in all body sizes. You don't have to be underweight to have a serious eating disorder. We practice weight-neutral, Health At Every Size® care.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-6 bg-muted/30 rounded-lg">
                <p className="font-semibold text-foreground mb-2">We also specialize in treating:</p>
                <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                  {[
                    "LGBTQIA+ individuals (we offer a dedicated support group)",
                    "BIPOC and multicultural populations",
                    "Athletes and performers",
                    "Individuals with trauma histories",
                    "Those with co-occurring mental health conditions",
                    "Families seeking support for loved ones"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Types of Eating Disorders - Grid of Cards */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Types of Eating Disorders & Related Conditions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore detailed information about each condition below. Click on any condition to learn about symptoms, causes, health consequences, and treatment options.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conditionCards.map((condition) => {
                  const Icon = condition.icon;
                  return (
                    <Link 
                      key={condition.id} 
                      to={condition.link}
                      className="group"
                    >
                      <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                        <CardContent className="pt-6 flex flex-col h-full">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">{condition.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4 flex-grow">
                            {condition.description}
                          </p>
                          <span className="text-sm font-semibold text-accent group-hover:underline">
                            Learn More →
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Warning Signs */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Recognizing the Warning Signs</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Early recognition and intervention improve outcomes. If you notice these signs in yourself or a loved one, consider seeking professional evaluation.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="behavioral" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-lg">Behavioral Warning Signs</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Dramatic changes in eating patterns",
                        "Rigid food rules or rituals",
                        "Avoiding meals or social situations involving food",
                        "Frequent bathroom trips after meals",
                        "Evidence of purging",
                        "Excessive or compulsive exercise",
                        "Preoccupation with food, calories, weight",
                        "Frequent weighing or body checking",
                        "Wearing baggy clothes to hide body",
                        "Hoarding or hiding food",
                        "Cooking for others but not eating"
                      ].map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="physical" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-lg">Physical Warning Signs</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Noticeable weight loss or fluctuations",
                        "Fatigue, weakness, dizziness",
                        "Feeling cold all the time",
                        "Fainting or lightheadedness",
                        "Gastrointestinal issues",
                        "Irregular or absent menstrual periods",
                        "Sleep disturbances",
                        "Difficulty concentrating",
                        "Dental problems",
                        "Dry skin, brittle nails, hair loss",
                        "Fine body hair (lanugo)"
                      ].map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="emotional" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-lg">Emotional & Psychological Warning Signs</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Intense fear of weight gain",
                        "Distorted body image",
                        "Low self-esteem tied to appearance",
                        "Perfectionism",
                        "Mood swings, irritability",
                        "Depression or anxiety",
                        "Social withdrawal",
                        "Difficulty expressing emotions",
                        "All-or-nothing thinking",
                        "Obsessive thoughts about food/body"
                      ].map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Seek help if:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>The behaviors above are present and causing distress</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Physical health is being affected</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Daily functioning is impaired</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>You're using food to cope with emotions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Seek immediate medical attention if:
                    </h3>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Heart rate is very slow or irregular</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Severe dizziness or fainting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Extreme weakness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Suicidal thoughts</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Remember:</strong> You don't have to be 'sick enough' to deserve help. If you're questioning whether you need support, that's often a sign to reach out.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:360-726-4141">Call 360-726-4141</a>
                </Button>
              </div>
            </section>

            {/* Our Approach */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Approach to Treatment</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Beyond Eating Recovery, we provide comprehensive, compassionate treatment that addresses the whole person—not just symptoms.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Scale className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Weight-Neutral Care</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We don't focus on weight loss or weight gain as treatment goals. We pursue health and recovery at any size using evidence-based HAES® principles.
                    </p>
                    <Link to="/health-at-every-size" className="text-sm font-semibold text-accent hover:underline">
                      Learn About HAES® →
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Utensils className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Rebuilding Food Trust</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We teach Intuitive Eating principles to help you reconnect with your body's hunger, fullness, and satisfaction signals—no meal plans or rigid rules.
                    </p>
                    <Link to="/philosophy" className="text-sm font-semibold text-accent hover:underline">
                      Learn About Intuitive Eating →
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Addressing Root Causes</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We recognize that eating disorders are often rooted in trauma, emotional pain, and coping needs. We address these underlying causes with compassion and expertise.
                    </p>
                    <Link to="/our-approach" className="text-sm font-semibold text-accent hover:underline">
                      Learn About Our Approach →
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our treatment services include:</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {[
                      "Individual Therapy with eating disorder specialists",
                      "Dietitian Services using weight-neutral nutrition counseling",
                      "Group Therapy including LGBTQIA+ support group",
                      "Teletherapy throughout Oregon and Washington",
                      "Coordinated Care with your medical providers when needed"
                    ].map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our commitment:</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {[
                      "Evidence-based treatment",
                      "Compassionate, non-judgmental care",
                      "Addressing root causes, not just symptoms",
                      "Supporting full, lasting recovery"
                    ].map((commitment, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{commitment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/services">Explore Our Treatment Options</Link>
                </Button>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Common Questions About Eating Disorders</h2>
              <p className="text-muted-foreground mb-6">
                Quick answers to common questions. For more detailed information, visit our comprehensive FAQ page.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Can eating disorders be cured?",
                    answer: "Yes, full recovery is possible. With appropriate treatment that addresses root causes, many people achieve complete freedom from eating disorder thoughts and behaviors. Recovery is not just symptom management—it's transforming your relationship with food, body, and self."
                  },
                  {
                    question: "Do I have to be underweight to have an eating disorder?",
                    answer: "No. Eating disorders occur at all body sizes. You can have a serious, even life-threatening eating disorder at any weight. Atypical anorexia, bulimia, and binge eating disorder often occur in average or larger bodies."
                  },
                  {
                    question: "Are eating disorders just about food and weight?",
                    answer: "No. Eating disorders are complex mental health conditions often rooted in trauma, emotional pain, perfectionism, control needs, or difficulty coping with life stress. Food and body become the focus, but the underlying issues are psychological and emotional."
                  },
                  {
                    question: "How long does treatment take?",
                    answer: "It varies. Some people see significant improvement in 6-12 months; full recovery may take 1-3+ years. Early intervention leads to faster recovery. The goal is lasting change, not quick fixes."
                  },
                  {
                    question: "Will I have to gain/lose weight in treatment?",
                    answer: "We're weight-neutral and don't focus on weight as a treatment goal. We focus on adequate nutrition, stopping disordered behaviors, and addressing psychological root causes. Your body will find its natural, healthy weight when you stop restriction and binging."
                  },
                  {
                    question: "What if I'm not sure I have a 'real' eating disorder?",
                    answer: "You don't need a formal diagnosis to deserve help. If your relationship with food or your body is causing distress, interfering with your life, or occupying significant mental space—you deserve support. Early intervention prevents progression."
                  }
                ].map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-6">
                <Button asChild variant="outline" size="lg">
                  <Link to="/faq">View Complete FAQ Page</Link>
                </Button>
              </div>
            </section>

            {/* Getting Started */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Take the First Step Toward Recovery</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Recovery is possible, and you don't have to do it alone. We're here to support you every step of the way.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    step: "1",
                    title: "Contact Us",
                    description: "Call 360-726-4141 or fill out our contact form. Share what brings you in and any questions you have."
                  },
                  {
                    step: "2",
                    title: "Initial Consultation",
                    description: "We'll discuss your concerns, which services might help, and whether we're a good fit. Low-pressure, confidential, and free."
                  },
                  {
                    step: "3",
                    title: "Schedule First Appointment",
                    description: "We'll match you with an appropriate provider, schedule your first session, and send secure intake paperwork."
                  },
                  {
                    step: "4",
                    title: "Begin Your Recovery",
                    description: "Meet your therapist or dietitian, share your story, and begin developing a treatment plan."
                  }
                ].map((step) => (
                  <Card key={step.step}>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">Schedule Your Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:360-726-4141">Call 360-726-4141</a>
                </Button>
              </div>
            </section>

            {/* Supporting a Loved One */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Supporting Someone with an Eating Disorder</h2>
              <p className="text-lg text-muted-foreground mb-6">
                If you're concerned about a loved one, your support matters. Here are some ways to help:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Do:</h3>
                    <ul className="space-y-2">
                      {[
                        "Express concern without judgment",
                        "Listen without trying to fix",
                        "Encourage professional help",
                        "Be patient—recovery takes time",
                        "Educate yourself about eating disorders",
                        "Take care of yourself too"
                      ].map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Don't:</h3>
                    <ul className="space-y-2">
                      {[
                        "Comment on their weight or appearance",
                        "Try to force them to eat",
                        "Make meals a battleground",
                        "Blame yourself",
                        "Give up if they refuse help initially"
                      ].map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-red-600 mt-1">✗</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-sm text-muted-foreground italic">
                We offer family therapy and consultation to support loved ones through the recovery journey.
              </p>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            
            {/* Anne Cuthbert Expert Profile */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Meet Our Expert</h3>
                <div className="flex flex-col items-center text-center mb-4">
                  <img 
                    src={anneCuthbertPhoto} 
                    alt="Anne Cuthbert, MA, LPC, LMHC, expert in eating disorder treatment" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-semibold text-foreground">Anne Cuthbert, MA, LPC, LMHC</h4>
                  <p className="text-sm text-muted-foreground">Owner & Founder</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  With over 20 years of experience specializing in eating disorders, Anne Cuthbert is a leading expert in treating anorexia, bulimia, binge eating disorder, and related concerns.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="font-semibold text-foreground">Credentials:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Licensed Professional Counselor (OR)</li>
                    <li>Licensed Mental Health Counselor (WA)</li>
                    <li>CREDN Board Member</li>
                    <li>ASDAH Member</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">
                  Anne knows firsthand what it's like to struggle with food and body issues. Her personal recovery journey fuels her passion for helping others find freedom.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/about/anne-cuthbert">Meet Anne</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Book CTA */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Read Anne's Book</h3>
                <div className="flex justify-center mb-4">
                  <img 
                    src={bookCover} 
                    alt="If Your Hunger Could Talk book cover by Anne Cuthbert" 
                    className="w-40 h-auto shadow-lg rounded"
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-2">If Your Hunger Could Talk</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Real Steps to Help You Find Freedom from Food and Weight Obsession
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover the 6-step process to end the restrict-binge cycle, trust yourself around food, accept your body, and live free from food obsession.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" target="_blank" rel="noopener noreferrer">
                    Get the Book <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Schedule Consultation CTA */}
            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Ready to Get Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take the first step toward recovery. Schedule a free consultation to discuss your concerns and explore treatment options.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="font-semibold text-foreground">We offer:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Individual therapy</li>
                    <li>Dietitian services</li>
                    <li>Group therapy</li>
                    <li>Teletherapy options</li>
                    <li>Insurance accepted</li>
                  </ul>
                </div>
                <Button asChild size="lg" className="w-full mb-3 bg-accent hover:bg-accent/90">
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:360-726-4141" className="hover:text-primary">360-726-4141</a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Portland, OR & Vancouver, WA</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { title: "Our Approach", link: "/our-approach" },
                    { title: "Meet Our Team", link: "/about" },
                    { title: "Treatment Options", link: "/services" },
                    { title: "Health At Every Size®", link: "/health-at-every-size" },
                    { title: "FAQ", link: "/faq" },
                    { title: "Contact Us", link: "/contact" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Crisis Resources */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  In Crisis?
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-red-900">988 - Suicide & Crisis Lifeline</p>
                    <p className="text-red-800">24/7 support. Call or text 988</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-900">911 or nearest ER</p>
                    <p className="text-red-800">For medical emergencies</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-900">NEDA Helpline</p>
                    <p className="text-red-800">1-800-931-2237</p>
                    <p className="text-red-800 text-xs">Mon-Thu 11am-9pm ET</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Conditions;