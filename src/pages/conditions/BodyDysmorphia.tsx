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

const BodyDysmorphia = () => {
  return (
    <>
      <Helmet>
        <title>Body Dysmorphia (BDD) Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta 
          name="description" 
          content="Evidence-based CBT and ERP therapy for body dysmorphic disorder. Specialized treatment addressing appearance preoccupation and co-occurring eating disorders. Oregon & Washington—call 360-726-4141." 
        />
        <meta 
          name="keywords" 
          content="body dysmorphia treatment, body dysmorphic disorder therapy, BDD counseling Portland, BDD treatment Vancouver WA, appearance preoccupation help, CBT for BDD, ERP therapy, body image disorder treatment, eating disorder and BDD, muscle dysmorphia treatment, telehealth BDD therapy Oregon Washington" 
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
                  <li className="text-foreground font-medium">Body Dysmorphia</li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-b from-secondary/20 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Body Dysmorphia Treatment in Portland & Vancouver
                </h1>
                <p className="text-lg text-foreground leading-relaxed">
                  If you're consumed by perceived flaws in your appearance that others don't see—spending hours checking mirrors, avoiding social situations, or seeking cosmetic procedures—you may be experiencing body dysmorphic disorder (BDD). Body dysmorphia often co-occurs with eating disorders and shares similar roots in a culture obsessed with appearance. At Beyond Eating Recovery, we provide compassionate, specialized treatment for body dysmorphia throughout Oregon and Washington, addressing both the symptoms and the systemic factors that fuel appearance preoccupation.
                </p>
              </div>
            </div>
          </section>

          {/* Two-Column Layout */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - 70% */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Section 1: What is Body Dysmorphia? */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">What is Body Dysmorphia?</h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Body dysmorphic disorder (BDD), commonly called body dysmorphia, is a mental health condition characterized by obsessive preoccupation with perceived flaws or defects in physical appearance that are not observable or appear minor to others. This preoccupation causes significant distress and impairment in daily functioning.
                    </p>

                    <div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-primary my-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Key Features of BDD</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Obsessive focus on one or more perceived physical "flaws"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Repetitive behaviors (mirror checking, reassurance seeking, cosmetic procedures)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Significant distress and impaired functioning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Distorted perception that feels completely real to the person experiencing it</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Time-consuming preoccupation (often 3+ hours daily)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted p-6 rounded-lg my-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">What Body Dysmorphia is NOT</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Normal appearance concerns or insecurity</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Vanity or self-absorption</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Attention-seeking behavior</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Something you can just "get over"</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Related to actual physical deformity</span>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Important Distinction: Body Dysmorphia vs. Poor Body Image</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="bg-secondary/30 p-5 rounded-lg">
                        <h4 className="font-semibold text-primary mb-3">Poor Body Image</h4>
                        <ul className="space-y-2 text-sm text-foreground">
                          <li>• General dissatisfaction with appearance</li>
                          <li>• Common in diet culture</li>
                          <li>• Often focused on weight/shape</li>
                          <li>• Doesn't severely impair functioning</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/30 p-5 rounded-lg">
                        <h4 className="font-semibold text-primary mb-3">Body Dysmorphia</h4>
                        <ul className="space-y-2 text-sm text-foreground">
                          <li>• Obsessive, distorted perception</li>
                          <li>• Severely impairs functioning</li>
                          <li>• Often focused on facial features or specific body parts beyond weight</li>
                          <li>• Requires specialized treatment</li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed font-medium">
                      Both can exist together, and both deserve treatment.
                    </p>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Clinical Classification</h3>
                    <p className="text-foreground leading-relaxed">
                      Body dysmorphic disorder is classified in the DSM-5 under <strong>Obsessive-Compulsive and Related Disorders</strong>, not eating disorders. However, there is significant overlap:
                    </p>
                    <ul className="space-y-2 text-foreground ml-6">
                      <li>• Up to 32% of people with eating disorders also have BDD</li>
                      <li>• Both involve body image distortion</li>
                      <li>• Both are exacerbated by appearance-focused culture</li>
                      <li>• Treatment approaches share similarities</li>
                    </ul>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent my-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Muscle Dysmorphia Subtype</h3>
                      <p className="text-foreground">
                        A specific form of BDD where the person is preoccupied with the idea that their body is too small or insufficiently muscular, despite often being very muscular. More common in men and people who engage in bodybuilding.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2: Signs and Symptoms */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Signs and Symptoms</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Preoccupation Patterns</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <span className="mr-2 text-primary font-bold">•</span>
                          <span>Obsessive focus on perceived flaws (most commonly: skin, hair, nose, eyes, teeth, weight, muscle size, body shape, facial features)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-primary font-bold">•</span>
                          <span>Spending 3+ hours daily thinking about the perceived flaw</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-primary font-bold">•</span>
                          <span>Belief that others notice, judge, or mock the perceived flaw</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-primary font-bold">•</span>
                          <span>Comparing appearance to others constantly</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-primary font-bold">•</span>
                          <span>Thinking appearance is "abnormal," "deformed," or "disgusting"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-primary font-bold">•</span>
                          <span>Distorted perception that feels completely real</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Repetitive Behaviors (Compulsions)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-foreground">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span><strong>Mirror checking:</strong> Repeatedly checking appearance in mirrors, windows, phone cameras, or reflective surfaces</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span><strong>Mirror avoidance:</strong> Complete avoidance of mirrors or reflective surfaces</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span><strong>Camouflaging:</strong> Using makeup, clothing, hats, hair positioning, body posture to hide perceived flaws</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span><strong>Reassurance seeking:</strong> Repeatedly asking others about appearance</span>
                          </li>
                        </ul>
                        <ul className="space-y-2 text-foreground">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span><strong>Skin picking or hair pulling:</strong> Attempting to "fix" perceived flaws</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span><strong>Excessive grooming:</strong> Hours spent on hair, makeup, clothing</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span><strong>Comparison checking:</strong> Constantly comparing features to others</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span><strong>Photo avoidance or checking:</strong> Avoiding photos or obsessively reviewing photos of self</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Mental/Emotional Symptoms</h3>
                      <div className="bg-secondary/20 p-6 rounded-lg">
                        <ul className="grid md:grid-cols-2 gap-3 text-foreground">
                          <li>• Intrusive thoughts about appearance</li>
                          <li>• Severe anxiety and distress</li>
                          <li>• Shame and embarrassment about appearance</li>
                          <li>• Depression (very common with BDD)</li>
                          <li>• Low self-esteem and self-worth tied to appearance</li>
                          <li>• Suicidal thoughts (BDD has high suicide risk)</li>
                          <li>• Difficulty concentrating due to appearance preoccupation</li>
                          <li>• Perfectionism related to appearance</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Behavioral Impact</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Avoiding social situations, work, or school</li>
                        <li>• Difficulty maintaining eye contact</li>
                        <li>• Seeking repeated cosmetic procedures or dermatological treatments</li>
                        <li>• Spending excessive money on appearance-related products/procedures</li>
                        <li>• Arriving late or leaving early to avoid being seen</li>
                        <li>• Difficulty being photographed</li>
                        <li>• Avoiding intimacy or relationships</li>
                        <li>• Isolation and withdrawal</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Physical Behaviors</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Skin damage from picking or excessive washing</li>
                        <li>• Hair loss from pulling or over-styling</li>
                        <li>• Complications from cosmetic procedures</li>
                        <li>• Sleep disruption from preoccupation</li>
                        <li>• Fatigue from time spent on appearance behaviors</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-primary mb-3">When BDD Co-Occurs with Eating Disorders</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Preoccupation may focus on weight/body shape (overlapping concerns)</li>
                        <li>• Disordered eating used to try to change appearance</li>
                        <li>• Both conditions fuel each other</li>
                        <li>• Higher severity and complexity</li>
                        <li>• Often one condition is recognized while the other is missed</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 3: Common Areas of Focus */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Common Areas of Focus</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Most Common Areas of Preoccupation</h3>
                      
                      <div className="bg-secondary/20 p-6 rounded-lg mb-6">
                        <h4 className="text-xl font-semibold text-primary mb-4">Facial Features (Most Common in BDD)</h4>
                        <div className="grid md:grid-cols-2 gap-3 text-foreground">
                          <ul className="space-y-2">
                            <li>• Skin (acne, scars, wrinkles, texture, color, blemishes)</li>
                            <li>• Nose (size, shape, symmetry)</li>
                            <li>• Eyes (size, shape, symmetry, bags, dark circles)</li>
                            <li>• Hair (thinning, texture, hairline, balding)</li>
                            <li>• Teeth (color, alignment, size)</li>
                          </ul>
                          <ul className="space-y-2">
                            <li>• Jaw or chin (shape, size, definition)</li>
                            <li>• Lips (size, shape, symmetry)</li>
                            <li>• Ears (size, protrusion)</li>
                            <li>• Facial symmetry or proportions</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-secondary/20 p-6 rounded-lg mb-6">
                        <h4 className="text-xl font-semibold text-primary mb-4">Body Areas</h4>
                        <ul className="space-y-2 text-foreground">
                          <li>• Overall body size or shape</li>
                          <li>• Specific body parts (breasts, genitals, buttocks, thighs, stomach)</li>
                          <li>• Muscle size or definition (especially in muscle dysmorphia)</li>
                          <li>• Body hair or lack of hair</li>
                          <li>• Skin anywhere on body</li>
                          <li>• Body symmetry</li>
                          <li>• Scars or marks</li>
                        </ul>
                      </div>

                      <p className="text-foreground leading-relaxed italic">
                        <strong>Multiple areas:</strong> Many people with BDD focus on multiple perceived flaws, and the focus may shift over time.
                      </p>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">Important Note on Treatment-Seeking</h3>
                      <p className="text-foreground mb-4">
                        People with BDD often seek cosmetic surgery, dermatology treatments, or other medical interventions. However:
                      </p>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>These procedures rarely improve BDD symptoms</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>The focus typically shifts to another perceived flaw</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Some surgeons now screen for BDD before procedures</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Mental health treatment is the appropriate intervention</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 4: Causes and Contributing Factors */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Causes and Contributing Factors</h2>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    Body dysmorphic disorder develops from a complex interaction of biological, psychological, and sociocultural factors:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Neurobiological Factors</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Brain differences in visual processing and emotional regulation</li>
                        <li>• Genetic predisposition (BDD often runs in families)</li>
                        <li>• Obsessive-compulsive tendencies</li>
                        <li>• Anxiety and depression vulnerabilities</li>
                        <li>• Neurotransmitter imbalances (particularly serotonin)</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Psychological Factors</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Perfectionism and rigid thinking patterns</li>
                        <li>• Negative self-concept and low self-esteem</li>
                        <li>• Trauma history (particularly appearance-related trauma)</li>
                        <li>• Childhood adversity or neglect</li>
                        <li>• Bullying or teasing about appearance</li>
                        <li>• Difficulty with emotional regulation</li>
                        <li>• Anxiety disorders or OCD</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Developmental Experiences</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Criticism about appearance during childhood</li>
                        <li>• Parental focus on appearance</li>
                        <li>• Teasing or bullying (particularly during adolescence)</li>
                        <li>• Social rejection related to appearance</li>
                        <li>• Traumatic experiences involving body or appearance</li>
                        <li>• Growing up in appearance-focused family or culture</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-4">Sociocultural Factors: A MAJOR Contributor</h3>
                      <p className="text-foreground mb-4 font-medium">This is often underemphasized but crucial:</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Appearance-Obsessed Culture:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Constant messaging that appearance determines worth</li>
                            <li>• Beauty standards that are narrow, unrealistic, and digitally altered</li>
                            <li>• Social media creating comparison culture and filtered "reality"</li>
                            <li>• Multi-billion dollar beauty, diet, and cosmetic surgery industries</li>
                            <li>• Media portrayal of "before/after" transformations</li>
                            <li>• Objectification and commodification of bodies</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Weight Stigma and Diet Culture:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Fat phobia creating terror of larger bodies</li>
                            <li>• Thin ideal promoted as moral imperative</li>
                            <li>• Constant appearance monitoring normalized</li>
                            <li>• Body dissatisfaction considered universal and acceptable</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Specific Cultural Pressures:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Racism and Eurocentric beauty standards</li>
                            <li>• Colorism within communities of color</li>
                            <li>• Homophobia and transphobia affecting body/appearance</li>
                            <li>• Ageism and fear of aging</li>
                            <li>• Ableism and narrow definitions of "normal" bodies</li>
                            <li>• Gender norms and appearance expectations</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Social Media & Digital Culture:</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Filters and editing creating impossible standards</li>
                            <li>• Comparison to curated, manipulated images</li>
                            <li>• "Snapchat dysmorphia" (seeking surgery to look like filtered self)</li>
                            <li>• Algorithm-driven comparison loops</li>
                            <li>• Appearance-based feedback (likes, comments)</li>
                            <li>• Influencer culture promoting appearance perfectionism</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Triggering Events</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Puberty and physical changes</li>
                        <li>• Comments about appearance (even "compliments")</li>
                        <li>• Romantic rejection</li>
                        <li>• Life transitions (school, work, relationships)</li>
                        <li>• Medical procedures or injuries affecting appearance</li>
                        <li>• Major life stressors</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary mt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">The Cultural Context Matters</h3>
                      <p className="text-foreground leading-relaxed">
                        While BDD has neurobiological components, it exists within and is exacerbated by a culture that:
                      </p>
                      <ul className="space-y-2 text-foreground mt-3">
                        <li>• Teaches us to obsess over appearance</li>
                        <li>• Profits from our insecurity</li>
                        <li>• Creates impossible standards</li>
                        <li>• Punishes deviation from narrow norms</li>
                      </ul>
                      <p className="text-foreground leading-relaxed mt-4 font-medium">
                        Treatment must address BOTH individual symptoms AND cultural factors.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Health Consequences and Impact */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Health Consequences and Impact</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-destructive mb-4">Mental Health Impact</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span><strong>Severe depression</strong> (75% of people with BDD experience depression)</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span><strong>Very high suicide risk</strong> (BDD has one of the highest suicide rates of any mental health condition)</span>
                        </li>
                        <li>• Anxiety disorders</li>
                        <li>• Social anxiety</li>
                        <li>• Obsessive-compulsive disorder</li>
                        <li>• Low self-esteem and self-worth</li>
                        <li>• Shame and humiliation</li>
                        <li>• Hopelessness about change</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Life Quality Reduction</h3>
                      <ul className="space-y-2 text-foreground">
                        <li><strong>Time consumed:</strong> Hours daily spent on appearance preoccupation and behaviors</li>
                        <li><strong>Mental space:</strong> Constant intrusive thoughts about appearance</li>
                        <li><strong>Financial cost:</strong> Money spent on products, procedures, treatments</li>
                        <li><strong>Limited functioning:</strong> Difficulty attending work, school, social events</li>
                        <li><strong>Missed opportunities:</strong> Avoiding experiences due to appearance concerns</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Social and Relationship Impact</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Social isolation and withdrawal</li>
                        <li>• Difficulty forming or maintaining relationships</li>
                        <li>• Avoidance of dating or intimacy</li>
                        <li>• Strained family relationships</li>
                        <li>• Reduced quality of existing relationships</li>
                        <li>• Inability to be present in social situations</li>
                        <li>• Loneliness and disconnection</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Academic and Career Impact</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Missing school or work</li>
                        <li>• Difficulty concentrating</li>
                        <li>• Underperformance due to preoccupation</li>
                        <li>• Avoiding presentations or public speaking</li>
                        <li>• Limited career opportunities due to avoidance</li>
                        <li>• Leaving jobs or school due to appearance concerns</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Physical Consequences</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Skin damage from picking, excessive washing, or procedures</li>
                        <li>• Hair damage or loss</li>
                        <li>• Complications from cosmetic surgeries or procedures</li>
                        <li>• Infections from skin picking</li>
                        <li>• Scars or permanent damage</li>
                        <li>• Side effects from excessive product use</li>
                        <li>• Sleep disruption</li>
                        <li>• Fatigue and exhaustion</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Financial Consequences</h3>
                      <p className="text-foreground mb-3">Excessive spending on:</p>
                      <ul className="space-y-2 text-foreground ml-6">
                        <li>• Cosmetic products and treatments</li>
                        <li>• Dermatology appointments</li>
                        <li>• Cosmetic procedures</li>
                        <li>• Clothing or camouflaging items</li>
                        <li>• Multiple medical consultations</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-xl font-semibold text-primary mb-3">When BDD Co-Occurs with Eating Disorders</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• More severe symptoms of both conditions</li>
                        <li>• Higher medical and psychological risk</li>
                        <li>• Increased suicide risk</li>
                        <li>• More complex treatment needs</li>
                        <li>• Longer recovery timeline</li>
                        <li>• Both conditions require simultaneous treatment</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Intersection with Other Mental Health Conditions</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Substance use (attempting to cope with distress)</li>
                        <li>• Self-harm behaviors</li>
                        <li>• Agoraphobia (fear of leaving home)</li>
                        <li>• Eating disorders</li>
                        <li>• Obsessive-compulsive disorder</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 6: Diagnosis and Assessment */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Diagnosis and Assessment</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">DSM-5 Diagnostic Criteria for Body Dysmorphic Disorder</h3>
                      <ol className="space-y-4 text-foreground">
                        <li>
                          <strong>1.</strong> Preoccupation with one or more perceived defects or flaws in physical appearance that are not observable or appear slight to others
                        </li>
                        <li>
                          <strong>2.</strong> Repetitive behaviors (mirror checking, excessive grooming, skin picking, reassurance seeking) or mental acts (comparing appearance to others) in response to appearance concerns
                        </li>
                        <li>
                          <strong>3.</strong> The preoccupation causes clinically significant distress or impairment in social, occupational, or other important areas of functioning
                        </li>
                        <li>
                          <strong>4.</strong> The appearance preoccupation is not better explained by concerns with body fat or weight in an individual whose symptoms meet diagnostic criteria for an eating disorder
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Specifiers</h3>
                      <ul className="space-y-2 text-foreground">
                        <li><strong>With muscle dysmorphia:</strong> Preoccupied with the idea that body build is too small or insufficiently muscular</li>
                        <li><strong>With good or fair insight:</strong> Recognizes BDD beliefs are probably not true</li>
                        <li><strong>With poor insight:</strong> Thinks BDD beliefs are probably true</li>
                        <li><strong>With absent insight/delusional beliefs:</strong> Completely convinced BDD beliefs are true</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Assessment Process</h3>
                      <p className="text-foreground mb-4">A comprehensive evaluation includes:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Detailed clinical interview about appearance concerns and behaviors</li>
                        <li>• Assessment of time spent on preoccupation daily</li>
                        <li>• Evaluation of specific areas of concern</li>
                        <li>• Understanding of repetitive behaviors and compulsions</li>
                        <li>• Assessment of insight level</li>
                        <li>• Exploration of developmental history and triggers</li>
                        <li>• Psychological evaluation (depression, anxiety, OCD, suicidality)</li>
                        <li>• Assessment for co-occurring eating disorders</li>
                        <li>• Medical history (previous procedures, treatments sought)</li>
                        <li>• Social and functional impairment evaluation</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Screening Questions</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Are you very worried about your appearance in any way?</li>
                        <li>• Do these concerns preoccupy you? (Think about them a lot, hard to stop thinking about them?)</li>
                        <li>• What effect do these concerns have on your life?</li>
                        <li>• Do they cause you a lot of distress or interfere with functioning?</li>
                        <li>• Do you spend time checking or trying to fix the perceived flaws?</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Challenges in Diagnosis</h3>
                      <ul className="space-y-2 text-foreground">
                        <li><strong>Shame and secrecy:</strong> People with BDD often hide symptoms</li>
                        <li><strong>Insight problems:</strong> May not recognize thoughts as distorted</li>
                        <li><strong>Focus on cosmetic solutions:</strong> Seeking medical treatments instead of mental health care</li>
                        <li><strong>Co-occurring conditions:</strong> Other diagnoses may overshadow BDD</li>
                        <li><strong>Cultural normalization:</strong> Appearance preoccupation is so common it's dismissed</li>
                        <li><strong>Misdiagnosis:</strong> Often misdiagnosed as depression, anxiety, or OCD alone</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Why Diagnosis Matters</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• BDD requires specific treatment approaches</li>
                        <li>• High suicide risk requires awareness and intervention</li>
                        <li>• Co-occurring conditions need integrated treatment</li>
                        <li>• Helps people understand their experience</li>
                        <li>• Validates that this is a treatable condition</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-foreground leading-relaxed font-medium">
                        <strong>You don't need formal diagnosis to seek help:</strong> If appearance preoccupation is causing distress or impacting your life, you deserve support regardless of whether you meet full diagnostic criteria.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7: Treatment Approach */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Treatment Approach at Beyond Eating Recovery</h2>
                  
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Body dysmorphic disorder is highly treatable with appropriate interventions. Our approach addresses both the symptoms and the cultural factors that fuel appearance obsession.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold text-primary mb-6">Anne's 6-Step Treatment Process (Adapted for BDD)</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">1. Stabilize Safety and Functioning</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Suicide risk assessment and safety planning (critical with BDD)</li>
                            <li>• Addressing severe depression and anxiety</li>
                            <li>• Medication evaluation if appropriate (SSRIs can be helpful for BDD)</li>
                            <li>• Reducing immediate harm (skin picking, excessive procedures)</li>
                            <li>• Establishing therapeutic relationship and trust</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">2. Address Obsessive-Compulsive Patterns</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• <strong>Cognitive-behavioral therapy (CBT) for BDD</strong> - gold standard treatment</li>
                            <li>• <strong>Exposure and response prevention (ERP):</strong>
                              <ul className="ml-6 mt-2 space-y-1">
                                <li>- Gradual exposure to avoided situations</li>
                                <li>- Reducing mirror checking and other compulsions</li>
                                <li>- Resisting reassurance seeking</li>
                                <li>- Tolerating anxiety without performing rituals</li>
                              </ul>
                            </li>
                            <li>• Cognitive restructuring of distorted thoughts</li>
                            <li>• Reality testing and perspective shifting</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">3. Challenge Appearance-Based Beliefs and Cultural Messages</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Identifying and examining appearance-related core beliefs</li>
                            <li>• Exploring origins of appearance standards</li>
                            <li>• Critical analysis of beauty culture, social media, diet culture</li>
                            <li>• Understanding how societal messages create appearance obsession</li>
                            <li>• Media literacy and recognizing manipulation</li>
                            <li>• Challenging objectification and self-objectification</li>
                            <li>• Exploring identity beyond appearance</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">4. Build Emotional Regulation and Coping Skills</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Understanding emotions that drive appearance focus</li>
                            <li>• Developing distress tolerance</li>
                            <li>• Mindfulness practices</li>
                            <li>• Self-compassion cultivation</li>
                            <li>• Alternative coping strategies</li>
                            <li>• Building window of tolerance for discomfort</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">5. Address Underlying Trauma and Core Issues</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Trauma-informed therapy</li>
                            <li>• Processing appearance-related trauma (teasing, bullying, rejection)</li>
                            <li>• EMDR or other trauma therapies as appropriate</li>
                            <li>• Healing attachment wounds</li>
                            <li>• Addressing perfectionism and shame</li>
                            <li>• Building authentic self-concept</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">6. Build Life Beyond Appearance Focus</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Values clarification (what matters beyond appearance?)</li>
                            <li>• Reconnecting with activities and relationships</li>
                            <li>• Developing identity not centered on appearance</li>
                            <li>• Relapse prevention</li>
                            <li>• Building meaningful life</li>
                            <li>• Ongoing practice and integration</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Specialized Treatment Modalities</h3>
                      
                      <div className="bg-accent/10 p-6 rounded-lg mb-4 border-l-4 border-accent">
                        <h4 className="text-xl font-semibold text-primary mb-3">Cognitive-Behavioral Therapy (CBT) for BDD</h4>
                        <p className="text-foreground mb-3">The most evidence-based treatment:</p>
                        <ul className="space-y-2 text-foreground">
                          <li>• Cognitive restructuring (challenging distorted thoughts)</li>
                          <li>• Behavioral experiments</li>
                          <li>• Exposure therapy (gradual, supported exposure to feared situations)</li>
                          <li>• Response prevention (resisting compulsions)</li>
                          <li>• Perceptual retraining (accurate assessment of appearance)</li>
                          <li>• Mindfulness techniques</li>
                        </ul>
                      </div>

                      <div className="bg-accent/10 p-6 rounded-lg mb-4 border-l-4 border-accent">
                        <h4 className="text-xl font-semibold text-primary mb-3">Exposure and Response Prevention (ERP)</h4>
                        <ul className="space-y-2 text-foreground">
                          <li>• Exposing to mirrors/photos/social situations without performing compulsions</li>
                          <li>• Resisting checking, comparing, camouflaging</li>
                          <li>• Tolerating anxiety without rituals</li>
                          <li>• Reducing avoidance behaviors</li>
                          <li>• Building confidence through repeated exposures</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-3">Additional Therapeutic Approaches</h4>
                        <ul className="space-y-2 text-foreground">
                          <li>• Acceptance and Commitment Therapy (ACT)</li>
                          <li>• Mindfulness-based interventions</li>
                          <li>• Dialectical Behavior Therapy (DBT) skills</li>
                          <li>• Compassion-focused therapy</li>
                          <li>• Group therapy for connection and reducing shame</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Addressing Co-Occurring Eating Disorders</h3>
                      <p className="text-foreground mb-3">When BDD and eating disorders co-exist:</p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Integrated treatment addressing both conditions</li>
                        <li>• Weight-neutral, HAES®-aligned approach</li>
                        <li>• Understanding how both conditions fuel each other</li>
                        <li>• Simultaneous work on body image from both angles</li>
                        <li>• Coordinated care with dietitian if needed</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">What We DON'T Do</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Encourage cosmetic procedures (these don't treat BDD)</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Provide reassurance about appearance (reinforces checking)</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Focus on weight loss or appearance change</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Ignore cultural and systemic factors</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Medication</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>SSRIs</strong> (like fluoxetine, sertraline) can be effective for BDD</li>
                        <li>• Often higher doses than used for depression</li>
                        <li>• Medication evaluation available through psychiatric consultation</li>
                        <li>• Medication alone is less effective than medication + therapy</li>
                        <li>• We coordinate with prescribers for comprehensive care</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Treatment Settings</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Individual therapy (weekly or more frequent)</li>
                        <li>• Group therapy for shared experience and support</li>
                        <li>• Telehealth throughout Oregon and Washington</li>
                        <li>• Intensive outpatient if needed</li>
                        <li>• Coordination with higher levels of care if appropriate</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 8: Recovery and What to Expect */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Recovery and What to Expect</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-lg font-semibold text-primary mb-3">
                        Recovery from body dysmorphic disorder IS possible
                      </p>
                      <p className="text-foreground leading-relaxed">
                        With appropriate treatment, most people experience significant improvement in symptoms and quality of life.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What Recovery Looks Like</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Significantly reduced time spent on appearance preoccupation (from hours to minutes)</li>
                        <li>• Ability to tolerate appearance without performing compulsions</li>
                        <li>• Reduced distress about perceived flaws</li>
                        <li>• Improved insight (recognizing thoughts as distorted)</li>
                        <li>• Participating in life without appearance-based avoidance</li>
                        <li>• Better mood and reduced depression/anxiety</li>
                        <li>• Improved relationships and social functioning</li>
                        <li>• Identity that includes but isn't dominated by appearance</li>
                        <li>• Ability to challenge cultural appearance messages</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Realistic Expectations</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• You may still notice the perceived flaw, but it won't control you</li>
                        <li>• Recovery doesn't mean you think you're perfect</li>
                        <li>• Some appearance concerns may remain (this is normal)</li>
                        <li>• The goal is reduced distress and improved functioning—not perfection</li>
                        <li>• You'll have tools to manage difficult moments</li>
                        <li>• Recovery is possible even without physical appearance changing</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Timeline</h3>
                      <div className="space-y-4">
                        <div className="bg-secondary/20 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">Early Treatment (Months 1-6)</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Learning CBT/ERP skills</li>
                            <li>• Beginning exposure work</li>
                            <li>• Symptom reduction starting</li>
                            <li>• Safety stabilized</li>
                          </ul>
                        </div>
                        <div className="bg-secondary/20 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">Middle Treatment (Months 6-18)</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Deeper cognitive work</li>
                            <li>• Addressing trauma and core beliefs</li>
                            <li>• Significant symptom improvement</li>
                            <li>• Increased functioning</li>
                          </ul>
                        </div>
                        <div className="bg-secondary/20 p-5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">Late Treatment/Maintenance (18+ Months)</h4>
                          <ul className="space-y-1 text-foreground text-sm">
                            <li>• Sustained improvement</li>
                            <li>• Occasional challenges managed with tools</li>
                            <li>• Ongoing practice</li>
                            <li>• Living fully</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-foreground mt-4 italic">Treatment typically requires 6-12+ months of consistent therapy.</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Treatment Requirements</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Commitment to exposure exercises between sessions</li>
                        <li>• Willingness to tolerate discomfort</li>
                        <li>• Patience with the process</li>
                        <li>• Support system</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Challenges in Recovery</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Appearance-focused culture makes recovery harder</li>
                        <li>• Social media and constant appearance messaging</li>
                        <li>• Family/friends who don't understand ("just stop looking in the mirror")</li>
                        <li>• Urge to seek cosmetic procedures</li>
                        <li>• Difficult emotions surfacing as appearance focus reduces</li>
                        <li>• Setbacks during stressful times</li>
                        <li>• Cultural reinforcement of appearance obsession</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What Helps</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Consistent therapy with BDD-specialized provider</li>
                        <li>• Medication if appropriate</li>
                        <li>• Support from others who understand</li>
                        <li>• Limiting social media or curating carefully</li>
                        <li>• Building life beyond appearance focus</li>
                        <li>• Self-compassion practice</li>
                        <li>• Understanding cultural context</li>
                        <li>• Patience and persistence</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-3">The Paradox</h3>
                      <p className="text-foreground leading-relaxed">
                        Many fear that stopping appearance-focused behaviors means they'll become "unattractive" or "let themselves go." <strong>The reality:</strong> When you stop obsessing and reduce compulsions, you actually function better, feel more confident, and engage more authentically—which is more attractive than any amount of mirror checking.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Life After BDD</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Mental space freed for meaningful pursuits</li>
                        <li>• Energy for relationships, hobbies, career, passions</li>
                        <li>• Presence in life moments</li>
                        <li>• Spontaneity without appearance-based planning</li>
                        <li>• Genuine connection with others</li>
                        <li>• Confidence from within (not from appearance)</li>
                        <li>• Freedom from appearance prison</li>
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
                        <li>• Spend hours daily thinking about or checking your appearance</li>
                        <li>• Avoid social situations, work, or activities due to appearance concerns</li>
                        <li>• Perform repetitive behaviors (mirror checking, comparing, reassurance seeking)</li>
                        <li>• Feel distressed or impaired by appearance preoccupation</li>
                        <li>• Have undergone or are seeking cosmetic procedures without satisfaction</li>
                        <li>• Find appearance thoughts intrusive and uncontrollable</li>
                        <li>• Experience depression or anxiety related to appearance</li>
                        <li>• Notice symptoms worsening over time</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/20 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="text-2xl font-semibold text-destructive mb-4 flex items-center">
                        <AlertCircle className="w-6 h-6 mr-2" />
                        Seek IMMEDIATE Help If:
                      </h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span><strong>Having thoughts of suicide or self-harm</strong></span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Experiencing severe depression</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Engaging in dangerous behaviors (excessive skin picking causing infections, unsafe procedures)</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Complete inability to function</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-destructive mr-2 mt-1 flex-shrink-0" />
                          <span>Psychotic symptoms (complete conviction perceived flaw is real when it's not observable)</span>
                        </li>
                      </ul>
                      <p className="text-foreground font-semibold mt-4 text-lg">
                        CRITICAL: BDD has one of the highest suicide rates of any mental health condition. Suicidal thoughts with BDD are a medical emergency.
                      </p>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">Crisis Resources</h3>
                      <div className="space-y-3 text-foreground">
                        <div>
                          <p className="font-semibold">988 Suicide & Crisis Lifeline</p>
                          <p>Call or text <strong>988</strong> - Available 24/7</p>
                        </div>
                        <div>
                          <p className="font-semibold">NEDA Helpline</p>
                          <p><strong>1-800-931-2237</strong></p>
                          <p className="text-sm">Monday-Thursday 9am-9pm ET, Friday 9am-5pm ET</p>
                        </div>
                        <div>
                          <p className="font-semibold">Crisis Text Line</p>
                          <p>Text "NEDA" to <strong>741741</strong> - Available 24/7</p>
                        </div>
                        <div>
                          <p className="font-semibold">Emergency Services</p>
                          <p>Call <strong>911</strong> or go to nearest emergency room</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">You Deserve Help Even If:</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Others don't see what you see</li>
                        <li>• You feel like you're overreacting</li>
                        <li>• You haven't been diagnosed</li>
                        <li>• The perceived flaw seems "minor" to others</li>
                        <li>• You function in some areas but struggle in others</li>
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-3">Taking the First Step</h3>
                      <p className="text-foreground leading-relaxed mb-4">
                        Contact Beyond Eating Recovery at <strong className="text-primary">360-726-4141</strong> to schedule a consultation. We provide specialized, compassionate treatment for body dysmorphic disorder throughout Oregon and Washington.
                      </p>
                      <h4 className="font-semibold text-primary mb-2">What to Expect in First Session:</h4>
                      <ul className="space-y-1 text-foreground text-sm">
                        <li>• Confidential, non-judgmental space</li>
                        <li>• Detailed assessment of your concerns</li>
                        <li>• Discussion of symptoms and impact</li>
                        <li>• Collaborative treatment planning</li>
                        <li>• Education about BDD and treatment options</li>
                        <li>• Hope—this is treatable</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 10: Supporting a Loved One */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">Supporting a Loved One with Body Dysmorphia</h2>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    If someone you care about has BDD:
                  </p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                          <CheckCircle className="w-6 h-6 mr-2" />
                          Do:
                        </h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Take their concerns seriously (even if you don't see the flaw)</li>
                          <li>• Validate their distress without validating the distorted perception</li>
                          <li>• Support them in seeking professional help</li>
                          <li>• Be patient—recovery takes time</li>
                          <li>• Learn about BDD to understand their experience</li>
                          <li>• Notice and celebrate non-appearance qualities</li>
                          <li>• Create environments that don't focus on appearance</li>
                          <li>• Encourage engagement in activities beyond appearance</li>
                        </ul>
                      </div>

                      <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                        <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center">
                          <XCircle className="w-6 h-6 mr-2" />
                          Don't:
                        </h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Provide reassurance about their appearance (this reinforces checking)</li>
                          <li>• Tell them "you look fine" or "I don't see it" (dismissive and unhelpful)</li>
                          <li>• Argue about whether the flaw exists</li>
                          <li>• Compare them to others</li>
                          <li>• Comment on anyone's appearance</li>
                          <li>• Enable avoidance or compulsive behaviors</li>
                          <li>• Take their behaviors personally</li>
                          <li>• Encourage cosmetic procedures</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What to Say</h3>
                      <div className="bg-secondary/20 p-5 rounded-lg">
                        <ul className="space-y-2 text-foreground">
                          <li>• "I know you're struggling, and I'm here to support you."</li>
                          <li>• "Have you thought about talking to someone who specializes in body image concerns?"</li>
                          <li>• "I care about you for so many reasons beyond appearance."</li>
                          <li>• "What can I do to support you right now?"</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">What NOT to Say</h3>
                      <div className="bg-muted p-5 rounded-lg">
                        <ul className="space-y-2 text-foreground">
                          <li>• "You're beautiful, stop worrying!" (dismissive of real distress)</li>
                          <li>• "You look fine!" (providing reassurance reinforces the cycle)</li>
                          <li>• "You're being vain" or "You're obsessed with yourself" (stigmatizing)</li>
                          <li>• "Just stop looking in the mirror" (oversimplified)</li>
                          <li>• "I don't see what you see" (invalidating)</li>
                          <li>• "You should get that fixed" (encouraging cosmetic solution)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-xl font-semibold text-primary mb-4">Managing Reassurance Seeking</h3>
                      <p className="text-foreground mb-3">When they ask "How do I look?" or similar questions:</p>
                      <ul className="space-y-3 text-foreground">
                        <li>
                          <XCircle className="w-5 h-5 text-destructive inline mr-2" />
                          <strong>Don't provide reassurance</strong> (even though it feels helpful)
                        </li>
                        <li>
                          <CheckCircle className="w-5 h-5 text-primary inline mr-2" />
                          <strong>Compassionate response:</strong> "I know you're looking for reassurance, but we've talked about how that reinforces the cycle. I care about you beyond appearance. How are you feeling today?"
                        </li>
                        <li>• Redirect to emotions, not appearance</li>
                        <li>• Support use of coping skills instead</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Family Environment Considerations</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Examine family focus on appearance</li>
                        <li>• Stop appearance-based comments about anyone</li>
                        <li>• Challenge appearance culture in your home</li>
                        <li>• Limit beauty/fashion media consumption</li>
                        <li>• Model self-acceptance if possible</li>
                        <li>• Address siblings' appearance comments</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Treatment</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Encourage attendance at therapy</li>
                        <li>• Understand that ERP may temporarily increase anxiety</li>
                        <li>• Don't enable avoidance</li>
                        <li>• Support exposure exercises</li>
                        <li>• Celebrate functional improvements (attending events, reducing compulsions)</li>
                        <li>• Be patient with setbacks</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Take Care of Yourself</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Supporting someone with BDD is emotionally challenging</li>
                        <li>• Seek your own support (therapy, support groups)</li>
                        <li>• Set boundaries if needed</li>
                        <li>• Practice self-compassion</li>
                        <li>• Connect with resources for families</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Resources for Families</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• International OCD Foundation (BDD resources): <a href="https://iocdf.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">iocdf.org</a></li>
                        <li>• BDD support groups</li>
                        <li>• Family therapy sessions available</li>
                        <li>• NEDA resources for families</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 11: The Cultural Context */}
                <section>
                  <h2 className="text-3xl font-bold text-primary mb-6">The Cultural Context: Why BDD Thrives</h2>
                  
                  <p className="text-lg text-foreground leading-relaxed mb-6 font-medium">
                    This section is crucial for understanding BDD:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                      <h3 className="text-2xl font-semibold text-primary mb-4">Appearance-Obsessed Culture Creates the Conditions for BDD</h3>
                      <p className="text-foreground leading-relaxed mb-4">
                        While BDD has biological and psychological components, it exists within and is intensified by a culture that:
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Teaches Appearance Obsession</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Beauty industry worth hundreds of billions of dollars</li>
                          <li>• Constant messaging that appearance = worth</li>
                          <li>• "Optimization" culture (biohacking, cosmetic procedures, anti-aging)</li>
                          <li>• Before/after transformation narratives</li>
                          <li>• Appearance-based reality TV and makeover shows</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Creates Impossible Standards</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Digitally altered, filtered images presented as real</li>
                          <li>• Narrow beauty ideals (thin, young, white, able-bodied, gender-conforming)</li>
                          <li>• Eurocentric beauty standards erasing diverse beauty</li>
                          <li>• Age-phobia and fear of natural aging</li>
                          <li>• Changing trends creating constant dissatisfaction</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Normalizes Appearance Preoccupation</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• "Self-care" marketed as appearance maintenance</li>
                          <li>• Mirror checking and selfie culture</li>
                          <li>• Constant appearance feedback (likes, comments)</li>
                          <li>• Everyone comparing and discussing appearance</li>
                          <li>• Appearance concerns dismissed as "everyone feels this way"</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Profits from Insecurity</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Beauty industry depends on your dissatisfaction</li>
                          <li>• Cosmetic surgery industry growing exponentially</li>
                          <li>• Anti-aging industry based on fear</li>
                          <li>• Diet industry ($72 billion annually) creating body hatred</li>
                          <li>• Social media algorithms promoting comparison</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Punishes Deviation</h3>
                        <ul className="space-y-2 text-foreground">
                          <li>• Weight stigma and fat phobia</li>
                          <li>• Ageism and "letting yourself go" narratives</li>
                          <li>• Racism and colorism</li>
                          <li>• Ableism and appearance-based discrimination</li>
                          <li>• Transphobia and gender-based appearance policing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-4">Recovery Requires Cultural Awareness</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Understanding that BDD symptoms exist on a continuum with "normal" appearance concerns</li>
                        <li>• Recognizing that the culture is disordered, not just individuals</li>
                        <li>• Building critical consciousness about appearance messaging</li>
                        <li>• Rejecting participation in appearance-based systems where possible</li>
                        <li>• Finding communities that value people beyond appearance</li>
                        <li>• Challenging cultural narratives</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary mb-3">This Doesn't Minimize BDD</h3>
                      <p className="text-foreground leading-relaxed">
                        Understanding cultural context doesn't make BDD less real or less serious—it helps us understand why it develops and how to heal within a toxic cultural environment.
                      </p>
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
                        <Link to="/body-shame" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Body Shame Counseling
                        </Link>
                        <Link to="/conditions/anorexia-nervosa" className="text-primary hover:underline flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Anorexia Nervosa
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
                          <a href="https://iocdf.org/bdd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            International OCD Foundation (BDD Section) - comprehensive BDD information
                          </a>
                        </li>
                        <li>
                          <a href="https://bddfoundation.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            BDD Foundation - UK-based support and resources
                          </a>
                        </li>
                        <li>
                          <a href="https://adaa.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Anxiety & Depression Association of America (BDD Section)
                          </a>
                        </li>
                        <li>
                          <a href="https://nationaleatingdisorders.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            National Eating Disorders Association (NEDA)
                          </a>
                        </li>
                        <li>
                          <a href="https://thebodyisnotanapology.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            The Body Is Not An Apology
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Recommended Reading</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• <strong>"The Broken Mirror"</strong> by Katharine Phillips - comprehensive guide to understanding and treating BDD</li>
                        <li>• <strong>"Feeling Good About the Way You Look"</strong> by Sabine Wilhelm</li>
                        <li>• <strong>"Cognitive-Behavioral Therapy for Body Dysmorphic Disorder"</strong> by Sabine Wilhelm</li>
                        <li>• <strong>"The Body Image Workbook"</strong> by Thomas Cash</li>
                        <li>• <strong>"The Body Is Not An Apology"</strong> by Sonya Renee Taylor</li>
                        <li>• <strong>"If Your Hunger Could Talk"</strong> by Anne Cuthbert (for co-occurring eating concerns)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Online Communities</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• BDD support groups (check IOCDF website)</li>
                        <li>• OCD and related disorders support groups</li>
                        <li>• Body liberation communities</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-4">Apps and Tools</h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• NOCD app (for OCD/BDD support)</li>
                        <li>• CBT thought record apps</li>
                        <li>• Mindfulness meditation apps</li>
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
                        20+ years specializing in eating disorders and body image concerns using evidence-based, culturally-informed approaches.
                      </p>
                      <div className="space-y-2 text-sm text-foreground mb-4">
                        <p className="font-semibold text-primary">Credentials:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Licensed Professional Counselor (OR)</li>
                          <li>• Licensed Mental Health Counselor (WA)</li>
                          <li>• CREDN Board Member</li>
                          <li>• ASDAH Member</li>
                          <li>• Trained in CBT/ERP for BDD and OCD</li>
                        </ul>
                      </div>
                      <p className="text-sm text-foreground mb-4 italic">
                        <strong>Specialized Training:</strong> Anne has extensive experience treating body dysmorphic disorder co-occurring with eating disorders.
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
                        BDD has high suicide risk. If you're in crisis:
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
                            If you're experiencing a medical emergency, call <strong>911</strong> or go to your nearest emergency room.
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
                        While focused on eating concerns, this book addresses body image struggles and the cultural forces that create appearance preoccupation.
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
                      <h3 className="text-xl font-bold mb-3">Specialized Treatment for Body Dysmorphia</h3>
                      <p className="text-sm mb-4">
                        We provide evidence-based CBT and ERP therapy for body dysmorphic disorder throughout Oregon and Washington.
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
                      <p className="text-sm font-semibold mb-4">BDD is highly treatable with the right approach.</p>
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

export default BodyDysmorphia;