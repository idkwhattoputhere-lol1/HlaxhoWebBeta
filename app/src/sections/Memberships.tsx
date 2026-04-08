import { useEffect, useRef, useState } from 'react';
import { Check, Crown, Star, Gem } from 'lucide-react';

const memberships = [
  {
    name: 'VIP',
    price: '29',
    period: '/mes',
    icon: Crown,
    color: 'from-amber-400 to-amber-600',
    glow: 'shadow-amber-500/20',
    features: [
      'Acceso a 5 scripts básicos',
      'Actualizaciones mensuales',
      'Soporte por email',
      'Documentación completa',
      'Comunidad Discord',
    ],
    cta: 'Obtener VIP',
    popular: false,
  },
  {
    name: 'VIP Plus',
    price: '79',
    period: '/mes',
    icon: Star,
    color: 'from-copper to-bronze',
    glow: 'shadow-copper/30',
    features: [
      'Acceso a 15 scripts premium',
      'Actualizaciones semanales',
      'Soporte prioritario 24/7',
      'Código fuente incluido',
      'Solicitudes de features',
      'Acceso beta a nuevos scripts',
    ],
    cta: 'Obtener VIP Plus',
    popular: true,
  },
  {
    name: 'Super VIP',
    price: '199',
    period: '/mes',
    icon: Gem,
    color: 'from-amber-300 via-amber-400 to-copper',
    glow: 'shadow-amber-400/40',
    features: [
      'Acceso ilimitado a todos los scripts',
      'Actualizaciones en tiempo real',
      'Soporte dedicado 1-on-1',
      'Scripts personalizados',
      'Desarrollo a medida',
      'Consultoría técnica',
      'Acceso al repositorio privado',
    ],
    cta: 'Obtener Super VIP',
    popular: false,
  },
];

export default function Memberships() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="memberships"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-carbon-deep"
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 hexagon-pattern opacity-30" />
      
      {/* Gradiente radial */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 143, 0, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Encabezado */}
        <div 
          className={`text-center mb-14 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-luxe rounded-full mb-6">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="font-exo text-xs text-amber-100/70 tracking-wider uppercase">
              Membresías Exclusivas
            </span>
          </span>
          
          <h2 className="font-syncopate text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 tracking-wide mb-4">
            Elige tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid to-copper">Nivel de Acceso</span>
          </h2>
          
          <p className="font-exo text-amber-100/50 text-base sm:text-lg max-w-2xl mx-auto">
            Desbloquea scripts premium, soporte prioritario y beneficios exclusivos según tu membresía.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          </div>
        </div>

        {/* Grid de Membresías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {memberships.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              {/* Badge Popular */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-copper text-carbon-deep font-exo text-xs font-bold tracking-wider uppercase rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              <div 
                className={`relative h-full rounded-sm overflow-hidden ${
                  tier.popular 
                    ? 'border-2 border-amber-500/50 shadow-lg shadow-amber-500/10' 
                    : 'border border-amber-500/20'
                }`}
              >
                {/* Fondo con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-b from-carbon-graphite to-carbon-deep" />
                
                {/* Glow para popular */}
                {tier.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
                )}

                {/* Header */}
                <div className="relative p-6 sm:p-8 text-center border-b border-amber-500/10">
                  {/* Icono */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${tier.color} mb-4 shadow-lg ${tier.glow}`}>
                    <tier.icon className="w-7 h-7 sm:w-8 sm:h-8 text-carbon-deep" />
                  </div>
                  
                  <h3 className="font-syncopate text-2xl sm:text-3xl font-bold text-amber-100 mb-2">
                    {tier.name}
                  </h3>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-syncopate text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid to-copper">
                      ${tier.price}
                    </span>
                    <span className="font-exo text-amber-100/40 text-sm">{tier.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="relative p-6 sm:p-8">
                  <ul className="space-y-3 sm:space-y-4">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-carbon-deep" />
                        </div>
                        <span className="font-exo text-amber-100/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón CTA */}
                  <button 
                    className={`w-full mt-6 sm:mt-8 py-3 sm:py-4 font-exo text-sm tracking-wider uppercase transition-all duration-500 rounded-sm ${
                      tier.popular
                        ? 'bg-gradient-to-r from-amber-500 to-copper text-carbon-deep font-semibold hover:shadow-lg hover:shadow-amber-500/30'
                        : 'border border-amber-500/40 text-amber-100 hover:border-amber-500/70 hover:bg-amber-500/10'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota inferior */}
        <div 
          className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-exo text-amber-100/30 text-xs sm:text-sm">
            Todos los planes incluyen garantía de 7 días. Cancela en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
}
