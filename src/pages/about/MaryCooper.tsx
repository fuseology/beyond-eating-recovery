import { Phone, Megaphone, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MaryCooper = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Mary Cooper
            </h1>
            
            <p className="text-xl md:text-2xl text-accent font-medium">
              Marketing Administrator
            </p>
            
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              I work behind the scenes to help connect people with the eating disorder treatment and support they need. Through thoughtful marketing and community outreach, I ensure our practice reaches those who are seeking compassionate, evidence-based care in the Portland and Vancouver areas.
            </p>
            
            <div className="pt-4 space-y-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Contact Our Office
              </Button>
              <p className="text-primary text-lg font-semibold">
                <Phone className="inline-block mr-2 h-5 w-5" />
                (360) 726-4141
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Responsibilities Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            How I Support Our Mission
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <Megaphone className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold text-primary">What I Do</h3>
              <div className="text-foreground space-y-3">
                <p>As Marketing Administrator, I focus on:</p>
                
                <div>
                  <p className="font-semibold mb-2">Community Connection:</p>
                  <ul className="space-y-2 pl-4">
                    <li>• Sharing accurate eating disorder information</li>
                    <li>• Building awareness about treatment options</li>
                    <li>• Connecting people with resources</li>
                    <li>• Maintaining our online presence</li>
                    <li>• Creating helpful educational content</li>
                    <li>• Supporting community outreach efforts</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Practice Support:</p>
                  <ul className="space-y-2 pl-4">
                    <li>• Website management and updates</li>
                    <li>• Social media coordination</li>
                    <li>• Marketing materials development</li>
                    <li>• Event planning and coordination</li>
                    <li>• Professional referral relationships</li>
                    <li>• Brand consistency across platforms</li>
                  </ul>
                </div>
                
                <p className="pt-4">
                  My work ensures that when someone is searching for eating disorder support in Portland or Vancouver, they can find us—and find hope.
                </p>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold text-primary">My Approach</h3>
              <div className="text-foreground space-y-4">
                <p className="font-semibold">Thoughtful, Compassionate Marketing</p>
                
                <p>
                  Marketing in the mental health field requires sensitivity and integrity. I approach this work with:
                </p>
                
                <ul className="space-y-3 pl-4">
                  <li>• <strong>Respect:</strong> Honoring the vulnerability of seeking treatment</li>
                  <li>• <strong>Accuracy:</strong> Sharing evidence-based information</li>
                  <li>• <strong>Authenticity:</strong> Representing our practice values genuinely</li>
                  <li>• <strong>Accessibility:</strong> Making information clear and easy to find</li>
                  <li>• <strong>Inclusivity:</strong> Ensuring diverse communities feel welcomed</li>
                  <li>• <strong>Compassion:</strong> Remembering real people behind every search</li>
                </ul>
                
                <p className="pt-4">
                  Every blog post, social media update, or marketing material I create is designed to provide value, reduce stigma, and connect people with care—not just promote a business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            The Work Behind the Scenes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Connecting People with Care
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                You might not see my work directly, but it plays an important role in connecting individuals and families with the eating disorder treatment they need. When you find our practice through a Google search, read a helpful blog post, or see us on social media—that's often the result of marketing work done with intention and care.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                More Than Just Marketing
              </h3>
              <div className="text-foreground text-lg leading-relaxed space-y-4">
                <p>
                  Marketing in the eating disorder treatment field is about more than visibility—it's about:
                </p>
                
                <div className="space-y-3">
                  <p><strong>Education:</strong> Sharing accurate information about eating disorders, treatment approaches, and recovery possibilities.</p>
                  
                  <p><strong>Hope:</strong> Reminding people that recovery is possible and help is available.</p>
                  
                  <p><strong>Accessibility:</strong> Making it easy to understand our services, insurance options, and how to take the first step.</p>
                  
                  <p><strong>Community:</strong> Building connections with referring professionals, community organizations, and support networks.</p>
                  
                  <p><strong>Destigmatization:</strong> Challenging misconceptions about eating disorders and mental health treatment.</p>
                  
                  <p><strong>Representation:</strong> Ensuring diverse voices, bodies, and experiences are reflected in our materials.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
              <p className="text-foreground italic text-center">
                <strong>My Commitment:</strong> Every piece of content I create is designed to serve those seeking help—providing clear information, reducing barriers to treatment, and reinforcing that all bodies and all people deserve compassionate, evidence-based care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Marketing with Integrity
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              The eating disorder treatment field requires marketing practices that align with clinical values. Here's how I approach this work:
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-primary mb-2">Weight-Neutral Language:</p>
                <p>
                  All marketing materials reflect our HAES® (Health At Every Size®) philosophy—never promoting weight loss or body change as treatment goals.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Inclusive Representation:</p>
                <p>
                  Ensuring our imagery, language, and content represent diverse bodies, identities, races, genders, and experiences. Eating disorders affect all types of people.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Evidence-Based Information:</p>
                <p>
                  Sharing scientifically accurate information about eating disorders, treatment approaches, and recovery—never making false promises or using fear-based tactics.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Ethical Practices:</p>
                <p>
                  Following professional guidelines for mental health marketing, respecting client confidentiality, and avoiding exploitative messaging.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Authentic Voice:</p>
                <p>
                  Representing our team's genuine expertise, values, and approach—not creating an artificial brand persona that doesn't match the real practice.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Accessibility Focus:</p>
                <p>
                  Writing in clear, jargon-free language; ensuring website accessibility; providing information in multiple formats; removing barriers to understanding services.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-primary mb-2">Community-Centered:</p>
                <p>
                  Building genuine relationships with referring professionals, community organizations, and the people we serve—not just transactional marketing.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-primary p-8 rounded-lg text-center">
              <p className="text-white text-lg font-medium">
                <strong>The Why Behind the Work:</strong> Marketing might seem disconnected from clinical care, but thoughtful, ethical marketing ensures the right people can find the right help at the right time. That's why I take this work seriously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Building Community Connections
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              Beyond digital marketing, I work to build connections within the Portland and Vancouver communities:
            </p>
            
            <div className="space-y-4">
              <p>
                <strong>Professional Referral Relationships:</strong> Building relationships with physicians, therapists, school counselors, and other professionals who may refer clients to our practice.
              </p>
              
              <p>
                <strong>Community Events:</strong> Coordinating participation in community health fairs, eating disorder awareness events, and educational workshops.
              </p>
              
              <p>
                <strong>Resource Sharing:</strong> Connecting people with additional resources beyond our practice—crisis lines, support groups, educational materials, and community organizations.
              </p>
              
              <p>
                <strong>Partnerships:</strong> Collaborating with local organizations that share our values—LGBTQIA+ centers, body-positive fitness spaces, HAES®-aligned practitioners, and social justice organizations.
              </p>
              
              <p>
                <strong>Education:</strong> Providing presentations or materials to schools, colleges, athletic programs, and community groups about eating disorder prevention and treatment.
              </p>
              
              <p>
                <strong>Online Community:</strong> Managing social media presence that provides value, shares resources, reduces stigma, and creates a sense of connection for those on recovery journeys.
              </p>
            </div>
            
            <div className="mt-8 bg-accent/10 border border-accent/20 p-6 rounded-lg">
              <p className="text-foreground italic text-center">
                <strong>Community Matters:</strong> Eating disorder recovery doesn't happen in isolation. By building strong community connections, we help create a network of support that extends beyond our practice walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            If you have questions about our practice, need information for a referral, or are interested in community partnerships, I'm here to help connect you with the right resources.
          </p>
          
          <div className="space-y-4 mb-8">
            <p className="text-2xl font-bold">
              <Phone className="inline-block mr-2 h-6 w-6" />
              (360) 726-4141
            </p>
            <p className="text-lg">Portland, OR & Vancouver, WA</p>
            <p className="text-base text-white/90">Website | Social Media | Blog</p>
          </div>
          
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Contact Our Office
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaryCooper;