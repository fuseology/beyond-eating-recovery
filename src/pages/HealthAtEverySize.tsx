import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Heart, 
  Users, 
  Scale, 
  Utensils, 
  Sparkles,
  CheckCircle,
  ArrowDown,
  Book,
  ExternalLink
} from "lucide-react";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";

const HealthAtEverySize = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm md:text-base font-semibold mb-4 uppercase tracking-wide">
            A Revolutionary Approach to Health
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Health At Every Size®: End the Obsession
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
            A health-centered paradigm that focuses on total well-being, not weight
          </p>
          
          {/* Definition Box */}
          <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-white/20 mb-10">
            <CardContent className="pt-6">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed italic mb-4">
                "HEALTH AT EVERY SIZE™ (also known as HEALTH AT ANY SIZE) is a health-centered paradigm that focuses on total health and well-being, not weight. It promotes active living, eating well without dieting, and a nurturing environment that includes respect and acceptance for people of all sizes."
              </p>
              <p className="text-sm text-white/80">— Healthy Weight Network</p>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('principles')}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Learn the HAES® Principles <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/battle-of-the-binge'}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              End the Diet Cycle
            </Button>
          </div>
        </div>
      </section>

      {/* Anne's Personal Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              My Journey: From Diet Mentality to Body Liberation
            </h2>
            
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <img 
                  src={anneCuthbertPhoto} 
                  alt="Anne Cuthbert, founder of Beyond Eating Recovery"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              <div className="md:col-span-3 space-y-4 text-foreground/80 text-lg leading-relaxed">
                <p className="font-semibold text-primary text-xl">
                  Like many, I used to think that being fat was unhealthy.
                </p>
                
                <p>
                  I used to think it was my fault when I gained or lost weight. I believed that the BMI determined my level of self-esteem. I thought that my 'ideal weight' was something I should be in control over—and if I couldn't control it, something was wrong with me.
                </p>
                
                <p className="font-semibold text-primary text-xl">
                  No longer!
                </p>
                
                <p>
                  Through my own recovery journey and years of studying the research, I've discovered that everything I was taught about weight and health was wrong. The diet industry, the medical establishment, and our culture have sold us a lie—one that profits from our insecurity and keeps us trapped in cycles of shame and self-blame.
                </p>
                
                <p className="font-semibold">
                  What I've learned has set me free—and it can set you free too.
                </p>
                
                <div className="bg-secondary/30 p-6 rounded-lg space-y-2">
                  <p className="font-semibold text-primary mb-3">The truth is:</p>
                  {[
                    "Weight is not the primary determinant of health",
                    "Dieting doesn't work long-term (for anyone!)",
                    "Your body has a natural set point it will defend",
                    "You can pursue health at any size",
                    "Body diversity is normal, natural, and healthy"
                  ].map((truth, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span>{truth}</span>
                    </div>
                  ))}
                </div>
                
                <p className="italic">
                  This isn't just theory—it's how I live my life now, and it's the foundation of how I work with clients. I no longer use food to cope. I feel good about myself, my body, and my life. And I'm passionate about helping others experience this same freedom through Health At Every Size® principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Research */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
              What the Research Actually Shows
            </h2>
            <p className="text-xl text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
              The evidence doesn't support what we've been told about weight and health
            </p>
            
            <div className="space-y-10">
              {/* Research Finding 1 */}
              <Card className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Research Finding #1: The 'Obesity Paradox'
                  </h3>
                  
                  <div className="bg-accent/10 p-6 rounded-lg mb-4">
                    <p className="text-lg italic mb-2">
                      "Although people think there's all this evidence out there showing a high mortality risk associated with (being) overweight, in fact the literature doesn't show it."
                    </p>
                    <p className="text-sm text-foreground/70">
                      — Katherine M. Flegal, PhD, Senior Research Scientist at the National Center for Health Statistics, CDC
                    </p>
                  </div>
                  
                  <p className="text-lg mb-4 leading-relaxed">
                    <strong>Far from it.</strong>
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Flegal's research, analyzing 30 years of actual deaths in the US, corrected an earlier CDC report that indicated severe risks related to being 'overweight.' She showed instead that being clinically 'overweight' is associated with a <strong>lower death rate</strong> than so-called 'normal' or 'healthy' weight (JAMA 2005;293:1861-1867).
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    This confirmed much earlier research that had been studiously ignored.
                  </p>
                  
                  <p className="text-sm text-foreground/60 mt-4 italic">
                    Source: Healthy Weight Network
                  </p>
                </CardContent>
              </Card>

              {/* Research Finding 2 */}
              <Card className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Research Finding #2: Diets Don't Work
                  </h3>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    In addition, weight loss attempts don't work... <strong>for anyone!</strong>
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Study after study shows that:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "95-98% of diets fail long-term",
                      "Most people regain the weight they lost (and often more)",
                      "Weight cycling (yo-yo dieting) is actually harmful to health",
                      "Dieting is one of the strongest predictors of future weight gain"
                    ].map((finding, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-lg">{finding}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    The more you diet, the more you become obsessed with food, your body, and your failures.
                  </p>
                  
                  <p className="text-lg font-semibold text-primary">
                    So even if you do believe that being fat is unhealthy, is dieting really working for you?
                  </p>
                </CardContent>
              </Card>

              {/* What DOES Work */}
              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">
                    What DOES Work: Stopping the Diet Cycle
                  </h3>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    To support the people I work with, one of the first steps we take is to help them stop dieting.
                  </p>
                  
                  <p className="text-lg font-semibold mb-4">
                    The majority who do this experience an immediate freedom from food they have never before experienced as an adult!
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-lg font-semibold">They tell me:</p>
                    {[
                      "They eat less because they enjoyed what they really wanted",
                      "The need to binge decreases right away",
                      "Obsessions with body size diminish",
                      "They feel healthier very quickly after stopping dieting practices"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xl font-bold mt-6 text-accent">
                    You can too!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* HAES Principles */}
      <section id="principles" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
              HAES® Principles at Work: A New Framework for Health
            </h2>
            <p className="text-xl text-center text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              The Association for Size Diversity and Health (ASDAH), along with many other organizations and individuals, are committed to spreading the word about Health At Every Size® and the HAES® Principles. These five principles provide a roadmap for pursuing health and well-being without weight focus.
            </p>

            <Accordion type="single" collapsible className="space-y-4" defaultValue="principle-1">
              {/* Principle 1: Weight Inclusivity */}
              <AccordionItem value="principle-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        Principle 1: Weight Inclusivity
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-4">
                  <Card className="bg-accent/10 border-accent/30 mb-6">
                    <CardContent className="pt-6">
                      <p className="text-lg italic">
                        "Accept and respect the inherent diversity of body shapes and sizes and reject the idealizing or pathologizing of specific weights."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p className="font-semibold text-primary">Let's break this down:</p>
                    
                    <p>
                      Weight Inclusivity talks about realizing that we come in all shapes and sizes—and this is normal and healthy!
                    </p>
                    
                    <p>
                      After all, if we all looked the same and thought the same and had the same strengths and weaknesses, we certainly would not be a thriving culture.
                    </p>
                    
                    <p>
                      Accepting your body and the bodies around you will help you stop focusing on your body!
                    </p>
                    
                    <p className="font-semibold text-primary">
                      Imagine never again allowing your appearance to stop you from enjoying your life! You can stop the familiar and sad thought process of 'I'll do that fun thing when I lose weight.'
                    </p>
                    
                    <p className="text-xl font-bold">
                      No... DO IT NOW!
                    </p>
                    
                    <p>
                      Here's the truth: Your body will not allow you to maintain weight loss. If you've cycled up and down before, it will happen again and again. Your body doesn't like to lose weight and will battle you to prevent it!
                    </p>
                    
                    <p>
                      It's much easier, believe it or not, to just accept yourself as you are than to fight this lifelong, losing battle with your body!
                    </p>
                    
                    <p className="italic">
                      This can be challenging, of course, but with help it is possible—and so worth it.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Principle 2: Health Enhancement */}
              <AccordionItem value="principle-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        Principle 2: Health Enhancement
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-4">
                  <Card className="bg-accent/10 border-accent/30 mb-6">
                    <CardContent className="pt-6">
                      <p className="text-lg italic">
                        "Support health policies that improve and equalize access to information and services, and personal practices that improve human well-being, including attention to individual physical, economic, social, spiritual, emotional, and other needs."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                      Health Enhancement speaks to improving health and well-being from a social and political consciousness.
                    </p>
                    
                    <p>
                      A culture that idolizes thinness (or anything one-dimensional) is an unwell and unhealthy culture. This causes prejudice and harm to others—and that harm comes back to you.
                    </p>
                    
                    <p className="font-semibold text-primary">True health is multidimensional:</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Physical well-being",
                        "Mental and emotional health",
                        "Social connection and support",
                        "Economic stability and security",
                        "Spiritual fulfillment",
                        "Access to quality healthcare without weight bias"
                      ].map((dimension, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{dimension}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold text-primary mt-6">Health enhancement means:</p>
                    
                    <div className="space-y-3">
                      {[
                        "Advocating for policies that improve healthcare access for all bodies",
                        "Recognizing that social determinants (race, class, gender, sexuality) impact health",
                        "Supporting practices that genuinely improve well-being—not just pursue weight loss",
                        "Understanding health as a complex, individualized concept"
                      ].map((meaning, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{meaning}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold">
                      When we shift focus from weight to actual well-being, everyone benefits.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Principle 3: Respectful Care */}
              <AccordionItem value="principle-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        Principle 3: Respectful Care
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-4">
                  <Card className="bg-accent/10 border-accent/30 mb-6">
                    <CardContent className="pt-6">
                      <p className="text-lg italic">
                        "Acknowledge our biases, and work to end weight discrimination, weight stigma, and weight bias. Provide information and services from an understanding that socio-economic status, race, gender, sexual orientation, age, and other identities impact weight stigma, and support environments that address these inequities."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                      Respectful Care is about acknowledging your own biases around weight and health.
                    </p>
                    
                    <p>
                      We all have them. It would be nearly impossible to not have biases in this culture.
                    </p>
                    
                    <p className="font-semibold">
                      Start by owning your own bias. From there, you can more readily accept yourself and others and counter the conditioning and harm that weight bias causes us all!
                    </p>
                    
                    <p className="font-semibold text-primary mt-6">Weight stigma is real—and it causes harm:</p>
                    
                    <div className="space-y-3">
                      {[
                        "Healthcare providers who assume all health problems are caused by weight",
                        "Employment discrimination against larger-bodied people",
                        "Social exclusion and bullying",
                        "Internalized shame and self-hatred",
                        "Avoidance of healthcare due to past experiences of weight bias"
                      ].map((harm, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{harm}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold text-primary mt-6">
                      Intersectionality matters: Weight stigma intersects with racism, sexism, homophobia, transphobia, ableism, and classism. People with marginalized identities experience compounded discrimination.
                    </p>
                    
                    <p className="font-semibold text-primary mt-6">Respectful care means:</p>
                    
                    <div className="space-y-3">
                      {[
                        "Examining and challenging our own weight bias",
                        "Providing healthcare and services without weight discrimination",
                        "Recognizing how different identities impact experiences of weight stigma",
                        "Creating truly inclusive, welcoming environments for all bodies",
                        "Actively working to dismantle systems of oppression"
                      ].map((action, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold">
                      When we practice respectful care, we create healing spaces for everyone.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Principle 4: Eating for Well-Being */}
              <AccordionItem value="principle-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        Principle 4: Eating for Well-Being
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-4">
                  <Card className="bg-accent/10 border-accent/30 mb-6">
                    <CardContent className="pt-6">
                      <p className="text-lg italic">
                        "Promote flexible, individualized eating based on hunger, satiety, nutritional needs, and pleasure, rather than any externally regulated eating plan focused on weight control."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                      Eating for Well-Being is the opposite of dieting for weight loss (which often masquerades as 'health' but really means weight loss hope).
                    </p>
                    
                    <p className="font-semibold text-primary">Diet actions and thoughts lead to:</p>
                    
                    <div className="space-y-3">
                      {[
                        "Lack of self-trust around food",
                        "Inability to listen to your body's hunger and fullness cues",
                        "Food obsession and preoccupation",
                        "Binge eating and loss of control",
                        "Guilt and shame around eating",
                        "Disconnection from pleasure and satisfaction"
                      ].map((consequence, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{consequence}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold text-primary mt-6">Eating for well-being means:</p>
                    
                    <div className="space-y-3">
                      {[
                        "Listening to your body's hunger and fullness signals",
                        "Eating foods you enjoy without guilt or restriction",
                        "Nourishing your body with variety and adequacy",
                        "Finding satisfaction in your meals",
                        "Honoring your cravings and food preferences",
                        "Letting go of food rules and rigid eating plans",
                        "Flexibility in eating based on your life, not a diet"
                      ].map((practice, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{practice}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold">
                      This is Intuitive Eating—trusting your body's innate wisdom about what, when, and how much to eat.
                    </p>
                    
                    <p>
                      When you stop dieting and start eating for well-being, food loses its power over you. You eat less because you're actually satisfied. Binge eating decreases. Food thoughts quiet down. You finally make peace with eating.
                    </p>
                    
                    <p className="text-xl font-bold text-accent">
                      You can have this freedom.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Principle 5: Life-Enhancing Movement */}
              <AccordionItem value="principle-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        Principle 5: Life-Enhancing Movement
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-4">
                  <Card className="bg-accent/10 border-accent/30 mb-6">
                    <CardContent className="pt-6">
                      <p className="text-lg italic">
                        "Support physical activities that allow people of all sizes, abilities, and interests to engage in enjoyable movement, to the degree that they choose."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                      Life-Enhancing Movement is about moving your body in any way that feels good to you!
                    </p>
                    
                    <p>
                      Unlike the conflicting nutritional advice out there (often disguised diet talk), most experts will agree that exercise without the emphasis on weight loss hope is healthy!
                    </p>
                    
                    <p className="font-semibold">
                      What movement you choose and how often you choose to do it is completely up to you! It's your body... you decide!
                    </p>
                    
                    <p className="font-semibold text-primary mt-6">Traditional exercise culture often teaches:</p>
                    
                    <div className="space-y-3">
                      {[
                        "Exercise is punishment for eating",
                        "You must exercise to 'burn calories' or 'earn your food'",
                        "More is always better (leading to injury and burnout)",
                        "Only certain types of movement 'count'",
                        "You must push through pain and exhaustion"
                      ].map((myth, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{myth}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold text-primary mt-6">Life-enhancing movement is different:</p>
                    
                    <div className="space-y-3">
                      {[
                        "Movement for joy — Choose activities you actually enjoy",
                        "Movement for how it makes you feel — Energy, strength, stress relief, mood improvement",
                        "Movement that honors your body — Rest when needed, modify as necessary",
                        "Movement that's accessible — All bodies, all abilities, all fitness levels welcome",
                        "Movement as self-care — Not punishment or obligation"
                      ].map((principle, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{principle}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold text-primary mt-6">Examples of life-enhancing movement:</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Dancing in your kitchen",
                        "Walking in nature",
                        "Gentle yoga or stretching",
                        "Swimming or water activities",
                        "Playing with kids or pets",
                        "Gardening",
                        "Recreational sports for fun (not competition)",
                        "Whatever brings you joy and feels good in your body!"
                      ].map((example, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="font-semibold mt-6">
                      The goal isn't weight loss—it's vitality, strength, stress relief, and enjoyment.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Putting HAES Into Practice */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
              Living the HAES® Principles: What This Means for You
            </h2>
            <p className="text-xl text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
              The HAES® Principles are a healthy and helpful way to embrace and make the changes you wish to make. They help put your life and health back in your hands and support positive change in the culture around you.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-primary">Stop Dieting</h3>
                      <div className="space-y-3 text-lg">
                        {[
                          "Throw away the scale (or at least stop weighing yourself)",
                          "Unfollow diet culture accounts on social media",
                          "Challenge 'wellness' programs that are really just diets in disguise",
                          "Give yourself unconditional permission to eat"
                        ].map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-primary">Challenge Weight Bias (In Yourself and Others)</h3>
                      <div className="space-y-3 text-lg">
                        {[
                          "Notice when you have judgmental thoughts about bodies (yours or others')",
                          "Question the assumption that thin = healthy and fat = unhealthy",
                          "Speak up when you witness weight discrimination",
                          "Diversify your media consumption to include all body types"
                        ].map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-primary">Listen to Your Body</h3>
                      <div className="space-y-3 text-lg">
                        {[
                          "Practice recognizing hunger and fullness",
                          "Honor cravings without judgment",
                          "Move in ways that feel good",
                          "Rest when you need rest"
                        ].map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-primary">Seek Weight-Neutral Healthcare</h3>
                      <div className="space-y-3 text-lg">
                        {[
                          "Find providers who practice HAES® principles",
                          "Request that appointments not include weighing (or ask to be weighed backwards)",
                          "Advocate for yourself when providers attribute everything to your weight",
                          "Seek second opinions from weight-inclusive providers"
                        ].map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent">5</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-primary">Find Community</h3>
                      <div className="space-y-3 text-lg">
                        {[
                          "Connect with others who understand HAES®",
                          "Join body-positive, anti-diet communities",
                          "Seek therapy from HAES®-aligned providers",
                          "Surround yourself with people who support your journey"
                        ].map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-accent/10 border-accent/30">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  HAES® also provides a community to reach out to! It's a lot easier to handle prejudice, discrimination, and the thin ideal when surrounded by like-minded people!
                </p>
                <p className="text-lg font-semibold mt-4 text-primary">
                  Start by getting help for your own body image shame and disordered eating behaviors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
              You Don't Have to Do This Alone
            </h2>
            <p className="text-xl text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
              Shifting from diet mentality to Health At Every Size® principles is a profound transformation—and it's not always easy in a culture that constantly pushes weight loss.
            </p>

            <p className="text-lg text-center mb-12">
              At Beyond Eating Recovery, all of our services are grounded in HAES® principles:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Individual Therapy */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Individual Therapy</h3>
                  <p className="text-lg mb-4">Work one-on-one with a HAES®-aligned therapist to:</p>
                  <div className="space-y-2 mb-6">
                    {[
                      "Heal your relationship with food and body",
                      "Challenge internalized weight bias",
                      "Address the root causes of disordered eating",
                      "Build body acceptance and self-compassion",
                      "Navigate a weight-obsessed culture"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/services#individual-therapy'}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Learn About Individual Therapy
                  </Button>
                </CardContent>
              </Card>

              {/* Dietitian Services */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Dietitian Services</h3>
                  <p className="text-lg mb-4">Work with a weight-neutral dietitian to:</p>
                  <div className="space-y-2 mb-6">
                    {[
                      "Practice Intuitive Eating",
                      "Rebuild trust with your body's signals",
                      "Nourish your body without dieting",
                      "Address nutritional concerns from HAES® perspective",
                      "Make peace with food"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/services#dietitian-services'}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Learn About Dietitian Services
                  </Button>
                </CardContent>
              </Card>

              {/* Battle of the Binge */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Battle of the Binge Program</h3>
                  <p className="text-lg mb-4">Our self-study course teaches you to:</p>
                  <div className="space-y-2 mb-6">
                    {[
                      "End the restrict-binge cycle",
                      "Stop dieting for good",
                      "Address emotional eating",
                      "Trust yourself around food",
                      "Embrace HAES® principles"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/battle-of-the-binge'}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Explore Battle of the Binge
                  </Button>
                </CardContent>
              </Card>

              {/* Group Therapy */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Group Therapy</h3>
                  <p className="text-lg mb-4">Connect with others on similar journeys:</p>
                  <div className="space-y-2 mb-6">
                    {[
                      "LGBTQIA+ Eating Disorder Support Group",
                      "Body image groups",
                      "Intuitive eating groups",
                      "Community support and validation"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/services#group-therapy'}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Learn About Groups
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
              Learn More About Health At Every Size®
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Organizations */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-bold text-primary">Organizations</h3>
                  </div>
                  <div className="space-y-4">
                    <a 
                      href="https://www.sizediversityandhealth.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-lg hover:text-accent transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 flex-shrink-0 mt-1 group-hover:text-accent" />
                      <div>
                        <p className="font-semibold">Association for Size Diversity and Health (ASDAH)</p>
                        <p className="text-sm text-foreground/70">Official organization promoting HAES® principles, professional resources, and research</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-2 text-lg">
                      <Book className="w-5 h-5 flex-shrink-0 mt-1 text-accent" />
                      <div>
                        <p className="font-semibold">Healthy Weight Network</p>
                        <p className="text-sm text-foreground/70">Resource for weight-neutral health information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-lg">
                      <Heart className="w-5 h-5 flex-shrink-0 mt-1 text-accent" />
                      <div>
                        <p className="font-semibold">CREDN</p>
                        <p className="text-sm text-foreground/70">Columbia River Eating Disorders Network - Local eating disorder support and advocacy</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Books */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Book className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-bold text-primary">Recommended Reading</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Health At Every Size by Lindo Bacon, PhD",
                      "Body Respect by Lindo Bacon and Lucy Aphramor",
                      "Intuitive Eating by Evelyn Tribole and Elyse Resch",
                      "Anti-Diet by Christy Harrison",
                      "The Body Is Not an Apology by Sonya Renee Taylor",
                      "If Your Hunger Could Talk by Anne Cuthbert (forthcoming)"
                    ].map((book, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-lg">{book}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-accent/10 border-accent/30">
              <CardContent className="pt-6">
                <p className="text-lg italic">
                  Note: These are educational resources. For personalized support, please contact our practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to End the Diet Cycle and Embrace Health At Every Size®?
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed">
              You don't have to spend another day trapped in diet culture, hating your body, or believing that your worth is determined by your weight.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-10">
              <p className="text-xl font-semibold mb-6">Health At Every Size® offers a different path:</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "Freedom from food obsession",
                  "Peace with your body",
                  "Health without weight focus",
                  "Self-trust and body respect",
                  "A richer, more satisfying life"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xl mb-10 leading-relaxed">
              Our entire practice is built on HAES® principles. We're here to support you in this paradigm shift—from diet mentality to body liberation.
            </p>

            <p className="text-2xl font-bold mb-8 text-accent">
              Take the first step today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/about'}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Meet Our HAES®-Aligned Team
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/services'}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Explore Treatment Options
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-lg">
                Questions about Health At Every Size® or how we incorporate it into treatment?<br />
                We're happy to talk with you.
              </p>
              <p className="text-lg mt-4">
                Contact us at <a href="tel:360-726-4141" className="font-semibold hover:text-accent transition-colors">360-726-4141</a> or through our <a href="/contact" className="font-semibold hover:text-accent transition-colors">contact form</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default HealthAtEverySize;
