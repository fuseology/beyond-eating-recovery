import { Phone, GraduationCap, BookOpen, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import { Link } from "react-router-dom";
import emeryImage from "@/assets/emery-pederson.webp";
import { Helmet } from "react-helmet";

const EmeryPederson = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Emery Pederson | Admin Support at Beyond Eating Recovery</title>
        <meta name="description" content="Emery Pederson provides welcoming admin support at Beyond Eating Recovery, creating inclusive environments for eating disorder treatment in Portland and Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about/emery-pederson" />
        <meta property="og:title" content="Emery Pederson | Admin Support at Beyond Eating Recovery" />
        <meta property="og:description" content="Providing welcoming admin support and creating inclusive environments for eating disorder treatment in Portland and Vancouver." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/about/emery-pederson" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/emery-pederson.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emery Pederson | Admin Support at Beyond Eating Recovery" />
        <meta name="twitter:description" content="Providing welcoming admin support and creating inclusive environments for eating disorder treatment in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/emery-pederson.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Emery Pederson",
            "jobTitle": "Admin Support",
            "description": "Admin support providing welcoming, inclusive assistance for clients seeking eating disorder treatment and support.",
            "url": "https://www.beyondeatingrecovery.com/about/emery-pederson",
            "image": "https://www.beyondeatingrecovery.com/emery-pederson.webp",
            "worksFor": {
              "@type": "MedicalBusiness",
              "name": "Beyond Eating Recovery",
              "url": "https://www.beyondeatingrecovery.com"
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Washington State University Vancouver"
            },
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Degree",
              "name": "Bachelor of Science in Psychology"
            },
            "knowsAbout": [
              "Eating Disorders",
              "Mental Health Support",
              "Client Care Coordination",
              "Inclusive Practice",
              "Administrative Support",
              "Community Resources"
            ],
            "telephone": "+1-360-726-4141"
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo */}
              <div className="w-full md:w-2/5">
                <img 
                  src={emeryImage} 
                  alt="Emery Pederson - Admin Support at Beyond Eating Recovery"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Info */}
              <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  Emery Pederson
                </h1>
                
                <p className="text-xl md:text-2xl text-accent font-medium">
                  Admin Support
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Creating welcoming, inclusive environments for clients seeking eating disorder treatment and support. With a background in psychology and passion for mental health recovery, Emery ensures that every person who contacts our practice feels seen, valued, and supported from their very first interaction.
                </p>
                
                <div className="pt-4 space-y-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Schedule Consultation
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

      {/* About Emery */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            About Emery
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              Emery Pederson serves as Admin Support at Beyond Eating Recovery, where she creates welcoming, inclusive environments for clients seeking eating disorder treatment and support. With her background in psychology and passion for mental health recovery, Emery ensures that every person who contacts our practice feels seen, valued, and supported from their very first interaction.
            </p>
            <p>
              Emery graduated from Washington State University Vancouver (WSU-Vancouver) with a Bachelor of Science in Psychology and a double minor in Human Development and Aging Studies. Her academic foundation and genuine commitment to inclusive care make her an essential part of our team's mission to provide affirming, accessible eating disorder treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Professional Background
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
                    <p className="font-semibold">Bachelor of Science in Psychology</p>
                    <p className="text-muted-foreground">Washington State University Vancouver</p>
                  </div>
                  <div>
                    <p className="font-semibold">Double Minor</p>
                    <p className="text-muted-foreground">Human Development & Aging Studies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 space-y-6 text-foreground text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold text-primary">Ongoing Learning Interests</h3>
            <p>
              Emery maintains an active interest in emerging research related to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eating disorders (new treatment approaches, recovery outcomes, prevention)</li>
              <li>Neurodivergence (autism, ADHD, and eating disorder connections)</li>
              <li>Neuroscience (brain-based understanding of eating disorders and recovery)</li>
              <li>Mental health innovations and recovery models</li>
            </ul>
            <p>
              This commitment to staying informed about current research ensures that Emery brings contemporary understanding and evidence-based perspectives to her support role.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Philosophy & Values
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-4">Creating Inclusive Spaces</h3>
              <p className="text-foreground text-lg leading-relaxed">
                Emery is deeply passionate about finding innovative ways to support individuals in mental health recovery. She understands that healing happens in environments where people feel safe, accepted, and free to be their authentic selves. In her role at Beyond Eating Recovery, Emery strives to create these conditions from the moment someone reaches out for help.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Core Values</h3>
              <div className="space-y-3 text-foreground text-lg">
                <p><strong>Authenticity:</strong> Creating space where clients can be fully themselves</p>
                <p><strong>Inclusivity:</strong> Ensuring all people feel welcome regardless of identity, background, or body size</p>
                <p><strong>Compassion:</strong> Approaching every interaction with kindness and understanding</p>
                <p><strong>Accessibility:</strong> Making mental health support approachable and available</p>
                <p><strong>Continuous learning:</strong> Staying informed about best practices and emerging research</p>
              </div>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Recovery</h3>
              <p className="text-foreground text-lg leading-relaxed">
                Emery understands that seeking help for an eating disorder takes immense courage. Whether you're making your first phone call, scheduling an appointment, or navigating insurance questions, Emery provides supportive, non-judgmental assistance that honors the difficulty of taking these steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Office */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Beyond the Office
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              Outside of her work at Beyond Eating Recovery, Emery enjoys a rich and diverse array of interests that reflect her curiosity, creativity, and love of connection:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Literary Adventures</h3>
                <p>
                  Emery is an avid reader who loves to lose herself in grand literary adventures. Whether fiction or non-fiction, she finds joy in stories that transport, educate, and inspire.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Artistic Expression</h3>
                <p>
                  Emery regularly participates in artistic projects, engaging her creative side through various mediums. Art provides balance, self-expression, and a form of mindfulness.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Antique Collecting</h3>
                <p>
                  With an appreciation for history and craftsmanship, Emery enjoys collecting antiques. Each piece tells a story and connects her to different eras and cultures.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Connection with Loved Ones</h3>
                <p>
                  Most importantly, Emery values spending quality time with loved ones—whether friends, family, or chosen family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Emery Supports Your Care */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            How Emery Supports Your Care
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Initial Contact Support</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Answering phone calls with warmth</li>
                  <li>• Providing service information</li>
                  <li>• Explaining first consultation</li>
                  <li>• Answering logistical questions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Administrative Coordination</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Scheduling appointments</li>
                  <li>• Coordinating with providers</li>
                  <li>• Managing insurance questions</li>
                  <li>• Ensuring accessible paperwork</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Ongoing Support</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Rescheduling when needed</li>
                  <li>• Providing resources</li>
                  <li>• Connecting with team members</li>
                  <li>• Creating welcoming environment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-background p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">Creating Safety</h3>
            <p className="text-foreground text-lg leading-relaxed">
              Emery understands that contacting an eating disorder treatment center can feel vulnerable and scary. She approaches every interaction with gentleness, respect, and the understanding that this step takes courage. You won't be judged, pressured, or made to feel "not sick enough." Emery ensures that all people are treated with dignity and compassion.
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
              If you're considering eating disorder treatment or have questions about our services, Emery is here to help. Reach out today—we're ready to support you.
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
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (360) 726-4141
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Learn About Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Meet Our Full Team
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg text-foreground mb-8">
              Emery works alongside our dedicated team of eating disorder specialists:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/about" className="block p-4 bg-background rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary">Meet Our Therapists</h3>
                <p className="text-muted-foreground">Licensed professionals specializing in eating disorder treatment</p>
              </Link>
              
              <Link to="/about" className="block p-4 bg-background rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary">Meet Our Dietitian</h3>
                <p className="text-muted-foreground">HAES® practitioner and nutrition specialist</p>
              </Link>
              
              <Link to="/about" className="block p-4 bg-background rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary">Meet Support Staff</h3>
                <p className="text-muted-foreground">Administrative and billing support team</p>
              </Link>
              
              <Link to="/our-approach" className="block p-4 bg-background rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary">Our Approach to Treatment</h3>
                <p className="text-muted-foreground">Learn about our HAES® philosophy and methods</p>
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

export default EmeryPederson;
