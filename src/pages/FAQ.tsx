import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
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
      count: 8,
      samples: ["What is an eating disorder?", "Do I have an eating disorder?", "Types of eating disorders"],
    },
    {
      id: "getting-started",
      title: "Getting Started with Treatment",
      icon: LogIn,
      count: 6,
      samples: ["How do I get started?", "What's the first step?", "First therapy session"],
    },
    {
      id: "treatment-approach",
      title: "Our Treatment Approach",
      icon: Compass,
      count: 7,
      samples: ["What is HAES®?", "Intuitive Eating", "How long will treatment take?"],
    },
    {
      id: "insurance",
      title: "Insurance & Financial Information",
      icon: DollarSign,
      count: 8,
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
      <Helmet>
        <title>Frequently Asked Questions About Eating Disorder Treatment | Beyond Eating Recovery</title>
        <meta name="description" content="Get answers to common questions about eating disorders, treatment process, insurance, HAES approach, and what to expect at Beyond Eating Recovery in Portland & Vancouver." />
        <meta property="og:title" content="Frequently Asked Questions About Eating Disorder Treatment | Beyond Eating Recovery" />
        <meta property="og:description" content="Get answers to common questions about eating disorders, treatment process, insurance, HAES approach, and what to expect at Beyond Eating Recovery in Portland & Vancouver." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/faq" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/assets/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions About Eating Disorder Treatment | Beyond Eating Recovery" />
        <meta name="twitter:description" content="Get answers to common questions about eating disorders, treatment process, insurance, HAES approach, and what to expect at Beyond Eating Recovery in Portland & Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/assets/hero-background.jpg" />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is an eating disorder?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An eating disorder is a serious mental health condition characterized by persistent disturbances in eating behaviors, thoughts, and emotions. Eating disorders involve a preoccupation with food, body weight, and shape that significantly impacts physical health, emotional well-being, and daily functioning. They are NOT a choice or phase, but complex mental health conditions often rooted in trauma, genetics, and environmental factors that are treatable with proper support."
                }
              },
              {
                "@type": "Question",
                "name": "Do I have an eating disorder? How do I know if I need help?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You don't need a formal diagnosis to benefit from help. Consider seeking support if you find yourself at the fridge repeatedly, think about food more than you want to, eat in secret, feel out of control around certain foods, have rigid food rules, obsess over weight or appearance, or use food to cope with emotions. If your relationship with food or body is causing distress or interfering with your life, you deserve support."
                }
              },
              {
                "@type": "Question",
                "name": "What are the different types of eating disorders?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common eating disorder diagnoses include Anorexia Nervosa (severe food restriction, fear of weight gain), Bulimia Nervosa (binge eating followed by compensatory behaviors), Binge Eating Disorder (recurrent binge episodes without compensatory behaviors), ARFID (extremely limited food preferences not related to weight concerns), and OSFED (significant symptoms that don't fit other categories). We also treat compulsive overeating, emotional eating, body dysmorphia, and exercise addiction."
                }
              },
              {
                "@type": "Question",
                "name": "Can men have eating disorders?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes—eating disorders affect people of ALL genders, ages, races, ethnicities, body sizes, and backgrounds. Men account for approximately 25% of people with anorexia and bulimia, and are nearly as likely as women to have binge eating disorder. Transgender and non-binary individuals have higher rates of eating disorders. At Beyond Eating Recovery, we provide affirming, inclusive care for all people."
                }
              },
              {
                "@type": "Question",
                "name": "What causes eating disorders?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Eating disorders are complex conditions with multiple contributing factors including biological/genetic factors (family history, neurochemistry), psychological factors (perfectionism, low self-esteem, trauma history), social/cultural factors (diet culture, weight stigma, social media), and environmental factors (life transitions, loss, relationship difficulties). Dieting is one of the strongest predictors of eating disorder development. You are not to blame for having an eating disorder."
                }
              },
              {
                "@type": "Question",
                "name": "Can eating disorders be cured? What does recovery look like?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, full recovery from eating disorders is absolutely possible. Recovery means eating without fear, guilt, or rigid rules; accepting your body; having healthy coping strategies; and engaging fully in life. Recovery is non-linear with ups and downs, individual to each person, possible at any stage, and worth the hard work. Our approach focuses on lasting recovery by addressing root causes."
                }
              },
              {
                "@type": "Question",
                "name": "Will I have to gain weight in treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our practice is weight-neutral and Health At Every Size®-aligned. We do not focus on weight gain or weight loss as goals of treatment. We don't weigh clients routinely, don't set weight goals, and focus on health behaviors rather than body weight. We focus on ending restriction, stopping binge eating, rebuilding trust with hunger and fullness signals, and body acceptance. The goal is freedom from the eating disorder—not achieving a certain weight."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between an eating disorder and just being careful about what I eat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A healthy relationship with food includes flexibility, eating based on hunger and satisfaction, and self-worth not tied to eating 'perfectly.' Eating disorders involve rigid food rules, intense fear about certain foods, constant thoughts about food/calories/weight, guilt after eating, avoiding social situations due to food concerns, and feeling out of control around food. If your relationship with food is causing distress or taking up significant mental space, you deserve support."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get started with treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting started is simple: 1) Contact us at 360-726-4141 or fill out our contact form, 2) Schedule a low-pressure initial consultation (15-30 minutes) to learn about your concerns, 3) We'll match you with an appropriate therapist or dietitian, 4) Begin your first session and develop a treatment plan. You don't need to be 'sick enough' to deserve support—early intervention leads to better outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "What should I expect in my first therapy session?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your first therapy session includes building rapport (10-15 min) where your therapist introduces themselves and discusses confidentiality, gathering information (30-40 min) about what brought you to therapy and your history, and beginning treatment planning (10-15 min) to discuss approaches and set goals. It's normal to feel nervous, anxious, or uncertain. You might feel vulnerable or relieved. The first session is just the beginning—building trust takes time."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a referral from my doctor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most clients, no—you do not need a referral from a doctor to begin therapy or dietitian services at Beyond Eating Recovery. Self-referral is welcome for both individual therapy and dietitian services. Some insurance plans may require a referral for coverage. We may recommend working with a physician if you have medical complications, but this isn't required to start. Contact us at 360-726-4141 and we'll help you navigate what's needed."
                }
              },
              {
                "@type": "Question",
                "name": "Can I bring a family member or friend to my first appointment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This depends on your situation and preferences. Most first sessions are one-on-one to create a confidential space, but support people can be involved if you feel more comfortable. They can wait in the waiting area, join for the first few minutes, or participate in part of the session. Eating disorders often involve secrecy and shame, so you may find it easier to be honest without family present. Mention your preference when scheduling."
                }
              },
              {
                "@type": "Question",
                "name": "What if I'm not ready to commit to therapy yet?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "That's completely okay. Options include scheduling a low-pressure initial consultation with no obligation, exploring our educational resources and website, trying our Battle of the Binge 4-week self-study course, attending a group session, or starting with a dietitian consultation. Many people start therapy while still ambivalent—readiness often comes during therapy, not before. When you're ready, we'll be here."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if I need more intensive treatment than outpatient therapy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beyond Eating Recovery specializes in outpatient treatment, but we recognize some people need more intensive care. Levels of care range from outpatient (what we provide) to intensive outpatient (IOP), partial hospitalization (PHP), residential treatment, and inpatient hospitalization. If a higher level of care is needed, we will discuss our concerns openly, provide referrals, support you through the transition, and remain available for outpatient support after you step down."
                }
              },
              {
                "@type": "Question",
                "name": "What is Health At Every Size® (HAES®)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Health At Every Size® (HAES) is an evidence-based approach that prioritizes well-being over weight. Core principles include weight inclusivity (respecting all body sizes), health enhancement (supporting accessible health practices), respectful care (acknowledging weight stigma), eating for well-being (flexible, intuitive eating), and life-enhancing movement (physical activity for enjoyment, not calorie burning). HAES improves health behaviors and outcomes without focusing on weight loss."
                }
              },
              {
                "@type": "Question",
                "name": "What is Intuitive Eating? How is it different from a meal plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Intuitive Eating is a self-care eating framework with 10 principles that help you reconnect with your body's natural signals. Unlike meal plans which provide external rules and create dependence, Intuitive Eating uses internal guidance, honors hunger and fullness, is flexible and individualized, and builds self-trust. It's NOT 'eat whatever you want'—it's learning to trust your body. Over 200 studies show benefits including reduced disordered eating and improved body image."
                }
              },
              {
                "@type": "Question",
                "name": "How long will eating disorder treatment take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recovery timelines are highly individual. Generally: symptom reduction often occurs in 3-6 months, significant improvement in 6-12 months, and full recovery in 1-3+ years. Recovery is non-linear with ups and downs, and quality matters more than speed. We focus on lasting recovery, not quick fixes, and session frequency typically decreases as you progress."
                }
              },
              {
                "@type": "Question",
                "name": "Do you use a specific type of therapy (CBT, DBT, etc.)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our therapists are trained in multiple evidence-based approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), Internal Family Systems (IFS), Emotion-Focused Therapy, Psychodynamic Therapy, Somatic/Body-Based Approaches, Trauma-Informed Care, and Family Systems Therapy. We tailor treatment to your unique needs rather than using one rigid method. All approaches are grounded in HAES® principles and Intuitive Eating."
                }
              },
              {
                "@type": "Question",
                "name": "Will you give me a meal plan or tell me what to eat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No—we do not provide prescriptive meal plans because external rules about eating are part of what creates eating disorders and they don't address root causes. Instead, we use Intuitive Eating guidance, general nutrition education, structured flexibility as a temporary bridge for those very disconnected from hunger/fullness, meal support for challenging food situations, and addressing the emotional roots of food struggles. Our goal is autonomy—we want you to trust yourself, not a meal plan."
                }
              },
              {
                "@type": "Question",
                "name": "Do you weigh clients? What if I don't want to be weighed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our practice is weight-neutral and HAES®-aligned. We do NOT routinely weigh clients, you can be weighed 'blind' (backwards, not seeing the number) if needed, and you can decline weighing. Weight is not a reliable indicator of health or recovery progress. We focus on eating patterns, physical health, mental/emotional well-being, and relationship with food and body instead. You have the right to decline being weighed at any time."
                }
              },
              {
                "@type": "Question",
                "name": "Can I see both a therapist and dietitian at the same time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes—and we strongly recommend it! Therapists focus on root causes, emotional coping, trauma, and body image, while dietitians focus on rebuilding trust with hunger/fullness, nutrition education, and Intuitive Eating. Together, they provide comprehensive care addressing both 'why' and 'how' for faster, more lasting recovery. Your providers communicate and collaborate on treatment goals."
                }
              },
              {
                "@type": "Question",
                "name": "Do you accept insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Beyond Eating Recovery accepts most major insurance plans for Oregon and Washington residents. We are in-network with many commercial insurance carriers and also work with out-of-network benefits. To verify your specific coverage, please call us at 360-726-4141. Our team will help you understand your benefits and any out-of-pocket costs."
                }
              },
              {
                "@type": "Question",
                "name": "What are my responsibilities regarding insurance coverage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It is your responsibility to verify your insurance coverage before beginning treatment, communicate any insurance changes immediately, and understand your benefits. Insurance plans vary widely in what they cover for mental health and nutrition services. While we assist with verification, you should confirm your benefits, deductibles, copays, and any out-of-network costs directly with your insurance company."
                }
              },
              {
                "@type": "Question",
                "name": "What CPT codes do you use, and what questions should I ask my insurance company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For mental health services: 90791 (Initial Diagnostic Interview), 90834 (45-min therapy), 90837 (53-min therapy), 90847 (Family therapy), 90853 (Group therapy). For dietitian services: 97802 (Initial assessment), 97803 (Re-assessment), 97804 (Group session). Ask your insurance about mental health benefits, deductibles, copays, in-network status, referral requirements, session limits, and out-of-network benefits."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between mental health and dietitian billing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mental health services (therapy) are provided by licensed therapists and billed under mental health benefits, while dietitian services are billed under medical nutrition therapy (MNT) or medical benefits. Coverage varies significantly by insurance plan. Even if therapy is covered, dietitian services may not be, or vice versa. We strongly recommend verifying coverage for both types of services separately."
                }
              },
              {
                "@type": "Question",
                "name": "What information can the clinic provide during insurance verification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We can help identify whether we are in-network or out-of-network, estimated copay or coinsurance amounts, deductible information, whether pre-authorization is required, and basic coverage details. However, you must verify exact out-of-pocket costs, exclusions or limitations, coverage for specific CPT codes, appeal processes, and out-of-network reimbursement rates directly with your insurance company."
                }
              },
              {
                "@type": "Question",
                "name": "What does eating disorder treatment cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Individual therapy sessions typically range from $150-$200 per session (45-53 minutes). Dietitian sessions are similar. With insurance, your out-of-pocket cost depends on your plan's deductible, copay, and coinsurance rates. Without insurance, we offer sliding scale fees based on income and financial need. Under federal law, you can request a Good Faith Estimate of expected charges."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer sliding scale or financial assistance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We understand that eating disorder treatment is essential and cost should not be a barrier to care. We offer reduced sliding scale fees based on income and financial situation on a limited basis. We may also be able to work with you on payment arrangements for out-of-pocket costs. Call us at 360-726-4141 to discuss financial assistance options confidentially."
                }
              },
              {
                "@type": "Question",
                "name": "What is a Good Faith Estimate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Under the No Surprises Act (federal law), healthcare providers must give uninsured or self-pay patients a Good Faith Estimate of expected charges before services are provided. It is a written document showing the expected cost of your treatment. You'll receive it before your first appointment or upon request. If your final bill is more than $400 over the estimate, you have the right to dispute the charges."
                }
              },
              {
                "@type": "Question",
                "name": "Is therapy confidential?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, therapy sessions are confidential within the limits of the law. We explain confidentiality and its limits during your first session. We only share information with your consent or if required to protect your safety or others."
                }
              },
              {
                "@type": "Question",
                "name": "Is there support between sessions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer limited support between sessions via secure messaging or brief check-ins, depending on your provider's policies. Emergency support is available through crisis lines and emergency services. Discuss your needs and preferences with your therapist or dietitian."
                }
              },
              {
                "@type": "Question",
                "name": "Can I switch therapists?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you have the right to change providers if you feel your current therapist or dietitian isn't the right fit. We encourage open communication and can help facilitate a smooth transition. Your comfort and trust are important for successful treatment."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <BreadcrumbSchema />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              We're here to answer your questions about treatment, insurance, and getting started
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
              If you don't find what you're looking for, please call us at 360-726-4141 or use our <Link to="/contact" className="underline hover:text-white">contact form</Link>.
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
                    <p className="font-semibold text-foreground">Common characteristics include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Intense fear of weight gain or being 'fat'</li>
                      <li>Distorted body image</li>
                      <li>Using food (restricting, binging, purging) to cope with emotions</li>
                      <li>Obsessive thoughts about food, calories, weight, or body shape</li>
                      <li>Rituals around eating or exercise</li>
                      <li>Social isolation related to eating or body concerns</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Eating disorders are NOT a choice or phase, about vanity, just about food or weight, or something you can just 'get over' with willpower.</p>

                  <p className="font-semibold text-foreground">They ARE complex mental health conditions often rooted in trauma, genetics, and environmental factors. They are treatable with proper support and are serious conditions that require professional help.</p>

                  <p className="italic">If you're questioning whether your relationship with food and your body is healthy, that question itself is often a sign that it's worth exploring further with a professional.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do I have an eating disorder? How do I know if I need help?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Many people struggle with the question of whether their eating or body image concerns 'count' as an eating disorder. You don't need a formal diagnosis to benefit from help.</p>

                  <div>
                    <p className="font-semibold text-foreground">Consider seeking support if you find yourself at the fridge over and over again, think about food much more than you want to, eat in secret, feel out of control around certain foods, have rigid food rules, obsess over your weight or appearance, compare your body to others constantly, are tired of dieting just to find yourself binging again, or use food to cope with difficult emotions.</p>
                  </div>

                  <p className="font-semibold text-foreground">The bottom line: If your relationship with food or your body is causing you distress, interfering with your life, or occupying significant mental space—you deserve support. You don't have to wait until things get 'bad enough.' Early intervention leads to better outcomes.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What are the different types of eating disorders?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Eating disorders exist on a spectrum and can look different for different people. We treat all types of eating disorders and disordered eating patterns.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">Common eating disorder diagnoses include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Anorexia Nervosa:</strong> Severe restriction of food intake, intense fear of weight gain, distorted body image, significantly low body weight relative to individual needs</li>
                      <li><strong>Bulimia Nervosa:</strong> Cycles of binge eating followed by compensatory behaviors. Self-evaluation heavily influenced by body shape and weight. Can occur at any body size</li>
                      <li><strong>Binge Eating Disorder (BED):</strong> Recurrent episodes of eating large amounts of food with feeling out of control. NO regular compensatory behaviors. Most common eating disorder in the US</li>
                      <li><strong>ARFID:</strong> Extremely limited food preferences or avoidance not related to weight or body image concerns</li>
                      <li><strong>OSFED:</strong> Significant eating disorder symptoms that don't fit other categories. Just as serious as other eating disorders</li>
                    </ul>
                  </div>

                  <p>We also treat compulsive overeating, emotional eating, body dysmorphia, exercise addiction, and food/weight preoccupation.</p>

                  <p className="font-semibold text-foreground">Important: You don't need to fit perfectly into a diagnostic category to deserve help. If you're struggling with food, eating, or body image—we're here to support you.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Can men have eating disorders? Are eating disorders only for young women?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Absolutely, yes—eating disorders affect people of ALL genders, ages, races, ethnicities, body sizes, sexual orientations, and socioeconomic backgrounds.</p>
                  
                  <p>The stereotype that eating disorders only affect young, white, thin women is not only incorrect—it's dangerous. This misconception prevents many people from recognizing their own struggles and delays treatment for those who don't fit the stereotype.</p>

                  <div>
                    <p className="font-semibold text-foreground">The reality:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Gender:</strong> Men account for approximately 25% of people with anorexia and bulimia. Men are nearly as likely as women to have binge eating disorder. Transgender and non-binary individuals have higher rates of eating disorders</li>
                      <li><strong>Age:</strong> While onset is often in adolescence or young adulthood, many people develop eating disorders in their 30s, 40s, 50s, and beyond</li>
                      <li><strong>Race & Ethnicity:</strong> Eating disorders occur across all racial and ethnic groups at similar rates. BIPOC individuals are less likely to be diagnosed due to systemic bias</li>
                      <li><strong>Body Size:</strong> People in larger bodies can and do have all types of eating disorders. Weight is NOT a reliable indicator of eating disorder severity</li>
                      <li><strong>Sexual Orientation:</strong> LGBTQIA+ individuals have higher rates of eating disorders</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">At Beyond Eating Recovery, we provide affirming, inclusive care for ALL people struggling with eating disorders—regardless of gender, age, body size, identity, or background.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What causes eating disorders?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Eating disorders are complex conditions with multiple contributing factors. There is no single cause, and they are never simply about food, weight, or vanity.</p>

                  <div>
                    <p className="font-semibold text-foreground">Contributing factors include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Biological/Genetic:</strong> Family history, genetic predisposition, neurochemistry differences, co-occurring mental health conditions</li>
                      <li><strong>Psychological:</strong> Perfectionism, low self-esteem, difficulty with emotions, trauma history, need for control</li>
                      <li><strong>Social/Cultural:</strong> Diet culture, weight stigma, social media comparison culture, pressure from sports or professions emphasizing appearance</li>
                      <li><strong>Environmental:</strong> Major life transitions, loss or grief, relationship difficulties, trauma or abuse</li>
                      <li><strong>Dieting:</strong> One of the strongest predictors of eating disorder development</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Important understanding: You are not to blame for having an eating disorder. Treatment addresses root causes—not just symptoms—which is why therapy goes beyond meal planning and focuses on underlying emotional, psychological, and relational factors.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Can eating disorders be cured? What does recovery look like?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Yes, full recovery from eating disorders is absolutely possible. Recovery is not just about managing symptoms—it's about fundamentally transforming your relationship with food, your body, and yourself.</p>

                  <div>
                    <p className="font-semibold text-foreground">What full recovery looks like:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>In relation to food:</strong> Eating without fear, guilt, or rigid rules. Trusting yourself around all foods</li>
                      <li><strong>In relation to your body:</strong> Accepting your body as it is. Not allowing body image to dictate your life choices</li>
                      <li><strong>In relation to emotions:</strong> Having healthy coping strategies. Not using food to avoid or manage emotions</li>
                      <li><strong>In relation to life:</strong> Engaging fully in relationships and activities. Mental space previously consumed by food/body thoughts now available for living</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">The recovery journey:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Non-linear:</strong> Recovery isn't a straight line. There are ups and downs</li>
                      <li><strong>Individual:</strong> Everyone's recovery looks different and happens at their own pace</li>
                      <li><strong>Possible at any stage:</strong> It's never too late to recover</li>
                      <li><strong>Worth it:</strong> Recovery requires hard work, but the freedom and peace you gain are invaluable</li>
                    </ul>
                  </div>

                  <p>Our approach focuses on lasting recovery—not just symptom management—by addressing root causes and building a genuinely healthy relationship with food and body.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Will I have to gain weight in treatment?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Our practice is weight-neutral and Health At Every Size®-aligned. We do not focus on weight gain or weight loss as goals of treatment.</p>

                  <div>
                    <p className="font-semibold text-foreground">Our approach:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We don't weigh clients (or they can be weighed backwards without seeing the number)</li>
                      <li>We don't set weight goals</li>
                      <li>We focus on health behaviors, not body weight</li>
                      <li>We recognize that bodies naturally stabilize at different sizes when eating adequately</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What we DO focus on:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Ending restriction and deprivation</li>
                      <li>Stopping binge eating and compensatory behaviors</li>
                      <li>Rebuilding trust with hunger and fullness signals</li>
                      <li>Adequate nutrition for YOUR body's needs</li>
                      <li>Body acceptance and respect</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Our commitment:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We will never pressure you to gain weight</li>
                      <li>We will never shame you about your body size</li>
                      <li>We will help you pursue health and recovery regardless of weight changes</li>
                      <li>We will support you in building body acceptance</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">The goal of treatment is freedom from the eating disorder—not achieving a certain weight.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What's the difference between an eating disorder and just 'being careful about what I eat'?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>This is an important question, especially in a culture where disordered eating behaviors are often normalized and even praised.</p>

                  <div>
                    <p className="font-semibold text-foreground">Healthy relationship with food includes flexibility, eating based on hunger and satisfaction, occasional indulgences without guilt, food choices don't dominate thoughts, and self-worth isn't tied to eating 'perfectly'.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Eating disorder or disordered eating includes rigid food rules, intense fear about certain foods, constant thoughts about food/calories/weight, guilt after eating, avoiding social situations due to food concerns, using food to cope with emotions, and feeling out of control around food.</p>
                  </div>

                  <p className="italic">The 'wellness' trap: In diet culture, many disordered behaviors are disguised as 'wellness,' 'clean eating,' or 'fitness goals.' If your 'health goals' are making you unwell—they're not actually healthy.</p>

                  <p className="font-semibold text-foreground">Bottom line: If your relationship with food is causing you distress, taking up significant mental space, or interfering with your life—you deserve support. You don't need to hit 'rock bottom' to get help.</p>
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
                  <p>Taking the first step toward recovery can feel overwhelming, but we've made the process as simple and welcoming as possible.</p>

                  <div>
                    <p className="font-semibold text-foreground">Here's how to get started:</p>
                    <ol className="list-decimal pl-6 space-y-3">
                      <li><strong>Contact Us:</strong> Call us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a>, email us, or fill out our <Link to="/contact" className="text-primary hover:underline font-semibold">contact form</Link></li>
                      <li><strong>Initial Consultation:</strong> We'll schedule a low-pressure consultation (15-30 minutes) to learn about your concerns and determine if we're a good fit. No obligation</li>
                      <li><strong>Schedule Your First Appointment:</strong> We'll match you with an appropriate therapist or dietitian</li>
                      <li><strong>First Session:</strong> Meet your provider, share your history, and begin developing a treatment plan</li>
                    </ol>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Common concerns:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>'I'm not sure I'm 'sick enough'' → You don't need to be at rock bottom to deserve support</li>
                      <li>'I'm scared' → That's normal. You can simply say, 'I'm struggling with food and my body, and I need help'</li>
                      <li>'What if it's not a good fit?' → The initial consultation helps determine fit before you commit</li>
                    </ul>
                  </div>

                  <p>You don't have to do this alone. We're here to support you every step of the way.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q10" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What should I expect in my first therapy session?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Your first therapy session is about getting to know each other and beginning to understand your unique story and needs.</p>

                  <div>
                    <p className="font-semibold text-foreground">What typically happens:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Building Rapport (10-15 min):</strong> Your therapist introduces themselves, discusses confidentiality, and helps you feel comfortable</li>
                      <li><strong>Gathering Information (30-40 min):</strong> Your therapist asks about what brought you to therapy, your history, current behaviors, and goals</li>
                      <li><strong>Beginning Treatment Planning (10-15 min):</strong> Discuss approaches, set preliminary goals, establish session frequency</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What to expect emotionally:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>It's normal to feel nervous, anxious, or uncertain</li>
                      <li>You might feel vulnerable or relieved</li>
                      <li>You might cry—that's completely okay</li>
                      <li>You might feel hopeful about beginning this journey</li>
                    </ul>
                  </div>

                  <p>Remember: The first session is just the beginning. Building trust and comfort in therapy takes time.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q11" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do I need a referral from my doctor?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">For most clients, no—you do not need a referral from a doctor to begin therapy or dietitian services at Beyond Eating Recovery.</p>

                  <div>
                    <p className="font-semibold text-foreground">Here's what you need to know:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Individual Therapy:</strong> Self-referral is welcome. Exception: Some insurance plans require a referral</li>
                      <li><strong>Dietitian Services:</strong> Self-referral is welcome. Some insurance plans require a physician's referral for coverage</li>
                      <li><strong>Medical Coordination:</strong> We may recommend working with a physician if you have medical complications, but this isn't required to start</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Don't let uncertainty about referrals delay getting help. Contact us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a>, and we'll help you navigate what's needed.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q12" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Can I bring a family member or friend to my first appointment?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>This depends on your situation and preferences, and we're happy to work with you to create a comfortable first session.</p>

                  <div>
                    <p className="font-semibold text-foreground">For individual therapy:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Most first sessions are one-on-one to create a confidential space</li>
                      <li>However, support people CAN be involved if you feel more comfortable</li>
                      <li>They can wait in the waiting area, join for the first few minutes, or participate in part of the session if you and your therapist agree</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Why individual time matters:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Eating disorders often involve secrecy and shame</li>
                      <li>You may find it easier to be honest without family present</li>
                      <li>Family dynamics may be part of what needs to be addressed</li>
                    </ul>
                  </div>

                  <p>To discuss your specific needs, please mention this when scheduling your first appointment.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q13" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What if I'm not ready to commit to therapy yet?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>That's completely okay. Recovery happens when YOU'RE ready, and there's no pressure to commit before you feel prepared.</p>

                  <div>
                    <p className="font-semibold text-foreground">Options if you're not ready:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Initial Consultation:</strong> Schedule a low-pressure call to learn about our approach. No obligation</li>
                      <li><strong>Educational Resources:</strong> Read our blog posts, learn about HAES® and Intuitive Eating, explore our website</li>
                      <li><strong>Self-Study Options:</strong> <Link to="/battle-of-the-binge" className="text-primary hover:underline font-semibold">Battle of the Binge</Link>—our 4-week self-study course</li>
                      <li><strong>Attend a Group Session:</strong> Less intensive than individual therapy</li>
                      <li><strong>Dietitian Consultation:</strong> May feel less intimidating than therapy</li>
                      <li><strong>Wait Until You're Ready:</strong> There's no expiration date on getting help</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What we want you to know:</p>
                    <p>You don't have to have everything figured out or be 100% ready. Many people start therapy while still ambivalent. Readiness often comes DURING therapy, not before.</p>
                  </div>

                  <p>Questions are always welcome. Call <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> even if you're not ready. There's no judgment. When you ARE ready, we'll be here.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q14" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What happens if I need more intensive treatment than outpatient therapy?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Beyond Eating Recovery specializes in outpatient treatment. However, we recognize that some people need more intensive levels of care.</p>

                  <div>
                    <p className="font-semibold text-foreground">Levels of care (from least to most intensive):</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Outpatient (What we provide):</strong> Individual therapy 1x/week or more, dietitian services, group therapy. You live at home</li>
                      <li><strong>Intensive Outpatient (IOP):</strong> 2-3 hours/day, 3-5 days/week. You live at home</li>
                      <li><strong>Partial Hospitalization (PHP):</strong> 5-8 hours/day, 5-7 days/week. Comprehensive programming. You live at home</li>
                      <li><strong>Residential Treatment:</strong> 24/7 care in specialized facility. Live at the facility (weeks to months)</li>
                      <li><strong>Inpatient Hospitalization:</strong> Medical hospital setting. 24/7 medical care for stabilization</li>
                    </ol>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">If higher level of care is needed, we will:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Discuss our concerns with you openly and compassionately</li>
                      <li>Explain why we're recommending a different level of care</li>
                      <li>Provide referrals to appropriate programs</li>
                      <li>Support you through the transition</li>
                      <li>Remain available for outpatient support after you step down</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Our commitment: We will never keep you at a level of care that's not appropriate for your safety. We will not abandon you—we'll support the transition and be here when you're ready to step down.</p>
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
                  <p>HAES® is a weight-neutral, evidence-based approach focusing on well-being rather than weight loss.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">Core HAES® principles:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Weight Inclusivity:</strong> Accept and respect body diversity</li>
                      <li><strong>Health Enhancement:</strong> Support practices that improve well-being</li>
                      <li><strong>Respectful Care:</strong> End weight discrimination</li>
                      <li><strong>Eating for Well-being:</strong> Flexible eating based on hunger and satisfaction—not weight control</li>
                      <li><strong>Life-Enhancing Movement:</strong> Physical activity for enjoyment, not weight loss</li>
                    </ul>
                  </div>

                  <p>Learn more about our HAES® approach on our <Link to="/health-at-every-size" className="text-primary hover:underline font-semibold">Health At Every Size® page</Link>.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q16" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What is Intuitive Eating? How is it different from a meal plan?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Intuitive Eating is an evidence-based, non-diet approach to eating that helps you rebuild trust with your body's hunger, fullness, and satisfaction signals.</p>

                  <p>Developed by dietitians Evelyn Tribole and Elyse Resch, Intuitive Eating consists of 10 principles that guide you back to your body's innate wisdom about eating.</p>

                  <div>
                    <p className="font-semibold text-foreground">How Intuitive Eating is DIFFERENT from meal plans:</p>
                    <p><strong>Meal Plans:</strong> External rules, ignores your body's signals, rigid and inflexible, often designed for weight loss, creates dependence</p>
                    <p><strong>Intuitive Eating:</strong> Internal guidance from your body, honors hunger and fullness, flexible and individualized, designed for well-being, builds self-trust, sustainable for life</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What Intuitive Eating is NOT:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>❌ 'Eat whatever you want, whenever you want'</li>
                      <li>❌ Ignoring nutrition or health</li>
                      <li>❌ Another diet or set of food rules</li>
                      <li>❌ A weight loss plan</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What Intuitive Eating IS:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>✓ Learning to trust your body's signals</li>
                      <li>✓ Making peace with all foods</li>
                      <li>✓ Eating for satisfaction and nourishment</li>
                      <li>✓ Freedom from food obsession</li>
                      <li>✓ A sustainable, lifelong approach</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Intuitive Eating is one of the most well-researched approaches to eating, with over 200 studies showing benefits including reduced disordered eating, improved body image, better psychological well-being, and sustainable behavior change.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q17" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">How long will treatment take?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>This is one of the most common questions—and also one of the most difficult to answer with a specific timeline because recovery is highly individual.</p>

                  <div>
                    <p className="font-semibold text-foreground">General timelines (very approximate):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Symptom reduction:</strong> 3-6 months. Many clients notice decreased eating disorder symptoms</li>
                      <li><strong>Significant improvement:</strong> 6-12 months. Substantial progress in eating patterns, body image, coping skills</li>
                      <li><strong>Full recovery:</strong> 1-3+ years. Complete freedom from eating disorder thoughts and behaviors</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Important notes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Recovery is non-linear:</strong> Progress isn't steady—there are ups and downs. Setbacks are normal</li>
                      <li><strong>Quality matters more than speed:</strong> We focus on lasting recovery, not quick fixes</li>
                      <li><strong>You won't be in intensive therapy forever:</strong> Session frequency typically decreases as you progress</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Bottom line: There's no set timeline, but we're committed to supporting you for as long as you need. What matters most is that you're moving toward recovery—at YOUR pace—with lasting changes that transform your life.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q18" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do you use a specific type of therapy (CBT, DBT, etc.)?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Our therapists are trained in multiple evidence-based approaches and tailor treatment to YOUR unique needs rather than using one rigid method for everyone.</p>

                  <div>
                    <p className="font-semibold text-foreground">Common therapeutic approaches we use:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Identifies and changes unhelpful thought patterns. Evidence-based for eating disorders</li>
                      <li><strong>Dialectical Behavior Therapy (DBT):</strong> Teaches emotion regulation skills, mindfulness, distress tolerance. Especially helpful for binge eating</li>
                      <li><strong>Acceptance and Commitment Therapy (ACT):</strong> Acceptance of difficult thoughts/feelings, values-based action, psychological flexibility</li>
                      <li><strong>Internal Family Systems (IFS):</strong> Explores different 'parts' of self. Compassionate approach to internal conflicts</li>
                      <li><strong>Emotion-Focused Therapy:</strong> Focuses on emotional awareness and processing</li>
                      <li><strong>Psychodynamic Therapy:</strong> Explores unconscious patterns and root causes</li>
                      <li><strong>Somatic/Body-Based Approaches:</strong> Healing trauma stored in the body</li>
                      <li><strong>Trauma-Informed Care:</strong> Recognizes trauma's role in eating disorders</li>
                      <li><strong>Family Systems Therapy:</strong> Addresses family dynamics when appropriate</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Integrated, flexible approach:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We often combine multiple approaches</li>
                      <li>Treatment evolves as your needs change</li>
                      <li>We follow your lead about what helps</li>
                      <li>Evidence-based but personalized</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">All of our approaches are grounded in Health At Every Size® (HAES®) principles, Intuitive Eating framework, trauma-informed care, and weight-neutral, non-diet philosophy.</p>

                  <p>Questions about therapeutic approaches? Ask during your consultation or first session. We're happy to explain our methods and help you understand how therapy will work.</p>
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
                      <li><strong>Meal plans reinforce the problem:</strong> External rules about eating are PART of what creates eating disorders. They teach you NOT to trust yourself</li>
                      <li><strong>They don't address root causes:</strong> They focus on symptoms (what you eat) not causes (why you struggle)</li>
                      <li><strong>One-size-fits-all doesn't work:</strong> Your body's needs are unique and constantly changing</li>
                      <li><strong>Our goal is AUTONOMY:</strong> We want you to trust YOURSELF, not a meal plan. True recovery means internal guidance, not external rules</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What we do instead:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Intuitive Eating guidance:</strong> Learn to recognize and honor hunger and fullness, give yourself unconditional permission to eat</li>
                      <li><strong>General nutrition education:</strong> Understanding how foods affect your body using gentle nutrition principles (not rigid rules)</li>
                      <li><strong>Structured flexibility:</strong> For those very disconnected from hunger/fullness, temporary general structure as a bridge</li>
                      <li><strong>Meal support:</strong> Working through challenging food situations, addressing fear foods gradually</li>
                      <li><strong>Addressing emotional roots:</strong> Why you struggle with food—emotional patterns, using food to cope, perfectionism</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Common concerns:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>'But I don't know what to eat without rules!' → We'll help you rebuild that internal guidance. It takes time, but it's possible and sustainable</li>
                      <li>'I need structure or I'll binge.' → Actually, restriction and rigid rules often CAUSE binging. We'll help you break that cycle</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Bottom line: We're here to help you learn to eat intuitively, trust your body, and make food decisions based on YOUR needs—not to give you another set of rules to follow. This approach may feel scary at first if you're used to external control. We'll support you through it, and the freedom you gain is worth it.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q20" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do you weigh clients? What if I don't want to be weighed?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Our practice is weight-neutral and HAES®-aligned, which means weight is NOT a focus of treatment.</p>

                  <div>
                    <p className="font-semibold text-foreground">Our standard practice:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>✓ We do NOT routinely weigh clients</li>
                      <li>✓ You can be weighed 'blind' if needed (backwards, don't see the number)</li>
                      <li>✓ You can decline weighing</li>
                      <li>✓ Weight is not a measure of health or recovery progress</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Why we don't focus on weight:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Weight is not a reliable indicator of health</li>
                      <li>Weight focus reinforces eating disorders</li>
                      <li>Weight-neutral approach works better</li>
                      <li>Your body will find its natural weight when you stop restricting and binging</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What we focus on INSTEAD:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Eating patterns and behaviors</li>
                      <li>Physical health (energy levels, digestion, strength)</li>
                      <li>Mental/emotional well-being</li>
                      <li>Relationship with food and body</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Your rights around weighing:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You have the right to decline being weighed at any time</li>
                      <li>You have the right to be weighed blind if weighing is necessary</li>
                      <li>You have the right to ask why weighing is being requested</li>
                      <li>You do NOT have to know your weight, track your weight, or have weight goals</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Bottom line: You will not be pressured to weigh yourself or know your weight. Our focus is on your well-being, recovery, and building a peaceful relationship with your body—not on numbers.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q21" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Can I see a therapist and a dietitian at the same time?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Yes—and we strongly recommend it! Seeing both a therapist and a dietitian provides the most comprehensive treatment for eating disorders.</p>

                  <div>
                    <p className="font-semibold text-foreground">Why combined treatment is most effective:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Therapists focus on:</strong> Root causes, emotional coping skills, trauma processing, body image work, mental health concerns, why you use food the way you do</li>
                      <li><strong>Dietitians focus on:</strong> Rebuilding trust with hunger/fullness, nutrition education, challenging food rules, Intuitive Eating principles, practical meal support, how to nourish your body</li>
                      <li><strong>Together:</strong> They provide comprehensive, integrated care that addresses both 'why' and 'how' for faster, more lasting recovery</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">How combined treatment works:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your therapist and dietitian communicate (with your consent)</li>
                      <li>They collaborate on treatment goals</li>
                      <li>Typical frequency: Therapist weekly, Dietitian weekly or every-other-week</li>
                      <li>Schedule can be adjusted based on your needs</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">If you can only afford one:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Start with a therapist if:</strong> Your eating disorder is primarily emotional coping, you have significant trauma/depression/anxiety, or body image is the priority</li>
                      <li><strong>Start with a dietitian if:</strong> You're primarily confused about how to eat, you have strong nutrition-specific fears, or you need practical meal support</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Bottom line: Combined therapy and nutrition counseling provides the most comprehensive, effective treatment for eating disorders. If you can manage it, we highly recommend seeing both—even if one is less frequent than the other.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          {/* Category 4: Insurance & Financial Information */}
          <div id="insurance" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-primary">Insurance & Financial Information</h2>
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="q22" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do you accept insurance?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Yes! Beyond Eating Recovery accepts most major insurance plans for Oregon and Washington residents. We are in-network with many commercial insurance carriers and also work with out-of-network benefits.</p>
                  <p>To verify your specific coverage, please call us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> or click the 'Verify Your Insurance' button on our <Link to="/contact" className="text-primary hover:underline font-semibold">contact page</Link>. Our team will help you understand your benefits and any out-of-pocket costs.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q23" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What are my responsibilities regarding insurance coverage?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">It is your responsibility as the client to:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Verify your insurance coverage before beginning treatment.</strong> While we assist with verification, you should confirm your benefits, deductibles, copays, and any out-of-network costs directly with your insurance company.</li>
                    <li><strong>Communicate any insurance changes immediately.</strong> If your insurance plan changes, your coverage changes, or you switch insurance companies, please notify us right away. Changes in coverage can affect your treatment costs and our ability to bill your insurance.</li>
                    <li><strong>Understand your benefits.</strong> Insurance plans vary widely in what they cover for mental health and nutrition services. We recommend calling your insurance company with the questions provided below to fully understand your coverage.</li>
                  </ul>
                  <p>Please contact us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> if you have questions about your insurance or if your coverage changes.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q24" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What CPT codes do you use, and what questions should I ask my insurance company?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>When calling your insurance company to verify coverage, it's helpful to provide them with the specific CPT codes we use and ask targeted questions about your benefits.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">CPT Codes for Mental Health Services (Therapy):</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>90791 - Initial Diagnostic Interview</li>
                      <li>90834 - 45-minute therapy session</li>
                      <li>90837 - 53-minute therapy session</li>
                      <li>90847 - Family therapy (with patient present)</li>
                      <li>90853 - Group therapy</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">CPT Codes for Registered Dietitian Services:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>97802 - Medical nutrition therapy, initial assessment</li>
                      <li>97803 - Medical nutrition therapy, re-assessment</li>
                      <li>97804 - Medical nutrition therapy, group session</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Questions to Ask Your Insurance Company:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Do I have mental health and/or nutrition benefits under my plan?</li>
                      <li>What is my deductible for mental health services, and how much have I met?</li>
                      <li>What is my copay or coinsurance for outpatient mental health services (CPT codes listed above)?</li>
                      <li>Is Beyond Eating Recovery in-network with my plan? (Provide our Tax ID if requested)</li>
                      <li>Do I need a referral or pre-authorization for outpatient therapy or nutrition services?</li>
                      <li>How many therapy sessions are covered per year?</li>
                      <li>Are nutrition/dietitian services (CPT codes 97802, 97803, 97804) covered under my plan?</li>
                      <li>If Beyond Eating Recovery is out-of-network, what are my out-of-network benefits?</li>
                      <li>Is there a limit to how much I can be reimbursed for out-of-network services?</li>
                    </ol>
                  </div>

                  <p className="font-semibold text-foreground italic">We recommend writing down the representative's name, the date, and reference number for your call.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q25" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What's the difference between mental health and dietitian billing?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Mental health services (therapy) and dietitian services are billed differently and often have different coverage under your insurance plan.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">Mental Health Services (Therapy):</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Provided by licensed therapists (LPC, LMHC, LCSW)</li>
                      <li>Billed under mental health benefits</li>
                      <li>Typically covered with copays or coinsurance</li>
                      <li>May have separate deductibles from medical services</li>
                      <li>Often have session limits per year</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Registered Dietitian (RD) Services:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Provided by licensed dietitians specializing in eating disorders</li>
                      <li>Billed under medical nutrition therapy (MNT) benefits or medical benefits</li>
                      <li>Coverage varies significantly by insurance plan</li>
                      <li>Some plans require a physician referral or diagnosis of a medical condition</li>
                      <li>May not be covered at all by some plans, or may have limited sessions</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Important: Even if therapy is covered, dietitian services may not be, or vice versa. We strongly recommend verifying coverage for both types of services separately when you call your insurance company.</p>
                  
                  <p>If you have questions about billing for either service, please call us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a>.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q26" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What information can the clinic provide during insurance verification?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>When you contact us to verify your insurance, our team can help identify certain information about your coverage. However, there are limitations to what we can determine during the verification process.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">What We Can Help Identify:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Whether we are in-network or out-of-network with your insurance plan</li>
                      <li>Your estimated copay or coinsurance amounts</li>
                      <li>Your deductible information (total and remaining)</li>
                      <li>Whether pre-authorization is required</li>
                      <li>Basic coverage for mental health and nutrition services</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What You Must Verify Directly with Your Insurance:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Exact out-of-pocket costs for your specific plan</li>
                      <li>Any exclusions or limitations specific to eating disorder treatment</li>
                      <li>Coverage for specific CPT codes and service types</li>
                      <li>Appeal processes if claims are denied</li>
                      <li>Out-of-network reimbursement rates and procedures</li>
                      <li>Whether your plan has changed or will change during treatment</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-foreground">Why this matters: Insurance companies may provide us with preliminary benefit information, but only you as the policyholder can receive complete and binding coverage details. We encourage you to verify coverage directly with your insurance company using the CPT codes and questions listed above to avoid unexpected costs.</p>
                  
                  <p>We're here to help! Call us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> with any questions about the verification process.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q27" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What does treatment cost?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Treatment costs vary depending on the type and frequency of services you receive. Here's a general overview:</p>
                  
                  <div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Individual Therapy Sessions:</strong> Typically range from $150-$200 per session (45-53 minutes)</li>
                      <li><strong>Dietitian Sessions:</strong> Typically range from $150-$200 per session</li>
                      <li><strong>Group Therapy:</strong> Lower cost per session, varies by group type</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">With Insurance:</p>
                    <p>Your out-of-pocket cost will depend on your specific insurance plan, including your deductible, copay, and coinsurance rates.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Without Insurance:</p>
                    <p>We offer sliding scale fees based on income and financial need. Please ask about our sliding scale options when you call <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a>.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Good Faith Estimate:</p>
                    <p>Under federal law, you have the right to receive a "Good Faith Estimate" explaining how much your medical care will cost before you receive services. If you'd like a Good Faith Estimate, please contact us.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q28" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Do you offer sliding scale or financial assistance?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Yes! We understand that eating disorder treatment is essential, and cost should not be a barrier to care.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">Sliding Scale Fees:</p>
                    <p>We offer reduced fees based on your income and financial situation for clients who qualify. Sliding scale rates are available on a limited basis.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Payment Plans:</p>
                    <p>We may be able to work with you on payment arrangements for out-of-pocket costs.</p>
                  </div>

                  <p>To discuss financial assistance options, please call us at <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a>. Our team will work with you confidentially to find a solution that makes treatment accessible.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q29" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">What is a Good Faith Estimate?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Under the No Surprises Act (federal law), healthcare providers must give uninsured or self-pay patients a Good Faith Estimate of expected charges before services are provided.</p>
                  
                  <div>
                    <p className="font-semibold text-foreground">What is it?</p>
                    <p>A Good Faith Estimate is a written document showing the expected cost of your treatment, including all planned services and fees.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Who gets one?</p>
                    <p>Uninsured clients or clients who choose not to use their insurance must receive a Good Faith Estimate.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">When do I get it?</p>
                    <p>You'll receive your Good Faith Estimate before your first appointment or when you request one.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">What if the actual cost is different?</p>
                    <p>If your final bill is significantly different (more than $400 over the estimate), you have the right to dispute the charges.</p>
                  </div>

                  <p>To request a Good Faith Estimate, please call <a href="tel:360-726-4141" className="text-primary hover:underline font-semibold">360-726-4141</a> or mention it when scheduling your first appointment.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          {/* Category 5: What to Expect in Treatment */}
          <div id="what-to-expect" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-primary">What to Expect in Treatment</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q30" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Is therapy confidential?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Yes, therapy sessions are confidential within the limits of the law.</p>
                  <p>We will explain confidentiality and its limits during your first session.</p>
                  <p>We only share information with your consent or if required to protect your safety or others.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q31" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Is there support between sessions?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>We offer limited support between sessions via secure messaging or brief check-ins, depending on your provider's policies.</p>
                  <p>Emergency support is available through crisis lines and emergency services.</p>
                  <p>Discuss your needs and preferences with your therapist or dietitian.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q32" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Can I switch therapists?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Yes, you have the right to change providers if you feel your current therapist or dietitian isn't the right fit.</p>
                  <p>We encourage open communication and can help facilitate a smooth transition.</p>
                  <p>Your comfort and trust are important for successful treatment.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help. If you didn't find the answer you were looking for, please don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:360-726-4141">Call 360-726-4141</a>
            </Button>
          </div>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default FAQ;
