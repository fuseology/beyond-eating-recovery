import { Phone, Calendar, MapPin, GraduationCap, Award, Hospital, Shield, Heart, Brain, Users, Sparkles, Target, Rainbow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import anneImage from "@/assets/anne-cuthbert.jpg";
import baileyImage from "@/assets/bailey-benn.jpg";
// TODO: Replace with actual Em Menghini photo when available
const emImage = anneImage; // Temporary placeholder

const EmMenghini = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a428a] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Side - Photo and Badges */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-4">
                <img 
                  src={emImage} 
                  alt="Em Menghini, MS, LPC, LMHC - Licensed therapist specializing in eating disorders, trauma, and gender-affirming care at Beyond Eating Recovery"
                  className="w-full h-full rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="bg-[#f49a39] text-white px-5 py-2 rounded-full text-sm font-medium text-center">
                  Portland & Vancouver
                </span>
                <span className="bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium text-center">
                  MS, LPC, LMHC
                </span>
              </div>
            </div>

            {/* Right Side - Info and CTA */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                EM MENGHINI, MS, LPC, LMHC
              </h1>
              <p className="text-xl text-white/80 mb-4">
                Clinical Therapist
              </p>
              <p className="text-lg text-white mb-6 max-w-2xl leading-relaxed">
                Passionate about helping people discover their true authentic selves in recovery while reclaiming their lives and letting go of their disorder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-8 py-6 text-base font-semibold shadow-lg">
                  Schedule with Em
                </Button>
                <a 
                  href="tel:+13607264141,3" 
                  className="flex items-center gap-2 text-white text-lg hover:text-white/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(360) 726-4141 ext. 3</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Experience Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a] text-center mb-12">
            Professional Background
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Licenses */}
            <div className="text-center">
              <Award className="w-12 h-12 text-[#1a428a] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1a428a] mb-3">Licenses Held</h3>
              <ul className="text-[#333333] space-y-2">
                <li>Licensed Professional Counselor (LPC)<br />Oregon</li>
                <li>Licensed Mental Health Counselor (LMHC)<br />Washington</li>
              </ul>
            </div>

            {/* Education */}
            <div className="text-center">
              <GraduationCap className="w-12 h-12 text-[#1a428a] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1a428a] mb-3">Education</h3>
              <ul className="text-[#333333] space-y-2">
                <li>Master of Science<br />Clinical Mental Health Counseling<br />Florida State University</li>
              </ul>
            </div>

            {/* Clinical Experience */}
            <div className="text-center">
              <Hospital className="w-12 h-12 text-[#1a428a] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1a428a] mb-3">Clinical Experience</h3>
              <ul className="text-[#333333] space-y-2">
                <li>Higher Levels of Care<br />Specialized eating disorder treatment</li>
                <li>Intensive Treatment Settings<br />Residential and PHP/IOP programs</li>
                <li>Beyond Eating Recovery<br />Clinical Therapist</li>
              </ul>
            </div>

            {/* Specialized Training */}
            <div className="text-center">
              <Shield className="w-12 h-12 text-[#1a428a] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1a428a] mb-3">Specialized Training</h3>
              <ul className="text-[#333333] space-y-2">
                <li>Cognitive Processing Therapy (CPT)<br />Trauma healing certification</li>
                <li>Gender-Affirming Care<br />Supporting diverse identities</li>
                <li>Health at Every Size (HAES)<br />Weight-inclusive approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a] text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">💙</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-2">Eating Disorder Recovery</h3>
                <p className="text-[#333333] leading-relaxed">
                  Comprehensive treatment for all eating disorders with experience in higher levels of care including residential and intensive outpatient programs
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">🌈</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-2">Gender-Affirming Therapy</h3>
                <p className="text-[#333333] leading-relaxed">
                  Supporting clients in exploring gender-affirming practices outside of their disorder and offering a safe space for all identities
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-2">Trauma Healing (CPT)</h3>
                <p className="text-[#333333] leading-relaxed">
                  Trained in Cognitive Processing Therapy to help clients heal from trauma that may underlie eating disorder behaviors
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">💭</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-2">Person-Centered Approach</h3>
                <p className="text-[#333333] leading-relaxed">
                  Meeting you exactly where you are in your recovery journey with compassionate, individualized care
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-2">Authentic Self Discovery</h3>
                <p className="text-[#333333] leading-relaxed">
                  Helping you uncover and reclaim your true self as you separate from your eating disorder identity
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-2">HAES-Informed Care</h3>
                <p className="text-[#333333] leading-relaxed">
                  Weight-inclusive, body-positive treatment that respects all bodies and focuses on overall health and well-being
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Therapeutic Approach Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a] mb-8">
            Em's Approach to Therapy
          </h2>

          {/* Featured Quote */}
          <div className="bg-[#e8f4f8] border-l-4 border-[#f49a39] p-6 rounded-lg mb-8">
            <p className="text-lg md:text-xl italic text-[#1a5a8a] leading-relaxed mb-3">
              "I'm passionate about helping people discover their true authentic selves in the recovery process while they are working towards reclaiming their life as they let go of their disorder."
            </p>
            <p className="text-base font-semibold text-[#1a428a]">
              — Em Menghini, MS, LPC, LMHC
            </p>
          </div>

          {/* Person-Centered Care */}
          <h3 className="text-2xl font-semibold text-[#1a428a] mb-4 mt-8">
            Person-Centered Care
          </h3>
          <p className="text-[#333333] leading-relaxed mb-6">
            Em takes a person-centered approach to therapy, which means she meets you exactly where you are in your recovery journey. Whether you're just beginning to acknowledge that there's a problem, actively working on recovery, or navigating the challenges of maintaining progress, Em tailors her approach to your unique needs and readiness.
          </p>

          {/* Lived Experience Understanding */}
          <h3 className="text-2xl font-semibold text-[#1a428a] mb-4 mt-8">
            Lived Experience Understanding
          </h3>
          <p className="text-[#333333] leading-relaxed mb-4">
            As someone who has recovered from an eating disorder herself, Em has a deep, personal understanding of the recovery process. She knows firsthand the ambivalence that can come with recovery—the fear, the resistance, the internal conflict. She also knows the incredible joy and freedom that comes when you fully surrender to the healing process.
          </p>
          <p className="text-[#333333] leading-relaxed mb-6">
            This lived experience allows Em to hold space for the complexity of recovery with genuine empathy and without judgment. She understands that recovery is not linear, and she'll support you through all the ups and downs of the journey.
          </p>

          {/* Trauma-Informed Treatment */}
          <h3 className="text-2xl font-semibold text-[#1a428a] mb-4 mt-8">
            Trauma-Informed Treatment
          </h3>
          <p className="text-[#333333] leading-relaxed mb-6">
            Em is trained in Cognitive Processing Therapy (CPT), an evidence-based treatment for healing from trauma. She recognizes that eating disorders often develop as coping mechanisms for deeper emotional wounds, including trauma. By addressing these underlying issues, Em helps clients achieve lasting recovery that goes beyond just changing behaviors around food.
          </p>

          {/* Gender-Affirming Practice */}
          <h3 className="text-2xl font-semibold text-[#1a428a] mb-4 mt-8">
            Gender-Affirming Practice
          </h3>
          <p className="text-[#333333] leading-relaxed mb-6">
            Em operates from a gender-informed lens, supporting clients in exploring gender-affirming practices that exist outside of their eating disorder. She creates a safe, affirming space where all identities can show up authentically. Whether you're cisgender, transgender, non-binary, gender-fluid, or questioning, you'll find acceptance and support in Em's therapeutic space.
          </p>

          {/* Health at Every Size Foundation */}
          <h3 className="text-2xl font-semibold text-[#1a428a] mb-4 mt-8">
            Health at Every Size Foundation
          </h3>
          <p className="text-[#333333] leading-relaxed mb-4">
            Em's work is informed by the principles of Health at Every Size (HAES), which means:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#f49a39] mt-1">•</span>
              <span className="text-[#333333]">No focus on weight loss or body changing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#f49a39] mt-1">•</span>
              <span className="text-[#333333]">Respect for body diversity and all sizes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#f49a39] mt-1">•</span>
              <span className="text-[#333333]">Focus on health behaviors, not numbers on a scale</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#f49a39] mt-1">•</span>
              <span className="text-[#333333]">Intuitive eating and body trust</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#f49a39] mt-1">•</span>
              <span className="text-[#333333]">Weight-inclusive, anti-diet approach</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Recovery Through Lived Experience Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a] mb-8">
            Recovery Through Lived Experience
          </h2>

          {/* Callout Box */}
          <div className="bg-[#fff5eb] border-l-4 border-[#f49a39] p-6 rounded-lg mb-10">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💪</div>
              <p className="text-lg text-[#1a5a8a] leading-relaxed">
                As someone who has recovered herself, Em has a deep understanding of the ambivalence that may come along with the recovery process, and the great joy and freedom that comes when you fully surrender to the process.
              </p>
            </div>
          </div>

          {/* Three Theme Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-3 text-center">🤔</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-3 text-center">Ambivalence is Normal</h3>
                <p className="text-[#333333] leading-relaxed">
                  Em understands that part of you may want to recover, while another part may feel scared or resistant to change. This ambivalence is a natural part of the process, not a sign of failure. Em will help you work through these conflicting feelings with patience and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-3 text-center">✨</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-3 text-center">The Joy of Surrender</h3>
                <p className="text-[#333333] leading-relaxed">
                  There comes a moment in recovery when you're ready to fully surrender to the healing process—to let go of the eating disorder and embrace your authentic life. Em has experienced this transformation personally and will guide you toward this freedom with wisdom born from her own journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-3 text-center">🤝</div>
                <h3 className="text-xl font-bold text-[#1a428a] mb-3 text-center">You're Not Alone</h3>
                <p className="text-[#333333] leading-relaxed">
                  Working with a therapist who has walked the path of recovery themselves can be incredibly powerful. Em's personal experience combined with her professional training creates a unique therapeutic presence that offers both expertise and genuine understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gender-Affirming Care Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🏳️‍⚧️</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a] mb-4">
              Gender-Affirming Eating Disorder Treatment
            </h2>
            <div className="w-48 h-1 mx-auto mb-6 bg-gradient-to-r from-[#5BCEFA] via-[#F5A9B8] to-white rounded"></div>
          </div>

          <p className="text-lg text-[#333333] leading-relaxed mb-10">
            Em operates from a gender-informed lens, recognizing that gender identity and body image are deeply intertwined, especially for transgender, non-binary, and gender-diverse individuals.
          </p>

          <h3 className="text-2xl font-semibold text-[#1a428a] mb-6">
            What This Means for Your Care:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">✓</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-2">Safe Space for All Identities</h4>
                <p className="text-[#333333] leading-relaxed">
                  Whether you're cisgender, transgender, non-binary, gender-fluid, questioning, or any other identity, you'll find genuine acceptance and affirmation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">✓</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-2">Understanding Gender & Body Image</h4>
                <p className="text-[#333333] leading-relaxed">
                  Em helps you explore how your gender identity intersects with your relationship to food and body
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">✓</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-2">Gender-Affirming Practices</h4>
                <p className="text-[#333333] leading-relaxed">
                  Supporting you in discovering ways to affirm your gender outside of disordered eating behaviors
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">✓</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-2">Separating Gender from Disorder</h4>
                <p className="text-[#333333] leading-relaxed">
                  Helping you distinguish between authentic gender expression and eating disorder behaviors
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">✓</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-2">Body Autonomy</h4>
                <p className="text-[#333333] leading-relaxed">
                  Respecting your right to make decisions about your body while healing from disordered eating patterns
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">✓</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-2">Culturally Competent Care</h4>
                <p className="text-[#333333] leading-relaxed">
                  Understanding the unique challenges LGBTQIA+ individuals face with eating disorders and body image
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-[#e8f4f8] border-l-4 border-[#f49a39] p-6 rounded-lg mt-10">
            <p className="text-lg text-[#1a5a8a] leading-relaxed">
              Em creates a therapeutic environment where you can explore your authentic self—including your gender identity—without fear of judgment or misunderstanding.
            </p>
          </div>
        </div>
      </section>

      {/* CPT Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-8">
            <Brain className="w-12 h-12 text-[#1a428a] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a]">
              Trauma-Focused Treatment with CPT
            </h2>
          </div>

          <h3 className="text-2xl font-semibold text-[#1a428a] mb-4">
            What is Cognitive Processing Therapy?
          </h3>
          <p className="text-[#333333] leading-relaxed mb-8">
            Cognitive Processing Therapy (CPT) is an evidence-based treatment specifically designed to help people heal from trauma, including PTSD. Em is trained in this specialized approach to support clients who have experienced trauma that may be connected to their eating disorder.
          </p>

          <h3 className="text-2xl font-semibold text-[#1a428a] mb-6">
            How CPT Helps in Eating Disorder Recovery:
          </h3>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">•</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Addresses Root Causes</h4>
                <p className="text-[#333333] leading-relaxed">
                  Many eating disorders develop as coping mechanisms for unprocessed trauma. CPT helps heal these underlying wounds
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">•</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Processes Stuck Emotions</h4>
                <p className="text-[#333333] leading-relaxed">
                  Trauma can leave us with 'stuck' emotions and thoughts. CPT helps you work through these in a safe, structured way
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">•</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Changes Unhelpful Thinking</h4>
                <p className="text-[#333333] leading-relaxed">
                  Learn to identify and modify thoughts that keep you stuck in trauma responses and eating disorder behaviors
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#f49a39] text-xl mt-1">•</span>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Builds New Neural Pathways</h4>
                <p className="text-[#333333] leading-relaxed">
                  CPT helps your brain create new, healthier ways of processing difficult experiences
                </p>
              </div>
            </li>
          </ul>

          <Card className="border-2 border-[#1a428a]">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="text-3xl">📊</div>
              <p className="text-[#1a428a] font-semibold">
                Evidence-Based Results: CPT has strong research support for effectively treating trauma and PTSD
              </p>
            </CardContent>
          </Card>

          <p className="text-[#333333] leading-relaxed mt-8">
            Em integrates CPT with eating disorder treatment to provide comprehensive healing that addresses both the symptoms and the underlying causes of your struggles.
          </p>
        </div>
      </section>

      {/* Working with Em Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a] text-center mb-12">
            Working with Em
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="text-center">
              <Users className="w-12 h-12 text-[#1a428a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Authentic Connection</h3>
              <p className="text-[#333333] leading-relaxed">
                Em creates a genuine therapeutic relationship where you can show up exactly as you are, without pretense or performance. Your authentic self is welcome here.
              </p>
            </div>

            <div className="text-center">
              <Target className="w-12 h-12 text-[#1a428a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Higher Level Experience</h3>
              <p className="text-[#333333] leading-relaxed">
                With experience in residential and intensive eating disorder treatment, Em understands the full spectrum of care and can support you at any level of recovery.
              </p>
            </div>

            <div className="text-center">
              <Rainbow className="w-12 h-12 text-[#1a428a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a428a] mb-3">Inclusive Space</h3>
              <p className="text-[#333333] leading-relaxed">
                All identities, bodies, and experiences are valued and affirmed. Em specializes in creating safety for LGBTQIA+ clients and those exploring their gender identity.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#1a428a] mb-6">
              Em Can Help You:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Discover your true authentic self beyond your eating disorder",
                "Navigate the ambivalence and challenges of recovery with compassion",
                "Heal from trauma using evidence-based Cognitive Processing Therapy",
                "Explore gender-affirming practices and identity outside your disorder",
                "Develop intuitive eating patterns and body trust",
                "Let go of diet culture and weight-focused thinking",
                "Build a life of joy and freedom in recovery",
                "Find support from someone who truly understands the journey",
                "Reclaim your life and step into authentic living"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#f49a39] text-xl mt-0.5">✓</span>
                  <span className="text-[#333333]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Office Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a] mb-8">
            Beyond the Office
          </h2>

          <p className="text-[#333333] leading-relaxed mb-6">
            Em made the bold move from Florida to the West Coast after completing her graduate degree at Florida State University—and she's never looked back! She's embraced Pacific Northwest life fully, trading palm trees and humidity for the mountains, ocean, and forest.
          </p>

          <p className="text-[#333333] leading-relaxed mb-8">
            When she's not supporting clients in their recovery journeys, Em enjoys:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#f49a39]">🎵</div>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Planning her next concert</h4>
                <p className="text-[#666666]">Music lover and live show enthusiast</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#f49a39]">🐾</div>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Quality time with her family</h4>
                <p className="text-[#666666]">Her partner, three cats (yes, three!), and dog keep life interesting and full of love</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#f49a39]">🌲</div>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Relaxing in nature</h4>
                <p className="text-[#666666]">Hiking, forest bathing, and appreciating the PNW's natural beauty</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#f49a39]">🍜</div>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Trying new restaurants</h4>
                <p className="text-[#666666]">Exploring Portland's amazing food scene and discovering fun, adventurous flavors</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#f49a39]">📺</div>
              <div>
                <h4 className="text-lg font-bold text-[#1a428a] mb-1">Netflix binges</h4>
                <p className="text-[#666666]">Always has a new series obsession to recommend</p>
              </div>
            </div>
          </div>

          <p className="text-[#333333] leading-relaxed">
            Em's zest for life, authenticity, and joy is contagious. She brings this same energy and genuine presence to her therapeutic work, helping clients rediscover their own capacity for pleasure, connection, and authentic living.
          </p>
        </div>
      </section>

      {/* Availability & Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a428a] text-center mb-12">
            How Em Can Support You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-6 h-6 text-[#1a428a]" />
                  <h3 className="text-xl font-bold text-[#1a428a]">LOCATIONS SERVED</h3>
                </div>
                <ul className="space-y-2 text-[#333333]">
                  <li>• In-person sessions in Portland, OR</li>
                  <li>• Telehealth/virtual sessions for Vancouver, WA</li>
                  <li>• Licensed in Oregon and Washington</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-6 h-6 text-[#1a428a]" />
                  <h3 className="text-xl font-bold text-[#1a428a]">SESSION TYPES</h3>
                </div>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Individual therapy</li>
                  <li>• Adolescent & adult clients</li>
                  <li>• Weekly ongoing sessions</li>
                  <li>• Intensive outpatient background</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-[#1a428a]" />
                  <h3 className="text-xl font-bold text-[#1a428a]">INSURANCE & PAYMENT</h3>
                </div>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Insurance accepted (Oregon & Washington)</li>
                  <li>• Verify your benefits online</li>
                  <li>• Flexible payment options</li>
                  <li>• Free initial consultation</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-6 h-6 text-[#1a428a]" />
                  <h3 className="text-xl font-bold text-[#1a428a]">IDEAL CLIENTS</h3>
                </div>
                <ul className="space-y-2 text-[#333333]">
                  <li>• Eating disorder recovery (all types)</li>
                  <li>• Trauma survivors</li>
                  <li>• LGBTQIA+ individuals</li>
                  <li>• Those seeking gender-affirming care</li>
                  <li>• Clients wanting person-centered approach</li>
                  <li>• Anyone ready to discover their authentic self</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-4">
            Ready to Reclaim Your Life?
          </h2>
          <p className="text-lg text-[#666666] mb-10 max-w-2xl mx-auto">
            Work with a therapist who understands the journey from lived experience and professional expertise
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-10">
            <div className="text-center">
              <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-10 py-6 text-lg font-bold shadow-lg mb-2">
                Schedule with Em
              </Button>
              <p className="text-sm text-[#666666]">Free initial consultation</p>
            </div>

            <div className="text-center">
              <a 
                href="tel:+13607264141,3" 
                className="flex items-center gap-3 text-[#1a428a] hover:text-[#0f2d5c] transition-colors"
              >
                <Phone className="w-8 h-8" />
                <span className="text-2xl font-bold">(360) 726-4141 ext. 3</span>
              </a>
              <p className="text-[#666666] mt-1">Call or text to get started</p>
              <a href="/contact" className="text-[#f49a39] hover:underline mt-2 inline-block">
                Send us a message
              </a>
            </div>
          </div>

          {/* Special Callout */}
          <Card className="border-2 border-[#f49a39] max-w-3xl mx-auto">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-[#1a428a] mb-4">
                Em offers specialized support for:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏳️‍⚧️</div>
                  <p className="text-sm font-bold text-[#1a428a]">LGBTQIA+ & Gender-Diverse Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="text-sm font-bold text-[#1a428a]">Trauma Survivors (CPT-trained)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💙</div>
                  <p className="text-sm font-bold text-[#1a428a]">Higher Level of Care Transitions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌈</div>
                  <p className="text-sm font-bold text-[#1a428a]">Authentic Self Discovery</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-[#666666] mt-6">
            Em sees clients in Portland, OR and virtually in Vancouver, WA
          </p>
          <p className="text-sm text-[#666666]">
            Part of Beyond Eating Recovery
          </p>
        </div>
      </section>

      {/* Meet Other Therapists Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-[#1a428a] text-center mb-10">
            Meet Our Other Therapists
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto">
            {/* Anne Cuthbert Card */}
            <Card className="hover:shadow-xl transition-shadow flex-1">
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
                <p className="text-sm text-[#333333] mb-4">Owner & Founder - 23+ years experience</p>
                <Link to="/about/anne-cuthbert">
                  <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bailey Benn Card */}
            <Card className="hover:shadow-xl transition-shadow flex-1">
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
                <p className="text-sm text-[#333333] mb-4">Emerging therapist with fresh perspective</p>
                <Link to="/about/bailey-benn">
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

      <Footer />
    </div>
  );
};

export default EmMenghini;
