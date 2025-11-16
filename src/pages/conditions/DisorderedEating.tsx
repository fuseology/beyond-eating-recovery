import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Calendar, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const DisorderedEating = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Disordered Eating Treatment in Portland & Vancouver
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Disordered eating exists on a spectrum—you don't need a formal diagnosis to deserve support and healing. If your relationship with food feels chaotic, stressful, or controlling, you're not alone. At Beyond Eating Recovery, we provide compassionate, weight-neutral therapy for disordered eating patterns throughout Oregon and Washington. You deserve peace with food, regardless of where you fall on the eating disorder spectrum.
              </p>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - 70% */}
            <div className="lg:w-[70%]">
              
              {/* What is Disordered Eating */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What is Disordered Eating?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    Disordered eating refers to a wide range of irregular eating behaviors and attitudes toward food, weight, and body image that may not meet the full diagnostic criteria for a clinical eating disorder, but still cause significant distress and impact quality of life.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">The Spectrum Concept</h3>
                  <p className="mb-4">Think of eating behaviors as existing on a continuum:</p>
                  <ul className="space-y-2 mb-6">
                    <li><strong>One end:</strong> Intuitive, flexible eating with food freedom</li>
                    <li><strong>Middle:</strong> Disordered eating patterns (chronic dieting, food rules, body preoccupation)</li>
                    <li><strong>Other end:</strong> Clinical eating disorders (anorexia, bulimia, binge eating disorder)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Important Distinctions</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Disordered eating is extremely common in our diet-obsessed culture</li>
                    <li>Many people with disordered eating never develop a full eating disorder, but their suffering is still real</li>
                    <li>Disordered eating can be just as distressing and life-limiting as diagnosed disorders</li>
                    <li>You don't need to meet diagnostic criteria to deserve help</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <h4 className="font-semibold text-lg mb-2">Why It Matters</h4>
                    <p className="mb-3">Disordered eating often goes unaddressed because people think "it's not bad enough" or "everyone does this." But these patterns:</p>
                    <ul className="space-y-2">
                      <li>• Cause significant psychological distress</li>
                      <li>• Impact relationships and social life</li>
                      <li>• Reduce quality of life and joy</li>
                      <li>• Can escalate into clinical eating disorders</li>
                      <li>• Deserve professional support and treatment</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Cultural Normalization</h3>
                  <p className="mb-4">In diet culture, disordered eating is often praised and encouraged:</p>
                  <ul className="space-y-2 mb-6">
                    <li>"Clean eating" obsessions are celebrated</li>
                    <li>Chronic dieting is normalized</li>
                    <li>Food restriction is seen as "discipline"</li>
                    <li>Body dissatisfaction is considered universal</li>
                    <li>Exercise punishment is called "wellness"</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <p className="text-foreground/90">
                      <strong>The truth:</strong> Just because something is common doesn't mean it's healthy or sustainable.
                    </p>
                  </div>
                </div>
              </section>

              {/* Signs and Patterns */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Signs and Patterns of Disordered Eating</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Disordered eating can take many forms. You may recognize several of these patterns:
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Food-Related Behaviors</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Chronic dieting or cycling through different diets</li>
                    <li>Rigid food rules ("good" foods vs. "bad" foods)</li>
                    <li>Cutting out entire food groups without medical necessity</li>
                    <li>Calorie counting or macro tracking obsessively</li>
                    <li>Skipping meals regularly</li>
                    <li>Eating in secret or feeling ashamed about eating</li>
                    <li>Feeling out of control around certain foods</li>
                    <li>Restricting during the day, overeating at night</li>
                    <li>Anxiety about eating in social situations</li>
                    <li>Needing to "earn" food through exercise</li>
                    <li>Compensating for eating with restriction or exercise</li>
                    <li>Food rituals (specific timing, portions, preparation)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Body Image Concerns</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Constant body checking (mirror, scale, measurements, clothes fit)</li>
                    <li>Negative self-talk about body and appearance</li>
                    <li>Avoiding photos, mirrors, or seeing your reflection</li>
                    <li>Comparing your body to others constantly</li>
                    <li>Feeling your worth is tied to your weight or shape</li>
                    <li>Distress about normal body changes</li>
                    <li>Avoiding activities due to body concerns (swimming, intimacy, etc.)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Weight-Focused Behaviors</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Frequent weighing (multiple times daily or weekly)</li>
                    <li>Fear of specific numbers on the scale</li>
                    <li>Feeling the day is "ruined" by scale number</li>
                    <li>Setting arbitrary weight goals</li>
                    <li>Restricting after weight gain</li>
                    <li>Weight cycling (yo-yo dieting)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Exercise Patterns</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Feeling guilty or anxious if you can't exercise</li>
                    <li>Exercising despite injury, illness, or exhaustion</li>
                    <li>Exercise to "burn off" food or "earn" eating</li>
                    <li>Distress if exercise routine is disrupted</li>
                    <li>Exercise feeling like punishment rather than pleasure</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Emotional & Psychological Signs</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Food and body thoughts occupying significant mental space</li>
                    <li>Anxiety around food choices and eating situations</li>
                    <li>Guilt or shame after eating certain foods</li>
                    <li>Feeling food has power over you</li>
                    <li>Using food to cope with emotions (or restricting to avoid emotions)</li>
                    <li>Social withdrawal due to food/body concerns</li>
                    <li>Difficulty concentrating due to hunger or food preoccupation</li>
                    <li>Mood swings related to eating patterns</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">"Wellness" Disguises</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Following restrictive "lifestyle" plans</li>
                    <li>Obsessing over "clean eating"</li>
                    <li>Orthorexia patterns (see our <a href="/conditions/orthorexia" className="text-accent hover:underline">Orthorexia page</a>)</li>
                    <li>Justifying restriction as "health"</li>
                    <li>Using fitness tracking obsessively</li>
                  </ul>
                </div>
              </section>

              {/* Common Types */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Common Types of Disordered Eating</h2>
                <div className="prose prose-lg max-w-none">
                  
                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Chronic Dieting</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Constantly starting new diets</li>
                    <li>Restrict-binge-restrict cycles</li>
                    <li>Viewing foods as "allowed" or "forbidden"</li>
                    <li>Believing the next diet will finally work</li>
                    <li>Weight cycling and metabolic adaptation</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Emotional Eating</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Using food to cope with stress, boredom, loneliness, anxiety</li>
                    <li>Eating not related to physical hunger</li>
                    <li>Feeling out of control during emotional eating</li>
                    <li>Guilt and shame afterward</li>
                    <li>Restriction in response to emotional eating</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Chaotic Eating</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Unpredictable eating patterns</li>
                    <li>No consistent meal structure</li>
                    <li>Swinging between restriction and overeating</li>
                    <li>Grazing all day or eating one large meal</li>
                    <li>Eating in response to external cues rather than internal signals</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Food Rituals & Rules</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Specific timing requirements for eating</li>
                    <li>Foods must be prepared in exact ways</li>
                    <li>Eating in particular order or arrangements</li>
                    <li>Needing complete control over food preparation</li>
                    <li>Extreme anxiety when rituals are disrupted</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Body Checking & Monitoring</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Constant scale weighing</li>
                    <li>Measuring body parts</li>
                    <li>Mirror checking or complete mirror avoidance</li>
                    <li>Comparing body to others</li>
                    <li>Pinching, poking, or examining body repeatedly</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Social Food Anxiety</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Avoiding restaurants or social eating</li>
                    <li>Pre-planning exactly what to eat</li>
                    <li>Restricting before/after social events</li>
                    <li>Eating beforehand to avoid eating publicly</li>
                    <li>Lying about having already eaten</li>
                  </ul>
                </div>
              </section>

              {/* Causes and Contributing Factors */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Causes and Contributing Factors</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Disordered eating develops from multiple intersecting influences:
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Diet Culture</h3>
                  <p className="mb-4">The single biggest contributor to disordered eating is living in a culture that:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Glorifies thinness and demonizes larger bodies</li>
                    <li>Equates weight with health and morality</li>
                    <li>Normalizes food restriction and body dissatisfaction</li>
                    <li>Markets endless diets and "wellness" programs</li>
                    <li>Promotes the fantasy that controlling your body equals controlling your life</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Weight Stigma</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Experiencing weight-based discrimination or bullying</li>
                    <li>Anti-fat bias in healthcare, media, employment</li>
                    <li>Internalized weight stigma</li>
                    <li>Fear of gaining weight or being in a larger body</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Family Influences</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Parents' own dieting behaviors and food attitudes</li>
                    <li>Comments about weight, eating, or appearance</li>
                    <li>Family emphasis on appearance</li>
                    <li>Food used for reward, punishment, or emotional regulation</li>
                    <li>Family dieting together</li>
                    <li>Cultural food traditions lost to assimilation</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Psychological Factors</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Perfectionism and need for control</li>
                    <li>Anxiety or depression</li>
                    <li>Low self-esteem</li>
                    <li>Difficulty with emotions</li>
                    <li>Trauma history</li>
                    <li>Neurodivergence (ADHD, autism)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Life Transitions & Stress</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Puberty and body changes</li>
                    <li>College transitions</li>
                    <li>Relationship changes</li>
                    <li>Career stress</li>
                    <li>Major life changes</li>
                    <li>Loss or grief</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Social Media & Media</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Constant exposure to edited, filtered images</li>
                    <li>Comparison culture</li>
                    <li>"Fitspiration" and "thinspiration"</li>
                    <li>Diet and wellness influencers</li>
                    <li>Before/after content</li>
                    <li>Algorithm-driven body comparison</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Systemic Oppression</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Racism and cultural erasure</li>
                    <li>Sexism and objectification</li>
                    <li>Homophobia and transphobia</li>
                    <li>Ableism</li>
                    <li>Classism</li>
                    <li>Intersection of multiple marginalized identities</li>
                  </ul>
                </div>
              </section>

              {/* Why It Matters */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Why Disordered Eating Matters</h2>
                <div className="prose prose-lg max-w-none">
                  
                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">It Impacts Quality of Life</h3>
                  <p className="mb-4">Even without a formal diagnosis, disordered eating:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Consumes mental and emotional energy</li>
                    <li>Reduces joy and spontaneity around food</li>
                    <li>Limits social engagement and relationships</li>
                    <li>Creates anxiety and stress</li>
                    <li>Damages self-esteem</li>
                    <li>Prevents full presence in life</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">It Can Escalate</h3>
                  <p className="mb-6">
                    Disordered eating exists on a continuum and can progress to clinical eating disorders. Early intervention prevents escalation.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">It's Often Invisible</h3>
                  <p className="mb-6">
                    Many people with disordered eating appear "healthy" and high-functioning. Internal struggle may not be visible to others.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">It's Extremely Common</h3>
                  <p className="mb-6">
                    Research suggests that up to 50% of people engage in some form of disordered eating. The normalization doesn't make it harmless.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">It Perpetuates Suffering</h3>
                  <p className="mb-4">Disordered eating keeps people trapped in cycles of:</p>
                  <div className="bg-secondary/20 p-6 rounded-lg my-6">
                    <p className="text-center text-lg font-medium">
                      Restriction → Deprivation → Overeating → Guilt → More restriction
                    </p>
                    <p className="text-center text-sm mt-2">
                      This cycle creates both physical and psychological distress
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">It Disconnects You from Your Body</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Ignoring hunger and fullness cues</li>
                    <li>Overriding body wisdom with external rules</li>
                    <li>Losing trust in your body's signals</li>
                    <li>Creating adversarial relationship with your own body</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <h4 className="font-semibold text-lg mb-2">Recovery Offers Freedom</h4>
                    <p className="mb-3">Healing from disordered eating creates:</p>
                    <ul className="space-y-2">
                      <li>• Mental space for meaningful pursuits</li>
                      <li>• Improved relationships</li>
                      <li>• Better quality of life</li>
                      <li>• Peace and ease around food</li>
                      <li>• Body respect and compassion</li>
                      <li>• Freedom to live fully</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Health Consequences */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Health Consequences</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    While disordered eating may not always cause the severe medical complications of clinical eating disorders, it still impacts health:
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Physical Effects</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Metabolic adaptation (slowed metabolism from chronic dieting)</li>
                    <li>Nutritional deficiencies</li>
                    <li>Energy fluctuations and fatigue</li>
                    <li>Digestive problems (constipation, bloating, irregular digestion)</li>
                    <li>Disrupted hunger/fullness cues</li>
                    <li>Menstrual irregularities</li>
                    <li>Sleep disturbances</li>
                    <li>Weakened immune system</li>
                    <li>Hair, skin, and nail problems</li>
                    <li>Increased injury risk (from over-exercise)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Psychological Effects</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Increased anxiety and depression</li>
                    <li>Obsessive thoughts about food and body</li>
                    <li>Reduced concentration and productivity</li>
                    <li>Mood swings</li>
                    <li>Irritability</li>
                    <li>Social isolation</li>
                    <li>Body image distress</li>
                    <li>Reduced self-esteem</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Relationship Impact</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Avoiding social situations involving food</li>
                    <li>Conflicts with family/friends about eating</li>
                    <li>Reduced intimacy due to body shame</li>
                    <li>Difficulty being present with loved ones</li>
                    <li>Food/body preoccupation interfering with connection</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Life Limitation</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Missing out on experiences due to food/body concerns</li>
                    <li>Career or academic impact from preoccupation</li>
                    <li>Avoiding activities (travel, events, hobbies)</li>
                    <li>Reduced joy and spontaneity</li>
                    <li>Life feels smaller and more controlled</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <h4 className="font-semibold text-lg mb-2">The Yo-Yo Dieting Effect</h4>
                    <p className="mb-3">Chronic dieting creates:</p>
                    <ul className="space-y-2">
                      <li>• Weight cycling (potentially more harmful than stable higher weight)</li>
                      <li>• Increased risk of developing eating disorders</li>
                      <li>• Poorer relationship with food over time</li>
                      <li>• Metabolic changes</li>
                      <li>• Psychological distress</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Assessment and Recognition */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Assessment and Recognition</h2>
                <div className="prose prose-lg max-w-none">
                  
                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">There is No Formal Diagnosis for "Disordered Eating"</h3>
                  <p className="mb-6">
                    Unlike clinical eating disorders, disordered eating doesn't have specific DSM-5 criteria. This can make it feel less valid—but your suffering is real regardless of diagnosis.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Self-Reflection Questions</h3>
                  <p className="mb-4">Ask yourself:</p>
                  <ul className="space-y-3 mb-6">
                    <li>Do I spend significant time thinking about food, weight, or my body?</li>
                    <li>Do I feel anxious or guilty around eating?</li>
                    <li>Do I have rigid rules about what, when, or how much I can eat?</li>
                    <li>Do I avoid social situations because of food concerns?</li>
                    <li>Do I feel my worth is tied to my weight or appearance?</li>
                    <li>Do my eating patterns cause me distress?</li>
                    <li>Do I feel out of control around food?</li>
                    <li>Am I frequently starting new diets or "lifestyle changes"?</li>
                    <li>Do I exercise to compensate for eating?</li>
                    <li>Has my relationship with food and body gotten worse over time?</li>
                  </ul>

                  <p className="text-lg font-medium mb-6">
                    If you answered "yes" to several questions, you may benefit from professional support.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Assessment by Professionals</h3>
                  <p className="mb-4">A comprehensive evaluation includes:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Clinical interview about eating patterns, history, and concerns</li>
                    <li>Assessment of thoughts and beliefs about food and body</li>
                    <li>Evaluation of psychological well-being</li>
                    <li>Understanding of diet history</li>
                    <li>Medical screening if indicated</li>
                    <li>Discussion of how eating patterns impact life</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <h4 className="font-semibold text-lg mb-2">You Don't Need to Prove You're "Sick Enough"</h4>
                    <ul className="space-y-2">
                      <li>• If your relationship with food causes distress, you deserve support</li>
                      <li>• Early intervention prevents escalation</li>
                      <li>• Healing is possible at any stage</li>
                      <li>• You don't need to get worse to get help</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Treatment Approach */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Treatment Approach at Beyond Eating Recovery</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-lg">
                    Our approach to disordered eating focuses on healing your relationship with food, body, and self—not on controlling your weight or imposing new rules.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Anne's 6-Step Treatment Process</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">1. Stabilize Eating Patterns</h4>
                      <ul className="space-y-2">
                        <li>Establishing regular, adequate eating</li>
                        <li>Challenging restriction and deprivation</li>
                        <li>Rebuilding trust in hunger/fullness cues</li>
                        <li>No calorie counting or meal plans—focus on internal wisdom</li>
                        <li>Medical assessment if needed</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">2. Challenge Food Rules and Diet Mentality</h4>
                      <ul className="space-y-2">
                        <li>Identifying and dismantling rigid food rules</li>
                        <li>Exposing diet culture's lies</li>
                        <li>Permission to eat all foods</li>
                        <li>Challenging "good food/bad food" thinking</li>
                        <li>Introduction to Intuitive Eating principles</li>
                        <li>Legalizing previously forbidden foods</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">3. Explore Emotional Triggers</h4>
                      <ul className="space-y-2">
                        <li>Understanding what drives disordered eating</li>
                        <li>Identifying emotions behind behaviors</li>
                        <li>Developing coping strategies beyond food and body control</li>
                        <li>Building emotional awareness and regulation skills</li>
                        <li>Processing difficult feelings</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">4. Heal Body Image</h4>
                      <ul className="space-y-2">
                        <li>Challenging body image distortion and dissatisfaction</li>
                        <li>Body neutrality and respect practices</li>
                        <li>Understanding weight stigma and internalized bias</li>
                        <li>Grieving diet culture losses</li>
                        <li>Body liberation work</li>
                        <li>Media literacy and social media boundaries</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">5. Address Underlying Issues</h4>
                      <ul className="space-y-2">
                        <li>Trauma-informed care</li>
                        <li>Processing adverse experiences</li>
                        <li>Understanding eating patterns as coping mechanisms</li>
                        <li>Addressing anxiety, depression, perfectionism</li>
                        <li>Exploring identity beyond diet culture</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">6. Build Sustainable Recovery</h4>
                      <ul className="space-y-2">
                        <li>Developing Intuitive Eating skills</li>
                        <li>Creating food flexibility and freedom</li>
                        <li>Building authentic self-concept</li>
                        <li>Relapse prevention strategies</li>
                        <li>Reconnecting with values and meaningful life</li>
                        <li>Cultivating self-compassion</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Weight-Neutral, HAES® Approach</h3>
                  <p className="mb-4">We do NOT focus on weight change. Instead, we focus on:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Normalizing eating patterns</li>
                    <li>Reducing food and body preoccupation</li>
                    <li>Improving psychological well-being</li>
                    <li>Building trust with your body</li>
                    <li>Health behaviors accessible at any size</li>
                    <li>Quality of life and functioning</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Intuitive Eating Framework</h3>
                  <p className="mb-4">We use the 10 principles of Intuitive Eating:</p>
                  <ol className="space-y-2 mb-6 list-decimal list-inside">
                    <li>Reject the diet mentality</li>
                    <li>Honor your hunger</li>
                    <li>Make peace with food</li>
                    <li>Challenge the food police</li>
                    <li>Discover the satisfaction factor</li>
                    <li>Feel your fullness</li>
                    <li>Cope with emotions with kindness</li>
                    <li>Respect your body</li>
                    <li>Movement—feel the difference</li>
                    <li>Honor your health with gentle nutrition</li>
                  </ol>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Treatment Modalities</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Individual therapy with eating disorder specialist</li>
                    <li>Dietitian support (HAES® approach, available with Stephanie Okumura, MS, RDN)</li>
                    <li>Group therapy for connection and shared experience</li>
                    <li>LGBTQIA+ specialized group (Thursdays 6-7:15pm, $40/session)</li>
                    <li>Cognitive-behavioral techniques</li>
                    <li>Dialectical behavior therapy (DBT) skills</li>
                    <li>Acceptance and commitment therapy (ACT)</li>
                    <li>Trauma-informed approaches</li>
                  </ul>
                </div>
              </section>

              {/* Recovery */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Recovery and What Freedom Looks Like</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-lg font-medium">
                    Recovery from disordered eating IS possible: You can fully heal your relationship with food and body, even if you've struggled for years or decades.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Food Freedom Looks Like</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Eating when hungry, stopping when satisfied—without overthinking</li>
                    <li>Enjoying all foods without guilt or compensation</li>
                    <li>Flexibility around eating (no rigid rules)</li>
                    <li>Peace at meals and social eating situations</li>
                    <li>Food as nourishment AND pleasure</li>
                    <li>No more food-related anxiety</li>
                    <li>Trusting your body's wisdom</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Body Respect Looks Like</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Reduced body checking and comparison</li>
                    <li>Wearing clothes that feel good now (not when you reach a goal)</li>
                    <li>Engaging in activities regardless of body size/shape</li>
                    <li>Less time thinking about appearance</li>
                    <li>Compassion for your body</li>
                    <li>Understanding your body's natural diversity</li>
                    <li>Freedom from pursuing weight change</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Life Expansion Looks Like</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Mental space freed up for meaningful pursuits</li>
                    <li>Improved relationships and presence</li>
                    <li>Spontaneity and flexibility</li>
                    <li>Reconnection with joy and pleasure</li>
                    <li>Living according to your values</li>
                    <li>Energy directed toward what matters</li>
                    <li>Full participation in life</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Timeline</h3>
                  <p className="mb-4">Recovery is not linear, but general phases include:</p>
                  <ul className="space-y-3 mb-6">
                    <li><strong>Early recovery (weeks 1-12):</strong> Learning new concepts, challenging initial beliefs, beginning behavior change</li>
                    <li><strong>Middle recovery (months 3-12):</strong> Deeper integration, emotional work, identity shifts beyond diet culture</li>
                    <li><strong>Late recovery (12+ months):</strong> Sustained freedom, occasional challenges navigated with tools, living fully</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <h4 className="font-semibold text-lg mb-2">The Truth About Weight</h4>
                    <p className="text-foreground/90">
                      Many people fear recovery means unlimited weight gain. Reality: When you stop restricting and allow your body to find its natural set point, weight typically stabilizes. Bodies have genetic blueprints—restriction fights biology, while Intuitive Eating honors it.
                    </p>
                  </div>
                </div>
              </section>

              {/* When to Seek Help */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">When to Seek Help</h2>
                <div className="prose prose-lg max-w-none">
                  
                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Seek Support If You:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Feel controlled by food thoughts and rules</li>
                    <li>Experience distress about eating or body</li>
                    <li>Avoid social situations due to food/body concerns</li>
                    <li>Have tried multiple diets with worsening relationship with food</li>
                    <li>Feel trapped in restrict-binge cycles</li>
                    <li>Exercise compulsively or as punishment</li>
                    <li>Notice disordered eating impacting quality of life</li>
                    <li>Want to heal your relationship with food and body</li>
                    <li>Recognize patterns escalating over time</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Seek Immediate Help If:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Thoughts of self-harm or suicide</li>
                    <li>Severe restriction causing medical symptoms</li>
                    <li>Bingeing and purging behaviors developing</li>
                    <li>Significant weight changes (loss or gain) causing distress</li>
                    <li>Unable to function in daily life</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <h4 className="font-semibold text-lg mb-3">You Don't Need to Wait Until It's "Bad Enough"</h4>
                    <ul className="space-y-2">
                      <li>✓ Early intervention is most effective</li>
                      <li>✓ You don't need a diagnosis to deserve help</li>
                      <li>✓ If it's impacting your life, it matters</li>
                      <li>✓ Recovery is possible at any stage</li>
                    </ul>
                  </div>

                  <div className="text-center my-8 p-6 bg-primary/5 rounded-lg">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Taking the First Step</h3>
                    <p className="mb-6">
                      Contact Beyond Eating Recovery at <a href="tel:360-726-4141" className="text-accent hover:underline font-semibold">360-726-4141</a> to schedule a consultation. We provide compassionate, weight-neutral support for healing disordered eating throughout Oregon and Washington.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white mb-4">
                      Schedule Free Consultation
                    </Button>
                    
                    <div className="mt-6 pt-6 border-t border-muted">
                      <h4 className="font-semibold mb-3">Lower-Barrier Options:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Battle of the Binge 4-week self-study course: <a href="https://battleofthebinge.com" className="text-accent hover:underline">battleofthebinge.com</a></li>
                        <li>Anne's book: "If Your Hunger Could Talk" (available on Amazon)</li>
                        <li>Free resources on our website</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Supporting a Loved One */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Supporting a Loved One with Disordered Eating</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    If someone you care about is struggling:
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Do:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Express concern from a place of care (not appearance-focused)</li>
                    <li>Listen without judgment</li>
                    <li>Avoid commenting on their body, food intake, or weight</li>
                    <li>Support them in finding professional help</li>
                    <li>Educate yourself about diet culture and HAES®</li>
                    <li>Create food-neutral environments</li>
                    <li>Be patient—recovery takes time</li>
                    <li>Examine your own relationship with food/body</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Don't:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>❌ Comment on their eating ("You should eat more/less")</li>
                    <li>❌ Compliment weight loss or comment on weight gain</li>
                    <li>❌ Engage in diet talk around them</li>
                    <li>❌ Make it about you</li>
                    <li>❌ Try to control their eating</li>
                    <li>❌ Give unsolicited advice</li>
                    <li>❌ Participate in diet culture yourself</li>
                    <li>❌ Dismiss their struggles</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What to Say:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>"I've noticed you seem stressed about food. I'm here if you want to talk."</li>
                    <li>"Your worth has nothing to do with your weight or what you eat."</li>
                    <li>"I care about you and want to support your healing."</li>
                    <li>"Would it help if I found you some resources or therapists?"</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What NOT to Say:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>"You look great!" (if they've lost weight)</li>
                    <li>"Just don't think about it so much."</li>
                    <li>"Everyone struggles with food sometimes."</li>
                    <li>"Have you tried [insert diet]?"</li>
                    <li>"I wish I had your discipline."</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Family Environment Matters</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Stop diet talk at home</li>
                    <li>Keep all foods emotionally equivalent ("no good/bad foods")</li>
                    <li>Don't comment on anyone's body</li>
                    <li>Model Intuitive Eating if possible</li>
                    <li>Examine family patterns around food and body</li>
                    <li>Challenge weight stigma in your own thinking</li>
                  </ul>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Orthorexia</h3>
                      <p className="text-muted-foreground mb-4">
                        Learn about orthorexia, the obsession with "clean" and "healthy" eating.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/conditions/orthorexia">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Binge Eating Disorder</h3>
                      <p className="text-muted-foreground mb-4">
                        Understand binge eating disorder and the restrict-binge cycle.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/conditions/binge-eating-disorder">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Body Shame Counseling</h3>
                      <p className="text-muted-foreground mb-4">
                        Address weight stigma and body shame with specialized counseling.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/body-shame">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Health At Every Size</h3>
                      <p className="text-muted-foreground mb-4">
                        Learn about our weight-neutral, HAES®-aligned treatment philosophy.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/health-at-every-size">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <Button variant="default" size="lg" asChild>
                    <a href="/conditions">View All Eating Disorders</a>
                  </Button>
                </div>
              </section>

            </div>

            {/* Sidebar - 30% */}
            <aside className="lg:w-[30%] space-y-6">
              {/* Expert Profile Card */}
              <Card className="sticky top-4">
                <CardContent className="pt-6">
                  <div className="border-l-4 border-primary pl-4 mb-4">
                    <h3 className="text-lg font-semibold text-primary">Disordered Eating Specialist</h3>
                  </div>
                  
                  <img 
                    src={anneCuthbertPhoto} 
                    alt="Anne Cuthbert, MA, LPC, LMHC - Disordered Eating Treatment Specialist"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <h4 className="text-xl font-bold text-primary mb-1">Anne Cuthbert, MA, LPC, LMHC</h4>
                  <p className="text-sm text-muted-foreground mb-3">Founder & Owner, Beyond Eating Recovery</p>
                  
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    20+ Years Experience
                  </div>
                  
                  <p className="text-sm mb-4">
                    Anne specializes in helping people heal from disordered eating using Intuitive Eating and HAES® approaches. You don't need a diagnosis to deserve support.
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Disordered Eating Treatment</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Intuitive Eating Counselor</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Diet Culture Recovery</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">HAES® Approach</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Schedule with Anne
                  </Button>
                </CardContent>
              </Card>

              {/* Book CTA Card */}
              <Card className="bg-accent/5">
                <CardContent className="pt-6">
                  <img 
                    src={bookCover} 
                    alt="If Your Hunger Could Talk book cover by Anne Cuthbert"
                    className="w-full h-48 object-contain mb-4"
                  />
                  
                  <h3 className="text-lg font-semibold text-primary mb-2">Heal Your Relationship with Food</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    "If Your Hunger Could Talk"
                  </p>
                  
                  <p className="text-sm mb-4">
                    A compassionate guide to understanding emotional eating, healing your relationship with food, and finding peace in your body.
                  </p>
                  
                  <Button className="w-full mb-2" variant="default" asChild>
                    <a href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" target="_blank" rel="noopener noreferrer">
                      Get the Book on Amazon
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Schedule Consultation Card */}
              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 mr-2" />
                    <h3 className="text-lg font-semibold">Ready to Heal?</h3>
                  </div>
                  
                  <p className="text-sm font-medium mb-3">Free 15-Minute Consultation</p>
                  
                  <p className="text-sm mb-4 opacity-90">
                    We provide compassionate, weight-neutral therapy for disordered eating throughout Oregon and Washington.
                  </p>
                  
                  <div className="space-y-3 mb-4 text-sm">
                    <div className="flex items-start">
                      <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>360-726-4141</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>contact@beyondeatingrecovery.com</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Portland, OR & Vancouver, WA<br/>Telehealth Available Statewide</span>
                    </div>
                  </div>
                  
                  <p className="text-xs mb-4 opacity-80">
                    Office Hours: Monday - Friday, 9am - 5pm
                  </p>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Crisis Resources Card */}
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-5 h-5 mr-2 text-primary" />
                    <h3 className="text-lg font-semibold text-primary">Need Immediate Support?</h3>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold mb-1">988 Suicide & Crisis Lifeline</p>
                      <p className="text-muted-foreground mb-1">Call or text: 988</p>
                      <p className="text-xs text-muted-foreground">Available 24/7</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">NEDA Helpline</p>
                      <p className="text-muted-foreground mb-1">Call: 1-800-931-2237</p>
                      <p className="text-xs text-muted-foreground">Mon-Thu: 9am-9pm ET | Fri: 9am-5pm ET</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">Crisis Text Line</p>
                      <p className="text-muted-foreground mb-1">Text "NEDA" to 741741</p>
                      <p className="text-xs text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    If you're experiencing a medical emergency, call 911 or go to your nearest emergency room.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DisorderedEating;