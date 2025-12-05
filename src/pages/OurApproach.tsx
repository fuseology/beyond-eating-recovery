import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ExternalLink, Phone, MapPin, Clock, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const OurApproach = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Approach to Lasting Freedom
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            A compassionate, step-by-step path to make peace with food, love your body, and reclaim your life
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            At Beyond Eating Recovery, we don't just treat symptoms—we address the root causes of your relationship with food and your body. Through our compassionate, evidence-based approach, you'll discover how to eat without fear, accept your body, and build the rich, satisfying life you deserve.
          </p>
        </div>
      </section>

      {/* Anne's Philosophy Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Anne Cuthbert's Approach: From Personal Experience to Professional Expertise
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Combining lived experience with over 20 years of clinical expertise
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            {/* Main Content */}
            <main className="space-y-8">
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg font-semibold text-primary">
                  I know firsthand what it's like to struggle with food and body issues.
                </p>
                
                <p>
                  For years, I battled my own demons—comparing myself to every woman I saw, using food to hide my feelings, avoiding intimacy, and believing I couldn't be loved if I was fat. I resisted exercise as an act of rebellion against what others told me I should do and how I should look. Food became my primary coping mechanism, and hating my body became my constant companion.
                </p>
                
                <p className="font-semibold text-lg">
                  But all that has changed.
                </p>
                
                <p>
                  Now, I no longer use food to cope. I feel good about myself, my body, and my life. This personal transformation ignited my passion for helping others recover. I love that my work as a counselor involves helping you eat whatever you want and feel genuinely good about it.
                </p>
                
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <p className="font-semibold text-lg mb-3">As your therapist, I will help you discover how to:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Eat and enjoy the foods you really love, without worrying about gaining weight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Accept and even like your body</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Find and maintain your natural healthy weight by uncovering the underlying causes for your behaviors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Focus on and improve your relationships by moving away from blaming food and your body</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Learn to like yourself—your whole self</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p>
                  My approach goes beyond traditional talk therapy. I help you develop healthier coping skills around food, your body, and your life in general. We'll address the root causes of your problems with food—because food issues and poor body image are symptoms of deeper needs that haven't been met.
                </p>
                
                <p>
                  Through step-by-step changes in counseling, you'll overcome your problems around food and develop a richer, more satisfying life. In the end, you won't just change your relationship with food—you'll transform your entire relationship with yourself.
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">My Credentials & Experience:</h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Licensed Professional Counselor (LPC) in Oregon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Licensed Mental Health Counselor (LMHC) in Washington</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Licensed Marriage and Family Therapist (LMFT) in California</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Master's Degree in Counseling Psychology, Antioch University, Santa Barbara, CA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>20+ years of counseling experience specializing in eating disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Studied and worked with leading experts in the eating disorder field</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Acting board member of CREDN (Columbia River Eating Disorders Network)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>ASDAH member (Association for Size Diversity and Health) serving on Internal Policy Committee, Membership Committee, and Conference Planning Committee (co-chair)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Teacher of counseling and communication skills classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Facilitator and manager of personal growth seminars and support groups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">•</span>
                  <span>Experienced treating relationship issues, trauma, and adult survivors of childhood abuse</span>
                </li>
              </ul>
              
              <p className="mt-6 text-lg font-semibold text-primary">
                I look forward to working with you.<br />
                — Anne
              </p>
            </div>
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
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-white/90">
                  Take the first step toward freedom. Schedule a free consultation to learn how we can support your healing journey.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:3607264141" className="hover:underline">360-726-4141</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Portland, OR & Vancouver, WA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Monday - Friday: 9am - 5pm</span>
                  </div>
                </div>
                <Button className="w-full bg-[#f49a39] hover:bg-[#e38929] text-white" size="lg" asChild>
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
                <p className="text-xs text-white/80 text-center">
                  We accept insurance and offer self-pay options • Teletherapy Available
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
        </div>
      </section>

      {/* 6 Steps Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            The Six Steps to Making Peace with Food
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our treatment approach follows a structured, sequential pathway designed to help you finally make peace with food, love your body, and trust yourself. Each step builds on the previous one, creating lasting transformation rather than temporary fixes.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            <main>
              <Accordion type="single" collapsible defaultValue="step1" className="space-y-4">
            {/* Step 1 */}
            <AccordionItem value="step1" className="bg-background border-2 border-accent/20 rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Shameless Eating</h3>
                    <p className="text-sm md:text-base text-muted-foreground">End the cycle of good food/bad food, good me/bad me</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="font-semibold text-lg text-primary">
                    This first step will derail your drive to binge eat.
                  </p>
                  
                  <p>
                    For too long, you've divided food into 'good' and 'bad,' which translates into judging yourself as 'good me' or 'bad me' based on what you eat. This binary thinking fuels the restrict-binge cycle and keeps you trapped in shame.
                  </p>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-semibold mb-2">In Step 1, you will:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Change your mindset around food</strong> — Learn to see food as neutral, neither good nor bad</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Begin to let go of self-criticism</strong> — Release the harsh inner voice that judges every bite</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Transform your interaction with food</strong> — Move from fear and control to curiosity and permission</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Take the first steps toward self-trust</strong> — Start trusting yourself with the foods you eat and believing in your inherent worth</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    <strong>What this looks like in practice:</strong> You'll challenge long-held beliefs about food, practice eating previously 'forbidden' foods in a safe therapeutic environment, and begin noticing (without judgment) how different foods make you feel physically and emotionally.
                  </p>
                  
                  <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <strong>The outcome:</strong> When you remove the moral judgment from food, you remove the power it has over you. Shameless eating is the foundation for all the work that follows—because you can't heal your relationship with food while still believing some foods make you a 'bad person.'
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Step 2 */}
            <AccordionItem value="step2" className="bg-background border-2 border-accent/20 rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Crack the Portion Control Code</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Reconnect with your body's hunger and fullness signals</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="font-semibold text-lg text-primary">
                    In this step, you will learn how to connect to your body's innate wisdom about hunger and fullness.
                  </p>
                  
                  <p>
                    Diet culture has taught you to ignore your body's signals and follow external rules about when, what, and how much to eat. This disconnection is at the heart of disordered eating patterns.
                  </p>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-semibold mb-2">In Step 2, you will:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Rediscover hunger cues</strong> — Learn to recognize and honor true physical hunger</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Identify fullness signals</strong> — Understand your body's natural 'enough' point</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Gain trust in feeding your body</strong> — Learn what your body wants and how much it needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Resolve underlying emotional issues</strong> — Address the fears around hunger or fullness that keep you stuck</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    <strong>What this looks like in practice:</strong> Through mindful eating exercises, body awareness practices, and emotional exploration, you'll rebuild the connection between your mind and body. We'll work through any trauma or fear associated with hunger or fullness.
                  </p>
                  
                  <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <strong>The outcome:</strong> You'll develop the ability to eat according to your body's needs rather than external diet rules or emotional triggers. This internal guidance system becomes your new 'portion control'—one that's flexible, intuitive, and sustainable for life.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Step 3 */}
            <AccordionItem value="step3" className="bg-background border-2 border-accent/20 rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">If Your Hunger Could Talk</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Discover what you're truly hungry for beyond food</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="font-semibold text-lg text-primary">
                    During this step, which takes place throughout our work together, we will go deeper into your body to discover what you actually want and need.
                  </p>
                  
                  <p>
                    Physical hunger is only one type of hunger. Often, we use food to feed emotional, spiritual, relational, or existential hungers—needs that food can never truly satisfy.
                  </p>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-semibold mb-2">In Step 3, you will:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Learn to distinguish types of hunger</strong> — Physical, emotional, spiritual, relational</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Listen to what you're truly hungry for</strong> — Connection, purpose, rest, joy, expression, safety</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Feed yourself what leads to true fulfillment</strong> — Address core needs directly rather than using food as a substitute</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Access your body's deeper wisdom</strong> — Trust the guidance your body offers beyond just hunger and fullness</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    <strong>What this looks like in practice:</strong> We'll explore questions like: "If your hunger could talk, what would it say?" "What are you really hungry for in this moment?" "What does your body need that food cannot provide?" Through journaling, somatic exercises, and therapeutic dialogue, you'll learn to translate your body's messages.
                  </p>
                  
                  <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <strong>The outcome:</strong> You'll develop a sophisticated understanding of your needs and how to meet them. Food will no longer be your primary coping mechanism because you'll have direct access to what you truly need—and the skills to provide it for yourself.
                  </p>
                  
                  <p className="text-sm text-muted-foreground italic mt-4">
                    Note: This step is named after Anne's forthcoming book, creating brand cohesion
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Step 4 */}
            <AccordionItem value="step4" className="bg-background border-2 border-accent/20 rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Enjoy a Body Love Fest</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Transform your body image and learn to live fully in your body now</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="font-semibold text-lg text-primary">
                    In this step, you will directly address your body image and learn to experience feeling good in the clothes you wear and living in your body now—rather than in some future fantasy while your life passes by.
                  </p>
                  
                  <p>
                    Body hatred isn't your fault—it's the result of living in a culture that profits from your insecurity. But you can learn to see and experience your body differently.
                  </p>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-semibold mb-2">In Step 4, you will:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Challenge societal misconceptions</strong> — Unlearn the harmful messages about bodies, size, and worth</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Experience your body from new perspectives</strong> — Through exercises and techniques, discover your body's capabilities, sensations, and inherent value beyond appearance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Learn to feel good in your current body</strong> — Practice body appreciation and neutral body image work</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Let go of the 'when I lose weight' trap</strong> — Start living your life fully now, not in some imagined future</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    <strong>What this looks like in practice:</strong> We'll use mirror work, movement practices, clothing exercises, gratitude practices, and cognitive reframing to shift how you see and experience your body. We'll address the roots of body shame (often tied to trauma, cultural messages, or family dynamics) and build genuine body respect.
                  </p>
                  
                  <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <strong>The outcome:</strong> You'll move from body hatred to body acceptance—and possibly even body appreciation. More importantly, you'll stop putting your life on hold waiting to have a 'better' body. You'll wear clothes you love, do activities you enjoy, and show up fully in your life today.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Step 5 */}
            <AccordionItem value="step5" className="bg-background border-2 border-accent/20 rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-white">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Exercise for Pleasure</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Discover joyful movement that honors your body</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="font-semibold text-lg text-primary">
                    In this step, you will learn how to engage in healthy exercise habits—whether you exercise too much or avoid it altogether.
                  </p>
                  
                  <p>
                    Exercise has likely been weaponized in your relationship with your body—either as punishment for eating or as a tool for controlling your weight. Or perhaps you've rejected exercise entirely as resistance to diet culture demands.
                  </p>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-semibold mb-2">In Step 5, you will:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Redefine your relationship with movement</strong> — Separate exercise from weight control and punishment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Discover what feels good in your body</strong> — Find forms of movement you actually enjoy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Learn to listen to your body's needs</strong> — Honor when your body needs movement and when it needs rest</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Balance movement in your life</strong> — Whether you over-exercise or avoid it, find sustainable middle ground</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    <strong>What this looks like in practice:</strong> We'll explore different forms of movement without the goal of weight loss or body change. You'll experiment with various activities to discover what brings you joy, energy, and embodiment. We'll address any exercise compulsion or avoidance, understanding the emotional roots of both extremes.
                  </p>
                  
                  <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <strong>The outcome:</strong> You'll develop an exercise practice (or non-practice) that's sustainable, enjoyable, and honors your body's actual needs. Movement becomes something you get to do, not something you have to do. You'll exercise for pleasure, stress relief, and health—not to earn food or punish your body.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Step 6 */}
            <AccordionItem value="step6" className="bg-background border-2 border-accent/20 rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-white">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Move Into Your Life</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Build lasting self-trust, self-love, and self-acceptance</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="font-semibold text-lg text-primary">
                    In this final step, you will learn how to have a long-term relationship of self-trust, self-love, and self-acceptance.
                  </p>
                  
                  <p>
                    Recovery isn't a destination—it's an ongoing relationship with yourself. This step is about integration and sustainability, ensuring the changes you've made last for life.
                  </p>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-semibold mb-2">In Step 6, you will:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Create structured, healthy boundaries</strong> — Develop boundaries around food and body image that protect your recovery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Establish ongoing practices</strong> — Build rituals and practices that maintain your relationship with food and body</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Identify areas for continued growth</strong> — Recognize that recovery is a journey with seasons of challenge and ease</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Enjoy your life more fully</strong> — Experience the freedom to focus on relationships, passions, and purpose instead of food and body obsession</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span><strong>Trust yourself deeply</strong> — Know you can navigate challenges, emotions, and life transitions without returning to old patterns</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    <strong>What this looks like in practice:</strong> We'll create a personalized maintenance plan, identify warning signs of struggle, and develop coping strategies for high-risk situations. We'll celebrate how far you've come and prepare you for ongoing life in recovery.
                  </p>
                  
                  <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <strong>The outcome:</strong> You'll leave therapy with a solid foundation of self-trust, practical tools for navigating challenges, and confidence in your ability to maintain food freedom. You'll have reclaimed mental and emotional space previously consumed by food and body thoughts—space now available for living the rich, satisfying life you deserve.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
              </Accordion>
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
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-white/90">
                    Take the first step toward freedom. Schedule a free consultation to learn how we can support your healing journey.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <a href="tel:3607264141" className="hover:underline">360-726-4141</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>Portland, OR & Vancouver, WA</div>
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
      </section>

      {/* Teletherapy Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Teletherapy: Don't Miss Your Next Session
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Life happens—illness, travel, weather, or simply the need for convenience. With teletherapy, you can continue your important work from the safety and comfort of your own home. We're committed to making therapy accessible and uninterrupted.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            <main className="space-y-8">
              <div className="bg-muted/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">When to Use Teletherapy</h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                The season of getting sick is always with us, and we all have good reason to be especially conscious of not spreading germs. If you have any cold or flu symptoms, we ask you to stay home and get yourself well rather than come to the office—and for several days after your symptoms subside.
              </p>
              
              <p className="font-semibold text-lg">
                We don't want you to miss your sessions.
              </p>
              
              <p>
                Teletherapy allows you to continue your therapeutic work without interruption, maintaining the momentum of your recovery even when in-person sessions aren't possible.
              </p>
              
              <div className="bg-accent/10 p-6 rounded-lg mt-6">
                <h4 className="font-bold text-lg mb-3">To set up teletherapy, please contact:</h4>
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:Anne@foodisnotthenemy.com" className="text-accent hover:underline">Anne@foodisnotthenemy.com</a><br />
                  Or reach out to your Food Is Not The Enemy therapist directly
                </p>
                
                <h4 className="font-bold text-lg mb-3">What you'll need:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>A private space at home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>A good internet connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>A computer or tablet (laptop or desktop preferred)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Completion of additional paperwork before we begin (we'll provide this)</span>
                  </li>
                </ul>
                
                <p className="mt-4 italic">
                  Please ask us for more details—we're here to make this process smooth and accessible.
                </p>
              </div>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {/* Creating Confidential Space */}
            <AccordionItem value="privacy" className="bg-background border rounded-lg">
              <AccordionTrigger className="px-6 py-4">
                <h3 className="text-xl font-bold text-primary">Creating Confidential Space for Teletherapy</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="font-semibold">
                    Privacy is essential for effective therapy. Here's how to create a confidential space for your teletherapy sessions.
                  </p>
                  
                  <div className="bg-accent/10 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Things to Consider:</h4>
                    
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Privacy Assessment:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Is the space truly private?</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Can you lock the door?</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>If not, will others who have access to the space respect your request for privacy and not enter the room?</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Have you had a conversation with household members about your need for uninterrupted privacy?</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Were they receptive and understanding?</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Sound Privacy:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Can others outside the room hear you talking?</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>If so, can you create white noise with a fan or other background noise? (Preferably placed outside the doorway of the room you're in)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Consider using headphones or earbuds so that your therapist's voice is kept private and only audible to you</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="font-bold text-lg mb-3">If You Have Difficulty Finding Confidential Space:</h4>
                    <p className="mb-3 text-sm italic">
                      These are not ideal, but should be considered secondary choices if a perfect setup isn't available. If you use any of these, please make sure the space is comfortable to you—comfort is highly important.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Laundry Room (if private and comfortable)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Walk-In Closet (if spacious enough)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Basement (if finished and comfortable)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Attic (if finished and climate-controlled)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Car parked in a safe, private spot (ACTUAL LAST RESORT)</span>
                      </li>
                    </ul>
                    
                    <p className="mt-4 font-semibold">
                      We want to emphasize that 'private' does not mean 'secluded.' Please make sure you are in a safe location, preferably with others nearby but not within hearing range.
                    </p>
                  </div>
                  
                  <p className="italic">
                    Remember: Your therapy session deserves the same privacy as an in-person session. Take time to set up your space thoughtfully.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Technical Setup */}
            <AccordionItem value="technical" className="bg-background border rounded-lg">
              <AccordionTrigger className="px-6 py-4">
                <h3 className="text-xl font-bold text-primary">Technical Setup for Best Teletherapy Experience</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <div className="bg-accent/10 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Device & Setup:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span><strong>Ideal device:</strong> Laptop or desktop computer with the biggest screen size available (that you can also have in a comfortable, confidential space)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span><strong>If using tablet or phone:</strong> Please prop up the device so it's stable and the camera is about level with your eyes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span><strong>Camera positioning:</strong> Whatever device you're using, make sure the camera is about level with your eyes (may require propping up your device or monitor on books or other items)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span><strong>Lighting:</strong> Make sure you're well-lit with light source in front of you or to the side—avoid having a bright light source directly behind you (creates silhouette effect)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="font-bold text-lg mb-3">Optimizing Your Internet Connection:</h4>
                    
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Get Closer to Your WiFi Router:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Move your computer as close as possible to your WiFi router (the box that creates the WiFi signal)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span><strong>Better yet:</strong> Plug your computer directly into the router with an ethernet cable for the most stable connection</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2">Clear Your Internet Bandwidth:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>Close out of any programs you don't need that use your internet connection</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span><strong>Examples:</strong> Streaming services (Netflix, YouTube), cloud backup services, automatic downloads, other devices using WiFi</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>This ensures your teletherapy platform has maximum bandwidth for clear video and audio</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Before Your Session:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Test your internet speed (free tools available online)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Close unnecessary browser tabs and applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Restart your computer if it's been running for several days</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Have our office phone number handy in case technical difficulties arise</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="italic">
                    We're here to help! If you have any technical questions or concerns about setting up teletherapy, please don't hesitate to reach out. We want your remote sessions to be as smooth and effective as in-person sessions.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-white/90">
                      Take the first step toward freedom. Schedule a free consultation to learn how we can support your healing journey.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <a href="tel:3607264141" className="hover:underline">360-726-4141</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div>Portland, OR & Vancouver, WA</div>
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey to Food Freedom
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            You don't have to struggle with food and body image anymore. Our compassionate approach has helped hundreds of people find lasting freedom—and it can help you too.
          </p>
          <p className="text-base md:text-lg mb-8">
            Whether you're dealing with binge eating, restrictive eating, chronic dieting, body hatred, or simply feel controlled by food—there is a path forward. And you don't have to walk it alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-accent">
              <Link to="/about">Meet Our Team</Link>
            </Button>
          </div>
          <p className="mt-8 text-base">
            Questions about our approach? We'd love to talk with you about whether our practice is the right fit for your needs. Contact us today.
          </p>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default OurApproach;
