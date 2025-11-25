import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import anneImage from "@/assets/anne-cuthbert.jpg";
import baileyImage from "@/assets/bailey-benn.jpg";
import saraImage from "@/assets/sara-kranich.webp";
import { Helmet } from "react-helmet";
// TODO: Replace with actual team photos
const alyssaImage = anneImage;
const kiandraImage = anneImage;
const rachelImage = anneImage;
const annieImage = anneImage;

const SaraKranich = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sara Kranich, MA | Associate Therapist at Beyond Eating Recovery</title>
        <meta name="description" content="Sara Kranich is an Associate Therapist specializing in eating disorders, mindfulness, and trauma-informed care in Portland and Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about/sara-kranich" />
        <meta property="og:title" content="Sara Kranich, MA | Associate Therapist at Beyond Eating Recovery" />
        <meta property="og:description" content="Associate Therapist specializing in eating disorders, mindfulness, and trauma-informed care in Portland and Vancouver." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/about/sara-kranich" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/sara-kranich.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sara Kranich, MA | Associate Therapist at Beyond Eating Recovery" />
        <meta name="twitter:description" content="Associate Therapist specializing in eating disorders, mindfulness, and trauma-informed care in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/sara-kranich.webp" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Left side - Image */}
            <div className="md:col-span-2">
              <img 
                src={saraImage}
                alt="Sara Kranich, MA - Associate Therapist at Beyond Eating Recovery"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="md:col-span-3 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a428a] leading-tight">
                Sara Kranich, MA
              </h1>
              
              <p className="text-xl md:text-2xl text-[#f49a39] font-medium">
                Associate Therapist | Mindfulness Specialist | HAES Advocate
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Supervised by Anne Cuthbert, MA, LPC, LMHC
                </span>
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Personal Recovery Experience
                </span>
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Mindfulness & Meditation
                </span>
              </div>
              
              <p className="text-lg text-[#333333] leading-relaxed">
                Drawing from my personal experience with disordered eating, I deeply understand the critical role mental health plays in overcoming life's challenges. I'm committed to helping you transform your difficulties into strengths through a trauma-informed, person-centered approach that integrates mindfulness and self-compassion.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-6 py-3 text-lg">
                  Schedule with Sara
                </Button>
                <Button variant="outline" className="border-2 border-[#1a428a] text-[#1a428a] hover:bg-[#1a428a] hover:text-white px-6 py-3 text-lg">
                  Call (360) 726-4141
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Credentials & Professional Background
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Education</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>Master of Arts</li>
                  <li>Associate Therapist</li>
                  <li>Specialized training in eating disorders</li>
                  <li>Mindfulness-based interventions</li>
                  <li>Trauma-informed care</li>
                </ul>
              </CardContent>
            </Card>

            {/* Licenses */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Licenses & Certifications</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>Associate Therapist - Oregon & Washington</li>
                  <li className="mt-3 font-medium">Supervised by Anne Cuthbert, MA, LPC, LMHC</li>
                  <li>Working toward full licensure</li>
                  <li>Mindfulness and meditation training</li>
                  <li>HAES-informed practice</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Experience & Approach</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>Eating disorder treatment</li>
                  <li>Disordered eating recovery</li>
                  <li>Personal recovery experience</li>
                  <li>Mindfulness integration</li>
                  <li>Trauma-informed therapy</li>
                  <li>Person-centered care</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-[#fff5eb] p-8 rounded-lg text-center max-w-4xl mx-auto">
            <p className="text-lg text-[#333333]">
              <strong>From Personal Experience to Professional Passion:</strong> Sara's own journey with disordered eating informs her deep understanding of the challenges clients face—and the transformative power of compassionate, mindfulness-based healing.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-8 text-center">
            My Treatment Approach
          </h2>
          
          <p className="text-xl text-center text-[#333333] leading-relaxed max-w-4xl mx-auto mb-12">
            I provide a trauma-informed, person-centered approach that integrates mindfulness and meditation into therapy. My goal is to guide you toward self-awareness and self-acceptance, empowering you to embrace your true self with confidence. I'm committed to helping you transform your difficulties into strengths.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Therapeutic Modalities</h3>
              {[
                "Mindfulness-based interventions",
                "Meditation practices",
                "Trauma-informed therapy",
                "Person-centered counseling",
                "Self-compassion cultivation",
                "Body-based awareness",
                "Strength-based approaches"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f49a39] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg text-[#333333]">{item}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Core Principles</h3>
              {[
                "Health At Every Size (HAES)",
                "Body diversity advocacy",
                "Weight-neutral care",
                "Holistic wellness focus",
                "Self-awareness development",
                "Self-acceptance cultivation",
                "Empowerment-centered care"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f49a39] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg text-[#333333]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-[#fff5eb] p-8 rounded-lg max-w-4xl mx-auto">
            <p className="text-lg text-[#333333] text-center italic">
              <strong>My Philosophy:</strong> I advocate for body diversity and promote holistic wellness rather than focusing on weight loss. Through mindfulness and self-compassion, you'll learn to embrace your true self with confidence—transforming challenges into strengths.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Specializations */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Clinical Specializations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Eating Disorders & Disordered Eating</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Anorexia Nervosa</li>
                  <li>• Bulimia Nervosa</li>
                  <li>• Binge Eating Disorder</li>
                  <li>• ARFID</li>
                  <li>• Orthorexia</li>
                  <li>• Disordered eating patterns</li>
                  <li>• Chronic dieting recovery</li>
                  <li>• Body image issues</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Mindfulness & Wellness</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Mindfulness-based stress reduction</li>
                  <li>• Meditation practices</li>
                  <li>• Self-compassion development</li>
                  <li>• Mind-body connection</li>
                  <li>• Present-moment awareness</li>
                  <li>• Emotional regulation</li>
                  <li>• Stress management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Trauma & Mental Health</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Trauma-informed care</li>
                  <li>• Anxiety disorders</li>
                  <li>• Depression</li>
                  <li>• Life transitions</li>
                  <li>• Identity development</li>
                  <li>• Self-esteem issues</li>
                  <li>• Resilience building</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Holistic Wellness</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• HAES principles</li>
                  <li>• Body diversity advocacy</li>
                  <li>• Intuitive eating support</li>
                  <li>• Movement for joy</li>
                  <li>• Self-care practices</li>
                  <li>• Work-life balance</li>
                  <li>• Parenting while healing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mindfulness & Meditation Integration - LARGE DETAILED SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-6">
            Mindfulness & Meditation in Therapy
          </h2>
          <p className="text-xl text-[#f49a39] mb-12">
            Guiding You Toward Self-Awareness and Self-Acceptance
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-12">
            Mindfulness and meditation aren't just practices I teach—they're woven into the fabric of how I work with clients. My passion for mindfulness extends beyond my professional life; I regularly practice meditation myself and bring that lived experience into the therapeutic space. These practices can transform your relationship with food, body, and self.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">The Power of Present-Moment Awareness</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Mindfulness is the practice of paying attention to the present moment with openness, curiosity, and non-judgment. In therapy, mindfulness helps you:
              </p>
              
              <div className="space-y-4 text-[#333333]">
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Become Aware Without Judgment:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Notice thoughts without believing every thought is true</li>
                    <li>• Observe emotions without being overwhelmed by them</li>
                    <li>• Recognize body sensations without automatically reacting</li>
                    <li>• See eating disorder behaviors as patterns, not identity</li>
                    <li>• Witness the critic voice without giving it power</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Break Automatic Patterns:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Create space between urge and action</li>
                    <li>• Respond rather than react to triggers</li>
                    <li>• Make conscious choices around food and body</li>
                    <li>• Recognize when you're on autopilot</li>
                    <li>• Develop new, healthier responses</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Cultivate Self-Compassion:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Treat yourself with kindness during difficult moments</li>
                    <li>• Acknowledge suffering without adding self-criticism</li>
                    <li>• Recognize that imperfection is part of being human</li>
                    <li>• Extend to yourself the compassion you'd give a friend</li>
                    <li>• Build a gentler internal voice</li>
                  </ul>
                </div>
                
                <p className="italic mt-4">
                  Mindfulness isn't about emptying your mind or achieving perfect calm—it's about being present with whatever arises, including discomfort, with compassion and curiosity.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Practical Meditation Tools</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                I integrate various meditation practices based on your needs and preferences:
              </p>
              
              <div className="space-y-4 text-[#333333]">
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Body Scan Meditation:</p>
                  <p className="mb-2">Systematically bring awareness to different parts of your body, reconnect with body sensations, and develop interoceptive awareness.</p>
                  <p className="text-sm italic">Practice for eating disorders: Reconnecting with hunger and fullness cues</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Breath Awareness Meditation:</p>
                  <p className="mb-2">Use breath as an anchor to the present moment, calm the nervous system, and create space between stimulus and response.</p>
                  <p className="text-sm italic">Practice for eating disorders: Managing urges and cravings</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Loving-Kindness Meditation (Metta):</p>
                  <p className="mb-2">Cultivate feelings of warmth and care toward yourself and others, counter harsh self-criticism, and build positive emotions.</p>
                  <p className="text-sm italic">Practice for eating disorders: Body acceptance and self-love</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Mindful Eating Practices:</p>
                  <p className="mb-2">Eat with full attention, notice taste and texture, and recognize hunger and fullness without fear.</p>
                  <p className="text-sm italic">Practice for eating disorders: Rebuilding a peaceful relationship with food</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Walking Meditation:</p>
                  <p className="mb-2">Bring mindfulness to movement and connect with your body in motion.</p>
                  <p className="text-sm italic">Practice for runners: Joyful movement vs. compulsive exercise</p>
                </div>
                
                <p className="mt-4">
                  You don't need prior meditation experience—we'll start where you are and build skills gradually.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Mindfulness as a Path to Freedom</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Research shows mindfulness is highly effective for eating disorder recovery. Here's why:
              </p>
              
              <div className="space-y-3 text-[#333333]">
                <p><strong className="text-[#1a428a]">Reduces Binge Eating:</strong> Creates pause between urge and action, helps you 'surf the urge' rather than immediately react</p>
                <p><strong className="text-[#1a428a]">Decreases Body Dissatisfaction:</strong> Shifts from judging body to observing body with curiosity</p>
                <p><strong className="text-[#1a428a]">Improves Emotional Regulation:</strong> Increases capacity to tolerate difficult emotions without using food to cope</p>
                <p><strong className="text-[#1a428a]">Enhances Self-Compassion:</strong> Counters shame and self-criticism, provides an alternative to perfectionism</p>
                <p><strong className="text-[#1a428a]">Reconnects You with Body Wisdom:</strong> Restores trust in hunger and fullness cues, rebuilds body trust</p>
                
                <div className="mt-6 p-4 bg-white rounded border-l-4 border-[#f49a39]">
                  <p className="font-medium">In Our Work Together:</p>
                  <p>I'll guide you through mindfulness practices in session and help you build a personal practice that fits your life. Whether you have three minutes or thirty, we'll find practices that work for you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#1a428a] p-8 rounded-lg text-center">
            <p className="text-white text-lg leading-relaxed">
              <strong className="block mb-4 text-xl">My Personal Practice:</strong>
              I don't just teach mindfulness—I live it. I regularly practice meditation, bringing authenticity and lived experience to this work. When I guide you through practices, I'm sharing something that has transformed my own life and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Understanding */}
      <section className="py-20 bg-[#fff5eb]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            A Personal Understanding
          </h2>
          
          <div className="relative">
            <div className="text-6xl text-[#f49a39] absolute -top-4 -left-4">"</div>
            <div className="pl-8 pr-8 space-y-6 text-lg text-[#333333] leading-relaxed">
              <p>
                Drawing from my personal experience with disordered eating, I deeply understand the critical role mental health plays in overcoming life's challenges. This isn't just clinical knowledge for me—it's lived experience.
              </p>
              
              <p>
                I know what it's like to struggle with food, to feel controlled by disordered eating thoughts, to battle the internal critic that tells you you're not enough. I know the exhaustion of constantly thinking about food, weight, and body. I know the isolation that comes from feeling like no one understands.
              </p>
              
              <p>
                I also know that recovery is possible—and that mental health support is absolutely critical to that recovery.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                What My Experience Brings to Our Work:
              </p>
              
              <p>
                I understand the nuances that textbooks can't teach—the shame, the secrecy, the fear of letting go of behaviors that feel protective. I know what it takes to transform difficulties into strengths, because I've done it myself.
              </p>
              
              <p>
                I won't minimize your struggles or offer simplistic solutions. I know recovery isn't linear, and I'll be with you through the ups and downs. I've been in those difficult moments, and I've found my way through—not to perfection, but to freedom and peace.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                My Commitment to You:
              </p>
              
              <p>
                I'm committed to helping you transform your difficulties into strengths. Through mindfulness, self-compassion, and trauma-informed care, you can move from struggle to acceptance—from fighting your body to embracing your true self with confidence.
              </p>
              
              <p className="font-medium">
                You don't have to do this alone. I'll walk alongside you with the empathy that comes from someone who truly understands, and the professional expertise to guide your healing.
              </p>
            </div>
            <div className="text-6xl text-[#f49a39] absolute -bottom-4 -right-4 text-right">"</div>
          </div>
          
          <p className="text-xl text-[#f49a39] italic text-right mt-8">— Sara</p>
        </div>
      </section>

      {/* HAES & Body Diversity - LARGE SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-6">
            Health At Every Size & Body Diversity
          </h2>
          <p className="text-xl text-[#f49a39] mb-12">
            Promoting Holistic Wellness, Not Weight Loss
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-12">
            I incorporate the Health at Every Size (HAES) model into my practice, advocating for body diversity and promoting holistic wellness rather than focusing on weight loss. HAES is not just a clinical framework—it's a social justice commitment to respect and dignity for all bodies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* HAES Principles */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">What HAES Means in Our Work</h3>
              <div className="space-y-4 text-[#333333]">
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Weight Inclusivity:</p>
                  <p className="text-sm">Respect and acceptance for all body sizes, no weight loss goals, understanding that health exists across the weight spectrum</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Health Enhancement:</p>
                  <p className="text-sm">Focus on behaviors that support well-being, not weight change. Encourage eating for nourishment and pleasure.</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Respectful Care:</p>
                  <p className="text-sm">You will never be weighed without consent. No diet advice or weight loss recommendations.</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Eating for Well-Being:</p>
                  <p className="text-sm">Support intuitive eating principles, honor hunger and fullness cues, give yourself permission to eat all foods</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Life-Enhancing Movement:</p>
                  <p className="text-sm">Movement for joy, energy, and mental health—not calorie burning. Celebrating what your body can do.</p>
                </div>
              </div>
            </div>

            {/* Body Diversity */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Advocating for All Bodies</h3>
              <div className="space-y-4 text-[#333333]">
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Bodies Naturally Come in Different Sizes:</p>
                  <p className="text-sm">Genetic diversity means humans naturally vary. Set point weight theory: Your body has a natural weight range it defends.</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Diet Culture Causes Harm:</p>
                  <p className="text-sm">95% of diets fail long-term (the problem is diets, not you). Weight stigma is a major stressor affecting health.</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">All Bodies Deserve Respect:</p>
                  <p className="text-sm">Fat bodies deserve the same respect as thin bodies. Your worth is not determined by your body size.</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Holistic Wellness Over Weight:</p>
                  <p className="text-sm">Mental health is health. Social connections and community support are health factors. Weight is not a behavior.</p>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">In Our Work Together:</p>
                  <p className="text-sm">I will never suggest weight loss or imply your body needs to change. We'll focus on behaviors that genuinely support your well-being.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fff5eb] p-8 rounded-lg text-center">
            <p className="text-lg text-[#333333]">
              <strong>Body Diversity is Natural:</strong> Just as humans come in different heights, hair colors, and facial features, we also naturally come in different body sizes. My practice celebrates this diversity and rejects the harmful notion that only certain bodies are acceptable.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-12 text-center">
            What to Expect in Sessions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-t-4 border-[#f49a39] bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Your First Appointment</h3>
              <p className="text-[#333333] mb-6">
                We'll explore what brings you to therapy, your relationship with food and body, and what you hope to achieve. I'll introduce mindfulness practices and explain how we'll work together. This is a collaborative, judgment-free conversation.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  60-90 minutes
                </span>
              </div>
            </div>

            <div className="border-t-4 border-[#f49a39] bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Regular Therapy</h3>
              <p className="text-[#333333] mb-6">
                Sessions are typically 50-60 minutes, weekly or bi-weekly. We'll integrate mindfulness practices, process emotions, challenge disordered thoughts, and build self-compassion—all at your pace. Expect both talking and experiential practices.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  50-60 minutes
                </span>
              </div>
            </div>

            <div className="border-t-4 border-[#f49a39] bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Trauma-Informed & Person-Centered</h3>
              <p className="text-[#333333] mb-6">
                I provide a safe, non-judgmental space where you can explore difficulties and transform them into strengths. You'll be empowered to embrace your true self with confidence—guided by mindfulness and self-compassion.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Empowerment-focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life in the Pacific Northwest */}
      <section className="py-20 bg-[#fff5eb]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Life in the Pacific Northwest
          </h2>
          
          <div className="space-y-6 text-lg text-[#333333] leading-relaxed">
            <p>
              Originally from San Diego, I relocated to the Pacific Northwest in 2018, and I've fallen in love with this region. The lush forests, the mountains, the rain—there's something grounding and peaceful about the Pacific Northwest that resonates deeply with me and my mindfulness practice.
            </p>
            
            <p>
              I'm an avid runner and enjoy training for 5K and half-marathon events with my husband and our three young boys. Running has become a form of moving meditation for me—a way to connect with my body, clear my mind, and practice being present. It's also a family activity we share, teaching my sons about joyful movement and body respect from an early age.
            </p>
            
            <p>
              My passion for mindfulness extends far beyond my professional life. I regularly practice meditation—it's not just something I teach, but something I live. Mindfulness grounds me as a therapist, a partner, and a mother. It helps me stay present with my family, manage stress, and maintain balance in a busy life with three young children.
            </p>
            
            <p>
              I also find creative expression through playing music. Whether it's sitting down at the piano or picking up a guitar, music is another form of mindfulness for me—a way to be fully present, express emotions, and find joy in the moment.
            </p>
            
            <p>
              As a mother of three boys, I understand the challenges of balancing self-care with caregiving responsibilities. I know what it's like to try to practice self-compassion while managing the demands of parenting. This lived experience informs how I work with clients who are parents—I get it, and we'll find ways to integrate wellness practices into your real, busy life.
            </p>
            
            <p className="font-medium">
              I share these personal details because authenticity is important to me. I want you to see me as a whole person who practices what I teach—someone who understands the challenges of real life and has found practices that genuinely help.
            </p>
          </div>
          
          <p className="text-xl text-[#f49a39] italic text-center mt-12">
            I look forward to walking alongside you on your journey to self-awareness, self-acceptance, and freedom.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#1a428a]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Begin Your Journey to Self-Acceptance
          </h2>
          
          <p className="text-xl text-white mb-10 leading-relaxed">
            I'm currently accepting new clients for individual therapy in Portland, Vancouver, and via telehealth throughout Oregon and Washington. Whether you're struggling with disordered eating, seeking mindfulness-based support, or ready to embrace your true self with confidence, I'm here to guide you with compassion and understanding.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-8 py-4 text-lg">
              Schedule with Sara
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1a428a] px-8 py-4 text-lg">
              Call (360) 726-4141
            </Button>
          </div>
          
          <p className="text-white text-lg">
            Email: [email address] | Portland & Vancouver Offices | Telehealth: OR & WA
          </p>
        </div>
      </section>

      {/* Meet Other Therapists */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-4">
            Meet Our Other Therapists
          </h2>
          <p className="text-xl text-center text-[#666666] mb-12">
            Beyond Eating Recovery's Compassionate Team
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {/* Team cards */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={anneImage} 
                    alt="Anne Cuthbert"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-base font-bold text-[#1a428a] mb-1">Anne Cuthbert</h3>
                <p className="text-xs text-[#666666] mb-2">MA, LPC, LMHC</p>
                <p className="text-sm text-[#333333] mb-4">Owner & Founder</p>
                <Link to="/about/anne-cuthbert">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={baileyImage} 
                    alt="Bailey Benn"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-base font-bold text-[#1a428a] mb-1">Bailey Benn</h3>
                <p className="text-xs text-[#666666] mb-2">MA, LPC, LMHC</p>
                <p className="text-sm text-[#333333] mb-4">Clinical Therapist</p>
                <Link to="/about/bailey-benn">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={alyssaImage} 
                    alt="Alyssa Pataki"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-base font-bold text-[#1a428a] mb-1">Alyssa Pataki</h3>
                <p className="text-xs text-[#666666] mb-2">MA, LMFT</p>
                <p className="text-sm text-[#333333] mb-4">Family Therapist</p>
                <Link to="/about/alyssa-pataki">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={kiandraImage} 
                    alt="Kiandra Cole"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-base font-bold text-[#1a428a] mb-1">Kiandra Cole</h3>
                <p className="text-xs text-[#666666] mb-2">MA</p>
                <p className="text-sm text-[#333333] mb-4">Social Justice Advocate</p>
                <Link to="/about/kiandra-cole">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={rachelImage} 
                    alt="Rachel Bennett"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-base font-bold text-[#1a428a] mb-1">Rachel Bennett</h3>
                <p className="text-xs text-[#666666] mb-2">MA, QMHP-A</p>
                <p className="text-sm text-[#333333] mb-4">Body Positive</p>
                <Link to="/about/rachel-bennett">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={annieImage} 
                    alt="Annie Calhoun Randall"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-base font-bold text-[#1a428a] mb-1">Annie Calhoun Randall</h3>
                <p className="text-xs text-[#666666] mb-2">MA, NTP</p>
                <p className="text-sm text-[#333333] mb-4">Athlete Specialist</p>
                <Link to="/about/annie-calhoun-randall">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/about">
              <Button variant="outline" className="border-2 border-[#1a428a] text-[#1a428a] hover:bg-[#1a428a] hover:text-white px-8 py-3">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default SaraKranich;