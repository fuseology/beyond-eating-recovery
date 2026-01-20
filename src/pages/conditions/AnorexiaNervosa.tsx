import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Phone, Mail, MapPin, AlertCircle, ExternalLink } from "lucide-react";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";
import { Helmet } from "react-helmet";

const AnorexiaNervosa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Anorexia Nervosa Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta name="description" content="Compassionate, evidence-based anorexia nervosa treatment. Address root causes and support lasting healing in Portland & Vancouver. Recovery is possible." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/conditions/anorexia-nervosa" />
        <meta property="og:title" content="Anorexia Nervosa Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta property="og:description" content="Compassionate, evidence-based anorexia nervosa treatment. Address root causes and support lasting healing. Recovery is possible." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/conditions/anorexia-nervosa" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anorexia Nervosa Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta name="twitter:description" content="Compassionate, evidence-based anorexia nervosa treatment. Address root causes and support lasting healing. Recovery is possible." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
      </Helmet>
      <BreadcrumbSchema />
      <Header />
      <Breadcrumbs />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          
          {/* Main Content Area */}
          <main className="space-y-12">
            
            {/* Hero Section */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Anorexia Nervosa</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Understanding, Recognizing, and Treating Anorexia</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Anorexia nervosa is a serious eating disorder characterized by severe food restriction, intense fear of weight gain, and distorted body image. If you or someone you love is struggling with anorexia, please know: recovery is possible, you are not alone, and help is available. At Beyond Eating Recovery, we provide compassionate, evidence-based treatment that addresses the root causes of anorexia and supports lasting healing.
              </p>
            </section>

            {/* What Is Anorexia Nervosa */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">What Is Anorexia Nervosa?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Anorexia nervosa is a complex mental health condition that involves severely restricting food intake due to an intense fear of gaining weight and a distorted perception of one's body size or shape. People with anorexia often see themselves as larger than they actually are and may go to extreme lengths to prevent weight gain—even when already at a dangerously low weight.
                </p>

                <div className="bg-muted/30 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Anorexia is NOT:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>A choice or a phase</li>
                      <li>About vanity or wanting attention</li>
                      <li>Simply 'dieting gone too far'</li>
                      <li>Something you can just 'snap out of' with willpower</li>
                      <li>Only affecting young, white, thin females (it affects all genders, ages, races, and body types)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Anorexia IS:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>A serious, life-threatening mental illness</li>
                      <li>Rooted in psychological, biological, and environmental factors</li>
                      <li>Often a way of coping with difficult emotions, trauma, or feeling out of control</li>
                      <li>Treatable with appropriate support and intervention</li>
                      <li>Something that requires professional help to overcome</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Key Diagnostic Features:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Restriction of energy intake leading to significantly low body weight for age, sex, and health</li>
                    <li>Intense fear of weight gain or persistent behavior that interferes with weight gain</li>
                    <li>Distorted body image or undue influence of weight/shape on self-evaluation, or denial of the seriousness of low body weight</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Types of Anorexia:</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Restricting Type:</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Primary method is severe food restriction</li>
                        <li>May also include excessive exercise</li>
                        <li>No regular binge eating or purging behaviors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Binge-Eating/Purging Type:</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Includes episodes of binge eating and/or purging behaviors</li>
                        <li>Purging may include self-induced vomiting, misuse of laxatives, diuretics, or enemas</li>
                        <li>Still characterized by overall severe restriction</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Signs and Symptoms */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Signs and Symptoms of Anorexia Nervosa</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Anorexia affects the body, mind, emotions, and behaviors. Recognizing the signs early can lead to earlier intervention and better outcomes.
              </p>

              <div className="space-y-6">
                {/* Physical Signs */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Physical Signs and Symptoms</h3>
                    <p className="text-muted-foreground mb-4">The physical effects of anorexia can be severe and life-threatening.</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Dramatic weight loss or failure to gain weight",
                        "Extreme thinness (though anorexia can occur at any weight)",
                        "Fatigue, weakness, and dizziness",
                        "Feeling cold all the time",
                        "Development of fine body hair (lanugo)",
                        "Thinning hair on head or hair loss",
                        "Dry, yellowish skin",
                        "Irregular or absent menstrual periods",
                        "Constipation and abdominal pain",
                        "Low blood pressure and slowed heart rate",
                        "Dehydration",
                        "Swelling of arms and legs (edema)",
                        "Brittle nails",
                        "Difficulty concentrating or 'brain fog'",
                        "Fainting or lightheadedness",
                        "Insomnia or difficulty sleeping"
                      ].map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Behavioral Signs */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Behavioral Warning Signs</h3>
                    <p className="text-muted-foreground mb-4">Changes in behavior around food, exercise, and daily routines can indicate anorexia.</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Severe restriction of food intake",
                        "Rigid food rules (only 'safe' foods)",
                        "Obsessive calorie counting",
                        "Refusing to eat or making excuses",
                        "Cutting food into tiny pieces",
                        "Excessive, compulsive exercise",
                        "Avoiding social situations involving food",
                        "Frequent weighing or body checking",
                        "Wearing baggy, layered clothing",
                        "Cooking for others but not eating",
                        "Using diet pills, laxatives, or diuretics",
                        "Withdrawing from friends and activities"
                      ].map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Emotional/Psychological Signs */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Emotional and Psychological Symptoms</h3>
                    <p className="text-muted-foreground mb-4">Anorexia profoundly affects mental and emotional well-being.</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Intense fear of weight gain",
                        "Distorted body image",
                        "Preoccupation with food, calories, weight",
                        "Denial of hunger or severity of low weight",
                        "Perfectionism and extremely high standards",
                        "Need for control",
                        "Black-and-white thinking",
                        "Depression and anxiety",
                        "Irritability and mood swings",
                        "Low self-esteem and feelings of worthlessness",
                        "Social withdrawal and isolation",
                        "Difficulty expressing emotions"
                      ].map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Causes and Risk Factors */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">What Causes Anorexia Nervosa?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Anorexia nervosa doesn't have a single cause. It develops through a complex interaction of genetic, biological, psychological, and environmental factors. Understanding these factors helps reduce shame and blame—anorexia is NOT your fault or a choice you made.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Biological and Genetic Factors</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground">Genetics:</h4>
                        <ul className="list-disc pl-6 space-y-1 mt-1">
                          <li>Anorexia tends to run in families</li>
                          <li>If a close family member has an eating disorder, your risk increases</li>
                          <li>Twin studies show strong genetic component</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Brain Chemistry:</h4>
                        <ul className="list-disc pl-6 space-y-1 mt-1">
                          <li>Differences in neurotransmitters (serotonin, dopamine) may play a role</li>
                          <li>Brain structure and function differences have been observed</li>
                          <li>Malnutrition itself changes brain chemistry, perpetuating the disorder</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Temperament and Personality:</h4>
                        <ul className="list-disc pl-6 space-y-1 mt-1">
                          <li>Perfectionism and high achievement orientation</li>
                          <li>Anxiety-prone temperament</li>
                          <li>Obsessive-compulsive traits</li>
                          <li>Difficulty with flexibility</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Psychological Factors</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Using food restriction to cope with difficult emotions</li>
                      <li>Needing to control something when life feels out of control</li>
                      <li>Trauma history (abuse, bullying, loss, adverse childhood experiences)</li>
                      <li>Low self-esteem and feeling inadequate</li>
                      <li>Co-occurring mental health conditions (depression, anxiety, OCD, PTSD)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Environmental and Cultural Factors</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Diet culture and thin ideal promoted in media</li>
                      <li>Weight stigma and discrimination</li>
                      <li>Dieting (one of the strongest predictors of eating disorder development)</li>
                      <li>Social media and comparison culture</li>
                      <li>Activities emphasizing thinness (dance, gymnastics, running, modeling)</li>
                      <li>Family dynamics and high achievement expectations</li>
                      <li>Major life transitions and stress</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Health Consequences */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Health Consequences of Anorexia Nervosa</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Anorexia nervosa has the highest mortality rate of any mental illness. The physical effects of starvation are serious and can be life-threatening. However, with appropriate treatment, these effects can often be reversed or improved.
              </p>

              <Card className="bg-red-50 border-red-200 mb-6">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 mb-2">Seek Immediate Medical Attention If:</h3>
                      <ul className="list-disc pl-6 space-y-1 text-red-800">
                        <li>Heart rate or blood pressure is dangerously low</li>
                        <li>Severe electrolyte imbalances</li>
                        <li>Fainting or dizziness</li>
                        <li>Extreme weakness</li>
                        <li>Chest pain or difficulty breathing</li>
                        <li>Suicidal thoughts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Cardiovascular (Heart)",
                    effects: [
                      "Slow heart rate (bradycardia)",
                      "Low blood pressure",
                      "Heart arrhythmias (can be fatal)",
                      "Weakened heart muscle",
                      "Increased risk of heart failure"
                    ]
                  },
                  {
                    title: "Skeletal (Bones)",
                    effects: [
                      "Osteoporosis (loss of bone density)",
                      "Osteopenia (low bone mass)",
                      "Increased fracture risk",
                      "Permanent bone damage if occurs during adolescence"
                    ]
                  },
                  {
                    title: "Endocrine (Hormones)",
                    effects: [
                      "Loss of menstrual periods",
                      "Low testosterone (in males)",
                      "Decreased thyroid function",
                      "Growth delays in adolescents"
                    ]
                  },
                  {
                    title: "Neurological (Brain)",
                    effects: [
                      "Brain shrinkage",
                      "Difficulty concentrating and memory problems",
                      "Peripheral neuropathy",
                      "Many effects reversible with nutrition"
                    ]
                  },
                  {
                    title: "Gastrointestinal",
                    effects: [
                      "Severe constipation",
                      "Stomach pain and bloating",
                      "Delayed gastric emptying",
                      "Refeeding syndrome risk"
                    ]
                  },
                  {
                    title: "Blood",
                    effects: [
                      "Anemia (low red blood cells)",
                      "Leukopenia (weakened immune system)",
                      "Thrombocytopenia (increased bleeding risk)"
                    ]
                  }
                ].map((system, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{system.title}</h3>
                      <ul className="space-y-2">
                        {system.effects.map((effect, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span>{effect}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-muted-foreground mt-6 font-semibold">
                The good news: Many of these effects are reversible with proper nutrition restoration and treatment. The earlier treatment begins, the better the outcomes.
              </p>
            </section>

            {/* Treatment */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Treatment for Anorexia Nervosa</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Recovery from anorexia nervosa is possible. Treatment typically requires a multidisciplinary approach addressing physical, psychological, and nutritional aspects of the disorder. The earlier treatment begins, the better the prognosis.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">The Treatment Team</h3>
                    <p className="text-muted-foreground mb-4">Effective treatment for anorexia usually involves multiple professionals working together:</p>
                    <div className="space-y-4">
                      {[
                        {
                          role: "Therapist (Psychologist, LCSW, LPC, LMFT)",
                          duties: "Individual therapy to address psychological roots, process emotions and trauma, develop healthy coping skills, body image work"
                        },
                        {
                          role: "Dietitian/Nutritionist (RD/RDN)",
                          duties: "Nutrition counseling and meal planning, weight restoration support, education about nutrition and metabolism, Intuitive Eating principles"
                        },
                        {
                          role: "Physician/Psychiatrist",
                          duties: "Medical monitoring and management, medication if needed, monitoring vital signs and labs, coordination with treatment team"
                        }
                      ].map((member, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-foreground">{member.role}</h4>
                          <p className="text-muted-foreground text-sm mt-1">{member.duties}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">At Beyond Eating Recovery, we provide:</p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Individual therapy with eating disorder specialists</li>
                        <li>Registered Dietitian services</li>
                        <li>Coordination with your medical providers</li>
                        <li>Integrated, collaborative care</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Levels of Care</h3>
                    <p className="text-muted-foreground mb-4">Treatment intensity depends on medical stability, symptom severity, and support needs.</p>
                    <div className="space-y-3">
                      {[
                        {
                          level: "Outpatient Treatment",
                          description: "Regular therapy and dietitian appointments (1-2x/week). You live at home and maintain daily activities.",
                          bestFor: "Medically stable clients, those stepping down from higher care"
                        },
                        {
                          level: "Intensive Outpatient (IOP)",
                          description: "2-3 hours/day, 3-5 days/week. Group therapy, meal support, skills training.",
                          bestFor: "Need more support than weekly therapy but medically stable"
                        },
                        {
                          level: "Partial Hospitalization (PHP)",
                          description: "5-8 hours/day, 5-7 days/week. Comprehensive programming including supervised meals.",
                          bestFor: "Significant symptoms but can sleep at home"
                        },
                        {
                          level: "Residential Treatment",
                          description: "24/7 care in specialized facility. Live at facility (weeks to months).",
                          bestFor: "Need round-the-clock support"
                        },
                        {
                          level: "Inpatient Hospitalization",
                          description: "Medical hospital setting. 24/7 medical and psychiatric care.",
                          bestFor: "Medical instability, severe malnutrition, suicidal risk"
                        }
                      ].map((care, idx) => (
                        <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                          <h4 className="font-semibold text-foreground">{care.level}</h4>
                          <p className="text-muted-foreground text-sm mt-1">{care.description}</p>
                          <p className="text-sm text-primary mt-1"><strong>Best for:</strong> {care.bestFor}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Therapeutic Approaches</h3>
                    <p className="text-muted-foreground mb-4">Evidence-based therapies for anorexia nervosa include:</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Cognitive Behavioral Therapy (CBT)",
                        "Family-Based Treatment (FBT)",
                        "Acceptance and Commitment Therapy (ACT)",
                        "Dialectical Behavior Therapy (DBT)",
                        "Psychodynamic Therapy",
                        "Nutritional Rehabilitation"
                      ].map((therapy, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{therapy}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">At Beyond Eating Recovery, we use:</p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Integrated approach combining multiple modalities</li>
                        <li>Health At Every Size® (HAES®) principles</li>
                        <li>Trauma-informed care</li>
                        <li>Weight-neutral, non-diet approach</li>
                        <li>Customized to your needs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Recovery and Hope */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Recovery Is Possible</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg font-semibold text-foreground">
                  If you're struggling with anorexia nervosa, please hear this: Full recovery is absolutely possible.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">What research shows:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With appropriate treatment, many people achieve full recovery</li>
                      <li>Early intervention improves outcomes</li>
                      <li>Even those who have struggled for years can recover</li>
                      <li>Recovery rates improve when treatment addresses root causes, not just weight</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">What recovery looks like:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Freedom from constant thoughts about food, weight, and body</li>
                      <li>Eating without fear or guilt</li>
                      <li>Engaging fully in life—relationships, activities, passions</li>
                      <li>Self-worth not tied to appearance</li>
                      <li>Healthy relationship with your body</li>
                      <li>Using food as nourishment, not as control or coping</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg font-semibold text-foreground">
                  At Beyond Eating Recovery, we believe in your ability to recover fully. We provide comprehensive, compassionate care that addresses the whole person, not just symptoms. We're committed to supporting you through the entire journey.
                </p>

                <p className="text-xl font-semibold text-primary">
                  You don't have to suffer alone. Recovery is waiting for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link to="/contact">Start Your Recovery Journey Today</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:360-726-4141">Call 360-726-4141</a>
                  </Button>
                </div>
              </div>
            </section>

            {/* When to Seek Help */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">When to Seek Help</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Don't wait until things get worse. Early intervention leads to better outcomes.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Seek help if you or someone you love:</h3>
                    <ul className="space-y-2">
                      {[
                        "Is severely restricting food intake",
                        "Has lost significant weight or refuses to maintain minimum healthy weight",
                        "Expresses intense fear of weight gain",
                        "Shows distorted body image",
                        "Exercises excessively despite exhaustion or injury",
                        "Avoids social situations involving food",
                        "Shows signs of malnutrition",
                        "Is preoccupied with food, calories, and weight",
                        "Denies hunger or the seriousness of low weight"
                      ].map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-accent mt-1">•</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-3">Seek immediate medical attention if:</h3>
                    <ul className="space-y-2">
                      {[
                        "Heart rate is very slow (<50 bpm) or irregular",
                        "Blood pressure is very low",
                        "Severe dizziness or fainting",
                        "Extreme weakness",
                        "Chest pain",
                        "Temperature dysregulation (can't stay warm)",
                        "Suicidal thoughts or behaviors"
                      ].map((emergency, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-red-800 text-sm">
                          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                          <span>{emergency}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-6 bg-muted/30 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">You don't have to wait until you're "sick enough":</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>If you're questioning whether you have a problem, that's often a sign to seek help</li>
                  <li>You don't need to be at a dangerously low weight to deserve treatment</li>
                  <li>Early intervention prevents progression and serious health consequences</li>
                </ul>
              </div>
            </section>

            {/* Supporting a Loved One */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">How to Support Someone with Anorexia</h2>
              <p className="text-lg text-muted-foreground mb-6">
                If someone you care about is struggling with anorexia, your support matters—but you can't force recovery. Here's how to help:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Do:</h3>
                    <ul className="space-y-2">
                      {[
                        "Express concern without judgment",
                        "Listen without trying to fix",
                        "Encourage professional help",
                        "Be patient—recovery takes time",
                        "Educate yourself about anorexia",
                        "Take care of yourself",
                        "Avoid commenting on appearance",
                        "Model healthy relationship with food",
                        "Respect boundaries while staying supportive"
                      ].map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Don't:</h3>
                    <ul className="space-y-2">
                      {[
                        "Comment on their weight or appearance",
                        "Force them to eat",
                        "Make mealtime a battleground",
                        "Monitor or police their eating (unless part of treatment team)",
                        "Blame yourself",
                        "Enable the eating disorder",
                        "Give up if they refuse help initially"
                      ].map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-red-600 mt-1">✗</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-6 bg-primary/5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">For parents of adolescents with anorexia:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Consider Family-Based Treatment (FBT)</li>
                  <li>Work closely with treatment team</li>
                  <li>You play a crucial role in recovery</li>
                  <li>Seek your own support (therapist, support groups)</li>
                </ul>
              </div>
            </section>

            {/* Related Resources */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Learn More About Eating Disorders</h2>
              <p className="text-muted-foreground mb-6">Explore more about eating disorders and related concerns:</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "Bulimia Nervosa", link: "/conditions/bulimia-nervosa" },
                  { name: "Binge Eating Disorder", link: "/conditions/binge-eating-disorder" },
                  { name: "ARFID", link: "/conditions/arfid" },
                  { name: "Orthorexia", link: "/conditions/orthorexia" },
                  { name: "Body Dysmorphia", link: "/conditions/body-dysmorphia" },
                  { name: "Disordered Eating", link: "/conditions/disordered-eating" },
                  { name: "Atypical Anorexia", link: "/conditions/atypical-anorexia" },
                  { name: "Eating Disorders in Men", link: "/conditions/eating-disorders-men" },
                  { name: "View All Conditions", link: "/conditions" }
                ].map((resource, idx) => (
                  <Link 
                    key={idx} 
                    to={resource.link}
                    className="p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all"
                  >
                    <p className="font-semibold text-foreground">{resource.name}</p>
                    <p className="text-sm text-accent mt-1">Learn more →</p>
                  </Link>
                ))}
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            
            {/* Anne Cuthbert Expert Profile */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Meet Our Expert</h3>
                <div className="flex flex-col items-center text-center mb-4">
                  <img 
                    src={anneCuthbertPhoto} 
                    alt="Anne Cuthbert, MA, LPC, LMHC" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-semibold text-foreground">Anne Cuthbert, MA, LPC, LMHC</h4>
                  <p className="text-sm text-muted-foreground">Owner & Founder</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  With over 20 years of experience specializing in eating disorders, Anne Cuthbert is a leading expert in treating anorexia, bulimia, binge eating disorder, and related concerns using Health At Every Size® and Intuitive Eating approaches.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="font-semibold text-foreground">Credentials:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Licensed Professional Counselor (OR)</li>
                    <li>Licensed Mental Health Counselor (WA)</li>
                    <li>Master's Degree in Counseling Psychology</li>
                    <li>CREDN Board Member</li>
                    <li>ASDAH Member</li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/about/anne-cuthbert">Learn More About Anne</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Book CTA */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Read Anne's Book</h3>
                <div className="flex justify-center mb-4">
                  <img 
                    src={bookCover} 
                    alt="If Your Hunger Could Talk Book Cover" 
                    className="w-40 h-auto shadow-lg rounded"
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-2">If Your Hunger Could Talk</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Real Steps to Help You Find Freedom from Food and Weight Obsession
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover the 6-step process Anne uses with clients to end the restrict-binge cycle, trust themselves around food, accept their bodies, and live free from food obsession.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" target="_blank" rel="noopener noreferrer">
                    Get the Book on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Schedule Consultation CTA */}
            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Ready to Start Your Recovery?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You don't have to struggle alone. Our compassionate team specializes in treating anorexia nervosa using evidence-based, weight-neutral approaches.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="font-semibold text-foreground">We offer:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Individual therapy</li>
                    <li>Dietitian services</li>
                    <li>Group therapy</li>
                    <li>Teletherapy options</li>
                    <li>Insurance accepted</li>
                  </ul>
                </div>
                <p className="text-sm font-semibold text-foreground mb-4">Take the first step today.</p>
                <Button asChild size="lg" className="w-full mb-3 bg-accent hover:bg-accent/90">
                  <Link to="/contact">Schedule a Free Consultation</Link>
                </Button>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:360-726-4141" className="hover:text-primary">Call: 360-726-4141</a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Portland, OR & Vancouver, WA</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>Monday–Friday: 9am–5pm</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Crisis Resources */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  In Crisis?
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-red-900">988 - Suicide & Crisis Lifeline</p>
                    <p className="text-red-800">24/7 support. Call or text 988</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-900">911 or nearest ER</p>
                    <p className="text-red-800">For medical emergencies</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-900">NEDA Helpline</p>
                    <p className="text-red-800">1-800-931-2237</p>
                    <p className="text-red-800 text-xs">Mon-Thu 11am-9pm ET</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </aside>

        </div>
      </div>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default AnorexiaNervosa;