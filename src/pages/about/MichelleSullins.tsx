import { Phone, FileCheck, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import michelleImage from "@/assets/michelle-sullins.png";
import { Helmet } from "react-helmet";

const MichelleSullins = () => {
  const billingQuestions = [
    {
      question: "What are my insurance benefits for eating disorder treatment?",
      answer: "I'll verify your benefits and explain coverage details in clear, understandable language."
    },
    {
      question: "How much will I owe out-of-pocket?",
      answer: "I'll provide estimates based on your specific insurance plan, deductibles, and co-insurance."
    },
    {
      question: "Will my insurance cover nutrition counseling with a dietitian?",
      answer: "I'll check your plan's coverage for Registered Dietitian services and Medical Nutrition Therapy."
    },
    {
      question: "What if I'm using out-of-network benefits?",
      answer: "I'll prepare detailed superbills for you to submit to your insurance for reimbursement."
    },
    {
      question: "My claim was denied. What now?",
      answer: "I'll review the denial, identify the issue, and work on appeals or corrections to get your claim approved."
    },
    {
      question: "Can I set up a payment plan?",
      answer: "Yes! I can coordinate payment arrangements that work with your financial situation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Michelle Sullins | Billing Support at Beyond Eating Recovery</title>
        <meta name="description" content="Michelle Sullins is a Certified Professional Medical Coder providing billing support and insurance assistance at Beyond Eating Recovery in Portland and Vancouver." />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/about/michelle-sullins" />
        <meta property="og:title" content="Michelle Sullins | Billing Support at Beyond Eating Recovery" />
        <meta property="og:description" content="Certified Professional Medical Coder providing billing support and insurance assistance at Beyond Eating Recovery in Portland and Vancouver." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/about/michelle-sullins" />
        <meta property="og:image" content="https://www.beyondeatingrecovery.com/michelle-sullins.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Michelle Sullins | Billing Support at Beyond Eating Recovery" />
        <meta name="twitter:description" content="Certified Professional Medical Coder providing billing support and insurance assistance at Beyond Eating Recovery in Portland and Vancouver." />
        <meta name="twitter:image" content="https://www.beyondeatingrecovery.com/michelle-sullins.png" />
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
                  src={michelleImage} 
                  alt="Michelle Sullins - Billing Support at Beyond Eating Recovery"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Info */}
              <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  Michelle Sullins
                </h1>
                
                <p className="text-xl md:text-2xl text-accent font-medium">
                  Billing Support | Certified Professional Medical Coder
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  With over a decade of comprehensive experience in medical coding and billing, I'm here to make the insurance and billing process as smooth and stress-free as possible. My commitment to precision and compliance means you can trust that your billing is handled accurately and professionally—allowing you to focus on your healing.
                </p>
                
                <div className="pt-4 space-y-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Billing Questions? Contact Me
                  </Button>
                  <p className="text-primary text-lg font-semibold">
                    <Phone className="inline-block mr-2 h-5 w-5" />
                    (360) 726-4141
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Role Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            How I Support Your Treatment Journey
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <FileCheck className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold text-primary">What I Do</h3>
              <div className="text-foreground space-y-4">
                <p className="font-semibold">Insurance & Billing Services:</p>
                <ul className="space-y-2 pl-4">
                  <li>• Insurance verification and benefits explanation</li>
                  <li>• Accurate medical coding for eating disorder treatment</li>
                  <li>• Claims submission and follow-up</li>
                  <li>• Insurance company communication and appeals</li>
                  <li>• Payment plan coordination</li>
                  <li>• Superbill preparation for out-of-network reimbursement</li>
                  <li>• Billing questions and problem resolution</li>
                  <li>• Financial transparency and clarity</li>
                </ul>
                <div className="pt-4">
                  <p className="font-semibold mb-2">My Role in Your Care:</p>
                  <p>
                    While you focus on recovery, I work behind the scenes to ensure your insurance benefits are maximized and billing is handled correctly. I navigate the complex world of medical coding and insurance so you don't have to.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold text-primary">My Expertise</h3>
              <div className="text-foreground space-y-4">
                <p className="font-semibold">Certified Professional Medical Coder</p>
                <p>With over 10 years of experience, I bring:</p>
                <ul className="space-y-2 pl-4">
                  <li>• Expert knowledge of medical coding procedures and diagnoses</li>
                  <li>• Compliance with industry standards and regulations</li>
                  <li>• Precision in documentation and coding accuracy</li>
                  <li>• Experience across multiple medical specialties</li>
                  <li>• Understanding of eating disorder treatment coding</li>
                  <li>• Proactive approach to industry updates</li>
                  <li>• Commitment to best practices</li>
                  <li>• Meticulous attention to detail</li>
                </ul>
                <div className="pt-4">
                  <p className="font-semibold mb-2">Why This Matters:</p>
                  <p>
                    Accurate coding directly affects your insurance coverage, out-of-pocket costs, and claim approvals. My expertise ensures your treatment is coded correctly the first time—reducing billing surprises and claim denials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Experience & Commitment
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Decade of Healthcare Administration Excellence
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                As a seasoned and highly skilled Certified Professional Medical Coder with over a decade of comprehensive experience, I've dedicated my career to the dynamic and critical field of medical coding and billing. My journey in healthcare administration has been marked by a commitment to precision, expertise, and a passion for ensuring accurate documentation in various medical settings.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Navigating Complexity with Expertise
              </h3>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                My expertise extends to navigating the intricacies of coding procedures and diagnoses, ensuring compliance with industry standards and regulations. I understand that insurance and billing can feel overwhelming—especially when you're already navigating eating disorder treatment. That's where my experience becomes your advantage.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                My dedication to this craft is reflected in my professional certification, attesting to my commitment to staying abreast of the ever-evolving landscape of medical coding. I remain attuned to industry updates and best practices, ensuring our practice maintains the highest standards of coding excellence.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Supporting Quality Patient Care
              </h3>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                My work in accurately translating medical records into coded information plays a crucial role in facilitating smooth billing processes and supporting healthcare providers in delivering quality patient care. When coding is done right, claims are approved, providers are reimbursed, and patients can focus on healing—not billing headaches.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                My meticulous attention to detail and ability to adapt to different specialties underscore my versatility in managing coding challenges across a spectrum of medical disciplines. This adaptability is particularly valuable in eating disorder treatment, where specialized coding knowledge is essential.
              </p>
            </div>
            
            <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
              <p className="text-foreground italic text-center">
                <strong>My Commitment to You:</strong> Precision and compliance are paramount in medical billing. As a proactive professional committed to the highest standards of coding excellence, I work diligently to ensure your billing is accurate, your insurance benefits are maximized, and your questions are answered clearly and promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Billing Transparency */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Understanding Your Insurance & Billing
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
              Common Billing Questions I Can Help With:
            </h3>
            
            <div className="space-y-6">
              {billingQuestions.map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary mb-2">{item.question}</p>
                      <p className="text-foreground">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-foreground italic text-lg">
                <strong>Don't hesitate to reach out with billing questions.</strong> I'm here to provide clarity and support throughout the insurance and billing process. No question is too small or too complicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Expertise Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            The Value of Professional Medical Coding
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              You might wonder: Why does having a Certified Professional Medical Coder matter? Here's the difference it makes:
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-primary mb-2">Accurate Coding = Better Coverage:</p>
                <p>
                  Eating disorder treatment involves complex diagnostic codes (ICD-10) and procedure codes (CPT). Incorrect coding can result in claim denials or reduced reimbursement. My expertise ensures your treatment is coded accurately for maximum insurance coverage.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Compliance = Protection:</p>
                <p>
                  Medical coding must comply with federal regulations, insurance policies, and industry standards. Non-compliance can result in audits, denials, or even fraud allegations. My commitment to compliance protects both you and our practice.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Efficiency = Less Stress:</p>
                <p>
                  When coding is done right the first time, claims are approved faster, you receive clearer billing statements, and there are fewer billing surprises. My decade of experience means smoother processes and fewer headaches for you.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Specialty Knowledge = Better Results:</p>
                <p>
                  Eating disorder treatment has specific coding requirements that general medical coders may not understand. My experience with mental health and eating disorder coding ensures your treatment is represented accurately to insurance companies.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Advocacy = Your Partner:</p>
                <p>
                  When insurance companies deny claims or question medical necessity, I advocate on your behalf. I know the language, the regulations, and the appeal processes—and I use that knowledge to fight for your coverage.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-primary p-8 rounded-lg text-center">
              <p className="text-white text-lg font-medium">
                <strong>Bottom Line:</strong> My expertise isn't just about codes and claims—it's about ensuring you can access the eating disorder treatment you need without unnecessary financial barriers. That's the value I bring to your care team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Billing Support
          </h2>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about your insurance coverage, need help understanding a billing statement, or want to set up a payment plan, I'm here to help. Don't let billing concerns become barriers to your treatment.
          </p>
          
          <div className="space-y-4 mb-8">
            <p className="text-2xl font-bold">
              <Phone className="inline-block mr-2 h-6 w-6" />
              (360) 726-4141
            </p>
            <p className="text-lg">Portland, OR & Vancouver, WA</p>
            <p className="text-base text-white/90">Billing support available Monday-Friday</p>
          </div>
          
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white mb-4">
            Contact Billing Support
          </Button>
          
          <p className="text-sm text-white/80 italic">
            Response time: Within 1-2 business days
          </p>
        </div>
      </section>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default MichelleSullins;