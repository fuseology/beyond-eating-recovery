import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Sparkles, Shield, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import anneCuthbert from "@/assets/anne-cuthbert.jpg";
import baileyBenn from "@/assets/bailey-benn-new.webp";
import alyssaPataki from "@/assets/alyssa-pataki.webp";
import kiandraCole from "@/assets/kiandra-cole.webp";
import rachelBennett from "@/assets/rachel-bennett.webp";
import annieCalhounRandall from "@/assets/annie-calhoun-randall-new.jpg";
import saraKranich from "@/assets/sara-kranich.webp";
import stephanieOkumura from "@/assets/stephanie-okumura.webp";
import michelleCommons from "@/assets/michelle-commons.webp";
import michelleMeredith from "@/assets/michelle-meredith.png";
import maryCooper from "@/assets/mary-cooper.webp";
import emeryPederson from "@/assets/emery-pederson.webp";
import mackenzieStracke from "@/assets/mackenzie-stracke.jpg";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.beyondeatingrecovery.com/about#webpage",
    "url": "https://www.beyondeatingrecovery.com/about",
    "name": "About Our Team | Beyond Eating Recovery",
    "description": "Meet our compassionate team of eating disorder specialists in Portland & Vancouver. Licensed therapists and dietitians using HAES, intuitive eating, and trauma-informed approaches.",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "@id": "https://www.beyondeatingrecovery.com/#organization",
      "name": "Beyond Eating Recovery",
      "description": "Outpatient eating disorder treatment center providing compassionate, evidence-based therapy and nutrition counseling using Health At Every Size (HAES) and Intuitive Eating approaches.",
      "url": "https://www.beyondeatingrecovery.com",
      "telephone": "+1-360-726-4141",
      "email": "info@beyondeatingrecovery.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1000 Broadway Suite 215",
        "addressLocality": "Vancouver",
        "addressRegion": "WA",
        "postalCode": "98660",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.6280,
        "longitude": -122.6739
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Portland",
          "containedInPlace": { "@type": "State", "name": "Oregon" }
        },
        {
          "@type": "City",
          "name": "Vancouver",
          "containedInPlace": { "@type": "State", "name": "Washington" }
        },
        { "@type": "State", "name": "Oregon" },
        { "@type": "State", "name": "Washington" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "medicalSpecialty": [
        "Eating Disorders",
        "Anorexia Nervosa",
        "Bulimia Nervosa",
        "Binge Eating Disorder",
        "ARFID",
        "Body Image Issues"
      ],
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Eating Disorder Therapy",
          "description": "Individual therapy for eating disorders using evidence-based approaches"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Nutrition Counseling",
          "description": "Registered dietitian services using HAES and Intuitive Eating"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Anne Cuthbert",
        "jobTitle": "MA, LPC, LMHC",
        "description": "Founder and eating disorder specialist with expertise in anorexia, bulimia, and binge eating disorder treatment"
      },
      "employee": [
        { "@type": "Person", "name": "Bailey Benn", "jobTitle": "MA, LPC, LMHC" },
        { "@type": "Person", "name": "Alyssa Pataki", "jobTitle": "MA, LMFT" },
        { "@type": "Person", "name": "Kiandra Cole", "jobTitle": "MA" },
        { "@type": "Person", "name": "Rachel Bennett", "jobTitle": "MA" },
        { "@type": "Person", "name": "Annie Calhoun Randall", "jobTitle": "MA" },
        { "@type": "Person", "name": "Sara Kranich", "jobTitle": "MA" },
        { "@type": "Person", "name": "Stephanie Okumura", "jobTitle": "MS, RDN" },
        { "@type": "Person", "name": "Mackenzie Stracke", "jobTitle": "Counseling Student Intern" },
        { "@type": "Person", "name": "Michelle Commons", "jobTitle": "Support Staff" },
        { "@type": "Person", "name": "Michelle Meredith", "jobTitle": "Support Staff" },
        { "@type": "Person", "name": "Mary Cooper", "jobTitle": "Support Staff" },
        { "@type": "Person", "name": "Emery Pederson", "jobTitle": "Support Staff" }
      ],
      "sameAs": [
        "https://www.facebook.com/beyondeatingrecovery",
        "https://www.instagram.com/beyondeatingrecovery"
      ]
    }
  };

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
      image: annieCalhounRandall,
      link: "/about/annie-calhoun-randall",
      bio: "Annie combines counseling, nutrition therapy, and athletic experience. Specializing in athlete eating disorders, she uses body-centered approaches (EFIT, SE, IFS) informed by her own recovery journey."
    },
    {
      name: "Sara Kranich, MA",
      title: "Associate Therapist | Mindfulness Specialist",
      image: saraKranich,
      link: "/about/sara-kranich",
      bio: "Sara integrates mindfulness and meditation into trauma-informed, person-centered therapy. Drawing from personal recovery experience, she guides clients toward self-awareness and self-acceptance through HAES principles."
    },
    {
      name: "Stephanie Okumura, MS, RDN",
      title: "Registered Dietitian Nutritionist",
      image: stephanieOkumura,
      link: "/about/stephanie-okumura",
      bio: "Stephanie provides weight-neutral, culturally responsive nutrition counseling. As a HAES® practitioner and Intuitive Eating specialist with Japanese heritage, she honors all cultural food traditions in eating disorder recovery."
    },
    {
      name: "Mackenzie Stracke",
      title: "Counseling Student Intern",
      image: mackenzieStracke,
      link: "/about/mackenzie-stracke",
      bio: "Mackenzie is a graduate student intern working toward her MA in Counseling at Western Seminary. Her own recovery journey shapes her trauma-informed, HAES-aligned approach to helping clients build resilience and self-compassion."
    }
  ];

  const supportStaff = [
    {
      name: "Michelle Commons",
      title: "Admin Support | Your First Point of Contact",
      image: michelleCommons,
      link: "/about/michelle-commons",
      bio: "Michelle brings friendly, compassionate administrative support to Beyond Eating Recovery. With over two decades in personal development, she's passionate about helping people become better versions of themselves. When you reach out, you'll likely connect with Michelle first."
    },
    {
      name: "Michelle Meredith",
      title: "Billing Support | Certified Professional Medical Coder",
      image: michelleMeredith,
      link: "/about/michelle-meredith",
      bio: "With over 10 years as a Certified Professional Medical Coder, Michelle ensures accurate billing and maximizes your insurance benefits. She navigates the complex world of medical coding and insurance so you can focus on your healing journey."
    },
    {
      name: "Mary Cooper",
      title: "Marketing Administrator",
      image: maryCooper,
      link: "/about/mary-cooper",
      bio: "Mary works behind the scenes connecting people with eating disorder treatment through thoughtful, ethical marketing and community outreach. She ensures accurate information reaches those seeking compassionate, evidence-based care in Portland and Vancouver."
    },
    {
      name: "Emery Pederson",
      title: "Admin Support",
      image: emeryPederson,
      link: "/about/emery-pederson",
      bio: "Emery creates welcoming, inclusive environments for clients seeking eating disorder treatment. With a BS in Psychology from WSU-Vancouver and research experience in eating disorders and mental health, she ensures every person feels seen, valued, and supported from their first interaction."
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
      <Helmet>
        <title>About Our Team | Eating Disorder Specialists in Portland & Vancouver</title>
        <meta 
          name="description" 
          content="Meet our compassionate eating disorder treatment team in Portland & Vancouver. Licensed therapists and dietitians using HAES, intuitive eating, and trauma-informed care." 
        />
        <meta name="keywords" content="eating disorder therapist Portland, eating disorder specialist Vancouver WA, HAES therapist, intuitive eating counselor, trauma-informed eating disorder treatment" />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <BreadcrumbSchema />
      <Header />
      <Breadcrumbs />
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
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6" asChild>
            <Link to="/contact">Book a Free Consultation Today</Link>
          </Button>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default About;