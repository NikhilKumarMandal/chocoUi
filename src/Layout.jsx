import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";

function Layout() {
  useLocomotiveScroll();
  return (
    <>
      <Sidebar />
      <div data-scroll-container>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
