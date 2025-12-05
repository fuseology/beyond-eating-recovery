import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/beyond-eating-recovery-logo.png";

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
        <img 
          src={logo} 
          alt="Beyond Eating Recovery" 
          className="h-24 md:h-32 w-auto mx-auto mb-8"
        />
        
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

        <div className="flex justify-center items-center">
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg" asChild>
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
