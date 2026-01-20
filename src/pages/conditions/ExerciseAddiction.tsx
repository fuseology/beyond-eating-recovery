import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, AlertCircle, ExternalLink, CheckCircle, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const ExerciseAddiction = () => {
  return (
    <>
      <Helmet>
        <title>Exercise Addiction & Compulsive Exercise Treatment | Portland & Vancouver</title>
        <meta 
          name="description" 
          content="Specialized treatment for exercise addiction and compulsive exercise. Rediscover joyful, flexible movement. Address co-occurring eating disorders. Oregon & Washington—call 360-726-4141." 
        />
        <meta 
          name="keywords" 
          content="exercise addiction treatment, compulsive exercise therapy, over-exercise counseling Portland, exercise addiction help Vancouver WA, joyful movement, overtraining treatment, compensatory exercise, eating disorder and exercise, RED-S treatment, HAES exercise approach, telehealth Oregon Washington" 
        />
      </Helmet>
      <BreadcrumbSchema />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow">
          {/* Breadcrumb Navigation */}
          <div className="bg-secondary/30 py-3 border-b border-border">
            <div className="container mx-auto px-4">
              <nav className="text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-muted-foreground">
                  <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><span className="mx-2">/</span></li>
                  <li><Link to="/conditions" className="hover:text-primary transition-colors">Eating Disorders</Link></li>
                  <li><span className="mx-2">/</span></li>
                  <li className="text-foreground font-medium">Exercise Addiction</li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-b from-secondary/20 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Exercise Addiction & Compulsive Exercise Treatment in Portland & Vancouver
                </h1>
                <p className="text-lg text-foreground leading-relaxed">
                  When exercise shifts from enjoyable movement to a rigid obligation—when missing a workout creates panic, when you exercise despite injury or exhaustion, when workouts feel like punishment—you may be experiencing exercise addiction or compulsive exercise. Often hidden behind praise for "dedication" and "discipline," compulsive exercise frequently co-occurs with eating disorders and causes real physical and psychological harm. At Beyond Eating Recovery, we provide compassionate, specialized treatment for exercise addiction throughout Oregon and Washington, helping you rediscover joyful, flexible movement.
                </p>
              </div>
            </div>
          </section>

          {/* Two-Column Layout */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - 70% */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Section 1: What is Exercise Addiction? */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">What is Exercise Addiction?</h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Exercise addiction (also called compulsive exercise, obligatory exercise, or exercise dependence) is a pattern of excessive, rigid exercise behavior that continues despite negative physical, psychological, or social consequences. The person feels compelled to exercise and experiences significant distress, anxiety, or guilt when unable to do so.
                    </p>

                    <div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-primary my-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Key Features</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Compulsive need to exercise regardless of circumstances</li>
                        <li>• Loss of control over exercise behavior</li>
                        <li>• Continuation despite harm (injury, exhaustion, life interference)</li>
                        <li>• Withdrawal symptoms (anxiety, irritability, guilt) when unable to exercise</li>
                        <li>• Exercise as priority over relationships, work, health, rest</li>
                        <li>• Rigid rules about exercise (type, duration, intensity, timing)</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Important Distinctions</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="bg-primary/10 p-5 rounded-lg border-l-4 border-primary">
                        <h4 className="font-semibold text-primary mb-3">Healthy Exercise</h4>
                        <ul className="space-y-2 text-sm text-foreground">
                          <li>• Flexible and enjoyable</li>
                          <li>• Enhances life</li>
                          <li>• Can be skipped without distress</li>
                          <li>• Responds to body's needs</li>
                          <li>• Part of balanced life</li>
                        </ul>
                      </div>
                      <div className="bg-destructive/10 p-5 rounded-lg border-l-4 border-destructive">
                        <h4 className="font-semibold text-destructive mb-3">Exercise Addiction</h4>
                        <ul className="space-y-2 text-sm text-foreground">
                          <li>• Rigid and obligatory</li>
                          <li>• Interferes with life</li>
                          <li>• Creates intense anxiety if missed</li>
                          <li>• Ignores body's signals</li>
                          <li>• Center of life</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg my-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">Exercise Addiction vs. High-Level Athletic Training</h4>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <p className="font-semibold text-primary mb-2">Athletes:</p>
                          <ul className="space-y-1 text-sm text-foreground">
                            <li>• Training with rest periods</li>
                            <li>• Coaching guidance</li>
                            <li>• Performance goals</li>
                            <li>• Ability to take breaks</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-primary mb-2">Exercise Addiction:</p>
                          <ul className="space-y-1 text-sm text-foreground">
                            <li>• Rigid rules self-imposed</li>
                            <li>• No adequate rest</li>
                            <li>• Driven by anxiety/compulsion</li>
                            <li>• Continues despite declining performance</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">The "Wellness" Disguise</h3>
                      <p className="text-foreground mb-3">
                        In fitness-obsessed culture, exercise addiction is often celebrated as:
                      </p>
                      <ul className="space-y-2 text-foreground">
                        <li>• "Dedication" or "discipline"</li>
                        <li>• "Healthy lifestyle" or "fitness goals"</li>
                        <li>• "Inspiration" or "motivation"</li>
                        <li>• "Self-care" or "wellness"</li>
                      </ul>
                      <p className="text-foreground mt-4 font-medium">
                        This cultural praise makes it harder to recognize the problem.
                      </p>
                    </div>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Clinical Status</h3>
                    <p className="text-foreground leading-relaxed">
                      Exercise addiction is not a formal DSM-5 diagnosis but is widely recognized clinically. It's considered a behavioral addiction similar to gambling disorder. Research shows it shares features with substance addictions:
                    </p>
                    <ul className="space-y-2 text-foreground ml-6 mt-3">
                      <li>• <strong>Tolerance</strong> (needing more exercise for same effect)</li>
                      <li>• <strong>Withdrawal</strong> (distress when unable to exercise)</li>
                      <li>• <strong>Loss of control</strong></li>
                      <li>• <strong>Negative consequences despite continuation</strong></li>
                    </ul>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive mt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Co-Occurrence with Eating Disorders</h3>
                      <p className="text-foreground mb-3">
                        Exercise addiction frequently accompanies eating disorders:
                      </p>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>39-48%</strong> of people with eating disorders exhibit compulsive exercise</li>
                        <li>• Often used to control weight, compensate for eating, or "burn calories"</li>
                        <li>• Can be present in anorexia, bulimia, binge eating disorder, OSFED</li>
                        <li>• May continue even after other eating disorder behaviors have stopped</li>
                        <li>• Often the last symptom to resolve in recovery</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 2: Signs and Symptoms */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Signs and Symptoms</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Behavioral Signs</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Cannot miss workouts regardless of circumstances (illness, injury, exhaustion, obligations)</li>
                        <li>• Exercising despite injury or ignoring pain signals</li>
                        <li>• Rigid exercise schedule that cannot be modified</li>
                        <li>• Specific exercise requirements (type, duration, intensity must be met)</li>
                        <li>• Multiple daily workouts or excessive duration</li>
                        <li>• Prioritizing exercise over social events, family, work, rest</li>
                        <li>• Secretive exercise (sneaking workouts, lying about exercise)</li>
                        <li>• Compensatory exercise after eating certain foods</li>
                        <li>• Exercising when ill or exhausted</li>
                        <li>• Structuring life around workout schedule</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Emotional & Psychological Signs</h3>
                      <div className="bg-secondary/20 p-6 rounded-lg">
                        <ul className="space-y-2 text-foreground">
                          <li>• Intense anxiety or panic when unable to exercise</li>
                          <li>• Guilt, shame, or depression after missing workouts</li>
                          <li>• Irritability or anger when exercise is interrupted</li>
                          <li>• Preoccupation with exercise (planning, thinking about constantly)</li>
                          <li>• Exercise as mood regulator (only way to feel okay)</li>
                          <li>• Self-worth tied to exercise performance or consistency</li>
                          <li>• "Earning" food through exercise mentality</li>
                          <li>• Fear of weight gain or body changes if exercise is missed</li>
                          <li>• All-or-nothing thinking ("If I can't do full workout, not worth doing")</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Physical Signs</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Chronic injuries that don't heal (continuing to exercise prevents recovery)</li>
                        <li>• Overtraining syndrome (fatigue, declining performance, mood changes)</li>
                        <li>• Frequent illness (suppressed immune system)</li>
                        <li>• Persistent fatigue and exhaustion</li>
                        <li>• Menstrual irregularities or loss of period (in those who menstruate)</li>
                        <li>• Sleep disturbances (despite physical exhaustion)</li>
                        <li>• Decreased athletic performance (paradoxically, over-exercise reduces performance)</li>
                        <li>• Muscle loss and weakness (from inadequate recovery)</li>
                        <li>• Stress fractures or bone injuries</li>
                        <li>• Heart problems (in severe cases)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Social & Relational Impact</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Avoiding social events that conflict with exercise</li>
                        <li>• Declining invitations due to workout schedule</li>
                        <li>• Relationships strained by exercise priorities</li>
                        <li>• Missing family events or important occasions</li>
                        <li>• Work or school impacted by exercise preoccupation</li>
                        <li>• Isolation due to rigid schedule</li>
                        <li>• Conflict with loved ones about exercise behavior</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">Relationship with Movement</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Exercise feels like punishment or obligation (not enjoyment)</li>
                        <li>• No flexibility in type or timing of movement</li>
                        <li>• Can't listen to body signals (fatigue, pain, need for rest)</li>
                        <li>• Movement joy is lost (what started as fun becomes compulsive)</li>
                        <li>• Rest feels impossible or creates severe anxiety</li>
                        <li>• Self-worth determined by exercise completion</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 3: Types and Patterns */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Types and Patterns of Exercise Addiction</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">Compensatory Exercise</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Exercising specifically to "burn off" calories from food</li>
                        <li>• "Earning" food through exercise before eating</li>
                        <li>• Punishing self with exercise after eating certain foods</li>
                        <li>• Calculating exercise based on food intake</li>
                        <li>• <strong>Very common with eating disorders</strong></li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">Obligatory Exercise</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Rigid rules about when, how much, what type</li>
                        <li>• Must complete specific routine regardless of circumstances</li>
                        <li>• Missing workout creates extreme distress</li>
                        <li>• Exercise schedule dominates daily life</li>
                        <li>• Inflexible and rule-bound</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">Over-Exercise/Overtraining</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Excessive volume or intensity beyond body's capacity</li>
                        <li>• Inadequate rest and recovery time</li>
                        <li>• Continuing despite declining performance</li>
                        <li>• Ignoring injury and fatigue signals</li>
                        <li>• Multiple daily sessions</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">Exercise Purging</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Using exercise specifically to compensate for eating (similar to vomiting or laxatives)</li>
                        <li>• Part of binge-purge cycle</li>
                        <li>• Excessive duration or intensity after eating</li>
                        <li>• Driven by panic about food consumed</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">Body Image-Driven Exercise</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Exercise motivated primarily by appearance changes</li>
                        <li>• Targeting specific body parts to "fix"</li>
                        <li>• Comparing body to fitness influencers</li>
                        <li>• Chronic dissatisfaction despite exercise consistency</li>
                        <li>• Often accompanied by body dysmorphia</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">Mood Regulation-Dependent</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Exercise as only coping mechanism for stress/emotions</li>
                        <li>• Unable to regulate mood without exercise</li>
                        <li>• Anxiety increases throughout day until workout</li>
                        <li>• Using exercise to avoid feelings</li>
                        <li>• Crashes emotionally on rest days</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">Achievement/Control-Oriented</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Perfectionism applied to exercise</li>
                        <li>• Constantly increasing goals (more miles, more weight, faster times)</li>
                        <li>• Need to control this aspect of life</li>
                        <li>• Identity strongly tied to fitness achievement</li>
                        <li>• Often stems from need for control in chaotic life</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 4: Causes and Contributing Factors */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Causes and Contributing Factors</h2>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    Exercise addiction develops from complex interactions of individual, psychological, and cultural factors:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Psychological Factors</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>Control needs:</strong> Using exercise as something controllable when life feels chaotic</li>
                        <li>• <strong>Perfectionism:</strong> Applying rigid standards to exercise</li>
                        <li>• <strong>Anxiety:</strong> Using exercise to manage anxiety (which then becomes dependent)</li>
                        <li>• <strong>Depression:</strong> Exercise as only mood lifter</li>
                        <li>• <strong>Low self-esteem:</strong> Building worth through exercise achievement</li>
                        <li>• <strong>Trauma history:</strong> Exercise creating sense of safety or control</li>
                        <li>• <strong>OCD tendencies:</strong> Obsessive-compulsive patterns applied to exercise</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-primary mb-4">Eating Disorder Relationship</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>Weight/shape concerns:</strong> Exercise to control body size</li>
                        <li>• <strong>Calorie burning obsession:</strong> Compensating for food intake</li>
                        <li>• <strong>Food rules:</strong> Exercise to "earn" or "burn off" food</li>
                        <li>• <strong>Body image distortion:</strong> Never satisfied despite exercise</li>
                        <li>• <strong>Control:</strong> Exercise as extension of eating disorder control</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Personality Traits</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• High conscientiousness</li>
                        <li>• Self-discipline taken to extreme</li>
                        <li>• Achievement orientation</li>
                        <li>• Difficulty with flexibility</li>
                        <li>• All-or-nothing thinking</li>
                        <li>• Need for structure and routine</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Developmental Factors</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Athletic background: Sports culture emphasizing "no pain, no gain"</li>
                        <li>• Family emphasis on fitness or appearance</li>
                        <li>• Praise for exercise behavior reinforcing compulsion</li>
                        <li>• Lack of other coping skills learned in childhood</li>
                        <li>• Parental modeling of compulsive exercise</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-4">Cultural & Societal Factors: A MAJOR Contributor Often Overlooked</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Fitness Culture Glorification:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• "No days off" mentality promoted</li>
                            <li>• "No excuses" and "push through pain" messaging</li>
                            <li>• Rest portrayed as weakness or laziness</li>
                            <li>• Exercise influencers modeling unsustainable patterns</li>
                            <li>• Before/after transformations creating pressure</li>
                            <li>• Fitness tracking apps gamifying exercise</li>
                            <li>• "Grind" and "hustle" culture applied to fitness</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Diet Culture Intersection:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Exercise marketed as weight loss tool</li>
                            <li>• "Burning calories" language everywhere</li>
                            <li>• Fitness industry intertwined with diet industry</li>
                            <li>• Body transformation promises</li>
                            <li>• "Earn your food" messaging</li>
                            <li>• Fat phobia driving exercise behavior</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Wellness Culture:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Exercise positioned as moral imperative</li>
                            <li>• Health = thinness = constant exercise</li>
                            <li>• "Optimization" obsession</li>
                            <li>• Productivity applied to self-care</li>
                            <li>• Rest seen as indulgence or laziness</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Social Media Impact:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Constant exposure to fitness content</li>
                            <li>• Comparison to edited, curated fitness images</li>
                            <li>• Algorithm pushing fitness content</li>
                            <li>• "Accountability" culture creating pressure</li>
                            <li>• Fitness challenges encouraging excess</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Capitalist Productivity Culture:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Bodies as projects to be optimized</li>
                            <li>• Self-worth tied to productivity (including fitness)</li>
                            <li>• Rest devalued in hustle culture</li>
                            <li>• Achievement orientation applied to body/fitness</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Triggering Events</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Starting diet or weight loss attempt</li>
                        <li>• Comments about body or fitness level</li>
                        <li>• Breakup or relationship stress</li>
                        <li>• Major life transition or loss of control</li>
                        <li>• Athletic injury leading to identity crisis</li>
                        <li>• Pandemic (exercise as control during uncertainty)</li>
                        <li>• Life stress requiring coping mechanism</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5: Health Consequences */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Health Consequences and Impact</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Physical Health Consequences</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-destructive/10 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-3">Musculoskeletal Injuries:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Stress fractures (bones break down faster than they rebuild)</li>
                            <li>• Chronic tendinitis and joint problems</li>
                            <li>• Muscle strains and tears</li>
                            <li>• Overuse injuries that don't heal</li>
                            <li>• Early arthritis</li>
                            <li>• Permanent damage from continuing through injury</li>
                          </ul>
                        </div>

                        <div className="bg-destructive/10 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-3">Cardiovascular Issues:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Cardiac fatigue</li>
                            <li>• Arrhythmias (irregular heartbeat)</li>
                            <li>• Decreased heart function (in extreme cases)</li>
                            <li>• Paradoxical increased cardiovascular risk</li>
                          </ul>
                        </div>

                        <div className="bg-destructive/10 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-3">Hormonal Disruption:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Menstrual irregularities or amenorrhea (loss of period)</li>
                            <li>• Low testosterone (in those with testes)</li>
                            <li>• Thyroid dysfunction</li>
                            <li>• Cortisol dysregulation (chronic stress hormone elevation)</li>
                            <li>• Reproductive health impacts</li>
                          </ul>
                        </div>

                        <div className="bg-destructive/10 p-5 rounded-lg border-l-4 border-destructive">
                          <h4 className="font-semibold text-primary mb-3">Metabolic Consequences:</h4>
                          <p className="text-foreground mb-2 font-semibold">Relative Energy Deficiency in Sport (RED-S):</p>
                          <ul className="space-y-1 text-foreground text-sm mb-3">
                            <li>• Occurs when energy intake doesn't match energy expenditure</li>
                            <li>• Affects bone health, immunity, hormones, cardiovascular health</li>
                            <li>• <strong>Can happen at any body size</strong></li>
                          </ul>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Decreased metabolism (body adapting to chronic stress)</li>
                            <li>• Blood sugar dysregulation</li>
                            <li>• Nutrient deficiencies despite "healthy" behavior</li>
                          </ul>
                        </div>

                        <div className="bg-destructive/10 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-3">Immune System Suppression:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Frequent illnesses and infections</li>
                            <li>• Slow wound healing</li>
                            <li>• Increased inflammation</li>
                            <li>• Chronic fatigue</li>
                          </ul>
                        </div>

                        <div className="bg-destructive/10 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-3">Bone Health:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Osteopenia and osteoporosis (even in young people)</li>
                            <li>• Increased fracture risk</li>
                            <li>• <strong>Potentially irreversible bone loss</strong></li>
                          </ul>
                        </div>

                        <div className="bg-destructive/10 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-3">Other Physical Effects:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Chronic fatigue and exhaustion</li>
                            <li>• Sleep disturbances</li>
                            <li>• Gastrointestinal problems</li>
                            <li>• Hair loss</li>
                            <li>• Skin problems</li>
                            <li>• Premature aging</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Psychological Impact</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Increased anxiety (exercise becomes source of anxiety, not relief)</li>
                        <li>• Depression (especially on rest days or when injured)</li>
                        <li>• Obsessive thoughts about exercise</li>
                        <li>• Guilt and shame consuming mental space</li>
                        <li>• Irritability and mood swings</li>
                        <li>• Reduced cognitive function (brain needs rest too)</li>
                        <li>• Loss of exercise joy (what was once fun becomes obligation)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Social & Life Quality Impact</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Relationships suffer (exercise prioritized over people)</li>
                        <li>• Social isolation (avoiding events that conflict with exercise)</li>
                        <li>• Missing important life events (weddings, family time, celebrations)</li>
                        <li>• Career or academic impact (reduced focus, missing work/school)</li>
                        <li>• Financial cost (gym memberships, equipment, injuries, medical care)</li>
                        <li>• Time consumed (hours daily on exercise)</li>
                        <li>• Life feels smaller (revolves around workout schedule)</li>
                        <li>• Loss of spontaneity (can't be flexible)</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">The Performance Paradox</h3>
                      <p className="text-foreground mb-3">
                        Ironically, compulsive over-exercise actually <strong>decreases</strong> athletic performance:
                      </p>
                      <ul className="space-y-2 text-foreground">
                        <li>• No adequate recovery leads to declining strength/speed/endurance</li>
                        <li>• Increased injury risk interrupts training</li>
                        <li>• Mental burnout reduces motivation and focus</li>
                        <li>• Overtraining syndrome impairs all systems</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-primary mb-3">When Co-Occurring with Eating Disorders</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• More severe medical complications</li>
                        <li>• Higher risk of cardiac problems</li>
                        <li>• Increased bone loss</li>
                        <li>• More difficult recovery process</li>
                        <li>• Both conditions fuel each other</li>
                        <li>• Higher relapse risk</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 6: Assessment and Recognition */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Assessment and Recognition</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-4">Self-Reflection Questions</h3>
                      <p className="text-foreground mb-3">Ask yourself:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Do I feel anxious, guilty, or panicked when I miss a workout?</li>
                        <li>• Do I exercise despite being injured, ill, or exhausted?</li>
                        <li>• Have I skipped important events to exercise?</li>
                        <li>• Do my relationships suffer because of my exercise routine?</li>
                        <li>• Do I have rigid rules about exercise that cannot be broken?</li>
                        <li>• Do I exercise to compensate for eating or "burn calories"?</li>
                        <li>• Has exercise stopped being fun and become an obligation?</li>
                        <li>• Do I feel I "should" exercise even when my body needs rest?</li>
                        <li>• Am I unable to take rest days without extreme distress?</li>
                        <li>• Do I exercise even when it's causing harm (injuries, fatigue)?</li>
                        <li>• Do I exercise in secret or lie about how much I exercise?</li>
                        <li>• Is my self-worth tied to exercise performance or consistency?</li>
                      </ul>
                      <p className="text-foreground mt-4 font-medium">
                        If you answered yes to several questions, you may benefit from professional support.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Clinical Assessment Tools</h3>
                      <p className="text-foreground mb-3">Professionals may use validated questionnaires:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Exercise Dependence Scale (EDS)</li>
                        <li>• Compulsive Exercise Test (CET)</li>
                        <li>• Exercise Addiction Inventory (EAI)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Comprehensive Evaluation Includes:</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Detailed exercise history (type, frequency, duration, intensity)</li>
                        <li>• Exploration of thoughts and feelings about exercise</li>
                        <li>• Assessment of consequences (physical, social, psychological)</li>
                        <li>• Evaluation of flexibility and ability to rest</li>
                        <li>• Understanding relationship with food and body</li>
                        <li>• Screening for eating disorders</li>
                        <li>• Medical evaluation (injuries, hormonal health, bone density if indicated)</li>
                        <li>• Psychological assessment (anxiety, depression, OCD)</li>
                        <li>• Impact on functioning and quality of life</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-3">Key Difference: Flexibility and Consequences</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>✓ Healthy exercise can be skipped without significant distress</li>
                        <li>✓ Healthy exercise enhances life rather than interfering with it</li>
                        <li>✓ Healthy exercise responds to body's needs for rest</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">You Deserve Help If:</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Exercise causes distress when unable to do it</li>
                        <li>• Exercise is causing physical harm</li>
                        <li>• Exercise interferes with life quality</li>
                        <li>• You've lost joy in movement</li>
                        <li>• You feel controlled by exercise rather than in control</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">You Do NOT Need To:</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Develop serious medical problems first</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Prove it's "bad enough"</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Have an eating disorder diagnosis</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Exercise more than some arbitrary amount</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Wait until you can't function at all</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 7: Treatment Approach */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Treatment Approach at Beyond Eating Recovery</h2>
                  
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Our approach to exercise addiction focuses on healing your relationship with movement, addressing underlying psychological drivers, and rebuilding flexible, joyful connection to your body.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold text-primary mb-6">Anne's 6-Step Treatment Process (Adapted for Exercise Addiction)</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">1. Establish Safety and Medical Stabilization</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Medical evaluation (injuries, bone health, hormones, cardiovascular)</li>
                            <li>• Treatment for existing injuries</li>
                            <li>• Assessment of RED-S if present</li>
                            <li>• Exercise reduction or temporary cessation (often necessary initially)</li>
                            <li>• Nutrition support if eating disorder co-exists</li>
                            <li>• Safety planning around rest days</li>
                          </ul>
                          <div className="bg-destructive/10 p-4 rounded mt-3">
                            <p className="text-sm text-foreground font-medium mb-2">
                              <strong>Important:</strong> Complete exercise cessation may be necessary initially, especially when:
                            </p>
                            <ul className="space-y-1 text-xs text-foreground">
                              <li>• Severe medical complications present</li>
                              <li>• Co-occurring eating disorder</li>
                              <li>• Unable to moderate (all-or-nothing pattern)</li>
                              <li>• Building foundation for healthy reintroduction</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">2. Address Anxiety and Build Distress Tolerance</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Understanding anxiety about not exercising</li>
                            <li>• Sitting with discomfort of rest days (exposure therapy)</li>
                            <li>• Building alternative anxiety management tools</li>
                            <li>• Cognitive restructuring of exercise-related thoughts</li>
                            <li>• Mindfulness and grounding practices</li>
                            <li>• Emotion regulation skills (DBT)</li>
                            <li>• Self-soothing techniques beyond exercise</li>
                          </ul>
                          <p className="text-sm text-foreground italic mt-2">
                            <strong>This is critical:</strong> Learning you can survive and be okay without exercise
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">3. Challenge Exercise-Related Beliefs and Cultural Messages</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Identifying rigid rules and beliefs about exercise</li>
                            <li>• Exploring origins (family, culture, sports, diet culture)</li>
                            <li>• Critical analysis of fitness culture and "no days off" mentality</li>
                            <li>• Challenging "earning food" and compensatory beliefs</li>
                            <li>• Understanding rest as essential (not weakness)</li>
                            <li>• Examining productivity culture applied to body</li>
                            <li>• Media literacy regarding fitness influencers</li>
                            <li>• Redefining health beyond exercise</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">4. Explore Underlying Issues and Functions</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Understanding what exercise provides (control, worth, mood regulation, body control)</li>
                            <li>• Addressing underlying anxiety, depression, trauma</li>
                            <li>• Processing need for control or perfectionism</li>
                            <li>• Healing attachment wounds</li>
                            <li>• Trauma-informed therapy if relevant</li>
                            <li>• Addressing eating disorder if co-occurring</li>
                            <li>• Building identity beyond exercise</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">5. Heal Relationship with Body and Movement</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Reintroducing movement mindfully (when appropriate)</li>
                            <li>• Discovering "joyful movement" vs. compulsive exercise</li>
                            <li>• Learning to listen to body's signals (fatigue, pain, need for rest)</li>
                            <li>• Building body trust</li>
                            <li>• Exploring different types of gentle movement</li>
                            <li>• Separating movement from weight control</li>
                            <li>• Understanding body's need for rest and recovery</li>
                            <li>• Body respect practices</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">6. Build Sustainable, Flexible Relationship with Movement</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Creating flexible movement practice</li>
                            <li>• Practicing rest without guilt</li>
                            <li>• Building life beyond exercise focus</li>
                            <li>• Reconnecting with other sources of joy and meaning</li>
                            <li>• Relapse prevention planning</li>
                            <li>• Maintaining balance and flexibility</li>
                            <li>• Living according to values (not rigid rules)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Key Treatment Principles</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-accent/10 p-5 rounded-lg border-l-4 border-accent">
                          <h4 className="font-semibold text-primary mb-2">Weight-Neutral, HAES® Approach:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• No exercise for weight loss or body change</li>
                            <li>• Movement as body celebration, not punishment</li>
                            <li>• All bodies deserve rest and gentle treatment</li>
                            <li>• Health behaviors not tied to weight outcomes</li>
                            <li>• Joyful movement accessible at any size</li>
                          </ul>
                        </div>

                        <div className="bg-accent/10 p-5 rounded-lg border-l-4 border-accent">
                          <h4 className="font-semibold text-primary mb-2">Rest as Essential:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Rest is not laziness—it's biological necessity</li>
                            <li>• Bodies require recovery for health and performance</li>
                            <li>• Rest days are productive (body repairs and strengthens during rest)</li>
                            <li>• Challenging cultural messages that devalue rest</li>
                          </ul>
                        </div>

                        <div className="bg-accent/10 p-5 rounded-lg border-l-4 border-accent">
                          <h4 className="font-semibold text-primary mb-2">Flexibility as Goal:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Ability to skip movement without distress</li>
                            <li>• Responding to body's needs day-by-day</li>
                            <li>• Variety in types of movement</li>
                            <li>• No rigid rules or schedules</li>
                            <li>• Spontaneity and play</li>
                          </ul>
                        </div>

                        <div className="bg-accent/10 p-5 rounded-lg border-l-4 border-accent">
                          <h4 className="font-semibold text-primary mb-2">Redefining "Joyful Movement":</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Movement that feels good in the body</li>
                            <li>• Activities chosen for enjoyment (not calorie burn)</li>
                            <li>• Gentleness and compassion</li>
                            <li>• Permission to stop if not feeling good</li>
                            <li>• Dancing, walking, stretching, playing—all count</li>
                            <li>• No "shoulds" or obligations</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Treatment Modalities</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Individual therapy with eating disorder/exercise addiction specialist</li>
                        <li>• Cognitive-behavioral therapy (CBT)</li>
                        <li>• Exposure and response prevention (sitting with anxiety of rest)</li>
                        <li>• Acceptance and commitment therapy (ACT)</li>
                        <li>• Dialectical behavior therapy (DBT) skills</li>
                        <li>• Trauma-informed approaches</li>
                        <li>• Group therapy for shared experience</li>
                        <li>• Dietitian support if eating disorder co-exists (Stephanie Okumura, MS, RDN)</li>
                        <li>• Physical therapy for injury rehabilitation</li>
                        <li>• Medical coordination as needed</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-primary mb-3">When Eating Disorder Co-Occurs</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Integrated treatment addressing both</li>
                        <li>• Understanding how they fuel each other</li>
                        <li>• Often exercise restriction necessary while stabilizing eating</li>
                        <li>• Coordinated care approach</li>
                        <li>• Both conditions treated simultaneously</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Treatment Settings</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Outpatient therapy (weekly or more frequent)</li>
                        <li>• Group therapy including LGBTQIA+ group (Thursdays 6-7:15pm, $40/session)</li>
                        <li>• Telehealth throughout Oregon and Washington</li>
                        <li>• Intensive outpatient if needed</li>
                        <li>• Coordination with higher levels of care</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 8: Recovery */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Recovery and What Freedom Looks Like</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-lg font-semibold text-primary mb-3">
                        Recovery from exercise addiction IS possible
                      </p>
                      <p className="text-foreground leading-relaxed">
                        You can rebuild a healthy, flexible, joyful relationship with movement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What Recovery Looks Like</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Ability to rest without anxiety, guilt, or panic</li>
                        <li>• Flexibility in movement (can skip, modify, change plans)</li>
                        <li>• Listening to body signals (honoring fatigue, pain, need for rest)</li>
                        <li>• Movement feels joyful again (not obligatory)</li>
                        <li>• Life balance (exercise is part of life, not center of life)</li>
                        <li>• Social engagement without exercise interference</li>
                        <li>• Identity beyond exercise (you are more than your workouts)</li>
                        <li>• Body trust (knowing your body's needs)</li>
                        <li>• Variety in movement (not rigid routine)</li>
                        <li>• Rest celebrated as essential (not feared)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Realistic Expectations</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• You may still enjoy movement (that's healthy!)</li>
                        <li>• Recovery doesn't mean never exercising</li>
                        <li>• The goal is flexibility and joy—not elimination</li>
                        <li>• You'll have tools to navigate challenging moments</li>
                        <li>• Some days you might not want to move (and that's okay)</li>
                        <li>• Movement becomes optional, not obligatory</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">What "Joyful Movement" Actually Means</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Movement that makes you feel alive and energized (not depleted)</li>
                        <li>• Activities you'd choose even if they burned zero calories</li>
                        <li>• Things that are fun: dancing, playing, walking with friends, stretching</li>
                        <li>• Gentle and compassionate approach to body</li>
                        <li>• No "shoulds" or punishment</li>
                        <li>• Permission to stop anytime</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Timeline</h3>
                      <div className="space-y-4">
                        <div className="bg-secondary/20 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">Early Recovery (Months 1-6)</h4>
                          <p className="text-sm text-foreground">
                            Exercise reduction/cessation, intense anxiety work, building other coping skills, medical healing
                          </p>
                        </div>
                        <div className="bg-secondary/20 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">Middle Recovery (Months 6-12)</h4>
                          <p className="text-sm text-foreground">
                            Reintroducing gentle movement mindfully, continuing psychological work, building flexibility
                          </p>
                        </div>
                        <div className="bg-secondary/20 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">Late Recovery (12+ Months)</h4>
                          <p className="text-sm text-foreground">
                            Sustained flexible relationship with movement, occasional challenges navigated with tools, living fully
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-3">Exercise Reintroduction (When Appropriate)</h3>
                      <p className="text-foreground mb-3">This is done carefully and mindfully:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Starting with gentle, intuitive movement</li>
                        <li>• Short duration, low intensity initially</li>
                        <li>• Prioritizing how body feels (not performance metrics)</li>
                        <li>• Built-in rest days (non-negotiable)</li>
                        <li>• Variety rather than rigid routine</li>
                        <li>• No tracking (steps, calories, heart rate)</li>
                        <li>• Focus on joy and body connection</li>
                        <li>• Working with treatment team throughout</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Challenges in Recovery</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Fitness culture everywhere (constant triggering messages)</li>
                        <li>• Social media fitness content</li>
                        <li>• Well-meaning comments ("You look great, have you been working out less?")</li>
                        <li>• Medical providers praising exercise without understanding compulsion</li>
                        <li>• Friends who exercise compulsively (normalized in friend group)</li>
                        <li>• Identity crisis (who am I without exercise?)</li>
                        <li>• Weight changes (body may change as it heals—this is healthy)</li>
                        <li>• Fear that you'll "lose control" if you stop rigid routine</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What Helps</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Therapy with specialized provider</li>
                        <li>• Curating social media (unfollow fitness accounts, follow body liberation and joyful movement accounts)</li>
                        <li>• Finding non-exercise sources of joy and coping</li>
                        <li>• Building identity beyond fitness</li>
                        <li>• Community of others rejecting fitness culture</li>
                        <li>• Self-compassion practice</li>
                        <li>• Patience with the process</li>
                        <li>• Understanding cultural context</li>
                        <li>• Body liberation resources</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">The Truth About Rest</h3>
                      <p className="text-foreground leading-relaxed">
                        Many fear that resting means becoming "lazy" or "unhealthy." <strong>The reality:</strong> Rest is when your body actually gets stronger, healthier, and repairs. Athletic performance improves with adequate rest. <strong>Rest is productive</strong>—your body is working hard during recovery.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Life Beyond Exercise Obsession</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Time and mental space for relationships, hobbies, passions</li>
                        <li>• Spontaneity (can change plans without anxiety)</li>
                        <li>• Travel without workout planning</li>
                        <li>• Quality time with loved ones</li>
                        <li>• Career or creative pursuits</li>
                        <li>• Presence in life moments</li>
                        <li>• Body gratitude (not body punishment)</li>
                        <li>• Energy for what truly matters</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 9: When to Seek Help */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">When to Seek Help</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Seek Help If You:</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Feel unable to skip exercise without severe distress</li>
                        <li>• Exercise despite injury, illness, or exhaustion</li>
                        <li>• Have rigid, inflexible exercise rules</li>
                        <li>• Exercise interferes with relationships or life quality</li>
                        <li>• Use exercise to compensate for eating</li>
                        <li>• Have lost joy in movement</li>
                        <li>• Notice declining performance despite consistent training</li>
                        <li>• Experience chronic injuries that won't heal</li>
                        <li>• Find self-worth tied to exercise performance</li>
                        <li>• Recognize patterns worsening over time</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/20 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-2xl font-semibold text-destructive mb-4 flex items-center">
                        <AlertCircle className="w-6 h-6 mr-2" />
                        Seek Immediate Medical Attention If:
                      </h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Stress fractures or serious injury</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Chest pain or irregular heartbeat</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Fainting or dizziness</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Loss of menstrual period (if you menstruate)</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Severe fatigue affecting daily function</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Signs of overtraining syndrome</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Heart palpitations</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Suicidal thoughts</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">You Deserve Support Even If:</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• People praise your "dedication"</li>
                        <li>• You're not exercising "that much" compared to others</li>
                        <li>• You don't have an eating disorder</li>
                        <li>• You haven't been injured (yet)</li>
                        <li>• You're still functioning in most areas</li>
                        <li>• You consider yourself an athlete</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-3">Taking the First Step</h3>
                      <p className="text-foreground leading-relaxed mb-4">
                        Contact Beyond Eating Recovery at <strong className="text-primary">360-726-4141</strong> to schedule a consultation. We provide specialized, compassionate treatment for exercise addiction and compulsive exercise throughout Oregon and Washington.
                      </p>
                      <h4 className="font-semibold text-primary mb-2">What Happens in Treatment:</h4>
                      <ul className="space-y-1 text-foreground text-sm">
                        <li>• You'll be heard and understood (not judged)</li>
                        <li>• Your concerns taken seriously (even if others praise your behavior)</li>
                        <li>• Collaborative treatment planning</li>
                        <li>• Medical coordination if needed</li>
                        <li>• Evidence-based psychological approaches</li>
                        <li>• Support through the difficult process of change</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 10: Supporting a Loved One */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Supporting a Loved One with Exercise Addiction</h2>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    If someone you care about struggles with compulsive exercise:
                  </p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                          <CheckCircle className="w-6 h-6 mr-2" />
                          Do:
                        </h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Express concern from place of care (focus on well-being, not appearance)</li>
                          <li>• Notice and name concerning patterns (exercising despite injury, missing events)</li>
                          <li>• Support them in seeking professional help</li>
                          <li>• Validate how difficult recovery is (rest can feel terrifying)</li>
                          <li>• Be patient with the process</li>
                          <li>• Invite them to activities unrelated to exercise</li>
                          <li>• Celebrate their worth beyond fitness</li>
                          <li>• Examine your own relationship with exercise</li>
                          <li>• Create environments that don't center on fitness</li>
                        </ul>
                      </div>

                      <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                        <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center">
                          <XCircle className="w-6 h-6 mr-2" />
                          Don't:
                        </h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Praise their "dedication" or "discipline" (reinforces compulsion)</li>
                          <li>• Comment on their body or fitness level</li>
                          <li>• Suggest exercise as solution to stress or problems</li>
                          <li>• Engage in fitness talk or workout comparison</li>
                          <li>• Make them feel weak for resting</li>
                          <li>• Pressure them to join you for workouts</li>
                          <li>• Dismiss their struggles ("but exercise is healthy!")</li>
                          <li>• Monitor or police their movement</li>
                          <li>• Take their irritability personally (anxiety about rest is real)</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What to Say</h3>
                      <div className="bg-secondary/20 p-5 rounded-lg">
                        <ul className="space-y-2 text-foreground">
                          <li>• "I've noticed you seem stressed about exercise. I'm worried about you."</li>
                          <li>• "You're valuable beyond your workouts and achievements."</li>
                          <li>• "It's okay to rest. Your body needs recovery."</li>
                          <li>• "I miss spending time with you. Can we do something together that isn't exercise?"</li>
                          <li>• "How can I support you right now?"</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What NOT to Say</h3>
                      <div className="bg-muted p-5 rounded-lg">
                        <ul className="space-y-2 text-foreground">
                          <li>• "You're so dedicated! I wish I had your discipline." (reinforces problem)</li>
                          <li>• "You look so fit!" (appearance focus)</li>
                          <li>• "Just take a rest day." (oversimplifies the anxiety)</li>
                          <li>• "But exercise is healthy!" (dismissive of compulsion)</li>
                          <li>• "You need to work out less." (unsolicited advice)</li>
                          <li>• "Want to join me for a workout?" (when they're in recovery)</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Navigating Social Situations</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Don't plan gatherings around fitness activities</li>
                        <li>• Offer non-exercise alternatives</li>
                        <li>• Don't discuss fitness challenges, races, or workout routines</li>
                        <li>• Avoid "we should work out together!" invitations</li>
                        <li>• Support their participation in non-exercise activities</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">If They're Taking Rest Days or Reducing Exercise</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Celebrate their courage (this is incredibly hard)</li>
                        <li>• Don't express concern about weight or fitness changes</li>
                        <li>• Normalize rest ("Rest days are when bodies get stronger")</li>
                        <li>• Offer distraction and support during anxious times</li>
                        <li>• Validate the difficulty without trying to "fix" it</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Family Environment Considerations</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Examine family patterns around exercise and productivity</li>
                        <li>• Stop fitness talk at home</li>
                        <li>• Don't praise overwork (including over-exercise)</li>
                        <li>• Model flexibility if possible</li>
                        <li>• Value rest and downtime</li>
                        <li>• Challenge "no pain, no gain" messaging</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-primary mb-3">If Co-Occurring Eating Disorder</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Understand the interconnection</li>
                        <li>• Don't separate the issues</li>
                        <li>• Support integrated treatment</li>
                        <li>• Avoid food and body commentary</li>
                        <li>• Learn about HAES® and Intuitive Eating</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Treatment</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Encourage attendance at therapy</li>
                        <li>• Understand that reducing exercise may temporarily increase anxiety</li>
                        <li>• Don't enable compulsive patterns</li>
                        <li>• Support the process even when difficult</li>
                        <li>• Celebrate non-exercise victories</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Take Care of Yourself</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Supporting someone is emotionally taxing</li>
                        <li>• Examine your own beliefs about exercise and rest</li>
                        <li>• Seek your own support if needed</li>
                        <li>• Set boundaries if necessary</li>
                        <li>• Practice self-compassion</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 11: The Cultural Context */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">The Cultural Context: Fitness Culture's Role</h2>
                  
                  <p className="text-lg text-foreground leading-relaxed mb-6 font-medium">
                    Understanding the cultural environment is essential:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-2xl font-semibold text-primary mb-4">Fitness Culture Creates Conditions for Exercise Addiction</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">"No Days Off" Mentality</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Rest portrayed as weakness or giving up</li>
                          <li>• "No excuses" messaging everywhere</li>
                          <li>• "Push through pain" celebrated</li>
                          <li>• "Beast mode" and aggressive fitness language</li>
                          <li>• Recovery portrayed as for the weak</li>
                          <li>• "Rest is for the dead" and similar toxic messaging</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Toxic Fitness Influencer Culture</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Unsustainable routines presented as normal</li>
                          <li>• Edited bodies and performance</li>
                          <li>• "What I eat in a day" alongside intense workouts</li>
                          <li>• Inspiration quotes masking compulsion</li>
                          <li>• Before/after content creating pressure</li>
                          <li>• 30-day challenges encouraging excess</li>
                          <li>• Algorithm pushing more extreme content</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Productivity Culture Applied to Body</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Body as project to optimize</li>
                          <li>• "Earning" worth through fitness achievement</li>
                          <li>• Rest seen as laziness</li>
                          <li>• Self-worth tied to output (including workouts)</li>
                          <li>• "Hustle culture" extended to fitness</li>
                          <li>• Quantifying everything (steps, calories, metrics)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Diet Culture Intersection</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Exercise marketed primarily for weight loss</li>
                          <li>• "Burn calories" language everywhere</li>
                          <li>• Fitness industry intertwined with weight loss industry</li>
                          <li>• Before/after transformations</li>
                          <li>• "Get beach body ready" messaging</li>
                          <li>• Body transformation as goal (not health or joy)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Capitalism and the Fitness Industry</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Billion-dollar industry profiting from insecurity</li>
                          <li>• Gym memberships, equipment, classes, supplements</li>
                          <li>• Creating problems to sell solutions</li>
                          <li>• Fitness tracking technology gamifying movement</li>
                          <li>• Apps creating competition and comparison</li>
                          <li>• Wearables that never let you rest (constant reminders)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Wellness Culture Disguise</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Compulsion rebranded as "self-care"</li>
                          <li>• "Wellness" used to justify extreme behavior</li>
                          <li>• "Optimization" and "biohacking" mentality</li>
                          <li>• Health as moral imperative</li>
                          <li>• Individual responsibility for health (ignoring systemic factors)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Gender-Specific Pressures</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• <strong>For women:</strong> Thinness + toned, exercise to stay small, "fit mom" pressure</li>
                          <li>• <strong>For men:</strong> Muscularity required, "never skip leg day," muscle dysmorphia</li>
                          <li>• <strong>For non-binary folks:</strong> Pressure from multiple directions, body as battleground</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">The Pandemic Effect</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Exercise as one controllable thing during uncertainty</li>
                          <li>• Home workout culture explosion</li>
                          <li>• Fitness influencers thriving during lockdown</li>
                          <li>• "Don't use pandemic as excuse" messaging</li>
                          <li>• Increased time for compulsive exercise</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-4">Why This Matters for Recovery</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• You're recovering in a culture that celebrates the problem</li>
                        <li>• Fitness content is everywhere (triggering)</li>
                        <li>• People will praise behavior you're trying to change</li>
                        <li>• Cultural messages contradict recovery principles</li>
                        <li>• Need critical consciousness to resist cultural pressure</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">Reclaiming Movement</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>Joyful movement</strong> vs. compulsive exercise</li>
                        <li>• <strong>Body celebration</strong> vs. body punishment</li>
                        <li>• <strong>Intuitive movement</strong> vs. rule-following</li>
                        <li>• <strong>Rest as resistance</strong> to toxic productivity culture</li>
                        <li>• <strong>Movement for pleasure, connection, joy</strong>—not achievement</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 12: Related Resources */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Related Resources</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Internal Links</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <Link to="/conditions/anorexia-nervosa" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Anorexia Nervosa
                        </Link>
                        <Link to="/conditions/bulimia-nervosa" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Bulimia Nervosa
                        </Link>
                        <Link to="/conditions/orthorexia" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Orthorexia
                        </Link>
                        <Link to="/conditions/body-dysmorphia" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Body Dysmorphia
                        </Link>
                        <Link to="/health-at-every-size" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Health At Every Size
                        </Link>
                        <Link to="/our-approach" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Our Approach to Treatment
                        </Link>
                        <Link to="/conditions" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View All Eating Disorders
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">External Resources</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>
                          <a href="https://nationaleatingdisorders.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            National Eating Disorders Association (NEDA) - compulsive exercise information
                          </a>
                        </li>
                        <li>
                          <a href="https://iaedp.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            International Association of Eating Disorders Professionals (IAEDP)
                          </a>
                        </li>
                        <li>
                          <a href="https://haescommunity.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            HAES® Community
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Recommended Reading</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>"Exercised: Why Something We Never Evolved to Do Is Healthy and Rewarding"</strong> by Daniel Lieberman (critical examination of exercise culture)</li>
                        <li>• <strong>"Joyful Movement: Cozy Cardio and Relaxing Recipes for Every Body"</strong> by Carly Stein</li>
                        <li>• <strong>"If Your Hunger Could Talk"</strong> by Anne Cuthbert</li>
                        <li>• <strong>"Health At Every Size"</strong> by Lindo Bacon</li>
                        <li>• <strong>"Running on Empty"</strong> by Lauren Fleshman (athlete's perspective on overtraining and culture)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Podcasts</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>Food Psych</strong> by Christy Harrison (many episodes on joyful movement)</li>
                        <li>• <strong>Maintenance Phase</strong> (critiquing fitness and wellness culture)</li>
                        <li>• <strong>Love, Food</strong> by Julie Duffy Dillon</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Joyful Movement Resources</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>Unfollow</strong> toxic fitness accounts</li>
                        <li>• <strong>Follow:</strong> body liberation accounts, joyful movement advocates, HAES® practitioners</li>
                        <li>• <strong>Look for:</strong> accessible movement teachers, trauma-informed yoga, dance for joy (not exercise)</li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>

              {/* Sidebar - 30% */}
              <aside className="lg:col-span-1 space-y-6">
                <div className="lg:sticky lg:top-6 space-y-6">
                  
                  {/* Anne Cuthbert Expert Profile Card */}
                  <Card className="overflow-hidden border-primary/20">
                    <CardHeader className="bg-primary/5 pb-4">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={anneCuthbertPhoto} 
                          alt="Anne Cuthbert, MA, LPC, LMHC - Founder of Beyond Eating Recovery" 
                          className="w-24 h-24 rounded-full object-cover border-2 border-primary"
                        />
                        <div>
                          <CardTitle className="text-lg mb-1">Anne Cuthbert, MA, LPC, LMHC</CardTitle>
                          <p className="text-sm text-muted-foreground">Founder & Lead Therapist</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-foreground mb-4">
                        20+ years specializing in eating disorders and compulsive exercise using Health At Every Size® and joyful movement approaches.
                      </p>
                      <div className="space-y-2 text-sm text-foreground mb-4">
                        <p className="font-semibold text-primary">Credentials:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Licensed Professional Counselor (OR)</li>
                          <li>• Licensed Mental Health Counselor (WA)</li>
                          <li>• CREDN Board Member</li>
                          <li>• ASDAH Member</li>
                          <li>• Specialized in exercise addiction treatment</li>
                        </ul>
                      </div>
                      <p className="text-sm text-foreground mb-4 italic">
                        <strong>Philosophy:</strong> Anne helps clients rediscover movement as joy, not obligation, and challenges toxic fitness culture messages.
                      </p>
                      <Link to="/about/anne-cuthbert">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Meet Anne
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Crisis Resources Card */}
                  <Card className="overflow-hidden border-destructive/30 bg-destructive/5">
                    <CardHeader className="bg-destructive/10">
                      <CardTitle className="flex items-center text-destructive">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Need Immediate Support?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-semibold text-foreground">988 Suicide & Crisis Lifeline</p>
                          <p className="text-foreground">Call or text <strong>988</strong></p>
                          <p className="text-xs text-muted-foreground">Available 24/7</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">NEDA Helpline</p>
                          <p className="text-foreground"><strong>1-800-931-2237</strong></p>
                          <p className="text-xs text-muted-foreground">Monday-Thursday 9am-9pm ET, Friday 9am-5pm ET</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Crisis Text Line</p>
                          <p className="text-foreground">Text "NEDA" to <strong>741741</strong></p>
                          <p className="text-xs text-muted-foreground">Available 24/7</p>
                        </div>
                        <div className="pt-2 border-t border-destructive/20">
                          <p className="text-xs text-foreground">
                            If experiencing medical emergency (chest pain, stress fracture, etc.), call <strong>911</strong> or go to your nearest emergency room.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Book CTA Card */}
                  <Card className="overflow-hidden bg-accent text-accent-foreground">
                    <CardContent className="p-6">
                      <img 
                        src={bookCover} 
                        alt="If Your Hunger Could Talk book cover by Anne Cuthbert" 
                        className="w-full h-auto mb-4 rounded shadow-lg"
                      />
                      <h3 className="text-xl font-bold mb-2">"If Your Hunger Could Talk"</h3>
                      <p className="text-sm mb-4">By Anne Cuthbert, MA, LPC, LMHC</p>
                      <p className="text-sm mb-4">
                        Addresses the intersection of eating, body image, and compulsive behaviors—including exercise as control mechanism.
                      </p>
                      <a 
                        href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" className="w-full bg-background text-primary hover:bg-background/90">
                          Get the Book on Amazon
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Schedule Consultation CTA Card */}
                  <Card className="overflow-hidden bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Rediscover Joyful Movement</h3>
                      <p className="text-sm mb-4">
                        We provide specialized treatment for exercise addiction and compulsive exercise throughout Oregon and Washington.
                      </p>
                      <div className="mb-4">
                        <p className="font-semibold mb-2">Call us today:</p>
                        <a href="tel:360-726-4141" className="text-2xl font-bold hover:underline flex items-center">
                          <Phone className="w-5 h-5 mr-2" />
                          360-726-4141
                        </a>
                      </div>
                      <p className="text-sm mb-2">Office hours: Monday-Friday, 9am-5pm</p>
                      <p className="text-sm mb-4">Telehealth appointments available statewide.</p>
                      <p className="text-sm font-semibold mb-4">It's okay to rest. Your body deserves compassion.</p>
                      <Link to="/contact">
                        <Button variant="secondary" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                          Schedule Consultation
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                </div>
              </aside>
            </div>
          </div>
        </main>

        <NewsletterFooterSection />
        <Footer />
      </div>
    </>
  );
};

export default ExerciseAddiction;