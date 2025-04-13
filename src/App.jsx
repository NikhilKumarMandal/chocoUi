import React from "react";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import NavbarV2 from "./components/Navbar/NavbarV2";

const App = () => {
  return (
    <>
      <NavbarV2 />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default App;
