import React, { lazy, Suspense } from 'react';

// Importación dinámica asíncrona para eliminar el código pesado de Spline del chunk principal
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function RobotViewer() {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[600px] flex items-center justify-center">
      {/* Contenedor interno limpio */}
      <div className="w-full h-full">
        {/* Suspense maneja la carga asíncrona sin congelar el Main Thread de la CPU */}
        <Suspense fallback={null}>
          <Spline 
            scene="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode" 
          />
        </Suspense>
      </div>
    </div>
  );
}
