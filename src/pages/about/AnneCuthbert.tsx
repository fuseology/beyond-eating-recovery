import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MapPin, GraduationCap, Award, Clock, Users, Heart, Brain, Leaf, UserCheck, Sparkles, Utensils, PuzzleIcon, MessageCircle, Dumbbell, Star, BookOpen, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import anneCuthbertPhoto from "@/assets/anne-cuthbert.jpg";

const AnneCuthbert = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#1a428a] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Left Side - Photo */}
            <div className="w-full md:w-2/5 flex flex-col items-center md:items-start">
              <div className="relative">
                <img 
                  src={anneCuthbertPhoto} 
                  alt="Anne Cuthbert, MA, LPC, LMHC" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 flex gap-2 flex-wrap justify-center">
                  <span className="bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Portland & Vancouver
                  </span>
                </div>
              </div>
              <div className="mt-8 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-white font-semibold text-center">MA, LPC, LMHC</p>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Anne Cuthbert</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">Owner & Practitioner</p>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Specializing in eating disorders and negative body image with over 23 years of experience helping clients find food freedom.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-[#f49a39] hover:bg-[#e08a29] text-white border-0 text-lg px-8 py-6"
                >
                  Schedule Consultation
                </Button>
                <a href="tel:360-726-4141" className="flex items-center gap-2 text-white text-lg hover:text-[#f49a39] transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">360-726-4141</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">Professional Background</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#1a428a]/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#1a428a]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-3">Licenses Held</h3>
                <ul className="text-[#333333] space-y-2 text-sm">
                  <li>• Licensed Professional Counselor (LPC) - Oregon</li>
                  <li>• Licensed Mental Health Counselor (LMHC) - Washington</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#f49a39]/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#f49a39]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-3">Education</h3>
                <ul className="text-[#333333] space-y-2 text-sm">
                  <li>• Master's Degree in Counseling Psychology</li>
                  <li>• Antioch University, Santa Barbara, CA</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#1a428a]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#1a428a]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-3">Experience</h3>
                <ul className="text-[#333333] space-y-2 text-sm">
                  <li>• 23+ years in counseling</li>
                  <li>• Eating disorder specialist</li>
                  <li>• Body image expert</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#f49a39]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#f49a39]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-3">Affiliations</h3>
                <ul className="text-[#333333] space-y-2 text-sm">
                  <li>• Former CREDN board member</li>
                  <li>• ASDAH member</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Heart className="w-10 h-10 text-[#1a428a] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Eating Disorders</h3>
                <p className="text-[#333333] leading-relaxed">
                  Anorexia, Bulimia, Binge Eating Disorder, Orthorexia, ARFID
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <UserCheck className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Body Image Issues</h3>
                <p className="text-[#333333] leading-relaxed">
                  Negative body image, body dysmorphia, body shame, fat acceptance
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Brain className="w-10 h-10 text-[#1a428a] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Co-Occurring Disorders</h3>
                <p className="text-[#333333] leading-relaxed">
                  Depression, anxiety, PTSD, trauma recovery
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Relationship Issues</h3>
                <p className="text-[#333333] leading-relaxed">
                  Family dynamics, childhood trauma, abuse recovery
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <Leaf className="w-10 h-10 text-[#1a428a] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Specialized Approaches</h3>
                <p className="text-[#333333] leading-relaxed">
                  Intuitive Eating, HAES, Non-diet approach, Trauma-informed care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Therapeutic Approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-8">My Approach to Therapy</h2>
          <p className="text-xl text-[#1a428a] text-center mb-10 font-semibold">As a therapist, I will help you discover how to:</p>
          
          <div className="space-y-4 mb-10">
            {[
              "Eat and enjoy the foods you really love, without worrying about gaining weight",
              "Accept and even like your body",
              "Find and maintain your healthy weight naturally through uncovering the underlying causes for your behaviors",
              "Focus on and improve your relationships by helping you move away from blaming food and your body",
              "Learn to like yourself, your whole self"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-[#333333] text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-[#333333] text-lg leading-relaxed">
            <p>
              As a counselor, I go beyond traditional talk therapy to help you learn healthier coping skills around food, your body, and your life in general. I use a counseling approach that will help you address the root causes of your problems around food.
            </p>
            <p>
              Through therapy, you can end the cycle of using food and hating your body to cope with your emotional needs. In counseling, I'll help you make step-by-step changes that will help you overcome your problems around food and help you feel good about your body.
            </p>
            <p>
              Food issues and having a poor body image are symptoms of deeper needs that need to be met. In order to make permanent changes you need to get to the root of the problem and find healthier ways to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-10">My Journey</h2>
          
          <div className="space-y-6 text-[#333333] text-lg leading-relaxed">
            <p>
              I know first hand what it is like to deal with food and body issues. For years, I struggled with food issues and hating my body. I compared myself to every woman I saw and resisted exercising, refusing to give into what other people told me I should do and how I should look. I ate to hide how I was feeling and to avoid being close to anyone. I thought I couldn't be loved if I was fat.
            </p>
            <p>
              Now, I am pleased to say all that has changed for the better. I no longer use food to cope. I feel good about myself, my body, and my life. I am now passionate about helping others recover as well. I love that my job as a counselor is helping you to eat whatever you want and feel good about it.
            </p>
            <p className="text-xl text-[#1a428a] font-semibold italic text-center mt-8">
              I look forward to working with you. -Anne
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-6">The Steps We'll Take Together</h2>
          <p className="text-xl text-center text-[#333333] mb-10">
            These are the steps that will help you finally make peace with food:
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="step1" className="border border-[#e0e0e0] rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a428a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-6 h-6 text-[#1a428a]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#f49a39]">STEP 1</span>
                    <h3 className="text-lg font-bold text-[#1a428a]">Shameless Eating</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#333333] pt-4 pl-16 leading-relaxed">
                This first step will derail your drive to binge eat. You will end the cycle of viewing food as good or bad that translates into good me / bad me. You will learn to change your mindset around food, begin to let go of criticism, and change your interaction with food. You will take the first steps to greater self-trust with the foods you eat and with yourself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step2" className="border border-[#e0e0e0] rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f49a39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PuzzleIcon className="w-6 h-6 text-[#f49a39]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#f49a39]">STEP 2</span>
                    <h3 className="text-lg font-bold text-[#1a428a]">Crack the Portion Control Code</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#333333] pt-4 pl-16 leading-relaxed">
                In this step, you will learn how to connect to your body's cues of hunger and fullness. You will gain trust with how to feed your body what and how much it wants. We will resolve the underlying emotional issues that keep you stuck in fear of hunger or fullness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step3" className="border border-[#e0e0e0] rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a428a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#1a428a]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#f49a39]">STEP 3</span>
                    <h3 className="text-lg font-bold text-[#1a428a]">If Your Hunger Could Talk - Listen to Your Body's Wisdom</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#333333] pt-4 pl-16 leading-relaxed">
                During this step, which takes place throughout our work together, we will go deeper into your body to discover what you actually want and need. Listen to what you are hungry for and feed yourself what will lead to true fulfillment and joy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step4" className="border border-[#e0e0e0] rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f49a39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[#f49a39]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#f49a39]">STEP 4</span>
                    <h3 className="text-lg font-bold text-[#1a428a]">Enjoy a Body Love Fest</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#333333] pt-4 pl-16 leading-relaxed">
                In this step you will directly address your body image. You will learn to experience feeling good in the clothes you wear and living in your body now, rather than in some future time while your life passes by. Through exercises and techniques, you will experience your body from new perspectives while letting go of societal misconceptions that hold you back.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step5" className="border border-[#e0e0e0] rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a428a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-6 h-6 text-[#1a428a]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#f49a39]">STEP 5</span>
                    <h3 className="text-lg font-bold text-[#1a428a]">Exercise for Pleasure</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#333333] pt-4 pl-16 leading-relaxed">
                In this step you will learn how to engage in healthy exercise habits. Whether you exercise too much or avoid exercise, you will take the steps to enjoy moving your body while still listening to what it needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step6" className="border border-[#e0e0e0] rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f49a39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#f49a39]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#f49a39]">STEP 6</span>
                    <h3 className="text-lg font-bold text-[#1a428a]">Move into Your Life with Self-Trust, Self-Love and Acceptance</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#333333] pt-4 pl-16 leading-relaxed">
                In this last step, you will learn how to have a long term relationship of self-trust, self-love and self-acceptance. We will create structured, healthy boundaries around food and body image that allow you to enjoy your life more fully while honoring your relationship with food to help you identify areas of growth and improvement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-16 md:py-20 bg-[#1a428a] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Published Work</h2>
          
          <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    "If Your Hunger Could Talk: Find Peace and Your Path to Food Freedom"
                  </h3>
                  <p className="text-white/80 mb-6">By Anne Cuthbert MA, LPC, LMHC</p>
                  <Button className="bg-[#f49a39] hover:bg-[#e08a29] text-white border-0">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-center text-[#333333] mb-12">
            Anne Cuthbert is accepting new clients in Portland, OR and Vancouver, WA (via telehealth)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-3">
              {[
                "In-person sessions available in Portland",
                "Virtual/telehealth for Vancouver, WA",
                "Insurance accepted",
                "Free initial consultation"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-[#333333]">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start justify-center space-y-4">
              <Button 
                size="lg" 
                className="bg-[#f49a39] hover:bg-[#e08a29] text-white border-0 text-lg px-10 py-6 w-full md:w-auto"
              >
                Schedule Your Consultation
              </Button>
              <a href="tel:360-726-4141" className="flex items-center gap-2 text-[#1a428a] text-xl font-bold hover:text-[#f49a39] transition-colors">
                <Phone className="w-6 h-6" />
                360-726-4141
              </a>
              <a href="/contact" className="text-[#1a428a] hover:text-[#f49a39] underline transition-colors">
                Or send us a message
              </a>
            </div>
          </div>

          <p className="text-center text-[#333333]/70 text-sm">
            Serving clients throughout Oregon and Washington
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnneCuthbert;