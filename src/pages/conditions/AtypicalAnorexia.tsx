import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Calendar, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";
import { Helmet } from "react-helmet";

const AtypicalAnorexia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Atypical Anorexia Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta name="description" content="Weight-neutral, HAES-aligned therapy for atypical anorexia. Just as serious as typical anorexia. You deserve validation and compassionate care in Portland & Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/conditions/atypical-anorexia" />
        <meta property="og:title" content="Atypical Anorexia Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta property="og:description" content="Weight-neutral, HAES-aligned therapy for atypical anorexia. Just as serious as typical anorexia. You deserve validation and compassionate care." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/conditions/atypical-anorexia" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atypical Anorexia Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta name="twitter:description" content="Weight-neutral, HAES-aligned therapy for atypical anorexia. Just as serious as typical anorexia. You deserve validation and compassionate care." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
      </Helmet>
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Atypical Anorexia Nervosa Treatment in Portland & Vancouver
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Atypical anorexia nervosa is just as serious and medically dangerous as "typical" anorexia—but it often goes unrecognized because of weight bias. If you're experiencing all the psychological and behavioral symptoms of anorexia while being at a "normal" or higher weight, you deserve validation, compassionate care, and evidence-based treatment. At Beyond Eating Recovery, we provide weight-neutral, HAES®-aligned therapy for atypical anorexia throughout Oregon and Washington.
              </p>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - 70% */}
            <div className="lg:w-[70%]">
              
              {/* What is Atypical Anorexia */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What is Atypical Anorexia Nervosa?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    Atypical anorexia nervosa (sometimes called atypical AN or A-AN) is a serious eating disorder with all the clinical features of anorexia nervosa—except the person is not currently at a low body weight. According to the DSM-5, individuals with atypical anorexia meet the following criteria:
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li>Significant weight loss (often substantial)</li>
                    <li>Intense fear of weight gain or becoming fat</li>
                    <li>Body image distortion or undue influence of weight/shape on self-worth</li>
                    <li>Restrictive eating patterns</li>
                    <li>Current weight is within or above the "normal" range</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <p className="text-lg font-medium text-foreground">
                      <strong>Critical point:</strong> Despite being at a higher weight, individuals with atypical anorexia experience the same medical complications, psychological distress, and mortality risk as those with low-weight anorexia nervosa.
                    </p>
                  </div>

                  <p className="mb-4">
                    Atypical anorexia is currently classified under OSFED (Other Specified Feeding or Eating Disorder), but research increasingly shows it deserves recognition as equally severe.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Weight Bias in Diagnosis</h3>
                  <p className="mb-4">
                    Because of cultural assumptions that eating disorders only affect thin people, atypical anorexia is frequently missed or dismissed by healthcare providers. People with atypical anorexia often report being congratulated on weight loss even as they're experiencing dangerous symptoms.
                  </p>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <p className="text-foreground/90">
                      <strong>The myth of "not sick enough":</strong> Many people with atypical anorexia report feeling they're "not sick enough" for treatment. This belief is reinforced by weight-biased medical systems and cultural messages. The truth: eating disorders occur at all body sizes, and your suffering is valid regardless of your weight.
                    </p>
                  </div>
                </div>
              </section>

              {/* Signs and Symptoms */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Signs and Symptoms</h2>
                <div className="prose prose-lg max-w-none">
                  
                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Behavioral Signs</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Severe restriction of food intake (calories, food groups, meal skipping)</li>
                    <li>Rigid food rules and rituals</li>
                    <li>Avoiding eating in public or social situations</li>
                    <li>Intense fear of specific foods or food groups</li>
                    <li>Excessive exercise or compulsive movement</li>
                    <li>Frequent body checking (mirror, scale, measuring)</li>
                    <li>Wearing baggy clothes to hide body</li>
                    <li>Social withdrawal, especially around food</li>
                    <li>Reading nutrition labels obsessively</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Psychological Signs</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Intense fear of weight gain despite significant weight loss</li>
                    <li>Body image distortion or dissatisfaction</li>
                    <li>Self-worth heavily influenced by weight and shape</li>
                    <li>Preoccupation with food, calories, weight</li>
                    <li>Denial of hunger or claiming "not hungry"</li>
                    <li>Perfectionism and black-and-white thinking</li>
                    <li>Anxiety and depression</li>
                    <li>Difficulty concentrating (from malnutrition)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Physical Signs</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Significant weight loss from previous weight</li>
                    <li>Fatigue and weakness</li>
                    <li>Dizziness or fainting</li>
                    <li>Cold intolerance</li>
                    <li>Gastrointestinal problems (constipation, bloating)</li>
                    <li>Sleep disturbances</li>
                    <li>Thinning hair or hair loss</li>
                    <li>Brittle nails and dry skin</li>
                    <li>Irregular or absent menstrual periods</li>
                    <li>Low heart rate or blood pressure</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <p className="font-medium">
                      <strong>Important:</strong> Physical symptoms can be present even when someone appears to be at a "healthy" weight. Medical instability is determined by weight loss trajectory and eating behaviors—not current weight alone.
                    </p>
                  </div>
                </div>
              </section>

              {/* Why Atypical Anorexia is Overlooked */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Why Atypical Anorexia is Overlooked</h2>
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Weight Bias in Healthcare</h3>
                  <p className="mb-4">
                    The medical community has historically failed to recognize atypical anorexia because of pervasive weight stigma. Common scenarios include:
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li>Doctors congratulating patients on weight loss without asking how it occurred</li>
                    <li>Dismissing eating disorder symptoms because "you don't look anorexic"</li>
                    <li>Encouraging continued weight loss despite restrictive behaviors</li>
                    <li>Failing to screen for eating disorders in higher-weight patients</li>
                    <li>Assuming weight loss is always beneficial</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Research Findings</h3>
                  <p className="mb-4">
                    Studies show that individuals with atypical anorexia have:
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li>Identical psychological profiles to low-weight anorexia</li>
                    <li>Similar rates of medical complications (bradycardia, electrolyte imbalances, bone loss)</li>
                    <li>Comparable severity of body image disturbance</li>
                    <li>Equal or longer duration of illness before treatment</li>
                    <li>Often more weight loss in absolute pounds than low-weight patients</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <p className="text-foreground/90">
                      <strong>You don't need to "prove" you're sick enough:</strong> You don't need to lose more weight to qualify for treatment. Your current weight does NOT determine severity. If eating disorder thoughts and behaviors are impacting your life, you deserve help. Early intervention improves outcomes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Causes and Risk Factors */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Causes and Risk Factors</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Atypical anorexia develops from a complex interaction of biological, psychological, and sociocultural factors:
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Biological Factors</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Genetic predisposition to eating disorders</li>
                    <li>Brain chemistry differences (serotonin, dopamine)</li>
                    <li>Family history of eating disorders or mental health conditions</li>
                    <li>Temperament traits (perfectionism, anxiety, rigidity)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Psychological Factors</h3>
                  <ul className="space-y-2 mb-6">
                    <li>History of trauma or adverse experiences</li>
                    <li>Low self-esteem or negative self-concept</li>
                    <li>Difficulty regulating emotions</li>
                    <li>Anxiety or depression</li>
                    <li>Need for control in chaotic circumstances</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Sociocultural Factors</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Diet culture and "wellness" culture messaging</li>
                    <li>Weight stigma and anti-fat bias</li>
                    <li>Social media and appearance ideals</li>
                    <li>Comments about body size or eating</li>
                    <li>Involvement in weight-focused activities</li>
                    <li>Healthcare providers recommending weight loss</li>
                    <li>Cultural emphasis on thinness as success</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Triggering Events</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Initial intentional weight loss (dieting)</li>
                    <li>Life transitions or stress</li>
                    <li>Trauma or loss</li>
                    <li>Medical recommendations to lose weight</li>
                    <li>Puberty and body changes</li>
                    <li>Athletic or academic pressure</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <p className="font-medium">
                      <strong>Important:</strong> Atypical anorexia is NOT about vanity or choice. It's a serious mental illness requiring professional treatment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Medical and Health Consequences */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Medical and Health Consequences</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <p className="text-lg font-medium">
                      <strong>Critical fact:</strong> Research shows that medical complications of atypical anorexia are just as severe as those of low-weight anorexia nervosa. Current weight does not protect against health dangers.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Cardiovascular Complications</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Bradycardia (slow heart rate)</li>
                    <li>Orthostatic hypotension (dizziness upon standing)</li>
                    <li>Heart muscle weakening</li>
                    <li>Arrhythmias (irregular heartbeat)</li>
                    <li>Increased heart failure risk</li>
                    <li>Sudden cardiac death risk</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Gastrointestinal Issues</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Severe constipation</li>
                    <li>Gastroparesis (delayed stomach emptying)</li>
                    <li>Bloating and abdominal pain</li>
                    <li>Refeeding complications</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Bone Health</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Osteopenia and osteoporosis</li>
                    <li>Increased fracture risk</li>
                    <li>Bone loss that may be irreversible</li>
                    <li>Occurs even at "normal" weights</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Metabolic Disturbances</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Electrolyte imbalances (potassium, sodium, phosphorus)</li>
                    <li>Hypoglycemia (low blood sugar)</li>
                    <li>Dehydration</li>
                    <li>Metabolic adaptation</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Reproductive Health</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Menstrual irregularities or cessation</li>
                    <li>Fertility issues</li>
                    <li>Hormonal disruptions</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Neurological Effects</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Brain structure changes</li>
                    <li>Cognitive impairment</li>
                    <li>Difficulty concentrating</li>
                    <li>Depression and anxiety</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Other Complications</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Anemia</li>
                    <li>Immune system suppression</li>
                    <li>Kidney problems</li>
                    <li>Hair loss</li>
                    <li>Skin problems</li>
                    <li>Muscle wasting and weakness</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <p className="text-foreground/90">
                      <strong>Mortality risk:</strong> Studies show comparable mortality rates between atypical anorexia and low-weight anorexia, primarily from medical complications and suicide.
                    </p>
                  </div>
                </div>
              </section>

              {/* Diagnosis */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Diagnosis</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    Atypical anorexia nervosa is diagnosed when an individual meets all criteria for anorexia nervosa except current low weight.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Diagnostic Criteria</h3>
                  <p className="mb-4">According to DSM-5:</p>
                  <ul className="space-y-2 mb-6">
                    <li>All criteria for anorexia nervosa are met</li>
                    <li>Despite significant weight loss, the individual's weight is within or above the normal range</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Why "Atypical" is a Misnomer</h3>
                  <p className="mb-4">
                    The term "atypical" is misleading—this presentation may actually be more common than low-weight anorexia, particularly as people begin treatment earlier or start from higher weights.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Assessment Process</h3>
                  <p className="mb-4">A comprehensive evaluation includes:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Clinical interview about eating behaviors, thoughts, and history</li>
                    <li>Assessment of weight history and weight loss patterns</li>
                    <li>Psychological evaluation (body image, mood, anxiety)</li>
                    <li>Medical examination and vital signs</li>
                    <li>Laboratory tests (electrolytes, CBC, metabolic panel)</li>
                    <li>EKG to assess heart function</li>
                    <li>Bone density scan if indicated</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Challenges in Diagnosis</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Weight bias leading to missed diagnosis</li>
                    <li>Patients being praised for weight loss</li>
                    <li>Lack of awareness among healthcare providers</li>
                    <li>Patients themselves not recognizing symptoms as serious</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <p className="text-foreground/90">
                      <strong>Currently classified as OSFED:</strong> Atypical anorexia falls under "Other Specified Feeding or Eating Disorder" in the DSM-5, but many clinicians and researchers advocate for its recognition as a full eating disorder diagnosis.
                    </p>
                  </div>
                </div>
              </section>

              {/* Treatment Approach */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Treatment Approach at Beyond Eating Recovery</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-lg font-medium">
                    Our treatment for atypical anorexia is identical to treatment for anorexia nervosa because the psychological and medical severity is the same.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Anne's 6-Step Treatment Process</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">1. Stabilize Eating Patterns</h4>
                      <ul className="space-y-2">
                        <li>Medical stabilization and monitoring</li>
                        <li>Nutritional rehabilitation</li>
                        <li>Establishing regular eating (not based on weight goals)</li>
                        <li>Challenging restriction</li>
                        <li>No focus on weight change—focus on health markers</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">2. Challenge Food Rules and Diet Mentality</h4>
                      <ul className="space-y-2">
                        <li>Identifying rigid food rules</li>
                        <li>Gradual exposure to feared foods</li>
                        <li>Dismantling "good food/bad food" thinking</li>
                        <li>Exploring diet culture's role in illness development</li>
                        <li>Intuitive Eating principles</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">3. Explore Emotional Triggers</h4>
                      <ul className="space-y-2">
                        <li>Understanding what drives restriction</li>
                        <li>Identifying emotions behind behaviors</li>
                        <li>Developing alternative coping strategies</li>
                        <li>Processing difficult feelings without food restriction</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">4. Heal Body Image</h4>
                      <ul className="space-y-2">
                        <li>Challenging body image distortion</li>
                        <li>Body neutrality and respect practices</li>
                        <li>Addressing internalized weight stigma</li>
                        <li>Understanding weight set point and body diversity</li>
                        <li>Grief work around body changes</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">5. Address Underlying Trauma</h4>
                      <ul className="space-y-2">
                        <li>Trauma-informed care approach</li>
                        <li>Processing adverse experiences</li>
                        <li>Understanding eating disorder as survival mechanism</li>
                        <li>EMDR or other trauma therapies as appropriate</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-primary/90 mb-3">6. Build Sustainable Recovery</h4>
                      <ul className="space-y-2">
                        <li>Relapse prevention planning</li>
                        <li>Developing authentic identity beyond illness</li>
                        <li>Rebuilding relationships</li>
                        <li>Creating meaningful life beyond recovery</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Weight-Neutral Approach</h3>
                  <p className="mb-4">
                    We do NOT use weight restoration goals. Instead, we focus on:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>Normalizing eating patterns</li>
                    <li>Reducing eating disorder behaviors</li>
                    <li>Improving psychological well-being</li>
                    <li>Medical stability markers</li>
                    <li>Quality of life and functioning</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Multidisciplinary Care</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Individual therapy with eating disorder specialist</li>
                    <li>Dietitian support (Intuitive Eating, HAES® approach)</li>
                    <li>Medical monitoring as needed</li>
                    <li>Psychiatric consultation if medication indicated</li>
                    <li>Group therapy for connection and support</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Treatment Settings</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Outpatient therapy (individual and group)</li>
                    <li>Intensive outpatient (IOP) if needed</li>
                    <li>Higher levels of care coordination if indicated</li>
                  </ul>
                </div>
              </section>

              {/* Recovery */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Recovery and What to Expect</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-lg font-medium">
                    Recovery IS possible: With appropriate treatment, people with atypical anorexia can fully recover and build fulfilling lives free from eating disorder control.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Recovery Looks Like</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Freedom from food rules and restriction</li>
                    <li>Ability to eat flexibly in all situations</li>
                    <li>Reduced body image distress</li>
                    <li>Weight stabilization at your body's natural set point</li>
                    <li>Improved physical health markers</li>
                    <li>Better quality of life and relationships</li>
                    <li>Reconnection with values and interests</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Recovery Timeline</h3>
                  <ul className="space-y-3 mb-6">
                    <li><strong>Early recovery (months 1-6):</strong> Medical stabilization, eating pattern normalization, beginning psychological work</li>
                    <li><strong>Middle recovery (months 6-18):</strong> Deeper trauma work, challenging beliefs, identity development</li>
                    <li><strong>Late recovery (18+ months):</strong> Integration, relapse prevention, sustained behavior change</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Challenges Specific to Atypical Anorexia</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Lack of external validation (people may not "see" your illness)</li>
                    <li>Continued weight stigma from medical providers</li>
                    <li>Fear that recovery means unlimited weight gain</li>
                    <li>Grief around body changes</li>
                    <li>Navigating weight-biased world in larger body</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Helps</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Weight-neutral healthcare providers</li>
                    <li>HAES® and Intuitive Eating communities</li>
                    <li>Body liberation and fat acceptance resources</li>
                    <li>Therapy addressing weight stigma trauma</li>
                    <li>Support from others who understand</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <h4 className="font-semibold text-lg mb-2">Addressing the Fear:</h4>
                    <p className="text-foreground/90">
                      Many people with atypical anorexia fear that eating normally will lead to "uncontrolled" weight gain. The reality: Bodies have natural set points. With normalized eating and no restriction, your body will stabilize at its genetically determined weight—which is the healthiest weight for YOU.
                    </p>
                  </div>
                </div>
              </section>

              {/* When to Seek Help */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">When to Seek Help</h2>
                <div className="prose prose-lg max-w-none">
                  
                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Seek Immediate Medical Attention If:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Severe dizziness or fainting</li>
                    <li>Chest pain or irregular heartbeat</li>
                    <li>Extreme weakness</li>
                    <li>Suicidal thoughts or self-harm urges</li>
                    <li>Inability to keep down food or liquids</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Seek Eating Disorder Treatment If You:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Have lost significant weight through restriction</li>
                    <li>Experience intense fear of weight gain</li>
                    <li>Avoid foods or food groups</li>
                    <li>Feel your worth is determined by weight/shape</li>
                    <li>Exercise compulsively or excessively</li>
                    <li>Isolate socially due to food/body concerns</li>
                    <li>Notice physical symptoms (fatigue, hair loss, period changes)</li>
                    <li>Spend excessive time thinking about food and weight</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <h4 className="font-semibold text-lg mb-3">You Don't Need to "Prove" You're Sick Enough:</h4>
                    <ul className="space-y-2">
                      <li>✓ You don't need to lose more weight to qualify for treatment</li>
                      <li>✓ Your current weight does NOT determine severity</li>
                      <li>✓ If eating disorder thoughts and behaviors are impacting your life, you deserve help</li>
                      <li>✓ Early intervention improves outcomes</li>
                    </ul>
                  </div>

                  <div className="text-center my-8 p-6 bg-primary/5 rounded-lg">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Taking the First Step</h3>
                    <p className="mb-6">
                      Contact Beyond Eating Recovery at <a href="tel:360-726-4141" className="text-accent hover:underline font-semibold">360-726-4141</a> to schedule a consultation. We provide compassionate, weight-neutral care for atypical anorexia throughout Oregon and Washington via telehealth.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                      Schedule Free Consultation
                    </Button>
                  </div>
                </div>
              </section>

              {/* Supporting a Loved One */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Supporting a Loved One</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    If someone you care about has atypical anorexia:
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Do:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Take their struggles seriously regardless of their weight</li>
                    <li>Avoid commenting on their body or weight (even "positive" comments)</li>
                    <li>Express concern about behaviors, not appearance</li>
                    <li>Offer to help them find professional support</li>
                    <li>Learn about HAES® and weight-neutral approaches</li>
                    <li>Be patient—recovery takes time</li>
                    <li>Support them in challenging diet culture</li>
                    <li>Create food-neutral environments</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Don't:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>❌ Say "but you look healthy" or "you don't look anorexic"</li>
                    <li>❌ Compliment weight loss</li>
                    <li>❌ Comment on what they're eating</li>
                    <li>❌ Enable eating disorder behaviors</li>
                    <li>❌ Take their behaviors personally</li>
                    <li>❌ Try to force them to eat</li>
                    <li>❌ Make it about yourself</li>
                    <li>❌ Give unsolicited advice</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What to Say:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>"I've noticed you seem to be struggling. I'm here for you."</li>
                    <li>"I care about you and I'm worried about your health."</li>
                    <li>"Would you be open to talking with a therapist who specializes in eating disorders?"</li>
                    <li>"How can I best support you right now?"</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What NOT to Say:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>"You're not that thin, you're fine."</li>
                    <li>"At least you're not underweight."</li>
                    <li>"You look great, I wish I had your willpower."</li>
                    <li>"Just eat normally."</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <p className="text-foreground/90">
                      <strong>Take care of yourself:</strong> Supporting someone with an eating disorder is emotionally challenging. Consider seeking your own support through therapy or support groups for families.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Resources for Families</h3>
                  <ul className="space-y-2 mb-6">
                    <li>NEDA (National Eating Disorders Association): Support and education</li>
                    <li>F.E.A.S.T. (Families Empowered and Supporting Treatment of Eating Disorders)</li>
                    <li>Beyond Eating Recovery offers family support sessions</li>
                  </ul>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Anorexia Nervosa</h3>
                      <p className="text-muted-foreground mb-4">
                        Learn about anorexia nervosa and how it relates to atypical anorexia.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/conditions/anorexia-nervosa">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">OSFED</h3>
                      <p className="text-muted-foreground mb-4">
                        Atypical anorexia is diagnosed as OSFED. Learn more about this category.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/conditions/osfed">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Body Shame Counseling</h3>
                      <p className="text-muted-foreground mb-4">
                        Address weight stigma and body shame with our specialized counseling.
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
                    <h3 className="text-lg font-semibold text-primary">Atypical Anorexia Specialist</h3>
                  </div>
                  
                  <img 
                    src={anneCuthbertPhoto} 
                    alt="Anne Cuthbert, MA, LPC, LMHC - Atypical Anorexia Treatment Specialist"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <h4 className="text-xl font-bold text-primary mb-1">Anne Cuthbert, MA, LPC, LMHC</h4>
                  <p className="text-sm text-muted-foreground mb-3">Founder & Owner, Beyond Eating Recovery</p>
                  
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    20+ Years Experience
                  </div>
                  
                  <p className="text-sm mb-4">
                    Anne provides comprehensive treatment for atypical anorexia with deep understanding that eating disorders occur at all body sizes. She challenges weight bias and offers weight-neutral, HAES®-aligned care.
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Atypical Anorexia Treatment</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Weight-Neutral Care</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Challenging Weight Bias</span>
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
                  
                  <h3 className="text-lg font-semibold text-primary mb-2">Understanding Your Relationship with Food</h3>
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
                    <h3 className="text-lg font-semibold">Ready to Begin Recovery?</h3>
                  </div>
                  
                  
                  
                  <p className="text-sm mb-4 opacity-90">
                    We provide compassionate, weight-neutral treatment for atypical anorexia throughout Oregon and Washington.
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

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default AtypicalAnorexia;