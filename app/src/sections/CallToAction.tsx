import { useEffect, useRef, useState } from 'react';
import { Crown, ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-carbon-deep overflow-hidden"
    >
      {/* Fondo con gradiente */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 143, 0, 0.12) 0%, transparent 60%)',
        }}
      />
      
      {/* Patrón hexagonal */}
      <div className="absolute inset-0 hexagon-pattern opacity-40" />

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-luxe rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-exo text-xs text-amber-100/70 tracking-wider uppercase">
              Únete a la Élite
            </span>
          </span>
        </div>

        {/* Título Principal */}
        <h2 
          className={`font-syncopate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-100 tracking-wide mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Desbloquea tu
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid via-copper to-amber-400 mt-2">
            Potencial Completo
          </span>
        </h2>

        {/* Descripción */}
        <p 
          className={`font-exo text-amber-100/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ya sea que elijas una membresía VIP o scripts individuales, 
          obtienes acceso a código de élite con soporte profesional.
        </p>

        {/* Botones CTA */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="group relative px-10 py-4 bg-gradient-to-r from-amber-500 to-copper text-carbon-deep font-syncopate text-sm tracking-[0.2em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/30 w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Crown className="w-5 h-5" />
              Ver Membresías
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
          
          <button className="group flex items-center justify-center gap-2 px-10 py-4 border border-amber-500/40 text-amber-100 font-exo text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:border-amber-500/70 hover:bg-amber-500/5 w-full sm:w-auto">
            <span>Explorar Scripts</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Stats */}
        <div 
          className={`mt-16 sm:mt-20 flex flex-wrap justify-center gap-8 sm:gap-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '500+', label: 'Miembros Activos' },
            { value: '120+', label: 'Scripts Premium' },
            { value: '99.9%', label: 'Satisfacción' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-syncopate text-2xl sm:text-3xl text-amber-400">{stat.value}</div>
              <div className="font-exo text-xs text-amber-100/40 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
