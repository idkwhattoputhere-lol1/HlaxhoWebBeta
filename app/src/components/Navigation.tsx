import { useEffect, useState } from 'react';
import { Menu, X, Crown } from 'lucide-react';

const navLinks = [
  { label: 'Membresías', href: '#memberships' },
  { label: 'Scripts', href: '#products' },
  { label: 'Ventajas', href: '#features' },
  { label: 'Stats', href: '#stats' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-carbon-deep/95 backdrop-blur-xl border-b border-amber-500/10 shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 font-syncopate text-xl sm:text-2xl font-bold text-amber-100 tracking-wider hover:text-amber-300 transition-colors duration-300"
            >
              <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              HLAXHO
            </a>

            {/* Navegación Escritorio */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="group relative font-exo text-sm text-amber-100/60 hover:text-amber-100 transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-copper group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <button className="px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-copper/20 border border-amber-500/40 text-amber-400 text-sm font-exo tracking-wider uppercase hover:border-amber-500/70 hover:bg-amber-500/10 transition-all duration-300">
                Acceder
              </button>
            </div>

            {/* Botón Menú Móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-amber-100/60 hover:text-amber-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Fondo */}
        <div 
          className="absolute inset-0 bg-carbon-deep/98 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Contenido del Menú */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className={`font-syncopate text-3xl text-amber-100 hover:text-amber-300 transition-all duration-500 ${
                isMobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button 
            className={`mt-8 px-10 py-4 bg-gradient-to-r from-amber-500 to-copper text-carbon-deep font-exo font-semibold tracking-wider uppercase transition-all duration-500 ${
              isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Acceder
          </button>
        </div>
      </div>
    </>
  );
}
