import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function RobotViewer() {
  const [is3DReady, setIs3DReady] = useState(false);

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[600px] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm z-10 px-4 md:px-0">
      
      {/* Loader de carga progresiva limpio */}
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

      {/* Tu Robot Premium Original de Alta Resolución */}
      <div className="w-full h-full">
        <Spline 
          scene="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode" 
          onLoad={() => setIs3DReady(true)}
        />
      </div>

    </div>
  );
}
