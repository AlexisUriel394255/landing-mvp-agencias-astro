import React from 'react';
import { createRoot } from 'react-dom/client';
import Spline from '@splinetool/react-spline';

export default function RobotViewer() {
  return (
    <div className="w-full h-full">
      <Spline 
        scene="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode" 
      />
    </div>
  );
}

// Punto de entrada global asíncrono para esquivar las restricciones de bundles de Astro
export function initRobotViewer(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<RobotViewer />);
  }
}
