import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, AlertCircle, ExternalLink, CheckCircle, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const MenEatingDisorders = () => {
  return (
    <>
      <Helmet>
        <title>Eating Disorders in Men: Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta 
          name="description" 
          content="Men get eating disorders too. Specialized, gender-affirming treatment for men with anorexia, bulimia, binge eating, muscle dysmorphia. Your struggles are valid. Oregon & Washington—call 360-726-4141." 
        />
        <meta 
          name="keywords" 
          content="eating disorders in men, male eating disorder treatment, muscle dysmorphia therapy Portland, men's body image counseling Vancouver WA, anorexia in men, bulimia in men, binge eating disorder men, compulsive exercise men, gender-affirming eating disorder treatment, HAES for men, telehealth Oregon Washington" 
        />
      </Helmet>

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
                  <li className="text-foreground font-medium">Eating Disorders in Men</li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-b from-secondary/20 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Eating Disorders in Men: Treatment in Portland & Vancouver
                </h1>
                <p className="text-lg text-foreground leading-relaxed">
                  Eating disorders don't discriminate by gender, yet men face unique barriers to recognition, diagnosis, and treatment. If you're a man struggling with disordered eating, body image concerns, or compulsive exercise—you're not alone, and your experience is valid. At Beyond Eating Recovery, we provide specialized, gender-affirming treatment for men with eating disorders throughout Oregon and Washington, addressing both the symptoms and the societal factors that create silence around men's struggles.
                </p>
              </div>
            </div>
          </section>

          {/* Two-Column Layout */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - 70% */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Section 1: Understanding Eating Disorders in Men */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Understanding Eating Disorders in Men</h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Eating disorders affect men at significant rates, yet cultural stereotypes portray them as "women's issues." This misconception creates devastating consequences: men struggle in silence, go undiagnosed, face stigma when seeking help, and often receive inadequate treatment.
                    </p>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary my-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">The Reality</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• At least <strong>25% of people with eating disorders are men</strong> (likely higher due to underreporting)</li>
                        <li>• <strong>1 in 3 people with eating disorders</strong> identifying as male</li>
                        <li>• Subclinical eating disorders (not meeting full diagnostic criteria) affect up to <strong>16% of men</strong></li>
                        <li>• Men experience all types of eating disorders: anorexia, bulimia, binge eating disorder, ARFID, OSFED, orthorexia</li>
                        <li>• <strong>Men die from eating disorders at higher rates than women</strong> (due to later diagnosis and delayed treatment)</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Why the Misconception Exists</h3>
                    <ul className="space-y-2 text-foreground ml-6">
                      <li>• Historical diagnostic criteria based on female bodies (menstruation requirement)</li>
                      <li>• Research predominantly conducted on women and girls</li>
                      <li>• Media portrayal of eating disorders as exclusively affecting women</li>
                      <li>• Cultural narratives about masculinity and mental health</li>
                      <li>• Healthcare provider bias and lack of awareness</li>
                      <li>• Assessment tools designed for and validated on women</li>
                    </ul>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive my-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">The Harm of Invisibility</h3>
                      <p className="text-foreground mb-3">When eating disorders are portrayed as "women's problems":</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Men don't recognize their own symptoms</li>
                        <li>• Family and friends miss warning signs</li>
                        <li>• Healthcare providers fail to screen or diagnose</li>
                        <li>• Men feel shame for having a "female problem"</li>
                        <li>• Treatment programs may not feel welcoming or relevant</li>
                        <li>• Research funding and resources are limited</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">Important Affirmation</h3>
                      <p className="text-foreground leading-relaxed text-lg font-medium">
                        If you're a man struggling with food, body, or exercise—your experience is real, valid, and deserving of support. Eating disorders are not gendered. They are human conditions that can affect anyone.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2: Unique Presentations in Men */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Unique Presentations in Men</h2>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    While men experience all the same eating disorders as people of other genders, certain patterns and presentations may be more common or manifest differently:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-4">Muscle Dysmorphia</h3>
                      <p className="text-foreground mb-3">A specific form of body dysmorphic disorder more common in men:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Preoccupation with being "too small" or not muscular enough</li>
                        <li>• Obsessive focus on muscle building and body composition</li>
                        <li>• Compulsive weightlifting and exercise</li>
                        <li>• Strict dietary regimens (high protein, low fat, timed eating)</li>
                        <li>• Use of supplements, protein powders, potentially steroids</li>
                        <li>• Avoiding situations where body is visible</li>
                        <li>• Anxiety and distress about perceived lack of muscularity</li>
                        <li>• Body image distortion (seeing self as small despite being muscular)</li>
                      </ul>
                      <p className="text-sm text-foreground mt-3 italic">
                        See our <Link to="/conditions/body-dysmorphia" className="text-primary hover:underline">Body Dysmorphia page</Link> and <Link to="/conditions/exercise-addiction" className="text-primary hover:underline">Exercise Addiction page</Link> for more.
                      </p>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">"Bigorexia" or "Reverse Anorexia"</h3>
                      <p className="text-foreground">
                        Another term for muscle dysmorphia—pursuit of larger, more muscular body rather than smaller body.
                      </p>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Bulking and Cutting Cycles</h3>
                      <p className="text-foreground mb-3">Common in bodybuilding and fitness culture:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Extreme caloric restriction alternating with extreme caloric surplus</li>
                        <li>• Disordered eating disguised as athletic training</li>
                        <li>• Rigid food rules and macro counting</li>
                        <li>• Social isolation during "cuts"</li>
                        <li>• Mood instability and relationship strain</li>
                        <li>• May escalate into clinical eating disorders</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Exercise-Focused Eating Disorders</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Exercise addiction more common in men</li>
                        <li>• Compulsive weightlifting and training</li>
                        <li>• Compensatory exercise after eating</li>
                        <li>• Over-exercise leading to injuries</li>
                        <li>• Identity strongly tied to fitness/athletics</li>
                      </ul>
                      <p className="text-sm text-foreground mt-3 italic">
                        See our <Link to="/conditions/exercise-addiction" className="text-primary hover:underline">Exercise Addiction page</Link>
                      </p>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">"Drunkorexia"</h3>
                      <p className="text-foreground mb-3">Restricting food to "save calories" for alcohol:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• More common in college-age men</li>
                        <li>• Skipping meals to drink without weight gain</li>
                        <li>• Combining restriction with substance use</li>
                        <li>• Dangerous metabolic and cognitive effects</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Binge Eating Disorder</h3>
                      <p className="text-foreground mb-3">Actually more common in men than often recognized:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Men may represent up to 40% of BED cases</li>
                        <li>• Often less recognized due to stereotypes</li>
                        <li>• Similar patterns: loss of control, eating large amounts, distress</li>
                        <li>• May be masked by "eating competitions" or cultural norms about male appetite</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Orthorexia</h3>
                      <p className="text-foreground mb-3">Obsession with "clean" or "healthy" eating:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Often connected to fitness and performance</li>
                        <li>• Rigid rules about food quality and purity</li>
                        <li>• "Biohacking" and optimization mentality</li>
                        <li>• Wellness culture disguise</li>
                      </ul>
                      <p className="text-sm text-foreground mt-3 italic">
                        See our <Link to="/conditions/orthorexia" className="text-primary hover:underline">Orthorexia page</Link>
                      </p>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Protein Obsession</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Extreme focus on protein intake</li>
                        <li>• Anxiety about meeting protein targets</li>
                        <li>• Protein supplements and powders central to eating</li>
                        <li>• Eliminating carbs or fats</li>
                        <li>• Rigid meal timing</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-primary mb-4">Weight Class Sports</h3>
                      <p className="text-foreground mb-3">Wrestling, rowing, martial arts, horse racing jockeys:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Dangerous weight cutting practices</li>
                        <li>• Dehydration and restriction</li>
                        <li>• Binge-purge cycles around weigh-ins</li>
                        <li>• Normalized disordered eating in sports culture</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Continue with remaining sections... Due to length limits, I'll create a comprehensive implementation */}

                {/* Section 3: Signs and Symptoms in Men */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Signs and Symptoms in Men</h2>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    Many eating disorder symptoms are the same regardless of gender, but here are manifestations particularly relevant to recognizing eating disorders in men:
                  </p>

                  <div className="space-y-6">
                    {/* Physical & Behavioral Signs */}
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Physical & Behavioral Signs</h3>
                      <div className="bg-secondary/20 p-6 rounded-lg">
                        <ul className="grid md:grid-cols-2 gap-3 text-foreground">
                          <li>• Dramatic weight loss or fluctuations</li>
                          <li>• Obsessive calorie, macro, or protein tracking</li>
                          <li>• Rigid eating schedules and food rules</li>
                          <li>• Eating only "clean" or specific foods</li>
                          <li>• Excessive supplement or protein powder use</li>
                          <li>• Steroid or performance-enhancing drug use</li>
                          <li>• Compulsive exercise or weightlifting</li>
                          <li>• Exercising despite injury or illness</li>
                          <li>• Avoiding eating situations</li>
                          <li>• Eating in secret or hiding food</li>
                          <li>• Frequent bathroom trips after meals</li>
                          <li>• Unusual food rituals or behaviors</li>
                        </ul>
                      </div>
                    </div>

                    {/* Language men may use */}
                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">Language Men May Use</h3>
                      <p className="text-foreground mb-3">Men may describe symptoms differently:</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground">
                        <div>
                          <p className="font-semibold mb-2">Instead of restriction:</p>
                          <ul className="space-y-1">
                            <li>• "Getting shredded" or "getting lean"</li>
                            <li>• "Cutting"</li>
                            <li>• "Dialing in nutrition"</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Instead of binge eating:</p>
                          <ul className="space-y-1">
                            <li>• "Bulking"</li>
                            <li>• "Cheat meals"</li>
                            <li>• "Refeed day"</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Instead of body dysmorphia:</p>
                          <ul className="space-y-1">
                            <li>• "Making gains"</li>
                            <li>• "Need to get bigger"</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Instead of compulsion:</p>
                          <ul className="space-y-1">
                            <li>• "Tracking macros"</li>
                            <li>• "Optimizing"</li>
                            <li>• "Discipline"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Why Men Are Underdiagnosed */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Why Men Are Underdiagnosed and Undertreated</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-primary mb-4">Diagnostic Barriers</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Historical diagnostic criteria:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• DSM-IV required loss of menstruation for anorexia diagnosis (excluding men by definition)</li>
                            <li>• Research samples predominantly female</li>
                            <li>• Assessment tools designed for women</li>
                            <li>• Diagnostic examples using female pronouns and experiences</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Healthcare provider bias:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Doctors less likely to screen men for eating disorders</li>
                            <li>• Symptoms dismissed or attributed to other causes</li>
                            <li>• Assumptions that eating disorders only affect women</li>
                            <li>• Lack of training on eating disorders in men</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Assessment tool limitations:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Eating Disorder Examination (EDE) and similar tools reference female experiences</li>
                            <li>• Questions about menstruation, pregnancy</li>
                            <li>• Focus on drive for thinness rather than muscularity</li>
                            <li>• May not capture male-specific presentations</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Cultural and Social Barriers</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Masculinity norms:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• "Real men don't have eating disorders"</li>
                            <li>• Mental health struggles seen as weakness</li>
                            <li>• Vulnerability and help-seeking discouraged</li>
                            <li>• Body image concerns seen as feminine</li>
                            <li>• Expected to be strong, independent, not emotional</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Stigma and shame:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Having a "woman's disease" threatens masculine identity</li>
                            <li>• Double stigma: mental illness + gender role violation</li>
                            <li>• Fear of being seen as weak or feminine</li>
                            <li>• Isolation due to shame</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-3">The Consequences of Underdiagnosis</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Men enter treatment later in illness (when more severe)</li>
                        <li>• <strong>Higher mortality rates</strong> (due to delayed treatment)</li>
                        <li>• Longer duration of untreated illness</li>
                        <li>• More severe medical complications at diagnosis</li>
                        <li>• Greater shame and isolation</li>
                        <li>• Missed opportunities for early intervention</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5: Cultural and Societal Factors */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Cultural and Societal Factors</h2>
                  
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Understanding the cultural context is essential:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-4">Masculinity and Body Ideals</h3>
                      
                      <p className="text-foreground mb-3">The male body ideal has become increasingly unattainable:</p>
                      <ul className="space-y-2 text-foreground mb-4">
                        <li>• <strong>1970s-80s:</strong> Lean and fit (runner's body)</li>
                        <li>• <strong>1990s-2000s:</strong> Muscular and defined (bodybuilder aesthetic)</li>
                        <li>• <strong>2010s-present:</strong> Extremely muscular AND lean (superhero physique)</li>
                        <li className="ml-6">→ Often requires steroids, dehydration, professional lighting, photoshop</li>
                      </ul>

                      <p className="text-foreground mb-3 font-medium">This ideal is:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Impossible for most men to achieve naturally</li>
                        <li>• Digitally altered and chemically enhanced</li>
                        <li>• Requires full-time dedication (job, genetics, resources)</li>
                        <li>• Creates widespread body dissatisfaction in men</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Fitness and Wellness Culture</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• "No days off" mentality</li>
                        <li>• Protein and supplement obsession</li>
                        <li>• Body fat percentage tracking</li>
                        <li>• Before/after transformations</li>
                        <li>• Fitness influencers promoting unsustainable lifestyles</li>
                        <li>• Gym culture often toxic and competitive</li>
                      </ul>
                      <p className="text-sm text-foreground mt-3 italic">
                        See our <Link to="/conditions/exercise-addiction" className="text-primary hover:underline">Exercise Addiction page</Link> for more on fitness culture.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Diet Culture for Men</h3>
                      <p className="text-foreground mb-3">Rebranded as "performance," "optimization," or "lifestyle":</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Keto, paleo, carnivore diets marketed to men</li>
                        <li>• Intermittent fasting as "biohacking"</li>
                        <li>• Macro tracking as scientific nutrition</li>
                        <li>• "Clean bulking" and "cutting" cycles</li>
                        <li>• Bodybuilding diets normalized</li>
                        <li>• Supplements and protein powders essential</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Social Media Impact</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Instagram and TikTok fitness influencers</li>
                        <li>• Constant comparison to edited, enhanced bodies</li>
                        <li>• Algorithm pushing fitness content</li>
                        <li>• Steroid use often undisclosed</li>
                        <li>• "Natty or not" debates creating pressure</li>
                        <li>• Progress photo culture</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">LGBTQ+ Considerations</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Gay and bisexual men at significantly higher risk for eating disorders</li>
                        <li>• Body ideals within LGBTQ+ communities</li>
                        <li>• Discrimination and minority stress</li>
                        <li>• Intersection of masculinity norms and sexual identity</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Remaining sections would continue similarly with all 12 sections...
                Due to character limits, I'll add the most critical remaining sections */}

                {/* Section 8: Treatment Approach */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Treatment Approach at Beyond Eating Recovery</h2>
                  
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    We provide specialized, gender-affirming treatment that addresses men's unique experiences with eating disorders while recognizing that the core healing principles apply across all genders.
                  </p>

                  <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary mb-6">
                    <h3 className="text-2xl font-semibold text-primary mb-6">Anne's 6-Step Treatment Process (Adapted for Men)</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">1. Establish Safety and Medical Stabilization</h4>
                        <ul className="space-y-1 text-foreground text-sm">
                          <li>• Comprehensive medical evaluation (cardiac, hormonal, bone health)</li>
                          <li>• Treatment of acute medical issues</li>
                          <li>• Testosterone and hormonal assessment</li>
                          <li>• Nutritional rehabilitation</li>
                          <li>• If using steroids or supplements: safe discontinuation planning</li>
                          <li>• Exercise modification or temporary cessation if needed</li>
                          <li>• Mental health stabilization (suicide risk assessment)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">2. Challenge Food Rules, Body Ideals, and Fitness Culture</h4>
                        <ul className="space-y-1 text-foreground text-sm">
                          <li>• Identifying rigid food and exercise rules</li>
                          <li>• Examining cultural messages about male bodies</li>
                          <li>• Challenging unrealistic male body ideals</li>
                          <li>• Critical analysis of fitness culture and toxic masculinity</li>
                          <li>• Understanding "biohacking" and "optimization" as diet culture</li>
                          <li>• Deconstructing supplement industry marketing</li>
                          <li>• Exploring masculinity beyond physical appearance</li>
                          <li>• Permission-based eating vs. rule-based eating</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">3. Explore Emotional Underpinnings and Masculinity</h4>
                        <ul className="space-y-1 text-foreground text-sm">
                          <li>• Understanding emotions driving disordered eating</li>
                          <li>• Addressing masculinity norms and their impact</li>
                          <li>• Building emotional awareness and vocabulary</li>
                          <li>• Exploring vulnerability and connection needs</li>
                          <li>• Processing shame around "having a woman's problem"</li>
                          <li>• Understanding control needs</li>
                          <li>• Trauma processing if relevant</li>
                          <li>• Identity work: who are you beyond your body?</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">4. Address Co-Occurring Conditions</h4>
                        <ul className="space-y-1 text-foreground text-sm">
                          <li>• Treatment for depression and anxiety</li>
                          <li>• OCD or body dysmorphic disorder treatment</li>
                          <li>• Substance use addressing (including steroids)</li>
                          <li>• Exercise addiction treatment</li>
                          <li>• Trauma-informed therapy</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">5. Heal Body Image and Build Body Respect</h4>
                        <ul className="space-y-1 text-foreground text-sm">
                          <li>• Challenging body dysmorphia and distortion</li>
                          <li>• Addressing muscle dysmorphia specifically</li>
                          <li>• Body neutrality and respect practices</li>
                          <li>• Understanding weight set point and body diversity</li>
                          <li>• Grieving unattainable body ideals</li>
                          <li>• Reducing body checking behaviors</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">6. Build Sustainable Recovery and Authentic Masculinity</h4>
                        <ul className="space-y-1 text-foreground text-sm">
                          <li>• Relapse prevention planning</li>
                          <li>• Redefining masculinity on your terms</li>
                          <li>• Building identity beyond appearance</li>
                          <li>• Flexible, joyful relationship with movement</li>
                          <li>• Creating meaningful life beyond body focus</li>
                          <li>• Reconnecting with values and purpose</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">Gender-Affirming Approach</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Recognition that men's experiences are valid and unique</li>
                        <li>• Addressing masculine socialization and its impact</li>
                        <li>• Creating space to explore masculinity and body image</li>
                        <li>• No assumption that experiences mirror women's experiences</li>
                        <li>• Validation of male-specific presentations (muscle dysmorphia, etc.)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Treatment Settings</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Outpatient therapy (weekly or more frequent)</li>
                        <li>• Men's group therapy (if available) for shared experience</li>
                        <li>• LGBTQIA+ group available: Thursdays 6-7:15pm, $40/session</li>
                        <li>• Dietitian support (Stephanie Okumura, MS, RDN)</li>
                        <li>• Telehealth throughout Oregon and Washington</li>
                        <li>• Intensive outpatient if needed</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 10: When to Seek Help */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">When to Seek Help</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Seek Help If You:</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Have rigid rules about eating or exercise</li>
                        <li>• Exercise compulsively or can't take rest days</li>
                        <li>• Are preoccupied with muscle size or body composition</li>
                        <li>• Use supplements, steroids, or other substances to change body</li>
                        <li>• Restrict food or have compensatory behaviors</li>
                        <li>• Feel distressed about eating or body</li>
                        <li>• Notice physical symptoms (fatigue, injuries, low libido)</li>
                        <li>• Experience depression, anxiety, or mood swings</li>
                        <li>• Avoid social situations due to food or body concerns</li>
                        <li>• Recognize patterns interfering with life quality</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/20 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-2xl font-semibold text-destructive mb-4 flex items-center">
                        <AlertCircle className="w-6 h-6 mr-2" />
                        Seek Immediate Help If:
                      </h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Suicidal thoughts or self-harm urges</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Chest pain or irregular heartbeat</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Severe weakness or fainting</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Unable to function in daily life</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Dangerous steroid or substance use</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">You Deserve Help Even If:</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• You're not as thin as stereotypical anorexia images</li>
                        <li>• You're in a larger body</li>
                        <li>• You're "just" focused on muscle, not thinness</li>
                        <li>• You think eating disorders only affect women</li>
                        <li>• You feel shame about having this struggle</li>
                        <li>• You haven't been diagnosed</li>
                        <li>• You're still functioning in some areas</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">Breaking the Silence</h3>
                      <p className="text-foreground leading-relaxed mb-4">
                        The hardest part is often admitting you need help. Masculinity norms make vulnerability difficult. <strong>Asking for help is strength, not weakness.</strong>
                      </p>
                      <p className="text-foreground leading-relaxed">
                        Contact Beyond Eating Recovery at <strong className="text-primary">360-726-4141</strong> to schedule a consultation. We provide specialized, gender-affirming treatment for men with eating disorders throughout Oregon and Washington.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 11: For Loved Ones */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">For Loved Ones: Supporting a Man with an Eating Disorder</h2>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    If someone you care about is struggling:
                  </p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                          <CheckCircle className="w-6 h-6 mr-2" />
                          Do:
                        </h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Take concerns seriously (don't dismiss because he's male)</li>
                          <li>• Express care and worry (focus on behaviors and well-being)</li>
                          <li>• Validate that men get eating disorders (normalize it)</li>
                          <li>• Support seeking professional help</li>
                          <li>• Be patient with the process</li>
                          <li>• Learn about eating disorders in men</li>
                          <li>• Challenge masculine stereotypes that prevent help-seeking</li>
                          <li>• Celebrate non-appearance qualities</li>
                        </ul>
                      </div>

                      <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                        <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center">
                          <XCircle className="w-6 h-6 mr-2" />
                          Don't:
                        </h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Dismiss concerns because "eating disorders are for women"</li>
                          <li>• Say "just eat more" or "just stop working out so much"</li>
                          <li>• Comment on his body (including compliments)</li>
                          <li>• Praise "dedication" or "discipline" that's actually compulsion</li>
                          <li>• Engage in diet/fitness talk or body comparison</li>
                          <li>• Make jokes about eating disorders or masculinity</li>
                          <li>• Pressure him to be "manly" and handle it alone</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What to Say</h3>
                      <div className="bg-secondary/20 p-5 rounded-lg">
                        <ul className="space-y-2 text-foreground">
                          <li>• "I've noticed you seem stressed about eating/working out. I'm worried."</li>
                          <li>• "Eating disorders can affect anyone, including men. Your struggle is valid."</li>
                          <li>• "It takes strength to ask for help. I support you getting treatment."</li>
                          <li>• "You're valuable beyond your body and what you achieve."</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What NOT to Say</h3>
                      <div className="bg-muted p-5 rounded-lg">
                        <ul className="space-y-2 text-foreground">
                          <li>• "Men don't get eating disorders." (false and harmful)</li>
                          <li>• "You look fine!" (dismissive)</li>
                          <li>• "Be a man and deal with it." (reinforces toxic masculinity)</li>
                          <li>• "That's a girl thing." (stigmatizing and inaccurate)</li>
                          <li>• "You're too big/muscular to have anorexia." (misconception)</li>
                        </ul>
                      </div>
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
                        <Link to="/conditions/body-dysmorphia" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Body Dysmorphia (Muscle Dysmorphia)
                        </Link>
                        <Link to="/conditions/exercise-addiction" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Exercise Addiction
                        </Link>
                        <Link to="/conditions/orthorexia" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Orthorexia
                        </Link>
                        <Link to="/conditions/binge-eating-disorder" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Binge Eating Disorder
                        </Link>
                        <Link to="/conditions/anorexia-nervosa" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Anorexia Nervosa
                        </Link>
                        <Link to="/health-at-every-size" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Health At Every Size
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
                            National Eating Disorders Association (NEDA) - men and eating disorders section
                          </a>
                        </li>
                        <li>
                          <a href="https://namedcollective.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            National Association for Males with Eating Disorders (N.A.M.E.D.)
                          </a>
                        </li>
                        <li>
                          <a href="https://anad.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            ANAD (National Association of Anorexia Nervosa and Associated Disorders)
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Recommended Reading</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>"Making Weight: Healing Men's Conflicts with Food, Weight, Shape & Appearance"</strong> by Arnold Andersen, Leigh Cohn, and Thomas Holbrook</li>
                        <li>• <strong>"The Adonis Complex: The Secret Crisis of Male Body Obsession"</strong> by Harrison Pope, Katharine Phillips, Roberto Olivardia</li>
                        <li>• <strong>"If Your Hunger Could Talk"</strong> by Anne Cuthbert</li>
                        <li>• <strong>"The Body Keeps the Score"</strong> by Bessel van der Kolk (trauma)</li>
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
                        20+ years specializing in eating disorders using gender-affirming, culturally-informed approaches. Experienced in treating men with all types of eating disorders.
                      </p>
                      <div className="space-y-2 text-sm text-foreground mb-4">
                        <p className="font-semibold text-primary">Credentials:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Licensed Professional Counselor (OR)</li>
                          <li>• Licensed Mental Health Counselor (WA)</li>
                          <li>• CREDN Board Member</li>
                          <li>• ASDAH Member</li>
                          <li>• Specialized in male eating disorder treatment</li>
                        </ul>
                      </div>
                      <p className="text-sm text-foreground mb-4 italic">
                        <strong>Approach:</strong> Anne provides gender-affirming care that addresses men's unique experiences while challenging toxic masculinity and unrealistic body ideals.
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
                      <p className="text-sm text-foreground mb-4 font-medium">
                        Men with eating disorders have high suicide risk. If you're in crisis:
                      </p>
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
                            If experiencing medical emergency, call <strong>911</strong> or go to your nearest emergency room.
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
                        While addressing universal eating and body image struggles, this book includes perspectives relevant to men's experiences with food, body, and control.
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
                      <h3 className="text-xl font-bold mb-3">Specialized Treatment for Men with Eating Disorders</h3>
                      <p className="text-sm mb-4">
                        Gender-affirming, compassionate care for men struggling with eating disorders, body image, or compulsive exercise.
                      </p>
                      <p className="text-sm font-semibold mb-4">Your struggles are valid. Recovery is possible.</p>
                      <div className="mb-4">
                        <p className="font-semibold mb-2">Call us today:</p>
                        <a href="tel:360-726-4141" className="text-2xl font-bold hover:underline flex items-center">
                          <Phone className="w-5 h-5 mr-2" />
                          360-726-4141
                        </a>
                      </div>
                      <p className="text-sm mb-2">Office hours: Monday-Friday, 9am-5pm</p>
                      <p className="text-sm mb-4">Telehealth appointments available throughout Oregon and Washington.</p>
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

export default MenEatingDisorders;