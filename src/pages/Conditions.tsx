import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  Phone, 
  AlertCircle, 
  Scale, 
  Activity, 
  Utensils, 
  Apple, 
  Puzzle, 
  Sparkles, 
  Users, 
  Heart, 
  Brain, 
  Eye, 
  Dumbbell, 
  User, 
  Rainbow, 
  Trophy,
  GitBranch,
  Search,
  X
} from "lucide-react";

const Conditions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPopulation, setSelectedPopulation] = useState<string>("all");
  const conditionCards = [
    {
      id: "anorexia-nervosa",
      icon: Scale,
      title: "Anorexia Nervosa",
      description: "Characterized by food restriction, intense fear of weight gain, and body image distortion. Anorexia is a serious eating disorder that requires specialized treatment addressing both physical and psychological components.",
      link: "/conditions/anorexia-nervosa",
      category: "diagnosed",
      population: ["general"]
    },
    {
      id: "bulimia-nervosa",
      icon: Activity,
      title: "Bulimia Nervosa",
      description: "Involves cycles of binge eating followed by compensatory behaviors (purging, excessive exercise, fasting). Bulimia creates physical and emotional distress that requires comprehensive treatment.",
      link: "/conditions/bulimia-nervosa",
      category: "diagnosed",
      population: ["general"]
    },
    {
      id: "binge-eating-disorder",
      icon: Utensils,
      title: "Binge Eating Disorder",
      description: "The most common eating disorder, characterized by recurrent episodes of eating large amounts with loss of control. BED causes significant distress and is highly treatable with appropriate care.",
      link: "/conditions/binge-eating-disorder",
      category: "diagnosed",
      population: ["general"]
    },
    {
      id: "atypical-anorexia",
      icon: Users,
      title: "Atypical Anorexia Nervosa",
      description: "All symptoms of anorexia nervosa except low weight. Just as medically and psychologically serious as 'typical' anorexia, but often missed due to weight bias. You deserve care at any size.",
      link: "/conditions/atypical-anorexia",
      category: "diagnosed",
      population: ["general"]
    },
    {
      id: "arfid",
      icon: Apple,
      title: "ARFID (Avoidant/Restrictive Food Intake Disorder)",
      description: "Food avoidance or restriction not motivated by weight concerns—may be sensory-based, fear-based, or lack of interest in eating. Common in neurodivergent individuals and can cause nutritional deficiencies.",
      link: "/conditions/arfid",
      category: "diagnosed",
      population: ["general"]
    },
    {
      id: "osfed",
      icon: Puzzle,
      title: "OSFED (Other Specified Feeding or Eating Disorder)",
      description: "Includes atypical presentations and subthreshold eating disorders that don't meet full diagnostic criteria but cause significant distress. Just as serious and deserving of treatment as formally diagnosed disorders.",
      link: "/conditions/osfed",
      category: "diagnosed",
      population: ["general"]
    },
    {
      id: "orthorexia",
      icon: Sparkles,
      title: "Orthorexia",
      description: "Obsession with 'healthy' or 'clean' eating that becomes consuming and rigid. Often disguised as wellness but creates distress, social isolation, and nutritional imbalances. A growing concern in diet culture.",
      link: "/conditions/orthorexia",
      category: "other",
      population: ["general"]
    },
    {
      id: "disordered-eating",
      icon: Heart,
      title: "Disordered Eating",
      description: "A range of irregular eating patterns and behaviors that may not meet diagnostic criteria but cause distress. Extremely common in diet culture—you don't need a diagnosis to deserve help.",
      link: "/conditions/disordered-eating",
      category: "other",
      population: ["general"]
    },
    {
      id: "emotional-eating",
      icon: Brain,
      title: "Emotional Eating / Compulsive Overeating",
      description: "Using food to cope with emotions, stress, or distress—often followed by shame and guilt. A learned coping mechanism that can be healed through addressing root causes and building emotional capacity.",
      link: "/conditions/emotional-eating",
      category: "other",
      population: ["general"]
    },
    {
      id: "body-dysmorphia",
      icon: Eye,
      title: "Body Dysmorphia (Body Dysmorphic Disorder)",
      description: "Obsessive preoccupation with perceived flaws in appearance that others don't see. Often co-occurs with eating disorders. Highly treatable with specialized therapy like CBT and ERP.",
      link: "/conditions/body-dysmorphia",
      category: "related",
      population: ["general"]
    },
    {
      id: "exercise-addiction",
      icon: Dumbbell,
      title: "Exercise Addiction / Compulsive Exercise",
      description: "Rigid, compulsive exercise that continues despite negative consequences. Often praised as 'dedication' in fitness culture but causes physical and psychological harm. Frequently co-occurs with eating disorders.",
      link: "/conditions/exercise-addiction",
      category: "related",
      population: ["general", "athletes"]
    },
    {
      id: "co-occurring-issues",
      icon: GitBranch,
      title: "Co-Occurring Mental Health Issues",
      description: "Eating disorders rarely exist alone—they frequently co-occur with depression, anxiety, trauma, OCD, substance use, and other conditions. Integrated treatment addressing all issues simultaneously is most effective.",
      link: "/conditions/co-occurring-issues",
      category: "related",
      population: ["general"]
    },
    {
      id: "eating-disorders-men",
      icon: User,
      title: "Eating Disorders in Men",
      description: "At least 25% of people with eating disorders are men, yet they face stigma, underdiagnosis, and lack of appropriate treatment. Men experience all types of eating disorders and deserve specialized, affirming care.",
      link: "/conditions/men-eating-disorders",
      category: "population",
      population: ["men"]
    },
    {
      id: "eating-disorders-lgbtqia",
      icon: Rainbow,
      title: "Eating Disorders in LGBTQIA+ Individuals",
      description: "LGBTQIA+ people face significantly higher eating disorder risk due to minority stress, discrimination, and unique body image pressures. Affirming, knowledgeable treatment addressing these factors is essential.",
      link: "/conditions/lgbtqia-eating-disorders",
      category: "population",
      population: ["lgbtqia"]
    },
    {
      id: "eating-disorders-athletes",
      icon: Trophy,
      title: "Eating Disorders in Athletes",
      description: "Athletes face unique eating disorder risks from performance pressure, weight requirements, sport culture, and body scrutiny. Specialized treatment can support recovery while honoring athletic identity and facilitating return to sport.",
      link: "/conditions/athletes-eating-disorders",
      category: "population",
      population: ["athletes"]
    }
  ];

  const categories = [
    { value: "all", label: "All Conditions" },
    { value: "diagnosed", label: "Diagnosed Eating Disorders" },
    { value: "other", label: "Other Eating Issues" },
    { value: "related", label: "Related Conditions" },
    { value: "population", label: "Population-Specific" }
  ];

  const populations = [
    { value: "all", label: "All Populations" },
    { value: "men", label: "Men" },
    { value: "lgbtqia", label: "LGBTQIA+" },
    { value: "athletes", label: "Athletes" }
  ];

  const filteredCards = conditionCards.filter(card => {
    const matchesSearch = searchQuery === "" || 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || card.category === selectedCategory;
    
    const matchesPopulation = selectedPopulation === "all" || 
      card.population.includes(selectedPopulation);

    return matchesSearch && matchesCategory && matchesPopulation;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedPopulation("all");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Eating Disorders We Treat | Beyond Eating Recovery Portland & Vancouver</title>
        <meta 
          name="description" 
          content="Comprehensive eating disorder treatment for anorexia, bulimia, binge eating, ARFID, orthorexia, and more. Weight-neutral, HAES®-aligned care throughout Oregon and Washington. Call 360-726-4141." 
        />
        <meta name="keywords" content="eating disorder treatment, anorexia treatment Portland, bulimia therapy Vancouver WA, binge eating disorder help, ARFID treatment, orthorexia counseling, eating disorder types, HAES therapist, weight-neutral treatment, telehealth Oregon Washington" />
        <link rel="canonical" href="https://beyondeatingrecovery.com/conditions" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id": "https://beyondeatingrecovery.com/conditions#webpage",
            "url": "https://beyondeatingrecovery.com/conditions",
            "name": "Eating Disorders We Treat",
            "description": "Comprehensive guide to eating disorders treated at Beyond Eating Recovery",
            "specialty": "Eating Disorder Treatment",
            "about": [
              {
                "@type": "MedicalCondition",
                "name": "Anorexia Nervosa",
                "alternateName": "Anorexia"
              },
              {
                "@type": "MedicalCondition",
                "name": "Bulimia Nervosa",
                "alternateName": "Bulimia"
              },
              {
                "@type": "MedicalCondition",
                "name": "Binge Eating Disorder",
                "alternateName": "BED"
              },
              {
                "@type": "MedicalCondition",
                "name": "ARFID",
                "alternateName": "Avoidant/Restrictive Food Intake Disorder"
              },
              {
                "@type": "MedicalCondition",
                "name": "Orthorexia"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Eating Disorders We Treat at Beyond Eating Recovery",
            "description": "Comprehensive list of eating disorders and related conditions treated at Beyond Eating Recovery in Portland, OR and Vancouver, WA",
            "numberOfItems": 15,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Anorexia Nervosa",
                  "url": "https://beyondeatingrecovery.com/conditions/anorexia-nervosa"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Bulimia Nervosa",
                  "url": "https://beyondeatingrecovery.com/conditions/bulimia-nervosa"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Binge Eating Disorder",
                  "url": "https://beyondeatingrecovery.com/conditions/binge-eating-disorder"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Atypical Anorexia Nervosa",
                  "url": "https://beyondeatingrecovery.com/conditions/atypical-anorexia"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "ARFID (Avoidant/Restrictive Food Intake Disorder)",
                  "url": "https://beyondeatingrecovery.com/conditions/arfid"
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "OSFED (Other Specified Feeding or Eating Disorder)",
                  "url": "https://beyondeatingrecovery.com/conditions/osfed"
                }
              },
              {
                "@type": "ListItem",
                "position": 7,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Orthorexia",
                  "url": "https://beyondeatingrecovery.com/conditions/orthorexia"
                }
              },
              {
                "@type": "ListItem",
                "position": 8,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Disordered Eating",
                  "url": "https://beyondeatingrecovery.com/conditions/disordered-eating"
                }
              },
              {
                "@type": "ListItem",
                "position": 9,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Emotional Eating",
                  "url": "https://beyondeatingrecovery.com/conditions/emotional-eating"
                }
              },
              {
                "@type": "ListItem",
                "position": 10,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Body Dysmorphic Disorder",
                  "url": "https://beyondeatingrecovery.com/conditions/body-dysmorphia"
                }
              },
              {
                "@type": "ListItem",
                "position": 11,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Exercise Addiction",
                  "url": "https://beyondeatingrecovery.com/conditions/exercise-addiction"
                }
              },
              {
                "@type": "ListItem",
                "position": 12,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Co-Occurring Mental Health Issues",
                  "url": "https://beyondeatingrecovery.com/conditions/co-occurring-issues"
                }
              },
              {
                "@type": "ListItem",
                "position": 13,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Eating Disorders in Men",
                  "url": "https://beyondeatingrecovery.com/conditions/men-eating-disorders"
                }
              },
              {
                "@type": "ListItem",
                "position": 14,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Eating Disorders in LGBTQIA+ Individuals",
                  "url": "https://beyondeatingrecovery.com/conditions/lgbtqia-eating-disorders"
                }
              },
              {
                "@type": "ListItem",
                "position": 15,
                "item": {
                  "@type": "MedicalCondition",
                  "name": "Eating Disorders in Athletes",
                  "url": "https://beyondeatingrecovery.com/conditions/athletes-eating-disorders"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <BreadcrumbSchema />
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Eating Disorders We Treat
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Eating disorders take many forms and affect people of all genders, ages, sizes, and backgrounds. At Beyond Eating Recovery, we provide specialized, compassionate treatment for the full spectrum of eating disorders and related conditions. Our weight-neutral, HAES®-aligned approach addresses both symptoms and root causes, helping you build a peaceful relationship with food and body throughout Oregon and Washington.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-card border rounded-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search eating disorders by name or symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="mb-4">
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Filter by Condition Type
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Badge
                  key={cat.value}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  {cat.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Population Filters */}
          <div className="mb-4">
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Filter by Population
            </label>
            <div className="flex flex-wrap gap-2">
              {populations.map((pop) => (
                <Badge
                  key={pop.value}
                  variant={selectedPopulation === pop.value ? "default" : "outline"}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedPopulation(pop.value)}
                >
                  {pop.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(searchQuery || selectedCategory !== "all" || selectedPopulation !== "all") && (
            <div className="flex items-center justify-between pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Showing {filteredCards.length} of {conditionCards.length} conditions
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="gap-2"
              >
                <X className="h-4 w-4" />
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Condition Cards Grid */}
      <section className="container mx-auto px-4 pb-16 max-w-7xl">
        {filteredCards.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              No conditions match your search criteria.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((condition, index) => {
            const IconComponent = condition.icon;
            return (
              <Card 
                key={condition.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="pt-6 pb-6 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {condition.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {condition.description}
                  </p>
                  <Button asChild className="w-full mt-auto group-hover:scale-105 transition-transform">
                    <Link to={condition.link} className="flex items-center justify-center gap-2">
                      Learn More
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
          </div>
        )}
      </section>

      {/* Our Approach Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Our Treatment Philosophy
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            At Beyond Eating Recovery, we provide evidence-based, compassionate treatment grounded in:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Health At Every Size® (HAES®):</strong>
                      <span className="text-muted-foreground"> Weight-neutral approach respecting all bodies</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Intuitive Eating:</strong>
                      <span className="text-muted-foreground"> Rebuilding trust with your body's wisdom</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Trauma-informed care:</strong>
                      <span className="text-muted-foreground"> Understanding eating disorders as responses to distress</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Social justice orientation:</strong>
                      <span className="text-muted-foreground"> Addressing systemic factors (diet culture, weight stigma, discrimination)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">LGBTQIA+ affirmation:</strong>
                      <span className="text-muted-foreground"> Celebrating all identities and experiences</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Individualized treatment:</strong>
                      <span className="text-muted-foreground"> No one-size-fits-all approach</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="hover-scale">
              <Link to="/our-approach">Learn More About Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you or someone you care about is struggling with an eating disorder or disordered eating, we're here to help. Contact Beyond Eating Recovery today to schedule a consultation.
          </p>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:360-726-4141" className="text-primary hover:underline text-lg font-bold">
                      360-726-4141
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Office Hours</p>
                    <p className="text-muted-foreground text-sm">Monday-Friday<br/>9am-5pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telehealth</p>
                    <p className="text-muted-foreground text-sm">Available throughout Oregon and Washington</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="hover-scale">
              <Link to="/contact" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-scale">
              <Link to="/services">View Treatment Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Crisis Resources Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-destructive mb-4">
              Need Immediate Support?
            </h2>
            <p className="text-lg text-muted-foreground">
              If you're in crisis or experiencing a medical emergency, help is available now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-destructive/30 hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-destructive mb-1">988 Suicide & Crisis Lifeline</h3>
                    <p className="text-muted-foreground text-sm mb-2">Call or text 988</p>
                    <p className="text-muted-foreground text-xs">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/30 hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-destructive mb-1">NEDA Helpline</h3>
                    <p className="text-muted-foreground text-sm mb-2">1-800-931-2237</p>
                    <p className="text-muted-foreground text-xs">Monday-Thursday 9am-9pm ET, Friday 9am-5pm ET</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/30 hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-destructive mb-1">Crisis Text Line</h3>
                    <p className="text-muted-foreground text-sm mb-2">Text "NEDA" to 741741</p>
                    <p className="text-muted-foreground text-xs">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/30 hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-destructive mb-1">Medical Emergency</h3>
                    <p className="text-muted-foreground text-sm mb-2">Call 911</p>
                    <p className="text-muted-foreground text-xs">Or go to your nearest emergency room</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Conditions;