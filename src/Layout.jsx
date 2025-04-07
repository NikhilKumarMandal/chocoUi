import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
// import useLocomotiveScroll from "./hooks/useLocomotiveScroll";

function Layout() {
  // useLocomotiveScroll();
  return (
    <div className="min-h-screen bg-white flex">
      <Navbar />
      <Sidebar />
      <main className="flex-1 p-4 mt-20 md:p-6 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
