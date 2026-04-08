import { useEffect, useRef } from 'react';
import { Crown, Code, Zap } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let time = 0;
    let animationId: number;

    const drawHeatWaves = () => {
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradients = [
        { x: 0.2, y: 0.4, rx: 0.4, ry: 0.3, color: 'rgba(255, 143, 0, 0.06)' },
        { x: 0.8, y: 0.6, rx: 0.3, ry: 0.2, color: 'rgba(191, 111, 74, 0.05)' },
        { x: 0.5, y: 0.8, rx: 0.25, ry: 0.15, color: 'rgba(255, 179, 0, 0.04)' },
      ];

      gradients.forEach((g, i) => {
        const offsetX = Math.sin(time * 0.0005 + i * 2) * 30;
        const offsetY = Math.cos(time * 0.0003 + i * 1.5) * 20;
        
        const gradient = ctx.createRadialGradient(
          (g.x * canvas.width) + offsetX,
          (g.y * canvas.height) + offsetY,
          0,
          (g.x * canvas.width) + offsetX,
          (g.y * canvas.height) + offsetY,
          Math.max(canvas.width, canvas.height) * g.rx
        );
        
        gradient.addColorStop(0, g.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      time += 16;
      animationId = requestAnimationFrame(drawHeatWaves);
    };

    drawHeatWaves();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
        {/* Badge Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-luxe rounded-full mb-6 sm:mb-8">
          <Crown className="w-4 h-4 text-amber-400" />
          <span className="font-exo text-xs sm:text-sm text-amber-100/70 tracking-wider uppercase">
            Membresías Exclusivas + Scripts Premium
          </span>
        </div>

        {/* Logo Principal */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-syncopate text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold metal-engraved tracking-wider">
            HLAXHO
          </h1>
        </div>
        
        {/* Subtítulo */}
        <div className="relative inline-block px-4 mb-8 sm:mb-12">
          <p className="font-exo text-lg sm:text-xl md:text-2xl text-amber-100/80 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            Acceso Élite. Código Sin Límites.
          </p>
        </div>
        
        {/* Features Rápidas */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 sm:mb-14">
          {[
            { icon: Crown, text: '3 Niveles VIP' },
            { icon: Code, text: 'Scripts Premium' },
            { icon: Zap, text: 'Soporte 24/7' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-amber-100/50">
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span className="font-exo text-xs sm:text-sm tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* Separador */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 sm:mb-14">
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <div className="w-2 h-[1px] bg-amber-500/80" />
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </div>
        
        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-amber-500/20 to-copper/20 border border-amber-500/40 text-amber-100 font-syncopate text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-amber-500/80 hover:shadow-amber-lg w-full sm:w-auto">
            <span className="relative z-10">Ver Membresías</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 via-amber-500/40 to-amber-500/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
          
          <button className="group relative px-8 sm:px-10 py-4 glass-luxe text-amber-100 font-exo text-sm tracking-[0.15em] uppercase transition-all duration-500 thermal-lens w-full sm:w-auto">
            <span className="relative z-10">Explorar Scripts</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-carbon-deep to-transparent z-10" />
    </section>
  );
}
