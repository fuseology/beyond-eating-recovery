import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
        <Badge variant="secondary" className="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
          <MapPin className="w-4 h-4 mr-1" />
          Serving Portland, OR & Vancouver, WA
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Are You Struggling With Food, Body Image, or Eating Disorders?
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/95">
          You work hard, care deeply, and want to live your life fully—but when it comes to food and your body, you feel stuck. Maybe you're a student, a professional, a parent, or someone exploring your identity. No matter who you are, feeling trapped in cycles of dieting, guilt, or self-criticism can be overwhelming.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg">
            Book Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-2 border-white text-lg px-8 py-6 shadow-lg">
            Verify Insurance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
