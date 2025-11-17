import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import bookBackCover from "@/assets/book-back-cover.png";

const BookSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Book by Anne Cuthbert
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading expert in eating disorders with over 20 years of experience helping people heal their relationship with food
          </p>
          <blockquote className="mt-6 max-w-3xl mx-auto text-foreground/90 italic border-l-4 border-primary pl-6 pr-4">
            "I know first hand what it is like to deal with food and body issues. For years, I struggled with food issues and hating my body. I compared myself to every woman I saw and resisted exercising refusing to give into what other people told me I should do and how I should look. I ate to hide how I was feeling and to avoid being close to anyone. I thought I couldn't be loved if I was fat."
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Amazon Book Preview Iframe */}
          <div className="order-2 md:order-1">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
              <iframe
                sandbox="allow-scripts allow-same-origin allow-popups"
                width="100%"
                height="550"
                frameBorder="0"
                allowFullScreen
                style={{ maxWidth: '100%' }}
                src="https://read.amazon.com/kp/card?asin=B0BW7TMB5S&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_3TKMJ8A4X1JHK9CDVM4B&tag=kpembed-20&amazonDeviceType=A2CLFWBIMVSE9N&reshareId=KH5FHC0MX7BCW5YQHJ0S&reshareChannel=system"
              />
            </div>
          </div>

          {/* Book Back Cover Image */}
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <img
                src={bookBackCover}
                alt="If Your Hunger Could Talk - Book back cover featuring Anne Cuthbert's approach to healing eating disorders"
                className="w-full rounded-lg shadow-xl"
              />
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  If Your Hunger Could Talk
                </h3>
                <p className="text-muted-foreground">
                  Available on Amazon in Paperback or Kindle
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a 
                    href="https://a.co/d/ehl8aa0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Buy on Amazon
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookSection;
