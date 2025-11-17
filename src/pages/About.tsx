import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Sparkles, Shield, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import anneCuthbert from "@/assets/anne-cuthbert.jpg";
import baileyBenn from "@/assets/bailey-benn-new.webp";
import alyssaPataki from "@/assets/alyssa-pataki.webp";
import kiandraCole from "@/assets/kiandra-cole.webp";
import rachelBennett from "@/assets/rachel-bennett.webp";

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
      link: "/about/anne-cuthbert",
      bio: "With 23+ years of experience, Anne specializes in eating disorder treatment using HAES, Intuitive Eating, and fat acceptance. Author of 'If Your Hunger Could Talk,' she's dedicated to helping clients find freedom from diet culture."
    },
    {
      name: "Bailey Benn, MA, LPC, LMHC",
      title: "Licensed Professional Counselor",
      image: baileyBenn,
      link: "/about/bailey-benn",
      bio: "Bailey provides LGBTQIA+ affirming, trauma-informed therapy specializing in eating disorders, body image, and identity. Creating safe spaces for healing is at the heart of Bailey's practice."
    },
    {
      name: "Alyssa Pataki, MA, LMFT",
      title: "Licensed Marriage & Family Therapist",
      image: alyssaPataki,
      link: "/about/alyssa-pataki",
      bio: "Alyssa specializes in relational healing, couples therapy, and eating disorder treatment. With training in EFT and EMDR, she helps clients heal attachment wounds and transform relationships."
    },
    {
      name: "Kiandra Cole, MA",
      title: "Associate Therapist",
      image: kiandraCole,
      link: "/about/kiandra-cole",
      bio: "Kiandra brings warmth and authenticity to therapy, specializing in eating disorders, body image, and LGBTQIA+ affirming care. Personal recovery experience informs her compassionate approach."
    },
    {
      name: "Rachel Bennett, MA",
      title: "QMHP-A Therapist | Professional Counselor Associate",
      image: rachelBennett,
      link: "/about/rachel-bennett",
      bio: "Rachel offers an eclectic approach integrating IFS, CBT, EFT, and ACT from a person-centered lens. With personal recovery experience and body positive programming expertise, she creates truly safe spaces."
    },
    {
      name: "Annie Calhoun Randall, MA, NTP",
      title: "Professional Counselor Associate | Certified Nutrition Therapy Practitioner",
      image: "/placeholder.svg",
      link: "/about/annie-calhoun-randall",
      bio: "Annie combines counseling, nutrition therapy, and athletic experience. Specializing in athlete eating disorders, she uses body-centered approaches (EFIT, SE, IFS) informed by her own recovery journey."
    },
    {
      name: "Sara Kranich, MA",
      title: "Associate Therapist | Mindfulness Specialist",
      image: "/placeholder.svg",
      link: "/about/sara-kranich",
      bio: "Sara integrates mindfulness and meditation into trauma-informed, person-centered therapy. Drawing from personal recovery experience, she guides clients toward self-awareness and self-acceptance through HAES principles."
    },
    {
      name: "Stephanie Okumura, MS, RDN",
      title: "Registered Dietitian Nutritionist",
      image: "/placeholder.svg",
      link: "/about/stephanie-okumura",
      bio: "Stephanie provides weight-neutral, culturally responsive nutrition counseling. As a HAES® practitioner and Intuitive Eating specialist with Japanese heritage, she honors all cultural food traditions in eating disorder recovery."
    }
  ];

  const supportStaff = [
    {
      name: "Michelle Commons",
      title: "Admin Support | Your First Point of Contact",
      image: "/placeholder.svg",
      link: "/about/michelle-commons",
      bio: "Michelle brings friendly, compassionate administrative support to Beyond Eating Recovery. With over two decades in personal development, she's passionate about helping people become better versions of themselves. When you reach out, you'll likely connect with Michelle first."
    },
    {
      name: "Michelle Sullins",
      title: "Billing Support | Certified Professional Medical Coder",
      image: "/placeholder.svg",
      link: "/about/michelle-sullins",
      bio: "With over 10 years as a Certified Professional Medical Coder, Michelle ensures accurate billing and maximizes your insurance benefits. She navigates the complex world of medical coding and insurance so you can focus on your healing journey."
    },
    {
      name: "Mary Cooper",
      title: "Marketing Administrator",
      image: "/placeholder.svg",
      link: "/about/mary-cooper",
      bio: "Mary works behind the scenes connecting people with eating disorder treatment through thoughtful, ethical marketing and community outreach. She ensures accurate information reaches those seeking compassionate, evidence-based care in Portland and Vancouver."
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Meet Our Team
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Our diverse team of therapists and dietitian brings together specialized expertise, lived experience, and deep commitment to weight-neutral, affirming care.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Link key={index} to={member.link} className="block group">
                <Card className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-colors">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-primary text-lg mb-2">{member.name}</CardTitle>
                    <p className="text-accent font-medium text-sm">{member.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-center text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary group-hover:text-accent transition-colors font-medium text-sm">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Support Staff
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Making your experience welcoming and seamless from your first contact.
          </p>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {supportStaff.map((staff, index) => (
              <Link key={index} to={staff.link} className="block group">
                <Card className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-colors">
                      <img 
                        src={staff.image} 
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-primary text-lg mb-2">{staff.name}</CardTitle>
                    <p className="text-accent font-medium text-sm">{staff.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-center text-sm leading-relaxed mb-4">
                      {staff.bio}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary group-hover:text-accent transition-colors font-medium text-sm">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
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