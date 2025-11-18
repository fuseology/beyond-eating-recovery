import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Network, Heart, CheckCircle2, BookOpen, Home, Users, TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import teamTrainingImage from "@/assets/team-training.webp";
import officeSpaceImage from "@/assets/office-space.webp";
import inclusiveTherapyImage from "@/assets/inclusive-therapy.jpg";
import benefitsWellnessImage from "@/assets/benefits-wellness.webp";

const Careers = () => {
  const scrollToPositions = () => {
    const element = document.getElementById("open-positions");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [openPosition, setOpenPosition] = useState<string | null>("licensed-therapists");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Join Our Collaborative Team
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-primary-foreground/90">
            Build your practice with support, supervision, and a community that shares your values
          </p>
          <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Beyond Eating Recovery is seeking passionate, HAES®-aligned therapists and dietitians to join our collaborative group practice. If you're looking for the freedom of private practice with the support of an experienced team, excellent administrative backing, and a commitment to social justice and weight-neutral care—we'd love to hear from you.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToPositions}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8"
          >
            View Open Positions ↓
          </Button>
        </div>
      </section>

      {/* Why Beyond Eating Recovery */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Why Work With Us?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-8 text-center">
                <Network className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Team Support, Private Practice Freedom
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enjoy the autonomy of private practice without the isolation. Our collaborative model provides regular case consultation, peer support, and supervision (for associates) while you maintain your clinical independence. You'll have colleagues who understand the unique challenges of eating disorder treatment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  HAES® & Social Justice Commitment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join a practice deeply committed to Health At Every Size®, Intuitive Eating, body liberation, fat acceptance, and trauma-informed care. We center LGBTQIA+ affirming, culturally humble practice and actively work toward dismantling oppression in healthcare. Your values matter here.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Focus on Clinical Work, We Handle the Rest
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No billing headaches, no marketing stress, no insurance nightmares. Our dedicated admin team manages scheduling, intake coordination, insurance credentialing and claims, billing, and marketing. You focus on what you do best: helping clients heal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            The Beyond Eating Recovery Difference
          </h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <BookOpen className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Ongoing Training & Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access regular case consultation, specialized training opportunities, and continuing education support. Associates receive high-quality clinical supervision. We invest in your professional development because we believe in lifelong learning.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={teamTrainingImage} 
                  alt="Team members engaging in professional training and collaboration at Beyond Eating Recovery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg md:order-first max-w-md mx-auto">
                <img 
                  src={officeSpaceImage} 
                  alt="Comfortable, client-ready therapy office space at Beyond Eating Recovery"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <Home className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Fully Furnished, Client-Ready Spaces
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Walk into a beautiful, furnished office in our Portland location or provide telehealth services. All rooms are therapy-ready with comfortable seating, calming décor, and professional ambiance. Our reception area welcomes clients warmly while you prepare between sessions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Users className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  All Bodies, Identities & Experiences Welcome
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team includes practitioners of various sizes, colors, gender identities, sexual orientations, and lived experiences. We value neurodivergence, celebrate cultural diversity, and recognize that diverse teams provide better care. Your whole self is welcome here.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={inclusiveTherapyImage} 
                  alt="Inclusive therapy session demonstrating body-positive, affirming care at Beyond Eating Recovery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg md:order-first">
                <img 
                  src={benefitsWellnessImage} 
                  alt="Wellness and professional growth opportunities at Beyond Eating Recovery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <TrendingUp className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Fair Pay & Comprehensive Benefits
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Competitive fee-for-service compensation, health insurance contribution, paid sick time, furnished offices, full administrative support, professional liability insurance, and more. We believe in compensating practitioners fairly for their expertise and time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section id="open-positions" className="py-16 md:py-20 bg-background scroll-mt-20">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            Open Positions
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            We're currently seeking therapists and dietitians at various experience levels. We also welcome inquiries from prescribers, massage therapists, movement instructors, and other practitioners aligned with our approach.
          </p>

          <div className="space-y-4">
            {/* Licensed Therapists */}
            <Collapsible
              open={openPosition === "licensed-therapists"}
              onOpenChange={(isOpen) => setOpenPosition(isOpen ? "licensed-therapists" : null)}
              className="border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="w-full px-6 py-4 bg-accent/10 hover:bg-accent/20 text-lg font-semibold text-primary flex items-center justify-between">
                <span>Licensed Therapists (PhD, PsyD, LCSW, LMFT, LPC)</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openPosition === "licensed-therapists" ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 py-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Position Overview</h4>
                  <p className="text-muted-foreground">
                    Join our collaborative team as a licensed mental health professional specializing in eating disorder treatment. Provide individual, couples, and/or family therapy using HAES®, Intuitive Eating, and trauma-informed approaches in a supportive group practice environment.
                  </p>
                </div>

                <div className="bg-muted/30 p-5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">Ideal Candidate</h4>
                  <p className="text-muted-foreground mb-3">Are you a therapist who:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Believes in Health At Every Size® and weight-neutral care?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Practices from a social justice framework with cultural humility?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Values collaboration and consultation while maintaining clinical independence?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Wants to focus on clinical work without administrative burdens?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Seeks ongoing professional development and peer support?</span>
                    </li>
                  </ul>
                  <p className="text-accent font-medium mt-3">If yes—we want to meet you!</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Minimum Qualifications</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Doctoral or Master's degree in counseling, psychology, social work, or marriage and family therapy</li>
                    <li>Current, active licensure in Oregon and/or Washington (PhD, PsyD, LCSW, LMFT, LPC, LMHC)</li>
                    <li>Specialized training and experience treating eating disorders</li>
                    <li>Commitment to HAES®, Intuitive Eating, and non-diet approaches</li>
                    <li>Strong clinical skills in evidence-based modalities (CBT, DBT, ACT, IFS, EFT, psychodynamic, etc.)</li>
                    <li>Excellent communication and interpersonal skills</li>
                    <li>Comfort with technology for telehealth and practice management systems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Preferred Qualifications</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>2+ years post-licensure experience in eating disorder treatment</li>
                    <li>Experience in higher levels of care (residential, PHP, IOP)</li>
                    <li>Training in specialized modalities (EMDR, Somatic Experiencing, CPT, ERP, etc.)</li>
                    <li>Lived experience with eating disorders, body image issues, or related challenges</li>
                    <li>Multilingual or multicultural competency</li>
                    <li>Experience with co-occurring conditions (trauma, OCD, anxiety, depression, substance use, autism spectrum)</li>
                    <li>LGBTQIA+ affirming practice experience</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">Compensation & Expectations</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-primary">Salary Range:</strong> $3,000-$6,000/month based on caseload and session volume</li>
                    <li><strong className="text-primary">Expected Availability:</strong> 20-25 client sessions per week (flexible scheduling)</li>
                    <li><strong className="text-primary">Model:</strong> Fee-for-service based on clinical hours provided</li>
                    <li><strong className="text-primary">Growth potential:</strong> Build your caseload at your pace with full marketing support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Benefits Package</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Clinical supervision and case consultation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Furnished, therapy-ready office space</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complete administrative support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full billing services</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Marketing and online presence management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional liability insurance</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Health insurance contribution</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Paid sick time</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Continuing education support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Telehealth infrastructure and technology</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Responsibilities</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Provide individual, couples, and/or family therapy for clients with eating disorders</li>
                    <li>Conduct comprehensive assessments and develop treatment plans</li>
                    <li>Utilize evidence-based, HAES®-aligned therapeutic interventions</li>
                    <li>Maintain accurate, timely clinical documentation</li>
                    <li>Collaborate with team members, including dietitians and other providers</li>
                    <li>Participate in regular case consultation and team meetings</li>
                    <li>Practice cultural humility and provide affirming care to diverse populations</li>
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Associate Therapists */}
            <Collapsible
              open={openPosition === "associate-therapists"}
              onOpenChange={(isOpen) => setOpenPosition(isOpen ? "associate-therapists" : null)}
              className="border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="w-full px-6 py-4 bg-accent/10 hover:bg-accent/20 text-lg font-semibold text-primary flex items-center justify-between">
                <span>Associate Therapists & Student Interns</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openPosition === "associate-therapists" ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 py-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Position Overview</h4>
                  <p className="text-muted-foreground">
                    Build your clinical skills with experienced supervision in a specialized eating disorder practice. Perfect for associates working toward full licensure or graduate students completing practicum/internship requirements.
                  </p>
                </div>

                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">We Offer</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>High-quality clinical supervision from experienced, licensed supervisors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Specialized training in eating disorders, HAES®, and Intuitive Eating</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Supportive, collaborative team environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Real-world experience with diverse client presentations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Administrative support so you can focus on learning and clinical growth</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Minimum Qualifications</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Currently enrolled in accredited graduate program (for interns) OR</li>
                    <li>Master's degree with associate license in Oregon/Washington (for associates)</li>
                    <li>Commitment to learning HAES®, non-diet, trauma-informed approaches</li>
                    <li>Strong interpersonal skills and openness to supervision</li>
                    <li>Reliable, professional, and ethical</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">What You'll Gain</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Specialized eating disorder treatment experience</li>
                    <li>Regular individual and group supervision</li>
                    <li>Exposure to diverse therapeutic modalities</li>
                    <li>Case consultation with multidisciplinary team</li>
                    <li>Professional development for future independent practice</li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Compensation</h4>
                  <p className="text-muted-foreground">
                    Competitive compensation for supervised clinical hours. Benefits package similar to licensed staff (scaled to clinical hours).
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Registered Dietitians */}
            <Collapsible
              open={openPosition === "dietitians"}
              onOpenChange={(isOpen) => setOpenPosition(isOpen ? "dietitians" : null)}
              className="border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="w-full px-6 py-4 bg-accent/10 hover:bg-accent/20 text-lg font-semibold text-primary flex items-center justify-between">
                <span>Registered Dietitians (RD/RDN)</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openPosition === "dietitians" ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 py-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Position Overview</h4>
                  <p className="text-muted-foreground">
                    Join our multidisciplinary team as a registered dietitian specializing in eating disorder nutrition counseling. Provide individual nutrition therapy, medical nutrition therapy, and collaborative care using HAES®, Intuitive Eating, and non-diet approaches.
                  </p>
                </div>

                <div className="bg-muted/30 p-5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">Ideal Candidate</h4>
                  <p className="text-muted-foreground mb-3">Are you a dietitian who:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Practices Health At Every Size® and rejects diet culture?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Has unlearned weight-centric approaches and embraced weight-neutral care?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Wants to work collaboratively with therapists in integrated treatment?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Values social justice, body liberation, and fat acceptance?</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Seeks a supportive practice environment without administrative burdens?</span>
                    </li>
                  </ul>
                  <p className="text-accent font-medium mt-3">If yes—let's talk!</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Minimum Qualifications</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Master's degree in nutrition, dietetics, or related field</li>
                    <li>Current RD or RDN credential through CDR</li>
                    <li>Active licensure in Oregon and/or Washington</li>
                    <li>Specialized training in eating disorders and disordered eating</li>
                    <li>Strong commitment to HAES®, Intuitive Eating, and non-diet philosophy</li>
                    <li>Excellent communication and counseling skills</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Preferred Qualifications</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>2+ years experience providing eating disorder nutrition therapy</li>
                    <li>CEDRD or CEDRD-S certification</li>
                    <li>Training in Intuitive Eating counseling</li>
                    <li>Experience in higher levels of care</li>
                    <li>Lived experience with eating disorders or body image challenges</li>
                    <li>Cultural competency and experience with diverse populations</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">Compensation & Expectations</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-primary">Range:</strong> $50-$80 per clinical hour (approximately $2,500-$5,000/month based on caseload)</li>
                    <li><strong className="text-primary">Expected Availability:</strong> 15-25 client sessions per week (flexible scheduling)</li>
                    <li><strong className="text-primary">Model:</strong> Fee-for-service paid for clinical hours provided</li>
                    <li><strong className="text-primary">Growth supported:</strong> Build your practice with marketing and referral support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Responsibilities</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Provide individual nutrition counseling for clients with eating disorders</li>
                    <li>Conduct nutrition assessments and develop individualized care plans</li>
                    <li>Utilize HAES®, Intuitive Eating, and evidence-based nutrition interventions</li>
                    <li>Collaborate closely with therapists and other treatment team members</li>
                    <li>Maintain thorough, timely clinical documentation</li>
                    <li>Practice cultural humility and provide affirming care to all body sizes and identities</li>
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Other Practitioners */}
            <Collapsible
              open={openPosition === "other-practitioners"}
              onOpenChange={(isOpen) => setOpenPosition(isOpen ? "other-practitioners" : null)}
              className="border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="w-full px-6 py-4 bg-accent/10 hover:bg-accent/20 text-lg font-semibold text-primary flex items-center justify-between">
                <span>Other Practitioners (Prescribers, Massage Therapists, Movement Instructors)</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openPosition === "other-practitioners" ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 py-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-3">We're Always Interested in Connecting With:</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Psychiatric prescribers (MD, DO, PMHNP) with eating disorder and HAES® experience</li>
                    <li>Massage therapists specializing in trauma-informed, body-positive bodywork</li>
                    <li>Movement instructors teaching joyful movement, yoga, or somatic practices from weight-neutral perspective</li>
                    <li>Other wellness practitioners aligned with our philosophy</li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-5 rounded-lg">
                  <p className="text-muted-foreground mb-3">If you're a practitioner who:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Embraces HAES®, body diversity, and weight-neutral care</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Works from trauma-informed, culturally humble framework</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Values collaboration and integrated treatment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Wants to be part of a social justice-oriented practice</span>
                    </li>
                  </ul>
                  <p className="text-accent font-semibold mt-4">We'd love to hear from you! Please reach out to discuss potential collaboration opportunities.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            What It's Like to Work Here
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">Collaborative, Not Isolated</h3>
              <p className="text-muted-foreground leading-relaxed">
                Solo private practice can be lonely. At Beyond Eating Recovery, you'll join a team of passionate practitioners who genuinely care about this work and each other. Regular case consultations mean you're never alone with challenging cases. Peer support means celebrating wins and processing tough days together.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">Freedom with Structure</h3>
              <p className="text-muted-foreground leading-relaxed">
                You maintain clinical independence and autonomy in your therapeutic approach while benefiting from practice infrastructure, administrative support, and team collaboration. Set your own schedule, choose your modalities, and practice your way—with backup when you need it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">Values-Driven Space</h3>
              <p className="text-muted-foreground leading-relaxed">
                This isn't just a job—it's a community of practitioners committed to challenging weight stigma, centering marginalized voices, and creating healing spaces for all bodies. We talk openly about social justice, examine our own biases, and continuously work toward more equitable, inclusive care.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">Professional Growth Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're newly licensed or highly experienced, there's always room to grow. We support continuing education, encourage specialized training, offer supervision for associates, and create space for clinical innovation. Your professional development matters to us.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">Real Work-Life Balance</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe practitioners need sustainable careers to provide excellent care. Flexible scheduling, paid sick time, administrative support, and reasonable caseload expectations mean you can do this work long-term without burning out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            Ready to Apply?
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            We'd love to learn more about you! Our application process is designed to be straightforward while helping us get to know you and your clinical approach.
          </p>

          <div className="space-y-10">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Submit Your Materials</h3>
                <p className="text-muted-foreground mb-3">Send the following to Anne Cuthbert:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Current resume or CV</li>
                  <li>Cover letter describing your interest, alignment with our values, experience, and what you're seeking</li>
                  <li>Three professional references (names and contact information)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-primary mb-2">Complete Our Employment Questionnaire</h3>
                <p className="text-muted-foreground mb-4">
                  After submitting your resume and cover letter, please complete our online questionnaire. This helps us understand your background, clinical philosophy, and what you're seeking in a position.
                </p>
                <div className="text-center my-6">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6"
                  >
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdmOLdrrbMwY5gRNJtblw_8SE0xbWSHa8w-Aj319Gcl8KlZWA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Complete Employment Questionnaire
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">(Opens in new window)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Initial Interview</h3>
                <p className="text-muted-foreground">
                  Anne Cuthbert will review applications and reach out to qualified candidates to schedule an initial conversation. This is an opportunity for us to learn about each other and explore mutual fit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Meet the Team</h3>
                <p className="text-muted-foreground">
                  Promising candidates will be invited to meet team members, tour our space (if applicable), and get a feel for our practice culture.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Final Decision</h3>
                <p className="text-muted-foreground">
                  We'll make our decision and extend an offer to the candidate who best aligns with our needs and values. If it's you—welcome to the team!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions? Let's Talk.
          </h2>
          <p className="text-lg leading-relaxed mb-8 opacity-90">
            If you have questions about open positions, our practice philosophy, the application process, or anything else—please don't hesitate to reach out. We're happy to connect with practitioners who are exploring options.
          </p>

          <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-8 mb-8">
            <p className="font-semibold text-xl mb-2">Anne Cuthbert, MA, LPC, LMHC</p>
            <p className="text-lg opacity-90 mb-6">Owner & Clinical Director</p>
            
            <div className="space-y-3 text-lg">
              <p>
                <strong>Phone:</strong> (360) 726-4141
              </p>
              <p>
                <strong>Office:</strong> Portland, Oregon
              </p>
              <p className="opacity-90">
                (Telehealth available throughout Oregon & Washington)
              </p>
            </div>
          </div>

          <p className="text-lg italic opacity-90">
            We look forward to hearing from you!
          </p>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default Careers;
