import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Phone, AlertCircle, ExternalLink, Trophy, Activity, Heart, Users, Target, Zap } from "lucide-react";
import anneCuthbertPhoto from "@/assets/anne-cuthbert-photo.jpg";
import bookCover from "@/assets/if-your-hunger-could-talk-book.jpg";

const AthletesEatingDisorders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Eating Disorders in Athletes: Treatment in Portland & Vancouver | Beyond Eating Recovery</title>
        <meta name="description" content="Specialized treatment for athletes with eating disorders. Address sport culture, performance pressure, RED-S. Return-to-sport support. Weight-neutral, athlete-informed care. Oregon & Washington—call 360-726-4141." />
        <meta name="keywords" content="athlete eating disorder treatment, sports eating disorder therapy Portland, RED-S treatment Vancouver WA, female athlete triad, eating disorder athlete recovery, return to sport, wrestler eating disorder, gymnast eating disorder, runner eating disorder, weight-class sport, aesthetic sport, compulsive exercise athlete, telehealth Oregon Washington" />
      </Helmet>

      <Header />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li><Link to="/conditions" className="hover:text-primary">Eating Disorders</Link></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li className="text-foreground">Eating Disorders in Athletes</li>
        </ol>
      </nav>

      {/* Two-column layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - 70% */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Hero Section */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Eating Disorders in Athletes: Treatment in Portland & Vancouver
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Athletes face unique pressures that significantly increase eating disorder risk: performance demands, weight requirements, body scrutiny, coach influence, and a culture that often normalizes disordered eating as "dedication." If you're an athlete struggling with food, body image, or compulsive training—your experience is valid, and specialized treatment can help you heal while honoring your love of sport. At Beyond Eating Recovery, we provide athlete-informed, compassionate treatment throughout Oregon and Washington that addresses both the eating disorder and the athletic culture that contributes to it.
              </p>
            </section>

            {/* Section 1: Understanding */}
            <section>
              <h2 className="text-3xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Trophy className="h-8 w-8 text-accent" />
                Understanding Eating Disorders in Athletes
              </h2>
              
              <div className="space-y-6 text-foreground">
                <p>
                  Athletes experience eating disorders at significantly elevated rates compared to non-athletes. This isn't because athletes are inherently disordered—it's because athletic culture, performance pressure, body scrutiny, and sport-specific demands create conditions where eating disorders thrive.
                </p>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-primary mb-3">The Statistics</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Elite athletes:</strong> 20-45% meet criteria for eating disorders (varies by sport)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Aesthetic sports</strong> (gymnastics, figure skating, diving, dance): 40-60% prevalence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Weight-class sports</strong> (wrestling, rowing, judo, boxing): 30-50% prevalence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Endurance sports</strong> (distance running, cycling, swimming): 25-40% prevalence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>All sports:</strong> Higher rates than general population</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Female athletes:</strong> Historically higher recognized rates, but gap closing as male athletes increasingly identified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Male athletes:</strong> Significantly underdiagnosed and undertreated</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">All Types of Eating Disorders Affect Athletes</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/anorexia-nervosa" className="text-primary hover:underline">Anorexia nervosa</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/atypical-anorexia" className="text-primary hover:underline">Atypical anorexia</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/bulimia-nervosa" className="text-primary hover:underline">Bulimia nervosa</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/binge-eating-disorder" className="text-primary hover:underline">Binge eating disorder</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/arfid" className="text-primary hover:underline">ARFID</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/osfed" className="text-primary hover:underline">OSFED</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/orthorexia" className="text-primary hover:underline">Orthorexia</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/exercise-addiction" className="text-primary hover:underline">Compulsive exercise</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <Link to="/conditions/disordered-eating" className="text-primary hover:underline">Disordered eating</Link>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">Sport-Specific Presentations</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span><strong>Weight-class sports:</strong> Dangerous weight cutting, cycling between restriction and bingeing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span><strong>Aesthetic sports:</strong> Extreme restriction, pressure for specific "look," judging based on appearance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span><strong>Endurance sports:</strong> Over-training, under-fueling, "lighter = faster" mentality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span><strong>Power sports:</strong> Muscle dysmorphia, steroid use, bulking/cutting cycles</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">Why Athletes Are at Higher Risk</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Performance pressure and competitive demands</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Weight or body composition requirements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Coach influence and messaging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Sport culture normalizing disordered behaviors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Identity deeply tied to athletic performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Body scrutiny (uniforms, weigh-ins, judging)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">The "Athlete Paradox"</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Athletic training requires disciplined eating and training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>But where is the line between dedication and disorder?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Sport culture often celebrates behaviors that are eating disorder symptoms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>"Good athlete" behaviors and eating disorder behaviors overlap dangerously</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20">
                  <p className="text-lg font-semibold mb-2">Important Affirmation:</p>
                  <p>
                    Having an eating disorder doesn't mean you're a bad athlete or weak. It means you're human, navigating a culture that often promotes harmful behaviors in the name of performance. You can recover and still be an athlete—recovery actually improves performance.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Athletic Culture Risk Factors */}
            <section>
              <h2 className="text-3xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Users className="h-8 w-8 text-accent" />
                Unique Risk Factors in Athletic Culture
              </h2>
              
              <div className="space-y-6 text-foreground">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Sport Culture Factors</h3>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">"Win at All Costs" Mentality</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Performance prioritized over health</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Pushing through pain normalized</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Ignoring body signals encouraged</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Rest seen as weakness</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>"No pain, no gain" messaging</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Sacrifice glorified</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Weight and Body Focus</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Weigh-ins (public or private)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Body composition testing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Comments about weight or appearance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Comparison to teammates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Uniforms revealing body shape</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Visual judging (aesthetic sports)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>"Ideal" athletic body promoted</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Coach Influence</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Coaches as authority figures with immense power</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Comments about weight, eating, or body</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Prescriptive meal plans or restrictions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Weighing athletes regularly</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Making assumptions about performance and weight</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Lack of eating disorder education</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Well-meaning but harmful advice</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="text-lg font-semibold text-primary mb-3">Team/Peer Dynamics</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Comparison and competition within team</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Collective dieting or food rules</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Body talk and diet culture</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Hazing or bullying about body/eating</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Social pressure to conform</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="text-lg font-semibold text-primary mb-3">Performance Pressure</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Scholarships dependent on performance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>College recruitment and body standards</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Professional career aspirations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Fear of disappointing others</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span>Identity solely tied to sport success</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Sport-Specific Risk Factors</h3>

                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Aesthetic Sports</h4>
                        <p className="text-sm text-muted-foreground mb-3">Gymnastics, figure skating, diving, ballet, cheerleading, synchronized swimming</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Appearance explicitly judged</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Specific body type expected</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Revealing uniforms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Prepubescent body ideal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Coaches controlling food intake</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Extremely young competitive ages</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Public body scrutiny</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Weight-Class Sports</h4>
                        <p className="text-sm text-muted-foreground mb-3">Wrestling, rowing, lightweight crew, judo, boxing, martial arts, horse racing</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Mandatory weigh-ins before competition</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>"Making weight" culture</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Dangerous rapid weight loss practices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Restriction, dehydration, purging, laxatives, diuretics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Weight cycling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Coaches teaching weight-cutting methods</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>"Everyone does it" normalization</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Endurance Sports</h4>
                        <p className="text-sm text-muted-foreground mb-3">Distance running, cycling, cross-country skiing, triathlon, swimming</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>"Lighter = faster" belief (often false)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Over-training culture</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Under-fueling rationalized as performance strategy</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Amenorrhea seen as "athlete accomplishment"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>RED-S (Relative Energy Deficiency in Sport) common</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Body fat percentage focus</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Injury from under-fueling masked as "training too hard"</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Power and Strength Sports</h4>
                        <p className="text-sm text-muted-foreground mb-3">Football, weightlifting, bodybuilding, track and field throws</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Muscle dysmorphia</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>"Bulking and cutting" cycles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Steroid and supplement use</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Extreme protein focus</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Body composition obsession</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>Different body ideals for different positions</span>
                          </li>
                        </ul>
                        <p className="mt-3 text-sm">
                          See our <Link to="/conditions/body-dysmorphia" className="text-primary hover:underline font-semibold">Body Dysmorphia</Link> and{" "}
                          <Link to="/conditions/men-eating-disorders" className="text-primary hover:underline font-semibold">Eating Disorders in Men</Link> pages
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-primary mb-3">Sport as Identity</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Self-worth completely tied to performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>"I am an athlete" vs. "I do athletics"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Fear of life without sport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Limited exploration of other interests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Retirement or injury threatening identity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: RED-S */}
            <section>
              <h2 className="text-3xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Zap className="h-8 w-8 text-accent" />
                RED-S: Relative Energy Deficiency in Sport
              </h2>
              
              <div className="space-y-6 text-foreground">
                <p className="text-lg font-semibold">
                  A critical concept for understanding athlete health:
                </p>

                <div className="bg-destructive/10 p-6 rounded-lg border-2 border-destructive/30">
                  <h3 className="text-xl font-semibold text-destructive mb-3">What is RED-S?</h3>
                  <p className="mb-3">
                    Relative Energy Deficiency in Sport occurs when athletes don't consume enough energy (calories) to match their energy expenditure from training and daily life. This energy deficit—whether intentional or unintentional—causes widespread physiological impairments.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">Formerly Called "Female Athlete Triad"</h4>
                      <p className="text-sm mb-3">Old model focused on:</p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-accent" />
                          <span>Amenorrhea (loss of period)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-accent" />
                          <span>Osteoporosis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-accent" />
                          <span>Disordered eating</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-accent" />
                          <span>Recognized only in female athletes</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">RED-S Expands Understanding</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Heart className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Affects <strong>ALL</strong> athletes (all genders, all sports)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Impacts multiple body systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Can occur at any body weight or composition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>May or may not involve intentional restriction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>Represents spectrum of severity</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">Causes of Energy Deficiency</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <span>Intentional restriction (eating disorder)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <span>Unintentional under-fueling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <span>Increased training without increased intake</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <span>Poor nutrition knowledge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <span>Limited food access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <span>Disordered eating behaviors</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Health Consequences of RED-S</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-2 border-destructive/30">
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-destructive mb-3">Metabolic Effects</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Decreased resting metabolic rate</li>
                          <li>• Impaired protein synthesis</li>
                          <li>• Decreased glycogen stores</li>
                          <li>• Impaired glucose metabolism</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-destructive/30">
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-destructive mb-3">Hormonal Disruption</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Menstrual dysfunction</li>
                          <li>• Low testosterone</li>
                          <li>• Thyroid hormone suppression</li>
                          <li>• Growth hormone changes</li>
                          <li>• Cortisol dysregulation</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-destructive/30">
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-destructive mb-3">Bone Health</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Decreased bone mineral density</li>
                          <li>• Osteopenia and osteoporosis</li>
                          <li>• Stress fractures (recurrent, non-healing)</li>
                          <li>• <strong>Potentially irreversible bone loss</strong></li>
                          <li>• Increased fracture risk lifelong</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-destructive/30">
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-destructive mb-3">Cardiovascular</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Decreased heart rate variability</li>
                          <li>• Orthostatic intolerance</li>
                          <li>• Cardiac dysfunction (in severe cases)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-destructive/30">
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-destructive mb-3">Immune Function</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Increased illness and infection</li>
                          <li>• Impaired wound healing</li>
                          <li>• Delayed recovery from training</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-destructive/30">
                      <CardContent className="pt-6">
                        <h4 className="text-lg font-semibold text-destructive mb-3">Psychological</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Depression</li>
                          <li>• Anxiety</li>
                          <li>• Irritability</li>
                          <li>• Poor concentration</li>
                          <li>• Impaired judgment</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold text-primary mb-3">Performance Consequences</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Decreased endurance and strength</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Increased injury risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Impaired training response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Poor recovery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Decreased coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Impaired decision-making</span>
                    </li>
                  </ul>
                  <p className="mt-4 font-semibold text-lg">
                    Paradox: Under-fueling intended to improve performance actually impairs it.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">Treatment Requires:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      <span>Increasing energy intake</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      <span>Modifying training (often reducing volume/intensity)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      <span>Medical monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      <span>Nutritional rehabilitation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      <span>Addressing eating disorder if present</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      <span>Team approach (medical, nutritional, psychological, coaching)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-primary-foreground p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Specialized Care for Athletes with Eating Disorders</h2>
              <p className="text-lg mb-6">
                Recovery doesn't mean giving up sport—it means healthier, sustainable athletic life. Contact Beyond Eating Recovery for athlete-informed treatment throughout Oregon and Washington.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:360-726-4141" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call 360-726-4141
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar - 30% */}
          <aside className="space-y-6">
            
            {/* Anne Cuthbert Profile Card */}
            <Card className="sticky top-4">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <img 
                    src={anneCuthbertPhoto} 
                    alt="Anne Cuthbert, MA, LPC, LMHC - Founder and Lead Therapist" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-lg text-primary">Anne Cuthbert, MA, LPC, LMHC</h3>
                  <p className="text-sm text-muted-foreground">Founder & Lead Therapist</p>
                </div>
                
                <p className="text-sm mb-4">
                  20+ years specializing in eating disorders with experience treating athletes across all sports. Understanding of athletic culture, performance pressure, and sport-specific challenges.
                </p>
                
                <div className="space-y-2 text-sm mb-4">
                  <p className="font-semibold text-primary">Credentials:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Licensed Professional Counselor (OR)</li>
                    <li>• Licensed Mental Health Counselor (WA)</li>
                    <li>• CREDN Board Member</li>
                    <li>• ASDAH Member</li>
                    <li>• Athlete-Informed Treatment Specialist</li>
                  </ul>
                </div>

                <p className="text-sm mb-4">
                  <strong>Approach:</strong> Anne understands the unique pressures athletes face and provides treatment that honors athletic identity while prioritizing health.
                </p>
                
                <Button className="w-full" asChild>
                  <Link to="/about/anne-cuthbert">Meet Anne</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Book CTA Card */}
            <Card className="bg-accent text-accent-foreground">
              <CardContent className="pt-6">
                <div className="text-center">
                  <img 
                    src={bookCover} 
                    alt="If Your Hunger Could Talk by Anne Cuthbert" 
                    className="w-40 mx-auto mb-4 shadow-lg rounded"
                  />
                  <h3 className="font-bold text-lg mb-2">
                    "If Your Hunger Could Talk"
                  </h3>
                  <p className="text-sm mb-4">
                    By Anne Cuthbert, MA, LPC, LMHC
                  </p>
                  <p className="text-sm mb-4">
                    Addresses the intersection of control, identity, and eating—relevant for athletes navigating performance pressure and body demands.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a 
                      href="https://www.amazon.com/If-Your-Hunger-Could-Talk/dp/B0BW36MD3R" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Get the Book on Amazon
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Consultation CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="h-6 w-6" />
                  <h3 className="font-bold text-lg">Specialized Treatment for Athletes</h3>
                </div>
                
                <p className="text-sm mb-4">
                  Athlete-informed care addressing sport culture, performance pressure, and eating disorders. We understand your athletic identity.
                </p>

                <p className="text-sm italic mb-4">
                  Recovery doesn't mean giving up sport—it means healthier, sustainable athletic life.
                </p>

                <div className="mb-4">
                  <p className="font-semibold mb-2">Call us today:</p>
                  <p className="text-2xl font-bold mb-2">360-726-4141</p>
                  <p className="text-sm mb-2">Office hours: Monday-Friday, 9am-5pm</p>
                  <p className="text-sm">Telehealth appointments available throughout Oregon and Washington.</p>
                </div>
                
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Schedule Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Crisis Resources Card */}
            <Card className="border-2 border-destructive/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                  <h3 className="font-bold text-lg text-destructive">Need Immediate Support?</h3>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold">988 Suicide & Crisis Lifeline</p>
                    <p className="text-muted-foreground">Call or text 988</p>
                    <p className="text-muted-foreground text-xs">Available 24/7</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">NEDA Helpline</p>
                    <p className="text-muted-foreground">1-800-931-2237</p>
                    <p className="text-muted-foreground text-xs">Monday-Thursday 9am-9pm ET, Friday 9am-5pm ET</p>
                  </div>

                  <div>
                    <p className="font-semibold">Crisis Text Line</p>
                    <p className="text-muted-foreground">Text "NEDA" to 741741</p>
                    <p className="text-muted-foreground text-xs">Available 24/7</p>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p className="font-semibold text-destructive">Medical Emergency:</p>
                    <p className="text-sm">If experiencing cardiac symptoms, stress fracture, severe weakness, or other medical emergency, call 911 or go to your nearest emergency room.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AthletesEatingDisorders;