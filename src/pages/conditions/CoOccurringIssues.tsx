import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Phone, Mail, MapPin, AlertCircle, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";
import { Helmet } from "react-helmet";

const CoOccurringIssues = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Co-Occurring Issues & Dual Diagnosis Treatment | Beyond Eating Recovery</title>
        <meta name="description" content="Integrated treatment for eating disorders with co-occurring depression, anxiety, trauma, and substance use. Comprehensive care in Portland & Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/conditions/co-occurring-issues" />
        <meta property="og:title" content="Co-Occurring Issues & Dual Diagnosis Treatment | Beyond Eating Recovery" />
        <meta property="og:description" content="Integrated treatment for eating disorders with co-occurring depression, anxiety, trauma, and substance use. Comprehensive care that treats the whole person." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/conditions/co-occurring-issues" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Co-Occurring Issues & Dual Diagnosis Treatment | Beyond Eating Recovery" />
        <meta name="twitter:description" content="Integrated treatment for eating disorders with co-occurring depression, anxiety, trauma, and substance use. Comprehensive care that treats the whole person." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
      </Helmet>
      <BreadcrumbSchema />
      <Header />
      
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <ChevronRight className="h-4 w-4" />
          <li><Link to="/conditions" className="hover:text-primary">Eating Disorders</Link></li>
          <ChevronRight className="h-4 w-4" />
          <li className="text-foreground">Co-Occurring Issues</li>
        </ol>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          {/* Main Content Area (70%) */}
          <main>
            {/* Hero Section */}
            <section className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Co-Occurring Issues: Treating the Whole Person
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Eating disorders rarely exist in isolation. Most individuals struggling with an eating disorder also experience other mental health conditions—what we call co-occurring issues or dual diagnosis. At Beyond Eating Recovery, we understand that lasting recovery requires treating all aspects of your mental health, not just eating disorder symptoms. Our integrated approach addresses depression, anxiety, trauma, substance use, and other conditions that intersect with your eating disorder. You deserve comprehensive care that sees you as a whole person.
              </p>
            </section>

            {/* What Are Co-Occurring Issues? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Understanding Co-Occurring Issues</h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Co-occurring issues (also called dual diagnosis or comorbidity) refers to the presence of two or more mental health conditions occurring simultaneously. When someone has an eating disorder plus another psychiatric condition—such as depression, anxiety, PTSD, or substance use disorder—both conditions influence and interact with each other.
              </p>

              <h3 className="text-2xl font-semibold text-primary mb-4">Why Co-Occurring Issues Are Common</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Eating disorders are fundamentally about coping with emotional pain, trauma, and difficult life circumstances. The behaviors—restricting, binge eating, purging, excessive exercise—serve as attempts to manage overwhelming feelings, numb pain, or gain a sense of control. Because the underlying issues driving the eating disorder are complex, it's not surprising that other mental health conditions are often present.
              </p>

              <h3 className="text-2xl font-semibold text-primary mb-4">The Statistics</h3>
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <p className="text-lg mb-4">Research shows that co-occurring conditions are the rule, not the exception:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Depression:</strong> 50-75% of individuals with eating disorders also experience depression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Anxiety Disorders:</strong> Up to 65% have anxiety disorders, including social anxiety, generalized anxiety, and OCD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>PTSD and Trauma:</strong> 30-50% have experienced trauma and may have PTSD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Substance Use Disorders:</strong> 35-50% struggle with alcohol or drug use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Personality Disorders:</strong> 20-60% meet criteria for personality disorders, particularly borderline personality disorder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Self-Harm:</strong> 25-55% engage in non-suicidal self-injury</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>ADHD:</strong> 10-20% have ADHD, which can complicate impulse control and emotional regulation</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-primary mb-4">The Bidirectional Relationship</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Co-occurring conditions don't just happen alongside eating disorders—they interact in complex ways:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Mental health conditions can contribute to eating disorder development:</strong> Depression, anxiety, or trauma may lead someone to use eating disorder behaviors as a coping mechanism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Eating disorders can worsen mental health conditions:</strong> Malnutrition, food restriction, and binge-purge cycles negatively affect brain function, intensifying depression and anxiety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Both conditions share common risk factors:</strong> Genetics, trauma, perfectionism, difficulty with emotion regulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>One condition can mask the other:</strong> Sometimes depression or anxiety symptoms are dismissed as "just" part of the eating disorder, leaving them untreated</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mb-4">Why Integrated Treatment Is Essential</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Treating only the eating disorder while ignoring co-occurring conditions leads to:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Incomplete recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Higher risk of relapse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Ongoing suffering from untreated conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Difficulty making progress in treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Feeling like "something is still wrong" even when eating behaviors improve</span>
                </li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-8">
                <p className="text-lg font-medium text-foreground">
                  "You don't have to choose between treating your eating disorder and treating your depression, anxiety, or trauma. Comprehensive treatment addresses all of it—because you deserve full healing, not partial recovery."
                </p>
              </div>
            </section>

            {/* Common Co-Occurring Conditions */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Mental Health Conditions That Often Co-Occur with Eating Disorders</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Understanding the specific conditions that commonly accompany eating disorders can help you recognize patterns in your own experience and know that integrated treatment is available.
              </p>

              {/* Depression */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-primary mb-4">Depression and Mood Disorders</h3>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">What It Is</h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Depression (Major Depressive Disorder) involves persistent feelings of sadness, hopelessness, and loss of interest in activities. When co-occurring with eating disorders, depression can be both a cause and consequence of disordered eating.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-3">How It Connects to Eating Disorders</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Before the eating disorder:</strong> Depression may predate the eating disorder, with food restriction or binge eating emerging as coping mechanisms for depressive feelings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>During the eating disorder:</strong> Malnutrition from restriction directly causes depression symptoms (fatigue, hopelessness, difficulty concentrating)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Maintaining both conditions:</strong> Depression reduces motivation to recover; the eating disorder provides (temporary) relief from depressive feelings</span>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-3">Signs You May Have Co-Occurring Depression</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Persistent sadness, emptiness, or hopelessness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Loss of interest in activities you once enjoyed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Fatigue and low energy, even with adequate sleep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Difficulty concentrating or making decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Sleep disturbances (insomnia or oversleeping)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Feelings of worthlessness or excessive guilt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Thoughts of death or suicide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Physical symptoms (aches, pains, digestive issues)</span>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-3">Treatment Approach</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We address depression through Cognitive Behavioral Therapy (CBT) to challenge negative thought patterns, behavioral activation to reengage with meaningful activities, nutritional rehabilitation (malnutrition directly causes depression), medication evaluation when appropriate, and processing underlying grief, loss, or trauma contributing to depression.
                </p>
              </div>

              {/* Anxiety */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-primary mb-4">Anxiety Disorders</h3>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">What They Are</h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Anxiety disorders include generalized anxiety disorder (GAD), social anxiety disorder, panic disorder, specific phobias, and obsessive-compulsive disorder (OCD). These conditions involve excessive worry, fear, or ritualistic behaviors that interfere with daily life.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-3">How They Connect to Eating Disorders</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Anxiety often precedes eating disorders:</strong> Anxiety about weight, appearance, or social acceptance can trigger disordered eating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Eating disorder behaviors temporarily reduce anxiety:</strong> Restriction, purging, or exercise provide (short-term) relief from anxious feelings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Both conditions share traits:</strong> Perfectionism, rigidity, need for control, fear of uncertainty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>OCD overlap:</strong> Many eating disorder behaviors are ritualistic and compulsive (food rules, calorie counting, body checking)</span>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-3">Common Anxiety Presentations</h4>
                <div className="space-y-4 mb-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Generalized Anxiety Disorder (GAD):</p>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• Chronic worry about multiple areas of life</li>
                      <li>• Physical tension and restlessness</li>
                      <li>• Difficulty relaxing or turning off anxious thoughts</li>
                      <li>• Using eating disorder behaviors to feel "in control"</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Social Anxiety:</p>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• Fear of judgment, particularly about appearance or eating</li>
                      <li>• Avoidance of social situations involving food</li>
                      <li>• Eating alone to avoid scrutiny</li>
                      <li>• Belief that others are critically evaluating your body</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Panic Disorder:</p>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• Sudden panic attacks with physical symptoms</li>
                      <li>• Fear of having panic attacks in public</li>
                      <li>• Avoidance of situations that trigger panic</li>
                      <li>• Sometimes using restriction or purging to manage panic sensations</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Obsessive-Compulsive Disorder (OCD):</p>
                    <ul className="space-y-1 text-muted-foreground ml-4">
                      <li>• Intrusive thoughts about food, weight, contamination, or order</li>
                      <li>• Compulsive rituals (counting calories, checking body, excessive hand-washing)</li>
                      <li>• Rigid food rules and eating rituals</li>
                      <li>• Difficulty distinguishing OCD from eating disorder symptoms</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-foreground mb-3">Treatment Approach</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We address anxiety through exposure therapy for feared situations and foods, cognitive restructuring to challenge anxious thoughts, mindfulness and grounding techniques, distress tolerance skills (DBT), addressing perfectionistic standards, and medication evaluation when appropriate.
                </p>
              </div>

              {/* Trauma and PTSD */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-primary mb-4">Trauma and PTSD</h3>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">What It Is</h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Post-Traumatic Stress Disorder (PTSD) develops after experiencing or witnessing traumatic events such as abuse, assault, violence, accidents, or loss. Complex PTSD (C-PTSD) results from prolonged or repeated trauma, particularly in childhood.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-3">How Trauma Connects to Eating Disorders</h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Trauma is one of the strongest predictors of eating disorder development:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Sexual trauma:</strong> 30-65% of individuals with eating disorders have experienced sexual abuse or assault</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Childhood trauma:</strong> Physical abuse, emotional abuse, neglect, or witnessing violence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Attachment trauma:</strong> Inconsistent caregiving, abandonment, or ruptures in early relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Medical trauma:</strong> Invasive procedures, hospitalizations, or chronic illness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Identity-based trauma:</strong> Discrimination, bullying, or violence related to race, sexual orientation, gender identity, disability, or body size</span>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-3">Why Eating Disorders Develop After Trauma</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Body disconnection:</strong> Trauma teaches that bodies are unsafe; eating disorders create further disconnection as a protective mechanism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Control:</strong> After trauma involving powerlessness, eating disorder behaviors provide a sense of control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Numbing:</strong> Restriction, binge eating, or purging numb painful emotions and memories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Self-punishment:</strong> Some survivors internalize blame and punish themselves through eating disorder behaviors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Making the body "disappear":</strong> Restriction may be an attempt to become smaller, less noticeable, or less sexualized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Soothing:</strong> Binge eating may provide temporary comfort or filling of emotional emptiness</span>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-3">Signs You May Have Co-Occurring PTSD</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Intrusive memories, flashbacks, or nightmares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Avoidance of people, places, or situations that trigger memories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Hypervigilance (always on alert, easily startled)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Negative changes in mood and thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Dissociation (feeling detached from your body or surroundings)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Difficulty trusting others or forming close relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Strong emotional reactions to seemingly minor triggers</span>
                  </li>
                </ul>

                <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 my-6">
                  <p className="text-lg font-medium text-foreground">
                    "Healing from trauma is a prerequisite for lasting eating disorder recovery. You cannot fully recover from an eating disorder without addressing the trauma that drives it. We create a safe, paced approach that honors your readiness."
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-foreground mb-3">Treatment Approach</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use trauma-informed care that includes creating safety and stabilization first, EMDR (Eye Movement Desensitization and Reprocessing), trauma-focused CBT, somatic therapy to reconnect with the body safely, processing traumatic memories when you're ready, building resources and coping skills, and never forcing you to discuss trauma before you're prepared.
                </p>
              </div>

              {/* Substance Use Disorders */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-primary mb-4">Substance Use Disorders</h3>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">What It Is</h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Substance use disorders involve problematic use of alcohol, drugs (prescription or illicit), or other substances that interfere with daily functioning and wellbeing.
                </p>

                <h4 className="text-xl font-semibold text-foreground mb-3">How Substance Use Connects to Eating Disorders</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Shared risk factors:</strong> Impulsivity, difficulty regulating emotions, trauma history, genetics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Appetite suppression:</strong> Stimulants may be used to suppress appetite or lose weight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Numbing:</strong> Both eating disorder behaviors and substances serve to numb emotional pain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Disinhibition:</strong> Alcohol or drugs may trigger binge eating by reducing inhibitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Cross-addiction:</strong> Sometimes called "trading addictions," individuals may shift from one compulsive behavior to another</span>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold text-foreground mb-3">Treatment Approach</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide integrated treatment for both conditions through assessment of substance use patterns, simultaneous treatment, understanding the function both behaviors serve, developing healthier coping mechanisms, addressing underlying trauma, depression, or anxiety driving both, coordination with addiction specialists when needed, and harm reduction approaches when appropriate.
                </p>
              </div>

              {/* Other Conditions - Condensed */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-primary mb-4">Other Common Co-Occurring Conditions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Borderline Personality Disorder (BPD)</h4>
                    <p className="text-muted-foreground mb-2">
                      BPD involves intense emotions, unstable relationships, fear of abandonment, impulsivity, and difficulty with sense of self. Both BPD and eating disorders involve emotion dysregulation, impulsivity, identity disturbance, and self-destructive patterns.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Treatment:</strong> We use Dialectical Behavior Therapy (DBT) as primary treatment, focusing on emotion regulation skills, distress tolerance techniques, interpersonal effectiveness training, and mindfulness practice.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">ADHD (Attention-Deficit/Hyperactivity Disorder)</h4>
                    <p className="text-muted-foreground mb-2">
                      ADHD involves persistent patterns of inattention, hyperactivity, and impulsivity. Difficulty with impulse control can manifest as binge eating, while emotional dysregulation and executive functioning challenges disrupt regular eating patterns.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Treatment:</strong> Comprehensive ADHD assessment, medication evaluation (carefully, given eating disorder context), behavioral strategies for organization, emotion regulation skills, and structured eating patterns.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Self-Harm and Non-Suicidal Self-Injury</h4>
                    <p className="text-muted-foreground mb-2">
                      Non-suicidal self-injury (NSSI) involves deliberately harming your body without suicidal intent. 25-55% of individuals with eating disorders engage in self-harm. Both serve similar functions: regulating emotions, expressing pain, or punishing oneself.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Treatment:</strong> Understanding the function self-harm serves, developing alternative coping strategies, processing underlying trauma, harm reduction approaches, building distress tolerance skills, and creating safety plans—never shaming behaviors.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How Co-Occurring Conditions Complicate Recovery */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Integrated Treatment Is Essential</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Understanding how co-occurring conditions interact with eating disorders helps explain why comprehensive treatment is necessary for lasting recovery.
              </p>

              <h3 className="text-2xl font-semibold text-primary mb-4">Untreated Co-Occurring Conditions Create Barriers</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold text-foreground mb-2">Depression Makes Recovery Harder:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Lack of motivation to engage in treatment</li>
                    <li>• Hopelessness that recovery is possible</li>
                    <li>• Difficulty implementing behavioral changes</li>
                    <li>• Continued use of eating disorder as coping mechanism</li>
                    <li>• Higher dropout rates from treatment</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Anxiety Intensifies Eating Disorder Behaviors:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Food becomes more anxiety-provoking</li>
                    <li>• Avoidance patterns strengthen</li>
                    <li>• Rituals and compulsions intensify</li>
                    <li>• Fear of recovery (weight gain, loss of control)</li>
                    <li>• Difficulty with exposure-based treatment</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Unprocessed Trauma Perpetuates Symptoms:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Body remains unsafe and disconnected</li>
                    <li>• Eating disorder continues as protective mechanism</li>
                    <li>• Difficulty trusting treatment providers</li>
                    <li>• Triggers cause relapse</li>
                    <li>• Recovery feels threatening (losing protection)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-primary mb-4">The "Revolving Door" Effect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Many individuals experience a frustrating pattern:
              </p>
              <ol className="space-y-2 text-muted-foreground mb-6 ml-6 list-decimal">
                <li>Enter eating disorder treatment</li>
                <li>Eating behaviors improve temporarily</li>
                <li>Co-occurring condition remains untreated</li>
                <li>Emotional distress continues or worsens</li>
                <li>Return to eating disorder behaviors to cope</li>
                <li>Back in treatment, repeat cycle</li>
              </ol>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Breaking this cycle requires addressing all conditions simultaneously.
              </p>

              <h3 className="text-2xl font-semibold text-primary mb-4">What Comprehensive Treatment Looks Like</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Integrated Assessment:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Thorough evaluation of all mental health symptoms</li>
                    <li>• Understanding how conditions interact</li>
                    <li>• Identifying which came first and how they developed</li>
                    <li>• Recognizing trauma history and its impact</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Coordinated Treatment Planning:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Addressing all conditions in treatment goals</li>
                    <li>• Prioritizing based on severity and safety</li>
                    <li>• Using modalities that treat multiple conditions</li>
                    <li>• Regular reassessment and adjustment</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Holistic Approach:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Treating you as a whole person, not a collection of diagnoses</li>
                    <li>• Understanding that all symptoms are connected</li>
                    <li>• Addressing underlying causes, not just symptoms</li>
                    <li>• Supporting overall wellbeing, not just symptom reduction</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Self-Assessment */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Do You Have Co-Occurring Conditions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Many people don't realize they're struggling with multiple conditions. This reflection can help you identify patterns that may require integrated treatment.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Self-Reflection Questions</h3>
                <p className="text-muted-foreground mb-4">Check any that apply to you:</p>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Depression Indicators:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I feel sad, empty, or hopeless most days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I've lost interest in activities I used to enjoy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I have difficulty getting out of bed or motivating myself</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I feel worthless or excessively guilty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I've had thoughts of death or suicide</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Anxiety Indicators:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I worry excessively about multiple areas of my life</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I avoid social situations due to fear or anxiety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I have panic attacks or intense physical anxiety symptoms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I engage in ritualistic behaviors beyond eating disorder symptoms</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Trauma/PTSD Indicators:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I've experienced trauma (abuse, assault, violence, loss)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I have flashbacks or intrusive memories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I feel disconnected from my body or surroundings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I'm hypervigilant (always on alert)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Substance Use Indicators:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I use alcohol or drugs to cope with emotions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">I've tried to cut down on substance use but couldn't</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-muted-foreground">My substance use interferes with daily responsibilities</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground mt-6 italic">
                  If you checked multiple items, co-occurring conditions may be present. This doesn't mean there's something "more wrong" with you—it means you deserve comprehensive treatment that addresses all of your experiences.
                </p>
              </div>
            </section>

            {/* Our Integrated Treatment Approach */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">How We Treat Co-Occurring Issues at Beyond Eating Recovery</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Beyond Eating Recovery, we don't treat eating disorders in isolation. We provide comprehensive care that addresses all aspects of your mental health, recognizing that true recovery requires treating the whole person.
              </p>

              <h3 className="text-2xl font-semibold text-primary mb-4">Our Philosophy</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold text-foreground mb-2">You Are Not a Collection of Diagnoses</p>
                  <p className="text-muted-foreground">
                    We see you as one whole person who has developed multiple ways of coping with pain, trauma, or difficult life circumstances. We don't treat your eating disorder separately from your depression, anxiety, or trauma—we treat you.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">All Symptoms Are Connected</p>
                  <p className="text-muted-foreground">
                    Your eating disorder, depression, anxiety, and other struggles are interconnected. They share common roots and influence each other. Recovery means addressing the underlying causes and healing comprehensively.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-primary mb-4">Evidence-Based, Integrated Care</h3>
              <p className="text-muted-foreground mb-4">We use therapeutic approaches proven to treat multiple conditions simultaneously:</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold text-foreground mb-2">Dialectical Behavior Therapy (DBT)</p>
                  <p className="text-muted-foreground">Effective for eating disorders, BPD, self-harm, emotion dysregulation, and impulsivity. Includes emotion regulation skills, distress tolerance techniques, interpersonal effectiveness, and mindfulness practice.</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Trauma-Focused Therapies</p>
                  <p className="text-muted-foreground">EMDR (Eye Movement Desensitization and Reprocessing), trauma-focused CBT, somatic therapy, and Internal Family Systems (IFS).</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Cognitive Behavioral Therapy (CBT)</p>
                  <p className="text-muted-foreground">Effective for eating disorders, depression, anxiety, and OCD through identifying and challenging unhelpful thought patterns, behavioral activation, and exposure therapy.</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Acceptance and Commitment Therapy (ACT)</p>
                  <p className="text-muted-foreground">Effective for multiple conditions through psychological flexibility, values clarification, defusion from unhelpful thoughts, and committed action.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-primary mb-4">Anne Cuthbert's Integrated Approach</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-accent">Step 1:</span>
                  <div>
                    <p className="font-semibold text-foreground">Comprehensive Assessment</p>
                    <p className="text-muted-foreground">Thorough evaluation of all symptoms and experiences, understanding your history and how conditions developed, identifying trauma and its impact, recognizing strengths and resources.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-accent">Step 2:</span>
                  <div>
                    <p className="font-semibold text-foreground">Collaborative Treatment Planning</p>
                    <p className="text-muted-foreground">Discussing all conditions present, prioritizing based on severity and your goals, creating a roadmap that addresses everything, ensuring you feel heard and involved.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-accent">Step 3:</span>
                  <div>
                    <p className="font-semibold text-foreground">Building Safety and Stabilization</p>
                    <p className="text-muted-foreground">Creating emotional safety in therapy, developing immediate coping skills, addressing crisis behaviors, stabilizing life circumstances when possible.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-accent">Step 4:</span>
                  <div>
                    <p className="font-semibold text-foreground">Processing and Healing</p>
                    <p className="text-muted-foreground">Addressing trauma when you're ready, processing painful experiences and emotions, working through depression and anxiety, challenging eating disorder and other unhelpful patterns.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-accent">Step 5:</span>
                  <div>
                    <p className="font-semibold text-foreground">Integration and Growth</p>
                    <p className="text-muted-foreground">Integrating all you've learned, building a meaningful life aligned with your values, developing sustainable wellness practices, preparing for continued growth.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-accent">Step 6:</span>
                  <div>
                    <p className="font-semibold text-foreground">Relapse Prevention and Maintenance</p>
                    <p className="text-muted-foreground">Identifying warning signs for all conditions, creating personalized relapse prevention plans, building ongoing support systems, knowing when to return to treatment.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="tel:360-726-4141">Schedule Comprehensive Assessment</a>
                </Button>
              </div>
            </section>

            {/* When to Seek Treatment */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Is Integrated Treatment Right for You?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                If you've struggled with eating disorder treatment that hasn't fully helped, or if you recognize multiple mental health struggles in yourself, integrated treatment may be essential for your recovery.
              </p>

              <h3 className="text-2xl font-semibold text-primary mb-4">Seek Integrated Treatment If:</h3>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You've been in eating disorder treatment before but relapsed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Your eating behaviors improve in treatment but you still feel depressed, anxious, or empty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You have a history of trauma that hasn't been addressed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You use substances to cope with eating disorder urges or emotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You engage in self-harm alongside eating disorder behaviors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You have intense, unstable emotions that feel overwhelming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You've been diagnosed with multiple mental health conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Your treatment team focuses only on food and weight without addressing underlying issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>You feel like something is missing from your current treatment</span>
                </li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mb-8">
                <p className="text-lg font-medium text-foreground mb-2">The Right Time to Reach Out</p>
                <p className="text-muted-foreground">
                  There's no "perfect time" to seek treatment. If multiple mental health conditions are impacting your life, now is the time to get comprehensive help. Waiting for things to get worse or trying to fix one issue before addressing others only prolongs suffering.
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="tel:360-726-4141">Call Us: 360-726-4141</a>
                </Button>
              </div>
            </section>

            {/* Recovery */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">What Recovery Looks Like with Co-Occurring Issues</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Recovery from co-occurring conditions is possible, though the journey may be longer and more complex than treating a single condition. Understanding what recovery entails can provide hope and realistic expectations.
              </p>

              <h3 className="text-2xl font-semibold text-primary mb-4">What Full Recovery Includes</h3>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Symptom reduction or remission for all conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Healthy coping mechanisms replacing harmful behaviors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Meaningful relationships and social connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Engagement in values-aligned activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Quality of life that reflects what matters to you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Self-compassion and acceptance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Tools to manage future challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>A life where mental health conditions don't control you</span>
                </li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6">
                <p className="text-lg font-medium text-foreground mb-2">Stories of Hope</p>
                <p className="text-muted-foreground">
                  Thousands of people have recovered from co-occurring conditions. The journey is challenging, but on the other side is freedom from symptoms that once controlled your life, peace with food and your body, emotional resilience and wellbeing, a life built on your values and dreams, and the person you were always meant to be.
                </p>
              </div>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Additional Resources and Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Binge Eating Disorder</h3>
                  <p className="text-muted-foreground mb-4">Learn about binge eating disorder, which frequently co-occurs with depression and anxiety.</p>
                  <Link to="/conditions/binge-eating-disorder" className="text-accent hover:underline inline-flex items-center gap-1">
                    Learn More <ExternalLink className="h-4 w-4" />
                  </Link>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Anorexia Nervosa</h3>
                  <p className="text-muted-foreground mb-4">Understand anorexia nervosa and its common co-occurrence with OCD and depression.</p>
                  <Link to="/conditions/anorexia-nervosa" className="text-accent hover:underline inline-flex items-center gap-1">
                    Learn More <ExternalLink className="h-4 w-4" />
                  </Link>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Bulimia Nervosa</h3>
                  <p className="text-muted-foreground mb-4">Explore bulimia nervosa and its connections to impulsivity and substance use.</p>
                  <Link to="/conditions/bulimia-nervosa" className="text-accent hover:underline inline-flex items-center gap-1">
                    Learn More <ExternalLink className="h-4 w-4" />
                  </Link>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Body Shame</h3>
                  <p className="text-muted-foreground mb-4">Understand how body shame intersects with depression, anxiety, and eating disorders.</p>
                  <Link to="/body-shame" className="text-accent hover:underline inline-flex items-center gap-1">
                    Learn More <ExternalLink className="h-4 w-4" />
                  </Link>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Treatment Approach</h3>
                  <p className="text-muted-foreground mb-4">Learn about Anne's integrated 6-step treatment process for comprehensive healing.</p>
                  <Link to="/our-approach" className="text-accent hover:underline inline-flex items-center gap-1">
                    Learn More <ExternalLink className="h-4 w-4" />
                  </Link>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Meet Our Team</h3>
                  <p className="text-muted-foreground mb-4">Our therapists are trained in treating co-occurring conditions alongside eating disorders.</p>
                  <Link to="/about" className="text-accent hover:underline inline-flex items-center gap-1">
                    Learn More <ExternalLink className="h-4 w-4" />
                  </Link>
                </Card>
              </div>

              <div className="text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/conditions">View All Eating Disorders</Link>
                </Button>
              </div>
            </section>
          </main>

          {/* Sidebar (30%) */}
          <aside className="space-y-6">
            {/* Expert Profile Card */}
            <Card className="p-6 sticky top-24">
              <div className="border-l-4 border-primary pl-4 mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">Integrated Treatment Expert</h3>
              </div>
              
              <div className="mb-4">
                <img 
                  src={anneCuthbertPhoto}
                  alt="Anne Cuthbert, MA, LPC, LMHC - Integrated Treatment Specialist"
                  className="w-full rounded-lg mb-4"
                />
              </div>

              <h4 className="font-bold text-lg text-foreground mb-1">Anne Cuthbert, MA, LPC, LMHC</h4>
              <p className="text-sm text-muted-foreground mb-3">Founder & Owner, Beyond Eating Recovery</p>
              
              <div className="bg-accent/10 rounded px-3 py-1 inline-block mb-4">
                <p className="text-sm font-semibold text-accent">20+ Years Experience | Trauma-Informed Care</p>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Anne specializes in comprehensive treatment for eating disorders and co-occurring conditions. With over 20 years of experience, Anne understands that lasting recovery requires addressing all aspects of mental health—not just eating behaviors. She provides integrated care for eating disorders, trauma, depression, anxiety, and other co-occurring issues using evidence-based, compassionate approaches.
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-foreground">Specialties:</p>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Co-Occurring Conditions
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Trauma & PTSD (EMDR)
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Depression & Anxiety
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Eating Disorder Recovery
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Integrated Treatment
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
              
              <h3 className="text-xl font-bold text-primary mb-2">Understand the Emotional Roots</h3>
              <p className="text-sm font-semibold text-foreground mb-4">Free Chapter: Beyond Food—What Your Eating Disorder Is Really About</p>
              
              <p className="text-sm text-muted-foreground mb-4">
                Anne's book explores how eating disorders develop as coping mechanisms for deeper emotional struggles, trauma, and pain. Download a free chapter to begin understanding the whole picture.
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
                <h3 className="text-xl font-bold">Ready for Comprehensive Treatment?</h3>
              </div>
              
              
              <p className="text-sm mb-4 opacity-90">
                If you're struggling with multiple mental health conditions, comprehensive treatment can help. Schedule a free consultation to learn how integrated care can support your full recovery.
              </p>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:360-726-4141" className="hover:underline">360-726-4141</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <Link to="/contact" className="hover:underline">Contact Form</Link>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>Portland, OR & Vancouver, WA<br/>(Teletherapy Available)</span>
                </div>
              </div>

              <p className="text-sm mb-4 opacity-90">
                <strong>Office Hours:</strong> Monday - Friday: 9am - 5pm
              </p>

              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                <a href="tel:360-726-4141">Schedule Free Consultation</a>
              </Button>

              <p className="text-xs mt-3 opacity-75 text-center">
                We accept insurance and offer self-pay options.
              </p>
            </Card>

            {/* Crisis Resources Card */}
            <Card className="p-6 bg-muted">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <h3 className="text-lg font-bold text-foreground">Need Immediate Support?</h3>
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
                  <p className="text-muted-foreground">Monday-Thursday: 9am-9pm ET<br/>Friday: 9am-5pm ET</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">SAMHSA National Helpline</p>
                  <p className="text-muted-foreground mb-1">Call: 1-800-662-4357</p>
                  <p className="text-muted-foreground">(Substance Use & Mental Health)</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 italic">
                If you're experiencing a medical or mental health emergency, please call 911 or go to your nearest emergency room.
              </p>
            </Card>
          </aside>
        </div>
      </div>
      
      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default CoOccurringIssues;
