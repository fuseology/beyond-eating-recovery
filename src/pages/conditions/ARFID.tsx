import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Phone, Mail, MapPin, AlertCircle, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const ARFID = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <ChevronRight className="h-4 w-4" />
          <li><Link to="/conditions" className="hover:text-primary">Eating Disorders</Link></li>
          <ChevronRight className="h-4 w-4" />
          <li className="text-foreground">ARFID</li>
        </ol>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          
          {/* Main Content Area */}
          <main className="space-y-12">
            
            {/* Hero Section */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                ARFID Treatment: Avoidant/Restrictive Food Intake Disorder
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avoidant/Restrictive Food Intake Disorder (ARFID) is an eating disorder characterized by extremely limited food intake or variety due to sensory sensitivities, fear of aversive consequences (like choking or vomiting), or lack of interest in eating. Unlike other eating disorders, ARFID is not driven by body image concerns or desire for weight loss. At Beyond Eating Recovery, we provide specialized, compassionate treatment for ARFID that helps you expand your food repertoire, address underlying anxieties, and develop a healthier relationship with eating—without judgment about your food preferences or sensory experiences.
              </p>
            </section>

            {/* What is ARFID? */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Understanding ARFID</h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Avoidant/Restrictive Food Intake Disorder (ARFID) is an eating or feeding disorder in which individuals eat only within an extremely limited range of foods, leading to nutritional deficiencies, dependence on supplements, impaired growth (in children), or significant interference with daily functioning. ARFID was officially recognized as a distinct diagnosis in the DSM-5 in 2013, replacing the previous diagnosis of "Feeding Disorder of Infancy or Early Childhood."
              </p>

              <h3 className="text-2xl font-semibold text-primary">Key Characteristics</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Extremely limited food variety:</strong> Often called "picky eating" but far more severe</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Not about weight or body image:</strong> Unlike anorexia or bulimia, individuals with ARFID are not restricting food to lose weight or change their appearance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Nutritional consequences:</strong> Inadequate intake leads to weight loss, nutritional deficiencies, or failure to gain weight appropriately in children</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Functional impairment:</strong> ARFID significantly impacts social situations, daily routines, and quality of life</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Multiple presentations:</strong> ARFID can look very different from person to person depending on the underlying reason for food avoidance</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary">The Three Primary Presentations of ARFID</h3>
              <p className="text-muted-foreground">ARFID typically presents in one (or a combination) of three ways:</p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-primary">
                  <h4 className="text-xl font-semibold text-foreground mb-3">1. Sensory-Based ARFID (Sensitivity to Food Properties)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Avoidance based on sensory characteristics: taste, texture, smell, appearance, temperature</li>
                    <li>• Strong aversions to specific textures (e.g., mushy, slimy, crunchy foods)</li>
                    <li>• Preference for "beige" or bland foods</li>
                    <li>• Difficulty tolerating mixed textures</li>
                    <li>• May gag or vomit when exposed to non-preferred foods</li>
                    <li>• Often associated with autism, ADHD, or sensory processing differences</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-accent">
                  <h4 className="text-xl font-semibold text-foreground mb-3">2. Fear-Based ARFID (Fear of Aversive Consequences)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fear of choking, vomiting, gagging, or having an allergic reaction</li>
                    <li>• Often develops after a traumatic event (choking episode, severe illness, food poisoning)</li>
                    <li>• May avoid foods perceived as "risky" (meat, pills, certain textures)</li>
                    <li>• Anxiety around eating, particularly in unfamiliar settings</li>
                    <li>• May eat very slowly or cut food into tiny pieces</li>
                    <li>• Overlaps with anxiety disorders and PTSD</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-secondary">
                  <h4 className="text-xl font-semibold text-foreground mb-3">3. Lack of Interest ARFID (Low Appetite/Interest in Eating)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Appears to forget to eat or not recognize hunger cues</li>
                    <li>• Eating feels like a chore rather than enjoyable</li>
                    <li>• Gets distracted easily during meals</li>
                    <li>• May eat very slowly or stop eating after small amounts</li>
                    <li>• Often associated with ADHD, autism, depression, or anxiety</li>
                    <li>• May rely on liquid supplements or specific preferred foods</li>
                  </ul>
                </Card>
              </div>

              <p className="text-muted-foreground italic">Many individuals have elements of all three presentations.</p>

              <h3 className="text-2xl font-semibold text-primary">How ARFID Differs from Other Eating Disorders</h3>
              
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ARFID vs. Anorexia Nervosa:</h4>
                  <p className="text-muted-foreground"><strong>ARFID:</strong> No body image concerns or fear of weight gain; restriction is NOT intentional weight control</p>
                  <p className="text-muted-foreground"><strong>Anorexia:</strong> Driven by body image distortion and fear of weight gain</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ARFID vs. "Picky Eating":</h4>
                  <p className="text-muted-foreground"><strong>ARFID:</strong> Causes significant nutritional deficiencies, weight loss, or functional impairment</p>
                  <p className="text-muted-foreground"><strong>Picky Eating:</strong> Selective but maintains adequate nutrition and growth without major life interference</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Who Gets ARFID?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong className="text-foreground">Children and adolescents:</strong> ARFID is more commonly diagnosed in children but can persist into adulthood</li>
                <li>• <strong className="text-foreground">Adults:</strong> Many adults with ARFID have struggled since childhood but were dismissed as "just picky"</li>
                <li>• <strong className="text-foreground">All genders:</strong> ARFID affects individuals of all genders more equally than other eating disorders</li>
                <li>• <strong className="text-foreground">Neurodivergent individuals:</strong> Higher prevalence in people with autism, ADHD, sensory processing differences, or anxiety disorders</li>
                <li>• <strong className="text-foreground">All body sizes:</strong> ARFID occurs across the weight spectrum, though individuals may be underweight due to inadequate intake</li>
              </ul>

              <Card className="p-6 bg-accent/10 border-l-4 border-accent">
                <p className="text-foreground font-medium">
                  ARFID is not "just being picky." It's a legitimate eating disorder with real physical, emotional, and social consequences. If your food limitations are causing distress or impacting your health, you deserve specialized treatment.
                </p>
              </Card>
            </section>

            {/* Signs and Symptoms */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Signs and Symptoms of ARFID</h2>
              <p className="text-muted-foreground">ARFID manifests differently depending on the underlying cause (sensory, fear-based, or lack of interest). Many individuals experience symptoms across multiple categories.</p>

              <h3 className="text-2xl font-semibold text-primary">Eating and Food-Related Behaviors</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Food Avoidance Patterns:</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Extremely limited food repertoire: Eating only 5-20 specific foods (sometimes fewer)</li>
                    <li>• Preferring specific brands or preparations: Will only eat one brand of chicken nuggets or one type of pasta</li>
                    <li>• Avoiding entire food groups: No fruits, no vegetables, no meat, no dairy</li>
                    <li>• Texture-based avoidance: Only eating crunchy foods or only smooth/pureed foods</li>
                    <li>• Color-based limitations: Only eating "beige" or "white" foods</li>
                    <li>• Temperature restrictions: Only eating foods at specific temperatures</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Mealtime Behaviors:</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Taking very long to eat: Meals lasting an hour or more</li>
                    <li>• Eating very small portions: Leaving most food on the plate</li>
                    <li>• Gagging or vomiting: When exposed to non-preferred foods</li>
                    <li>• Cutting food into tiny pieces: To minimize texture or appearance</li>
                    <li>• Avoiding mixed foods: Refusing casseroles, soups, or foods where ingredients touch</li>
                    <li>• Needing foods separated: Everything must be in its own space on the plate</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Social and Functional Impact</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Social Challenges:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Avoiding social situations involving food</li>
                    <li>• Anxiety about eating with others</li>
                    <li>• Difficulty traveling</li>
                    <li>• Relationship strain</li>
                    <li>• Feeling isolated</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Daily Life Impact:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Difficulty attending school or work</li>
                    <li>• Reliance on others for food preparation</li>
                    <li>• Significant meal prep time</li>
                    <li>• Financial strain</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Physical and Health Symptoms</h3>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">Nutritional Consequences:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weight loss or inability to gain weight (particularly in children and adolescents)</li>
                  <li>• Nutritional deficiencies: Iron, B12, vitamin D, protein deficiencies</li>
                  <li>• Fatigue and low energy from inadequate caloric or nutrient intake</li>
                  <li>• Delayed growth or puberty in children and adolescents</li>
                  <li>• Reliance on nutritional supplements</li>
                  <li>• Gastrointestinal issues: Constipation from limited fiber, stomach pain</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Emotional and Psychological Signs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Anxiety around food and eating, particularly with new foods or unfamiliar settings</li>
                <li>• Distress about food limitations: Wanting to eat more variety but feeling unable</li>
                <li>• Embarrassment or shame about eating habits or limitations</li>
                <li>• Fear and panic when faced with pressure to eat non-preferred foods</li>
                <li>• Depression, particularly in adults frustrated by lifelong limitations</li>
                <li>• Low self-esteem: Feeling "broken" or "weird" about eating</li>
              </ul>
            </section>

            {/* Causes and Risk Factors */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">What Causes ARFID?</h2>
              <p className="text-muted-foreground">ARFID develops from a complex interaction of biological, psychological, sensory, and environmental factors. Understanding these contributing factors helps reduce shame and recognize that ARFID is not about willpower or choice.</p>

              <h3 className="text-2xl font-semibold text-primary">Biological and Neurological Factors</h3>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Sensory Processing Differences:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Heightened sensory sensitivity: More acute taste, smell, texture, or visual perception</li>
                    <li>• Sensory processing disorder: Difficulty integrating sensory information</li>
                    <li>• Neurodivergence: ARFID is significantly more common in individuals with Autism Spectrum Disorder (ASD), ADHD, and other developmental differences</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Genetic Factors:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Family history of eating disorders or anxiety</li>
                    <li>• Genetic predisposition to sensory sensitivity</li>
                    <li>• Temperament traits (high anxiety, behavioral inhibition)</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Physiological Factors:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Gastrointestinal issues: Reflux, constipation, food intolerances</li>
                    <li>• Oral-motor difficulties: Difficulty chewing, swallowing, or managing different textures</li>
                    <li>• Appetite regulation differences: Altered hunger and fullness cues</li>
                    <li>• Medical conditions affecting digestion, swallowing, or appetite</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Psychological and Emotional Factors</h3>
              
              <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Anxiety:</h4>
                  <p className="text-muted-foreground">Generalized anxiety making new experiences feel threatening, specific phobias (emetophobia - fear of vomiting, choking phobia), social anxiety around eating with others, perfectionism and need for control</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Trauma:</h4>
                  <p className="text-muted-foreground">Choking or gagging episode, severe illness (food poisoning, stomach virus, allergic reaction), medical trauma (tube feeding, invasive medical procedures), forced feeding experiences</p>
                </div>
              </div>

              <Card className="p-6 bg-accent/10 border-l-4 border-accent">
                <p className="text-foreground font-medium">
                  ARFID is not your fault. Whether driven by sensory differences, fear, or lack of interest, ARFID is a legitimate condition shaped by biology, experiences, and environment. You deserve treatment that respects your experiences and helps you expand possibilities.
                </p>
              </Card>
            </section>

            {/* Health Consequences */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Health Impacts of ARFID</h2>
              <p className="text-muted-foreground">While our approach is weight-neutral, it's important to understand that untreated ARFID can significantly impact physical, emotional, and social health. These impacts validate the importance of seeking treatment.</p>

              <h3 className="text-2xl font-semibold text-primary">Physical Health Impacts</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Nutritional Deficiencies:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Protein deficiency</li>
                    <li>• Iron deficiency anemia</li>
                    <li>• Vitamin D deficiency</li>
                    <li>• B vitamin deficiencies</li>
                    <li>• Calcium deficiency</li>
                    <li>• Fiber deficiency</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Growth Issues (Children):</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Failure to gain weight or height</li>
                    <li>• Delayed puberty</li>
                    <li>• Impaired bone development</li>
                    <li>• Developmental delays</li>
                    <li>• Difficulty concentrating in school</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Mental and Emotional Health Impacts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Severe mealtime anxiety and social anxiety around food situations</li>
                <li>• Depression: Isolation, loneliness, hopelessness about eating "normally"</li>
                <li>• Low self-esteem and feeling "broken"</li>
                <li>• Co-occurring conditions: ARFID frequently co-occurs with anxiety disorders, autism, ADHD, OCD, and depression</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary">Social and Quality of Life Impacts</h3>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Social isolation: Avoiding gatherings, declining invitations, missing cultural experiences</li>
                  <li>• Family and relationship strain: Conflicts over mealtimes, caregiver stress</li>
                  <li>• Educational and career limitations: Difficulty with school lunches, limited career choices</li>
                  <li>• Missed life experiences: Avoiding travel, celebrations, and cultural traditions</li>
                </ul>
              </div>

              <Card className="p-6 bg-primary/5 border-l-4 border-primary">
                <p className="text-foreground">
                  These potential consequences are not shared to frighten you but to validate that what you're experiencing is serious and deserves treatment. Recovery is possible, and you don't have to continue suffering with ARFID's impacts on your life.
                </p>
              </Card>
            </section>

            {/* Treatment Approaches */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Evidence-Based Treatment for ARFID</h2>
              <p className="text-muted-foreground">Recovery from ARFID is possible with specialized treatment that addresses the specific factors maintaining your food avoidance. At Beyond Eating Recovery, we provide individualized, compassionate care tailored to your unique presentation of ARFID.</p>

              <h3 className="text-2xl font-semibold text-primary">Our Treatment Philosophy</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Individualized Approach</h4>
                  <p className="text-sm text-muted-foreground">Treatment tailored to whether your ARFID is sensory-based, fear-based, or lack-of-interest</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">No Pressure or Forcing</h4>
                  <p className="text-sm text-muted-foreground">Collaborative, respectful approach paced to your readiness</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Multidisciplinary Care</h4>
                  <p className="text-sm text-muted-foreground">Team approach with therapist, dietitian, and medical provider</p>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Evidence-Based Therapeutic Approaches</h3>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Cognitive Behavioral Therapy (CBT) for ARFID</h4>
                  <p className="text-muted-foreground mb-4">CBT is the most researched treatment for ARFID and includes:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">For Fear-Based ARFID:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                        <li>• Psychoeducation: Understanding the fear cycle</li>
                        <li>• Cognitive restructuring: Challenging catastrophic thoughts</li>
                        <li>• Gradual exposure: Systematic desensitization to feared foods</li>
                        <li>• Anxiety management: Learning skills to tolerate discomfort</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">For Sensory-Based ARFID:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                        <li>• Food chaining: Gradually introducing similar foods</li>
                        <li>• Sensory exposure: Incremental exposure to new textures</li>
                        <li>• Desensitization: Helping sensory system adapt</li>
                        <li>• Play-based approaches for children</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">For Lack-of-Interest ARFID:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                        <li>• Appetite awareness training</li>
                        <li>• Structured eating: Regular meal times</li>
                        <li>• Behavioral activation: Increasing engagement</li>
                        <li>• Addressing underlying depression or anxiety</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Exposure Therapy</h4>
                  <p className="text-muted-foreground mb-3">A core component of ARFID treatment, exposure involves:</p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground"><strong>1. Looking at food:</strong> Observing the food without touching</p>
                    <p className="text-sm text-muted-foreground"><strong>2. Touching food:</strong> Holding, smelling, exploring texture</p>
                    <p className="text-sm text-muted-foreground"><strong>3. Food near face:</strong> Bringing food close without eating</p>
                    <p className="text-sm text-muted-foreground"><strong>4. Tiny tastes:</strong> Lick, nibble, or small bite</p>
                    <p className="text-sm text-muted-foreground"><strong>5. Larger amounts:</strong> Gradually increasing quantity</p>
                    <p className="text-sm text-muted-foreground"><strong>6. Incorporating into meals:</strong> Regular eating of previously avoided food</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Dialectical Behavior Therapy (DBT) Skills</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">Distress tolerance:</strong> Managing anxiety without avoidance</li>
                    <li>• <strong className="text-foreground">Emotion regulation:</strong> Coping with fear, disgust, or overwhelm</li>
                    <li>• <strong className="text-foreground">Mindfulness:</strong> Being present during eating without judgment</li>
                    <li>• <strong className="text-foreground">Radical acceptance:</strong> Accepting current limitations while working toward change</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Anne Cuthbert's Integrated Approach for ARFID</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Assessment and Understanding</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive evaluation of ARFID type and severity, identifying underlying factors, assessing co-occurring conditions, understanding your goals and readiness</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Stabilization and Safety</h4>
                    <p className="text-sm text-muted-foreground">Addressing immediate medical or nutritional concerns, establishing baseline food security, building therapeutic relationship and trust, reducing shame</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Skill Building</h4>
                    <p className="text-sm text-muted-foreground">Anxiety management techniques, distress tolerance skills, mindfulness and grounding practices, challenging unhelpful thoughts, sensory coping strategies</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Gradual Exposure</h4>
                    <p className="text-sm text-muted-foreground">Creating individualized food hierarchy, systematic desensitization to avoided foods, celebrating small wins, adjusting pace based on progress</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expansion and Integration</h4>
                    <p className="text-sm text-muted-foreground">Incorporating new foods into regular eating, expanding variety within accepted categories, increasing social eating opportunities, building confidence</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">6</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Relapse Prevention and Maintenance</h4>
                    <p className="text-sm text-muted-foreground">Identifying triggers for regression, creating maintenance plan, building ongoing support, preparing for challenging situations</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">What Treatment Looks Like:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Session Structure:</strong> Weekly 50-minute therapy sessions (more frequent if needed)</li>
                  <li>• <strong className="text-foreground">Duration:</strong> ARFID treatment often takes months to years; progress is gradual and individualized</li>
                  <li>• <strong className="text-foreground">Treatment Settings:</strong> Outpatient therapy (most common), Intensive outpatient (for more severe cases), Teletherapy available</li>
                </ul>
              </div>
            </section>

            {/* Recovery and What to Expect */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">What Does ARFID Recovery Look Like?</h2>
              <p className="text-muted-foreground">Recovery from ARFID is possible, though it looks different for each person. For some, recovery means eating a wide variety of foods. For others, it means expanding enough to meet nutritional needs and reduce life interference while maintaining some preferences.</p>

              <h3 className="text-2xl font-semibold text-primary">What Recovery Includes</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Nutritional Adequacy:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Meeting nutritional needs through food</li>
                    <li>• Maintaining healthy weight and growth</li>
                    <li>• Adequate energy for daily activities</li>
                    <li>• Correction of nutritional deficiencies</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Expanded Food Variety:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Eating foods from multiple food groups</li>
                    <li>• Flexibility to eat in various settings</li>
                    <li>• Trying new foods without extreme distress</li>
                    <li>• Having "safe" foods in multiple categories</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Reduced Anxiety and Distress:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Less anxiety around mealtimes</li>
                    <li>• Ability to tolerate non-preferred foods</li>
                    <li>• Reduced fear of aversive consequences</li>
                    <li>• More comfort eating with others</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Improved Quality of Life:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Participating in social situations</li>
                    <li>• Ability to travel and eat in unfamiliar places</li>
                    <li>• Reduced family conflict around eating</li>
                    <li>• Engaging more fully in life</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-primary">Realistic Expectations</h3>
              
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Recovery Does NOT Mean:</h4>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Loving all foods: You don't have to enjoy everything you eat</li>
                    <li>• No food preferences: Everyone has preferences; yours may remain stronger</li>
                    <li>• Eating foods that make you uncomfortable: Some sensory aversions may persist</li>
                    <li>• Being "normal": There's no single "normal" way to eat</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Recovery DOES Mean:</h4>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Having options: Enough food variety to meet needs and participate in life</li>
                    <li>• Reduced suffering: Less anxiety, distress, and impairment</li>
                    <li>• Improved health: Adequate nutrition for wellbeing</li>
                    <li>• Greater freedom: Food limitations don't control your life</li>
                  </ul>
                </div>
              </div>

              <Card className="p-6 bg-accent/10 border-l-4 border-accent">
                <h4 className="font-semibold text-foreground mb-2">Small Wins Matter:</h4>
                <p className="text-muted-foreground">
                  Touching a new food is progress. Taking one bite is progress. Sitting at a table with non-preferred foods is progress. Reduced anxiety is progress. Every small step counts.
                </p>
              </Card>
            </section>

            {/* When to Seek Help */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">When Should You Seek Help for ARFID?</h2>
              <p className="text-muted-foreground">If you or your child is struggling with extremely limited food intake, it's important to seek specialized help. Early intervention leads to better outcomes, but it's never too late to get support.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-primary">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Seek Help If (For Adults):</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• You eat fewer than 20 different foods regularly</li>
                    <li>• Your food limitations cause nutritional deficiencies</li>
                    <li>• You've lost weight unintentionally or struggle to maintain weight</li>
                    <li>• You avoid social situations due to food anxiety</li>
                    <li>• Your eating patterns interfere with work, relationships, or daily life</li>
                    <li>• You experience significant anxiety or distress around eating</li>
                    <li>• You've been told you're "just picky" but you know it's more serious</li>
                    <li>• Your quality of life is significantly impacted by food limitations</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Seek Help If (For Children/Adolescents):</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Your child eats fewer than 20 foods</li>
                    <li>• Your child is not gaining weight or growing as expected</li>
                    <li>• Your child has lost weight</li>
                    <li>• Mealtimes are extremely stressful for child and family</li>
                    <li>• Your child gags, vomits, or has extreme reactions to food</li>
                    <li>• Your child refuses entire food groups</li>
                    <li>• Your child's eating is impacting school, social life, or development</li>
                    <li>• You're exhausted and don't know how to help</li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 bg-destructive/10 border-l-4 border-destructive">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Red Flags Requiring Immediate Attention:
                </h4>
                <p className="text-muted-foreground mb-2">Medical Emergency - Seek Immediate Care:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Rapid, significant weight loss</li>
                  <li>• Severe dehydration</li>
                  <li>• Fainting or dizziness</li>
                  <li>• Cardiac symptoms</li>
                  <li>• Complete refusal to eat or drink</li>
                </ul>
              </Card>

              <div className="text-center space-y-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Link to="/contact">Schedule a Free ARFID Consultation</Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Call us: <a href="tel:360-726-4141" className="text-accent hover:underline">360-726-4141</a>
                </p>
              </div>
            </section>

            {/* Supporting a Loved One */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">How to Support Someone with ARFID</h2>
              <p className="text-muted-foreground">If someone you care about has ARFID, you may feel frustrated, confused, or helpless. Your support matters, and understanding ARFID can help you provide meaningful help without making things worse.</p>

              <h3 className="text-2xl font-semibold text-primary">Understanding ARFID from the Inside</h3>
              
              <div className="bg-primary/5 rounded-lg p-6 space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">It's Not About Willpower:</h4>
                  <p className="text-sm text-muted-foreground">Your loved one isn't "choosing" to be difficult. Sensory sensitivities, fear, or lack of interest are real and involuntary. They likely want to eat more variety but feel unable.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">It's Not Manipulation:</h4>
                  <p className="text-sm text-muted-foreground">Children with ARFID aren't trying to control you. Adults with ARFID aren't seeking attention. The distress is genuine, even if it's hard to understand.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-primary">How to Be Supportive</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-green-500">
                  <h4 className="font-semibold text-foreground mb-3">DO:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Reduce pressure: Pressure to eat makes ARFID worse</li>
                    <li>✓ Offer without forcing: Present new foods alongside safe foods</li>
                    <li>✓ Make mealtimes positive: Keep atmosphere pleasant</li>
                    <li>✓ Celebrate small steps: Any interaction with new food is progress</li>
                    <li>✓ Provide structure: Regular meal and snack times</li>
                    <li>✓ Seek professional help: Don't try to fix ARFID alone</li>
                    <li>✓ Validate their experience: Acknowledge that ARFID is real</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-destructive">
                  <h4 className="font-semibold text-foreground mb-3">DON'T:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✗ Don't force or pressure: "Just try one bite" increases anxiety</li>
                    <li>✗ Don't bribe or reward: Reinforces that food is a chore</li>
                    <li>✗ Don't punish: Consequences for not eating worsen ARFID</li>
                    <li>✗ Don't compare: "Your sibling eats everything" creates shame</li>
                    <li>✗ Don't shame: "You're being ridiculous" invalidates distress</li>
                    <li>✗ Don't minimize: "It's just food, get over it" dismisses condition</li>
                    <li>✗ Don't make mealtime a battle: Creates negative associations</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-primary">What to Say</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Helpful Statements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• "I see that this is really hard for you."</li>
                    <li>• "You don't have to eat it. I just wanted to offer."</li>
                    <li>• "I'm proud of you for sitting at the table."</li>
                    <li>• "What would help you feel more comfortable?"</li>
                    <li>• "Your safe foods will always be available."</li>
                  </ul>
                </div>
                
                <div className="bg-destructive/10 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">What NOT to Say:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• "You're too old to be this picky."</li>
                    <li>• "Just eat it, it's not going to kill you."</li>
                    <li>• "You're making this too hard."</li>
                    <li>• "Other kids/people eat this just fine."</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Additional Resources and Support</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    <Link to="/conditions/co-occurring-issues" className="hover:text-primary">Co-Occurring Issues</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    ARFID frequently co-occurs with autism, ADHD, anxiety, and sensory processing differences.
                  </p>
                  <Link to="/conditions/co-occurring-issues" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
                    Learn more <ExternalLink className="h-3 w-3" />
                  </Link>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    <Link to="/our-approach" className="hover:text-primary">Our Treatment Approach</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn about Anne's individualized approach to eating disorder treatment.
                  </p>
                  <Link to="/our-approach" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
                    Learn more <ExternalLink className="h-3 w-3" />
                  </Link>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    <Link to="/about" className="hover:text-primary">Meet Our Team</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our therapists provide specialized, compassionate ARFID treatment.
                  </p>
                  <Link to="/about" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
                    Learn more <ExternalLink className="h-3 w-3" />
                  </Link>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    <Link to="/services" className="hover:text-primary">Dietitian Services</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Nutrition support for ARFID including meal planning and supplement guidance.
                  </p>
                  <Link to="/services" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
                    Learn more <ExternalLink className="h-3 w-3" />
                  </Link>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">External Resources</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">National Eating Disorders Association (NEDA)</h4>
                    <a href="https://www.nationaleatingdisorders.org" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">www.nationaleatingdisorders.org</a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">ARFID Awareness UK</h4>
                    <a href="https://www.arfidawarenessuk.org" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">www.arfidawarenessuk.org</a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Feeding Matters</h4>
                    <a href="https://www.feedingmatters.org" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">www.feedingmatters.org</a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/conditions">View All Eating Disorders</Link>
                </Button>
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            
            {/* Expert Profile Card */}
            <Card className="p-6 sticky top-24">
              <div className="border-l-4 border-primary pl-4 mb-4">
                <h3 className="text-xl font-bold text-foreground">ARFID Specialist</h3>
              </div>
              
              <div className="mb-4">
                <img 
                  src={anneCuthbertPhoto}
                  alt="Anne Cuthbert, MA, LPC, LMHC - ARFID Treatment Specialist"
                  className="w-full rounded-lg mb-4"
                />
              </div>

              <h4 className="font-bold text-lg text-foreground mb-1">Anne Cuthbert, MA, LPC, LMHC</h4>
              <p className="text-sm text-muted-foreground mb-3">Founder & Owner, Beyond Eating Recovery</p>
              
              <div className="bg-accent/10 rounded px-3 py-1 inline-block mb-4">
                <p className="text-sm font-semibold text-accent">20+ Years Experience</p>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Anne provides specialized treatment for ARFID using evidence-based approaches tailored to each individual's unique presentation. Whether ARFID is driven by sensory sensitivities, fear, or lack of interest, Anne creates a compassionate, collaborative treatment plan that respects your experiences and helps expand possibilities without pressure or force.
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-foreground">Specialties:</p>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> ARFID Treatment (All Types)
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Exposure Therapy
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Anxiety & Phobia Treatment
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Neurodivergent-Affirming Care
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Child & Adult ARFID
                  </p>
                </div>
              </div>

              <Button asChild className="w-full bg-accent hover:bg-accent/90">
                <a href="tel:360-726-4141">Schedule with Anne</a>
              </Button>
            </Card>

            {/* Book CTA Card */}
            <Card className="p-6 bg-accent/5">
              <div className="mb-4">
                <img 
                  src={bookCover}
                  alt="If Your Hunger Could Talk book cover by Anne Cuthbert"
                  className="w-full rounded-lg"
                />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2">Understanding Restrictive Eating</h3>
              <p className="text-sm font-semibold text-foreground mb-4">Free Chapter: When Food Feels Impossible</p>
              
              <p className="text-sm text-muted-foreground mb-4">
                Anne's book explores the emotional and psychological aspects of restrictive eating patterns. Download a free chapter to begin understanding your relationship with food.
              </p>

              <Button asChild className="w-full mb-2 bg-primary hover:bg-primary/90">
                <a href="#download">Download Free Chapter</a>
              </Button>
              
              <a href="#amazon" className="text-sm text-accent hover:underline block text-center">
                View on Amazon
              </a>
            </Card>

            {/* Schedule Consultation Card */}
            <Card className="p-6 bg-primary text-white">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-6 w-6" />
                <h3 className="text-xl font-bold">Ready for ARFID Treatment?</h3>
              </div>

              <p className="text-sm font-semibold mb-3">Free 15-Minute Consultation</p>
              
              <p className="text-sm mb-4 opacity-90">
                Whether you're struggling with sensory sensitivities, fear-based avoidance, or lack of interest in eating, specialized treatment can help. Schedule a free consultation to learn how we can support your recovery.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs opacity-75">Phone</p>
                    <a href="tel:360-726-4141" className="text-sm font-semibold hover:underline">360-726-4141</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs opacity-75">Email</p>
                    <Link to="/contact" className="text-sm font-semibold hover:underline">Contact Form</Link>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs opacity-75">Locations</p>
                    <p className="text-sm font-semibold">Portland, OR & Vancouver, WA</p>
                    <p className="text-xs opacity-75">(Teletherapy Available)</p>
                  </div>
                </div>
              </div>

              <p className="text-xs opacity-75 mb-4">Monday - Friday: 9am - 5pm</p>

              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>

              <p className="text-xs mt-3 opacity-75 text-center">
                We treat ARFID in children, adolescents, and adults.
              </p>
            </Card>

            {/* Crisis Resources Card */}
            <Card className="p-6 bg-muted/50">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <h3 className="font-bold text-foreground">Need Immediate Support?</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">988 Suicide & Crisis Lifeline</p>
                  <p className="text-muted-foreground mb-1">Call or text: 988</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">Crisis Text Line</p>
                  <p className="text-muted-foreground mb-1">Text "HELLO" to 741741</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">NEDA Helpline</p>
                  <p className="text-muted-foreground mb-1">Call: 1-800-931-2237</p>
                  <p className="text-muted-foreground">Monday-Thursday: 9am-9pm ET</p>
                  <p className="text-muted-foreground">Friday: 9am-5pm ET</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 italic">
                If you or your child is experiencing a medical emergency, please call 911 or go to your nearest emergency room.
              </p>
            </Card>
          </aside>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ARFID;