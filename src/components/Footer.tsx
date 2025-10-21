import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";
const Footer = () => {
  return <footer className="py-8 md:py-12 px-4 md:px-8" style={{
    backgroundColor: '#F5F5F0'
  }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="flex gap-6 md:gap-6">
          <a href="https://instagram.com/magicbyluis" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors p-2" aria-label="Instagram">
            <Instagram className="w-6 h-6 md:w-6 md:h-6" />
          </a>
          <a href="https://youtube.com/@magicbyluis" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors p-2" aria-label="YouTube">
            <Youtube className="w-6 h-6 md:w-6 md:h-6" />
          </a>
          <a href="https://facebook.com/magicbyluis" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors p-2" aria-label="Facebook">
            <Facebook className="w-6 h-6 md:w-6 md:h-6" />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center font-raleway text-foreground text-sm md:text-base">
          <a href="tel:+9779869375735" className="flex items-center gap-2 hover:text-accent transition-colors py-2 min-h-[48px]">
            <Phone className="w-5 h-5" />
            <span>+977 9869375735</span>
          </a>
          <a href="mailto:info@luisshrestha.com" className="flex items-center gap-2 hover:text-accent transition-colors py-2 min-h-[48px]">
            <Mail className="w-5 h-5" />
            <span>info@luisshrestha.com</span>
          </a>
        </div>
      </div>
    </footer>;
};
export default Footer;