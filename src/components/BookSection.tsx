import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import bookBackCover from "@/assets/book-back-cover.png";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";

const BookSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            If Your Hunger Could Talk
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            By Anne Cuthbert MA, LPC, LMHC
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
            In order to make permanent changes you need to get to the root of the problem and find healthier ways to meet your needs. In the end, counseling will help you overcome your problems with food and how you feel about your body.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Anne's Photo + Description */}
          <div className="order-1">
            <div className="space-y-6">
              <img
                src={anneCuthbertPhoto}
                alt="Anne Cuthbert MA, LPC, LMHC - Author and eating disorder specialist"
                className="w-full rounded-lg shadow-xl"
              />
              
              <p className="text-lg text-muted-foreground text-center">
                Leading expert in eating disorders with over 25 years of experience helping people heal their relationship with food
              </p>
              
              <blockquote className="text-foreground/90 italic border-l-4 border-primary pl-6 pr-4">
                "I know first hand what it is like to deal with food and body issues. For years, I struggled with food issues and hating my body. I compared myself to every woman I saw and resisted exercising refusing to give into what other people told me I should do and how I should look. I ate to hide how I was feeling and to avoid being close to anyone. I thought I couldn't be loved if I was fat."
              </blockquote>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
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

          {/* Right Column: Book Images */}
          <div className="order-2">
            <div className="space-y-6">
              {/* Amazon Book Preview Iframe */}
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
              
              {/* Book Back Cover Image */}
              <img
                src={bookBackCover}
                alt="If Your Hunger Could Talk - Book back cover featuring Anne Cuthbert's approach to healing eating disorders"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookSection;
