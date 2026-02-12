import { Phone, GraduationCap, Heart, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Link } from "react-router-dom";
import mackenzieImage from "@/assets/mackenzie-stracke.jpg";
import { Helmet } from "react-helmet";

const MackenzieStracke = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Mackenzie Stracke | Counseling Student Intern at Beyond Eating Recovery</title>
        <meta name="description" content="Mackenzie Stracke is a graduate student intern at Beyond Eating Recovery, offering trauma-informed, HAES-aligned therapy for eating disorder recovery in Portland and Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about/mackenzie-stracke" />
        <meta property="og:title" content="Mackenzie Stracke | Counseling Student Intern at Beyond Eating Recovery" />
        <meta property="og:description" content="Graduate student intern offering trauma-informed, HAES-aligned therapy for eating disorder recovery in Portland and Vancouver." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/about/mackenzie-stracke" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/mackenzie-stracke.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mackenzie Stracke | Counseling Student Intern at Beyond Eating Recovery" />
        <meta name="twitter:description" content="Graduate student intern offering trauma-informed, HAES-aligned therapy for eating disorder recovery in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/mackenzie-stracke.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mackenzie Stracke",
            "jobTitle": "Counseling Student Intern",
            "description": "Graduate student intern working toward a Master of Arts in Counseling, specializing in trauma-informed, HAES-aligned eating disorder therapy.",
            "url": "https://www.beyondeatingrecovery.com/about/mackenzie-stracke",
            "image": "https://www.beyondeatingrecovery.com/mackenzie-stracke.jpg",
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
              {
                "@type": "CollegeOrUniversity",
                "name": "Western Seminary"
              },
              {
                "@type": "EducationalOrganization",
                "name": "Integrative Studies Program"
              }
            ],
            "knowsAbout": [
              "Eating Disorders",
              "Trauma-Informed Care",
              "Health at Every Size (HAES)",
              "Emotionally Focused Therapy",
              "Person-Centered Therapy",
              "Body Image",
              "Self-Compassion"
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
              {/* Photo */}
              <div className="w-full md:w-2/5">
                <img 
                  src={mackenzieImage} 
                  alt="Mackenzie Stracke - Counseling Student Intern at Beyond Eating Recovery"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Info */}
              <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  Mackenzie Stracke
                </h1>
                
                <p className="text-xl md:text-2xl text-accent font-medium">
                  Counseling Student Intern
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Mackenzie is a graduate student intern working toward her Master of Arts in Counseling at Western Seminary. Her own journey of healing from an eating disorder shapes her passion for supporting others. She views therapy as a collaborative effort and loves walking alongside clients as they move through their own healing, offering empathy and understanding along the way.
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

      {/* About Mackenzie */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            About Mackenzie
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              Mackenzie believes that healing begins when someone feels genuinely seen and supported—and she looks forward to meeting you wherever you are in your journey. She works from a trauma-informed lens, recognizing the ways our past experiences influence who we are.
            </p>
            <p>
              Mackenzie's work is informed by the principles of Health at Every Size (HAES). She strives to create a space where clients of all body types feel valued and understood.
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
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Emotionally Focused Therapy</h3>
                <p className="text-foreground">
                  Mackenzie draws from Emotionally Focused Therapy (EFT) to help clients understand and process their emotions in a safe, supportive environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Person-Centered Therapy</h3>
                <p className="text-foreground">
                  Using Person-Centered Therapy, Mackenzie creates a collaborative space where clients can bring their whole selves, feel safe, and explore their emotions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Sparkles className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Trauma-Informed Care</h3>
                <p className="text-foreground">
                  Working from a trauma-informed lens, Mackenzie recognizes how past experiences shape who we are and approaches healing with sensitivity and understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Health at Every Size (HAES)</h3>
                <p className="text-foreground">
                  Mackenzie's work is informed by HAES principles, creating a space where clients of all body types feel valued, understood, and free from judgment.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              Mackenzie works with clients from all walks of life and strives to create a welcoming space where clients can bring their whole selves, feel safe, and explore their emotions while building resilience and self-compassion.
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
                    <p className="font-semibold">Master of Arts in Counseling (In Progress)</p>
                    <p className="text-muted-foreground">Western Seminary</p>
                  </div>
                  <div>
                    <p className="font-semibold">Bachelor of Arts in Integrative Studies</p>
                    <p className="text-muted-foreground">Psychology, Marketing, and Communications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Recovery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Personal Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/30 p-8 rounded-lg">
              <p className="text-foreground text-lg leading-relaxed">
                Mackenzie's own journey of healing from an eating disorder shapes her passion for supporting others. This personal experience allows her to bring deep empathy and authentic understanding to her work with clients navigating similar challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Office */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Beyond the Office
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              Mackenzie uses she/her pronouns. Outside of the therapy room, Mackenzie enjoys hiking, exploring the outdoors, spending time with her dog Titus, and being with her spouse.
            </p>
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

export default MackenzieStracke;
