import { Instagram, Facebook, Youtube, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";
import { useState } from "react";
const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
    setMobileMenuOpen(false);
  };
  return <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/hero-background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        <img src={logoImage} alt="LS Logo" className="w-10 h-10 md:w-12 md:h-12 brightness-0 invert" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="https://www.instagram.com/magicbyluis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://youtube.com/@magicbyluis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/magicbyluis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <button role="button" onClick={scrollToContact} className="button-89 font-nunito text-slate-50">
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-black/95 backdrop-blur-sm z-20 py-6 px-4">
          <div className="flex flex-col items-center gap-6">
            <a href="https://instagram.com/magicbyluis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors flex items-center gap-2 text-lg py-2" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>
            <a href="https://youtube.com/@magicbyluis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors flex items-center gap-2 text-lg py-2" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
              <span>YouTube</span>
            </a>
            <a href="https://facebook.com/magicbyluis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors flex items-center gap-2 text-lg py-2" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
              <span>Facebook</span>
            </a>
            <button role="button" onClick={scrollToContact} className="button-89 font-nunito text-slate-50 mt-2">
              CONTACT
            </button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-88px)] text-center px-4">
        <h1 className="font-sansita font-bold text-white mb-2 tracking-tight text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Luis Shrestha
        </h1>
        <p className="font-raleway text-white/90 font-light tracking-wide text-lg md:text-xl lg:text-2xl">
          Magic • Mentalism • Showmanship
        </p>
      </div>
    </div>;
};
export default Hero;