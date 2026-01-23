import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Video, Lock } from "lucide-react";
import anneCuthbertPhoto from "@/assets/anne-cuthbert.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";

const FiveStepsDietRollerCoaster = () => {
  useEffect(() => {
    // Reinitialize Constant Contact forms when component mounts
    // Check that both the object and init function exist (script loads async)
    const widget = (window as any).SignUpFormWidget;
    if (widget && typeof widget.init === 'function') {
      widget.init();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>5 Steps to Exiting the Diet Roller Coaster | Free Video Series | Beyond Eating Recovery</title>
        <meta 
          name="description" 
          content="Sign up for Anne Cuthbert's free 5-step video series to end your obsession with food and weight. Learn practical steps to find peace and freedom with food and body image." 
        />
        <meta name="keywords" content="diet roller coaster, stop dieting, food freedom, intuitive eating, body image healing, eating disorder recovery, anti-diet approach, HAES, Vancouver WA, Portland OR" />
      </Helmet>

      <div className="min-h-screen bg-background-light">
        <Header />
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1000px] mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 max-w-[800px] mx-auto leading-tight">
                5 Steps to Exiting the Diet Roller Coaster
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-[700px] mx-auto leading-relaxed">
                A Free Video Series to Help You Find Peace and Freedom with Food and Body Image
              </h2>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[900px] mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  There are steps you can take to end your obsession with food and your weight!
                </p>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Take each step one at a time, working on the challenges that come up along the way, and you too can find peace and freedom with food and body image.
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold text-primary pt-6 mb-4">
                  In This Video Series, You Will Learn:
                </h3>

                <div className="space-y-4 pl-0 md:pl-4">
                  {[
                    "Understanding Diet Culture and Why Diets Don't Work",
                    "Recognizing Your Unique Patterns with Food and Body",
                    "Challenging the Food Rules That Keep You Stuck",
                    "Healing Your Relationship with Your Body",
                    "Building Lasting Freedom and Self-Trust"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Video className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <p className="text-lg text-foreground leading-relaxed">
                        <span className="font-semibold">Step {index + 1}:</span> {step}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Delivery Details */}
                <div className="bg-secondary border-l-4 border-accent rounded-lg p-6 mt-8">
                  <p className="text-base md:text-lg text-foreground leading-relaxed">
                    📬 <strong>Video Delivery Schedule:</strong> One video will be delivered to your email inbox every few days. This spacing gives you time to watch each video and practice that step before moving on to the next one. Some steps may be harder than others, and that's okay!
                  </p>
                </div>

                <p className="text-lg text-foreground/90 leading-relaxed text-center italic pt-6">
                  Be patient with yourself. Do what you can right now, and you will get there. And remember, there is help available when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[600px] mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-4">
                Get Instant Access to the 5-Step Video Series
              </h3>
              <p className="text-lg text-foreground/80 text-center mb-8">
                Enter your information below to start receiving your videos today.
              </p>

              {/* Constant Contact Form Container */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
                {/* Begin Constant Contact Inline Form Code */}
                <div className="ctct-inline-form" data-form-id="1e4bff82-8959-4098-ba51-ed75e027a11c"></div>
                {/* End Constant Contact Inline Form Code */}

                <p className="text-sm text-muted-foreground text-center mt-6 flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  We respect your privacy. Unsubscribe at any time. We'll never share your information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Anne Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[900px] mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Anne's Photo */}
                <div className="flex-shrink-0">
                  <img
                    src={anneCuthbertPhoto}
                    alt="Anne Cuthbert, MA, LPC, LMHC - Founder of Beyond Eating Recovery"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>

                {/* About Text */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Meet Your Guide: Anne Cuthbert, MA, LPC, LMHC
                  </h3>
                  
                  <div className="space-y-4 text-base md:text-lg text-foreground leading-relaxed">
                    <p>
                      Anne Cuthbert is the founder of Beyond Eating Recovery and has over 20 years of experience helping people heal from eating disorders and disordered eating. As someone who has personally recovered from an eating disorder, Anne brings both professional expertise and lived experience to her work. She specializes in Health At Every Size® (HAES®), Intuitive Eating, and trauma-informed care.
                    </p>
                    <p>
                      Anne is a Board Member of the Columbia River Eating Disorder Network (CREDN) and a member of the Association for Size Diversity and Health (ASDAH). Her compassionate, weight-neutral approach has helped hundreds of clients find freedom from food obsession and body shame.
                    </p>
                  </div>

                  <div className="mt-6 text-sm text-muted-foreground font-medium">
                    MA, LPC, LMHC | 20+ Years Experience | CREDN Board Member | ASDAH Member
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[700px] mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Exit the Diet Roller Coaster?
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Sign up above to receive your first video immediately. Your journey to food freedom starts today.
              </p>

              <div className="bg-secondary/50 rounded-lg p-8">
                <p className="text-lg text-foreground mb-6">
                  Want personalized support? Schedule a free consultation with Anne.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link to="/contact">
                    Schedule Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </>
  );
};

export default FiveStepsDietRollerCoaster;
