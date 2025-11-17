import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Beyond Eating Recovery</h3>
            <p className="text-white/80 text-sm mb-4">
              Compassionate support for eating disorder recovery in Portland & Vancouver
            </p>
            
            {/* Social Media Links */}
            <div className="mt-4">
              <h4 className="font-semibold mb-3 text-sm">Connect With Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/pages/Food-is-Not-the-Enemy/235098100467" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com/AnneCuthbert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/annecuthbert/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="http://www.youtube.com/user/foodisnottheenemy?feature=guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Portland Office</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Portland, OR & Vancouver, WA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:3607264141" className="hover:text-white transition-colors">
                  360-726-4141
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@beyondeating.com" className="hover:text-white transition-colors">
                  info@beyondeating.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/conditions" className="hover:text-white transition-colors">
                  Conditions Treated
                </a>
              </li>
              <li>
                <a href="/philosophy" className="hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Profiles */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Find Us On</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a 
                  href="https://therapists.psychologytoday.com/rms/name/Food+Is+Not+The+Enemy_Vancouver_Washington_348762" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Psychology Today
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="http://www.eatingdisordersdirectory.com/united-states/portland/therapists/anne-cuthbert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Eating Disorders Directory
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/70 mb-2">
            Serving Portland, OR & Vancouver, WA | In-Person & Virtual Appointments
          </p>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Beyond Eating Recovery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
