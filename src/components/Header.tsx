import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const aboutLinks = [
    { title: "Our Team", href: "/about" },
    { title: "Our Approach", href: "/our-approach" },
    { title: "Anne Cuthbert, MA, LPC, LMHC", href: "/about/anne-cuthbert" },
    { title: "Bailey Benn, MA, LPC, LMHC", href: "/about/bailey-benn" },
    { title: "Kiandra Cole, MA", href: "/about/kiandra-cole" },
    { title: "Rachel Bennett, MA", href: "/about/rachel-bennett" },
    
    { title: "Sara Kranich, MA", href: "/about/sara-kranich" },
    { title: "Stephanie Okumura, MS, RDN", href: "/about/stephanie-okumura" },
    { title: "Michelle Commons", href: "/about/michelle-commons" },
    { title: "Michelle Meredith", href: "/about/michelle-meredith" },
    { title: "Mary Cooper", href: "/about/mary-cooper" },
    { title: "Emery Pederson", href: "/about/emery-pederson" },
    { title: "Mackenzie Stracke, Counseling Student Intern", href: "/about/mackenzie-stracke" },
    { title: "Gina Parisi, Counseling Student Intern", href: "/about/gina-parisi" },
  ];

  const serviceLinks = [
    { title: "Individual Therapy", href: "/services" },
    { title: "Group Therapy", href: "/services" },
    { title: "Family Therapy", href: "/services" },
    { title: "Dietitian Services", href: "/services" },
    { title: "Virtual/Telehealth", href: "/services" },
  ];

  const conditionLinks = [
    { title: "Anorexia Nervosa", href: "/conditions/anorexia-nervosa" },
    { title: "Bulimia Nervosa", href: "/conditions/bulimia-nervosa" },
    { title: "Binge Eating Disorder", href: "/conditions/binge-eating-disorder" },
    { title: "ARFID", href: "/conditions/arfid" },
    { title: "OSFED", href: "/conditions/osfed" },
    { title: "Atypical Anorexia", href: "/conditions/atypical-anorexia" },
    { title: "Disordered Eating", href: "/conditions/disordered-eating" },
    { title: "Emotional Eating / Compulsive Overeating", href: "/conditions/emotional-eating" },
    { title: "Body Dysmorphia", href: "/conditions/body-dysmorphia" },
    { title: "Orthorexia", href: "/conditions/orthorexia" },
    { title: "Exercise Addiction", href: "/conditions/exercise-addiction" },
    { title: "Eating Disorders in Men", href: "/conditions/men-eating-disorders" },
    { title: "Eating Disorders in LGBTQIA+ Individuals", href: "/conditions/lgbtqia-eating-disorders" },
    { title: "Eating Disorders in Athletes", href: "/conditions/athletes-eating-disorders" },
    { title: "Co-Occurring Issues", href: "/conditions/co-occurring-issues" },
  ];

  const approachLinks = [
    { title: "Our 6-Step Approach", href: "/our-approach" },
    { title: "Health At Every Size®", href: "/health-at-every-size" },
    { title: "Body Shame Counseling", href: "/body-shame" },
    { title: "Intuitive Eating", href: "/philosophy" },
    { title: "Fat Acceptance", href: "/philosophy" },
    { title: "Non-Diet Philosophy", href: "/philosophy" },
  ];

  const resourceLinks = [
    { title: "5 Steps to Exit the Diet Roller Coaster", href: "/resources/5-steps-diet-roller-coaster" },
    { title: "FAQ", href: "/faq" },
    { title: "Loveable At Any Size Workshop", href: "/workshop" },
    { title: "Battle of the Binge Program", href: "/battle-of-the-binge" },
    { title: "Blog", href: "/resources" },
    { title: "Audio", href: "/resources#audio" },
    { title: "Self-Assessment Tools", href: "/resources" },
    { title: "Support Resources", href: "/resources" },
  ];

  const contactLinks = [
    { title: "Contact Us", href: "/contact" },
    { title: "Notice of Privacy Practice", href: "/privacy-notice" },
    { title: "Client Intake Forms", href: "/contact" },
    { title: "Consent Forms", href: "/contact" },
    { title: "Secure File Submissions", href: "/secure-file-submissions" },
  ];

  return (
    <header className="bg-brand-blue-dark text-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-white hover:text-white/90 transition-colors">
            Beyond Eating Recovery
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-white hover:bg-white/10">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white">
                    <li className="border-b pb-3 mb-2">
                      <Link to="/about">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 bg-accent/5 hover:bg-accent/15 hover:translate-x-1 focus:bg-accent focus:text-accent-foreground border border-accent/20">
                          <div className="text-sm font-bold leading-none text-primary">→ View All About</div>
                          <p className="text-xs text-muted-foreground mt-1">Meet our team and learn our story</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    {aboutLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 border-l-2 border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent-foreground hover:translate-x-1 focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none text-primary">{link.title}</div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-white hover:bg-white/10">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white">
                    <li className="border-b pb-3 mb-2">
                      <Link to="/services">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 bg-accent/5 hover:bg-accent/15 hover:translate-x-1 focus:bg-accent focus:text-accent-foreground border border-accent/20">
                          <div className="text-sm font-bold leading-none text-primary">→ View All Services</div>
                          <p className="text-xs text-muted-foreground mt-1">Explore our full range of treatment options</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    {serviceLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 border-l-2 border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent-foreground hover:translate-x-1 focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none text-primary">{link.title}</div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-white hover:bg-white/10">
                  Conditions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white">
                    <li className="border-b pb-3 mb-2">
                      <Link to="/conditions">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 bg-accent/5 hover:bg-accent/15 hover:translate-x-1 focus:bg-accent focus:text-accent-foreground border border-accent/20">
                          <div className="text-sm font-bold leading-none text-primary">→ View All Conditions</div>
                          <p className="text-xs text-muted-foreground mt-1">Browse our complete conditions directory</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    {conditionLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 border-l-2 border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent-foreground hover:translate-x-1 focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none text-primary">{link.title}</div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-white hover:bg-white/10">
                  Our Approach
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white">
                    <li className="border-b pb-3 mb-2">
                      <Link to="/our-approach">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 bg-accent/5 hover:bg-accent/15 hover:translate-x-1 focus:bg-accent focus:text-accent-foreground border border-accent/20">
                          <div className="text-sm font-bold leading-none text-primary">→ View Our Approach</div>
                          <p className="text-xs text-muted-foreground mt-1">Learn about our philosophy and methods</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    {approachLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 border-l-2 border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent-foreground hover:translate-x-1 focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none text-primary">{link.title}</div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-white hover:bg-white/10">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white">
                    <li className="border-b pb-3 mb-2">
                      <Link to="/resources">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 bg-accent/5 hover:bg-accent/15 hover:translate-x-1 focus:bg-accent focus:text-accent-foreground border border-accent/20">
                          <div className="text-sm font-bold leading-none text-primary">→ View All Resources</div>
                          <p className="text-xs text-muted-foreground mt-1">Access helpful tools and information</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    {resourceLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 border-l-2 border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent-foreground hover:translate-x-1 focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none text-primary">{link.title}</div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/careers">
                  <NavigationMenuLink className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-white hover:bg-white/10">
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white">
                    <li className="border-b pb-3 mb-2">
                      <Link to="/contact">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 bg-accent/5 hover:bg-accent/15 hover:translate-x-1 focus:bg-accent focus:text-accent-foreground border border-accent/20">
                          <div className="text-sm font-bold leading-none text-primary">→ Contact Us</div>
                          <p className="text-xs text-muted-foreground mt-1">Get in touch with our team</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    {contactLinks.slice(1).map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 border-l-2 border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent-foreground hover:translate-x-1 focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none text-primary">{link.title}</div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex flex-col items-center gap-2">
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Book Consultation
              </Button>
            </Link>
            <a href="tel:3607264141" className="flex items-center gap-2 text-white font-semibold hover:text-white/90 transition-colors">
              <Phone className="w-4 h-4" />
              360-726-4141
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-white overflow-y-auto p-0">
              {/* Menu Header */}
              <div className="bg-primary text-white p-6 text-center border-b-2 border-white/20">
                <h2 className="text-lg font-bold">BEYOND EATING RECOVERY</h2>
              </div>

              {/* Menu Content */}
              <nav className="flex flex-col p-6">
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center gap-3 py-3 text-lg font-medium text-primary hover:text-accent transition-colors border-b"
                >
                  <span>🏠</span> Home
                </Link>
                
                <div className="border-b py-3">
                  <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent transition-colors mb-2">
                    <span>👥</span> About
                  </Link>
                  <div className="pl-8 space-y-2">
                    <Link to="/about" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Anne Cuthbert
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Our Team
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Our Approach
                    </Link>
                  </div>
                </div>

                <div className="border-b py-3">
                  <Link to="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent transition-colors mb-2">
                    <span>💙</span> Services
                  </Link>
                  <div className="pl-8 space-y-2">
                    <Link to="/services" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Individual Therapy
                    </Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Group Therapy
                    </Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Family Therapy
                    </Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Dietitian Services
                    </Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Virtual/Telehealth
                    </Link>
                  </div>
                </div>

                <div className="border-b py-3">
                  <Link to="/conditions" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent transition-colors mb-2">
                    <span>📋</span> Conditions
                  </Link>
                  <div className="pl-8 space-y-2">
                    <Link to="/conditions" onClick={() => setIsOpen(false)} className="block text-sm text-accent font-semibold hover:underline">
                      → View All Conditions
                    </Link>
                    <Link to="/conditions/anorexia-nervosa" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Anorexia Nervosa
                    </Link>
                    <Link to="/conditions/bulimia-nervosa" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Bulimia Nervosa
                    </Link>
                    <Link to="/conditions/binge-eating-disorder" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Binge Eating Disorder
                    </Link>
                    <Link to="/conditions/arfid" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → ARFID
                    </Link>
                  </div>
                </div>

                <div className="border-b py-3">
                  <Link to="/our-approach" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent transition-colors mb-2">
                    <span>🌱</span> Our Approach
                  </Link>
                  <div className="pl-8 space-y-2">
                    <Link to="/our-approach" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Our 6-Step Approach
                    </Link>
                    <Link to="/philosophy" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → HAES
                    </Link>
                    <Link to="/philosophy" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Intuitive Eating
                    </Link>
                    <Link to="/philosophy" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Fat Acceptance
                    </Link>
                  </div>
                </div>

                <div className="border-b py-3">
                  <Link to="/resources" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent transition-colors mb-2">
                    <span>📚</span> Resources
                  </Link>
                  <div className="pl-8 space-y-2">
                    <Link to="/faq" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → FAQ
                    </Link>
                    <Link to="/workshop" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Loveable At Any Size
                    </Link>
                    <Link to="/workshop" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Body Image Workshops
                    </Link>
                    <Link to="/battle-of-the-binge" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Battle of the Binge
                    </Link>
                    <Link to="/resources" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Blog
                    </Link>
                    <Link to="/resources" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Articles
                    </Link>
                    <Link to="/resources" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Videos
                    </Link>
                    <Link to="/resources" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Tools
                    </Link>
                  </div>
                </div>

                <Link
                  to="/careers" 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center gap-3 py-3 text-lg font-medium text-primary hover:text-accent transition-colors border-b"
                >
                  <span>💼</span> Careers
                </Link>

                <div className="border-b py-3">
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-primary hover:text-accent transition-colors mb-2">
                    <span>📞</span> Contact
                  </Link>
                  <div className="pl-8 space-y-2">
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-sm text-accent font-semibold hover:underline">
                      → Contact Us
                    </Link>
                    <Link to="/privacy-notice" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Privacy Notice
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Client Intake Forms
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Consent Forms
                    </Link>
                    <Link to="/secure-file-submissions" onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                      → Secure File Submissions
                    </Link>
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="pt-6 mt-4 border-t-2 space-y-4 text-center">
                  <a 
                    href="tel:3607264141" 
                    className="flex items-center justify-center gap-2 text-xl font-bold text-primary hover:text-accent"
                  >
                    📞 360-726-4141
                  </a>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                      Book Consultation
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Serving Portland, OR<br />
                    & Vancouver, WA
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;