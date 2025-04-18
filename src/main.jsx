import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Toaster } from "sonner";
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
import InputPage from "./pages/InputPage.jsx";
import LoaderPage from "./pages/LoaderPage.jsx";
import FileUpload from "./pages/FileUploadPage.jsx";
import ButtonPage from "./pages/ButtonPage.jsx";
import FeedLayout from "./components/Feedback/FeedLayout.jsx";
import TemplatePage from "./pages/TemplatePage.jsx";
import CarouselPage from "./pages/CarouselPage.jsx";
import TextAreaPage from "./pages/TextAreaPage.jsx";
import StepperPage from "./pages/StepperPage.jsx";
import AlertPage from "./pages/AlertPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import PopoverPage from "./pages/PopoverPage.jsx";
import ModalPage from "./pages/ModalPage.jsx";
import TooltipPage from "./pages/TooltipPage.jsx";
import TabsPage from "./pages/TabsPage.jsx";
import PaginationPage from "./pages/PaginationPage.jsx";
import FileUploadPage from "./pages/FileUploadPage.jsx";
import StoreButtonsPage from "./pages/StoreButtonsPage.jsx";
import FeedbackAlertPage from "./pages/FeedbackAlertPage.jsx";
import ProgressbarPage from "./pages/ProgressbarPage.jsx";
import PasswordPage from "./pages/PasswordPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<App />}>
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="alert" element={<AlertPage />} />
        <Route path="animation" element={<AnimationPage />} />
        <Route path="avatar" element={<AvatarPage />} />
        <Route path="badge" element={<BadgePage />} />
        <Route path="banner" element={<BannerPage />} />
        <Route path="bento" element={<BentoPage />} />
        <Route path="breadcrumb" element={<Breadcrumb />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="carousel" element={<CarouselPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />
        <Route path="combobox" element={<ComboboxPage />} />
        <Route path="cta" element={<CTAPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="feedbackalert" element={<FeedbackAlertPage />} />
        <Route path="fileUpload" element={<FileUpload />} />
        <Route path="fileupload" element={<FileUploadPage />} />
        <Route path="footer" element={<FooterPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="hero" element={<HeroPage />} />
        <Route path="input" element={<InputPage />} />
        <Route path="loader" element={<LoaderPage />} />
        <Route path="modal" element={<ModalPage />} />
        <Route path="navbar" element={<NavbarPage />} />
        <Route path="pagination" element={<PaginationPage />} />
        <Route path="password" element={<PasswordPage />} />
        <Route path="popover" element={<PopoverPage />} />
        <Route path="pricing" element={<PricingSection />} />
        <Route path="progressbar" element={<ProgressbarPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="skeleton" element={<SkeletonPage />} />
        <Route path="stepper" element={<StepperPage />} />
        <Route path="storebuttons" element={<StoreButtonsPage />} />
        <Route path="tabs" element={<TabsPage />} />
        <Route path="table" element={<TablePage />} />
        <Route path="textArea" element={<TextAreaPage />} />
        <Route path="toggle" element={<TogglePage />} />
        <Route path="tooltip" element={<TooltipPage />} />
      </Route>

      <Route path="/docs" element={<DocsPage />} />
      <Route path="/feedback" element={<FeedLayout />} />
      <Route path="/template" element={<TemplatePage />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
);
