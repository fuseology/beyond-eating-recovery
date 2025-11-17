import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, GraduationCap, Award, Calendar, Handshake, Heart, CheckCircle, Mail, Building, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import anneImage from "@/assets/anne-cuthbert.jpg";
import baileyImage from "@/assets/bailey-benn.jpg";
import kiandraImage from "@/assets/kiandra-cole.webp";
// TODO: Replace with actual Alyssa photo
const alyssaImage = anneImage;

const KiandraCole = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Left Side - Photo */}
            <div className="w-full md:w-2/5">
              <img 
                src={kiandraImage} 
                alt="Kiandra Cole, MA - Professional Counselor Associate at Beyond Eating Recovery"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Info */}
            <div className="w-full md:w-3/5">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a428a] mb-3">
                Kiandra Cole, MA
              </h1>
              <p className="text-2xl text-[#f49a39] font-medium mb-4">
                Professional Counselor Associate (OR) | Mental Health Counselor Associate (WA)
              </p>
              
              {/* Credentials Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white border-2 border-[#1a428a] text-[#1a428a] px-4 py-2 rounded-lg text-sm font-medium">
                  Supervised by Anne Cuthbert, MA, LPC, LMHC
                </span>
                <span className="bg-white border-2 border-[#1a428a] text-[#1a428a] px-4 py-2 rounded-lg text-sm font-medium">
                  Eating Disorder Specialist
                </span>
                <span className="bg-white border-2 border-[#1a428a] text-[#1a428a] px-4 py-2 rounded-lg text-sm font-medium">
                  Social Justice Advocate
                </span>
              </div>

              <p className="text-lg text-[#333333] leading-relaxed mb-6">
                I bring lived experience and deep commitment to social justice into every session. As a fat, Indigenous, queer, neurodivergent therapist, I understand what it means to navigate systems that weren't built for us. My humanistic, person-centered approach honors your full identity and meets you exactly where you are—without judgment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-6 py-6 text-base">
                  Schedule with Kiandra
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
                <ul className="text-[#333333] space-y-2 leading-relaxed text-sm">
                  <li>• Master of Arts in Professional Mental Health Counseling (Addictions Focus)</li>
                  <li>• Lewis & Clark Graduate School of Education and Counseling</li>
                  <li>• Continuing Education Certificate in Eating Disorder Treatment (Lewis & Clark)</li>
                  <li>• Bachelor of Science in Psychology (cum laude)</li>
                  <li>• Portland State University (2015)</li>
                  <li>• Minor: Women, Gender, and Sexuality Studies</li>
                </ul>
              </CardContent>
            </Card>

            {/* Licenses & Supervision */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Licenses & Supervision</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Professional Counselor Associate - Oregon</li>
                  <li>• Mental Health Counselor Associate - Washington</li>
                  <li>• Supervised by Anne Cuthbert, MA, LPC, LMHC</li>
                  <li>• Working toward full licensure (LPC/LMHC)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-4">Experience</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• 7 years in residential treatment</li>
                  <li>• Community mental health experience</li>
                  <li>• Work with mandated and complex clients</li>
                  <li>• First-generation college student</li>
                  <li>• Intersectional advocacy work</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Callout Banner */}
          <div className="bg-[#fff5eb] p-6 rounded-lg text-center">
            <p className="text-[#333333] italic leading-relaxed">
              "As a first-generation college student who has navigated academic and professional spaces while holding multiple marginalized identities, I understand the unique challenges faced by those underrepresented in mental health care."
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
            My approach is humanistic, holistic, and deeply person-centered. I meet you where you are in your journey from a nonjudgmental and empathic point of view. Therapy with me is about honoring your whole self—your body, your identities, your experiences, and your inherent worth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Therapeutic Modalities */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Therapeutic Modalities</h3>
              <ul className="space-y-3">
                {[
                  "Humanistic therapy",
                  "Person-centered counseling",
                  "Gestalt therapy techniques",
                  "Emotion Focused Therapy (EFT)",
                  "Mindfulness-based practices",
                  "Somatic interventions",
                  "Addiction-informed approaches"
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
                  "Intersectional feminism",
                  "Body liberation",
                  "Fat acceptance",
                  "Trauma-informed care",
                  "Neurodiversity-affirming practice",
                  "LGBTQIA+ affirming care"
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
            {/* Eating Disorders & Body Image */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Eating Disorders & Body Image</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed text-sm">
                  <li>• Anorexia Nervosa</li>
                  <li>• Bulimia Nervosa</li>
                  <li>• Binge Eating Disorder</li>
                  <li>• ARFID</li>
                  <li>• Body dysmorphia</li>
                  <li>• Chronic dieting patterns</li>
                  <li>• Weight stigma trauma</li>
                  <li>• Fat acceptance journey</li>
                </ul>
              </CardContent>
            </Card>

            {/* Addiction & Co-Occurring Disorders */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Addiction & Co-Occurring Disorders</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Substance use disorders</li>
                  <li>• Process addictions</li>
                  <li>• Dual diagnosis treatment</li>
                  <li>• Harm reduction approaches</li>
                  <li>• Recovery support</li>
                  <li>• Relapse prevention</li>
                </ul>
              </CardContent>
            </Card>

            {/* Identity & Marginalization */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌈</div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Identity & Marginalization</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed text-sm">
                  <li>• LGBTQIA+ experiences</li>
                  <li>• Queer identity exploration</li>
                  <li>• Indigenous identity and heritage</li>
                  <li>• Neurodivergent experiences (ADHD, autism)</li>
                  <li>• Fat liberation and acceptance</li>
                  <li>• Intersectional identities</li>
                  <li>• Navigating multiple marginalizations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Trauma & Complex Presentations */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Trauma & Complex Presentations</h3>
                <ul className="text-[#333333] space-y-2 leading-relaxed">
                  <li>• Trauma from systemic oppression</li>
                  <li>• Complex PTSD</li>
                  <li>• Mandated treatment support</li>
                  <li>• Residential treatment transitions</li>
                  <li>• Community mental health needs</li>
                  <li>• High-risk populations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intersectionality & Lived Experience */}
      <section className="py-16 md:py-20 bg-[#1a428a]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Intersectionality, Identity & Lived Experience
          </h2>
          <p className="text-xl text-[#f49a39] text-center mb-12">
            Why Representation and Lived Experience Matter
          </p>

          <div className="bg-white p-8 md:p-12 rounded-lg max-w-5xl mx-auto">
            <p className="text-lg text-[#333333] leading-relaxed mb-10">
              I am a fat, Indigenous, queer, neurodivergent therapist and first-generation college student. These aren't just labels—they're lived experiences that profoundly shape how I move through the world and how I practice therapy. My intersectionality has fueled my passion for social justice and my commitment to serving historically marginalized communities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Fat Liberation */}
              <div className="bg-[#fff5eb] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Fat & Body Liberation</h3>
                <p className="text-[#333333] leading-relaxed">
                  As a fat person, I've experienced weight stigma in healthcare, public spaces, and daily life. I understand the profound harm of diet culture and the courage it takes to pursue body acceptance in a fatphobic world. In our work together, you'll never experience weight stigma, anti-fat bias, or pressure to change your body. I practice from a weight-neutral, fat-liberatory stance.
                </p>
              </div>

              {/* Indigenous Identity */}
              <div className="bg-[#fff5eb] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Indigenous Heritage & Land Acknowledgment</h3>
                <p className="text-[#333333] leading-relaxed">
                  I was born and raised in Portland on the traditional and ancestral homelands of the Multnomah, Kathlamet, Clackamas, Tumwater, and Watalala bands of the Chinook; the Tualatin Kalapuya; and many other indigenous nations of the Columbia River. I acknowledge and honor these lands and peoples. My Indigenous identity informs my deep connection to nature, my understanding of intergenerational trauma, and my commitment to decolonizing mental health care.
                </p>
              </div>

              {/* Queer & Neurodivergent */}
              <div className="bg-[#fff5eb] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Queer & Neurodivergent Experiences</h3>
                <p className="text-[#333333] leading-relaxed">
                  As a queer, neurodivergent person, I understand the unique challenges of navigating systems not designed for us. Whether it's masking to fit neurotypical expectations, navigating heteronormative spaces, or finding community and belonging, I bring personal understanding to these experiences. My practice is fully LGBTQIA+ affirming and neurodiversity-celebrating.
                </p>
              </div>

              {/* First-Generation Student */}
              <div className="bg-[#fff5eb] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">First-Generation Journey</h3>
                <p className="text-[#333333] leading-relaxed">
                  Being a first-generation college student meant navigating academic and professional worlds without a roadmap. I understand imposter syndrome, class barriers, and the unique pressures of being the "first" in your family. If you're navigating educational systems, professional spaces, or upward mobility while carrying the weight of being a trailblazer, I see you.
                </p>
              </div>
            </div>

            {/* What This Means for You */}
            <div className="border-t-2 border-[#1a428a] pt-8">
              <h3 className="text-2xl font-bold text-[#1a428a] text-center mb-6">What This Means for You</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                My lived experiences aren't meant to suggest our paths will be identical—every person's journey is unique. Rather, I share them to offer:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f49a39] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#1a428a]">Representation</span>
                    <span className="text-[#333333]"> - Seeing yourself reflected in your therapist can be powerful</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f49a39] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#1a428a]">Understanding</span>
                    <span className="text-[#333333]"> - I get it on a visceral level, not just theoretically</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f49a39] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#1a428a]">Safety</span>
                    <span className="text-[#333333]"> - You won't have to explain basic aspects of marginalized experiences</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f49a39] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#1a428a]">Validation</span>
                    <span className="text-[#333333]"> - Your experiences of oppression and discrimination are real and impact mental health</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f49a39] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#1a428a]">Advocacy</span>
                    <span className="text-[#333333]"> - I will advocate for you within systems and challenge harmful narratives</span>
                  </div>
                </div>
              </div>
              <p className="text-[#333333] leading-relaxed mt-6">
                You deserve a therapist who understands the full context of your life—including the systems of oppression that shape our experiences of food, body, identity, and mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Somatic & Emotion-Focused Work */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-4">
            Body-Based & Emotional Healing
          </h2>
          <p className="text-xl text-[#f49a39] mb-8">
            Integrating Mind, Body, and Emotion
          </p>

          <p className="text-lg text-[#333333] leading-relaxed mb-10 max-w-4xl">
            Eating disorders live in the body as much as the mind. My training in mindfulness-based somatic practices and Emotion Focused Therapy (EFT) allows us to work with the wisdom of your body and the messages of your emotions—not just your thoughts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            {/* Somatic Practices */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-10 h-10 text-[#f49a39]" />
                <h3 className="text-2xl font-bold text-[#1a428a]">Mindfulness-Based Somatic Interventions</h3>
              </div>
              <p className="text-[#333333] leading-relaxed mb-4">Somatic work helps you:</p>
              <ul className="text-[#333333] space-y-2">
                <li>• Reconnect with body sensations and signals</li>
                <li>• Develop interoceptive awareness (recognizing internal cues)</li>
                <li>• Release trauma held in the body</li>
                <li>• Practice grounding techniques during distress</li>
                <li>• Build body trust and safety</li>
                <li>• Notice patterns of tension, holding, and protection</li>
                <li>• Integrate mind-body connection</li>
              </ul>
              <p className="text-sm text-[#666666] mt-4 italic">
                These practices are especially powerful for eating disorder recovery, where disconnection from the body is common. We'll move at your pace, always respecting your comfort and boundaries.
              </p>
            </div>

            {/* Emotion Focused Therapy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-10 h-10 text-[#f49a39]" />
                <h3 className="text-2xl font-bold text-[#1a428a]">Emotion Focused Therapy (EFT)</h3>
              </div>
              <p className="text-[#333333] leading-relaxed mb-4">EFT recognizes that emotions are messengers, not problems to fix. Together we'll:</p>
              <ul className="text-[#333333] space-y-2">
                <li>• Identify and name emotions with compassion</li>
                <li>• Understand what emotions are trying to tell you</li>
                <li>• Work with primary emotions beneath eating disorder behaviors</li>
                <li>• Transform maladaptive emotional patterns</li>
                <li>• Develop emotion regulation skills</li>
                <li>• Access adaptive emotions that facilitate healing</li>
                <li>• Build emotional resilience and flexibility</li>
              </ul>
              <p className="text-sm text-[#666666] mt-4 italic">
                Many eating disorder behaviors are attempts to manage overwhelming emotions. EFT helps you develop healthier ways to meet those emotional needs.
              </p>
            </div>
          </div>

          {/* Gestalt Callout */}
          <div className="bg-[#f8f9fa] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-[#1a428a] mb-3">Gestalt Techniques</h3>
            <p className="text-[#333333] leading-relaxed">
              I also incorporate Gestalt therapy approaches that emphasize present-moment awareness, personal responsibility, and authentic contact. These experiential techniques can unlock insights that talk therapy alone might miss.
            </p>
          </div>
        </div>
      </section>

      {/* Residential & Community Mental Health Experience */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-4">
            Experience with Complex & Mandated Treatment
          </h2>
          <p className="text-xl text-[#f49a39] mb-8">
            Seven Years in Residential & Community Mental Health Settings
          </p>

          <p className="text-lg text-[#333333] leading-relaxed mb-10">
            I've spent seven years working in residential treatment at a community mental health facility, often with mandated clients facing complex challenges. This experience has given me deep skills in meeting people where they are—even when they didn't choose to be in treatment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Residential Treatment */}
            <Card>
              <CardContent className="p-6">
                <Building className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Residential Setting Skills</h3>
                <p className="text-sm text-[#333333] leading-relaxed mb-3">Working in residential treatment taught me:</p>
                <ul className="text-sm text-[#333333] space-y-1">
                  <li>• Crisis intervention and de-escalation</li>
                  <li>• Working with high-acuity clients</li>
                  <li>• Building trust with resistant clients</li>
                  <li>• Managing complex co-occurring disorders</li>
                  <li>• Collaborating with multidisciplinary teams</li>
                  <li>• Creating structure while honoring autonomy</li>
                  <li>• Transitioning clients to lower levels of care</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mandated Client Work */}
            <Card>
              <CardContent className="p-6">
                <FileText className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Non-Judgmental Approach</h3>
                <p className="text-sm text-[#333333] leading-relaxed mb-3">Experience with mandated treatment means:</p>
                <ul className="text-sm text-[#333333] space-y-1">
                  <li>• Meeting resistance with curiosity, not judgment</li>
                  <li>• Building alliance even when trust is difficult</li>
                  <li>• Respecting autonomy within constraints</li>
                  <li>• Finding intrinsic motivation</li>
                  <li>• Navigating dual relationships (therapeutic + reporting)</li>
                  <li>• Balancing accountability and compassion</li>
                  <li>• Understanding systems involvement</li>
                </ul>
              </CardContent>
            </Card>

            {/* Community Mental Health */}
            <Card>
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-[#f49a39] mb-4" />
                <h3 className="text-xl font-bold text-[#1a428a] mb-3">Serving Diverse Populations</h3>
                <p className="text-sm text-[#333333] leading-relaxed mb-3">Community mental health experience includes:</p>
                <ul className="text-sm text-[#333333] space-y-1">
                  <li>• Working with underserved populations</li>
                  <li>• Addressing systemic barriers to care</li>
                  <li>• Cultural humility and adaptability</li>
                  <li>• Resource navigation and advocacy</li>
                  <li>• Trauma-informed, harm-reduction approaches</li>
                  <li>• Supporting clients facing multiple stressors</li>
                  <li>• Building community connections</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Callout */}
          <div className="bg-[#1a428a] p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-white mb-4">What This Means for You:</h3>
            <p className="text-white leading-relaxed">
              Whether you're in treatment by choice or requirement, whether you're ambivalent or motivated, whether this is your first attempt or your tenth—I will meet you where you are without judgment. Change happens when we feel understood, not when we're shamed or coerced.
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
                We'll explore what brings you to therapy, your goals (if you have them), and your story. I'll meet you where you are—whether you're excited, skeptical, nervous, or uncertain. This is a conversation, not an interrogation. We'll assess together whether we're a good fit.
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
                Sessions are typically 50-60 minutes, weekly or bi-weekly. I draw from multiple approaches based on what you need—talk therapy, somatic practices, emotion-focused work, or Gestalt techniques. Therapy is collaborative; you're the expert on your life.
              </p>
              <span className="inline-block bg-[#f49a39] text-white px-3 py-1 rounded-full text-sm">
                50-60 minutes
              </span>
            </div>

            {/* My Style */}
            <div className="border-t-4 border-[#f49a39] pt-6">
              <Heart className="w-12 h-12 text-[#f49a39] mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Therapeutic Presence</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                I'm genuine, empathic, and nonjudgmental. I'll honor your pace and respect your autonomy. I bring warmth and authenticity to our work together. You won't be pathologized, judged, or told to change—but you will be supported, challenged compassionately, and truly seen.
              </p>
              <span className="inline-block bg-[#f49a39] text-white px-3 py-1 rounded-full text-sm">
                Person-centered
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
                <li>• Out-of-network benefits support</li>
                <li>• Superbills provided for reimbursement</li>
                <li>• Sliding scale available for select cases</li>
                <li>• Associate-level rates (lower cost option)</li>
              </ul>
              <p className="text-sm italic text-[#f49a39] mb-8">
                Please contact us to verify your specific insurance coverage. As an associate under supervision, sessions may be billed at reduced rates.
              </p>

              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Session Fees</h3>
              <ul className="text-[#333333] space-y-2 leading-relaxed mb-4">
                <li>• Initial consultation: Contact for rates</li>
                <li>• Individual therapy: Contact for rates (associate level)</li>
                <li>• Payment plans available</li>
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
              <div className="mb-6">
                <p className="font-semibold text-[#333333] mb-2">Vancouver, Washington Area</p>
                <p className="text-sm text-[#666666]">Serving Vancouver, WA clients via telehealth</p>
              </div>
              
              <div className="bg-[#fff5eb] p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold text-[#1a428a] mb-2">Land Acknowledgment:</p>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Our Portland office sits on the traditional and ancestral homelands of the Multnomah, Kathlamet, Clackamas, Tumwater, and Watalala bands of the Chinook, the Tualatin Kalapuya, and many other indigenous nations of the Columbia River. We honor these lands and peoples.
                </p>
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
                Telehealth provides accessibility and comfort while maintaining the same quality of care. Many clients prefer the privacy and convenience of virtual sessions.
              </p>

              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Supervision</h3>
              <p className="text-[#333333] mb-2">Kiandra is supervised by Anne Cuthbert, MA, LPC, LMHC</p>
              <ul className="text-sm text-[#666666] space-y-1 mb-6">
                <li>• 23+ years of eating disorder treatment experience</li>
                <li>• Regular clinical consultation</li>
                <li>• Quality oversight and support</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1a428a] mb-4">Contact Kiandra</h3>
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
            A Personal Note
          </h2>

          <div className="text-lg text-[#333333] leading-relaxed space-y-6">
            <p>
              I was born and raised right here in Portland, and I have a deep appreciation for the natural beauty of the Pacific Northwest—the forests, mountains, rivers, and coastline that ground me. Nature has always been a source of healing and connection for me, and I often incorporate nature-based metaphors and mindfulness into my work.
            </p>
            <p>
              Growing up as a fat, Indigenous, queer, neurodivergent person in Portland has given me both challenges and gifts. I've navigated systems that weren't designed for people like me—educational systems, healthcare systems, professional spaces—and I've learned to find strength in community, authenticity in difference, and power in resistance.
            </p>
            <p>
              Being a first-generation college student means I'm acutely aware of the barriers many people face in accessing mental health care and higher education. Earning my bachelor's degree cum laude from PSU and my master's from Lewis & Clark weren't just personal achievements—they represented my family's dreams and my community's resilience.
            </p>
            <p>
              My intersectionality isn't separate from my clinical work—it *is* my clinical work. Every identity I hold informs how I show up as a therapist: my commitment to social justice, my understanding of marginalization, my belief in body liberation, my practice of cultural humility, and my determination to create space for those who've been excluded or harmed by traditional mental health care.
            </p>
            <p>
              If you're looking for a therapist who gets it—who won't require you to explain the basics of oppression, who understands that personal struggles are often political, who believes your body is worthy exactly as it is, who sees your neurodivergence as difference rather than deficit—I might be a good fit for you.
            </p>
          </div>

          <p className="text-lg italic text-[#f49a39] text-center mt-8">
            I'd be honored to walk alongside you. Wherever you are in your journey, you deserve support, understanding, and compassion.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-[#1a428a]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-10">
            I'm currently accepting new clients for individual therapy in Portland and via telehealth throughout Oregon and Washington. Whether you're seeking support for eating disorders, addiction, identity exploration, or navigating marginalization, I'm here for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-8 py-6 text-lg font-bold">
              Schedule with Kiandra
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
                <h3 className="text-lg font-bold text-[#1a428a] mb-1">
                  Anne Cuthbert
                </h3>
                <p className="text-xs text-[#666666] mb-2">MA, LPC, LMHC</p>
                <p className="text-sm text-[#333333] mb-4">Owner & Lead Therapist</p>
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
                <p className="text-sm text-[#333333] mb-4">HAES Therapist</p>
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
                <p className="text-sm text-[#333333] mb-4">Family Therapist</p>
                <Link to="/about/alyssa-pataki">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
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
                    src={anneImage} 
                    alt="Rachel Bennett"
                    className="w-full h-full rounded-full object-cover border-3 border-[#f49a39]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a428a] mb-1">
                  Rachel Bennett
                </h3>
                <p className="text-xs text-[#666666] mb-2">MA, QMHP-A</p>
                <p className="text-sm text-[#333333] mb-4">Body Positive Therapist</p>
                <Link to="/about/rachel-bennett">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white text-sm">
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

      <Footer />
    </div>
  );
};

export default KiandraCole;
