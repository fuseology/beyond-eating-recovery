import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Calendar, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";
import { Helmet } from "react-helmet";
import { MedicalConditionSchema } from "@/components/schemas";

const Orthorexia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Orthorexia Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta name="description" content="Compassionate orthorexia treatment. When healthy eating becomes unhealthy obsession. Find true balance in your relationship with food in Portland & Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/conditions/orthorexia" />
        <meta property="og:title" content="Orthorexia Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta property="og:description" content="Compassionate orthorexia treatment. When healthy eating becomes unhealthy obsession. Find true balance in your relationship with food." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/conditions/orthorexia" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orthorexia Treatment in Portland & Vancouver | Beyond Eating Recovery" />
        <meta name="twitter:description" content="Compassionate orthorexia treatment. When healthy eating becomes unhealthy obsession. Find true balance in your relationship with food." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
      </Helmet>
      <MedicalConditionSchema
        name="Orthorexia Nervosa"
        alternateName={["Orthorexia", "Healthy Eating Obsession"]}
        description="Orthorexia is an obsession with eating 'pure' or 'healthy' foods that becomes so rigid it damages physical health, emotional wellbeing, and relationships. Treatment helps find true balance with food."
        signOrSymptom={[
          "Obsessive focus on food quality",
          "Rigid food rules",
          "Anxiety when 'unhealthy' foods are present",
          "Social isolation around food",
          "Elimination of entire food groups",
          "Spending excessive time planning meals",
          "Feelings of superiority about eating habits"
        ]}
        possibleTreatment={[
          "Cognitive Behavioral Therapy (CBT)",
          "Exposure and Response Prevention (ERP)",
          "Acceptance and Commitment Therapy (ACT)",
          "Intuitive Eating Counseling",
          "Nutritional Counseling"
        ]}
        riskFactor={[
          "Perfectionism",
          "OCD tendencies",
          "Anxiety disorders",
          "History of other eating disorders",
          "Wellness culture immersion"
        ]}
        url="https://www.beyondeatingrecovery.com/conditions/orthorexia"
      />
      <BreadcrumbSchema />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Orthorexia Treatment: When Healthy Eating Becomes Unhealthy
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Orthorexia is an eating disorder characterized by an obsession with "healthy," "clean," or "pure" eating that becomes so restrictive and rigid it damages physical health, mental wellbeing, and quality of life. While orthorexia may begin with good intentions to improve health, it evolves into an all-consuming fixation that paradoxically creates harm. At Beyond Eating Recovery, we understand that orthorexia is eating disorder behavior disguised as wellness, and we provide compassionate treatment that helps you find true balance—not rigid perfection—in your relationship with food.
              </p>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - 70% */}
            <div className="lg:w-[70%]">
              
              {/* What Is Orthorexia */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Understanding Orthorexia</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    Orthorexia, or orthorexia nervosa, is an eating disorder characterized by an unhealthy obsession with eating foods perceived as "healthy," "pure," "clean," or "right." Unlike other eating disorders that focus primarily on quantity or body weight, orthorexia focuses on the quality and purity of food consumed.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Key Characteristics</h3>
                  <ul className="space-y-3 mb-6">
                    <li><strong>Fixation on food quality:</strong> Obsessive concern with the "healthiness," purity, or source of food</li>
                    <li><strong>Rigid dietary rules:</strong> Extreme rules about what foods are "acceptable" to eat</li>
                    <li><strong>Progressive restriction:</strong> Increasingly narrow list of "safe" or "clean" foods</li>
                    <li><strong>Anxiety and distress:</strong> Severe distress when unable to eat according to rigid standards</li>
                    <li><strong>Life interference:</strong> Social isolation, relationship problems, and impaired functioning</li>
                    <li><strong>Paradoxical health decline:</strong> Despite focus on "health," physical and mental health deteriorate</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <p className="text-lg font-medium text-foreground">
                      Orthorexia is not about health—it's about control, anxiety, and perfectionism disguised as wellness. True health includes mental wellbeing, social connection, and life balance—not rigid adherence to food rules that create suffering.
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">The Orthorexia Paradox</h3>
                  <p className="mb-4">
                    Orthorexia begins with a desire to be healthy but ends in obsession that:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>Causes nutritional deficiencies despite "healthy" focus</li>
                    <li>Creates severe anxiety and mental health decline</li>
                    <li>Damages relationships and social connections</li>
                    <li>Consumes excessive time, money, and mental energy</li>
                    <li>Leads to physical health problems</li>
                    <li>Destroys quality of life in pursuit of "perfect" health</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">How Orthorexia Differs from Healthy Eating</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold text-lg mb-3 text-primary">Healthy Eating</h4>
                        <ul className="space-y-2 text-sm">
                          <li>✓ Flexible approach to nutrition</li>
                          <li>✓ Includes all food groups</li>
                          <li>✓ Allows for enjoyment and social eating</li>
                          <li>✓ Based on balance and moderation</li>
                          <li>✓ Enhances life and wellbeing</li>
                          <li>✓ No moral judgment about food</li>
                          <li>✓ Can adapt to circumstances</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold text-lg mb-3 text-primary">Orthorexia</h4>
                        <ul className="space-y-2 text-sm">
                          <li>✗ Rigid, rule-bound approach</li>
                          <li>✗ Severe restriction of food groups</li>
                          <li>✗ Anxiety in social eating situations</li>
                          <li>✗ Based on perfection and purity</li>
                          <li>✗ Dominates life and creates suffering</li>
                          <li>✗ Strong moral judgment about food</li>
                          <li>✗ Extreme distress when rules broken</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Signs and Symptoms */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Signs and Symptoms of Orthorexia</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Orthorexia manifests through thoughts, behaviors, and emotional patterns centered on food purity and "healthy" eating that becomes increasingly restrictive and distressing.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Behavioral Signs</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Food Selection and Preparation:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Obsessively reading labels and scrutinizing every ingredient</li>
                    <li>Spending excessive time researching food, nutrition, and diet</li>
                    <li>Extreme meal planning and elaborate preparation of "pure" meals</li>
                    <li>Bringing own food everywhere due to fear of "impure" options</li>
                    <li>Refusal to eat at restaurants due to unknown ingredients</li>
                    <li>Progressive elimination of foods or entire food groups</li>
                    <li>Only eating specific brands, refusing alternatives</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Shopping and Sourcing:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Shopping only at specialty or health food stores</li>
                    <li>Spending excessive money on organic or "pure" foods</li>
                    <li>Traveling long distances for specific foods</li>
                    <li>Refusing food gifts due to anxiety about quality</li>
                    <li>Growing own food obsessively to control sourcing</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Social Behaviors:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Declining social invitations involving food</li>
                    <li>Bringing own food to gatherings</li>
                    <li>Lecturing others about food choices</li>
                    <li>Judging others' eating habits</li>
                    <li>Social isolation and relationship conflicts</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Thought Patterns</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Obsessive Thoughts:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Preoccupied with food quality, purity, or "healthiness"</li>
                    <li>Constant mental reviewing of what was or will be eaten</li>
                    <li>Obsessing about food sources, ingredients, preparation</li>
                    <li>Inability to focus on other topics</li>
                    <li>Intrusive thoughts about food "contamination"</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Rigid Beliefs:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Black-and-white thinking about food ("pure" vs "toxic")</li>
                    <li>Belief that certain foods are poisonous or harmful</li>
                    <li>Conviction that only specific way of eating is healthy</li>
                    <li>Moral superiority about food choices</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Physical Symptoms</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Weight loss or inability to maintain healthy weight</li>
                    <li>Nutritional deficiencies despite "healthy eating" focus</li>
                    <li>Fatigue and low energy</li>
                    <li>Hair loss, brittle nails, dry skin</li>
                    <li>Loss of menstrual period (amenorrhea)</li>
                    <li>Digestive issues and constipation</li>
                    <li>Weakened immune system</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Emotional Signs</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Severe anxiety when unable to eat according to rules</li>
                    <li>Intense guilt after eating "impure" foods</li>
                    <li>Pride and identity tied to dietary adherence</li>
                    <li>Depression and social isolation</li>
                    <li>Self-worth dependent on eating "perfectly"</li>
                  </ul>
                </div>
              </section>

              {/* Causes and Risk Factors */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What Causes Orthorexia?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Orthorexia develops from a complex interaction of individual vulnerabilities, psychological factors, and cultural influences that make obsessive "healthy" eating seem like the right path.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Psychological Factors</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Personality Traits:</h4>
                  <ul className="space-y-2 mb-6">
                    <li><strong>Perfectionism:</strong> Need for flawless execution of "healthy" eating</li>
                    <li><strong>Need for control:</strong> Using food rules to manage anxiety or chaos</li>
                    <li><strong>Rigidity:</strong> Black-and-white thinking, difficulty with flexibility</li>
                    <li><strong>Obsessive-compulsive traits:</strong> Tendency toward ritualistic behaviors</li>
                    <li><strong>High anxiety:</strong> Using food rules to manage generalized anxiety</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Mental Health Conditions:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Anxiety disorders</li>
                    <li>OCD (Obsessive-Compulsive Disorder)</li>
                    <li>Previous eating disorders</li>
                    <li>Trauma and PTSD</li>
                    <li>Depression</li>
                    <li>ADHD or autism spectrum</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Cultural and Social Factors</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Diet Culture and Wellness Industry:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>"Clean eating" movement and food moralization</li>
                    <li>Wellness influencers promoting extreme eating patterns</li>
                    <li>Social media showcasing "perfect" eating</li>
                    <li>Health food marketing and fear-mongering</li>
                    <li>Pseudoscience disguised as nutrition advice</li>
                    <li>Alarmist documentary films about food</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Cultural Pressures:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Achievement and productivity culture</li>
                    <li>Body standards and thinness ideals</li>
                    <li>Emphasis on optimization and self-improvement</li>
                    <li>Status associated with expensive, specialty foods</li>
                    <li>Health as moral imperative</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Life Experiences and Triggers</h3>
                  <p className="mb-4">Orthorexia often develops or worsens during:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Health scare (personal or family illness)</li>
                    <li>Diagnosis of medical condition</li>
                    <li>Weight loss diet that evolves into obsession</li>
                    <li>Athletic pursuit with focus on nutrition</li>
                    <li>Entering wellness industry</li>
                    <li>Trauma or significant loss</li>
                    <li>Life transitions (college, career change, relocation)</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <p className="text-foreground/90">
                      <strong>Important Understanding:</strong> Orthorexia often begins with genuine health intentions, making it easy to miss when it crosses into disorder. The wellness industry profits from normalizing orthorexic behaviors, making it hard to recognize when you've crossed the line.
                    </p>
                  </div>
                </div>
              </section>

              {/* Health Consequences */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Health Impacts of Orthorexia</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    The irony of orthorexia is that obsession with "healthy" eating creates serious health problems—both physical and psychological. The pursuit of perfect health paradoxically damages health.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Physical Health Impacts</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Nutritional Deficiencies:</h4>
                  <p className="mb-4">Despite focus on "health," orthorexia often causes:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Protein deficiency from eliminating animal products</li>
                    <li>Essential fatty acid deficiency from fear of fats</li>
                    <li>Vitamin B12, iron, calcium, and zinc deficiencies</li>
                    <li>Inadequate total caloric intake</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Weight and Metabolic Consequences:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Unintentional weight loss</li>
                    <li>Metabolic slowdown</li>
                    <li>Loss of muscle mass</li>
                    <li>Osteoporosis or osteopenia</li>
                    <li>Hormonal disruptions</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Reproductive Health:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Loss of menstrual period (amenorrhea)</li>
                    <li>Infertility</li>
                    <li>Hormonal imbalances</li>
                    <li>Sexual dysfunction</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Other Physical Impacts:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Cardiovascular effects (slow heart rate, low blood pressure)</li>
                    <li>Weakened immune system</li>
                    <li>Chronic fatigue and weakness</li>
                    <li>Gastrointestinal problems</li>
                    <li>Hair loss, brittle nails, dry skin</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Mental Health Impacts</h3>
                  <ul className="space-y-3 mb-6">
                    <li><strong>Anxiety:</strong> Severe food-related anxiety, social anxiety, panic attacks</li>
                    <li><strong>Depression:</strong> Isolation, hopelessness, loss of joy</li>
                    <li><strong>Obsessive-Compulsive Symptoms:</strong> Intrusive thoughts, compulsive rituals</li>
                    <li><strong>Cognitive Impairment:</strong> Difficulty concentrating, reduced flexibility, memory problems</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Quality of Life Impacts</h3>
                  <ul className="space-y-2 mb-6">
                    <li><strong>Social Isolation:</strong> Withdrawing from relationships, missing life events</li>
                    <li><strong>Occupational Problems:</strong> Reduced performance, career limitations</li>
                    <li><strong>Financial Strain:</strong> Excessive spending on specialty foods</li>
                    <li><strong>Time Consumption:</strong> Hours daily spent on food-related activities</li>
                    <li><strong>Loss of Spontaneity:</strong> Unable to travel, enjoy celebrations</li>
                    <li><strong>Relationship Conflicts:</strong> Family tension, romantic difficulties</li>
                  </ul>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <h4 className="font-semibold text-lg mb-2">The Ultimate Paradox:</h4>
                    <p className="text-foreground/90">
                      You pursue health obsessively, but end up malnourished, anxious, isolated, and sicker—despite trying to be healthier. This is the tragedy of orthorexia—it promises health and delivers suffering.
                    </p>
                  </div>
                </div>
              </section>

              {/* Treatment Approaches */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Evidence-Based Treatment for Orthorexia</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Recovery from orthorexia is possible with treatment that addresses both the eating disorder behaviors and the underlying anxiety, perfectionism, and beliefs driving the obsession. Treatment helps you find genuine balance—not rigid control disguised as health.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Treatment Philosophy</h3>
                  <ul className="space-y-3 mb-6">
                    <li><strong>Challenging Wellness Culture:</strong> Recognition that orthorexia is reinforced by diet culture</li>
                    <li><strong>Flexible, Intuitive Approach:</strong> Moving from rigid rules to flexible guidelines</li>
                    <li><strong>Weight-Neutral, HAES-Aligned:</strong> Focus on behaviors and wellbeing, not weight</li>
                    <li><strong>Addressing Underlying Issues:</strong> Treating anxiety, OCD, perfectionism, trauma</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Evidence-Based Therapeutic Approaches</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Cognitive Behavioral Therapy (CBT):</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Identifying and challenging rigid food beliefs</li>
                    <li>Examining evidence for dietary beliefs</li>
                    <li>Cognitive restructuring for flexible thinking</li>
                    <li>Behavioral experiments testing feared outcomes</li>
                    <li>Gradual exposure to "forbidden" foods</li>
                    <li>Response prevention (reducing compulsive checking)</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Exposure and Response Prevention (ERP):</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Creating hierarchy of anxiety-provoking foods</li>
                    <li>Gradual exposure to "impure" foods</li>
                    <li>Resisting compulsions to research or check labels</li>
                    <li>Habituation through repeated exposure</li>
                    <li>Learning feared outcomes don't occur</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Acceptance and Commitment Therapy (ACT):</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Values clarification beyond "perfect" eating</li>
                    <li>Defusion from rigid food thoughts</li>
                    <li>Accepting discomfort without rigid control</li>
                    <li>Committed action aligned with values</li>
                    <li>Mindful eating without judgment</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Dialectical Behavior Therapy (DBT):</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Distress tolerance without food control</li>
                    <li>Emotion regulation skills</li>
                    <li>Mindfulness practices</li>
                    <li>Interpersonal effectiveness for social eating</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Nutritional Rehabilitation</h3>
                  <p className="mb-4">Working with our Registered Dietitian, Stephanie Okumura, MS, RDN:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Evidence-based nutrition education (counteracting pseudoscience)</li>
                    <li>Challenging food myths and "clean eating" dogma</li>
                    <li>Expanding food variety and reintroducing eliminated foods</li>
                    <li>Ensuring adequate nutritional intake</li>
                    <li>Intuitive eating principles</li>
                    <li>Flexible eating without moral judgment</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Anne Cuthbert's Integrated Approach</h3>
                  <ol className="space-y-4 mb-6 list-decimal list-inside">
                    <li><strong>Assessment and Psychoeducation:</strong> Understanding your orthorexia and educating about disorder vs. healthy eating</li>
                    <li><strong>Stabilization:</strong> Medical stabilization if malnourished, ensuring adequate intake</li>
                    <li><strong>Challenging Beliefs and Rules:</strong> Examining food rules, challenging wellness messaging, addressing perfectionism</li>
                    <li><strong>Gradual Exposure:</strong> Systematic reintroduction of feared foods, reducing checking compulsions</li>
                    <li><strong>Social Reintegration:</strong> Eating in restaurants, accepting food from others, rebuilding relationships</li>
                    <li><strong>Building Life Beyond Food:</strong> Reconnecting with interests, developing identity beyond diet, values-aligned living</li>
                  </ol>
                </div>
              </section>

              {/* Recovery */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What Does Orthorexia Recovery Look Like?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Recovery from orthorexia means reclaiming your life from food obsession and finding genuine balance, health, and wellbeing—not through rigid control, but through flexibility, self-trust, and connection.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Recovery Includes</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Behavioral Recovery:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Eating variety from all food groups without anxiety</li>
                    <li>Flexible, spontaneous eating</li>
                    <li>Reduced food rituals and research time</li>
                    <li>Accepting food from others comfortably</li>
                    <li>Eating socially without stress</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Psychological Recovery:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Reduced food obsession</li>
                    <li>Flexible thinking about food (no "good" or "bad")</li>
                    <li>Realistic beliefs about nutrition</li>
                    <li>Reduced perfectionism</li>
                    <li>Less judgment of self and others</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Social Recovery:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Reconnecting with people</li>
                    <li>Comfortable social eating</li>
                    <li>Participating in life activities</li>
                    <li>Reduced isolation</li>
                    <li>Authentic relationships beyond diet</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Identity Recovery:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Identity beyond diet and "clean eating"</li>
                    <li>Rediscovering diverse interests</li>
                    <li>Self-worth not tied to food adherence</li>
                    <li>Authenticity over wellness performance</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">What Recovery Is NOT</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Eating "unhealthily" or ignoring all nutrition</li>
                    <li>Never caring about food quality</li>
                    <li>Eating "perfectly" (no such thing exists)</li>
                    <li>Never thinking about food</li>
                    <li>Immediate, linear change</li>
                  </ul>

                  <div className="bg-secondary/20 p-6 rounded-lg my-8">
                    <h4 className="font-semibold text-lg mb-3">What True Health Looks Like:</h4>
                    <p className="mb-3">Recovery teaches that real health includes:</p>
                    <ul className="space-y-2">
                      <li>✓ Physical wellbeing through adequate (not perfect) nutrition</li>
                      <li>✓ Mental health and peace of mind</li>
                      <li>✓ Social connection, not isolation</li>
                      <li>✓ Joy and meaning in life</li>
                      <li>✓ Flexibility and balance, not perfection</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Life After Orthorexia</h3>
                  <p className="mb-4">Recovery allows you to:</p>
                  <ul className="space-y-2 mb-6">
                    <li>Enjoy eating without anxiety</li>
                    <li>Travel freely</li>
                    <li>Attend social events</li>
                    <li>Build meaningful relationships</li>
                    <li>Pursue goals and dreams</li>
                    <li>Experience spontaneity and joy</li>
                    <li>Trust your body</li>
                    <li>Be present in your life</li>
                  </ul>

                  <p className="text-lg font-medium text-primary mt-8">
                    Recovery from orthorexia is absolutely possible. The other side of orthorexia is freedom—and it's worth the journey.
                  </p>
                </div>
              </section>

              {/* When to Seek Help */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">When Should You Seek Help for Orthorexia?</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Because orthorexia is disguised as "healthy eating" and praised by wellness culture, it can be hard to recognize when you've crossed the line. If you're reading this page, you may already sense something is wrong.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Seek Help If:</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Regarding Food Behaviors:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Your diet has become increasingly restrictive</li>
                    <li>You've eliminated multiple food groups</li>
                    <li>You spend hours researching food and nutrition</li>
                    <li>You can't eat food unless you prepared it</li>
                    <li>You refuse to eat at restaurants or others' homes</li>
                    <li>You feel anxious when you can't eat "correctly"</li>
                    <li>Your food rules keep getting stricter</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Regarding Thoughts:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>You think about food quality constantly</li>
                    <li>You judge food as "good" or "bad," "clean" or "toxic"</li>
                    <li>Your self-worth is tied to eating "perfectly"</li>
                    <li>You can't stop researching nutrition</li>
                    <li>You judge others for their food choices</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">Regarding Life Impact:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>You're declining social invitations involving food</li>
                    <li>Relationships are suffering due to food conflicts</li>
                    <li>You're spending excessive money on specialty foods</li>
                    <li>Your life revolves around food sourcing and preparation</li>
                    <li>Work or school is impacted by food preoccupation</li>
                    <li>You feel isolated or lonely</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Key Questions to Ask Yourself:</h3>
                  <ul className="space-y-3 mb-6">
                    <li>Has the quality of my life decreased as the quality of my diet increased?</li>
                    <li>Do I spend more time thinking about food than I want to?</li>
                    <li>Do my food rules prevent me from living fully?</li>
                    <li>Am I more isolated now than before I started "eating healthy"?</li>
                    <li>Do I feel controlled by food rules rather than in control?</li>
                  </ul>

                  <p className="text-lg font-medium my-6">
                    If you answered yes to several questions, orthorexia may be present.
                  </p>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
                    <p className="font-medium">
                      Common Barrier: "But I'm just being healthy"
                    </p>
                    <p className="mt-2">
                      If "healthy eating" is causing suffering, it's not healthy. Health includes mental wellbeing and quality of life.
                    </p>
                  </div>

                  <div className="text-center my-8">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                      Schedule a Free Consultation
                    </Button>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Call: <a href="tel:360-726-4141" className="text-accent hover:underline">360-726-4141</a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Supporting a Loved One */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">How to Support Someone with Orthorexia</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    If someone you care about has orthorexia, it can be confusing and frustrating—their obsession seems like healthy behavior but is clearly causing harm. Your support can make a meaningful difference.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Key Things to Know:</h3>
                  <ul className="space-y-2 mb-6">
                    <li>Orthorexia is an eating disorder, not "being healthy"</li>
                    <li>Your loved one is suffering even if they seem proud</li>
                    <li>Wellness culture reinforces the disorder</li>
                    <li>They may not recognize they have a problem</li>
                    <li>Recovery requires professional help</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">How to Be Supportive</h3>
                  
                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">DO:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>Express concern from a place of love, not criticism</li>
                    <li>Say: "I notice food has taken over your life. I'm worried about you."</li>
                    <li>Say: "I see how anxious you get about eating. That must be exhausting."</li>
                    <li>Encourage professional evaluation</li>
                    <li>Be patient with recovery process</li>
                    <li>Maintain normal eating patterns yourself</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-primary/90 mt-6 mb-3">DON'T:</h4>
                  <ul className="space-y-2 mb-6">
                    <li>❌ Praise their dietary restrictions or "discipline"</li>
                    <li>❌ Join them in extreme dietary practices</li>
                    <li>❌ Debate nutrition science (feeds orthorexia)</li>
                    <li>❌ Say "You look healthy" (validates disorder)</li>
                    <li>❌ Say "At least you're being healthy"</li>
                    <li>❌ Make it about how hard it is for you</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Taking Care of Yourself</h3>
                  <p className="mb-4">
                    Supporting someone with orthorexia is exhausting. Remember to:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>Acknowledge your own frustration</li>
                    <li>Seek your own support (therapy, support groups)</li>
                    <li>Set boundaries to protect your wellbeing</li>
                    <li>Remember you can't force recovery</li>
                    <li>Practice self-compassion</li>
                  </ul>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Additional Resources and Support</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">OSFED</h3>
                      <p className="text-muted-foreground mb-4">
                        Orthorexia is typically diagnosed as OSFED. Learn more about this eating disorder category.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/conditions/osfed">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Co-Occurring Issues</h3>
                      <p className="text-muted-foreground mb-4">
                        Orthorexia frequently co-occurs with anxiety, OCD, and perfectionism.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/conditions/co-occurring-issues">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Our Treatment Approach</h3>
                      <p className="text-muted-foreground mb-4">
                        Learn about our individualized approach to orthorexia recovery.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="/our-approach">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Health At Every Size</h3>
                      <p className="text-muted-foreground mb-4">
                        Our weight-neutral, wellness-skeptical philosophy.
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
                    <h3 className="text-lg font-semibold text-primary">Orthorexia Specialist</h3>
                  </div>
                  
                  <img 
                    src={anneCuthbertPhoto} 
                    alt="Anne Cuthbert, MA, LPC, LMHC - Orthorexia Treatment Specialist"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <h4 className="text-xl font-bold text-primary mb-1">Anne Cuthbert, MA, LPC, LMHC</h4>
                  <p className="text-sm text-muted-foreground mb-3">Founder & Owner, Beyond Eating Recovery</p>
                  
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    20+ Years Experience
                  </div>
                  
                  <p className="text-sm mb-4">
                    Anne provides specialized treatment for orthorexia, understanding that obsession with "healthy eating" is an eating disorder disguised as wellness. She helps you find genuine balance without rigid control.
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Orthorexia Treatment</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Challenging Wellness Culture</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Anxiety & OCD Treatment</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Weight-Neutral Care</span>
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
                  
                  <h3 className="text-lg font-semibold text-primary mb-2">Breaking Free from Food Obsession</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Free Chapter: When "Healthy" Becomes Unhealthy
                  </p>
                  
                  <p className="text-sm mb-4">
                    Anne's book explores how wellness culture can mask eating disorders. Download a free chapter about recognizing when healthy eating crosses into orthorexia.
                  </p>
                  
                  <Button className="w-full mb-2" variant="default">
                    Download Free Chapter
                  </Button>
                  <a href="#" className="text-sm text-accent hover:underline block text-center">
                    View on Amazon
                  </a>
                </CardContent>
              </Card>

              {/* Schedule Consultation Card */}
              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 mr-2" />
                    <h3 className="text-lg font-semibold">Orthorexia Deserves Treatment</h3>
                  </div>
                  
                  
                  
                  <p className="text-sm mb-4 opacity-90">
                    If obsession with "healthy eating" is causing you suffering, you deserve specialized treatment. Recovery means finding genuine balance, not rigid perfection.
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
                      <span>Portland, OR & Vancouver, WA<br/>(Teletherapy Available)</span>
                    </div>
                  </div>
                  
                  <p className="text-xs mb-4 opacity-80">
                    Office Hours: Monday - Friday, 9am - 5pm
                  </p>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                    Schedule Free Consultation
                  </Button>
                  
                  <p className="text-xs mt-3 opacity-80">
                    We accept insurance and offer self-pay options.
                  </p>
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
                      <p className="font-semibold mb-1">Crisis Text Line</p>
                      <p className="text-muted-foreground mb-1">Text "HELLO" to 741741</p>
                      <p className="text-xs text-muted-foreground">Available 24/7</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">NEDA Helpline</p>
                      <p className="text-muted-foreground mb-1">Call: 1-800-931-2237</p>
                      <p className="text-xs text-muted-foreground">Mon-Thu: 9am-9pm ET | Fri: 9am-5pm ET</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    If you're experiencing a medical or mental health emergency, please call 911 or go to your nearest emergency room.
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

export default Orthorexia;