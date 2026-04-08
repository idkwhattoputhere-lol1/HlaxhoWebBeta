import { useEffect, useRef, useState } from 'react';

export default function Philosophy() {
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
      className="relative min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 carbon-fiber"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Columna Izquierda - Contenido de Texto */}
          <div 
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="brushed-aluminum p-6 sm:p-8 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-500/50 via-copper/30 to-transparent" />
              
              <h2 className="font-syncopate text-2xl sm:text-3xl md:text-4xl font-bold text-amber-100 mb-4 sm:mb-6 tracking-wide">
                Arquitectura de
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-liquid to-copper mt-1 sm:mt-2">
                  Código Puro
                </span>
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-amber-100/70 font-exo text-sm sm:text-base leading-relaxed">
                <p>
                  En HLAXHO no vendemos simples scripts—entregamos <span className="text-amber-400">soluciones engineered</span> 
                  con precisión quirúrgica. Cada línea de código es optimizada, refactorizada y 
                  pulida hasta alcanzar la perfección sintáctica.
                </p>
                <p>
                  Nuestros desarrolladores provienen de los mismos círculos que construyen 
                  sistemas para fintech y blockchain. El proceso de desarrollo toma semanas, 
                  no horas. Cada script pasa por 72 horas de testing antes de llegar a tus manos.
                </p>
                <p>
                  Esto no es código. Esto es <span className="text-copper font-semibold">arte ejecutable</span>.
                </p>
              </div>
              
              <div className="mt-6 sm:mt-8 flex items-center gap-4">
                <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-amber-500 to-transparent" />
                <span className="font-syncopate text-xs text-amber-500/60 tracking-widest uppercase">
                  Est. 2024
                </span>
              </div>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: '72h', label: 'Testing' },
                { value: '100%', label: 'Optimizado' },
                { value: '0 Bug', label: 'Garantía' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="glass-luxe p-3 sm:p-4 text-center thermal-lens transition-all duration-500"
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="font-syncopate text-lg sm:text-2xl text-amber-400">{stat.value}</div>
                  <div className="font-exo text-[10px] sm:text-xs text-amber-100/50 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Columna Derecha - Visual de Código */}
          <div 
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Anillo Exterior - Representa el flujo de datos */}
              <div className="absolute inset-0 gear-3d" style={{ animationDuration: '30s' }}>
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFB300" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#BF6F4A" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8B4513" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="codeGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Símbolos de código orbitando */}
                  {[...Array(8)].map((_, i) => (
                    <text
                      key={i}
                      x="100"
                      y="25"
                      fill="url(#codeGradient)"
                      fontSize="12"
                      fontFamily="monospace"
                      textAnchor="middle"
                      filter="url(#codeGlow)"
                      transform={`rotate(${i * 45} 100 100)`}
                      opacity="0.7"
                    >
                      {['{ }', '< >', '[ ]', '( )', '//', '=>', '**', '&&'][i]}
                    </text>
                  ))}
                  
                  {/* Anillo Exterior */}
                  <circle
                    cx="100"
                    cy="100"
                    r="75"
                    fill="none"
                    stroke="url(#codeGradient)"
                    strokeWidth="2"
                    filter="url(#codeGlow)"
                  />
                  
                  {/* Anillo Interior */}
                  <circle
                    cx="100"
                    cy="100"
                    r="55"
                    fill="none"
                    stroke="url(#codeGradient)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  />
                </svg>
              </div>
              
              {/* Engranaje Interior - Rotación Inversa */}
              <div 
                className="absolute inset-6 sm:inset-8 gear-3d"
                style={{ animationDirection: 'reverse', animationDuration: '20s' }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Líneas de código simuladas */}
                  {[...Array(6)].map((_, i) => (
                    <rect
                      key={i}
                      x="85"
                      y="30"
                      width={30 + Math.random() * 40}
                      height="4"
                      fill="url(#codeGradient)"
                      transform={`rotate(${i * 60} 100 100)`}
                      opacity="0.5"
                      rx="2"
                    />
                  ))}
                  <circle
                    cx="100"
                    cy="100"
                    r="50"
                    fill="none"
                    stroke="url(#codeGradient)"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              
              {/* Núcleo Central - Símbolo de función */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-24 rounded-full bg-gradient-to-br from-amber-500/30 via-copper/20 to-transparent border border-amber-500/40 flex items-center justify-center animate-pulse-amber">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-400/40 to-copper/30 border border-amber-400/50 flex items-center justify-center">
                    <span className="font-mono text-lg sm:text-xl text-amber-300">fn()</span>
                  </div>
                </div>
              </div>
              
              {/* Partículas Orbitando - Representan bits de datos */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400/60"
                  style={{
                    animation: `rotate-slow ${8 + i * 2}s linear infinite`,
                    transformOrigin: 'center',
                    top: '50%',
                    left: '50%',
                    marginLeft: '-3px',
                    marginTop: '-3px',
                    boxShadow: '0 0 10px rgba(255, 179, 0, 0.6)',
                  }}
                >
                  <div 
                    className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/40 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(${50 + i * 12}px, 0)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
