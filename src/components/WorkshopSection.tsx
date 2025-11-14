import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import workshopImage from "@/assets/workshop-image.jpg";

const WorkshopSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden border-2 shadow-xl">
          <div className="md:flex">
            <div 
              className="md:w-2/5 h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${workshopImage})` }}
            />
            <div className="md:w-3/5">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-primary">
                  Loveable At Any Size
                </CardTitle>
                <p className="text-lg font-semibold text-accent">
                  3-Day Intensive Workshop
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Date: TBA</span>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Join us for a transformative three-day intensive workshop designed to help you embrace body acceptance, challenge societal norms, and cultivate a loving relationship with yourself at any size.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Learn More About the Workshop
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>Call <strong className="text-primary">360-726-4141</strong> for Registration</span>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WorkshopSection;
