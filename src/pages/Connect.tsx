import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ExternalLink, ArrowRight, Video } from "lucide-react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Beyond Eating Recovery - Eating Disorders Counseling of Portland",
  "telephone": "(360) 726-4141",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1235 Southeast Division Street",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97202",
  },
  "url": "https://beyondeatingrecovery.com",
  "sameAs": [
    "https://maps.google.com/maps?cid=2874565319030029622",
    "https://beyond-eating-recovery-eating-disorder-therapist-portland.netlify.app/",
    "https://beyond-eating-recovery-who-offers-eating-disorder-treatment.netlify.app/",
    "https://beyond-eating-recovery-binge-eating-disorder-treatment-portl.netlify.app/",
    "https://beyond-eating-recovery-anorexia-treatment-portland.netlify.app/",
    "https://beyond-eating-recovery-bulimia-recovery-therapist-portland.netlify.app/",
  ],
};

const guides = [
  {
    title: "Eating Disorder Therapist Portland — The Beyond Eating Recovery Guide",
    href: "https://beyond-eating-recovery-eating-disorder-therapist-portland.netlify.app/",
    description: (
      <>
        How to find the right{" "}
        <Link to="/services" className="text-accent hover:underline">
          eating disorder therapist
        </Link>{" "}
        in Portland and what to expect from treatment.
      </>
    ),
  },
  {
    title: "Who Offers Eating Disorder Treatment — The Beyond Eating Recovery Guide",
    href: "https://beyond-eating-recovery-who-offers-eating-disorder-treatment.netlify.app/",
    description: (
      <>
        An overview of the providers, specialties, and levels of care involved in{" "}
        <Link to="/conditions" className="text-accent hover:underline">
          eating disorder treatment
        </Link>
        .
      </>
    ),
  },
  {
    title: "Binge Eating Disorder Treatment Portland — The Beyond Eating Recovery Guide",
    href: "https://beyond-eating-recovery-binge-eating-disorder-treatment-portl.netlify.app/",
    description: (
      <>
        What{" "}
        <Link to="/conditions/binge-eating-disorder" className="text-accent hover:underline">
          binge eating disorder treatment
        </Link>{" "}
        looks like in Portland and how our team supports recovery.
      </>
    ),
  },
  {
    title: "Anorexia Treatment Portland — The Beyond Eating Recovery Guide",
    href: "https://beyond-eating-recovery-anorexia-treatment-portland.netlify.app/",
    description: (
      <>
        Compassionate, structured{" "}
        <Link to="/conditions/anorexia-nervosa" className="text-accent hover:underline">
          anorexia treatment
        </Link>{" "}
        in Portland focused on lasting recovery.
      </>
    ),
  },
  {
    title: "Bulimia Recovery Therapist Portland — The Beyond Eating Recovery Guide",
    href: "https://beyond-eating-recovery-bulimia-recovery-therapist-portland.netlify.app/",
    description: (
      <>
        How to find a skilled{" "}
        <Link to="/services" className="text-accent hover:underline">
          bulimia recovery therapist
        </Link>{" "}
        in Portland who understands lasting recovery.
      </>
    ),
  },
];

const videos: Array<{ id: string; title: string }> = [
  { id: "0pmDdZJNSgM", title: "Beyond Eating Recovery video" },
  { id: "xX1NzHsiQrs", title: "Is Food Really the Problem?" },
  { id: "1H2YL57mjtc", title: "Beyond Eating Recovery video" },
  { id: "e0ILEHJhoU8", title: "Beyond Eating Recovery video" },
  { id: "xLJtp8P2vZo", title: "Beyond Eating Recovery video" },
  { id: "BLzx439Z_Xs", title: "Beyond Eating Recovery video" },
];

const Connect = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Beyond Eating Recovery — Official Profiles & Resources</title>
        <meta
          name="description"
          content="One page with every official Beyond Eating Recovery profile, guide, and resource — verified and maintained by our team."
        />
        <link rel="canonical" href="https://beyondeatingrecovery.com/connect" />
        <meta property="og:title" content="Beyond Eating Recovery — Official Profiles & Resources" />
        <meta
          property="og:description"
          content="Every official Beyond Eating Recovery profile, guide, and resource in one place."
        />
        <meta property="og:url" content="https://beyondeatingrecovery.com/connect" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <BreadcrumbSchema
        customItems={[
          { name: "Home", url: "https://www.beyondeatingrecovery.com" },
          { name: "Profiles & Resources", url: "https://www.beyondeatingrecovery.com/connect" },
        ]}
      />
      <Header />

      <main>
        <section className="bg-gradient-to-b from-secondary/30 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumbs />
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Beyond Eating Recovery - Eating Disorders Counseling of Portland
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                One page with every official Beyond Eating Recovery profile, guide, and
                resource — verified and maintained by our team.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Find Us */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-6">Find Us</h2>
            <Card className="shadow-md">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <a
                      href="https://maps.google.com/maps?cid=2874565319030029622"
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 text-lg font-semibold text-accent hover:underline"
                    >
                      <MapPin className="w-5 h-5" />
                      Beyond Eating Recovery on Google Maps
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <address className="not-italic text-foreground/90">
                      1235 Southeast Division Street
                      <br />
                      Portland, OR 97202
                    </address>
                    <a
                      href="tel:+13607264141"
                      className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      (360) 726-4141
                    </a>
                    <div>
                      <Button asChild variant="default" className="mt-2">
                        <Link to="/services">
                          Explore Counseling Services
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22369.992373183937!2d-122.652856!3d45.505065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b992a10ec77%3A0x27e481ed74713d36!2sBeyond%20Eating%20Recovery%20-%20Eating%20Disorders%20Counseling%20of%20Portland!5e0!3m2!1sen!2sus!4v1780090275980!5m2!1sen!2sus"
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Beyond Eating Recovery — Google Business Profile Map"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Guides & Resources */}
        <section className="py-12 md:py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-6">Guides & Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((g) => (
                <Card key={g.href} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      <a
                        href={g.href}
                        target="_blank"
                        rel="noopener"
                        className="text-primary hover:text-accent inline-flex items-start gap-2"
                      >
                        {g.title}
                        <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{g.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Video */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Beyond Eating Recovery on Video
            </h2>
            {videos.length === 0 ? (
              <Card className="shadow-md">
                <CardContent className="p-10 text-center">
                  <Video className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-muted-foreground text-lg">New videos coming soon.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {videos.map((v) => (
                  <div
                    key={v.id}
                    className="aspect-video rounded-lg overflow-hidden shadow-md bg-muted"
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Connect;
