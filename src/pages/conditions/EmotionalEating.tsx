import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Phone, BookOpen, ExternalLink } from "lucide-react";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const EmotionalEating = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Emotional Eating & Compulsive Overeating Treatment | Portland & Vancouver</title>
        <meta
          name="description"
          content="Compassionate, weight-neutral therapy for emotional eating and compulsive overeating. Address root causes, not symptoms. End the shame cycle. Oregon & Washington telehealth—call 360-726-4141."
        />
        <meta
          name="keywords"
          content="emotional eating treatment, compulsive overeating therapy, binge eating help Portland, stress eating counselor Vancouver WA, Intuitive Eating therapist, HAES counselor, weight-neutral eating disorder treatment, restrict-binge cycle, emotional eating recovery Oregon Washington, telehealth eating disorder therapy"
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4 max-w-7xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/conditions">Eating Disorders</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Emotional Eating / Compulsive Overeating</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Emotional Eating & Compulsive Overeating Treatment in Portland & Vancouver
              </h1>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                If you turn to food for comfort, stress relief, or emotional soothing—and then feel trapped in shame and guilt—you're not alone, and you're not broken. Emotional eating and compulsive overeating are coping mechanisms that develop for valid reasons. At Beyond Eating Recovery, we offer compassionate, weight-neutral therapy that addresses the root causes of emotional eating while helping you build a peaceful, trusting relationship with food throughout Oregon and Washington.
              </p>
            </div>
          </div>
        </section>

        {/* Two-Column Layout */}
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
            {/* Main Content Column (70%) */}
            <div className="space-y-12">
              {/* Section 1: What is Emotional Eating? */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">What is Emotional Eating?</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-foreground/90 leading-relaxed">
                    Emotional eating means using food to cope with feelings rather than to satisfy physical hunger. It's eating in response to emotional needs—stress, boredom, loneliness, sadness, anxiety, anger, or even happiness and celebration.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Important Distinctions</h3>
                  
                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-6">
                    <h4 className="text-xl font-semibold text-primary mb-4">Emotional Eating vs. Physical Hunger</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold text-primary mb-2">Physical Hunger:</p>
                        <ul className="space-y-2 text-foreground/90">
                          <li>• Develops gradually</li>
                          <li>• Can be satisfied with various foods</li>
                          <li>• Stops when full</li>
                          <li>• No guilt afterward</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">Emotional Hunger:</p>
                        <ul className="space-y-2 text-foreground/90">
                          <li>• Comes on suddenly</li>
                          <li>• Craves specific comfort foods</li>
                          <li>• Eating past fullness</li>
                          <li>• Followed by shame and regret</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-primary mt-6 mb-3">Emotional Eating IS:</h4>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Extremely common—most people emotionally eat occasionally</li>
                    <li>• A learned coping mechanism, not a character flaw</li>
                    <li>• Often developed in childhood</li>
                    <li>• A way to self-soothe or avoid difficult feelings</li>
                    <li>• Reinforced by diet culture's restrict-binge cycles</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary mt-6 mb-3">Emotional Eating is NOT:</h4>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• A lack of willpower or discipline</li>
                    <li>• A sign of weakness or failure</li>
                    <li>• Your fault</li>
                    <li>• Fixed by another diet or food rules</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">The Spectrum</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Emotional eating exists on a continuum:
                  </p>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• <strong>Occasional emotional eating:</strong> Using food for comfort sometimes (normal human behavior)</li>
                    <li>• <strong>Regular emotional eating:</strong> Primary coping mechanism for stress or emotions</li>
                    <li>• <strong>Compulsive overeating:</strong> Feeling out of control, eating large amounts, significant distress</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Cultural Context</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Our culture teaches us to use food emotionally from childhood:
                  </p>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Celebrations always involve food</li>
                    <li>• "Comfort foods" are marketed as emotional solutions</li>
                    <li>• We're told to restrict, then shame ourselves for "giving in"</li>
                    <li>• Food is reward, punishment, love language, and entertainment</li>
                    <li>• Diet culture creates the restrict-binge cycle that drives emotional eating</li>
                  </ul>
                </div>
              </section>

              {/* Section 2: What is Compulsive Overeating? */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">What is Compulsive Overeating?</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-foreground/90 leading-relaxed">
                    Compulsive overeating (sometimes called compulsive eating) involves recurrent episodes of eating large amounts of food, often rapidly, with a feeling of being out of control—driven by emotional or psychological needs rather than physical hunger.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Characteristics</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Eating when not physically hungry</li>
                    <li>• Eating until uncomfortably full</li>
                    <li>• Feeling unable to stop once started</li>
                    <li>• Eating rapidly or mindlessly</li>
                    <li>• Eating in secret or hiding food</li>
                    <li>• Shame, guilt, and distress after eating</li>
                    <li>• Using food to numb, soothe, or escape feelings</li>
                    <li>• Preoccupation with food and eating</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">How It Differs from Binge Eating Disorder</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Compulsive overeating and Binge Eating Disorder (BED) share many features, but BED has specific diagnostic criteria including:
                  </p>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Recurrent binge episodes (defined frequency)</li>
                    <li>• Marked distress about binge eating</li>
                    <li>• Specific associated behaviors</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Many people with compulsive overeating don't meet full BED criteria but still experience significant suffering and deserve support.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    See our <Link to="/conditions/binge-eating-disorder" className="text-primary hover:underline font-semibold">Binge Eating Disorder page</Link> for more on BED.
                  </p>

                  <div className="bg-primary/5 border-2 border-primary p-8 rounded-lg my-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">The Restrict-Binge Cycle</h3>
                    <p className="text-foreground/90 leading-relaxed mb-4">
                      Compulsive overeating is often driven by restriction:
                    </p>
                    <div className="space-y-3 text-foreground/90">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl font-bold text-accent">1.</span>
                        <p><strong className="text-primary">Restrict</strong> (diet, skip meals, label foods "bad")</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl font-bold text-accent">2.</span>
                        <p><strong className="text-primary">Deprivation</strong> (physical hunger + psychological deprivation)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl font-bold text-accent">3.</span>
                        <p><strong className="text-primary">Overeating/binge</strong> (biological drive to eat + emotional need)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl font-bold text-accent">4.</span>
                        <p><strong className="text-primary">Shame and guilt</strong> (feeling out of control)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl font-bold text-accent">5.</span>
                        <p><strong className="text-primary">More restriction</strong> (attempting to compensate)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl font-bold text-accent">6.</span>
                        <p><strong className="text-primary">Repeat cycle</strong></p>
                      </div>
                    </div>
                    <p className="text-foreground/90 leading-relaxed mt-6 font-semibold text-lg">
                      Breaking this cycle requires ending restriction—not more control.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Signs and Patterns */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Signs and Patterns of Emotional Eating</h2>
                <div className="prose prose-lg max-w-none space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Behavioral Signs</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Eating when not physically hungry</li>
                    <li>• Eating in response to emotions (stress, boredom, loneliness, anxiety)</li>
                    <li>• Eating rapidly or without awareness</li>
                    <li>• Continuing to eat past comfortable fullness</li>
                    <li>• Eating in secret or hiding food consumption</li>
                    <li>• Lying about or minimizing how much you've eaten</li>
                    <li>• Sneaking food or eating when alone</li>
                    <li>• Grazing continuously throughout the day</li>
                    <li>• Nighttime eating patterns</li>
                    <li>• Inability to keep certain foods in the house</li>
                    <li>• Planning meals around when you'll be alone</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Emotional & Psychological Signs</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Using food as primary coping mechanism</li>
                    <li>• Eating to avoid or numb difficult feelings</li>
                    <li>• Feeling relief or temporary comfort while eating</li>
                    <li>• Intense shame, guilt, or self-criticism after eating</li>
                    <li>• Feeling out of control around food</li>
                    <li>• Preoccupation with food and eating</li>
                    <li>• Anxiety about food availability</li>
                    <li>• "All or nothing" thinking ("I already ruined it, might as well keep going")</li>
                    <li>• Food thoughts occupying significant mental space</li>
                    <li>• Eating to procrastinate or avoid tasks</li>
                    <li>• Using food for reward or punishment</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Physical Signs</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Eating past the point of physical comfort</li>
                    <li>• Stomach pain or digestive discomfort after eating</li>
                    <li>• Energy crashes after eating episodes</li>
                    <li>• Weight fluctuations</li>
                    <li>• Sleep disturbances (especially with nighttime eating)</li>
                    <li>• Feeling physically uncomfortable but continuing to eat</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Relationship with Food</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Labeling foods as "good" or "bad"</li>
                    <li>• Feeling guilty about eating certain foods</li>
                    <li>• Restricting followed by overeating</li>
                    <li>• "Last supper" eating (before starting a diet)</li>
                    <li>• Hoarding or hiding specific foods</li>
                    <li>• Difficulty eating normally in social situations</li>
                    <li>• Food feels like it has power over you</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Social & Relational Impact</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Avoiding social situations involving food</li>
                    <li>• Canceling plans to eat in private</li>
                    <li>• Relationships strained by food behaviors</li>
                    <li>• Isolation and withdrawal</li>
                    <li>• Reduced participation in activities</li>
                    <li>• Difficulty being present with others</li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Understanding the Roots */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Understanding the Roots: Why We Emotionally Eat</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-foreground/90 leading-relaxed text-lg font-semibold">
                    Emotional eating develops for legitimate reasons—it's a coping mechanism that once served a purpose:
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Childhood Learning</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Food used for comfort when upset ("Here's a cookie, don't cry")</li>
                    <li>• Food as reward for good behavior or achievement</li>
                    <li>• Food withheld as punishment</li>
                    <li>• Being forced to clean your plate</li>
                    <li>• Food as the primary way love was expressed</li>
                    <li>• Emotions dismissed or invalidated ("You're not really sad")</li>
                    <li>• Learning that feelings are unsafe or unwelcome</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Biological & Neurological Factors</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Food (especially sugar and fat) activates reward centers in the brain</li>
                    <li>• Eating provides temporary dopamine release</li>
                    <li>• Carbohydrates can increase serotonin (mood regulation)</li>
                    <li>• The body seeks pleasure and relief from distress</li>
                    <li>• Food is immediately accessible and legal</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Emotional Regulation Needs</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Never learned healthy ways to process emotions</li>
                    <li>• Emotions feel overwhelming or scary</li>
                    <li>• Food provides temporary relief or distraction</li>
                    <li>• Eating is safer than feeling</li>
                    <li>• Food becomes the go-to coping tool</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Trauma & Adverse Experiences</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Using food to feel safe or in control</li>
                    <li>• Eating to dissociate from trauma memories</li>
                    <li>• Food as self-soothing when caretakers were unavailable</li>
                    <li>• Numbing pain that feels unbearable</li>
                    <li>• Creating physical sensation to override emotional pain</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Diet Culture & Restriction</h3>
                    <p className="text-foreground/90 leading-relaxed font-semibold text-lg mb-4">
                      This is the biggest driver of compulsive overeating:
                    </p>
                    <ul className="space-y-2 text-foreground/90 ml-6">
                      <li>• Chronic dieting creates biological drive to overeat</li>
                      <li>• Restriction leads to preoccupation with food</li>
                      <li>• "Forbidden" foods become irresistible</li>
                      <li>• Deprivation creates the restrict-binge cycle</li>
                      <li>• Weight stigma creates shame that drives emotional eating</li>
                      <li>• Food rules create rebellion and loss of control</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Stress & Life Circumstances</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Chronic stress with limited coping tools</li>
                    <li>• Overwhelming responsibilities</li>
                    <li>• Lack of support or resources</li>
                    <li>• Burnout and exhaustion</li>
                    <li>• Food as the only "me time" or self-care available</li>
                    <li>• Cultural and systemic oppression creating chronic stress</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Systemic & Cultural Factors</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Living in larger body experiencing weight stigma</li>
                    <li>• Racism, homophobia, transphobia, ableism</li>
                    <li>• Economic stress and food insecurity</li>
                    <li>• Cultural loss and disconnection</li>
                    <li>• Social isolation and loneliness</li>
                    <li>• Lack of accessible mental health support</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">The Function of Emotional Eating</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Temporary relief from distress</li>
                    <li>• Distraction from difficult feelings</li>
                    <li>• Self-soothing and comfort</li>
                    <li>• Filling emotional emptiness</li>
                    <li>• Rebellion against restriction</li>
                    <li>• Reclaiming pleasure in a difficult life</li>
                    <li>• Connection to childhood or culture</li>
                  </ul>

                  <p className="text-foreground/90 leading-relaxed mt-6 text-lg font-semibold bg-primary/5 p-6 rounded-lg">
                    Understanding why you emotionally eat is the first step to healing—not through more restriction, but through addressing root causes and building alternative coping skills.
                  </p>
                </div>
              </section>

              {/* Section 5: The Role of Diet Culture - CRITICAL SECTION */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">The Role of Diet Culture</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <div className="bg-destructive/10 border-2 border-destructive p-8 rounded-lg my-6">
                    <p className="text-foreground/90 leading-relaxed text-xl font-bold text-destructive mb-4">
                      Diet culture CREATES and perpetuates emotional and compulsive eating.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">How Dieting Drives Overeating</h3>
                  <ul className="space-y-3 text-foreground/90 ml-6">
                    <li>• <strong className="text-primary">Physical deprivation:</strong> Your body increases hunger hormones and decreases fullness hormones when restricted</li>
                    <li>• <strong className="text-primary">Psychological deprivation:</strong> Being told you "can't" have something makes you want it more</li>
                    <li>• <strong className="text-primary">The forbidden fruit effect:</strong> Restricted foods become irresistible</li>
                    <li>• <strong className="text-primary">Breaking the rules:</strong> Once you eat a "forbidden" food, the "all or nothing" mentality kicks in</li>
                    <li>• <strong className="text-primary">Last supper eating:</strong> Before starting a diet, eating everything you "won't be allowed" to have</li>
                    <li>• <strong className="text-primary">Metabolic adaptation:</strong> Chronic dieting slows metabolism, making the body more efficient at storing energy</li>
                  </ul>

                  <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg my-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">The Diet Cycle That Creates Emotional Eating</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                        <p className="text-foreground/90 pt-1"><strong>Start diet</strong> with restriction and rules</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
                        <p className="text-foreground/90 pt-1"><strong>Feel deprived</strong> (physically and psychologically)</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                        <p className="text-foreground/90 pt-1"><strong>Break the rules</strong> (often due to emotional trigger)</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">4</div>
                        <p className="text-foreground/90 pt-1"><strong>Overeat or binge</strong> (biological drive + emotional need + "I already failed" mentality)</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">5</div>
                        <p className="text-foreground/90 pt-1"><strong>Feel shame and guilt</strong></p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">6</div>
                        <p className="text-foreground/90 pt-1"><strong>Resolve to be "better"</strong> and restrict more</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">∞</div>
                        <p className="text-foreground/90 pt-1"><strong>Repeat cycle</strong>, with increasing intensity</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Weight Stigma's Role</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Experiencing discrimination creates emotional distress</li>
                    <li>• Food becomes coping mechanism for weight-related trauma</li>
                    <li>• Shame about body drives secretive eating</li>
                    <li>• Medical providers blame weight instead of addressing mental health</li>
                    <li>• Internalized weight bias creates self-hatred</li>
                    <li>• The stress of living in a larger body in a fat-phobic culture</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">"Wellness Culture" Disguises</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• "Clean eating" is restriction rebranded</li>
                    <li>• "Lifestyle change" is just another diet</li>
                    <li>• Food morality ("good" foods vs. "bad" foods)</li>
                    <li>• Orthorexia masked as health (see our <Link to="/conditions/orthorexia" className="text-primary hover:underline font-semibold">Orthorexia page</Link>)</li>
                    <li>• Exercise as punishment or compensation</li>
                  </ul>

                  <div className="bg-accent/10 border-2 border-accent p-8 rounded-lg my-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">The Solution is NOT Another Diet</h3>
                    <ul className="space-y-3 text-foreground/90 text-lg">
                      <li>• More restriction will only intensify the cycle</li>
                      <li>• Adding more rules increases feelings of failure</li>
                      <li>• Weight loss attempts often trigger more emotional eating</li>
                      <li>• <strong className="text-accent">Healing requires ENDING restriction, not perfecting it</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Health and Life Impact */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Health and Life Impact</h2>
                <div className="prose prose-lg max-w-none space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Physical Effects</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Digestive discomfort (bloating, pain, irregular digestion)</li>
                    <li>• Energy fluctuations and fatigue</li>
                    <li>• Sleep disturbances</li>
                    <li>• Chronic stress on the body</li>
                    <li>• Potential nutritional imbalances (from chaotic eating)</li>
                    <li>• Physical discomfort from eating past fullness</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed bg-muted/50 p-4 rounded-lg mt-4">
                    <strong>Important note:</strong> Research shows that weight cycling (yo-yo dieting) is more harmful to health than stable higher weight. The stress of the restrict-binge cycle itself impacts health—independent of weight.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Psychological Impact</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Shame, guilt, and self-criticism</li>
                    <li>• Reduced self-esteem and self-worth</li>
                    <li>• Anxiety (about food, body, eating situations)</li>
                    <li>• Depression</li>
                    <li>• Feeling out of control</li>
                    <li>• Negative self-talk and self-hatred</li>
                    <li>• Hopelessness about change</li>
                    <li>• Identity tied to food struggles</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Emotional Consequences</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Emotions remain unprocessed (food masks but doesn't resolve them)</li>
                    <li>• Reduced emotional awareness</li>
                    <li>• Difficulty identifying and naming feelings</li>
                    <li>• Disconnection from emotional needs</li>
                    <li>• Temporary relief followed by more distress</li>
                    <li>• Cycle of numbing and shame</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Relationship Impact</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Isolation and withdrawal</li>
                    <li>• Secretive behavior creating distance</li>
                    <li>• Avoiding social eating situations</li>
                    <li>• Relationships strained by food preoccupation</li>
                    <li>• Reduced intimacy (physical and emotional)</li>
                    <li>• Feeling unable to be authentic</li>
                    <li>• Missing out on connection and experiences</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Life Quality Reduction</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Significant time and energy consumed by food thoughts</li>
                    <li>• Mental space occupied with planning, eating, regretting</li>
                    <li>• Avoiding activities due to food or body concerns</li>
                    <li>• Career or academic impact from preoccupation</li>
                    <li>• Financial cost of food and diet attempts</li>
                    <li>• Life feels smaller and more restricted</li>
                    <li>• Loss of spontaneity and joy</li>
                  </ul>

                  <div className="bg-destructive/5 border-l-4 border-destructive p-6 rounded-r-lg my-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">The Shame Spiral</h3>
                    <p className="text-foreground/90 leading-relaxed font-semibold text-lg">
                      Emotional eating → Shame → More emotional distress → More emotional eating
                    </p>
                  </div>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">Breaking Free Creates:</h3>
                    <ul className="space-y-2 text-foreground/90 ml-6">
                      <li>• Mental and emotional space for meaningful pursuits</li>
                      <li>• Improved relationships and presence</li>
                      <li>• Better emotional regulation</li>
                      <li>• Reduced shame and self-criticism</li>
                      <li>• Freedom to live fully</li>
                      <li>• Peace with food and body</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Assessment and Recognition */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Assessment and Recognition</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Self-Reflection Questions</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Do I eat when I'm not physically hungry?</li>
                    <li>• Do I turn to food when stressed, bored, lonely, or upset?</li>
                    <li>• Do I feel out of control around certain foods?</li>
                    <li>• Do I eat in secret or hide my eating?</li>
                    <li>• Do I feel shame or guilt after eating?</li>
                    <li>• Do I use food to avoid dealing with feelings or problems?</li>
                    <li>• Do I restrict and then overeat in cycles?</li>
                    <li>• Does food feel like my primary coping mechanism?</li>
                    <li>• Am I preoccupied with food and eating?</li>
                    <li>• Has my relationship with food gotten worse over time despite trying to "fix" it?</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4 font-semibold">
                    If you answered yes to several questions, professional support can help.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Clinical Assessment Includes</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Detailed eating history and patterns</li>
                    <li>• Exploration of emotional triggers</li>
                    <li>• Assessment of relationship with food and body</li>
                    <li>• Diet history (important to understand restriction's role)</li>
                    <li>• Emotional regulation skills assessment</li>
                    <li>• Trauma history</li>
                    <li>• Current stressors and life circumstances</li>
                    <li>• Psychological evaluation (mood, anxiety, trauma)</li>
                    <li>• Medical screening if indicated</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">You Deserve Support If:</h3>
                    <ul className="space-y-2 text-foreground/90 ml-6">
                      <li>• Emotional eating causes you distress</li>
                      <li>• You feel controlled by food</li>
                      <li>• It's impacting your quality of life</li>
                      <li>• You've tried to stop on your own without success</li>
                      <li>• You want a different relationship with food</li>
                      <li>• You're caught in restrict-binge cycles</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">You Do NOT Need To:</h3>
                    <ul className="space-y-2 text-foreground/90 ml-6">
                      <li>• Reach a certain weight to qualify for help</li>
                      <li>• Have a formal diagnosis</li>
                      <li>• Prove you're "bad enough"</li>
                      <li>• Wait until it gets worse</li>
                      <li>• Try one more diet first</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Treatment Approach - Anne's 6-Step Process */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Treatment Approach at Beyond Eating Recovery</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-foreground/90 leading-relaxed text-lg">
                    Our approach treats emotional eating with compassion—not by adding more food rules, but by addressing root causes and building emotional capacity.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-6">Anne's 6-Step Treatment Process</h3>

                  <div className="space-y-6">
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                      <h4 className="text-xl font-bold text-primary mb-3">1. Stabilize Eating Patterns</h4>
                      <p className="text-foreground/90 leading-relaxed mb-3 font-semibold">
                        Crucially: End restriction first
                      </p>
                      <ul className="space-y-2 text-foreground/90 ml-6">
                        <li>• Establish regular, adequate eating (3 meals + snacks)</li>
                        <li>• No foods are off-limits (removing "forbidden" foods)</li>
                        <li>• Unconditional permission to eat</li>
                        <li>• Rebuilding hunger/fullness awareness</li>
                        <li>• Medical assessment if needed</li>
                      </ul>
                      <p className="text-foreground/90 leading-relaxed mt-4 bg-accent/10 p-4 rounded">
                        <strong className="text-primary">Why this works:</strong> You cannot heal emotional eating while restricting. The biological drive created by deprivation must be addressed first.
                      </p>
                    </div>

                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                      <h4 className="text-xl font-bold text-primary mb-3">2. Challenge Food Rules and Diet Mentality</h4>
                      <ul className="space-y-2 text-foreground/90 ml-6">
                        <li>• Identifying and dismantling diet culture beliefs</li>
                        <li>• Legalizing all foods (removing "good/bad" labels)</li>
                        <li>• Understanding how restriction drives overeating</li>
                        <li>• Permission-based eating vs. rule-based eating</li>
                        <li>• Intuitive Eating principles introduction</li>
                        <li>• Making peace with food</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                      <h4 className="text-xl font-bold text-primary mb-3">3. Explore Emotional Triggers</h4>
                      <p className="text-foreground/90 leading-relaxed mb-3 font-semibold italic">
                        This is the heart of healing emotional eating
                      </p>
                      <ul className="space-y-2 text-foreground/90 ml-6">
                        <li>• Identifying what emotions drive eating</li>
                        <li>• Understanding the function food serves</li>
                        <li>• Building emotional awareness and vocabulary</li>
                        <li>• Learning to identify, name, and tolerate feelings</li>
                        <li>• Exploring what you're truly hungry for (beyond food)</li>
                        <li>• Processing unmet needs</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                      <h4 className="text-xl font-bold text-primary mb-3">4. Build Alternative Coping Skills</h4>
                      <ul className="space-y-2 text-foreground/90 ml-6">
                        <li>• Developing emotion regulation tools</li>
                        <li>• Creating a coping toolbox beyond food</li>
                        <li>• Distress tolerance techniques</li>
                        <li>• Self-soothing strategies</li>
                        <li>• Mindfulness and grounding practices</li>
                        <li>• Connecting with support systems</li>
                        <li>• Engaging in meaningful activities</li>
                      </ul>
                      <p className="text-foreground/90 leading-relaxed mt-4 bg-accent/10 p-4 rounded">
                        <strong className="text-primary">Important:</strong> We don't demonize food as a coping tool. The goal is to add options—not to never emotionally eat again (which is unrealistic).
                      </p>
                    </div>

                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                      <h4 className="text-xl font-bold text-primary mb-3">5. Address Underlying Issues</h4>
                      <ul className="space-y-2 text-foreground/90 ml-6">
                        <li>• Trauma-informed therapy</li>
                        <li>• Processing adverse experiences</li>
                        <li>• Healing attachment wounds</li>
                        <li>• Addressing depression and anxiety</li>
                        <li>• Working through grief and loss</li>
                        <li>• Exploring identity and self-concept</li>
                        <li>• Building self-compassion</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                      <h4 className="text-xl font-bold text-primary mb-3">6. Heal Body Image and Build Sustainable Recovery</h4>
                      <ul className="space-y-2 text-foreground/90 ml-6">
                        <li>• Challenging body shame and weight stigma</li>
                        <li>• Body respect and neutrality practices</li>
                        <li>• Understanding weight set point and body diversity</li>
                        <li>• Relapse prevention strategies</li>
                        <li>• Creating meaningful life beyond food focus</li>
                        <li>• Living according to values</li>
                        <li>• Building authentic self</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-10 mb-4">Weight-Neutral, HAES® Approach</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    We do NOT focus on weight change. Instead, we focus on:
                  </p>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Normalizing eating patterns</li>
                    <li>• Reducing food and body preoccupation</li>
                    <li>• Improving psychological well-being</li>
                    <li>• Building trust with your body</li>
                    <li>• Health behaviors accessible at any size</li>
                    <li>• Weight as outcome, never the goal</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Therapeutic Modalities</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Individual therapy with eating disorder specialist</li>
                    <li>• Dietitian support (Intuitive Eating approach with Stephanie Okumura, MS, RDN)</li>
                    <li>• Group therapy for connection and shared experience</li>
                    <li>• LGBTQIA+ group (Thursdays 6-7:15pm, $40/session)</li>
                    <li>• Cognitive-behavioral therapy (CBT)</li>
                    <li>• Dialectical behavior therapy (DBT) skills</li>
                    <li>• Acceptance and commitment therapy (ACT)</li>
                    <li>• EMDR for trauma processing</li>
                    <li>• Mindfulness-based approaches</li>
                  </ul>

                  <div className="bg-accent/10 border-2 border-accent p-8 rounded-lg my-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Battle of the Binge Program</h3>
                    <p className="text-foreground/90 leading-relaxed mb-4">
                      Our specialized 4-week self-study course addresses binge and emotional eating:
                    </p>
                    <ul className="space-y-2 text-foreground/90 ml-6 mb-4">
                      <li>• Understanding the biological and psychological drivers</li>
                      <li>• Breaking the restrict-binge cycle</li>
                      <li>• Building emotional coping skills</li>
                      <li>• Creating food peace</li>
                    </ul>
                    <a
                      href="https://battleofthebinge.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg"
                    >
                      Learn more at battleofthebinge.com <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 9: Recovery and What Freedom Looks Like */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Recovery and What Freedom Looks Like</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-foreground/90 leading-relaxed text-xl font-bold text-accent bg-accent/10 p-6 rounded-lg">
                    Recovery from emotional and compulsive eating IS possible.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Recovery Looks Like</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Eating when physically hungry, stopping when satisfied</li>
                    <li>• Flexibility around food (no rigid rules)</li>
                    <li>• Significantly reduced emotional eating episodes</li>
                    <li>• When emotional eating happens, no shame or spiral</li>
                    <li>• Ability to identify and process emotions without always turning to food</li>
                    <li>• Multiple coping strategies in your toolbox</li>
                    <li>• Food is no longer your primary or only coping mechanism</li>
                    <li>• Peace and neutrality around food</li>
                    <li>• Trust in your body's signals</li>
                    <li>• Freedom from the restrict-binge cycle</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Important Realistic Expectations</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• You may still emotionally eat sometimes—and that's okay</li>
                    <li>• Recovery doesn't mean perfection</li>
                    <li>• Humans use food emotionally occasionally (birthdays, celebrations, comfort)</li>
                    <li>• The goal is reduced distress and increased choice—not elimination</li>
                    <li>• You'll have a range of coping tools, with food as one option among many</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Timeline</h3>
                  <ul className="space-y-3 text-foreground/90 ml-6">
                    <li>• <strong className="text-primary">Early recovery (months 1-6):</strong> Ending restriction, stabilizing eating, learning concepts, beginning emotional work</li>
                    <li>• <strong className="text-primary">Middle recovery (months 6-18):</strong> Deepening emotional awareness, building coping skills, processing underlying issues, reducing episodes</li>
                    <li>• <strong className="text-primary">Late recovery (18+ months):</strong> Integration, sustained behavior change, occasional challenges navigated with tools, living fully</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Challenges in Recovery</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Fear of giving yourself permission to eat freely</li>
                    <li>• Worry that without restriction, eating will be "out of control" forever</li>
                    <li>• Difficult emotions surfacing when food no longer masks them</li>
                    <li>• Weight changes (potentially gain initially as body heals from restriction)</li>
                    <li>• Family/friends not understanding the approach</li>
                    <li>• Medical providers promoting dieting</li>
                    <li>• Diet culture bombardment</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Helps</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Trusting the process (it gets worse before better sometimes)</li>
                    <li>• Working with HAES®-aligned providers</li>
                    <li>• Community support (group therapy, online communities)</li>
                    <li>• Self-compassion practice</li>
                    <li>• Patience with yourself</li>
                    <li>• Education about Intuitive Eating and HAES®</li>
                    <li>• Body liberation resources</li>
                    <li>• Ongoing therapy support</li>
                  </ul>

                  <div className="bg-accent/10 border-2 border-accent p-8 rounded-lg my-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">The Truth About "Control"</h3>
                    <p className="text-foreground/90 leading-relaxed text-lg">
                      Many fear that giving up restriction means losing all control. The reality: <strong className="text-accent">Restriction CREATES the loss of control.</strong> When you end restriction and allow unconditional permission to eat, the biological drive to overeat diminishes. True control is eating when hungry and stopping when full—trusting your body, not following rules.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Life Beyond Food Focus</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Mental space freed for meaningful pursuits</li>
                    <li>• Energy for relationships, hobbies, career, passions</li>
                    <li>• Presence in life moments</li>
                    <li>• Spontaneity and flexibility</li>
                    <li>• Joy and pleasure beyond food</li>
                    <li>• Connection to values and purpose</li>
                    <li>• Authentic self-expression</li>
                  </ul>
                </div>
              </section>

              {/* Section 10: When to Seek Help */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">When to Seek Help</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Seek Support If You:</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Regularly use food to cope with emotions</li>
                    <li>• Feel out of control around food</li>
                    <li>• Engage in restrict-binge cycles</li>
                    <li>• Experience shame and guilt about eating</li>
                    <li>• Eat in secret or hide food</li>
                    <li>• Find emotional eating impacting quality of life</li>
                    <li>• Have tried to stop on your own without success</li>
                    <li>• Want to build healthier coping mechanisms</li>
                    <li>• Recognize patterns established in childhood</li>
                    <li>• Feel trapped in the cycle</li>
                  </ul>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg my-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Seek Immediate Help If:</h3>
                    <ul className="space-y-2 text-foreground/90 ml-6">
                      <li>• Thoughts of self-harm or suicide</li>
                      <li>• Severe depression or anxiety</li>
                      <li>• Eating patterns causing medical complications</li>
                      <li>• Unable to function in daily life</li>
                      <li>• Self-destructive behaviors escalating</li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg my-6">
                    <h3 className="text-2xl font-semibold text-primary mb-4">You Don't Need to Wait</h3>
                    <ul className="space-y-2 text-foreground/90 ml-6">
                      <li>• You don't need to "prove" it's bad enough</li>
                      <li>• Early intervention is most effective</li>
                      <li>• You deserve support regardless of weight</li>
                      <li>• If it causes distress, it matters</li>
                      <li>• Recovery is possible at any stage</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Taking the First Step</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Contact Beyond Eating Recovery at <strong className="text-primary">360-726-4141</strong> to schedule a consultation. We provide compassionate, weight-neutral therapy for emotional eating and compulsive overeating throughout Oregon and Washington.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Lower-Barrier Entry Points</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• <strong>Battle of the Binge course:</strong> 4-week self-study program at <a href="https://battleofthebinge.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">battleofthebinge.com</a></li>
                    <li>• <strong>Anne's book:</strong> "If Your Hunger Could Talk" - compassionate guide to understanding emotional eating (available on Amazon)</li>
                    <li>• <strong>Free consultation:</strong> Call to discuss whether therapy is right for you</li>
                  </ul>
                </div>
              </section>

              {/* Section 11: Supporting a Loved One */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Supporting a Loved One</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-foreground/90 leading-relaxed">
                    If someone you care about struggles with emotional eating:
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Do:</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Express care and concern (not about weight or food)</li>
                    <li>• Listen without judgment</li>
                    <li>• Validate their feelings and struggles</li>
                    <li>• Support them in finding professional help</li>
                    <li>• Learn about Intuitive Eating and HAES®</li>
                    <li>• Examine your own relationship with food/body</li>
                    <li>• Create food-neutral, shame-free environments</li>
                    <li>• Be patient—healing takes time</li>
                    <li>• Celebrate non-food victories and qualities</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Don't:</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Comment on their body, weight, or food intake</li>
                    <li>• Suggest diets, "lifestyle changes," or food rules</li>
                    <li>• Monitor or police their eating</li>
                    <li>• Express disappointment if they eat certain foods</li>
                    <li>• Make food or eating a topic of conversation</li>
                    <li>• Diet yourself or engage in diet talk around them</li>
                    <li>• Offer unsolicited advice</li>
                    <li>• Make their struggle about you</li>
                    <li>• Show visible concern when they eat</li>
                  </ul>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">What to Say</h3>
                      <ul className="space-y-2 text-foreground/90 text-sm">
                        <li>• "I notice you seem to be struggling. I'm here for you."</li>
                        <li>• "Your worth has nothing to do with what you eat."</li>
                        <li>• "I care about you and want to support your healing."</li>
                        <li>• "Would it help to find a therapist who specializes in this?"</li>
                        <li>• "What do you need from me right now?"</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg">
                      <h3 className="text-xl font-semibold text-primary mb-4">What NOT to Say</h3>
                      <ul className="space-y-2 text-foreground/90 text-sm">
                        <li>• "Just eat when you're hungry, stop when you're full." (oversimplified)</li>
                        <li>• "Have you tried [diet or food rule]?" (perpetuates the problem)</li>
                        <li>• "You just need more willpower." (shaming, inaccurate)</li>
                        <li>• "I wish I could eat like you." (invalidating)</li>
                        <li>• "You'd feel better if you lost weight." (weight stigma)</li>
                        <li>• "Are you sure you want to eat that?" (food policing)</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Create Supportive Environments</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Keep all foods emotionally neutral at home</li>
                    <li>• Don't label foods as good/bad, healthy/unhealthy</li>
                    <li>• Avoid diet talk and body commentary</li>
                    <li>• Model Intuitive Eating if possible</li>
                    <li>• Challenge weight stigma in your own thinking</li>
                    <li>• Respect their boundaries and needs</li>
                    <li>• Support their recovery approach even if unfamiliar</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Family Considerations</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Examine family patterns around food and emotions</li>
                    <li>• Consider family therapy</li>
                    <li>• Address how emotions were handled in childhood</li>
                    <li>• Explore family food rules and beliefs</li>
                    <li>• Heal intergenerational patterns</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Resources for Support People</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• Family sessions available at Beyond Eating Recovery</li>
                    <li>• NEDA resources for families</li>
                    <li>• Books on supporting loved ones with eating struggles</li>
                    <li>• Online communities for families</li>
                  </ul>

                  <p className="text-foreground/90 leading-relaxed mt-6 bg-muted/50 p-6 rounded-lg font-semibold">
                    Take care of yourself: Supporting someone is emotionally challenging. Seek your own support through therapy or support groups.
                  </p>
                </div>
              </section>

              {/* Section 12: Related Resources */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Related Resources</h2>
                <div className="prose prose-lg max-w-none space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Internal Links</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• <Link to="/conditions/binge-eating-disorder" className="text-primary hover:underline">Binge Eating Disorder</Link></li>
                    <li>• <Link to="/conditions/disordered-eating" className="text-primary hover:underline">Disordered Eating</Link></li>
                    <li>• <Link to="/conditions/orthorexia" className="text-primary hover:underline">Orthorexia</Link></li>
                    <li>• <Link to="/body-shame" className="text-primary hover:underline">Body Shame Counseling</Link></li>
                    <li>• <Link to="/health-at-every-size" className="text-primary hover:underline">Health At Every Size</Link></li>
                    <li>• <a href="https://battleofthebinge.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Battle of the Binge Program</a></li>
                    <li>• <Link to="/our-approach" className="text-primary hover:underline">Our Approach to Treatment</Link></li>
                    <li>• <Link to="/conditions" className="text-primary hover:underline">View All Eating Disorders</Link></li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">External Resources</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• <a href="https://www.nationaleatingdisorders.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">National Eating Disorders Association (NEDA)</a></li>
                    <li>• <a href="https://www.intuitiveeating.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Intuitive Eating</a></li>
                    <li>• <a href="https://asdah.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ASDAH (Association for Size Diversity and Health)</a></li>
                    <li>• <a href="https://centerforbodytrust.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Center for Body Trust</a></li>
                    <li>• <a href="https://thebodyisnotanapology.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Body Is Not An Apology</a></li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Recommended Reading</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• <strong>"If Your Hunger Could Talk"</strong> by Anne Cuthbert - specifically addresses emotional eating</li>
                    <li>• <strong>"Intuitive Eating"</strong> by Evelyn Tribole and Elyse Resch</li>
                    <li>• <strong>"The Emotional Eating Workbook"</strong> by Carolyn Coker Ross</li>
                    <li>• <strong>"Health At Every Size"</strong> by Lindo Bacon</li>
                    <li>• <strong>"The Body Is Not An Apology"</strong> by Sonya Renee Taylor</li>
                    <li>• <strong>"Anti-Diet"</strong> by Christy Harrison</li>
                    <li>• <strong>"Body Respect"</strong> by Linda Bacon and Lucy Aphramor</li>
                    <li>• <strong>"When Food Is Comfort"</strong> by Julie M. Simon</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Podcasts</h3>
                  <ul className="space-y-2 text-foreground/90 ml-6">
                    <li>• <strong>Food Psych</strong> by Christy Harrison</li>
                    <li>• <strong>Don't Salt My Game</strong> by Laura Thomas</li>
                    <li>• <strong>Love, Food</strong> by Julie Duffy Dillon</li>
                    <li>• <strong>Body Kindness</strong> by Rebecca Scritchfield</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Sidebar Column (30%) - Sticky */}
            <aside className="space-y-6">
              {/* Anne Cuthbert Expert Profile Card */}
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <img
                    src={anneCuthbertPhoto}
                    alt="Anne Cuthbert, MA, LPC, LMHC - Eating Disorder Specialist"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-primary mb-2">Anne Cuthbert, MA, LPC, LMHC</h3>
                  <p className="text-sm font-semibold text-foreground/80 mb-4">Founder & Lead Therapist</p>
                  <p className="text-sm text-foreground/90 mb-4">
                    20+ years specializing in eating disorder treatment using Health At Every Size® and Intuitive Eating approaches.
                  </p>
                  <div className="space-y-1 text-sm text-foreground/80 mb-4">
                    <p><strong>Credentials:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Licensed Professional Counselor (OR)</li>
                      <li>• Licensed Mental Health Counselor (WA)</li>
                      <li>• CREDN Board Member</li>
                      <li>• ASDAH Member</li>
                      <li>• Eating Disorder Recovery Specialist</li>
                    </ul>
                  </div>
                  <p className="text-sm text-foreground/80 mb-4">
                    <strong>Personal Recovery:</strong> Anne brings lived experience of eating disorder recovery to her compassionate, weight-neutral practice.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/about/anne-cuthbert">Meet Anne</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Book CTA Card */}
              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-6">
                  <img
                    src={bookCover}
                    alt="If Your Hunger Could Talk book cover"
                    className="w-full h-64 object-contain mb-4 bg-white rounded"
                  />
                  <h3 className="text-xl font-bold mb-2">"If Your Hunger Could Talk"</h3>
                  <p className="text-sm mb-2">By Anne Cuthbert, MA, LPC, LMHC</p>
                  <p className="text-sm mb-4">
                    A compassionate guide specifically written for understanding and healing emotional eating, finding peace with food, and reconnecting with your body's wisdom.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a
                      href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Get the Book on Amazon
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Schedule Consultation CTA Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Ready to Break Free from Emotional Eating?</h3>
                  <p className="text-sm mb-4">
                    We provide compassionate, weight-neutral treatment for emotional eating and compulsive overeating throughout Oregon and Washington.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm mb-2">Call us today:</p>
                    <a href="tel:360-726-4141" className="text-2xl font-bold hover:underline block">
                      360-726-4141
                    </a>
                  </div>
                  <p className="text-sm mb-4">
                    <strong>Office hours:</strong> Monday-Friday, 9am-5pm
                  </p>
                  <p className="text-sm mb-4">Telehealth appointments available statewide.</p>
                  <Button asChild variant="secondary" className="w-full mb-3">
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  <p className="text-sm mt-4 pt-4 border-t border-primary-foreground/20">
                    <strong>Also explore:</strong>
                  </p>
                  <a
                    href="https://battleofthebinge.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline inline-flex items-center gap-2 mt-2"
                  >
                    Battle of the Binge 4-Week Course <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>

              {/* Crisis Resources Card */}
              <Card className="border-destructive bg-destructive/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-destructive mb-4">Need Immediate Support?</h3>
                  <div className="space-y-4 text-sm text-foreground/90">
                    <div>
                      <p className="font-semibold">988 Suicide & Crisis Lifeline</p>
                      <p>Call or text 988</p>
                      <p className="text-xs text-muted-foreground">Available 24/7</p>
                    </div>
                    <div>
                      <p className="font-semibold">NEDA Helpline</p>
                      <p>1-800-931-2237</p>
                      <p className="text-xs text-muted-foreground">Monday-Thursday 9am-9pm ET, Friday 9am-5pm ET</p>
                    </div>
                    <div>
                      <p className="font-semibold">Crisis Text Line</p>
                      <p>Text "NEDA" to 741741</p>
                      <p className="text-xs text-muted-foreground">Available 24/7</p>
                    </div>
                    <p className="text-xs pt-2 border-t border-destructive/20">
                      If you're experiencing a medical emergency, call 911 or go to your nearest emergency room.
                    </p>
                  </div>
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

export default EmotionalEating;