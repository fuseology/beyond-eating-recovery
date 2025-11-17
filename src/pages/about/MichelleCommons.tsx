import { Phone, Clipboard, Heart, Globe, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import michelleImage from "@/assets/michelle-commons.webp";

const MichelleCommons = () => {
  return (
    <div className="min-h-screen bg-background">
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
                  alt="Michelle Commons - Admin Support at Beyond Eating Recovery"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Info */}
              <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  Michelle Commons
                </h1>
                
                <p className="text-xl md:text-2xl text-accent font-medium">
                  Admin Support | Your First Point of Contact
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Helping people learn and become a better version of themselves is a big passion of mine. I bring friendly support along with organizational skills to the Beyond Eating Recovery team. When you reach out to our practice, you'll likely connect with me first—and I'm here to make your experience as smooth and welcoming as possible.
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
          </div>
        </div>
      </section>

      {/* Role & Support Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            How I Support Our Practice
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <Clipboard className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold text-primary">What I Do</h3>
              <div className="text-foreground space-y-3">
                <p>As Administrative Support, I'm here to help with:</p>
                <ul className="space-y-2 pl-4">
                  <li>• Scheduling appointments and consultations</li>
                  <li>• Answering your questions about our services</li>
                  <li>• Insurance verification and billing support</li>
                  <li>• Coordinating care between team members</li>
                  <li>• Maintaining a welcoming office environment</li>
                  <li>• Administrative assistance for clients and providers</li>
                  <li>• Making your experience with us as smooth as possible</li>
                </ul>
                <p className="pt-4">
                  I'm often your first point of contact, and I take that responsibility seriously. My goal is to ensure you feel welcomed, supported, and cared for from the very first interaction.
                </p>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-lg space-y-4">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold text-primary">My Approach</h3>
              <div className="text-foreground space-y-3">
                <p>
                  I bring friendly, compassionate support to every interaction. Having worked in personal development for over two decades, I understand that reaching out for help takes courage.
                </p>
                <div>
                  <p className="font-semibold mb-2">My Commitment to You:</p>
                  <ul className="space-y-2 pl-4">
                    <li>• Warm, non-judgmental support</li>
                    <li>• Efficient and organized assistance</li>
                    <li>• Respect for your privacy and confidentiality</li>
                    <li>• Patience with questions and concerns</li>
                    <li>• Connecting you with the right team member</li>
                    <li>• Making the administrative side of treatment easy</li>
                  </ul>
                </div>
                <p className="pt-4">
                  You're not just a name in our system—you're a person deserving of care, respect, and support at every touchpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Background & Passions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Personal Development Journey
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                I've been collecting tools for my own personal development over the past couple of decades. This journey has given me deep appreciation for the courage it takes to seek growth, change, and healing. Personal development isn't a destination—it's an ongoing practice of becoming the best version of ourselves.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Professional Experience
              </h3>
              <div className="text-foreground text-lg leading-relaxed space-y-3">
                <p>My background includes:</p>
                <ul className="space-y-2 pl-4">
                  <li>• Teaching art to children (nurturing creativity and self-expression)</li>
                  <li>• Assisting in personal development workshops (supporting others' growth journeys)</li>
                  <li>• Administrative and organizational support (bringing order to chaos)</li>
                  <li>• Creating welcoming, supportive environments for learning and healing</li>
                </ul>
                <p className="pt-4">
                  These experiences have taught me that everyone's path is unique, and small acts of support can make a big difference in someone's journey.
                </p>
              </div>
            </div>
            
            <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
              <p className="text-foreground italic text-center">
                <strong>Why This Matters:</strong> My passion for helping people become better versions of themselves isn't just professional—it's personal. I understand that the administrative side of seeking treatment can feel overwhelming. I'm here to make it easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Beyond the Office
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-foreground text-lg leading-relaxed">
              I live in Santa Barbara with my husband, and together we love traveling the world, spending time with family, and dancing in the kitchen.
            </p>
            
            <p className="text-foreground text-lg leading-relaxed">
              Traveling has taught me that there are countless ways to live, eat, and find joy—perspectives that inform how I support our clients from diverse backgrounds. Family time reminds me what matters most. And dancing in the kitchen? That's pure joy and presence—a reminder to find delight in everyday moments.
            </p>
            
            <p className="text-foreground text-lg leading-relaxed">
              I bring this warmth, curiosity, and appreciation for life's simple pleasures into my work at Beyond Eating Recovery. When you call or email, you're not interrupting my day—you're the reason I'm here.
            </p>
            
            <div className="flex justify-center items-center gap-12 my-8">
              <div className="text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="text-sm text-foreground/80">Travel</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="text-sm text-foreground/80">Family</p>
              </div>
              <div className="text-center">
                <Music className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="text-sm text-foreground/80">Dancing</p>
              </div>
            </div>
            
            <p className="text-center italic text-accent text-lg">
              I look forward to supporting you on your journey with Beyond Eating Recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're scheduling your first appointment, have questions about our services, or need administrative support, I'm here to help. Reach out anytime.
          </p>
          
          <div className="space-y-4 mb-8">
            <p className="text-2xl font-bold">
              <Phone className="inline-block mr-2 h-6 w-6" />
              (360) 726-4141
            </p>
            <p className="text-lg">Portland, OR & Vancouver, WA</p>
            <p className="text-base text-white/90">Monday-Friday</p>
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

export default MichelleCommons;