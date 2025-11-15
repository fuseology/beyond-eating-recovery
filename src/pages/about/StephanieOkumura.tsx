import { Phone, GraduationCap, Award, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StephanieOkumura = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img 
                src="/placeholder.svg" 
                alt="Stephanie Okumura, MS, RDN - Registered Dietitian at Beyond Eating Recovery"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            
            <div className="md:col-span-3 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Stephanie Okumura, MS, RDN
              </h1>
              
              <p className="text-xl md:text-2xl text-accent font-medium">
                Registered Dietitian | Clinical Nutrition Specialist | HAES® Practitioner
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-background border-2 border-primary rounded-lg text-sm font-medium text-primary">
                  Master's in Clinical Nutrition
                </span>
                <span className="px-4 py-2 bg-background border-2 border-primary rounded-lg text-sm font-medium text-primary">
                  Registered Dietitian Nutritionist
                </span>
                <span className="px-4 py-2 bg-background border-2 border-primary rounded-lg text-sm font-medium text-primary">
                  HAES® & Intuitive Eating
                </span>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed">
                I'm passionate about fostering positive relationships with food from a weight-neutral and culturally diverse perspective. My goal is to create an open and supportive environment where you don't feel judgment based on what foods you eat. Together, we'll honor your cultural food traditions while learning to eat intuitively and joyfully.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Schedule with Stephanie
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (360) 726-4141 ext. 12
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Credentials & Professional Background
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <GraduationCap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
              <ul className="space-y-2 text-foreground">
                <li>• Master of Science in Clinical Nutrition</li>
                <li>• Rush Medical Center, Chicago, Illinois</li>
                <li>• Dietetic Internship (Clinical Nutrition Focus)</li>
                <li>• Bachelor of Science in Dietetics</li>
                <li>• University of Illinois Urbana-Champaign</li>
                <li>• Registered Dietitian Nutritionist (RDN)</li>
              </ul>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-4">Specializations</h3>
              <ul className="space-y-2 text-foreground">
                <li>• Registered Dietitian Nutritionist (RDN)</li>
                <li>• Clinical nutrition expertise</li>
                <li>• Eating disorder nutrition therapy</li>
                <li>• Health At Every Size® (HAES®) practitioner</li>
                <li>• Intuitive eating counseling</li>
                <li>• Cultural competency in food relationships</li>
              </ul>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-4">Experience & Approach</h3>
              <ul className="space-y-2 text-foreground">
                <li>• Clinical nutrition background</li>
                <li>• Medical center training</li>
                <li>• Eating disorder treatment</li>
                <li>• Cultural food practices integration</li>
                <li>• Weight-neutral perspective</li>
                <li>• Non-judgmental food support</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto bg-accent/10 border border-accent/20 p-6 rounded-lg">
            <p className="text-center text-foreground italic">
              <strong>Clinical Excellence Meets Cultural Humility:</strong> Stephanie combines rigorous medical center training with deep respect for cultural food traditions, creating nutrition counseling that honors both science and your unique heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Nutrition Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
            My Nutrition Philosophy
          </h2>
          
          <p className="text-lg text-center max-w-4xl mx-auto text-foreground mb-12 leading-relaxed">
            My practice is centered around Health at Every Size® (HAES®) principles and learning how to eat intuitively. I understand the importance that culture has on the way we eat and form relationships with food, and I aim to implement this cultural awareness in my practice. My goal is to create an open and supportive environment in which you don't feel judgment based on what foods you eat.
          </p>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary mb-6">Core Principles</h3>
              {[
                "Health At Every Size® (HAES®)",
                "Intuitive eating framework",
                "Weight-neutral nutrition care",
                "Cultural food practice respect",
                "Non-diet approach",
                "Food neutrality (no good/bad foods)",
                "Body trust and autonomy"
              ].map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground text-lg">{principle}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary mb-6">What I Offer</h3>
              {[
                "Individualized nutrition counseling",
                "Eating disorder nutrition therapy",
                "Meal planning and support",
                "Cultural food integration",
                "Nutrition education without diet culture",
                "Family and caregiver guidance",
                "Collaborative care with therapists"
              ].map((offering, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground text-lg">{offering}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-primary p-8 rounded-lg text-center">
            <p className="text-white text-lg font-medium">
              <strong>No Judgment Zone:</strong> In our work together, there are no 'good' or 'bad' foods. All foods fit. You won't receive food rules, calorie targets, or meal plans designed to change your body size. Instead, we'll focus on nourishing your body, honoring your hunger, and finding food freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Competency Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
            Honoring Culture in Nutrition Counseling
          </h2>
          <p className="text-xl text-center text-accent mb-12">
            Understanding the Importance of Culture in Our Food Relationships
          </p>
          
          <p className="text-lg text-center max-w-4xl mx-auto text-foreground mb-12 leading-relaxed">
            I understand the importance that culture has on the way we eat and form relationships with food, and I aim to implement this in my practice. Having lived in California, Hawai'i, Chicago, and now Portland, and being of Japanese heritage, I've experienced firsthand how culture shapes our food experiences, traditions, and identities.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Why Cultural Competency Matters in Nutrition
              </h3>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  Traditional nutrition education often centers white, Western food practices while marginalizing or pathologizing other cultural foodways. This causes harm, especially for people from diverse cultural backgrounds who may feel pressured to abandon their food traditions.
                </p>
                
                <div className="space-y-3 pl-4">
                  <p><strong>Cultural Food Practices Include:</strong></p>
                  <ul className="space-y-2 pl-4">
                    <li>• <strong>Family Traditions:</strong> Foods passed down through generations, recipes with history and meaning</li>
                    <li>• <strong>Celebration Foods:</strong> Special occasion dishes that connect us to community and heritage</li>
                    <li>• <strong>Comfort Foods:</strong> The foods that remind us of home, family, and belonging</li>
                    <li>• <strong>Spiritual/Religious Foods:</strong> Dietary practices connected to faith and values</li>
                    <li>• <strong>Regional Cuisines:</strong> Foods specific to geographic regions and climates</li>
                    <li>• <strong>Immigrant Experiences:</strong> Navigating food in a new country while maintaining cultural identity</li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  <strong>My Commitment:</strong> I will never ask you to give up cultural foods or traditions. Instead, we'll explore how to honor your heritage while also supporting your eating disorder recovery. Your cultural food practices are valid, valuable, and an important part of who you are.
                </p>
              </div>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Your Culture is Your Strength
              </h3>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  As someone with Japanese heritage, I understand the importance of rice as a staple food (not a 'carb to avoid'), traditional meal structures, seasonal eating, and the role of food in family gatherings. Whatever your background, I'm committed to learning about your cultural food practices with curiosity and respect.
                </p>
                
                <p className="leading-relaxed">
                  <strong>In Our Work Together:</strong> We'll honor your cultural food traditions, challenge diet culture rules that conflict with your heritage, find ways to include cultural foods in your regular eating, and navigate intergenerational food dynamics with respect.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-primary p-8 rounded-lg text-center">
            <p className="text-white text-lg font-medium">
              Food is more than fuel—it's family, memory, celebration, identity, and love. Eating disorder recovery that asks you to abandon these connections isn't true healing. Let's find a path that honors both your recovery and your heritage.
            </p>
          </div>
        </div>
      </section>

      {/* HAES & Intuitive Eating */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
            Health At Every Size® & Intuitive Eating
          </h2>
          <p className="text-xl text-center text-accent mb-12">
            Weight-Neutral, Body-Respectful Nutrition Care
          </p>
          
          <p className="text-lg text-center max-w-4xl mx-auto text-foreground mb-12 leading-relaxed">
            My practice is centered around Health at Every Size® (HAES®) principles and learning how to eat intuitively. This means I focus on behaviors that support well-being—not on changing your body size. All bodies deserve respectful, evidence-based nutrition care.
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                HAES® Principles in Dietitian Practice
              </h3>
              <div className="space-y-4 text-foreground">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Weight Inclusivity:</h4>
                  <p>Respect and acceptance for all body sizes. No weight loss goals or intentional weight manipulation. Health exists across the weight spectrum.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Health Enhancement:</h4>
                  <p>Focus on health-promoting behaviors, not weight outcomes. Adequate nourishment, joyful movement, stress management, and social connections.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Eating for Well-Being:</h4>
                  <p>Individualized, flexible eating patterns. Internal regulation using hunger, fullness, and satisfaction. Permission to eat all foods.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Respectful Care:</h4>
                  <p>Never weighing unless medically necessary. No diet plans or calorie counting. Challenging weight bias and discrimination.</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Intuitive Eating Framework
              </h3>
              <div className="space-y-3 text-foreground">
                <p className="mb-4">The 10 principles that guide us back to trusting our bodies:</p>
                <div className="space-y-2">
                  <p>1. Reject the Diet Mentality</p>
                  <p>2. Honor Your Hunger</p>
                  <p>3. Make Peace with Food</p>
                  <p>4. Challenge the Food Police</p>
                  <p>5. Discover the Satisfaction Factor</p>
                  <p>6. Feel Your Fullness</p>
                  <p>7. Cope with Your Emotions with Kindness</p>
                  <p>8. Respect Your Body</p>
                  <p>9. Movement—Feel the Difference</p>
                  <p>10. Honor Your Health with Gentle Nutrition</p>
                </div>
                <p className="mt-4 italic">
                  While full Intuitive Eating may be a later-stage recovery goal, we'll use these principles throughout your healing journey—adapting them to your current needs and stage of recovery.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-accent/10 border border-accent/20 p-6 rounded-lg">
            <p className="text-center text-foreground italic">
              <strong>Nutrition Without the Noise:</strong> Diet culture has made eating complicated. Intuitive Eating and HAES® help us get back to basics—nourishing your body, finding satisfaction, and trusting your internal wisdom rather than external rules.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            What to Expect in Nutrition Counseling
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4 border-t-4 border-accent pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Your First Appointment</h3>
              </div>
              <p className="text-foreground">
                We'll discuss your history with food and eating, current eating patterns, cultural food practices, and nutrition goals. This is a collaborative, non-judgmental conversation about your relationship with food.
              </p>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                60 minutes
              </span>
            </div>

            <div className="space-y-4 border-t-4 border-accent pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Regular Nutrition Counseling</h3>
              </div>
              <p className="text-foreground">
                Sessions are typically 50-60 minutes, weekly or bi-weekly initially. We'll work on meal normalization, challenging food rules, honoring cultural foods, and developing intuitive eating skills—all at your pace.
              </p>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                50-60 minutes
              </span>
            </div>

            <div className="space-y-4 border-t-4 border-accent pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Open & Supportive Environment</h3>
              </div>
              <p className="text-foreground">
                You won't feel judgment based on what foods you eat. All foods fit, cultural traditions are honored, and your body deserves respect at any size.
              </p>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Weight-neutral & culturally responsive
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Collaborative Care</h3>
            <p className="text-foreground text-center leading-relaxed">
              As a dietitian at Beyond Eating Recovery, I work closely with your therapist to provide coordinated, comprehensive care. This team approach ensures your nutrition counseling supports your overall eating disorder treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Connection */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Beyond the Credentials
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              I was born and raised in California, lived in Hawai'i and Chicago, and now call Portland home. Each place has shaped my understanding of food culture and how geography, community, and heritage influence our eating.
            </p>
            
            <p>
              Growing up with Japanese heritage, I've experienced firsthand the intersection of cultural food traditions with American food culture. This has given me deep appreciation for how food connects us to family, heritage, and identity—and why nutrition counseling must honor these connections.
            </p>
            
            <p>
              In my free time, I love doing anything creative. I paint, work with pottery, crochet, create jewelry through silversmithing, and dance. Creativity is a form of self-expression and joy for me—much like food can and should be. I believe in finding pleasure in life's sensory experiences, whether that's the feel of clay in your hands, the taste of a beloved family recipe, or the movement of dance.
            </p>
            
            <p>
              I also have a dog named Kosho (こしょう - which means 'pepper' in Japanese). We love going on hikes together in the beautiful Pacific Northwest. Spending time in nature grounds me and reminds me of the importance of slowing down, being present, and appreciating simple pleasures—all principles I bring into my nutrition practice.
            </p>
            
            <p>
              My diverse creative interests and love of different cultures inform how I practice dietetics. Just as there's no one 'right' way to create art, there's no one 'right' way to eat. My job is to support you in finding the approach that fits your unique life, culture, values, and body.
            </p>
            
            <p className="text-center italic text-accent mt-8">
              I look forward to working with you on your journey to food freedom and body respect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Relationship with Food?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            I'm currently accepting new clients for nutrition counseling in Portland, Vancouver, and via telehealth throughout Oregon and Washington. Whether you're in eating disorder recovery, seeking intuitive eating support, or wanting culturally responsive nutrition care, I'm here to support you with respect and compassion.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Schedule with Stephanie
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call (360) 726-4141 ext. 12
            </Button>
          </div>
          
          <p className="text-white/90">
            Portland & Vancouver Offices | Telehealth: OR & WA
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StephanieOkumura;