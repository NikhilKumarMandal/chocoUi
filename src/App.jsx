import React from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Docs from "./components/Docs/Docs";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Docs />
        <Outlet />
      </Layout>
    </>
  );
};

export default App;

// import { Outlet } from "react-router-dom";
// // import Sidebar from "./components/Sidebar/Sidebar";

// import Navbar from "./components/Navbar/Navbar";
// import LeftSidebar from "./components/Sidebar/LeftSidebar";
// import RightSidebar from "./components/Sidebar/RightSidebar";

// function Layout() {
//   return (
//     <div className="min-h-screen bg-white flex">
//       <Navbar />
//       <LeftSidebar />

//       <main className="flex-1 p-4 mt-20 md:p-6 flex items-center justify-center">
//         <main className="flex-1 p-4 md:p-6"></main>
//         <Outlet />
//       </main>

//       <RightSidebar />
//     </div>
//   );
// }

// export default Layout;
