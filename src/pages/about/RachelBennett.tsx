import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import anneImage from "@/assets/anne-cuthbert.jpg";
import baileyImage from "@/assets/bailey-benn-new.webp";
import rachelImage from "@/assets/rachel-bennett.webp";
import alyssaImage from "@/assets/alyssa-pataki.webp";
import kiandraImage from "@/assets/kiandra-cole.webp";
import { Helmet } from "react-helmet";

const RachelBennett = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Rachel Bennett, MA | QMHP-A Therapist at Beyond Eating Recovery</title>
        <meta name="description" content="Rachel Bennett is a QMHP-A Therapist specializing in eating disorders, body positivity, and person-centered care in Portland and Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about/rachel-bennett" />
        <meta property="og:title" content="Rachel Bennett, MA | QMHP-A Therapist at Beyond Eating Recovery" />
        <meta property="og:description" content="QMHP-A Therapist specializing in eating disorders, body positivity, and person-centered care in Portland and Vancouver." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/about/rachel-bennett" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/rachel-bennett.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rachel Bennett, MA | QMHP-A Therapist at Beyond Eating Recovery" />
        <meta name="twitter:description" content="QMHP-A Therapist specializing in eating disorders, body positivity, and person-centered care in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/rachel-bennett.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rachel Bennett",
            "honorificSuffix": "MA",
            "jobTitle": "QMHP-A Therapist | Professional Counselor Associate",
            "description": "QMHP-A Therapist specializing in eating disorders, body positivity, and person-centered care with personal recovery experience.",
            "url": "https://www.beyondeatingrecovery.com/about/rachel-bennett",
            "image": "https://www.beyondeatingrecovery.com/rachel-bennett.webp",
            "worksFor": {
              "@type": "MedicalBusiness",
              "name": "Beyond Eating Recovery",
              "url": "https://www.beyondeatingrecovery.com"
            },
            "alumniOf": [
              {
                "@type": "CollegeOrUniversity",
                "name": "Pacific University"
              },
              {
                "@type": "CollegeOrUniversity",
                "name": "Portland State University"
              }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "License",
                "name": "QMHP-A (Qualified Mental Health Professional - Adult)",
                "recognizedBy": { "@type": "State", "name": "Oregon" }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "License",
                "name": "Professional Counselor Associate",
                "recognizedBy": { "@type": "State", "name": "Oregon" }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "License",
                "name": "Mental Health Counselor Associate",
                "recognizedBy": { "@type": "State", "name": "Washington" }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Degree",
                "name": "Master of Arts in Applied Psychological Program"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Degree",
                "name": "Bachelor of Science in Psychology"
              }
            ],
            "knowsAbout": [
              "Eating Disorders",
              "Body Positivity",
              "Internal Family Systems (IFS)",
              "Cognitive Behavioral Therapy (CBT)",
              "Emotion Focused Therapy (EFT)",
              "Acceptance and Commitment Therapy (ACT)",
              "Health At Every Size (HAES)",
              "LGBTQIA+ Affirming Care",
              "Autism Spectrum Support"
            ],
            "telephone": "+1-360-726-4141"
          })}
        </script>
      </Helmet>
      <BreadcrumbSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Left side - Image */}
            <div className="md:col-span-2">
              <img 
                src={rachelImage}
                alt="Rachel Bennett, MA - QMHP-A Therapist at Beyond Eating Recovery"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="md:col-span-3 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a428a] leading-tight">
                Rachel Bennett, MA
              </h1>
              
              <p className="text-xl md:text-2xl text-[#f49a39] font-medium">
                QMHP-A Therapist | Professional Counselor Associate (OR) | Mental Health Counselor Associate (WA)
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Supervised by Anne Cuthbert, MA, LPC, LMHC
                </span>
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Personal Recovery Experience
                </span>
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Body Positive Specialist
                </span>
              </div>
              
              <p className="text-lg text-[#333333] leading-relaxed">
                I'm passionate about helping you realign with your purpose, values, and self-acceptance. Drawing from my own eating disorder recovery journey, I provide a person-centered approach that meets you wherever you are in your healing journey. My main focus is providing a safe space for everyone who enters my room. I'm excited to begin this journey to empowerment with you.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-6 py-3 text-lg">
                  Schedule with Rachel
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
                  <li>Master of Arts in Applied Psychological Program</li>
                  <li className="font-medium">Pacific University</li>
                  <li className="mt-3">Bachelor of Science in Psychology (cum laude)</li>
                  <li className="font-medium">Portland State University</li>
                  <li className="mt-2">Minor: Community Health Education</li>
                  <li className="mt-2">Registered Therapy Associate</li>
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
                  <li>QMHP-A (Qualified Mental Health Professional - Adult) - Oregon</li>
                  <li>Professional Counselor Associate - Oregon</li>
                  <li>Mental Health Counselor Associate - Washington</li>
                  <li className="mt-3 font-medium">Supervised by Anne Cuthbert, MA, LPC, LMHC</li>
                  <li>Working toward full licensure (LPC/LMHC)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Specialized Experience</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>Eating disorder treatment</li>
                  <li>Mindful movement and education courses for college students</li>
                  <li>Neurodivergent populations</li>
                  <li>Community health education</li>
                  <li>Personal recovery experience</li>
                  <li>Religious trauma</li>
                  <li>LGBTQIA+ Identity</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-[#fff5eb] p-8 rounded-lg text-center max-w-4xl mx-auto">
            <p className="text-lg italic text-[#333333]">
              With lived experience in eating disorder recovery and extensive training in multiple evidence-based modalities, I bring both personal understanding and professional expertise to every client I serve.
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
            I strive to provide an eclectic, tailored, and strength-based treatment experience. My approach is informed by multiple evidence-based modalities—including Internal Family Systems (IFS), Cognitive Behavioral Therapy (CBT), Emotion Focused Therapy (EFT), and Acceptance and Commitment Therapy (ACT)—all delivered through a person-centered lens that honors where you are in your unique healing journey.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Therapeutic Modalities</h3>
              {[
                "Internal Family Systems (IFS)",
                "Cognitive Behavioral Therapy (CBT)",
                "Emotion Focused Therapy (EFT)",
                "Acceptance and Commitment Therapy (ACT)",
                "Person-centered therapy",
                "Strength-based interventions",
                "Mindfulness practices"
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
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Core Frameworks</h3>
              {[
                "Health At Every Size (HAES)",
                "Affirmative Therapy model",
                "Body positive approach",
                "Weight-neutral care",
                "Identity exploration and affirmation",
                "Trauma-informed practice",
                "Empowerment-focused care"
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
            <p className="text-lg italic text-[#333333] text-center">
              <strong>My Philosophy:</strong> However therapeutic approaches are important, my main focus is providing a safe space for everyone who enters my room. You'll never feel judged for your body, your identities, your struggles, or where you are in your journey.
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Eating Disorders & Body Image</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Anorexia Nervosa</li>
                  <li>• Bulimia Nervosa</li>
                  <li>• Binge Eating Disorder</li>
                  <li>• ARFID</li>
                  <li>• Orthorexia</li>
                  <li>• Body dysmorphia</li>
                  <li>• Athlete populations</li>
                  <li>• Chronic dieting recovery</li>
                  <li>• Body positive practices</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Identity & Self-Exploration</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Identity development</li>
                  <li>• Self-acceptance journey</li>
                  <li>• Values clarification</li>
                  <li>• Purpose realignment</li>
                  <li>• LGBTQIA+ identity affirmation</li>
                  <li>• Religious trauma</li>
                  <li>• College-age transitions</li>
                  <li>• Emerging adulthood</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Emotional & Cognitive Work</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Anxiety disorders</li>
                  <li>• Depression</li>
                  <li>• Perfectionism</li>
                  <li>• Self-esteem issues</li>
                  <li>• Cognitive distortions</li>
                  <li>• Emotional regulation</li>
                  <li>• Mindfulness skills</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Neurodiversity & Community Health</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Autism spectrum support</li>
                  <li>• Neurodivergent-affirming care</li>
                  <li>• Community health needs</li>
                  <li>• College student wellness</li>
                  <li>• Group facilitation</li>
                  <li>• Prevention education</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eclectic Therapy Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-6">
            An Eclectic, Tailored Approach
          </h2>
          <p className="text-xl text-[#f49a39] mb-12">
            Drawing from Multiple Evidence-Based Modalities
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-12">
            I don't believe in one-size-fits-all therapy. Instead, I integrate multiple therapeutic approaches to create a treatment experience uniquely suited to you. My eclectic approach means we use what works for you, when you need it—always tailored to your specific needs and goals.
          </p>

          <div className="space-y-8">
            {/* IFS */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Internal Family Systems (IFS)</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                IFS recognizes that we all have different 'parts'—the critical voice, the protector, the vulnerable child within. Eating disorders often involve parts trying to protect you in ways that ultimately cause harm.
              </p>
              <p className="font-medium text-[#1a428a] mb-3">In IFS work, we'll:</p>
              <ul className="space-y-2 text-[#333333]">
                <li>• Identify the different parts of you (the eating disorder voice, the perfectionist, the wounded self)</li>
                <li>• Understand what each part is trying to do for you</li>
                <li>• Help parts communicate with each other</li>
                <li>• Access your 'Self' (the wise, compassionate core of who you are)</li>
                <li>• Unburden parts carrying old wounds</li>
                <li>• Integrate all parts into a harmonious internal system</li>
              </ul>
              <p className="mt-4 text-[#333333] italic">
                IFS is especially powerful for eating disorders because it doesn't vilify the eating disorder—it helps you understand what it's been trying to protect you from.
              </p>
            </div>

            {/* CBT */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                CBT helps us identify and challenge the thought patterns that maintain eating disorder behaviors. It's practical, skill-focused, and evidence-based.
              </p>
              <p className="font-medium text-[#1a428a] mb-3">CBT techniques we might use:</p>
              <ul className="space-y-2 text-[#333333]">
                <li>• Identifying cognitive distortions (all-or-nothing thinking, catastrophizing, emotional reasoning)</li>
                <li>• Challenging negative automatic thoughts about food, weight, and body</li>
                <li>• Behavioral experiments to test beliefs</li>
                <li>• Exposure work for feared foods or situations</li>
                <li>• Structured meal planning and normalization</li>
                <li>• Relapse prevention skills</li>
              </ul>
              <p className="mt-4 text-[#333333] italic">
                CBT provides concrete tools you can use between sessions and beyond therapy—practical strategies that create real change.
              </p>
            </div>

            {/* EFT */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Emotion Focused Therapy (EFT)</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                EFT recognizes that eating disorder behaviors often serve as emotional management strategies. We'll work with emotions directly—not just talk about them.
              </p>
              <p className="font-medium text-[#1a428a] mb-3">EFT helps you:</p>
              <ul className="space-y-2 text-[#333333]">
                <li>• Identify and name emotions with nuance</li>
                <li>• Understand primary emotions (the real feelings underneath)</li>
                <li>• Distinguish between adaptive and maladaptive emotions</li>
                <li>• Access emotional experiences safely in session</li>
                <li>• Transform painful emotional patterns</li>
                <li>• Develop healthier ways to process feelings</li>
                <li>• Build emotional resilience</li>
              </ul>
              <p className="mt-4 text-[#333333] italic">
                Many people discover that their eating disorder has been attempting to manage emotions they didn't know how to handle. EFT gives you new options—healthier ways to meet your emotional needs.
              </p>
            </div>

            {/* ACT */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Acceptance and Commitment Therapy (ACT)</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                ACT focuses on building psychological flexibility—the ability to stay present, open up to difficult experiences, and take action aligned with your values.
              </p>
              <p className="font-medium text-[#1a428a] mb-3">ACT principles we'll explore:</p>
              <ul className="space-y-2 text-[#333333]">
                <li>• <strong>Acceptance:</strong> Making room for difficult thoughts and feelings without fighting them</li>
                <li>• <strong>Cognitive defusion:</strong> Creating distance from unhelpful thoughts (they're just thoughts, not facts)</li>
                <li>• <strong>Present moment awareness:</strong> Mindfulness and grounding practices</li>
                <li>• <strong>Self-as-context:</strong> You are not your thoughts, feelings, or eating disorder</li>
                <li>• <strong>Values clarification:</strong> What matters most to you? What kind of life do you want?</li>
                <li>• <strong>Committed action:</strong> Taking steps toward your values even when it's hard</li>
              </ul>
              <p className="mt-4 text-[#333333] italic">
                ACT is about realigning with your purpose and values—building a life so fulfilling that the eating disorder becomes irrelevant.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#1a428a] p-8 rounded-lg text-center">
            <p className="text-white text-lg leading-relaxed">
              <strong className="block mb-4 text-xl">Why An Eclectic Approach Works:</strong>
              Different challenges require different tools. Some days you might need CBT skills to challenge a thought. Other days, you might need IFS work to understand a protective part. Sometimes you need EFT to process an emotion, or ACT to reconnect with your values.
              <br /><br />
              I'll draw from these modalities flexibly based on what you need in the moment—always tailored to you, always strength-based, always meeting you where you are.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Recovery Journey */}
      <section className="py-20 bg-[#fff5eb]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            A Personal Note on Recovery
          </h2>
          
          <div className="relative">
            <div className="text-6xl text-[#f49a39] absolute -top-4 -left-4">"</div>
            <div className="pl-8 pr-8 space-y-6 text-lg text-[#333333] leading-relaxed">
              <p>
                Stemming from my personal experience with eating disorder recovery, I bring both clinical training and lived understanding to our work together. I know what it's like to struggle—the internal battles, the shame, the exhaustion of fighting with food every day.
              </p>
              
              <p>
                My recovery journey has profoundly shaped how I practice therapy. I understand that recovery isn't linear, and it doesn't look the same for everyone. I know the courage it takes to seek help, the vulnerability of trusting someone with your story, and the patience required to heal.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                What my recovery experience brings to our work together:
              </p>
              
              <p>
                I won't sugarcoat the difficulty—recovery takes real courage and commitment. But I also won't let you lose hope. I've walked this path, and I believe deeply in your capacity to heal.
              </p>
              
              <p>
                I understand the nuances that textbooks miss—the social anxiety around meals, the grief of letting go of the eating disorder identity, the complexity of wanting recovery while also feeling terrified of it.
              </p>
              
              <p>
                Most importantly, I know that recovery is possible. Not just managing symptoms, but genuine freedom—the kind where you can eat without calculating, exist in your body without constant criticism, and build a life aligned with your true purpose and values.
              </p>
              
              <p className="font-medium">
                I'm excited to begin this journey to empowerment with you. Your recovery is yours to define, and I'm honored to walk alongside you as you discover what freedom and self-acceptance mean to you.
              </p>
            </div>
            <div className="text-6xl text-[#f49a39] absolute -bottom-4 -right-4 text-right">"</div>
          </div>
          
          <p className="text-xl text-[#f49a39] italic text-right mt-8">— Rachel</p>
        </div>
      </section>

      {/* Body Positivity & Affirmative Care */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-6">
            Body Positivity & Affirmative Care
          </h2>
          <p className="text-xl text-[#f49a39] mb-12">
            Embracing and Exploring Your Authentic Identity
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-12">
            I adhere to Health At Every Size (HAES) and Affirmative Therapy models to aid my clients in embracing and exploring their identities. Whether you're navigating body image, gender identity, sexual orientation, or other aspects of who you are, I'm committed to providing affirming, nonjudgmental support.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Body Positive Practices */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Body Positivity in Action</h3>
              <p className="text-[#333333] mb-4">
                My experience conducting body positive activities for college students has equipped me with practical, engaging approaches to challenge diet culture and build body acceptance.
              </p>
              
              <p className="font-medium text-[#1a428a] mb-3">Body positive work includes:</p>
              <ul className="space-y-2 text-[#333333] mb-6">
                <li>• Challenging internalized fatphobia and weight stigma</li>
                <li>• Exploring social media's impact on body image</li>
                <li>• Developing body neutrality or body respect (not everyone needs to 'love' their body)</li>
                <li>• Identifying and resisting diet culture messages</li>
                <li>• Building body trust and interoceptive awareness</li>
                <li>• Joyful movement exploration (exercise divorced from punishment)</li>
                <li>• Clothing and style as self-expression</li>
                <li>• Navigating social situations with body confidence</li>
              </ul>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#f49a39]">
                <p className="font-medium text-[#1a428a] mb-2">HAES Principles:</p>
                <p className="text-[#333333]">
                  I practice from a weight-neutral stance. You will never be weighed unnecessarily, receive diet advice, or be told your body needs to change. All bodies deserve respect, care, and dignity.
                </p>
              </div>
            </div>

            {/* Affirmative Therapy */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Affirmative & Identity-Supportive Care</h3>
              <p className="text-[#333333] mb-4">
                Affirmative Therapy is an inclusive, strengths-based approach that validates and supports diverse identities—especially LGBTQIA+ identities.
              </p>
              
              <p className="font-medium text-[#1a428a] mb-3">In affirmative practice, I:</p>
              <ul className="space-y-2 text-[#333333] mb-6">
                <li>• Affirm your gender identity, sexual orientation, and other identities</li>
                <li>• Use your correct pronouns and chosen name</li>
                <li>• Understand that your identities are not pathological</li>
                <li>• Explore how identity intersects with eating disorders</li>
                <li>• Address minority stress and discrimination impacts</li>
                <li>• Support identity exploration without pressure to 'figure it all out'</li>
                <li>• Challenge heteronormative and cisnormative assumptions</li>
                <li>• Create safety for questioning and fluidity</li>
              </ul>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#f49a39]">
                <p className="font-medium text-[#1a428a] mb-2">Identity Exploration:</p>
                <p className="text-[#333333]">
                  Whether you're exploring sexual orientation, gender identity, relationship structures, or other aspects of who you are, I provide a safe, affirming space to question, discover, and embrace your authentic self.
                  <br /><br />
                  Your identities are not separate from your eating disorder recovery—they're integral to understanding your full story and realigning with your purpose and values.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#fff5eb] p-8 rounded-lg text-center">
            <p className="text-lg text-[#333333]">
              <strong className="block mb-4 text-xl text-[#1a428a]">Safe Space Commitment:</strong>
              My main focus is providing a safe space for everyone who enters my room. You won't be judged for your body, your identities, your struggles, or where you are in your journey. Safety means you can show up as your full self—all parts welcomed.
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
            <div className="border-t-4 border-[#f49a39] bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Your First Appointment</h3>
              <p className="text-[#333333] mb-6">
                We'll explore what brings you to therapy, your goals, and your story. I'll learn about your identities, values, and what matters most to you. This is a collaborative conversation where we begin building trust and creating your personalized treatment plan—tailored specifically to you.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  60-90 minutes
                </span>
              </div>
            </div>

            <div className="border-t-4 border-[#f49a39] bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Regular Therapy</h3>
              <p className="text-[#333333] mb-6">
                Sessions are typically 50-60 minutes, weekly or bi-weekly. I'll draw from multiple therapeutic approaches (IFS, CBT, EFT, ACT) based on what you need. Therapy is flexible, strength-based, and always at your pace.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  50-60 minutes
                </span>
              </div>
            </div>

            <div className="border-t-4 border-[#f49a39] bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Creating Safety</h3>
              <p className="text-[#333333] mb-6">
                I'm warm, nonjudgmental, and genuinely invested in your empowerment. You'll never feel rushed, pressured, or shamed. My goal is for you to leave each session feeling more aligned with yourself—even if the work was difficult.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Person-centered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Connection */}
      <section className="py-20 bg-[#fff5eb]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Beyond the Clinical
          </h2>
          
          <div className="space-y-6 text-lg text-[#333333] leading-relaxed">
            <p>
              I've lived in multiple states across the country, but the Pacific Northwest feels most like home. There's something about the misty mornings, the evergreen forests, and the creative spirit of this region that resonates deeply with me. Portland's embrace of authenticity and individuality has been healing in its own right.
            </p>
            
            <p>
              Outside of therapy, I'm an avid lover of music—especially classic rock and metal. There's something about the raw energy and powerful guitar riffs that speaks to me. You might hear me reference song lyrics in session (fair warning!).
            </p>
            
            <p>
              I'm also drawn to all things spooky—horror movies, true crime podcasts, Halloween year-round vibes. I think there's something cathartic about exploring fear in controlled contexts, and honestly, the 'spooky' aesthetic feels like home to me.
            </p>
            
            <p>
              Art in all its forms speaks to me. I write poetry as a way to process my own experiences and emotions. I believe creativity is a vital part of healing—whether that's writing, drawing, music, fashion, or any other form of self-expression. We might even incorporate creative exercises into our work together if that resonates with you.
            </p>
            
            <p>
              I have a dog named Tilly Willy who is basically my child and brings endless joy and comedic relief to my life. And I'm always on the hunt for new restaurants to try—food should be pleasurable, social, and fun, which is something I hope to help my clients rediscover.
            </p>
            
            <p className="font-medium">
              I share these personal details because I want you to see me as a whole person, not just a clinician. Therapy works best when there's genuine human connection, and I bring my authentic self into the room—quirks, interests, and all.
            </p>
          </div>
          
          <p className="text-xl text-[#f49a39] italic text-center mt-12">
            I'm excited to begin this journey to empowerment with you. 🌙✨
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#1a428a]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey to Empowerment?
          </h2>
          
          <p className="text-xl text-white mb-10 leading-relaxed">
            I'm currently accepting new clients for individual therapy in Portland and via telehealth throughout Oregon and Washington. Whether you're struggling with an eating disorder, exploring your identity, seeking body acceptance, or realigning with your purpose and values, I'm here to create a safe space for your healing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-8 py-4 text-lg">
              Schedule with Rachel
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1a428a] px-8 py-4 text-lg">
              Call (360) 726-4141
            </Button>
          </div>
          
          <p className="text-white text-lg">
            Email: [email address] | Portland, OR & Vancouver, WA | Telehealth: OR & WA
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Anne Cuthbert Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={anneImage} 
                    alt="Anne Cuthbert"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-1">
                  Anne Cuthbert
                </h3>
                <p className="text-xs text-[#666666] mb-2">MA, LPC, LMHC</p>
                <p className="text-sm text-[#333333] mb-4">Owner & Founder</p>
                <Link to="/about/anne-cuthbert">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bailey Benn Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={baileyImage} 
                    alt="Bailey Benn"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-1">
                  Bailey Benn
                </h3>
                <p className="text-xs text-[#666666] mb-2">MA, LPC, LMHC</p>
                <p className="text-sm text-[#333333] mb-4">Clinical Therapist</p>
                <Link to="/about/bailey-benn">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Alyssa Pataki Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={alyssaImage} 
                    alt="Alyssa Pataki"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-1">
                  Alyssa Pataki
                </h3>
                <p className="text-xs text-[#666666] mb-2">MA, LMFT</p>
                <p className="text-sm text-[#333333] mb-4">Couple's & Family Therapist</p>
                <Link to="/about/alyssa-pataki">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Kiandra Cole Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={kiandraImage} 
                    alt="Kiandra Cole"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-1">
                  Kiandra Cole
                </h3>
                <p className="text-xs text-[#666666] mb-2">MA</p>
                <p className="text-sm text-[#333333] mb-4">Social Justice Advocate</p>
                <Link to="/about/kiandra-cole">
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

export default RachelBennett;