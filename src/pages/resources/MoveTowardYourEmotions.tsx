import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Headphones, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const audioUrl = `${SUPABASE_URL}/storage/v1/object/public/media/Move%20Toward%20Your%20Feelings.mp3`;

const MoveTowardYourEmotions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Move Toward Your Emotions | Audio Resource | Beyond Eating Recovery</title>
        <meta 
          name="description" 
          content="Expressing your emotions is key to recovery. This audio will help you connect with your body, your emotions, and help you express them in a way that will support your recovery." 
        />
        <meta property="og:title" content="Move Toward Your Emotions | Beyond Eating Recovery" />
        <meta property="og:description" content="A guided audio to help you connect with your body and emotions during eating disorder recovery." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/resources/move-toward-your-emotions" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AudioObject",
            "name": "Move Toward Your Emotions",
            "description": "Expressing your emotions is key to recovery. This audio will help you connect with your body, your emotions, and help you express them in a way that will support your recovery.",
            "contentUrl": audioUrl,
            "encodingFormat": "audio/mpeg",
            "provider": {
              "@type": "Organization",
              "name": "Beyond Eating Recovery",
              "url": "https://www.beyondeatingrecovery.com"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/resources" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-accent" />
            </div>
            <span className="text-accent font-medium">Audio Resource</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Move Toward Your Emotions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            A guided practice to help you connect with and express your feelings
          </p>
        </div>
      </section>

      {/* Audio Player Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-accent/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">Listen Now</h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Audio Exercise</span>
                    </div>
                  </div>
                </div>
                
                <audio 
                  controls 
                  className="w-full mb-6"
                  preload="metadata"
                >
                  <source src={audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>

                <div className="bg-secondary/30 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-3">About This Audio</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Expressing your emotions is key to recovery. This audio will help you connect 
                    with your body, your emotions, and help you express them in a way that will 
                    support your recovery. Take a moment to find a quiet, comfortable space before 
                    beginning this practice.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tips Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Tips for Practice</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-2">Find a Quiet Space</h4>
                    <p className="text-foreground/80 text-sm">
                      Choose a comfortable, private place where you won't be interrupted during your practice.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-2">Use Headphones</h4>
                    <p className="text-foreground/80 text-sm">
                      For the best experience, use headphones to fully immerse yourself in the guided practice.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-2">Be Patient with Yourself</h4>
                    <p className="text-foreground/80 text-sm">
                      It's okay if emotions feel difficult to access at first. This is a practice that deepens over time.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-2">Practice Regularly</h4>
                    <p className="text-foreground/80 text-sm">
                      Return to this audio whenever you need support connecting with your emotional experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-foreground/80 mb-4">
                Ready for personalized support on your recovery journey?
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MoveTowardYourEmotions;
