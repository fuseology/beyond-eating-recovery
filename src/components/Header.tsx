import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Beyond Eating Recovery
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
            Services
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="default" className="bg-accent hover:bg-accent/90">
          <Phone className="w-4 h-4 mr-2" />
          360-726-4141
        </Button>
      </div>
    </header>
  );
};

export default Header;