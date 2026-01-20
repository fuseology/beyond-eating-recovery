import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, ExternalLink, Heart, Unlock, Search } from "lucide-react";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import { CourseSchema } from "@/components/schemas";

const BattleOfTheBinge = () => {
  const courseLink = "https://battleofthebinge.com/";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Battle of the Binge | Online Course for Binge Eating Recovery | Beyond Eating Recovery</title>
        <meta 
          name="description" 
          content="Break free from binge eating and emotional eating with our 4-week self-study online course. Learn to end the restrict-binge cycle and make peace with food." 
        />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/battle-of-the-binge" />
      </Helmet>
      <CourseSchema
        name="Battle of the Binge"
        description="A 4-week self-study online course to break free from binge eating and emotional eating. Learn proven strategies to end the restrict-binge cycle, understand your emotional eating triggers, and make peace with food—without another diet."
        providerName="Beyond Eating Recovery"
        providerUrl="https://www.beyondeatingrecovery.com"
        instructorName="Anne Cuthbert"
        instructorUrl="https://www.beyondeatingrecovery.com/about/anne-cuthbert"
        courseUrl={courseLink}
        duration="P4W"
        courseMode="Online"
      />
      <Header />
      <Breadcrumbs />
      
      <main className="flex-grow">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-accent text-lg md:text-xl font-semibold mb-4 text-center">
            Introducing: Battle of the Binge
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight">
            Your First Step to Freeing Yourself from Binge Eating and Emotional Eating—For Good!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-center font-medium">
            I'll tell you the secret to ending the cycle of binge eating and teach you how to address your feelings so emotional eating becomes a thing of the past
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Get help with my <strong className="text-accent">4-week self-study course: BATTLE OF THE BINGE</strong>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              A proven, step-by-step program that teaches you to break free from the restrict-binge cycle, understand your emotional eating, and finally make peace with food—without another diet.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto"
            >
              <a href={courseLink} target="_blank" rel="noopener noreferrer">
                Purchase Course <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto"
            >
              <a href="#course-details">
                Learn More ↓
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Do You Struggle Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Does This Sound Like You?
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
            If you've been battling binge eating and emotional eating, you're not alone—and it's not your fault. See if any of these resonate:
          </p>
          
          <div className="space-y-4 mb-12">
            {[
              "Find yourself at the fridge, over and over again, never full and never fully satisfied",
              "Know you eat for emotional reasons but you have no idea why or how to stop",
              "Think about food and eating much more than you want or know you should",
              "Are tired of dieting just to find yourself out of control and binging once again"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
            <p className="text-lg leading-relaxed mb-4">
              If you have any of these challenges with food, I can help you end this crazy-making cycle so you can finally eat what you want and what's good for your body, without guilt.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-primary">
              The secret isn't another diet. The secret is understanding why you're stuck in this cycle—and learning a completely different approach.
            </p>
          </div>
        </div>
      </section>

      {/* The Truth About Diets */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            The Secret to Resolving Food Challenges:<br />Let Go of Those Diets That Don't Work and Never Will!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                Lots of people are doing the diet thing, trying to get the weight under control so they feel good about themselves. Like 98% of people, over and over again, you find they don't work!
              </p>
              
              <p className="text-xl font-bold text-primary">
                Well, it isn't you that failed. It's the diet!
              </p>
              
              <p className="text-lg">
                You probably know this equation all too well:
              </p>
              
              <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                <p className="text-lg font-semibold text-center">
                  Restrictive Dieting + Emotional Eating = <br />A Never-Ending, Self-Critical Cycle of Feeling Out of Control with Food
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Here's why diets fail you:</h3>
                
                <div className="space-y-3">
                  <p className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span><strong>Diets create deprivation:</strong> When you restrict your favorite foods, you create intense cravings and preoccupation with those very foods.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span><strong>Deprivation leads to binging:</strong> Eventually, willpower runs out, and you find yourself binging on exactly the foods you were trying to avoid.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span><strong>Binging leads to shame:</strong> After a binge, you feel guilty, out of control, and determined to 'get back on track' with another diet.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span><strong>Shame leads back to dieting:</strong> And the cycle begins again.</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6 text-primary">The Restrict-Binge Cycle</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-destructive/10 rounded-full w-48 h-48 flex items-center justify-center">
                    <p className="font-bold text-lg">DIET<br />↓<br />Deprivation<br />↓<br />Craving<br />↓<br />BINGE<br />↓<br />Shame<br />↓<br />DIET...</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-bold">
                    Break the Cycle with<br />Battle of the Binge
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-primary/5 p-8 rounded-lg border-l-4 border-primary max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-4">
              <strong>The real problem?</strong> Diets teach you NOT to trust yourself. They position you as someone who can't be trusted around food, who needs external rules and control. This is exactly what keeps you feeling so out of control with food.
            </p>
            <p className="text-lg leading-relaxed mb-4 font-semibold">
              They don't work. They never have. They never will.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>What DOES work?</strong> Learning to trust yourself again. Understanding the root causes of your binge eating. Addressing your emotional needs directly instead of through food. Building a peaceful, sustainable relationship with eating.
            </p>
            <p className="text-xl font-bold text-primary mt-6">
              And that's exactly what Battle of the Binge teaches you.
            </p>
          </div>
        </div>
      </section>

      {/* What I'll Teach You */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            I'll Teach You What Will Work to Get You Off the Diet Roller Coaster and On With Your Life!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Why You Really Binge</h3>
              <p className="text-foreground/80 leading-relaxed">
                Discover the underlying emotional, psychological, and behavioral patterns driving your binge eating. It's not about willpower—it's about unmet needs. You'll learn to identify what you're truly hungry for.
              </p>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Unlock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">End the Restrict-Binge Pattern</h3>
              <p className="text-foreground/80 leading-relaxed">
                Learn proven strategies to step off the diet roller coaster for good. You'll understand why restriction fuels bingeing and how to create a new relationship with food based on trust, not rules.
              </p>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Stop Using Food to Cope</h3>
              <p className="text-foreground/80 leading-relaxed">
                Develop healthier ways to process and cope with your emotions. When you address feelings directly, emotional eating naturally decreases. You'll build a toolkit of alternative coping strategies.
              </p>
            </div>
          </div>
          
          <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              By the end of this 4-week course, you'll have:
            </h3>
            <ul className="space-y-3">
              {[
                "A clear understanding of your personal binge eating triggers",
                "Practical tools to interrupt the binge cycle before it starts",
                "Strategies for meeting emotional needs without food",
                "Confidence in your ability to eat without guilt or fear",
                "Freedom from the constant mental chatter about food and eating"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section id="course-details" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            What's Inside Battle of the Binge?
          </h2>
          <p className="text-xl text-center text-foreground/80 mb-12">
            A comprehensive 4-week self-study program you can complete at your own pace
          </p>
          
          <div className="bg-accent text-white p-8 rounded-lg mb-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="mb-2"><strong>Format:</strong> Self-study online course</p>
                <p className="mb-2"><strong>Duration:</strong> 4 weeks of content (lifetime access)</p>
                <p className="mb-2"><strong>Time Commitment:</strong> 1-2 hours per week + daily practices</p>
              </div>
              <div>
                <p className="mb-2"><strong>Delivery:</strong> Video lessons, workbooks, exercises</p>
                <p className="mb-2"><strong>Access:</strong> Immediate upon purchase</p>
                <p className="mb-2"><strong>Pace:</strong> Learn at your own speed</p>
              </div>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="week1" className="bg-background border-2 border-accent/20 rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Understanding Your Relationship with Food</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Why diets don't work (and what does)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>The restrict-binge cycle explained</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Identifying your personal triggers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Beginning to challenge diet mentality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Introduction to intuitive eating principles</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="week2" className="bg-background border-2 border-accent/20 rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">The Emotional Roots of Binge Eating</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Understanding emotional eating vs. physical hunger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Common emotions that trigger binges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Exploring unmet needs beneath the behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Beginning to separate feelings from food</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Journaling exercises and self-reflection tools</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="week3" className="bg-background border-2 border-accent/20 rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Breaking the Cycle</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Interrupting the binge urge before it starts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Strategies for handling cravings and urges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Building alternative coping skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Creating a personal toolkit for challenging moments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Practice exercises for real-life situations</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="week4" className="bg-background border-2 border-accent/20 rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Building Your New Relationship with Food</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Establishing trust with yourself and food</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Creating sustainable eating practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Handling setbacks and challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Maintenance strategies for long-term success</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Continuing your journey beyond the course</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Bonus Materials:</h3>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Printable workbooks and exercises</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Guided meditation and relaxation practices</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Resource library with additional reading</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Is Battle of the Binge Right for You?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent/5 p-8 rounded-lg border-2 border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-6">This Course Is Perfect If You:</h3>
              <ul className="space-y-3">
                {[
                  "Struggle with binge eating or emotional eating",
                  "Are ready to stop dieting and try a different approach",
                  "Want to understand the root causes of your eating patterns",
                  "Are willing to do the internal work required for change",
                  "Prefer self-paced learning on your own schedule",
                  "Want practical tools and strategies, not just theory",
                  "Are open to challenging beliefs about food, weight, and dieting"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-lg border-2 border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">This Course Might Not Be Right If You:</h3>
              <ul className="space-y-3 text-foreground/80">
                {[
                  "Are looking for a quick fix or weight loss program (this isn't a diet!)",
                  "Aren't ready to let go of restrictive dieting",
                  "Need intensive clinical support for severe eating disorders (consider individual therapy)",
                  "Prefer in-person or live-facilitated programs only",
                  "Aren't willing to engage with course materials and exercises"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-2xl">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-center mt-8 text-lg text-foreground/80 italic">
            If you're unsure whether this course is right for your situation, please <Link to="/contact" className="text-accent hover:underline font-semibold">contact us</Link>. We're happy to help you determine the best fit for your needs.
          </p>
        </div>
      </section>

      {/* About Anne */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Meet Your Instructor: Anne Cuthbert
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src={anneCuthbertPhoto} 
                alt="Anne Cuthbert, MA, LPC, LMHC - Creator of Battle of the Binge" 
                className="w-full rounded-lg shadow-lg mb-6"
              />
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">My Credentials:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Licensed Professional Counselor (LPC) in Oregon</li>
                  <li>• Licensed Mental Health Counselor (LMHC) in Washington</li>
                  <li>• Master's Degree in Counseling Psychology</li>
                  <li>• 20+ years specializing in eating disorders</li>
                  <li>• Author of <em>If Your Hunger Could Talk</em></li>
                  <li>• Board member of CREDN</li>
                  <li>• ASDAH member</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-xl font-bold text-primary">
                Anne Cuthbert, MA, LPC, LMHC<br />
                Creator of Battle of the Binge
              </p>
              
              <p className="text-lg font-semibold">
                Hi, I'm Anne—and I know firsthand what it's like to struggle with food and body issues.
              </p>
              
              <p>
                For years, I battled binge eating, emotional eating, and body hatred. I tried every diet, felt constantly out of control, and believed something was fundamentally wrong with me. I was stuck in the same exhausting cycle you might be experiencing right now.
              </p>
              
              <p className="font-semibold">
                But I found a way out—and it had nothing to do with another diet.
              </p>
              
              <p>
                Through my own recovery journey and over 20 years as a licensed counselor specializing in eating disorders, I've helped hundreds of people break free from binge eating and emotional eating. I've developed proven methods that address the root causes, not just the symptoms.
              </p>
              
              <p>
                <strong>Battle of the Binge</strong> distills everything I've learned—both personally and professionally—into a practical, accessible 4-week program. This course contains the same principles and strategies I use with my individual therapy clients, packaged in a self-study format so you can start your journey to food freedom right now.
              </p>
              
              <p className="text-lg font-bold text-primary">
                I believe you can overcome binge eating—because I've seen it happen again and again. And I'd be honored to guide you on this journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="access" className="bg-muted/30 border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="font-semibold">How long do I have access to the course?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/80">
                You'll have lifetime access to all course materials. Learn at your own pace and return to lessons whenever you need a refresher.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="diet" className="bg-muted/30 border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="font-semibold">Is this a diet or weight loss program?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/80">
                No! This is NOT a diet. Battle of the Binge is an anti-diet program focused on healing your relationship with food and addressing the root causes of binge eating. Weight loss is not the goal or focus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="therapy" className="bg-muted/30 border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="font-semibold">Can I do this course while in therapy?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/80">
                Absolutely! Many people use this course as a supplement to individual therapy. If you're currently working with a therapist, we encourage you to let them know you're taking the course.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="bg-muted/30 border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="font-semibold">What if I need more support than a self-study course provides?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/80">
                If you find you need more intensive support, we offer individual therapy services at Beyond Eating Recovery. <Link to="/contact" className="text-accent hover:underline">Contact us</Link> to discuss your needs and we'll help you find the right level of care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="time" className="bg-muted/30 border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="font-semibold">How much time do I need to dedicate each week?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/80">
                Plan for approximately 1-2 hours per week for video lessons and workbook exercises, plus brief daily practices (5-15 minutes). The course is designed to fit into a busy schedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="behind" className="bg-muted/30 border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="font-semibold">What if I miss a week or fall behind?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/80">
                No problem! This is a self-paced course with lifetime access. You can take as long as you need to complete the material. There's no deadline or pressure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tried" className="bg-muted/30 border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="font-semibold">Will this work if I've tried everything else?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/80">
                If "everything else" has been diets and willpower-based approaches, then YES—this will be different. We address the ROOT CAUSES of binge eating, not just the symptoms. However, sustainable change requires engagement with the material and willingness to do the work.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="disorder" className="bg-muted/30 border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="font-semibold">Can I take this course if I have a diagnosed eating disorder?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/80">
                This course is designed for binge eating and emotional eating patterns. If you have a diagnosed eating disorder requiring clinical treatment, please consult with a healthcare provider about whether this course is appropriate as a supplement to clinical care.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Break Free from Binge Eating?
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-medium">
            Your journey to food freedom starts now
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-10">
            <p className="text-lg leading-relaxed mb-6">
              You don't have to spend another day feeling controlled by food, trapped in the restrict-binge cycle, or hating yourself for something that isn't your fault.
            </p>
            
            <p className="text-xl font-semibold mb-6">
              Battle of the Binge gives you the knowledge, tools, and support you need to:
            </p>
            
            <ul className="space-y-3 text-left max-w-2xl mx-auto mb-6">
              {[
                "Understand why you binge (and how to stop)",
                "Break free from diet mentality forever",
                "Address emotional eating at its root",
                "Trust yourself around food again",
                "Build lasting peace with eating"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-lg italic">
              This is your chance to finally do something different—something that actually works.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-accent hover:bg-white/90 text-xl px-12 py-7 h-auto w-full sm:w-auto"
            >
              <a href={courseLink} target="_blank" rel="noopener noreferrer">
                Enroll in Battle of the Binge Now <ExternalLink className="ml-2 w-6 h-6" />
              </a>
            </Button>
            
            <div className="text-sm">
              <a 
                href={courseLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white underline"
              >
                Visit course website for pricing and details
              </a>
            </div>
          </div>
          
          <p className="text-base max-w-2xl mx-auto">
            Have questions before enrolling? <Link to="/contact" className="underline hover:text-white/90">Contact us</Link> and we'll be happy to help you determine if this course is right for you.
          </p>
        </div>
      </section>

      </main>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default BattleOfTheBinge;
