import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock, ChevronRight, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const BulimiaNervosa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Bulimia Nervosa Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta name="description" content="Expert treatment for bulimia nervosa in Portland & Vancouver. Break the binge-purge cycle with compassionate, evidence-based care that addresses root causes." />
        <meta property="og:title" content="Bulimia Nervosa Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta property="og:description" content="Expert treatment for bulimia nervosa in Portland & Vancouver. Break the binge-purge cycle with compassionate, evidence-based care that addresses root causes." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/conditions/bulimia-nervosa" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/assets/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bulimia Nervosa Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta name="twitter:description" content="Expert treatment for bulimia nervosa in Portland & Vancouver. Break the binge-purge cycle with compassionate, evidence-based care that addresses root causes." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/assets/hero-background.jpg" />
      </Helmet>
      <BreadcrumbSchema />
      <Header />
      {/* Breadcrumb Navigation */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/conditions" className="hover:text-primary transition-colors">Eating Disorders</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Bulimia Nervosa</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Main Content */}
          <main className="space-y-12">
            {/* Hero Section */}
            <section className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Bulimia Nervosa
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
                Understanding, Recognizing, and Treating Bulimia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bulimia nervosa is a serious eating disorder characterized by a cycle of binge eating followed by compensatory behaviors such as purging, fasting, or excessive exercise. If you're trapped in the binge-purge cycle, struggling with feelings of shame and loss of control, please know: recovery is possible, you are not alone, and help is available. At Beyond Eating Recovery, we provide compassionate, evidence-based treatment that breaks the cycle and addresses the root causes of bulimia.
              </p>
            </section>

            {/* What Is Bulimia Nervosa */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">What Is Bulimia Nervosa?</h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Bulimia nervosa is a complex mental health condition involving recurrent episodes of binge eating followed by compensatory behaviors intended to prevent weight gain. People with bulimia often feel trapped in a painful cycle of binging and purging, accompanied by intense shame, secrecy, and feelings of being out of control.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Binge-Purge Cycle:</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground">Restriction or dieting</strong> → Creates deprivation and intense hunger</li>
                    <li><strong className="text-foreground">Binge eating</strong> → Eating large amounts of food, often rapidly and in secret, with feelings of loss of control</li>
                    <li><strong className="text-foreground">Overwhelming guilt and fear</strong> → Panic about weight gain, intense self-criticism</li>
                    <li><strong className="text-foreground">Purging or compensation</strong> → Attempting to "undo" the binge through purging, fasting, or excessive exercise</li>
                    <li><strong className="text-foreground">Shame and resolve to restrict</strong> → Promising to "do better," leading back to restriction</li>
                    <li><strong className="text-foreground">The cycle repeats</strong></li>
                  </ol>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Bulimia is NOT:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• A choice or a phase</li>
                  <li>• About vanity or wanting attention</li>
                  <li>• Simply "dieting gone wrong"</li>
                  <li>• Something you can just stop doing with willpower</li>
                  <li>• Only affecting young, white, thin females (it affects all genders, ages, races, and body sizes)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Bulimia IS:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• A serious, potentially life-threatening mental illness</li>
                  <li>• Rooted in psychological, biological, and environmental factors</li>
                  <li>• Often a way of coping with difficult emotions, trauma, perfectionism, or feeling out of control</li>
                  <li>• Characterized by intense shame and secrecy</li>
                  <li>• Treatable with appropriate professional support</li>
                  <li>• Something that requires help to overcome—you cannot "just stop"</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Key diagnostic features include:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Recurrent binge eating episodes:</strong> Eating an objectively large amount of food in a discrete period with a sense of lack of control</li>
                  <li>• <strong className="text-foreground">Recurrent compensatory behaviors:</strong> To prevent weight gain (purging, fasting, excessive exercise)</li>
                  <li>• <strong className="text-foreground">Self-evaluation unduly influenced</strong> by body shape and weight</li>
                  <li>• Occurs at least once a week for three months (diagnostic criteria)</li>
                  <li>• Does not occur exclusively during anorexia nervosa episodes</li>
                </ul>

                <div className="bg-accent/20 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Important to know:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Bulimia can occur at ANY body size—you don't have to be underweight</li>
                    <li>• Many people with bulimia are at "normal" or higher weights</li>
                    <li>• The behaviors are often hidden; loved ones may not know</li>
                    <li>• Physical health consequences can be severe, even life-threatening</li>
                    <li>• Recovery requires addressing the emotional and psychological roots, not just stopping behaviors</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Signs and Symptoms */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Signs and Symptoms of Bulimia Nervosa</h2>
              <p className="text-lg text-muted-foreground">
                Bulimia often involves significant secrecy and shame, making it difficult to detect. Recognizing the signs early can lead to earlier intervention and better outcomes.
              </p>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="physical" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                    Physical Signs and Symptoms
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3 text-muted-foreground">
                    <p>The physical effects of bulimia can be serious and potentially life-threatening, particularly from frequent purging.</p>
                    <ul className="space-y-2">
                      <li>✓ Fluctuations in weight (though many people with bulimia maintain "normal" weight)</li>
                      <li>✓ Swollen cheeks or jaw area (parotid gland swelling from frequent vomiting)</li>
                      <li>✓ Calluses or scars on knuckles (Russell's sign—from inducing vomiting)</li>
                      <li>✓ Dental problems: Tooth decay, enamel erosion, cavities, sensitivity (from stomach acid)</li>
                      <li>✓ Broken blood vessels in eyes (from force of vomiting)</li>
                      <li>✓ Chronic sore throat or hoarseness</li>
                      <li>✓ Gastrointestinal problems: Acid reflux, heartburn, constipation, bloating</li>
                      <li>✓ Dehydration: Dry skin, dark urine, dizziness</li>
                      <li>✓ Electrolyte imbalances (can cause heart problems, muscle weakness, fatigue)</li>
                      <li>✓ Irregular heartbeat or heart palpitations</li>
                      <li>✓ Fatigue and weakness</li>
                      <li>✓ Dizziness or fainting</li>
                      <li>✓ Menstrual irregularities (though may be less common than in anorexia)</li>
                      <li>✓ Swelling in hands and feet (edema)</li>
                      <li>✓ Frequent trips to bathroom immediately after meals</li>
                      <li>✓ Evidence of vomiting (smell, stained clothing)</li>
                      <li>✓ Empty laxative or diuretic packages</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="behavioral" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                    Behavioral Warning Signs
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3 text-muted-foreground">
                    <p>Changes in behavior around food, eating, and daily routines can indicate bulimia. The secrecy and shame often make these behaviors hidden.</p>
                    <ul className="space-y-2">
                      <li>✓ Eating large amounts of food that disappear quickly</li>
                      <li>✓ Evidence of binge eating: Empty food wrappers or containers, missing food</li>
                      <li>✓ Going to the bathroom immediately after meals (to purge)</li>
                      <li>✓ Running water or fan in bathroom to hide sounds of purging</li>
                      <li>✓ Secretive eating patterns (eating alone, hiding food consumption)</li>
                      <li>✓ Avoiding eating in front of others</li>
                      <li>✓ Hoarding or stealing food</li>
                      <li>✓ Eating until uncomfortably or painfully full</li>
                      <li>✓ Frequent dieting or fasting (restriction between binges)</li>
                      <li>✓ Excessive or compulsive exercise (especially after eating)</li>
                      <li>✓ Use of laxatives, diuretics, or diet pills (often found in bathroom, hidden)</li>
                      <li>✓ Frequent weighing or body checking</li>
                      <li>✓ Withdrawing from social activities involving food</li>
                      <li>✓ Wearing baggy clothes to hide body or weight fluctuations</li>
                      <li>✓ Rigid food rules ("good" vs "bad" foods)</li>
                      <li>✓ Drinking excessive water or diet drinks to suppress appetite or compensate</li>
                      <li>✓ Evidence of vomiting in unexpected places</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="emotional" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                    Emotional and Psychological Symptoms
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3 text-muted-foreground">
                    <p>Bulimia profoundly affects mental and emotional well-being, often characterized by intense shame and secrecy.</p>
                    <ul className="space-y-2">
                      <li>✓ Intense preoccupation with body weight, shape, and appearance</li>
                      <li>✓ Extreme distress about body image (seeing self as larger than reality)</li>
                      <li>✓ Low self-esteem heavily tied to weight and appearance</li>
                      <li>✓ Feelings of lack of control around food during binges</li>
                      <li>✓ Intense shame, guilt, and self-disgust especially after binging/purging</li>
                      <li>✓ Secrecy and hiding eating disorder behaviors from others</li>
                      <li>✓ Perfectionism and extremely high standards for self</li>
                      <li>✓ All-or-nothing thinking ("I've ruined my diet, so I might as well keep eating")</li>
                      <li>✓ Depression and sadness</li>
                      <li>✓ Anxiety (especially around meals, social eating, body exposure)</li>
                      <li>✓ Irritability and mood swings</li>
                      <li>✓ Social withdrawal and isolation</li>
                      <li>✓ Fear of being "found out"</li>
                      <li>✓ Difficulty expressing emotions directly</li>
                      <li>✓ Using food to numb or cope with feelings</li>
                      <li>✓ Self-harm or suicidal thoughts (in severe cases)</li>
                      <li>✓ Feeling trapped in the binge-purge cycle</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cognitive" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                    Cognitive and Mental Patterns
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>✓ Obsessive thoughts about food, eating, calories, and weight</li>
                      <li>✓ Mental "keeping score" of calories consumed and purged</li>
                      <li>✓ Rigid rules about what, when, and how much to eat</li>
                      <li>✓ Distorted beliefs about food and body ("One bite will make me fat")</li>
                      <li>✓ Black-and-white thinking about food (good/bad, safe/unsafe)</li>
                      <li>✓ Rationalization of behaviors ("I'll just purge this once")</li>
                      <li>✓ Difficulty concentrating (from electrolyte imbalances, emotional distress)</li>
                      <li>✓ Preoccupation with appearance and how others perceive your body</li>
                      <li>✓ Negative self-talk and self-criticism</li>
                      <li>✓ Planning binges or thinking about next opportunity to binge</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Causes and Risk Factors */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">What Causes Bulimia Nervosa?</h2>
              <p className="text-lg text-muted-foreground">
                Bulimia nervosa doesn't have a single cause. It develops through a complex interaction of genetic, biological, psychological, and environmental factors. Understanding these factors helps reduce shame and blame—bulimia is NOT your fault or a choice you made.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Biological and Genetic Factors</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Genetics:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Bulimia tends to run in families</li>
                        <li>• If a close family member has an eating disorder, your risk increases significantly</li>
                        <li>• Twin studies suggest strong genetic component (estimated 50-60% heritability)</li>
                        <li>• Genetic factors may influence impulsivity, emotional regulation, and body image</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Brain Chemistry:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Imbalances in neurotransmitters (serotonin, dopamine) may play a role</li>
                        <li>• Serotonin regulates mood, impulse control, and appetite</li>
                        <li>• The binge-purge cycle itself can alter brain chemistry</li>
                        <li>• Research shows differences in brain regions related to impulse control and reward</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Temperament and Personality:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Impulsivity and difficulty with self-regulation</li>
                        <li>• Perfectionism and high achievement orientation</li>
                        <li>• Difficulty tolerating distress</li>
                        <li>• Emotional sensitivity</li>
                        <li>• Low self-esteem</li>
                        <li>• These traits have biological/genetic components</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Psychological Factors</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Emotional regulation difficulties:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Using binge eating to cope with difficult emotions (anxiety, sadness, anger, loneliness, boredom)</li>
                        <li>• Purging as a way to release emotional tension or punish oneself</li>
                        <li>• Difficulty identifying or expressing feelings directly</li>
                        <li>• Emotional avoidance—food becomes the focus instead of feelings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Control issues:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Feeling out of control in life; bulimia becomes an area of attempted control</li>
                        <li>• Paradoxically, the behaviors create more feelings of being out of control</li>
                        <li>• Need for control over body, weight, or food intake</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Trauma history:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Physical, sexual, or emotional abuse (particularly childhood sexual abuse is correlated)</li>
                        <li>• Bullying or teasing about weight, appearance, or eating</li>
                        <li>• Loss, grief, or abandonment experiences</li>
                        <li>• Adverse childhood experiences (ACEs)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Body image disturbance:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Distorted perception of body size or shape</li>
                        <li>• Extreme dissatisfaction with body</li>
                        <li>• Self-worth tied almost entirely to appearance</li>
                        <li>• Internalized thin ideal and weight stigma</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Co-occurring mental health conditions:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Depression (very common with bulimia)</li>
                        <li>• Anxiety disorders (generalized anxiety, social anxiety, panic disorder)</li>
                        <li>• Obsessive-compulsive disorder (OCD)</li>
                        <li>• Post-traumatic stress disorder (PTSD)</li>
                        <li>• Borderline personality disorder</li>
                        <li>• Substance use disorders</li>
                        <li>• Impulse control disorders</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Environmental and Cultural Factors</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Diet culture and thin ideal:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Societal obsession with thinness and weight loss</li>
                        <li>• Media images promoting unrealistic body standards</li>
                        <li>• Weight stigma and fat phobia</li>
                        <li>• 'Wellness' culture disguising disordered behaviors</li>
                        <li>• Social media and constant comparison</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Dieting:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Dieting is one of the strongest predictors of bulimia development</li>
                        <li>• Restriction triggers biological hunger and psychological deprivation</li>
                        <li>• This sets up the restrict-binge cycle</li>
                        <li>• "Breaking" diet rules leads to binge eating, then purging to compensate</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Social and peer pressures:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Comments about weight, appearance, or eating from family, peers, partners</li>
                        <li>• Teasing or bullying about body size</li>
                        <li>• Peer dieting and competitive thinness</li>
                        <li>• Dating and relationship pressures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Activities emphasizing weight or appearance:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Dance, cheerleading, gymnastics, figure skating, wrestling, running</li>
                        <li>• Modeling, acting, or performance careers</li>
                        <li>• Any sport with weigh-ins or aesthetic judging</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Family dynamics:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Family focus on weight, dieting, or appearance (though families do NOT cause eating disorders)</li>
                        <li>• High achievement expectations or perfectionism in family</li>
                        <li>• Family conflict, dysfunction, or enmeshment</li>
                        <li>• History of eating disorders in family</li>
                        <li>• Critical or controlling parenting styles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Life transitions and stressors:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Puberty and body changes</li>
                        <li>• Starting college, new job, or major life changes</li>
                        <li>• Relationship difficulties or breakups</li>
                        <li>• Academic or work pressure</li>
                        <li>• Traumatic events or losses</li>
                        <li>• Major life transitions where control feels lost</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Health Consequences */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Health Consequences of Bulimia Nervosa</h2>
              <p className="text-lg text-muted-foreground">
                Bulimia nervosa can cause serious, potentially life-threatening physical health complications—particularly from frequent purging. The effects of repeated vomiting, laxative abuse, and diuretic use can damage nearly every system in the body. However, with appropriate treatment and cessation of behaviors, many effects can be reversed or improved.
              </p>

              <Card className="border-destructive bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="h-5 w-5" />
                    Seek Immediate Medical Attention If:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Severe chest pain or irregular heartbeat</li>
                    <li>• Extreme weakness or muscle spasms (sign of electrolyte imbalance)</li>
                    <li>• Difficulty swallowing or severe throat pain</li>
                    <li>• Blood in vomit or stool</li>
                    <li>• Fainting or severe dizziness</li>
                    <li>• Swelling in legs, ankles, or face</li>
                    <li>• Suicidal thoughts</li>
                  </ul>
                  <p className="mt-4 font-semibold text-foreground">
                    Bulimia is a medical emergency when electrolytes are severely imbalanced or heart function is compromised.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Cardiovascular (Heart):</h3>
                  <ul className="space-y-2">
                    <li>• Electrolyte imbalances (low potassium, sodium, chloride)—CAN BE FATAL</li>
                    <li>• Cardiac arrhythmias (irregular heartbeat) from electrolyte imbalance—leading cause of death in bulimia</li>
                    <li>• Heart palpitations</li>
                    <li>• Low blood pressure</li>
                    <li>• Weakened heart muscle</li>
                    <li>• Increased risk of sudden cardiac arrest</li>
                    <li>• Ipecac poisoning (if used to induce vomiting)—causes permanent heart damage</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Gastrointestinal (Digestive System):</h3>
                  <ul className="space-y-2">
                    <li>• Esophageal damage: Tears, rupture (Boerhaave syndrome—life-threatening), inflammation</li>
                    <li>• Chronic acid reflux (GERD) and heartburn</li>
                    <li>• Stomach ulcers and gastritis</li>
                    <li>• Gastroparesis (delayed stomach emptying) from repeated purging</li>
                    <li>• Pancreatitis (inflammation of pancreas)—can be life-threatening</li>
                    <li>• Constipation (especially from laxative abuse)</li>
                    <li>• Laxative dependency (bowels can't function without them)</li>
                    <li>• Rectal prolapse (from laxative abuse)</li>
                    <li>• Intestinal damage from laxative abuse</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Dental and Oral Health:</h3>
                  <ul className="space-y-2">
                    <li>• Severe tooth decay and cavities (from stomach acid eroding enamel)</li>
                    <li>• Enamel erosion (teeth become translucent, sensitive)</li>
                    <li>• Gum disease and recession</li>
                    <li>• Tooth loss in severe cases</li>
                    <li>• Chronic bad breath</li>
                    <li>• Swollen salivary glands (parotid glands—causes chipmunk cheeks)</li>
                    <li>• Mouth sores and ulcers</li>
                    <li>• Increased tooth sensitivity to hot/cold</li>
                    <li>• Dry mouth</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Throat and Esophagus:</h3>
                  <ul className="space-y-2">
                    <li>• Chronic sore throat</li>
                    <li>• Hoarseness or voice changes</li>
                    <li>• Difficulty swallowing (dysphagia)</li>
                    <li>• Esophagitis (inflammation of esophagus)</li>
                    <li>• Barrett's esophagus (precancerous condition from chronic acid reflux)</li>
                    <li>• Esophageal rupture (rare but life-threatening)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Kidney and Bladder:</h3>
                  <ul className="space-y-2">
                    <li>• Kidney damage or failure (from dehydration and electrolyte imbalance)</li>
                    <li>• Kidney stones</li>
                    <li>• Urinary tract infections (from dehydration)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Endocrine (Hormones):</h3>
                  <ul className="space-y-2">
                    <li>• Menstrual irregularities or amenorrhea (less common than anorexia but can occur)</li>
                    <li>• Thyroid dysfunction</li>
                    <li>• Metabolic changes making weight regulation difficult</li>
                    <li>• Increased cortisol (stress hormone)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Psychological:</h3>
                  <ul className="space-y-2">
                    <li>• Severe depression</li>
                    <li>• Increased anxiety</li>
                    <li>• Obsessive-compulsive symptoms</li>
                    <li>• Suicidal ideation (bulimia has high suicide risk)</li>
                    <li>• Shame and social isolation</li>
                    <li>• Substance abuse (attempting to manage emotions or weight)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/20 p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">The good news:</p>
                <p className="text-muted-foreground">
                  Many of these effects are reversible when purging behaviors stop and nutrition is restored. The earlier treatment begins, the better the outcomes. Even serious complications can often improve significantly with proper care.
                </p>
              </div>
            </section>

            {/* Treatment */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Treatment for Bulimia Nervosa</h2>
              <p className="text-lg text-muted-foreground">
                Recovery from bulimia nervosa is possible. Treatment typically requires addressing both the behaviors (binging and purging) and the underlying psychological and emotional causes. The binge-purge cycle can be broken, and you can develop a healthy, peaceful relationship with food and your body.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">The Treatment Team</h3>
                  <p className="text-muted-foreground mb-4">
                    Effective treatment for bulimia usually involves multiple professionals working together:
                  </p>
                  <div className="grid gap-4">
                    {[
                      {
                        title: "Therapist (Psychologist, LCSW, LPC, LMFT)",
                        points: [
                          "Individual therapy to address psychological roots",
                          "Process difficult emotions without using food",
                          "Challenge distorted thoughts about food, weight, and body",
                          "Develop healthy coping skills",
                          "Address shame and self-worth",
                          "Body image work"
                        ]
                      },
                      {
                        title: "Dietitian/Nutritionist (RD/RDN)",
                        points: [
                          "Break the restrict-binge cycle through adequate, regular eating",
                          "Address food fears and rigid rules",
                          "Intuitive Eating principles",
                          "Education about nutrition and metabolism",
                          "Normalize eating patterns"
                        ]
                      },
                      {
                        title: "Physician/Psychiatrist",
                        points: [
                          "Medical monitoring (heart function, electrolytes, vital signs)",
                          "Assess and monitor physical complications",
                          "Medication management if needed",
                          "Coordinate with treatment team"
                        ]
                      }
                    ].map((role, idx) => (
                      <Card key={idx}>
                        <CardHeader>
                          <CardTitle className="text-lg">{role.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-1 text-muted-foreground">
                            {role.points.map((point, i) => (
                              <li key={i}>• {point}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Breaking the Binge-Purge Cycle</h3>
                  <p className="text-muted-foreground mb-4">
                    The key to stopping bulimia is breaking the cycle that perpetuates it. Here's how treatment addresses each part:
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "1. Stop Restriction and Dieting",
                        content: "Restriction fuels binging—when you deprive yourself, your body and brain rebel. Regular, adequate meals throughout the day prevent extreme hunger. No more \"forbidden\" foods—rigidity leads to loss of control."
                      },
                      {
                        title: "2. Address the Emotional Roots",
                        content: "Learn what feelings trigger binges (anxiety, sadness, anger, loneliness, boredom). Develop alternative coping skills for difficult emotions. Process trauma, perfectionism, control needs."
                      },
                      {
                        title: "3. Interrupt Urges to Purge",
                        content: "Develop skills to sit with discomfort after eating without purging. Challenge the belief that purging \"undoes\" eating (it doesn't—physically or psychologically). Understand that urges pass even if you don't act on them."
                      },
                      {
                        title: "4. Challenge Distorted Thoughts",
                        content: "Replace \"I've ruined everything\" with \"One eating episode doesn't define me.\" Challenge \"I have to purge or I'll gain weight\" with understanding that purging doesn't actually prevent weight gain and harms your body."
                      },
                      {
                        title: "5. Build Self-Compassion",
                        content: "Replace shame and self-criticism with understanding. Recognize you're coping the best way you know how. Recovery involves self-compassion, not self-punishment."
                      }
                    ].map((step, idx) => (
                      <div key={idx} className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Recovery and Hope */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Recovery Is Possible</h2>
              <div className="bg-accent/20 p-6 rounded-lg space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  If you're struggling with bulimia nervosa, please hear this: Full recovery is absolutely possible.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What recovery looks like:</h3>
                    <ul className="space-y-2">
                      <li>• Freedom from the binge-purge cycle</li>
                      <li>• Eating without fear or guilt</li>
                      <li>• Managing emotions without food</li>
                      <li>• Self-worth not tied to weight or appearance</li>
                      <li>• Peace with your body</li>
                      <li>• Engaging fully in life—relationships, activities, passions</li>
                      <li>• Mental and physical health restored</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What people who've recovered say:</h3>
                    <ul className="space-y-2 italic">
                      <li>"I didn't realize how much mental space bulimia took up until I was free from it"</li>
                      <li>"I can actually enjoy eating now without panic"</li>
                      <li>"I have energy and time for the things that really matter"</li>
                      <li>"My relationships are deeper because I'm not hiding anymore"</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-[#f49a39] hover:bg-[#e38929] text-white">
                  <Link to="/contact">Start Your Recovery Journey Today</Link>
                </Button>
              </div>
            </section>

            {/* When to Seek Help */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">When to Seek Help</h2>
              <p className="text-lg text-muted-foreground">
                Don't wait until things get worse. The secrecy and shame of bulimia often prevent people from seeking help for years. Early intervention leads to better outcomes.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Seek help if you or someone you love:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Engages in binge eating episodes</li>
                      <li>• Purges through vomiting, laxatives, diuretics, or excessive exercise</li>
                      <li>• Experiences the binge-purge cycle regularly</li>
                      <li>• Feels intense shame related to eating</li>
                      <li>• Hides eating behaviors from others</li>
                      <li>• Has physical signs of purging</li>
                      <li>• Feels trapped in the cycle</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">Seek immediate medical attention if:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Heart palpitations or irregular heartbeat</li>
                      <li>• Severe chest pain</li>
                      <li>• Extreme weakness or muscle spasms</li>
                      <li>• Fainting or severe dizziness</li>
                      <li>• Blood in vomit or stool</li>
                      <li>• Severe abdominal pain</li>
                      <li>• Suicidal thoughts or behaviors</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  You don't have to stay trapped in shame and secrecy. Breaking the silence is the first step toward freedom.
                </p>
                <Button size="lg" variant="outline" className="border-[#1a428a] text-[#1a428a] hover:bg-[#1a428a] hover:text-white">
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </section>

            {/* Related Resources */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Learn More About Eating Disorders</h2>
              <p className="text-muted-foreground mb-6">Explore more about eating disorders and related concerns:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Anorexia Nervosa", link: "/conditions/anorexia-nervosa", desc: "Severe food restriction and fear of weight gain" },
                  { name: "Binge Eating Disorder", link: "/conditions", desc: "Recurrent binge eating without purging" },
                  { name: "ARFID", link: "/conditions", desc: "Avoidant/Restrictive Food Intake Disorder" },
                  { name: "Orthorexia", link: "/conditions", desc: "Obsession with 'healthy' or 'clean' eating" },
                  { name: "Body Dysmorphia", link: "/conditions", desc: "Distorted perception of appearance" },
                  { name: "View All Conditions", link: "/conditions", desc: "Complete eating disorders directory" }
                ].map((resource, idx) => (
                  <Link key={idx} to={resource.link}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{resource.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Anne Cuthbert Profile */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Meet Our Expert</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={anneCuthbertPhoto} 
                  alt="Anne Cuthbert, MA, LPC, LMHC" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="text-center">
                  <h3 className="font-bold text-lg">Anne Cuthbert, MA, LPC, LMHC</h3>
                  <p className="text-sm text-muted-foreground">Owner & Founder</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  With over 20 years of experience specializing in eating disorders, Anne Cuthbert is a leading expert in treating bulimia, anorexia, binge eating disorder, and related concerns using Health At Every Size® and Intuitive Eating approaches.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Credentials:</p>
                  <ul className="space-y-1">
                    <li>• Licensed Professional Counselor (OR)</li>
                    <li>• Licensed Mental Health Counselor (WA)</li>
                    <li>• Master's Degree in Counseling Psychology</li>
                    <li>• CREDN Board Member</li>
                    <li>• ASDAH Member</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/about/anne-cuthbert">Learn More About Anne</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Book CTA */}
            <Card className="bg-accent/20">
              <CardHeader>
                <CardTitle className="text-xl">Read Anne's Book</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={bookCover} 
                  alt="If Your Hunger Could Talk book cover" 
                  className="w-full rounded-lg shadow-md"
                />
                <div>
                  <h4 className="font-bold mb-2">If Your Hunger Could Talk</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Discover the 6-step process Anne uses with clients to help them:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• End the restrict-binge cycle</li>
                    <li>• Trust themselves around food</li>
                    <li>• Accept their bodies</li>
                    <li>• Live free from food obsession</li>
                  </ul>
                </div>
                <Button className="w-full bg-[#f49a39] hover:bg-[#e38929]" asChild>
                  <a 
                    href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get the Book on Amazon
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Schedule Consultation */}
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Ready to Break Free from Bulimia?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  You don't have to stay trapped in the binge-purge cycle. Our compassionate team specializes in treating bulimia nervosa using evidence-based, weight-neutral approaches.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">We offer:</p>
                  <ul className="space-y-1">
                    <li>• Individual therapy</li>
                    <li>• Dietitian services</li>
                    <li>• Group therapy</li>
                    <li>• Teletherapy options</li>
                    <li>• Insurance accepted</li>
                  </ul>
                </div>
                <Button className="w-full bg-[#f49a39] hover:bg-[#e38929]" size="lg" asChild>
                  <Link to="/contact">Schedule a Free Consultation</Link>
                </Button>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:3607264141" className="hover:text-primary">360-726-4141</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Portland, OR & Vancouver, WA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Monday–Friday: 9am–5pm</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Crisis Resources */}
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-xl text-destructive flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  In Crisis?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">988 - Suicide & Crisis Lifeline</p>
                  <p className="text-muted-foreground">24/7 support - Call or text 988</p>
                </div>
                <div>
                  <p className="font-semibold">911 or nearest ER</p>
                  <p className="text-muted-foreground">For medical emergencies</p>
                </div>
                <div>
                  <p className="font-semibold">NEDA Helpline</p>
                  <p className="text-muted-foreground">1-800-931-2237<br />Mon-Thu 11am-9pm ET</p>
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

export default BulimiaNervosa;