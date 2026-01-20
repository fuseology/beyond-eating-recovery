import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Tagline */}
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
                  href="https://www.youtube.com/user/foodisnottheenemy?feature=guide" 
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

          {/* Column 2: Contact Info with NAP */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Contact Us</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  1235 Southeast Division Street<br />
                  Portland, Oregon 97202
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:3607264141" className="hover:text-white transition-colors">
                  360-726-4141
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:intakes@beyondeatingrecovery.com" className="hover:text-white transition-colors">
                  intakes@beyondeatingrecovery.com
                </a>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Office Hours
              </h4>
              <div className="text-sm text-white/80 space-y-1">
                <p>Monday – Friday: 9am – 6pm</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="hover:text-white transition-colors">
                  Conditions Treated
                </Link>
              </li>
              <li>
                <Link to="/philosophy" className="hover:text-white transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/privacy-notice" className="hover:text-white transition-colors">
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Find Us</h4>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5592.498093295984!2d-122.652856!3d45.505065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b992a10ec77%3A0x27e481ed74713d36!2sBody%20Expressions%20of%20Portland%20-%20Eating%20Disorders%20Counseling!5e0!3m2!1sen!2sus!4v1763163338622!5m2!1sen!2sus"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beyond Eating Recovery Portland Office Location"
                className="rounded-lg"
              />
            </div>
            <p className="text-xs text-white/60 mt-2">
              Also serving Vancouver, WA via telehealth
            </p>
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
