import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";


function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6" >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
