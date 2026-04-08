import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Code, Download, Headphones, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Código Nativo',
    description: 'Scripts escritos desde cero sin dependencias innecesarias. Cada función optimizada para máximo rendimiento.',
  },
  {
    icon: Download,
    title: 'Acceso Instantáneo',
    description: 'Descarga inmediata tras la compra. Sin esperas, sin complicaciones. Tu código listo en segundos.',
  },
  {
    icon: RefreshCw,
    title: 'Actualizaciones Continuas',
    description: 'Mejoras constantes y nuevas funcionalidades incluidas con tu membresía activa.',
  },
  {
    icon: Headphones,
    title: 'Soporte Prioritario',
    description: 'Ayuda técnica especializada según tu nivel de membresía. De 24/7 a soporte 1-on-1 dedicado.',
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Código auditado, sin malware, sin backdoors. Validación de entradas y protección integrada.',
  },
  {
    icon: Zap,
    title: 'Rendimiento Élite',
    description: 'Algoritmos eficientes que procesan datos en milisegundos. Optimización de complejidad temporal.',
  },
];

export default function Features() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-carbon-deep"
    >
      {/* Patrón de circuito */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Encabezado */}
        <div 
          className={`text-center mb-14 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-luxe rounded-full mb-6">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="font-exo text-xs text-amber-100/70 tracking-wider uppercase">
              Por Qué Elegirnos
            </span>
          </span>
          
          <h2 className="font-syncopate text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 tracking-wide mb-4">
            Ventajas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid to-copper">HLAXHO</span>
          </h2>
          
          <p className="font-exo text-amber-100/50 text-base sm:text-lg max-w-2xl mx-auto">
            Calidad profesional, soporte excepcional y código que simplemente funciona.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          </div>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="relative p-6 sm:p-8 h-full rounded-sm border border-amber-500/10 hover:border-amber-500/30 bg-gradient-to-b from-carbon-light/30 to-carbon-deep/50 transition-all duration-500">
                {/* Icono */}
                <div className="mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-amber-500/20 to-copper/20 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/40 transition-all duration-500">
                    <feature.icon 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400/80 group-hover:text-amber-400 transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Contenido */}
                <h3 className="font-syncopate text-lg sm:text-xl text-amber-100 mb-2 sm:mb-3 tracking-wide group-hover:text-amber-300 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="font-exo text-amber-100/50 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Línea decorativa */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-500 to-copper group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
