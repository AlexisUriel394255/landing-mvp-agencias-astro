import { lazy, Suspense } from 'react';

// Cargamos de forma perezosa y asíncrona la librería pesada de Spline
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function RobotViewer() {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[600px] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm z-10 px-4 md:px-0">
      
      {/* El canvas se monta de forma asíncrona suspendiendo su hilo de procesamiento inicial */}
      <div className="w-full h-full">
        <Suspense fallback={<div className="w-full h-full bg-transparent"></div>}>
          <Spline 
            scene="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode" 
          />
        </Suspense>
      </div>

    </div>
  );
}
