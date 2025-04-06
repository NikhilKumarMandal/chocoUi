import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";

function Layout() {
  useLocomotiveScroll();
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6" data-scroll-container>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
