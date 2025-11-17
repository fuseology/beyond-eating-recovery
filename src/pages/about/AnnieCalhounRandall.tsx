import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import anneImage from "@/assets/anne-cuthbert.jpg";
import baileyImage from "@/assets/bailey-benn.jpg";
import annieImage from "@/assets/annie-calhoun-randall.webp";
// TODO: Replace with actual team photos
const alyssaImage = anneImage;
const kiandraImage = anneImage;
const rachelImage = anneImage;

const AnnieCalhounRandall = () => {
  return (
    <div className="min-h-screen bg-background">
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
                As someone who recovered from an eating disorder myself, I understand the journey from struggle to freedom. Combining my background in nutrition therapy, counseling, and athletics, I offer a holistic, body-centered approach to healing. Whether you're an athlete or not, I seek to come alongside you with empathy and compassion as you improve your relationship with food and body.
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
                  <li className="mt-2">Professional Counselor Associate</li>
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
                  <li>Certified Nutrition Therapy Practitioner (NTP)</li>
                  <li className="mt-3 font-medium">Supervised by Anne Cuthbert, MA, LPC, LMHC</li>
                  <li>Working toward full licensure (LPC/LMHC)</li>
                  <li className="mt-2">Practicum/Internship: A New Day Counseling Center & Body Expressions</li>
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
            <p className="text-lg text-[#333333]">
              <strong>Unique Combination:</strong> Annie brings together nutrition science, counseling expertise, athletic experience, and personal recovery—creating a comprehensive approach to eating disorder treatment that addresses body, mind, and spirit.
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

          <div className="mt-12 bg-[#1a428a] p-8 rounded-lg max-w-4xl mx-auto">
            <p className="text-lg text-white text-center">
              <strong className="block mb-2">Social Justice Lens:</strong> I understand that our relationships with food and body are influenced by systemic factors—diet culture, weight stigma, athletic pressures, and societal expectations. My approach addresses these broader contexts while supporting your individual healing.
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
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
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
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
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
                  <li>• Self-esteem and self-worth</li>
                  <li>• Life transitions</li>
                  <li>• Career changes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working with Athletes - Athlete Specialization */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-6">
            Working with Athletes
          </h2>
          <p className="text-xl text-[#f49a39] mb-12">
            Understanding the Unique Challenges Athletes Face
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-12">
            I have a special interest in working with athletes. As a lifelong athlete and former coach, I understand the additional challenges that athletes face and the ways in which these challenges can impact one's relationship with food and body. The intersection of athletic performance, body expectations, and eating disorders requires specialized understanding—and I bring both professional training and lived experience to this work.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Unique Risk Factors for Athletes</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Athletes face specific pressures that increase eating disorder risk:
              </p>
              
              <div className="space-y-4 text-[#333333]">
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Sport-Specific Pressures:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Weight requirements or 'ideal' body types for certain sports</li>
                    <li>• Performance metrics tied to body composition</li>
                    <li>• Aesthetic components (gymnastics, figure skating, dance)</li>
                    <li>• Weight class sports (wrestling, rowing, martial arts)</li>
                    <li>• Endurance sports and energy availability concerns</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Athletic Culture Factors:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Coach comments about weight or appearance</li>
                    <li>• Team weigh-ins and body composition testing</li>
                    <li>• Comparison with teammates</li>
                    <li>• 'No pain, no gain' mentality that ignores body signals</li>
                    <li>• Identity entirely wrapped up in athletic performance</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">RED-S (Relative Energy Deficiency in Sport):</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Under-fueling for training demands</li>
                    <li>• Menstrual irregularities or loss</li>
                    <li>• Bone density issues and stress fractures</li>
                    <li>• Decreased performance despite increased training</li>
                    <li>• Compromised immune function</li>
                  </ul>
                </div>
                
                <p className="italic mt-4">
                  Many athletes don't recognize they have an eating disorder because the behaviors are normalized or even praised in athletic contexts.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">My Athletic Background & Insight</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                As a lifelong athlete and former coach, I get it. I understand:
              </p>
              
              <div className="space-y-4 text-[#333333]">
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">The Athletic Mindset:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• The drive for excellence and perfectionism</li>
                    <li>• How training becomes both passion and compulsion</li>
                    <li>• The fear of losing your edge if you change your approach</li>
                    <li>• The identity crisis when injury or recovery sidelines you</li>
                    <li>• The pressure to perform for coaches, teammates, and yourself</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Coaching Dynamics:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• How coach relationships impact body image and eating</li>
                    <li>• The vulnerability of receiving feedback about your body</li>
                    <li>• When coaching crosses the line into harmful territory</li>
                    <li>• How to navigate difficult conversations with coaches</li>
                    <li>• The power dynamics in coach-athlete relationships</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">The Recovery Challenge:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Fear that proper fueling will hurt performance (it won't—it helps)</li>
                    <li>• Concern about weight changes during recovery</li>
                    <li>• Learning to listen to body signals instead of training plans</li>
                    <li>• Maintaining athletic identity during eating disorder recovery</li>
                    <li>• Finding balance between healthy training and compulsion</li>
                  </ul>
                </div>
                
                <p className="italic mt-4">
                  I won't ask you to give up your sport—I'll help you find a healthier relationship with both athletics and your body.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Treatment Approach for Athletes</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Working with athletes requires a specialized approach:
              </p>
              
              <div className="space-y-4 text-[#333333]">
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Nutrition Integration:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Combining counseling with nutrition therapy knowledge</li>
                    <li>• Understanding sport-specific fueling needs</li>
                    <li>• Addressing RED-S and energy availability</li>
                    <li>• Working with sports dietitians when appropriate</li>
                    <li>• Education about performance nutrition vs. diet culture</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Body-Centered Work:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Somatic Experiencing to reconnect with body signals</li>
                    <li>• Distinguishing between athletic pain and injury</li>
                    <li>• Rebuilding trust with your body's hunger and fatigue cues</li>
                    <li>• Addressing overtraining and burnout</li>
                    <li>• Finding joyful movement beyond structured training</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Identity Work:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Exploring who you are beyond your sport</li>
                    <li>• Preparing for transitions (retirement, injury, graduation)</li>
                    <li>• Building self-worth not tied to performance</li>
                    <li>• Developing life balance and interests outside athletics</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-[#1a428a] mb-2">Practical Support:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Navigating team environments during recovery</li>
                    <li>• Communicating with coaches about your needs</li>
                    <li>• Handling social eating situations with teams</li>
                    <li>• Managing competition anxiety without food restriction</li>
                    <li>• Return-to-sport planning after eating disorder treatment</li>
                  </ul>
                </div>
                
                <p className="mt-4">
                  Whether you're currently competing, transitioning out of sport, or dealing with a career-ending injury, I understand the unique emotional landscape of athletic life.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#1a428a] p-8 rounded-lg text-center">
            <p className="text-white text-lg leading-relaxed">
              <strong className="block mb-4 text-xl">You Don't Have to Choose:</strong>
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
          <p className="text-xl text-[#f49a39] mb-12">
            Integrating EFIT, Somatic Experiencing, and IFS
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed mb-12">
            My approach is informed by three powerful body-centered modalities: Emotion Focused Individual Therapy (EFIT), Somatic Experiencing (SE), and Internal Family Systems (IFS). These approaches honor the wisdom of the body and recognize that healing happens not just in our minds, but in our entire being.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* EFIT */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Emotion Focused Individual Therapy (EFIT)</h3>
              <p className="text-[#333333] mb-4">
                EFIT is an attachment-based approach that helps you access, process, and transform core emotions.
              </p>
              <p className="font-medium text-[#1a428a] mb-2">In EFIT work, we'll:</p>
              <ul className="space-y-2 text-[#333333] text-sm">
                <li>• Identify underlying emotions beneath eating disorder behaviors</li>
                <li>• Understand your attachment patterns</li>
                <li>• Access blocked or avoided emotions safely</li>
                <li>• Transform maladaptive emotional patterns</li>
                <li>• Build secure self-attachment</li>
                <li>• Develop emotional regulation skills</li>
              </ul>
            </div>

            {/* SE */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Somatic Experiencing (SE)</h3>
              <p className="text-[#333333] mb-4">
                SE is a body-based trauma therapy that helps release trauma stored in the nervous system.
              </p>
              <p className="font-medium text-[#1a428a] mb-2">In SE work, we'll:</p>
              <ul className="space-y-2 text-[#333333] text-sm">
                <li>• Track bodily sensations and nervous system states</li>
                <li>• Release trauma held in the body</li>
                <li>• Complete survival responses that got 'stuck'</li>
                <li>• Restore capacity for regulation and resilience</li>
                <li>• Reconnect with body wisdom</li>
                <li>• Develop body trust and safety</li>
              </ul>
            </div>

            {/* IFS */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Internal Family Systems (IFS)</h3>
              <p className="text-[#333333] mb-4">
                IFS views the psyche as made up of different 'parts,' each with its own protective role.
              </p>
              <p className="font-medium text-[#1a428a] mb-2">In IFS work, we'll:</p>
              <ul className="space-y-2 text-[#333333] text-sm">
                <li>• Identify parts (critic, protector, eating disorder voice)</li>
                <li>• Understand what each part is protecting you from</li>
                <li>• Access your core 'Self'</li>
                <li>• Help parts communicate and work together</li>
                <li>• Unburden parts carrying shame or pain</li>
                <li>• Integrate all parts into a harmonious whole</li>
              </ul>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1a428a] mb-6">Why Body-Centered Approaches?</h3>
            <p className="text-lg text-[#333333] leading-relaxed">
              Eating disorders live in the body as much as the mind. Traditional talk therapy alone often isn't enough—we need to address the somatic, emotional, and relational dimensions of your experience. These body-centered approaches help you reconnect with body signals, release trauma stored in the nervous system, access and transform core emotions, understand protective patterns, build genuine body trust and safety, and create lasting change at a deep level.
              <br /><br />
              <span className="italic">Your body isn't the enemy—it's been trying to protect you. Let's help it find new, healthier ways to keep you safe.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-20 bg-[#fff5eb]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] text-center mb-12">
            My Journey: From Architecture to Healing
          </h2>
          
          <div className="relative">
            <div className="text-6xl text-[#f49a39] absolute -top-4 -left-4">"</div>
            <div className="pl-8 pr-8 space-y-6 text-lg text-[#333333] leading-relaxed">
              <p>
                My path to becoming a therapist wasn't traditional—but then again, recovery rarely is.
              </p>
              
              <p>
                I started my career with a Bachelor of Architecture from the University of Oregon. I thought I'd found my calling in design and creating spaces. But shortly after graduation, I realized something was missing. My own eating disorder recovery journey had been so transformative that I felt called to help others experience that same freedom.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                From Architecture to Nutrition:
              </p>
              <p>
                I made what seemed like a radical career change and attended the Nutrition Therapy Institute in Denver, becoming a Certified Nutrition Therapy Practitioner. For nearly six years, I coached clients around nutrition, helping them understand the science of nourishing their bodies. But I kept seeing that nutrition education alone wasn't enough—people needed deeper emotional and psychological support.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                From Nutrition to Counseling:
              </p>
              <p>
                So I went back to school once again (yes, again!) and earned my Master of Arts in Counseling from Western Seminary. During my graduate program, I completed my practicum and internship at A New Day Counseling Center and Body Expressions, which brought together everything I'd learned.
              </p>
              
              <p className="font-medium text-[#1a428a]">
                What This Means for You:
              </p>
              <p>
                As someone who recovered from an eating disorder myself, I understand the journey from struggle to freedom. I know what it's like to battle daily with food decisions and body image, feel controlled by eating disorder thoughts, fear losing the behaviors that feel protective, wonder if recovery is actually possible, navigate relationships and social situations around food, and rebuild trust with your body.
              </p>
              
              <p>
                I also know the incredible freedom that comes from recovery—and I wanted to dedicate my professional life to helping others experience that freedom too.
              </p>
              
              <p>
                My unconventional path—architecture, nutrition therapy, coaching, counseling—means I bring a truly holistic perspective. I understand the body (nutrition science), the mind (counseling), and the creative process of redesigning your life (literally and figuratively).
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a428a] mb-12 text-center">
            What to Expect in Working with Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-t-4 border-[#f49a39] bg-[#f8f9fa] p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Your First Appointment</h3>
              <p className="text-[#333333] mb-6">
                We'll explore your history with food, body, and athletics (if applicable). I'll learn about your goals, your story, and what you need from therapy. This is a collaborative conversation where we begin building the trust and safety essential for healing.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  60-90 minutes
                </span>
              </div>
            </div>

            <div className="border-t-4 border-[#f49a39] bg-[#f8f9fa] p-8 rounded-lg">
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
                  50-60 minutes
                </span>
              </div>
            </div>

            <div className="border-t-4 border-[#f49a39] bg-[#f8f9fa] p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#f49a39] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a428a] mb-4 text-center">Empathy & Compassion</h3>
              <p className="text-[#333333] mb-6">
                I seek to come alongside you with empathy and compassion. You won't be judged, rushed, or pushed. We'll work at your body's pace, honoring both your athletic drive (if you have one) and your need for gentleness.
              </p>
              <div className="text-center">
                <span className="inline-block bg-[#f49a39] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Holistic & body-centered
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
              I grew up in Colorado, but I consider Portland home. There's something about the Pacific Northwest—the rain, the mountains, the culture—that resonates deeply with me. Portland feels like a place where I can be my authentic self, and I hope to create that same sense of authenticity and safety in therapy.
            </p>
            
            <p>
              In my free time, I'm still very much an athlete at heart. I enjoy running, weightlifting, and hiking—but now from a place of joy and body respect rather than compulsion or punishment. This shift in my own relationship with movement informs how I work with clients, especially athletes.
            </p>
            
            <p>
              I'm also a reader, writer, and artist. I love drawing and creative expression in all forms. I believe creativity is healing, and sometimes we'll incorporate creative exercises into our work together if that feels right for you.
            </p>
            
            <p>
              I spend a lot of time with my partner and our adorable puppy, who brings endless joy and keeps me grounded. There's something about animals that reminds us to be present, playful, and gentle with ourselves—lessons I hope to share in therapy.
            </p>
            
            <p className="font-medium">
              My career journey—from architecture to nutrition to counseling—reflects my belief that it's never too late to change direction, pursue your calling, and create a life aligned with your values. If I can make that kind of transformation, you can too.
            </p>
          </div>
          
          <p className="text-xl text-[#f49a39] italic text-center mt-12">
            I'm honored to walk alongside you on your journey to freedom and healing.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#1a428a]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          
          <p className="text-xl text-white mb-10 leading-relaxed">
            I'm currently accepting new clients for individual therapy in Portland, Vancouver, and via telehealth throughout Oregon and Washington. Whether you're an athlete struggling with food and performance, dealing with trauma, or seeking freedom from an eating disorder, I'm here to support you with empathy and compassion.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-[#f49a39] hover:bg-[#e88b28] text-white px-8 py-4 text-lg">
              Schedule with Annie
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

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
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
                <p className="text-sm text-[#333333] mb-4">Family Therapist</p>
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
            <Link to="/about">
              <Button variant="outline" className="border-2 border-[#1a428a] text-[#1a428a] hover:bg-[#1a428a] hover:text-white px-8 py-3">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnnieCalhounRandall;