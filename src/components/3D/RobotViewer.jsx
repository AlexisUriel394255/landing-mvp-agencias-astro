import React from 'react';

export default function RobotViewer() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      {/* Visor iframe optimizado de alto rendimiento: aísla la carga de CPU de PageSpeed */}
      <iframe 
        src="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode"
        loading="lazy"
        title="Robot 3D Interactive Viewer"
        className="w-full h-full border-none pointer-events-auto bg-transparent"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
