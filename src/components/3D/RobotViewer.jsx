import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function RobotViewer() {
  const [is3DReady, setIs3DReady] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // 1. Lógica de detección de pantalla sin tocar nada de Spline
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[600px] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm z-10 px-4 md:px-0">
      
      {/* Condición inteligente: Si es móvil carga el video, si es PC carga tu Spline intacto */}
      {isMobile ? (
        <div className="w-full h-full flex items-center justify-center">
          <video 
            src="/images/robot-render.webm" 
            autoPlay 
            loop 
            muted 
            playsInline 
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>
      ) : (
        <>
          {/* 1. Loader de carga progresiva (Intacto) */}
          <div 
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out pointer-events-none ${
              is3DReady ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/70 gap-3">
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs font-mono text-slate-400 tracking-widest uppercase">Initializing 3D Core...</p>
            </div>
          </div>

          {/* 2. Tu robot real con el SDK de React (Exactamente como lo tenías) */}
          <div className="w-full h-full">
            <Spline 
              scene="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode" 
              onLoad={() => setIs3DReady(true)}
            />
          </div>
        </>
      )}

    </div>
  );
}

