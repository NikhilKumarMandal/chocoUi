import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import NavbarPage from "./pages/NavbarPage.jsx";
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
import AccordionPage from "./pages/AccordionPage.jsx";
import AnimationPage from "./pages/AnimationPage.jsx";
import BadgePage from "./pages/BadgePage.jsx";
import BannerPage from "./pages/BannerPage.jsx";
import CheckboxPage from "./pages/CheckboxPage.jsx";
import ComboboxPage from "./pages/ComboboxPage.jsx";
import CTAPage from "./pages/CTAPage.jsx";
import DropdownPage from "./pages/DropdownPage.jsx";
import App from "./App.jsx";
import Docs from "./components/Docs/Docs.jsx";
import FeedbackPage from "./components/Feedback/Feedback.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />

      <Route path="/dashboard" element={<App />}>
        <Route path="docs" element={<Docs />} />
        <Route path="navbar" element={<NavbarPage />} />
        <Route path="bento" element={<BentoPage />} />
        <Route path="footer" element={<FooterPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="avatar" element={<AvatarPage />} />
        <Route path="breadcrumb" element={<Breadcrumb />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="hero" element={<HeroPage />} />
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="animation" element={<AnimationPage />} />
        <Route path="badge" element={<BadgePage />} />
        <Route path="banner" element={<BannerPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />
        <Route path="combobox" element={<ComboboxPage />} />
        <Route path="cta" element={<CTAPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="pricing" element={<PricingSection />} />
        <Route path="skeleton" element={<SkeletonPage />} />
        <Route path="table" element={<TablePage />} />
        <Route path="toggle" element={<TogglePage />} />
      </Route>
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
