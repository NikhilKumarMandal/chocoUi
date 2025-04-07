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
import AvatarPage from "./pages/AvatarPage.jsx";
import Breadcrumb from "./pages/Breadcrumb.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import FormPage from "./pages/FormPage.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import PricingSection from "./pages/PricingPage.jsx";
import SkeletonPage from "./pages/SkeletonPage.jsx";
import TablePage from "./pages/TablePage.jsx";
import TogglePage from "./pages/TogglePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />

      <Route path="/dashboard" element={<Layout />}>
        <Route path="navbar" element={<NavbarComForUser />} />
        <Route path="bento" element={<BentoPage />} />
        <Route path="footer" element={<FooterPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="avatar" element={<AvatarPage />} />
        <Route path="breadcrumb" element={<Breadcrumb />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="hero" element={<HeroPage />} />
        <Route path="pricing" element={<PricingSection />} />
        <Route path="skeleton" element={<SkeletonPage />} />
        <Route path="table" element={<TablePage />} />
        <Route path="toggle" element={<TogglePage />} />
      </Route>
      <Route path="/docs" element={<DocsPage />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
