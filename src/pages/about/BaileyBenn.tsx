import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, GraduationCap, Award, Briefcase, Leaf, Heart, UserCheck, Brain, MessageCircle, Palette, Rainbow, Handshake, Target, Sprout, CheckCircle, Scale, Clock, Users, CreditCard, Compass } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import baileyBennPhoto from "@/assets/bailey-benn-new.webp";
import { Link } from "react-router-dom";

const BaileyBenn = () => {
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
                  src={baileyBennPhoto} 
                  alt="Bailey Benn, MA, LPC, LMHC - Licensed therapist specializing in eating disorders at Beyond Eating Recovery" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 flex flex-col gap-2">
                  <span className="bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 justify-center">
                    <MapPin className="w-4 h-4" />
                    Portland & Vancouver
                  </span>
                </div>
              </div>
              <div className="mt-10 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-white font-semibold text-center">MA, LPC, LMHC</p>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Bailey Benn</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">Licensed Therapist</p>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Passionate about helping people cultivate affirming relationships with food and their bodies through compassionate, body-positive care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-[#f49a39] hover:bg-[#e08a29] text-white border-0 text-lg px-8 py-6"
                >
                  Schedule with Bailey
                </Button>
                <a href="tel:360-726-4141,5" className="flex items-center gap-2 text-white text-lg hover:text-[#f49a39] transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(360) 726-4141 ext. 5</span>
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
                <h3 className="text-lg font-bold text-[#1a428a] mb-3">Licenses</h3>
                <ul className="text-[#333333] space-y-2 text-sm leading-relaxed">
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
                <ul className="text-[#333333] space-y-2 text-sm leading-relaxed">
                  <li>• Master of Arts - Professional Mental Health Counseling</li>
                  <li>• Lewis & Clark Graduate School</li>
                  <li>• Certificate: Treatment of Eating Disorders</li>
                  <li>• BA Psychology & Health - University of Iowa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#1a428a]/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-[#1a428a]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-3">Training & Experience</h3>
                <ul className="text-[#333333] space-y-2 text-sm leading-relaxed">
                  <li>• Practicum: Lewis & Clark Community Counseling Center</li>
                  <li>• Practicum: Food Is Not The Enemy</li>
                  <li>• Specialized eating disorder training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#f49a39]/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-[#f49a39]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-3">Approach</h3>
                <ul className="text-[#333333] space-y-2 text-sm leading-relaxed">
                  <li>• Psychodynamic therapy</li>
                  <li>• Gestalt therapy elements</li>
                  <li>• Narrative therapy</li>
                  <li>• Creative interventions</li>
                  <li>• HAES informed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">Areas of Focus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Heart className="w-10 h-10 text-[#1a428a] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Eating Disorders</h3>
                <p className="text-[#333333] leading-relaxed">
                  Comprehensive treatment for all eating disorders including anorexia, bulimia, binge eating disorder, and disordered eating patterns
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <UserCheck className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Body Image & Acceptance</h3>
                <p className="text-[#333333] leading-relaxed">
                  Building affirming, compassionate relationships with your body through HAES-informed care
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Sprout className="w-10 h-10 text-[#1a428a] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Food Relationship Healing</h3>
                <p className="text-[#333333] leading-relaxed">
                  Developing a peaceful, intuitive relationship with food free from guilt and restriction
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Brain className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Psychodynamic Approaches</h3>
                <p className="text-[#333333] leading-relaxed">
                  Exploring unconscious patterns and past experiences that influence current relationships with food and body
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Palette className="w-10 h-10 text-[#1a428a] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Creative Interventions</h3>
                <p className="text-[#333333] leading-relaxed">
                  Using expressive and creative techniques to support healing and self-discovery
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Rainbow className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Body Positivity</h3>
                <p className="text-[#333333] leading-relaxed">
                  Celebrating body diversity and challenging diet culture through compassionate, weight-inclusive care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Therapeutic Philosophy */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-10">Bailey's Approach to Therapy</h2>
          
          {/* Featured Quote */}
          <div className="bg-[#1a428a]/5 border-l-4 border-[#1a428a] p-8 mb-10 rounded-r-lg">
            <blockquote className="text-xl md:text-2xl text-[#1a428a] italic leading-relaxed mb-4">
              "I believe that our relationships with our bodies are intimate and life long, and that we each have a unique relationship with our body that is worth investing in."
            </blockquote>
            <p className="text-[#333333] font-semibold text-right">— Bailey Benn, MA, LPC, LMHC</p>
          </div>

          <div className="space-y-6 text-[#333333] text-lg leading-relaxed mb-10">
            <p>
              Bailey is passionate about helping people cultivate affirming relationships with food and their bodies. She understands that your relationship with your body is deeply personal, intimate, and deserving of compassionate attention and care.
            </p>
            <p>
              As a therapist, Bailey creates a safe, non-judgmental space where you can explore your unique relationship with food and your body. Her work is grounded in the principles of Health at Every Size (HAES), ensuring that all bodies are respected and valued.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Therapeutic Orientation</h3>
          <p className="text-[#333333] text-lg leading-relaxed mb-6">
            Bailey is exploring her counseling theoretical orientation as a new professional, with a strong inclination toward:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: "Psychodynamic Approaches",
                description: "Understanding how past experiences and unconscious patterns shape your current relationship with food and body"
              },
              {
                title: "Gestalt Therapy Elements",
                description: "Focusing on present-moment awareness and personal responsibility in the healing process"
              },
              {
                title: "Narrative Therapy",
                description: "Helping you rewrite the stories you tell yourself about your body, food, and worth"
              },
              {
                title: "Creative Interventions",
                description: "Using expressive techniques to access deeper healing and self-understanding"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#f49a39] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[#1a428a] mb-1">{item.title}:</h4>
                  <p className="text-[#333333] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#333333] text-lg leading-relaxed">
            Bailey's integrative approach allows her to tailor treatment to your unique needs, drawing from multiple therapeutic modalities to support your journey toward food freedom and body acceptance.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">Working Together</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-md text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-[#1a428a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-[#1a428a]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Safe Space</h3>
                <p className="text-[#333333] leading-relaxed">
                  You'll find a non-judgmental, affirming environment where all parts of you are welcome. Bailey creates a therapeutic relationship built on trust, respect, and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-[#f49a39]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#f49a39]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Personalized Care</h3>
                <p className="text-[#333333] leading-relaxed">
                  Every person's relationship with food and body is unique. Bailey tailors her approach to your specific needs, experiences, and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-[#1a428a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-[#1a428a]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Sustainable Healing</h3>
                <p className="text-[#333333] leading-relaxed">
                  Together, you'll work toward lasting change that honors your body and supports your overall well-being, not quick fixes or restrictive approaches.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a428a] text-center mb-8">Bailey Can Help You:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Develop a peaceful, intuitive relationship with food",
                "Challenge negative beliefs about your body",
                "Understand the deeper roots of disordered eating patterns",
                "Build self-compassion and body acceptance",
                "Heal from diet culture's harmful messages",
                "Create sustainable, body-positive lifestyle changes",
                "Explore the connection between past experiences and current struggles",
                "Find freedom from food rules and restrictions"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f49a39] flex-shrink-0 mt-1" />
                  <p className="text-[#333333] text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-10">Beyond the Office</h2>
          
          <div className="space-y-6 text-[#333333] text-lg leading-relaxed">
            <p>
              Bailey is a Midwestern transplant, having made the journey from Iowa to the beautiful Pacific Northwest. She traded cornfields and cows for stunning ocean views and mountain vistas—a dramatic and welcome change!
            </p>
            <p>
              When she's not in session with clients, Bailey loves to cozy up with a good movie or book—particularly historical dramas or fantasy stories. She shares her home with her black cat, who is an expert in the art of relaxation.
            </p>
            <p>
              This personal connection to finding peace and comfort resonates in Bailey's therapeutic work, where she helps clients find their own sense of ease and belonging in their bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Spotlight */}
      <section className="py-16 md:py-20 bg-[#1a428a] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Scale className="w-12 h-12 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Grounded in Health At Every Size</h2>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Bailey's work is informed by the principles of Health at Every Size (HAES), a weight-inclusive approach that:
            </p>
            
            <ul className="space-y-3 pl-6">
              {[
                "Respects body diversity and rejects weight-based discrimination",
                "Focuses on health behaviors rather than weight loss",
                "Honors body wisdom and internal cues",
                "Promotes flexible, sustainable eating patterns",
                "Encourages joyful, life-enhancing movement",
                "Addresses systemic barriers to health and well-being"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f49a39] rounded-full mt-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-semibold border-t border-white/20 pt-6 mt-8">
              This means you'll never be told to lose weight, go on a diet, or change your body size. Instead, you'll be supported in developing a healthy, sustainable relationship with food and your body—exactly as it is right now.
            </p>
          </div>
        </div>
      </section>

      {/* Availability & Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">How Bailey Can Support You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-[#1a428a]" />
                  <h3 className="text-xl font-bold text-[#1a428a]">Locations Served</h3>
                </div>
                <ul className="space-y-3 text-[#333333]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>In-person sessions in Portland, OR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Telehealth/virtual sessions for Vancouver, WA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Licensed in Oregon and Washington</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-[#f49a39]" />
                  <h3 className="text-xl font-bold text-[#1a428a]">Session Types</h3>
                </div>
                <ul className="space-y-3 text-[#333333]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Individual therapy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Adolescent & adult clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ongoing weekly sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Flexible scheduling available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-8 h-8 text-[#1a428a]" />
                  <h3 className="text-xl font-bold text-[#1a428a]">Insurance & Payment</h3>
                </div>
                <ul className="space-y-3 text-[#333333]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Insurance accepted (Oregon & Washington)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Verify your benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Flexible payment options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Free initial consultation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Compass className="w-8 h-8 text-[#f49a39]" />
                  <h3 className="text-xl font-bold text-[#1a428a]">Ideal Clients</h3>
                </div>
                <ul className="space-y-3 text-[#333333]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Individuals struggling with eating disorders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Those working on body image issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>People recovering from diet culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Anyone seeking body-positive care</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-4">Ready to Start Your Journey with Bailey?</h2>
          <p className="text-xl text-center text-[#333333] mb-12">
            Take the first step toward a more peaceful relationship with food and your body
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center max-w-3xl mx-auto mb-10">
            <div className="flex flex-col items-center space-y-4 w-full">
              <Button 
                size="lg" 
                className="bg-[#f49a39] hover:bg-[#e08a29] text-white border-0 text-lg px-10 py-6 w-full md:w-auto"
              >
                Schedule Consultation
              </Button>
              <p className="text-[#333333]/70 text-sm">Free initial consultation</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <a href="tel:360-726-4141,5" className="flex items-center gap-3 text-[#1a428a] text-2xl font-bold hover:text-[#f49a39] transition-colors">
                <Phone className="w-7 h-7" />
                (360) 726-4141 ext. 5
              </a>
              <p className="text-[#333333] text-center">Call or text to get started</p>
              <a href="/contact" className="text-[#1a428a] hover:text-[#f49a39] underline transition-colors">
                Send us a message
              </a>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-[#333333]/70">
              Bailey sees clients in Portland, OR and virtually in Vancouver, WA
            </p>
            <p className="text-[#333333]/70 text-sm">
              Part of Beyond Eating Recovery
            </p>
          </div>
        </div>
      </section>

      {/* Meet Other Therapists */}
      <section className="py-12 bg-[#1a428a]/5 border-t border-[#1a428a]/10">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#1a428a] text-center mb-8">Meet Our Other Therapists</h3>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link to="/about/anne-cuthbert">
              <Card className="border-0 shadow-md hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="/src/assets/anne-cuthbert.jpg" 
                      alt="Anne Cuthbert" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a428a] mb-1">Anne Cuthbert</h4>
                  <p className="text-sm text-[#333333] mb-2">MA, LPC, LMHC</p>
                  <p className="text-xs text-[#333333]/70">Owner & Practitioner</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/about/alyssa-pataki">
              <Card className="border-0 shadow-md hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="/src/assets/anne-cuthbert.jpg" 
                      alt="Alyssa Pataki" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a428a] mb-1">Alyssa Pataki</h4>
                  <p className="text-sm text-[#333333] mb-2">MA, LMFT</p>
                  <p className="text-xs text-[#333333]/70">Family Therapist</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/about/kiandra-cole">
              <Card className="border-0 shadow-md hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="/src/assets/anne-cuthbert.jpg" 
                      alt="Kiandra Cole" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a428a] mb-1">Kiandra Cole</h4>
                  <p className="text-sm text-[#333333] mb-2">MA</p>
                  <p className="text-xs text-[#333333]/70">Social Justice Advocate</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/about/rachel-bennett">
              <Card className="border-0 shadow-md hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="/src/assets/anne-cuthbert.jpg" 
                      alt="Rachel Bennett" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a428a] mb-1">Rachel Bennett</h4>
                  <p className="text-sm text-[#333333] mb-2">MA</p>
                  <p className="text-xs text-[#333333]/70">Body Positive Therapist</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link to="/about" className="text-[#1a428a] hover:text-[#f49a39] font-semibold inline-flex items-center gap-2 transition-colors">
              View Full Team →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BaileyBenn;