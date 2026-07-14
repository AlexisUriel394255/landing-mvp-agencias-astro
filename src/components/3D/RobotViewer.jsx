import React, { useState, useEffect, Suspense } from 'react';

// Carga dinámica diferida para aislar el peso de Spline del bundle inicial
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function RobotViewer() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Escucha el evento global emitido únicamente tras la interacción humana real
    const handleInit = () => setShouldRender(true);
    window.addEventListener('init-3d-scene', handleInit, { once: true });
    return () => window.removeEventListener('init-3d-scene', handleInit);
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Suspense fallback={null}>
        <Spline 
          scene="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode" 
        />
      </Suspense>
    </div>
  );
}


