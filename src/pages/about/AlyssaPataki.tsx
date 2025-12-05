import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, GraduationCap, Award, Calendar, Handshake, Heart, CheckCircle, Mail, Lightbulb, Building, Users, ArrowRight, PuzzleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import anneImage from "@/assets/anne-cuthbert.jpg";
import baileyImage from "@/assets/bailey-benn-new.webp";
import alyssaImage from "@/assets/alyssa-pataki.webp";
import kiandraImage from "@/assets/kiandra-cole.webp";
import rachelImage from "@/assets/rachel-bennett.webp";
import { Helmet } from "react-helmet";

const AlyssaPataki = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Alyssa Pataki, MA, LMFT | Licensed Therapist at Beyond Eating Recovery</title>
        <meta name="description" content="Alyssa Pataki is a Licensed Marriage & Family Therapist specializing in eating disorders, family therapy, and social justice-informed practice in Portland and Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about/alyssa-pataki" />
        <meta property="og:title" content="Alyssa Pataki, MA, LMFT | Licensed Therapist at Beyond Eating Recovery" />
        <meta property="og:description" content="Licensed Marriage & Family Therapist specializing in eating disorders, family therapy, and social justice-informed practice in Portland and Vancouver." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/about/alyssa-pataki" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/alyssa-pataki.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alyssa Pataki, MA, LMFT | Licensed Therapist at Beyond Eating Recovery" />
        <meta name="twitter:description" content="Licensed Marriage & Family Therapist specializing in eating disorders, family therapy, and social justice-informed practice in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/alyssa-pataki.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alyssa Pataki",
            "honorificSuffix": "MA, LMFT",
            "jobTitle": "Licensed Marriage & Family Therapist",
            "description": "Licensed Marriage & Family Therapist specializing in eating disorders, family therapy, and social justice-informed practice.",
            "url": "https://www.beyondeatingrecovery.com/about/alyssa-pataki",
            "image": "https://www.beyondeatingrecovery.com/alyssa-pataki.webp",
            "worksFor": {
              "@type": "MedicalBusiness",
              "name": "Beyond Eating Recovery",
              "url": "https://www.beyondeatingrecovery.com"
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Lewis & Clark Graduate School of Education & Counseling"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "License",
                "name": "Licensed Marriage & Family Therapist (LMFT)",
                "recognizedBy": [
                  { "@type": "State", "name": "Oregon" },
                  { "@type": "State", "name": "Washington" }
                ]
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Degree",
                "name": "Master of Arts in Marriage, Couple, and Family Therapy"
              }
            ],
            "knowsAbout": [
              "Eating Disorders",
              "Family Therapy",
              "Systemic Therapy",
              "Social Justice",
              "Cultural Competency",
              "BIPOC Mental Health",
              "Health At Every Size (HAES)",
              "Higher Levels of Care"
            ],
            "telephone": "+1-360-726-4141"
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Left Side - Photo */}
            <div className="w-full md:w-2/5">
              <img 
                src={alyssaImage} 
                alt="Alyssa Pataki, MA, LMFT - Licensed Marriage & Family Therapist at Beyond Eating Recovery"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Info */}
            <div className="w-full md:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a428a] mb-3">
                Alyssa Pataki, MA, LMFT
              </h1>
              <p className="text-2xl text-[#f49a39] font-medium mb-4">
                Licensed Marriage & Family Therapist | Social Justice-Informed Practice
              </p>
              
              {/* Credentials Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white border-2 border-[#1a428a] text-[#1a428a] px-4 py-2 rounded-lg text-sm font-medium">
                  Licensed in OR & WA
                </span>
                <span className="bg-white border-2 border-[#1a428a] text-[#1a428a] px-4 py-2 rounded-lg text-sm font-medium">
                  LMFT Specialization
                </span>
                <span className="bg-white border-2 border-[#1a428a] text-[#1a428a] px-4 py-2 rounded-lg text-sm font-medium">
                  Higher Levels of Care
                </span>
              </div>

              <p className="text-lg text-[#333333] leading-relaxed mb-6">
                I bring a unique blend of creative problem-solving and systemic thinking to eating disorder treatment. With roots in social justice and experience in higher levels of care, I work collaboratively with individuals and families to develop personalized solutions that honor your identities, values, and relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-6 py-6 text-base">
                  Schedule with Alyssa
                </Button>
                <a 
                  href="tel:360-726-4141" 
                  className="flex items-center justify-center gap-2 border-2 border-[#1a428a] text-[#1a428a] hover:bg-[#1a428a] hover:text-white px-6 py-3 rounded-md transition-colors font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call (360) 726-4141
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Credentials & Professional Background
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Education */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Education</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Master of Arts in Marriage, Couple, and Family Therapy</li>
                  <li>• Lewis & Clark Graduate School of Education & Counseling</li>
                  <li>• Bachelor of Science in Marketing</li>
                  <li>• Social justice-rooted clinical training</li>
                </ul>
              </CardContent>
            </Card>

            {/* Licenses & Training */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Licenses & Training</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Licensed Marriage & Family Therapist (LMFT) - Oregon & Washington</li>
                  <li>• Higher levels of care experience (residential, PHP, IOP)</li>
                  <li>• Systemic and relational therapy specialization</li>
                  <li>• HAES-informed practice</li>
                </ul>
              </CardContent>
            </Card>

            {/* Unique Background */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Unique Background</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Previous career in tech and startup environments</li>
                  <li>• Creative problem-solving expertise</li>
                  <li>• Cross-disciplinary perspective</li>
                  <li>• Cultural humility and identity-affirming practice</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Callout Banner */}
          <div className="bg-[#fff5eb] p-6 rounded-lg text-center">
            <p className="text-[#333333] italic leading-relaxed">
              "My journey from marketing and tech to mental health counseling brings a unique perspective to therapy—one that values innovation, systems thinking, and creative solutions tailored to your unique situation."
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-8">
            My Treatment Approach
          </h2>
          
          <p className="text-xl text-center text-[#333333] leading-relaxed max-w-4xl mx-auto mb-12">
            My approach is deeply collaborative and informed by systemic thinking. I believe healing happens within relationships—with yourself, your loved ones, and your community. Together, we'll explore alternative narratives and creative solutions that honor the complexities of your identity and experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Therapeutic Modalities */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Therapeutic Modalities</h3>
              <ul className="space-y-3">
                {[
                  "Marriage & Family Therapy (systemic approach)",
                  "Narrative therapy",
                  "Collaborative problem-solving",
                  "Relational-cultural therapy",
                  "Solution-focused interventions",
                  "Family systems work"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f49a39] mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Principles */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Core Principles</h3>
              <ul className="space-y-3">
                {[
                  "Health At Every Size (HAES)",
                  "Social justice framework",
                  "Cultural humility",
                  "Identity-affirming care",
                  "Trauma-informed practice",
                  "Intersectional approach"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f49a39] mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Specializations */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Clinical Specializations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Eating Disorders */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Eating Disorders</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Anorexia Nervosa</li>
                  <li>• Bulimia Nervosa</li>
                  <li>• Binge Eating Disorder</li>
                  <li>• ARFID</li>
                  <li>• Orthorexia</li>
                  <li>• Complex presentations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Family & Relational Work */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Family & Relational Work</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Family therapy for eating disorders</li>
                  <li>• Couple's therapy</li>
                  <li>• Parent-child relationships</li>
                  <li>• Caregiver support</li>
                  <li>• Communication patterns</li>
                  <li>• Family systems healing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Identity & Cultural Issues */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Identity & Cultural Issues</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• BIPOC experiences</li>
                  <li>• Cultural identity exploration</li>
                  <li>• Intersectional identities</li>
                  <li>• Marginalization and oppression</li>
                  <li>• Bicultural/multicultural navigation</li>
                  <li>• Heritage reconnection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Life Transitions */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Life Transitions</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Career changes</li>
                  <li>• Relationship transitions</li>
                  <li>• Parenthood</li>
                  <li>• Relocation adjustment</li>
                  <li>• Identity development</li>
                  <li>• Life purpose exploration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Higher Levels of Care Experience */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-4">
            Higher Levels of Care Expertise
          </h2>
          <p className="text-xl text-[#f49a39] mb-8">
            Experience Across the Continuum of Eating Disorder Treatment
          </p>

          <p className="text-lg text-[#333333] leading-relaxed mb-10 max-w-4xl">
            I've dedicated significant time working in higher levels of care—residential treatment, partial hospitalization programs (PHP), and intensive outpatient programs (IOP). This experience has given me deep insight into the complexities of eating disorders and what it takes to support individuals through various stages of recovery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Residential & PHP */}
            <div className="bg-white border-l-4 border-[#f49a39] p-6">
              <Building className="w-10 h-10 text-[#f49a39] mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Intensive Treatment Settings</h3>
              <p className="text-[#333333] leading-relaxed mb-3">Working in residential and PHP environments taught me to:</p>
              <ul className="text-sm text-[#333333] space-y-1">
                <li>• Navigate complex medical and psychological needs</li>
                <li>• Collaborate with multidisciplinary teams</li>
                <li>• Support individuals through acute phases</li>
                <li>• Provide structure while fostering autonomy</li>
                <li>• Work with families during crisis</li>
                <li>• Transition planning for step-down care</li>
              </ul>
            </div>

            {/* IOP Experience */}
            <div className="bg-white border-l-4 border-[#f49a39] p-6">
              <Calendar className="w-10 h-10 text-[#f49a39] mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Intensive Outpatient Care</h3>
              <p className="text-[#333333] leading-relaxed mb-3">My IOP experience includes:</p>
              <ul className="text-sm text-[#333333] space-y-1">
                <li>• Facilitating group therapy</li>
                <li>• Individual therapy in structured programs</li>
                <li>• Skills-based interventions</li>
                <li>• Meal support and processing</li>
                <li>• Family education and involvement</li>
                <li>• Recovery maintenance planning</li>
              </ul>
            </div>

            {/* Outpatient Integration */}
            <div className="bg-white border-l-4 border-[#f49a39] p-6">
              <ArrowRight className="w-10 h-10 text-[#f49a39] mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Applying What I've Learned</h3>
              <p className="text-[#333333] leading-relaxed mb-3">This background informs my outpatient work by:</p>
              <ul className="text-sm text-[#333333] space-y-1">
                <li>• Understanding the full continuum of care</li>
                <li>• Recognizing when higher levels may be needed</li>
                <li>• Knowing how to support post-discharge transitions</li>
                <li>• Anticipating challenges at different recovery stages</li>
                <li>• Collaborating effectively with treatment teams</li>
              </ul>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="bg-[#f8f9fa] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-[#1a428a] mb-4">What This Means for You:</h3>
            <p className="text-[#333333] leading-relaxed">
              Whether you're stepping down from higher levels of care or beginning outpatient treatment, I understand the unique challenges at each stage. I can help you navigate insurance, coordinate with treatment teams, support your family through the process, and create a sustainable path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Identity & Advocacy */}
      <section className="py-16 md:py-20 bg-[#1a428a]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Cultural Identity & Social Justice Commitment
          </h2>
          <p className="text-xl text-[#f49a39] text-center mb-12">
            Centering Marginalized Voices in Eating Disorder Treatment
          </p>

          <div className="bg-white p-8 md:p-12 rounded-lg max-w-5xl mx-auto">
            <p className="text-lg text-[#333333] leading-relaxed mb-10">
              I identify as Chicana and am actively exploring my Indigenous heritage—much of which was unknown to my family until recently. This personal journey has deepened my understanding of how historical trauma, cultural disconnection, and systemic oppression shape our relationships with our bodies, food, and identity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              {/* My Commitment */}
              <div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Why Representation Matters</h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  The eating disorder field has historically centered white, thin, cisgender experiences while marginalizing BIPOC, fat, LGBTQIA+, and other underrepresented communities. Given my personal experience navigating systems and institutions, it's especially important to me that I:
                </p>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Serve historically marginalized populations</li>
                  <li>• Be a resource for those who feel alone or unheard</li>
                  <li>• Advocate for clients who feel misunderstood or underrepresented</li>
                  <li>• Challenge the narrow narratives about who "gets" eating disorders</li>
                  <li>• Create space where all identities are welcomed and affirmed</li>
                </ul>
              </div>

              {/* In Practice */}
              <div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">What This Looks Like in Therapy</h3>
                <p className="text-[#333333] leading-relaxed mb-4">In our work together, I will:</p>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Honor your cultural background and lived experiences</li>
                  <li>• Acknowledge how systems of oppression impact mental health</li>
                  <li>• Incorporate your values, beliefs, and traditions into treatment</li>
                  <li>• Recognize the unique pressures faced by marginalized communities</li>
                  <li>• Validate experiences of discrimination and microaggressions</li>
                  <li>• Support identity exploration and cultural reconnection</li>
                  <li>• Challenge dominant culture narratives that cause harm</li>
                  <li>• Practice ongoing cultural humility and self-reflection</li>
                </ul>
              </div>
            </div>

            {/* Intersectionality Section */}
            <div className="bg-[#fff5eb] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a428a] mb-4">Intersectionality in Eating Disorder Treatment</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Eating disorders don't exist in a vacuum. They're shaped by:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#333333] mb-4">
                <li>• Cultural messages about bodies and beauty</li>
                <li>• Experiences of racism, sexism, homophobia, transphobia, ableism</li>
                <li>• Immigration experiences and cultural assimilation pressures</li>
                <li>• Socioeconomic factors and access to resources</li>
                <li>• Family dynamics and intergenerational trauma</li>
                <li>• Historical and ongoing systemic oppression</li>
              </ul>
              <p className="text-[#333333] leading-relaxed">
                I'm committed to understanding how these intersecting identities and experiences shape your relationship with food, body, and self. Your full story—including the contexts that have shaped you—is essential to our work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family & Systemic Work */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-4">
            Family & Relationship Focus
          </h2>
          <p className="text-xl text-[#f49a39] mb-8">
            Healing Within the Context of Relationships
          </p>

          <p className="text-lg text-[#333333] leading-relaxed mb-10 max-w-4xl">
            As a Licensed Marriage & Family Therapist, I understand that eating disorders impact entire family systems—and that families are often the most powerful resource in recovery. Whether I'm working with you individually or with your loved ones, I bring a systemic lens that considers how relationships shape and support healing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Individual Therapy */}
            <Card>
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Individual Therapy with a Systemic Lens</h3>
                <p className="text-sm text-[#333333] leading-relaxed mb-3">Even in individual therapy, we'll explore:</p>
                <ul className="text-sm text-[#333333] space-y-1">
                  <li>• How family dynamics and relationships impact your eating disorder</li>
                  <li>• Patterns learned in your family of origin</li>
                  <li>• Communication styles and relational needs</li>
                  <li>• How to set boundaries with loved ones</li>
                  <li>• Navigating family meals and gatherings</li>
                  <li>• Building or strengthening your support system</li>
                </ul>
              </CardContent>
            </Card>

            {/* Family Therapy */}
            <Card>
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Family Therapy Sessions</h3>
                <p className="text-sm text-[#333333] leading-relaxed mb-3">I offer family therapy to:</p>
                <ul className="text-sm text-[#333333] space-y-1">
                  <li>• Help loved ones understand eating disorders</li>
                  <li>• Improve communication and reduce conflict</li>
                  <li>• Address enabling or unhelpful behaviors</li>
                  <li>• Support parents/partners in their support role</li>
                  <li>• Process family members' own fears and emotions</li>
                  <li>• Strengthen family bonds during recovery</li>
                  <li>• Create a home environment conducive to healing</li>
                </ul>
                <p className="text-xs text-[#666666] mt-3 italic">
                  Family sessions can include parents, partners, siblings, children, or chosen family.
                </p>
              </CardContent>
            </Card>

            {/* Couple's Therapy */}
            <Card>
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Couple's Therapy</h3>
                <p className="text-sm text-[#333333] leading-relaxed mb-3">For couples navigating eating disorder recovery together:</p>
                <ul className="text-sm text-[#333333] space-y-1">
                  <li>• Understanding how the ED impacts the relationship</li>
                  <li>• Rebuilding intimacy and trust</li>
                  <li>• Partner support without becoming the "food police"</li>
                  <li>• Managing your own anxiety as the supporting partner</li>
                  <li>• Communication strategies for difficult conversations</li>
                  <li>• Maintaining relationship health alongside recovery work</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Callout */}
          <div className="bg-[#1a428a] p-8 rounded-lg text-center">
            <p className="text-white text-lg font-semibold">
              My Goal: Help individuals and families of all backgrounds strengthen their relationships and develop tools and techniques to lead healthier and happier lives—while upholding your personal beliefs, values, and the complexities of your identities.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-12">
            What to Expect in Sessions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Session */}
            <div className="border-t-4 border-[#f49a39] pt-6">
              <Handshake className="w-12 h-12 text-[#f49a39] mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Your First Appointment</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                We'll explore what brings you (or your family) to therapy, your goals, and your story. I'll learn about your relationships, cultural background, and what's most important to you. This collaborative conversation helps us build rapport and create a treatment plan together.
              </p>
              <span className="inline-block bg-[#f49a39] text-white px-3 py-1 rounded-full text-sm">
                60-90 minutes
              </span>
            </div>

            {/* Ongoing Sessions */}
            <div className="border-t-4 border-[#f49a39] pt-6">
              <Calendar className="w-12 h-12 text-[#f49a39] mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Regular Therapy</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Sessions are typically 50-60 minutes for individuals or couples, 60-90 minutes for families. I use creative, collaborative approaches tailored to your needs—bringing alternative narratives to life and finding solutions that feel authentic to you.
              </p>
              <span className="inline-block bg-[#f49a39] text-white px-3 py-1 rounded-full text-sm">
                50-90 minutes
              </span>
            </div>

            {/* My Approach */}
            <div className="border-t-4 border-[#f49a39] pt-6">
              <PuzzleIcon className="w-12 h-12 text-[#f49a39] mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Collaborative & Creative</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Therapy with me is a partnership. I bring my clinical expertise and systemic thinking; you bring your lived experience and knowledge of what you need. Together, we'll co-create solutions that honor your complexities and lead to meaningful growth.
              </p>
              <span className="inline-block bg-[#f49a39] text-white px-3 py-1 rounded-full text-sm">
                Solution-focused
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Logistics */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            Insurance & Practical Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Insurance Accepted</h3>
              <ul className="text-[#333333] space-y-2 mb-6 leading-relaxed">
                <li>• Most major insurance plans accepted</li>
                <li>• LMFT services covered by most plans</li>
                <li>• Out-of-network benefits support</li>
                <li>• Superbills provided for reimbursement</li>
                <li>• Sliding scale available for select cases</li>
              </ul>
              <p className="text-sm italic text-[#f49a39] mb-8">
                Please contact us to verify your specific insurance coverage.
              </p>

              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Session Fees</h3>
              <ul className="text-[#333333] space-y-2 leading-relaxed mb-4">
                <li>• Individual therapy: Contact for rates</li>
                <li>• Couple's therapy: Contact for rates</li>
                <li>• Family therapy: Contact for rates</li>
                <li>• Initial consultation: Contact for rates</li>
              </ul>
              <p className="text-sm text-[#666666]">
                Payment is due at time of service. We accept credit cards, HSA/FSA cards, and checks.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Office Locations</h3>
              <div className="mb-6">
                <p className="font-semibold text-[#333333] mb-2">Portland, Oregon Office</p>
                <p className="text-sm text-[#666666]">(Full address provided upon scheduling)</p>
              </div>
              <div className="mb-8">
                <p className="font-semibold text-[#333333] mb-2">Vancouver, Washington Area</p>
                <p className="text-sm text-[#666666]">Serving Vancouver, WA clients via telehealth</p>
              </div>
              <div className="mb-8">
                <p className="font-semibold text-[#333333] mb-2">Office hours:</p>
                <p className="text-[#333333]">Monday-Friday: By appointment</p>
                <p className="text-[#333333]">Evening appointments available</p>
              </div>

              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Telehealth Services</h3>
              <p className="text-[#333333] mb-3">Secure video sessions available for:</p>
              <ul className="text-[#333333] space-y-1 mb-4">
                <li>• Oregon residents</li>
                <li>• Washington residents (including Vancouver, WA)</li>
              </ul>
              <p className="text-sm text-[#666666] mb-6">
                Telehealth provides flexibility and accessibility while maintaining the same quality of care. Many families find video sessions particularly convenient for coordinating schedules.
              </p>

              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Contact Alyssa</h3>
              <p className="text-[#333333]">Phone: (360) 726-4141</p>
              <p className="text-sm text-[#666666] mt-2">Response time: Within 1-2 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Connection */}
      <section className="py-16 md:py-20 bg-[#fff5eb]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-8">
            Beyond the Credentials
          </h2>

          <div className="text-lg text-[#333333] leading-relaxed space-y-6">
            <p>
              I grew up in Southern California and have made my way up the West Coast—living in San Francisco, Seattle, and now Portland. The Pacific Northwest has become home for me, where I'm building a life with my partner and child. This journey has taught me a lot about creating home, navigating transitions, and the importance of chosen family and community.
            </p>
            <p>
              Outside of therapy, you'll find me heading to the coast whenever possible (the Oregon coast holds a special place in my heart), exploring new towns and hunting for treasures in vintage shops, and spending quality time with my loved ones. I value presence, authenticity, and finding joy in the small moments.
            </p>
            <p>
              My path to becoming a therapist was unconventional—I worked in tech and startups before switching to mental health. That experience taught me creative problem-solving, systems thinking, and how to navigate complex environments—skills I now bring to the therapy room. I believe our "non-traditional" paths often become our greatest strengths.
            </p>
            <p>
              I'm continuing to explore my Chicana identity and Indigenous heritage, much of which was unknown to my family until recently. This ongoing journey keeps me humble, curious, and deeply committed to creating space for others who are navigating identity, cultural reconnection, and finding where they belong.
            </p>
          </div>

          <p className="text-lg italic text-[#f49a39] text-center mt-8">
            I'd be honored to walk alongside you on your journey—wherever you are, whatever you're navigating, however you identify. You deserve to be seen, heard, and supported in all your complexity.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-[#1a428a]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-10">
            I'm currently accepting new clients for individual, couple, and family therapy in Portland and via telehealth throughout Oregon and Washington. Whether you're seeking support for yourself or your family, I'm here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-8 py-6 text-lg font-bold">
              Schedule with Alyssa
            </Button>
            <a 
              href="tel:360-726-4141" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a428a] px-8 py-3 rounded-md transition-colors font-semibold inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (360) 726-4141
            </a>
          </div>

          <div className="text-white/80">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <Mail className="w-4 h-4" />
              <a href="/contact" className="hover:text-[#f49a39] transition-colors">
                Email us
              </a>
              <span className="mx-2">|</span>
              <MapPin className="w-4 h-4" />
              Portland, OR & Vancouver, WA
              <span className="mx-2">|</span>
              Telehealth: OR & WA
            </p>
          </div>
        </div>
      </section>

      {/* Meet Other Therapists */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-[#1a428a] text-center mb-10">
            Meet Our Other Therapists
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-1">
                  Anne Cuthbert, MA, LPC, LMHC
                </h3>
                <p className="text-sm text-[#666666] mb-2">MA, LPC, LMHC</p>
                <p className="text-sm text-[#333333] mb-4">Owner & Lead Therapist - 23+ years experience</p>
                <Link to="/about/anne-cuthbert">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white">
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-1">
                  Bailey Benn, MA, LPC, LMHC
                </h3>
                <p className="text-sm text-[#666666] mb-2">MA, LPC, LMHC</p>
                <p className="text-sm text-[#333333] mb-4">HAES-informed therapist with creative approach</p>
                <Link to="/about/bailey-benn">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white">
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
                <h3 className="text-xl font-bold text-[#1a428a] mb-1">
                  Kiandra Cole, MA
                </h3>
                <p className="text-sm text-[#666666] mb-2">MA</p>
                <p className="text-sm text-[#333333] mb-4">Social justice advocate and lived experience therapist</p>
                <Link to="/about/kiandra-cole">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Rachel Bennett Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={rachelImage} 
                    alt="Rachel Bennett"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-1">
                  Rachel Bennett, MA
                </h3>
                <p className="text-sm text-[#666666] mb-2">MA, QMHP-A</p>
                <p className="text-sm text-[#333333] mb-4">Body positive specialist with personal recovery experience</p>
                <Link to="/about/rachel-bennett">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/about" className="text-[#f49a39] hover:underline text-lg font-medium">
              View Full Team Directory →
            </Link>
          </div>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default AlyssaPataki;
