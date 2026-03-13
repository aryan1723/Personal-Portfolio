import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center md:p-12 text-gray-900 font-sans selection:bg-[#3800c2] selection:text-white relative overflow-hidden"
      style={{
        backgroundColor: '#f7f8f4',
        backgroundImage: `radial-gradient(circle, #c4b5d8 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }}
    >
      {/* Soft ambient glow blobs */}
      <div className="pointer-events-none absolute top-[-120px] left-[-80px] w-[420px] h-[420px] rounded-full bg-[#d8c4ff] opacity-25 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-60px] w-[360px] h-[360px] rounded-full bg-[#b8d0ff] opacity-20 blur-[80px]" />

      {/* Card container — full screen on mobile, floating card on desktop */}
      <div className="w-full md:max-w-[1280px] h-screen md:h-[85vh] md:min-h-[700px] bg-white md:rounded-xl md:shadow-lg md:border md:border-gray-400 flex overflow-hidden relative">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 relative z-10 h-full overflow-hidden bg-white">
          <div className="h-full flex flex-col pt-16 px-4 pb-20 md:pt-12 md:px-12 md:pb-28 relative overflow-y-auto no-scrollbar">
            <Outlet />
          </div>
          {/* Bottom Blush Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5eeff] to-transparent pointer-events-none z-20"></div>
        </main>
      </div>
    </div>
  );
};

export default Layout;

