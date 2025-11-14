import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, Activity, Utensils, Scale, Eye, Smile, Brain, Phone } from "lucide-react";

const Conditions = () => {
  const conditions = [
    {
      id: "anorexia",
      icon: Scale,
      title: "Anorexia Nervosa",
      sections: [
        {
          subtitle: "What is Anorexia?",
          content: "Anorexia nervosa is a serious eating disorder characterized by severe food restriction, an intense fear of gaining weight, and a distorted body image. People with anorexia often see themselves as overweight even when they are dangerously underweight."
        },
        {
          subtitle: "Types",
          content: "Restrictive Type: Severely limiting food intake and calories. Binge/Purge Type: Periods of restriction followed by episodes of binge eating and purging behaviors."
        },
        {
          subtitle: "Signs & Symptoms",
          content: "Dramatic weight loss, preoccupation with food and calories, excessive exercise, denial of hunger, social withdrawal, fatigue, and medical complications including heart problems and bone loss."
        },
        {
          subtitle: "How We Help",
          content: "Our treatment addresses the psychological, emotional, and behavioral aspects of anorexia. We use evidence-based therapies including CBT, DBT, and family therapy, combined with nutritional counseling and medical monitoring when needed."
        }
      ],
      cta: "Get help for anorexia"
    },
    {
      id: "bulimia",
      icon: Activity,
      title: "Bulimia Nervosa",
      sections: [
        {
          subtitle: "What is Bulimia?",
          content: "Bulimia nervosa involves cycles of binge eating followed by compensatory behaviors to prevent weight gain. These cycles are often accompanied by feelings of shame, guilt, and loss of control."
        },
        {
          subtitle: "Types",
          content: "Purging Type: Regular use of self-induced vomiting or misuse of laxatives, diuretics, or enemas. Non-Purging Type: Using other compensatory behaviors like fasting or excessive exercise without regular purging."
        },
        {
          subtitle: "Signs & Symptoms",
          content: "Recurrent binge eating episodes, feeling out of control during binges, secretive eating patterns, frequent bathroom visits after meals, dental problems, throat issues, and fluctuating weight."
        },
        {
          subtitle: "Treatment Approach",
          content: "We help break the binge-purge cycle by addressing underlying emotional triggers, developing healthy coping mechanisms, and rebuilding a peaceful relationship with food through Intuitive Eating principles."
        }
      ],
      cta: "Start your recovery"
    },
    {
      id: "bed",
      icon: Utensils,
      title: "Binge Eating Disorder (BED)",
      sections: [
        {
          subtitle: "Definition & Prevalence",
          content: "Binge Eating Disorder is the most common eating disorder in the United States, affecting people of all body sizes. It involves recurrent episodes of eating large quantities of food, often quickly and to the point of discomfort, accompanied by feelings of loss of control."
        },
        {
          subtitle: "Causes",
          content: "Biological: Genetic predisposition, brain chemistry differences. Psychological: Trauma, low self-esteem, perfectionism, emotion regulation difficulties. Social/Cultural: Diet culture, weight stigma, cultural pressures about body size."
        },
        {
          subtitle: "Signs & Symptoms",
          content: "Eating unusually large amounts of food in a specific period, eating when not hungry, eating until uncomfortably full, eating alone due to embarrassment, feeling disgusted or guilty after overeating, and significant distress about binge eating."
        },
        {
          subtitle: "Treatment Options",
          content: "Our HAES-aligned approach focuses on ending the restrict-binge cycle, addressing emotional eating triggers, developing self-compassion, and learning to honor hunger and fullness cues without judgment."
        }
      ],
      cta: "Find support for BED"
    },
    {
      id: "orthorexia",
      icon: Heart,
      title: "Orthorexia",
      sections: [
        {
          subtitle: "Understanding Orthorexia",
          content: "Orthorexia is an unhealthy obsession with healthy eating. While not officially recognized in the DSM-5, it represents a serious pattern where the pursuit of 'clean' or 'pure' eating becomes all-consuming and negatively impacts quality of life."
        },
        {
          subtitle: "Common Patterns",
          content: "Obsessive focus on food quality and purity, severe restriction of food groups, anxiety when 'safe' foods aren't available, rigid eating rules, social isolation due to food preferences, and self-worth tied to dietary choices."
        },
        {
          subtitle: "Health Impacts",
          content: "Despite appearing 'healthy' on the surface, orthorexia can lead to malnutrition, social isolation, anxiety, depression, and a severely restricted life. The mental and emotional toll is significant."
        },
        {
          subtitle: "Recovery Support",
          content: "We help clients challenge food rules, rebuild food flexibility, address underlying anxiety and perfectionism, and develop a balanced approach to nutrition that supports both physical and mental well-being."
        }
      ],
      cta: "Begin your journey"
    },
    {
      id: "bdd",
      icon: Eye,
      title: "Body Dysmorphic Disorder",
      sections: [
        {
          subtitle: "What is BDD?",
          content: "Body Dysmorphic Disorder is a mental health condition where a person obsessively focuses on perceived flaws in their appearance—flaws that are often minor or not observable to others. This preoccupation causes significant distress and impacts daily functioning."
        },
        {
          subtitle: "Signs & Symptoms",
          content: "Obsessive thoughts about appearance, compulsive mirror checking or avoidance, excessive grooming, seeking reassurance about appearance, comparing appearance to others, and avoiding social situations due to appearance concerns."
        },
        {
          subtitle: "Connection to Eating Disorders",
          content: "BDD and eating disorders often co-occur. Both involve distorted perceptions of the body and can reinforce each other. Many people with eating disorders also struggle with BDD symptoms."
        },
        {
          subtitle: "Integrated Treatment",
          content: "Our approach addresses both the perceptual and emotional components of BDD, using specialized techniques to challenge distorted thoughts and develop a more compassionate relationship with your body."
        }
      ],
      cta: "Get specialized care"
    },
    {
      id: "body-image",
      icon: Smile,
      title: "Body Image Issues",
      sections: [
        {
          subtitle: "Negative vs. Positive Body Image",
          content: "Negative body image involves distorted perception of your body, constant comparison to others, and feelings of shame or inadequacy. Positive body image means accepting your body, appreciating its functions, and feeling comfortable in your skin."
        },
        {
          subtitle: "Causes of Distorted Body Image",
          content: "Media and social media exposure, diet culture messaging, childhood experiences, trauma, bullying or teasing about appearance, and societal beauty standards that prioritize thinness and specific body types."
        },
        {
          subtitle: "Body Shame & Diet Culture",
          content: "Diet culture teaches us that our worth is tied to our body size and that we must constantly work to change our bodies. This creates shame, anxiety, and an adversarial relationship with our own bodies."
        },
        {
          subtitle: "Building Body Acceptance",
          content: "Through body-positive therapy, we help you challenge harmful beliefs, develop body neutrality or acceptance, appreciate your body's functions beyond appearance, and reject diet culture's harmful messages."
        }
      ],
      cta: "Transform your relationship"
    },
    {
      id: "co-occurring",
      icon: Brain,
      title: "Co-Occurring Disorders",
      sections: [
        {
          subtitle: "Common Co-Occurring Conditions",
          content: "Depression: Affecting 50-75% of people with eating disorders, characterized by persistent sadness, loss of interest, and hopelessness.\n\nAnxiety Disorders: Including generalized anxiety, social anxiety, and OCD, which often fuel eating disorder behaviors.\n\nPTSD: Trauma history is common in eating disorders, with many using disordered eating as a way to cope with traumatic experiences.\n\nSubstance Abuse: Overlapping patterns of using external substances or behaviors to manage emotions.\n\nBorderline Personality Disorder: Characterized by emotional dysregulation, which can manifest in disordered eating patterns.\n\nSelf-Injury/Self-Harm: Often serving similar functions as eating disorder behaviors—to manage overwhelming emotions."
        },
        {
          subtitle: "Integrated Treatment Approach",
          content: "We recognize that eating disorders rarely exist in isolation. Our treatment addresses all co-occurring conditions simultaneously, understanding that healing requires addressing the whole person, not just isolated symptoms."
        }
      ],
      cta: "Comprehensive care"
    }
  ];

  const whoWeServe = [
    "Adolescents & Teens",
    "Adults & Professionals",
    "Men with eating disorders",
    "LGBTQIA+ community",
    "All body sizes (HAES approach)",
    "Athletes & performers"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Understanding Eating Disorders & Body Image Struggles
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We treat the full spectrum of eating disorders with compassion and evidence-based care.
          </p>
        </div>
      </section>

      {/* Conditions Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {conditions.map((condition) => (
                <AccordionItem 
                  key={condition.id} 
                  value={condition.id}
                  className="border-2 rounded-lg px-6 bg-white shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <condition.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-xl font-semibold text-primary text-left">
                        {condition.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-6">
                      {condition.sections.map((section, idx) => (
                        <div key={idx}>
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {section.subtitle}
                          </h3>
                          <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>
                      ))}
                      <Button className="bg-accent hover:bg-accent/90 text-white mt-4">
                        {condition.cta}
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Treatment Philosophy */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
            Our Treatment Philosophy
          </h2>
          <p className="text-xl text-center max-w-4xl mx-auto leading-relaxed text-foreground/90">
            "We address the root causes, not just symptoms. Eating disorders serve a purpose—they're coping mechanisms for deeper emotional pain. Our approach helps you heal from the inside out."
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whoWeServe.map((group, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium text-foreground/90">{group}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to begin healing?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to discuss how we can support your recovery journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Schedule Consultation
            </Button>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:3607264141" className="text-white font-semibold hover:underline text-lg">
                360-726-4141
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conditions;