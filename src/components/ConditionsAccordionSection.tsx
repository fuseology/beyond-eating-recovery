import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Condition {
  id: string;
  title: string;
  content: string;
  buttonText: string;
  link: string;
}

const conditions: Condition[] = [
  {
    id: 'overview',
    title: 'Understanding Eating Disorders',
    content: 'Eating disorders are complex mental health conditions that affect millions of people. At Beyond Eating Recovery, we provide compassionate, evidence-based treatment for the full spectrum of eating disorders. Our approach is HAES®-aligned, weight-neutral, and trauma-informed. Explore the specific conditions we treat below, or visit our comprehensive Conditions Hub to learn more about our philosophy and treatment approach.',
    buttonText: 'Visit Our Conditions Hub →',
    link: '/conditions'
  },
  {
    id: 'anorexia',
    title: 'Anorexia Nervosa',
    content: 'Anorexia nervosa is characterized by food restriction, intense fear of weight gain, and distorted body image. It affects individuals across all genders, ages, and body sizes—including those in larger bodies (atypical anorexia). Our treatment focuses on stabilizing eating patterns, healing body image, and addressing underlying trauma using a weight-neutral approach.',
    buttonText: 'Learn More About Anorexia Nervosa →',
    link: '/conditions/anorexia-nervosa'
  },
  {
    id: 'bulimia',
    title: 'Bulimia Nervosa',
    content: 'Bulimia nervosa involves cycles of binge eating followed by compensatory behaviors such as purging, excessive exercise, or fasting. It often develops from restrictive dieting and is maintained by shame and secrecy. We help clients break the binge-purge cycle, challenge food rules, and heal the emotional wounds driving the disorder.',
    buttonText: 'Learn More About Bulimia Nervosa →',
    link: '/conditions/bulimia-nervosa'
  },
  {
    id: 'binge-eating',
    title: 'Binge Eating Disorder',
    content: 'Binge eating disorder (BED) is the most common eating disorder, characterized by recurrent episodes of eating large amounts of food with a sense of loss of control. Unlike bulimia, there are no regular compensatory behaviors. Our treatment helps clients understand emotional triggers, develop healthier coping mechanisms, and heal their relationship with food without shame or restriction.',
    buttonText: 'Learn More About Binge Eating Disorder →',
    link: '/conditions/binge-eating-disorder'
  },
  {
    id: 'atypical-anorexia',
    title: 'Atypical Anorexia Nervosa',
    content: 'Atypical anorexia involves all the symptoms of anorexia nervosa—food restriction, intense fear of weight gain, distorted body image—except the person is not underweight. This diagnosis is often missed due to weight bias, but the medical and psychological severity is just as serious. We provide affirming, weight-neutral care that takes every eating disorder seriously, regardless of body size.',
    buttonText: 'Learn More About Atypical Anorexia →',
    link: '/conditions/atypical-anorexia'
  },
  {
    id: 'arfid',
    title: 'ARFID (Avoidant/Restrictive Food Intake Disorder)',
    content: 'ARFID involves restrictive eating not driven by body image concerns, but by sensory sensitivities, fear of aversive consequences (like choking), or lack of interest in food. It affects children, teens, and adults, and can lead to nutritional deficiencies and social isolation. Our treatment addresses the specific fears and sensory challenges underlying ARFID with compassion and practical strategies.',
    buttonText: 'Learn More About ARFID →',
    link: '/conditions/arfid'
  },
  {
    id: 'osfed',
    title: 'OSFED (Other Specified Feeding or Eating Disorder)',
    content: 'OSFED encompasses eating disorders that don\'t meet full diagnostic criteria for anorexia, bulimia, or BED, but are still serious and deserving of treatment. Subtypes include atypical anorexia, subthreshold bulimia and BED, purging disorder, and night eating syndrome. We provide comprehensive treatment for all OSFED presentations.',
    buttonText: 'Learn More About OSFED →',
    link: '/conditions/osfed'
  },
  {
    id: 'orthorexia',
    title: 'Orthorexia',
    content: 'Orthorexia involves an obsession with "clean" or "healthy" eating that becomes rigid, anxiety-provoking, and life-limiting. Often fueled by wellness culture and diet culture in disguise, orthorexia can lead to nutritional deficiencies, social isolation, and severe anxiety. Our treatment helps clients challenge food rules, restore dietary flexibility, and heal their relationship with food and their bodies.',
    buttonText: 'Learn More About Orthorexia →',
    link: '/conditions/orthorexia'
  },
  {
    id: 'disordered-eating',
    title: 'Disordered Eating',
    content: 'Disordered eating includes a range of irregular eating behaviors and attitudes about food, weight, and body image that don\'t meet full diagnostic criteria for an eating disorder but still cause distress and impairment. It\'s extremely common in our diet-obsessed culture. We help clients recognize these patterns, understand their emotional roots, and develop a healthier relationship with food and body.',
    buttonText: 'Learn More About Disordered Eating →',
    link: '/conditions/disordered-eating'
  },
  {
    id: 'emotional-eating',
    title: 'Emotional Eating / Compulsive Overeating',
    content: 'Emotional eating involves using food to cope with difficult emotions rather than physical hunger. It\'s often rooted in the restrict-binge cycle created by dieting. Our treatment helps clients understand the emotional triggers behind eating, develop alternative coping strategies, and learn to respond to true hunger and fullness cues. We also offer our specialized Battle of the Binge program for those seeking structured support.',
    buttonText: 'Learn More About Emotional Eating →',
    link: '/conditions/emotional-eating'
  },
  {
    id: 'body-dysmorphia',
    title: 'Body Dysmorphia (Body Dysmorphic Disorder)',
    content: 'Body dysmorphic disorder (BDD) involves obsessive preoccupation with perceived flaws in appearance that are minor or not observable to others. It can include muscle dysmorphia and often co-occurs with eating disorders. The distress and time spent fixating on appearance can be debilitating. Our treatment helps clients challenge distorted beliefs, reduce compulsive behaviors, and build self-compassion.',
    buttonText: 'Learn More About Body Dysmorphia →',
    link: '/conditions/body-dysmorphia'
  },
  {
    id: 'exercise-addiction',
    title: 'Exercise Addiction / Compulsive Exercise',
    content: 'Compulsive exercise involves exercising excessively despite injury, illness, or life interference, often driven by rigid rules, guilt, or body image concerns. It\'s common in eating disorders and can lead to Relative Energy Deficiency in Sport (RED-S). Our treatment helps clients develop a balanced relationship with movement, challenge rigid exercise rules, and address the underlying emotional drivers.',
    buttonText: 'Learn More About Exercise Addiction →',
    link: '/conditions/exercise-addiction'
  },
  {
    id: 'co-occurring',
    title: 'Co-Occurring Mental Health Issues',
    content: 'Eating disorders frequently co-occur with other mental health conditions including depression, anxiety, PTSD, substance use disorders, borderline personality disorder, ADHD, and self-harm. These co-occurring issues can complicate treatment and recovery. Our integrated approach addresses both the eating disorder and co-occurring conditions simultaneously for more comprehensive healing.',
    buttonText: 'Learn More About Co-Occurring Issues →',
    link: '/conditions/co-occurring-issues'
  },
  {
    id: 'men',
    title: 'Eating Disorders in Men',
    content: 'Eating disorders affect people of all genders, yet men and gender-diverse individuals are often underdiagnosed due to the stereotype that eating disorders only affect women. Men may present with muscle dysmorphia, compulsive exercise, and steroid use. Our gender-affirming treatment recognizes the unique challenges men face, including masculine norms and barriers to seeking help.',
    buttonText: 'Learn More About Eating Disorders in Men →',
    link: '/conditions/men-eating-disorders'
  },
  {
    id: 'lgbtqia',
    title: 'Eating Disorders in LGBTQIA+ Individuals',
    content: 'LGBTQIA+ individuals experience disproportionately high rates of eating disorders due to minority stress, discrimination, and body image pressures. Gender dysphoria, community body standards, and intersectional identities all play a role. Our affirming practice offers specialized LGBTQIA+ group therapy and individual treatment that honors your identity and experiences.',
    buttonText: 'Learn More About Eating Disorders in LGBTQIA+ →',
    link: '/conditions/lgbtqia-eating-disorders'
  },
  {
    id: 'athletes',
    title: 'Eating Disorders in Athletes',
    content: 'Athletes face unique pressures around body composition, performance, and weight that can contribute to eating disorders. Sport culture often normalizes disordered eating, and Relative Energy Deficiency in Sport (RED-S) can have serious consequences. Our treatment helps athletes heal their relationship with food and body while supporting safe return-to-sport protocols when appropriate.',
    buttonText: 'Learn More About Eating Disorders in Athletes →',
    link: '/conditions/athletes-eating-disorders'
  }
];

const ConditionsAccordionSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="conditions-we-treat" 
      className="py-20 bg-secondary/5"
      aria-labelledby="conditions-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 
            id="conditions-heading" 
            className="text-3xl md:text-4xl font-bold mb-4 text-[#1a428a]"
          >
            Conditions We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            Beyond Eating Recovery specializes in treating a full spectrum of eating disorders and related concerns. 
            Click each condition below to learn more, or visit our comprehensive Conditions Hub.
          </p>
          <Link 
            to="/conditions" 
            className="inline-block text-[#f49a39] hover:text-[#1a428a] font-semibold transition-colors"
          >
            View All Conditions in Our Conditions Hub →
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg border border-border overflow-hidden">
          {conditions.map((condition, index) => (
            <div 
              key={condition.id} 
              className={`border-b border-border last:border-b-0 ${
                openId === condition.id ? 'bg-[#1a428a]' : 'bg-card'
              }`}
            >
              <h3
                role="button"
                tabIndex={0}
                aria-expanded={openId === condition.id}
                aria-controls={`panel-${condition.id}`}
                onClick={() => toggleAccordion(condition.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleAccordion(condition.id);
                  }
                }}
                className={`flex items-center justify-between px-6 py-5 cursor-pointer transition-all duration-300 hover:bg-[#f0f4f8] ${
                  openId === condition.id ? 'bg-[#1a428a] hover:bg-[#1a428a]' : ''
                }`}
              >
                <span 
                  className={`text-lg font-semibold transition-colors ${
                    openId === condition.id ? 'text-white' : 'text-[#1a428a]'
                  }`}
                >
                  {condition.title}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-[#f49a39] transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openId === condition.id ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </h3>
              
              <div
                id={`panel-${condition.id}`}
                role="region"
                aria-labelledby={`header-${condition.id}`}
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openId === condition.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-6 bg-[#fafbfc] border-l-4 border-[#f49a39]">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {condition.content}
                  </p>
                  <Button 
                    asChild
                    className="bg-[#f49a39] hover:bg-[#e88a28] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <Link to={condition.link}>
                      {condition.buttonText}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsAccordionSection;
