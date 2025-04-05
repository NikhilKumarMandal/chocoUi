import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NavbarComForUser from "./pages/NavbarPage.jsx";
import { DocsPage } from "./pages/DocsPage.jsx";
import BentoPage from "./pages/BentoPage.jsx";
import FooterPage from "./pages/FooterPage.jsx";
import CardPage from "./pages/CardPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />}/>

      <Route path="/dashboard" element={<Layout />}>
        <Route path="navbar" element={<NavbarComForUser />}/>
        <Route path="bento" element={<BentoPage />} />
        <Route path="footer" element={<FooterPage />} />
        <Route path="card" element={<CardPage />} />
      </Route>
      <Route path="/docs" element={<DocsPage />}/>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
