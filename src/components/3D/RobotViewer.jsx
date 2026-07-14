import React from 'react';
import Spline from '@splinetool/react-spline';

export default function RobotViewer() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Restauramos el renderizado original con tu URL absoluta verificada */}
      <Spline 
        scene="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode" 
      />
    </div>
  );
}
