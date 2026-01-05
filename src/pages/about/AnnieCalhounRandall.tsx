import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import anneImage from "@/assets/anne-cuthbert.jpg";
import baileyImage from "@/assets/bailey-benn-new.webp";
import annieImage from "@/assets/annie-calhoun-randall-new.jpg";
import alyssaImage from "@/assets/alyssa-pataki.webp";
import kiandraImage from "@/assets/kiandra-cole.webp";
import rachelImage from "@/assets/rachel-bennett.webp";
import { Helmet } from "react-helmet";

const AnnieCalhounRandall = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Annie Calhoun Randall, MA | Professional Counselor at Beyond Eating Recovery</title>
        <meta name="description" content="Annie Calhoun Randall is a Professional Counselor Associate and Athlete Specialist specializing in eating disorders, athlete nutrition, and holistic recovery in Portland and Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about/annie-calhoun-randall" />
        <meta property="og:title" content="Annie Calhoun Randall, MA | Professional Counselor at Beyond Eating Recovery" />
        <meta property="og:description" content="Professional Counselor Associate and Athlete Specialist specializing in eating disorders, athlete nutrition, and holistic recovery in Portland and Vancouver." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/about/annie-calhoun-randall" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/annie-calhoun-randall.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Annie Calhoun Randall, MA | Professional Counselor at Beyond Eating Recovery" />
        <meta name="twitter:description" content="Professional Counselor Associate and Athlete Specialist specializing in eating disorders, athlete nutrition, and holistic recovery in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/annie-calhoun-randall.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Annie Calhoun Randall",
            "honorificSuffix": "MA",
            "jobTitle": "Professional Counselor Associate | Certified Nutrition Therapy Practitioner | Athlete Specialist",
            "description": "Professional Counselor Associate, Certified Nutrition Therapy Practitioner, and Athlete Specialist specializing in eating disorders, athlete nutrition, and holistic recovery with personal recovery experience.",
            "url": "https://www.beyondeatingrecovery.com/about/annie-calhoun-randall",
            "image": "https://www.beyondeatingrecovery.com/annie-calhoun-randall.webp",
            "worksFor": {
              "@type": "MedicalBusiness",
              "name": "Beyond Eating Recovery",
              "url": "https://www.beyondeatingrecovery.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1000 Broadway Suite 215",
                "addressLocality": "Vancouver",
                "addressRegion": "WA",
                "postalCode": "98660",
                "addressCountry": "US"
              },
              "telephone": "+1-360-726-4141"
            },
            "workLocation": {
              "@type": "Place",
              "name": "Beyond Eating Recovery - Vancouver Office",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1000 Broadway Suite 215",
                "addressLocality": "Vancouver",
                "addressRegion": "WA",
                "postalCode": "98660",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Portland", "containedInPlace": { "@type": "State", "name": "Oregon" } },
              { "@type": "City", "name": "Vancouver", "containedInPlace": { "@type": "State", "name": "Washington" } },
              { "@type": "State", "name": "Oregon" },
              { "@type": "State", "name": "Washington" }
            ],
            "alumniOf": [
              {
                "@type": "CollegeOrUniversity",
                "name": "Western Seminary"
              },
              {
                "@type": "CollegeOrUniversity",
                "name": "Nutrition Therapy Institute"
              },
              {
                "@type": "CollegeOrUniversity",
                "name": "University of Oregon"
              }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "License",
                "name": "Professional Counselor Associate",
                "recognizedBy": [
                  { "@type": "State", "name": "Oregon" },
                  { "@type": "State", "name": "Washington" }
                ]
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Certification",
                "name": "Certified Nutrition Therapy Practitioner (CNTP)"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Degree",
                "name": "Master of Arts in Counseling"
              }
            ],
            "knowsAbout": [
              "Eating Disorders",
              "Athlete Eating Disorders",
              "Nutrition Therapy",
              "Emotion Focused Therapy (EFIT)",
              "Somatic Experiencing",
              "Internal Family Systems (IFS)",
              "Health At Every Size (HAES)",
              "Religious Trauma",
              "Relative Energy Deficiency in Sport (RED-S)"
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
                src={annieImage}
                alt="Annie Calhoun Randall, MA - Professional Counselor Associate at Beyond Eating Recovery"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="md:col-span-3 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a428a] leading-tight">
                Annie Calhoun Randall, MA
              </h1>
              
              <p className="text-xl md:text-2xl text-[#f49a39] font-medium">
                Professional Counselor Associate | Certified Nutrition Therapy Practitioner | Athlete Specialist
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Supervised by Anne Cuthbert, MA, LPC, LMHC
                </span>
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Personal Recovery Experience
                </span>
                <span className="px-4 py-2 bg-white border-2 border-[#1a428a] rounded-lg text-sm font-medium text-[#1a428a]">
                  Athlete Specialist
                </span>
              </div>
              
              <p className="text-lg text-[#333333] leading-relaxed">
                As a life-long athlete and someone who personally recovered from an eating disorder, I understand the journey from struggle to freedom. Combining my background in nutrition therapy, counseling, and athletics, I offer a holistic, body-centered approach to recovery. In addition, I work with co-occurring concerns such as anxiety, depression, trauma, and identity development. In doing so, I seek to create a safe space where you can improve your relationship with food and body.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-6 py-3 text-lg">
                  Schedule with Annie
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
                  <li>Master of Arts in Counseling</li>
                  <li className="font-medium">Western Seminary</li>
                  <li className="mt-3">Certified Nutrition Therapy Practitioner</li>
                  <li className="font-medium">Nutrition Therapy Institute, Denver</li>
                  <li className="mt-3">Bachelor of Architecture</li>
                  <li className="font-medium">University of Oregon</li>
                  <li className="mt-3">Professional Counselor Associate</li>
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
                  <li>Professional Counselor Associate - Oregon & Washington</li>
                  <li>Certified Nutrition Therapy Practitioner (CNTP)</li>
                  <li>Former Certified Personal Trainer (CPT)</li>
                  <li className="mt-3 font-medium">Supervised by Anne Cuthbert, MA, LPC, LMHC</li>
                  <li>Working toward full licensure (LPC/LMHC)</li>
                  <li className="mt-3">Practicum/Internship: A New Day Counseling Center & Body Expressions</li>
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Experience</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>Nearly 6 years coaching experience</li>
                  <li>Eating disorder treatment specialist</li>
                  <li>Nutrition therapy background</li>
                  <li>Lifelong athlete and former coach</li>
                  <li>Personal recovery experience</li>
                  <li>Holistic, body-centered approach</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-[#fff5eb] p-8 rounded-lg text-center max-w-4xl mx-auto">
            <p className="text-lg italic text-[#333333]">
              <strong>Unique Combination:</strong> Annie brings together nutrition science, counseling expertise, athletic experience, and personal recovery, creating a comprehensive approach to eating disorder treatment that addresses body, mind, and spirit.
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
            My approach is attachment-based, trauma-informed, and person-centered. I take a holistic view, understanding that humans do not live in a vacuum—our social environment shapes our thoughts, feelings, and behaviors. I seek to come alongside my clients with empathy and compassion, honoring both body and mind in the healing process.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Therapeutic Modalities</h3>
              {[
                "Emotion Focused Individual Therapy (EFIT)",
                "Somatic Experiencing (SE)",
                "Internal Family Systems (IFS)",
                "Attachment-based therapy",
                "Trauma-informed approaches",
                "Body-centered interventions",
                "Nutrition therapy integration"
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
                "Social justice framework",
                "Holistic approach (body, mind, spirit)",
                "Weight-neutral care",
                "Athlete-centered support",
                "Person-centered care",
                "Empathy and compassion"
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
            <p className="text-lg text-[#333333]">
              <strong className="text-[#1a428a]">Social Justice Lens:</strong> I understand that our relationships with food and body are influenced by systemic factors including diet culture, weight stigma, societal expectations, other systems of oppression, and more. My approach addresses these broader contexts while supporting your individual healing.
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Eating Disorders & Nutrition</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Anorexia Nervosa</li>
                  <li>• Bulimia Nervosa</li>
                  <li>• Binge Eating Disorder</li>
                  <li>• ARFID</li>
                  <li>• Orthorexia</li>
                  <li>• Relative Energy Deficiency in Sport (RED-S)</li>
                  <li>• Disordered eating patterns</li>
                  <li>• Nutrition therapy integration</li>
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Athletes & Performance</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Athlete-specific eating disorders</li>
                  <li>• Performance anxiety</li>
                  <li>• Body image in sports</li>
                  <li>• Overtraining and under-fueling</li>
                  <li>• Post-athletic identity transitions</li>
                  <li>• Coach relationships</li>
                  <li>• Sport-specific pressures</li>
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Trauma & Emotional Work</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Religious trauma</li>
                  <li>• Complex trauma (C-PTSD)</li>
                  <li>• Attachment wounds</li>
                  <li>• Anxiety disorders</li>
                  <li>• Depression</li>
                  <li>• Somatic trauma release</li>
                  <li>• Emotional regulation</li>
                  <li>• Spiritual integration</li>
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Body & Identity</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Body image issues</li>
                  <li>• Body dysmorphia</li>
                  <li>• Identity development</li>
                  <li>• LGBTQIA+ identity affirmation</li>
                  <li>• Adolescents and adults</li>
                  <li>• Self-esteem and self-worth</li>
                  <li>• Life transitions</li>
                  <li>• Career changes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working with Athletes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-6">
            Working with Athletes
          </h2>
          <p className="text-xl text-[#f49a39] mb-8">
            Understanding the Unique Challenges Athletes Face
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-8">
            I have a special interest in working with athletes. As a lifelong athlete and former coach, I understand the additional challenges that athletes face and the ways in which these challenges can impact one's relationship with food and body. The intersection of athletic performance, body expectations, and eating disorders requires specialized understanding. I bring both professional training and lived experience to this work.
          </p>

          <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Unique Risk Factors for Athletes</h3>
          <p className="text-lg text-[#333333] mb-6">Athletes face specific pressures that increase eating disorder risk:</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">Sport-Specific Pressures</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• Weight requirements or 'ideal' body types for certain sports</li>
                <li>• Performance metrics tied to body composition</li>
                <li>• Aesthetic components (gymnastics, figure skating, dance)</li>
                <li>• Weight class sports (wrestling, rowing, martial arts)</li>
                <li>• Endurance sports and energy availability concerns</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">Athletic Culture Factors</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• Coach comments about weight or appearance</li>
                <li>• Team weigh-ins and body composition testing</li>
                <li>• Comparison with teammates</li>
                <li>• 'No pain, no gain' mentality that ignores body signals</li>
                <li>• Identity entirely wrapped up in athletic performance</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">RED-S (Relative Energy Deficiency in Sport)</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• Under-fueling for training demands</li>
                <li>• Menstrual irregularities or loss</li>
                <li>• Bone density issues and stress fractures</li>
                <li>• Decreased performance despite increased training</li>
                <li>• Compromised immune function</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#fff5eb] p-6 rounded-lg mb-12">
            <p className="text-lg text-[#333333] italic">
              Many athletes don't recognize they have an eating disorder because the behaviors are normalized or even praised in athletic contexts.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a428a] mb-6">My Athletic Background & Insight</h3>
          <p className="text-lg text-[#333333] mb-6">As a lifelong athlete and former coach, I get it. I understand:</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">The Athletic Mindset</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• The drive for excellence and perfectionism</li>
                <li>• How training becomes both passion and compulsion</li>
                <li>• The fear of losing your edge if you change your approach</li>
                <li>• The identity crisis when injury or recovery sidelines you</li>
                <li>• The pressure to perform for coaches, teammates, and yourself</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">Coaching Dynamics</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• How coach relationships impact body image and eating</li>
                <li>• The vulnerability of receiving feedback about your body</li>
                <li>• When coaching crosses the line into harmful territory</li>
                <li>• How to navigate difficult conversations with coaches</li>
                <li>• The power dynamics in coach-athlete relationships</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">The Recovery Challenge</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• Fear that proper fueling will hurt performance (it won't—it helps)</li>
                <li>• Concern about weight changes during recovery</li>
                <li>• Learning to listen to body signals instead of training plans</li>
                <li>• Maintaining athletic identity during eating disorder recovery</li>
                <li>• Finding balance between healthy training and compulsion</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a428a] text-white p-6 rounded-lg mb-12">
            <p className="text-lg">
              I won't ask you to give up your sport—I'll help you find a healthier relationship with both athletics and your body.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Treatment Approach for Athletes</h3>
          <p className="text-lg text-[#333333] mb-6">Working with athletes requires a specialized approach:</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">Nutrition Integration</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• Combining counseling with nutrition therapy knowledge</li>
                <li>• Understanding sport-specific fueling needs</li>
                <li>• Addressing RED-S and energy availability</li>
                <li>• Working with sports dietitians when appropriate</li>
                <li>• Education about performance nutrition vs. diet culture</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">Body-Centered Work</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• Somatic Experiencing to reconnect with body signals</li>
                <li>• Distinguishing between athletic pain and injury</li>
                <li>• Rebuilding trust with your body's hunger and fatigue cues</li>
                <li>• Addressing overtraining and burnout</li>
                <li>• Finding joyful movement beyond structured training</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">Identity Work</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• Exploring who you are beyond your sport</li>
                <li>• Preparing for transitions (retirement, injury, graduation)</li>
                <li>• Building self-worth not tied to performance</li>
                <li>• Developing life balance and interests outside athletics</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#1a428a] mb-4">Practical Support</h4>
              <ul className="space-y-2 text-[#333333]">
                <li>• Navigating team environments during recovery</li>
                <li>• Communicating with coaches about your needs</li>
                <li>• Handling social eating situations with teams</li>
                <li>• Managing competition anxiety without food restriction</li>
                <li>• Return-to-sport planning after eating disorder treatment</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-[#333333] mb-8">
            Whether you're currently competing, transitioning out of sport, a former athlete, or dealing with a career-ending injury, I understand the unique emotional landscape of athletic life.
          </p>

          <div className="bg-[#fff5eb] p-8 rounded-lg text-center">
            <p className="text-lg font-medium text-[#1a428a] mb-2">You Don't Have to Choose:</p>
            <p className="text-lg text-[#333333]">
              Many athletes fear they must choose between their sport and recovery. The truth is, proper fueling and a healthy relationship with food will make you a better athlete—not a worse one. Let's find that balance together.
            </p>
          </div>
        </div>
      </section>

      {/* Body-Centered Healing */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-6">
            Body-Centered Healing
          </h2>
          <p className="text-xl text-[#f49a39] mb-8">
            Integrating EFIT, Somatic Experiencing, and IFS
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-12">
            My approach is informed by three primary body-centered modalities: Emotion Focused Individual Therapy (EFIT), Somatic Experiencing (SE), and Internal Family Systems (IFS). These approaches honor the wisdom of the body and recognize that healing happens not just in the mind, but in the body as well.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a428a] mb-4">Emotion Focused Individual Therapy (EFIT)</h3>
              <p className="text-[#333333] mb-4">EFIT is an attachment-based approach that helps you access, process, and transform core emotions.</p>
              <p className="font-medium text-[#1a428a] mb-3">Through EFIT, we will:</p>
              <ul className="space-y-2 text-[#333333]">
                <li>• Identify underlying emotions beneath eating disorder behaviors</li>
                <li>• Understand your attachment patterns</li>
                <li>• Access blocked or avoided emotions safely</li>
                <li>• Transform maladaptive emotional patterns</li>
                <li>• Build secure attachments</li>
                <li>• Develop emotional regulation skills</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a428a] mb-4">Somatic Experiencing (SE)</h3>
              <p className="text-[#333333] mb-4">SE is a body-based trauma therapy that helps release trauma stored in the nervous system.</p>
              <p className="font-medium text-[#1a428a] mb-3">Through SE, we will:</p>
              <ul className="space-y-2 text-[#333333]">
                <li>• Track bodily sensations and nervous system states</li>
                <li>• Release trauma held in the body</li>
                <li>• Complete survival responses that got 'stuck'</li>
                <li>• Restore capacity for regulation and resilience</li>
                <li>• Reconnect with body wisdom</li>
                <li>• Develop body trust and safety</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a428a] mb-4">Internal Family Systems (IFS)</h3>
              <p className="text-[#333333] mb-4">IFS views the psyche as made up of different 'parts,' each with its own protective role.</p>
              <p className="font-medium text-[#1a428a] mb-3">Through IFS, we will:</p>
              <ul className="space-y-2 text-[#333333]">
                <li>• Identify parts (critic, protector, eating disorder voice)</li>
                <li>• Understand what each part is protecting you from</li>
                <li>• Access your core 'Self'</li>
                <li>• Help parts communicate and work together</li>
                <li>• Unburden parts carrying shame or pain</li>
                <li>• Integrate all parts into a harmonious whole</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#1a428a] mb-4">Why Body-Centered Approaches?</h3>
            <p className="text-lg text-[#333333] leading-relaxed mb-4">
              Eating disorders live in the body as much as the mind. Traditional talk therapy alone often isn't enough. We need to address the somatic, emotional, and relational dimensions of your experience. These body-centered approaches help you:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-[#333333]">
              <li>• Reconnect with body signals</li>
              <li>• Release trauma stored in the nervous system</li>
              <li>• Access and transform core emotions</li>
              <li>• Understand protective patterns</li>
              <li>• Build genuine body trust and safety</li>
              <li>• Create lasting change</li>
            </ul>
            <p className="text-lg text-[#333333] mt-6 italic">
              Your body isn't the enemy. It's been trying to protect you. Let's help it find new, healthier ways to keep you safe.
            </p>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-6 text-center">
            My Journey: From Architecture to Healing
          </h2>
          
          <div className="relative bg-[#f8f9fa] p-8 md:p-12 rounded-lg shadow-lg">
            <div className="text-6xl text-[#f49a39] absolute -top-4 -left-4">"</div>
            <div className="pl-8 pr-8 space-y-6 text-lg text-[#333333] leading-relaxed">
              <p>
                My path to becoming a therapist wasn't traditional… but then again, recovery rarely is.
              </p>
              
              <p>
                I started my career with a Bachelor of Architecture from the University of Oregon. I thought I'd found my calling in design and creating spaces. But shortly after graduation, I realized something was missing. My own eating disorder recovery journey had been so transformative that I felt called to help others experience that same freedom.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                From Architecture to Nutrition:
              </p>
              
              <p>
                I made what seemed like a radical career change and attended the Nutrition Therapy Institute in Denver, becoming a Certified Nutrition Therapy Practitioner. For nearly six years, I then coached clients in nutrition and sports performance. However, I slowly began to realize that eating disorders are about more than just food and healing involves deeper emotional and psychological support.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                From Nutrition to Counseling:
              </p>
              
              <p>
                Thus, I returned to school once again and earned my Master of Arts in Counseling from Western Seminary. During my graduate program, I completed my practicum and internship at A New Day Counseling Center and Body Expressions, which brought together everything that I had learned.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                What This Means for You:
              </p>
              
              <p>
                As someone who recovered from an eating disorder myself, I understand the journey from struggle to freedom. I know what it's like to battle daily with food decisions and body image, feel controlled by eating disorder thoughts, fear losing the behaviors that feel protective, wonder if recovery is actually possible, navigate relationships and social situations around food, and rebuild trust with your body.
              </p>
              
              <p>
                I also know the incredible freedom that comes from recovery, and I wanted to dedicate my professional life to helping others experience that freedom too.
              </p>
              
              <p>
                That said, my unconventional path means I bring a truly holistic perspective. I understand the body (nutrition science), the mind (counseling), and the creative process of redesigning your life (literally and figuratively).
              </p>
              
              <p className="font-medium">
                Recovery is possible. Freedom is real. And I'm honored to walk alongside you as you discover what that looks like for you.
              </p>
            </div>
            <div className="text-6xl text-[#f49a39] absolute -bottom-4 -right-4 text-right">"</div>
          </div>
          
          <p className="text-xl text-[#f49a39] italic text-right mt-8">— Annie</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-12 text-center">
            What to Expect in Working with Me
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
                We'll explore your history with food, body, and movement. I'll learn about your goals, your story, and what you need from therapy. This is a collaborative conversation where we begin building the trust and safety essential for healing.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  60-90 Minutes
                </span>
              </div>
            </div>

            <div className="border-t-4 border-[#f49a39] bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">The Healing Process</h3>
              <p className="text-[#333333] mb-6">
                Sessions are typically 50-60 minutes, weekly or bi-weekly. We'll use body-centered approaches (EFIT, SE, IFS) tailored to your needs. Expect both talking and experiential work—tuning into body sensations, emotions, and parts.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  50-60 Minutes
                </span>
              </div>
            </div>

            <div className="border-t-4 border-[#f49a39] bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Empathy & Compassion</h3>
              <p className="text-[#333333] mb-6">
                I seek to come alongside you with empathy and compassion. You won't be judged or rushed. We'll work at your body's pace and honor your needs, increasing your sense of self-compassion.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Holistic & Body Centered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Office */}
      <section className="py-20 bg-[#fff5eb]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Beyond the Office
          </h2>
          
          <div className="space-y-6 text-lg text-[#333333] leading-relaxed">
            <p>
              I grew up in Colorado, but I consider Portland home. In my free time, I enjoy running, weightlifting, hiking, and playing basketball. However, I now move my body from a place of joy and respect rather than compulsion or punishment. This shift informs how I work with clients, especially athletes.
            </p>
            
            <p>
              Finally, I also enjoy reading, writing, drawing, and spending time with my family and our adorable puppy.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1a428a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            I am currently on leave, but I will be accepting new clients for individual therapy in Portland, Vancouver, and via telehealth throughout Oregon and Washington starting in February of 2026. Whether you're an athlete struggling with food and performance, dealing with trauma, or seeking freedom from an eating disorder, I'm here to support you with empathy and compassion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-8 py-4 text-lg">
              Schedule with Annie
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1a428a] px-8 py-4 text-lg">
              Call (360) 726-4141
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Other Therapists */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Meet Our Other Therapists
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Link to="/about/anne-cuthbert" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <img 
                    src={anneImage}
                    alt="Anne Cuthbert"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-[#1a428a] group-hover:text-[#f49a39] transition-colors">Anne Cuthbert</h3>
                  <p className="text-sm text-[#666666]">MA, LPC, LMHC</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/about/bailey-benn" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <img 
                    src={baileyImage}
                    alt="Bailey Benn"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-[#1a428a] group-hover:text-[#f49a39] transition-colors">Bailey Benn</h3>
                  <p className="text-sm text-[#666666]">MA, LPC, LMHC</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/about/alyssa-pataki" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <img 
                    src={alyssaImage}
                    alt="Alyssa Pataki"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-[#1a428a] group-hover:text-[#f49a39] transition-colors">Alyssa Pataki</h3>
                  <p className="text-sm text-[#666666]">MA, LMFT</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/about/kiandra-cole" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <img 
                    src={kiandraImage}
                    alt="Kiandra Cole"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-[#1a428a] group-hover:text-[#f49a39] transition-colors">Kiandra Cole</h3>
                  <p className="text-sm text-[#666666]">MA</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/about/rachel-bennett" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <img 
                    src={rachelImage}
                    alt="Rachel Bennett"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-[#1a428a] group-hover:text-[#f49a39] transition-colors">Rachel Bennett</h3>
                  <p className="text-sm text-[#666666]">MA</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default AnnieCalhounRandall;
