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
    { title: "Anne Cuthbert, MA, LPC, LMHC", href: "/about" },
    { title: "Our Team", href: "/about" },
    { title: "Our Approach", href: "/about" },
  ];

  const serviceLinks = [
    { title: "Individual Therapy", href: "/services" },
    { title: "Group Therapy", href: "/services" },
    { title: "Family Therapy", href: "/services" },
    { title: "Dietitian Services", href: "/services" },
    { title: "Virtual/Telehealth", href: "/services" },
  ];

  const workshopLinks = [
    { title: "Loveable At Any Size", href: "/workshop" },
    { title: "Body Image Workshops", href: "/workshop" },
  ];

  const conditionLinks = [
    { title: "Anorexia Nervosa", href: "/conditions" },
    { title: "Bulimia Nervosa", href: "/conditions" },
    { title: "Binge Eating Disorder", href: "/conditions" },
    { title: "Body Dysmorphic Disorder", href: "/conditions" },
    { title: "Orthorexia", href: "/conditions" },
    { title: "Body Image Issues", href: "/conditions" },
    { title: "Co-Occurring Disorders", href: "/conditions" },
  ];

  const approachLinks = [
    { title: "Health At Every Size", href: "/philosophy" },
    { title: "Intuitive Eating", href: "/philosophy" },
    { title: "Fat Acceptance", href: "/philosophy" },
    { title: "Non-Diet Philosophy", href: "/philosophy" },
  ];

  const resourceLinks = [
    { title: "Blog", href: "/resources" },
    { title: "Articles", href: "/resources" },
    { title: "Videos", href: "/resources" },
    { title: "Self-Assessment Tools", href: "/resources" },
    { title: "Support Resources", href: "/resources" },
  ];

  return (
    <header className="bg-primary text-white border-b sticky top-0 z-50">
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
                    {aboutLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
                    {serviceLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
                  Workshops
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white">
                    {workshopLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
                    {conditionLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
                    {approachLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
                    {resourceLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.href}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none text-primary">{link.title}</div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
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
            <SheetContent side="right" className="w-[300px] bg-white overflow-y-auto">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary hover:text-accent transition-colors">
                  Home
                </Link>
                
                <div className="space-y-2">
                  <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary hover:text-accent transition-colors">
                    About
                  </Link>
                  <div className="pl-4 space-y-2">
                    {aboutLinks.map((link) => (
                      <Link key={link.title} to={link.href} onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary hover:text-accent transition-colors">
                    Services
                  </Link>
                  <div className="pl-4 space-y-2">
                    {serviceLinks.map((link) => (
                      <Link key={link.title} to={link.href} onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to="/workshop" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary hover:text-accent transition-colors">
                    Workshops
                  </Link>
                  <div className="pl-4 space-y-2">
                    {workshopLinks.map((link) => (
                      <Link key={link.title} to={link.href} onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to="/conditions" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary hover:text-accent transition-colors">
                    Conditions
                  </Link>
                  <div className="pl-4 space-y-2">
                    {conditionLinks.map((link) => (
                      <Link key={link.title} to={link.href} onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to="/philosophy" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary hover:text-accent transition-colors">
                    Our Approach
                  </Link>
                  <div className="pl-4 space-y-2">
                    {approachLinks.map((link) => (
                      <Link key={link.title} to={link.href} onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to="/resources" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary hover:text-accent transition-colors">
                    Resources
                  </Link>
                  <div className="pl-4 space-y-2">
                    {resourceLinks.map((link) => (
                      <Link key={link.title} to={link.href} onClick={() => setIsOpen(false)} className="block text-sm text-foreground/80 hover:text-accent">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-primary hover:text-accent transition-colors">
                  Contact
                </Link>

                <div className="pt-4 border-t space-y-3">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                      Book Consultation
                    </Button>
                  </Link>
                  <a href="tel:3607264141" className="flex items-center justify-center gap-2 text-primary font-semibold">
                    <Phone className="w-4 h-4" />
                    360-726-4141
                  </a>
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