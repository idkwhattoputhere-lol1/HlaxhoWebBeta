import { useEffect, useRef, useState } from 'react';
import { Users, Code, Download, Star, Zap, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Miembros VIP', color: 'from-amber-400 to-amber-600' },
  { icon: Code, value: '120+', label: 'Scripts Premium', color: 'from-copper to-bronze' },
  { icon: Download, value: '15K+', label: 'Descargas', color: 'from-amber-300 to-amber-500' },
  { icon: Star, value: '4.9', label: 'Rating Promedio', color: 'from-amber-500 to-copper' },
];

const features = [
  { icon: Zap, text: 'Entrega Instantánea' },
  { icon: Shield, text: 'Código Auditado' },
  { icon: Code, text: 'Open Source Options' },
];

export default function Stats() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="stats"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-carbon-graphite"
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        {/* Encabezado */}
        <div 
          className={`text-center mb-14 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-exo text-xs sm:text-sm text-copper tracking-[0.3em] uppercase">
            Números que Hablan
          </span>
          <h2 className="font-syncopate text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 mt-4 tracking-wide">
            Confían en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid to-copper">HLAXHO</span>
          </h2>
        </div>

        {/* Grid de Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative text-center p-6 sm:p-8 rounded-sm border border-amber-500/10 bg-gradient-to-b from-carbon-light/30 to-carbon-deep/50 transition-all duration-700 hover:border-amber-500/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Icono */}
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-carbon-deep" />
              </div>
              
              {/* Valor */}
              <div className="font-syncopate text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid to-copper mb-2">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="font-exo text-amber-100/50 text-xs sm:text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features bar */}
        <div 
          className={`flex flex-wrap justify-center gap-4 sm:gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 glass-luxe rounded-full"
            >
              <feature.icon className="w-4 h-4 text-amber-400" />
              <span className="font-exo text-amber-100/70 text-xs sm:text-sm tracking-wider">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decoraciones de esquina */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-amber-500/10 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-amber-500/10 rounded-br-3xl" />
    </section>
  );
}
