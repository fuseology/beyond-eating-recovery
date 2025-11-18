import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, Heart, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const BodyShame = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumbs />
      
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Body Shame Counseling: Healing Your Relationship with Your Body
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
                Body shame is the deeply painful feeling that your body is wrong, unacceptable, or not good enough. In a culture obsessed with appearance and thinness, body shame has become so normalized that many of us don't even recognize it for what it is—internalized oppression. At Beyond Eating Recovery, we help you identify, understand, and heal from body shame so you can reclaim your right to exist peacefully in your body, exactly as it is. You deserve to live free from the constant criticism, comparison, and shame that body-focused culture demands.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/contact">Start Your Healing Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12">
            {/* Main Content Area */}
            <div className="space-y-16">
              {/* What Is Body Shame */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-primary">Understanding Body Shame</h2>
                <div className="space-y-4 text-foreground/80">
                  <p className="text-lg leading-relaxed">
                    Body shame is the internalized belief that your body is defective, unworthy, or in need of fixing. It's the voice in your head that says you're "too fat," "too thin," "too flabby," "not toned enough," or simply "not good enough." Body shame tells you that you must change your body in order to be acceptable, lovable, or worthy of taking up space in the world.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mt-8 mb-4 text-primary">Where Body Shame Shows Up:</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-primary">Internal Experience:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Negative self-talk: Constant criticism of your appearance, size, or shape</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Comparison: Measuring yourself against others and always feeling you fall short</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Hypervigilance: Obsessive monitoring of your body—checking mirrors, weighing, measuring, pinching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Avoidance: Refusing to look at yourself, hiding from cameras, avoiding mirrors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Catastrophizing: Believing that your body's appearance determines your worth and future</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Self-objectification: Viewing yourself through others' eyes, constantly evaluating your appearance</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-primary">Behavioral Signs:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Hiding your body: Wearing oversized clothing, refusing to wear certain items</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Social withdrawal: Avoiding social situations, events, or activities due to body concerns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Apologizing for your body: Making self-deprecating comments about your appearance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Participating in body-shaming conversations: Bonding with others through mutual body criticism</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Excessive grooming or body modification: Spending excessive time, money, and energy trying to "fix" your body</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-primary">Emotional Impact:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Anxiety and fear about being seen or judged</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Depression and hopelessness about your body</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Isolation and loneliness</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <span>Feeling undeserving of love, pleasure, or success</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded">
                    <p className="text-lg font-medium text-foreground">
                      Body shame is not your fault. You didn't create it. But you can heal from it. And on the other side of that healing is freedom.
                    </p>
                  </div>
                </div>
              </section>

              {/* Where Body Shame Comes From */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-primary">The Roots of Body Shame</h2>
                <div className="space-y-6 text-foreground/80">
                  <p className="text-lg leading-relaxed">
                    Body shame doesn't develop in a vacuum. It's learned, absorbed, and internalized through a lifetime of messages telling you that your body is a problem to be solved. Understanding where body shame comes from is the first step in dismantling it.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-primary">Cultural and Societal Sources:</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-primary">Diet Culture and the Thin Ideal</h4>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>The $72 billion diet industry depends on body shame for profit</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Media images that portray only thin, white, able-bodied people as desirable</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>The toxic belief that thinness equals health, discipline, and worthiness</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>"Wellness culture" that disguises dieting as health</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-primary">Weight Stigma and Fatphobia</h4>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Systemic discrimination against people in larger bodies</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Medical bias that blames all health issues on weight</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Social narratives that portray fat bodies as lazy, undisciplined, or unhealthy</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Structural barriers (airplane seats, medical equipment, clothing sizes) that exclude larger bodies</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-primary">Racism and Eurocentric Beauty Standards</h4>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Beauty standards rooted in white supremacy</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Discrimination against natural Black hair, darker skin tones, and ethnic features</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Cultural appropriation that celebrates features on white bodies while shaming them on bodies of color</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-primary">Family and Childhood Experiences:</h3>
                      <p className="mb-4">Many people first internalize body shame during childhood through:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span><strong>Direct comments:</strong> Family members commenting on your weight, eating, or appearance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span><strong>Indirect messages:</strong> Observing parents' diet behaviors, weight anxiety, or negative body talk</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span><strong>Teasing and bullying:</strong> Childhood or adolescent experiences of being mocked for appearance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span><strong>Puberty:</strong> Natural body changes met with shame or criticism</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span><strong>Comparison:</strong> Being compared to siblings or peers</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <p className="text-lg font-medium text-foreground">
                        "Body shame is not a personal failing. It's a predictable response to living in a culture that systematically teaches you to hate your body. Healing requires recognizing that the problem is not your body—it's the culture."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Impact of Body Shame */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-primary">How Body Shame Affects Your Life</h2>
                <div className="space-y-6 text-foreground/80">
                  <p className="text-lg leading-relaxed">
                    Body shame doesn't just make you feel bad about your appearance—it infiltrates every aspect of your life, limiting your freedom, joy, and wellbeing. The cost of body shame is enormous.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-primary">Mental Health Impact</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Depression and persistent feelings of worthlessness</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Anxiety and constant worry about appearance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Eating disorders and disordered eating patterns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Body dysmorphia and distorted perception</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Low self-esteem and self-worth struggles</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-primary">Life Limitation Impact</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Social withdrawal and isolation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Career and professional limitations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Relationship struggles and intimacy avoidance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Lost time and energy on body preoccupation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>Inability to experience joy and presence</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded">
                    <p className="text-lg font-medium text-foreground">
                      "Imagine what you could do with all the energy you've spent hating your body. Imagine the relationships you could build, the dreams you could pursue, the joy you could experience. That life is possible—and it starts with healing body shame."
                    </p>
                  </div>
                </div>
              </section>

              {/* Self-Assessment */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-primary">Do You Struggle with Body Shame?</h2>
                <div className="space-y-6 text-foreground/80">
                  <p className="text-lg leading-relaxed">
                    Body shame is so normalized in our culture that many people don't realize the extent to which it controls their lives. This self-assessment can help you identify patterns of body shame.
                  </p>

                  <div className="bg-secondary/30 p-6 rounded-lg space-y-6">
                    <h3 className="text-xl font-semibold text-primary">Self-Reflection Questions:</h3>
                    <p className="text-sm text-muted-foreground">Check any statements that resonate with you:</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Thoughts and Beliefs:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I believe my body is unacceptable or wrong as it is</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I think about my appearance or weight multiple times per day</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I compare my body to others constantly</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I believe I'd be happier/more successful/more lovable if my body were different</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I judge my day as "good" or "bad" based on how I feel about my body</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Behaviors:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I avoid mirrors or reflective surfaces</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I hide my body under oversized or specific clothing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I avoid being photographed or hate seeing photos of myself</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I've skipped events (weddings, parties, vacations) because of body shame</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I constantly diet or try to change my body</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Emotional Experience:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I feel anxious or panicked when I think about my body</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I experience shame, disgust, or hatred toward my body</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I feel hopeless about ever accepting my body</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>I avoid physical intimacy due to body shame</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-sm italic mt-6">
                      If you checked multiple items, body shame is likely impacting your life—and you deserve support in healing from it.
                    </p>
                  </div>

                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <p className="text-lg">
                      Body shame is incredibly common because we live in a culture that systematically teaches it. If you recognized yourself in these questions, you're not alone, and you're not broken. You've simply internalized messages that were never true.
                    </p>
                    <p className="text-lg font-medium mt-4 text-primary">
                      The good news? Body shame is learned, which means it can be unlearned.
                    </p>
                  </div>
                </div>
              </section>

              {/* Our Approach */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-primary">How Beyond Eating Recovery Heals Body Shame</h2>
                <div className="space-y-6 text-foreground/80">
                  <p className="text-lg leading-relaxed">
                    Healing from body shame is not about "thinking positive" or forcing yourself to love your body. It's about dismantling the systems of oppression you've internalized, reconnecting with your inherent worth, and reclaiming your right to exist without apology.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-primary">Our Foundational Principles:</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-primary">Health At Every Size® (HAES®)</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">We reject the belief that health can be determined by body size. We practice weight-neutral care that honors body diversity.</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-primary">Weight Stigma Awareness</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">We recognize that body shame is actually internalized weight stigma—discriminatory beliefs about body size that permeate our culture.</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-primary">Social Justice Orientation</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">Body shame is connected to racism, sexism, ableism, homophobia, transphobia, and classism. Healing requires recognizing these systems.</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-primary">Body Liberation Philosophy</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">We believe in body liberation—the right for all bodies to exist without oppression, discrimination, or shame.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-primary">Anne Cuthbert's 6-Step Process for Body Shame Healing:</h3>
                      <div className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-primary">Step 1: Awareness and Identification</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Recognize body shame patterns in your thoughts, feelings, and behaviors</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Identify the sources of your body shame</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Begin tracking body shame triggers</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-primary">Step 2: Education and Deprogramming</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Learn about diet culture, weight stigma, and the thin ideal</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Challenge the belief systems you've internalized</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Recognize body shame as learned oppression, not truth</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-primary">Step 3: Grieving and Anger</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Grieve the time, energy, and money lost to body shame</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Feel and express anger at the systems that taught you to hate your body</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Process the pain of discrimination or trauma related to your body</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-primary">Step 4: Developing Compassion and Neutrality</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Practice self-compassion for the parts of you that learned body shame</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Build body neutrality—recognizing your body as a vessel, not an ornament</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Develop appreciation for what your body does, not just how it looks</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-primary">Step 5: Behavioral Liberation</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Stop engaging in body-shaming behaviors</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Experiment with previously avoided activities</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Set boundaries with people who engage in body shaming</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-primary">Step 6: Values-Aligned Living</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Identify what truly matters to you beyond appearance</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Build a life based on values, meaning, and connection</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>Redirect energy from body modification to pursuits that fulfill you</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-8">
                    <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                      <Link to="/contact">Schedule Your Free Consultation</Link>
                    </Button>
                    <p className="mt-4 text-muted-foreground">Call us: 360-726-4141</p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-primary">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-primary">Health At Every Size®</CardTitle>
                      <CardDescription>Learn about the weight-neutral philosophy that guides our approach</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild>
                        <Link to="/health-at-every-size">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-primary">Binge Eating Disorder</CardTitle>
                      <CardDescription>Understand how body shame drives binge eating</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild>
                        <Link to="/conditions/binge-eating-disorder">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-primary">Our Treatment Approach</CardTitle>
                      <CardDescription>Explore our comprehensive treatment philosophy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild>
                        <Link to="/our-approach">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-primary">Meet Our Team</CardTitle>
                      <CardDescription>Learn about our specialists in body shame healing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild>
                        <Link to="/about">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Expert Profile */}
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-primary">Healing with Anne Cuthbert</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={anneCuthbertPhoto} 
                    alt="Anne Cuthbert, MA, LPC, LMHC - Body Shame and Eating Disorder Specialist"
                    className="w-full rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Anne Cuthbert, MA, LPC, LMHC</h3>
                    <p className="text-sm text-muted-foreground mb-2">Founder & Owner, Beyond Eating Recovery</p>
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium mb-3">
                      20+ Years Experience | Personal Recovery Story
                    </div>
                    <p className="text-sm text-foreground/80 mb-4">
                      Anne understands body shame from the inside out. As someone who has walked the path of recovery, Anne brings authentic empathy to her work helping clients heal from body shame and eating disorders.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary">Specialties:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>Body Shame & Liberation</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>Health At Every Size®</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>Eating Disorder Recovery</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>Weight-Neutral Care</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>Social Justice Approach</span>
                        </li>
                      </ul>
                    </div>
                    <Button className="w-full mt-4 bg-accent hover:bg-accent/90" asChild>
                      <Link to="/about/anne-cuthbert">Work with Anne</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Book CTA */}
              <Card className="bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-primary">Understand Your Body Shame</CardTitle>
                  <CardDescription>Free Chapter: Making Peace with Your Body</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={bookCover} 
                    alt="If Your Hunger Could Talk book cover by Anne Cuthbert"
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-foreground/80">
                    Anne's book explores the deeper emotional roots of body shame and offers a compassionate path toward body peace.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" target="_blank" rel="noopener noreferrer">
                      View on Amazon
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Schedule Consultation */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-6 h-6" />
                    <CardTitle>Ready to Heal Body Shame?</CardTitle>
                  </div>
                  <CardDescription className="text-primary-foreground/80">Free 15-Minute Consultation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Take the first step toward body peace. Schedule a free consultation to learn how we can support you in healing body shame and reclaiming your life.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>📞 Phone: 360-726-4141</p>
                    <p>📍 Portland, OR & Vancouver, WA</p>
                    <p>💻 Teletherapy Available</p>
                    <p className="text-xs opacity-90">Monday - Friday: 9am - 5pm</p>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <p className="text-xs text-center opacity-90">Insurance accepted. Self-pay options available.</p>
                </CardContent>
              </Card>

              {/* Crisis Resources */}
              <Card className="border-2 border-destructive/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <CardTitle className="text-destructive">Need Immediate Support?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">988 Suicide & Crisis Lifeline</p>
                    <p className="text-muted-foreground">Call or text: 988</p>
                    <p className="text-muted-foreground text-xs">Available 24/7</p>
                  </div>
                  <div>
                    <p className="font-semibold">Crisis Text Line</p>
                    <p className="text-muted-foreground">Text "HELLO" to 741741</p>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default BodyShame;
