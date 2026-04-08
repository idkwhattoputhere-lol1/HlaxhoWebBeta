import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import ParticleField from './components/ParticleField';
import Hero from './sections/Hero';
import Memberships from './sections/Memberships';
import Products from './sections/Products';
import Features from './sections/Features';
import CallToAction from './sections/CallToAction';
import Stats from './sections/Stats';
import Footer from './sections/Footer';

// Pantalla de Carga
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-carbon-deep flex flex-col items-center justify-center">
      {/* Líneas Escáner */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="scanner-line w-full" style={{ animationDelay: '0s' }} />
        <div className="scanner-line w-full" style={{ animationDelay: '0.5s' }} />
        <div className="scanner-line w-full" style={{ animationDelay: '1s' }} />
      </div>

      {/* Logo */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-syncopate text-5xl sm:text-7xl font-bold metal-engraved tracking-wider mb-8">
          HLAXHO
        </h1>
        
        {/* Barra de Progreso */}
        <div className="w-72 sm:w-96 h-1.5 bg-carbon-graphite rounded-full overflow-hidden">
          <div 
            className="h-full progress-amber transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Texto de Progreso */}
        <div className="mt-4 font-exo text-sm text-amber-100/50 tracking-wider">
          <span className="text-amber-400">{progress.toString().padStart(3, '0')}</span>
          <span className="mx-2">/</span>
          <span>100</span>
        </div>
        
        {/* Mensajes de Estado */}
        <div className="mt-6 font-exo text-xs text-amber-100/30 tracking-[0.2em] uppercase">
          {progress < 30 && 'Inicializando Sistema...'}
          {progress >= 30 && progress < 60 && 'Cargando Membresías...'}
          {progress >= 60 && progress < 90 && 'Compilando Scripts...'}
          {progress >= 90 && 'Bienvenido a HLAXHO'}
        </div>
      </div>

      {/* Decoraciones de Esquina */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-amber-500/20" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-amber-500/20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-amber-500/20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-amber-500/20" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div 
        className={`min-h-screen bg-carbon-deep transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Cursor Personalizado */}
        <CustomCursor />
        
        {/* Campo de Partículas de Fondo */}
        <ParticleField />
        
        {/* Navegación */}
        <Navigation />
        
        {/* Contenido Principal */}
        <main className="relative z-10">
          <Hero />
          <Memberships />
          <Products />
          <Features />
          <CallToAction />
          <Stats />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
