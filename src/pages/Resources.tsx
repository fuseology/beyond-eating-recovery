import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, Heart, Users, Scale, Home, Sparkles, 
  Brain, Video, Download, ExternalLink, Phone 
} from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Resources = () => {
  const [email, setEmail] = useState("");

  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: "Understanding Intuitive Eating: A Beginner's Guide",
      excerpt: "Learn the foundational principles of intuitive eating and how to start listening to your body's natural hunger and fullness cues.",
      category: "Intuitive Eating",
      link: "/blog/intuitive-eating-guide"
    },
    {
      id: 2,
      image: blog2,
      title: "5 Ways to Practice Body Acceptance Today",
      excerpt: "Practical, compassionate strategies you can use right now to start building a more positive relationship with your body.",
      category: "Body Image",
      link: "/blog/body-acceptance-practices"
    },
    {
      id: 3,
      image: blog3,
      title: "How to Support a Loved One with an Eating Disorder",
      excerpt: "Family members and friends play a crucial role in recovery. Here's how to provide supportive, non-judgmental care.",
      category: "Family Support",
      link: "/blog/supporting-loved-ones"
    }
  ];

  const popularTopics = [
    { icon: Brain, title: "Understanding Eating Disorders", link: "#eating-disorders" },
    { icon: Heart, title: "Body Image & Body Positivity", link: "#body-positivity" },
    { icon: Users, title: "Intuitive Eating Guide", link: "#intuitive-eating" },
    { icon: Scale, title: "HAES Approach", link: "#haes" },
    { icon: Home, title: "Family Support Resources", link: "#family-support" },
    { icon: Sparkles, title: "Recovery Stories", link: "#recovery-stories" },
    { icon: Heart, title: "Coping Skills & Self-Care", link: "#coping-skills" },
    { icon: Video, title: "Virtual Therapy Guide", link: "#virtual-therapy" }
  ];

  const assessmentTools = [
    {
      title: "Eating Disorder Screening Questionnaire",
      description: "A confidential self-assessment to help identify potential concerns",
      link: "#screening"
    },
    {
      title: "Body Image Assessment",
      description: "Understand your relationship with your body and identify areas for healing",
      link: "#body-image"
    },
    {
      title: "Intuitive Eating Quiz",
      description: "Discover where you are on your intuitive eating journey",
      link: "#ie-quiz"
    },
    {
      title: "Do I Need Help? Guide",
      description: "Not sure if you should seek treatment? This guide can help",
      link: "#need-help"
    }
  ];

  const downloadables = [
    {
      title: "Notice of Privacy Practice",
      description: "Your rights and our responsibilities under HIPAA",
      type: "PDF Form",
      link: "/privacy-notice"
    },
    {
      title: "What is Intuitive Eating?",
      description: "Comprehensive guide to the 10 principles",
      type: "PDF Guide"
    },
    {
      title: "Supporting a Loved One with an Eating Disorder",
      description: "Family and friends guide",
      type: "PDF Guide"
    },
    {
      title: "HAES Principles Explained",
      description: "Understanding Health At Every Size",
      type: "PDF Guide"
    },
    {
      title: "Recovery Milestone Tracker",
      description: "Track your progress and celebrate wins",
      type: "Worksheet"
    },
    {
      title: "Self-Care Planning Worksheet",
      description: "Create your personalized self-care plan",
      type: "Worksheet"
    }
  ];

  const books = [
    {
      title: "Intuitive Eating",
      authors: "Evelyn Tribole & Elyse Resch",
      description: "The anti-diet bible that teaches you to trust your body's wisdom"
    },
    {
      title: "Health At Every Size",
      authors: "Linda Bacon",
      description: "The groundbreaking book that challenges weight-focused health paradigms"
    },
    {
      title: "Body Respect",
      authors: "Linda Bacon & Lucy Aphramor",
      description: "What conventional health books get wrong and how we can do better"
    },
    {
      title: "The Body Is Not an Apology",
      authors: "Sonya Renee Taylor",
      description: "Radical self-love in a world that says you're not enough"
    }
  ];

  const crisisResources = [
    {
      title: "National Eating Disorders Association (NEDA) Hotline",
      contact: "1-800-931-2237",
      description: "Free, confidential support available Monday-Thursday 11am-9pm ET, Friday 11am-5pm ET"
    },
    {
      title: "Crisis Text Line",
      contact: "Text 'NEDA' to 741741",
      description: "24/7 crisis support via text message"
    },
    {
      title: "NEDA Navigator",
      contact: "Visit MyNEDANavigator.org",
      description: "Connect with trained volunteers for support and resources"
    },
    {
      title: "988 Suicide & Crisis Lifeline",
      contact: "Call or text 988",
      description: "24/7 confidential support for anyone in crisis"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive recovery tips and updates in your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Recovery Resources & Educational Content
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Knowledge is power. Explore our library of articles, tools, and resources to support your journey.
          </p>
        </div>
      </section>

      {/* Featured: 5 Steps Video Series */}
      <section className="py-16 bg-accent/10 border-y-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="bg-accent text-white mb-4 text-sm">Featured Free Resource</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  5 Steps to Exiting the Diet Roller Coaster
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Get Anne Cuthbert's free video series delivered to your inbox. Learn practical steps to end your obsession with food and weight, and find lasting peace and freedom with food and body image.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Video className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">5 educational videos delivered over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Video className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">Actionable steps you can practice immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Video className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">Compassionate, weight-neutral approach</span>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  asChild
                >
                  <Link to="/resources/5-steps-diet-roller-coaster">
                    Get Free Video Series
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-accent/20">
                <h3 className="text-xl font-semibold text-primary mb-4">What You'll Learn:</h3>
                <ol className="space-y-3 text-foreground/90">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent flex-shrink-0">1.</span>
                    <span>Understanding Diet Culture</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent flex-shrink-0">2.</span>
                    <span>Recognizing Your Patterns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent flex-shrink-0">3.</span>
                    <span>Challenging Food Rules</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent flex-shrink-0">4.</span>
                    <span>Healing Your Relationship with Your Body</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent flex-shrink-0">5.</span>
                    <span>Building Lasting Freedom</span>
                  </li>
                </ol>
                <p className="text-sm text-muted-foreground mt-6 italic">
                  💌 Videos delivered every few days so you have time to practice each step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-accent text-white">{post.category}</Badge>
                  <CardTitle className="text-xl text-primary">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    {post.excerpt}
                  </p>
                  <Button className="bg-accent hover:bg-accent/90 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Popular Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {popularTopics.map((topic, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <topic.icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="font-semibold text-foreground/90">{topic.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Assessment Tools */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Self-Assessment Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {assessmentTools.map((tool, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{tool.description}</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Take Assessment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Educational Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {downloadables.map((resource, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Download className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{resource.type}</p>
                      <p className="text-sm text-foreground/80 mb-3">{resource.description}</p>
                      {resource.link ? (
                        <Link to={resource.link}>
                          <Button size="sm" className="bg-accent hover:bg-accent/90">
                            View Page
                          </Button>
                        </Link>
                      ) : (
                        <Button size="sm" className="bg-accent hover:bg-accent/90">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos & Media */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Videos & Media
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-muted">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Is Food Really the Problem?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-muted">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Steps to Make Peace with Food"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Recommended Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {books.map((book, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{book.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {book.authors}</p>
                      <p className="text-sm text-foreground/80">{book.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Crisis Resources */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Support & Crisis Resources
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            If you're in crisis or need immediate support, these resources are available 24/7
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {crisisResources.map((resource, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{resource.title}</h3>
                      <p className="text-accent font-semibold mb-2">{resource.contact}</p>
                      <p className="text-sm text-white/80">{resource.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Need personalized support?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to help you on your unique recovery journey.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-2">
            <CardContent className="pt-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Stay Connected
              </h2>
              <p className="text-foreground/80 mb-6">
                Get recovery tips, new resources, and updates delivered to your inbox
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3 max-w-md mx-auto">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Resources;