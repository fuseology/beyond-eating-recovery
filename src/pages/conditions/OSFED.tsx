import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Phone, Mail, MapPin, Calendar, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";
import { Helmet } from "react-helmet";
import { MedicalConditionSchema } from "@/components/schemas";

const OSFED = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>OSFED Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta name="description" content="Comprehensive OSFED treatment. Other Specified Feeding or Eating Disorder is just as serious as other eating disorders. Specialized care in Portland & Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/conditions/osfed" />
        <meta property="og:title" content="OSFED Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta property="og:description" content="Comprehensive OSFED treatment. Other Specified Feeding or Eating Disorder is just as serious as other eating disorders. Specialized care available." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/conditions/osfed" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OSFED Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta name="twitter:description" content="Comprehensive OSFED treatment. Other Specified Feeding or Eating Disorder is just as serious as other eating disorders. Specialized care available." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
      </Helmet>
      <MedicalConditionSchema
        name="Other Specified Feeding or Eating Disorder"
        alternateName={["OSFED", "EDNOS"]}
        description="OSFED includes eating disorders that cause significant distress but don't meet full criteria for other eating disorders. It is just as serious and requires specialized treatment."
        signOrSymptom={[
          "Atypical anorexia symptoms",
          "Low frequency binge eating",
          "Low frequency purging",
          "Night eating syndrome",
          "Purging disorder",
          "Significant distress around food and eating"
        ]}
        possibleTreatment={[
          "Cognitive Behavioral Therapy (CBT)",
          "Dialectical Behavior Therapy (DBT)",
          "Individual Therapy",
          "Nutritional Counseling",
          "Group Therapy"
        ]}
        riskFactor={[
          "History of dieting",
          "Perfectionism",
          "Anxiety or depression",
          "Trauma history",
          "Body dissatisfaction"
        ]}
        url="https://www.beyondeatingrecovery.com/conditions/osfed"
      />
      <BreadcrumbSchema />
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/conditions" className="hover:text-primary transition-colors">Eating Disorders</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">OSFED</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area (70%) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero Section */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                OSFED Treatment: Other Specified Feeding or Eating Disorder
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Other Specified Feeding or Eating Disorder (OSFED) is a serious eating disorder diagnosis given when symptoms don't fully meet the criteria for anorexia nervosa, bulimia nervosa, binge eating disorder, or ARFID—but still cause significant distress and impairment. OSFED is not a 'less severe' eating disorder; research shows it's just as serious and life-threatening as other eating disorders. At Beyond Eating Recovery, we provide comprehensive treatment for all presentations of OSFED, recognizing that your struggle is real, valid, and deserving of specialized care—regardless of whether you fit neatly into diagnostic boxes.
              </p>
            </section>

            <Separator />

            {/* What is OSFED */}
            <section id="understanding">
              <h2 className="text-3xl font-bold text-primary mb-4">Understanding OSFED</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Other Specified Feeding or Eating Disorder (OSFED) is a diagnostic category in the DSM-5 that encompasses eating disorders that cause clinically significant distress and impairment but don't meet the full diagnostic criteria for anorexia nervosa, bulimia nervosa, binge eating disorder, or ARFID.
                </p>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Key Understanding</h3>
                  <p className="mb-4">
                    OSFED is not a "catch-all" or "less serious" diagnosis. It's a legitimate, severe eating disorder that requires specialized treatment. In fact:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>OSFED is the most common eating disorder diagnosis, accounting for 32-53% of eating disorder cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>OSFED has similar mortality rates to other eating disorders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>OSFED causes equal psychological distress and medical complications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>OSFED deserves the same level of care as any other eating disorder</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Why the OSFED Category Exists</h3>
                <p>The OSFED diagnosis was created to acknowledge that:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Eating disorders exist on a spectrum</li>
                  <li>Not everyone fits neatly into specific diagnostic criteria</li>
                  <li>Symptoms can be severe and life-threatening even without meeting every criterion</li>
                  <li>Individuals shouldn't be denied treatment because they don't meet arbitrary diagnostic thresholds</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Common Misunderstandings About OSFED</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Myth: "OSFED is just 'almost' an eating disorder."</p>
                    <p><strong>Reality:</strong> OSFED is a full eating disorder with equal severity and health risks.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Myth: "OSFED means you're not sick enough for treatment."</p>
                    <p><strong>Reality:</strong> OSFED absolutely warrants professional treatment. Severity is not determined by diagnosis.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Myth: "OSFED is a temporary diagnosis until you get 'worse.'"</p>
                    <p><strong>Reality:</strong> OSFED is a legitimate diagnosis, not a waiting room for other eating disorders.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Myth: "People with OSFED don't struggle as much."</p>
                    <p><strong>Reality:</strong> Research shows OSFED causes equivalent psychological distress, medical complications, and functional impairment.</p>
                  </div>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 my-6">
                  <p className="text-foreground font-medium">
                    "You don't need to be 'sick enough' to deserve help. OSFED is a serious eating disorder, and your symptoms—whatever they are—warrant professional treatment. You deserve recovery."
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Five OSFED Presentations */}
            <section id="presentations">
              <h2 className="text-3xl font-bold text-primary mb-6">The Five Specified OSFED Presentations</h2>
              
              <p className="text-muted-foreground mb-6">
                While OSFED encompasses many presentations, the DSM-5 specifically names five common types. Understanding these can help you recognize patterns in your own experience.
              </p>

              <div className="space-y-8">
                {/* Atypical Anorexia */}
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">1. Atypical Anorexia Nervosa</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Atypical Anorexia Nervosa (AAN) involves all the symptoms of anorexia nervosa—restrictive eating, intense fear of weight gain, body image disturbance—but the individual's weight remains within or above what's considered "normal" range, despite significant weight loss.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-primary mt-4">Diagnostic Features:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Restriction of energy intake leading to weight loss</li>
                      <li>Intense fear of gaining weight or becoming fat</li>
                      <li>Disturbance in how body weight or shape is experienced</li>
                      <li><strong>BUT:</strong> Despite significant weight loss, weight is not below "normal" range</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-primary mt-4">The Weight Bias Problem:</h4>
                    <p>
                      Atypical anorexia is often underdiagnosed and undertreated because healthcare providers dismiss symptoms in larger bodies, individuals receive compliments on weight loss instead of concern, and insurance may deny treatment based on weight alone.
                    </p>

                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="font-semibold">Medical Reality:</p>
                      <p>Research shows atypical anorexia is equally dangerous as anorexia nervosa with same cardiac complications, similar electrolyte imbalances, equal rates of depression and anxiety, and equivalent medical instability despite "normal" weight.</p>
                    </div>
                  </div>
                </div>

                {/* Bulimia (Low Frequency) */}
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">2. Bulimia Nervosa (Low Frequency/Limited Duration)</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      This presentation includes all symptoms of bulimia nervosa—binge eating followed by compensatory behaviors—but the episodes occur less frequently than once per week, or have occurred for less than three months.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-primary mt-4">Diagnostic Features:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Recurrent binge eating (eating large amounts with loss of control)</li>
                      <li>Recurrent compensatory behaviors (purging, fasting, excessive exercise)</li>
                      <li>Self-evaluation unduly influenced by body shape and weight</li>
                      <li><strong>BUT:</strong> Occurs less than once weekly or for less than 3 months</li>
                    </ul>

                    <p className="mt-4">
                      Even "infrequent" binge/purge cycles cause electrolyte imbalances (potentially fatal), cardiac complications, esophageal damage, dental erosion, and gastrointestinal problems.
                    </p>
                  </div>
                </div>

                {/* Binge Eating (Low Frequency) */}
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">3. Binge Eating Disorder (Low Frequency/Limited Duration)</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      This involves recurrent binge eating episodes with loss of control and distress, but occurring less frequently than once per week or for less than three months.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-primary mt-4">Diagnostic Features:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Recurrent binge eating with sense of lack of control</li>
                      <li>Marked distress regarding binge eating</li>
                      <li>No regular compensatory behaviors</li>
                      <li><strong>BUT:</strong> Occurs less than once weekly or for less than 3 months</li>
                    </ul>

                    <p className="mt-4">
                      Binge eating twice per month still causes immense suffering. Duration doesn't determine severity or need for treatment.
                    </p>
                  </div>
                </div>

                {/* Purging Disorder */}
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">4. Purging Disorder</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Purging Disorder involves recurrent purging behaviors (self-induced vomiting, laxative abuse, diuretic abuse) to influence weight or shape without binge eating episodes.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-primary mt-4">What This Looks Like:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Purge after eating normal or small amounts of food</li>
                      <li>May purge after any eating, or after specific "fear foods"</li>
                      <li>Experience intense guilt or anxiety after eating</li>
                      <li>Use purging as primary weight control method</li>
                      <li>Don't have objective binge episodes</li>
                    </ul>

                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="font-semibold">Medical Complications:</p>
                      <p>Purging without binge eating still causes severe electrolyte imbalances (cardiac arrest risk), esophageal tears, gastric problems, dental erosion, kidney damage, and bone density loss.</p>
                    </div>
                  </div>
                </div>

                {/* Night Eating Syndrome */}
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">5. Night Eating Syndrome</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Night Eating Syndrome (NES) involves recurrent episodes of eating after awakening from sleep, or consuming excessive amounts of food after the evening meal, with awareness and recall of the eating.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-primary mt-4">Diagnostic Features:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Recurrent eating after awakening from sleep (sleep-related eating)</li>
                      <li>OR excessive food consumption after evening meal</li>
                      <li>Awareness and memory of the eating (not sleepwalking)</li>
                      <li>Causes distress or impairment</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-primary mt-4">What This Looks Like:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Wake multiple times during night and eat</li>
                      <li>Consume 25% or more of daily calories after evening meal</li>
                      <li>Feel unable to fall back asleep without eating</li>
                      <li>May not feel hungry during the day</li>
                      <li>Experience guilt and shame about nighttime eating</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Other OSFED Presentations */}
            <section id="other-presentations">
              <h2 className="text-3xl font-bold text-primary mb-4">Beyond the Five Named Types</h2>
              
              <p className="text-muted-foreground mb-6">
                Many individuals with OSFED don't fit the five specifically named presentations. These "other" presentations are equally valid and deserving of treatment.
              </p>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Orthorexia (Obsession with "Healthy" Eating)</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Fixation on food quality, purity, or "healthiness"</li>
                    <li>Rigid rules about "good" and "bad" foods</li>
                    <li>Anxiety and distress when unable to eat "correctly"</li>
                    <li>Social isolation due to food restrictions</li>
                    <li>May lead to nutritional deficiencies despite focus on "health"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Diabulimia (Insulin Manipulation)</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Individuals with Type 1 diabetes who restrict or omit insulin to lose weight</li>
                    <li>Extremely dangerous and potentially fatal</li>
                    <li>Leads to severe diabetic complications</li>
                    <li>Combines eating disorder with diabetes mismanagement</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Chew and Spit Disorder</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Chewing food and spitting it out before swallowing</li>
                    <li>Used to "taste" food without consuming calories</li>
                    <li>Causes dental problems, jaw issues, and psychological distress</li>
                    <li>Often combined with other eating disorder behaviors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Exercise Addiction as Primary Symptom</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Compulsive, excessive exercise driven by weight/shape concerns</li>
                    <li>Exercise despite injury, illness, or life interference</li>
                    <li>Extreme distress when unable to exercise</li>
                    <li>May or may not include food restriction</li>
                  </ul>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mt-6">
                  <p className="text-foreground font-medium">
                    If your relationship with food, eating, exercise, or your body is causing you significant distress or interfering with your life—you have an eating disorder worthy of treatment, regardless of what it's called.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Signs and Symptoms */}
            <section id="symptoms">
              <h2 className="text-3xl font-bold text-primary mb-4">Signs and Symptoms of OSFED</h2>
              
              <p className="text-muted-foreground mb-6">
                Because OSFED encompasses diverse presentations, symptoms vary widely. However, common patterns emerge across most OSFED types.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Behavioral Signs</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Restrictive eating patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Binge eating episodes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Purging behaviors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Chewing and spitting food</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Avoiding social situations involving food</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Secretive eating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Compulsive or excessive exercise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Rigid food rules</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Physical Symptoms</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Weight loss or fluctuations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Fatigue and weakness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Dizziness or fainting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Dental problems (from purging)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Gastrointestinal issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Irregular or absent periods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hair loss or brittle nails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Sleep disturbances</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Psychological Signs</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Intense fear of weight gain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Distorted body image</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Preoccupation with food and weight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Anxiety around eating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Depression and mood swings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Shame and guilt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Low self-esteem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Feeling out of control</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Social Impact</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Withdrawing from friends and family</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Avoiding social gatherings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Relationship conflicts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Difficulty concentrating at work/school</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Missing work or school</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Financial problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Isolation and loneliness</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Treatment */}
            <section id="treatment">
              <h2 className="text-3xl font-bold text-primary mb-4">Evidence-Based Treatment for OSFED</h2>
              
              <p className="text-muted-foreground mb-6">
                OSFED treatment is tailored to the specific presentation and individual needs. Research shows OSFED responds well to the same treatments used for other eating disorders.
              </p>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Our Treatment Philosophy</h3>
                  <p className="mb-4">
                    Your OSFED may look different from someone else's. We tailor treatment to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your specific eating disorder behaviors</li>
                    <li>Underlying factors maintaining the disorder</li>
                    <li>Co-occurring mental health conditions</li>
                    <li>Your goals, values, and readiness</li>
                    <li>Your identities and life context</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Evidence-Based Approaches</h3>
                  <p className="mb-4">Treatment draws from proven modalities:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Identifying and challenging eating disorder thoughts, behavioral experiments, exposure work</li>
                    <li><strong>Dialectical Behavior Therapy (DBT):</strong> Emotion regulation, distress tolerance, mindfulness, interpersonal effectiveness</li>
                    <li><strong>Family-Based Treatment:</strong> For adolescents, involving family in recovery process</li>
                    <li><strong>Acceptance and Commitment Therapy (ACT):</strong> Values-based living, psychological flexibility</li>
                    <li><strong>Trauma-focused therapies:</strong> When trauma underlies eating disorder (EMDR, trauma-focused CBT)</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">Anne Cuthbert's Integrated Approach</h3>
                  <ol className="space-y-3 list-decimal pl-6">
                    <li><strong>Comprehensive Assessment:</strong> Understanding your unique OSFED presentation and identifying maintaining factors</li>
                    <li><strong>Stabilization:</strong> Addressing immediate medical concerns and establishing safety</li>
                    <li><strong>Active Treatment:</strong> Addressing eating disorder behaviors, challenging beliefs, processing trauma</li>
                    <li><strong>Body Image Work:</strong> Challenging weight stigma, developing self-compassion</li>
                    <li><strong>Relapse Prevention:</strong> Identifying triggers, creating maintenance plan, building support</li>
                    <li><strong>Values-Aligned Living:</strong> Building a life beyond the eating disorder</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Core Treatment Components</h3>
                  
                  <h4 className="text-xl font-semibold text-primary mb-2 mt-4">Psychological Treatment</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Individual therapy (weekly or bi-weekly sessions)</li>
                    <li>Cognitive restructuring and behavioral change</li>
                    <li>Emotion regulation and coping skills</li>
                    <li>Trauma processing when indicated</li>
                    <li>Body image and self-compassion work</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary mb-2 mt-4">Nutritional Rehabilitation</h4>
                  <p className="mb-2">Working with Registered Dietitian Stephanie Okumura, MS, RDN:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Normalizing eating patterns</li>
                    <li>Meal planning and structure</li>
                    <li>Challenging food rules</li>
                    <li>Intuitive eating principles</li>
                    <li>Addressing nutritional deficiencies</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary mb-2 mt-4">Medical Monitoring</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Regular vital sign monitoring</li>
                    <li>Laboratory testing as needed</li>
                    <li>ECG monitoring if indicated</li>
                    <li>Coordination with medical providers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">Treatment Formats</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Individual Therapy:</strong> Weekly or bi-weekly 50-minute sessions tailored to your needs</li>
                    <li><strong>Dietitian Services:</strong> Nutritional assessment and ongoing support</li>
                    <li><strong>Group Therapy:</strong> Connection with others in recovery, including LGBTQIA+ group</li>
                    <li><strong>Family Therapy:</strong> When appropriate, involving family in treatment</li>
                    <li><strong>Teletherapy:</strong> All services available via secure video throughout Oregon and Washington</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </section>

            <Separator />

            {/* Recovery */}
            <section id="recovery">
              <h2 className="text-3xl font-bold text-primary mb-4">What Does OSFED Recovery Look Like?</h2>
              
              <p className="text-muted-foreground mb-6">
                Recovery from OSFED is absolutely possible. Research shows that individuals with OSFED achieve full recovery at rates similar to other eating disorders with appropriate treatment.
              </p>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">What Recovery Includes</h3>
                  
                  <h4 className="font-semibold mt-4 mb-2">Behavioral Recovery:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Normalized eating patterns without restriction</li>
                    <li>Absence of binge eating or purging</li>
                    <li>Flexible eating across all foods</li>
                    <li>Appropriate relationship with exercise</li>
                    <li>Eating in social situations comfortably</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Psychological Recovery:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Reduced preoccupation with food, weight, body</li>
                    <li>Self-worth not tied to appearance or weight</li>
                    <li>Coping with emotions without eating disorder behaviors</li>
                    <li>Reduced anxiety and depression</li>
                    <li>Self-compassion and acceptance</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Social and Functional Recovery:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Engaging in relationships</li>
                    <li>Participating in life activities</li>
                    <li>Pursuing education and career</li>
                    <li>Experiencing joy and meaning</li>
                    <li>Living aligned with values</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">Recovery Is Not:</h3>
                  <ul className="space-y-2">
                    <li><strong>Perfect eating:</strong> No one eats perfectly; recovery means flexibility, not perfection</li>
                    <li><strong>Never thinking about food or body:</strong> Occasional thoughts are normal; they just don't control you</li>
                    <li><strong>Loving your body every day:</strong> Body acceptance or neutrality, not necessarily love</li>
                    <li><strong>Linear progress:</strong> Setbacks are normal and don't mean failure</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Life After OSFED</h3>
                  <p className="mb-3">Recovery allows you to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Eat flexibly and enjoyably</li>
                    <li>Engage in relationships without food anxiety</li>
                    <li>Pursue education and career freely</li>
                    <li>Travel and explore</li>
                    <li>Experience joy, connection, and meaning</li>
                    <li>Direct energy toward what matters</li>
                    <li>Be present in your life</li>
                  </ul>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
                  <p className="text-foreground font-medium">
                    "Research and clinical experience show: OSFED is treatable, full recovery is achievable, and many individuals go on to live full, rich lives. Recovery is worth the hard work."
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* When to Seek Help */}
            <section id="seek-help">
              <h2 className="text-3xl font-bold text-primary mb-4">When Should You Seek Help for OSFED?</h2>
              
              <p className="text-muted-foreground mb-6">
                If you're reading this page, you likely already sense something is wrong. Trust that instinct. You don't need to be "sick enough" to deserve help.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-orange-500 border-2">
                  <h3 className="text-xl font-semibold text-primary mb-4">Seek Help If:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>You're restricting food intake or avoiding food groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>You're binge eating, even infrequently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>You're purging (vomiting, laxatives, diuretics)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Food and eating cause you significant anxiety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>You're preoccupied with weight or body shape</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>You're exercising compulsively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Eating disorder thoughts dominate your day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>You're avoiding social situations</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Common Barriers to Help</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold">"I'm not sick enough"</p>
                      <p className="text-sm">OSFED is sick enough. Severity isn't determined by diagnosis or weight.</p>
                    </div>
                    <div>
                      <p className="font-semibold">"I don't meet full criteria"</p>
                      <p className="text-sm">That's exactly what OSFED is—and it deserves treatment.</p>
                    </div>
                    <div>
                      <p className="font-semibold">"My weight is normal"</p>
                      <p className="text-sm">Eating disorders occur at all weights. Medical danger exists at all weights.</p>
                    </div>
                    <div>
                      <p className="font-semibold">"Sometimes I'm fine"</p>
                      <p className="text-sm">Variable symptoms don't mean less serious. Seek help during windows of insight.</p>
                    </div>
                    <div>
                      <p className="font-semibold">"I'm embarrassed"</p>
                      <p className="text-sm">We provide shame-free, compassionate care. You won't be judged.</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  If eating disorder behaviors are causing you distress, interfering with your life, or impacting your health—you deserve help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:360-726-4141">
                      <Phone className="mr-2 h-5 w-5" />
                      360-726-4141
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            <Separator />

            {/* Related Resources */}
            <section id="resources">
              <h2 className="text-3xl font-bold text-primary mb-6">Additional Resources and Support</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Binge Eating Disorder</h3>
                  <p className="text-muted-foreground mb-4">Understand binge eating disorder and subthreshold presentations.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/conditions/binge-eating-disorder">Learn More</Link>
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Bulimia Nervosa</h3>
                  <p className="text-muted-foreground mb-4">Explore bulimia nervosa and low-frequency presentations.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/conditions/bulimia-nervosa">Learn More</Link>
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Co-Occurring Issues</h3>
                  <p className="text-muted-foreground mb-4">Understand conditions that frequently co-occur with OSFED.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/conditions/co-occurring-issues">Learn More</Link>
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Treatment Approach</h3>
                  <p className="text-muted-foreground mb-4">Learn about our individualized approach to OSFED treatment.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/our-approach">Learn More</Link>
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Meet Our Team</h3>
                  <p className="text-muted-foreground mb-4">Our specialized eating disorder therapists.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Health At Every Size®</h3>
                  <p className="text-muted-foreground mb-4">Our weight-neutral philosophy.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/health-at-every-size">Learn More</Link>
                  </Button>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/conditions">
                    View All Eating Disorders
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar (30%) */}
          <aside className="space-y-6">
            {/* Expert Profile Card */}
            <Card className="p-6 sticky top-4">
              <div className="border-l-4 border-primary pl-4 mb-4">
                <h3 className="text-lg font-semibold text-primary">OSFED Treatment Specialist</h3>
              </div>
              
              <div className="mb-4">
                <img 
                  src={anneCuthbertPhoto} 
                  alt="Anne Cuthbert, MA, LPC, LMHC - OSFED Treatment Specialist" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg text-primary">Anne Cuthbert, MA, LPC, LMHC</h4>
                <p className="text-sm text-muted-foreground">Founder & Owner, Beyond Eating Recovery</p>
                <div className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full mt-2">
                  20+ Years Experience
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Anne provides comprehensive treatment for all OSFED presentations, recognizing that diagnostic labels don't determine severity or need for care. Whether you have atypical anorexia, purging disorder, night eating syndrome, or another OSFED presentation, Anne creates individualized treatment plans that address your unique symptoms, underlying factors, and recovery goals.
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-primary">Specialties:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    OSFED (All Presentations)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Atypical Anorexia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Purging Disorder
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Weight-Neutral Care
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Trauma-Informed Treatment
                  </li>
                </ul>
              </div>

              <Button asChild className="w-full">
                <Link to="/contact">Schedule with Anne</Link>
              </Button>
            </Card>

            {/* Book CTA Card */}
            <Card className="p-6 bg-orange-50 dark:bg-orange-900/10">
              <img 
                src={bookCover} 
                alt="If Your Hunger Could Talk book cover by Anne Cuthbert" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <h3 className="text-xl font-bold text-primary mb-2">Your Struggle Is Valid</h3>
              <p className="text-lg font-semibold text-primary mb-3">Free Chapter: You Don't Need to Be 'Sick Enough'</p>
              
              <p className="text-sm text-muted-foreground mb-4">
                Anne's book addresses the shame of not fitting perfectly into eating disorder categories. Download a free chapter that validates your experience and offers hope for recovery.
              </p>

              <div className="space-y-2">
                <Button asChild className="w-full">
                  <a href="#download">Download Free Chapter</a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    View on Amazon
                  </a>
                </Button>
              </div>
            </Card>

            {/* Schedule Consultation Card */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-6 w-6" />
                <h3 className="text-xl font-bold">OSFED Deserves Treatment</h3>
              </div>
              
              
              
              <p className="text-sm mb-6 opacity-90">
                You don't need to meet full criteria for anorexia, bulimia, or binge eating disorder to deserve help. OSFED is a serious eating disorder, and we're here to support your recovery.
              </p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:360-726-4141" className="hover:underline">360-726-4141</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Locations</p>
                    <p>Portland, OR & Vancouver, WA</p>
                    <p className="text-xs opacity-75">(Teletherapy Available)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p>Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="secondary" className="w-full">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>

              <p className="text-xs text-center mt-4 opacity-75">
                We accept insurance and offer self-pay options.
              </p>
            </Card>

            {/* Crisis Resources Card */}
            <Card className="p-6 bg-muted">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <h3 className="text-lg font-bold text-primary">Need Immediate Support?</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">988 Suicide & Crisis Lifeline</p>
                  <p className="text-muted-foreground">Call or text: 988</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Crisis Text Line</p>
                  <p className="text-muted-foreground">Text "HELLO" to 741741</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">NEDA Helpline</p>
                  <p className="text-muted-foreground">Call: 1-800-931-2237</p>
                  <p className="text-muted-foreground">Mon-Thu: 9am-9pm ET</p>
                  <p className="text-muted-foreground">Fri: 9am-5pm ET</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 italic">
                If you're experiencing a medical or mental health emergency, please call 911 or go to your nearest emergency room.
              </p>
            </Card>
          </aside>
        </div>
      </main>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default OSFED;
