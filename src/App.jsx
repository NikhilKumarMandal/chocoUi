import React from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default App;