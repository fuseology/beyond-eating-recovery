import { Phone, GraduationCap, Heart, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Link } from "react-router-dom";
import ginaImage from "@/assets/gina-parisi.webp";
import { Helmet } from "react-helmet";

const GinaParisi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gina Parisi | Counseling Student Intern at Beyond Eating Recovery</title>
        <meta name="description" content="Gina Parisi is a graduate student intern at Beyond Eating Recovery, offering somatic, mindfulness-based, HAES-aligned therapy for eating disorder recovery in Portland and Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about/gina-parisi" />
        <meta property="og:title" content="Gina Parisi | Counseling Student Intern at Beyond Eating Recovery" />
        <meta property="og:description" content="Graduate student intern offering somatic, mindfulness-based, HAES-aligned therapy for eating disorder recovery in Portland and Vancouver." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/about/gina-parisi" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/gina-parisi.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gina Parisi | Counseling Student Intern at Beyond Eating Recovery" />
        <meta name="twitter:description" content="Graduate student intern offering somatic, mindfulness-based, HAES-aligned therapy for eating disorder recovery in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/gina-parisi.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gina Parisi",
            "jobTitle": "Counseling Student Intern",
            "description": "Graduate student intern completing a Master of Arts in Marriage, Couples, and Family Therapy, specializing in somatic, mindfulness-based, HAES-aligned eating disorder therapy.",
            "url": "https://www.beyondeatingrecovery.com/about/gina-parisi",
            "image": "https://www.beyondeatingrecovery.com/gina-parisi.webp",
            "worksFor": {
              "@type": "MedicalBusiness",
              "name": "Beyond Eating Recovery",
              "url": "https://www.beyondeatingrecovery.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1000 Broadway Suite 215",
                "addressLocality": "Vancouver",
                "addressRegion": "WA",
                "postalCode": "98660",
                "addressCountry": "US"
              },
              "telephone": "+1-360-726-4141"
            },
            "workLocation": {
              "@type": "Place",
              "name": "Beyond Eating Recovery - Vancouver Office",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1000 Broadway Suite 215",
                "addressLocality": "Vancouver",
                "addressRegion": "WA",
                "postalCode": "98660",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Portland", "containedInPlace": { "@type": "State", "name": "Oregon" } },
              { "@type": "City", "name": "Vancouver", "containedInPlace": { "@type": "State", "name": "Washington" } },
              { "@type": "State", "name": "Oregon" },
              { "@type": "State", "name": "Washington" }
            ],
            "alumniOf": [
              { "@type": "CollegeOrUniversity", "name": "College of Charleston" },
              { "@type": "CollegeOrUniversity", "name": "University of Utah" },
              { "@type": "CollegeOrUniversity", "name": "Lewis & Clark College" }
            ],
            "knowsAbout": [
              "Eating Disorders",
              "Somatic Therapy",
              "Mindfulness",
              "Health at Every Size (HAES)",
              "Experiential Therapy",
              "Body Trust",
              "Marriage, Couples, and Family Therapy"
            ],
            "telephone": "+1-360-726-4141"
          })}
        </script>
      </Helmet>
      <BreadcrumbSchema />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-2/5">
                <img
                  src={ginaImage}
                  alt="Gina Parisi - Counseling Student Intern at Beyond Eating Recovery"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  Gina Parisi
                </h1>

                <p className="text-xl md:text-2xl text-accent font-medium">
                  Counseling Student Intern
                </p>

                <p className="text-lg text-foreground leading-relaxed">
                  Gina's own recovery journey informs her belief that every person is already whole, and that problems in our lives result from a disconnection to this wholeness. She offers a compassionate, nonjudgmental space grounded in somatic awareness, mindfulness, Body Trust®, and Health at Every Size® principles. Gina has worked with athletes for 15 years and specializes in athlete eating disorders.
                </p>

                <div className="pt-4 space-y-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                  <p className="text-primary text-lg font-semibold">
                    <Phone className="inline-block mr-2 h-5 w-5" />
                    (360) 726-4141
                  </p>
                  <p className="text-muted-foreground">
                    Monday-Friday, 9am-5pm | Portland, OR & Vancouver, WA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Gina */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            About Gina
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              Gina believes that every person is already whole, and that problems in our lives result from a disconnection to this wholeness. Therapy is a space to support your process of embodiment, healing, and deeper connection to yourself.
            </p>
            <p>
              From her perspective, our relationships with food and body are often meaningful coping strategies that reflect deeper emotional, relational, and lived experiences. In her work, she strives to offer a compassionate, nonjudgmental space where you can gently explore these layers with curiosity and care.
            </p>
          </div>
        </div>
      </section>

      {/* Therapeutic Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Therapeutic Approach
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Sparkles className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Somatic (Body-Based) Awareness</h3>
                <p className="text-foreground">
                  Gina draws on over 10 years of somatic practice to help clients turn toward present-moment experience with curiosity, allowing new possibilities for change to emerge from within.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Mindfulness & Experiential Therapy</h3>
                <p className="text-foreground">
                  Rather than trying to "fix" what feels wrong, Gina supports clients in slowing down and noticing what's already alive in their experience through mindfulness and experiential practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Health at Every Size® (HAES)</h3>
                <p className="text-foreground">
                  As a certified Body Trust Provider®, Gina works from HAES principles, honoring all bodies and supporting clients in cultivating trust in their own embodied experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Relational & Systems-Oriented Lens</h3>
                <p className="text-foreground">
                  Gina pays close attention to how your identities and the broader contexts you live within shape your lived experience, creating a therapeutic space that is inclusive, nurturing, and collaborative.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              Gina aims to create a therapeutic space where all parts of you are welcome — one that is inclusive, nurturing, and collaborative.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Education & Training
          </h2>

          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
                <div className="space-y-3 text-foreground">
                  <div>
                    <p className="font-semibold">Master of Arts in Marriage, Couples, and Family Therapy (In Progress)</p>
                    <p className="text-muted-foreground">Lewis & Clark College — with a certification in Eating Disorder Treatment</p>
                  </div>
                  <div>
                    <p className="font-semibold">Master of Science in Exercise Science</p>
                    <p className="text-muted-foreground">University of Utah</p>
                  </div>
                  <div>
                    <p className="font-semibold">Bachelor of Science</p>
                    <p className="text-muted-foreground">College of Charleston</p>
                  </div>
                  <div>
                    <p className="font-semibold">Certified Body Trust Provider®</p>
                    <p className="text-muted-foreground">10+ years of training in somatic practices and meditation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Professional Background
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/30 p-8 rounded-lg">
              <p className="text-foreground text-lg leading-relaxed">
                Gina brings 15 years of experience working with athletes as a sport physiotherapist, along with more than a decade of personal somatic and meditation practice. This background informs both her clinical sensibility and her deep appreciation for the wisdom of the body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-foreground">
              If you're considering eating disorder treatment or have questions about our services, we're here to help. Reach out today—we're ready to support you.
            </p>

            <div className="bg-secondary/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Contact Information</h3>
              <div className="space-y-2 text-foreground text-lg">
                <p><strong>Phone:</strong> (360) 726-4141</p>
                <p><strong>Office Hours:</strong> Monday-Friday, 9am-5pm</p>
                <p><strong>Location:</strong> Serving Portland, OR and Vancouver, WA</p>
                <p><strong>Telehealth:</strong> Available throughout Oregon and Washington</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="tel:360-726-4141">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                  Schedule Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default GinaParisi;
