import React from 'react';

export default function RobotViewer() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      {/* El iframe carga el render directo desde los servidores perimetrales de Spline */}
      <iframe 
        src="https://spline.design"
        title="Robot 3D Interactive Viewer"
        className="w-full h-full border-none pointer-events-auto bg-transparent"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
