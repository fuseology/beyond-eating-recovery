import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users } from "lucide-react";

const HowWeHelpSection = () => {
  const helps = [
    {
      icon: Heart,
      title: "Break Free from Cycles",
      description: "Break free from cycles of dieting, shame, and self-criticism"
    },
    {
      icon: Sparkles,
      title: "Heal Deeper Wounds",
      description: "Heal deeper emotional wounds from childhood, society, or identity struggles"
    },
    {
      icon: Users,
      title: "Trust Your Body",
      description: "Learn to trust your body in an environment that celebrates who you are"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            How We Can Help
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {helps.map((help, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <help.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {help.title}
                </h3>
                <p className="text-muted-foreground">
                  {help.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 text-foreground/80">
            Take the first step toward real freedom and healing.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
