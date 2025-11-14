import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Beyond Eating Recovery</h3>
            <p className="text-white/80 text-sm">
              Compassionate support for eating disorder recovery in Portland & Vancouver
            </p>
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
                <a href="#insurance" className="hover:text-white transition-colors">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
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
