import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Sparkles, Shield, Target, CheckCircle } from "lucide-react";
import anneCuthbert from "@/assets/anne-cuthbert.jpg";
import baileyBenn from "@/assets/bailey-benn.jpg";

const About = () => {
  const philosophyPoints = [
    { icon: CheckCircle, text: "Non-diet approach" },
    { icon: Heart, text: "Health At Every Size (HAES)" },
    { icon: Sparkles, text: "Intuitive Eating framework" },
    { icon: Users, text: "Body-positive, affirming environment" },
    { icon: Shield, text: "LGBTQIA+ inclusive" },
    { icon: Target, text: "Trauma-informed care" }
  ];

  const teamMembers = [
    {
      name: "Anne Cuthbert, MA, LPC, LMHC",
      title: "Founder & Clinical Director",
      image: anneCuthbert,
      bio: "Anne brings over 15 years of experience in eating disorder treatment, specializing in the Health At Every Size approach. She is passionate about helping clients break free from diet culture and develop compassionate relationships with food and their bodies."
    },
    {
      name: "Bailey Benn",
      title: "Team Member",
      image: baileyBenn,
      bio: "Bailey is dedicated to creating safe, affirming spaces for clients of all backgrounds. With specialized training in trauma-informed care and LGBTQIA+ affirming practices, Bailey helps clients navigate their unique healing journeys."
    }
  ];

  const approachPoints = [
    "We work from the inside out",
    "Address underlying emotional challenges",
    "Help you learn to feel emotions again",
    "Create safe, loving spaces for acceptance",
    "Never prescribe diets or shame bodies"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compassionate, Evidence-Based Eating Disorder Recovery
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            We believe that real healing happens when you address the root causes, not just the symptoms.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-lg text-foreground/80 pt-1">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                  <p className="text-accent font-semibold">{member.title}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Approach
          </h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-white/90">
            How we're different:
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {approachPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Ready to start your healing journey?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the first step toward compassionate, evidence-based care that honors who you are.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
            Book a Free Consultation Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;