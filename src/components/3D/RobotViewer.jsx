import Spline from '@splinetool/react-spline';

export default function RobotViewer() {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[600px] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm z-10 px-4 md:px-0">
      
      {/* El robot ligero cargando directamente en el Canvas sin bloqueos */}
      <div className="w-full h-full">
        <Spline 
          scene="https://prod.spline.design/Cw77NWw1n9AEACxq/scene.splinecode" 
        />
      </div>

    </div>
  );
}
