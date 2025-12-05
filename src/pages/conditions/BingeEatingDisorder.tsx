import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock, ChevronRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const BingeEatingDisorder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Binge Eating Disorder Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta name="description" content="Compassionate, weight-neutral treatment for binge eating disorder (BED) in Portland & Vancouver. Evidence-based care addressing the emotional roots of binge eating." />
        <meta property="og:title" content="Binge Eating Disorder Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta property="og:description" content="Compassionate, weight-neutral treatment for binge eating disorder (BED) in Portland & Vancouver. Evidence-based care addressing the emotional roots of binge eating." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/conditions/binge-eating-disorder" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/assets/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Binge Eating Disorder Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta name="twitter:description" content="Compassionate, weight-neutral treatment for binge eating disorder (BED) in Portland & Vancouver. Evidence-based care addressing the emotional roots of binge eating." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/assets/hero-background.jpg" />
      </Helmet>
      <Header />
      {/* Breadcrumb Navigation */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/conditions" className="hover:text-primary transition-colors">Eating Disorders</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Binge Eating Disorder</span>
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
                Binge Eating Disorder Treatment in Portland & Vancouver
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Binge Eating Disorder (BED) is the most common eating disorder in the United States, yet it remains widely misunderstood. At Beyond Eating Recovery, we provide compassionate, weight-neutral treatment that addresses the emotional roots of binge eating—not just the behaviors. If you've been struggling with feelings of loss of control around food, shame after eating episodes, or the exhausting cycle of restriction and binge eating, you're not alone. Recovery is possible, and we're here to help you find peace with food and your body.
              </p>
            </section>

            {/* What Is BED */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Understanding Binge Eating Disorder</h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Binge Eating Disorder (BED) is characterized by recurrent episodes of eating large quantities of food, often rapidly and to the point of discomfort, while experiencing a sense of loss of control. Unlike bulimia nervosa, BED does not involve regular compensatory behaviors such as purging, excessive exercise, or fasting.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Key Characteristics:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground">Recurrent binge eating episodes:</strong> Consuming an unusually large amount of food within a discrete period (typically within 2 hours)</li>
                    <li><strong className="text-foreground">Loss of control:</strong> Feeling unable to stop eating or control what or how much you're eating</li>
                    <li><strong className="text-foreground">No regular compensatory behaviors:</strong> Unlike bulimia, there is no purging, fasting, or excessive exercise following binges</li>
                    <li><strong className="text-foreground">Psychological distress:</strong> Significant guilt, shame, disgust, or depression following binge episodes</li>
                    <li><strong className="text-foreground">Not about willpower:</strong> BED is a complex mental health condition, not a lack of self-control</li>
                  </ul>
                </div>

                <div className="bg-accent/20 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Important Context:</h3>
                  <p className="text-muted-foreground mb-4">
                    Binge Eating Disorder was only officially recognized as a distinct eating disorder diagnosis in the DSM-5 in 2013, but the experience of binge eating has existed for generations. BED is the most common eating disorder, affecting people of all genders, ages, races, and body sizes. Despite common misconceptions, BED is not about food, weight, or willpower—it's about emotional regulation, trauma, restriction, and using food as a coping mechanism for difficult feelings.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Distinguishing BED from Other Eating Patterns:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">BED vs. Bulimia Nervosa:</strong> BED does not involve regular purging or other compensatory behaviors</li>
                  <li>• <strong className="text-foreground">BED vs. Overeating:</strong> BED involves loss of control and significant emotional distress, not just eating past fullness</li>
                  <li>• <strong className="text-foreground">BED vs. Emotional Eating:</strong> While related, BED is diagnosed based on frequency, quantity, and level of distress</li>
                </ul>

                <div className="bg-[#f49a39] text-white p-6 rounded-lg my-6">
                  <p className="text-lg font-semibold">
                    You may have been told to "just eat less" or "have more willpower," but binge eating is not about discipline. It's a legitimate mental health condition that deserves proper treatment and compassion.
                  </p>
                </div>
              </div>
            </section>

            {/* Signs and Symptoms */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Signs and Symptoms of Binge Eating Disorder</h2>
              <p className="text-lg text-muted-foreground">
                BED affects individuals both behaviorally and emotionally. Many people struggle with binge eating for years before seeking help due to shame and misunderstanding about the condition.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Behavioral Signs:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Eating large amounts rapidly: Consuming food much more quickly than normal during binge episodes</li>
                    <li>✓ Eating when not physically hungry: Turning to food in the absence of hunger cues</li>
                    <li>✓ Eating past fullness: Continuing to eat despite uncomfortable fullness</li>
                    <li>✓ Eating alone due to embarrassment: Hiding eating behaviors from others</li>
                    <li>✓ Hoarding or hiding food: Keeping secret stashes of food</li>
                    <li>✓ Frequent dieting attempts: Cycling between restriction and binge eating</li>
                    <li>✓ Evidence of binge eating: Finding empty wrappers, containers, or missing food</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Emotional and Psychological Signs:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Feelings of loss of control: Sensing you cannot stop eating once you start</li>
                    <li>✓ Shame and guilt: Intense negative emotions after binge episodes</li>
                    <li>✓ Disgust with oneself: Self-criticism and self-blame related to eating</li>
                    <li>✓ Eating to cope with emotions: Using food to manage stress, anxiety, sadness, loneliness, or boredom</li>
                    <li>✓ Depression and anxiety: Co-occurring mental health struggles</li>
                    <li>✓ Social withdrawal: Avoiding social situations involving food</li>
                    <li>✓ Preoccupation with food and eating: Constant thoughts about food, eating, or body image</li>
                    <li>✓ Body image distress: Negative feelings about your body, regardless of size</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Physical Signs:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Weight fluctuations (though BED occurs across all body sizes)</li>
                    <li>• Gastrointestinal problems (bloating, cramping, acid reflux)</li>
                    <li>• Sleep disturbances</li>
                    <li>• Fatigue or low energy</li>
                    <li>• Difficulty concentrating</li>
                  </ul>
                </div>

                <Card className="border-primary/30">
                  <CardHeader>
                    <CardTitle>DSM-5 Diagnostic Criteria</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      According to the DSM-5, BED is diagnosed when binge eating episodes occur at least once a week for three months and are associated with three or more of the following:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Eating more rapidly than normal</li>
                      <li>• Eating until uncomfortably full</li>
                      <li>• Eating large amounts when not physically hungry</li>
                      <li>• Eating alone due to embarrassment</li>
                      <li>• Feeling disgusted, depressed, or guilty afterward</li>
                    </ul>
                    <div className="bg-accent/20 p-4 rounded-lg mt-4">
                      <p className="text-foreground font-semibold">Important Note:</p>
                      <p className="text-muted-foreground">
                        You don't need to meet all criteria to deserve help. If binge eating is causing you distress or impacting your life, treatment can help—regardless of frequency or body size.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Causes and Risk Factors */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">What Causes Binge Eating Disorder?</h2>
              <p className="text-lg text-muted-foreground">
                Binge Eating Disorder doesn't have a single cause. It develops from a complex interaction of biological, psychological, social, and cultural factors. Understanding these contributing factors can help reduce shame and recognize that BED is not your fault.
              </p>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="biological" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                    Biological Factors
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• <strong className="text-foreground">Genetics:</strong> Family history of eating disorders or mental health conditions</li>
                      <li>• <strong className="text-foreground">Neurobiology:</strong> Differences in brain chemistry, particularly involving dopamine and serotonin (neurotransmitters related to pleasure and mood)</li>
                      <li>• <strong className="text-foreground">Hunger and fullness regulation:</strong> Disrupted hunger/fullness cues from chronic dieting</li>
                      <li>• <strong className="text-foreground">Metabolic response to restriction:</strong> The body's biological response to food deprivation can trigger binge eating</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="psychological" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                    Psychological Factors
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• <strong className="text-foreground">Emotional regulation difficulties:</strong> Using food to cope with uncomfortable emotions</li>
                      <li>• <strong className="text-foreground">Trauma history:</strong> Past experiences of abuse, neglect, or traumatic events</li>
                      <li>• <strong className="text-foreground">Perfectionism and rigid thinking:</strong> All-or-nothing mindset around food and eating</li>
                      <li>• <strong className="text-foreground">Low self-esteem:</strong> Negative self-perception and body image</li>
                      <li>• <strong className="text-foreground">Co-occurring mental health conditions:</strong> Depression, anxiety, PTSD, ADHD, OCD</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="social" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                    Social and Cultural Factors
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• <strong className="text-foreground">Diet culture:</strong> Chronic dieting and food restriction are the strongest predictors of binge eating</li>
                      <li>• <strong className="text-foreground">Weight stigma:</strong> Internalized weight bias and experiences of weight discrimination</li>
                      <li>• <strong className="text-foreground">Thinness ideal:</strong> Cultural pressure to conform to unrealistic body standards</li>
                      <li>• <strong className="text-foreground">Food insecurity:</strong> Past or current lack of reliable access to food</li>
                      <li>• <strong className="text-foreground">Family dynamics:</strong> Family attitudes about food, eating, weight, and appearance</li>
                      <li>• <strong className="text-foreground">Childhood experiences:</strong> Comments about weight, body, or eating during developmental years</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="triggers" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                    Common Triggers
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Restrictive dieting or "clean eating" rules</li>
                      <li>• Labeling foods as "good" or "bad"</li>
                      <li>• Skipping meals or inadequate eating during the day</li>
                      <li>• Stressful life events or chronic stress</li>
                      <li>• Difficult emotions (loneliness, boredom, anger, sadness, anxiety)</li>
                      <li>• Body image distress</li>
                      <li>• Relationship conflicts</li>
                      <li>• Major life transitions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="bg-accent/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Restrict-Binge Cycle:</h3>
                <p className="text-muted-foreground mb-4">
                  One of the most common patterns leading to BED is the restrict-binge cycle:
                </p>
                <ol className="space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">1. Restriction Phase:</strong> Dieting, food rules, or inadequate eating</li>
                  <li><strong className="text-foreground">2. Physical and Psychological Deprivation:</strong> Body experiences biological hunger and psychological feelings of deprivation</li>
                  <li><strong className="text-foreground">3. Binge Episode:</strong> The body overrides willpower, leading to consuming large amounts of food</li>
                  <li><strong className="text-foreground">4. Shame and Guilt:</strong> Feelings of failure and self-blame</li>
                  <li><strong className="text-foreground">5. Return to Restriction:</strong> Promising to "be better" or "start over," perpetuating the cycle</li>
                </ol>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-foreground font-semibold italic">
                  "Diet culture teaches us that binge eating is a problem of lack of control. In reality, binge eating is often the body's biological response to restriction and deprivation. Breaking the cycle means ending restriction, not trying harder to control food."
                </p>
              </div>
            </section>

            {/* Treatment Approaches */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Evidence-Based Treatment for Binge Eating Disorder</h2>
              <p className="text-lg text-muted-foreground">
                Recovery from Binge Eating Disorder is absolutely possible. At Beyond Eating Recovery, we use evidence-based, compassionate, weight-neutral approaches that address the root causes of binge eating—not just the symptoms.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Treatment Philosophy:</h3>
                <p className="text-muted-foreground mb-4">
                  We believe that binge eating is not about food or lack of willpower. It's a coping mechanism for dealing with difficult emotions, trauma, restriction, and living in a culture that perpetuates shame about food and bodies. True healing addresses these underlying factors.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Health At Every Size® (HAES®):</strong> Weight-neutral, body-affirming care</li>
                  <li>• <strong className="text-foreground">Intuitive Eating:</strong> Reconnecting with internal hunger and fullness cues</li>
                  <li>• <strong className="text-foreground">Non-diet approach:</strong> Ending the restrict-binge cycle</li>
                  <li>• <strong className="text-foreground">Trauma-informed care:</strong> Addressing past trauma that may contribute to binge eating</li>
                  <li>• <strong className="text-foreground">Social justice orientation:</strong> Recognizing the impact of oppression, weight stigma, and diet culture</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Anne Cuthbert's 6-Step Treatment Process:</h3>
                {[
                  {
                    step: "1",
                    title: "Build Safety and Trust",
                    items: [
                      "Create a therapeutic relationship where you feel safe to be vulnerable",
                      "Establish emotional and physical safety",
                      "Begin to identify triggers and patterns"
                    ]
                  },
                  {
                    step: "2",
                    title: "Stabilize Eating Patterns",
                    items: [
                      "Work toward regular, adequate eating throughout the day",
                      "Challenge food rules and \"good/bad\" food labels",
                      "Reduce physiological deprivation that drives binge eating"
                    ]
                  },
                  {
                    step: "3",
                    title: "Address Emotional Regulation",
                    items: [
                      "Develop coping skills for managing difficult emotions without food",
                      "Learn to identify and name emotions",
                      "Build a toolbox of alternative coping strategies"
                    ]
                  },
                  {
                    step: "4",
                    title: "Explore Underlying Issues",
                    items: [
                      "Address trauma, grief, relationship issues, or life stressors",
                      "Understand the function binge eating has served",
                      "Process painful experiences with support"
                    ]
                  },
                  {
                    step: "5",
                    title: "Heal Your Relationship with Food and Body",
                    items: [
                      "Challenge internalized weight stigma and diet culture beliefs",
                      "Practice self-compassion and body respect",
                      "Develop trust in your body's signals"
                    ]
                  },
                  {
                    step: "6",
                    title: "Build a Meaningful Life",
                    items: [
                      "Reconnect with values and what matters most to you",
                      "Engage in fulfilling activities beyond food and body focus",
                      "Develop identity beyond eating disorder"
                    ]
                  }
                ].map((phase) => (
                  <Card key={phase.step}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                          {phase.step}
                        </span>
                        <span>{phase.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Evidence-Based Therapeutic Modalities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Cognitive Behavioral Therapy (CBT)</li>
                      <li>• Dialectical Behavior Therapy (DBT)</li>
                      <li>• Acceptance and Commitment Therapy (ACT)</li>
                      <li>• Psychodynamic therapy</li>
                      <li>• Somatic therapy</li>
                      <li>• EMDR (Eye Movement Desensitization and Reprocessing)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Additional Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Individual therapy (weekly sessions)</li>
                      <li>• Dietitian services with Stephanie Okumura, MS, RDN</li>
                      <li>• Group therapy options</li>
                      <li>• LGBTQIA+ support group (Thursdays, 6-7:15pm)</li>
                      <li>• Battle of the Binge Program (4-week online course)</li>
                      <li>• Teletherapy throughout Oregon and Washington</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Recovery and Hope */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">What Does Recovery from Binge Eating Disorder Look Like?</h2>
              <p className="text-lg text-muted-foreground">
                Recovery from BED is not about achieving a certain weight or never thinking about food again. It's about freedom—freedom from the obsessive thoughts, the shame, the restrict-binge cycle, and the constant battle with your body.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Emotional Freedom",
                    items: [
                      "Reduced anxiety and preoccupation with food",
                      "Ability to cope with difficult emotions without turning to binge eating",
                      "Increased self-compassion and reduced shame",
                      "Greater overall emotional wellbeing"
                    ]
                  },
                  {
                    title: "Behavioral Changes",
                    items: [
                      "Eating regularly and adequately throughout the day",
                      "Trusting your body's hunger and fullness signals",
                      "Flexibility around all foods without rigid rules",
                      "Reduced frequency and intensity of binge episodes"
                    ]
                  },
                  {
                    title: "Relationship with Food",
                    items: [
                      "Seeing food as nourishment and pleasure, not the enemy",
                      "Removing moral labels from food",
                      "Eating foods you enjoy without guilt",
                      "Trusting yourself around all foods"
                    ]
                  },
                  {
                    title: "Relationship with Your Body",
                    items: [
                      "Body respect, even if not yet body love",
                      "Reduced body checking and negative self-talk",
                      "Appreciation for what your body does",
                      "Freedom from pursuing weight loss as the solution"
                    ]
                  }
                ].map((area, idx) => (
                  <Card key={idx} className="bg-accent/10">
                    <CardHeader>
                      <CardTitle>{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        {area.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-foreground mb-2">Anne's Message on Recovery:</h3>
                <p className="text-muted-foreground italic">
                  "Recovery is possible. I know because I've lived it. The journey is not easy, but it is so worth it. On the other side of this struggle is a life where food is just food, your body is your home, and you are free to be fully yourself. You deserve that freedom."
                </p>
              </div>

              <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Recovery Is Not Linear</h3>
                <p className="text-muted-foreground mb-6">
                  You will have hard days. You may have setbacks. This doesn't mean you're failing—it means you're human. Recovery is about progress, not perfection.
                </p>
                <Button size="lg" className="bg-[#f49a39] hover:bg-[#e38929] text-white">
                  <Link to="/contact">Start Your Recovery Journey Today</Link>
                </Button>
              </div>
            </section>

            {/* When to Seek Help */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">When Should You Seek Help for Binge Eating?</h2>
              <p className="text-lg text-muted-foreground">
                If you're reading this page, chances are you've already recognized that binge eating is impacting your life. You don't need to wait until things get "bad enough" to reach out for help. You deserve support now.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Seek help if:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ You're experiencing recurrent episodes of eating large amounts with loss of control</li>
                      <li>✓ You feel shame, guilt, or disgust after eating</li>
                      <li>✓ You're eating in secret or hiding food</li>
                      <li>✓ Food and eating thoughts dominate your day</li>
                      <li>✓ You're cycling between restricting and binge eating</li>
                      <li>✓ Your eating behaviors are causing emotional distress</li>
                      <li>✓ Binge eating is interfering with your relationships, work, or quality of life</li>
                      <li>✓ You've tried to stop on your own without success</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-accent/10">
                  <CardHeader>
                    <CardTitle>Remember:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">You don't need to meet full diagnostic criteria.</strong> Even if you don't binge eat weekly or meet all the formal criteria for BED, if binge eating is causing you distress, you deserve help.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">It's never too early (or too late).</strong> Whether you've been struggling for months or decades, recovery is possible. Early intervention can prevent the disorder from becoming more entrenched.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Seeking help is a sign of strength.</strong> In a culture that tells us we should be able to "control ourselves" around food, reaching out for help takes courage.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center space-y-4 bg-primary/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground">Taking the First Step</h3>
                <p className="text-muted-foreground">
                  The hardest part is often reaching out. Once you do, you're no longer alone in this. We'll walk alongside you every step of the way toward healing and freedom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-[#f49a39] hover:bg-[#e38929] text-white">
                    <Link to="/contact">Schedule a Free Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#1a428a] text-[#1a428a] hover:bg-[#1a428a] hover:text-white" asChild>
                    <a href="tel:3607264141">Call Us: 360-726-4141</a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Additional Resources and Support</h2>
              <p className="text-muted-foreground mb-6">Learn more about related conditions and treatment approaches:</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Bulimia Nervosa", link: "/conditions/bulimia-nervosa", desc: "Learn about bulimia nervosa, which includes binge eating followed by compensatory behaviors" },
                  { name: "Emotional Eating", link: "/conditions", desc: "Explore the difference between emotional eating and binge eating disorder" },
                  { name: "OSFED", link: "/conditions", desc: "Other Specified Feeding or Eating Disorder" },
                  { name: "Our Treatment Approach", link: "/our-approach", desc: "Learn about Anne's 6-step treatment process" },
                  { name: "Health At Every Size®", link: "/health-at-every-size", desc: "Understanding our weight-neutral philosophy" },
                  { name: "View All Conditions", link: "/conditions", desc: "Complete eating disorders directory" }
                ].map((resource, idx) => (
                  <Link key={idx} to={resource.link} className="block h-full">
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

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/conditions">Return to Conditions Hub</Link>
                </Button>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Anne Cuthbert Profile */}
            <Card className="border-l-4 border-primary">
              <CardHeader>
                <CardTitle className="text-xl">Meet Your Specialist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={anneCuthbertPhoto} 
                  alt="Anne Cuthbert, MA, LPC, LMHC - Eating Disorder Specialist" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="text-center">
                  <h3 className="font-bold text-lg">Anne Cuthbert, MA, LPC, LMHC</h3>
                  <p className="text-sm text-muted-foreground">Founder & Owner</p>
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mt-2">
                    20+ Years Experience
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Anne is a licensed therapist specializing in eating disorders and body image with over 20 years of experience. As someone with personal recovery experience, Anne brings deep empathy and understanding to her work. She is a Board Member of CREDN (Columbia River Eating Disorders Network) and a member of ASDAH.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-foreground">Specialties:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>✓ Binge Eating Disorder</li>
                    <li>✓ Health At Every Size®</li>
                    <li>✓ Trauma-Informed Care</li>
                    <li>✓ Intuitive Eating</li>
                    <li>✓ LGBTQIA+ Affirming</li>
                  </ul>
                </div>
                <Button className="w-full bg-[#f49a39] hover:bg-[#e38929]" asChild>
                  <Link to="/about/anne-cuthbert">Schedule with Anne</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Book CTA */}
            <Card className="bg-[#FFF4E6]">
              <CardHeader>
                <CardTitle className="text-xl text-[#1a428a]">Understand Your Hunger</CardTitle>
                <p className="text-sm text-muted-foreground">Free Chapter: The Emotional Roots of Binge Eating</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={bookCover} 
                  alt="If Your Hunger Could Talk book cover by Anne Cuthbert" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground">
                  Anne's book explores the deeper meanings behind binge eating and offers compassionate guidance for healing your relationship with food. Download a free chapter to start your journey.
                </p>
                <Button className="w-full bg-[#1a428a] hover:bg-[#0f2d5c]" asChild>
                  <Link to="/contact">Download Free Chapter</Link>
                </Button>
                <div className="text-center">
                  <a 
                    href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[#f49a39] hover:underline"
                  >
                    View on Amazon →
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Consultation */}
            <Card className="bg-[#1a428a] text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Ready to Start Your Recovery?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-white/90">
                  Take the first step toward freedom from binge eating. Schedule a free consultation to learn how we can support your healing journey.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:3607264141" className="hover:underline">360-726-4141</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Portland, OR & Vancouver, WA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Monday - Friday: 9am - 5pm</span>
                  </div>
                </div>
                <Button className="w-full bg-[#f49a39] hover:bg-[#e38929] text-white" size="lg" asChild>
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
                <p className="text-xs text-white/80 text-center">
                  We accept insurance and offer self-pay options • Teletherapy Available
                </p>
              </CardContent>
            </Card>

            {/* Crisis Resources */}
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-xl text-destructive flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Need Immediate Support?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">988 Suicide & Crisis Lifeline</p>
                  <p className="text-muted-foreground">Call or text: 988 • Available 24/7</p>
                </div>
                <div>
                  <p className="font-semibold">Crisis Text Line</p>
                  <p className="text-muted-foreground">Text "HELLO" to 741741 • Available 24/7</p>
                </div>
                <div>
                  <p className="font-semibold">NEDA Helpline</p>
                  <p className="text-muted-foreground">
                    Call: 1-800-931-2237<br />
                    Monday-Thursday: 9am-9pm ET<br />
                    Friday: 9am-5pm ET
                  </p>
                </div>
                <Separator />
                <p className="text-xs text-muted-foreground italic">
                  If you're experiencing a medical or mental health emergency, please call 911 or go to your nearest emergency room.
                </p>
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

export default BingeEatingDisorder;