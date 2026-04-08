import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Code2, Terminal, Lock } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AutoScraper Pro',
    category: 'Web Scraping',
    price: '149',
    description: 'Extracción inteligente de datos con rotación de proxies y anti-detection.',
    lang: 'Python',
    downloads: '2.4k',
    requiredTier: 'VIP',
  },
  {
    id: 2,
    name: 'BotMaster X',
    category: 'Automatización',
    price: '299',
    description: 'Framework completo para bots con soporte multi-cuenta y scheduling.',
    lang: 'Node.js',
    downloads: '1.8k',
    requiredTier: 'VIP Plus',
  },
  {
    id: 3,
    name: 'CryptoFlow',
    category: 'Finanzas',
    price: '499',
    description: 'Arbitraje y análisis de mercado en tiempo real con Web3 integration.',
    lang: 'TypeScript',
    downloads: '956',
    requiredTier: 'Super VIP',
  },
  {
    id: 4,
    name: 'DataMiner Elite',
    category: 'Data Science',
    price: '249',
    description: 'Procesamiento masivo de datos con ML integration y visualización.',
    lang: 'Python',
    downloads: '1.2k',
    requiredTier: 'VIP Plus',
  },
  {
    id: 5,
    name: 'SocialBoost',
    category: 'Marketing',
    price: '199',
    description: 'Automatización de redes sociales con análisis de engagement.',
    lang: 'JavaScript',
    downloads: '3.1k',
    requiredTier: 'VIP',
  },
  {
    id: 6,
    name: 'SecuriScan',
    category: 'Seguridad',
    price: '399',
    description: 'Auditoría de vulnerabilidades y pentesting automatizado.',
    lang: 'Go',
    downloads: '678',
    requiredTier: 'Super VIP',
  },
];

export default function Products() {
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
      id="products"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-carbon-graphite"
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255, 179, 0, 0.03) 1px, transparent 1px),
              linear-gradient(rgba(255, 179, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Encabezado */}
        <div 
          className={`mb-14 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-luxe rounded-full mb-6">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span className="font-exo text-xs text-amber-100/70 tracking-wider uppercase">
                  Scripts Premium
                </span>
              </span>
              
              <h2 className="font-syncopate text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 tracking-wide mb-4">
                Repositorio <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid to-copper">de Élite</span>
              </h2>
              
              <p className="font-exo text-amber-100/50 text-base sm:text-lg max-w-xl">
                Scripts profesionales optimizados y listos para producción. Desbloquea acceso según tu membresía.
              </p>
            </div>
            
            <button className="group flex items-center gap-2 text-amber-400/70 hover:text-amber-400 transition-colors duration-300 self-start">
              <span className="font-exo text-sm tracking-wider uppercase">Ver Todos</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-amber-500/30 via-amber-500/10 to-transparent" />
        </div>

        {/* Grid de Scripts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="relative rounded-sm overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 bg-gradient-to-b from-carbon-light/50 to-carbon-deep">
                {/* Header del Script */}
                <div className="relative aspect-[16/10] bg-carbon-deep overflow-hidden">
                  {/* Código de fondo */}
                  <div className="absolute inset-0 opacity-40 p-4 sm:p-5">
                    <div className="font-mono text-[10px] sm:text-xs text-amber-500/50 leading-relaxed">
                      <p>{`// ${product.name}`}</p>
                      <p>{`const config = {`}</p>
                      <p className="pl-3">{`optimized: true,`}</p>
                      <p className="pl-3">{`tests: 'passed',`}</p>
                      <p className="pl-3">{`version: '2.0.0'`}</p>
                      <p>{`};`}</p>
                      <p className="mt-2">{`export default config;`}</p>
                    </div>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-deep via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-carbon-deep/90 border border-amber-500/30 text-amber-400/80 font-exo text-[10px] tracking-wider uppercase">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Tier Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 bg-carbon-deep/90 border border-amber-500/20 text-amber-100/70 font-exo text-[10px]`}>
                      <Lock className="w-3 h-3" />
                      {product.requiredTier}
                    </span>
                  </div>
                  
                  {/* Icono Central */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-carbon-deep/80 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-carbon-deep transition-all duration-500">
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400/60 group-hover:text-amber-400 transition-colors duration-500" />
                    </div>
                  </div>
                </div>

                {/* Info del Producto */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-syncopate text-lg sm:text-xl text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="flex-shrink-0 px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400/80 font-mono text-[10px] sm:text-xs">
                      {product.lang}
                    </span>
                  </div>
                  
                  <p className="font-exo text-amber-100/50 text-xs sm:text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-amber-500/10">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="font-syncopate text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid to-copper">
                        ${product.price}
                      </div>
                      <div className="flex items-center gap-1 text-amber-100/30">
                        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="font-exo text-[10px] sm:text-xs">{product.downloads}</span>
                      </div>
                    </div>
                    <button className="group/btn flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 border border-amber-500/30 text-amber-400/70 hover:text-amber-400 hover:border-amber-500/60 hover:bg-amber-500/5 transition-all duration-300">
                      <span className="font-exo text-xs tracking-wider uppercase">Ver</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
