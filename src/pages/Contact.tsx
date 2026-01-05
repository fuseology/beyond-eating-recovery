import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import InsuranceSidebar from "@/components/InsuranceSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MapPin, Clock, CheckCircle, Upload, CreditCard, FileText, HelpCircle, DollarSign, ShieldCheck, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import loveTreeImage from "@/assets/love-tree.png";

const Contact = () => {
  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "Yes! We accept most major insurance providers for Oregon and Washington residents. Contact us to verify your specific coverage."
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
            <div className="space-y-4">
              {/* Secure Upload Button */}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSctoi0O7ZnL5wmQe9Ndt-yI_4cqeLDwn5jNE74KF4vsOzou4Q/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <Upload className="h-5 w-5" />
                Secure Upload
              </a>
              
              <Card className="bg-secondary/30 border-2">
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-semibold text-primary">Contact Us</h3>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
                </CardHeader>
              <CardContent>
                <div className="w-full overflow-hidden rounded-lg">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf5G_XyoAlB6O7ECXC6R5q80N6h_Kv2Dtb_VIrX9NsAc-F6lw/viewform?embedded=true&v=2" 
                    width="100%" 
                    height="3147" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Contact Form"
                    className="w-full"
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN - Contact Information */}
            <div className="space-y-8">
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

              {/* Insurance Quick Reference Sidebar */}
              <InsuranceSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Information Section */}
      <section id="insurance-section" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Insurance & Payment Information
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                We accept most major insurance plans for Oregon and Washington residents. Understanding your coverage is an important part of beginning treatment. Here's what you need to know.
              </p>
            </div>

            {/* We Accept Insurance */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">We Accept Most Major Insurance Plans</h3>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-foreground/80">
                    Beyond Eating Recovery is in-network with many commercial insurance carriers and also works with out-of-network benefits. We provide both mental health services (therapy) and registered dietitian services, which may be covered differently under your plan.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Client Responsibilities Callout */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Your Responsibilities as a Client</h3>
              </div>
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <p className="font-semibold text-primary mb-4">Important: Please note that it is your responsibility to:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        <strong>Verify your insurance coverage before beginning treatment</strong>, including understanding your deductible, copay, and any out-of-network costs.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        <strong>Communicate insurance changes immediately.</strong> If your insurance plan changes or you switch carriers during treatment, please notify us right away so we can update your billing information.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        <strong>Contact your insurance company</strong> with questions about your specific benefits and coverage limits.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-6 text-foreground/80 border-t border-primary/20 pt-4">
                    We're here to help you navigate the insurance process, but final coverage decisions are made by your insurance company. Call us at <a href="tel:3607264141" className="text-primary font-semibold hover:underline">360-726-4141</a> with questions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* How to Verify Coverage */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">How to Verify Your Coverage</h3>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-foreground/80 mb-6">
                    When you call your insurance company, it's helpful to have specific information ready. We've prepared a list of CPT codes and questions to help you get clear answers about your benefits.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-secondary/30 rounded-lg p-5">
                      <h4 className="font-bold text-primary mb-3">CPT Codes for Mental Health Services (Therapy)</h4>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex justify-between"><span>90791</span><span className="text-muted-foreground">Initial diagnostic interview</span></li>
                        <li className="flex justify-between"><span>90834</span><span className="text-muted-foreground">45-minute therapy session</span></li>
                        <li className="flex justify-between"><span>90837</span><span className="text-muted-foreground">53-minute therapy session</span></li>
                        <li className="flex justify-between"><span>90847</span><span className="text-muted-foreground">Family therapy</span></li>
                        <li className="flex justify-between"><span>90853</span><span className="text-muted-foreground">Group therapy</span></li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-5">
                      <h4 className="font-bold text-primary mb-3">CPT Codes for Registered Dietitian Services</h4>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex justify-between"><span>97802</span><span className="text-muted-foreground">Initial nutrition assessment</span></li>
                        <li className="flex justify-between"><span>97803</span><span className="text-muted-foreground">Follow-up nutrition session</span></li>
                        <li className="flex justify-between"><span>97804</span><span className="text-muted-foreground">Group nutrition session</span></li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-5">
                    <h4 className="font-bold text-primary mb-3">Questions to Ask Your Insurance Company</h4>
                    <ol className="list-decimal list-inside space-y-2 text-foreground/80">
                      <li>Do I have mental health and nutrition benefits?</li>
                      <li>What is my deductible, and how much have I met?</li>
                      <li>What is my copay for outpatient therapy services?</li>
                      <li>Is Beyond Eating Recovery in-network with my plan?</li>
                      <li>Do I need pre-authorization for therapy or nutrition services?</li>
                      <li>Are dietitian services (CPT 97802, 97803, 97804) covered?</li>
                      <li>What are my out-of-network benefits if applicable?</li>
                    </ol>
                  </div>

                  <div className="mt-6 text-center">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Link to="/faq#insurance">View Complete FAQ About Insurance & Billing</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mental Health vs Dietitian Billing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Understanding Billing Differences</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 bg-primary/5">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-primary mb-3 text-lg">Mental Health Services</h4>
                    <p className="text-sm text-muted-foreground mb-3">Therapy Services (LPC, LMHC, LCSW)</p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Billed under mental health benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Typically covered with copays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>May have session limits per year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Separate deductibles may apply</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 bg-accent/5">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-primary mb-3 text-lg">Dietitian Services</h4>
                    <p className="text-sm text-muted-foreground mb-3">Nutrition Services (RD)</p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Billed under medical nutrition therapy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Coverage varies by plan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>May require physician referral</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Some plans have limited coverage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-4 text-center text-foreground/80 bg-muted/50 rounded-lg p-4">
                <strong>Important:</strong> Even if your therapy is covered, dietitian services may have different coverage or may not be covered. We recommend verifying coverage for both types of services separately.
              </p>
            </div>

            {/* What We Can Help With */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">What We Can Tell You During Verification</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-green-200 bg-green-50/50">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      We Can Help Identify
                    </h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Whether we're in-network with your plan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Your estimated copay amounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Your deductible information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Whether pre-authorization is needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Basic coverage details</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-amber-200 bg-amber-50/50">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      You Must Verify Directly
                    </h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Exact out-of-pocket costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Specific plan exclusions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Coverage for eating disorder treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Out-of-network reimbursement rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Appeals processes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-4 text-center text-muted-foreground text-sm">
                Only you as the policyholder can receive complete, binding coverage information from your insurance company. We encourage you to verify directly to avoid unexpected costs.
              </p>
            </div>

            {/* Payment Options */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Payment Options & Financial Assistance</h3>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <h4 className="font-bold text-primary mb-2">Sliding Scale Fees</h4>
                      <p className="text-sm text-foreground/80">
                        We offer reduced fees based on income for clients who qualify (limited availability).
                      </p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <h4 className="font-bold text-primary mb-2">Payment Plans</h4>
                      <p className="text-sm text-foreground/80">
                        We may be able to arrange payment plans for out-of-pocket costs.
                      </p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <h4 className="font-bold text-primary mb-2">Good Faith Estimates</h4>
                      <p className="text-sm text-foreground/80">
                        Required by federal law for uninsured/self-pay clients. Request yours when scheduling.
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-center text-foreground/80">
                    Call <a href="tel:3607264141" className="text-primary font-semibold hover:underline">360-726-4141</a> to discuss financial assistance options. <strong>We believe cost should not be a barrier to recovery.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Ready to Get Started CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Get Started?</h3>
              <p className="text-foreground/80 mb-6">
                We're here to answer your questions and help you understand your coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white min-w-[200px]"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Schedule Free Consultation
                </Button>
                <a href="tel:3607264141">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white min-w-[200px]">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 360-726-4141
                  </Button>
                </a>
              </div>
              <p className="text-muted-foreground">
                Have questions about insurance or billing? Check our <Link to="/faq#insurance" className="text-primary hover:underline font-semibold">comprehensive FAQ page</Link> for detailed answers.
              </p>
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