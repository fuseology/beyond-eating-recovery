import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MapPin, Clock, CheckCircle, Upload } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "Yes! We accept most major insurance plans for Oregon and Washington residents, including Aetna, Cigna, Blue Cross Blue Shield, United Healthcare, Providence, and Kaiser. Contact us to verify your specific coverage."
    },
    {
      question: "How much does treatment cost?",
      answer: "Costs vary depending on your insurance coverage and the services you need. We offer a free consultation to discuss your situation and provide transparent pricing. We also offer sliding scale options for those who qualify."
    },
    {
      question: "What should I expect in the first session?",
      answer: "Your first session is about getting to know you. We'll discuss your concerns, history, goals, and answer any questions you have. There's no pressure—this is a safe space to explore whether our approach feels right for you."
    },
    {
      question: "Do you offer virtual appointments?",
      answer: "Yes! We offer secure, HIPAA-compliant telehealth sessions for all our services. This is especially convenient for Vancouver, WA residents and those who prefer virtual care."
    },
    {
      question: "How do I know if I need help?",
      answer: "If you're struggling with food, body image, or eating patterns that cause distress or interfere with your life, we can help. You don't need to have a diagnosed eating disorder to benefit from our services. When in doubt, reach out—we're happy to discuss your concerns."
    }
  ];

  const virtualServices = [
    "Individual therapy sessions",
    "Dietitian consultations",
    "Family therapy",
    "Group support (online groups)"
  ];

  const steps = [
    { number: 1, text: "Submit the form or call us" },
    { number: 2, text: "We'll contact you within 24 hours" },
    { number: 3, text: "Schedule your free consultation" },
    { number: 4, text: "Begin your personalized treatment plan" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.beyondeatingrecovery.com/#organization",
        "name": "Beyond Eating Recovery of Portland",
        "image": "https://www.beyondeatingrecovery.com/hero-background.jpg",
        "description": "Professional eating disorder treatment center in Portland, Oregon offering specialized therapy, nutritional counseling, and support for eating disorders, body image issues, and disordered eating patterns.",
        "url": "https://www.beyondeatingrecovery.com/contact",
        "telephone": "+1-360-726-4141",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1235 Southeast Division Street",
          "addressLocality": "Portland",
          "addressRegion": "OR",
          "postalCode": "97202",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 45.505065,
          "longitude": -122.652856
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "00:00",
            "closes": "00:00",
            "description": "By appointment only"
          }
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Portland",
            "containedIn": {
              "@type": "State",
              "name": "Oregon"
            }
          },
          {
            "@type": "City",
            "name": "Vancouver",
            "containedIn": {
              "@type": "State",
              "name": "Washington"
            }
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-360-726-4141",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": ["OR", "WA"]
        },
        "paymentAccepted": "Cash, Check, Insurance",
        "sameAs": [
          "https://www.facebook.com/beyondeatingrecovery",
          "https://www.instagram.com/beyondeatingrecovery"
        ]
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.beyondeatingrecovery.com/#medicalbusiness",
        "name": "Beyond Eating Recovery of Portland",
        "image": "https://www.beyondeatingrecovery.com/hero-background.jpg",
        "description": "Specialized eating disorder treatment center providing evidence-based therapy, nutritional counseling, and comprehensive support for individuals struggling with anorexia, bulimia, binge eating disorder, ARFID, OSFED, and related conditions.",
        "url": "https://www.beyondeatingrecovery.com",
        "telephone": "+1-360-726-4141",
        "medicalSpecialty": [
          "Psychiatry",
          "Psychology",
          "Nutrition"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1235 Southeast Division Street",
          "addressLocality": "Portland",
          "addressRegion": "OR",
          "postalCode": "97202",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 45.505065,
          "longitude": -122.652856
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "00:00",
            "closes": "00:00",
            "description": "By appointment only"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Eating Disorder Treatment Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Individual Therapy for Eating Disorders",
                "description": "One-on-one therapy sessions for eating disorders including anorexia, bulimia, binge eating disorder, and OSFED"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Group Therapy",
                "description": "Supportive group therapy sessions for individuals in eating disorder recovery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Family Therapy",
                "description": "Family-based treatment and support for eating disorder recovery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Nutritional Counseling",
                "description": "Specialized dietitian services for eating disorder recovery and intuitive eating"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTherapy",
                "name": "Telehealth Services",
                "description": "Virtual therapy sessions via secure HIPAA-compliant video conferencing"
              }
            }
          ]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Portland",
            "containedIn": {
              "@type": "State",
              "name": "Oregon"
            }
          },
          {
            "@type": "City",
            "name": "Vancouver",
            "containedIn": {
              "@type": "State",
              "name": "Washington"
            }
          }
        ],
        "paymentAccepted": "Cash, Check, Insurance",
        "currenciesAccepted": "USD"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Beyond Eating Recovery - Portland, OR</title>
        <meta name="description" content="Contact Beyond Eating Recovery in Portland, Oregon for eating disorder treatment. Call 360-726-4141 or fill out our form for a free consultation. Serving Portland & Vancouver, WA." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/contact" />
        <meta property="og:title" content="Contact Us | Beyond Eating Recovery - Portland, OR" />
        <meta property="og:description" content="Contact Beyond Eating Recovery in Portland, Oregon for eating disorder treatment. Call 360-726-4141 or fill out our form for a free consultation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/contact" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Beyond Eating Recovery - Portland, OR" />
        <meta name="twitter:description" content="Contact Beyond Eating Recovery in Portland, Oregon for eating disorder treatment. Call 360-726-4141 or fill out our form for a free consultation." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/hero-background.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Healing Journey Today
          </h1>
          <p className="text-xl text-white/90">
            We're here to help. Reach out for a free consultation.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* LEFT COLUMN - Contact Form */}
            <Card className="bg-secondary/30 border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">Beyond Eating Recovery</CardTitle>
                    <p className="text-foreground/90 font-semibold">Anne Cuthbert MA, LPC, LMHC</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Owner & Practitioner<br />
                      <em>Now Serving Portland & Vancouver Locations.</em>
                    </p>
                  </div>
                  <img 
                    src="https://bodyexpressions.org/wp-content/uploads/2019/02/Love-Tree.png" 
                    alt="Love Tree" 
                    className="w-24 h-auto"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfHvkpMJbdNF6m-eZFtRrwv4xrb2vUH6plb-rwJ5ERETqFX8A/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                      <Upload className="w-5 h-5 mr-2" />
                      Submit Secure Files
                    </Button>
                  </a>
                </div>
                <div className="w-full">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf5G_XyoAlB6O7ECXC6R5q80N6h_Kv2Dtb_VIrX9NsAc-F6lw/viewform?embedded=true" 
                    width="640" 
                    height="3147" 
                    frameBorder={0} 
                    marginHeight={0} 
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>

            {/* RIGHT COLUMN - Contact Information */}
            <div className="space-y-8">
              
              {/* Insurance & Payment */}
              <Card className="border-2 bg-accent/10">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Insurance & Payment</h3>
                  <p className="text-foreground/80 mb-4">
                    We accept most major insurance plans for Oregon and Washington residents.
                  </p>
                  <div className="space-y-3">
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                      Verify Your Insurance
                    </Button>
                    <Button size="lg" variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white">
                      Payment Options & Fees
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Not sure if we're in-network? Contact us and we'll check for you.
                  </p>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                      <a href="tel:3607264141" className="text-2xl font-bold text-accent hover:underline">
                        360-726-4141
                      </a>
                      <p className="text-muted-foreground mt-1">Call or text us—we're here to help</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Portland Office */}
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Portland Office</h3>
                      <p className="text-foreground/80">
                        Beyond Eating Recovery of Portland<br />
                        1235 Southeast Division Street<br />
                        Portland, Oregon 97202
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">In-Person Appointments Available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Office Hours</h4>
                      <div className="space-y-1 text-sm text-foreground/80">
                        <p>Monday-Friday: 9am-6pm</p>
                        <p>Saturday: By appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  {/* Map Embed */}
                  <div className="mt-4">
                    <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5592.498093295984!2d-122.652856!3d45.505065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b992a10ec77%3A0x27e481ed74713d36!2sBody%20Expressions%20of%20Portland%20-%20Eating%20Disorders%20Counseling!5e0!3m2!1sen!2sus!4v1763163338622!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Parking:</strong> Street parking and nearby garage available
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Vancouver, WA Services */}
              <Card className="border-2 bg-secondary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Serving Vancouver, WA</h3>
                  <p className="text-foreground/80 mb-4">
                    We proudly serve Vancouver, Washington residents through secure, HIPAA-compliant telehealth sessions. All the same quality care from the comfort of your home.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary">Virtual Services Include:</p>
                    {virtualServices.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground/80">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What Happens Next */}
              <Card className="border-2 bg-accent/10">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-xl font-bold text-white">{step.number}</span>
                        </div>
                        <p className="text-foreground/80">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border-2 rounded-lg px-6 bg-white"
                >
                  <AccordionTrigger className="hover:no-underline text-left">
                    <span className="text-lg font-semibold text-primary">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't wait to get the support you deserve
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Take the first step toward healing today.
          </p>
          <a href="tel:3607264141">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us Now
            </Button>
          </a>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Contact;